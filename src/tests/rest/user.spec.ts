import { test, expect } from '@playwright/test';
import { ApiFactory } from '../../factory/factorymethod';
import { AuthTokenGen } from '../../utils/AuthTokenGen';
import userData from '../../data/bookingdata.json';
import updateData from '../../data/updatedata.json';

import Ajv from 'ajv';
import userSchema from '../../schemas/userSchema.json';

const api = (request: any) => ApiFactory.BookingApi(request);

const ajv = new Ajv({ allErrors: true });
const validateCreateSchema = ajv.compile(userSchema);

test.describe('Booking API Request Flow', () => {

  let bookingId: number;

  test.beforeAll(async ({ request }) => {
    const createRes = await api(request).createBooking(userData);
    const createBody = await createRes.json();

    bookingId = createBody.bookingid;
  });

  // 🟢 CREATE + SCHEMA VALIDATION
  test('Create Booking', async ({ request }) => {

    const res = await api(request).createBooking(userData);

    expect(res.status()).toBe(200);

    const body = await res.json();

    const isValid = validateCreateSchema(body);

    if (!isValid) {
      console.log('❌ Schema Errors:', validateCreateSchema.errors);
    }

    expect(isValid).toBe(true);

    console.log('✅ CREATE RESPONSE:', body);
  });

  // 🟢 GET BOOKING
  test('Get Booking', async ({ request }) => {

    const res = await api(request).getBooking(bookingId);

    expect(res.status()).toBe(200);

    const body = await res.json();

    console.log('📦 GET RESPONSE:', body);
  });

  // 🟡 UPDATE BOOKING
  test('Update Booking', async ({ request }) => {

    const token = await AuthTokenGen.generateToken(request);

    const res = await api(request).updateBooking(
      bookingId,
      updateData,
      token
    );

    expect(res.status()).toBe(200);

    const body = await res.json();

    console.log('✏️ UPDATE RESPONSE:', body);
  });

  // 🔴 DELETE BOOKING
  test('Delete Booking', async ({ request }) => {

    const token = await AuthTokenGen.generateToken(request);

    const res = await api(request).deleteBooking(
      bookingId,
      token
    );

    expect(res.status()).toBe(201);

    console.log('🗑️ DELETE STATUS:', res.status());
  });

});
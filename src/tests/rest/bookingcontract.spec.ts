import { test, expect } from '@playwright/test';
import { BookingApi } from '../../api/BookingApi';
import bookingData from '../../data/bookingdata.json';
import { YamlReader } from '../../contract/yamlReader';
import { validateSchema } from '../../schemas/schemaValidator';
import { ApiFactory } from '../../factory/factorymethod';

test.describe('Booking Contract Validation', () => {

test('Create Booking Contract Validation', async ({ request }) => {

// Read Swagger Contract
const swagger = YamlReader.readYaml('./contracts/swagger.yaml');

// Extract Create Booking Response Schema
const responseSchema =
swagger.paths['/booking']
.post
.responses['200']
.content['application/json']
.schema;

const bookingApi = ApiFactory.BookingApi(request);

// Create Booking
const response = await bookingApi.createBooking(bookingData);

// Status Code Validation
expect(response.status()).toBe(200);

// Endpoint Validation
expect(response.url()).toContain('/booking');

// Header Validation
const headers = response.headers();

expect(headers['content-type'])
.toContain('application/json');

// Response Body
const body = await response.json();

// Contract Validation
expect(
validateSchema(responseSchema, body)
).toBeTruthy();

// Business Validation
expect(body.booking.firstname)
.toBe(bookingData.firstname);

expect(body.booking.lastname)
.toBe(bookingData.lastname);

expect(body.booking.totalprice)
.toBe(bookingData.totalprice);

expect(body.booking.depositpaid)
.toBe(bookingData.depositpaid);

console.log('✅ Create Booking Contract Validation Passed');
});
});

import { BaseApi } from './BaseApi';

export class BookingApi extends BaseApi {

  private endpoints = {
    createBooking: '/booking',
    getBooking: (id: number) => `/booking/${id}`,
    updateBooking: (id: number) => `/booking/${id}`,
    deleteBooking: (id: number) => `/booking/${id}`
  };

  createBooking(data: any) {
    return this.post(this.endpoints.createBooking, data);
  }

  getBooking(id: number) {
    return this.get(this.endpoints.getBooking(id));
  }

  updateBooking(id: number, data: any, token?: string) {
    return this.put(this.endpoints.updateBooking(id), data, token ? {
      Cookie: `token=${token}`
    } : undefined);
  }

  deleteBooking(id: number, token?: string) {
    return this.delete(this.endpoints.deleteBooking(id), token ? {
      Cookie: `token=${token}`
    } : undefined);
  }
}
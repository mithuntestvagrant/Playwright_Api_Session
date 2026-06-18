import { APIRequestContext } from '@playwright/test';
import { BookingApi } from '../api/BookingApi';
import { ProductApi } from '../api/filterApi';
import { GraphQLClient } from '../api/GraphqlClient';

export class ApiFactory {

    

    static BookingApi(request: APIRequestContext): BookingApi {
        return new BookingApi(request);
    }

    static ProductApi(request: APIRequestContext) {
        return new ProductApi(request); 
    }       
    
    static GraphQLClient(request: APIRequestContext) {
        return new GraphQLClient(request);
    }
}
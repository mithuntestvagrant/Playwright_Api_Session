import { test, expect } from '@playwright/test';
import { ProductApi } from '../../api/filterApi';

test('Filter products by title', async ({ request }) => {

    const productApi = new ProductApi(request);

    const response = await productApi.filterByTitle('Classic');

   expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.length).toBeGreaterThan(0);

    for (const product of body) {
        expect(product.title.toLowerCase()).toContain('classic');
    }

    console.log(body);
});
import { test, expect } from '@playwright/test';
import users from '../data/users.json';
import { LoginPage } from '../pageobjects/LoginPage.js';
import { InventoryPage } from '../pageobjects/InventoryPage.js';
import { InventoryItemPage } from '../pageobjects/InventoryItemPage.js';

test.describe('Add product to cart test', () => {

  test('Add product to cart', async ({ page }) => {    
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);  
    const inventoryItemPage = new InventoryItemPage(page);    

    await loginPage.navigate();
    await loginPage.login(users.standard_user.username, users.standard_user.password);  
    
    await inventoryPage.selectProduct();

    const productDetails = await inventoryItemPage.checkProductDetails(); 
    expect(productDetails.name).toContain('Sauce Labs Backpack'); 
    expect(productDetails.description).toContain('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'); 
    expect(productDetails.price).toBe('$29.99'); 
    
    await inventoryItemPage.addProductToCart();
    await inventoryItemPage.goToCart();
    
    const productInCart = await inventoryItemPage.checkProductInCart();
    expect(productInCart).toBe(true); 

    await page.screenshot({ path: './test-result/screenshot.png', fullPage: true });
    
  });
});
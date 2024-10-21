import { test, expect } from '@playwright/test';
import users from "../data/users.json";
import { LoginPage } from '../pageobjects/LoginPage';
import { InventoryPage } from '../pageobjects/InventoryPage';
import { InventoryItemPage } from '../pageobjects/InventoryItemPage';
import { CartPage } from '../pageobjects/CartPage';


test.describe('Go to checkout', () => {

    test('Go to checkout step one', async ({ page }) => {    
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);  
      const inventoryItemPage = new InventoryItemPage(page);   
      const cartPage = new CartPage(page);
  
      await loginPage.navigate();
      await loginPage.login(users.standard_user.username, users.standard_user.password);       
      await inventoryPage.selectProduct();
      await inventoryItemPage.addProductToCart();
      await inventoryItemPage.goToCart();
  
      const productDetails = await cartPage.checkProductDetails(); 
      expect(productDetails.name).toContain('Sauce Labs Backpack'); 
      expect(productDetails.description).toContain('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.'); 
      expect(productDetails.price).toBe('$29.99');
      
      await cartPage.goToCheckout();  
      
      await page.screenshot({ path: './test-result/screenshot.png', fullPage: true });
      
    });
  });
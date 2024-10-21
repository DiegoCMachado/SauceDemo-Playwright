import { test, expect } from '@playwright/test';
import users from "../data/users.json";
import { LoginPage } from '../pageobjects/LoginPage';
import { InventoryPage } from '../pageobjects/InventoryPage';
import { InventoryItemPage } from '../pageobjects/InventoryItemPage';
import { CartPage } from '../pageobjects/CartPage';
import { CheckoutStepOnePage } from '../pageobjects/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pageobjects/CheckoutStepTwoPage';

test.describe('Complete purchase', () => {

    test('Complete purchase', async ({ page }) => {    
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);  
      const inventoryItemPage = new InventoryItemPage(page);   
      const cartPage = new CartPage(page);
      const checkoutStepOnePage = new CheckoutStepOnePage(page);
      const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
  
      await loginPage.navigate();
      await loginPage.login(users.standard_user.username, users.standard_user.password);       
      await inventoryPage.selectProduct();
      await inventoryItemPage.addProductToCart();
      await inventoryItemPage.goToCart();
      await cartPage.goToCheckout();
      await checkoutStepOnePage.fillCheckoutInfo();
      await checkoutStepOnePage.goToCheckoutStepTwo();  
      
      const productDetails = await checkoutStepTwoPage.checkProductDetails();
      expect(productDetails.name).toContain('Sauce Labs Backpack');       
      expect(productDetails.price).toBe('$29.99'); 

      await checkoutStepTwoPage.completePurchase();  
      
      await page.screenshot({ path: './test-result/screenshot.png', fullPage: true });
       
    });
  });
import { test, expect } from '@playwright/test';
import users from "../data/users.json";
import { LoginPage } from '../pageobjects/LoginPage';
import { InventoryPage } from '../pageobjects/InventoryPage';
import { InventoryItemPage } from '../pageobjects/InventoryItemPage';
import { CartPage } from '../pageobjects/CartPage';
import { CheckoutStepOnePage } from '../pageobjects/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pageobjects/CheckoutStepTwoPage';
import { CompletePage } from '../pageobjects/CompletePage';


test.describe('Go back home', () => {

    test('Go back home', async ({ page }) => {    
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);  
      const inventoryItemPage = new InventoryItemPage(page);   
      const cartPage = new CartPage(page);
      const checkoutStepOnePage = new CheckoutStepOnePage(page);
      const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
      const completePage = new CompletePage(page);
  
      await loginPage.navigate();
      await loginPage.login(users.standard_user.username, users.standard_user.password);      
      await inventoryPage.selectProduct();
      await inventoryItemPage.addProductToCart();
      await inventoryItemPage.goToCart();
      await cartPage.goToCheckout();
      await checkoutStepOnePage.fillCheckoutInfo();
      await checkoutStepOnePage.goToCheckoutStepTwo();        
      await checkoutStepTwoPage.completePurchase();    
 
      const messages = await completePage.checkMessages(); 
      expect(messages.header).toContain('Thank you for your order!'); 
      expect(messages.text).toContain('Your order has been dispatched, and will arrive just as fast as the pony can get there!');    

      await completePage.goBackHome();   
      
      await page.screenshot({ path: './test-result/screenshot.png', fullPage: true });
      
    });
  });
import { test, expect } from '@playwright/test';
import users from "../data/users.json";
import { LoginPage } from '../pageobjects/LoginPage';
import { InventoryPage } from '../pageobjects/InventoryPage';

test.describe('check product', () => {

  test('Check product details', async ({ page }) => {    
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);    

    await loginPage.navigate();
    await loginPage.login(users.standard_user.username, users.standard_user.password);
    
    await inventoryPage.selectProduct();  
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');      

    await page.screenshot({ path: './test-result/screenshot.png', fullPage: true });
    
  });

});
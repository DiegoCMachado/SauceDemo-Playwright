import { test, expect } from '@playwright/test';
import users from "../data/users.json"; 
import { LoginPage } from '../pageobjects/LoginPage';

test.describe('Login tests', () => {

  test('Login with standard user', async ({ page }) => {    
    const loginPage = new LoginPage(page);  
    await loginPage.navigate();  
    await loginPage.login(users.standard_user.username, users.standard_user.password); 
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Login with locked out user', async ({ page }) => {    
    const loginPage = new LoginPage(page);  
    await loginPage.navigate();  
    await loginPage.login(users.locked_out_user.username, users.locked_out_user.password); 
    const errorMessage = await loginPage.errorMessage();
    expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out.');
    
  });

  test('Login with problem user', async ({ page }) => {    
    const loginPage = new LoginPage(page);  
    await loginPage.navigate();  
    await loginPage.login(users.problem_user.username, users.problem_user.password);  

    const imageSrc = await loginPage.getProductImageSrc(); 
    expect(imageSrc).not.toContain('jpgWithGarbageOnItToBreakTheUrl');
   
    await page.screenshot({ path: './test-result/screenshot.png', fullPage: true });
  });

})

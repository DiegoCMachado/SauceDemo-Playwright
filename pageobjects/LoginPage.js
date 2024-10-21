export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#user-name';   
    this.passwordInput = '#password';    
    this.loginButton = '#login-button';  
    this.errorMessageSelector = '.error-message-container'; 
    this.productImage = '#item_4_img_link > img'
  }  

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);  
    await this.page.fill(this.passwordInput, password);  
    await this.page.click(this.loginButton);             
  }

  async errorMessage() {    
    const messageElement = await this.page.locator(this.errorMessageSelector);
    return await messageElement.textContent();
  }

  async getProductImageSrc() {
    const productImage = this.page.locator(this.productImage);
    const imageSrc = await productImage.getAttribute('src');
    return imageSrc; 
}

 
  
}


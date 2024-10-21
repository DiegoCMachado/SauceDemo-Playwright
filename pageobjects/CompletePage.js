export class CompletePage {
  constructor(page) {
      this.page = page;
      this.completeHeader = '.complete-header';
      this.completeText = '.complete-text'; 
      this.backHomeButton = '#back-to-products';         
  }

  async checkMessages() {
      const header = await this.page.locator(this.completeHeader).textContent();
      const text = await this.page.locator(this.completeText).textContent();        

      return { header, text };
  }

  async goBackHome() {
      await this.page.click(this.backHomeButton);        
  }
}


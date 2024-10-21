export class CheckoutStepTwoPage {
    constructor(page) {
        this.page = page;
        this.productName = '.inventory_item_name';         
        this.productPrice = '.inventory_item_price'; 
        this.finishButton = '.cart_button';          
      }

      async checkProductDetails() {
        const name = await this.page.locator(this.productName).textContent();        
        const price = await this.page.locator(this.productPrice).textContent();

        return {name, price};
    }

    async completePurchase() {
        await this.page.click(this.finishButton);
      }
}

module.exports = { CheckoutStepTwoPage };
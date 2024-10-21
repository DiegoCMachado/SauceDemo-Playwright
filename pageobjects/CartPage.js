export class CartPage {
    constructor(page) {
        this.page = page;
        this.productName = '#item_4_title_link'
        this.productDescription = '.inventory_item_desc'; 
        this.productPrice = '.inventory_item_price'; 
        this.checkoutButton = '.checkout_button';         
      }

      async checkProductDetails() {
        const name = await this.page.locator(this.productName).textContent();
        const description = await this.page.locator(this.productDescription).textContent();
        const price = await this.page.locator(this.productPrice).textContent();

        return {name, description, price};
    }

    async goToCheckout() {
        await this.page.click(this.checkoutButton);
      }
}


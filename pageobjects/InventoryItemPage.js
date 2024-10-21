export class InventoryItemPage {
    constructor(page) {
      this.page = page;
      this.productName = '.inventory_details_name'
      this.productDescription = '.inventory_details_desc'; 
      this.productPrice = '.inventory_details_price'; 
      this.AddToCartButton = '.btn_primary'; 
      this.cartIcon = '.shopping_cart_link'; 
    }

    async checkProductDetails() {
        const name = await this.page.locator(this.productName).textContent();
        const description = await this.page.locator(this.productDescription).textContent();
        const price = await this.page.locator(this.productPrice).textContent();

        return {name, description, price};
    }
  
    async addProductToCart() {
      await this.page.click(this.AddToCartButton);
    }
  
    async goToCart() {
      await this.page.click(this.cartIcon);
    }
  
    async checkProductInCart() {
      const countIcon = await this.page.locator('.shopping_cart_badge'); 
      const itemCount = await countIcon.textContent(); 
      return itemCount === '1'; 
  }
}


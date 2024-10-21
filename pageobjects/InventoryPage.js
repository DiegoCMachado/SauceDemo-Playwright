export class InventoryPage {
    constructor(page) {
      this.page = page;
      this.productName = '#item_4_title_link'
     
    }
     
    async selectProduct() {
      await this.page.click(this.productName);
    }  
   
}
  


const { faker } = require('@faker-js/faker');

export class CheckoutStepOnePage {
    constructor(page) {
        this.page = page;
        this.firstName = '#first-name'
        this.lastName = '#last-name'; 
        this.postalCode = '#postal-code'; 
        this.continueButton = '.cart_button';         
      }

      async fillCheckoutInfo() {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const postalCode = faker.location.zipCode();

        await this.page.fill(this.firstName, firstName);
        await this.page.fill(this.lastName, lastName);
        await this.page.fill(this.postalCode, postalCode);
    }

    async goToCheckoutStepTwo() {
        await this.page.click(this.continueButton);
      }
}


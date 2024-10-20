# SauceDemo Testing with Playwright
This repository contains an automated test suite for an e-commerce web application using the Playwright testing framework. 
* Application in test: https://www.saucedemo.com/

**Features**
* Page Object Model (POM): Enhances test maintenance and readability.
* Asynchronous JavaScript: Uses async/await for handling asynchronous operations.
* Data-Driven Testing: External JSON files for test data management.
* Running tests in Chromim, Firefox and Safari
* Tests running in parallell
* Detailed reports including screenshots of failures

**Technologies**
* Javascript
* VSCdode
* Playwright
* Faker

**Getting Started**
**Installation**
* Clone the repository:
* git clone https://github.com/DiegoCMachado/SauceDemo-Playwright.git

**Run**:
* npm install

**Running the Tests - Headless mode**
* npx playwright test

**Running the Tests - Headed mode**
* npx playwright test --Headed

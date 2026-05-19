Wipro Capstone Project
Enterprise UI Automation Testing Framework using Playwright

Playwright | JavaScript | Cross-Browser Testing | HTML Reporting | POM Framework


PROJECT OVERVIEW

This project is a professional End-to-End UI Automation Testing Framework developed using Playwright for the SauceDemo (Swag Labs) e-commerce application.

The framework is designed to automate and validate critical business workflows including:

• User Authentication
• Product Catalog Validation
• Product Sorting
• Shopping Cart Operations
• Checkout Form Validation
• Order Calculation Verification
• Cross-Browser Execution

The project follows industry-standard automation practices such as Page Object Model (POM), reusable components, parallel execution, and automated reporting.


PROJECT DETAILS

Target Website     : https://www.saucedemo.com
Framework          : Playwright v1.4x+
Programming        : JavaScript / TypeScript
Design Pattern     : Page Object Model (POM)
Browsers Tested    : Chromium, Firefox, WebKit
Reporting          : Playwright HTML Report
Total Test Cases   : 120+


PROJECT STRUCTURE

project/

pages/
   LoginPage.js
   ProductPage.js
   CartPage.js
   CheckoutPage.js
   OrderPage.js

tests/
   auth.spec.js
   product.spec.js
   cart.spec.js
   checkout.spec.js
   order.spec.js

utils/
   helper.js
   testData.js

playwright.config.js
package.json
README.md


SERVICES & TEST COVERAGE

1. Authentication & Security
   • Valid Login
   • Invalid Login
   • Session Handling
   • Error Message Validation

2. Product Catalog & Sorting
   • Product Sorting
   • Product Details Validation
   • Catalog Verification

3. Cart Operations
   • Add Product to Cart
   • Remove Product from Cart
   • Cart Badge Validation

4. Checkout Validation
   • Form Validation
   • Empty Field Validation
   • Error Message Verification

5. Order Calculations
   • Subtotal Verification
   • Tax Validation
   • Final Total Verification

6. Cross-Browser Testing
   • Chromium Execution
   • Firefox Execution
   • WebKit Execution


KEY FEATURES

• Page Object Model (POM)
• Reusable Automation Components
• Cross-Browser Testing
• Parallel Test Execution
• HTML Reporting
• Screenshot Capture on Failure
• Scalable Framework Design
• Assertion-Based Validation


PLANNED TEST EXECUTION

Core Test Scenarios      : 40
Browser Configurations   : 3
Total Planned Tests      : 120


GETTING STARTED

Prerequisites

• Node.js v18+
• npm v9+
• Visual Studio Code


INSTALLATION

npm install

npx playwright install


RUNNING TESTS

Run All Tests
npm test

Run Tests in Headed Mode
npm run test:headed

Open HTML Report
npx playwright show-report


CONCLUSION

This project demonstrates a scalable and enterprise-level UI Automation Testing Framework using Playwright. It showcases modern automation practices including Page Object Model (POM), reusable test architecture, automated reporting, and cross-browser execution for efficient and reliable software testing.
Wipro Capstone Project

Playwright | JavaScript | Cross-Browser Testing | HTML Reporting

Project Overview

This project is an enterprise-level UI Automation Testing Framework developed using Playwright for the SauceDemo (Swag Labs) e-commerce application. The framework validates important workflows such as login authentication, product sorting, cart management, checkout validation, order calculations, and cross-browser execution.

Detail                    Info

Target Site               https://www.saucedemo.com
Framework                 Playwright v1.4x+
Language                  JavaScript / TypeScript
Pattern                   Page Object Model (POM)
Reports                   Playwright HTML Report
Browsers                  Chromium, Firefox, WebKit
Total Tests               120 Test Cases

Project Structure

project/
│
├── pages/
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── OrderPage.js
│
├── tests/
│   ├── auth.spec.js
│   ├── product.spec.js
│   ├── cart.spec.js
│   ├── checkout.spec.js
│   └── order.spec.js
│
├── utils/
│   ├── helper.js
│   └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md

Services & Test Coverage

1. Authentication & Security
   - Valid login
   - Invalid login
   - Session handling
   - Error validation

2. Product Catalog & Sorting
   - Product sorting
   - Product details
   - Catalog validation

3. Cart Operations
   - Add/remove items
   - Cart badge validation

4. Checkout Validation
   - Form validation
   - Error message verification

5. Order Calculations
   - Subtotal validation
   - Tax validation
   - Total amount validation

6. Cross-Browser Testing
   - Execution on Chromium
   - Execution on Firefox
   - Execution on WebKit

Key Features

- Page Object Model (POM)
- Cross-Browser Testing
- Reusable Test Scripts
- HTML Reporting
- Parallel Execution
- Screenshot Capture on Failure

Planned Test Cases

Core Test Scenarios      : 40
Browser Configurations   : 3
Total Test Cases         : 120

Getting Started

Prerequisites

- Node.js v18+
- npm v9+
- VS Code

Installation

npm install

npx playwright install

Running Tests

npm test

npm run test:headed

npx playwright show-report

Conclusion

This project demonstrates an enterprise-level automation testing framework using Playwright with features like Page Object Model (POM), reusable automation scripts, cross-browser testing, and automated reporting for efficient UI testing.
Cypress TypeScript UI Tests for Amazon
This project automates UI testing for Amazon using Cypress and TypeScript. It verifies key user flows such as:

🔍 Searching for products

🛒 Adding items to the cart

🧭 Navigating through customer service options

📁 Project Structure
cypress-typescript/
├── cypress/
│   ├── e2e/               # Test specs
│   ├── fixtures/          # Test data
│   └── support/           # Custom commands and support files
├── cypress.config.ts      # Cypress configuration in TypeScript
├── Dockerfile             # Tests image
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
🚀 Getting Started
1. Clone the Repository
   bash
   Copy
   Edit
   git clone https://github.com/your-repo/cypress-typescript.git
   cd cypress-typescript
2. Install Dependencies
   bash
   Copy
   Edit
   npm install
3. Run Cypress Locally
   bash
   Copy
   Edit
   npx cypress open
   This will open the Cypress Test Runner UI where you can run individual test specs.

🐳 Running with Docker
If you prefer running tests in a Docker container:

1. Build the Docker Image
   docker build -t cypress-tests .
2. Run Tests Inside the Container
   docker run --rm cypress-tests
   🛠 Tech Stack
   Cypress – UI Testing Framework

TypeScript – Type-safe JavaScript

Docker – Containerization

📌 Notes
Tests are written using Cypress's best practices for readability and maintainability.

Make sure you have Docker installed if using the containerized approach.
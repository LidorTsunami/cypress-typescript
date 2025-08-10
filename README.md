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
   git clone https://github.com/your-repo/cypress-typescript.git

2. Install Dependencies
   npm install
   
4. Run Cypress Locally
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

We have set up a GitHub Actions workflow that automatically runs the Cypress UI tests inside a Docker container every time code is merged into the master branch. This pipeline performs the following steps:
* Checks out the latest code from the repository
* Builds a Docker image containing the test environment and code
* Runs the Cypress tests inside this container
This automated process ensures that the UI tests are executed consistently on every merge, helping maintain code quality and catch any regressions early before deployment.

TypeScript – Type-safe JavaScript

Docker – Containerization

📌 Notes
Tests are written using Cypress's best practices for readability and maintainability.

Make sure you have Docker installed if using the containerized approach.

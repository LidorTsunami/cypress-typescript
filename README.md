# Cypress TypeScript UI Tests for Amazon

This project automates **UI testing** for Amazon using **Cypress** and **TypeScript**.  
It verifies key user flows such as:

- 🔍 Searching for products
- 🛒 Adding items to the cart
- 🧭 Navigating through customer service options

---

## 📁 Project Structure
cypress-typescript/
├── cypress/
│ ├── e2e/ # Test specs
│ ├── fixtures/ # Test data
│ └── support/ # Custom commands and support files
├── cypress.config.ts # Cypress configuration in TypeScript
├── Dockerfile # Tests image
├── package.json # Dependencies and scripts
└── tsconfig.json # TypeScript configuration
---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/LidorTsunami/cypress-typescript
cd cypress-typescript
```

 Install Dependencies
```bash
npm install
```

3️⃣ Run Cypress Locally
```bash
npx cypress open
```
This will open the Cypress Test Runner UI, where you can run individual test specs.

🐳 Running with Docker
If you prefer running tests inside a Docker container:
Build the Docker Image
```bash
docker build -t cypress-tests .
```

Run Tests Inside the Container
```bash
docker run --rm cypress-tests
```
🛠 Tech Stack
* Cypress – UI Testing Framework

* TypeScript – Type-safe JavaScript

* Docker – Containerization

📌 Notes
Tests follow Cypress best practices for readability and maintainability.

Ensure Docker is installed if you plan to use the containerized approach.

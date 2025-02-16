# Swag_Labs_Assingment
Exam Week 2: SQA: Manual &amp; Automated Testing

# Playwright Test Execution Guide

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)

## Steps to Run Tests

### 1️⃣ Extract the Project Files
Unzip the target folder to access the project files.

### 2️⃣ Open the Project in an IDE
Use any preferred IDE (e.g., **VS Code**, **Aqua**) to open the extracted project folder.

### 3️⃣ Navigate to the Test Directory
- In the IDE, locate and click on the **`tests`** folder to access the test scripts.

### 4️⃣ Open the Terminal
- Inside the IDE, open the **Terminal** (or command line) to run Playwright commands.

### 5️⃣ Run Playwright Tests
Execute the following commands one by one:

#### Run All Tests
```sh
npx playwright test
npx playwright test --project=chromium --headed
```

#### Run Individual Test Cases in Chromium (Headed Mode)
```sh
npx playwright test 1_locked_out_user.spec.js --project=chromium --headed
npx playwright test 2_standard_user.spec.js --project=chromium --headed
npx playwright test 3_performance_glitch_user.spec.js --project=chromium --headed
```

### 6️⃣ View Test Reports
After execution, generate and view the test report:
```sh
npx playwright show-report
```

Or we can open the **playwright-report** folder from the project structure and select the **index.html** file after every execution with any browser.

## Additional Notes
- Ensure **Playwright** is installed in your project. If not, install it using:
  ```sh
  npm install --save-dev playwright
  ```
- If tests fail due to browser dependencies, install them using:
  ```sh
  npx playwright install
  ```

Happy Testing! 🚀

🎭 Playwright Test Execution Guide
This project contains automated tests using Playwright. Follow the steps below to run the tests smoothly.

📁 Project Setup
🔹 Step 1: Unzip the Project
Unzip the downloaded file to your desired location.

🔹 Step 2: Open the Project in an IDE
Use any code editor or IDE (such as VS Code, WebStorm, etc.) to open the project folder.

🔹 Step 3: Navigate to the Tests
Go to the tests folder in the project.

💻 Run the Tests from Terminal
🔹 Step 4: Open Terminal
From within the IDE, open the Terminal window.

🔹 Step 5: Run All Tests
bash
Copy
Edit
npx playwright test

🔹 Step 6: Run Specific Test Files in Headed Mode (Chromium)
bash
Copy
Edit

npx playwright test 1_locked_out_user.spec.js --project=chromium --headed
npx playwright test 2_standard_user.spec.js --project=chromium --headed
npx playwright test 3_performance_glitch_user.spec.js --project=chromium --headed

📊 View Test Report


To open the Playwright test report, run:

bash
Copy
Edit
npx playwright show-report

✅ Requirements
Node.js (v14 or above)

Playwright installed (npm install -D @playwright/test)

# Swag_Labs_Assingment
Exam Week 2: SQA: Manual &amp; Automated Testing

🛠 Branch Information

Note: The actual codebase resides in the master branch. The default branch (main) may not contain the latest updates.

🔄 Switching to the master Branch

To access the latest code, switch to the master branch using the following commands:

git checkout master
git pull origin master

Alternatively, you can visit the master branch directly:



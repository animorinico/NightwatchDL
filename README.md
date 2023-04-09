# NightwatchDL

--Hello!

Preconditions and steps to see the test code and run the tests:

1) Make sure Visual Studio Code is installed
2) Make sure Node is installed on the system
3) Make sure your Chrome version is 112.0
3) To install the project dependencies, please go to the path folder in which you cloned the repo and on a CMD console type "npm install"
    --This will look at the "package.json" file inside the project to install the dependencies.
4) To run the tests please open a CMD command prompt and run this command:
    > npx nightwatch -e chrome

Solution folders:

1) Pages: this folder contains the page objects of the solution (get_in_touch.js contains the objects and functions that we need for the test)
2) Resources: here we have the parameters files with the values (environment.js contains the environment values such as URL)
3) Tests: this folder contains all the test suites (suite_get_in_touch.js contains the tests for Get in Touch form)
4) Utils: here we have the utilities that will be used across all suites (browser_utils.js contains general functions that the tests will use)

Improvements:

1) There might be several improvements to do on the code and also code cleaning of the config files, this is the first time I've used Nightwatch!
2) I would have separated the specified test in two different tests. 
  - The first one would only verify Get in Touch form title and headers.
  - The second one would verify the required fields behavior with its red frame.
  If we have all the tests validating the title and header of it, and then the team decides to change the Title of the Get in Touch form, then all
  the tests would fail. When we see the execution results we will see all tests failing, and that's not accurate neither reflecting what's really 
  happening. 

Thank you!

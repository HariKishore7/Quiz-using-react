This is a Quiz Project, where users can take assessment and when submitting the assesment they will get the result in final as well as percentage.

To run this file please clone the repository "https://github.com/HariKishore7/Quiz-using-react" from GitHub or else please un-Zip the folder.

Please follow the below steps to run the project in your system.

STEP 1: Please type in terminal by entering into the folder like: npm install

PS E:\upraised-quiz> npm install

npm install will install all the dependencies which are present in the package.json to run the project in your system.

STEP 2: Once all the dependencies are installed, type "npm start" like below

PS E:\upraised-quiz> npm start

npm start will run the project on the server, it will run on "http://localhost:3005/"

The reason to make the react project to run on custom port is we're going to run mock-server, where it will run on 3005, so to run our app on different port I have used custom port.

STEP3: Please install json-server to create a mock-server using following command: npm install -g json-server

E:\upraised-quiz> npm install -g json-server

STEP4: Please start mock server in another terminal using following command: json-server --watch src/questions.json

E:\upraised-quiz> json-server --watch src/questions.json

The above command will run the mock server on the port: "http://localhost:3005/questions"

After running the mock-server, please route to the above url, to see the json file.

Please make sure that you start json-server, otherwise questions will not be fethed from the API and it won't show the questions while rendering.



Project Expalnation:

In the first page it will show the home page, where user can start button to start the quiz.

Once he clicked, we're routing it to another url and the quiz questions will be shown one by one after user clicks on next button.

Before the user clicks on next button we are saving the user selected option and time taken for the particular question into the API.

User must select any one option, otherwise we're giving an alert to select one option. Once he selects one option and clicks on next button, we're moving to next question.

For the last question, we're moving the button to Submit, once he submits the button, we're calculating the score and percentage based on the correct and incorrect answers and displaying them.

In the score page, we're giving a button called "start again" to start the quiz again.

The correct answers might help you to check functionality, below are the correct answers:

1. componentDidMount()
2. Virtual DOM
3. A JavaScript compiler
4. 3000
5. 1

Hope you will like it.

Thank you,
Hari Kishore.

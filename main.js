const express = require("express");
const { request } = require("http");

server = express();
server.use(express.json()); //tell server to pass data as json format

function hello(request, response) {
    response.status(200).send("Hello!");
}
//3 paths created below.

router = express.Router();
//router.get("/", hello); URI is this case is /
//creates mapper table which maintains the type of GET request
//api 1
router.get('/', (request, response) => { //telling the server if you are getting a get request then you need to call the function below.
   response.status(200).send("Hello"); //sets status to 200 and sends message hello.
});

//api 2
router.get("/greet", (request, response) => { //create another mapping in the router
    let name = request.query.name; //it will take one parameter from the request and send that response as a message
    //getting the name parameter from request.query.name 
    response.status(200).send(`Hello! ${name}!`)
})

//api 3 Simple api to give you a sum of X + Y
router.get("/sum", (request, response) => {
    let sum = parseInt(request.query.x) + parseInt(request.query.y);
    response.status(200).send(`Sum is: ${sum}`);
});


/*router.get("/user/by-uid", (request, response) => {
    if (request.query.user_id = 1)
    let result = {
        "user_id": 1,
        "first_name": "Fred",
        "last_name" : "Nerk",
        "email" : "fred@nerk.com"
        "phone" : "8888888",
        "plan_id" : 1,
        "signup_date": "12-Aug-2021"
    }
    else result = "not found";
    response.status(200).send(result);
});
*/

router.post("/post-example", (request,response)=> {
    //we will assume that data is coming in request's body in JSON format.
    let name = request.body.name;
    let age = request.body.age;

        response.status(200).send(`Received Name : ${name} and Age: ${age}`);
})


server.use(router);

server.listen(3000);
//port 3000 is the dev standard for node js
//creating this creates a simple backend server that listens to the request.

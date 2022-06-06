const express = require('express');
const cors = require("cors");
const fs = require("fs");
const process = require("process");
const app = express();
const port = process.env.PORT || 8080;
const accessData = require('./haslo.json');
const hasloDB = JSON.parse(JSON.stringify(accessData));

const projectRoutes = require("./routes/projectRoutes");
const bodyParser = require("body-parser");

const mongoose = require('mongoose');

// Connection String to MongoDB
const dbURI = `mongodb+srv://marta:${hasloDB.haslo}@cluster0.w2bha.mongodb.net/rekruter?retryWrites=true&w=majority`;

mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function (result) {
        console.log("Database is connected");
    })
    .catch((err) => console.log(err));


// Apply CORS policy
app.use(cors())

// "Hello from homepage" is shown  when visiting http://localhost:8080/
app.get('/', (req, res) => res.send('Hello from homepage.'));

// Assign the PORT 8080 lub IP serwera to our app
app.listen(port, () => console.log(`Server Running on port: http://localhost:${port}`));

/**bodyParser.json(options)
* Parses the text as JSON and exposes the resulting object on req.body.
*/
app.use(bodyParser.json());

// project routes
app.use('/', projectRoutes); //localhost:8080/project // http://localhost:8080/kandydaci
// app.use("/Project", projectRoutes); http://localhost:8080/project/kandydaci, http://localhost:8080/project/project
// app.use("/Kandydaci", projectRoutes); http://localhost:8080/kandydaci/project, http://localhost:8080/kandydaci/kandydaci

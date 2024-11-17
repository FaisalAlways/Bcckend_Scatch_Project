const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://dev3helpoperation:jLinh8tRSkkY9oAf@cluster0.jqsfv.mongodb.net/scatch?retryWrites=true&w=majority&appName=Cluster0"
)
    .then(function () {
        console.log("connected");
    })
    .catch(function () {
        console.log(err);
    });

    module.exports = mongoose.connection;
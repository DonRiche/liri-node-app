//DOTENV//
require('dotenv').config()
var axios = require('axios');
var fs = require('fs');
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

//SPOTIFY//

var spotify = new Spotify(keys.spotify);


spotify.search({ type: 'track', query: songName })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    });

var songName = process.argv[2];

//OMDB//
var axios = require("axios");
axios.get("http://www.omdbapi.com/?i=" + movieName + "&apikey=6b8d703a").then(
    function (response) {
        console.log("The movie was released: " + response.data);
    })
    .catch(function (error) {
        if (error.response) {

            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    });


var queryUrl = "http://www.omdbapi.com/?i=" + movieName + "&apikey=6b8d703a";

console.log(queryUrl);


require('dotenv').config()

//SPOTIFY//
var axios = require('axios');
var fs = require('fs');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

function ArtistObject(artist, songName, link, album) {
    this.artist = artist;
    this.songName = songName;
    this.link = link;
    this.album = album;
    this.printInfo = function () {
        console.log("Artist: " + this.artist + "\nSong: " + this.songName +
            "\nLink: " + this.link + "\nAlbum: " + this.album);
        console.log("\n-------------\n");
    };
};

spotify
    .request('https://api.spotify.com/v1/' + song + '/7yCPwWs66K8Ba5lFuU2bcx')
    .then(function (data) {
        ArtistObject.artist = data.artist,
            ArtistObject.songName = data.name;
        ArtistObject.link = data.url,
            ArtistObject.album = data.album
    })
    .catch(function (err) {
        console.error('Error occurred: ' + err);
    });

var artist = new ArtistObject(artist, songName, link, album);

artist.printInfo();

var song = process.argv[2];

// Next, we append the text into the "sample.txt" file.
// If the file didn't exist, then it gets created on the fly.
fs.appendFile("random.txt", song, function (err) {

    // If an error was experienced we will log it.
    if (err) {
        console.log(err);
    }

    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
        console.log("Content Added!");
    }

});

//OMDB//
/*axios.get("http://www.omdbapi.com/?i=" + movieName + "&apikey=6b8d703a").then(
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

console.log(queryUrl);*/


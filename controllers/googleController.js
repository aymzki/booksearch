const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {
        params
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }
};

// key=API_KEY AIzaSyDsNnOV7lZFMzcSCzpGAKX7jE06rBF5xHc
$(document).ready( function() {

    var topics = ["cats","dogs","birds"];

    for (var i = 0; i < topics.length; i++) {

        var topicsBtn = $("<button>");

        topicsBtn.addClass("topic-button topic topic-button-color");

        topicsBtn.attr("topic", topics[i]);

        topicsBtn.text(topics[i]);

        $("#buttons").append(topicsBtn);
      }  

    // Event listener for our cat-button
    $(".topic-button").on("click", function() {

    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    // After the data from the AJAX request comes back
        .then(function(response) {

        console.log(response);

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;

        // Creating and storing an image tag
        var catImage = $("<img>");

        // Setting the catImage src attribute to imageUrl
        catImage.attr("src", imageUrl);
        catImage.attr("alt", "cat image");

        // Prepending the catImage to the images div
        $("#images").prepend(catImage);
        });
    });

})
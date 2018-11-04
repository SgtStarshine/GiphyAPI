$(document).ready( function() {

    var topicArray = ["cats","dogs","birds"];

    for (var i = 0; i < topicArray.length; i++) {

        var topicsBtn = $("<button>");

        topicsBtn.addClass("topic topic-button-color");

        topicsBtn.attr("topic", topicArray[i]);

        topicsBtn.text(topicArray[i]);

        $("#buttons").append(topicsBtn);
      }  

    // Event listener
    $("button").on("click", function() {

    var topic = $(this).attr("topic");

    // Storing our giphy API URL for an image
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
        topic + "&api_key=8XD6AWqjbueVXKiGPG33J72nIZNpVGWx&limit=10";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    // After the data from the AJAX request comes back
    .then(function(response) {

        console.log(response);
        
        var results = response.data;

        for (var j = 0; j < results.length; j++) {

            // Creating a div for the gif
            var gifDiv = $("<div>");
            gifDiv.addClass("giffy");

            // Storing the result item's rating
            var rating = results[j].rating;

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + rating);

            // Creating an image tag
            var topicImage = $("<img>");
            topicImage.addClass("image-click");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            topicImage.attr("src", results[j].images.fixed_height_still.url);

            // Appending the paragraph and topicImage we created to the "gifDiv" div we created            
            gifDiv.append(topicImage);
            gifDiv.append(p);

            // Prepending the gifDiv to the "#images" div in the HTML
            $("#images").prepend(gifDiv);
                
            }       
        });
    });

})
//set variable equal to user input
//create button element with upser input
//append button element to screen in first container


$("#addButton").on("click", function (e) {

    e.preventDefault();
    var movieInput = $("#addMovieInput").val().trim();
    console.log(movieInput);


    if (movieInput !== "") {
        $(".buttonDisplay").append(`<button class="movieButton">${movieInput}</button>`);
    }



    $(".movieButton").on("click", function (e) {

        var movieGifSearch = $(".movieButton").text();
        console.log(movieGifSearch);
        var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=a6Zna39740OrKHn6vHZDCM4dYZCnukIh&q=${movieGifSearch}&limit=25&offset=0&rating=G&lang=en`;

        // e.preventDefault();

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

        });


    });

});
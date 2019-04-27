//set variable equal to user input
//create button element with upser input
//append button element to screen in first container



//questions: why is my push function overwriting my array?
var index = 0;
var movies = ["Back to the future", "Sixteen Candles", "Dirty Dancing", "Ghostbusters", "The Breakfast Club"];

$("#addButton").on("click", function (e) {



    e.preventDefault();
    var movieInput = $("#addMovieInput").val().trim();
    console.log(movieInput);


    // $(".buttonDisplay").empty();

    if (movieInput !== "") {
        $(".buttonDisplay").append(`<button class="movieButton" value="${movieInput}">${movieInput}</button>`);
    }



    //document on click

    $('.movieButton').unbind('click');

    $(`.movieButton`).on("click", function (e) {

        var movieGifSearch = $(this).attr("value");


        console.log(movieGifSearch);
        var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=a6Zna39740OrKHn6vHZDCM4dYZCnukIh&q=${movieGifSearch}&limit=25&offset=0&rating=G&lang=en`;

        e.preventDefault();


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            var movieGif = response.data[0].images.original.url;

            var movieGifStill = response.data[0].images.original_still.url;

            $(".giphDisplay").prepend(`<img src=${movieGif} class="movieGif" data-animate=${movieGif} data-still=${movieGifStill} data-state="animate">`);

            //add still and animate states (original url vs original_still url)
            //push your created buttons into an array
            //figure out event delegation???


        });

        $('.movieGif').unbind('click');


        $(`.movieGif`).on("click", function () {

            var state = $(this).attr("data-state");

            if (state === "still") {
                var animateSrc = $(this).attr("data-animate");
                $(this).attr("src", animateSrc);
                $(this).attr("data-state", "animate");
            } else {
                var stillSrc = $(this).attr("data-still");
                $(this).attr("src", stillSrc);
                $(this).attr("data-state", "still");
            }


        });


    });


});


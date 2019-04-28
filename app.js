///issues with unbinding onclicks

var index = 0;
var movies = ["Back to the Future", "Sixteen Candles", "Dirty Dancing", "Ghost Busters", "The Breakfast Club"];

function createMovieButtons(buttonName) {
    $(".buttonDisplay").append(`<button class="movieButton" value="${buttonName}">${buttonName}</button>`);
};

for (i = 0; i < movies.length; i++) {
    createMovieButtons(movies[i]);
};

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




$("#addButton").on("click", function (e) {

    e.preventDefault();
    var movieInput = $("#addMovieInput").val().trim();


    if (movieInput !== "") {
        createMovieButtons(movieInput);
    }

    //document on click

    $('.movieButton').unbind('click');
    $('.movieGif').unbind('click');



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


});


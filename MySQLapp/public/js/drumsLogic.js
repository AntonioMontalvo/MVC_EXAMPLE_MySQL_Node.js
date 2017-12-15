console.log("Handles the user interactions in the introduction.html");

////////////////////////////////////////////////////////////
//This section handles the jQuery Ajax to grab ALL cymbals//
////////////////////////////////////////////////////////////

// grab the url from the window/tab
var currentURL = window.location.origin;
// make a get request to our api to grab every cymbal
$.get(currentURL + "/api", function(data) {

    // for each cymbal that our server sends us back
    for (var i = 0; i < data.length; i++) {
        // create a parent div for the oncoming elements
        var cymbalSelection = $("<div>");
        // add a class to this div
        cymbalSelection.addClass('cym');
        // add an id to 
        cymbalSelection.attr('id', 'cymbal-' + i)
        // append it to the #Selection
        $('#Selection').append(cymbalSelection);

        // Now add all of our chacter data to the well we just placed on the page
        $("#cymbal-" + i).append("<h1>Brand:" + data[i].brand + "</h1>");

        $("#cymbal-" + i).append("<h4>Name: " + data[i].name + "</h4>");

        $("#cymbal-" + i).append("<h4>Diameter: " + data[i].diameter + "</h4>");

        $("#cymbal-" + i).append("<h4>Model: " + data[i].model + "</h4>");

        $("#cymbal-" + i).append("<h4>Price: " + data[i].price + "</h4>");
    }
})


////////////////////////////////////////////////////////////////////////
//This section handles the jQuery Ajax to search for a specific cymbal//
////////////////////////////////////////////////////////////////////////


// when user hits the searchBtn
$('#searchBtn').on("click", function(){

    // save the cymbal typed into the search input
    var searchCymbal = $("#cymbalSearch").val().trim();

    // replace any spaces between that character with no space 
    // (effectively deleting the spaces). Make the string lowercase
    // searchCymbal = searchCymbal.replace(/\s+/g, '').toLowerCase();

    // grab the current url of the browser's window (or tab)
    var currentURL = window.location.origin;

    // run a jQuery AJAX GET-request for our server api, 
    $.get( currentURL + "/api/" + searchCymbal, function( data ) {

        // for each cymbal that our server sends us back
    for (var i = 0; i < data.length; i++) {
        // create a parent div for the oncoming elements
        var cymbalSearch = $("<div>");
        // add a class to this div
        cymbalSearch.addClass('cym');
        // add an id to 
        cymbalSearch.attr('id', 'searchedCymbal-' + i)
        // append it to the #Selection
        $('#SearchedCymbals').append(cymbalSearch);


        //empty the previous results
        $("SearchedCymbals" + i).val("");
        $("SearchedCymbals" + i).val("");
        $("SearchedCymbals" + i).val("");
        $("SearchedCymbals" + i).val("");
        $("SearchedCymbals" + i).val("");


        // Now add all of our chacter data to the well we just placed on the page


        $("#searchedCymbal-" + i).append("<h1>Brand:" + data[i].brand + "</h1>");

        $("#searchedCymbal-" + i).append("<h4>Name: " + data[i].name + "</h4>");

        $("#searchedCymbal-" + i).append("<h4>Diameter: " + data[i].diameter + "</h4>");

        $("#searchedCymbal-" + i).append("<h4>Model: " + data[i].model + "</h4>");

        $("#searchedCymbal-" + i).append("<h4>Price: " + data[i].price + "</h4>");
    }



        // data is the first element in the returned data array
        data = data[0];
        // log the data to our console
        console.log(data);
        // if the data is false (i.e. not there), then return an error message 
        if(data == false){
            $("#name").text("That cymbal was not found. But you can added if you want ");
            // don't show the results section, since there are no cymbals to show
            $("#stats").hide();
        }
        // otherwise
        else {
            // show the result section
            $("#searchResult").show();
            // show the cymbal name 
            $("#brand").text(data.brand);
            // show the cymbal name 
            $("#name").text(data.name);
            // show the diameter 
            $("#diameter").text(data.diameter);
            // show the model
            $("#model").text(data.model);
            // and the force points in the forcePoints tag
            $("#price").text(data.price);                   
        }

    });

}); 
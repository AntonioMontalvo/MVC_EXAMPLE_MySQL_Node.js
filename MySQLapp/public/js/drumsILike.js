console.log("Drums I like");

// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks addBtn
$('#addBtn').on("click", function() {

    // make a newCymbal obj
    var newCymbal = {
        brand: $("#brand").val().trim(),
        name: $("#name").val().trim(),
        diameter: $("#diameter").val().trim(),
        model: $("#model").val().trim(),
        price: $("#price").val().trim()
    };



    // grab the url from the window/tab
    var currentURL = window.location.origin;

    // send an AJAX POST-request with jQuery
    $.post(currentURL + "/api/addCymbal", newCymbal)
        // on success, run this callback
        .done(function(data) {
            // log the data we found
            console.log("This is the data in our jQuery post from drunsILIke " + data);
        })

    // empty each input box by replacing the value with an empty string
    $('#brand').val("");
    $('#name').val("");
    $('#diameter').val("");
    $('#model').val("");
    $('#price').val("");

    // returning false will stop the page from reloading
    // by preventing the form's default behavior.
    return false;

});


   
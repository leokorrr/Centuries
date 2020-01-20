$("#see-gallery-header-container").click(function () {
    $("#see-gallery-header-container").animate({
        height: "100vh",
        opacity: 1
    }, 800);

    $("#see-gallery-header").animate({
        opacity: 0
    }, 100);

    $("#gallery-container").animate({
        height: "100vh",
        opacity: 1
    }, 1500);

});

function changeColorAndMenu() {
    document.getElementById("gallery-container").style.display = "block";
    document.getElementById("menu").style.display = "none";
    
}

$("#close").click(function () {
    $("#see-gallery-header-container").animate({
        height: "50vh"
    }, 100);

    $("#see-gallery-header").animate({
        opacity: 1
    }, 200);

    $("#gallery-container").animate({
        opacity: 0,
        height: "0vh"
    }, 100);
});

function changeColorAndMenuBack() {
    document.getElementById("gallery-container").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

$(".gallery-tumbnails-img").click(function(){
    var src = $(this).attr('src'); 
    $('#gallery-big-img').attr('src', src);
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("#toGallery").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

console.log("Your index.js file is loaded correctly!");

$(document).ready(function() {
    // When a link with class "scroll-to-projects" is clicked
    $('.scroll-to-projects').click(function(event) {
        // Prevent the default link behavior
        event.preventDefault();
        
        // Get the target section's offset from the top
        var targetOffset = $('#myWork').offset().top;
        
        // Animate the scrolling to the target section
        $('html, body').animate({
            scrollTop: targetOffset
        }, 1000); // Adjust the duration as needed
    });
});



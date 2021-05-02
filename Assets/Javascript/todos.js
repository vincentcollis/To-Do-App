


// Check off specific To Do's by clicking
// Inside the ul, set click event on li's
$("ul").on("click", "li",function () {
    $(this).toggleClass("completed")
});

// Click on X to delete TO DO
// Inside the ul, set click event on spans
$("ul").on("click","span",function (event) {
    // Fades out then removes the li
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    // Stops code from bubbling
    event.stopPropagation();
});





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

$("input[type='text']").keypress(function (event) {
    if (event.which === 13){ // 13 is value for enter key
        // Grabbing new To Do Text from input
        var todoText = $(this).val();
        // clearing input after hititng enter
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");
    }
});

$(".fa-plus").click(function () {
$("input[type = 'text'").fadeToggle();
});
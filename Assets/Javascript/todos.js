


// Check off specific To Do's by clicking
// Inside the ul, set click event on li's
$("ul").on("click", "li",function () {
    $(this).toggleClass("completed")
});


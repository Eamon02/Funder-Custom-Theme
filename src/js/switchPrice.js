$(document).ready(function () {
    console.log("ready function");
    $(".monthly--prices").hide();
});
$(document).ready(function () {
    $('#quarterly').click(function () {
        $('.quarterly--prices').show();
        $('.monthly--prices').hide();
    })
});
$(document).ready(function () {
    $('#monthly').click(function () {
        $('.quarterly--prices').hide();
        $('.monthly--prices').show();
    })
});
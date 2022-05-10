function switchPrice(x) {
    if (x == 0) {
        console.log("show Quarterly")
        $(".quartely--prices").css("display", "block");
        $(".monthly--prices").css("display", "none");
    } else {
        console.log("show Monthly")
        $(".quarterly--prices").css("display", "none");
        $(".monthly--prices").css("display", "block");
        return
    }
}
function switchPrice(x) {
    if (x == 0) {
        console.log("show Quarterly")
        $(".quartely--prices").css("display", "block !important");
        $(".monthly--prices").css("display", "none !important");
    } else {
        console.log("show Monthly")
        $(".quarterly--prices").css("display", "none !important");
        $(".monthly--prices").css("display", "block !important");
        return
    }
}
$(".button-collapse").sideNav();

$(".page-footer .view.overlay.hm-white-slight.z-depth-1").hover(function() {
    $(this).animate({
        width: "200%",
        zIndex: "1"
    }, 300);
},
function() {
    $(this).animate({
        width: "100%",
        zIndex: "0"
    }, 300);
}
);
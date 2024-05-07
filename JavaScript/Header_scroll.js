window.onscroll = function() {scroll()};

function scroll() {
    if (document.documentElement.scrollTop > 20 ) {
        document.getElementById("nav-bar").className = "scroll";
    } else {
        document.getElementById("nav-bar").className = "";
    }
}
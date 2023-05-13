var burger = document.getElementById("hamburger");
var itemz = document.getElementById("nav-items");

itemz.style.left = "-250px";

burger.onclick = function() {
    if (itemz.style.left == "-250px") {
        itemz.style.left = "0px"
    }
    
    else {
        itemz.style.left = "-250px"
}
}

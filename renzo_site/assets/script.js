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

const faders = document.querySelectorAll(".summary");
const appearOptions = {
    threshold: .5,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }

    })
},appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


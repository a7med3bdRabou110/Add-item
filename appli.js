/*jslint browser: true, continue: true, eqeq: true, evil: true, plusplus: true, regexp: true, unparam: true, sloppy: true*/
var The_hidding = document.getElementById("heading");
var The_button = document.getElementById("btn");
var The_ul = document.getElementById("list");
var The_li = document.getElementById("list").getElementsByTagName("li");

var counter = 1;

The_ul.addEventListener("click", active);

function active(e) {
    if (e.target.nodeName == "LI") {
        The_hidding.innerHTML = e.target.innerHTML;
        for (var i = 0; i < e.target.parentNode.children.length; i = i + 1) {
            e.target.parentNode.children[i].classList.remove("active");
        }
        e.target.classList.add("active");
    }

}
The_button.addEventListener("click", function () {
    The_ul.innerHTML += "<li>New " + counter + "</li>";

    counter++;
});

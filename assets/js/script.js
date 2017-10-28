var elStream = document.getElementsByClassName('stream');
var elBlock = document.getElementsByClassName('stream__block');
for (var i = 0; i < elStream.length; i++) {
    elStream[i].addEventListener("click", z(i));
}

function z(a) {
    return function() {
        elBlock[a].style.display = "block";
        elBlock[a].addEventListener("click", function() {
            elBlock[a].style.display = "none";
        });

    }
}

$(document).ready(function() {
    $(".menubar").sticky({
        topSpacing: 0,
        getWidthFrom: '12.025vw'
    });
});


$(document).ready(function() {
    var elStream = $('.stream');
    var elBlock = $('.block');
    elStream.on('click', function() {
        elBlock.css('display', 'block');
    });
    elBlock.on('click', function() {
        elBlock.css('display', 'none');
    });
});


/*$(document).ready(function() {
    var elStream = $('.stream');
    var elBlock = $('.block');
    alert("Колво стримов"+elStream.length);
    alert("колво блоков"+elBlock.length)
    for( var i = 0; i < elStream.length; i++) {
        elStream[i].on('click', z(i))
    }
        function z(a) {
             return function() { elBlock[a].css('display', 'block') }
        }
});*/

/*
$(document).ready(function() {
    var elStream = $('.stream');
    var elBlock = $('.block');
        elStream.on('click', function() {
            elBlock.toggle()
        });
        elBlock.on('click', function() {
            elBlock.toggle()
        });
});
*/

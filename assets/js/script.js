/*testing for touch-screen*/
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (isMobile.any()) {
    $('.ul>ul').removeClass('menubar').addClass('menubar__touch');
}

/*for stream*/
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


/*for fixed menubar*/
$(document).ready(function() {
    $(".menubar").sticky({
        topSpacing: 0,
        getWidthFrom: '12.025vw'
    });
    
     $(".menubar__touch").sticky();
});



/*for button scroll-top*/
$(document).ready(function() {
    $().UItoTop({ easingType: 'easeOutQuart' });

});


/*for tabs in media*/
$(document).ready(function() {
    $(".tab__item").not(":first").hide();
    $(".wrapper .tab").click(function() {
        $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});


/*preloader*/
$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 750);

    /*$('.reset').click(function() {
            $('body').removeClass('loaded');
    });*/
});

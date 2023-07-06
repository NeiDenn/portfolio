// Loader Animation JS
$(window).on('load', function() {
    setTimeout(function() {
      $('#loader').fadeOut('slow');
      $('#volver-arriba').removeClass('hide');
    }, 1000);
});

// "Hello World" Animation Typing
var typed = new Typed(".typing",{
    strings:["", "Hola, Mundo", "Hello, world", "こんにちは、世界", "Bonjour, monde", "مرحبا بالعالم"],
    typeSpeed: 300,
    backSpeed: 60,
    loop: true
})

// Main JS
$(document).ready(function () {
    // Logo
    var $logo = $("#logo");
    var $hellologo = $("#helloworld");
    if (location.href.indexOf("#") != -1) {
    if (location.href.substr(location.href.indexOf("#")) != "#about") {
        $logo.show();
    } else {
        $hellologo.show();
    }
    }

    // Mostrar Logo
    $("#tab-container .tab a").click(function () {
    $logo.slideDown("slow");
    $hellologo.slideUp("slow");
    });
    // Ocultar Logo
    $("#tab-about").click(function () {
    $logo.slideUp("slow");
    $hellologo.slideDown("slow");
    });
    function animMeter() {
    $(".meter > span").each(function () {
        $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate(
            {
            width: $(this).data("origWidth"),
            },
            1200
        );
    });
    }
    animMeter();

    $("#tab-container")
    .easytabs({
        animate: true,
        updateHash: true,
        transitionIn: "slideDown",
        transitionOut: "slideUp",
        animationSpeed: 800,
        tabActiveClass: "active",
    })
    .bind("easytabs:midTransition", function (event, $clicked, $targetPanel) {
        if ($targetPanel.selector == "#resume") {
        animMeter();
        }
    });

    // Back To Top
    $("#volver-arriba").hide();
    $(function() {
        $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#volver-arriba').fadeIn();
        } else {
            $('#volver-arriba').fadeOut();
        }
        });
        $('#volver-arriba a').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
        });
    });
});

// Zoomable Image JS
const images = document.querySelectorAll(".zoomable-image");

images.forEach((image) => {
    const { left, top, width, height } = image.getBoundingClientRect();
    let isZoomed = false;

    image.addEventListener("mousemove", (event) => {
        const x = (event.clientX - left) / width;
        const y = (event.clientY - top) / height;

        image.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        if (!isZoomed) {
        image.classList.add("zoomed-image");
        isZoomed = true;
        }
    });

    image.addEventListener("mouseleave", () => {
        image.style.transformOrigin = "center center";
        if (isZoomed) {
        image.classList.remove("zoomed-image");
        isZoomed = false;
        }
    });
});
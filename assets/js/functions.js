$(document).ready(function () {

    var greetings = getGreetingTime(new Date());
    document.getElementById('buon').classList.add(greetings)
    document.getElementById('greetings').innerText = greetingsMsg(greetings)

    //Sliders
    var slider = tns({
        container: '#slideshow',
        items: 3,
        slideBy: 'page',
        mouseDrag: true,
        controls: false,
        nav: false,
        autoWidth: true,
        autoplayTimeout: 5000,
        center: true,
    });

    $('#wine-carousel').on('afterChange init', function (event, slick, direction) {
        // console.log('afterChange/init', event, slick, slick.$slides);
        // remove all prev/next
        slick.$slides.removeClass('prevSlide').removeClass('nextSlide');

        // find current slide
        for (var i = 0; i < slick.$slides.length; i++) {
            var $slide = $(slick.$slides[i]);
            if ($slide.hasClass('slick-current')) {
                // update DOM siblings
                $slide.prev().addClass('prevSlide');
                $slide.next().addClass('nextSlide');
                break;
            }
        }
    }).on('beforeChange', function (event, slick) {
            // optional, but cleaner maybe
            // remove all prev/next
            slick.$slides.removeClass('prevSlide').removeClass('nextSlide');
        }).slick({
            slidesToShow: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

    //AOS
    AOS.init();

    // Parallax
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    //Menu
    setMenuPosition()
    window.addEventListener('scroll', function (e) {
        setMenuPosition()
    });

    //Vivus
    new Vivus('house1', { duration: 200, file: 'assets/imgs/house.svg' });
    new Vivus('house2', { duration: 200, file: 'assets/imgs/house-white.svg' });
})

function setMenuPosition() {
    var $buon = document.querySelector('#buon');
    var $buonMenuL = document.querySelector('#buon menu:first-child');
    var $buonMenuR = document.querySelector('#buon menu:last-child');
    var $vini = document.querySelector('#vini');
    var $viniMenuL = document.querySelector('#vini menu:first-child');
    var $viniMenuR = document.querySelector('#vini menu:last-child');
    var $nostroVini = document.querySelector('#nostro-vino');
    var $nostroViniMenuL = document.querySelector('#nostro-vino menu:first-child');
    var $nostroViniMenuR = document.querySelector('#nostro-vino menu:last-child');
    var $laCasa = document.querySelector('#la-casa');
    var $laCasaMenuL = document.querySelector('#la-casa menu:first-child');
    var $laCasaMenuR = document.querySelector('#la-casa menu:last-child');
    var $photos = document.querySelector('#photos');
    var $photosMenuL = document.querySelector('#photos menu:first-child');
    var $photosMenuR = document.querySelector('#photos menu:last-child');
    var $contact = document.querySelector('#contact');
    var $contactMenuL = document.querySelector('#contact menu:first-child');
    var $contactMenuR = document.querySelector('#contact menu:last-child');

    var buonHeight = $buon.offsetHeight;
    var viniHeight = $vini.offsetHeight;
    var viniOffset = $vini.offsetTop;
    var nostroViniHeight = $nostroVini.offsetHeight;
    var nostroViniOffset = $nostroVini.offsetTop;
    var laCasaHeight = $laCasa.offsetHeight;
    var laCasaOffset = $laCasa.offsetTop;
    var photosHeight = $photos.offsetHeight;
    var photosOffset = $photos.offsetTop;
    var contactHeight = $contact.offsetHeight;
    var contactOffset = $contact.offsetTop;

    $buonMenuL.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - (buonHeight - window.innerHeight) / 2) + 'px) rotate(-90deg);')
    $buonMenuR.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - (buonHeight - window.innerHeight) / 2) + 'px);')
    $viniMenuL.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - viniOffset - (viniHeight - window.innerHeight) / 2) + '' + 'px) rotate(-90deg);')
    $viniMenuR.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - viniOffset - (viniHeight - window.innerHeight) / 2) + '' + 'px);')
    $nostroViniMenuL.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - nostroViniOffset - (nostroViniHeight - window.innerHeight) / 2) + '' + 'px) rotate(-90deg);')
    $nostroViniMenuR.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - nostroViniOffset - (nostroViniHeight - window.innerHeight) / 2) + '' + 'px);')
    $laCasaMenuL.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - laCasaOffset - (laCasaHeight - window.innerHeight) / 2) + '' + 'px) rotate(-90deg);')
    $laCasaMenuR.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - laCasaOffset - (laCasaHeight - window.innerHeight) / 2) + '' + 'px);')
    $photosMenuL.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - photosOffset - (photosHeight - window.innerHeight) / 2) + '' + 'px) rotate(-90deg);')
    $photosMenuR.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - photosOffset - (photosHeight - window.innerHeight) / 2) + '' + 'px);')
    $contactMenuL.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - contactOffset - (contactHeight - window.innerHeight) / 2) + '' + 'px) rotate(-90deg);')
    $contactMenuR.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - contactOffset - (contactHeight - window.innerHeight) / 2) + '' + 'px);')
}


function getGreetingTime(d) {
    var time = d.getHours();
    if (time > 6 && time < 12) {
        return 'giorno'
    }
    if (time >= 12 && time < 18) {
        return 'pomeriggio'
    }
    if (time >= 18 || time <= 6) {
        return 'notte'
    }
}

function greetingsMsg(greeting) {
    //Better than switch case :)
    return {
        "giorno": (function () {
            return 'Buongiorno'
        })(),
        "pomeriggio": (function () {
            return 'Buon pomeriggio'
        })(),
        "notte": (function () {
            return 'Buona notte'
        })()
    }[greeting]
}
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        var greetings = getGreetingTime(new Date());
        document.getElementById('buon').classList.add(greetings)
        document.getElementById('greetings').innerText = greetingsMsg(greetings)
        // Parallax
        // var scene = document.getElementById('scene');
        // var parallaxInstance = new Parallax(scene);

        //Menu
        setMenuPosition()
        window.addEventListener('scroll', function (e) {
            setMenuPosition()
        });

    }
};

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

    var buonHeight = $buon.offsetHeight;
    var viniHeight = $vini.offsetHeight;
    var viniOffset = $vini.offsetTop;
    var nostroViniHeight = $nostroVini.offsetHeight;
    var nostroViniOffset = $nostroVini.offsetTop;
    var laCasaHeight = $laCasa.offsetHeight;
    var laCasaOffset = $laCasa.offsetTop;

    $buonMenuL.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - (buonHeight - window.innerHeight) / 2) + 'px) rotate(-90deg);')
    $buonMenuR.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - (buonHeight - window.innerHeight) / 2) + 'px);')
    $viniMenuL.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - viniOffset - (viniHeight - window.innerHeight) / 2) + '' + 'px) rotate(-90deg);')
    $viniMenuR.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - viniOffset - (viniHeight - window.innerHeight) / 2) + '' + 'px);')
    $nostroViniMenuL.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - nostroViniOffset - (nostroViniHeight - window.innerHeight) / 2) + '' + 'px) rotate(-90deg);')
    $nostroViniMenuR.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - nostroViniOffset - (nostroViniHeight - window.innerHeight) / 2) + '' + 'px);')
    $laCasaMenuL.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - laCasaOffset - (laCasaHeight - window.innerHeight) / 2) + '' + 'px) rotate(-90deg);')
    $laCasaMenuR.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - laCasaOffset - (laCasaHeight - window.innerHeight) / 2) + '' + 'px);')
}


function getGreetingTime(d) {
    var time = d.getHours();
    if (time < 12) {
        return 'giorno'
    }
    if (time >= 12 && time <= 18) {
        return 'pomeriggio'
    }
    if (time >= 18) {
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
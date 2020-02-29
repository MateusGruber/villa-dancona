document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        // var scene = document.getElementById('scene');
        // var parallaxInstance = new Parallax(scene);
        setMenuPosition()
        window.addEventListener('scroll', function (e) {
            setMenuPosition()
        });
    }
};

function setMenuPosition() {
    var $buon = document.querySelector('#buon');
    var $buonMenu = document.querySelector('#buon menu');
    var $vini = document.querySelector('#vini');
    var $viniMenu = document.querySelector('#vini menu');
    var $nostroVini = document.querySelector('#nostro-vino');
    var $nostroViniMenu = document.querySelector('#nostro-vino menu');
    var $laCasa = document.querySelector('#la-casa');
    var $laCasaMenu = document.querySelector('#la-casa menu');

    var buonHeight = $buon.offsetHeight;
    var viniHeight = $vini.offsetHeight;
    var viniOffset = $vini.offsetTop;
    var nostroViniHeight = $nostroVini.offsetHeight;
    var nostroViniOffset = $nostroVini.offsetTop;
    var laCasaHeight = $laCasa.offsetHeight;
    var laCasaOffset = $laCasa.offsetTop;

    $buonMenu.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - (buonHeight - window.innerHeight) / 2) + 'px) rotate(-90deg);')
    $viniMenu.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - viniOffset - (viniHeight - window.innerHeight) / 2) + '' + 'px) rotate(-90deg);')
    $nostroViniMenu.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - nostroViniOffset - (nostroViniHeight - window.innerHeight) / 2) + '' + 'px) rotate(-90deg);')
    $laCasaMenu.setAttribute('style', 'transform: translateX(-50%) translateY(' + (window.scrollY - laCasaOffset - (laCasaHeight - window.innerHeight) / 2) + '' + 'px) rotate(-90deg);')
}
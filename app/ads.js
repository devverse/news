function onDeviceReady() { 
    setTimeout(function() { 
    navigator.splashscreen.hide(); 
    deviceReady = true;
    }, 2000); 
}

// for Android
admobid = {
    banner: 'ca-app-pub-0083160636450496/6674786355',
    interstitial: 'ca-app-pub-0083160636450496/6674786355'
};

function showBannerAd() {
    if (typeof AdMob != 'undefined') {
        AdMob.createBanner({
            adId : admobid.banner,
            position : AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow : true
        });
    }
}

function removeBannerAd() {
	if (typeof AdMob != 'undefined') {
		AdMob.removeBanner();
	}
}

function randomInterstitial() {
    var random = Math.floor((Math.random() * 10) + 1);

    if (random == 1 || random == 2) {
        localStorage.setItem("adCount", 1);
        prepareInterstitial();
    }
}
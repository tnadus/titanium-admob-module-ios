
//Import the module first
var admob = require('ti.admobmoduleios');


/*******************************************************/
/**                   User interface                 ***/
/*******************************************************/

/* - Create main window */
var win = Titanium.UI.createWindow({
	backgroundColor : 'white',
	title: 'Admob Sample',
});

/* Create navigation controller & bar */
var navGroup = Titanium.UI.iOS.createNavigationWindow({
	backgroundColor : "white",
	includeOpaqueBars:true,
	window : win
});

// Show the window
navGroup.open();


//UI elements sizes
var navbarHeight = 44.0;
var statusbarHeight = 20.0;
var bannerHeight = 50.0;

//Create banner info label
var labelBannerHeight = 60.0;

var labelBanner = Ti.UI.createLabel({
	top : Titanium.Platform.displayCaps.platformHeight - (labelBannerHeight + navbarHeight + bannerHeight + statusbarHeight),
	left : 0,
	width : Titanium.Platform.displayCaps.platformWidth,
	height : labelBannerHeight,
	color : '#4081f8',
	backgroundColor : '#FFF',
	font:{fontSize:21,fontFamily:'Bradley Hand'},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	text: 'Banner ad will be below',
});
win.add(labelBanner);


//Create button to show Interstitial Ad If it's loaded and ready to show
var buttonInterstitial = Titanium.UI.createButton({
   title: 'Show Fullscreen Ad',
   top: 40,
   width: 170,
   height: 40,
   borderColor: '#4081f8',
   borderWidth: 1.0,
   borderRadius: 12.0,
   backgroundColor: '#4081f8',
   textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
   color: 'white',
});

win.add(buttonInterstitial);

// Create banner info label
var labelInterstitialHeight = 60.0;

var labelInterstitial = Ti.UI.createLabel({
	top :100.0,
	width : Titanium.Platform.displayCaps.platformWidth,
	height : labelInterstitialHeight,
	color : '#4081f8',
	backgroundColor : '#FFF',
	font:{fontSize:21,fontFamily:'Bradley Hand'},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	text: 'Tap button above\n for interstitial ad',
});
win.add(labelInterstitial);







/*******************************************************/
/**                Banner Ad Sample                  ***/
/*******************************************************/

// You can get your own at http: //www.admob.com/
var myBannerAdUnitId = '<YOUR_AD_UNIT_ID>'; 

//Create Admob banner
var adBanner;

adBanner = admob.createView({
	top : Titanium.Platform.displayCaps.platformHeight - (navbarHeight + bannerHeight + statusbarHeight),
	left : 0,
	width : Titanium.Platform.displayCaps.platformWidth,
	height : bannerHeight,
	adUnitId : myBannerAdUnitId, 
	adBackgroundColor : 'black',
	// You can get your device's id for testDevices by looking in the console log after the app launched
	testDevices: [admob.SIMULATOR_ID],
	dateOfBirth : new Date(1985, 10, 1, 12, 1, 1),
	gender : 'male',
	keywords : ''
});

win.add(adBanner);

/**       OPTIONAL: Banner events     **/

adBanner.addEventListener('didReceiveAd', function() {
	Ti.API.info('adBanner: Did receive ad!');
});
adBanner.addEventListener('didFailToReceiveAd', function() {
	Ti.API.info('adBanner: Failed to receive ad!');
});
adBanner.addEventListener('willPresentScreen', function() {
	Ti.API.info('adBanner: Presenting screen!');
});
adBanner.addEventListener('willDismissScreen', function() {
	Ti.API.info('adBanner: Dismissing screen!');
});
adBanner.addEventListener('didDismissScreen', function() {
	Ti.API.info('adBanner: Dismissed screen!');
});
adBanner.addEventListener('willLeaveApplication', function() {
	Ti.API.info('adBanner: Leaving the app!');
}); 





/*******************************************************/
/**             Insterstitial Ad Sample              ***/
/*******************************************************/

var myInterstitialAdUnitId = '<YOUR_AD_UNIT_ID>';

// Create and load the Admob Insterstitial
function createAd() {
	return admob.createInterstitial({
		adUnitId : myInterstitialAdUnitId,
		testDevices: [admob.SIMULATOR_ID],
	});
}

var fullScreenAd = createAd();

fullScreenAd.loadAd();


/**       OPTIONAL: Interstitial events     **/

admob.addEventListener('InterstitialDidReceiveAdNotification', function(e) {
	Titanium.API.info("InterstitialDidReceiveAdNotification");
});

admob.addEventListener(fullScreenAd.kInterstitialDidFailToReceiveAdNotification, function(e) {
	Titanium.API.info("InterstitialDidFailToReceiveAdNotification");
	setTimeout(function() {
		Ti.API.info('Timeout');
		fullScreenAd.loadAd();
	}, 3000);
});

admob.addEventListener('InterstitialDidDismissScreen', function(e) {
	Titanium.API.info("InterstitialDidDismissScreen");
	fullScreenAd = createAd();
	fullScreenAd.loadAd();
});

buttonInterstitial.addEventListener('click', function(e) {
	Titanium.API.info("You clicked the button");
	var isReady = fullScreenAd.isReady();

	if (isReady) {
		fullScreenAd.show();
	} else {
		alert("Interstitial is NOT READY!");
	}
});

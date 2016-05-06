document.addEventListener("deviceready", function() {
	var customLocale = {};
	customLocale.title = "Rate SoleNews";
	customLocale.message = "If you enjoy using SoleNews, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!";
	customLocale.cancelButtonLabel = "No, Thanks";
	customLocale.laterButtonLabel = "Remind Me Later";
	customLocale.rateButtonLabel = "Rate It Now";

	AppRate.preferences.openStoreInApp = true;
	AppRate.preferences.storeAppURL.android = 'market://details?id=com.sole.news';
	AppRate.preferences.customLocale = customLocale;
	AppRate.preferences.displayAppName = 'SoleNews';
	AppRate.preferences.usesUntilPrompt = 5;
	AppRate.preferences.promptAgainForEachNewVersion = false;
	AppRate.promptForRating();
});

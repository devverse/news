var url = window.location.href;
var serviceURL = "http://soleinsider.com/public";

var admin_url = 'app/';
var app_name = "solenews";
var page_title = "solenews";

var solenews = {};
solenews.base_url = serviceURL;
solenews.username = "";
solenews.member_id = false;
solenews.cache = false;
solenews.show_featured = true;
solenews.version = "1";
solenews.build = "android";
solenews.localhost = (url.indexOf("localhost") != -1 ? true :  false);

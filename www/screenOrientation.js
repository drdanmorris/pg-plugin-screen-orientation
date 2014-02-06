

var ScreenOrientation = function(){};

ScreenOrientation.prototype.set = function(str, success, fail) {
	cordova.exec(null, null, "ScreenOrientation", "set", [str]);
};

module.exports = new ScreenOrientation();


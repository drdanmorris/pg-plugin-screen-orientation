
var ScreenOrientation = function(){};
ScreenOrientation.prototype.set = function(str, success, fail) {
	cordova.exec(null, null, "screenOrientation", "set", [str]);
};

navigator.screenOrientation = new ScreenOrientation();

if (typeof module != 'undefined' && module.exports) {
  module.exports = navigator.screenOrientation;
}


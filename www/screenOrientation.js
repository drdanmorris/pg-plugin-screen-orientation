navigator.screenOrientation = {
	set: function(str, success, fail) {
		cordova.exec(null, null, "screenOrientation", "set", [str]);
	}
};

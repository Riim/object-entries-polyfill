if (!Object.entries) {
	(function() {
		var hasOwn = Object.prototype.hasOwnProperty;

		Object.entries = function(obj) {
			var entrys = [];

			for (var name in obj) {
				if (hasOwn.call(obj, name)) {
					entrys.push([name, obj[name]]);
				}
			}

			return entrys;
		};
	})();
}

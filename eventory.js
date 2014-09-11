/* Custom Event Datatype */

var Eventory = function () {
	Object.defineProperty(this, "_listeners", {
		value : {}
	});
};

Object.defineProperties(Eventory.prototype, {
	
	attachEventListener : {
		value : function (type, listener) {
			if ( typeof this._listeners[type] === "undefined" ) {
				this._listeners[type] = [];
			}
			this._listeners[type].push(listener);
		}
	},
	
	detachEventListener : {
		value : function (type, listener) {
			var listeners = this._listeners[type];
			if ( typeof listeners === "undefined" ) {
				return;
			}
			for (var i = 0, len = listeners.length; i < len; i++) {
				if (listeners[i] === listener) {
					listeners.splice(i, 1);
				}
			}
		}
	},

	trigger : {
		value : function (event) {	
			if ( !(event instanceof EventType) ) {
				throw new Error("Event object is of incorrect type.");
			}

			if (typeof event.target === "undefined") {
				event.target = this;
			}

			var listeners = this._listeners[event.type];

			if (typeof listeners === "undefined") {
				return;
			}

			for (var i = 0, len = listeners.length; i < len; i++) {
				listeners[i].call(this, event);
			}
		}
	}
});

var EventType = function (type) {
	if (typeof type !== "string") {
		throw new Error("The event type must be a string.");
	}
	Object.defineProperty(this, "type", {
		value : type
	});
};



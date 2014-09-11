var t00lbar = (function (t00lbar) {

	var ValueToggleEvent = function (type, value) {
		EventType.call(this, type);

		Object.defineProperty(this, "value", {
			value : value
		});
	};

	ValueToggleEvent.prototype = Object.create(EventType.prototype);

	var Item = function (element) {
		Eventory.call(this);

		Object.defineProperty(this, "element", {
			value : element
		});
	};

	Item.prototype = Object.create(Eventory.prototype, {
		enabled : {
			get : function () {
				return !this.element.classList.contains("disabled");
			},
			set : function (value) {
				if (value) {
					this.element.classList.remove("disabled");
				} else {
					this.element.classList.add("disabled");
				}
			}
		},
		activated : {
			get : function () {
				return this.element.classList.contains("activated");
			},
			set : function (value) {
				if (this.enabled) {

					var current = this.activated;

					if (current === value) {
						return;
					}

					if (value) {
						this.element.classList.add("activated");
					} else {
						this.element.classList.remove("activated");
					}

					// Trigger event associated with 'activated status' toggle
					this.trigger(new ValueToggleEvent("activeToggled", value));
				}
			}
		}
	});

	var createToolbarItems = function (itemElements) {
		
		var items = [];

		Array.prototype.forEach.call(itemElements, function (element, index, array) {
			var item = new Item(element);
			items.push(item);
		});

		return items;
	};

	var Toolbar = function (element) {
		Eventory.call(this);

		var items = element.querySelectorAll(".toolbar-item");

		Object.defineProperties(this, {
			element : {
				value : element
			},
			items : {
				value : createToolbarItems(items)
			}
		});
	};

	Toolbar.prototype = Object.create(Eventory.prototype, {
		add : {
			value : function () {
				var newSpan = document.createElement("span");
				newSpan.className = "toolbar-item";

				this.element.appendChild(newSpan);

				var item = new Item(newSpan);

				this.items.push(item);
			}
		},
		remove : {
			value : function (index) {
				var len = this.items.length;

				index = (typeof index === 'undefined') ? (len - 1) : index;
				
				if (index < 0 || index >=len) {
					throw new Error("index provided is out of range.");
				}
				
				var item = this.items[index];
				
				this.items.splice(index, 1);
				
				this.element.removeChild(item.element);
			}
		},
		appendTo : {
			value : function (parentElement) {
				parentElement.appendChild(this.element);
			}
		}
	});
	
	t00lbar.createToolbar = function (elementId) {		
		var element = document.getElementById(elementId);
		
		if (!element) {
			element = document.createElement("div");
			element.id = elementId;
			element.className = "toolbar";
		};
		
		return new Toolbar(element);
	};

	return t00lbar;

}( t00lbar || {} ));


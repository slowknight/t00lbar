var t00lbar = (function (t00lbar) {

	var createToolbarItem = function (element) {
		
		var item = {};

		Object.defineProperties(item, {
			element : {
				value : element,
				writable : false
			},
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
						if (value) {
							return this.element.classList.add("activated");
						} else {
							return this.element.classList.remove("activated");
						}
					}
				},
			}
		});

		return item;
	};

	var createToolbarItems = function (itemElements) {
		
		var items = [];

		Array.prototype.forEach.call(itemElements, function (element, index, array) {
			var item = createToolbarItem(element);
			items.push(item);
		});

		return items;
	};

	
	t00lbar.createToolbar = function (elementId) {
		
		var element = document.getElementById(elementId);
		
		if (!element) {
			element = document.createElement("div");
			element.id = elementId;
			element.className = "toolbar";
		};
		
		var items = element.querySelectorAll(".toolbar-item");

		var toolbar = {
			add : function () {
				var newSpan = document.createElement("span");
				newSpan.className = "toolbar-item";

				this.element.appendChild(newSpan);

				var item = createToolbarItem(newSpan);

				this.items.push(item);
			},
			remove : function (index) {
				var len = this.items.length;

				index = (typeof index === 'undefined') ? (len - 1) : index;
				
				if (index < 0 || index >=len) {
					throw new Error("index provided is out of range.");
				}
				
				var item = this.items[index];
				
				this.items.splice(index, 1);
				
				this.element.removeChild(item.element);
			},
			appendTo : function (parentElement) {
				parentElement.appendChild(this.element);
			}
		};
		
		Object.defineProperties(toolbar, {
			element : {
				value : element
			},
			items : {
				value : createToolbarItems(items)
			}
		});

		return toolbar;
	};

	return t00lbar;

}( t00lbar || {} ));


var t00lbar = (function (t00lbar) {

	var createToolbarItems = function (itemElements) {
		
		var items = [];

		Array.prototype.forEach.call(itemElements, function (element, index, array) {
			var item = {
				element : element,
				enable : function () {
					this.element.classList.remove("disabled");
				},
				disable : function () {
					this.element.classList.add("disabled");
				},
				isDisabled : function () {
					if ( element.classList.contains("disabled") ) {
						return true;
					} else {
						return false;
					}
				},
				activate : function () {
					if ( !this.isDisabled() ) {
						this.element.classList.add("activated");
					}
				},
				deactivate : function () {
					if ( !this.isDisabled() ) {
						this.element.classList.remove("activated");
					}
				},
				isActivated : function () {
					if ( this.element.classList.contains("activated") ) {
						return true;
					} else {
						return false;
					}
				}
			};

			items.push(item);
		});

		return items;
	};

	
	t00lbar.createToolbar = function (elementId) {
		
		var element = document.getElementById(elementId);
		
		if (!element) {
			element = document.createElement("div");
			element.id = elementId;
		};
		
		var items = element.querySelectorAll(".toolbar-item");
		
		return {
			items : createToolbarItems(items)
		};
	};

	return t00lbar;

}( t00lbar || {} ));
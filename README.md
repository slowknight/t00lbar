# T00lbar.js

## Overview

Simple toolbar utility with a straight-forward API.
Supports custom events associated with toolbar items

### How to use

Check out *index.html* for a practical demo.

```javascript
// Creating the toolbar
var toolbar = t00lbar.createToolbar("elementId");
// Adding an item
toolbar.add();
toolbar.add()
// Removing an item at index; removes last element if index unspecified
toolbar.remove(index);
// Adding toolbar to the DOM, under a parentElement node
toolbar.appendTo("parentElement");

/* Changing values for individual toolbar items */
toolbar.items[0].enabled = false; //disable item
toolbar.items[0].enabled = true; //enable

toolbar.items[1].activated = true; //activate item
toolbar.items[1].activated = false; //deactivate

/* Working with events */

var eventListener = function (e) { console.log("do something ..") };

// activeToggled event : triggered when 'activated' property value toggled for an item
toolbar.item[2].attachEventListener("activeToggled", eventListener);
// detaching (removing) the listener
toolbar.item[2].detachEventListener("activeToggled", eventListener); 
```

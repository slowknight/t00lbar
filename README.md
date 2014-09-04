# T00lbar.js

### How to use

The current API is user and developer friendly. Looking at the example below:

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

// Performing actions on the individual items
toolbar.items[0].enabled = false; //disable item
toolbar.items[0].enabled = true; //enable

toolbar.items[1].activated = true; //activate item
toolbar.items[1].activated = false; //deactivate
```

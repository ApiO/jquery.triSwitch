# jquery.triSwitch

[![NuGet](https://img.shields.io/nuget/v/jquery.triSwitch.svg)](https://www.nuget.org/packages/jquery.triSwitch) [![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](https://opensource.org/licenses/MIT)

A simple checkbox with three states made with love.

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FApiO%2Fjquery.triSwitch.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FApiO%2Fjquery.triSwitch?ref=badge_large)

![](http://acuisinier.com/images/jquery.triSwitch.png)

## Documentation & demo

> For code sample check out the index.html file or go to the [live demo](http://acuisinier.com/demo/jquery.triSwitch).

> Available on NuGet Gallery : [here](https://www.nuget.org/packages/jquery.triSwitch)

**Minimal browser compatibility**

Web browser|Version 
---|---
Chrome|Ok
Firefox|v3.5
IE|v9
Opera|v10
Safari|v4
  
**Dependencies**

> **jQuery v1.11.3** at least. Works perfectly on higher versions.
  
**Features**

- Override jQuery val() to get/set the current value.
- Trigger "change" event.
- Allow you to define your own awesome style.
  
**Usage**

```html
	<!-- reference both css and js files -->
    <link href="css/jquery.triSwitch.css" rel="stylesheet">
    <script src="js/jquery.triSwitch.js"></script>

	<!-- Add a checkbox to your page -->
	<input type="checkbox" id="my_checkbox" />
 ```
 
```javascript
	// Initialize the plugin
	$("#my_checkbox").triSwitch();
```
	
```javascript
	// Using options
	$("#my_checkbox").triSwitch({ 
		type: "normal", 
		defaultValue:  1 
	});
```
	
```javascript
	// Binding change event notification
	$("#my_checkbox").on("change", function () {
		alert($(this).val());
	});
```
	
```javascript
	// Disable change notification with style
	$("#my_checkbox").attr("disabled", true);
```
  
**Options**

Name | Type | Default | Description
---|---|---|---
type | string | normal | Define the state cycle.  "normal": uncheck > both > check / "any_thing_else": uncheck > check
defaultValue | number | -1 | Sets the initial state.  -1: unchecked / 0: both / 1: checked
  
**Callback events**

Event | Description
---|---
change | Triggered each time the user click on a checkbox
  
##License

MIT License

Copyright (c) 2014-2016 ApiO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

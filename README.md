# jquery.triSwitch

A simple checkbox with three states made with love.


## Documentation & demo

> **Tip:** Check out the *index.html* file.

[Live demo](http://acuisinier.com/Projects/jquery.triSwitch/Demo)



**Requirements**

Web browser | Version
-------- | ---
**Chrome** | incoming
**Firefox** | incoming
**IE** | incoming
**Opera** | incoming



**Features**
- Override jQuery val() to get/set the current value.
- Trigger "change" event.
- Allow you to define your own awesome style.


**Usage**

> <input type="checkbox" id="my_checkbox" />
> 
> <script>
>     $(function() {
> 
>         // Initialize the plugin
>         $("#my_checkbox").triSwitch();
> 
>     });
> </script>
	
Using options :
	
> $("#my_checkbox").triSwitch({ loop: false, defaultValue:  1 });
	
To be notify on checkbox change:
	
> $("#my_checkbox").on("change", function () {
>     alert($(this).val());
> });
	
	
	
**Options**




**Callback events**




**Methods**



## License

Released under the [MIT license](http://www.opensource.org/licenses/MIT).


Alerts/Notifications
====================

popUpMsg(message,field);
~~~~~~~~~~~~~~~~~~~~~~~~

The **popUpMsg** function shows a message below the specified field.

- The following example shows how to display the **popUpMsg** for the **'fname'** field. 

.. code-block:: javascript
	
    var firstname = valueOf('fname');
 	
    if (isBlank(firstname)) {
		popUpMsg('This is a required field!','fname');
		result = false;
		break;
    }     

	
say(message,duration);
~~~~~~~~~~~~~~~~~~~~~~~~

The **say** function shows a **message** for a specified **duration** in seconds. A div element with an id of **msgarea**
must be present on the page in order for the message to be displayed. 

- The following example shows how to use the **say()** function to display the message **Hello World**

.. code-block:: html

	<!-- Message area is created first-->
	<div id=msgarea></div>

.. code-block:: javascript
	
    var firstname = valueOf('fname');
 	
    say('Hello Wold',2);
	
- HTML can also be displayed using the say function as shown below**

.. code-block:: javascript
	
	say('<img src="loading.gif" height="42" width="42">',2);
    


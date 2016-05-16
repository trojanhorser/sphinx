

Checkbox And Radio Buttons
==========================

checkVar(elementId,state)
------------------------

The **checkVar** function is used to change the state of a checkbox or radio button to **checked** or **unchecked**. 
It accepts two parameter **elementId** and **state**. If only the **elementId** is passed it will change 
the sate to **checked**. If the **state** is passed with the value of **off** or **/*off** the state will 
be changed to unchecked.

- The example below shows how changes the state of a checkbox or radio button to unchecked:

.. code-block:: javascript

	//Checkbox
	checkVar("checkBoxId");

	//Radio Button
	checkVar("radioButtonId");


isCheckedVar(elementId)
---------------------

The **isCheckedVar** function returns **true** if a radio button or checkbox is checked and false if they are unchecked.

- The example below shows how return the state of a checkbox (bikeCheckbox) and a radio button (genderCheckbox):

.. code-block:: html
	
	<input id="bikeCheckbox" type="checkbox" name="vehicle" value="Bike" checked>
		
	<input id="genderCheckbox" type="radio" name="gender" value=Male"> Male<br>
	
.. code-block:: javascript

	//Checkbox
	var value = isCheckVar("bikeCheckbox");
	/*
		Value is true
	*/

	//Radio Button
	value = checkVar("genderCheckbox");
	/*
		Value is false
	*/






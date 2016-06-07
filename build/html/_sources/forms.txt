
.. toctree::
   :maxdepth: 1


Forms
=====

Defining A Form
----------------

A form typically consists of three sections:

1. parent **div** html element.

2. form html element within the **div**.

3. and fields within the form **element** *(to see more information regarding fields click here)*.

A diagram of the form structure is shown below:

.. image:: form_structure.png
   :height: 500px
   :width: 400 px
   :scale: 100 %
   :alt: alternate text

Parent Div Element
~~~~~~~~~~~~~~~~~~

The parent **div** is typically defined with the following attributes:

	- **id** which is the identifier.

	- **style** which is normally set to **display:none** and.

	- **class** which can be set with a value of "window" to create a modal form.

An example of a modal form is shown below:

.. code-block:: html

	<div id="divform1" style="display:none;" class="window">
	  <!--
		Form would be defined here
	  -->
	</div>

Form Element
~~~~~~~~~~~~

The form element is defined only with a **name* attribute which is the unique identifier
of the form and example is shown below:

.. code-block:: html

	<form name=form1>
	  <!-- Title would be defined here -->
	   <!-- Fields would be defined here -->
	</form>

Title
~~~~~~~~~~~~

A optional **title** can be added to the form. It is defined using a **div** with an **id** which is the unique identifier and a
**class** which must have the value **"titleBar"** an example is shown below:

.. code-block:: html

	<div id=titlebar1 class="titleBar"></div>


Fields
~~~~~~

Fields are used for both input and output and are defined within the form element:

.. note::  Read the `Fields`_ for more detailed information

.. code-block:: html

	<form name=form1>
	  <!-- Title would be defined here -->
	   <!-- Fields would be defined here -->
	</form>


- A complete example of a form in shown below:

.. code-block:: html

	<div id="divform1" style="display:none;" class="window">
		<form name=form1>
		<div id=titlebar1 class="titleBar"></div>
		<span button=exitbutton type=exit class="ximage" onclick='closeForm()'></span>
		<span field=concde></span><br>
		<span field=connam></span><br>
		<span field=conadd></span><br>
		<span field=conadd2></span><br>
		<span field=conadd3></span><br>
		<span field=conadd4></span><br>
		<span field=conadd5></span><br>
		<span field=conemail></span><br>
	</form>
	</div>
	</div>

Form Utility Methods
--------------------
The form utilizes several custom javascript functions to facilitate form manipulation, these functions are described below:

saveVar(field)
~~~~~~~~~~~~~~

The **saveVar()** constructor is used to save the HTML variables (fields) in a saveVar object.

- It can be used to save the entire form as shown below:

.. code-block:: javascript

   var saveddata=new saveVar('*form:form1');

- It can also be used to save specific fields as shown below:

.. code-block:: javascript

   var saveddata=new saveVar('firstname');

saveVar Prototypes
-----------------

The **saveVar** object consists of prototypes which are described below:

returnChangedVar()
-----------------

The **returnChangedVar** function returns all returns the changed fields within a **saveVar** object.

- If it is called without any parameters it will return a list of the fields which have been changed, as shown in the example below:

.. code-block:: javascript

	changedData = saved.returnChangedVar();

	for (field in changedData) {
		if (field != 'addVar' && field != 'removeVar') {
		   alert('Field: '+field+' === Value: '+valueOf(field)+'
		   === Saved Value:'+saved.savedValueOf(field));
		}
	}

- If it is called with the **array** parameter it will return the array of fields which have been shown in the example below:

.. code-block:: javascript

	changedData=saved.returnChangedVar('array');

	for (index=0; index<changedData.length; index++) {
	   field=changedData[p];
	   alert('OR...Field: '+field+' === Value: '+valueOf(field)+'
	   === Saved Value:'+saved.savedValueOf(field));
	}

restoreVar(fieldOne,fieldTwo)
-----------------------------

The **restoreVar** function restores the saved value of fields in savedVar to the corresponding fields..

- If it is called without parameters it will restore the value of all fields in the current form:

.. code-block:: javascript

	function restoreChangedData() {
		saved.restoreVar();
	}

- It can also be called with one or more fields which require restoration as shown below:

.. code-block:: javascript

	function restoreChangedData() {
		saved.restoreVar('fieldOne','fieldTwo');
	}

hasChangedVar(fieldOne,fieldTwo...)
-----------------------------------

The **hasChangedVar** function scans all saved fields and checks if any have changed. If so, it returns true.:

- If it is called without parameters it scans the entire form and returns true or false if any of the fields have been altered.

.. code-block:: javascript

	if (saved.hasChangedVar()) {
		alert('Yes');
	}

- It can also be called with with a single field to determine if it has changed.

.. code-block:: javascript

	if (saved.hasChangedVar('fieldOne')) {
		alert('Yes');
	}


savedValueOf(field)
-------------------

The savedValueOf returns the original value of a field even when it is changed in form.

The example below shows that when the field **userid** is changed it's original value can still be retrieved:

.. code-block:: javascript

	 /*Orignal value 100*/

	new saved = saveVar('userid');

	/* Change userid to 200*/

	changeVar('userid',200);

	alert( saveVar.savedValueOf('userid') );

	/*
		Output will be 100 which is the original value
	*/

Other Form Methods
==================

displayForm(form,y,x)
~~~~~~~~~~~~~~~~~~~~~

This function displays the form if it was hidden.
It accepts the form to display as its parameter and the **x** and **y**, coordinates. If it is called without parameters it automatically
centers the form.

- Example below shows how to call **displayForm**.

.. code-block:: javascript

	displayForm("form1");

- Example below shows how to call **displayForm** wiht **X** and **Y** coordinates.

.. code-block:: javascript

	displayForm('form1',80,100);

closeForm(form)
~~~~~~~~~~~~~~~

The **closeForm** function closes the form which is modal. An example of how it is used is show below:

.. code-block:: javascript

   closeForm('form1');

clearForm(form)
~~~~~~~~~~~~~~~

The **clearForm** function clears all the fields on a the specified form:

.. code-block:: javascript

   clearForm('form1');

Panels
------

Button Area
~~~~~~~~~~~

This is panel with a specific css style which used to highlight the are where buttons are located.
An example of how the button is generated is shown below:

.. code-block:: html

	<div class=buttonarea>
	<span button=addRecord type=add onclick=addRecord()></span>
	<span button=changeRecord type=change onclick=changeRecord()></span>
	<span button=deleteRecord type=delete onclick=deleteRecord()></span>
	</div>

Output Area
~~~~~~~~~~~

This is panel with a specific css style which used to highlight the area where fields are located on a form.
An example of how the button is generated is shown below:

.. code-block:: html

	<div class=outputarea style="margin:50px; width:400px; height:100px">
	<span button=exitbutton type=exit class="ximage" onclick='closeForm()'></span>
	<span field=concde upper></span><br>
	<span field=connam></span><br>
	<span field=conadd></span><br>
	<span field=conadd2></span><br>
	</div>

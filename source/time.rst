

Date and Time Functions
==============

delay(milliseconds)
-------------------

The **delay** function delays the execution of the application for a specfic period of time in **milliseconds**. 

- The example belows shows how to use the **delay** function. The **addAnotherRecord** function is delayed for 1 second after
  the **addRecord** function is called.
	
.. code-block:: javascript
	
   addRecord();
   delay(1000);
   addAnotherRecord();


exeFunction(function,message)
-----------------------------

The **exeFunction** function performs the delayed execution of a specified **function**. 
It also diplays a **message** and changes the state of the cursor to the "wait" state during the delay period. 
The function delay period is **10 milliseconds** and the message is displayed with the **say** function.

.. note:: In order for the message to be displayed the a div with id of **"msgarea"** must be present on the page.

- An example of how to use the exeFunction is shown below:

.. code-block:: javascript
	
	function addRecord(data){
		
		if( isValid(data) ){
			exeFunction(insertRecord(),'Please wait')
		}
	}
	

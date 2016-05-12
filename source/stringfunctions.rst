
.. toctree::
   :maxdepth: 1

String Functions
================

These are a set of utility functions which are used to aid in string manipulation. There usage is described below:

string.trim()
--------------

This removes leading and trailing spaces from a string. An example is shown below:

.. code-block:: javascript

	var myString = " string with space  "
	console.log( myString.trim() )
	/* Output will be "string with space" */

string.triml()
---------------

This removes leading spaces from a string. An example is shown below:

.. code-block:: javascript

	.var myString = " string with space  "
	console.log( myString.trimr() )
	/* Output will be "string with space " with space removed from the left*/


string.trimr()
---------------

.. code-block:: javascript

	var myString = " string to be stripped "
	console.log( myString..trimr() )
	/* Output will be " string with space" with space removed from the right*/


string.strip(stringOne , stringTwo, ......)
-------------------------------------------------

This **strip** function removes characters specified as parameters from a string. An example is shown below:


In this example the characters **"t"** and **"b"** are removed:

.. code-block:: javascript

	var myString = "string to be stripped";
	console.log( myString.strip("t","b") );
	/* Output will be "sring o e sripped" */
	
	
In this example the characters **"string"** and **"stripped"** strings are removed:

.. code-block:: javascript

	var myString = " string to be stripped ";
	console.log( myString.strip("string","stripped") );
	/* Output will be "to be" */

string.sqlWrap()
----------------------

- This **sqlWrap** function converts the string to into a format that can be interpreted by SQL.

.. code-block:: javascript
	
	var myString = "'abcd'"
	console.log( myString.sqlWrap() )
	/* Output will be "'''abcd'''" single quotes are escaped */

	
- The following example shows the output of a string:

.. code-block:: javascript
	
	var myString = "abcd"
	console.log( myString.sqlWrap() )
	/* Output will be 'abcd' */

string.sst()
-------------

The **sst()** (substring) function extracts the characters from a string based on start and end indices.
The valid range for the start and end indices shuld be Greater than or Equal to One and Less than the length of the String.

- An example is shown below with valid range for both indices:

.. code-block:: javascript

	var myString = "string to be modified"
	alert( myString.sst(1,6) );
	/* Value of myString is now "string" */


- An example is shown below with an invalid range for both indices:

.. code-block:: javascript

	var myString = "string to be modified"
	myString.sst(-1,100)
	/* Value of myString is still "string to be modified" */

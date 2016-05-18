

Table
=====

Tables are used primarily to display data in rows and columns. The details of how to create a table
are described below:

tableDef Object
---------------

- The **tableDef** object is the definition of a display table. An example of how to initialize a table is shown below:

.. code-block:: javascript

	var customTable = new tableDef();

A table consists of attributes which must be set to completely define a table, some of which are listed below:


tableid
~~~~~~~

- The **tableid** is unique identifer for the table. An example of how to set this attribute is shown below:

.. code-block:: javascript

	customTable.tableid = 'table1';

id
~~

The **id** attribute is used to define the unique identifiers for columns of the table. The data type of the id attribute is an array
an array and its values are set using the array syntax. If a table id is not set one will be generated automatically. The example below shows how to define column id's for a table:

.. code-block:: javascript

	customTable.id=['columnOne','columnTwo','columnThree'];

header
~~~~~~

The **header** attribute is used to set the display text for columns. The data type of the **header** and its values 
are set using the array syntax. **HTML** can also be passed as a value for a header. 


- The example below shows how to set the vlaues of headers with text only:

.. code-block:: javascript

	customTable.header=['Header-1','Header-2','Header-3'];


- The example below shows how to set the vlaues of headers with text and html:
	
.. code-block:: javascript

	customTable.header=['Header-2','Header-2','Select for All<br><input type=checkbox id=lll>'];

width
~~~~~	

The **width** attribute is used to define the **width** of columns in pixels. The data type of the width attribute is an array
and its values are set using the array syntax. A column can be hidden with a width of zero (0).

- The example below shows how to set the values of the **width** attribute:

.. code-block:: javascript

	customTable.width=[180,100,190];

	
tableonclick
~~~~~~~~~~~~

The **tablenclick** attribute is used set a **function** which will be executed when a user clicks the table.

- The example shows how to set the tableonclick attribute. It will execute the alert function when the table is clicked:

.. code-block:: javascript

	customTable.tableonclick="alert('Table Has Been Clicked')";
	



Table Functions
---------------
	
newRow(tableId)
~~~~~~~~~~~~~~~

The **newRow** function accepts the id of a table and adds a new row to the specified table. 

- The example shows how to use the **newRow** function:

.. code-block:: javascript

	function addNewRow(){
		newRow('table1');
	}

changeCol(columId, value)
~~~~~~~~~~~~~~~~~~~~~~~~~

The **changeCol** function accepts the **id** of a column and changes the **value** in the specified column.

- The example shows how to use the **changeCol** function:

.. code-block:: javascript

	changeCol('columnOne','new value');

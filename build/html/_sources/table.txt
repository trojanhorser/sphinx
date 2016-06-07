

Table
=====

Tables are used primarily to display data in rows and columns. The details of how to create a table
are described below:

tableDef Object
---------------

- The **tableDef** object is a javascript class which contains attributes which are used to define a table. The attributes
of the **tableDef** object are described below:


Constructor
~~~~~~~~~~~

The constructor is used to initialize the tableDef() object. An example is shown below:

.. code-block:: javascript

	var customTable = new tableDef();

tableid
~~~~~~~

- The **tableid** attribute is unique identifier which is used to reference the table. An example of how it is set is shown below:

.. code-block:: javascript

	customTable.tableid = 'tableId';

.. note:: If the **tableid** property is not set an id is generated automatically.


id
~~

The **id** attribute is used to define the unique identifiers for columns of the table. The data type of the id attribute
is an array and its values are set using the array syntax.

.. code-block:: javascript

	customTable.id=['columnOne','columnTwo','columnThree'];

header
~~~~~~

The **header** attribute is used to set the display text for column headers. The data type of the **header** is an array and its values
are set using the array syntax. **HTML** can also be passed as a value for a header.

- The example below shows how to set the vlaues of headers with text only:

.. code-block:: javascript

	customTable.header=['Header-1','Header-2','Header-3'];


- The example below shows how to set the vlaues of headers with text and html:

.. code-block:: javascript

	customTable.header=['Header-2','Header-2','Select for All<br><input type=checkbox id=lll>'];

width
~~~~~

The **width** attribute is used to define the **width** of columns in pixels. The data type of the width
attribute is an array and its values are set using the array syntax. A column can be hidden with a width of zero (0).

- The example below shows how to set the width of a single column:

.. code-block:: javascript
	//Set width of column 0 to 180px
	customTable.width[0]=[180];

- The example below shows how to set the values of the **width** attribute:

.. code-block:: javascript
  //Set width of column 0,1 and 2
	customTable.width=[180,100,190];

tableonclick
~~~~~~~~~~~~

The **tableonclick** attribute is used to set a **function** which will be executed when a user clicks the table.

- The example shows how to set the **tableonclick** attribute. It will execute the alert function when the table is clicked:

.. code-block:: javascript

	customTable.tableonclick="alert('Table Has Been Clicked')";

style
~~~~~

The **style** attribute is used to apply css styles to the columns of a table. The data type of the style
attribute is an array and its values are set using the array syntax.

- The example below shows how to set the style of a single column:

.. code-block:: javascript

		//Set style of column one to underline text;
		customTable.style[0]='text-decoration: underline';

- The example below shows how to set the style of multiple columns:

.. code-block:: javascript

		//Set style of column one, two and three with various font weights
		customTable.width=['font-weight: normal;','font-weight: bold;','font-weight: 900;'];

rowselectcolor
~~~~~~~~~~~~~~

The **rowselectcolor** attribute defines the color of a row when it is in the selected state.

- The example below shows how to set rowselectcolor:

.. code-block:: javascript
  //Set row select color with red
	customTable.rowselectcolor='red'

	//Set row select color with white in hexadecimal color format
	customTable.rowselectcolor='#FFFFFF'

tablewidth
~~~~~~~~~~

The **tablewidth** property sets the width of the table in pixels.

- The example below shows how to set **tablewidth** property to 400 pixels:

.. code-block:: javascript

	var table = new tableDef();
	table.tableid = 'table1';
	table.tablewidth = 400;

	height
	~~~~~~

	The **height** property is used to sets the height of the table in pixels.

	- The example below shows how to set **height** property to 200 pixels:

	.. code-block:: javascript

		var table = new tableDef();
		table.tableid = 'table1';
		table.height = 200;


showheader
~~~~~~~~~~

The **showheader** attribute is a boolean value, when set to **true** it displays the header of a table.
When set to false it hides the header. The default value is true.

- The following example shows how to display the table header:

.. code-block:: javascript

	var table = new tableDef();
	table.tableid = 'table1';
	table.showheader = true;

- The following example shows how to hide the table header:

.. code-block:: javascript

		var table = new tableDef();
		table.tableid = 'table1';
		table.showheader = hide;


dbref
~~~~~

The **dbref** attribute is a boolean value. When set to **true**,
the value of column **headings** and column **size** are taken from the data dictionary and don't have
to be explicitly defined.

- The example below shows how to use the **dbref** attribute. The values for column  and column width
  do not have to defined given that the dbref attribute is set to true:

.. code-block:: javascript

		//Table definition
		var table = new tableDef();
		table.tableid = 'table1';
		table.dbref = true;
		table.sqlselect = 'select firstname,lastname,age,address from user';

valuefunction
~~~~~~~~~~~~~

The **valuefunction** attribute accepts a function name as it's value. It updates the specific column with the value returned
from the function specified. The function must have a return type of **number** or **string**.

- An example of how to use valuefunction is shown below. The function **formatSalary** will format the value in
  salary column to with a  dollar "$" sign (eg. if salary is 100 it would be changed to $100):

	.. code-block:: javascript

		var table = new tableDef();
		table.tableid = 'table1';
		table.dbref = true;
		table.sqlselect = 'select salary from payment';

		function formatSalary(){
			"$" + valueOfCol("salary");
		}


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

readClickedRow()
~~~~~~~~~~~~~~~~

The **readClickedRow** function returns the index of the row selected. It also set the table cursor to the
positon of the row selected. The **tableonclick** attribute must be set to a defined function
for **readClickedRow** to be triggered.

- The example below retrieves the values for a row which was clicked. The example assumes that the  **tableonclick**
  attribute was set with **getRowData** function .

.. code-block:: javascript

		function getRowData() {

		 var tableIndex = readClickedRow();

		 if (eof) {return false}

		 var columnOneValue = valueOfCol('columnOne');
		 var columnTwoValue = valueOfCol('columnTwo');

		 alert("ColumnOne value is: " + columnOneValue + " ColumnTwo value is: " + columnTwoValue);
		}

numValueOfCol(columnName)
~~~~~~~~~~~~~~~~~~~~~

The **numValueOfCol** function accepts the column name of a specified field. It returns the numeric value of the field
specified.

- Example of what is returned for various field values are shown below:

.. code-block:: javascript

		//Retrieve value of a column called textField where textField='String With Only Characters'
		var columnValue = valueOfCol('textField');
		var value = numValueOfCol(columnValue);
		alert(value);
		/*
			value is 0
		*/

		//Retrieve value of a column called alphaNumericField where alphaNumericField='String With Letter And Numbers 1,2,3'
		var columnValue = valueOfCol('alpahNumericField');
		var value = numValueOfCol(columnValue);

		alert(value);
		/*
			value is 123
		*/

		//Retrieve value of a column called numericField where numericField='123'
		var columnValue = valueOfCol('numericField');
		var value = numValueOfCol(columnValue);

		alert(value);
		/*
			value is 123
		*/

readRow()
~~~~~~~~~

The **readRow** function traverses the rows of a table and allows the column of that row to be accessed.

- The following example shows how **readRow** is used to traverse the rows of a table and retrieve the values
  of columns *(columnOne and columnTwo)* in that row:

.. code-block:: javascript

	function readAllRows(which) {

		/Start at first row
		posTabCursor('table1',0);

		//Read first row
		readRow();

		while(!eof){
			var columnOneValue = valueOfCol('columnOne');
			var columnTwoValue = valueOfCol('columnTwo');

			alert("columnOneValue is : " + columnOneValue + " columnTwoValue value is: " + columTwoValue);

			//Read remaining rows until last row is reached or eof
			readRow();
		}

	}

posTabCursor(tableId,rowIndex)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **posTabCursor** function accepts two paramaters **tableId** and **rowIndex**. It sets the row position of the table
specified. The value *top can be passed as a **rowIndex**  parameter to set the row position to the first row.

- An example below shows how the **posTabCursor** function is used to calculate the sum of the numeric column **amount**:

.. code-block:: javascript

		function calculateSum() {

			var totalAmount = 0;

			posTabCursor('table1',0);
			//Or posTabCursor('table1','*top') could be used instead

			readRow();

			while (!eof) {
				 totalAmount += numValueOfCol('amount');
			 	 readRow();
			}
			alert('Total ='+totalAmount);
		}

deleteRow()
~~~~~~~~~~~

The **deleteRow** function is used to completely remove a row from a table.

- The example below is used to delete a row where **columnOne** has a value of **delete**.

.. code-block:: javascript

	function deleteRow() {

		 //Position table at the first row
		 posTabCursor('table1',0);

		 readRow();

		 while(!eof){
			var columnOneValue = valueOfCol('columnOne');

			//If the value of columnOne is "delete" then delete the row
			if(columnOneValue == "delete"){
				deleteRow();
			}
			readRow();
		 }
	}


hideRow()
~~~~~~~~~

The **hideRow** function hides the current row.

- The following example shows how to hide all rows in table

.. code-block:: javascript

	function hideAllRows() {

		 //Position table at the first row
		 posTabCursor('table1',0);

		 readRow();

		 while(!eof){
		 		//Hide current row
		 		hideRow();
				readRow();
		 }
	}

showRow()
~~~~~~~~~

The **showRow** function shows the current row.

- The example below is used to show rows where **columnOne** has a value of **show**. The example
	assumes that the rows were previously hidden using **hideRow()**

.. code-block:: javascript

	 function showRows() {

		 //Position table at the first row
		 posTabCursor('table1',0);

		 readRow();

		 while(!eof){
			var columnOneValue = valueOfCol('columnOne');
			//If the value of columnOne is "show" then show the row
			if(columnOneValue == "show"){
				showRow();
			}
			readRow();
		 }
	}

readCheckedRow(tableId,checkBoxName)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **readCheckedRow** function accepts two parameters, the table id and the name of a  checkbox.
It only reads the rows of a table which have been selected/checked by the user. A checkbox
must be defined as an attribute in the table with a valid name.

- The following example shows how to get the **checkedRows** for a table with a checkbox
  with an id of **tableCheckbox**:

.. code-block:: javascript

		function getCheckedRows() {

			 posTabCursor('table1',0);
			 readCheckedRow('table1','tableCheckbox');

			 while (!eof) {
		 		var columnOneValue = valueOfCol('columnOne');
				readCheckedRow('table1','tableCheckbox');
				alert(columnOneValue);
			 }
		}

isCheckedCol(checkBoxName)
~~~~~~~~~~~~~~~~~~~~~~

The **isCheckedCol** function accepts the name of a checkbox and returns true if the checkbox
is checked and false if it is not. It can be used as an alternative to **readCheckedRow**.

- The following example shows how to use the **isCheckedCol** function to retrieve rows which have been
  selected:

.. code-block:: javascript

	function getCheckedRows() {

	 posTabCursor('table1',0);
	 readRow();

	 while (!eof) {

	    if (isCheckedCol('tableCheckbox')) {
				var columnOneValue = valueOfCol('columnOne');
				alert(columnOneValue);
		  }

			readRow();
	 }

	}



applyTableDef(tableDefObject)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **applyTableDef** function accepts a tableDef object as a parameter and generates HTML based on the attribute
values of the tableDef object. It is used with **changeContent** to render the table HTML to page.

- The following example shows the HTML which is returned by the applyTableDef function for the customTable
	object:

.. code-block:: javascript

	var tableHTML = '';
	//Table definition
	var table = new tableDef();
	table.tableid = 'customTable';

	//Define column id's
	table.id = ['columnOne','columnTwo','columnThree'];

	//Define text for headers
	table.header = ['Column One','Column Two','Column 3'];

	//Get HTML from applyTableDef function
	tableHTML = applyTableDef(table);

The value of **tableHTML** is shown below:

.. code-block:: html

		<SPAN id="customTabletableheadwrap"  class=tableHeadwrap >
		<TABLE ID="customTablehead" class="tableHead" onclick="undefined">
		<col id=customTable$ha0 width=132>
		<col id=customTable$ha1 width=132><col id=customTable$ha2 width=132>
		<col width=15>
		<tr BGCOLOR=#336699>
		<td id="columnOne" align=center>Column One</td>
		<td id="columnTwo" align=center>Column Two</td>
		<td id="columnThree" align=center>Column 3</td>
		<td class=emptycol></td></tr></table></span><table cellpadding=0 cellspacing=0 border=0>
		<tr>
		<td>
		<div id=customTable$wrap class="tableWrap" style="height:200px;"
		onscroll=customTabletableheadwrap.scrollLeft=this.scrollLeft>
		<TABLE ID="customTable" STYLE="table-layout:fixed">
		<col id=customTable$hb0 width=132>
		<col id=customTable$hb1 width=132>
		<col id=customTable$hb2 width=132>
		<tbody class="tableBody">
		</tbody>
		</TABLE>
		</td>
		</div>
		</TABLE>

- The following example shows how the **changeContent** function is used to render the HTML of the
  **tableHTML** variable:

.. code-block:: javascript

		changeContent( 'tableDiv', tableHTML );

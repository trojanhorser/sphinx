

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

height
~~~~~~

The **height** attribute is used to define the height of the table in pixels.

- The example below sets the height of the **customTable** to 500 pixels 
.. code-block:: javascript
	//Set width of column 0 to 500px
	customTable.height=500;

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

sqlselect
~~~~~~~~~

The **sqlselect** attribute is used to bind the table to an sql statement. The result or data obtained from the executed 
sql will be used to populate the table.

- The following example shows how to bind an sql statement to a table:

.. code-block:: javascript

		var table = new tableDef();
		table.tableid = 'table1';
		table.showheader = hide;
		//Sql statement to retrive user information from the user table.
		table.sqlselect = 'select firstname,lastname,age,address from user';
		
.. note:: If the name of the headings are not set (as in the example above) the default values
		  will be the name of the columns of the table in the database. However if the **dbref**
		  attribute is set the column headings of the data dictionary will be displayed.
		  
		  
sqlrcdcnt
~~~~~~~~~~

The **sqlrcdcnt** attribute is used to set the amount of records retrieved from the executed select statement.

- An example of how to set the the **sqlrcdcnt** to 10 is shown below:

.. code-block:: javascript

		//Table definition
		var table = new tableDef();
		table.tableid = 'table1';
		table.dbref = true;
		table.sqlselect = 'select firstname,lastname,age,address from user';
		table.sqlrcdcnt = 10; 

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
		
- Alternatively the sql statements can be modified to include the value function as a column. This is done by prefixing the function name
  with the **@value:** string. The example below shows include the value function in the sql string.
  
	.. code-block:: javascript

		var table = new tableDef();
		table.tableid = 'table1';
		table.dbref = true;
		
		table.sqlselect = 'select @value:formatSalary from payment';

		function formatSalary(){
			"$" + valueOfCol("salary");
		}
	

Table Functions
---------------

column(columnId)
~~~~~~~~~~~~~~~~

The **column** function is used access specific table column elements. Attributes of these columns can also be set as shown in the
examples below:

The example below sets the **width** of **columnOne** to 400 pixels and also sets the style attribute.

	.. code-block:: javascript
			table.column('columnOne').width=400;
			table.column('columnOne').style='border:2px solid red';
			
			
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

Sorting A Table
---------------

sortSqlSelectResult
~~~~~~~~~~~~~~~~~~~

The  **sortSqlSelectResult** function sorts the data of a table in 
**ascending** or **descending** order. The sort order is defined by the  
**sortorder** global varibale *(see global varibales for more details on
the sortorder global varibale)*.

- The example below shows how to use the **sortSqlSelectResult** function:

.. code-block:: javascript
	
	var table=new tableDef();
	table.tableid='table1';
	table.dbref=true;
	
	var sqlStatement="select firstname,lastname,address from user";
	
	//Fetch the first twenty records from the user table
	if (!sqlSelect(sqlStatement,'$records',20)) {
		alert(sqlerr);
		return false;
	}
	
	//Sort records by firstname column
	sortSqlSelectResult($records,'firstname');
	
	//Set the table with the sorted $records
	setSqlSelectResult(table, $records);
	
	//Change content of the div which contains the table with 
	changeContent('tableContainerDiv',applyTableDef(table));

Adding Custom HTML Fields To A Table
-------------------------------------

Custom html fields can be added to columns of a table in two main ways:

1. Including the HTML for the element in sql query. 
2. Or Ad an alias column to sql query and perform post processing on the
   sql results to add the HTML element.
   
- This example shows how a checkbox column can be added to a table by embeding HTML in the sql 
  statement. When the table is rendered a checkbox will be displayed in the **select** column: 

.. code-block:: javascript

	var table = new tableDef();
	table.tableid = 'table1';
	table.dbref = true;
	
	var sqlStatement="select '<input type=checkbox name=selectCheckBox>' select,firstname,lastname,address from user";
	
	/***
		Code to generate table here
	**/
	
- This example shows how a checkbox column can be added to a table by performing
  post processing on the sql result.
   
.. code-block:: javascript

	var table = new tableDef();
	table.tableid = 'table1';
	table.dbref = true;
	
	var sqlStatement="select '<input type=checkbox name=selectCheckBox>' select,firstname,lastname,address from user";
	
	if (!sqlSelect(sqlStatement,'$records',20)) {
    	alert(sqlerr);
		return false;
	}
	
	for (i=0; i<$records.rcdcnt; i++) {
		$records.select[i]='<input type=checkbox name=selectCheckBox>';
	}
	
	/**
		Code to generate table here
	**/
	
Lookup Tables
-------------

A **lookup** is implemented as a combination of a search field, a lookup table and a function allows the user to search
for a record in that table.

Lookup Field
~~~~~~~~~~~~

The lookup field allows the user to either type their value directy into the field or do a dynamic search. The
user will search through a lookup table of possible entries and choose the appropriate on. And the list can also be 
filtered by enetring part of the information. 

- The example below shows how lookup field is defined

Table Definition 
~~~~~~~~~~~~~~~~

A lookup table is defined using the **tableDef** object with a table type of *lookup*. It also accepts the values
for the fields that must be displayed and the field(s) that must be populated with the record chosen by the user. 

A typical lookup table requires that the following attributes be specified:

- **returnfld** - This is an array which specifies the fields of the selcted record that will be used by the program.

- **returninto** - This is an array which specifies which form fields will be used to display the returned fields.

- **lookupfldlen** - This specifies the length of the lookup field in pixels.

- **lookuphtml** - This specifies the HTML which is diplayed above the lookup table.

- The example below shows how a lookup table is defined:

.. code-block:: javascript

	var lookUpTable = new tableDef('lookup');//table type of lookup is passed to the constructor 
	lookUpTable.dbref = true;
	lookUpTable.returnfld = ['companyid','companyname']; 
	lookUpTable.returninto = ['companysearch','companyname'];
	lookUpTable.lookupfldlen = 20;
	lookUpTable.top = 'center';
	lookUpTable.lookuphtml = '<span style="color:red">Only Active Customers will be displayed</span><br>';
	lookUpTable.sqlselect="select companyid, companyname from wsconsgn order by companyname";

There are two approaches to creating the SQL select :

1. A normal sql statement cna be used *(as shown in the example above)*, however it must contain the values
specified in the **returnfld**.

2. A sql statement can be modified to contain any SQL conditional operator eg. **(LIKE, NOT, IN)**  
along with the **lookupfld** keyword. The program looks for that keyword and replaces with value from the lookup field.

- In the example below the like sql conditional operator is used:
    
.. code-block:: javascript

	lookUpTable.sqlselect = "select companyid, companyname from wsconsgn 
							 where companyname like 'lookupfld%' order by companyname";

colprefix 
---------

**colprefix** is used to ensure the uniqueness of column names across table instances. 
If the column prefix is not used, conflicts may occur between tables that have column names which 
are identical. Assigning column prefix property of the tabledef object effectively changes the column id's asscoiated with each table column with a prefix. 
The prefix is applied as **[colprefix#columnname]**.

- The example below shows two tables **employee** and **employeedetails**. Both tables  
  have the column employeeid. This will cause a conflict and will not provide a result when the
  column **id** is referenced.

    
.. code-block:: javascript
 
  var employeeTable = new tableDef();
  employeeTable.tableid = 'employeeTableId';
  employeeTable.dbref = true;
  employeeTable.sqlselect = "select id, firstname, lastname from employee";

  var employeeHistoryTable = new tableDef();
  employeeHistoryTable.tableid = 'employeeHistoryTableId';
  employeeHistoryTable.dbref = true;
  employeeTable.sqlselect = "select id, updated from employeehistory";

  /**
  	Values would be not be returned for employeeTableId and employeeHistoryTableId
	since there is no way to differenciate the columns.
  **/
  var employeeTableId = valueOfCol('id');  
  var employeeHistoryTableId = valueOfCol('id'); 
 
  
- The example below shows two tables **employee** and **employeedetails**. Both tables  
  have the column employeeid. This time however colprefix is used to differenciate the id 
  columns.

    
.. code-block:: javascript

  var employeeTable = new tableDef();
  employeeTable.tableid = 'employeeTableId';
  employeeTable.colprefix = 'employee1'
  employeeTable.dbref = true;
  employeeTable.sqlselect = "select id, firstname, lastname from employee";

  var employeeHistoryTable = new tableDef();
  employeeHistoryTable.tableid = 'employeeTableId';
  employeeTable.colprefix = 'employee2'
  employeeHistoryTable.dbref = true;
  employeeTable.sqlselect = "select id, updated from employeehistory";

  /**
  	Values would be returned for employeeTableId and employeeHistoryTableId
  **/
  var employeeTableId = valueOfCol('employee1#id');  
  var employeeHistoryTableId = valueOfCol('employee2#id'); 
  
Tables And Input Fields
-----------------------

HTML input fields can be added to tables. 

Int('columnOne','columnTwo','columnThree','column..........' )
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **Int** function accepts a variable argument list of column names. 
When the function is invoked it initializes the columns in a global variable 
**$tabldata** which is of type sqlSelectResult. The HTML of individual columns of the
**$tabldata** object can then be replaced with the HTML for input fields.

- The example below shows how the **table** object is initialized with the **Int** function
  and how the HTML for input fields are addes to the table.

.. code-block:: javascript
	
	//Define table
	var table = new tableDef();
	table.dbref = true;
	table.tableonclick = "displayData()";
	
	//Initialize columns for **table** object
	Int('inputFieldOneColumn','inputFieldTwoColumn');
	
	//Create HTML for input fields
	var inputFieldOneHTML = "<input type=text size=10 maxlength=20 name=inputFieldOne value='Enter Text Field One'>";
	var inputFieldTwoHTML = "<input type=text size=10 maxlength=20 name=inputFieldTwo value='Enter Text Field Two'>";
	
	//Add HTML input fields to table
	for (i=0; i<$data.rcdcnt; i++) {
		addSqlSelectRow($tabldata);
		$tabldata['inputFieldOne'][i]=inputFieldOneHTML;
		$tabldata['inputFieldTwo'][i]=inputFieldTwoHTML"
	}
	
	setSqlSelectResult(tabl,$tabldata);
	changeContent('tabldata', applyTableDef(tabl));

Referencing Input Fields In A Table By Name
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In order to retrieve a value from an input field in a table the input field name must be used.

- The example below shows how the input field **name** can be used to retried the value:

.. code-block:: javascript
   
   //Use input field name 'inputFieldOne'
   alert(valueOfCol('inputFieldOne'));
   //'Enter Text Field One' will be displayed

Referencing Input Fields In A Table By ID
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In order to reference a input field by id the following steps should be taken:
	1. A **pointer** must be created with a unique value for each row.
	2. A hidden field must be created with the pointer as the **id**.
	3. Input fields must be given a unique id based on the value of the pointer.
	4. The input field must then be referenced by the **id** using **valueOfCol**.

- The example below shows how to reference an input field by id:

.. code-block:: javascript
    
	packagehtml="<input type=text size=10 maxlength=20 id=#ID value='$VAL'>";
	descriptionhtml="<input type=text size=30 maxlength=30 id=#ID value='$VAL'>";

    tabl=new tableDef();
	tabl.dbref=true;
	tabl.tableonclick="displayData()";
	sqltxt='select paccde, pacdes from wspack';

	if (!sqlSelect(sqltxt,'$data')) {
		alert(sqlerr);
		return false;
	}

	$tabldata=new sqlSelectResult('package','description','image','pointer');

	for (i=0; i<$data.rcdcnt; i++) {
		addSqlSelectRow($tabldata);
		
		//Set ID of packagedata field with index (i)
		$tabldata['package'][i]=(packagehtml.split('$VAL').join($data.paccde[i])).replace("#ID","packagedata" + i);
		
		//Set ID of descriptiondata field with index (i)
		$tabldata['description'][i]=(descriptionhtml.split('$VAL').join($data.pacdes[i])).replace("#ID","descriptiondata" + i);
		
		$tabldata['image'][i]="<img src='../image/print.ico'>";
		
		//Create pointer - index is the same as the for loop
		$tabldata['pointer'][i] = i;
	}
	
	//Hide pointer column 
	tabl.column('pointer').width=0;

	setSqlSelectResult(tabl,$tabldata);
	changeContent('tabldata', applyTableDef(tabl));
  }

  function displayData() {
	n=readClickedRow();
	if (eof) {return}
	
	//Retrieve value of pointer
	var pointerValue = valueOfCol('pointer');
	
	//User pointer to retrive the value of a field
	alert(valueOf('packagedata'+pointerValue));
 }




Build Tables with In-Cell Editing Capability
===========================================

sqlSelectResult object

addSqlSelectRow()

setSqlSelectResult()

- Dynamically build HTML for controls in each table cell.
- Use placeholders in HTML text to indicate where field IDs will be inserted.
- Implement a “pointer” column to store an integer value that is unique for each row.
- Use changeCol() to insert the markup into the table cell.

Lesson 10 – Select List and PickList
=====================================

Building a Select List that populates from a database:
selectList object:

Attributes:
~~~~~~~~~
- sqlselect
- default value
- nulltext

Functions:
----------

applySelectList(selectList object, fieldName)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

applySelectList(selectList object, fieldName, sqlSelectResult)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Building a picklist and using it to select records.

pickList Object

Attributes:
~~~~~~~~~~~
  
- returncol
- filteron
- filtertext
- returninto
- title
- onaccept
- sqlselect

Functions:
~~~~~~~~~~
 
- displayPicklist(picklist object)




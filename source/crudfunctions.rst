
.. toctree::
   :maxdepth: 1

CRUD Functions
================

CRUD *(Create, Read, Update, Delete)* are a set of functions used to perform database operations. These functions and how they are used is described below:

sqlSelect(sql, text, dataObject)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This function is used to retrieve records from a database. It accepts three parameters:

1. The SQL Select text ( eg. *"select * from customers"* )
2. The variable that data retrieved should be stored in
3. and the amount of rows which should be returned.

- An example is shown below:

.. code-block:: javascript
	
	var sqlStatement="select bilno, cnsign, 'nothing' as n from wsblhead";
	
	if (!sqlSelect(sqlStatement,'$data',1000)) {
		alert(sqlerr);
		return false;
	}
	
	if ($data.rcdcnt==0) {alert('No data found'); return false}

If an error occurs during the sql transaction the **sqlerr** global variable is set with details of the error.
The **$data.rcdcnt** is also returned as shown in the example above.


sqlInsert(table,recordObject)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **sqlInsert** function adds a record to a specific table to the database. it accepts two parameters:

1. The database table that will be modified.
2. and a object with the fields that need to be inserted.

The example below creates and object using the **sqlUpdateObj** object which extracts fields from **form1** and inserts it into
the **users** table:

.. code-block:: javascript
	
	var tableName = 'users';
	
	var insertObject = new sqlUpdateObj('*form:form1');
	
	if (sqlInsert(tableName,insertObject)) {
		alert('Record Added.');
	} else {
		alert(sqlerr);
		return false;
	}

sqlUpdate(table, recordObject, updateCriteria)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **sqlUpdate** function updates records in a table based on a specific criteria. It accepts three parameters:

1. The database table that will be modified.
2. The object with the fields that need to be updated.
3. and the where criteria for the records which need to be updated.

The example below updates the changed fields of a record in the **container** table.

.. code-block:: javascript
	
	var updateObject = saveddata.returnChangedVar();
	
	var tableName = "container";
	
	var whereCriteria="containercode=500";
	
	if( sqlUpdate(tableName,updateObject,whereCriteria) ) {
		alert('Record Updated.');
	} else {
		alert(sqlerr);
		return false;
	}
	
sqlDelete(table, deleteCriteria)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

This removes records from a database table based on a specific criteria.

1. The database table that will be modified.
2. and the where criteria for the records which need to be deleted.


The example below deletes a record in the **user** table based on the criteria specified:

.. code-block:: javascript

	var tableName = "user";
	
	var whereCriteria = "username=john";
	
	if (!sqlDelete(tableName, whereCriteria)) {
		alert(sqlerr);
		return false;
	}

.. note:: All CRUD functions update the "sqlerr" global variable when if fails. This variable can be accessed and displayed to view the nature of the issue.

sqlUpdateObj(element)
~~~~~~~~~~~~~~~~~~~~~~

The **sqlUpdateObj** is used to automatically generate an object from fields. 
The object can be generated from individual fields or an entrie form.

- The example below shows how the create an **sqlUpdateObj** from individual fields **(fieldOne, fieldTwo)**:

.. code-block:: javascript
	
	var fieldObject = sqlUpdateObj('fieldOne',fieldTwo)
	
	/*
		The value of the fieldObject is below:
		
		fieldObject{
			fieldOne:"value1",
			fieldTwo:"value2",
		} 
	*/

- The example below shows how the create an **sqlUpdateObj** from a form:

.. code-block:: javascript
	
	var fieldObject = sqlUpdateObj('*form:form1')
	
	/*
		The value of the fieldObject is below:
		
		fieldObject{
			fieldOne:"value1",
			fieldTwo:"value2",
			fieldThree:"value3"
			...
			..
			.
		} 
	*/
	
- A full example of how the **sqlUpdateObj** is used to save all the fields on a form is shown below:

.. code-block:: javascript
	
	var updobj=new sqlUpdateObj('*form:form1');
	
	if (sqlInsert('wsconsgn',updobj)) {
		alert('Record Added.');
	} else {
		  alert(sqlerr);
		  return false;
	}
	
sqlValueOf(field)
~~~~~~~~~~~~~~~~~

The **sqlValueOf** function formats a field in valid SQL format. For numeric fields the value is not modified.

- An example of how it parses a text field which has a value of **"testing"** is shown below:

.. code-block:: javascript
	
	var  result = sqlValueOf('textField');
	
	/*
		The value of result is 'testing' which is a string value with single quites.
	*/

- An example of how it parses a numeric field which has a value of **100** is shown below:

.. code-block:: javascript
	
	var  result = sqlValueOf('numericField');
	
	/*
		The value of result is 100 which is numeric.
	*/

- An example of how it parses a date field which has a value of **2015/09/11** is shown below:

.. code-block:: javascript
	
	var  result = sqlValueOf('dateField');
	
	/*
		The value of result is 20150911 which is numeric .
	*/
	
- An example of how it parses a time field which has a value of **11:00** is shown below:

.. code-block:: javascript
	
	var  result = sqlValueOf('timeField');
	
	/*
		The value of result is 1100 which is numeric .
	*/



 



.. toctree::
   :maxdepth: 1


Data Dictionary
===============

The dataDictionary contains the javascript definiton for objects within a database. This includes fields, tables, views 
and triggers within a database. 

Advantages
----------

The dataDictionary has the following advantages:

1. It allows the database schema to be defined in javascript.
2. It allows html fields to be generated based on the attributes of database fields/columns.
3. It allows the database schema to be generated from the data dictionary configuration.
4. It is database agonostic i.e it's configuration can be applied to any relational database.

Creating A Datadictionary
-------------------------

The data dictionary configuration resides in **dataDictionary.js** file. Database field/column definiton is done using the *addDicField*
function and table definiton is done using the *dbTableDef* object.

Defining database columns/fields with the addDicField function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The *addDicField* function defines the attributes of fields/columns of database tables. The examples for usage are described below, however for a breif overview of the *addDicField* function click `here <file:///P:/AdvantumAppLessons/documentation/JSDoc/StandardSQ/global.html#addDicField>`_.

addDicField Parameter description
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	**Field Name** - This is the name of a field/column in the database and it is always the first parameter. 
	An example using "fname" as the field name is shown below: 

		.. literalinclude:: dataDictionary.js
		   :language: javascript
		   :lines: 10-10

	**Field Size** - This represents the length for character based fields and the size for 
	numeric fields and it is always the second parameter. It is used with **Decimal Place** parameter to 
	indicate the decimal place for numeric fields. An example of its usage is shown below:  

		*In this example "10" represents the length of the firstname field:*

			.. literalinclude:: dataDictionary.js
			   :language: javascript
			   :lines: 10

		*In this example "13" represents the size in bytes that us used to store the number and "4" 
		is the number of decimal places:*

			.. literalinclude:: dataDictionary.js
			   :language: javascript
			   :lines: 22
			   
		*To define an integer the decimal point value must be 1 as shown below:*

			.. literalinclude:: dataDictionary.js
			   :language: javascript
			   :lines: 23
			   
    **Field Description** - This a meaningful label for the field primarily used for presentation 
	purposes and it is always the last parameter. In the example below "Reference" is used as the Field Label:
			   
			.. literalinclude:: dataDictionary.js
			   :language: javascript
			   :lines: 25
	   
Defining database tables with the dbTableDef object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **dbTableDef** object contains the schema definition for tables within a database. 
The examples for usage are described below, however for a breif overview of the *dbTableDef* object click `here <file:///P:/AdvantumAppLessons/documentation/JSDoc/StandardSQ/global.html#dbTableDef>`_.

**1. Desc** - This is the display name of the table in the database.
	
	**Example:(Setting the desc attribute)**: This example shows how to set the **desc** attribute:
	
			.. literalinclude:: dataDictionary.js
					   :language: javascript
					   :lines: 757
	

**2. Index** - This is an array which represents one or more indices and the field(s) it is associated with. The index
and column information is passed as a string in the following format **"< index name >:< field1, field2,. ..... >"**. 
Examples of how to use the index are shown below:

	**Example 1: (One index and one field):** - In this example index "indexFirstname" is mapped to a single column "firstname":
	
		.. literalinclude:: dataDictionary.js
				   :language: javascript
				   :lines: 746
				   
	**Example 2: (One index and multiple fields):** - In this example index "indexFullname" is mapped to the "firstname" and "lastname" columns:
	
		.. literalinclude:: dataDictionary.js
				   :language: javascript
				   :lines: 753
	
	**Example 3: (Multiple indices):** - In this example two indices, "indexFullname" and "indexMiddleName" are mapped to various fields:
 	
		.. literalinclude:: dataDictionary.js
				   :language: javascript
				   :lines: 760-761

 
**3. Keyfield** - This is the primary key field which is used for table. Composite keys can be created by delimmiting mutilple fields with commas. Examples are shown below:
 
	**Example 1: (Primary Key [Single field]):** - This example shows a single field key is defined:
	
		.. literalinclude:: dataDictionary.js
				   :language: javascript
				   :lines: 759
	
	**Example 2: (Composite Key [Multiple fields]):** - This example shows how a key with mutliple fields (composite key) is defined:
	
		.. literalinclude:: dataDictionary.js
				   :language: javascript
				   :lines: 752
	

**4. Field** - The field attribute is used to define the fields of a table. Multiple fields are sepperated by comma's as shown in the example below:
		
	**Example: (Defining Database Fields]):** - This example shows how to set the field attribute:
		
			.. literalinclude:: dataDictionary.js
					   :language: javascript
					   :lines: 758
					   				   
			
After  setting the attributes of the **dbTableDef** object. The `applyDbTableDef <file:///P:/AdvantumAppLessons/documentation/JSDoc/StandardSQ/global.html#applyDbTableDef>`_ function must be run to apply to table configuration, an example is shown below: 
			
		
	**Example: (executing applyDbTableDef):** - This example shows how to execute the function, it is always executed after all attributes of the dbTableDef have been set:
		
			.. literalinclude:: dataDictionary.js
					   :linenos:
					   :language: javascript
					   :lines: 756-762
					   :emphasize-lines: 7

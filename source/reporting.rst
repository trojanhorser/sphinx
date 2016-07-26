
.. toctree::
   :maxdepth: 1

Reporting
=========

The reporting module defined in the **standardreport** library, faciliates the creation of reports using the HTML syntax. Reports can be outputted in pdf format. 
Reports are divided into three main sections:

- Header
- Details
- Footer

Report Object
--------------

reportDef
~~~~~~~~~

The **reportDef** object is used to initialize a report. 

The example below shows how to define a reportDef object.

.. code-block:: javascript

	var report = new reportDef();
	
reportDef Attributes
--------------------

reporttable
~~~~~~~~~~~

The **reporttable**, this accepts a **reportTableDef** object as it's parameter.

pagehead
~~~~~~~~

This represents the content and layout of the page header. The html content placed in this will be rendered at the top of each page in the
report.

pageheadheight
~~~~~~~~~~~~~~

This represents the height of the page header in pixels.  

reportTableDef
--------------

The **reportTableDef** object is used to define the data and tabular layout that makes up the body of the report.
 
reportTableDef Attributes
-------------------------

fixedwidth
~~~~~~~~~~

The **fixedwith** atttribute indicates that the report details will be limited to the default width. If it is not 
specified the rows in the details section of the report will have a width based on it's the contents. 

rowsperpage
~~~~~~~~~~~

The **rowsperpage** attribute specifies to amount of rows which will be displayed on a page before the report
breaks.

reportBreak
-----------

A reportBreak object indicates to the program that a new page should be started based on a specific condition.

reportBreak Attributes
----------------------

condition
~~~~~~~~~

This is a boolean expression which indicates when a report whould execute a page break.

- The example below shows how the condition operator is used:

.. code-block:: javascript

  reportBreak = new reportBreak();
  reportBreak.condition ="reportData.firstname[*row] != reportData.firstname[*row+1]";

summary
~~~~~~~

The summary attribute is used to perform aggregate calculations on specific columns. It accepts a string value encoded as follows,
**aggregationFunction:columnNumber**. 

- The following example below shows how to use the summary attribute:

.. code-block:: javascript

  reportBreak = new reportBreak();
  
  //Perform summary on column 6
  reportBreak.summary ='sum:6';
  
  //Perform average on column 4
  reportBreak.summary ='average:4';
  
  //Calculate the minimum value for column 2
  reportBreak.summary ='min:2';
 
  //Calculate the maximum value for column 2
  reportBreak.summary ='max:2';
  
text
~~~~

Text is a string array which sets the text which should be shown at the beginning of a page break. Each index in the array reprensents a new line.

- The following example shows how to use the **text** property:

  .. code-block:: javascript

  	 reportBreak = new reportBreak();
	 
	 reportBreak.text[0] = "First Line";
	 
	 reportBreak.text[0] = "Second Line";
	 

outputline
~~~~~~~~~~

The **outputline** attribute  is used in combination with the text attribute to place text beneath specific columns. 

- An example of how outputline is used is shown below:

 .. code-block:: javascript

  	 reportBreak = new reportBreak();
	 
	 reportBreak.text[0] = '*array:outputline';
	  
	 outputline=[];
	
	 outputline[0]='Total Credit Limit By Customer Type :';
	
	 outputline[6]='<@:edit(*summary6)@>';

pageafter
~~~~~~~~~~

useReport(reportDef)
~~~~~~~~~~~~~~~~~~~~

The **useReport** function accepts a **reportDef** object as its parameter.
The report object that is passed represents the report object which will
be used by the program.

The example below shows how to useReport function is used:

.. code-block:: javascript

	var report = new reportDef();
	useReport(report);
	
printOut(HtmlString)
~~~~~~~~~~~~~~~~~~~~

The **printOut** function accepts a **HtmlString** as it's parameter as HTML. It is used to
specify the output of the report indicated by the **useReport()** function. 
The output is in HTML format. 

An example of how the **printOut()** function is used:

.. code-block:: javascript

	var report = new reportDef();
	useReport(report);
	printOut("<h1>Report Information</h1>");


An example of how the **printOut()** function can be called mutilple times in order to generat:

.. code-block:: javascript

	var report = new reportDef();
	useReport(report);
	printOut("<h1>Report Information</h1>");
	printOut("<h1>More Report Information</h1>");
	

createReport()
~~~~~~~~~~~~~~

The **createReport** fucntion builds the report based on the  value specified in the **printOut()**
function. It returns a boolean value to indicate if the report has been created or not.


The example below shows how the 

.. code-block:: javascript

	var report = new reportDef();
	useReport(report);
	
	printOut("<h1>Report Information</h1>");
	printOut("<h1>More Report Information</h1>");
	
	//Create report fucntion
	if (createReport()) {
		alert("Report has been created");
	}


viewReport()
~~~~~~~~~~~~

The **viewReport()** function displays the report created in pdf format. 


The example below shows how the **viewReport** function is used.

.. code-block:: javascript

	var report = new reportDef();
	useReport(report);
	
	printOut("<h1>Report Information</h1>");
	printOut("<h1>More Report Information</h1>");
	
	//Create report fucntion
	if (createReport()) {
		viewReport();
	}

Advanced Reports
================

Report Variables
----------------

Reports consist of many default variables which are prefixed with the @ symbol. The description for each
variable is given below:

@date 
~~~~~

Shows the current date.


- The example below shows how to use the current @date report variable

.. code-block:: javascript

 	var report = new reportDef();
	useReport(report);
	printOut("<h1>Current Date @date</h1>");
	
	
@page
~~~~~

- The example below shows how to use the current @page report variable

Shows the current page number.


.. code-block:: javascript

 	var report = new reportDef();
	useReport(report);
	printOut("<h1>Current Page @page</h1>");
	
	
Dynamic Variables
~~~~~~~~~~~~~~~~~

Dynamic variables can be created using the following format <@:variableName@>. The **variableName** represents a 
global variable which can be used:

- The example below shows how to use the <@:globalVariable@> contained in the report:

.. code-block:: javascript

 	globalVariable = "value";
	useReport(report);
	printOut("<h1><@:globalVariable@></h1>");
	
reportDef Attributes
--------------------

reporttable
~~~~~~~~~~~

The **reporttable**, this accepts a **reportTableDef** object. as it's parameter.

reportBreak
-----------

A page break is a marker that tells the program that a new page should be started based on a specific condition.


addReportBreak
--------------










	
	





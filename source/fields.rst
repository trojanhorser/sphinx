
.. toctree::
   :maxdepth: 1

Fields
======

Javascript library dependency  to be included
---------------------------------------------
In order  for data bound fields to be parsed the following librariese must be included:

.. code-block:: html

	<script type='text/JavaScript' src='../pcstools/standardjs.js'></script>
	<script type='text/JavaScript' src='../pcstools/standardsq.js'></script>
	<script type="text/JavaScript" src="startup.js"></script>
	<script type="text/JavaScript" src="datadictionary.js"></script>


Custom Attribute Description
-----------------------------
A form field consists of a **span** html tag with custom attributes.
These attributes are parsed to produce the HTML which is ultimately rendered by the web application.
These attributes are described in detail below:

**ref**
~~~~~~

The *ref* attribute is used to reference a field from the data dictionary.
When a field is referenced it uses the attributes defined in the data dictionary to generate the html field.

- The example below uses *bilno* as the referenced field:

.. code-block:: html

	<span field=customfield ref=bilno label=Bill></span>


**type**
~~~~~~~~

The *type* attribute determines the data type that the field will accept. There are four data types; character,numeric, date and time.
Each of these attributes are explained below:

		- *character* - The charater attribute allows all alphanumeric characters to be accepted by the html field. An example is shown below:

			.. code-block:: html

				<span field=customfield type=char ></span>

		- *numeric* - The numeric attribute allows only numeric values to accepted by the html field. It produces an alert when input is invalid. An example is shown below:

			.. code-block:: html

				<span field=numericField type=numeric ></span>

		- *date* - The date attribute formats the html field into three sepperate sections; **year**, **month** and **day**. The order of these sections will vary based on the format specified in the application. An example is shown below:

			.. code-block:: html

				<span field=dateField type=date ></span><br>

		- *time* - The time attribute formats the html field in two sections, **minutes** and **seconds**. An example is shown below:

			.. code-block:: html

				<span field=timeField type=time></span>

**length**
~~~~~~~~~~~~

This length attribute specifies the maximum length of a field, according to the field type. If the length specified is greater than 80 then html text area will be rendered instead of an input field. Validation is also added if the user exceeds the maxiimum length of the field.

	.. code-block:: html

		<span field=firstName length=160></span>


**decimal**
~~~~~~~~~~~~

The decimal place field is used to indicate the decimal place for numeric fields. An example is shown below:

	.. code-block:: html

		<span field=rcpamt  decimal=4 ></span>


**editcode**
~~~~~~~~~~~~

Specifies the format of the input of numeric characters. Edit code consists of five(5) codes:

	- Edit code **"0"** does not apply a format.

		.. code-block:: html

			<span field=var1 editcode=0 ></span>

	- Edit code **"J"** applies decimal place formatting based on the value of the **decimal** attribute.
	  For example if the decimal value is 4, The value **1230** would be formatted to **1230.0000**.

		.. code-block:: html

			<span field=var2 editcode=J ></span>

	- Edit code **"N"** shows a blank field if the numeric value is zero (0)

		.. code-block:: html

			<span field=var2 editcode=N ></span>


	- Edit code **"Y"** this is used to format integers in the (yyyy/mm/dd) format. For example if 20151012 is inputted it would be formatted to **2015/10/12**.

		.. code-block:: html

			<span field=var3 editcode=Y ></span>

	- Edit code **"D"** this is used to format integers in the dd/mm/yyyy format. For example if 12102015 is inputted it would be formatted to **12/10/2015**.

		.. code-block:: html

			<span field=var4 editcode=D ></span>

	- Edit code **"M"** this is used to format integers in the mm/dd/yyyy format. For example if 10122015 is inputted it would be formatted to **10/12/2015**.

		.. code-block:: html

			<span field=var5 editcode=M ></span>


**fieldclass**
~~~~~~~~~~~~

Specifies a stylesheet (CSS) class name to determine how the field is formatted.

	.. code-block:: html

		<span field=chgdesc fieldclass=customStyle></span>

**label**
~~~~~~~~~~

Specifies the text for the label that will be displayed along with the field. Overrides the label text set in the data dictionary.

	.. code-block:: html

	   <span field=customfield ref=bilno label=Bill></span>


**nolabel**
~~~~~~~~~~~

Instructs program not to show a label for the field.

	.. code-block:: html

		<span field=customfield ref=bilno nolabel></span>


**search**
~~~~~~~~~~~~

Causes a search icon to appear beside the field that triggers the execution of a specified function.

	.. code-block:: html

		<span field=username search='find()'></span>


**labelclass**
~~~~~~~~~~~~~~~

Specifies a stylesheet (CSS) class name to determine how the field's label is formatted.

	.. code-block:: html

	    <span field=chgdesc labelclass=customStyle></span>

**labelwidth**
~~~~~~~~~~~~~~~

Specifies a custom width for the label, overriding any width that may have been set for the field's label in the data dictionary.

	.. code-block:: html

	    <span field=chgdesc labelwidth=90></span>


**upper**
~~~~~~~~~~

Causes the aphabetic characters displayed in a field to be capitalized. Also capitalizes characters entered by the user.

	.. code-block:: html

		<span field=chgdesc upper></span>

**output**
~~~~~~~~~~~~

Displays the field's content as text in a disabled control (similar to readonly, but has a different appearance).

	.. code-block:: html

		<span field=newbilno ref=bilno output></span>

**textarea**
~~~~~~~~~~~~

Represents the field as a free-text entry area with a vertical scrollbar. Additional attributes (rows and cols) can be specified as well.

	.. code-block:: html

		<span field=textAreaField textarea></span>

**rows**
~~~~~~~~~

Applies only to field with attribute 'textarea'. Specifies number of lines shown in the viewable area of the field at one time.

	.. code-block:: html
		<span field=description rows=10></span>

**cols**
~~~~~~~~~

Applies only to fields with attribute 'textarea'. Specifies maximum number of characters the may be shown in each line of the viewable area of the field at one time.

.. code-block:: html

	<span field=description cols=20></span>

.. note:: the **rows** and **cols** attributes only apply to textarea fields and will be ignored for **date** and **time** fields.


**nocalendar**
~~~~~~~~~~~~~~~~

Causes a date field to be displayed without the default calendar icon and the associated date-picking functionality it offers. {Calendar not to be displayed for date field}

	.. code-block:: html

		<span field=date nocalendar></span>


**select**
~~~~~~~~~~

Field **select** generates a html select field using key,value pairs in the format <key1>:<value1>,<key2>:<value2>,... . An example is shown below:

	.. code-block:: html

		<span field=options select='1:One, 2:Two'></span>

- A select can also be populated using an array and the **loadSelect** function. The **loadSelect** function accepts the **id** of
  the select and the **array** which will be used to populate it. An example use the **loadSelect** function to populate a select is shown below:

	.. code-block:: html

		<span id=selectWithArray field=options select></span>

	.. code-block:: javascript

		selectArray=['key1:value1','key2:value2','key3:value3'];
		loadSelect('selectWithArray',selectArray);



**readonly**
~~~~~~~~~~~~

Prevents the field's content from being edited by the user.

	.. code-block:: html

		<span field=invnbr readonly></span>


**editmask**
~~~~~~~~~~~~

Specifies a prescribed data entry pattern that will be enforced when the user attempts to make entries in the field.


- The example below will mask input 1111111 to (111)-11-11

	.. code-block:: html

		<span field=amount editmask='(   )  -   '></span>

- If spaces need to added then the "&" character can be used:

	.. code-block:: html

		<span field=amount editmask='&&&(   )  -   '></span>



**required**
~~~~~~~~~~~~

Marks a field for mandatory entry

	.. code-block:: html

		<span field=date required></span>


Field Functions
----------------

focusOn(field)
~~~~~~~~~~~~~~~~~~~~

The **focusOn** function gives focus to a specified html field.

- Focus can be given to a single field element. The example below uses the field name
  **'customerid'** as the field to focus on.

.. code-block:: javascript

   focusOn('customerid')

- Text can also be highlighted by passsing **'*highlight'** or **'*hi*'** as a second parameter as shown in the example below:

.. code-block:: javascript

   focusOn('customerid','*highlight')
   /** OR **/
   focusOn('customerid','*hi')


protect(fieldOne,fieldTwo,....);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **protect** function prevents fields from being edited by the user.

- A single field can be protected by specifying the field name. In the example below "companyname"
is used as shown below:

.. code-block:: javascript

   protect('companyname');

- Multiple fields can also be protected by specifying multiple fields as shown below:

.. code-block:: javascript

   protect('companyname','companyaddress');

-  The fields on a **form** can also be protected by passing the form name to the function. An
   example is shown below.

.. code-block:: javascript

   protect('form1');


unProtect(fieldOne,fieldTwo,....);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **unProtect** function takes a field from a protected state to an editable state.

- A single field can be un-protected by specifying the field name. In the example below "companyname"
is used as shown below:

.. code-block:: javascript

   unProtect('firsname');

- Multiple fields can also be un-protected by specifying multiple fields as shown below:

.. code-block:: javascript

   unProtect('firsname','lastname');

-  The fields on a **form** can also be un-protected by passing the form name to the function. An
   example is shown below.

.. code-block:: javascript

   unProtect('form1');



changeVar(field,value,fieldType);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **changeVar** function changes the **value** of a specified **field**.

- In the example below the field **'description'** is changed to **'Description Has Changed'**

.. code-block:: javascript

   changeVar('description','Description Has Changed');

- The changeVar function also has the ability to detect which the **field type** and modify the data assigned to match the field type.
  In the example below the field **'salary'** which is numeric is assigned the value **'$7k656'**. The value **'$7k656'** will be changed
  to **7656** automatically by the changeVar function.

- The example below shows how changeVar would modify a numeric field. Notice that the non-numeric characters are stripped from the string.

.. code-block:: javascript

   changeVar('salary','$7k656');
   newValue = valueOf('salary')

   /**
    newValue will be 7656
   **/

- changeVar and Date fields

Like other fields, the value of a date field can be updated using the changeVar() function.
In order to change the value, the format of the value being supplied must be specified.
If format entered is YMD (same as the global date format), use ‘*date’. This tells the system to parse the supplied value as-is without performing any checks. Ideal for use when a variable is being passed has been taken directly from another date field.
If format entered = global format (datefmt), do not use ‘*date’

.. note:: If format is not YMD or global format, the function will NOT produce an accurate result.

- The following example assumes that **datefmt** is D (dd/mm/yyyy)

.. code-block:: javascript

  changeVar(myDate, 05092016);

  /*
    value of myDate would be changed to "05/09/2016"
  */

- The following example assumes that **datefmt** is Y (yyyy/mm/dd)

.. code-block:: javascript

   changeVar('startDate','20150901');

   /*
     value of myDate would be changed to "05/09/2016"
   */

.. note:: The format of the date passed must be the same as the default format.
           For example is the default date is dd/mm/yyyy then a date in that format must be passed as the value.

- Time fields can also be set by passing in the time in time format defined

.. code-block:: javascript

   /* For millitary time 21:00 HRS*/
   changeVar('startTime',2100);

    /* For standard time 9:00 PM*/
   changeVar('startTime',900);


- Fields can be set with the value of other fields by using the **valueOf** function as shown below:

.. code-block:: javascript

   changeVar('gpcmt',valueOf('chgdesc'));


fieldHTML('field=<fieldName>')
~~~~~~~~~~~~~~~~~~~~~~~~~~

The **fieldHTML** function outputs the html which is used to render a field.

- The following example shows how to retrieve the html for the **starttime** field:

.. code-block:: html
   <!-- Field definition -->
   <span field=starttime type=time></span>

.. code-block:: javascript

   var html = fieldHTML('field=starttime')
	/*
		Value of html is:
		<INPUT maxLength=20 size=22 name=starttime fldType="char" length="20">
	*/

hideElement(fieldOne,fieldTwo,..);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **hideElement** function hides the element(s) specified.

- The following example shows how to hide one element:

.. code-block:: javascript

   hideElement('formOne')

- The following example shows how to hide multiple elements:

.. code-block:: javascript

   hideElement('divOne','fieldOne')


showElement(fieldOne,fieldTwo,..);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **showElement** function shows the elements(s) specified.

- The following example shows how to make a single element visible:

.. code-block:: javascript

   showElement('fieldOne');

- The following example shows how to make multiple elements visisble:

.. code-block:: javascript

   showElement('divOne','fieldOne');


neverShow(fieldOne,fieldTwo,..);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **neverShow** function hides a specified element permanently. Even if the **showElement** function is called on elements they will never be diplayed.

- The following example shows how to permanently hide one element:

.. code-block:: javascript

   neverShow('fieldOne');

- The following example shows how to permanently hide multiple elements:

.. code-block:: javascript

   hideElement('fieldOne','divOne');

changeContent(element,htmlText);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The **changeContent** function changes the inner contents (html or text) of an element.

- The example below shows how to change the content of a div named **titlebar1**:

.. code-block:: javascript

   changeContent('titlebar1','Create New Record');


contentOf(element,type);
~~~~~~~~~~~~~~~~~~~~~~~~

The **contentOf** function returns the inner text/html for a specific element.

- If a type is not provided or if you specify type as "text" or "\*text",
  the function will return the inner text of the element specified.
  The example below shows how to return the text content of a **div**.

.. code-block:: html

    <div id='first'> <b>First Text<b> </div>

.. code-block:: javascript

   var innerText = contentOf('first');
	/*
		value of innerText will be:

		First Text
	*/

- Otherwise the HTML content of an element will be retrieved, as shown in the example below:

.. code-block:: html

   <div id='first'> <b>First Text<b> </div>

.. code-block:: javascript

   var innerHtml = contentOf('first','html');
	/*
		value of innerHtml will be:

		<b> First Text </b>
	*/


- The example below shows how to replace the inner html of one element with another using the **changeContent** function:

.. code-block:: html

   <div id='first'> First Text </div>
   <div id='second'> Second Text </div>

.. code-block:: javascript

   changeContent('first',contentOf('second'));
	/*
		HTML will be changed to:
		<div id='first'> Second Text </div>
	*/

isBlank(value)
~~~~~~~~~~~~~~

The **isBlank** function returns a boolean value (true/false) if the string value passed is empty. An
example of its use is shown below:

.. code-block:: javascript

	var emptyString = "";

	if(isBlank(emptyString)){
		alert("This string is empty.");
	}

editDate(date, format)
~~~~~~~~~~~~~~~~~~~~~

The **editDate** function converts the **date** passed to it in the specfied format.
If no dateformat is specified it uses the default format 'Y'.

- The example below shows how to use **editDate** without the date format parameter:

.. code-block:: javascript

	var dateOne = editDate('20150901')

	/*
		The value of dateOne will be:

		2015/09/01 (yyyy/mm/dd format)
	*/

- The example below shows how to use **editDate** with the date format parameter  **'Y'** or **'y'**:

.. code-block:: javascript

	var dateOne = editDate('20150901','Y')

	/*
		The value of dateOne will be:

		2015/09/01 (yyyy/mm/dd format)
	*/

- The example below shows how to use **editDate** with the date format parameter  **'D'** or **'d'**:

.. code-block:: javascript

	var dateOne = editDate('20150901','D')

	/*
		The value of dateOne will be:

		01/09/2015 (dd/mm/yyyy format)
	*/

- The example below shows how to use **editDate** with the date format parameter  **'M'** or **'m'**:

.. code-block:: javascript

	var dateOne = editDate('20150901','M')

	/*
		The value of dateOne will be:

		09/01/2015 (mm/dd/yyyy format)
	*/


validDate(date,format)
~~~~~~~~~~~~~~~~~~~~~

The **validDate** function returns a boolean value (true/false) if the date is valid.
If no date format is specified it uses the default format 'Y'.

- The example below shows how to use **validDate** without the date format parameter:

.. code-block:: javascript

	var result = validDate('20150901')

	/*
		The value of result will be true (yyyy/mm/dd format)
	*/

- The example below shows how to use **validDate** with the date format parameter '**D**' or '**d**':

.. code-block:: javascript

	var result = validDate('20150901','D')

	/*
		The value of result will be false (dd/mm/yyyy format)
	*/

   result = validDate('01092015','D')

	/*
		The value of result will be true (dd/mm/yyyy format)

	*/

- The example below shows how to use **validDate** with the date format parameter '**M**' or '**m**':

.. code-block:: javascript

	var result = validDate('09012015','M');

	/*
		The value of result will be true (mm/dd/yyyy format)
	*/

- The example below shows how to use **validDate** with the date format parameter '**Y**' or '**y**':

.. code-block:: javascript

	var result = validDate('20150901','Y')

	/*
		The value of result will be:

		result = true;
	*/

editTime(time, format);
~~~~~~~~~~~~~~~~~~~~~~~~

The **editTime** function converts the **time** passed to the specfied **format**.

- When no format parameter is passed it will use the default time format, in this case it is standard time:

.. code-block:: javascript

	var result = editTime(200)

	/*
		The value of result will be:

		result = 02:00;
	*/

- When the 'S' or 's' format is specified the standard time format will be specified:

.. code-block:: javascript

	var time = editTime(200,'S')

	/*
		The value of result will be 2:00 AM
	*/

- When the 'A' or 'a' format is specified the army time format will be specified:

.. code-block:: javascript

	var time = editTime(2000,'A')

	/*
		The value of time will be 20:00
	*/



validTime(time);
~~~~~~~~~~~~~~~~

The **validTime** function returns true or false if the **time** is valid. A valid time is a numeric value in  the range 0000 (12:00 am) to 2359 (11:59 pm).

- An example with a valid time is shown below:

.. code-block:: javascript

	var result = validTime(2000)

	/*
		The value of result will be:

		result = true;
	*/

- An example with an invalid time is shown below:

.. code-block:: javascript

	var result = validTime(2500)

	/*
		The value of result will be:

		result = false;
	*/

valueOf(field);
~~~~~~~~~~~~~~~

The **valueOf** function returns the unformated value of a specified field. An example is shown below:


- The example below shows how retrieve the value from a field called **'username'**:

.. code-block:: javascript

	var name = valueOf('username')

	/*
		The value of name is 'john.brown';
	*/

- The example below shows how retrieve for a time field where the value in the time field is diplayed as **"2:00 AM"**:

.. code-block:: javascript

	var time = valueOf('timefield') /* time is 2:00 */

	/*
		The value of time is 200
	*/

- The example below shows how retrieve for a date field where the value in the date field is diplayed as **"2016/09/11"**:

.. code-block:: javascript

	var date = valueOf('datefield') /* date is 2016/09/11 */

	/*
		The value of date is  20160911
	*/

Date Fields
==========

Usage
-----

Like other fields, the value of a date field can be updated using the changeVar() function. This function
In order to change the value, the format of the value being supplied must be specified.
- If format entered is YMD (same as the global date format), use ‘*date’. This tells the system to parse the supplied value as-is without performing any checks. Ideal for use when a variable is being passed has been taken directly from another date field.
- If format entered = global format (datefmt), do not use ‘*date’

.. note:: If format is not YMD or global format, the function will NOT produce an accurate result.

.. code-block:: javascript

  changeVar(myDate, 05182016, ‘*date’);

Storage
-------
Date and time fields are stored as integer values
The first part of the date (4 digits) represents the year, followed by the month (2 digits) and the day (2 digits). E.g. “20160524” would represent 24-May-2016, which is broken down as:
 - Year - 2016
 -	Month - 05
 -	Day - 24
 -	Dates are displayed based on the editcode attribute assigned to the field, or in the absence of this attribute, the global variable datefmt.
 -	Date Formats

The following date formats (shown with their respective codes) are supported:
-	dd/mm/yyyy (datefmt ‘d’)
-	mm/dd/yyyy (datefmt ‘m’) [verify the ‘m’ code]
-	yyyy/mm/dd (datefmt ‘y’)

.. note:: that these codes would have to be set for the datefmt global variable, as the editcode attribute, even if set for a field, is ignored for date fields.

Date Entry and Update
---------------------

For data entry, date fields on forms are divided into three separate fields, corresponding to Year, Month and Day.

EditMask For Date
~~~~~~~~~~~~~~~~~

The editmask attribute can be used to guide/force the correct entry format.

The following editmask setting would typically be used for a date field:
“  /  /    ”

.. note:: each space included in the edit mask constitutes a character that the user is expected to enter - for the example above, there are two (2) spaces followed by a slash, followed by 2 more spaces, another slash and finally four (4) spaces for the year. This mask could accommodate a date format of mm/dd/yyyy or dd/mm/yyyy.
•	Calendar

By default, a date entry field is accompanied by a calendar option. However, the option is hidden if the field is set as read-only or protected.
Otherwise, the field’s nocalendar attribute can be used to prevent this option from being presented.

Time Fields
==========

Time values are represented by specific integers between 0 and 2359. Within this range, each hour of the day is represented by a multiple of 100 (e.g. 500 = 5:00 am, the fifth hour of a 24-hour day). Similarly, each minute is represented by an integer value of between 0 and 59 (e.g. 18 = 18 minutes past the hour).
When the integer values for Hours and Minutes are added together, the result looks like this:
500 + 18 = 518 , which represents a time of 5:18 am (standard format)  or 0518 hrs (military format)
Similarly, the integer value “2105” represents the 21st hour plus 5 minutes: 9:05 pm or 2105 hrs.
The editcode attribute of the time field is ignored, but the global variable **timefmt** may be set to either “s” for standard time or “m” for military time.

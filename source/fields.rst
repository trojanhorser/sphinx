
.. toctree::
   :maxdepth: 1

Fields
======

Javascript library dependency  to be included
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
In order  for data bound fields to be parsed the following librariese must be included:

			.. literalinclude:: example.html
					   :linenos:
					   :language: html
					   :lines: 6-9

Custom Attribute Description
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
A form field consists of a **span** html tag with custom attributes.
These attributes are parsed to produce the HTML which is ultimately rendered by the web application.
These attributes are described in detail below:

1. **ref** - The *ref* attribute is used to reference a field from the data dictionary.
When a field is referenced it uses the attributes defined in the data dictionary to generate the html filed.
The example below uses *bilno* as the referenced field:

			.. literalinclude:: example.html
								   :language: html
								   :lines: 137


2. **type** - The *type* attribute determines the data type that the filed will accept. There are four data types; character,numeric, date and time.
Each of these attributes are explained below:

		- *character* - The charater attribute allows all alphanumeric characters to be accept by the html field. An example is shown below:

			.. literalinclude:: example.html
									   :language: html
									   :lines: 141

		- *numeric* - The numeric attribute allows only numeric values to accepted by the html field. It produces an alert when input is invalid. An example is shown below:

			.. literalinclude:: example.html
								   :language: html
								   :lines: 139

		- *date* - The date attribute formats the html field into three sepperate sections; **year**, **month** and **day**. The order of these sections will vary based on the format specified in the application. An example is shown below:

			.. literalinclude:: example.html
								   :language: html
								   :lines: 143

		- *time* - The time attribute formats the html field in two sections, **minutes** and **seconds**. An example is shown below:

			.. literalinclude:: example.html
								   :language: html
								   :lines: 145

3. **length** - This length attribute specifies the maximum length of a field, according to the field type. If the length specified is greater than 80 then html text area will be rendered instead of an input field. Validation is also added if the user exceeds the maxiimum length of the field.

		.. literalinclude:: example.html
								   :language: html
								   :lines: 116


4. **decimal** - The decimal place field is used to indicate the decimal place for numeric fields. An example is shown below:

		.. literalinclude:: example.html
								   :language: html
								   :lines: 118

5. **editcode** -  Specifies the format in which input may be accepted.

		.. literalinclude:: example.html
								   :language: html
								   :lines: 167

6. **fieldclass** - Specifies a stylesheet (CSS) class name to determine how the field is formatted.

		.. literalinclude:: example.html
								   :language: html
								   :lines: 143

7. **label** - Specifies the text for the label that will be displayed along with the field. Overrides the label text set in the data dictionary.

	    .. literalinclude:: example.html
								   :language: html
								   :lines: 137


8. **nolabel** - Instructs program not to show a label for the field.

		.. literalinclude:: example.html
								   :language: html
								   :lines: 139


9. **search** - Causes a search icon to appear beside the field that triggers the execution of a specified function.

		.. literalinclude:: example.html
								   :language: html
								   :lines: 165


10. **labelclass** - Specifies a stylesheet (CSS) class name to determine how the field's label is formatted.

	    .. literalinclude:: example.html
								   :language: html
								   :lines: 145

11. **labelwidth** - Specifies a custom width for the label, overriding any width that may have been set for the field's label in the DD.

	    .. literalinclude:: example.html
								   :language: html
								   :lines: 147

12. **upper** - Causes the aphabetic characters displayed in a field to be capitalized. Also capitalizes characters entered by the user.

		.. literalinclude:: example.html
								   :language: html
								   :lines: 149

13. **output** - Displays the field's content as text in a disabled control (similar to readonly, but has a different appearance).

		.. literalinclude:: example.html
								   :language: html
								   :lines: 151

14. **textarea** - Represents the field as a free-text entry area with a vertical scrollbar. Additional attributes (rows and cols) can be specified as well.

		.. literalinclude:: example.html
									:language: html
								    :lines: 153

15. **rows** - Applies only to field with attribute 'textarea'. Specifies number of lines shown in the viewable area of the field at one time.

		.. literalinclude:: example.html
								   :language: html
								   :lines: 155

16. **cols** - Applies only to field with attribute 'textarea'. Specifies maximum number of characters the may be shown in each line of the viewable area of the field at one time.

.. note:: the **rows** and **cols** attributes only apply to textarea fields and will be ignored for **date** and **time** fields.


17. **nocalendar** - Causes a date field to be displayed without the default calendar icon and the associated date-picking functionality it offers. {Calendar not to be displayed for date field}

		.. literalinclude:: example.html
								   :language: html
								   :lines: 159


18. **select** - Field create as a select field. Use a string of ordered pairs to show the values/text.

		.. literalinclude:: example.html
								   :language: html
								   :lines: 161



19. **readonly** - Prevents the field's content from being edited by the user.

		.. literalinclude:: example.html
								   :language: html
								   :lines: 161

20. **editmask** - Specifies a prescribed data entry pattern that will be enforced when the user attempts to make entries in the field.

	   .. literalinclude:: example.html
								   :language: html
								   :lines: 130


21. **required** - Marks a field for mandatory entry

		.. literalinclude:: example.html
								   :language: html
								   :lines: 163

Field Functions
----------------

focusOn('connam');
~~~~~~~~~~~~~~~~~~~

protect('concde');
~~~~~~~~~~~~~~~~~~~

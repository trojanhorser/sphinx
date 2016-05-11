
.. toctree::
   :maxdepth: 1

CRUD Functions
================

CRUD *(Create, Read, Update, Delete)* are a set of functions used to perform database operations. These functions and how they are used is described below:

sqlSelect()
~~~~~~~~~~~

This function is used to retrieve records from a database. It accepts three parameters:

1. The SQL Select text ( eg. *"select * from customers"* )
2. The variable that data retrieved should be stored in
3. and the amount of rows which should be returned.

- An example is shown below:

.. literalinclude:: form_functions.html
       :linenos:
       :language: javascript
       :lines: 89-93
       :emphasize-lines: 2

If an error occurs during the sql transaction the **sqlerr** global variable is set with details of the error.
An example is shown below:

.. literalinclude:: form_functions.html
       :linenos:
       :language: javascript
       :lines: 90-92
       :emphasize-lines: 2

Also  the record count is retrieved from the database along with the records as show in the example below:

.. literalinclude:: form_functions.html
       :linenos:
       :language: javascript
       :lines: 94


sqlInsert()
~~~~~~~~~~~~~

The **sqlInsert** function adds a record to a specific table to the database. it accepts two parameters:

1. The database table that will be modified.
2. and a object with the fields that need to be inserted.

An example is shown below:

.. literalinclude:: form_functions.html
       :linenos:
       :language: javascript
       :lines: 100-104

sqlUpdate()
~~~~~~~~~~~~

The **sqlUpdate** function updates a records in a table based on a specific criteria. It accepts three parameters:

1. The database table that will be modified.
2. The object with the fields that need to be updated.
3. and the where criteria for the records which need to be updated.

An example is shown below:

.. literalinclude:: form_functions.html
       :linenos:
       :language: javascript
       :lines: 114-117

sqlDelete()
~~~~~~~~~~~

This removes records from a database table based on a specific criteria.

1. The database table that will be modified.
2. and the where criteria for the records which need to be deleted.

.. literalinclude:: form_functions.html
       :linenos:
       :language: javascript
       :lines: 125-126

.. note:: All CRUD functions update the "sqlerr" global variable when if fails. This variable can be accessed and displayed to view the nature of the issue.

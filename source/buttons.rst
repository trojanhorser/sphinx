
.. toctree::
   :maxdepth: 1

Buttons
=======

The advantum software development framework consists of many predefined buttons. Buttons are defined by creating
a **span** html element with a button **attribute** and **type**.

Button Types
------------

The various button types and how they are rendered are listed below:

accept
~~~~~~

Accept button definiton is below:

.. code-block:: html

   <span button=acceptButton type=accept onclick=accept()></span>

.. image:: accept.png
   :height: 100px
   :width: 200 px
   :scale: 50 %
 
add
~~~~~~

Add button definiton is below:

.. code-block:: html

   <span button=addRecord type=add onclick=addRecord()></span>

.. image:: add.png
   :height: 100px
   :width: 200 px
   :scale: 50 %
     
apply
~~~~~~

Apply button definiton is below:

.. code-block:: html

   <span button=apply type=apply onclick=apply/span>

.. image:: apply.png
   :height: 100px
   :width: 200 px
   :scale: 50 %


back
~~~~~~

Back button definiton is below:

.. code-block:: html

   <span button=backButton type=back onclick=goBack()></span>

.. image:: back.png
   :height: 100px
   :width: 200 px
   :scale: 50 %


cancel
~~~~~~

Cancel button definiton is below:


.. code-block:: html

   <span button=cancelButton type=cancel onclick=goBack()></span>
   
.. image:: cancel.png
   :height: 100px
   :width: 200 px
   :scale: 50 %
   
change
~~~~~~

Change button definiton is below:

.. code-block:: html

   <span button=changeButton type=change onclick=goBack()></span>
 
.. image:: cancel.png
   :height: 100px
   :width: 200 px
   :scale: 50 %
  
close
~~~~~~


Close button definiton is below:

.. code-block:: html

   <span button=closeButton type=close onclick=changeRecord()></span>

.. image:: close.png
	:height: 100px
	:width: 200 px
	:scale: 50 %

delete
~~~~~~

Delete button definiton is below:

.. code-block:: html

   <span button=deleteRecord type=delete onclick=deleteRecord()></span>

.. image:: delete.png
	:height: 100px
	:width: 200 px
	:scale: 50 %

edit
~~~~~~

Edit button definiton is below:

.. code-block:: html

   <span button=editRecord type=edit onclick=editRecord()></span>
   
.. image:: edit.png
	:height: 100px
	:width: 200 px
	:scale: 50 %


exit
~~~~~~

Exit button definiton is below:


.. code-block:: html

   <span button=exitButton type=exit onclick=editRecord()></span>

.. image:: exit.png
	:height: 100px
	:width: 100px
	:scale: 50 %
	
new
~~~~~~

New button definiton is below:

.. code-block:: html

   <span button=new type=new click=addRecord()></span>

.. image:: new.png
	:height: 400px
	:width: 400 px
	:scale: 50 %


print
~~~~~~

Print button definiton is below:


.. code-block:: html

   <span button=print type=print onclick=print()></span>

.. image:: print.png
	:height: 100px
	:width: 200 px
	:scale: 50 %


refresh
~~~~~~


Refresh button definiton is below:


.. code-block:: html

   <span button=refreshButton type=refresh onclick=reference()></span>
 
.. image:: refresh.png
	:height: 100px
	:width: 200 px
	:scale: 50 %



recycle
~~~~~~


Recycle button definiton is below:


.. code-block:: html

   <span button=recycleButton type=recycle onclick=recycle()></span>
   
    
.. image:: delete.png
	:height: 100px
	:width: 200 px
	:scale: 50 %



save
~~~~~~

Save button definiton is below:

.. code-block:: html

   <span button=saveButton type=save onclick=save()></span>
   
.. image:: save.png
	:height: 100px
	:width: 200 px
	:scale: 50 %



Other Button Attributes
-----------------------
	
text
~~~~~~

This is the text which is displayed on the button. A buttons default text can be overriden using this attribute, as shown below:

.. code-block:: html

   <span button=refreshButton type=save onclick=save() text="refresh Screen"></span>

width
~~~~~~


.. code-block:: html

   <span button=refreshButton type=save onclick=save() text="refresh Screen" width=10></span>


height
~~~~~~


.. code-block:: html

   <span button=refreshButton type=save onclick=save() text="refresh Screen" height=20></span>

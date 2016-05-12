var myString = " string with space  "
console.log( myString.trim() )
/* Output will be "string with space" */


var myString = " string with space  "
console.log( myString.triml() )
/* Output will be "string with space " */


var myString = " string with space  "
console.log( myString.trimr() )
/* Output will be "string with space " */

var myString = " string to be stripped "
console.log( myString.strip("t","b") )
/* Output will be "sring o e sripped" */

var myString = "'abcd'"
console.log( myString.sqlWrap() )
/* Output will be "'a''bc''d'" */

var myString = "string to be modified"
console.log( myString.sst(0,6) )
/* Output will be "to be modified" */

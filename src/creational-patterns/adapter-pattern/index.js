
// Lets say that we wanted to use rethinkDB for persistance
// instead of the fs module and we wanted
// to readFile() => db.get() and 
// writeFile() => db.put().

var levelup = require('level');
var fsAdapter = require('./fsAdapter');
var db = levelup('./fsDB', {valueEncoding: 'binary'});
var fs = fsAdapter(db);

/**
 * We already know that LevelUP is able to run with different storage
backends, from the default LevelDB to IndexedDB in the browser. This
is made possible by the various adapters that are created to replicate the
internal (private) LevelUP API
 */

 /**
  * jugglingdb is a multi-database ORM and of course, multiple adapters are
used to make it compatible with different databases. Take a look at some
of them at https://github.com/1602/jugglingdb/tree/master/lib/
adapters.
  */
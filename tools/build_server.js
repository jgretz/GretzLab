/* eslint-disable */
require('shelljs/global');

echo('Building Server ...');

// clean
rm('-rf', 'lib/routes');
rm('-rf', 'lib/schema');
rm('lib/*.js');

// move over server
exec('babel -d lib/ server/src/index.js');
exec('babel -d lib/routes server/src/routes');
exec('babel -d lib/schema server/src/schema');

mv('lib/server/src/index.js', 'lib/index.js');
rm('-rf', 'lib/server');

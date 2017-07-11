/* eslint-disable no-var */
require('shelljs/global');

// build app
require('./build_server');
require('./build_site');

// move over package.json
echo('Finishing Site ...');
cp('package.json', 'lib/package.json');
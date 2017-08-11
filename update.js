var shell = require('shelljs');
shell.cd(`public`);
shell.exec('git pull');
shell.cp('./*.html', './doc/')

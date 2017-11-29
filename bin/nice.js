#!/usr/bin/env node
var chalk = require('chalk');
var readline = require('readline');
var child_process = require('child_process');
var fs = require('fs');
var path = require('path');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var packageJSON;
var projectName;

console.log(`\n 🕺   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🐕   🕺 `);
console.log(chalk.green('\n Please note create-nice-app currently only works with Yarn! Visit https://yarnpkg.com/lang/en/docs/install/ for more info'));
rl.question(chalk.blue.bold(`\n 🐕  what do you want to name this project ${chalk.red('(no spaces please)') + chalk.cyan('(required)')} ? `), function(title) {
  projectName = title.trim();
  if(!projectName) {
    console.log(chalk.white.bold('\n 👻  you have to enter a project name! 👻'));
    process.exit(1);
  } else if (/\s/.test(projectName)) {
    console.log(chalk.white.bold(`\n 👻  you have to enter a project name ${chalk.red.underline('without')} spaces! 👻`));
    process.exit(1);
  }

  var newPkgJsonValues = {
    name: projectName,
    description: `${projectName} is a really nice app 🕺`,
    version: '0.0.1'
  };

  // Questions for rebuilding the package json
  rl.question(chalk.magenta.bold(`\n 🐕  what is the link to the github repository ${chalk.cyan('(optional)')} ? `), function(repoUrl) {
    newPkgJsonValues.repository = repoUrl.trim();

    rl.question(chalk.white.bold(`\n 🐕  who is the author ${chalk.green('(optional)')} ? `), function(author) {
      newPkgJsonValues.author = author.trim();

      rl.question(chalk.green.bold(`\n 🐕  What is the license ${chalk.black('(MIT default)')} ? `), function(license) {
        newPkgJsonValues.license = license.toString() ? license.toString() : 'MIT';

        //create the new projects package.json
        fs.readFile(path.join(__dirname, '../package.json'), function(err, data) {
          if (err) throw err;
          packageJSON = JSON.parse(data);
          delete packageJSON.bin;
          var yarnPackageJson = JSON.stringify(Object.assign({}, packageJSON, newPkgJsonValues), null, 2);

          // the source code for the shell project is in the global node_modules dir so we copy it's contents over
          var shellCmds = child_process.spawn(
            `clear && mkdir ${projectName} && cd ${projectName} && ` +
            `cp -r ${path.join(__dirname, '../.') + '/.'} . && ` +
            'rm -r bin/ README.md package.json node_modules/ yarn.lock .git/ .travis.yml && ' +
            `echo '${yarnPackageJson}' > package.json && ` +
            `printf '# ${projectName}\n\n![party-parrot](https://media.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.gif)' > README.md && ` +
            `yarn && ` +
            'mv .npmignore .gitignore 2>/dev/null', {shell: true});

          // event listeners on spawn
          shellCmds.stdout.on('data', function(data) {
            console.log(chalk.cyan.bold(data));
          });

          shellCmds.stderr.on('data', function(data) {
            console.log('🚨');
            console.log(chalk.red.bold(data));
            process.exit(1);
          });

          shellCmds.on('close', function(exitCode) {
            console.log(`\n 🕺   💎   💎   💎   💎   💎   💎   💎   💎   💎   💎   💎   💎   💎   💎   🕺 \n\n`);
            console.log(chalk.green(`Your nice new app is ready to go! 🕺  Run '${chalk.yellow.bold(`cd ${projectName} && yarn dev`)}' to get started!  🐕\n`));
            process.exit(exitCode);
          });
        });
        rl.close();
      });
    });
  });
});
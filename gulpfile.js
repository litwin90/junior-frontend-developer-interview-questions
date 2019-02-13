'use strict';

// Set global shared core
const lhcore = require('./script/gulp/index.js');
global.lhcore = lhcore;

// External modules as aliases
const gulp = lhcore.amd.gulp;
const hubRegistry = lhcore.amd.hubRegistry;
const gulpHelpDoc = lhcore.amd.gulpHelpDoc;


// Load tasks into the registry of gulp
hubRegistry([
    './script/gulp/task.lint.js',
]);

/**
 * Check all files via linting
 *
 * @task {lint}
 */
gulp.task('lint', gulp.series('lint:all'));

/**
 * Print help
 *
 * @task {default}
 */
gulp.task('default', () => {
    return gulpHelpDoc(gulp);
});

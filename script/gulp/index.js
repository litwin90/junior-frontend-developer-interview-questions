'use strict';

// Shared configuration
const cfg = require('./config.json');

const amd = {
    // fs: require('fs'),
    // path: require('path'),
    log: require('fancy-log'),
    // rename: require('gulp-rename'),
    // json2ts: require('json-schema-to-typescript'),
    // argv: require('yargs').argv,
    // git: require('gulp-git'),
    // yaml: require('js-yaml'),
    eslint: require('gulp-eslint'),
    gulp: require('gulp'),
    hubRegistry: require('gulp-hub'),
    markdownlint: require('markdownlint'),
    // gulpExec: require('gulp-exec'),
    gulpData: require('gulp-data'),
    // gulpInstall: require('gulp-install'),
    gulpHelpDoc: require('gulp-help-doc'),
};

// Shared functions
const fnc = {
    jsonToBuffer: (json) => Buffer.from(JSON.stringify(json), 'utf8'),
};

// Exported shared config, modules and functions
exports = module.exports = {
    cfg: cfg,
    amd: amd,
    fnc: fnc,
};

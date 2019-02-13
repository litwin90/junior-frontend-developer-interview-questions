'use strict';

// Get shared core
const core = global.lhcore;

// External modules as aliases
const gulp = core.amd.gulp;
const eslint = core.amd.eslint;
const config = core.cfg;
const markdownlint = core.amd.markdownlint;
const log = core.amd.log;
const gulpData = core.amd.gulpData;
const markdownlintConfig = require(`../../${config.configs.markdownlint}`);

// Lint and auto-fix all js files
const js = () => gulp
    .src([
        config.src.js,
        config.src.exclude.node,
    ])
    .pipe(eslint({
        'configFile': config.configs.eslint,
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());

// Lint documentation files
const markdown = (done) => gulp
    .src([
        config.src.documentation,
        config.src.exclude.node,
    ])
    .pipe(gulpData((file) => {
        const results = markdownlint.sync({
            files: [file.path],
            config: markdownlintConfig,
        });
        const errors = results[file.path];
        errors.map((error) => printMarkdownError(error, file));

        if (errors.length > 0 ) {
            done(`Failed with ${errors.length} error(s)`);
        }
    }));

// Print error of markdownlint
const printMarkdownError = (error, file) => {
    log.error(`ERROR: ${error.ruleDescription}`);
    log.error(`FILE: ${file.path}`);
    log.error(`DETAIL: ${error.errorDetail ?
        error.errorDetail : error.errorContext}`);
    log.error(`RULES: ${error.ruleNames.join()}`);
    log.error(`LINE NUMBER: ${error.lineNumber}`);
};

// Tasks
gulp.task('lint:js', js);
gulp.task('lint:markdown', markdown);
gulp.task('lint:all', gulp.parallel('lint:js', 'lint:markdown'));

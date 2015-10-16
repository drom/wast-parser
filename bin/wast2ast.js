#!/usr/bin/env node

'use strict';

var fs = require('fs'),
    path = require('path'),
    jsof = require('jsof'),
    parser = require('../');

function runner (name) {
    return function (err, data) {
        var result;
        if (err) { throw err; }
        try {
            result = parser.parse(data);
        } catch (er) {
            console.log(er)
            return;
        }
        fs.writeFile(
            path.resolve(dst, name + '.js'),
            jsof.s(result) + '\n',
            function (err) {
                if (err) { throw err; }
            }
        );
    };
}

var src = path.resolve(__dirname, '../testsuite/');
var dst = path.resolve(__dirname, '../results/');

var wastFileNames = fs.readdirSync(src);

wastFileNames.forEach(function (wastFileName) {
    var matchArr = wastFileName.match('^(.*).wast$');
    if (matchArr) {
        fs.readFile(
            path.resolve(src, wastFileName),
            'utf8',
            runner(matchArr[1])
        );
    }
});

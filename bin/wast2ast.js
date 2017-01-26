#!/usr/bin/env node

'use strict';

var fs = require('fs'),
    path = require('path'),
    jsof = require('jsof'),
    parser = require('../');

var pass = 0;
var fail = 0;

function runner (name) {
    return function (err, data) {
        var result;
        if (err) { throw err; }
        try {
            result = parser.parse(data);
        } catch (err1) {
            fail++;
            console.log(name, err1, pass, fail);
            return;
        }
        pass++;
        console.log(name, pass, fail);
        fs.writeFile(
            path.resolve(dst, name + '.js'),
            jsof.s(result) + '\n',
            function (err2) {
                if (err2) { throw err2; }
            }
        );
    };
}

var src = path.resolve(__dirname, '../testsuite/');
var dst = path.resolve(__dirname, '../results/');

var wastFileNames = fs.readdirSync(src);

wastFileNames.forEach(function (wastFileName) {
    var matchArr = wastFileName.match('^(.*).wast$');
    var matchFail = wastFileName.match('^(.*).fail.wast$');
    if (matchArr && !matchFail) {
        fs.readFile(
            path.resolve(src, wastFileName),
            'utf8',
            runner(matchArr[1])
        );
    }
});

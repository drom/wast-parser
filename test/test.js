'use strict';

var fs = require('fs'),
    path = require('path'),
    expect = require('chai').expect,
    jsof = require('jsof'),
    parser = require('../');

function runner (name, done) {
    return function (err, data) {
        var result;
        if (err) { throw err; }
        try {
            result = parser.parse(data);
        } catch (er) {
            console.log(er)
            throw er;
        }
        fs.writeFile(
            path.resolve(__dirname, '../results/', name + '.js'),
            jsof.s(result),
            function (err) {
                if (err) { throw err; }
                done();
            }
        );
    };
}

var root = path.resolve(__dirname, '../testsuite/');
var wastFileNames = fs.readdirSync(root);

describe('parse', function () {
    wastFileNames.forEach(function (wastFileName) {
        var matchArr = wastFileName.match('^(.*).wast$');
        if (matchArr) {
            it(wastFileName, function (done) {
                fs.readFile(
                    path.resolve(root, wastFileName),
                    'utf8',
                    runner(matchArr[1], done)
                );
            });
        }
    })
});

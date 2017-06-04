'use strict';

var fs = require('fs'),
    path = require('path'),
    expect = require('chai').expect,
    jsof = require('jsof'),
    parser = require('../');

[
    { src: '../testsuite/',       dst: '../results/' },
    { src: '../testsuite-extra/', dst: '../results-extra/' }
]
.map(function (job) {
    return {
        src: path.resolve(__dirname, job.src),
        dst: path.resolve(__dirname, job.dst)
    };
})
.map(function (job) {
    return {
        src: job.src,
        dst: job.dst,
        files: (
            fs.readdirSync(job.dst)
            .filter(function (fileName) {
                return fileName.match('^(.*).js$');
            })
        )
    };
})
.forEach(function (job) {
    describe(job.src, function () {
        job.files.forEach(function (astFileName) {
            var matchArr = astFileName.match('^(.*).js$');
            var name = matchArr[1];
            it(name, function (done) {
                fs.readFile(
                    path.resolve(job.src, name + '.wast'),
                    'utf8',
                    function (err, wastData) {
                        if (err) { throw err; }

                        var result;
                        try {
                            result = parser.parse(wastData);
                        } catch (err1) {
                            console.log(err1);
                            throw err1;
                        }

                        fs.readFile(
                            path.resolve(job.dst, name + '.js'),
                            'utf8',
                            function (err2, astData) {
                                if (err2) { throw err2; }
                                expect(jsof.s(result) + '\n').to.equal(astData);
                                done();
                            }
                        );
                    }
                );
            });
        });
    });
});

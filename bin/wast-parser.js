#!/usr/bin/env node
'use strict'

const fs = require('fs')
const parser = require('../')

const filename = process.argv.splice(2)[0]
const file = fs.readFileSync(filename)
const json = parser.parse(file.toString())

process.stdout.write(JSON.stringify(json))

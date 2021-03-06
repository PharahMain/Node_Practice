'use strict'

const fs = require('fs')
const path = require('path')
const { callbackify } = require('util')

// single function to read and filter files in a directory
// three args will be passed in to the function: directory, file extension string
// and the callback function
function readAndFilter(directory, extStr, cb) {
    let results = []

    // read directory
    fs.readdir(directory, function doneReading(err, contents) {
        if (err) {
            return cb(err)
        }

        for (const f of contents) {
            if (path.extname(f) == "." + extStr) {
                results.push(f)
            }
        }

        cb(null, results)
    })
}

module.exports = readAndFilter
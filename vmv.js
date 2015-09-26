#!/usr/bin/env node
var vinylfs = require('vinyl-fs')
var src = vinylfs.src('src/**/*')
var dst = vinylfs.dest('dst')
src.pipe(dst)
console.log("moved src/ to dst/")

#!/usr/bin/env node

const fs = require('fs');
const subImageCoords = require('./index');
const { PNG } = require('pngjs');

const image = PNG.sync.read(fs.readFileSync(process.argv[2]));
const subImage = PNG.sync.read(fs.readFileSync(process.argv[3]));

console.log(JSON.stringify(subImageCoords(image, subImage)));

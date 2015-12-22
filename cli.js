#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('get-stdin');
const fn = require('normalize-newline');

const cli = meow(`
	Usage
	  $ normalize-newline <string>
	  $ cat file.txt | normalize-newline

	Example
	  $ cat mixed-newlines.txt | normalize-newline > lf-newlines.txt
`);

const input = cli.input[0];

function init(data) {
	console.log(fn(data));
}

if (!input && process.stdin.isTTY) {
	console.error('Specify a string');
	process.exit(1);
}

if (input) {
	init(input);
} else {
	getStdin().then(init);
}

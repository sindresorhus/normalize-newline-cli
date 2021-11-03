#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import getStdin from 'get-stdin';
import normalizeNewline from 'normalize-newline';

const cli = meow(`
	Usage
	  $ normalize-newline <string>
	  $ cat file.txt | normalize-newline

	Example
	  $ cat mixed-newlines.txt | normalize-newline > lf-newlines.txt
`, {
	importMeta: import.meta,
});

const input = cli.input[0];

function init(data) {
	console.log(normalizeNewline(data));
}

if (!input && process.stdin.isTTY) {
	console.error('Specify a string');
	process.exit(1);
}

(async () => {
	if (input) {
		init(input);
	} else {
		init(await getStdin());
	}
})();

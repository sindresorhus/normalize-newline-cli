import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['foo\r\nbar']);
	t.is(stdout, 'foo\nbar');
});

test('stdin', async t => {
	const {stdout} = await execa('./cli.js', {input: 'foo\r\nbar'});
	t.is(stdout, 'foo\nbar');
});

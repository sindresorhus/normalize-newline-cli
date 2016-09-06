import test from 'ava';
import execa from 'execa';

test('main', async t => {
	t.is(await execa.stdout('./cli.js', ['foo\r\nbar']), 'foo\nbar');
});

test('stdin', async t => {
	t.is(await execa.stdout('./cli.js', {input: 'foo\r\nbar'}), 'foo\nbar');
});

import test from 'ava';
import execa from 'execa';

test('main', async t => {
	t.is((await execa('./cli.js', ['foo\r\nbar'])).stdout, 'foo\nbar');
});

test('stdin', async t => {
	t.is((await execa.shell(`echo 'foo\r\nbar' | ./cli.js`)).stdout, 'foo\nbar\n');
});

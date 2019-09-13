import test from 'ava';
import nl2br from '.';

test('it converts to <br> all \n or \r', t => {
    t.is(nl2br('Hello\nWorld'), 'Hello<br>\nWorld');
    t.is(nl2br('Hello\n\rWorld'), 'Hello<br>\n\rWorld');
    t.is(nl2br('Hello\rWorld'), 'Hello<br>\rWorld');
});

test('it converts to <br /> if the XHTML setting is passed', t => {
    t.is(nl2br('Hello\nWorld', true), 'Hello<br />\nWorld');
});

test('it does nothing if there is no \n', t => {
    t.is(nl2br('Hello World'), 'Hello World');
    t.is(nl2br('Hello World', true), 'Hello World');
})
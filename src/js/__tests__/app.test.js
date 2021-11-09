import telefonCreate from '../basic.js';

test('test name in basic', () => {
  expect(telefonCreate('+86 000 000 0000')).toMatch(/\+860000000000/);
});
test('test name in basic', () => {
  expect(telefonCreate('+7 960 000 00 00')).toMatch(/\+79600000000/);
});
test('test name in basic', () => {
  expect(telefonCreate('8 (927) 000-00-00')).toMatch(/\+79270000000/);
});

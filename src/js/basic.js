export default function telefonCreate(number) {
  const regexp = /\d/g;
  let result;
  let array;
  array = number.match(regexp).join('');
  if (number[0] === '8') {
    array = array.slice(1);
    result = `+7${array}`;
  } else {
    result = `+${array}`;
  }
  return result;
}

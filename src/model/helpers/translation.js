/**
 * @function parseString
 *
 * This function is same sprintf of php
 * You need pass a string with "%s" and
 * array of parameters to replace
 *
 * Example to call:
 * > parseString('My name is %s", 'foo');
 * > Output => My name is foo
 *
 * > parseString('My name is %s and your is %s", 'foo', 'bar');
 * > Output => My name is foo and your is bar
 *
 * @public
 *
*/

export function parseString(text, ...rest) {

  if (text) {
    let i = 0;
    return text.replace(/%s/g, () => rest[i++]);
  }

  return;
}
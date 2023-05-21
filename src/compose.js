export default function (...funcs) {
  return function (argument) {
    return funcs.reduce((acc, func) => func(acc), argument);
  };
}

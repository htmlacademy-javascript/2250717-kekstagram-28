//Функция для проверки длины строки.
function checkLengthString(string, maxValue) {
  return (string.length <= maxValue);
}
checkLengthString('Строка',8);

//Функция для проверки, является ли строка палиндромом.
function checkStringPolindrom(string){
  const newString = string.toLowerCase().replaceAll(' ', '');
  return (string.split('').reverse().join('') === newString);
}

checkStringPolindrom('Топот');

/*Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN:*/
function getNumbers(string) {
  // eslint-disable-next-line radix
  return parseInt(string.toString().replace(/\D/g,''));
}
getNumbers('год 2023');

/*
Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами— и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.
*/
function padLine(str, minLength, addStr) {
  if (str.length >= minLength) {
    return str;
  }
  const preffixLength = minLength - str.length;
  const sample = addStr;
  while (addStr.length < preffixLength - sample.length) {
    addStr += addStr;
  }
  return sample.slice(0, preffixLength - addStr.length) + addStr + str;
}
padLine('qwerty', 4, '0');

// Функция для проверки длины строки

function checkStringLength(str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false

// Функция для проверки, является ли строка палиндромом

function isPalindrome(str) {
  // Приводим строку к нижнему регистру
  str = str.toLowerCase();

  // Запускаем цикл по строке и сравниваем символы с конца и начала
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      // Если символы не совпадают, то это не палиндром
      return false;
    }
  }

  // Если функция дошла до конца, значит строка является палиндромом
  return true;
}

isPalindrome('топот'); // true
isPalindrome('ДовОд'); // true
isPalindrome('Кекс'); // false

/* Функция, которая принимает строку,
извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN */

function extractDigits(str) {
  const digits = str.match(/[0-9]/g);
  if (digits === null) {
    return NaN;
  } else {
    return parseInt(digits.join(''), 10);
  }
}

extractDigits('2023 год'); // 2023
extractDigits('ECMAScript 2022'); // 2022
extractDigits('1 кефир, 0.5 батона'); // 105
extractDigits('агент 007'); // 7
extractDigits('а я томат'); // NaN

/* Функция, которая принимает три параметра:
исходную строку, минимальную длину и строку
с добавочными символами — и возвращает исходную строку,
дополненную указанными символами до заданной длины.
Символы добавляются в начало строки. Если исходная
строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца. */

function padString(str, length, pad) {
  if (str.length >= length) {
    return str;
  } else {
    const padCount = Math.ceil((length - str.length) / pad.length);
    const padding = pad.repeat(padCount).slice(0, length - str.length);
    return padding + str;
  }
}

padString('1', 2, '0'); // '01'
padString('1', 4, '0'); // '0001'
padString('q', 4, 'werty'); // 'werq'
padString('q', 4, 'we'); // 'wewq'
padString('qwerty', 4, '0'); // 'qwerty'

//Выведите числа от 1 до 50 и от 35 до 8.
console.log('Задание 1');

let i = 1;

while (i <= 50) {
    console.log(i);
    i++;
}

for (let i = 35; i >= 8; i--) console.log(i);

/* Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
тегом <br /> друг от друга, чтобы получить столбец, а не строку. */

document.write(`Задание 2 <br/>`);

i = 89;

while (i >= 11) {
    document.write(i);
    i--;
    document.write(`<br/>`);
}

/* С помощью цикла найдите сумму чисел от 0 до 100. */

console.log('Задание 3');

let a = 100; //1+2+3+4+5=15
let sum = 0;

for (let i = 0; i <= a; i++) {
    sum += i;
} 

console.log(sum)

/* Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3). */

console.log('Задание 4');

a = 5;
sum = 0;

for (let i = 1; i <= a; i++) {
    sum = 0;

    for (let m = 1; m <= i; m++) {
        sum += m;
    }

    console.log ('Сумма числа ' + i + ' = ' + sum);
}

/* Выведите чётные числа от 8 до 56. Решить задание через while и for. */

console.log('Задание 5');

console.log('Через while');

i = 8;

while (i <= 56) {
    console.log(i);
    i += 2;
}

console.log('Через for');

for (let i = 8; i <= 56; i++) {
    if (i % 2 != 0) continue;

    console.log(i);
} 

/* Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
...
3*1=3
3*2=6
3*3=9
3*4=12
...
Для решения задачи используйте вложенные циклы. */

console.log('Задание 6');

let itog = 1;
a = 1;

for (let i = 2; i <= 10; i++) {
    
    for (let a = 1; a <= 10; a++) {
        console.log(i + '*' + a + ' = ' + (i * a));
    }
   
    console.log(' ');
}

/* Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
для этого (итерация - это проход цикла), и запишите его в переменную num. */

console.log('Задание 7');

itog = 0;

for (let n = 1000; n > 50; n /= 2) {
    itog++;
    console.log(n);
} 

console.log('Количество итераций = ' + itog);

/* Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
может ввести отрицательное значение. */

console.log('Задание 8');


/* Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
8 57». Найдите самое большое и самое маленькое число в строке, используя цикл. */

console.log('Задание 9');

let strNumber = '4 98 4 6 1 106 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    number = '',
    numberCounter = 0,
    min,
    max;

for (let i = 0;;i++) {
    if (strNumber[i] == undefined) break;

    if (strNumber[i] !=' ') {
        number += strNumber[i];
    } else {

        if (numberCounter == 0) {
            min = number;
            max = number;
        }

        numberCounter++;

        if (min > +number) min = +number;
        if (max < +number) max = +number;

        number = '';
    }
}

console.log('MIN: ' + min);
console.log('MAX: ' + max);


/* 10. Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321. */

console.log('Задание 10');

let n = 8924,
    nString = String(n),
    countNumbers = 0,
    summNumbers = 0;

for (let i = 0; ; i++) {
    if (nString[i] == undefined) {
        countNumbers = i;
        break;
    }

    console.log(nString[i]);

    summNumbers += +nString[i];
}

console.log('countNumbers: ' + countNumbers);
console.log('summNumbers: ' + summNumbers);

for (let i = countNumbers - 1; i >= 0; i--) {
    console.log(nString[i]);
}
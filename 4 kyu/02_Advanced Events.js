// https://www.codewars.com/kata/52d4678038644497e900007c/train/javascript

function Event() {
    //сюда складываем все функции(обработчики)
    let allHandlers = [];

    // this.allHandlers = allHandlers; //чисто для себя для проверки ее в задаче не должно быть по опсианным правилам

    //функция добавления обработчика
    this.subscribe = function () { 
        Array.from(arguments).forEach(function (argument) { // перебираем все аргументы приходящие в функцию
            if (typeof argument === 'function')  // проверка на тип(обработчик может быть только функцией)
                allHandlers.push(argument); //добавление обработчика
        })
    }

    //функция удаления обработчика
    this.unsubscribe = function () {
        let args = Array.from(arguments);
        args.forEach(function (argument) { // перебираем все аргументы приходящие в функцию
            for (let i = allHandlers.length - 1; i >= 0; i--) { //перербираем все обработчики с конца в начало
                if (allHandlers[i] == argument) { //проверка на сходство функций
                    allHandlers.splice(i, 1); // удаление обработчика
                    break; // прервать функцию
                }
            }
        })
    }
    
    //функция вывзвающая все обработчики
    this.emit = function () {
        let nowHandlers = allHandlers.slice(); // создаем копию обработчиков
        nowHandlers.forEach((handler) => handler.apply(this, arguments)); // перербор а также вызов обработчиков с контекстом вызова(this) и аргументами
    }
}







// TEST 1 

// function l(arr) { arr.push('l'); }
// function o(arr) { arr.push('o'); }

// let e = new Event(),
//     bucket = [];

// e.subscribe(l, o, l);

// console.log(e.allHandlers);

// e.unsubscribe(o, l);

// console.log(e.allHandlers);


//TEST 2

// function l(arr) { arr.push('l'); }
// function o(arr) { arr.push('o'); }

// var e = new Event(),
//     bucket = [];

// e.subscribe(l, o, l);
// e.emit(bucket);

// console.log(e.allHandlers)

// e.unsubscribe(o, l);
// bucket = [];

// e.emit(bucket);
// console.log(e.allHandlers)
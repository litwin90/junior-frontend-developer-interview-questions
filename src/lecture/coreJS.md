# CoreJS

## Arrays

- Array literals  
    В JS литерал массива - это спиcок выражений, каждое из которых представляет элемент массива, заключенный в пару квадратных скобок. Когда массив создается используя литерал он инициализируется указанными значениями, а его длинна устанавливается равной их колличеству
    Create literal:
    ```
        let a = [1, 2, 3, {}, 'string', ['other array'], () => {}]

        let b =  [0, , , , 4] // [0, undefined, undefined, undefined, 4]
    ```
- Несколько способов создания массивов  
    ```
        let a = [];
        let b = new Array(1); // [undefined]
        let c = new Array(1,2); // [1,2]
        let d = Array.from('foo'); // ['f', 'o', 'o']
        
        Array.from: 
        let s = new Set(['foo', window]); 
        let e = Array.from(s); // ['foo', window]

        let f = Array.from([1, 2, 3], x => x + x); // [2, 4, 6]

        let g = Array.from({ length: 5 }, (v, k) => k); // [0, 1, 2, 3, 4]

        Array.of:  
        Array.of(1);         // [1]
        Array.of(1, 2, 3);   // [1, 2, 3]
        Array.of(undefined); // [undefined]
    ```
- Array.length   
    Cвойство length объекта, который является экземпляром типа Array , устанавливает или возвращает число элементов этого массива c числовыми индексами
    ```
        let a = [1,2,3,4,5];
        a.length === 5; //true
        a.length = 0; // a = []
        a.length = 2; // a = [undefined, undefined]

        let b = []; // b.length = 0
        b.soomeProp = 'someProp'; // b.length = 0
    ```

- links:  
    https://learn.javascript.ru/array  
    https://learn.javascript.ru/array-methods
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/length
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array#Relationship_between_length_and_numerical_properties  
***
## Objects  
- literal 
    ```
        let a = {
            prop1: 1,
            'prop 2': 2,
        };

        Вычисляемые свойства:
        a.prop1 = 11;
        a['prop 2'] = 12;

        let i = 0;
        let b = {
            ['prop' + ++i]: i,
            ['prop' + ++i]: i,
        }; // {prop1: 1, prop2: 2}

        let d = {
            [++i]: i,
            [++i]: i,
        }; // {3: 3, 4: 4}
    ```
- способы создания объектов: 
    ```
        let a = {
            prop1: 1,
            'prop 2': 2,
        };

        let Constructor = function() {
            this.prop1 = '1'
        }
        let c = new Constructor(); // Constructor{prop1: 1}
        let d = Object.create(prototype);
    ```
- links:  
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer https://learn.javascript.ru/object

*** 
- use strict
  - режим полного соответствия новому стандарту
    с выходом новых версий языка появились дополнения,
    которые могут поломать код написанный на старых версиях
    по умолчанию эти изменения выключены
    что бы их использовать => use strict  
    !! Применяется либо ко всем скрипту либо к отдельным ф-циям
    - Examples:
      - Объявление без var:

        ```javascript
        "use strict"  
            num = 5 => error
        "no use strict"  
            num = 5 => 5
        ```

      - Context:

        ```javascript
        "use strict"  
            fn smth() { return this } => undefined  
        "no use strict"
            fn smth() { return this } => window / global
        ```

- Приведение типов:
  - new Number(2) === 2
  - new Number(2) == 2
  - { a: 1 } === { a: 2 }
  - { a: 1 } == { a: 2 }
- типы данных:
  - 7 типов данных:
    - object
    - string
    - number
    - boolean
    - null
    - undefined
    - symbol
  - typeOf
    - {} - Object
    - function - function  
    - array - Object  
    - null - Object  
    - new String/Boolean/Number - Object  
    - undefined - undefined  
    - true - boolean  
    - "Текст" - string  
    - alert - function  
    - [] - object  
    - new Date - object
- [[Class]], определени типа объекта
    это свойство в котором хранится информация о типе объекта или конструкторе(**только для встроенных объектов**)

    ```
        const toString = {}.toString;
        function getType(obj) {
            return toString.call(obj).splice(...); => Date, Object, Array ...
        }
    ```

- instanceof  
    Оператор instanceof позволяет проверить, создан ли объект данной функцией, причём работает для любых функций – как встроенных, так и наших:

    ```javascript
    function User() {}
    var user = new User();
    alert( user instanceof User ); // true
    ```

- утиная типизация  
    Если говорить словами «классического программирования», то «duck typing» – это проверка реализации объектом требуемого интерфейса. Если реализует – ок, используем его. Если нет – значит это что-то другое.
- FD  
    это объявления ф-ции в основном потоке кода
- FE  
    это объявление ф-ции в контексте какого либо выражения
    (напр присваивания)
- FD vs FE:
    FE не всплывает:

    ```javascript
    sayHi("Вася"); // ошибка!
    var sayHi = function(name) {  
        alert( "Привет, " + name );
    }
    ```

- рекурсия
    это ф-ция которая вызывает сама себя
- Named FE
    предназначено для работы с рекурсией:

    ```javascript
    var test = function sayHi(name) {
        sayHi = "тест"; // попытка перезаписи
        alert( sayHi ); // function... (перезапись не удалась)
    };
    ```

- scope  
    Область в пределах которой видима переменная  
    nested scope:

    ```javascript
    function foo(arg) {
        function bar() {
            console.log('arg: '+arg);
        }
        bar();
    }
    ```

- Lexical Environment  
    это объект, создаваемый при каждом запуске ф-ции, куда входят
    все переманные ф-ции
- свойство [[Scope]]  
    это свойство которое функция получает при создании
    указывает на родительское лексическое окружение
- свойство [[Scope]] для new Function  
    ссылается на глобальный объект
- closure  
    Замыкание - ф-ция вместе с ее лексическим окружением
    (Lexical Environment)
    в котором она была вызвана
- что создает скоуп es3:  
    function
- что создает скоуп es5:  
    любая конструкция с '{ .... }'  
- shadoving

    ```javascript
    var scope = "global";
    function first() {
        var scope = 'first';
        function second() {
            var scope = 'second'
            console.log(scope);
        }
        second();
    }
    first();
    ```

- hoisting  
    Всплытие, способность переменной быть доступной до места ее объявления
- Подвержены хоистингу:
    var,
    FD,
    import(es6 modules)
- Не подержены хоистингу:
    (temporary dead zone)
    let
    const
    class
    FE
- чем может быть функция:  
    обычная функция  
    ф-ция конструктор
    ф-цмя метод объекта
- context(this)  
    контекст вызова ф-ции(конструктора, метода или просто ф-ции)  
    определяется в момент вызова  
    this для ф-ции в основном потоке кода - window / global  
        use strict => undefined  
    this для метода объекта - объект перед точкой  
    this для конструктора - ссылка на создаваемый объект  
- пример потери контекста:  
  - Пример №1

        ```javascript
        var user = {
            name: "Вася",
            hi: function() { alert(this.name); },
            bye: function() { alert("Пока"); }
        };

        user.hi(); // Вася (простой вызов работает)

        // а теперь вызовем user.hi или user.bye в зависимости от имени
        (user.name == "Вася" ? user.hi : user.bye)(); // undefined
        ```

  - Пример №2

    ```javascript
    var user = {
        firstName: "Вася",
        sayHi: function() {
            alert( this.firstName );
        }
    };

    setTimeout(user.sayHi, 1000); // undefined (не Вася!)
    ```

- особенности ф-ции конструктора  
    по умолчанию возвращает this (создаваемый объект)  
    если явно указать return someObject => вернет объект  
    если явно указать return somePrimitiveValue => вернет this  
- дескрипторы свойств объекта  
    Основной метод для управления свойствами – Object.defineProperty.  
    Object.defineProperty(obj, prop, descriptor)  
    value – значение свойства, по умолчанию undefined  
    writable – значение свойства можно менять, если true.
        По умолчанию false.  
    configurable – если true, то свойство можно удалять, а также менять его в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.  
    enumerable – если true, то свойство просматривается
        в цикле for..in и методе Object.keys(). По умолчанию false.  
    get – функция, которая возвращает значение свойства. По умолчанию undefined.  
    set – функция, которая записывает значение свойства. По умолчанию undefined.  
- статические свойства и методы
    Методы и свойства, которые не привязаны к конкретному экземпляру объекта:

    ```javascript
    function Article() {
        Article.count++; ***static property
    }
    Article.showCount = function() { ***static method
        alert( this.count );
    }
    ```

- фабричные методы  
    статические методы для создания экземпляров класса:

    ```javascript
    User.createFromData = function(userData) {
        var user = new User;
        user.name = userData.name;
        user.age = userData.age;
        return user;
    }
    ```

- Function.prototipe методы  
    bind  
    call  
    apply  
    toString  
- call & apply  
    вызывает фенкцию с заданным контекстом и аргументами

    ```javascript
    fn.call(context, arg1, arg2 ... argn)
    fn.apply(context, arr) - arr = [arg1, arg2 ... argn]
    if context = null => this = window
    ```

- bind  
    возвращает новую ф-цию с привязанным контекстом и аргументами  
    const newFn = fn.bind(context, arg1, arg2 ... argn)  
    !! перебить привязанный контекст нельзя, тк он хранится в замыкании
- bind polifill
  - ПРОСТАЯ РЕАЛИЗАЦИЯ:

    ```javascript
    function bind(fn, context) {
        return function() {
            return fn.apply(context, arguments);
        }
    }
    ```

  - ПОЛИФИЛЛ

    ```javascript
    if (!Function.prototype.bind) (function(){
        var ArrayPrototypeSlice = Array.prototype.slice;
        Function.prototype.bind = function() {
            var fn = this;
            var context = arguments[0];
            var args = ArrayPrototypeSlice.call(arguments, 1);
            if (typeof fn !== 'function') {
                throw new TypeError('message');
            }
            return function(){
                args.push(arguments);
                return fn.apply(context, args);
            };
        };
    })();
    ```

- карринг
    привязка аргументов

    ```javascript
    function mul(a, b) {
        return a * b;
    };
    var double = mul.bind(null, 2);
    ````

- декоратор  
    это обёртка над функцией, которая модифицирует её поведение. При этом основную работу по-прежнему выполняет функция.
    пример: bind polifill
- SetTimeOut, SetInterval  
    setInterval(func, delay, arg1, arg2 ... argn)  
    возвращает id таймера для отмены с помощью метода
        clearInterval/clearTimeout  
    минимальная задержка 4мс
- ```__proto__```  
    ссылка, указывающая на родителя данного объекта

    ```javascript
    function SomeConstructor() {
        ...
        this.__proto__ = some prototype
        !!! не раюотает в IE10
    }
    ```

- F.protopupe  
    !!!это свойство есть только у ф-ций  
    !! имеет смысл только у ф-ции конструктора
    Если задать конструктору =>
    все объекты будут иметь заданный прототип
- F.constractor  
    ссылка на ф-цию конструктор данного объекта  
    необходимо если нет явного доступа к конструктору объекта
- hasOwnProperty  
    определяет содержит ли объект данное свойство
    не идет по ссылке прото
- for in loop  
    перебирает все свойства объекта
    идет по ссылке прото
- Object.create(prototype)  
    создает новый объект с указанным прототипом  
    Выбрасывает исключение TypeError, если параметр proto не является null или объектом  
    второй параметр - объект с дескрипторами свойства

    ```javascript
    o = Object.create({}, {
        p: {
            value: 42,
            writable: true,
            enumerable: true,
            configurable: true
        }
    });
    ```

- Object.create polyfill

    ```javascript
    //проверяю если этого метода нет:
    if ( typeof Object.create !== 'function') {
        Object.create = (function () {
            //создаю ф-цию конструктор для будущего объекта
            //и сохраняю метод Object.hasOwnProperty:
            function Temp() {};
            const hasOwnProp = Object.HasOwnProperty;

            return function(prototype) {
                //проверяю если не объект и не Null => exeption
                if ( typeof prototype !== 'object') {
                    throw new Error('error');
                }

                //задаю констректору ссылку на прототип:
                Temp.prototype = prototype;
                //вызывая конструктор получаю объект с нужным прототипом:
                const obj = new Temp();
                //стираю ссылку на прототип у конструктора:
                Temp.prototype = null;

                //проверяю передан ли второй параметр и если да
                //то копираю в созданный объект проперти из второго //параметра
                if (arguments.length > 1) {
                    const props = arguments[1];
                    for (let prop in props) {
                        if (hasOwnProp.call(props, prop)) {
                            obj[prop] = props[prop];
                        }
                    }
                }
                return obj;
            }
        }());
    }
    ```

- prototypal inheritance

    ```javascript
    function Parent(val) {
        this.smth = val;
    }
    Parent.protottype.someMethod = function () { ... }

    function Child(val, otherVal) {
        Parent.apply(this, arguments);
        this.ownProp = otherVal;
    }
    Child.prototype = Object.create(Parent);
    Child.constructor = Child;

    переопределениее методов:
    Chid.prototype.ownMethod = function () {
        Parent.prototype.someMethod.apply(this, arguments)
    }
    ```

- ES6 inheritance

    ```javascript
    class Parent {
        constructor(val) {
            this.someProp = val;
        }
        someMethod() {
            do smth;
        }
        static somStatic() { ... }
        get someVal() {  ... }
    }
    class Child extends Parent {
        constructor(val, ...args) {
            super(val, ...args);
            this.childProp = smth;
        }
        childMethod(...args) {
            super.someMethod(...args);
            do smth else;
        }
    }
    ```

- отличие прототипного наследования от классического  
    классическое - создается иерархия классов, при этом наследование происходит от класса  
    прототипное - наследование происходит от объекта-прототипа  
- proto vs prototype
    proto - у каждого объекта (только одна)  
    указывает на родителя  
    prototype - специальное свойство, которое имеет смысл только
    у ф-ции конструктора, определяет какой прототип будет задан
    объектам созданным через данный конструктор
- Array.prototype.* methods
  - forEach
  - map
  - reduce((acc, el, ind, arr) => {})
  - reduceRight
  - filter
  - some
  - every
  - sort(fn) - на месте
  - splice(start, count, item1 ... itemN)
  - slice(start, end)
  - concate(...args)
  - fill(el, start, end) - на месте
  - find(fn)
  - findIndex(fn)
  - indexOf
  - lastIndexOf
  - includes
  - join(divider) - объединяет в строку по разделителю
  - push
  - pop
  - shift
  - unshift
  - reverce - на месте
- promises  
    это объект который хранит свое состояние(panding, onFullFilled, onRejected), текущий результат (если есть) и ф-ции колбэки.  
    Предоставляет функционал для работы с асинхронным кодом. Если надо асинхронно выполниь код и по завершении что то сделать еще:

    ```javascript
    const myPromise = new Promise((resolve, reject) => {
        ... do some async code
        resolve(result);
        reject(error);
    })
    myPromise.then(result => {
        ... do smth ...
        return otherResult; -- create new Promise
    });
    ```

- Promise.* static methods  
    Promise.all(arr) - резолыится когда все промисы из arr выполнены
    результат - массив результатов каждого промиса  
    если один выполлнился с ошибкой => результат - ошибка этого промиса
    и остальные промисы игнорируются  
    Promise.race(arr) - резолвится когда резолвится первый промис из массива с его результатом, остальные игнорируются  
    Promise.resolve(value) - возвращает успешно выполненный промис с результатом value  
    Promise.reject(error) - возвращает не успешно выполненный промис с результатом error
- ES6 features  
    блочный скоуп  
    tempory dead zone  
    переменные не являются свойствами глобального объекта  
    let  
    const  
    () => {}  
    es6 modules  
    symbol  
    ...args  
    const { smth1, smth2 } = myObject;  
    параметры по умолчанию в ф-ции  
    `${ somevalue }`  
    Set, Map  
    Class  
    promise  
- ES6 modules export
    1) export const a = 1;
    2) const a = 1;
        export a;
    3) export default const a = 1;
- ES6 modules import
    1) import { a } from './url'
    2) import { a as b } from '....'
    3) import * as obj from '.....'
    4) import a from '.....' // default export
- CommonJS  
    module.exports.fn = () => { .... }  
    =>  const someLibrary = require('...')
    someLibrary.fn = () => { ... }  
    or  
    module.exports = () => { ... }  
    const fn = require(' .... ');  
- modules (CommonJS vs ES6)  
    es6 - browser  
    common js - Node  
    es6 - native support  
    1) es6 -статическое определение пути на стадии компиляции
    => error while parsing  
    commonjs - динамическое определение пути на стадии работы программы  
    => error ar runtime  
    2) syntax differences
    3) loading techniques  
    commonJs - make a wraper  
    es6 - create "Module Record" object with links to imported instances  
- псевдомассив arguments
    properties:
        - length  
        - calle - ссылка на ф-цию которая вызвала данную  
        - indexes  
        ```__proto__``` == Object !!! not Array
- модуль - это  
    выделенная по функциональности часть кода
- Stateless module
    для константных аргументов константный результат
- function vs () => {}  
    arrow - has not own this  
            -//- arguments - take from parent  
            нельзя вызвать как конструктор (с new)  
- async functions  
    Возвращает промис

    ```javascript
    const asFn = async function fn() {
        const res = await somAsyncAction();
        return result;
    }
    asFn()
    .then(res => console.log(res))
    ```

- Что такое garbage collector в js и как он работает?  
    нет ссылок - нет объекта, есть ссылка - есть страдание
- hight order function  
    function that may receive a function as parameter or even return a function  
    map, reduce ...

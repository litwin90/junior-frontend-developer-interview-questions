# Base

## Структура

- [Сложность алгоритмов](#bigo)
- [MVC](#mvc)
- [Паттерны](#паттерны)
- [Анти-паттерны](#анти-паттерны)

### Сложность алгоритмов - Big O

`Big O` - это такая зависимость времени от входных данных которая потребуется на выполнение алгоритма . O(n^2), O(n), O(N*log(N)), O(2^N) - криптография). Каждый вложенный цикл увеличивает N. Это то сколько операций нужно проделать что выполнить алгоритм

Больше о сложности алгоритмов:

- [Серия статей на habr][bigo-habr-series]
- [Таблица сложности большинства алгоритмов habr][bigo-habr-table]
- [Быстрый старт][bigo-habr-base]
- [Видео 1][bigo-video1]
- [Видео 2][bigo-video2]

[bigo-habr-series]: https://habr.com/ru/post/196560/
[bigo-habr-table]: https://habr.com/ru/post/188010/
[bigo-habr-base]:https://habr.com/ru/post/104219/
[bigo-video1]: https://www.youtube.com/watch?v=eJRg4qr7qAo
[bigo-video2]: https://www.youtube.com/watch?v=M3ghq2E9tPw

### MVC

`MVC` - это конструкционный шаблон, который описывает способ построения структуры нашего приложения. Model - View - Controller: Model - информация о данных, контроллер - методы и работы с ними, view - отображение пользователю.

Больше информации о том как зачем MVC и примеры можно найти тут:

- [MDN][mvc-mdn]
- [Серия статей посвященная MVC на medium][mvc-medium]
- [Habr #1][mvc-habr-example], [Habr #2][mvc-habr-one], [Habr #3][mvc-habr-two]
- [Пример реализации][mvc-example]

[mvc-mdn]: https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture
[mvc-medium]: https://medium.com/@patrickackerman/classic-front-end-mvc-with-vanilla-javascript-7eee550bc702
[mvc-example]: https://alexatnet.com/model-view-controller-mvc-in-javascript_ru/
[mvc-habr-one]: https://habr.com/ru/post/321050/
[mvc-habr-two]: https://habr.com/ru/post/322700/
[mvc-habr-example]: https://habr.com/ru/company/ruvds/blog/333856/

### Паттерны

`Паттерны` - повторяемая архитектурная конструкция, представляющая собой решение проблемы проектирования в рамках некоторого часто возникающего контекста.

Есть три основных "типа" паттернов:

- Порождающие - Отвечают за удобное и безопасное создание новых объектов или даже целых семейств объектов.
- Структурные - Отвечают за построение удобных в поддержке иерархий классов.
- Поведенческие - Решают задачи эффективного и безопасного взаимодействия между объектами программы.

Больше информации о паттернах и примеры:

- [refactoring][patterns-catalog-refactoring]
- [sourcemaking][patterns-catalog-sourcemaking]
- [es6 examples][patterns-es6]
- [Шпаргалка по паттернам][patterns-habr-note]
- [medium js design patterns][patterns-medium-js]

[patterns-catalog-refactoring]: https://refactoring.guru/ru/design-patterns/catalog
[patterns-catalog-sourcemaking]: https://sourcemaking.com/design_patterns
[patterns-medium-js]: https://medium.com/beginners-guide-to-mobile-web-development/javascript-design-patterns-25f0faaaa15
[patterns-es6]: http://loredanacirstea.github.io/es6-design-patterns/
[patterns-habr-note]: https://habr.com/ru/post/210288/

### Анти-паттерны

`Анти-паттерны` - это — шаблоны ошибок, которые совершаются при решении различных задач.

- Magic Numbers

```javascript
function(a, b = 42) {}
```

- Hard code (жесткое кодирование)

```javascript
fetch('https://website/api/v1/user');
fetch('https://website/api/v1/todo');
fetch('https://website/api/v1/list');
```

- Soft code (антоним жесткому кодированию) - когда существует один большой файл конфигурации с помощью которого задают все "переменные".
- Лодочный якорь - это остаются не используемые куски кода, после рефакторинга)
- Создание велосипеда
- Бездумное комментирование - излишнее комментирование кода. В любом случае комментарии кода нужен в очень редких случаях. Если поймали себя на мысли, что нужно написать комментарий к коду, значит код слишком сложный и его нужно разбивать на более мелкие части.
- Слепая вера - думать что в функцию будут всегда попадать только параметры одного типа и никогда не выполнять проверку тип входящих параметров

Больше примеров:

- [habr][antipatterns-habr]
- [sourcemaking][antipatterns-sourcemaking]

[antipatterns-sourcemaking]: https://sourcemaking.com/antipatterns
[antipatterns-habr]: https://habr.com/ru/post/59005/
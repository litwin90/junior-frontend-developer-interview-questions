- Что такое делегирование?  
    (когда вешаем обработчик на контейнер и проверяем клик по элементу внутри - ага, всё ещё спрашивают)
- расчет ширины элемента  
    - box-sizing: border-box
        width = MargLeft + borderLeft + padLeft + content + padRight + BorRight + MarginRight
    - box-sizing: border-box
        width = MargLeft + borderLeft + padLeft + content + padRight + BorRight + MarginRight
- event.preventDefault()  
    отменяет действие браезера по умолчанию для данного события
- event.stopPropagation()  
    прекращает дальнейшее всплытие события
- стадии которые проходят события
    1) capturing
        погружение, по умолчанию обработчики не срабатывают
        что бы срабатывали в eddEventListener установать последний параметр true
    2) target
        событие достигло цели
    3) bubling
        всплытие(по умолчанию срабатывают обработчики)
- event delegetion  
    навесить обработчик на родительский элемент вместо множества дочерних
- занимаемое место, фактическая ширина элемента  
- как сделать 2/3 колоночный макет
    - 2x flex:
        ```
        .container {
            display: flex;
        }
        .right {
            background-color: aquamarine;
            flex-grow: 3;
            flex-basis: 0;
            padding: 10px 15px;
        }
        .left {
            background-color: blue;
            flex-grow: 1;
            flex-basis: 0;
            flex-shrink: 2;
            padding: 10px 15px;
        }
    - 3x flex:
        ```
        .container {
            display: flex;
        }
        .right {
            background-color: aquamarine;
            flex-grow: 1;
            flex-basis: 0;
            padding: 10px 15px;
        }
        .left {
            background-color: blue;
            flex-grow: 1;
            flex-basis: 0;
            flex-shrink: 2;
            padding: 10px 15px;
        }
        .center {
            background-color: azure;
            flex-grow: 2;
            min-width: 200px;
        }
- селекторы скорость выбора
    1) ```*```
    2) id
    3) class
    4) tag
    5) composite
- скорость применения
    обратна скорости выбора
- перфоманс селекторов 
    Соглсно исследлваний Стива Соудерса 2009г:
    1) ID, e.g. #header
    2) Class, e.g. .promo
    3) Type, e.g. div
    4) Adjacent sibling, e.g. h2 + p
    5) Child, e.g. li > ul
    6) Descendant, e.g. ul a
    7) Universal, i.e. *
    8) Attribute, e.g. [type="text"]
    9) Pseudo-classes/-elements, e.g. a:hover
- блочная модель
- box-sizing  
    border-box, content-box
- display properties/default  
    - block (div, p, h1-h6)
    - inline (span)
    - inline-block(botton)
    - run-in
    - none
    - inherit
    - initial - default
    - unset set inherit or initial if not inferited?
    - table
    - table-row
    - table-head
    - table-cell
    - inline-table
    - flex
    - grid
- visibility
    - visible/default
    - hidden
    - callapse
    - inherit
- box-sizing
    - border-box
    - content-box/default
    - inherit
    - initial
    - unset
- overflow(overflow-x/-y)
    - visible/default
    - hidden
    - scroll - всегда прокрутка
    - auto
- float(display->block)
    - none/default
    - left
    - right
    Affected to display prop:
    display -> block
    flex -> not affected
    inlinetable -> table
- position
    - static - default
    - absolute
    - relative
    - fixed
    - sticky (~~ relative + fixed)

    - inherit, initial, unset
- z-index
    - 0, +0, -0 значения
    отрицательные не везде поддерживаются
    - auto - как у родительского
    - inherit, initial, unset
- transition  
    transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
    ```
    div {
        transition: background-color 0.5s ease;
        background-color: red;
    }
    div:hover {
        background-color: green;
    }
- transform  
    The transform property allows you to visually manipulate an element by skewing, rotating, translating, or scaling:
    ```
    .element {
        width: 20px;
        height: 20px;
        transform: scale(20);
    }
    ```
    VALUES:    
        - scale(): affects the size of the element. This also applies to the font-size, padding, height, and width of an element, too. It’s also a a shorthand function for the scaleX and scaleY functions.  
        - skewX() and skewY(): tilts an element to the left or right, like turning a rectangle into a parallelogram. There is no shorthand skew property.  
        - translate(): moves an element sideways or up and down.
        rotate(): rotates the element clockwise from its current position.  
        - matrix(): a function that is probably not intended to be written by hand, but combines all transforms into one.  
        - perspective(): doesn’t affect the element itself, but affects the transforms of descendent elements' 3D transforms, allowing them all to have a consistent depth perspective.  
- liniar/ radial gradient  
    css function  
    ```
    background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
    repeating-linear-gradient()
- единицы измерений
    - абсолютные
        - px
        - pt
        - pc
        - mm
        - cm
    - относительные
        относительно шрифта:
        - em относительно родителя
        - rem относительно размера шрифта элемента <html>
        - % - относительно родителя
        относительно экрана
        - vw
        - vh
        - vmin
        - vmax

- как сверстать модалку
- схлопывание маргинов (берется максимальный а не сумма)
    - для маргин том и боттон (не применяется к спозиционированным и зафлоченным элементам)
    - соседние элементы
    - родитель и первый/последний потомок
    - пустые блоки
- flex
    - главноая ось направление, в соответствии с которым располагаются все его дочерние элементы.
    - поперечная ось
    - flex-direction – направление главной оси: 
        1) row (значение по умолчанию) : слева направо (в rtl справа налево)
        2) row-reverse: справа налево (в rtl слева направо)
        3) column: сверху вниз
        4) column-reverse: снизу вверх
    - justify-content – выравнивание по главной оси
        - flex-start (значение по умолчанию) : блоки прижаты к началу главной оси
        - flex-end: блоки прижаты к концу главной оси
        - center: блоки располагаются в центре главной оси
        - space-between: первый блок располагается в начале главной оси, последний блок – в конце, все остальные блоки равномерно распределены в оставшемся пространстве.
        - space-around: все блоки равномерно распределены вдоль главной оси, разделяя все свободное пространство поровну.
    - align-items – выравнивание по поперечной оси
        - flex-start: блоки прижаты к началу поперечной оси
        - flex-end: блоки прижаты к концу поперечной оси
        - center: блоки располагаются в центре поперечной оси
        - baseline: блоки выровнены по их baseline
        - stretch (значение по умолчанию) : блоки растянуты, занимая все доступное место по поперечной оси, при этом все же учитываются min-width/max-width, если таковые заданы.
    МНОГОСТРОЧНЫЙ РЕЖИМ
    - flex-wrap - многострочночть
        - nowrap (значение по умолчанию) : блоки расположены в одну линию слева направо (в rtl справа налево)
        - wrap: блоки расположены в несколько горизонтальных рядов (если не помещаются в один ряд). Они следуют друг за другом слева направо (в rtl справа налево)
        - wrap-reverse: то-же что и wrap, но блоки располагаются в обратном порядке.
    - align-content - определяет то, каким образом образовавшиеся ряды блоков будут выровнены по вертикали и как они поделят между собой все пространство flex-контейнера.
        - flex-start: ряды блоков прижаты к началу flex-контейнера.
        - flex-end: ряды блоков прижаты к концу flex-контейнера
        - center: ряды блоков находятся в центре flex-контейнера
        - space-between: первый ряд блоков располагается в начале flex-контейнера, последний ряд блоков блок – в конце, все остальные ряды равномерно распределены в оставшемся пространстве.
        - space-around: ряды блоков равномерно распределены в от начала до конца flex-контейнера, разделяя все свободное пространство поровну.
        - stretch (значение по умолчанию): Ряды блоков растянуты, дабы занять все имеющееся пространство.
    - CSS для дочерних элементов:
        - flex-basis – базовый размер отдельно взятого flex-блока
        - flex-grow – “жадность” отдельно взятого flex-блока
        - flex-shrink – фактор “сжимаемости” отдельно взятого flex-блока
        - align-self – выравнивание отдельно взятого flex-блока по поперечной оси.
        - order – порядок следования отдельно взятого flex-блока внутри flex-контейнера.
        - margin: auto по вертикали. Мечты сбываются!
- как организовать анимации
- BEM, ALLY
- JSS
- семантика это
- html5 tegs
- html5JS APIs
- аксессебилити
- препроцессоры SASS LESS 
- перимущества и недостатки препроцессоров
- можно ли обойтись без препроцессоров
- RWD lauout patterns
    - source order stacking
        блоки размещаются по порядку друг за другом, при различных экранах занимают различные места на странице(1 - 2 кол макет например для разных экранов)
    - content choreography 
        картинки оазличных размеров для разных экранов
    - Off vanvas 

- resonsive vs adaptive
    - респонсив - разный вид на разной ширине экрана
    - адаптив - с бэкэнда отдать нужные стили под конкретный размер экрана
- responsive techniques
    - медиа запросы
    - кор цсс/хтмл
- media queries
- живая и неживая коллекция
    отличаются - еси в дом добавить что-то из элементов попадающих под селектор - то живая коллекция поменяется - а неживая нет
- DOM API/ event handing/ event delegation
- DOM inheritance
- CSS Animations / requestAnimationFrame

- вес селекторов
- специфичность
- event bubling
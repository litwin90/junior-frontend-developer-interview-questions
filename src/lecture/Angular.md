# Содержание

- [Уроки](#Уроки)
- [Переменные](#Переменные)
- [Lifecycle](#Lifecycle)
- [Data binding](#Data-binding)
- [Directives](#Directives)
- [Pipe](#pipe)
- [Components](#Components)
- [Templates](#Templates)
- [Router](#Router)
- [Modules](#Modules)
- [Services](#Services)
- [Dependency Injection](#Dependency-injection)
- [Change Detection](#Change-Detection)
- [RxJS](#RxJS)
- [State Managment](#State-Managment)
- [Unit test](#unit-test)

## Уроки

### Angular

1. Быстрый старт:
    - [Code craft - quick start - 2019 - Eng.][ACodeCraft]
    - [Traversy Media - Crash Course - 2019 - Eng.][ACrashCourse]
2. Начало работы:
    - [Scrimba - get started - 2018 - Eng.][AScrimba]
    - [Egghead - get started - 2017 - Eng.][AEggheadAngular]
3. Оффлайн:
    - [Udemy from torrent - 2018 - Eng.][AUdemy]
4. Вопросы к собесу:
    - [Angular interview questions - RU][AGithubRu]
5. Рекомендуемые ссылки:
    - [Angular RU][ARu]

[ARu]: https://github.com/Angular-RU
[AUdemy]: https://rutracker.org/forum/viewtopic.php?t=5534170
[AScrimba]: https://scrimba.com/g/gyourfirstangularapp
[AGithubRu]: https://github.com/Angular-RU/angular-ru-interview-questions
[ACodeCraft]: https://codecraft.tv/courses/angular/quickstart/overview/
[ACrashCourse]: https://www.youtube.com/watch?v=Fdf5aTYRW0E
[AEggheadAngular]: https://egghead.io/lessons/angular-say-hello-world-to-angular-2

### AngularJS

1. Быстрый старт:
2. Начало работы:
    - [Egghead - get started - 2017 - Eng.][AEggheadAngularJS]
3. Оффлайн

[AEggheadAngularJS]: https://egghead.io/lessons/angularjs-introduction-to-building-an-angularjs-app

## Переменные

```html
<h2 #p2>Some text</h2>
<form #f="ngForm">
    <button [disable]="!f.form.valid">Button</button>
</form>

```

## Lifecycle

Порядок выполнения "хуков" сохранен

- `NgOnChanges` - срабатывает каждый раз когда меняется `Input` проперти когда мы передаем в нашу компоненту. Вызывается перед `NgOnInit`
- `NgOnInit` - срабатывает один раз при после `NgOnChanges` и иинициализует какие-то данные, т.к. работает с данными (вызывает сервисы).
- `NgDocheck` - в отличии от `NgOnChnages` он отрабатывает при каждом прогоне `NgOnAction`??? Например: есть форма, при каждом измении каждого элемента будет вызывать `NgDoCheck` - это доргая операция и имеет смысл при кастомных валидациях
- `NgAfterContentInit` -
- `NgAfterContentChecked` -
- `NgAfterViewInit` -
- `NgAfterViewChecked` -
- `NgOnDestroy` -  используется перед тем как Ангуляр уничтожит компоненту. Используется для уничтожения всяких евентов и т.д. Чтобы обезопасить себя на `memory leaks`.

## Data binding

- `{{property}}` - Интерполяция - example: `<p>{{message}}</p>`;
- `[]="property"` - Property Binding - example: `<h2 [textContent]="message"><h2>`
- `()="method()"` - Event Binding - example: `<button (click)="sayHello()">Say hello</button>`;
- `[(ngModel)]="property"` - Two Way Binding
  - example: `<input [(ngModel)]="username"`;
  - bannas in the box
  - It's = `[ngModel]="username" (ngModelChange)="...."`

Questions:

- Что такое NgModel?

## Directives

### Виды директов

- Components
- Структурные - помечаются звездочкой - добавляют и удаляют элементы (ngIf and ngFor)
- Атрибуты - ничего не делают с дом деревом, но они меняют поведение наших элементов

### Стуктурные директивы

<aside class="notice">
На один элемент может быть одна стуктурная дирректива
</aside>

- Оптмизирует расходы памяти
- ngIf
- ngSwitch
- ngFor - микросинтасксис: `index`, `fist`, `last`, `even` and `odd`

```html
<li *ngFor="let user of users; let i = index">
    <p>name: {{user.name}} - index: {{i}}</p>
</li>
<template ngFor let-her [ngForOf]="heroes">
    <div>{{hero}}</div>
</template>
```

- ngStyle

```html
<span [style.background-color]="'red'"></span>
<span bind-style.background-color="'red'"></span>
<span [ngStyle]="{'background-color':'red'}"></span>
```

- ngClass

```html
<div [ngClass]="string|Array|obj"></div>
<div [ngClass]="{class: true, class-two: false }"></div>
```

- ngNonBindable - игонрирование бандинга

```html
<span ngNonBindable>some {{content}} text</span> --> some {{content}} text
```

- Кастоманая директива

```typescript
@Directive({
    selector: '[appHightLight]'
})
export class HighLigtDirective {
    constructor(private el: ElementRef, private render: Render2) {
        this.render.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    }
}

@Directive({
    selector: '[appHightLightHover]'
})
export class HighLigtDirective {
    @Input() hightlightColor: string;
    // <span appHightLightHover [hightlightColor]="colorFromModel" >
    @Input('appHightLightHover') hightlightColor: string;
    // <span [appHightLightHover]="colorFromModel" >
    constructor(private el: ElementRef, private render: Render2) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.hightlight('red');
    }
     @HostListener('mouseleave') onMouseEnter() {
        this.hightlight(null);
    }

    private hightlight(color: string): void {
        this.render.setStyle(this.el.nativeElement, 'background-color', color);
    }
}

@Directive({
    selector: '[appHide]'
})
export class AppHideDirective {
    @Input() set appHide(condition: boolean) {
        if(!condition) {
            this.viewContainer.createEmberddedView(view.templateRef)
        } else {
            this.viewContainer.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainterRef) {
            // templateRef -
            // viewContainer - ссылка куда будет вставлен компонент
        }
    // Реализация может быть ещё через `ngOnChanges`
    // <div *appHide="propFromModel|true|false">Some text</div>
}
@NgModules({
    declarations: {
        HighLigtDirective,
        HighLigtDirective,
        AppHideDirective
    }
})

// usage
<div appHightLight appHightLightHover></div>
```

## Pipe

- Зачем нужны - мотификация данных перед отображением пользователю. Примеры: сортировка, фильтрация и т.д.

### Pure vs ImPure

- Pure - строго регламентируется когда будет работать|сработает.
Бдуте работать когда он получит примитив или изменяется !ссылка! обьекта
- ImPure - при любом изменении в нашем компоненте он будет срабатывать, аля `NgOnChange`. Можно изменить через `pure: false|true` в декораторе Pipe при обьявлении класса.

### Async Pipe

```html
<p>{{data | async }}<p>
<!-- Print `RECEIVIDE DATA` after 5 sec -->
```

```typescript
export class AsyncPipeComponent {
    public data = new Promise(resolve => {
        setTimeout(() => {
            resolve('RECEIVIDE DATA!')
        }, 500);
    })
}
```

### Использование

```html
<p>{{ now | date: 'dd.MM.yyyy' }}</p> -> format string
<p>{{expression | pipeName:parameter1:parameter2 }}</p>
<p>{{'Angular2' | slice:3 | uppercase }}</p>
```

```typescript
@Component({
    providers: [AgePipe, DatePipe],
})
class SomseComponent {
    public currentDay: string = new DatePipe().transform(new Date(), 'yyyy/MM/dd');
    constructor(private _agePipe: AgePipe) {
        this.age = this._agePipe.transform(this.allEmployees, 30)
    }
}
```

### Встроенные пайпы глядеть в офф. доке

### Кастомные пайпы

```typescript
@Pipe({
    name: 'sortByStatus',
})
export class SortPipe implements PipeTransform {
    tranfsofrm(allTasks: any[], status: string): any {
        if(!allTasks || !status) {
            return allTask
        }
         return allTask.filter((task) => task.status === status);
    }
}

@NgModule({
    declarations: [
        SortPipe,
    ]
})

// Example
<li *ngFor="let task of tasks | sortedByStatus: status" >{{task.name}} - {{task.status}}</li>
```

## Guard

## Components

- `Компоненты` - это "строительные"  блоки UI в приложении. Они простым TS классом и это декоратор который представляет собой набор мета информации о классе. Он наследуется от `Directive`.

- `Component` vs `Directive` - всегда есть `teamplate` ( `teamplateUrl` or `teamplate`)

- `Component Methods` - Определяеют его поведение
- `Component Methods` - Определяеют его состояние

### Content of Components

- `ng-content` - если из какой-то внешней компоненты вызываем нашу мы можем передать кусок разметки
- `ng-template` -
- `ng-`

### Components Metadata

- `animation` - list of animation of this components
- `changeDetection` -
- `encapsultaion` - Говорит о том, как мы обрабатывать текущие компонент (!)
- `entryComponents` -
- `interpolation` - заменяется обычный кавычки для интеполяции. Example: `[}}, {{]` -> `}}property{{`
- `moduleId` - можно переопределить модуль в котором он будет использоваться, плохая штука
- `template` - inline HTML
- `templateUrl` - относительный путь к шаблоны
- `styles` - inlint Styles
- `styleUrls` - относительный путь к стилям
- `viewPropviders` -

Унаследовано от Directives:

- `* exportAs` -
- `* host` -
- `* input` -
- `* outputs` -
- `* providers` - Своего рода синглотн для компоненты. При каждом обьявлении нового компонента будет создан новый синглотон. Что является `V8 killers`
- `* queries` -
- `* selector` -

### Decorators

- `@Input` - связавыает родителя и дете
- `@Output` - не поддерживает bubling

### Smart and Dump Components

По-сути пришли с React

### Smart

- Жестко привязанны к нашему приложению
- используют какие-то сервисы
- call to back-end
- Работают с данными
- Обычно связаны с `Service(s)` этого компонента

### Dump or Presentation Components

- Не имеют внутренной логики
- Реюзабельны
- Их поведение определяется теми св-вами которыми мы в них передаем

## Templates

```html

```

## Router

From HTML:

```html
<a routerLink="../home"></a>
<a [routerLink]="['./pageWithParams', 10, 'video']" [routerLinkActive]="'active'"></a>
```

From Component

```typescript
this.router.navigate(['pageWithParams', 2, 'video'], { queryParams: {
    redirectedFromClass: true
}})
```

Base href:

`<base href="/">`

### Redirect

`{ path: 'redirect', redirectTo: 'home', pathMatch: 'full' }`

где:

- `pathMatch` - это

### Params

- `ActivatetRoute` - получаем доступ к тем параметрам которые сейчас есть на странице. При этом мы можем подписаться на изменение параметров

```typescript
class SomeComponent {
    public routerParams = {

    };

    constructor(private router: ActivetRouter) {}

    ngOnInit() {
        this.router.params.subsribe(data => {
            this.routerParams.id = data['id'];
            this.routerParams.type = data['type'];
        })
        this.router.data.subscribe(data => {
            console.log(data);
        })
    }
}
```

- `ActivatetRouteSnapshot` - один раз пришли и больше не попадаем. Только при инициализации

### Router Childs

## Modules

- JIT - динамическая компиляция
- AOT - статическая компиляция - более производительтая, меньше бандл

!! Отдельно почитать

### Example

```typescript
// Create export module
@NgModule({
    import: [
        CommonModule,
    ],
    declarations: [
        TodoListComponent,
        TodoItemComponent,
        TodoItemPipe,
        TodoItemDirective,
    ],
    providers: [
        TodoService,
    ],
    exports: [
        TodoListComponent
    ],
})
export class TodoModule { }

// Import module to another module
// !!! Здесь также будет доступен TodoService
@NgModule ({
    import: [
        CommonModule,
        // Import module here
        TodoModule,
    ],
    declarations: [
        MainComponent,
    ],
    bootstrap: [MainComponent]
})
export class MainModule { }
```

### Встроенные модули

- BrowserModule - для работы в браузере
- FormsModule - для работы с формами
- HttpModule - для работы с back-end

### Lazy Loading

### Важно

## Dependency Injection

DI - Dependency Injection - Иньекция зависимостей - это такая система которая связывает разные части приложения, которая позвооляет одной части приложения получить доступ к другой. Таким образом это позволяется создавать более гибку систему. При таком подходе к "компонента" снимается "необходимость" создавать свои зависимости, и все сводиться к тому, что только знает как с ними работать (API и т.д.)

Принцип:

- инверсия управления
- слабое связываения

```typescript
// плохой пример
export class Car {
    public tires: Tires;
    public engine: Engine;

    // 1. Констуктор очень тяжело тестировать
    // 2. В случае если классы один из классов поменяется его необходимо будет
    // вручную везде поменять
    constructor() {
        this.tires = new Tires();
        this.engine = new Engine();
    }
}

// хороший пример
export class Car {
    // 1. Таким образом мы отвязали наш класс от зависимостей классов
    // 2. Удобнее тестировать
    constructor(
        public tires: Tires,
        public engine: Engine,
    ) { }
}

const car = new Car(new Tires(), new Engine());
```

DI включает в себя (в рамках angular):

- Token - id зависимости по которому мы сможем к ней обращаться. Может быть двух видов: `строка` или `класс`
- Provider - он связывает токен со списком зависимостей и указывает ангуляру как создавать обьект по данному токена
- Injector - содержит в себе набор ссылкой который отвечает за разрешение зависимостей и их инжектирование при создании обьектов
- Dependency - сама зависимость, то что непосредственно инжектируется в компонент

Как зарегистировать зависимсоть
Как обьявить список зависимостей которые необходимы

Когда мы обьявляем зависимость в компоненте (`private _http: HTTP` в примере ниже) он ищет её в регистре зависимостей. Если он находить он выдает её экземпляр, а если её нет тогда создает новый экземпляр и инжектирует её в компонент

```typescript
@Injectable()
export class ExampleService {
    constructor(private _http: HTTP) {}
    public getData(): void {
        return { data: 'data example' }
    }
}
```

Бывают:

- встроенные в Angular (HTTP and e.t.c)
- собственны:
  - для создания собственной зависимости принимается декоратор `@Injectable`
  - для регистрациия собственно зависимости необходимо добавить её в `providers`. После этого она попадает в `Injection Three` и там храниться

## Services

- Provide streams (data models)
- Provide operations with data
- Helpers

Как можно обьвить сервисы в `providers`:

- `providers: [ MyService ]` - короткая запись
- `providers: [ { provide: MyService, useClass: MyService } ]` - равноценну примеру выше, т.к. имена одинаковые
- `providers: [ { provide: 'SecondInstanse', useClass: MyService } ]`
- `providers: [ { provide: 'IS_PROD', useValue: true } ]`
- `providers: [ { provide: MyService, useFactory: myFactory, deps: ['IS_PROD'] } ]`
- `providers: [ { provide: 'MyServiceToken', useExisting: MyService }]`

где:

- `useFactory` - `function myfactory(IS_PROD) { return IS_PROD ? new MyService : new FakeMyService }`
- `provide` - токен, про который говорилось выше. Пример использования `MyService` - класс, `'SecondInstance'` - это строка
- ``

удобно при тестировании - т.к. в `useClass` - можно впихнуть другой сервис

декоратор `@Optional` - говорит о том, что если зависимость на найдена - то мы попытаемся сами решить тарбла, в противном случае выдаст ошибку

есть ещё `InjectionToken` - самому почитать

```typescript
class MyService {
    constructor(@Optional() private dataService: DataService) {
        this.data = this.dataService ? this.dataService.getData() : 'local';
    }

    getData() {
        return { data: this.data }
    }
}
```

### Host Depenecies

связка `ng-content + Host()`

## Change Detection

- Application State Update - происходит после любого действия (ajax, click, калькуляция и т.д.)
- View State Propogation - проходит всю модель - срабатывает после разрблокировки Event Loop

Change Detector - дерево

Angular Change Detector проверяет все это дерево за один проход

Из чего он состоит: `C * N`

- `C` - Время на проверку на каждый байдинг (тут уже сделали все в ангуляре)
- `N` - Количество байдингов (можем манипулировать только этим)

тут что-то про JIT and OAT

### AOT

- `ng serve --aot`
- `ng build --prod`

- Он позвляет компилировать шаблоны на этапе сборки
- Позволяет отлавливать ошибки на этапе сборки
- `AOT` для прода

Плюсы:

- Проверка ошибок в шаблонах
- Маленький бандл
- Быстрая инициализация загрузки

Недостатки:

- Время сборки очень большое
- Для больших приложений нельзя использовать `OAT` для дева
- Ограничение синтаксиса TS

WORKFLOW:

- dev: `JIT`
- prod: `AOT`

Как мы можем влиять на количество бандингов:

- Immutable Object

```typescript
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent {
    constructor(private ref: ChangeDetectorRef) {

    }
}
```

`ChangeDetectionStrategy.OnPush` - этот компонент будет перерендироваться только когда инпут или output props были изменыны! А также его потомки
`ChangeDetectorRef` - рефернс на `change detection` класс. У него есть различные методы отвечающие за управление обновлением компонента (аля React)

по дефолту стоит `глубокая проверка`;

### Когда срабатывает

- При событии
- XHR, Fetch
- Timers

### Zone.js

## RxJS

Observables vs Promises

- Observable is not created when there are no subsribers
- Observable could be reused (Is be recreated for new subsriber)
- Observable could be synchrounous

### Observables

Это функция которая берет Oбзеревбел и возвращает функции

```typescript
const sourse = Obserable.create((obs) => {
    obs.next('val');
    obs.err('err');
    return () => {
        console.log('--Destroy--');
    }
});
sourse.subscribe(
    (val) => {},
    (err) => {},
    () => { console.log('--Compleated--')}
)
```

Methods:

- next()
- error()
- complete()

Callbacks:

- 3 function: val, err and complate
- Subject instance

Подписка / Отписка / Закрыть

```typescript
sourse.subscribe();
sourse.unsubsribe();
sourse.compleate();
```

### Операторы

#### Методы создания

- `Obserable.of('tets')` - оборачивает результат и сразу compleate
- `Obserable.interval(100).take(3)` - каждые мс выполняет что-то, до 3 раз
- `Obserable.timer(300)` - через мс вызовиться и закомплитается
- `Obserable.throw(new Error())` - кидает сразу ошибку
- `Obserable.empty()` - просто завершается, обычно используется с `defaultIsEmpty()`
- `Obserable.never()` - ни коплитается, не делает ошибки, не уведомляет
- `Obserable.mapTo(null)` - мапает на какое-то значение
- `Obserable.from([1, 2, 3])` - преобразовывает массив в последовательные нотификашки !! SYNC!!

#### Методы комбинации

- `concat`
- `merge`
- `forkJoin` - подписывается одновременно на все обьекты (мб вместо finally)
- `zip`

```javascript
// re1 - 500mc
// re2 - 100mc
// re3 - 50mc
// reErr - error
Obserable.concat(re1, re2, re3) // 500, 100, 50 - 3 event
Obserable.concat(re1, re2, reErr, re3) // 500, 100, Err !!! without 50

Obserable.merge(re1, re2, re3) // 50, 100, 500 - 3 event
Obserable.merge(re1, re2, reErr, re3) // Err !!! without all

Obserable.forkJoin(re1, re2, re3) // [500, 100, 50] - 1 event склеит все
Obserable.forkJoin(re1, re2, reErr, re3) // Err !!! without all - 1 event

Obserable.zip(re1, re2, re3) // [500, 100, 50] - будет ждать по одному нотификации
Obserable.zip(re1, re2, reErr, re3) // Err !!! without all - 1 event
```

#### Методы ошибок

- `catch`
- `retry`
- `retryWhen`
- `onErrorResumeNext`

```javascript
sourse
    .catch((err) => {
        // Пробуем обработать ошибку, тогда возвращаем обзеребл дальше
    })
    .retry(3) // Пробует переодписаться N раз (т.к. холодный)
    .retryWhen((error) => {
        // Принимает поток ошибок
    })
    .onErrorResumeNext(otherSubject) // Если ошибка переключаемся на другой оbserable
    .subscribe(
        (val) => {}
        (err) => {}
        () => {}
    )
```

#### Методы мультикаста

- `publish`
- `share`
- `shareReplay`
- `multicast`
- `connect`

#### Методы Фильтров

#### Методы трансформации

#### Helpers

- `do` - логирование

### Виды обьектов

- `Subject` - после завершения его уже нельзя переюзать
- `AsyncSubject` - подписчики получают инфу только после того как subject был закомплитен
- `ReplaySubject` - пытается проиграть последнюю нотификацию которая была
- `BehaviorSubject` - может передать дефолтное значение, он получает его как только подписался. А уже после получает next

### HOT and Cold Observable

- Hot - один продюсер для всех подписчиков (паттерн Proxy) и тут уже важен тайминг
- Cold - каждый новый подписчик создаст новый продюсер (пример с HTTP)

Cold -> Hot

```text
.multicast() + new Subject() + .connect()
.multicast() + () => new Subject() + .refCount()
.multicast() + new Subject() === .publish()
.multicast() + () => new Subject() + .refCount() === .share()
```

## State Managment

### Flux

- Концепция Flux
![Angular flux schema][AFlux-schema-image]

[AFlux-schema-image]: ./img/angular-flux.jpg

### Redux

- Flux vs Redux
![Angular flux vs redux][AFlux-vs-redux-schema-image]

- Концепция Redux
![Angular redux schema][ARedux-schema-image]

- Дополнительно:
  - [Angular RU: Flux, Redux, NgRx, NgXs, Akita - RU][AGithubRu-Redux]

[ARedux-schema-image]: ./img/angular-redux.jpg
[AGithubRu-Redux]: https://www.youtube.com/watch?v=sxN5hmb2hdU
[AFlux-vs-redux-schema-image]: ./img/angular-flux-vs-redux.jpg

### NgRx

`NgRx` - Redux + RxJs + Angular

### Принципы (Redux)

- One Way Data Flow
- Single Source Of Truth - Store только один
- State is Readonly
- Changes are mande with pure functions - Они же Reducers

- Концепция NgRx
![Angular NgRx schema][ANgRx-schema-image]

Дополнительные:

- [Серия видео, Angular 4, RU][ANgRxCoursehunters]
- [Серия видео, ENG][ANgRxToddMotto]

[ANgRxToddMotto]: https://www.youtube.com/watch?v=N_UQx8dPPkc&list=PLW2eQOsUPlWJRfWGOi9gZdc3rE4Fke0Wv
[ANgRx-schema-image]: ./img/angular-ngrx.jpg
[ANgRxCoursehunters]: https://coursehunters.net/course/angular-4-ngrx

## Unit Test

Содержание:

- [Тестирование DOM](#dom-testing)
- [Тестирование вложенных компонентов](#Тестирование-вложенных-компонентов)
- [Подход к тестам через HOST](#Test-Host-Approach)
- [Stub](#stub)
- [Что в целом нужно тестировать](#Что-нужно-тестировать)

### DOM Testing

- fixture.detectedChanges();
- nativeElement = fixture.nativeElement;
- debugElement = fixture.debugElement;
- debugElement.query(By.css('.some-class'))
- component = fixture.componentInstance;

### Тестирование вложенных компонентов

- Shallow Testing
- Stub Components
- NO_ERRORS_SCHEMA
- CUSTOM_ELEMENTS_SCHEMA

### Test Host Approach

```typescript
@Component({
    template: `
        <app-some-component
            [publication]="publication" (like)="onLiked($event)"
        ></app-some-component>
    `;
})
class TestHostComponent {
    public publication: Publication = { id: 1, title: '11', ImageSrc: 'ss.jps' };
    public likedPublication: Publication;
    public onLiked(likedPublication: Publication) { this.likedPublication = likedPublication };
}

describe('Some Component Test', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    let publication: Publication;
    let publicationLogService: Partial<PublicationLogService>;

    beforeEach(() => {
        publicationLogService = {
            logPublication: jasmine.createSpy('logPublication');
        }

        TestBed.configurateTestingModule({
            declarations: [
                SomeComponent, TestHostComponent,
            ],
            providers: [
                {
                    provide: PublicationLogService,
                    userValue: publicationLogService,
                }
            ]
        })
    });

    berforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        testHost = fixutre.componentInstance;
        fixture.detectedChanges();
    })

    it('should raise publication like', () => {
        const expectedLikedPublication = { id: 1, title: '11', ImageSrc: 'ss.jpg' };
        const likeButton = fixture.debugElement.query(By.css('.like-button'));

        likeButton.triggerEventHandler('click', null);

        expect(testHost.likedPublication).toEqual(expectedLikedPublication);
    });
    it('should log publication', () => {
        expect(publicationLogService.logPublication).toHaveBeenCalled();
    });
});
```

### Stub

```javascript
beforeEach(() => {
    logInService = { logInOnService: jasmine.createSpy('logInOnServer')};

    TestBed.configurationTestingModules({
        declarations: [
            LoginWidgetTestbedAndDependencyComponent ],
            providers: [{ proide: LogInService, useValue: logInService }]
        ]
    })
});

it('should call server', () => {
    const button = fixture.debugElement.quert(By.css('.date-button'));
    button.triggerEventHandler('click', null);

    expect(logInService.logInOnService).toHaveBeenCalled();
});
```

### Что нужно тестировать

- ngIf, nfFor and e.t.c
- disable, hidden
- @Input(), @Output
- Component lifecycle hooks
- Pipes and how they affect DOM

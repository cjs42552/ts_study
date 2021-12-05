# TypeScript

## Primitive Type

- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- 프리미티브형의 내장 함수를 사용 가능한것은 자바스크립트처리방식 덕분
- ES2015 기준 6가지
    <ol>
    <li> boolean</li>
    <li> number</li>
    <li> string</li>
    <li> symbol (ES2015)</li>
    <li> null</li>
    <li> undefined</li>
    </ol>
- literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.
```ts
true;
'hello';
3.14;
null;
undefined;
```

- 또는 래퍼 객체로 만들 수 있다.
```ts
new Boolean(false); 
// typeof new Boolean(false) : 'object'
new String('world');
// typeof new String('world') : 'object'
new Number(42);
// typeof new Number(42) : 'object'
```
## Type Casing
- TypeScript 의 핵심 primitive types 은 모두 소문자
- Number, String, Boolean, Symbol 또는 Object 유형이 위에서 권장한 소문자 버전과 동일하다고 생각하고 싶을 수 있지만 이러한 유형은 언어 Primitives를 나타내지 않으며, 타입으로 사용해서는 안됨
```ts
function reverse(s : String) : String {
    return s.split("").reverse().joion("");
};

reverse("hello world");
```
- 대신 number, string, boolean, object and symbol 타입을 사용
```ts
function reverse(s: string) : string{
    return s.split("").reverse().join("");
};

reverse("hello world");
```

## boolean 타입

```ts
let isDone: boolean = false;

isDone = true;

console.log(typeof isDone); //'boolean'
```

## Number/number
- JavaScript와 같이, TypeScript의 모든 숫자는 부동 소수점 값
- TypeScript는 16진수 및 10진수 리처럴 외에도, ECMAScript 2015에 도입된 2진수 및 8진수를 지원
- NaN
- 1_000_000과 같은 표기 가능

```ts
let decimal: number = 6; //10진수

let hex: number = 0xf00d; //16진수

let binary: number = 0b1010; //2진수

let octal: number = 0o744; //8진수

let notANumber: number = NaN;

let underscoreNum: number =1_000_000;
```

## string
- 다른 언어에서와 마찬가지로 이 텍스트 형식을 참조하기 위해 `string` 형식을 사용합니다.
- JavaScript 와 마찬가지로, TypeScript는 문자열 데이터를 둘러싸기 위해 큰따옴표(")나, 작은 따옴표 (')를 사용

```ts
let name : string = "mark";
name = 'jiseon';
```

### Template String
- 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
- 이 문자열은 backtick(= backquote) 기호에 둘러쌓여 있습니다.
- 포함된 표현식은 \`${expr}` 와 같은형태로 사용

```ts
let fullName : string = `Bob Bobbington`;
let age : number = 38;

let sentence : string =`Hello, my name is ${fullName}.
I'll be ${age +1} years old next month.`;

// template string 을 사용하지 않을 경우 ↓

let sentence : string = "Hello, my name is " + fullName + "n\n" + "I 'll be " + (age + 1) + " years old next month.";
```

## symbol
- ECMAScript 2015의 Symbol 임
- new Symbol 로 사용할 수 없음
- Symbol 을 함수로 사용해서 symbol 타입을 만들어낼 수 있음

```ts
console.log(Symbol('foo') === Symbol('foo'));
```
- 프리미티브 타입의 값을 담아서 사용합니다.
- 고유하고 수정불가능한 값으로 만들어줌 그래서 주로 접근을 제어하는데 사용하는 경우가 많음

```ts
let sym = Symbol();
let obj = {
    [sym] : "value"
};

console.log(obj[sym]); //"value"
```

## unll & undefined
- TypeScript 에서, undefined 와 null은 실제로 각각 undefined 및 unll 이라는 타입을 가집니다.
- void 와 마찬가지로, 그 자체로는 그다지 유용하지 않습니다.
- 둘다 소문자만 존재
```ts
// 이 변수들에 할당할 수 있는 것들은 거의 없다.
let u : undefined = undefined;
let n : unll = null;
```
### undefined & null are subtypes of all other types.
- 설정을 하지 않으면 그렇다
- number 에 null 또는 undefined 를 할당할 수 있다는 의미.<br/> 하지만, 컴파일 옵션에서 \`--strictNullChecks` 사용하면, null 과 undefinded 는 void 나 자기 자신들에게만 할당할 수 있습니다.
    - 이 경우, null 과 undefined를 할당할 수 있게 하려면, union type 을 이용해야 합니다.
```ts
let name : string = null;
let age : number = undefined;

// strictNullChecks => true
// Type 'null' is not assingnable to type 'string'.
let name : string = null; // (x)

// null => unll || void, undefined => undefinde || void
// Type 'null' is not assingnable to type 'undefined'.
let u : undefined = null; // (x)

let v : void = undefined; // (o)

let union : string | null | undefined = 'str';
```
### null in JavaScript
- null 이라는 값으로 할당된 것을 null 이라고 합니다.<br/>무언가가 있는데, 사용할 준비가 덜 된 상태.
- null 이라는 타입은 null 이라는 값만 가질 수 있음
- `런타임에서 typeof 연산자를 이용해서 알아내면, object 임`
```ts
let n : null = null;

console.log(n); // null
console.log(typeof n); // object

```
### undefined in JavaScript
- 값을 할당하지 않은 변수는 undefined 라는 값을 가짐
- 무언가가 아예 준비가 안된 상태
- object의 property가 없을 때도 undefined
- `런타임에서 typeof 연산자를 이용해서 알아내면, undefined 임`

```ts
let u : undefined = undefined;

console.log(u); //undefined
console.log(typeof u); // undefined
```

## object
- `"primitive type 이 아닌 것"`을 나타내고 싶을 때 사용하는 타입

### non-primitive type
- not number, string, boolean, bigint, symbol, null or undefined.

```ts
let obj : object = {};

obj ={name : "jieon"};

obj = [{name : "jiseon"}];

obj = 39; //Error

obj = "jiseon"; //Error

obj = true; //Error

obj = 100n; //Error

obj = Symbol(); //Error

obj = unll; //Error

obj = undefined; //Error

```

## Array
- 원래 자바스크립트에서 array는 객체
- 사용방법
    <ol>
    <li> Array<타입></li>
    <li> 타입[ ]</li>
    </ol>


```ts
let list : number[] = [1, 2, 3];

let list : Array<number> = [1, 2, 3];
```

## Typle 
```ts
let x : [string, number];
```

## any
- 어떤 타입이어도 상관없는 타입
- 이걸 최대한 쓰지 않는게 핵심
    - 컴파일 타임에 타임 체크가 정상적으로 이뤄지지 않기 때문
    - 컴파일 옵션 중에는 any 를 써야하는데 쓰지 않으면 오류를 뱉도록 하는옵션
        - nolmplicitAny

```ts
function returnAny(message) : any {
    console.log(message);
}

returnVoid('리턴은 아무거나');
```

- any는 계속해서 개체를 통해 전파됩니다.
- 결국, 모든편의는 타입 안전성을 잃는 대가로 온다는 것을 기억.
- 타입 안전성은 TypeScript 를 사용하는 주요 동기 중 하나이며 필요하지 않은 경우에는 any를 사용하지 않도록 해야함

```ts
let looselyTyped : any = {};

let d = looselyTyped.a.b.c.d;
// ^ = let d : any
```

## unknown

- 응용프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있습니다.
이러한 값은 동적 콘텐츠(예: 사용자로부터, 또는 우리 API의 모든 값을 의도적으로 수락하기를 원할 수 있습니다.)
<br/>이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이든 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown 타입을 제공합니다.

- Typescript 3.0 버전부터 지원
- any 와 짝으로 any 보다 Type-safe한 타입
    - any 와 같이 아무거나 할당할 수 있다.
    - 컴파일러가 타입을 추론할 수 있게끔 타입의 유형을 좁히거나 타비을 확정해주지 않으면 다른곳에 할당 할 수 없고, 사용할 수 없다.
- unknown 타입을 사용하면 runtime error를 줄일 수 있을 것 같다
    - 사용전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API 에 사용할 수 있을 것 같다.

## never
- never 타입은 모든 타입의subtype 이며, 모든 타입에 할당 할 수 있습니다.<br/>
하지만, never에는 그 어떤 것도 할당할 수 없습니다.<br/>
any조차도 never 에게 할당 할 수 없습니다.<br/>
잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 합니다.<br/>

```ts
let a : string = "hello";

if (typeof a !== "string") {
    let b : never = a;
}

type Indexable<T> = T extends string ? T & { [index : string] : any} : never;
```

## void
- 어떤 타입도 가지지 않는 빈 상태
- 소문자로 사용
- 값을 반환하지 않는 일종의 undefined 를 리턴하는 상태

```ts
function returnVoid (message : string) : void {
    console.log(message);
    

    return undefined;
}

returnVoid("리턴이 없다.");
```

## 작성자와 사용자의 관점으로 코드 바라보기

- 타입 시스템
    - 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
    - 컴파일러가 자동으로 타입을 추론하는 시스템
- 타입스크립트의 타입 시스템
    - 타입을 명시적으로 지정할 수 있다.
    - 타입을 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입을 `추론` -> 타입 추론

- 타입이란 해당 변수가 할 수 있는 일을 결정합니다.
```ts
// JavaScript

// f1 이라는 함수의 body 에서는 a를 사용할 것 입니다.
// a가 할 수 있는 일은 a 의 타입이 결정합니다.

function f1(a) {
    return a;
}

```

- 함수 사용법에 대한 오해를 야기하는 자바스크립트
```ts
// JavaScript

// (f2 실행의 결과가 NaN 을 의도한것이 아니라면)
// 이 함수의 작성자는 매개변수 a 가 number 타입이라는 가정으로 함수를 작성

function f2(a) {
    return a * 38;
}

// 사용자는 사용밥을 숙지하지 않은 채, 문자열을 사용하여 함수를 실행

console.log(f2(10)); //380
console.log(f2('jiseon')); //NaN
```
- 타입스크립트의 추론에 의지하는 경우
```ts
// 타입스크립트 코드지만.
// a의 타입을 명시적으로 지정하지 않은 경우이기 때문에 a는 any 로 추론
// 함수의 리턴 타입은 number 로 추론( NaN도 number 의 하나. )

function f3(a) {
    return a * 38;
}

// 사용자는 a 가 any 이기 떄문에, 사용법에 맞게 문자열을 사용하여 함수를 실행

console.log(f3(10); //380
console.log(f3('jiseon') + 5); // NaN
```
- nolmplicitAny 옵션을 켜면
    - 타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론중 'any'라고 판단하게 되면, 컴파일 에러를 발생시켜 명시적으로 지정하도록 유도함.

- nolmplicitAny 에 의한 방어
```ts
// error Ts7006 : Parameter 'a' implicitly has an 'any' type.

function f3(a) {
    return a * 38;
}

// 사용자의 코드를 실행할 수 없습니다. 컴파일이 정상적으로 마무리 될 수 있도록 수정해야 함

console.log(f3(10));
console.log(f3('jiseon') + 5);
```

- number 타입으로 추론된 리턴 타입
```ts
// 매개변수의 타입은 명시적으로 지정
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number로 추론

function f4(a : number) {
    if ( a > 0 ) {
        return a * 38;
    }
}

// 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행
// 해당 함수의 리턴 타입은 number 이기 때문에 , 타입에 따르면 이어진 연산을 바로 할 수 있음
// 하지만 실제 undefined + 5 가 실행되어 NaN이 출력

console.log(f4(5)); //190
console.log(f4(-5) + 5); // NaN
```

- stictNullChecks 옵션을 켜면
    - 모든 타입에 자동으로 포함되어 있는 'null'과 'undefined'를 제거해줌
- number | nudefined 타입으로 추론된 리턴 타입
```ts
// 매개변수의 타입은 명시적으로 지정했습니다.
// 명시적으로 지정하지 않은 함수의 리턴 타입은 number | undefined 로 추론

function f4(a : number) {
    if (a > 0) {
        return a * 38;
    }
}
// 사용자는 사용법에 맞게 숫자형을 사용하여 함수를 실행
// 해당 함수의 리턴 타입은 number | undefined 이기 때문에, 타입에 따르면 이어진 연산을 바로 할 수 없음
// 컴파일 에러를 고쳐야하기 때문에 사용자와 작성자가 의논을 해야함

console.log(f4(5));
console.log(f4(-5) + 5); 
// error TS2532 : Object is possibly 'undefined' ↑ 
```
- 명시적으로 리턴 타입을 지정해야할까?
```ts
// 매개변수의 타입과 함수의 리턴 타입을 명시적으로 지정
// 실제 함수 구현부의 리턴 타입과 명시적으로 지정한 타입이 일치하지 않아 컴파일 에러가 발생


// error TS2366 : Function lacks ending return statement and return type does not inc.
function f5(a : number) : number{
    if ( a > 0) {
        return a * 38;
    }
}
```
- nolmplicitReturns 옵션을 켜면
    - 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생시킨다.  
- 모든 코드에서 리턴을 직접해야한다.

```ts
// if 가 아닌 경우 return 을 직접 하지 않고 코드가 종료된다.

// error TS7030: Not all code paths return a value.
function f5 (a : number) {
    if (a > 0){
        return a * 38;
    }
}
```

- 매개변수에 object 가 들어오는 경우
```ts
// JavrScript

function f6(a) {
    return `이름은 ${a.name} 이고, 연령대는 ${Math.floor(a.age / 10) * 10}대 입니다.`;
}

console.log(f6({name : 'jiseon', age : 22})); 
//이름은 jiseon이고, 연령대는 20대 입니다. 
console.log(f6('jiseon')); 
// 이름은 undefined 이고, 연령대는 NaN대 입니다.
```
- object literal type
```ts
function f7(a : { name : string; age : number }) : string{
    return `이름은 ${a.name} 이고, 연령대는 ${Math.floor(a.age / 10) * 10}대 입니다.`;
}

console.log(f7({name : 'jiseon', age : 22}));
//이름은 jiseon이고, 연령대는 20대 입니다. 
console.log(f7('jiseon')); 
// error TS2345 : Argument of type 'string' is not assignable to parameter of type '{ name : string; age : number; }'.
```
- 나만의 타입을 만드는 방법
```ts
interface PersonInterface {
    name : string;
    age : number;
};
type PersonTypeAlias = {
    name : string;
    age : number;
};

function f8(a : PersonInterface) : string{
    return `이름은 ${a.name} 이고, 연령대는 ${Math.floor(a.age / 10) * 10}대 입니다.`;
}

console.log(f8({name : 'jiseon', age : 22}));
//이름은 jiseon이고, 연령대는 20대 입니다. 
console.log(f8('jiseon')); 
// error TS2345 : Argument of type 'string' is not assignable to parameter of type 'PersonInterface'.
```

## Structural Type System vs Nominal Type System
- structural type system 
    - 구조가 같으면, 같은 타입이다.
```ts
interface IPerson {
    name : string;
    age : number;
    speak() : string;
};
type PersonType = {
    name : string;
    age : number;
    speak() : string;
};

let personInterface : IPerson = {} as any;
let personType : personType = {} as any;

personInterface = personType;
personType = personInterface;
```
- nominal type system 
    - 구조가 같아도 이름이 다르면, 다른 타입이다.
```ts
type personID = string & {readonly brand : unique symbol};

function PersonID(id : string) : PersonID {
    return id as PersonID;
}

function getPersonById(id : PersonID) {}

getPersonBuId(personID('id-aaaaa'));
getPersonById('id-aaaaa');
// error TS2345 : Argument of type 'string' is not assignable to parameter of type 'PersonID'. Type 'string' is not assignable to type'{readonly brand : unique symbol;}'.
```
- duck typing -> 타입스크립트는 사용안함
    - 만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다.
```ts

class Duck : 
    def sound(self) : 
        print u"꽥꽥";


class Dog :
    def sound(self) :
        print u"멍멍";

def get_sound(animal) :
    animal.sound()

def main() : 
    bird = Duck()
    dog = Dog()
    get_sound(bird)
    get_sound(dog)

```

## 타입 호환성 (Type Compatibility)
- 서브 타입 1
```ts
// sub1 타입은 sup1 타입의 서브타입이다.
let sub1 : 1 = 1;
let sup1 : number = sub1;
sub1 = sup1; 
// error! Type 'number' is not assignable to type '1'.

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2 : number[] = [1];
let sup2 : object = sub2;
sub2 = sup2;
// error! Type '{}' is missing the following properties from type 'number []' : length, pop, push, concat, and 16 more.

// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3 : [number, number] = [1, 2]; //튜플 타입
let sup3 : number[] = sub3;
sub3 = sup3; 
// error! Type 'number[]' is not assignable to type '[number, number]'/ Target requires 2 element(s) but source may have fewer.
```
- 서브 타입 2
```ts
// sub4 타입은 sup4 타입의 서브 타입이다.
let suv4 : number = 1;
let sup4 : any = sub4;
sub4 = sup4;

// sub5 타입은 sup5타입의 서브 타입이다.
let sub5 : never = 0 as never;
let sup5 : number = sub5;
sub5 = sup5;
// error! type 'number' is not assignable to type 'never'.

class Animal {}
class Dog extends Animal {
    eat() {}
}

// sub6 타입은 sup6 타입의 서브 타입이다.
let sub6 : Dog = new Dog();
let sup6 :  Animal = sub6;
sub6 = sup6;
// error! Property 'eat' is missing in type 'SubAnimal' but required in type 'SubDog'.
```
- 같거나 서브 타입인 경구, 할당이 가능하다. => 공변
```ts
// primitive type
let sub7 : string = '';
let wup7 : string | number = sub7;

//  object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8 : { a : string; b : number} = {a: '', b : 1};
let sup8 : {a : string | number; b : number } = sub8;

// array - object 와 마찬가지
let sub9 : Array<{a : string ; b : number}> = [{ a : '', b : 1}];
let sup9 : Array<{a : string | number; b: number}> = sub8;
```
- 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. => 반병
```ts
class Person {}
class Developer extends Person{
    coding(){}
}
class StartupDeveloper extends Developer {
    burning(){}
}

function tellme(f : (d: Developer) => Deverloper) {}

// Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
tellme(function dToD(d : Developer): Developer {
    return new Developer();
});

// Developer => Developer 에다가 Person => Developer 를 할당하는 경우
tellme(function pToD(d : Person): Deverloper {
    return new Developer();
});

// Developer => Developer 에다가 StartipDeveloper => Developer 를 할당하는 경우
tellme(function sToD(d : StartupDeveloper): Developer{
    return new Developer();
});
```
- strictFunctionTypes 옵션을 켜면
    - 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우, 에러를 통해 경고한다.

## 타입 별칭 ( Type Alias )
- `Interface`랑 비슷해 보입니다.
- `Primitive, Union Type, Tuple, Function`
- 기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있습니다.
- 만들어진 타입의 `refer`로 사용하는 것이지 타입을 만드는것은 아닙니다.

### Aliasing Primitive
```ts
type MyStringType = string;

const str = 'world';

let myStr : MyStringType = 'hello';
myStr = str;

// 별 의미가 없다..
```
### Aliasing Union Type
```ts
let person : string | number = 0;
person = "jiseon";

type StringOrNumber = string | number;

let another : StringOrNumber = 0;
another = 'Yolo';

// 1. 유니온 파입은 A 도 가능하고 B 도 가능한 타입
// 2. 길게 쓰는걸 짧게
```

### Aliasing Tuple
```ts
let person : [string, number] = ['jiseon', 22];

type PersonTuple = [string, number];

let another : PersonTuple = ['Yolo', 1];

// 1. 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.
```

### Aliasing Function
```ts
type EatType = (food : string) => void;
```
## Compilation Context

## tsconfig schema

http://json.schemastore.org/tsconfig

- 최상위 프로퍼티
    <ol>
    <li>compileOnSave</li>
    <li>extends</li>
    <li>compileOptions</li>
    <li>files</li>
    <li>include</li>
    <li>exclude</li>
    <li>references</li>
    <li><del>typeAcquisition</del></li>
    <li><del>tsNode</del></li>
    </ol>


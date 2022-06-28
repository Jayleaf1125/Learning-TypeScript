// Basic Types
let id: number = 5;
let company: string = 'Marcy Lab';
let publish: boolean = false;
let x: any = 'Hello';
x = true;
let age: number;
age = 30;

let ids: number[] = [1, 2, 3, 4, 5, 6]
let arr: any[] = [1, 'h', true];

// Tuple
let person: [number, string, boolean] = [1, 'John', true];
// Tuple Array
let employee: [number, string][];

employee = [
    [1, 'John'],
    [2, 'May'],
    [3, 'Max'],
]

// Union
let pid: number | string;
pid = '22';

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
    return x + y;
}

// Void
function log(message: string | number): void {
    console.log(message);
}

// Interfaces: custom type or specific structure
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

// Interface for functions
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");

// Inhertiance & Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, 'Jason', 'CEO');

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['brad', 'job', 'mike', 'kitye']);

// strArray.push(1)
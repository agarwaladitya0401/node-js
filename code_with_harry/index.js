// let arr = [1, 2, "tty", 5, true];

// console.log(arr);

// arr.shift();

// console.log(arr);

// arr.unshift(5, 6, 5, "lella");
// console.log(arr);

// arr.toString();

// const btn = document.getElementById("1");

// console.log(btn);

// btn.addEventListener('onclick', function () {
//            this.style.display = 'none';
//            console.log("hi");
//         })

/**
 * @description
 * @author Mayank Singla
 * @date Sun, 02 Jan 2022 02:18:13 PM GMT+0530 (IST)
 * @param {*} a
 * @param {*} b
 */
// const test = (a, b) => {
//     console.log("hi");
// };

// const arr = [1, 2, 3];

// const arr1 = [arr]; // [[1, 2, 3]]
// const arr1 = arr; // by reference
// const arr1 = [...arr]; // copy
// const arr1 = arr.slice(); // copy

// const [x, y] = [1, 2, 3]; // x = 1, y = 2
// const [x, ...y] = [1, 2, 3]; // x = 1, y = [2, 3]

// const add = (...numbers) => numbers.reduce((cv, el) => cv + el, 0);

// add(...arr);

// const fun = (obj) => {
//     const a = obj.a;
// };

// const obj = {
//     x: "abc",
//     y: "def",
// };

// const { x, y } = obj; // x = 'abc', y = 'def'
// const { x: a, y: b } = obj; //

// const fun2 = ({ x, y }) => {};

// const fun = (arr) => {
//     const p = arr[0];
//     const q = arr[1];
// };

// const fun2 = ([p, q]) => {};

// const obj = {
//     name: "Adi",
//     age: 100,
// };

// const obj2 = obj; // reference
// const obj3 = { ...obj }; // copy
// const objv = Object.assign({}, obj); // copy

// const obj4 = {
//     ...obj,
//     name: "Max",
//     gender: "m",
// };

// const key = "name";

// const u1 = {
//     // name:"abc",
//     fun: function (a, b, c) {},
//     fun(a, b, c) {},
//     [key]: "Max",
// };

// // falsy values: 0, "", null, undefined, false
// const data = "";
// const input = data || "default";

// // ?? -> null, undefined
// const input = data ?? "default";

// if (data && data.title && data.title.description) {
//     const a = data.title.description;
// }

// const a = data?.title?.description;

// Object.keys(obj);
// Object.values(obj);
// Object.entries(obj); // [[key, value]]

// const v = 123; // "Morning"
// v +
//     " Hi, I am Aditya"`${v} Hi, I am
//  Aditya`;

// const add = (a, b = 1, c) => {};

// add(1, 2, 3);
// add(1, undefined, 3);

// const cb = () => {
//     console.log(this);
// };

// const fun = (cb) => cb();

// //  fun(cb(a, b, c))

// const temp = () => {
//     cb(a, b, c);
// };

// fun(temp);

// fun(cb.bind(5));
// fun(cb.bind([1, 2, 3]));

// class Test {
//     constructor() {
//         this.name = "Hi";

//         // this.fun = this.fun.bind(this);
//     }
//     fun = () => {
//         this.name = "Hello";
//     };
// }

// const button = document.querySelector("button");

// const obj = new Test(); // {name: "Hi"}
// button.addEventListener("onclick", obj.fun);

const o1 = {
    name: "adi",
    class: 7,
    gender: "CQ",
};

// console.log(o1.name);
// console.log(o1.name);

const kys = Object.entries(o1);
// console.log(kys);

// const obj2 = Object.fromEntries([
//     ["name", "adi"],
//     ["class", 7],
//     ["gender", "CQ"],
// ]);

// console.log(obj2);

const map1 = new Map();

map1.set("name", "adi");
map1.set(1, [1, 2, 3]);
map1.set("age", 19).set("hello", "world");
map1.set([1, 2], "hello");

console.log(map1.get(1));

// console.log(map1);
for (const [key, value] of map1) {
    console.log(key, value);
}

const str = "aditya";

// console.log(str.slice(0));
// console.log(str.slice(-2));
// console.log(str.slice(-23));
// console.log(str.slice(1, -1));

const obj1 = {
    name: "adi",
    age: 21,
    details: [],
    book(birth, country) {
        this.details.push({
            name: this.name,
            age: this.age,
            birth,
            country,
        });
        console.log("tt");
    },
};

obj1.book(2001, "India");

const obj2 = {
    name: "piro",
    age: 69,
    details: [],
};

const book = obj1.book;

// console.log(book.call(obj2, 11, "india"));
// console.log(obj2);

book.apply(obj2, [202, "denmark"]);

// const fun = function (wait) {
//     const n = 10;
//     setTimeout(() => {
//         console.log(wait);
//     }, wait * 100);
//     console.log(n, wait);
// };

// fun(21);

const arr = [1, 2, 3, 4];
const arr1 = [0, 6, 8, 1];

// const sum1 = arr.reduce((acc, ele, y, arr1) => {
//     console.log(arr1);
//     console.log(y);
//     return acc + ele;
// }, 0);

// console.log(sum1);

const customUI = document.createElement("ul");

function responding() {
    console.log("Responding");
}

for (var i = 1; i <= 10; i++) {
    const newElement = document.createElement("li");
    // console.log(newElement);
    newElement.textContent = "This is line " + i;
    customUI.appendChild(newElement);
}
customUI.addEventListener("click", responding);

console.log(customUI);

document.getElementsByTagName("h3").appendChild(customUI);

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
    "My car is " + myCar.age() + " years old." + myCar.fun();

new Array();
new Promise();

fetch().then((res) => {
    res.json().then((data) => {
        console.log(data);
        console.log(res);
    });
});

fetch()
    .then((res, err) => {
        if (!err.ok) {
            throw "Fetch failed";
        }
        return res.json();
    })
    .catch((err) => {
        console.log(err);
    })
    .then((data) => {
        console.log(res);
        console.log(data);
        return data;
    })
    .then((data) => {})
    .catch((err) => {
        console.log(err);
    });

function fetchApi() {
    const res = await fetch();
}

const otherasyncfun = async () => {
    // ...
    console.log("2");
};

const fetchData = async () => {
    try {
        otherasyncfun();
        console.log("1");
        const res = await fetch();
        console.log("Hi");
        const data = await res.json();
        const res2 = await fetch(/*data*/);
        return 10;
    } catch (err) {
        console.log(err);
    }
};

const data = await fetchData();

Promise.any([]);

console.log("Hi");

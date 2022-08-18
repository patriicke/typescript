"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
const person = new Person("Patrick");
person.setName("Kevin");
person.getName();
console.log(person.getName());

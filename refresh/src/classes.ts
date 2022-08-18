//TypeScript adds types and visibility modifiers to JavaScript classes.
//Class members also be given special modifiers which affect visibility.
class Person {
  private name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public getName() {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }
}

const person = new Person("Patrick");
person.setName("Kevin");
person.getName();
console.log(person.getName());

//I have also looked on interfaces, abstract classes and implementation and extendigs

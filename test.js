class Person {
  index () {
    console.log(this.introduce())
  }
  introduce () {
    return 'Hi my name is Grotius'
  }
}

const person = new Person
person.index()

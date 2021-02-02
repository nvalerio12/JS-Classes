class Person {
    // this is a method
    greet() {
    console.log('Hello SEI-111');
    }
    //walk method
    walk() {
        console.log('Walking along the beach.')
    }
    // method with a parameter
    eat(food) {
        console.log(`Today I am eating ${food}.`)
    }
}

//this is an intance if a class
// know as an object
const nelson = Person();

// call the methods (invoke)
nelson.walk();
nelson.eat('rice, beans, and chicken');
nelson.jump = function() {
    console.log('Weeeeee');
}
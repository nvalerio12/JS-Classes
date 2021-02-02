class Person {
    constructor(name,  softwareEngineer) {
        this.arms = 2;
        this.legs = 2;
        this.name = name;
        this.softwareEngineer = softwareEngineer;
        this.artist = [];
    }
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
    // method working with arrays
    addArtist(artist) {
        console.log(`I like ${artist}`);
        this.artists.push(artist)
    }
}

//this is an intance if a class
// know as an object
// IMPORTANT: add the new key word like so...
// const nelson = Person();
const nelson = new Person('nelson valerio', true);

//print attributes
console.log(nelson.name)
console.log(nelson.)

// call the methods (invoke)
nelson.walk();
nelson.eat('rice, beans, and chicken');

// add a method on an instance
nelson.jump = function() {
    console.log('Weeeeee');
}
nelson.jump();
nelson.addArtist('Polo G')
nelson.addArtist('Rod Wave')

// view an attribute
console.log(nelson.art)
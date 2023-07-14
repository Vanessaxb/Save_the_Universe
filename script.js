//class Example {
// 	constructor(name){
// 		this.name = name
// 		this.method = this.method.bind(this)
// 	}

// 	methodFromExample(){
// 	 return this.name
// 	}
// }

// const btnEl = document.querySelector('button')

// btnEl.addEventListener('click', methodFromExample)

class Ship {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy
}
}

class USS_Assembly extends Ship {
    constructor(hull, firepower, accuracy){
        //used to call the constructor of its parent class to access the parent's properties and methods.
        super.attack(hull, firepower, accuracy);
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 7
    }
    attack()
    retrieve()
}

class Alien_Assembly {
    constructor(hull, firepower, accuracy){
        //used to call the constructor of its parent class to access the parent's properties and methods.
        super.attack(hull, firepower, accuracy)
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = 7
    }
    attack()
    retrieve()
}


//function to get random numbers inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  //to determine a hit
  if (Math.random() < alien[0].accuracy) {
	console.log('You have been hit!');
}
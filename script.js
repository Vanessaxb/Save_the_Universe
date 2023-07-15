//class Example {
// 	constructor(shipName){
// 		this.shipName = shipName
// 		this.method = this.method.bind(this)
// 	}

// 	methodFromExample(){
// 	 return this.shipName
// 	}
// }

const attackBtn = document.querySelector('#attack-btn');

// btnEl.addEventListener('click', methodFromExample)

class Ship {
    constructor(shipName, hull, firepower, accuracy) {
        this.shipName = shipName;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.attack = this.attack.bind(this);
    }
    attack(target) {
        console.log(`${this.shipName} is attacking....`);
        console.dir(this);
        //getting hit
        target.hull -= this.firepower;
        
        //check if target has been destroyed
        if (target.hull <= 0) {
            console.log(`${target.shipName} has been destroyed`);
            
        }
        
    }
    // accuracy() {
        //      if (Math.random() < alien[0].accuracy) {
            //         	console.log('You have been hit!');
            
            // }
        }
        
        // retrieve()
        // }
        // }
        
        // class USS_Assembly extends Ship {
            //     constructor(shipName, hull, firepower, accuracy){
                //         //used to call the constructor of its parent class to access the parent's properties and methods.
                //         super.attack(shipName, hull, firepower, accuracy);
                //         this.shipName = shipName;
                //         this.hull = 20;
                //         this.firepower = 5;
                //         this.accuracy = 7
                //     }
                //     attack() {
                    //         console.log(`${this.shipName} is attacking....`);
                    //         console.dir(this);
                    //         if (Math.random() < alien[0].accuracy) {
                        //         	console.log('You have been hit!');
                        //         }
                        //     // retrieve()
                        // }
                        // }
                        
    class Alien_Assembly extends Ship {
    constructor(shipName, hull, firepower, accuracy){
    //used to call the constructor of its parent class to access the parent's properties and methods.
    super()
    this.shipName = shipName;
    this.hull = getRandomIntInclusive(3, 6);
    this.firepower = getRandomIntInclusive(2, 4);
    this.accuracy = getRandomIntInclusive(0.6, 0.8);
    }
}
    //Get random number (inclusive) for Alien Ships key values
    function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }
                        
                        
                        
                        
                        
                        
const alien = [];
const USS_Assembly1 = new Ship('USS',20,5,7);
const Alien_Assembly1 = new Alien_Assembly('Alien',30,7,10)
// event listener
attackBtn.addEventListener('click', USS_Assembly1.attack);
console.log(USS_Assembly1);
console.log(Alien_Assembly1);
USS_Assembly1.attack(Alien_Assembly1);
console.log(Alien_Assembly1);
Alien_Assembly1.attack(USS_Assembly1);
console.log(USS_Assembly1);
USS_Assembly1.attack(Alien_Assembly1);
// console.log(Alien_Assembly1);
// Alien_Assembly1.attack(USS_Assembly1);
// console.log(USS_Assembly1);
// USS_Assembly1.attack(Alien_Assembly1);
// console.log(Alien_Assembly1);
// Alien_Assembly1.attack(USS_Assembly1);
// console.log(USS_Assembly1);

// function randomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }
 
// //function to get random numbers inclusive
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
//   }

//   //to determine a hit
//   if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }


// this.hull = Math.floor(Math.random() * 4) + 3;
// this.firepower = Math.floor(Math.random() * 3) + 2;
// this.accuracy = Math.random() * 0.2 + 0.6;

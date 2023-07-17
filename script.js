 const attackBtn = document.querySelector('#attack-btn');
            
// btnEl.addEventListener('click', methodFromExample)

class Ship {
    constructor(shipName, hull, firepower, accuracy) {
        this.shipName = shipName;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        this.attack = this.attack.bind(this);
        this.attacked = this.attacked.bind(this);
        // this.game = this.game.bind(this)
    }

    attack(Alien_in_Action){
        console.log(`The USS is attacking....`) //${alienArmy[j]}`);
         // if random accuracy is <= alien.accuracy
         //Aliens getting hit
         if (Math.random() < USS_Assembly1.accuracy) {
            console.log(`AlienShip has been hit!`);
            Alien_in_Action.hull -= this.firepower;
            console.log(`Alien's hull is ${Alien_in_Action.hull}`);
            if (Alien_in_Action.hull <= 0) {
                console.log(`The AlienShip has been destroyed`);
            //     if (alienArmy[j] != alienArmy[5]) {
            //     //     click('Click if you want to retreat');
            //     console.log('USS has retreated');
            //         break // to get out of loop. USs retreated
            //     }
            //   //  break// get out of the look 
            // } else {
            // console.log(`Alien's escaped!`);
            // //check if target has been destroyed
       
            
            // } else {
            // console.log('It\'s the Alien\'s turn');
            
         }
        
            }
    }

    attacked(USS_Assembly1) {
        console.log(`Aliens are attacking....`);
        // console.dir(this);
        // if random accuracy is <= alien.accuracy 
        if (Math.random() < alienArmy[j].accuracy) {//!alienarmy is not correct here. it needs to be alien_in_action
            //getting hit
            Math.floor(USS_Assembly1.hull -= this.firepower);
            console.log(`USS has been hit!`);
            console.log(`USS's hull is ${USS_Assembly1.hull}`);
            } else {
                console.log('USS escaped attack!');
            }
             if (USS_Assembly1.hull <= 0) {
            console.log(`Game Over!!! The USS has been destroyed`);
            // break
            } 
        //     else {
        //         console.log('The US scaped');
        //  }
            
            //check if target has been destroyed
            
            // break
        // } else {
        //     console.log('It\'s the USS\'s turn');
            
        }
        
    // }


    }

    const USS_Assembly1 = new Ship('USS',20,5,7);

                        
    class Alien_Assembly extends Ship {
    constructor(shipName, hull, firepower, accuracy){
    //used to call the constructor of its parent class to access the parent's properties and methods.
    super()
    this.shipName = Alien_Assembly;
    // this.hull = getRandomValue(3, 6);
    this.firepower = getRandomValue(2, 4);
    this.accuracy = getRandomValue(0.6, 0.8);
    this.hull = Math.floor(Math.random() * 4 + 8);
    // this.firepower = Math.random() * 2 + 2;
    // this.accuracy = Math.random() * 0.6 + 0.6;
    
    //   Get random number within given range for Alien Ships key values
    function getRandomValue(min, max) {
    return Math.random() * (max - min +1) + min; // The maximum is inclusive and the minimum is inclusive
    }                  
//     const test = getRandomValue(3,6)
//     console.log(test);
}
}

//creating Alien Army
const alienArmy = [];
for (let i = 0; i <= 5; i++) { 
        // function create_new_ship() {
        // const alienArmy = new Alien_Assembly('Alien Army', this.hull, this.firepower, this. accuracy)
        alienArmy.push(new Alien_Assembly());
    }
    console.log(alienArmy);
// }

// const game = {
    let j = 0;
    while (USS_Assembly1.hull > 0 &&  j < 6)
    // for (let j = 0; j <alienArmy.length; j++) {
    //     if (USS_Assembly1.hull > 0) 
        {
        const Alien_in_Action = alienArmy[j];
        // console.log(`The USS is attacking....${alienArmy[j]}`);
        USS_Assembly1.attack(alienArmy[j]);
        if (alienArmy[j].hull > 0) {
            alienArmy[j].attacked(USS_Assembly1)
            if (USS_Assembly1.hull >= 0) {
                USS_Assembly1.attack(alienArmy[j])
             } else {
                console.log('USS has been destroyed');
             }
        } else {
                console.log('Alien Ship has been destoyed');}
            j++

        // }
       
        Alien_in_Action.attacked(USS_Assembly1);
        // if (alienArmy[j].hull <= 0) {

        // }
        j++;
        if (alienArmy[5].hull <= 0) {
            console.log(`Game over!!! USS has won!`);     
        } if ((USS_Assembly1.hull <= 0)) {
            console.log('USS ship has been destroyed!');
        
        // } else {
        //     console.log('USS has won the battle');
        }
    }
        
    //* randomnumber is giving negative numbers?

                 
                        
    // console.log(`${alienArmy[j]}`)

const Alien_Assembly1 = new Alien_Assembly('Alien',30,7,10)
// event listener
attackBtn.addEventListener('click', USS_Assembly1.attack);
// console.log(USS_Assembly1);
// console.log(Alien_Assembly1);
// USS_Assembly1.attack(Alien_Assembly1);
// console.log(Alien_Assembly1);
// Alien_Assembly1.attack(USS_Assembly1);
// console.log(USS_Assembly1);
// USS_Assembly1.attack(Alien_Assembly1);
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


// accuracy() {
        //      if (Math.random() < alien[0].accuracy) {
            //         	console.log('You have been hit!');
            
            // }
        // }
        
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


                        //     check_win(target) {
//         //if random accuracy is <= alien.accuracy
//         if (Math.random() < alien[0].accuracy) {
//             console.log('You have been hit!');

//         //check if target has been destroyed
//             if (target.hull <= 0) {
//                 console.log(`${target.shipName} has been destroyed`);                
//             } else {
//                 attack()
//             }

//     }
// }
// }                            
                        
// let j = 0;
// while (USS_Assembly1.hull > 0 &&  j < 6)
// // for (let j = 0; j <alienArmy.length; j++) {
// //     if (USS_Assembly1.hull > 0) 
//     {
//     const Alien_in_Action = alienArmy[j];
//     // console.log(`The USS is attacking....${alienArmy[j]}`);
//     USS_Assembly1.attack(alienArmy[j]);
   
//     Alien_in_Action.attacked(USS_Assembly1);
//     // if (alienArmy[j].hull <= 0) {

//     // }
//     j++;
//     if (alienArmy[5].hull <= 0) {
//         console.log(`Game over!!! USS has won!`);     
//     } if ((USS_Assembly1.hull <= 0)) {
//         console.log('USS ship has been destroyed!');
    
//     // } else {
//     //     console.log('USS has won the battle');
//     }

//     }                   
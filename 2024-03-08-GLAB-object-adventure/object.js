
// Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"],
            haveBelongings(item) {
                this.belongings.push(item);
                console.log(`${this.name} now has ${item} in their inventory.`);
            }
        },
    },

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    },
};
adventurer.roll();

// Part 2: Class Fantasy
// class Character {
//     constructor (name) {
//       this.name = name;
//       this.health = 100;
//       this.inventory = [];
//     }
//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
//   }

//   const robin = new Character("Robin");
//   robin.inventory = ["sword", "potion", "artifact"];
//   robin.companion = new Character("Leo");
//   robin.companion.type = "Cat";
//   robin.companion.companion = new Character("Frank");
//   robin.companion.companion.type = "Flea";
//   robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Part 3: Class Features
// Previous code from part 1
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ["small hat", "sunglasses"],
//             haveBelongings(item) {
//                 this.belongings.push(item);
//                 console.log(`${this.name} now has ${item} in their inventory.`);
//             }
//         },
//     },

//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     },
// };

// class Character {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//         this.inventory = [];
//     }
//     roll(mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }

// class Adventurer extends Character {
//     constructor(name, role) {
//         super(name);
//         // Adventurers have specialized roles.
//         this.role = role;
//         // Every adventurer starts with a bed and 50 gold coins.
//         this.inventory.push("bedroll", "50 gold coins");
//     }
//     // Adventurers have the ability to scout ahead of them.
//     scout() {
//         console.log(`${this.name} is scouting ahead...`);
//         super.roll();
//     }
//     // allows adventurer to high five companion
//     highFive() {
//         console.log(`${this.name} and ${companion} give each other a high five!`);
//         highFive();
//     }
// }

// class Companion extends Character {
//     constructor(name, type) {
//         super(name);
//         this.type = type;
//         this.belongings = [];
//         this.companion = {};
//         haveBelongings(item); {
//             this.belongings.push(item);
//             console.log(`${this.name} now has ${item} in their inventory.`);
//         }
//         companion.haveBelongings("Small hat");
//         companion.haveBelongings("Sunglasses");
//     }  
// }

// Part 4: Class Uniforms (will start going over in class Monday)
class Character {
    static MAX_HEALTH = 100;
  
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard", "Archer", "Mage"];
  
    constructor(name, role) {
      console.log(Adventurer.ROLES);
      super(name);
      if (Adventurer.ROLES.includes(role)) {
        this.role = role; 
      } else {
        
        let length = Adventurer.ROLES.length;
        let randomNum = Math.floor(Math.random(length));
        this.role = Adventurer.ROLES[randomNum];
      }
      // Every adventurer starts with a healing potion and 100 gold coins
      this.inventory.push("healpot", "100 gold coins");
    }
  }


// Part 5: Gather Your Party
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");



// Part 6: Developing Skills

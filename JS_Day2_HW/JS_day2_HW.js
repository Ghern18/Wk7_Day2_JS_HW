//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

const person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  };
  
  function calculateTotal(items) {
    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      totalCost += item.price * item.qty;
    }
    return totalCost;
  }
  
  function calculateTotalCost(cart) {
    const items = cart.map((item) => {
      const { price, qty } = item;
      return { price, qty };
    });
    return calculateTotal(items);
  }
  
  console.log(`The total cost of the items in the cart is: $${calculateTotalCost(cart)}`);

/*
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

const Person = (name, age) => {
    return {
      name,
      age,
      printInfo: () => console.log(`Name: ${name}, Age: ${age}`),
      addAge: (numYears) => {
        age += numYears;
        return this;
      },
    };
  };
  
  const person1 = Person("Alice", 30);
  const person2 = Person("Bob", 25);
  
  person1.printInfo(); // Name: Alice, Age: 30
  person1.addAge(3).printInfo(); // Name: Alice, Age: 33
  
  const checkStringLength = (str) => {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        reject("Small word");
      }
    });
  };
  
  checkStringLength("HelloWorld").then((result) => console.log(result)); // Big word
  checkStringLength("Hi").catch((error) => console.log(error)); // Small word

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkStringLength = (string) => {  //syntax error?
  return new Promise((resolve, reject) => {
    if (string.length > 10) {
      resolve("Big word");
    } else {
      reject(new Error("Small Number"));
    }
  });
};

checkStringLength("HelloWorld").then((result) => console.log(result)); // Big word
checkStringLength("Hi").catch((error) => console.log(error.message)); // Small Number
function pizzaOven(crustType,SauceType,cheese,toppings){
 var sanduich={}
 sanduich.crustType=crustType;
 sanduich.SauceType=SauceType;
 sanduich.cheese=cheese;
 sanduich.toppings=toppings
return sanduich;

}
var pica1 = pizzaOven('deep dish','traditional',['mozzarela'],['peperoni','sausage'])
console.log(pica1)

var pica2 = pizzaOven('hand tosted','marinara',['mozzarela','feta'],['mashroom','oil','onions'])
console.log(pica2)


///random pizza
function randomPizza() {
    var randomNumber = Math.random(); // Generates a random number between 0 and 1

    if (randomNumber < 0.5) {
        return pica1;
    } else {
        return pica2;}


}
var randomPizzaResult = randomPizza();
console.log(randomPizzaResult);
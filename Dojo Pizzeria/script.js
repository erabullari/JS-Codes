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
    var cheese =[ 'gorgonzola','spicychees']
    var vegets =['speca','ullinj','domate','pereroni']
    var sausage =[ 'perperoni sausage','normal sausage']
   var piac3= cheese[Math.floor(Math.random() * cheese.length)]+vegets[Math.floor(Math.random() * vegets.length)]+sausage[Math.floor(Math.random() * sausage.length)]
return piac3;

}
var randomPizzaResult = randomPizza();
console.log(randomPizzaResult);
//Always Hungry
function alwaysHungry(arr) {

    for( i=0; i<=arr.length; i++){
    if (arr[i]=='food'|| arr[i]=='pie'){
        console.log("yummy")
    } 
    else {
        console.log('im hungry')
    }
 }
}
   
 alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



//High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i<arr.length; i++)
  
    if( arr[i]>cutoff)
    {
    filteredArr.push(arr[i])
    }
   
   return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]








function betterthanaverage(arr) {
    // Calculate the average of the array
    const sum = arr.reduce((sum, num) => sum + num, 0) / arr.length;

    // Filter the numbers that are greater than the average
    const count = arr.filter(num => num > sum);

    // Return the count of numbers greater than the average
    return count.length;
}

// Example usage:
const myArray = [6,8,3,10,-2,5,9];
const count = betterthanaverage(myArray);

console.log(`The count of numbers greater than the average is: ${count}`);



//reverse arry
function reverse(arr) {
  var arry=arr.reverse();
    return arry;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



//fibonaci array

function fibonacciArray(n) {

    var fibArr = [0,1];
    for (let i = 2; i < n; i++) {
    const nextValue = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(nextValue);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

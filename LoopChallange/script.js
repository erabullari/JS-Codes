//Print odds 1-20
for ( var i=1; i<=20; i++){

    if ( i % 2 !== 0){
        console.log(i);
    }
 
}

//Decreasing Multiplies of 3
for (i=100; i>=0; i--){
    if(i%3 ==0){
        console.log(i)
    }
}

//Print the sequence
var list=[4, 2.5, 1, -0.5, -2, -3.5]
for (i=0; i<list.length; i++){

    console.log(list[i])
}

//sigma
var sum=0
for(i=0; i<=100; i++){
    sum +=i
    console.log(sum)
}

//Factorial

let product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
}

console.log( product);

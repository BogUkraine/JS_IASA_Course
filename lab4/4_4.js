var arr = [
    {value: 100, type: 'USD'},
    {value: 215, type: 'EUR'},
    {value: 7, type: 'EUR'},
    {value: 99, type: 'USD'},
    {value: 354, type: 'USD'},
    {value: 12, type: 'EUR'},
    {value: 77, type: 'USD'},
];

const sumOfUSD = (arr) => {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i].type === "USD" ) {
            sum += arr[i].value;
            console.log(arr[i]);
        }
    }
    return sum;
}

document.write(`Sum of USD < 100 = ${sumOfUSD(arr)}` + "<br>");
console.log(sumOfUSD(arr));

const arrEUR = (arr) => {   
    let newArr = [];

    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i].type === "EUR" ) {
            arr[i].value *= 2;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(arrEUR(arr));
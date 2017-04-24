function map(foo, arr){
    var newArr = [];
        for(var i=0; i<arr.length; ++i){
            newArr.push(square(arr[i]))
        }
    return newArr
}
function square(x) { return x * x; }

console.log(map(square, [1,2,3,4]));

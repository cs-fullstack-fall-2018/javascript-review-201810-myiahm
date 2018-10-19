//
// function returnnumbers(x1,x2)
// {
//
//    for  (i=x1+1;i<x2;i++){
//        console.log(i)
//    }
//
//
// }
//
// //  console.log(returnnumbers(2,5));
//
//
// var result = 'x ';
// for (var i = 0; i < 11; i++) {
//
//     for (var t = 0; t < 11; t++) {
//
//         if(i == 0 && t > 0){
//             result += '[' + t + ']';
//         }
//         else if(t == 0 && i>0){
//             result += '[' + i + '] ';
//         }
//         else if(i>0 && t>0){
//             result += (i*t) + ' ';
//         }
//     }
//     result += '\n'
// }
//
// console.log(result);


// function column(num ) {
//     var nums="";
//
//
//     for (var i = 1; i < 11; i++) {
//
//         if (i == 0) {
//              '[' + i + ']';
//         }
//         else if (i > 0) {
//              '[' + i + '] ';
//         }
//         else if (i > 0) {
//             (i * num);
//
//         }
//         nums+= (i*num)
//     }
// return nums;
//
// }
//
//
//
// console.log(column(3));
//

//
// var Elements = [0,23,46,69,92,115,138,161,184,207,230,253,276,299,322,345,368,391,414,437,460,483];
// var Sum = 5313;
//  console.log("All the multiples of 23 less than 500 are "+ Elements +' ,and the sum is '+ Sum);


// function max(num1, num2) {
//     if (num1 > num2) {
//         console.log(num1)
//     }
//     else if (num2 > num1) {
//         console.log(num2)
//     }
//
//     else {
//         console.log("they are equal")
//     }
// }
// console.log(max(3,6));

// function maxofthree(num1,num2,num3) {
//     if(num1>num2 && num1>num3)
//     {
//         console.log(num1)
//     }else if (num2>num1 && num2>num3)
//     {
//         console.log(num2)
//     }else if (num3>num1 && num3>num2)
//     {
//         console.log(num3)
//     }else
//     {
//         console.log("They are equal")
//     }
//
// }
//  console.log(maxofthree(2,3,4));


//
// function isVowel(vowel) {
//      var v1 = "a";
//      var v2 = "e";
//      var v3 = "i";
//      var v4 = "o";
//      var v5 = "u";
//     var sometimes = "y";
//     if (vowel === v1) {
//         return true
//     }else
//         if (vowel === v2){
//             return true
//     }else
//     if (vowel === v3) {
//         return true
//     }else
//     if (vowel === v4) {
//         return true
//     }else
//     if (vowel === v5) {
//         return true
//     }
//     else
//         if (vowel === sometimes){
//         console.log("it Y")
//     } else {
//         return false
//     }
// }
//
// console.log(isVowel("y"));

 //
 // function getRGB(color)
 // {
 //     var r = color.slice(1,3);
 //     var g = color.slice(3,5);
 //     var b = color.slice(5,7);
 //       var hex = "0x";
 //     console.log(parseInt(hex+r),parseInt(hex+g),parseInt(hex+g))
// }
 //
 //
 //
 //


// function getRGB(color) {
//     var r = color.slice(1, 3);
//     var g = color.slice(3, 5);
//     var b = color.slice(5, 7);
//     var hex = "0x";
//     console.log(parseInt(hex + r), parseInt(hex + b), parseInt(hex + g));
//     colors =
//         {
//             '#000000' : 'black',
//             '#FFFFFF' : 'white',
//             '#FF0000' : 'red',
//             '#00FF00' : 'green',
//             '#0000FF' : 'blue'
//         };
//     //GETTING THE KEY VALUE SO BASICALLY IT IS GETTING THE RBG VALUE THAT IS GETTING ENTERED IN IN THE COLOR ARGUMENT AND THEN
//     //LOOKING IN THE COLECTION OF COLOR AND RETURNING WHAT IS SET AT THAT VALUE
//     mycolor = colors[color];
//     console.log(mycolor)
// }
//
//
// getRGB('#FF0000');
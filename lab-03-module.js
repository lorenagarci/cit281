
//TODO Part 9 labeled in the lab-03-module.js file and follow the inline instructions to update the module.exports
// object to export the reverseString function for import using the require() function.
//TODO Part 10 labeled in the lab-03-module.js file and follow the inline instructions to add an 
//anonymous function concatenateString defined within the module.exports object.

const concatenateString = (string_1, string_2) => {
    return ;
}

//part 11
module.exports = { 
    reverseString,
    concatenateString,
    //part 10
    concatenateString: function(string_1, string_2){
        return string_1 + string_2;
    }
    reverseString
};


//part 8
function reverseString(str){
    return [...str].reverse().join("");
}



// TODO Part 8: Reference the following website to use the spread operator
// to reverse the string for reverseString(str) function. Comment out the
// original return line of code.
// https://betterprogramming.pub/5-ways-to-reverse-a-string-in-javascript-466f62845827
function reverseString = (str) => {
    return [str.split("").reverse().join("");]
}
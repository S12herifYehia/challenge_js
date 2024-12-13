//!!! challenge 1 [17]


// var theTitle ="Elzero"
//     theDesc='ElZero Web School' 
//      theDate='  12/25' ;


// var divContent=`
// <div class="card">
// <h1>${theTitle}</h1>
// <p>${theDesc}</p>
// <span>${theDate}</span>
// </div>
// `


// document.write(divContent.repeat(4))


//!!! Challenge 2 [22]


// let a = 10;
// let b = "20";
// let c = 80;
// console.log(++a + +b++ + +c++ - +a++);
/*
    [++a]
        Value = 11
        Explain = pre-increment operator

    [+] = "addition operater"

    [+b++]
        Value = 20;
        Explain = first unary plus operator convert the value from string to number, then post-increment increase the value by 1 to be 21 but not used
    
    [+] = "addition operater"

    [+c++]
        Value = 80;
        Explain = unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 81 but not used

    [-] = subtraction operater

    [+a++]
        Value = 11;
        Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 12 but not used


    so, the total value = 11 + 20 + 80 - 11 = 100

*/

// a = 12    b = 21    c = 81
// console.log(++a + -b + +c++ + a++ + +a);
/*
    [++a]
        Value = 13
        Explain = pre-increment increase the value of a by 1 to be 13
        
    [+] = addtion operator

    [-b]
        Value = -21
        Explain = Unary negation operator convent the data type from string to number with differnt sign

    [+] = addition operator
    
    [+c++]
        Value = 81;
        Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 82 but not used
    
    [-] = subtraction operater

    [-a++]
        Value = -13
        Explain = post-increment increase the value by 1 to be 14 but not used
    
    [+] = additon operator

    [+a]
        Value = 14
        Explain = Unary plus operator has not effect becuase the date type already number


    so, the total value = 13 -21 + 81 - -13 + 14 = 100
    
*/


// a = 14    b = 21     c = 82
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
    [--c]
        Value = 81
        Explain = pre-decrement decress the value by 1 to be 81
    
    [+] = addition operator

    [+b]
        Value = 21
        Explain = Unary plus operator has no effect because the date type is already number
    
    [+] = addition operator

    [--a]
        Value = 13
        Explain = pre decrement decress the value by 1 to be 13
    
    [*] = multiplication operator

    [+b++]
        Value = 21
        Explain = Unary plus operator has no effect because the date type is already number, then post increment increase the value by 1 to be 22
    
    [-] = subtraction operator

    [+b]
        Value = 22
        Expalin = Unary plus operator has no effect effect
    
    [*] = multiplaction operator

    [a]
        Value = 13
        Explain = from the previous a
    
    [+] = Addition operator

    [--a]
        Value = 12
        Explain = Pre-decrement decress the value by 1 to be 12
    
    [-] = subtraction operator

    [+true]
        Value = 1
        Expalin = unary plus opertor change the date type from boolean to be number

        so, the total value = 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 100
*/

/*Challenge 2 */
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(-d * +e); //2000
// console.log(++e * ++g + -d + ++f); //173


// 




// 


// 


//!!! Challenge 3 [26]


// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;



// رجعلي من دول اقل قيمه وتكون عدد صحيح

// console.log(Math.round(Math.min(a,b,c,d)))


// 


// console.log(a ** Math.round(d));


// console.log(a ** Math.floor(d));
// console.log(a ** Math.trunc(d));
// console.log(a ** parseInt(d))



// 




// console.log(+(Math.floor(b) / Math.ceil(d)).toFixed(2));
// console.log(+(Math.floor(b) / Math.ceil(d)).toFixed(0));
// console.log()





// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// // Find Smallest Number In All Variables And Return Integer
// console.log(Math.round(Math.min(a, b, c, d)));

// // Use Variables a + d One Time To Get The Needed Output
// console.log(a ** parseInt(d)); // 10000

// // Get Integer "2" From d Variable With 4 Methods
// console.log(parseInt(d));
// console.log(Math.trunc(d));
// console.log(Math.floor(d));
// console.log(Math.round(d));

// // Use Variables b + d To Get This Valus
// console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
// console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number




//!!!! Challenge 4 [30]



// let a = 'Elzero Web School'


// ANS 1 : console.log(a.charAt(2).toUpperCase() + a.slice(3,6));
// ANS 2 : console.log(a.charAt(13).toUpperCase().repeat(8));
// ANS 3 : console.log(a.substring(0,6).split());
// ANS 4 : console.log(a.substr(0,6),a.substr(11));
// ANS 5 : console.log(a.charAt(0).toLocaleLowerCase() + a.substring(1,a.length-1).toUpperCase() + a.charAt(a.length-1).toLowerCase());


// حل آخر تمرين بدون استعمال length


// console.log(a[0].toLowerCase() + a.slice(1,-1).toUpperCase() + a.slice(-1).toLowerCase()

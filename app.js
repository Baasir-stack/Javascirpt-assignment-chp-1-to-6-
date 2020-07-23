
// chapter no 1  task 1
alert("Hello! welcome here");

// chapter no 1  task 2
alert("Error! please enter a valid password");

// chapter no 1  task 3
alert("Welcome to JS land \n Happy Coding..");

// chapter no 1  task 4
alert("Welcome to js land ");

// chapter no 1  task 5
console.log("Hello! I am run js through my web browser's console.");

// chapter 2 started
// chapter 2 task no 1
var store = "Hello World";
alert("Task no 3" + store);

// chapter 2 task no 2
var studentName = "NoorulAin Dawood ";
var studentAge = " 21";
var certificate = " Mobile and web app development";
alert(" Task no 4 Student name: " + studentName);
alert("Student age: " + studentAge);
alert("Student certificate: " + certificate);

// chapter 2 task no 3
var username = "Noorulain";
var myname = "Noorulain Dawood";
var fullname = username + myname;
document.write("Task no 1 and 2" + fullname);

// chapter 2 task no 4
var email = "unoor5175@gmail.com";
alert("Task no 6 My email address is " + email);

// chapter 2 task no 5
var book = "A smarter way to learn javascript";
alert("Task no 7 I am trying to learn from the book " + book);

// chapter no 3 started
// chapter no 3 task 1

var visiterName = "John Doe";
var productTitle = "Men Clothing";
var quality = " 5 T-shirt(s) ";

document.write(visiterName + "ordered " + quality + "on " + productTitle);

// chapter no 3 task 2
alert("Assignment no 3 started!");
var age = "21";
alert("My age is " + age);

// chapter no 3 task 3
var birthYear = "1998";
document.write("My birth year is " + birthYear + "<br>" + "Data type of my declare varaible is number");

//
// chapter 4 started
// chapter 4 task 1
alert("Assignment no 4 Started ..");
var $my_Class, $class, _mainClass;
var number2, $sign, _first, myName, your_name;
// var 4four ,@gmail , for ,&book *hello;  inlegal variables
document.write(
    "Rules for naming JS variables" +
        "<br>" +
        "  b)  Variable names can only contain  number, $ and _ For example $my_1stVariable " +
        "<br>" +
        "c) Variables must begin with a letter, $ or _. For example $name, _name or name" +
        "<br>" +
        "d)  Variable names are case sensitive " +
        "<br>" +
        "e) Variable names should not be JS Keywords."
);

// chapter 5 started
//chapter 5 <!-- task no 1 -->
var num1 = "7",
    num2 = "14";
var sum = +num1 + +num2;

//chapter 5 <!-- task no 2 -->
var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var mod = num1 % num2;
alert("Assignment no 5 started ");
document.write("Sum of numbers are " + sum + "<br>");

//chapter 5 <!-- task no 3 -->
var variable;
document.write("Value of the variable is " + variable + "<br>");
variable = "10";
document.write("Value of variable after initialing " + variable + "<br>");
++variable;
document.write("Value of variable after increment is " + variable + "<br>");
variable += 7;
document.write("Value of variable after addtion is " + variable + "<br>");
--variable;
document.write("Value of variable after decrement is " + variable + "<br>");
variable %= 3;
document.write("The remainder is " + variable + "<br>");

//chapter 5<!-- task no 4 -->
document.write("<br> <br>" + "Movie tickets");
var ticket = "300",
    total;
total = ticket * 5;
document.write("The cost of movie ticket is " + ticket + "<br>" + "The total cost of the tickets are " + total);

//chapter 5<!-- task no 5 -->
document.write("<br> <br>" + "Table of 5" + "<br>");
var table = "5";
for (var i = 1; i <= 10; i++) {
    document.write(table);
    document.write("x");
    document.write(i);
    document.write("=");
    document.write(table * i);
    document.write("<br>");
}

//chapter 5<!-- task no 6 -->
document.write("<br> <br>" + "Temperature" + "<br>");
var temp = "36";
var fre = temp * (9 / 5) + 32;
document.write("celsius to fahrenheit is " + fre + "<br>");
var change;
change = (fre - 32) * (5 / 9);
document.write("fahrenheit to celsius is " + change);

//chapter 5<!-- task no 7 -->
document.write("<br> <br>" + "Shopping cart" + "<br>");
var price1 = "300";
var price2 = "500";
var quality1 = "2";
var quality2 = "3";
var shipping = "100";
var cartTotal;
cartTotal = price1 * quality1 + price2 * quality2;
document.write("price of 1 item is " + price1 + "<br>");
document.write("price of 2 item is " + price2 + "<br>");
document.write("order quality of 1 item is " + quality1 + "<br>");
document.write("order quality of 2 item is " + quality2 + "<br>");
document.write("Shipping charges" + shipping + "<br>");
document.write("Total cost of your order is " + cartTotal + "<br>");

//chapter 5 <!-- Task n0 8 -->
document.write("<br> <br>" + "Percentege" + "<br>");
var marks = "500";
var obt = "345";
var per = (obt / marks) * 100;
document.write("Total marks is " + marks + "<br>" + "Marks obtained is " + obt + "<br>" + "The percentage of the student is " + per);

//chapter 5<!-- Task no 9 -->
document.write("<br> <br>" + "Currency" + "<br>");
var us = "10";
var sr = "25";
var convert = us * 104.82 + sr * 28;
document.write("Currency in pakistan will be " + convert);

//chapter 5<!-- task no 10 -->
document.write("<br> <br>" + "Arithmetic operation" + "<br>");
var num = "6";

var save = num + 5 + num * 10 + num / 2;
document.write(save + "<br>");

//chapter 5<!-- Task no 11 -->
document.write("<br> <br>" + "Age calculator" + "<br>");
var currentYear = "2020";
var birthYear = "1998";
var ageStore = currentYear - birthYear;
document.write("Current year " + currentYear + "<br>" + "birth Year is" + birthYear + "<br>" + "Your current age is" + ageStore);

//chapter 5  <!-- TAsk no 12 -->
document.write("<br> <br>" + " Geometrizer" + "<br>");
var radius = "32";
var area = "10";
var circumference = 2 * 3.142 * radius;
document.write("The circumference of the circle is " + circumference + "<br>");
var area_circle = 2 * 3.142 * radius;
document.write("The circumference of the circle is " + circumference);

//chapter 5<!-- task no 13 -->
document.write("<br> <br>" + "Favourite snack data " + "<br>");
var snack_name = "kitkat";
var snack_age = "21";
var est_age = "55";
var per_day = "10";
var total_snack = est_age * per_day - snack_age * per_day;

document.write("Fav snack :" + snack_name + "<br>");
document.write("Current age :" + snack_age + "<br>");
document.write("Total estimate  :" + est_age + "<br>");
document.write("Per day:" + per_day + "<br>");
document.write("You will need " + total_snack + "<br>" + "chocalate to last you untill the last ripe old age of " + est_age);

// chapter 6-9 started
// chapter 6-9  task no 1
document.write("Arithmetic operation" + "<br>");
var num = "10";
document.write("The value of number is " + num + "<br>");
++num;
document.write("The value of ++num is " + num + "<br>");
document.write(" Now The value of number is " + num + "<br>");
num++;
document.write("The value of num++ is " + num + "<br>");
document.write(" Now The value of number is " + num + "<br>");
--num;
document.write("The value of --num is " + num + "<br>");
document.write(" Now The value of number is " + num + "<br>");

num--;
document.write(" Now The value of num-- is " + num + "<br>");
document.write(" Now The value of number is " + num + "<br>");

// // chapter 6-9  task no 2
document.write("<br> <br>" + "Result of varaibles" + "<br>");
var a = "2",
    b = "1";
document.write(a + "<br>");
document.write(b + "<br>");
var result = --a - --b + ++b + b--;

document.write(result + "<br>");

//// chapter 6-9   task no 3
var name;
name = prompt("Enter your name");
alert("hello " + name + "\n" + "Welcome to our site");

//// chapter 6-9   task no 5
document.write("<br> <br>" + "use input for tables" + "<br>");
var number = Number(prompt("Enter a number"));
var store = typeof number;
// document.write(store);
if (store === "number") {
    for (var i = 1; i <= 10; i++) {
        document.write(number);
        document.write("x");
        document.write(i);
        document.write("=");
        document.write(number * i);
        document.write("<br>");
    }
} else if (store === "NaN") {
    number = "5";
    for (var i = 1; i <= 10; i++) {
        document.write(number);
        document.write("x");
        document.write(i);
        document.write("=");
        document.write(number * i);
        document.write("<br>");
    }
}

//// chapter 6-9   task no 6
document.write("<br> <br>" + "student record" + "<br>");
var sub1, sub2, sub3, obt_marks, total_marks, percent;
sub1 = Number(prompt("Enter the marks of subject 1 "));
sub2 = Number(prompt("Enter the marks of subject 2 "));
sub3 = Number(prompt("Enter the marks of subject 3 "));
obt_marks = sub1 + sub2 + sub3;
total_marks = "300";
percent = (obt_marks / total_marks) * 100;
document.write("sub1 english :" + sub1 + "<br>");
document.write("sub2 urdu :" + sub2 + "<br>");
document.write("sub3 math :" + sub3 + "<br>");
document.write("obtained marks :" + obt_marks + "<br>");
document.write("percentage :" + percent + "<br>");

// chapter 9-11 started
// chapter 9-11 task no 1

// chapter 9-11 <!-- Task no1  -->
var city;
city = prompt("Enter the name of your city");
if (city === "karachi") {
    document.write("Welcome to city of lights ");
}

//// chapter 9-11  !--Task no2 -->
var gender;
city = prompt("Enter gender");
if (city === "male") {
    alert("Good morning Sir ");
} else if (city === "female") {
    alert("Good morning Ma'am ");
}

// <
//// chapter 9-11  !--Task no3-- >
var signal;
city = prompt("Enter signal color");
if (signal === "red") {
    alert("please stop ");
} else if (signal === "green") {
    alert("Read to move");
} else if (signal === "yellow") {
    alert("move move");
}

// <
//// chapter 9-11  !--Task no4-- >
var fuel;
fuel = prompt("Enter remaining fuel");
if (fuel <= "0.25") {
    alert("please refill your fuel ");
}

//// chapter 9-11  task no 5
var a = "4";
++a;
if (++a === "5") {
    alert("given condition for variable a is true");
}
var c = "12";
++c;
if (c++ === "13") {
    alert("condition 1 is true");
}
if (c === "13") {
    alert("condition 2 is true");
}
if (++c < "14") {
    alert("condition 3 is true");
}
if (c === "14") {
    alert("condition 4 is true");
}

var materialCost = "20000";
var laborCost = "2000";
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    console.log("The cost equals to" + totalCost);
}
if (totalCost === laborCost + materialCost) {
    alert("True");
} else {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

//// chapter 9-11  task no 6
document.write("<br> <br>" + "student record" + "<br>");
var sub1, sub2, sub3, obt_marks, total_marks, percent;
sub1 = Number(prompt("Enter the marks of subject 1 "));
sub2 = Number(prompt("Enter the marks of subject 2 "));
sub3 = Number(prompt("Enter the marks of subject 3 "));
obt_marks = sub1 + sub2 + sub3;
total_marks = "300";
percent = (obt_marks / total_marks) * 100;
document.write("sub1 english :" + sub1 + "<br>");
document.write("sub2 urdu :" + sub2 + "<br>");
document.write("sub3 math :" + sub3 + "<br>");
document.write("obtained marks :" + obt_marks + "<br>");
document.write("percentage :" + percent + "<br>");
if (percent >= 80) {
    document.write("A+" + "<br>" + "Excellent work");
} else if (percent >= 70 && percent <= 80) {
    document.write("A" + "<br>" + "Good work");
} else if (percent >= 60 && percent <= 70) {
    document.write("B" + "<br>" + "Fail work");
} else {
    document.write("fail");
}

//
//// chapter 9-11 task no 7
document.write("<br> <br>" + "GAME" + "<br>");
var myNum = "5";
var userNum;
userNum = Number(prompt("Enter number"));
if (myNum === userNum) {
    alert("Bingo");
} else if (++myNum === userNum) {
    alert("Close!");
}

//// chapter 9-11task no 8\
var d_num;
d_num = Number(prompt("enter dnum"));
d_num % 3;
if ((d_num = 0)) {
    alert("NUmber divisible by 3");
}

//// chapter 9-11  task no 9
var check_num;
check_num = Number(prompt("enter num"));
if (check_num / 2) {
    alert("even number");
} else {
    alert("odd no");
}

//// chapter 9-11 task no 10
var check_temp;
check_temp = Number(prompt("Enter temperature"));
if (check_temp > 40) {
    alert("Very hot");
} else if (check_temp >= 30 && check_temp < 40) {
    alert("Noraml whether");
} else if (check_temp >= 20 && check_temp < 30) {
    alert("Cool whether");
} else if (check_temp >= 10 && check_temp < 20) {
    alert("To Cool outside");
}

//// chapter 9-11 task no 11
var num1, num2, operator, result;
num1 = Number(prompt("Enter value"));
num2 = Number(prompt("Enter value"));
operator = prompt("Enter opeartor");

if (operator === "+") {
    result = num1 + num2;
    alert(result);
} else if (operator === "-") {
    result = num1 - num2;
    alert(result);
} else if (operator === "+") {
    result = num1 * num2;
    alert(result);
} else if (operator === "/") {
    result = num1 / num2;
    alert(result);
} else if (operator === "%") {
    result = num1 % num2;
    alert(result);
}

// chapter 12-13 started
// chapter 12-13 task no 1
var ch;
ch = prompt("Enter num");
if (ch >= "65" && ch <= "90") {
    alert("Character is a capital letter");
} else if (ch >= "97" && ch <= "122") {
    alert("Character is a small letter");
} else if (ch >= "48" && ch <= "57") {
    alert("Character is a digit");
}

//// chapter 12-13 task no2
var num1, num2;
num1 = Number(prompt("Enter num for integer"));
num2 = Number(prompt("Enter num2 for integer"));
if (num1 > num2) {
    alert("Number 1 is larger");
} else if (num1 < num2) {
    alert("Number 2 is larger");
} else if ((num1 = num2)) {
    alert("Numbers are equals");
}

//// chapter 12-13 task no3
var num_1;
num_1 = Number(prompt("Enter num for integer"));

if (num_1 > 0) {
    alert("Number is positive");
} else if (num1 < 0) {
    alert("Number is negative");
} else if ((num1 = 0)) {
    alert("Numbers is zero");
}
//
//// chapter 12-13 task no 4
var value;
value = prompt("enter a character");
if (value === "a" || value === "e" || value === "i" || value === "0" || value === "u") {
    alert("Character is vowel");
} else {
    alert("false");
}

//// chapter 12-13 task n05
var password = "12345";
var check_pass = prompt("Enter your password");
if (password === check_pass) {
    alert("YOu enter a right password");
} else {
    alert("Sorry the password is wrong!");
}

//// chapter 12-13 task no 6
var greeting;
var hour = "13";

if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
} else {
    greeting = "Good evening";
    alert(greeting);
}

//// chapter 12-13 task no 7
var time;
time = Number(prompt("Enter time in 24 hours formate"));
if (time >= 0000 && time < 1200) {
    alert("Good Morning!");
}
if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
}
if (time >= 1700 && time < 2100) {
    alert("Good Evening!");
}
if (time >= 2100 && time < 2359) {
    alert("Good  Night!");
}

// chapter 14-16 started
// chapter 14-16 task 1
var array1 = [];
var array_string = ["Ahmed", "Sarim", "Fahad"];
var array_num = [2, 8, 6];
var array_boolean = ["true", "false"];
var array_mixed = ["hassan", "hamza", 67, "true"];
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
for (var i = 1; i < qualification.length; i++) {
    document.write(i + "  " + qualification[i] + "<br>");
}

//// chapter 14-16  task no 2
var studentName = ["jazira", "Aal-e-ahmed", "NoorulAin"];
var marks = [300, 400, 350];
var percentage;
for (var i = 0; i < 3; i++) {
    console.log(studentName[i] + "  " + "score is " + marks[i]);
    percentage = (marks[i] / 500) * 100;
    console.log("Percentage is " + percentage);
    console.log("\n");
}

//// chapter 14-16  task no 3
var colorArray = ["red", "green", "blue", "pirple"];
var userColor = "";
alert("The color we have " + colorArray);
userColor = prompt("Color you want to add at the beginning ");
colorArray.unshift(userColor);
console.log(colorArray);
userColor = prompt("Color you want to add at the end");
colorArray.push(userColor);
console.log(colorArray);
colorArray.unshift("brown", "black");
console.log(colorArray);
colorArray.shift();
console.log(colorArray);
colorArray.pop();
console.log(colorArray);
i = prompt("Which color you want to delete enter the index no");
var j = prompt("how many color you want to delete?");
colorArray.splice(i, j);
console.log(colorArray);

//// chapter 14-16  task no 4
var studArray = ["320", "430", "120", "550"];
studArray.sort();
console.log(studArray);

//// chapter 14-16  task no 4
var cityArray = ["islambad", "karachi", "lohore", "kashmir"];
cityArray.splice(3, 10);
console.log(cityArray);

//// chapter 14-16  task no 5
var arr = ["This", "is", "a", "cat"];
console.log(arr.join(" "));

//// chapter 14-16  task no 6
var fifo = ["keyword", "mouse", "printer", "speaker"];
for (i = 0; i < 4; i++) {
    console.log("Out" + "\n" + fifo[i]);
}

//// chapter 14-16  task no 6
var fifo = ["keyword", "mouse", "printer", "speaker"];
for (i = 3; i >= 0; i--) {
    console.log("Out" + "\n" + fifo[i]);
}

//
// chapter 17-20 started

// Chapter 17 Task 2

var coun = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];

document.write(coun);

//  Chapter 17 task 3

for (var input = 1; input <= 10; input++) {
    console.log(input);
}

//Chapter 17 Task 4

function table() {
    var n, i;

    var n = prompt("table you want of :");

    for (i = 1; i <= 15; i++) {
        console.log("\n" + n + "x" + i + "=" + n * i);
    }
}

table();

// Chapter 17 Task 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (index = 0; index < fruits.length; index++) {
    console.log("Element at index " + index + " is " + fruits[index]);
}

// Chapter 17-20 Task 6
//a)

var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ,];
console.log(counting);

//b)
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var reVers = counting.reverse();
console.log(reVers);

//c
var counting = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, ,];
for (index = 0; index < counting.length; index++) {
    if (counting[index] % 2 == 0) {
        console.log(counting[index]);
    }
}
//d)
var counting = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, ,];
for (index = 0; index < counting.length; index++) {
    if (counting[index] % 2 != 0) {
        console.log(counting[index]);
    }
}

//e)

var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, ,];
for (index = 0; index < counting.length; index++) {
    if (counting[index] % 2 == 0) {
        console.log(counting[index] + "k");
    }
}

// Chapter 17-20 task 7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
alert(A);
var fruit = prompt("Search fruit :");
for (index = 0; index <= A.length; index++) {
    if (fruit == A[index]) {
        alert(fruit + "  is found at index  :   " + index + "  in our Bakery");
        break;
    } else if (fruit != A[index]) {
        alert(fruit + "  is found at index  :   " + index + "  in our Bakery");
        break;
    }
}

// Chapter 17-20 task 8

var A = [24, 53, 78, 91, 12];

console.log("Array items  : " + A + "\n" + "Largest value is: " + Math.max.apply(null, A));

// Chapter 17-20 task 9
var A = [24, 53, 78, 91, 12];

alert("Array items  : " + A + "\n" + "Smallest value is: " + Math.min.apply(null, A));

// Chapter 17-20 task 10

for (var i = 1; i <= 10; i++) {
    console.log(5 * i);
}

// Chapter 21-25 Task 1

var firstName = " Noorulain ";
var lastName = " dawoood ";
var fullName = firstName + lastName;
alert(fullName);

// Chapter 21-25 Task 2

var favouritePhone = prompt("Your favourite Mobile Phone ? :");
alert("My favorite Phone is :  " + favouritePhone + "\n Length of string : " + favouritePhone.length);

// Chapter 21-25 Task 3

var Country = "Pakistani";
alert("string  : " + Country + "index of n : " + Country.indexOf("n"));

// Chapter 21-25 Task 4
var msg = "Hello World";
alert("String :" + msg + "index of l is  :" + msg.indexOf(msg.length - 1));

// Chapter 21-25 Task 5

var country = "pakistani";
alert("3rd index is :" + country.charAt(3));

// Chapter 21-25 Task 6

var firstName = "Noorulain";
var lastName = "dawood";
alert(firstName.concat(lastName));

// Chapter 21-25 Task 7

var city = "Hyderabad";

alert("City:" + city + "\n After Replacement : " + city.replace("Hyderabad", "Islamabad"));

// Chapter 21-25 Task 8

var message = "Ali and Sami are best friends. They play cricket and football together";

alert("Before Replacing 'and' " + message + "After Replacing 'and' to '&' " + message.replace(/and/g, "&"));

// Chapter 21-25 Task 9

var string1 = "472";
var string2 = Number("472");
alert("value :" + string1 + " Type " + typeof string1 + "\n Value :" + string2 + " Type:" + typeof string2);

//Chapter 21-25 Task 10

var msg = prompt("any word : ");
alert(msg.toUpperCase());

//Chapter 21-25 Task 11

function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    document.write(sentence.join(" "));
    return sentence;
}

titleCase("javascript");

//Chapter 21-25 Task 12

var num = 35.36;
var str = num.toString() * 100;
alert(str, str.typeof());

alert("Number : " + num + "\n Result : " + num.toString());

//Chapter 21-25 Task 13

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
alert(A);
var fruit = prompt("Search fruit :");
for (index = 0; index <= A.length; index++) {
    if (fruit == A[index]) {
        alert(fruit + "  is available at index  :   " + index + "  in our Bakery");
        break;
    } else if (fruit != A[index]) {
        alert(fruit + "  is available at index  :   " + index + "  in our Bakery");
        break;
    }
}

//Chapter 21-25 Task 14
var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var checkForSpecialChar = function (string) {
    for (i = 0; i < specialChars.length; i++) {
        if (string.indexOf(specialChars[i]) > -1) {
            return true;
        }
    }
    return false;
};

var userName = prompt("Type code : ");
if (checkForSpecialChar(userName)) {
    alert("Please Enter a  Valid Username");
} else {
    alert("Valid Password");
}
//Chapter 21-25 Task 15

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
alert(A);
var fruit = prompt("Search fruit :");
for (index = 0; index <= A.length; index++) {
    if (fruit == A[index]) {
        alert(fruit + "  is found at index  :   " + A.indexOf(fruit) + "  in our Bakery");
        break;
    } else if (fruit != A[index]) {
        alert(fruit + "  is not found  in our Bakery");
        break;
    }
}

//Chapter 21-25 Task 16

var university = "University of Karachi";

var spuni = university.split("");

alert(spuni);

//Chapter 21-25 Task 17

var country = "Pakistan";

var ans = country.slice(-1);

alert(ans);

//Chapter 21-25 Task 18

var temp = "The quick brown fox jumps over the lazy dog";
var ctemp = temp.toLowerCase();
var count = (ctemp.match(/the/g) || []).length;
console.log(count);

// Chapter 31-34 Task 1
var today = new Date();

console.log(today);

// Chapter 21-25 Task 2

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
var output = document.getElementById("output");
console.log(thisMonth);

if (output.textContent !== undefined) {
    output.textContent = thisMonth;
} else {
    output.innerText = thisMonth;
}

// chapter no 26 to 30
// task no 1
let pos_num = Number(prompt("Enter a number"));
console.log(pos_num);
var num = Math.round(pos_num);
console.log(num);
num = Math.floor(pos_num);
console.log(num);
num = Math.ceil(pos_num);
console.log(num);

//task no 2
let neg_num = Number(prompt("Enter a negative number"));
console.log(neg_num);
let num1 = Math.round(neg_num);
console.log(num1);
num = Math.floor(neg_num);
console.log(num1);
num = Math.ceil(neg_num);
console.log(num1);

//task no 3
let abs_num = Number(prompt("Enter a  number"));
let num_st = Math.abs(abs_num);
console.log(num_st);

//task no 4
//random function
let ran_value = Math.random() * 6 + 1;
let ran_floor = Math.floor(ran_value);
let ran_floor1 = Math.floor(ran_value);
document.write(`Random dice value  ${ran_floor}`);

ran_value = Math.random() * 6 + 1;
ran_floor = Math.floor(ran_value);
document.write(`Random dice value  ${ran_floor}`);

//task no 5
//coin program
let coin_flip = Math.random() * 2;
let coin = Math.floor(coin_flip);
console.log(coin);
if (coin == 1) {
    document.write("head wins");
} else if (coin == 0) {
    document.write("Tail wins");
}

//task no 6
// 1 to 100 Number
let ran_num = Math.random() * 101;
let num_fl = Math.floor(ran_num);
console.log(`
  Random no between 1 to 100 : ${num_fl}
  `);

//task no 7
//weight program
let weight = Number(prompt("Enter your weight in kilogram"));
document.write(`The weight of the user is ${weight} kilogram`);

//task no 8
//secret number game
let scret_num = Math.floor(Math.random() * 11);
let user_num = Number(prompt("Enter a number between 1 to 10"));
if (scret_num == user_num) {
    document.write("<br>" + "Congratation you win");
} else {
    document.write("<br>" + "Please try again");
}

// Chapter 31-34 Task 3

var today = new Date();
var day = today.getDay();
var daylist = ["Sun", "Mon", "Tue", "Wed ", "Thu", "Fri", "Sat"];
console.log("Today is : " + daylist[day] + ".");

// Chapter 31-34 Task 4
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];

if (daylist == "Thursday") {
    console.log("Today is : " + "Funday");
} else if (daylist == "Saturday") {
    console.log("Today is : " + "Funday");
} else if (day != "Saturday" && day != "Sunday") {
    console.log("Today is : " + daylist[day]);
}

// Chapter 31-34 task 5

var GivenDate = "2020-06-15";
var CurrentDate = new Date();
GivenDate = new Date(GivenDate);

if (GivenDate > CurrentDate) {
    alert("First Fifteen Days of Month");
} else {
    alert("Last Fifteen Days of Month");
}

// Chapter 31-34 task 6

// var d = ('1970-01-144933');
// var currentd = new Date();

// var total = currentd - d;

// alert(total);

//task no 7
// check am or pm
dateNow = new Date();
hour = dateNow.getHours();
if (hour >= 0 && hour <= 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

//task no 8
//last date of the year 2020
var latertDate = new Date(2020, 11, 31);
alert("Later date :" + latertDate);

//task no 9
var ref_date = new Date(2020, 04, 24);
var ref_DateNow = new Date(2015, 10, 21);
var month = ref_DateNow.getMonth();
var ref_month = ref_date.getMonth();
var ref_day = ref_date.getDate();
var diff_month = month - ref_month;
console.log(diff_month);

for (var i = 1; i <= diff_month; i++) {
    for (var j = 1; j <= 30; j++) {
        var count;
        count = +j;
        console.log(count);
    }
    dateD = 0;
    var result_count = +count;
    result_count *= i;
    result = result_count - 14;
    var total_result = 1825 - result;
    console.log(total_result);
}
alert(total_result + "  days have passed since 1st, Ramdam  2015");
console.log("Total no of days are " + total_result);

//task no 10
//millsecond
dateNow = new Date();
var date_mill = dateNow.getMilliseconds();
var pre_date = new Date("11/05/2015 16:00:00");
var pre_mill = pre_date.getMilliseconds();
var time = date_mill + pre_mill;
console.log(date_mill);
console.log(time);

//task no 11
// reset the date object an hour
dateNow = new Date();
date_d = dateNow.getDate();
date_m = dateNow.getMonth();
var date_y = dateNow.getYear();
var hour = dateNow.getHours();
var hour_s = hour - 1;
var backD = new Date(date_y, date_m, date_d, hour_s);
alert("Current date " + dateNow + "\n" + "1 hour back it was : " + backD);

//task no 12
//current date to 100 years back
var dateNow = new Date();
var date_d = dateNow.getDate();
var date_m = dateNow.getMonth();
var backDate = new Date(1920, date_m, date_d);
alert("Current date " + dateNow + "\n" + "100 years back it was : " + backDate);

//task no 13
//calculate user age
// var userAge = Number(prompt("Enter your age "));
// var todayDate =new Date();
// function dateyear()
// {
// var dob_entry = 21/10/1998;
//
// var dob_asdate = new Date(year, month, day);
// var today = new Date();
// var mili_dif = Math.abs(today.getTime() - dob_asdate.getTime());
// var age = (mili_dif / (1000 * 3600 * 24 * 365.25));
// within_age_range=(14<age & age<24);
//
// alert(age);
// };
// document.write("<br>" +dateyear());

//task no 14
// k-electric bill
var customerName = "xyz";
var month = "feb";
var numberOfUnit = 410;
var chargesPerUnit = 16;
var latePayment = 350;
var netPayment = numberOfUnit * chargesPerUnit;
var grossPayment = netPayment + latePayment;
document.write("</h1> " + "K-Electric Bill " + "</h1>");
document.write("<br>" + "Customer Name : " + customerName);
document.write("<br>" + "Customer Month : " + month);
document.write("<br>" + "number Of Unit : " + numberOfUnit);
document.write("<br>" + "charges Per Unit : " + chargesPerUnit);
document.write("<br>" + "late Payment : " + latePayment);
document.write("<br>" + "Net Payment (in due date): " + netPayment);
document.write("<br>" + "Gross Payment (after due date): " + grossPayment);

//chapter no  35 to 38
//task no1
//display current date and time
function currentDate() {
    let store_time = Date();
    document.write("<br>" + store_time);
}
currentDate();

//task no 2
//first and last nmae from the user function
function fullName() {
    let name = prompt("Enter your first name");
    let lastName = prompt("Enter your first name");
    document.write("<br>" + "Welcome  " + name + lastName);
}

fullName();

//task no 3
// sum of two numbers
function add(sum_num1, sum_num2) {
    sum_num1 = Number(prompt("enter no to add"));
    sum_num2 = Number(prompt("enter no to add"));
    let total = sum_num1 + sum_num2;
    document.write("<br>" + "Sum of numbers are " + total);
}
add();

//task no 4
//calculator
function calacula(num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "/") {
        return num1 / num2;
    } else if (operator == "*") {
        return num1 * num2;
    } else {
        alert("Sorry something wrong!");
    }
}

document.write("<br>" + "RESULT: " + calacula(5, 8, "+"));

//task no 5
//square function
function square(a) {
    return a * a;
}
document.write("<br>" + "RESULT OF SQUARE: " + square(5));

//task no 6
//factorial of a number
function factorial(fact) {
    let store = fact;
    console.log(store);
    for (var i = 1; i < store; ++i) {
        fact *= i;
        console.log(fact);
    }
    return fact;
    console.log(fact);
}
document.write("<br>" + "RESULT OF FACTORIAL: " + factorial(5));

//task no 7
//counting program
function counting() {
    let start_num = Number(prompt("Enter the starting number to start counting"));
    let last_num = Number(prompt("Enter the last number to end counting"));
    document.write("<br>" + "Counting from " + start_num + " to " + last_num + "<br>");
    for (i = start_num; i <= last_num; i++) {
        document.write(i + "<br>");
    }
}
counting();

//task no 8
//nested function of hypotenuse
function hypotenuse(a, b) {
    function square(x) {
        return x * x;
    }
    let store_h = Math.sqrt(square(a) + square(b));
    return store_h;
    console.log(store_h);
}
document.write("<br>" + "Hypotenuse :" + hypotenuse(5, 4));

//task no 9
// area of a rectangle.
function areaOfRect(width, height) {
    var area;
    area = width * height;
    return area;
}
document.write("<br>" + "Area of rectangle : " + areaOfRect(5, 8));

//task no 10
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, "");
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return "its not palindrome";
        }
    }
    return "its palindrome";
}
palindrome(prompt(""));

//task no 11
function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
}

document.write(titleCase("the quick brown fox"));

//task no 12
function longestWord(text) {
    let wordArray = text.split(" ");
    let maxLength = 0;
    let result = "";

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length;
            result = wordArray[i];
        }
    }

    return result;
}
document.write("<br>" + longestWord("Web Development Tutorial"));

//task no 13

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

console.log(char_count("JSResourceS.com", "o"));

//task no 14
function calcCircumference(radius) {
    var circumference = 2 * 3.142 * radius;
    return Math.ceil(circumference);
}

document.write("<br>" + "circumference of the circle :" + calcCircumference(5));

//b)
function calcArea(r) {
    var circle_area = 3.142 * r;
    return Math.ceil(circle_area);
}
document.write("<br>" + "area of circle is :" + calcArea(5));


// Chapter 38-42

// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

function Add() {
  a = 3;
  b = 4;
  c = a + b;
  return c;
}

alert(Add());

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

function isLeapYear() {
  var year = Number(prompt("Year ? "));

  var leapYear = year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  return leapYear;
}
alert(isLeapYear());

/* 3. If the lengths of the sides of a triangle are denoted by a, b, and c,
then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 , Calculate area of triangle using 2 functions  */

function S() {
  a = 5;
  b = 3;
  c = 3;
  S = (a + b + c) / 2;
  areaOfTriange();
}

function areaOfTriange() {
  var areaOfTriange = S * (S - a) * (S - b) * (S - c);
  alert(areaOfTriange);
}

S();

/* 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage.
Call those functions from mainFunction and display result in mainFunction */

function main(maths, physics, computer) {
  function average() {
      var average = (maths + physics + computer) / 3;
      return average;
  }

  function percentage() {
      var percentage = ((maths + physics + computer) / 300) * 100;
      return percentage;
  }

  average();

  percentage();

  alert("percentage : " + percentage() + "%" + " \n Average : " + average());
}

console.log(main(90, 70, 100));

/*5. You have learned the function indexOf.Code your own custom function that will perform the same functionality.
You can code for single character as of now. */

/* 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. */

var strings = ["bongo drums", "guitar", "flute", "double bass", "xylophone", "piano"];
if (strings.length <= 25) {
  string = strings.map((x) => x.replace(/[aeiou]/g, ""));

  console.log(string);
} else {
  alert("string must be less than 25");
}

/* 7. Write a function with switch statement to count the number of occurrences of any two
vowels in succession in a line of text. For example, in the sentence */

function vowel_count(str1) {
  var vowel_list = "aeAE";
  var vcount = 0;

  for (var x = 0; x < str1.length; x++) {
      if (vowel_list.indexOf(str1[x]) !== -1) {
          vcount += 1;
      }
  }
  return vcount;
}
console.log(vowel_count("hey.. How are you?"));

/* 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert
and print this distance in meters, feet, inches and centimeters. */

function distance() {
  var distance = Number(prompt(" Distance between Two Cities in Km : "));
  alert(" Distance in Meters : " + distance / 1000 + " \n Distance in foot" + distance / 3280.84 + "\n in inches : " + distance / 39370.1 + " \n in centimeters : " + distance / 100000);
}

distance();

/* 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours.
Assume that employees do not work for fractional part of an hour. */

var hoursWorkedInAWeek = Number(prompt("Total hours Employ worked in a week : "));
var additionalHours = 40 - hoursWorkedInAWeek;
if (hoursWorkedInAWeek > 40) {
  var payment = additionalHours * -12.0;
  alert(payment);
} else {
  alert("NO ADDITIONAL PAYMENT BECAUSE YOU WORKED UNDER 40 HOURS");
}

/* 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the
 keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer. */

var amount = Number(prompt("Enter Amount to Withdraw : "));

alert("Required Notes of 100 is : " + amount / 100 + "\n Required notes of 50 is : " + (amount % 100) / 50 + "\n Required notes of 10 is : " + ((amount % 100) % 50) / 10 + "\nAmount still remaining is : " + (((amount % 100) % 50) % 10));



//   3. Display  students records in table and each row should contain a delete button.
//If you click on a button to delete a record, entire row should be deleted.

window.onload = function () {
  var button = document.getElementById("submitButton");
  button.onclick = addItem;
};

function addItem() {
  var textInput = document.getElementById("item"); //getting text input
  var text = textInput.value; //getting value of text input element
  var ul = document.getElementById("ul"); //getting element <ul> to add element to
  var li = document.createElement("li"); //creating li element to add
  li.innerHTML = text; //inserting text into newly created <li> element
  li.onclick = function () {
      this.parentNode.removeChild(this);
  };
  if (ul.childElementCount == 0) {
      //using if/else statement to add items to top of list
      ul.appendChild(li); // will add if count of ul children is 0 otherwise add before first item
  } else {
      ul.insertBefore(li, ul.firstChild);
  }
}

// 5. Show a counter in browser. Counter should increase on click
//on increase button and decrease on click on decrease button. And show updated counter value in browser.
var x = 0;

document.getElementById("output-area").innerHTML = x;

function button1() {
  document.getElementById("output-area").innerHTML = ++x;
}

function button2() {
  document.getElementById("output-area").innerHTML = --x;
}
// 43-48 task 4
function upDate(previewPic) {
  document.getElementById("image").innerHTML = previewPic.alt;

  document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo() {
  document.getElementById("image").innerHTML = "Hover over an image below to display here";
  document.getElementById("image").style.backgroundImage = "url('')";

  /* the function is going to change the image back to the original one and the text back to the one in div orginially */
}

//chapter no 49 to 52
//task no 1
//Create a signup form and display form data in your web page on submission.
function submit() {
  var firstName = document.getElementById("your_firstName");
  firstName = your_firstName.value;
  var lastName = document.getElementById("your_lastName");
  lastName = your_lastName.value;
  var emailAddress = document.getElementById("email_add");
  emailAddress = email_add.value;
  var pass = document.getElementById("password");
  pass = password.value;

  document.write("<h1>" + "Data you have entered " + "</h1>" + "<br>");
  document.write("First name : " + firstName + "<br>");
  document.write("Last name : " + lastName + "<br>");
  document.write("Email : " + emailAddress + "<br>");
  document.write("Password : " + pass);

  console.log(firstName);
  console.log(lastName);
  console.log(emailAddress);
  console.log(pass);
}

//chapter no 49 to 52
//task no 2
// Suppose in your webpage there is content area in which you have entered your item details,
// but user can only see some details on first look. When user clicks on
// “Read more” button, full detail of that particular item will be displayed.

function readmore() {
  var readMore =
      "You can use your vehicle identification number (VIN) to find information about your car, like equipment specifications, the model year and even the factory where it was manufactured. Find your VIN on the driver's side dashboard. They've been 17 digits long since model year 1981 Car make and model are both terms used to identify and describe vehicles. Make is essentially a short term for an automaker, which means the company that makes the vehicle. ... Model is the specific type of vehicle produced by the automaker. For instance, a Camry is a model of Toyota, and a Civic is a model of Honda.";
  var para = document.getElementById("content-para");
  para.innerHTML = readMore;

}

//chapter 49 to 52
//task no 3
var tableBtn = document.getElementById("btnInput");
var table = document.querySelector("table");

var nameInput = document.getElementById("name");
var lastInput = document.getElementById("lastName");
var countryInput = document.getElementById("country");

var count = 2;
function addData() {
  var name = nameInput.value;
  var last = lastInput.value;
  var country = countryInput.value;

  {
      count += 1;
      var row = table.insertRow(-1);
      row.insertCell(0).textContent = count;
      row.insertCell(1).textContent = name;
      row.insertCell(2).textContent = last;
      row.insertCell(3).textContent = country;
  }

  var name = (nameInput.value = "");
  var last = (lastInput.value = "");
  var country = (countryInput.value = "");
}

function deleteMe() {
  var valueDel = document.getElementById("deleteValue");
  var value = deleteValue.value;
  var row = table.deleteRow(value);
}
function showImg(e) {
  var imageAddress = e.src;
  console.log(imageAddress);
  var modalImage = document.getElementById("modal_inner_image");
  modalImage.src = imageAddress;
}

var fontSize = 16;
function zoomIn() {
  var para = document.getElementById("paragraph");
  fontSize += 10;
  para.style.fontSize = fontSize + "px";
}

function zoomOut() {
  var para = document.getElementById("paragraph");
  fontSize -= 10;
  para.style.fontSize = fontSize + "px";
}


//task no 1
//DOM
var main = document.getElementById("mainContent");
console.log(main.childNodes);
var classElement = document.getElementsByClassName("render");
// var classHtml = classElement;
for (i = 0; i <= 3; i++) {
    document.write(" " + classElement[i].innerHTML + "<br>");
}
//point 4 and point 5
var first_name = (document.getElementById("first-name").value = "Noorulain");
var last_name = (document.getElementById("last-name").value = "Dawood");
var main_email = (document.getElementById("email").value = "abc@gmail.com");

//part 2
//point 1
var form_content = document.getElementById("form-content");
document.write("<br>" + "Node type of id form-content is " + form_content.nodeType);
var main_lastName = document.getElementById("lastName");

//point 2
var child = main_lastName;
console.log(child);
document.write("<br>" + "Node type of id last name is " + main_lastName.nodeType);
document.write("<br>" + "Child node of id last name is " + child.childNodes.firstChild.NodeValue);
console.log(main_lastName.childNodes);

//point 3
var child_node = (child.NodeValue = "hassan ali ");
console.log(child_node);
document.write("<br>" + "Updating child of id last name is " + child_node);

//point 4
var first_child = main.firstChild;
var last_child = main.lastChild;
document.write("<br>" + "first child of id main-content  " + first_child.innerHTML);
document.write("<br>" + "Last child of id main-content   " + last_child.innerHTML);
console.log(first_child);
console.log(last_child);

//point 5
// Get next and previous siblings of id “lastName”.
var next_sibling = main_lastName.nextSibling;
document.write("<br>" + "next sibling of id lastName " + next_sibling.innerHTML);
console.log(next_sibling);
var pre_sibling = main_lastName.previousSibling;
document.write("<br>" + "previous sibling of id lastName " + pre_sibling.innerHTML);
console.log(pre_sibling);

//point 6
//Get parent node and node type of element having id “email”
var parent_email = document.getElementById("email");
document.write("<br>" + "Node type of email is  " + parent_email.nodeType);
console.log(parent_email.parentNode);
document.write("<br>" + "Parent Node  of email is  " + parent_email.parentNode.tagName);

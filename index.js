// question -1
function getPairsCount(arr, n, sum)
{
    var count = 0; 
    for (var i = 0; i < n; i++)
        for (var j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
 
    return count;
}
var arr = [ 1, 5, 7, -1, 5 ];
var n = arr.length;
var sum = 6;
document.write("QUESTION-1"+"<br>"+"Given array :" + arr+"<br>");
document.write("Count of pairs is :"
    + getPairsCount(arr, n, sum));
document.write("<br><br>")
  
//question -2

var numbers = [1, 2, 3, 4, 5];
document.write("QUESTION-2"+"<br>"+"Given array :" + numbers +"<br>");
var reversedNumbers = numbers.reverse();
document.write("reverse array :"+reversedNumbers);

console.log(reversedNumbers);  
document.write("<br><br>")  

//question-3

function left_rotate(str){

    str = str.substr(1) + str.substr(0,1);
    return str;
 }
 
 // function to check if one string is equal to another after certain rotations
 function check(str1, str2){
    if(str1.length != str2.length){
       return false;
    } 
    var k = str1.length
    while(k--){
       if(str1 == str2){
          return true;
       }
       str1 = left_rotate(str1);
    }
    return false;
 }
 
 // defining the strings
 var str1 = "abcdef" 
 var str2 = "cdefab"
 
document.write("QUESTION-3"+"<br>"+"The given strings are :"+"<br>");
document.write("string1 : " + str1 + "<br>"+"string2 : " + str2+"<br>");
 
 // calling the function 
 if(check(str1,str2)){
    document.write("Yes, we can obtain by rotating it.");
 } else{
    document.write("No, we cannot obtain by rotating it.");
 }

 document.write("<br><br>")  
 
 //question-4

 function firstNonRepeatingCharacter(str) {
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
        return char;
      }
    }
    return "none";
  }

var str = "abcabdef" 
document.write("QUESTION-4"+"<br>"+"The given string  :"+str+"<br>");
document.write("first NonRepeating Character :"+ firstNonRepeatingCharacter(str));

document.write("<br><br>")  

//question-5

function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
        if (n == 0)
        {
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        document.write("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod+"<br/>");
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
  
    // Driver code
var N = 3;
document.write("QUESTION-5"+"<br>"+"Number of tower  :"+N+"<br>");
document.write("Tower Of Hanoi :"+towerOfHanoi(N, 'A', 'C', 'B'));

document.write("<br><br>")  

//question-6

function isOperator(x)
{

    switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
        return true;
    }
    return false;
}

// Convert postfix to Prefix expression
function postToPre(post_exp)
{
    var s = [];
    var length = post_exp.length;

    // reading from right to left
    for (var i = 0; i < length; i++) {
        if (isOperator(post_exp[i])) {
            var op1 = s[s.length - 1];
            s.pop();
            var op2 = s[s.length - 1];
            s.pop();
            var temp = post_exp[i] + op2 + op1;
            s.push(temp);
        }
        else {
            s.push(post_exp[i] + "");
        }
    }

    var ans = "";
    while (s.length > 0)
        ans += s.pop();
    return ans;
}
 
var post_exp = "ABC/-AK/L-*";
document.write("QUESTION-6"+"<br>"+"Converson of postfix to prefix :"+"<br>"+"Postfix expression:"+post_exp +"<br>");
document.write("Output Prefix Expression : " + postToPre(post_exp));

document.write("<br><br>")  

//question-7

function isOperator(x)
{
    switch(x)
    {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '%':
            return true;
    }
    return false;
}

// Convert prefix to Infix expression
function convert(str)
{
    let stack = [];
    let l = str.length;
    for(let i = l - 1; i >= 0; i--)
    {
        let c = str[i];

        if (isOperator(c))
        {
            let op1 = stack[stack.length - 1];
            stack.pop()
            let op2 = stack[stack.length - 1];
            stack.pop()
            let temp = "(" + op1 + c + op2 + ")";
            stack.push(temp);
        }
        else
        {
            stack.push(c + "");
        }
    }
    return stack[stack.length - 1];
}
 
let pre_exp = "*-A/BC-/AKL";

document.write("QUESTION-7"+"<br>"+"Converson of prefix to infix :"+"<br>"+"prefix expression:"+pre_exp +"<br>");
document.write("Output infix Expression : " + convert(pre_exp));

document.write("<br><br>")  

//question-8

// Function to check if brackets are balanced
function areBracketsBalanced(expr)
{
	let stack = [];
	for(let i = 0; i < expr.length; i++)
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			stack.push(x);
			continue;
		}
		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}
	return (stack.length == 0);
}

let expr = "([{}])";


document.write("QUESTION-8"+"<br>"+"Given expression:"+expr +"<br>");
document.write("Output :"+"Brackets are  ");

if (areBracketsBalanced(expr))
	document.write("Balanced ");
else
	document.write("Not Balanced ");

document.write("<br><br>") 

//question- 9

var st = [];
function insert_at_bottom(x)
{
    if(st.length==0)
        st.push(x);
    else
    {
            var a = st.pop();
            insert_at_bottom(x);
            st.push(a);
    }
     
     
}
 
function reverse()
{
    if(st.length > 0)
        {
            var x = st.pop();
            reverse();
            insert_at_bottom(x);
        }
}
 
st.push('1');
st.push('2');
st.push('3');
st.push('4');
document.write("QUESTION-9"+"<br>");
document.write("Original Stack<br>");
 
document.write(st.join(" ")+"<br>");
 
reverse();
 
document.write("Reversed Stack<br>");
 
document.write(st.join(" "));

document.write("<br><br>") 

//question -10

class MinStack {
    constructor() {
      this.stack = [];
    }
  
    push(val) {
      let min = this.stack.length === 0 ? val : Math.min(val, this.getMin());
      this.stack.push({ val, min });
    }
  
    pop() {
      if (this.stack.length === 0) {
        return undefined;
      }
      return this.stack.pop().val;
    }
  
    top() {
      if (this.stack.length === 0) {
        return undefined;
      }
      return this.stack[this.stack.length - 1].val;
    }
  
    getMin() {
      if (this.stack.length === 0) {
        return undefined;
      }
      return this.stack[this.stack.length - 1].min;
    }
  }
  
  const minStack = new MinStack();
  minStack.push(5);
  minStack.push(2);
  minStack.push(4);
  minStack.push(1);
  
  document.write("QUESTION-10"+"<br>");
 
  document.write("Minimum element: " + minStack.getMin()); // Output: 1
 
  




 

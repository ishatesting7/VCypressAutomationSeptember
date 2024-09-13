const prompt=require("prompt-sync")({sigint:true}); 

function palindrome(string)
{

    const arrayValue = string.split('');

    const reverseArrayValue = arrayValue.reverse();

    const reverseString = reverseArrayValue.join('');

    if(string == reverseString)
    {
        console.log('It is Palindrome');
    }
    else
    {
        console.log('It is not palindrome');
    }

}

const string = prompt('Enter a String  - ');

palindrome(string);

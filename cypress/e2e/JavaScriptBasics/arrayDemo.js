let fruit = ["Apple", "Orange", "Banana"];

console.log(fruit.length);


for(let i = 0; i < fruit.length; i++)
{
    console.log(fruit[i]);

    if(fruit[i].includes(''))
    {
        console.log("It is available");
       
    }
    else
    {
        console.log("It is not available");
        
    }

    
}
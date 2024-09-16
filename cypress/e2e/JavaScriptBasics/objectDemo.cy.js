let persondetails = {
    firstname: 'Ram',
    lastname: "singh",
    age:26
}

console.log(persondetails.firstname)

let obj1 = new Object();
obj1.firstname = "Ramesh";
obj1.lastname = "Jas";
obj1.age = 29;

console.log(obj1.firstname)


console.log(persondetails.firstname)

let persondetails2 = {

    firstname: 'Ram',
    lastname: "singh",
    age:26,
    fullname: function()
    {
        return this.firstname+" "+this.lastname;
    },
    number: function()
    {
    return 102;
    }

}



console.log(persondetails2.fullname());
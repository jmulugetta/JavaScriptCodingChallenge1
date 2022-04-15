//EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.                                                       Example output: “The name Thomas is longer than John by 2 characters”

var name1 = "Jubilee";
var name2 = "Sarah";

if(name1.length > name2.length){
    console.log(`${name1} is longer than ${name2}`)
}
else {
    console.log(`${name2} is not as long`)
}
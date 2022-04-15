//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.


//making a prompt, user input
//vairable that is equal to a string
let voice = ("are you upset at me?");
console.log(voice);

//if variable(voice) is uppercase then user is shouting
if (voice === voice.toUpperCase()) {
    console.log(`User is Shouting`);
//if voice is lowercase then user is whispering
} else if (voice === voice.toLowerCase()){
    console.log(`User is Whispering`);
//if anything else than user is just speaking normally
} else {
    console.log(`User is Speaking Normally`)
}
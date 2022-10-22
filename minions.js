const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]

 
// First, he wants to test out forEachto check who's present. So as he goes down the array of minions, they should console.logthat they're here.

minions.forEach((arrayItem) => {
    console.log(arrayItem)
})

// Expected output:
// ### map
// They're all here -- great! But Gru has noticed something off about the array of minions: their names aren't capitalized. He might be a mob boss, but he does care about correct grammar! So let's go ahead and fix that for him using the mapmethod.
// Using the mapmethod, capitalize each minion's name EXCEPT kevin's because he was being sneaky and save it to a new array called capitalizedMinions

const capitalizedMinions = minions.map((item) => {
    if (item === "kevin") {
    return item;
     } else {
     const split = item.split("") 
     split[0] = split[0].toUpperCase()
     const final = split.join("")

     return final 
     
}})

console.log(capitalizedMinions)

// filter
// Uh oh! Not every minion was capitalized. Gru's not feeling too happy about that, so now he wants to test out the filtermethod to filter out the sneaky minion who didn't get capitalized.

// Use filterto filter out minions that are not capitalized and save the correctly capitalized minions to an array called actuallyCapitalizedMinions

const actuallyCapitalizedMinions = capitalizedMinions.filter((item) => {
   return item[0] === item[0].toUpperCase();
})

console.log(actuallyCapitalizedMinions)


// Use everyagain, but this time on your new actuallyCapitalizedMinionsarray, to check if they're all capitalized now

console.log(actuallyCapitalizedMinions.every((item) => {
 return item[0] === item[0].toUpperCase()
}))
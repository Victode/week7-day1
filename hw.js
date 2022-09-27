//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
dog_names = ["Max","HAS","PuRple","dog"]


function findName(string){
    if (string == 'Max') {
        return 'Matched dog_name'
    } else {
        return 'No Matches'
    }
}

//Call method here with parameters

console.log(findName(dog_string))



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// arr1 == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function evenIndex(arr) {
    for (var even = 0; even < arr.length; even += 2) {
        if( even % 2 === 0){
            arr[even] = 'even index'
        }
    }
    console.log(arr)
}
evenIndex(arr1)


//         var even = arr.splice(name => {
//             return 0, name % 2 === 0, 'even index'
//         })
//         console.log(even)
//     }


// console.log(evenIndex(arr1))
    // for (var name in arr){
        // arr.splice( 0, odd,  'even index')
    


    // for (var name in arr) {
    //     if (name % 2 === 0) {
    //         return 'even index'
    //     } else if (name % 2 === 1) {
    //         return arr
    //     }
    // } 

    // } 
// let even = arr.filter((a,i) => i % 2===1);

// console.log(odd);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



/*  -Code wars Question 1

    If/else syntax debug
    While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive.
    Unfortunately, Greg made some errors while creating the function.
    checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
    The function receives one parameter health which will always be a whole number between -10 and 10.
*/

function checkAlive(health) {
    if( health > 0) {
        return true
      } else {
        return false
      }
  }
console.log(checkAlive(5))
console.log(checkAlive(0))
  /*  -Code wars Question 2

    A hero is on his way to the castle to complete his mission. 
    However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, 
    our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and 
    move forward to fight another specific given number of dragons, will he survive?
    Return True if yes, False otherwise :)
*/

function hero(bullets, dragons) {
    need = dragons * 2
    if (bullets >= need) {
        return true
    } else {
        return false
    }
}
console.log(hero(10, 5))
console.log(hero(7, 4))
console.log(hero(4, 5))
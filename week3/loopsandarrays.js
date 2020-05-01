var peopleWhoWantToSeeMadMaxFuryRoad =[
    {
        name: "Mike",
        age: 12,
        gender: "male"
    }, {
        name: "Madeline",
        age: 80,
        gender:"female"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female"

    }, {
        name: "Sam",
        age: 30,
        gender: "male"

    }, {
        name: "Suzy",
        age: 4,
        gender: "female"

    }
];

function isOldEnough(){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ){
            console.log("oldEnough");
    }}
         else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 ){
               console.log("notOldEnough");
         }
    } 
isOldEnough();
console.log("==========");

function isOldEnoughPersonalMessage(){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max");
    }
         else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 ){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max");
         }
    } 
} 
isOldEnoughMorePersonalMessage();
console.log("==========");

function isOldEnoughPersonalMoreMessage(){
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " is old enough to see Mad Max, let in");
    }       
         else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 ){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " is not old enough to see Mad Max, don't let in");
         }
}}

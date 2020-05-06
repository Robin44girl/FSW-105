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
    }
         else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 ){
               console.log("notOldEnough");
         }
    }} 
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
isOldEnoughPersonalMessage();
console.log("==========");

function genderAllowedToSeeMadMaxFuryRoad(){
    var gender = " come ";
for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let " + gender + "in");
}       
    
    else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18 ){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let " + gender + "in");
        
     }

}}
genderAllowedToSeeMadMaxFuryRoad();
console.log("==========");

for (i = 0; i < 101 ; i++){
       if (i % 2 === 0){
           console.log( "odd");
    }
    else{
       console.log("even"); 
    }
}

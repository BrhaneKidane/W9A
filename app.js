let user_age = 20
let is_subscribed = true
let user_points = 110
if (user_age > 18 && is_subscribed){
    console.log("The user is older than 18 & is subscribed")
}
else if(user_age < 18 && !is_subscribed){
    console.log("The user is younger than 18 & isn't subscribed")

}

else if(user_age < 18 && !is_subscribed){
    console.log("The user is younger than 18 & isn't subscribed")

}

else if(user_age > 18 && !is_subscribed){
    console.log("The user is older than 18 & isn't subscribed")

}

if((user_age > 18 && is_subscribed) || user_points >=100){
    console.log("The user is older than 18, subscribed and has a points greater than 100")

}
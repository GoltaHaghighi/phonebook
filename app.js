contact = ["user1-09123456789" ,
           "user2-09987654321" ,
           "user3-09456123789"];
var bool = false;
const searchName = prompt("Search a name :");
for (let i=0; i < contact.length ;i++){
    var userName = contact[i].split("-");
    if (searchName === userName[0]) {
        console.log(`${userName[0]}'s number is ${userName[1]}`);
        bool = true;
    }
}
if (bool==false)
{
    console.log("user not found");
}
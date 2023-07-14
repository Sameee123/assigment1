const users: string[]=[];
if(users.length>0)
{
    for(const user of users)
    {
        if(user==='admin')
        {
            console.log("heloo sam, you would like to see report ");
        }

        else 
        {
            console.log("heeloo" + user.charAt(0).toUpperCase() + user.slice(1) + "thanks for logging again");
        }
    }
}

else{
    console.log("we find some user");
}
const current_users: string []=["sameer", "yousaf", "zahid" ,"shahid","saad"];

const new_users: string[]=["shahid", "zahid ", "wahid", "waleed","murshad"];

const current_users_lower=current_users.map(user=> user.toLowerCase());

for(const user of new_users)
{
    const lowercase_user=user.toLowerCase();
    if(current_users_lower.includes(lowercase_user))
    {
        console.log(`sorry, the username '${user}' is already taken: please enter new one `);
    }
    
    else
    {
        console.log(`the username'${user}' is aviable`);
    }

}
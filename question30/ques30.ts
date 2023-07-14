let usernames: string[] = ['sam', 'sameer', 'yousaf', 'saad', 'hamza'];

for (let username of usernames) {
  if (username === 'sameer') {
    console.log(`Hello sameer, would you like to see a status report?`);


  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
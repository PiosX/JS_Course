const msg = 'this is a message';

console.log(msg.length);

const newMsg = msg.toUpperCase();

console.log(newMsg);
console.log(newMsg.toLocaleLowerCase());

// 04.02.2000
// 02/04/2000

const date = new Date();

console.log(date.toLocaleDateString('en'));

const username = 'maksym';

const newUsername = username.charAt(0).toUpperCase() + username.slice(1);

console.log(newUsername);

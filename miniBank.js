// # Mini Bank Account System 
// - Users array: ```jsx const users = [
//  { name: "John", balance: 5000 }, 
// { name: "Sara", balance: 3000 },
//  { name: "Tom", balance: 7000 } 
// ];
//  ``` - Functions to: 
// 1. Deposit money. 
// 2. Withdraw money (check for sufficient balance).
//  3. Transfer money between accounts. 
// 4. Generate a report of all balances and total bank balance.

let accounts = [{ name: "John", balance: 5000 },
{ name: "Sara", balance: 3000 },
{ name: "Tom", balance: 7000 }];

// 1. Deposit money
function deposit(accountName, amount) {
    let account = accounts.find(value => value.name === accountName);
    if (account) {
        account.balance += amount;
        console.log(` ${amount}.Rs Credited to ${accountName} A/C.
        new balance : ${account.balance}.Rs`);

    }
    else {
        console.log(`account ${accountName} not found`);

    }
}
// deposit("Sara", 44000);
// deposit("Tom", 42100);
// deposit("Tomo", 42100);
// deposit("John", 441000);


// 2. Withdraw money (check for sufficient balance).

function withdraw(accountName, amount) {
    let acc = accounts.find(value => value.name === accountName);
    if (acc) {
        if (amount > acc.balance) {
            console.log(`Insuficient balance`);
        }
        else if (acc) {
            acc.balance -= amount;
            console.log(`${amount}Rs Debited from ${accountName}A/C
            Balance :${acc.balance}`);
        }
    } else {
        console.log(`${accountName}A/C Not Found`);
    }

}

withdraw("Sara", 500000)
withdraw("Sara", 500)
withdraw("Saara", 500)


// 3. Transfer money between accounts. 

function transfer(fromAccount, toAccount, amount) {
    let sender = accounts.find(value => value.name === fromAccount);
    let receiver = accounts.find(value => value.name===toAccount)

    if (!sender) {
        console.log(`Sender account "${fromAccount}" not found`);
        return;
    }
    if (!receiver) {
        console.log(`Receiver account "${toAccount}" not found`);
        return;
    }
    if (amount > sender.balance) {
        console.log(`Insufficient balance in ${fromAccount}'s account`);
        return;
    }

    sender.balance -= amount;
    receiver.balance += amount;

    console.log(`${amount} Rs transferred from ${fromAccount} to ${toAccount}`);
    console.log(`${fromAccount} balance: ${sender.balance} Rs`);
    console.log(`${toAccount} balance: ${receiver.balance} Rs`);
}

transfer("Sara","Tom",500);


function generateReport() {
    console.log(" Bank Report:");
    console.log("___________________________________");
    let totalBalance = 0;
    accounts.forEach(acc => {
        console.log(`${acc.name}: ${acc.balance} Rs`);
        totalBalance += acc.balance;
    });
    console.log("___________________________________");
    console.log(`Total Bank Balance: ${totalBalance} Rs\n`);
}
generateReport()
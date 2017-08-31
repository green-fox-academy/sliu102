'use strict';

var accounts = [
  { 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
  { 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
  { 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function accountInfo(i) {
  return accounts[i].client_name+':' +accounts[i].balance;
}

function transfer(ac_num_from, ac_num_to, balanc) {
  var check = 0;
  accounts.forEach(function(element) {
    if (element.account_number===ac_num_from) {
      check++;
      return element.balance -= balanc;
      check++;
    }else if (element.account_number===ac_num_to) {
      check++;
      return element.balance += balanc;
    }
  });

  if(check !== 2){
    console.log('404 - account not found')
  };
};
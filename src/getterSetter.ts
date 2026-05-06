// getter
// setter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

  //   // balance k set krtese
  //   addBalance(balance: number) {
  //    return this._userBalance = this._userBalance + balance;
  //   }

  // setter use kre krte chai

  set addBalance(amount: number) {
    this._userBalance = this._userBalance + amount;
  }

  //   // get krbo

  //   getBalance() {
  //     return this._userBalance;
  //   }

  // getter use kore get korte chai
  get getBalance() {
    return this._userBalance;
  }
}

const Account = new BankAccount(111, "Mezba", 20);

// Account.addBalance(100); // function call krte hsse
// Account.addBalance(60);

// console.log(Account.getBalance()); // function call krte hsse

Account.addBalance = 100;
Account.addBalance = 60;

console.log(Account.getBalance);

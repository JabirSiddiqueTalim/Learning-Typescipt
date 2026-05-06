// access >> modify

class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }

addBalance(balance: number) {
    this._userBalance = this._userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this._userBalance;
  }
}

const Account = new BankAccount(111, "Mezba", 20);

Account.addBalance(100);
Account.addBalance(50);

console.log(Account);
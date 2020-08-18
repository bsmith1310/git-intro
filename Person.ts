class Person {
  // TODO - Feature 01 in progress.
  public firstName: string;
  public lastName: string;
  private _fullName: string;
  private productCount: number;
  private wishList: any;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
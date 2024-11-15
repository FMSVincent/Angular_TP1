export class Customer {
  name: string;
  lastname: string;
  address: string;
  phone: string;
  email: string;

  constructor(
    name: string,
    lastname: string,
    address: string,
    phone: string,
    email: string
  ) {
    this.name = name;
    this.lastname = lastname;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }
}

using { cuid } from '@sap/cds/common';
namespace my.company;

@readonly
entity Roles : cuid {
    name: String;
    baseSalary: Int32;
}

@readonly
entity Departments : cuid {
    name: String;
}

entity Employees : cuid {
    firstName: String;
    lastName: String;
    email: String;
    hireDate: Date;
    salary: Int32;
    role: Association to Roles;
    department: Association to Departments;
}


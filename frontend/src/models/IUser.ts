
export interface UsersInterface {
    ID: string,
    
    NamePrefixID: number
    NamePrefix: PrefixesInterface
    FirstName: string;
    LastName: string;
    EmployeeID: number
    Employee: EmployeesInterface
    Identification: string
    Email: string;
    Password: string
    BirthDay: Date | null;
    GenderID: number
    Gender: GendersInterface
    Mobile: string
    Address: string
    ProvinceID: number
    Province: ProvincesInterface
}   
export interface ProvincesInterface {
    ID: number
    ProvinceName: string
}
export interface PrefixesInterface {
    ID: number
    PrefixName: string
}
export interface GendersInterface{
    ID: number
    GenderName: string
}
export interface EmployeesInterface {
    ID: number
    First_Name: string
    Last_Name:  string
    Email:  string
    Password:   string
}


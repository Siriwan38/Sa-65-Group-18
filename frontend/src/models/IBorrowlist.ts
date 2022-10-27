import { UsersInterface } from "./IUser";
import { EmployeesInterface } from "./IUser";

export interface BorrowListInterface{
    ID?: number;

    EquipmentID?: number;
    Equipment?: EquipmentInterface;

    MemberID?: number;
    Member?: UsersInterface;

    EmployeeID?: number;
    Employee?: EmployeesInterface;

    Amount?: number;
    BorrowTime?: Date | null;
}
// export interface EmployeeInterface {
//     ID:         number;
//     FirstName: string;
//     LastName:  string;
//     Email:      string;
//     Password:   string;
// }
export interface EquipmentInterface {
    ID:             number;
    Name:           string;
    Amount:         number;
    Time:           Date | null;

    CatagoryID:    number;
    // Catagory:       CatagoryInteraface;
    UnitID:        number;
    // Unit:           UnitInterface;
    
    EmployeeID:    number;
    Employee:       EmployeesInterface;
}
// export interface UsersInterface {
//     ID:         number,

//     // PrefixID:  number,
//     Prefix:     string,

//     FirstName: string,
//     LastName:  string,
//     Email:      string,
//     Password:   string,
//     Address:    string,
//     Birthday:   Date | null,

//     // GenderID:  number,
//     Gender:     string,
    
//     PersonalID: string,
//     Mobile:      string;
// }
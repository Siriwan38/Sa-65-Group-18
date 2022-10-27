import { UsersInterface } from "./IUser";
import { EmployeesInterface } from "./IUser";
import { EquipmentInterface } from "./IEquipment";

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

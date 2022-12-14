import { EmployeesInterface } from "./IUser";

export interface EquipmentInterface {
    ID?: number;
    Name?: string;
    Amount?: number;
    CategoryID?: number;
    Category?: CategoriesInterface;
    UnitID?: number;
    Unit?: UnitsInterface;
    Time: Date | null;
    EmployeeID?: number;
    Employee?: EmployeesInterface
  }
  
  export interface CategoriesInterface {
    ID: number,
    Name: string,
  }
  export interface UnitsInterface {
    ID: number,
    Name: string,
  }
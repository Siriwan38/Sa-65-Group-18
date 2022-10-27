import { EmployeesInterface } from "./IUser";
import { FoodOrderedsInterface } from "./IFoodorder";
import { FoodOrderedFoodSetsInterface } from "./IFoodorder";
import { FoodSetsInterface } from "./IFoodorder";
import { BookingInterface } from "./IBooking";

export interface PaymentsInterface {
    ID: number;
    Name: string;

    Bill: BillsInterface[];
}

export interface BillsInterface {
    ID: number;
    BillTime: Date;
    EmployeeID: number;
    Employee: EmployeesInterface;

    PaymentTypeID: number;
    PaymentType: PaymentsInterface;

    BookingID: number;
    Booking: BookingInterface;

    FoodOrderedID: number;
    FoodOrdered: FoodOrderedsInterface;

    FoodOrderedFoodSetsID:  number;
    FoodOrderedFoodSets:    FoodOrderedFoodSetsInterface;

    FoodSetID: number;
    FoodSet: FoodSetsInterface;

    TotalPrice: number;
}


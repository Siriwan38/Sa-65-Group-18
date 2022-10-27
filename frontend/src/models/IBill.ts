export interface UserInterface {
    ID: number;
    Name: string;
    Email: string;
    Password: string;

    Bills: BillsInterface[];
}
export interface PaymentsInterface {
    ID: number;
    Name: string;

    Bill: BillsInterface[];
}
export interface EmployeesInterface {
    ID: number;
    Name: string;
    Email: string;
    Password: string;

    Bills: BillsInterface[];
}
export interface BillsInterface {
    ID: number;
    BillTime: Date;
    EmployeeID: number;
    Employee: EmployeesInterface;

    PaymentTypeID: number;
    PaymentType: PaymentsInterface;

    BookingID: number;
    Booking : BookingsInterface;

    FoodOrderedID: number;
    FoodOrdered: FoodOrderedsInterface;

    TotalPrice: number;
}
export interface FoodOrderedsInterface {
   
    ID: number;
    Name: string;
    FoodTime: Date;
    TotalPrice: number;

    BookingID: number;
    Booking: BookingsInterface;

    FoodOrderedFoodSets: FoodOrderedFoodSetsInterface[];
}

export interface FoodOrderedFoodSetsInterface {
    ID: number;

    FoodSetID: number;
    FoodSet: FoodSetsInterface;

    FoodOrderedID: number;
    FoodOrdered: FoodOrderedsInterface;

    Quantity: number;
}
export interface FoodSetsInterface {
    ID: number;
    Name: string;
    Detail: string;
    Price: number;
}

export interface BookingsInterface {
    ID: number;
    BookingTimeStart: Date;
    BookingTimeStop: Date;
    Room: string;
    TotalPrice: number;
    
    UserID: number;
    User: UserInterface;

    FoodOrdereds: FoodOrderedsInterface[];
    
    
}

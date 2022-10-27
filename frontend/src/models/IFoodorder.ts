
/*  Interface มีเอาไว้ทำอะไร ? Ans. เป็นการกำหนดโครงสร้างของข้อมูล
    เวลาเราเรียกใช้มันจะได้หาชื่อได้ง่าย
    key ลัด : command + . => ทำ quick fiq แล้วก็กด auto import
*/

export interface FoodOrderedsInterface {
    ID: number;

    FoodTime: Date;

    FoodPaymentTypeID: number;
    FoodPaymentType: FoodPaymentTypesInterface;

    BookingID: number;
    Booking: BookingsInterface;

    FoodOrderedFoodSets: FoodOrderedFoodSetsInterface[];

    TotalPrice: number;
}

// เอาสองตารางนี้ไว้ด้วยกันเพราะมันเป็นตารางบันทึกทั้งคู่
export interface FoodOrderedFoodSetsInterface {
    ID: number;

    FoodOrderedID: number;
    FoodOrdered: FoodOrderedsInterface;

    FoodSetID: number;
    FoodSet: FoodSetsInterface;

    Quantity: number;
}

export interface BookingsInterface {
    ID: number;
    Room: string;

    BookingTimeStart: Date;
    BookingTimeStop: Date;

    MemberID: number;
    Member: UsersInterface;     //มันเป็น Object

    FoodOrdereds: FoodOrderedsInterface[];  //Interface FoodOrdered มันรับเป็น Array
}


export interface FoodPaymentTypesInterface {
    ID: number;
    Name: string;

    FoodOrdereds: FoodOrderedsInterface[];
}

export interface FoodSetsInterface {
    ID: number;

    Name: string;
    Detail: string;
    Price: number;

    FoodOrderedFoodSets: FoodOrderedFoodSetsInterface[];
}
export interface UsersInterface {

    ID: string,
   
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
    BirthDay: Date | null;
    Mobile: string;
    Identification: string;
    Address: string;
}

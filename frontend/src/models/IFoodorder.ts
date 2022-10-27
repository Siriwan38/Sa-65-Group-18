import { BookingInterface } from "./IBooking";

export interface FoodOrderedsInterface {
    ID: number;

    FoodTime: Date;

    FoodPaymentTypeID: number;
    FoodPaymentType: FoodPaymentTypesInterface;

    BookingID: number;
    Booking: BookingInterface;

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
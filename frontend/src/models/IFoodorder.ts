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

export interface FoodOrderedFoodSetsInterface {
    ID: number;

    FoodOrderedID: number;
    FoodOrdered: FoodOrderedsInterface;

    FoodSetID: number;
    FoodSet: FoodSetsInterface;

    Quantity: number;
}

export interface FoodSetsInterface {
    ID: number;

    Name: string;
    Detail: string;
    Price: number;

    FoodOrderedFoodSets: FoodOrderedFoodSetsInterface[];
}

export interface FoodPaymentTypesInterface {
    ID: number;
    Name: string;

    FoodOrdereds: FoodOrderedsInterface[];
}


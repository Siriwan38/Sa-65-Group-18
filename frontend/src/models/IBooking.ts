import { UsersInterface } from "./IUser";
import { RoomInterface } from "./IRoom";
import { FoodOrderedsInterface } from "./IFoodorder";

export interface BookingInterface {
    ID: number,
    
    BookingTimeStart: Date 
    BookingTimeStop: Date 
   
    RoomID: number;
	Room:   RoomInterface;

    UsageID: number;
	Usage:   UsageInterface;

    MemberID: number;
    Member: UsersInterface;

    FoodOrdereds: FoodOrderedsInterface[];
   }

   export interface UsageInterface{
    ID: number;
    Name: string;
    
   }

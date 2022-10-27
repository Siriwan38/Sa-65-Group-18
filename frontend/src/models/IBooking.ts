import { UsersInterface } from "./IUser";

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
   }

   export interface RoomInterface{
    ID: number; 
    Name: string;
    Type: number;
    Bulding: number;
    Serviceday: number;
    Period: number;

   }
   export interface UsageInterface{
    ID: number;
    Name: string;
    
   }

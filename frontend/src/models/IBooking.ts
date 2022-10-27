export interface BookingInterface {
    ID: number,
    
    BookingTimeStart: Date 
    BookingTimeStop: Date 
   
    RoomID: number;
	Room:   RoomInterface;

    UsageID: number;
	Usage:   UsageInterface;

    MemberID: number;
    Member: MemberInterface;
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
   export interface MemberInterface{
    ID: number;
    Member_ID: number;
	Prefix_ID: number;
	First_Name: string;
	Last_Name: string;
	Email: string; 
	Address: string;
	Birthday:   Date;
	Gender_ID: number;
	Persinal: string;
	Mobile: string;
	Province: number;
	Booking:   BookingInterface[];
}

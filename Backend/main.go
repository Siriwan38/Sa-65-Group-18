package main

import (
	"github.com/Siriwan38/Sa-65-Group-18/controller"
	controller_booking "github.com/Siriwan38/Sa-65-Group-18/controller/Booking"
	controller_borrowlist "github.com/Siriwan38/Sa-65-Group-18/controller/Borrowlist"
	controller_equipment "github.com/Siriwan38/Sa-65-Group-18/controller/Equipment"
	controller_foodorder "github.com/Siriwan38/Sa-65-Group-18/controller/Foodorder"
	controller_payment "github.com/Siriwan38/Sa-65-Group-18/controller/Payment"
	controller_room "github.com/Siriwan38/Sa-65-Group-18/controller/Room"
	"github.com/gin-gonic/gin"

	controller_user "github.com/Siriwan38/Sa-65-Group-18/controller/User"

	"github.com/Siriwan38/Sa-65-Group-18/entity"
	"github.com/Siriwan38/Sa-65-Group-18/middlewares"
)

func main() {
	entity.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())

	api := r.Group("")
	{
		protected := api.Use(middlewares.Authorizes())
		{
			//User
			// User Routes
			protected.GET("/users", controller_user.ListUsers)
			protected.GET("/user/:id", controller_user.GetUser)
			protected.POST("/users", controller_user.CreateUser)
			// Province Routes
			protected.GET("/provinces", controller_user.ListProvince)
			protected.GET("/province/:id", controller_user.GetProvince)
			protected.POST("/provinces", controller_user.CreateProvince)
			// NamePrefix Routes
			protected.GET("/nameprefixes", controller_user.ListNamePrefix)
			protected.GET("/nameprefix/:id", controller_user.GetNamePrefix)
			protected.POST("/nameprefixes", controller_user.CreateNamePrefix)
			// Gender Routes
			protected.GET("/genders", controller_user.ListGender)
			protected.GET("/gender/:id", controller_user.GetGender)
			protected.POST("/genders", controller_user.CreateGender)
			// Employee Routes
			protected.GET("/employees", controller_user.ListEmployee)
			protected.GET("/employee/:id", controller_user.GetEmployee)
			protected.POST("/employees", controller_user.CreateEmployee)

			//Booking
			protected.POST("/createbooking", controller_booking.CreateBooking)
			protected.GET("/booking", controller_booking.ListBooking)
			protected.GET("/booking/:id", controller_booking.GetBooking)
			protected.GET("/booking/member/:id", controller_booking.GetBookingByMember)
			protected.GET("/usage", controller_booking.ListUsage)
			protected.GET("/bookings/bill", controller_booking.ListBookingforBill)
			protected.GET("/bookings/bill/:id", controller_booking.GetBookingforBill)

			//Borrowlist
			protected.POST("/createborrowlist", controller_borrowlist.CreateBorrowList)
			protected.GET("/borrowlist", controller_borrowlist.ListBorrow)
			//Equipment
			// Category Routes
			protected.GET("/catagories", controller_equipment.ListCategory)
			protected.GET("/catagory/:id", controller_equipment.GetCategory)
			protected.POST("/catagories", controller_equipment.CreateCategory)
			// Unit Routes
			protected.GET("/units", controller_equipment.ListUnits)
			protected.GET("/unit/:id", controller_equipment.GetUnit)
			protected.POST("/units", controller_equipment.CreateUnit)
			// Equipment Routes
			protected.GET("/equipments", controller_equipment.ListEquipments)
			protected.GET("/equipment/:id", controller_equipment.GetEquipment)
			protected.POST("/equipment", controller_equipment.CreateEquipment)

			//FoodOrdered
			protected.GET("/foodordereds", controller_foodorder.ListFoodOrdereds)
			protected.GET("/foodordereds/booking/:id", controller_foodorder.ListFoodOrderedsByBooking)
			protected.GET("/foodordered/:id", controller_foodorder.GetFoodOrdered)
			protected.POST("/foodordereds", controller_foodorder.CreateFoodOrdered)

			// Food set Routes
			protected.GET("/foodsets", controller_foodorder.ListFoodSets)
			protected.GET("/foodset/:id", controller_foodorder.GetFoodSet)
			protected.POST("/foodsets", controller_foodorder.CreateFoodSet)

			// Food payment type Routes
			protected.GET("/foodpayment_types", controller_foodorder.ListFoodPaymentTypes)
			protected.GET("/foodpayment_type/:id", controller_foodorder.GetFoodPaymentType)
			protected.POST("/foodpayment_types", controller_foodorder.CreateFoodPaymentType)

			//Payment
			protected.GET("/bills", controller_payment.ListBill)
			protected.POST("/bills", controller_payment.Createbill)
			protected.GET("/payment_types", controller_payment.GetPaymentType)

			//Room
			protected.POST("/createroom", controller_room.CreateRoom) //
			protected.GET("/room", controller_room.ListRoom)
			protected.GET("/type", controller_room.ListType)
			protected.GET("/building", controller_room.ListBuilding)
			protected.GET("/serviceday", controller_room.ListServiceDay)
			protected.GET("/period", controller_room.ListPeriod)

		}
	}

	// Authentication Routes
	r.POST("/login/user", controller.LoginUser)
	r.POST("/login/employee", controller.LoginEmployee)

	// Run the server
	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

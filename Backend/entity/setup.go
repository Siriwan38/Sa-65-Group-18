package entity

import (
	"time"

	"golang.org/x/crypto/bcrypt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}
func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("sa-65.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	//Migrate the schema
	database.AutoMigrate(
		&Room{},
		&User{},
		&Usage{},
		&Booking{},
	)
	db = database

	password, err := bcrypt.GenerateFromPassword([]byte("123456"), 14)

	//setup User
	Member1 := User{
		Member_ID:  1001,
		Prefix_ID:  1,
		First_Name: "Wichai",
		Last_Name:  "Srisuruk",
		Email:      "ADD@gmail.com",
		Password:   string(password),
		Address:    "12 Moo 6 ...",
		Birthday:   time.Now(),
		Gender_ID:  1,
		Personal:   "1234567890098",
		Mobile:     "0812345678",
		Province:   23,
	}
	db.Model(&User{}).Create(&Member1)

	Member2 := User{
		Member_ID:  1002,
		Prefix_ID:  2,
		First_Name: "Manee",
		Last_Name:  "Srisuruk",
		Email:      "ABC@gmail.com",
		Password:   string(password),
		Address:    "699 Moo 5 ...",
		Birthday:   time.Now(),
		Gender_ID:  2,
		Personal:   "1234567893338",
		Mobile:     "0812340999",
		Province:   20,
	}
	db.Model(&User{}).Create(&Member2)

	// Setup Room
	Room1 := Room{
		Number:     "1001",
		Name:       "B1117",
		Type:       111154,
		Bulding:    6001,
		Serviceday: 711,
		Period:     701,
	}
	db.Model(&Room{}).Create(&Room1)

	Room2 := Room{
		Number:     "1002,",
		Name:       "B1115",
		Type:       12154,
		Bulding:    6002,
		Serviceday: 712,
		Period:     702,
	}
	db.Model(&Room{}).Create(&Room2)

	// Setup Usage

	Usage1 := Usage{
		Name: "Meeting",
	}
	db.Model(&Usage{}).Create(&Usage1)

	Usage2 := Usage{
		Name: "Interview",
	}
	db.Model(&Usage{}).Create(&Usage2)

	// Setup Booking
	// Booking1 := Booking{
	// 	Member: Member1,

	// 	Room: Room1,

	// 	Usage: Usage1,

	// 	BookingTimeStart: time.Now(),
	// 	BookingTimeStop:  time.Now().Add(time.Hour * 3),
	// }
	// db.Model(&Booking{}).Create(&Booking1)

}

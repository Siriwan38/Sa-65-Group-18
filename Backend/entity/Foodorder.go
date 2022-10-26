package entity

import (
	"time"

	"gorm.io/gorm"
)

type FoodPaymentType struct {
	gorm.Model //เอาไว้ hold พวก Pk (FoodPaymentTypeID)

	Name string

	//FoodOrderedID *uint
	//FoodOrdered    FoodOrdered
	FoodOrdereds []FoodOrdered `gorm:"foreignKey:FoodPaymentTypeID"`
}

type FoodSet struct {
	gorm.Model //เอาไว้ hold พวก Pk (FoodSetID)

	Name   string
	Detail string
	Price  int

	//FoodOrdered_id *uint
	//FoodOrdered    FoodOrdered

	// FFID *uint
	// FF    FoodOrdered_FoodSet

	FoodOrderedFoodSets []FoodOrderedFoodSet `gorm:"foreignKey:FoodSetID"`
}

type FoodOrderedFoodSet struct {
	gorm.Model //เอาไว้ hold พวก Pk (FF_id)

	// FoodSets       []FoodSet `gorm:"foreignKey:FF_id"`
	FoodOrderedID *uint
	FoodOrdered   FoodOrdered `references:"ID"`

	FoodSetID *uint
	FoodSet   FoodSet `references:"ID"`

	Quantity uint
}

type FoodOrdered struct {
	gorm.Model //เอาไว้ hold พวก Pk (FoodOrderedID)
	FoodTime   time.Time
	TotalPrice int

	//Member_id ทำหน้าที่เป็น fk
	// ไม่จำเป็นต้องใช้ เพราะ Member มีอยู่ใน Booking ซึ่งคนที่สั่งอาหารต้องทำการ Booking ก่อน
	// MemberID *uint
	// Member    User

	FoodPaymentTypeID *uint
	FoodPaymentType   FoodPaymentType

	BookingID *uint
	Booking   Booking

	//คสพ 1 อยู่ฝั่ง FoodOrdered
	FoodOrderedFoodSets []FoodOrderedFoodSet `gorm:"foreignKey:FoodOrderedID"`

	//FFID *uint
	//FF    FoodOrdered_FoodSet
}

/* Note. ส่วนที่ได้ทำการแก้ไขไป
1. ชื่อ Entity
2. ปรับปรุงชื่อตัวแปรที่มี ID
3. ตาราง Booking ขาด Usage นะฟลุ๊คกรุณาเพิ่ม
4. กรุณาแก้ตาราง booking เรื่อง type ของ room มันไม่ใช่ string
5. check การเอาเลขจองห้องไปโชว์อะ member เขาไม่รู้หรอกว่ารหัส booking คืออะไรอะต้องโชว์เป็นเลขห้อง
6. check ตารางหลัก ไม่ควรมีเมมเบอร์รึป่าวเพราะต้องจองก่อนถึงจะสั่งได์ (มันไม่เชื่อมกัน มันต้องเป็นวันเวย์) เชค diagram ด้วย
7. เพิ่ม Quantity ใน join table
8. */

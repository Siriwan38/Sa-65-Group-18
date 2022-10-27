package entity

import (
	"time"

	"gorm.io/gorm"
)

type Usage struct {
	gorm.Model
	Name     string
	Bookings []Booking `gorm:"foreignKey:UsageID"`
}
type Booking struct {
	gorm.Model

	MemberID *uint
	Member   User

	RoomID *uint
	Room   Room

	UsageID *uint
	Usage   Usage

	Bills        []Bill        `gorm:"foreignKey:BookingID"`
	FoodOrdereds []FoodOrdered `gorm:"foreignKey:BookingID"`

	BookingTimeStart time.Time
	BookingTimeStop  time.Time
}

package entity

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Member_ID  uint
	Prefix_ID  uint
	First_Name string
	Last_Name  string
	Email      string `gorm:"uniqueIndex"`
	Password   string `json:"-"`
	Address    string
	Birthday   time.Time
	Gender_ID  uint
	Personal   string `gorm:"uniqueIndex"`
	Mobile     string `gorm:"uniqueIndex"`
	Province   uint
	Booking    []Booking `gorm:"foreignKey:MemberID"`
}

type Room struct {
	gorm.Model
	Number     string
	Name       string
	Type       uint
	Bulding    uint
	Serviceday uint
	Period     uint
	Booking    []Booking `gorm:"foreignKey:RoomID"`
}
type Usage struct {
	gorm.Model
	Name    string
	Booking []Booking `gorm:"foreignKey:UsageID"`
}
type Booking struct {
	gorm.Model

	MemberID *uint
	Member   User

	RoomID *uint
	Room   Room

	UsageID *uint
	Usage   Usage

	BookingTimeStart time.Time
	BookingTimeStop  time.Time
}

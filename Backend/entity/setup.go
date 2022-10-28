package entity

import (
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
		//User
		&User{},
		&Gender{},
		&Province{},
		&NamePrefix{},
		&Employee{},
		//Room
		&Period{},
		&ServiceDay{},
		&Type{},
		&Building{},
		&Room{},
		//Booking
		&Usage{},
		&Booking{},
		//Epquiment
		&Category{},
		&Unit{},
		&Equipment{},
		//Foodordering&User{},
		&FoodPaymentType{},
		&FoodSet{},
		&FoodOrderedFoodSet{},
		&FoodOrdered{},
		//Payment
		&PaymentType{},
		&Bill{},
		//borrowlist
		&BorrowList{},
	)
	db = database

	// NamePrefix ----------------------------------------------------------------------------------------

	prefix1 := NamePrefix{PrefixName: "Master"}
	db.Model(&NamePrefix{}).Create(&prefix1)

	prefix2 := NamePrefix{PrefixName: "Mister"}
	db.Model(&NamePrefix{}).Create(&prefix2)

	prefix3 := NamePrefix{PrefixName: "Mistress"}
	db.Model(&NamePrefix{}).Create(&prefix3)

	prefix4 := NamePrefix{PrefixName: "Miss"}
	db.Model(&NamePrefix{}).Create(&prefix4)

	// Gender ----------------------------------------------------------------------------------------

	gender1 := Gender{GenderName: "Male"}
	db.Model(&Gender{}).Create(&gender1)

	gender2 := Gender{GenderName: "Female"}
	db.Model(&Gender{}).Create(&gender2)

	gender3 := Gender{GenderName: "Other"}
	db.Model(&Gender{}).Create(&gender3)

	//User ------------------------------
	password1, err := bcrypt.GenerateFromPassword([]byte("123456"), 14)

	user1 := User{
		FirstName: "Suphawut",
		LastName:  "Thueanklang",
		Email:     "ADD@gmail.com",
		Password:  string(password1),
	}
	db.Model(&User{}).Create(&user1)

	// Employee --------------------------------------------------------------------------------------------------------

	employee1 := Employee{
		First_Name: "Apiwat",
		Last_Name:  "Chaemcharoen",
		Email:      "KokAC19@gmail.com",
		Password:   string(password1),
	}
	db.Model(&Employee{}).Create(&employee1)

	password2, err := bcrypt.GenerateFromPassword([]byte("qwerty"), 14)
	employee2 := Employee{
		First_Name: "Suphawut",
		Last_Name:  "Thueanklang",
		Email:      "ArmST9@gmail.com",
		Password:   string(password2),
	}
	db.Model(&Employee{}).Create(&employee2)

	// Province --------------------------------------------------------------------------------------------------------

	province1 := Province{ProvinceName: "Bangkok"}
	db.Model(&Province{}).Create(&province1)

	province2 := Province{ProvinceName: "Amnat Charoen"}
	db.Model(&Province{}).Create(&province2)

	province3 := Province{ProvinceName: "Ang Thong"}
	db.Model(&Province{}).Create(&province3)

	province4 := Province{ProvinceName: "Bueng Kan"}
	db.Model(&Province{}).Create(&province4)

	province5 := Province{ProvinceName: "Buriram"}
	db.Model(&Province{}).Create(&province5)

	province6 := Province{ProvinceName: "Chachoengsao"}
	db.Model(&Province{}).Create(&province6)

	province7 := Province{ProvinceName: "Chai nat"}
	db.Model(&Province{}).Create(&province7)

	province8 := Province{ProvinceName: "Chaiyaphum"}
	db.Model(&Province{}).Create(&province8)

	province9 := Province{ProvinceName: "Chanthaburi"}
	db.Model(&Province{}).Create(&province9)

	province10 := Province{ProvinceName: "Chiang Mai"}
	db.Model(&Province{}).Create(&province10)

	province11 := Province{ProvinceName: "Chiang Rai"}
	db.Model(&Province{}).Create(&province11)

	province12 := Province{ProvinceName: "Chonburi"}
	db.Model(&Province{}).Create(&province12)

	province13 := Province{ProvinceName: "Chumphon"}
	db.Model(&Province{}).Create(&province13)

	province14 := Province{ProvinceName: "Kalasin"}
	db.Model(&Province{}).Create(&province14)

	province15 := Province{ProvinceName: "Kamphaeng Phet"}
	db.Model(&Province{}).Create(&province15)

	province16 := Province{ProvinceName: "Kanchanaburi"}
	db.Model(&Province{}).Create(&province16)

	province17 := Province{ProvinceName: "Khon Kaen"}
	db.Model(&Province{}).Create(&province17)

	province18 := Province{ProvinceName: "Krabi"}
	db.Model(&Province{}).Create(&province18)

	province19 := Province{ProvinceName: "Lampang"}
	db.Model(&Province{}).Create(&province19)

	province20 := Province{ProvinceName: "Lamphun"}
	db.Model(&Province{}).Create(&province20)

	province21 := Province{ProvinceName: "Loei"}
	db.Model(&Province{}).Create(&province21)

	province22 := Province{ProvinceName: "Lopburi"}
	db.Model(&Province{}).Create(&province22)

	province23 := Province{ProvinceName: "Mae Hong Son"}
	db.Model(&Province{}).Create(&province23)

	province24 := Province{ProvinceName: "Maha Sarakham"}
	db.Model(&Province{}).Create(&province24)

	province25 := Province{ProvinceName: "Mukdahan"}
	db.Model(&Province{}).Create(&province25)

	province26 := Province{ProvinceName: "Nakhon Nayok"}
	db.Model(&Province{}).Create(&province26)

	province27 := Province{ProvinceName: "Nakhon Pathom"}
	db.Model(&Province{}).Create(&province27)

	province28 := Province{ProvinceName: "Nakhon Phanom"}
	db.Model(&Province{}).Create(&province28)

	province29 := Province{ProvinceName: "Nakhon Ratchasima"}
	db.Model(&Province{}).Create(&province29)

	province30 := Province{ProvinceName: "Nakhon Sawan"}
	db.Model(&Province{}).Create(&province30)

	province31 := Province{ProvinceName: "Nakhon Si Thammarat"}
	db.Model(&Province{}).Create(&province31)

	province32 := Province{ProvinceName: "Nan"}
	db.Model(&Province{}).Create(&province32)

	province33 := Province{ProvinceName: "Narathiwat"}
	db.Model(&Province{}).Create(&province33)

	province34 := Province{ProvinceName: "Nong Bua Lamphu"}
	db.Model(&Province{}).Create(&province34)

	province35 := Province{ProvinceName: "Nong Khai"}
	db.Model(&Province{}).Create(&province35)

	province36 := Province{ProvinceName: "Nonthaburi"}
	db.Model(&Province{}).Create(&province36)

	province37 := Province{ProvinceName: "Pathum Thani"}
	db.Model(&Province{}).Create(&province37)

	province38 := Province{ProvinceName: "Pattani"}
	db.Model(&Province{}).Create(&province38)

	province39 := Province{ProvinceName: "Phang Nga"}
	db.Model(&Province{}).Create(&province39)

	province40 := Province{ProvinceName: "Phatthalung"}
	db.Model(&Province{}).Create(&province40)

	province41 := Province{ProvinceName: "Phayao"}
	db.Model(&Province{}).Create(&province41)

	province42 := Province{ProvinceName: "Phetchabun"}
	db.Model(&Province{}).Create(&province42)

	province43 := Province{ProvinceName: "Phetchaburi"}
	db.Model(&Province{}).Create(&province43)

	province44 := Province{ProvinceName: "Phichit"}
	db.Model(&Province{}).Create(&province44)

	province45 := Province{ProvinceName: "Phitsanulok"}
	db.Model(&Province{}).Create(&province45)

	province46 := Province{ProvinceName: "Phra Nakhon Si Ayutthaya"}
	db.Model(&Province{}).Create(&province46)

	province47 := Province{ProvinceName: "Phrae"}
	db.Model(&Province{}).Create(&province47)

	province48 := Province{ProvinceName: "Phuket"}
	db.Model(&Province{}).Create(&province48)

	province49 := Province{ProvinceName: "Prachinburi"}
	db.Model(&Province{}).Create(&province49)

	province50 := Province{ProvinceName: "Prachuap Kiri Khan"}
	db.Model(&Province{}).Create(&province50)

	province51 := Province{ProvinceName: "Ranong"}
	db.Model(&Province{}).Create(&province51)

	province52 := Province{ProvinceName: "Ratchaburi"}
	db.Model(&Province{}).Create(&province52)

	province53 := Province{ProvinceName: "Rayong"}
	db.Model(&Province{}).Create(&province53)

	province54 := Province{ProvinceName: "Roi Et"}
	db.Model(&Province{}).Create(&province54)

	province55 := Province{ProvinceName: "Sa kaeo"}
	db.Model(&Province{}).Create(&province55)

	province56 := Province{ProvinceName: "Sakon Nakhon"}
	db.Model(&Province{}).Create(&province56)

	province57 := Province{ProvinceName: "Samut Prakan"}
	db.Model(&Province{}).Create(&province57)

	province58 := Province{ProvinceName: "Samut Sakhon"}
	db.Model(&Province{}).Create(&province58)

	province59 := Province{ProvinceName: "Samut Songkhram"}
	db.Model(&Province{}).Create(&province59)

	province60 := Province{ProvinceName: "Saraburi"}
	db.Model(&Province{}).Create(&province60)

	province61 := Province{ProvinceName: "Satun"}
	db.Model(&Province{}).Create(&province61)

	province62 := Province{ProvinceName: "Sing Buri"}
	db.Model(&Province{}).Create(&province62)

	province63 := Province{ProvinceName: "Sisaket"}
	db.Model(&Province{}).Create(&province63)

	province64 := Province{ProvinceName: "Songkhla"}
	db.Model(&Province{}).Create(&province64)

	province65 := Province{ProvinceName: "Sukhothai"}
	db.Model(&Province{}).Create(&province65)

	province66 := Province{ProvinceName: "Suphan Buri"}
	db.Model(&Province{}).Create(&province66)

	province67 := Province{ProvinceName: "Surat Thani"}
	db.Model(&Province{}).Create(&province67)

	province68 := Province{ProvinceName: "Surin"}
	db.Model(&Province{}).Create(&province68)

	province69 := Province{ProvinceName: "Tak"}
	db.Model(&Province{}).Create(&province69)

	province70 := Province{ProvinceName: "Trang"}
	db.Model(&Province{}).Create(&province70)

	province71 := Province{ProvinceName: "Trat"}
	db.Model(&Province{}).Create(&province71)

	province72 := Province{ProvinceName: "Ubon Ratchathani"}
	db.Model(&Province{}).Create(&province72)

	province73 := Province{ProvinceName: "Udon Thani"}
	db.Model(&Province{}).Create(&province73)

	province74 := Province{ProvinceName: "Utthai Thani"}
	db.Model(&Province{}).Create(&province74)

	province75 := Province{ProvinceName: "Uttaradit"}
	db.Model(&Province{}).Create(&province75)

	province76 := Province{ProvinceName: "Yala"}
	db.Model(&Province{}).Create(&province76)

	province77 := Province{ProvinceName: "Yasothon"}
	db.Model(&Province{}).Create(&province77)

	//Room ------------------------------
	// setup type
	Type1 := Type{
		Name:  "Laboratory",
		Price: 3000,
	}
	db.Model(&Type{}).Create(&Type1)

	Type2 := Type{
		Name:  "Lecture",
		Price: 500,
	}
	db.Model(&Type{}).Create(&Type2)

	Type3 := Type{
		Name:  "Meeting",
		Price: 1500,
	}
	db.Model(&Type{}).Create(&Type3)

	// setup building
	Building1 := Building{
		Name: "Building Complex 1",
	}
	db.Model(&Building{}).Create(&Building1)

	Building2 := Building{
		Name: "Building Complex 2",
	}
	db.Model(&Building{}).Create(&Building2)

	Building3 := Building{
		Name: "Equipment Building Complex F7",
	}
	db.Model(&Building{}).Create(&Building3)

	// setup serviceday
	ServiceDay1 := ServiceDay{
		Day: "Monday - Friday",
	}
	db.Model(&ServiceDay{}).Create(&ServiceDay1)

	ServiceDay2 := ServiceDay{
		Day: "Saturday - Sunday",
	}
	db.Model(&ServiceDay{}).Create(&ServiceDay2)

	// setup period
	Period1 := Period{
		Time: "09:00 - 12:00",
	}
	db.Model(&Period{}).Create(&Period1)

	Period2 := Period{
		Time: "13:00 - 16:00",
	}
	db.Model(&Period{}).Create(&Period2)

	Period3 := Period{
		Time: "17:00 - 20:00",
	}
	db.Model(&Period{}).Create(&Period3)

	//Booking-----------------------------------------------
	// Setup Usage

	Usage1 := Usage{
		Name: "Meeting",
	}
	db.Model(&Usage{}).Create(&Usage1)

	Usage2 := Usage{
		Name: "Interview",
	}
	db.Model(&Usage{}).Create(&Usage2)

	//Equipments

	// --- Category Data
	electricalappliance := Category{
		Name: "Electricalappliance",
	}
	db.Model(&Category{}).Create(&electricalappliance)

	stationery := Category{
		Name: "Stationery",
	}
	db.Model(&Category{}).Create(&stationery)

	furniture := Category{
		Name: "Furniture",
	}
	db.Model(&Category{}).Create(&furniture)

	// Unit Data
	machine := Unit{
		Name: "Machine",
	}
	db.Model(&Unit{}).Create(&machine)

	stick := Unit{
		Name: "Stick",
	}
	db.Model(&Unit{}).Create(&stick)

	chair := Unit{
		Name: "Chair",
	}
	db.Model(&Unit{}).Create(&chair)

	//Foodorder ------------------------------
	// --- FoodSet Data
	SnackBox := FoodSet{
		Name:   "Snack Box",
		Detail: "Classic Bakery and Chabaa",
		Price:  35,
	}
	db.Model(&FoodSet{}).Create(&SnackBox)

	CoffeeBreak := FoodSet{
		Name:   "Coffee Break",
		Detail: "Bakery, Nescafe and Coffeemate",
		Price:  40,
	}
	db.Model(&FoodSet{}).Create(&CoffeeBreak)

	PremiumBakery := FoodSet{
		Name:   "Premium Bakery",
		Detail: "Premium Bakery, Classic Bakery and Chabaa",
		Price:  65,
	}
	db.Model(&FoodSet{}).Create(&PremiumBakery)

	// FoodPaymentType Data
	PromptPay := FoodPaymentType{
		Name: "Prompt Pay",
	}
	db.Model(&FoodPaymentType{}).Create(&PromptPay)

	BankTransfer := FoodPaymentType{
		Name: "Bank transfer",
	}
	db.Model(&FoodPaymentType{}).Create(&BankTransfer)

	Cash := FoodPaymentType{
		Name: "Cash",
	}
	db.Model(&FoodPaymentType{}).Create(&Cash)

	//payment----------------------------------
	//PaymentType
	PaymentType1 := PaymentType{
		Name: "เงินสด",
	}
	db.Model(&PaymentType{}).Create(&PaymentType1)
	PaymentType2 := PaymentType{
		Name: "ธนาคาร A",
	}
	db.Model(&PaymentType{}).Create(&PaymentType2)
	PaymentType3 := PaymentType{
		Name: "ธนาคาร B",
	}
	db.Model(&PaymentType{}).Create(&PaymentType3)
}

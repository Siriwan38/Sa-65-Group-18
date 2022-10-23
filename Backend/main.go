package main

import (
	"github.com/gin-gonic/gin"
	"github.com/siriwan38/sa-65-example/controller"
	"github.com/siriwan38/sa-65-example/entity"
	"github.com/siriwan38/sa-65-example/middlewares"
)

func main() {
	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())

	api := r.Group("")
	{
		protected := api.Use(middlewares.Authorizes())
		{
			protected.POST("/createbooking", controller.CreateBooking)
			protected.GET("/booking", controller.ListBooking)
			protected.GET("/room", controller.ListRoom)
			protected.GET("/usage", controller.ListUsage)
			protected.GET("/member/:id", controller.GetMember)

		}
	}
	r.POST("/login", controller.Login)

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

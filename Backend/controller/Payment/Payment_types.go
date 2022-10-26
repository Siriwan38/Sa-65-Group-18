package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/siriwan38/sa-65-example/entity"
)

// GET /Payment Types  //การส่งข้อมูล
func GetPaymentType(c *gin.Context) {
	var paymentType []entity.PaymentType
	if err := entity.DB().Raw("SELECT * FROM payment_types").Scan(&paymentType).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": paymentType})
}

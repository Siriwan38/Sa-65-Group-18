package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/siriwan38/sa-65-example/entity"
)

func ListBuilding(c *gin.Context) {
	var Building []entity.Building
	if err := entity.DB().Table("buildings").Find(&Building).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": Building})
}

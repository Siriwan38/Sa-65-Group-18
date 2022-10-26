package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/siriwan38/sa-65-example/entity"
)

func ListType(c *gin.Context) {
	var Type []entity.Type
	if err := entity.DB().Table("types").Find(&Type).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": Type})
}

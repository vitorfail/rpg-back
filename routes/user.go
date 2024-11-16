package routes

import (
	"rpg-back/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoutes(r *gin.Engine) {
	r.POST("/register", controllers.CreateUser)
	r.GET("/users", controllers.GetUsers)
	r.GET("/", controllers.Nada)
}

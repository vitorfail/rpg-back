package main

import (
	"log"
	"net/http"
	"rpg-back/config"
	"rpg-back/models"
	"rpg-back/routes"

	"github.com/gin-gonic/gin"
	"github.com/vercel/go-bridge/go/bridge"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	// Conectar ao banco de dados
	config.ConnectDatabase()

	// Realizar a migração automática das tabelas
	if err := config.DB.AutoMigrate(&models.User{}, &models.Aparencia{}, &models.Classes{}, &models.Magic{}, &models.Pontos{}); err != nil {
		log.Fatal("Erro ao migrar as tabelas:", err)
	}

	// Criar o roteador Gin
	router := gin.Default()

	// Registrar as rotas
	routes.UserRoutes(router)

	// Adaptar o roteador Gin para funcionar com Vercel
	bridge.New(router).ServeHTTP(w, r)
}

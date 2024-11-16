package main

import (
	"log"
	"rpg-back/config"
	"rpg-back/models" // Certifique-se de importar o pacote que contém seus modelos
	"rpg-back/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	// Conectar ao banco de dados
	config.ConnectDatabase()

	// Realizar a migração automática das tabelas
	if err := config.DB.AutoMigrate(&models.User{}, &models.Aparencia{}, &models.Classes{}, &models.Magic{}, &models.Pontos{}); err != nil {
		log.Fatal("Erro ao migrar as tabelas:", err)
	}

	// Iniciar o servidor
	r := gin.Default()

	// Registrar as rotas
	routes.UserRoutes(r)

	log.Println("Servidor rodando em http://localhost:8080")

	// Iniciar o servidor na porta 8080
	if err := r.Run(":8080"); err != nil {
		log.Fatal("Erro ao iniciar o servidor:", err)
	}
}

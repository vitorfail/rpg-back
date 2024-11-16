package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	// Carregar variáveis do arquivo .env
	err := godotenv.Load()
	if err != nil {
		log.Println("Arquivo .env não encontrado. Usando variáveis de ambiente do sistema.")
	}

	// Obter a URL do banco de dados
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		log.Fatal("A variável DATABASE_URL não está configurada")
	}

	// Conectar ao banco de dados
	database, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Erro ao conectar no banco de dados:", err)
	}

	DB = database
	log.Println("Conexão com o banco de dados estabelecida.")
}

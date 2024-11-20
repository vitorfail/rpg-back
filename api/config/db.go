package config

import (
	"database/sql"
	"log"
	"os"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

// InitDB inicializa a conexão com o banco de dados PostgreSQL
func InitDB() *sql.DB {
	// Carrega as variáveis de ambiente do arquivo .env
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Erro ao carregar o arquivo .env: %v", err)
	}

	// Lê a URL do banco de dados da variável de ambiente
	databaseURL := os.Getenv("DATABASE_URL")
	if databaseURL == "" {
		log.Fatal("DATABASE_URL não encontrada no arquivo .env")
	}

	// Conecta ao banco de dados
	db, err := sql.Open("postgres", databaseURL)
	if err != nil {
		log.Fatalf("Erro ao abrir conexão com o banco: %v", err)
	}
    db.SetMaxOpenConns(25)
    db.SetMaxIdleConns(25)
	// Testa a conexão
	err = db.Ping()
	if err != nil {
		log.Fatalf("Erro ao conectar no banco: %v", err)
	}

	log.Println("Conexão com o banco de dados estabelecida!")
	return db
}

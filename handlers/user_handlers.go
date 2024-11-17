package handlers

import (
	"time"
	"log"
	"database/sql"
	"encoding/json"
	"net/http"

	"rpg-back/models"
)

// CreateUser insere um novo usuário no banco de dados
func CreateUser(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var user models.User
		if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
			http.Error(w, "Dados inválidos", http.StatusBadRequest)
			return
		}
		start := time.Now()

		sqlStatement := `INSERT INTO users (username, password, created_at, updated_at) VALUES ($1, $2, NOW(), NOW()) RETURNING id`
		err := db.QueryRow(sqlStatement, user.Username, user.Password).Scan(&user.ID)
		if err != nil {
			log.Printf("Erro ao inserir usuário no banco de dados: %v", err)
			http.Error(w, "Erro ao criar usuário", http.StatusInternalServerError)
			return
		}
		duration := time.Since(start)

		// Imprime o tempo de execução
		log.Printf("Tempo de execução para criar o usuário: %v", duration)
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(user)
	}
}
// CreateUser insere um novo usuário no banco de dados
func Nada(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		response := map[string]string{
			"message": "Epa paizão, não usamos essa porta :)",
		}

		// Define o cabeçalho da resposta como JSON
		w.Header().Set("Content-Type", "application/json")
		
		// Codifica o JSON e envia como resposta
		json.NewEncoder(w).Encode(response)	
	}
}

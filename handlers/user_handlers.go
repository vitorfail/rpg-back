package handlers

import (
	"time"
	"log"
	"database/sql"
	"encoding/json"
	"net/http"
	"github.com/dgrijalva/jwt-go"
	"rpg-back/models"
	"strings"
)
var jwtKey = []byte("amazonéputadecarrroabertopelosacodogildaserranarutoeshippuden")

// Função para gerar o JWT
func generateJWT(user models.User) (string, error) {
	// Define os dados do payload
	claims := &jwt.StandardClaims{
		Subject:   user.Username,     // Nome do usuário ou qualquer dado relevante
		Id:        string(user.ID),    // ID do usuário
		Issuer:    "seu_issuer",      // Identificador da origem do token
		ExpiresAt: time.Now().Add(24 * time.Hour).Unix(),  // Defina o tempo de expiração do token
	}

	// Criação do token com o método de assinatura HS256
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// Assina o token com a chave secreta
	signedToken, err := token.SignedString(jwtKey)
	if err != nil {
		return "", err
	}
	return signedToken, nil
}
// Função para enviar respostas de erro em JSON
func sendError(w http.ResponseWriter, statusCode int, message string, details string) {
	if strings.Contains(details, "duplicate"){
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(statusCode)
		errorResponse := map[string]string{
			"error":   message,
			"details": "NAME EXIST",
		}
		json.NewEncoder(w).Encode(errorResponse)
	}else{
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(statusCode)
		errorResponse := map[string]string{
			"error":   message,
			"details": details,
		}
		json.NewEncoder(w).Encode(errorResponse)
	}

}
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
			sendError(w, http.StatusInternalServerError, "Erro ao criar usuário", err.Error())
			return
		}
		duration := time.Since(start)

		// Imprime o tempo de execução
		log.Printf("Tempo de execução para criar o usuário: %v", duration)
		token, err := generateJWT(user)
		if err != nil {
			log.Printf("Erro ao gerar JWT: %v", err)
			http.Error(w, "Erro ao gerar token", http.StatusInternalServerError)
			return
		}

		// Defina o cabeçalho da resposta
		w.Header().Set("Content-Type", "application/json")
		// Retorne o token JWT na resposta
		json.NewEncoder(w).Encode(map[string]string{"token": token})
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

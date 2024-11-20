package main

import (
	"log"
	"net/http"

	"rpg-back/config"
	"rpg-back/handlers"

	"github.com/gorilla/mux"
)

func main() {
	// Inicializa o banco de dados
	db := config.InitDB()
	defer db.Close()

	// Configura as rotas
	r := mux.NewRouter()
	r.HandleFunc("/users", handlers.CreateUser(db)).Methods("POST")
	r.HandleFunc("/", handlers.Nada(db)).Methods("GET")
	// Inicia o servidor
	log.Println("Servidor rodando na porta 8080...")
	log.Fatal(http.ListenAndServe(":8080", r))
}

package models
import (
	"time"
)
type Aparencia struct {
	ID      uint   `gorm:"primaryKey;autoIncrement"`
	IDUser  uint   `gorm:"not null"`
	Sexo    string
	Peso    int
	Altura  int
	Raca    string
	CorPele string
	CorPelo string
	Chapeu  string
	Barba   string
	CreatedAt time.Time `gorm:"autoCreateTime;not null"` // Campo auto gerado
	UpdatedAt time.Time `gorm:"autoUpdateTime;not null"`
}

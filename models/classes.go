package models
import (
	"time"
)
type Classes struct {
	ID         uint   `gorm:"primaryKey;autoIncrement"`
	IDUser     uint   `gorm:"not null"`
	Nome       string
	Classe     string
	Subclasse  string
	Talentos   []int `gorm:"type:integer[]"`
	Passivas   []int `gorm:"type:integer[]"`
	Items      []int `gorm:"type:integer[]"`
	XP         string
	Nivel      string
	Alinhamento string
	CreatedAt time.Time `gorm:"autoCreateTime;not null"` // Campo auto gerado
	UpdatedAt time.Time `gorm:"autoUpdateTime;not null"`

}
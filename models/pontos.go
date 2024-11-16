package models
import (
	"time"
)
type Pontos struct {
	ID          uint   `gorm:"primaryKey;autoIncrement"`
	IDUser      uint   `gorm:"not null"`
	Vida        int
	Inspiracao  int
	Forca       int
	Destreza    int
	Constituicao int
	Inteligencia int
	Sabedoria    int
	Carisma      int
	CreatedAt time.Time `gorm:"autoCreateTime;not null"` // Campo auto gerado
	UpdatedAt time.Time `gorm:"autoUpdateTime;not null"`

}

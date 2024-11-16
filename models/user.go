package models
import (
	"time"
)

type User struct {
	ID       uint   `gorm:"primaryKey;autoIncrement"`
	Username string `gorm:"unique;not null"`
	Password string `gorm:"not null"`
	CreatedAt time.Time `gorm:"autoCreateTime;not null"` // Campo auto gerado
	UpdatedAt time.Time `gorm:"autoUpdateTime;not null"`
}

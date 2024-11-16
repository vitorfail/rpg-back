package models
import (
	"time"
)
type Magic struct {
	ID      uint   `gorm:"primaryKey;autoIncrement"`
	IDUser  uint   `gorm:"not null"`
	Magias0 []int  `gorm:"type:integer[]"`
	Magias1 []int  `gorm:"type:integer[]"`
	Magias2 []int  `gorm:"type:integer[]"`
	Magias3 []int  `gorm:"type:integer[]"`
	Magias4 []int  `gorm:"type:integer[]"`
	Magias5 []int  `gorm:"type:integer[]"`
	Magias6 []int  `gorm:"type:integer[]"`
	Magias7 []int  `gorm:"type:integer[]"`
	Magias8 []int  `gorm:"type:integer[]"`
	Magias9 []int  `gorm:"type:integer[]"`
	CreatedAt time.Time `gorm:"autoCreateTime;not null"` // Campo auto gerado
	UpdatedAt time.Time `gorm:"autoUpdateTime;not null"`

}
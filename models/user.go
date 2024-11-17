package models
import(
	"time"
)
// User representa o modelo de usuário no sistema
type User struct {
	ID    int    `json:"id"`
	Username  string `json:"username"`
	Password string `json:"password"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

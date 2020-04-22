package store

import (
	"database/sql"
	_ "github.com/lib/pq"
)

type Store struct {
	config *Config
	db     *sql.DB
}

///создаем новый репозиторий
func New(config *Config) *Store {
	return &Store{
		config: config,
	}
}

//Открываем репозиторий
func (s *Store) Open() error {

	db, err := sql.Open("postgres", s.config.DatabaseURL)
	if err != nil {
		return err
	}
	if err := db.Ping(); err != nil {
		return err
	}
	s.db = db
	return nil
}

// зактрываем репозиторий
func (s *Store) Close() {
	_ = s.db.Close()
}

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('database.db');

// Types

// Función para inicializar la base de datos
const initDatabase = () => {
  db.transaction(tx => {
    // Crea la tabla si no existe
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);'
    );
  });
};

// Función para agregar un elemento a la base de datos
const addItem = (name, callback) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO items (name) VALUES (?);', [name], (_, { rowsAffected }) => {
      if (rowsAffected > 0) {
        callback(true);
      } else {
        callback(false);
      }
    });
  });
};

// Función para obtener todos los elementos de la base de datos
const getItems = callback => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM items;', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};

export { initDatabase, addItem, getItems };

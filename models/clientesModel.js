// Arquivo: models/clientesModel.js
const db = require('../config/db');  // Conexão com o banco

const Clientes = {
    // Função para obter todos os clientes
    getAllCliente: (callback) => {
        const query = 'SELECT * FROM clientes';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);  // Retorna erro se houver falha na consulta
            }
            callback(null, results);  // Retorna todos os resultados dos clientes
        });
    },

    // Função para obter um cliente por ID (Usando 'cod' como chave primária)
    getClienteById: (id, callback) => {
        const query = 'SELECT * FROM clientes WHERE cod = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);  // Retorna o erro se houver
            }
            callback(null, results[0] || null); // Retorna o cliente ou null se não encontrado
        });
    },

    // Função para obter um cliente por código (caso seja necessário)
    getClienteByCod: (clienteCod, callback) => {
        const query = 'SELECT * FROM clientes WHERE cod = ?';
        db.query(query, [clienteCod], (err, results) => {
            if (err) {
                return callback(err);  // Retorna erro se houver
            }
            callback(null, results[0]);  // Retorna o cliente encontrado
        });
    },

    // Criar um novo cliente
    createCliente: (clienteData, callback) => {
        const query = `
            INSERT INTO clientes (nome, genero, endereco, fone, email, data_de_nascimento)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        db.query(query, [
            clienteData.nome,
            clienteData.genero,
            clienteData.endereco,
            clienteData.fone,
            clienteData.email,
            clienteData.data_de_nascimento
        ], (err, result) => {
            if (err) {
                return callback(err);  // Retorna o erro se houver
            }
            callback(null, result.insertId);  // Retorna o ID do cliente inserido
        });
    },

    // Atualizar cliente
    updateCliente: (clienteCod, clienteData, callback) => {
        const query = `
            UPDATE clientes
            SET nome = ?, genero = ?, endereco = ?, fone = ?, email = ?, data_de_nascimento = ?
            WHERE cod = ?
        `;
        db.query(query, [
            clienteData.nome,
            clienteData.genero,
            clienteData.endereco,
            clienteData.fone,
            clienteData.email,
            clienteData.data_de_nascimento,
            clienteCod
        ], (err, result) => {
            if (err) {
                return callback(err);  // Retorna erro se houver
            }
            callback(null);  // Sucesso na atualização
        });
    },

    // Deletar um cliente
    deleteCliente: (clienteCod, callback) => {
        const query = 'DELETE FROM clientes WHERE cod = ?';
        db.query(query, [clienteCod], (err, result) => {
            if (err) {
                return callback(err);  // Retorna erro se houver
            }
            callback(null);  // Sucesso na exclusão
        });
    }
};

module.exports = Clientes;

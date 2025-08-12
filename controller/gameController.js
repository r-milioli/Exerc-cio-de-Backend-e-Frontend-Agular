const db = require('../config/db')


//exibir os dados da tabela game
exports.getAll = (req, res) =>{
    const sql = 'select * from game'
    db.query(sql, (erro, resultado) =>{
        if(erro) return res.status(500).json({erro: erro})
            res.json({resultado})
        
    })
}

//exibir game por id

exports.get = (req, res) => {
    const {id} = req.params;
    const sql = 'select * from game where id = ?'
    db.query(sql, [id], (erro, resultado) => {
        if(erro) return res.status(500).json({erro: erro})
           if(resultado.length === 0) 
            return res.status(404).json({erro: 'Produto não encontrado!'})
        res.status(200).json({resultado})
    })
}

//criar registros na tabela game

exports.create = (req, res) => {
    const {nome, tipo, ano} = req.body;
    const sql = 'insert into game (nome, tipo, ano) values (?, ?, ?)'
    db.query(sql, [nome, tipo, ano], (erro) =>{
        if(erro) return res.status(500).json({erro: erro})
            res.status(200).json({mensagem: 'Jogo cadastrado com suqcesso!!'})
    })
}

 //atualizar registros da tabela game7

 exports.update = (req, res) => {
    const {id} = req.params;
    const {nome, tipo, ano} = req.body;
    const sql = 'update game set nome = ?, tipo = ?, ano = ? where id = ?'

    db.query(sql, [nome, tipo, ano, id], (erro) => {
        if(erro) return res.status(500).json({erro: erro})
            res.status(200).json({mensagem: 'Jogo atualizado com sucesso!!'})
    })
 }

  // Excluir registros da tabela jogo

  exports.delete = (req, res) => {
    const {id} = req.params;
    const sql = 'delete from game where id = ?'

    db.query(sql, [id], (erro) => {
        if(erro) return res.status(500).json({erro: erro})
            res.status(200).json({mensagem: 'Jogo excluido com sucesso!!'})
    })
  }
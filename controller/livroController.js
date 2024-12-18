import livro from "../src/models/livro.js"
import {autor} from "../src/models/autor.js"


class livroController{


    static async listarLivros (req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }catch(erro){
            res.status(500).json({message:`${erro-message} - Falha na requisição`});
        }
    }

    static async listarLivroPorId (req, res) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado);
        }catch(erro){
            res.status(500).json({message:`${erro-message} - Falha na requisição do livro`});
        }
    }

    static async cadastrarLivro (req, res) {
        try{
            const novoLivro =  await livro.create(req.body);
            res.status(201).json({message: "Livro criado com sucesso", livro: novoLivro});
        }catch(erro){
            res.status(500).json({message:`${erro-message} - Falha ao cadastrar o novo livro`});
        }
    }

    static async atualizarLivro (req, res) {
        try{
            const id = req.params.id;
             await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado com sucesso"});
        }catch(erro){
            res.status(500).json({message:`${erro-message} - Falha ao atualizar o livro`});
        }
    }

    static async deletarLivro (req, res) {
        try{
            const id = req.params.id;
             await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro excluido com sucesso"});
        }catch(erro){
            res.status(500).json({message:`${erro-message} - Falha ao excluir o livro`});
        }
    }

    static async listarLivroPorEditora (res, req) {
        const editora = req.query.editora ;
        try {
            const livroPorEditora = await livro.find({editora:editora});
            res.status(200).json(livroPorEditora)
        } catch (erro) {
            res.status(500).json({message:`${erro-message} - Falha na requisição da editora`});
        }
    }
};


export default livroController;
import { Request, Response } from "express";
import { Usuario } from "../models/Usuario";
import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { Validacoes } from "../services/Validations";

export class UsuarioController {

    private static usuarioRepository = new UsuarioRepository();
    static validacoes = new Validacoes();

    cadastraUsuario(req: Request, res: Response) {

        const { nome, email, senha } = req.body;

        UsuarioController.validacoes.validaCorpoRequisicao({ nome, email, senha })
            ?   (
                    UsuarioController.usuarioRepository.adicionaUsuario(new Usuario(nome, email, senha)),
                    res.status(201).json({ msg: "Usuario cadastrado", data: new Usuario(nome, email, senha) })
                )
            : res.status(201).json({ msg: "Requisição mal formada!", data: [] })
    }

    recuperarUsuarios(req: Request, res: Response): Response {

        return res.status(200).json({ data: UsuarioController.usuarioRepository.recuperaUsuarios() })
    }

}
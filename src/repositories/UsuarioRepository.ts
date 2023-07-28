import { Usuario } from "../models/Usuario"

export class UsuarioRepository {

    static ListaUsuario: Usuario[] = [];

    adicionaUsuario(usuario: Usuario) {

        UsuarioRepository.ListaUsuario.push(usuario);
    }

    recuperaUsuarios(): Usuario[] {
        return UsuarioRepository.ListaUsuario;
    }

}
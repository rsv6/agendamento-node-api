import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

export class UsuarioRouters {

    private router: Router = Router();
    private usuario = new UsuarioController();

    start() {
        return this.router
            .post('/api/usuario', this.usuario.cadastraUsuario)
            .get('/api/usuario', this.usuario.recuperarUsuarios)
    }

}
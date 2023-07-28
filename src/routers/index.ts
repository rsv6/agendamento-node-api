import { Router } from "express";
import { UsuarioRouters } from "./UsuarioRouters";

export class AppRouters {
    private router: Router = Router();
    usuario = new UsuarioRouters();

    start() {
        return this.router
            .use(this.usuario.start())
    }
}
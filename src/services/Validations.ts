
interface IValidacaoProp {
    nome? : string;
    email? : string;
    senha? : string;
}

export class Validacoes {

    public validaCorpoRequisicao(body: IValidacaoProp) : boolean {
        if (!body.nome || !body.email || !body.senha) {
            return false;
        }

        return true;
    }
}
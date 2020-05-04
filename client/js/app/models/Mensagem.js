class Mensagem {
    constructor(texto = '') {
        this._texto = texto;
    }

    get txto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }
}
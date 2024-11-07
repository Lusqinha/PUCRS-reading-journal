export class LocalStorageController {
    constructor(chave) {
        this.chave = chave;
        this.getLocalStorage = () => JSON.parse(localStorage.getItem(this.chave)) ?? [];
        this.setLocalStorage = (data) => localStorage.setItem(this.chave, JSON.stringify(data));
    }

    listar() {
        return this.getLocalStorage();
    }

    adicionar(data) {
        const itens = this.listar();
        itens.push(data);
        this.setLocalStorage(itens);
    }

    remover(index) {
        const itens = this.getLocalStorage();
        itens.splice(index, 1);
        this.setLocalStorage(itens);
    }

    atualizar(index, data) {
        const itens = this.getLocalStorage();
        itens[index] = data;
        this.setLocalStorage(itens);
    }

    validar(data) {
        if (data.titulo === "" || data.autor === "" || data.genero === "" || data.data === "") {
            return false;
        }
        return true;
    }
};

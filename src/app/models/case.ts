export class Case {
    id: number;
    texte: string;
    state: boolean;

    constructor() {
        this.id = 0;
        this.texte = "";
        this.state = false;
    }
}
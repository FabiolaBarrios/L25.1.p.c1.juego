export default class Cl_juego {
    constructor(de){
        this.decision = de
    }

    set decision(d){
        this._decision = +d
    }

    get decision(){
        return this._decision
    }
}
export default class Cl_futbol {
    constructor(){
        this.contJGan = 0
        this.contJtot = 0
    }

    procesarJuego(j){
        if(j.decision == 1){
            this.contJGan++
        }

        this.contJtot++
    }

    porcentajeJuegoGan(){
        return (this.contJGan / this.contJtot) * 100
    }
}
import Cl_juego from "./Cl_juego.js";
import Cl_futbol from "./CL_futbol.js";

let juego1 = new Cl_juego(1)
let juego2 = new Cl_juego(1)
let juego3 = new Cl_juego(0)
let juego4 = new Cl_juego(1)
let juego5 = new Cl_juego(0)
let juego6 = new Cl_juego(1)
let juego7 = new Cl_juego(1)

let futbol = new Cl_futbol()

futbol.procesarJuego(juego1)
futbol.procesarJuego(juego2)
futbol.procesarJuego(juego3)
futbol.procesarJuego(juego4)
futbol.procesarJuego(juego5)
futbol.procesarJuego(juego6)
futbol.procesarJuego(juego7)

alert(`Ganaste el ${futbol.porcentajeJuegoGan().toFixed(2)}% de los juegos`)
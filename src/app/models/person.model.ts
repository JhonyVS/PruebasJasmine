import {Fecha} from './fecha.models';
export class Persona {

    private nombre: string;
    private apellido: string;
    private fecha: Fecha;

    constructor(
         nombre: string,
         apellido: string,
         fecha: Fecha
    ) { 
        this.nombre=nombre;
        this.apellido=apellido;
        this.fecha=fecha;
    }
    getNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }
    getEdadActual(): number {
        return this.fecha.getEdad();
    }
    
}
import {Fecha} from './fecha.models';
export class Persona {

    private nombre: string;
    private apellido: string;
    private fecha: Fecha;

    public constructor(
         nombre: string,
         apellido: string,
         fecha: Fecha
    ) { 
        this.nombre=nombre;
        this.apellido=apellido;
        this.fecha=fecha;
    }
    public getNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }
    public getEdadActual(): number {
        return this.fecha.getEdad();
    }
    
}

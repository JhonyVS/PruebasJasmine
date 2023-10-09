export class Fecha{

    private dia: number;
    private mes: number;
    private anio: number;
   
    
    public constructor (
        dia: number,
        mes: number,
        anio: number 
    ){ 
        if(this.validarFecha(dia,mes,anio)){
            this.dia=dia;
            this.mes=mes;
            this.anio=anio;
        } else throw new Error('Error al construir la fecha.');

    }

    public validarFecha(dia: number, mes: number, anio: number):boolean {
        if(anio>1900 && anio<=2023){
            if(mes>0 && mes <=12){
                if(mes==2){
                    if( dia > 0 && dia <= 28){
                        return true;
                    }
                }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
                    if(dia <= 30){
                        return true;
                    }
                }else if(dia <= 31){
                    return true;
                }
            }
        }
        return false;
    }

    public getEdad() :number {
        return 2023-this.anio;
    }
    public getFechaText():string{
        return `${this.dia}/${this.mes}/${this.anio}`;

    }

    public cambiarFecha(dia:number,mes:number,anio:number):boolean {
        if(this.validarFecha(dia,mes,anio)){
            this.dia = dia;
            this.mes=mes;
            this.anio=anio;
            return true;
        }
        return false;
    }
    private lanzarError() {
        throw new Error("Este es un mensaje de error personalizado.");
      }
      
    public crearError(){
        try {
            this.lanzarError();
          } catch (error) {
            console.error("Se ha producido un error:");
          }
    }
      
      
    
}
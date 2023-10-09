import { Fecha } from './fecha.models';
import { Persona } from './person.model';


describe('Pruebas aplicando jasmine', () => {

    /**
     * ACA REALIZAREMOS LAS PRUEBAS PARA LA CLASE FECHA
     */
    describe('Pruebas de la clase Fecha', () => {
        it('Prueba de fecha correcta', ()=>{
            const fecha1 = new Fecha(2,2,2020);
            //console.log(fecha1.getFechaText());
            expect(fecha1.getFechaText()).toEqual("2/2/2020");
        })

        it('Prueba de cambio de fecha, aplicando validaciones', ()=>{
            const fecha2 = new Fecha(8,1,1990);
            //ahora modificaremos el mes a febrero y deberia ser posible
            expect(fecha2.cambiarFecha(8,2,1990)).toBe(true);
        })
        it('Prueba de cambio de fecha, aplicando validaciones', ()=>{
            const fecha3 = new Fecha(8,2,1990);
            //ahora modificaremos el dia a 30 y no deberia ser posible
            expect(fecha3.cambiarFecha(30,2,1990)).toBe(true);
        })
        
        describe("Ejemplo de lanzamiento de error en Jasmine", () => {
            it("debería lanzar un error", () => {
              // Usamos la función throw para lanzar un error
              expect(() => {
                throw new Error("Este es un mensaje de error personalizado");
              }).toThrowError("Este es un mensaje de error personalizado");
            });
          });
    });


    /**
     * ACA REALIZAREMOS LAS PRUEBAS PARA LA CLASE PERSONA
     */
    describe('Pruebas de la clase Persona', () => {
        it('Vamos a calcular la edad de una persona', () => {
            const fechaJPP = new Fecha(8,1,2001);
            // CREAMOS UNA PERSONA CON EDAD DE 22 AÑOS
            const persona1 = new Persona('Juan', 'Peres Peres', fechaJPP);
            // Edad actual de la persona1
            const edadActual = persona1.getEdadActual();
            // ASSERT
            expect(edadActual).toEqual(22); 
          });
    })

    describe('Pruebas para Persona', () => {
      it('debería espiar el método getNombreCompleto', () => {
        // Crea una instancia de Persona (puedes proporcionar valores adecuados para el constructor)
        const fechaNacimiento = new Fecha(30,10,1999);
        const persona = new Persona('Juan', 'Pérez', fechaNacimiento);
    
        // Crea un spy para el método getNombreCompleto
        const spyGetNombreCompleto = spyOn(persona, 'getNombreCompleto').and.callThrough();
    
        // Llama al método real
        const nombreCompleto = persona.getNombreCompleto();
    
        // Verifica que el spy se haya llamado
        expect(spyGetNombreCompleto).toHaveBeenCalled();
     
        // Verifica el resultado del método
        expect(nombreCompleto).toBe('Juan Pérez'); // Ajusta el valor esperado según tu lógica
      });
    });

});
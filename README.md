 # **Taller 1**

**Apellidos y Nombres**: Calderón Pico Pascual Colón

**Curso**: 9no Nivel "A"

**Asignatura**: Integración de Sistemas y
Plataformas

**Docente**:  John Cevallos 

## Práctica en clase

**1. Utilizando NEST Desarrollar la ruta de un servicio REST que aplique arrays como
persistencia basada en una de sus entidades maestras asignadas al inicio del parcial.**

Aqui vamos a utilizar las dos entidades maestras, que me fueron asignadas.
![aplicacion](./images/1.png)

Se utilizo las entidades maestras.
![aplicacion](./images/1.5.png)

En el servicio REST, utilice el POST, GET
![aplicacion](./images/3.png)

Ingresamos a postman y ejecutamos el método Get y vemos que aparecen los datos.
![aplicacion](./images/2.5.PNG)

Ejecutamos el método Post para ingresar nuevos datos.
![aplicacion](./images/3.5.PNG)

Los datos se ingresaron correctamente.
![aplicacion](./images/4.5.PNG)

** 2. Utilizando NEST Desarrollar la ruta de un servicio REST que aplique una base de datos
relacional o no relacional como persistencia basada en una de sus entidades maestras
asignadas al inicio del parcial.

Se utilizara Mongodb, para eso defini la ruta.
![aplicacion](./images/4.png)

Se utilizo las entidades maestras, para utilizar en la base de datos.
![aplicacion](./images/5.png)

** 3. Evidenciar la funcionalidad de lo desarrollado en un archivo MD sobre Git.

Utilizare el puerto 5000 y se procede a ejecutar el servicio REST.
![aplicacion](./images/6.png)

Ingresamos a postman y ejecutamos el método Get y como podemos ver nuestra base de datos esta vacia.
![aplicacion](./images/7.png)

Asi mismo ingresamos a Mongodb y la base de datos esta vacia.
![aplicacion](./images/8.png)

Volvemos a postman y ejecutamos el método Post para ingresar datos.
![aplicacion](./images/9.png)
![aplicacion](./images/10.png)

Ingresamos en mongodb y como se puede observar los datos se ingresaron correctamente.
![aplicacion](./images/12.png)

Ingresamos otro estudiante.
![aplicacion](./images/11.png)
![aplicacion](./images/13.png)

Ejecutamos el metodo Put para actualizar el nombre del segundo estudiante

![aplicacion](./images/14.png)
![aplicacion](./images/15.png)

Ejecutamos el metodo Delete para eliminar al segundo estudiante.
![aplicacion](./images/16.png)
![aplicacion](./images/17.png)
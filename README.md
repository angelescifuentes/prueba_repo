# Prueba para RokketLabs
Esta prueba consiste en la creación de una API rest para visualizar y crear usuarios en una base de datos postgresql, que se encuentra en la nube.

Los servicios implementados son:
* GET   http://localhost:3000/usuarios , que trae un json con todos los usuarios de la BD
* GET   http://localhost:3000/usuarios/{id} , que trae un json el usuario de id {id} de la BD
* POST   http://localhost:3000/usuarios , que se le entrega un json con nombre y email y este crea un nuevo usuario en la DB, devolviendo el id del nuevo usuario.


# Instrucciones 
## Clonar repositorio e instalación
```sh
$ git clone https://github.com/angelescifuentes/RockettLabs.git
$ cd RockettLabs
$ npm install
```
# Realización de pruebas
```sh
$ npm test
```
Para terminar la ejecucion del test control+c

# Inicio servicio
```sh
$ npm start
```
Abre http://localhost:3000 y hecha un vistazo

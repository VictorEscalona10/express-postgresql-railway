# NodeJS PosgreSQL RestAPI

# IMPORTANTE: por favor lee el archivo detalladamente

hola, seguro estaras viendo de que trata este pryecto, bueno, te explciare como funciona:

# la carpeta database es como esta estructurada la tabla con la que se trabajo, mas este archivo no se uso en el proyecto
# los controladores son las funciones de las rutas, se separo para que no sea un archivo tan grande
# las rutas bueno, las rutas usando las variables que se exportaron de la carpeta de los constroladores
# el config.json son las variables que almacenan las variables de entorno que tiene el archivo .env
# el archivo db.js crea la conexion con la base de datos y la exporta, este archivo importa los datos de las variables de entorno de config.js que dije anteriormente
# el index bueno, el index que ejecuta todo

solo se instalo pg, express, morgan

en el package.json se hizo que antes de ejecutar el servidor se lea el .env, revisa el package.json
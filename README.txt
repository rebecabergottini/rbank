Installation

1. Comprobar que tenemos instalado python3
   # python3 --version
2. Instalar pip para python3
    # sudo apt update
    # sudo apt install python3-pip
3. Comprobar que tenemos instalado python3-pip
    # pip3 --version
4. Instalar pipenv

ERROR
connection to server at "localhost" (127.0.0.1), port 5432 failed: Connection refused
        Is the server running on that host and accepting TCP/IP connections?
SOLUCION
sudo docker ps
telnet localhost 5432 # telnet valida que haya una aplicacion escuchando en la ip localhost puerto 5432
--> telnet: Unable to connect to remote host: Connection refused
sudo docker inspect devcontainer-db-1 # inspeccion del contenedor
--> El contenedor tiene la IP: puerto
    "IPAddress": "172.18.0.2",
    "Ports": {
                "5432/tcp": null
            },
--> telnet 172.18.0.2 5432
Trying 172.18.0.2...
Connected to 172.18.0.2.
Escape character is '^]'.

Cambiar el fichero .env con la ip donde esta lanzada la base de datos 

# Back-End Variables
DATABASE_URL=postgres://gitpod:postgres@172.18.0.2:5432/example

FRONT END ERROR

"react-hello-webapp@1.0.1" requiere Node.js versión "16.x", pero estabamos utilizando "v18.12.1". 
Para solucionar esto, asegúrate de que estás utilizando la URL correcta para el script de instalación de nvm. 
---> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
---> Cerrar y abrir la terminal: pipenv shell
---> nvm install 16
---> npm run start


Command to generate secret key 
python tools/generate_secret.py 
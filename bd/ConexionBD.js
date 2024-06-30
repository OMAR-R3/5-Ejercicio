class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");
    }
    async conectarMySql(){
        try {
            this.conexion=await this.mysql.createConnection({
                host:'b6yre0ppeaflwzhxsk5g-mysql.services.clever-cloud.com',
                user:'upqa08th9jfc3xvm',
                password:'f3a0jwORd0ZtH5lcqsCv',
                database:'b6yre0ppeaflwzhxsk5g',
                port:'3306'
            });
            console.log("conexion creada a mysql bienvenido a telcel");
        } catch (error) {
            console.error("Error al crear la conexion "+error);
        }
    }
    async cerrarConexion(){
        if(this.conexion!=null){
            try {
                await this.conexion.end();
                console.log("Conexion cerrada de Nysql chao");
            } catch (error) {
                console.error("Error al cerar conexion "+error);
            }
        }
    }
}

module.exports=ConectarBD;
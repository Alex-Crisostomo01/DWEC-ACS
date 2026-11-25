import http from "./http-axios.js"

class ServicioInformacion {


    getAllAficiones(){
        return http.get("/aficiones")
    }
    getAllTecnologias(){
          return http.get("/tecnologias")
    }





}
export default new ServicioInformacion();
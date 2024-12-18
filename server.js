//import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT= "3000";

//PODERIA EXCLUIR, MAS VOU DEIXAR COMENTADO POIS É COMO INICIA ANTES DO SERVER.//

//const rotas = {
//    "/": "Curso Express API",
//   "/livros": "Entrei na rota livros",
//    "/autores": "Entrei na rota autores"
//}

// const server = http.createServer((req, res)=>{
  //  res.writeHead(200 , {"content-type": "text/plain"});
   // res.end(rotas[req.url]);
// })


app.listen(PORT, ()=>{
    console.log("Servidor escutando!");
});
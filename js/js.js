console.log("Conectando..........");






//Bloque de funciones

const listarFamilia  = (resultado) =>{
    
    const  listar = document.querySelector("#familia");
    const  listarAbuelos = document.querySelector("#abuelos");
    const  listarhermanos = document.querySelector("#hermanos");
    const  listarsobrinos = document.querySelector("#sobrinos");
    console.log(listar);
    // Destructuring Objeto
    //console.log(resultado);
    const {  padres, abuelos, hermanos, sobrinos } = resultado;
    console.log(padres, abuelos, hermanos,sobrinos);

    abuelos.forEach(element=> {
        
        listarAbuelos.innerHTML +=  `
                                <h2>Integrantes: ${element}</h2>
                             `
    });


    padres.forEach(element=> {
        
        listar.innerHTML +=  `
                                <h2>Integrantes: ${element}</h2>
                             `
    });
 

    hermanos.forEach(element=> {
        
        listarhermanos.innerHTML +=  `
                                <h2>Integrantes: ${element}</h2>
                             `
    });

    sobrinos.forEach(element=> {
        
        listarsobrinos.innerHTML +=  `
                                <h2>Integrantes: ${element}</h2>
                             `
    });
};


const  leerJSON = async () => {
    try {

        const respuesta = await fetch("familia.json");
        const resultado = await respuesta.json();

        listarFamilia(resultado);
        
    } catch (error) {
        console.log("Error: " + error);
    }

};






//  1Paso traer  el JSON a  JS
document.addEventListener("DOMContentLoaded", leerJSON);

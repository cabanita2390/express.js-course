const users = [
    {
        id: 1,
        name: "Jorge",
    }, 
    {
        id: 2,
        name: 'Belu',
    },
    {
        id: 3,
        name: 'Alejo',
    }
]

let id = 4;

const getUsers = async () => {

    // Consultar a una BDD
    // Realizar una solicitud a un servicio externo
    // Leerán la información de un archivo

    //Estás 3 opciones, la GRAN MAYORÍA de veces, son operaciones asincronas

    return users
}

const createuser = (name) => {
    const newUser = {
        id,
        name,
    }
    id++
    users.push(newUser)
}

createuser('Pipe')



module.exports = getUsers


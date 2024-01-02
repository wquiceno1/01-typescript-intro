const skills: string[] = ['Bash', 'Counter', 'Healing'];


// la interface define las propiedades de un objeto, sirve como maqueta de como debe ser el objeto
interface Character {
    name: string;
    hp: number;
    skills: string[];
    //? indica que la propiedad es opcional (puedo obviar la propiedad)
    hometown?: string;
}

// en la creacion del objeto se le debe asignar la interface
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

// accediendo a las propiedades
strider.hometown = 'Riverdell';

// mostrando el objeto
console.table(strider);

export{};
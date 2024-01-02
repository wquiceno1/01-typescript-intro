interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Tony',
    children: ['Natalia', 'Gabriel']
}

const passenger2: Passenger = {
    name: 'Peter',
    // children: ['Natalia', 'Gabriel']
}

function printChildren(passenger: Passenger) {
    const childs = passenger.children?.length || 0;
    console.log(childs);
}

printChildren(passenger1);
printChildren(passenger2);
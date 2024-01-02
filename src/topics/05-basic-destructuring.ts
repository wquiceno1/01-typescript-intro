

interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    songName: string;
    details: Details;
}

interface Details {
    nameAuthor: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 80,
    songDuration: 36,
    songName: "Hotel California",
    details: {
        nameAuthor: 'The Eagles',
        year: 1990
    }
}



console.log('Song: ', audioPlayer.songName)
console.log('Author: ', audioPlayer.details.nameAuthor)
console.log('Duration: ', audioPlayer.songDuration)

// ahora aplicando la desectrustruracion

// tambien se pueden crear alias
const song = 'In the City'
const { songName: anotherSong, songDuration:duration, details } = audioPlayer;

// tratando de desestrcturar details(un objeto)
// const { details: otherDetails } = audioPlayer

// ahora accedo al autor
const { nameAuthor: author  } = details

// console.log('Song: ', anotherSong);
// console.log('Song: ', song);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

// desestructurar arreglos

const dbz: string[] = ['Goku', 'Vegetta'];
const [ , , Trunks = 'Not found' ] = dbz
console.log('Personaje 3:', Trunks )


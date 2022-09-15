import ITEM_1 from '../assets/ITEM_1.jpg'
import ITEM_2 from '../assets/ITEM_2.jpg'
import ITEM_3 from '../assets/ITEM_3.jpg'
import ITEM_4 from '../assets/ITEM_4.jpg'
import ITEM_5 from '../assets/ITEM_5.jpg'
import ITEM_6 from '../assets/ITEM_6.jpg'


const fotos = [
    {
        id: 1,
        name: 'Breath',
        img: [ITEM_1],
        autor: 'Eleonora Lam',
        price: 1800,
        description: 'Mujer bajo el agua',
        categoria: 'arty',

    },

    {
        id: 2,
        name: 'Flowers',
        img: [ITEM_2],
        autor: 'Eleonora Lam',
        price: 700,
        description: 'Flores en jarrón',
        categoria: 'nature',
    },

    {
        id: 3,
        name: 'Beach',
        img: [ITEM_3],
        autor: 'Cesar Usuri',
        price: 3000,
        description: 'Baño tradicional indio',
        categoria: 'documental',
    },

    {
        id: 4,
        name: 'Monte',
        img: [ITEM_4],
        autor: 'Mario Domp',
        price: 600,
        description: 'Niebla en el Monte Tibi',
        categoria: 'nature',
    },

    {
        id: 5,
        name: 'Alone',
        img: [ITEM_5],
        autor: 'Mario Domp',
        price: 1700,
        description: 'La soledad del viaje',
        categoria: 'documental',
    },

    {
        id: 6,
        name: 'Sky',
        img: [ITEM_6],
        autor: 'Eleonora Lam',
        price: 600,
        description: 'Cielo nocturno estrellado',
        categoria: 'nature',
    },
]



 const obtenerItems = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(fotos)
        reject(err => console.log(err))
    }, 2000)
})

export default obtenerItems
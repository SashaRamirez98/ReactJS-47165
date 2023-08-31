const products = [
    {
        id: '1',
        name: 'Mesa Rústica',
        price: '250.000',
        category: 'mesas',
        img: 'https://media.istockphoto.com/id/1266344041/es/foto/representaci%C3%B3n-en-3d-de-mesa-de-comedor-de-tablones-de-borde-%C3%A1spero.jpg?s=612x612&w=0&k=20&c=YYigzkfFftr-zoQgwfPC-hjk3tw_GBZ1GH-5ahSjMiQ=',
        stock: '10',
        description: 'Descripción de Mesa Rústica'
    },
    {
        id: '2',
        name: 'Lampara Alta',
        price: '90.000',
        category: 'lamparas',
        img: 'https://i.pinimg.com/736x/50/1d/8a/501d8a18426a0ccf615c3414c0b413fe.jpg',
        stock: '10',
        description: 'Descripción de Lampara Alta'
    },
    {
        id: '3',
        name: 'Lampara Media',
        price: '120.000',
        category: 'lamparas',
        img: 'https://www.eglo.com/media/wysiwyg/lampara_de_madera_ideal_para_decoracion.jpg',
        stock: '10',
        description: 'Descripción de Lampara Media'
    },
    {
        id: '4',
        name: 'Lampara de Pie',
        price: '100.000',
        category: 'lamparas',
        img: 'https://cdnx.jumpseller.com/beige-store-chile/image/28754967/H_20220606_181127__1_.jpg?1666803252',
        stock: '10',
        description: 'Descripción de Lampara de Pie'
    },
    {
        id: '5',
        name: 'Porta Sahumerio',
        price: '5.000',
        category: 'accesorios',
        img: 'https://www.44calles.com/uploads/marketplace/productos/ecodiverso/b_5328_porta-incienso-original.jpg',
        stock: '10',
        description: 'Descripción de Porta Sahumerio'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 1000)
    })
}
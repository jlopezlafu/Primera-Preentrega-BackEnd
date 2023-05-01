const fs = require("fs");

const createFile = async (file_path) => {
    try {
        if (!fs.existsSync(file_path)) {
            console.log("Se Creo Un archivo");
            await fs.promises.writeFile(file_path, "", "utf8");
        }
    } catch (err) {
        console.log("No se Pudo Crear", err);
    }
};

const validateNumber = (number) => {
    return number && !isNaN(number) && number > 0;
};

const productsToSave = [
    {
        title: 'Remera Rosa',
        description: 'Remera Rosa',
        price: 'USD 10',
        thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/685/943/products/img_14011-5a0175d71af606b29816393560687328-640-0.jpg',
        code: 'C0001',
        stock: 5,
        id: 1
    },
    {
        title: 'Remera Negra',
        description: 'Remera Negra',
        price: 'USD 9',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbriganti.com.ar%2Fproducts%2Fhxim09525011-remera-hombre-negra-lisa&psig=AOvVaw0KvBGiNUvVilHfIhKSylEQ&ust=1682466035264000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLim-8TYw_4CFQAAAAAdAAAAABAd',
        code: 'C0002',
        stock: 6,
        id: 2
    },
    {
        title: 'Remera Azul',
        description: 'Remera Azul',
        price: 'USD 9',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmarcopololp.com.ar%2Fproducto%2Fremera-o-basic-pima%2F&psig=AOvVaw3vyg3QxhTLXTQv4tm8C_Ig&ust=1682466124056000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPChre_Yw_4CFQAAAAAdAAAAABAM',
        code: 'C0003',
        stock: 8,
        id: 3,
    },
    {
        title: 'Remera Roja',
        description: 'Remera Roja',
        price: 'USD 12',
        thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/negro1-be2c9fcafec64f6a2216463391373553-480-0.jpg',
        code: 'C0005',
        stock: 10,
        id: 4
    },
    {
        title: 'Buzo Negro',
        description: 'Buzo Negro',
        price: 'USD 12',
        thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/negro1-be2c9fcafec64f6a2216463391373553-480-0.jpg',
        code: 'C0006',
        stock: 12,
        id: 5
    },
    {
        title: 'Buzo Azul',
        description: 'Buzo Azul',
        price: 'USD 12',
        thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/negro1-be2c9fcafec64f6a2216463391373553-480-0.jpg',
        code: 'C0007',
        stock: 10,
        id: 6
    },
    {
        title: 'Buzo Amarillo',
        description: 'Buzo Amarillo',
        price: 'USD 12',
        thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/negro1-be2c9fcafec64f6a2216463391373553-480-0.jpg',
        code: 'C0008',
        stock: 23,
        id: 7
    },
    {
        title: 'Buzo Bordo',
        description: 'Buzo Bordo',
        price: 'USD 12',
        thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/negro1-be2c9fcafec64f6a2216463391373553-480-0.jpg',
        code: 'C0009',
        stock: 15,
        id: 8
    },
    {
        title: 'Jogger Negro',
        description: 'Jogger Negro',
        price: 'USD 18',
        thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/negro1-be2c9fcafec64f6a2216463391373553-480-0.jpg',
        code: 'C0010',
        stock: 25,
        id: 9
    },
    {
        title: 'Jogger Gris',
        description: 'Jogger Gris',
        price: 'USD 12',
        thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/negro1-be2c9fcafec64f6a2216463391373553-480-0.jpg',
        code: 'C0011',
        stock: 10,
        id: 10
    },
];

module.exports = { createFile, productsToSave, validateNumber };
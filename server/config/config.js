//========
//  PUERTO
//========

process.env.PORT = process.env.PORT || 3000;

//========
//  ENTORNO
//========

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========
//  BASE DE DATOS
//========

let urlDB;

if (process.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://mongodb:RHUUWoNb2fh5K0Xc@cluster0.gejz2.mongodb.net/cafe?retryWrites=true&w=majority'
}

// mongo "mongodb+srv://cluster0.gejz2.mongodb.net/<dbname>" --username mongodb

process.env.URLDB = urlDB;
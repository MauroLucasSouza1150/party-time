const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery",true);

        await mongoose.connect(
            "mongodb+srv://maurolucas2014:onQox3VqDdcCaX8V@cluster0.tilnkds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("Conectado ao Banco !");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;
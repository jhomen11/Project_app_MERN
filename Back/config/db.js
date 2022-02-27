import mongoose from "mongoose";

const dbConnect = async () =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology: true
        })

        const url = `${connection.connection.host}: ${connection.connection.port}`
        console.log(url)
    } catch (error) {
        console.log(`error: ${error.message}`)
        process.exit(1)  //Termina con los procesos en ejecución
    }
}

export default dbConnect
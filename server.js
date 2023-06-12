import express from "express"
import * as dotenv from "dotenv"
import mongoose from "mongoose"
import postRoutes from "./routes/posts.js"

dotenv.config()
const port = process.env.PORT

const app = express()

app.use(express.json())

app.use("/api/posts", postRoutes)


const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true)
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB connected")
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

connectDB()
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((err) => console.log(err))


//iQO1e3F15iNHPJPv

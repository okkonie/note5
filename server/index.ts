import express from "express"
import { PORT } from "./utils/env"

const app = express()

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`)
})

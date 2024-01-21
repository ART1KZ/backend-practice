const express = require("express")
const app = express()
const port = 3000

const client = [
    {
        id: 1,
        fullName: "Киселев Артем",
        gender: "м",
        phoneNumber: "89505377540",
    },
    {
        id: 2,
        fullName: "Васильев Денис",
        gender: "м",
        phoneNumber: "89224769810",
    },
    {
        id: 3,
        fullName: "Иванова Софья",
        gender: "ж",
        phoneNumber: "89285746205",
    },
    {
        id: 4,
        fullName: "Карпова Дарья",
        gender: "ж",
        phoneNumber: "89082178556",
    },
    {
        id: 5,
        fullName: "Куликов Николай",
        gender: "м",
        phoneNumber: "89672876110",
    },
]

app.get('/', (req, res) => {
    res.set({
        "Content-Type": "application/json",
    })
    res.json(JSON.stringify(client))
})

app.listen(port, () => {
    console.log(`Мы начали прослушивать ${port} порт.`)
})
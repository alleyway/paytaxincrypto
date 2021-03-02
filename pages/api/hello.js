// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {

    fetch(new URL("/api/v3/exchangeInfo", "https://api.binance.com"), {
        method: "get"
    }).then(async (response) => {

        const message = await response.text()

        res.json({name: "John Doe", message})

    }).catch((e) => {

        res.statusCode = 500
        res.json({name: "error", message: e.toString()})

    })

}

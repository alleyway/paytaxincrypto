// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {

  fetch({url:'https://api.binance.com/api/v3/exchangeInfo', method: "get"}).then((response)=>{

    const message = response.statusText

    res.json({ name: 'John Doe', message })

  }).catch((e) => {

    res.statusCode = 500
    res.json({ name: 'error' })

  })


}

const axios = require('axios').default;

export default async function handler(req, res) {
let id =req.body.invoice_id
const options = {
    method: 'POST',
    url: 'https://uddokta.myeventizer.com/api/verify-payment',
    headers: {Accept: 'application/json',
    'RT-UDDOKTAPAY-API-KEY': '0391e407f08a5d80376ef38009828b42b0c6c43e', 'Content-Type': 'application/json'},
    data: {invoice_id:id}
  };
  
  let dsl = await axios
    .request(options)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.error(error);
    });
    const orderid = dsl.metadata.order_id
    const amount = dsl.amount

    const lamb =           await fetch(
      "https://bcftqwss7dwpdrc2mvfgyj2ucy0jrghf.lambda-url.ap-southeast-1.on.aws/",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: orderid,
          amount:amount
        }),
      }
    );
    res.redirect(302, "/checkoutsuccess")

}


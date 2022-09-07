const axios = require('axios').default;

export default async function handler(req, res) {

 let orderID= req?.body?.orderID
 let payment= req?.body?.payment
 let phone= req?.body?.phone
 let name= req?.body?.name
  const options = {
    method: 'POST',
    url: 'https://uddokta.myeventizer.com/api/checkout-v2',
    headers: {
      Accept: 'application/json',
      'RT-UDDOKTAPAY-API-KEY': '0391e407f08a5d80376ef38009828b42b0c6c43e',
      'Content-Type': 'application/json'
    },
    data: {
      full_name: name,
      email: phone,
      amount: payment,
      metadata: {order_id: orderID, phone:phone,name:name},
      redirect_url: 'https://myeventizer.com/api/redirect',
      cancel_url: 'https://myeventizer.com/checkoutfailed',
    }
  };
  
let dsl = await  axios
    .request(options)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.error(error);
    });
  const response ={
  status:200,
  headers:{"Access-Control-Allow-Headers":["Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"],"Access-Control-Allow-Methods":["OPTIONS,PUT"],"Access-Control-Allow-Origin":["*"],"Content-Type":["application/json"]},
  body:{
      url:dsl,
      message:"SSL initialized"
  },
};
  res.status(200).json(response)
}

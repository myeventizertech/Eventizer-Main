const axios = require('axios').default;

export default async function handler(req, res) {

  const options = {
    method: 'POST',
    url: 'https://uddokta.myeventizer.com/api/checkout',
    headers: {
      Accept: 'application/json',
      'RT-UDDOKTAPAY-API-KEY': '0391e407f08a5d80376ef38009828b42b0c6c43e',
      'Content-Type': 'application/json'
    },
    data: {
      full_name: 'Tanvir Ishtiaq',
      email: 'tanvirish123@gmail.com',
      amount: '500',
      metadata: {order_id: '10', product_id: '5'},
      redirect_url: 'https://zf4ur41ks6.execute-api.ap-southeast-1.amazonaws.com/Final',
      cancel_url: 'https://zf4ur41ks6.execute-api.ap-southeast-1.amazonaws.com/Final',
      webhook_url: 'https://zf4ur41ks6.execute-api.ap-southeast-1.amazonaws.com/Final'
    }
  };
  
let dsl = await  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
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

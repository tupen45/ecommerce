const chechsum_lib=require('./paytm/PaytmChecksum');
const port =3000;
module.exports=(app)=>{
app.get('/payment',(req,res)=>{
    let params={}
    params['MID']='koSEsU52498887222495',
    params['WEBSITE']='WEBSTAGING',
    params['CHANNEL_ID']='WEB',
    params['INDUSTRIAL_TYPE_ID']='Retail',
    params['ORDER_ID']='order101',
    params['CUST_ID']='cust100',
    params['TXN_AMOUNT']='100',
    params['CALLBACK_URL']='/success'

    chechsum_lib.generateRandomString(params,'U5BRYx4O75xP9CZ2&sCg',function(err,paytmchecksum){
        let txn_url=""
    })
    
})
}

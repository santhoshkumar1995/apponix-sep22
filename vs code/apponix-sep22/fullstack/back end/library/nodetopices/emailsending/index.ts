var nodemailer=require('nodemailer')
var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'manisanthosh4@gmail.com',
        pass:'hfkzesbetnymqbrk'
    }
})
var maildata={
    from:'manisanthosh4@gmail.com',
    to:'manisanthosh4@gmail.com',
    subject:'summa',
text:'hi hello'
}
transport.sendMail(maildata,(err:any,res:any)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail send')
    }
})
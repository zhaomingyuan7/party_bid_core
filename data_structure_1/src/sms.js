function notify_sms_received(sms_json){
    var bm_and_jj = sms_json.messages[0].message.substr(0, 2).replace(/\s/g, '')
    var if_sign = {
        bm: function(){
            SignUp.save_sign_up_sms(sms_json)
        },
        jj: function(){

        }
    }
    if(if_sign[bm_and_jj]){
        if_sign[bm_and_jj]();
    }
}
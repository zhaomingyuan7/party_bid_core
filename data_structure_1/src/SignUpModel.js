function SignUp(){

}
SignUp.save_sign_up_sms = function(sms_json){
    var activities = JSON.parse(localStorage.activities);
    var sign_ups = {};
    sign_ups.name = sms_json.messages[0].message.substr(2).replace(/\s/g, '');
    sign_ups.phone = sms_json.messages[0].phone;
    localStorage.setItem('activities',JSON.stringify(activities));
}
function SignUp() {

}
SignUp.save_sign_up_sms = function (sms_json) {
    if (localStorage.is_signing_up == 'true') {
        var activities = JSON.parse(localStorage.activities);
        var sign_ups = JSON.parse(localStorage.sign_ups);
        var activity = localStorage.current_activity;
        var sign_up = {};
        sign_up.name = sms_json.messages[0].message.substr(2).replace(/\s/g, '');
        sign_up.phone = sms_json.messages[0].phone;
        sign_up.activity_id = activity;
        if(!SignUp.is_repeating(sms_json)){
            sign_ups.push(sign_up)
            localStorage.setItem('sign_ups', JSON.stringify(sign_ups));
        }
    }
}
SignUp.is_repeating = function(sms_json){
    var sign_ups = JSON.parse(localStorage.sign_ups);
    var activity = localStorage.current_activity;
    var activities = JSON.parse(localStorage.activities);
    return _.find(sign_ups,function(name){
        return name.activity_id == activity && name.phone == sms_json.messages[0].phone
    })
}
SignUp.render_sign_ups = function(name){
    var sign_ups = JSON.parse(localStorage.sign_ups);
    var current_activity = _.filter(sign_ups, function(sign_up){
        return sign_up.activity_id == name;
    });
    return current_activity;
}
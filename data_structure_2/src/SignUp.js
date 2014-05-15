function SignUp() {

}
SignUp.save_sign_up_sms = function (sms_json) {
    if (localStorage.is_signing_up == 'true') {
        var activities = JSON.parse(localStorage.activities);
        var sign_up = {};
        var sign_ups = [];
        sign_up.name = sms_json.messages[0].message.substr(2).replace(/\s/g, '');
        sign_up.phone = sms_json.messages[0].phone;
        var activity_ids = JSON.parse(localStorage.getItem("activity_ids"))
        var activities = _.map(activities, function (activity) {
            activity.id == localStorage.current_activity ? (sign_ups.push(sign_up),activity.sign_ups = sign_ups) : activity.sign_ups = '';
            return activity;
        })
        localStorage.setItem('activities', JSON.stringify(activities));
    }
}
SignUp.render_sign_ups = function(name){
    var activities = JSON.parse(localStorage.activities);
    var current_activity = _.filter(activities, function(activity){
        return activity.name == name;
    });
    var sign_ups = current_activity[0].sign_ups
    return sign_ups;
}
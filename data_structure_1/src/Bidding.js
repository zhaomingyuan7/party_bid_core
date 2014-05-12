function bidding(sms_json){
    var activities = JSON.parse(localStorage.activities);
    var activity = {name:'',sign_ups: '',bids: ''};
    var sign_ups = [];
    var phone = sms_json.messages[0].phone;
    var sign_up = {name: '',phone: ''};
    var bids = [];
    var biddings = sms_json.messages[0].message.substr(2).replace(/\s/g, '');
    var bid = {name: '',biddings: ''};
    if(localStorage.is_bidding == 'true'){
        if(_.find(activities,function(activities){
            return activity.name == localStorage.activities && activity.bids.name == localStorage.current_bid
        })){
            sign_ups.push(sign_up);
            bids.push(bids);
            localStorage.setItem('activities',JSON.stringify(activities));
        }
    }
}
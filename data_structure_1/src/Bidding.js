function Bidding(){

}
Bidding.save_bid = function(sms_json){
    var activities = JSON.parse(localStorage.activities);
    var current_activity = _.filter(activities, function(activity){
        return activity.name == localStorage.current_activity;
    });
    var biddings = [];
    var bidding = {};
    bidding.price = sms_json.messages[0].message.substr(2).replace(/\s/g, '');
//    bidding.price = sms_json.messages[0].message.replace(/\s||\S/g,'').toLocaleLowerCase().replace(/^jj/,'');
    bidding.phone = sms_json.messages[0].phone;
    if(localStorage.is_bidding == 'true'){
        if(_.find(current_activity[0].sign_ups,
            function(activity){return activity.phone == bidding.phone})){
            var is_sign_name = _.find(current_activity[0].sign_ups,function(activity){return activity.phone == bidding.phone});
            bidding.name = is_sign_name.name;
            if(!_.find(biddings,
                function(biddings){return biddings.phone == biddings.phone})){
                biddings.push(bidding);
            }
            current_activity = _.map(current_activity[0].bids, function(activity){
                return  activity.name == localStorage.current_bid ? activity.biddings = biddings : '';

            });
            localStorage.setItem('activities',JSON.stringify(activities));
        }

    }
}
Bidding.is_sign_phone = function(){
    var bidding = {};
    var is_is = _.find(current_activity[0].sign_ups,
        function(activity){return activity.phone == bidding.phone});

}

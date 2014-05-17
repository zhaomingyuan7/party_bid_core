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
Bidding.transform_bids_to_view_model = function(name){
    var activities = JSON.parse(localStorage.activities)
    var current_activity = _.filter(activities, function(activity){
        return activity.name == name;
    });
    var bids = current_activity[0].bids;
    localStorage.bids = JSON.stringify(bids);
    return bids;
}
Bidding.transform_biddings_to_view_model = function(name,bid){
    return  [Bidding.count_price_first_information(name, bid)];
}
Bidding.current_bidding = function(name,bid){
    var activities = JSON.parse(localStorage.activities)
    var current_activity = _.filter(activities, function(activity){
        return activity.name == name
    });
    var bids = current_activity.bids

    var current_bids = _.find(current_activity[0].bids,function(bid_name){
        return bid_name.name == bid
    })
    return current_bids.biddings

}
Bidding.price_num_count = function (name, bid) {
    return _.countBy(Bidding.current_bidding(name, bid),
        function (activity) {
            return activity.price
        });
}
Bidding.price_and_num = function (name, bid) {
    return _.map(Bidding.price_num_count(name, bid), function (value, key) {
        return {"price": key, "count": value}
    })
}
Bidding.count_price_one = function (name, bid) {
    return _.find(Bidding.price_and_num(name, bid),
        function (name) {
            return name.count == 1
        })
}
Bidding.count_price_first_information = function (name, bid) {
    return _.find(Bidding.current_bidding(name, bid),
        function (bid_name) {
            return bid_name.price == Bidding.count_price_one(name, bid).price
        })
}
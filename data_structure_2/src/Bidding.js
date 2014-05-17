function Bidding() {

}
Bidding.create_new_bid = function (name) {

    var activities = JSON.parse(localStorage.activities);
    var bid_name = activities[name].bids.length + 1
    activities[name].bids.push('竞价' + bid_name)
    activities[name].biddings[activities[name].bids] = []
    localStorage.activities = JSON.stringify(activities);
}
Bidding.is_current_message = function(sms_json){
    var bid_information = {}
    bid_information.price = sms_json.messages[0].message.substr(2).replace(/\s/g, '');
    bid_information.phone = sms_json.messages[0].phone;
    return bid_information;
}
Bidding.save_bid_message = function (sms_json) {
    var activities = JSON.parse(localStorage.activities);
    var bid = localStorage.current_bid
    var activity = localStorage.current_activity
    var biddings = {};
    biddings = activities[activity].biddings
    localStorage.biddings = JSON.stringify(biddings);
    if (localStorage.is_bidding == 'true') {
        if (Bidding.is_sign_up_phone(sms_json) ) {
            if (!Bidding.is_repeat_bid(sms_json)) {
                activities[activity].biddings[bid].push(Bidding.is_current_message(sms_json))
                localStorage.setItem('activities', JSON.stringify(activities));
                return;
            }
        }
    }
}
Bidding.is_repeat_bid = function(sms_json){
    var activities = JSON.parse(localStorage.activities);
    var bid = localStorage.current_bid;
    var activity = localStorage.current_activity;
    var current_bidding = activities[activity].biddings[bid];
    return _.find(current_bidding, function (activities) {
        return activities.phone == sms_json.messages[0].phone
    })
}
Bidding.is_sign_up_phone = function(sms_json){
    var activities = JSON.parse(localStorage.activities);
    var activity = localStorage.current_activity
    var bid_information = {}
    bid_information.price = sms_json.messages[0].message.substr(2).replace(/\s/g, '');
    bid_information.phone = sms_json.messages[0].phone;
    return _.find(activities[activity].sign_ups,
        function (activity) {
            return activity.phone == bid_information.phone
        })
}
Bidding.transform_bids_to_view_model = function (activity) {
    var activities = JSON.parse(localStorage.activities)
    var bids = [];
    bids = activities[activity].bids;
    localStorage.bids = JSON.stringify(bids);
    return bids;
}
Bidding.transform_biddings_to_view_model = function (activity, bid) {
    var biddings = {}
    biddings = Bidding.count_price_first_information(activity, bid);
    biddings.name = Bidding.successful_of_people_name(activity, bid);
    localStorage.biddings = JSON.stringify(biddings);
    var successful_infornation = [];
    successful_infornation.push(biddings);
    localStorage.successful_infornation = JSON.stringify(successful_infornation);
    return successful_infornation;

}
Bidding.sortBy_price = function (activity, bid) {
    return _.sortBy(Bidding.is_current_bidding(activity, bid),
        function (name) {
            return (name.price)
        })
}
Bidding.is_current_bidding = function (activity, bid) {
    var activities = JSON.parse(localStorage.activities);
    var current_bidding = [];
    current_bidding = activities[activity].biddings[bid];
    localStorage.current_bidding = JSON.stringify(current_bidding);
    return current_bidding;
}
Bidding.price_num_count = function (activity, bid) {
    return _.countBy(Bidding.is_current_bidding(activity, bid),
        function (name) {
            return name.price
        });
}
Bidding.price_and_num = function (activity, bid) {
    return _.map(Bidding.price_num_count(activity, bid), function (value, key) {
        return {"price": key, "count": value}
    })
}
Bidding.count_price_one = function (activity, bid) {
    return _.find(Bidding.price_and_num(activity, bid),
        function (name) {
            return name.count == 1
        })
}
Bidding.count_price_first_information = function (activity, bid) {
    return _.find(Bidding.is_current_bidding(activity, bid),
        function (name) {
            return name.price == Bidding.count_price_one(activity, bid).price
        })
}
Bidding.successful_of_people_name = function(activity, bid){

    var activities = JSON.parse(localStorage.activities);
    var sign_ups=activities[activity].sign_ups;
    var phone = Bidding.count_price_first_information(activity, bid).phone
    var people_name = _.find(sign_ups,function(sign_ups){
        return sign_ups.phone ==  phone
    })
    return people_name.name

}
function Bidding(){

}
Bidding.save_bid_sms = function(sms_json){
    if(localStorage.is_bidding == 'true'){
        if(Bidding.of_people_name(sms_json)){
            if(!Bidding.is_the_repeat_phone(sms_json)){
            var bids = JSON.parse(localStorage.bids);
            var bidding = {};
            bidding.name = Bidding.of_people_name(sms_json).name
            bidding.phone = sms_json.messages[0].phone;
            bidding.price = sms_json.messages[0].message.substr(2).replace(/\s/g, '');
            _.find(bids,function(bid){
                if(bid.name == localStorage.current_bid && bid.activity_id == localStorage.current_activity){
                    bid.biddings.push(bidding);
                    localStorage.bids = JSON.stringify(bids);
                }
            })
        }
    }
    }
}
Bidding.of_people_name = function(sms_json){
    var sign_ups = JSON.parse(localStorage.sign_ups)
    return _.find(sign_ups,function(sign_up){
        return  sign_up.phone == sms_json.messages[0].phone && sign_up.activity_id == localStorage.current_activity
    })
}
Bidding.is_repeat_bid = function(){
    var bids = JSON.parse(localStorage.bids);
    return _.find(bids,function(bid){
        return bid.name == localStorage.current_bid && bid.activity_id == localStorage.current_activity
    })
}
Bidding.is_the_repeat_phone = function(sms_json){

    return _.find(Bidding.is_repeat_bid().biddings,function(bid){
        return bid.phone == sms_json.messages[0].phone;
    })
}
Bidding.render_biddings = function(activity,bid_name){
    var biddings = []
    var bidding = {};
    bidding.name =  Bidding.successful_of_people_name(activity,bid_name);
    bidding.phone = Bidding.count_price_first_information(activity,bid_name).phone;
    bidding.price = Bidding.count_price_first_information(activity,bid_name).price
    biddings.push(bidding);
    localStorage.biddings = JSON.stringify(biddings);
    return biddings;
}
Bidding.current_bid = function(activity,bid_name){
    var bids = JSON.parse(localStorage.bids);
    return _.find(bids,function(bid){
        return bid.activity_id == activity && bid.name == bid_name
    })
}
Bidding.current_bidding = function(activity,bid_name){
    var bids = JSON.parse(localStorage.bids);
    var biddings = Bidding.current_bid(activity,bid_name).biddings;
    localStorage.biddings = JSON.stringify (biddings)
    return biddings;
}
Bidding.price_num_count = function (activity, bid_name) {
    return _.countBy(Bidding.current_bidding(activity, bid_name),
        function (name) {
            return name.price
        });
}
Bidding.price_and_num = function (activity, bid_name) {
    return _.map(Bidding.price_num_count(activity, bid_name), function (value, key) {
        return {"price": key, "count": value}
    })
}
Bidding.count_price_one = function (activity, bid_name) {
    return _.find(Bidding.price_and_num(activity, bid_name),
        function (name) {
            return name.count == 1
        })
}
Bidding.count_price_first_information = function (activity, bid_name) {
    return _.find(Bidding.current_bidding(activity, bid_name),
        function (name) {
            return name.price == Bidding.count_price_one(activity, bid_name).price
        })
}
Bidding.successful_of_people_name = function(activity, bid_name){

    var sign_ups = JSON.parse(localStorage.sign_ups);
    var phone = Bidding.count_price_first_information(activity, bid_name).phone
    var people_name = _.find(sign_ups,function(sign_ups){
        return sign_ups.phone ==  phone && sign_ups.activity_id == localStorage.current_activity
    })
    return people_name.name
}
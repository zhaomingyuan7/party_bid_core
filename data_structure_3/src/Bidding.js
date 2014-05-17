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
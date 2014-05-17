function Bid(){

}
Bid.create_new_bid = function(name){
    var bids = JSON.parse(localStorage.bids);
    var bid = {};
    bid.name =""
    bid.activity_id = name
    bid.biddings = [];
    bids.push(bid);
    localStorage.bids = JSON.stringify(bids);
}
Bid.render_bids = function(activity){
    var bids = JSON.parse(localStorage.bids);
    return _.filter(bids,function(bid){
        return bid.activity_id == activity
    })
}
















//Bidding.save_bid_sms = function(sms_json){
//    if(localStorage.is_bidding == 'true'){
//        var bids = JSON.parse(localStorage.bids);
//        var bid = {}
//        bid.name = localStorage.current_bid
//        bid.activity_id = localStorage.current_activity;
//        bid.biddings = [];
//        var bidding = {};
//        bidding.phone = sms_json.messages[0].phone;
//        bidding.price = sms_json.messages[0].message.substr(2).replace(/\s/g, '');
//        bid.biddings.push(bidding);
//        localStorage.biddings = JSON.stringify(bid.biddings);
//        bids.push(bid);
//        localStorage.bids = JSON.stringify(bids);
//        console.log(bids)
//    }
//}
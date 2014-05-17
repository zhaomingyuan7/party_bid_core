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

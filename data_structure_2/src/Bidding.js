function Bidding(){

}
Bidding.create_new_bid = function(name){

    var activities = JSON.parse(localStorage.activities);
    var bid_name = activities[name].bids.length+1
    activities[name].bids.push('竞价'+bid_name)
    activities[name].biddings[activities[name].bids] = []
    localStorage.activities = JSON.stringify(activities);
}
Bidding.save_bid_message = function(){

}
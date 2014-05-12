function Bid(first_activity){
    this.name = "竞价1";
    this.biddings = [];
}
Bid.create_new_bid = function(first_activity){
    var bid = new Bid("first activity");
    var activities = JSON.parse(localStorage.activities);
    activities = _.map(activities, function(activities){
        activities.name == localStorage.current_activity ? activities.bids.push(bid) : '';
        return activities
    });
    localStorage.setItem('activities',JSON.stringify(activities));
}
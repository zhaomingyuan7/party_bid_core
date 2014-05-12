function Bid(name){
    this.name = "竞价1";
    this.biddings = [];
}
Bid.create_new_bid = function(name){
    var bid = new Bid("first activity");
    var activities = JSON.parse(localStorage.activities);
    activities = _.map(activities, function(activities){
        activities.name == localStorage.current_activity ? activities.bids.push(bid) : '';
        return activities
    });
    localStorage.setItem('activities',JSON.stringify(activities));
}
Bid.current_activity = function(name){
    return _.filter(activities, function(activity){
        return activity.name == localStorage.current_activity;
    });
}
Bid.is_sign_name = function(name){
    return _.find(current_activity[0].sign_ups,
        function(activity){return activity.phone == bidding.phone});
}
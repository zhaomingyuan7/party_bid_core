function bid(first_activity){
    this.name = '竞价1';
    this.bids = [];
}

bid.create_new_bid = function(first_activity){
    console.log('pppppppp')
    var bid = new bid(first_activity)
    var activities = JSON.parse(localStorage.activities);
    activities = _.map(activities, function(activity){
       activity.name == localStorage.current_activity ? activity.bids.push(bid) : '';
             return activity
    });
    localStorage.setItem('activities',JSON.stringify(activities));
}
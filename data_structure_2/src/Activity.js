function Activity(activity_name){
    this.name = activity_name;
    this.sign_ups = [];
    this.bids = [];
    this.biddings = {};
}
Activity.prototype.create = function(activity_name){
    var activities = JSON.parse(localStorage.getItem(activities)) || [];
    var activity= {};
    activity.name = activity_name;
    activity.sign_ups = [];
    activity.bids = [];
    activities.biddings = {};
    activities.push(activity);
    localStorage.setItem('activities',JSON.stringify(activities));
}

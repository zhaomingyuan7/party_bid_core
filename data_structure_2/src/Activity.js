function Activity(activity_name){
    this.name = activity_name;
    this.sign_ups = [];
    this.bids = [];
    this.biddings = {};
}
Activity.prototype.create = function(activity_name){
    var activities = JSON.parse(localStorage.activities);
    var activity_ids = JSON.parse(localStorage.getItem("activity_ids"))
    var activity_id = Activity.activity_ids();
    activity_id += ""

    activities[activity_id] = this;
    activity_ids.push(activity_id);
    localStorage.activities = JSON.stringify(activities);
    localStorage.activity_ids = JSON.stringify(activity_ids);
    localStorage.activity_id_generator = activity_ids.length
    localStorage.current_activity = activity_ids.length - 1
}
Activity.activity_ids = function(){
    var activity_ids = JSON.parse(localStorage.getItem("activity_ids"))
    return activity_ids.length;
}
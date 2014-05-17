function Activity(activity_name){
    this.id = "";
    this.name = activity_name;
}
Activity.prototype.create = function(activity_name){
    var activities = JSON.parse(localStorage.activities);
    var activity_ids = JSON.parse(localStorage.activity_ids);
    var activity_id = Activity.activity_ids();
    activity_id += ""
    this.id = activity_id
    var activity = {}
    activity = this;
    activities.push(activity)
    activity_ids.push(activity_id)
    localStorage.activities = JSON.stringify(activities);
    localStorage.activity_ids = JSON.stringify(activity_ids);
    localStorage.current_activity = activities[activity_id].id;
    localStorage.activity_id_generator = activities.length;
}
Activity.activity_ids = function(){
    var activity_ids = JSON.parse(localStorage.getItem("activity_ids"))
    return activity_ids.length;
}
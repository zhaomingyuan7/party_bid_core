function Activity(activity_name){
    this.name = activity_name;
    this.sign_ups = [];
    this.bids = [];
}

Activity.prototype.create = function(activity_name){
    var activities = JSON.parse(localStorage.getItem(activities)) || [];
    var activity= {};
    activity.name = activity_name;
    activity.sign_ups = []
    activity.bids = []
    activities.push(activity);
    localStorage.setItem('activities',JSON.stringify(activities));
}

Activity.prototype.active = function(activity_name){
    localStorage.current_activity = activity_name;
}

//prototype 属性使您有能力向对象添加属性和方法。Activity.prototype.name=value
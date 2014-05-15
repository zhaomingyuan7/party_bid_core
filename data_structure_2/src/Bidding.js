function Bidding(){

}
Bidding.create_new_bid = function(name){

    var activities = JSON.parse(localStorage.activities);
    var current_activities = _.filter(activities,function(activities){
        return activities[0]
    })
    var bids = []
    var biddings = {}
    bids.push()
}
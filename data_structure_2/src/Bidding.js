function Bidding() {

}
Bidding.create_new_bid = function (name) {

    var activities = JSON.parse(localStorage.activities);
    var bid_name = activities[name].bids.length + 1
    activities[name].bids.push('竞价' + bid_name)
    activities[name].biddings[activities[name].bids] = []
    localStorage.activities = JSON.stringify(activities);
}
Bidding.save_bid_message = function (sms_json) {
    var activities = JSON.parse(localStorage.activities);
    var bid = localStorage.current_bid
    var activity = localStorage.current_activity
    var biddings = {};
    biddings = activities['1'].biddings
    localStorage.biddings = JSON.stringify(biddings);
    var biddings = JSON.parse(localStorage.biddings);
    var bid_information = {}
    bid_information.price = biddings[bid].price = sms_json.messages[0].message.substr(2).replace(/\s/g, '');
    bid_information.phone = biddings[bid].phone = sms_json.messages[0].phone;
    if (localStorage.is_bidding == 'true') {
        if (_.find(activities[activity].sign_ups,
            function (activity) {
                return activity.phone == bid_information.phone
            })) {
            activities[activity].biddings[bid].push(bid_information)
            localStorage.setItem('activities', JSON.stringify(activities));
        }
    }
}
Bidding.transform_bids_to_view_model = function (name, bid) {

}
Bidding.transform_bids_to_view_model = function (name) {

}
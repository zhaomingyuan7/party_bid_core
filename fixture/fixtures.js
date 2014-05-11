function build_sms_json(content, phone_no) {
    return {
        messages: [
            {
                "create_date": "Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013",
                "message": content,
                "phone": phone_no
            }
        ]
    };
}

//notify_message_received({"messages":
//    [{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//native_accessor.send_sms(json_message.messages[0].phone, "您已报名成功，请勿重复报名")
//native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
//
//send_sms: function (phone, message) {
//    console.log(phone, message);
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
//},
//
//receive_message: function (json_message) {
//    if (typeof this.process_received_message === 'function') {
//        this.process_received_message(json_message);
//    }
//},
//
//function notify_message_received(name,phone,message){
//    return {
//        receivers: [
//            {
//                "name": name,
//                "phone": phone,
//                "message":message
//            }
//        ]
//    };
//}
'use strict';

const WebClient = require('@slack/client').WebClient;
const web = new WebClient(token);

web.channels.history('C4A5U2Q77', (err, res) => {
    if (err) {
        console.log('Error:', err);
    } else {
        // console.log('Message sent: ', res);
        console.log(res.messages)
        let messages = res.messages
        if (messages) {
            let text = messages.map((item) => item.text);
            console.log(text);
        }
    }
});
'use strict';

const config = require('./config.js');
const token = config.SLACK_API_KEY;
const WebClient = require('@slack/client').WebClient;
const web = new WebClient(token);
var imgDownloader = require('image-downloader');

web.channels.history('C4A5U2Q77', (err, res) => {
  if (err) {
    console.log('Error:', err);
  } else {
    let messages = res.messages
    if (messages) {
      let text = messages.map((item) => {
        if (item.file) {
          console.log(item.file)
          let options = {
            url: item.file.url_private,
            dest: '/home/msimu', // Save to /path/to/dest/image.jpg
            done: function (err, filename, image) {
              if (err) {
                throw err;
              }
              console.log('File saved to', filename);
            },
          };
          imgDownloader(options);

        }
      });
    }
  }
});

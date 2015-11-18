var phantom = require('phantom');

var address = 'http://libraryweb.org'

phantom.create(function(ph) {
  ph.createPage(function(page) {
    page.set('onResourceRequested', function (req) {
      console.log('requested: ' + JSON.stringify(req.url, undefined, 4));
    });

    page.set('onResourceReceived', function (res) {
      console.log('received: ' + JSON.stringify(res.url, undefined, 4));
    });;

    page.open(address, function (status) {
      if (status !== 'success') {
        console.log('FAIL to load the address');
      }
    });
  });
});

// ctl00$searchCombined1$TextBox1

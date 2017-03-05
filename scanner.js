var request = require('request');
var cheerio = require('cheerio');
var mkdirp = require('mkdirp');

var Scanner = function () { };

Scanner.prototype.scanNetwork = function () {

    // construct URL
    var baseUrl = 'http://192.168.0.1/';

    // make a request to the URL
    request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {

            // get html from cheerio
            var $ = cheerio.load(html);

        }
        else if (error) {
            console.log(error);
        }
    });


};

exports.Scraper = new Scraper();

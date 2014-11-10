#!/usr/bin/env node

'use strict';

var fs       = require("fs"),
    path     = require("path"),
    proxy    = require("anyproxy"),
    beautify = require('js-beautify').js_beautify,
    program  = require('commander'),
    info     = require("./package.json");

if(process.argv.length <= 1 || /\.js$/.test(process.argv[process.argv.length - 1]) ){
    console.log("usage : tr <dir>");
    process.exit();
}

var userSavePath = path.resolve(process.cwd(), process.argv[process.argv.length - 1]);
var recorderRule = {
    summary:function(){
        return "A tool to save all traffic data";
    },

    fetchTrafficData: function(id,info){
        var customizedData = info,
            resBody        = info.resBody;

        customizedData.reqHeader = info.req.headers;
        delete customizedData["req"];
        delete customizedData["resBody"];

        saveInfo(id,customizedData.url,customizedData,resBody)
    }
};

var options = {
    rule                : recorderRule,
    disableWebInterface : true
};
new proxy.proxyServer(options);


function saveInfo(id,url,summary,body){
    var infoFile = path.join(userSavePath, id + "_summary_" + summary.host),
        bodyFile = path.join(userSavePath, id + "_body_"    + summary.host);

    fs.writeFileSync(infoFile , beautify(JSON.stringify(summary), { indent_size: 4 })); 
    fs.writeFileSync(bodyFile , body);
}
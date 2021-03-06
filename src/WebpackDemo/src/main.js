"use strict";
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var static_1 = require("@angular/upgrade/static");
var angular = require("angular");
var moment = require("moment");
var _ = require("lodash");
var test_1 = require("./app/test");
// depending on the env mode, enable prod mode or add debugging modules
if (process.env.ENV === 'production') {
    core_1.enableProdMode();
}
console.info(process.env.ENV);
var data = [{ id: 1, name: "jquery" },
    { id: 2, name: "angular" },
    { id: 3, name: "moment" },
    { id: 4, name: "lodash" }];
var appModule = angular.module('app', ['ui.router', 'ngAria', 'ngAnimate', 'ngMaterial', 'ngSanitize']);
$("#name").val("Hello");
setTimeout(function () {
    $("#name").val("Hello Atul "
        + moment(Date.now()).format('MMM-DD-YYYY')
        + " " + _.find(data, ["id", 4]).name);
}, 5000);
test_1.InitTestModule(appModule);
function main() {
    //return platformBrowserDynamic().bootstrapModule(AppModule);
    return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
        var upgrade = platformRef.injector.get(static_1.UpgradeModule);
        upgrade.bootstrap(document.body, ['app'], { strictDi: true });
    });
}
exports.main = main;
if (document.readyState === 'complete') {
    main();
}
else {
    document.addEventListener('DOMContentLoaded', main);
}
//# sourceMappingURL=main.js.map
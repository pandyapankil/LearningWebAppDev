var function2 = function(nums) {
    "use strict";

    var maximum = _.max(nums);

    $(".underscore").append("<p> Largest number from " + nums + " is  = " + maximum + "</p>");
};

var function3 = function(nums) {
    "use strict";

    var i = 0,
        evenChecker = false;

    _.every(nums, function(no) {

        i++;
        return ((no % 2) !== 0);
    });

    if (i < nums.length)
        evenChecker = !evenChecker;

    $(".underscore").append("<p>" + nums + " contains at least one even number  :: " + evenChecker + "</p>");
};

var function4 = function(nums) {
    "use strict";

    var i = 0,
        allEven = true;

    _.every(nums, function(no) {
        i++;
        console.log(no);
        return ((no % 2) === 0);
    });

    if (i < nums.length)
        allEven = false;

    $(".underscore").append("<p> In " + nums + " every number is even  :: " + allEven + "</p>");
};


function2([1, 2, 3, 4]);
function3([1, 2, 3, 4]);
function4([1, 2, 3, 4]);

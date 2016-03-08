var average = function(nums) {
    "use strict";

    var $sum = nums.reduce(function(sumSoFar, value) {
        return sumSoFar + value;
    }, 0);

    var length = nums.length;

    return $sum / length;
};

var function1 = function(nums) {
    "use strict";

    var avg = average(nums);

    $(".homework3").append("<p> Average of " + nums + " is  = " + avg + "</p>");

};

var function2 = function(nums) {
    "use strict";

    var maximum = Math.max.apply(null, nums);

    $(".homework3").append("<p> Largest number from " + nums + " is  = " + maximum + "</p>");
};

var function3 = function(nums) {
    "use strict";

    var i, evenChecker;

    for (i = 0; i < nums.length; i++) {
        evenChecker = (nums[i] % 2) === 0;

        if (evenChecker)
            i = nums.length;
    }

    $(".homework3").append("<p>" + nums + " contains at least one even number  :: " + evenChecker + "</p>");
};

var function4 = function(nums) {
    "use strict";

    var i, oddChecker;

    for (i = 0; i < nums.length; i++) {
        oddChecker = (nums[i] % 2) === 0;

        if (!oddChecker)
            i = nums.length;
    }

    $(".homework3").append("<p> In " + nums + " every number is even  :: " + oddChecker + "</p>");
};

var arrayContains = function(array, string) {
    "use strict";

    var i, check;

    check = array.indexOf(string) > -1;

    $(".homework3").append("<p>" + array + "  contains " + string + "  :: " + check + "</p>");
};

var arrayContainsTwo = function(array, string) {
    "use strict";

    var i, count = 0,
        str;
    for (i = 0; i < array.length; i++) {
        str = array[i];
        if (str.localeCompare(string) === 0)
            count++;
    }

    count = (count == 2);

    $(".homework3").append("<p>" + array + "  contains the " + string + " twice :: " + count + "</p>");
};


var maxNum = function(nums) {
    "use strict";

    var maximum = _.max(nums);

    $(".underscore").append("<p> Largest number from " + nums + " is  = " + maximum + "</p>");
};

var evenChk = function(nums) {
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

var everyEven = function(nums) {
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


maxNum([1, 2, 3, 4]);
evenChk([1, 2, 3, 4]);
everyEven([1, 2, 3, 4]);

function1([1, 2, 3, 4]);
function2([1, 2, 3, 4]);
function3([1, 2, 3, 4]);
function4([1, 2, 3, 4]);
arrayContains(["hello", "world"], "hello");
arrayContainsTwo(["a", "b", "a", "c"], "a");

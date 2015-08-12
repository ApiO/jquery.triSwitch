/*
 * jquery.triSwitrch
 * 2015 - Adrien Cuisinier
 * v1.0.0
 */

// Override val function for triSwitch
(function ($) {
    var originalVal = $.fn.val;
    $.fn.val = function (v) {
        if ($(this).attr("data-triSwitch") != undefined) {
            var ts = $(this);
            if (v == undefined) return ts.data("v");
            ts._value = parseInt(v);
            switch (v) {
                case 1:  ts.prop("class", "ts ts-ok"); break;
                case -1: ts.prop("class", "ts ts-ko"); break;
                default: ts.prop("class", "ts ts-both");
            }
            ts.data("v", v);
            return undefined;
        }
        return originalVal.apply(this, arguments);
    };
})(jQuery);

// Initializer
$.fn.triSwitch = function (cfg) {
    var arr = [];
    $.each(this, function (index, cb) {
        if (!$(cb).is(":checkbox")) throw "Element must be a checkbox";
        var parent = $(cb).parent();

        var ts = $("<div class=\"ts\"><i></i></div>");
        if ($(cb).attr("id") != undefined) {
            ts.attr("id", $(cb).attr("id"));
        }
        if ($(cb).attr("name") != undefined) {
            ts.attr("data-name", $(cb).attr("name"));
        }
        if ($(cb).attr("disabled") != undefined) {
            ts.attr("disabled", $(cb).attr("disabled"));
        }
        ts.attr("data-triSwitch", 1);
        ts.val(cfg == undefined || cfg.defaultValue == undefined ? -1 : cfg.defaultValue);

        $(cb).remove();

        ts.on("click", function () {
            if (ts.attr("disabled") === "disabled") return;

            var v = 1;
            if (ts.hasClass("ts-both"))
                v = 1;
            else if (ts.hasClass("ts-ok"))
                v = -1;
            else if (cfg == undefined || cfg.loop == undefined || cfg.loop)
                v = 0;
            ts.val(v);
            ts.trigger("change");
        });
        parent.append(ts);
        arr.push($(ts));
    });
    return $($.map(arr, function (el) { return el.get(); }));
};
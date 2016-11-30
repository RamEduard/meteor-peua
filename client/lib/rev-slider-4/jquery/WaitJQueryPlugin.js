/**
 * Wait until condition be true
 * @param pluginName
 * @param callback
 * @param miliseconds
 * @constructor
 */
WaitJQueryPlugin = function(pluginName, callback, miliseconds) {
    check(arguments, [Match.Any])
    check(pluginName, String)
    check(callback, Function)
    check(miliseconds, Match.Optional(Number))

    _waitExecutor(pluginName, callback, miliseconds);
}

/**
 * Wait until jQuery has been defined or loaded
 * @param callback
 * @param miliseconds
 * @constructor
 */
WaitJQuery = function (callback, miliseconds) {
    check(arguments, [Match.Any])
    check(callback, Function)
    check(miliseconds, Match.Optional(Number))

    var interval = new ReactiveVar()

    function waitUntil() {
        if (window.jQuery !== undefined) {
            callback.call();
            Meteor.clearInterval(interval.get())
        }
    }

    interval.set(Meteor.setInterval(waitUntil, miliseconds || 1000))
}

/**
 * Wait executor
 * @param pluginName
 * @param callback
 * @param miliseconds
 * @private
 */
function _waitExecutor(pluginName, callback, miliseconds) {
    var interval = new ReactiveVar()

    function waitUntil() {
        if ($.fn[pluginName] !== undefined) {
            callback.call();
            Meteor.clearInterval(interval.get())
        }
    }

    interval.set(Meteor.setInterval(waitUntil, miliseconds || 1000))
}
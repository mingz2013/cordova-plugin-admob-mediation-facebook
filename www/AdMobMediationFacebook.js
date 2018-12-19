'use strict';


var AdMobMediationFacebook = {};
//
// /**
//  * initSDK
//  * @param {Function} params.onSuccess - optional on success callback
//  * @param {Function} params.onFailure - optional on failure callback
//  */
// AdMobMediationApplovin.initSDK = function (params) {
//     console.log("ADmob.init...params:");
//
//
//     callPlugin('initSDK', {}, function () {
//
//         if (isFunction(params.onSuccess)) {
//             params.onSuccess();
//         }
//
//     }, params.onFailure);
//
// };




/**
 * Helper function to call cordova plugin
 * @param {String} name - function name to call
 * @param {Object} params - optional params
 * @param {Function} onSuccess - optional on sucess function
 * @param {Function} onFailure - optional on failure functioin
 */
function callPlugin(name, params, onSuccess, onFailure) {
    cordova.exec(function callPluginSuccess(result) {

        if (isFunction(onSuccess)) {
            onSuccess(result);
        }
    }, function callPluginFailure(error) {
        if (isFunction(onFailure)) {
            onFailure(error)
        }
    }, 'AdMobMediationApplovinPlugin', name, [params]);
}


/**
 * Helper function to check if a function is a function
 * @param {Object} functionToCheck - function to check if is function
 */
function isFunction(functionToCheck) {
    var getType = {};
    var isFunction = functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    return isFunction === true;
}


/**
 * Helper function to do a shallow defaults (merge). Does not create a new object, simply extends it
 * @param {Object} o - object to extend
 * @param {Object} defaultObject - defaults to extend o with
 */
function defaults(o, defaultObject) {

    if (typeof o === 'undefined') {
        return defaults({}, defaultObject);
    }

    for (var j in defaultObject) {
        if (defaultObject.hasOwnProperty(j) && o.hasOwnProperty(j) === false) {
            o[j] = defaultObject[j];
        }
    }

    return o;
}


if (typeof module !== undefined && module.exports) {
    module.exports = AdMobMediationFacebook;
}



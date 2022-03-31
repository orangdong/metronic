"use strict";

// Class definition
var KTPlace = function(element, options) {
    ////////////////////////////
    // ** Private Variables  ** //
    ////////////////////////////
    var the = this;

    if ( typeof element === "undefined" || element === null ) {
        return;
    }

    // Default Options
    var defaultOptions = {
        mode: 'append'
    };

    ////////////////////////////
    // ** Private Methods  ** //
    ////////////////////////////

    var _construct = function() {
        if ( KTUtil.data(element).has('place') === true ) {
            the = KTUtil.data(element).get('place');
        } else {
            _init();
        }
    }

    var _init = function() {
        the.element = element;
        the.options = KTUtil.deepExtend({}, defaultOptions, options);

        // Initial update
        _update();

        // Bind Instance
        KTUtil.data(the.element).set('place', the);
    }

    var _update = function(e) {
        var parentSelector = _getOption('parent');

        var mode = _getOption('mode');
        var parentElement = parentSelector ? document.querySelector(parentSelector) : null;
       

        if (parentElement && element.parentNode !== parentElement) {
            if (mode === 'prepend') {
                parentElement.prepend(element);
            } else if (mode === 'append') {
                parentElement.append(element);
            }
        }
    }

    var _getOption = function(name) {
        if ( the.element.hasAttribute('data-kt-place-' + name) === true ) {
            var attr = the.element.getAttribute('data-kt-place-' + name);
            var value = KTUtil.getResponsiveValue(attr);

            if ( value !== null && String(value) === 'true' ) {
                value = true;
            } else if ( value !== null && String(value) === 'false' ) {
                value = false;
            }

            return value;
        } else {
            var optionName = KTUtil.snakeToCamel(name);

            if ( the.options[optionName] ) {
                return KTUtil.getResponsiveValue(the.options[optionName]);
            } else {
                return null;
            }
        }
    }

    // Construct Class
    _construct();

    ///////////////////////
    // ** Public API  ** //
    ///////////////////////

    // Methods
    the.update = function() {
        _update();
    }

    // Event API
    the.on = function(name, handler) {
        return KTEventHandler.on(the.element, name, handler);
    }

    the.one = function(name, handler) {
        return KTEventHandler.one(the.element, name, handler);
    }

    the.off = function(name) {
        return KTEventHandler.off(the.element, name);
    }

    the.trigger = function(name, event) {
        return KTEventHandler.trigger(the.element, name, event, the, event);
    }
};

// Static methods
KTPlace.getInstance = function(element) {
    if ( element !== null && KTUtil.data(element).has('place') ) {
        return KTUtil.data(element).get('place');
    } else {
        return null;
    }
}

// Create instances
KTPlace.createInstances = function(selector) {
    // Initialize Menus
    var elements = document.querySelectorAll(selector);
    var place;

    if ( elements && elements.length > 0 ) {
        for (var i = 0, len = elements.length; i < len; i++) {
            place = new KTPlace(elements[i]);
        }
    }
}

// Window resize handler
window.addEventListener('resize', function() {
    var timer;

    KTUtil.throttle(timer, function() {
        // Locate and update Offcanvas instances on window resize
        var elements = document.querySelectorAll('[data-kt-place="true"]');

        if ( elements && elements.length > 0 ) {
            for (var i = 0, len = elements.length; i < len; i++) {
                KTPlace.getInstance(elements[i]).update();
            }
        }
    }, 200);
});

// Global initialization
KTPlace.init = function() {
    KTPlace.createInstances('[data-kt-place="true"]');
};

// On document ready
if (document.readyState === 'loading') {
   document.addEventListener('DOMContentLoaded', KTPlace.init);
} else {
    KTPlace.init();
}

// Webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = KTPlace;
}

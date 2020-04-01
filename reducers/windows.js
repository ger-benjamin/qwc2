/**
 * Copyright 2020, Sourcepole AG
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

let {SHOW_IFRAME_DIALOG, CLOSE_WINDOW} = require('../actions/windows');
let assign = require('object-assign');

function windows(state = {}, action) {
    switch (action.type) {
        case SHOW_IFRAME_DIALOG: {
            return assign({}, state, {[action.name]: {type: 'iframedialog', url: action.url}});
        }
        case CLOSE_WINDOW: {
            let newState = {...state};
            delete newState[action.name];
            return newState;
        }
        default:
            return state;
    }
}

module.exports = windows;

/**
 * 事件回调处理池
 * Created by homker on 15/11/14.
 */

var Reflux = require('reflux'),
    Actions = require('../action/actions');

var Store = Reflux.createStore({

    listenables:[Actions],
    ondropHandle:function(){
        console.log('do it');
    }
});

module.exports = Store;
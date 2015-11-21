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
    },
    onsourceBeginDrop:function(props,monitor,component){
    },
    onsourceEndDrop:function(props,monitor,component){

    },
    onboxTargetDrop:function(props,monitor,components){
        var hasChild = monitor.didDrop();
        props.onDrop(monitor.getItem());
        components.setState({
            hasDropped:true,
            hasDroppedOnChild:hasChild
        });
    }
});

module.exports = Store;
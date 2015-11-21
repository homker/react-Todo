/**
 * actions 动作注册
 * Created by homker on 15/11/14.
 */

var Reflux = require('reflux');

var Actions = Reflux.createActions([
    'dropHandle',  //拖动事件
    'sourceBeginDrop',
    'sourceEndDrop',
    'boxTargetDrop'
]);

module.exports = Actions;
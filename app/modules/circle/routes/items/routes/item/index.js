/**
 * Created by LQ on 2016/4/21.
 */
module.exports = {
    path: 'id/:circleID',
    breadcrumbName:"项目 :circleID",
    getComponent(nextState, callback) {
        require.ensure([], (require) => {

            callback(null, require('./components/item'))
        })
    }
}

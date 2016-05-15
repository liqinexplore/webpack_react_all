/**
 * Created by Administrator on 2016/5/15.
 */
module.exports={
    path:'qiniu',
    breadcrumbName:"qiniu",
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./components/circle.jsx'))
        })
    }
}
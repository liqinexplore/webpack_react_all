/**
 * Created by LQ on 2016/4/19.
 */

module.exports={
    path:'/firstroute',
    getChildRoutes(location,callback){
        require.ensure([],(require)=>{
            callback(null,[
                require('./twoRoute')
            ])
        })
    },
    getComponent(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('./twoRoute/route1.jsx'))
        })
    }
}
/**
 * Created by Administrator on 2016/4/21.
 */
module.exports={
    path:'circle',
    breadcrumbName:"圈子",
    getChildRoutes(location,callback){
        require.ensure([],(require)=>{
            callback(null,[
                require('./routes/items')//这个子路由
            ])
        });
    },
    getComponent(nextState,callback){
        require.ensure([],(require)=>{

            callback(null,require('./components/circle.jsx'))//这个是跳转的面板
        })
    }
};
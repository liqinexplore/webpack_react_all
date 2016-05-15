/**
 * Created by Administrator on 2016/4/26.
 */
module.exports={
    path:'demo',
    breadcrumbName:'富文本编辑器',
    getComponent(nextState,callback){
        require.ensure([],(require)=>{
            callback(null,require('./components/draft_demo.jsx'))
        })
    }
};
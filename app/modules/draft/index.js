/**
 * Created by Administrator on 2016/4/26.
 */

module.exports={
    path:'draft',
    breadcrumbName:'���ı��༭��',
    getChildRoutes(localtion,callback){
        require.ensure([],(require)=>{
            callback(null,require('./demo'))
        })
    },
    getComponents(nextState,callback){
      require.ensure([],(require)=>{
          callback(null,require('./components/draft.jsx'))
      })
    }
}
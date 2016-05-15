/**
 * Created by Administrator on 2016/5/15.
 */

module.exports={
    path:'demo',
    breadcrumbName:'这是里面的了',
    getComponent(location,callback){
        require([],(require)=>{
            callback(null,
                require('./components/top.jsx'),
                require('./components/contens.jsx'),
                require('./components/footer.jsx')

            )
        })
    }
}
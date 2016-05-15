
module.exports={
    path:'activity',
    breadcrumbName:"activity",
    getChildRoutes(location,callback){
        require.ensure([],(require)=>{
            callback(null,[
                require('./nextall/nextone'),


            ])
        })
    },
    getComponent(location,callback){
        require.ensure([],(require)=>{
            callback(null,require('./components/content.jsx'))
        })
    }
};
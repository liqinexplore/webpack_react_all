/**
 * Created by Administrator on 2016/4/21.
 */
module.exports={
  path:'posts',
    getComponents(nextSate,callback){
        require.ensure([],(require)=>{
            callback(null,{
                header:require('./components/header.jsx'),
                main:require('./components/draft_item.jsx'),
                footer:require('./components/footer.jsx')
            });
        });
    }
};
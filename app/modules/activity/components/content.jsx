import React ,{Component} from 'react';

class Contents extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
           <div>  {
                this.props.children
            ||
            <div>
            这是内容
            </div>
            }
            </div>)
    }
}
module.exports=Contents;
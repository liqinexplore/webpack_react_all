import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Upload, message, Button, Icon } from 'antd';
import {PRO_REQUEST as AJAX} from 'publicDatas';
import {QINIU_URL} from 'datas/url.jsx';


class Circle extends Component{
    constructor(props){
        super(props);
        this.state={
            qiniu:{

            },
            defaultFileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'http://www.baidu.com/xxx.png'
            }, {
                uid: -2,
                name: 'yyy.png',
                status: 'done',
                url: 'http://www.baidu.com/yyy.png'
            }],
            showUploadList:true
        }
    }
    btnClick(){
        //http://121.41.85.218:8081/qlwb/news_info.do?id=724&type=1
        //http://121.41.85.218:8081/qlwb/testuserinfo.do
        //http://192.168.110.238:7070/insertCircle.rpc
        //192.168.110.34:8080/insertCircle.rpc
        console.log("request:5555555555");
        AJAX.ajax.go_ajax({
            method:'get',
            data:{type:"type",logo:"151251251251251",name:"lisimin"},
            url:"192.168.110.34:8080/insertCircle.rpc",
            async:false,
            success:function(success){
                console.log("success:",success);
            },
            error:function(err){
                console.log("err:",err);
                return false;
            }
        });
        console.log("request:5555555555");

    }
    beforeUpload(file){
        var Guid=makeGuid();
        //这个befor可以放到官方api里判断。
        //检查七牛token是否失效，是否在ls里l
        var qiniu_token=checkQiniu.checkQiniuToken();
        //不存在的话，同步去做请求token动作
        if(!qiniu_token){
            //console.log("bucunzai:",qiniu_token);
            qiniu_token=checkQiniu.getQiniuToken();
        }
        //console.log("Guid:",Guid);
        //console.log("qiniu_token1:",qiniu_token);
        //return false;
        //设置七牛的token与file_key
        this.state.qiniu.key=Guid;
        this.state.qiniu.token=qiniu_token;

    }

    test(info){
        console.log("111111:",info.target );
    }
    onChange(info) {
        const url="http://7xpnx6.com1.z0.glb.clouddn.com";
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            console.log("成功的url:" + url + "/" + info.file.response.key);
            var file = info.file;
            file.url = url + "/" + info.file.response.key;
            var defaultFileList = this.state.defaultFileList;
            defaultFileList.push(file);
            this.setState({defaultFileList:defaultFileList});
            console.log("回调的info:", info);
            message.success(`${info.file.name} 上传成功。`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 上传失败。`);
        }
    }
    render(){
        const props={
            name: 'file',
            action: QINIU_URL,
            onChange:this.onChange.bind(this),
            listType: 'picture',
            multiple:true,
            data:this.state.qiniu,
            defaultFileList:this.state.defaultFileList,
            beforeUpload:this.beforeUpload.bind(this),
            showUploadList:this.state.showUploadList

        };
        return(
            <div>
            这是个练习
                <Upload {...props}>
                    <Button type="ghost">
                        <Icon type="upload" /> 点击上传
                    </Button>
                </Upload>
                <br/>
                <Button type="primary" onClick={this.btnClick.bind(this)}>测试</Button>
            </div>
        )
    }
}

module.exports=Circle;

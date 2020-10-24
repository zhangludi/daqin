/**
 * 全局js文件
 * 说明:公共复用的js统一放在这里
 */

//项目名
var path='http://zhdhqdj.sp11.cn/index.php/Api';

/**
 * 全局函数调用路径(资源管理系统需要用到的，接口路径统一写在这)
 * 
 */
var ZL=ZL||{
    url:function(){
        var base=path;
        return {
            base:base,
            api:{
                 dangjianditu:base+'/bigdata/AreaIndex',//党建地图
            }
        }
    }()
}

/**
 * 增删改通用ajax请求
 * @param type
 * @param url
 * @param datatype
 * @param contentType
 * @param data
 * @returns
 */
function global_ajax_method(type, url, datatype,contentType, data) { //封装ajax的一些常用参数  //data数据可以为空
    var obj;

    $.ajax({

        url: url,
        method: 'POST',
        async : true,

        dataType: 'json',
        data: JSON.stringify(data),
        success: function (reData) {
            console.log(reData.data);
            if(reData.status == 1){
                obj = reData.data;
            }else{
                obj = reData.msg;
            }
            console.log(obj);
            return obj;
        }
    });

}


function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
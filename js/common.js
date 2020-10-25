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




function getDiplomaId(diploma_id){
    var Headertitle = '';
    switch (diploma_id) {
        case '11':
            Headertitle = '博士';
            break;
        case '12':
            Headertitle = '硕士';
            break;

        case '13':
            Headertitle = '研究生';
            break;

        case '14':
            Headertitle = '本科';
            break;
        case '15':
            Headertitle = '大专';
            break;
        case '17':
            Headertitle = '高中';
            break;


        default:
            Headertitle = '博士';
    }
    return Headertitle;
}

//获取会议
function getPartyNo(party_no){
    var Headertitle = '';

    switch (party_no) {
        case '2001':
            Headertitle = '党委会';
            break;
        case '2002':
            Headertitle = '中心组学习';
            break;
        case '2003':
            Headertitle = '民主生活会';
            break;

    }
    return Headertitle;
}

/**
 * Created by ulfeng on 2017/10/30.
 */
/**
 * 接口域名
 * @hostUrl {string}
 */

// var hostUrl = 'http://biz-api.youqian3.melonmobile.cn'; // Live
var hostUrl = 'http://139.129.251.119:850'; // Sandbox
//var hostUrl = 'http://139.129.251.119:350'; // Sandbox
// var hostUrl = 'http://localhost:850'; // Sandbox
//var hostUrl = 'http://biz.api.jiebide.xin';
// var hostUrl = 'http://17042d7l06.51mypc.cn'; // Sandbox
//var hostUrl = 'http://biz.api.jrqb.aifangmi.com';
//var hostUrl = 'http://biz.api.mydk.jiebide.xin';
//var hostUrl = 'http://biz2.api.jiebide.xin';
var supAgencyUrl = 'http://crjk.jiebide.xin/templates/kuaixiakuan/index.html?channelCode='; // dev
// var supAgencyUrl = 'http://tg.jiebide.xin/templates/miyou/kuaixia.html?channelCode='; // pro
/**
 * 判断token是否过期,登录url
 */
var loginUrl = 'http://' + window.location.host + '/login.html';
//var loginTimer = setInterval(function () {
//    $.ajax({
//        type: 'POST',
//        url: hostUrl + '/product/peoples.json',
//        headers: {
//            'token': localStorage.getItem('token')
//        },
//        data: {},
//        dataType: 'json',
//        success: function (data) {
//            if (data.code == -1) {
//                self.location = loginUrl;
//            }
//        },
//        error: function () {
//            console.log('接口响应失败，请联系系统管理员！')
//        }
//    });
//}, 5000);
/**
 * ajax封装
 * url 发送请求的地址
 * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
 * async 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
 * 注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
 * type 请求方式("POST" 或 "GET")， 默认为 "GET"
 * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
 * headers 请求头部
 * successfn 成功回调函数
 * errorfn 失败回调函数
 */
jQuery.ax = function (url, data, async, type, dataType, headers, successfn, errorfn) {

    // headers 默认参数
    var headersDefault = {
        token: getCookie('token'),
        admUserId: getCookie('admUserId')
    };

    async = (async == null || async == "" || typeof(async) == "undefined") ? "true" : async;
    type = (type == null || type == "" || typeof(type) == "undefined") ? "POST" : type;
    dataType = (dataType == null || dataType == "" || typeof(dataType) == "undefined") ? "JSON" : dataType;
    data = (data == null || data == "" || typeof(data) == "undefined") ? {"date": new Date().getTime()} : data;
    headers = (headers == null || headers == "" || typeof(headers) == "undefined") ? headersDefault : headers;
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        type: type,
        async: async,
        data: data,
        url: url,
        dataType: dataType,
        headers: headers,
        success: function (res) {
            console.log(res);
            if (res.code == 0) {
                successfn(res);
            } else if (res.code == -10 || res.code == -20) { // 用户未登录
                if (location.href.indexOf('index.html') < 0) {
                    top.location.href = '../../login.html';
                } else {
                    window.location.href = 'login.html';
                }
            } else if (!res.code) {
                successfn(res);
            } else {
                layer.msg(res.msg, {icon: 2});
            }
        },
        error: function (e) {
            // errorfn(e);
            console.log(e);
        }
    });
};

jQuery.axd = function (url, data, async, type, dataType, headers, successfn, errorfn) {

    // headers 默认参数
    var headersDefault = {
        token: getCookie('token'),
        admUserId: getCookie('admUserId')
    };

    async = (async == null || async == "" || typeof(async) == "undefined") ? "true" : async;
    type = (type == null || type == "" || typeof(type) == "undefined") ? "POST" : type;
    dataType = (dataType == null || dataType == "" || typeof(dataType) == "undefined") ? "JSON" : dataType;
    data = (data == null || data == "" || typeof(data) == "undefined") ? {"date": new Date().getTime()} : data;
    headers = (headers == null || headers == "" || typeof(headers) == "undefined") ? headersDefault : headers;
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        type: type,
        async: async,
        data: data,
        url: url,
        dataType: dataType,
        headers: headers,
        success: function (res) {
            console.log(res);
            if (res.code == 0) {
                successfn(res);
            } else if (res.code == -10 || res.code == -20) { // 用户未登录
                if (location.href.indexOf('index.html') < 0) {
                    top.location.href = '../../login.html';
                } else {
                    window.location.href = 'login.html';
                }
            } else if (!res.code) {
                successfn(res);
            } else {
                layer.msg(res.msg, {icon: 2});
            }
        },
        error: function (e) {
            // errorfn(e);
            $('#loadIngModal').modal('hide');
            console.log(e);
        }
    });
};

jQuery.aja = function (url, data, async, type, dataType, headers, successfn, errorfn) {

    // headers 默认参数
    var headersDefault = {
        token: getCookie('token'),
        admUserId: getCookie('admUserId')
    };

    async = (async == null || async == "" || typeof(async) == "undefined") ? "true" : async;
    type = (type == null || type == "" || typeof(type) == "undefined") ? "POST" : type;
    dataType = (dataType == null || dataType == "" || typeof(dataType) == "undefined") ? "JSON" : dataType;
    data = (data == null || data == "" || typeof(data) == "undefined") ? {"date": new Date().getTime()} : data;
    headers = (headers == null || headers == "" || typeof(headers) == "undefined") ? headersDefault : headers;
    $.ajax({
        xhrFields: {
            withCredentials: true
        },
        type: type,
        async: async,
        data: data,
        url: url,
        dataType: dataType,
        contentType:'application/json',
        headers: headers,
        success: function (res) {
            console.log(res);
            if (res.code == 0) {
                successfn(res);
            } else if (res.code == -10 || res.code == -20) { // 用户未登录
                if (location.href.indexOf('index.html') < 0) {
                    top.location.href = '../../login.html';
                } else {
                    window.location.href = 'login.html';
                }
            } else if (!res.code) {
                successfn(res);
            } else {
                layer.msg(res.msg, {icon: 2});
            }
        },
        error: function (e) {
            // errorfn(e);
            console.log(e);
        }
    });
};

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

/**
 * 删除cookie
 * @param name 名称
 */
function clearCookie(name) {
    $.cookie(name, "", -1);
}


/**
 * get url param
 * @param name
 * @returns {*}
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    } else {
        return null;
    }
}

/**
 * datatable 错误提示
 * @type {string}
 */

//$.fn.dataTable.ext.errMode = 'none';

/**
 * 导出excel通用几口
 * @param  {String} specUrl 请求url
 * @param  {String} name    文件名
 */
function exportExcelCommon(specUrl, name) {
    var url = hostUrl + specUrl;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('token', getCookie('token'));
    xhr.setRequestHeader('admUserId', getCookie('admUserId'));
    xhr.responseType = "blob";  // 返回类型blob
    xhr.onload = function () {
        // 请求完成
        if (this.status === 200) {
            // 返回200
            var blob = this.response;
            var reader = new FileReader();
            reader.readAsDataURL(blob);  // 转换为base64，可以直接放入a表情href
            reader.onload = function (e) {
                var a = document.createElement('a'); // 转换完成，创建一个a标签用于下载
                a.download = name + '.xls';
                a.href = e.target.result;
                $("body").append(a);  // 修复firefox中无法触发click
                a.click();
                $(a).remove();
            }
        }
    };
    // 发送ajax请求
    xhr.send()
}

/**
 * 通过id获取输入框的值
 * @param  {String} id
 * @return {String}
 */
function getValById(id) {
    return $('#' + id).val();
}

/**
 * 成功提示
 * @param  {String} msg 提示信息
 */
function successPrompt(message) {
    layer.msg(message, {icon: 1, time: 1000});
}

/**
 * 失败提示
 * @param  {String} msg 提示信息
 */
function failPrompt(message) {
    layer.msg(message, {icon: 2, time: 1000});
}

/**
 * 判断对象是否为空
 * @param  {Object}  obj
 * @return {Boolean}
 */
function isEmpty(obj) {
    // 本身为空直接返回true
    if (obj == null) return true;

    // 然后可以根据长度判断，在低版本的ie浏览器中无法这样判断。
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    //最后通过属性长度判断。
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

/**
 * 刷新当前页面
 */
function refreshCurrentPage() {
    setTimeout(function () {
        location.replace(location.href)
    }, 2000);
}

/**
 * 跳转至某页面
 */
function JumpTo(url) {
    setTimeout(function () {
        location.replace(url)
    }, 2000);
}

/**
 * 获取包裹obj的tr里的第n个td里的text
 */
function getNtdText(obj, n) {
    return $(obj).closest('tr').find('td').eq(n).text()
}

/**
 * validate 校验扩展
 */
// 联系电话(手机/电话皆可)验证
//jQuery.validator.addMethod("isPhone", function(value,element) {
//    var length = value.length;
//    var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
//    var tel = /^\d{3,4}-?\d{7,9}$/;
//    return this.optional(element) || (tel.test(value) || mobile.test(value));
//
//}, "请正确填写您的联系电话");

// ajax提交
function getData(arguments, succeedData, failData) {
    $.ajax({
        url: arguments.host + arguments.url,
        headers: {
            'token': localStorage.getItem('token'),
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        },
        type: 'POST',
        data: arguments.data,
        dataType: arguments.type,
        success: function (data) {
            succeedData(data);
        },
        error: function (data) {
            failData(data);
        }
    })
}

//  判断是否有数据
function isValue(v) {
    if (v == "" || v == undefined || v == null) {
        v = '未知';
        return v;
    } else {
        return v;
    }
}

//获取选中的值 判断是否有值
function emGetChange(id, type) {
    //  type =1 直接获取value   type = 2 获取选中的值
    var emVal;
    if (type == 1) {
        emVal = $('#' + id + '').val();
        if (!emVal) {
            emVal = undefined;
        }
        return emVal;
    } else if (type == 2) {
        emVal = $('#' + id + ' option:selected').val();
        if (emVal == 0) {
            return emVal = undefined;
        }
    }
    return emVal;
}

//清除空格字符
function emRepBlank(str) {
    str = str.replace(/(^\s+)|(\s+$)/g, "");
    return str;
}

// 分页插件调用集合
function EmPage(EmParameter) {
    //EmParameter   请求参数集合
    //totalData   数据总条数

    //数据总条数 dataTotalMethod
    //  jsonUrl 接口地址    success 成功回调    error   失败回调
    this.dataTotalMethod = function (jsonUrl, success, error) {
        $.ajax({
            url: hostUrl + jsonUrl,
            async: false,
            headers: {
                'token': localStorage.getItem('token'),
            },
            data: EmParameter,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            },
            type: 'POST',
            success: function (result) {
                success(result)
            },
            error: function (result) {
                // failPrompt(result.msg);
                error(result)
            }
        })
    };
    //  获取数据 渲染页面 分页设置
    //  index 当前页
    this.pageMethod = function (jsonUrl, index, success, error) {
        // console.log(EmParameter)
        var getDealList = {
            data: EmParameter,
            host: hostUrl,
            url: jsonUrl,
        };
        //  设置当前页
        getDealList.data.pageNum = index;
        $.ajax({
            url: hostUrl + jsonUrl,
            headers: {
                'token': localStorage.getItem('token'),
            },
            data: EmParameter,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            },
            type: 'POST',
            success: function (result) {
                success(result)
            },
            error: function (result) {
                // failPrompt(result.msg);
                error(result)
            }
        });
        $('.page').pagination({
            totalData: this.totalData,
            jump: true,
            current: 1,
            showData: EmParameter.pageSize,
            coping: true,
            mode: 'fixed',
            homePage: '第一页',
            endPage: '最后一页',
            prevContent: '上一页',
            nextContent: '下一页',
            callback: function (api) {
                var getDealList = {
                    data: EmParameter,
                    host: hostUrl,
                    url: jsonUrl,
                };
                //  插件配置当前页
                getDealList.data.pageNum = api.getCurrent();
                $.ajax({
                    url: hostUrl + jsonUrl,
                    headers: {
                        'token': localStorage.getItem('token'),
                    },
                    data: EmParameter,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
                    },
                    type: 'POST',
                    success: function (result) {
                        success(result)
                    },
                    error: function (result) {
                        error(result)
                    }
                })
            }
        });
    };
}

/**
 * 获取2周前日期
 */
function getTwoWeekDate() {
    var d = new Date();
    var date = new Date(d - 14 * 24 * 3600 * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    return year + '-' + month + '-' + day;
}

/**
 * 获取当天日期
 */
function getDate() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    return year + '-' + month + '-' + day;
}

/**
 * 身份证校验
 * @param value
 * @returns {boolean}
 */
jQuery.isIdCardAvailable = function (value) {
    let idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;// 身份证正则
    return idCardReg.test(value);
}

/**
 * 手机号校验
 * @param value
 * @returns {boolean}
 */
jQuery.isPhoneAvailable = function (value) {
    let myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    return myreg.test(value);
}

/**
 * 邮箱校验
 * @param value
 * @returns {boolean}
 */
var isEmailAvailable = function (value) {
    var emreg = /^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/;
    return emreg.test(value);
}

/**
 * 数字校验
 * @param value
 * @returns {boolean}
 */
var isNumberAvailable = function (value) {
    var nureg = /^[0-9]*$/;
    return nureg.test(value);
}

/**
 * 获取列表公用
 */
var getDataList = function (url) {
    $.ajax({
        type: 'POST',
        url: url,
        headers: {
            token: getCookie('token'),
            admUserId: getCookie('admUserId')
        },
        data: {},
        dataType: 'json',
        contentType:'application/json',
        success: function (data) {
            if (data.code == 0) {
                var dataList = data.data[0];
                return dataList;
            } else if (data.code == -10 || data.code == -20) {
                top.location.href = '../../login.html';
            } else if (data.code == -1) {
                parent.location = loginUrl;
            } else {
                layer.msg(data.msg, {icon: 2})
            }
        },
        error: function () {
            console.log('接口响应失败，请联系系统管理员！')
        }
    });
}

function unique(array) {
    // res用来存储结果
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
        if (j === resLen) {
            res.push(array[i])
        }
    }
    return res;
}


function isArray(o){
    return Object.prototype.toString.call(o)=='[object Array]';
}
function init(){plcj_data=JSON.parse(get_plcj_dz());var n="";plcj_data.forEach(function(a,t){n+=t+". "+a.all_full_addr,t<plcj_data.length&&(n+="<br>")}),$("#all_full_addr").html(n),prepare_for_new()}function prepare_for_new(){$('input[name="czlx"]').val("xz")}function quoteDwfrxx(n){var a=new AjaxJsonRequest("bd_dwfr_list.jsp");a.setData("sfzh",n),a.send("正在获取法人代表信息",function(n){if(n.datas.length>0){var a=n.datas[0];$('input[name="frxm"]').val(a.xm?a.xm:""),$('input[name="frlxfs"]').val(a.lxfs?a.lxfs:""),$('input[name="fr_person_id"]').val(a.frbh?a.frbh:"")}else $('input[name="frxm"]').val(""),$('input[name="frlxfs"]').val(""),$('input[name="fr_person_id"]').val(""),$.alert("没找到对应法人代表信息")},function(n){$.alert("获取法人代表信息失败，"+n)})}function click_dwmc(){$.modal({title:"单位名称",buttons:[{text:"手动输入",onClick:function(){$('input[name="dwmc"]').removeAttr("readOnly"),$('input[name="dwmc"]').focus(),$('input[name="dwmc"]').on("blur",function(){$('input[name="dwmc"]').attr("readOnly","true")})}},{text:"自动引用",onClick:function(){openSearchDwDialog(quoteDwCallback)}}]})}function quoteDwCallback(n){n?($('input[name="frxm"]').val(""),$('input[name="frlxfs"]').val(""),$('input[name="fzrzjhm"]').val(""),$('input[name="fzrxm"]').val(""),$('input[name="fzrlxfs"]').val(""),$('input[name="fr_person_id"]').val(""),$('input[name="dwmc"]').val(""),$('input[name="fzrxm"]').val(""),$('input[name="fzrlxfs"]').val(""),$('input[name="glr_person_id"]').val(""),$('input[name="dwmc"]').val(n.frmc?n.frmc:""),$('input[name="bl_code"]').val(n.zch?n.zch:""),$('input[name="org_code"]').val(n.zzjgdm?n.zzjgdm:""),$('input[name="dh"]').val(n.lxfs?n.lxfs:""),$('input[name="frxm"]').val(n.xm?n.xm:""),$('input[name="frzjhm"]').val(n.sfzh?n.sfzh:""),n.sfzh&&$('input[name="frzjhm"]').blur(),$('input[name="dh"]').val(n.lxfs?n.lxfs:"")):$.alert("单位信息引用失败")}function cant_change_dwmc(){$.alert("不可变更单位名称!")}function go_back(){history.go(-1)}function openDict(n,a,t,e){openDictDialog(n,a,t,e)}var addr_name=getArgs().addr_name,plcj_data;$(function(){$("#save_btn").click(function(){var n=new AjaxJsonRequest("dw_save.jsp");n.loadDataFromForm("form");var a=new NotNullField;a.add("dwmc","单位名称"),a.add("dwlb","行业类别"),a.add("bm","单位编码"),a.add("dwxz","单位性质"),a.add("fzrxm","负责人姓名"),a.add("fzrzjlx","负责人证件类型"),a.add("fzrzjhm","负责人证件号码"),a.add("fzrlxfs","负责人联系方式"),n.setNotNotNullField(a);var t="";plcj_data.forEach(function(n){""!==t&&(t+=";"),t+=n.systemid}),n.setData("systemid",plcj_data[0].systemid),n.setData("gldz",t),n.send("单位信息提交中...",function(n){showTchToast("单位保存成功","-1",function(){go_back()})},function(n){$.alert("单位保存失败，"+n)})}),$('input[name="fzrzjhm"]').blur(function(){"居民身份证"==$('input[name="fzrzjlx"]').val()&&getSfzXx($('input[name="fzrzjhm"]').val(),"fzrxm","fzrlxfs","","","glr_person_id")}),$('input[name="frzjhm"]').blur(function(){var n=$('input[name="frzjhm"]').val();"居民身份证"==$('input[name="frzjlx"]').val()&&""!=n&&isIdCardNum(n)&&quoteDwfrxx(n)})});
function initDict(e,c,a,t){dict_callback_input_code=t,dict_callback_input_name=a;var d=$('textarea[name="'+a+'"]').val(),i=$('input[name="'+a+'"]').val();dict_selected_item_code=$('input[name="'+t+'"]').val(),dict_selected_item_name=d?d:i,initReq(e,c)}function initDictWithParams(e,c,a,t,d){dict_callback_input_code=t,dict_callback_input_name=a;var i=$('textarea[name="'+a+'"]').val(),r=$('input[name="'+a+'"]').val();dict_selected_item_code=$('input[name="'+t+'"]').val(),dict_selected_item_name=i?i:r,initReqWithParams(e,c,d)}function initReq(e,c){var a,t=c+"_dict_storage",d=sessionStorage[t];if(dict_is_search)createSearchDictDialog(e);else if(d)a=JSON.parse(d),createDictDialog(e,a);else{var i=new AjaxJsonRequest("dict_list.jsp");i.setData("dicttype",c),i.setPages(1,99999,-1),i.send("请求中...",function(c){a=c.datas,sessionStorage[t]=JSON.stringify(a),createDictDialog(e,a)},function(e){$.alert(e)})}}function initReqWithParams(e,c,a){var t,d=c+"_dict_storage",i=sessionStorage[d];if(dict_is_search)createSearchDictDialog(e);else if(i)t=JSON.parse(i),createDictDialog(e,t);else{var r=new AjaxJsonRequest("dict_list.jsp");r.setData("dicttype",c),r.setData("udfcode",a),r.setPages(1,99999,-1),r.send("请求中...",function(c){t=c.datas,sessionStorage[d]=JSON.stringify(t),createDictDialog(e,t)},function(e){$.alert(e)})}}function initDictInForm(e,c,a,t,d){}function openDictDialog(e,c,a,t){clear_dict_temp(),initDict(e,c,a,t)}function openDictSearchDialog(e,c,a,t){clear_dict_temp(),dict_search_type=c,dict_is_search=!0,initDict(e,c,a,t)}function openDictSearchDialogWithCallback(e,c,a,t,d){clear_dict_temp(),dict_callback=d,dict_search_type=c,dict_is_search=!0,initDict(e,c,a,t)}function openMultiSelectDictDialog(e,c,a,t){clear_dict_temp(),initDict(e,c,a,t)}function openDictDialogInForm(e,c,a,t,d){clear_dict_temp(),dict_callback_input_code=t,dict_callback_input_name=a,dict_form_name=d+"";var i=$("#"+d+' textarea[name="'+a+'"]').val(),r=$("#"+d+' input[name="'+a+'"]').val();dict_selected_item_code=$("#"+d+' input[name="'+t+'"]').val(),dict_selected_item_name=i?i:r,initReq(e,c)}function openDictDialogInFormWithCallback(e,c,a,t,d,i){clear_dict_temp(),dict_callback=i,dict_callback_input_code=t,dict_callback_input_name=a,dict_form_name=d+"";var r=$("#"+d+' textarea[name="'+a+'"]').val(),o=$("#"+d+' input[name="'+a+'"]').val();dict_selected_item_code=$("#"+d+' input[name="'+t+'"]').val(),dict_selected_item_name=r?r:o,initReq(e,c)}function openDictDialogWithCallback(e,c,a,t,d){clear_dict_temp(),dict_callback=d,initDict(e,c,a,t)}function openDictDialogWithCallbackAndParams(e,c,a,t,d,i){clear_dict_temp(),dict_callback=d,initDictWithParams(e,c,a,t,i)}function openLocalDictDialog(e,c,a,t){clear_dict_temp(),dict_callback_input_code=t,dict_callback_input_name=a;var d=$('textarea[name="'+a+'"]').val(),i=$('input[name="'+a+'"]').val();dict_selected_item_code=$('input[name="'+t+'"]').val(),dict_selected_item_name=d?d:i,createLocalDictDialog(e,c,a,t)}function openLocalDictDialogInForm(e,c,a,t,d){clear_dict_temp(),dict_callback_input_code=t,dict_callback_input_name=a,dict_form_name=d+"";var i=$("#"+d+' textarea[name="'+a+'"]').val(),r=$("#"+d+' input[name="'+a+'"]').val();dict_selected_item_code=$("#"+d+' input[name="'+t+'"]').val(),dict_selected_item_name=i?i:r,createLocalDictDialog(e,c,a,t)}function openLocalDictDialogWithCallback(e,c,a,t,d){clear_dict_temp(),dict_callback=d,dict_callback_input_code=t,dict_callback_input_name=a;var i=$('textarea[name="'+a+'"]').val(),r=$('input[name="'+a+'"]').val();dict_selected_item_code=$('input[name="'+t+'"]').val(),dict_selected_item_name=i?i:r,createLocalDictDialog(e,c,a,t)}function createLocalDictDialog(e,c,a,t){var d;switch(c){case"local":d=[{phrase:"fuck",udfcode:"003"},{phrase:"shit",udfcode:"007"}];break;case"是否":d=[{phrase:"是",udfcode:"1"},{phrase:"否",udfcode:"0"}];break;case"居住处所_未知房屋类别_本地":d=[{phrase:"普通住宅",udfcode:"20"},{phrase:"自有住宅",udfcode:"21"},{phrase:"公有住宅",udfcode:"22"},{phrase:"居民家中",udfcode:"23"},{phrase:"租赁房屋",udfcode:"24"}];break;case"居住处所_非出租房屋_本地":d=[{phrase:"普通住宅",udfcode:"20"},{phrase:"自有住宅",udfcode:"21"},{phrase:"公有住宅",udfcode:"22"},{phrase:"居民家中",udfcode:"23"}];break;case"从业人员职业本地":d=[{phrase:"负责人",udfcode:"1"},{phrase:"业主",udfcode:"2"},{phrase:"普通职工",udfcode:"3"}];break;case"健康状况本地":d=[{phrase:"正常",udfcode:"1"},{phrase:"有精神疾病",udfcode:"2"}];break;case"无户类别本地":d=[{phrase:"不符合计生政策的人员",udfcode:"1"},{phrase:"未办理《出生证》的人员",udfcode:"2"},{phrase:"未办理收养手续的人员",udfcode:"3"},{phrase:"被宣告失踪或者宣告死亡后户口被注销人员",udfcode:"4"},{phrase:"农村地区因婚嫁被注销原籍户口的人员",udfcode:"5"},{phrase:"证件遗失、超期的人员",udfcode:"6"},{phrase:"与外国人、无国籍人非婚生育的人员",udfcode:"7"},{phrase:"其他无户口人员",udfcode:"8"}];break;case"境外人员类型本地":d=[{phrase:"外国人",udfcode:"1"},{phrase:"华侨",udfcode:"2"},{phrase:"香港居民",udfcode:"3"},{phrase:"台湾居民",udfcode:"4"},{phrase:"澳门居民",udfcode:"5"},{phrase:"无国籍",udfcode:"6"},{phrase:"难民",udfcode:"8"},{phrase:"其他",udfcode:"9"}];break;case"车牌省份本地":d=[{phrase:"京",udfcode:"0"},{phrase:"津",udfcode:"0"},{phrase:"沪",udfcode:"0"},{phrase:"渝",udfcode:"0"},{phrase:"冀",udfcode:"0"},{phrase:"豫",udfcode:"0"},{phrase:"云",udfcode:"0"},{phrase:"辽",udfcode:"0"},{phrase:"黑",udfcode:"0"},{phrase:"湘",udfcode:"0"},{phrase:"皖",udfcode:"0"},{phrase:"鲁",udfcode:"0"},{phrase:"新",udfcode:"0"},{phrase:"苏",udfcode:"0"},{phrase:"浙",udfcode:"0"},{phrase:"赣",udfcode:"0"},{phrase:"鄂",udfcode:"0"},{phrase:"桂",udfcode:"0"},{phrase:"甘",udfcode:"0"},{phrase:"晋",udfcode:"0"},{phrase:"蒙",udfcode:"0"},{phrase:"陕",udfcode:"0"},{phrase:"吉",udfcode:"0"},{phrase:"闽",udfcode:"0"},{phrase:"贵",udfcode:"0"},{phrase:"粤",udfcode:"0"},{phrase:"青",udfcode:"0"},{phrase:"藏",udfcode:"0"},{phrase:"川",udfcode:"0"},{phrase:"宁",udfcode:"0"},{phrase:"琼",udfcode:"0"}];break;case"车牌地区本地":d=[{phrase:"A",udfcode:"0"},{phrase:"B",udfcode:"0"},{phrase:"C",udfcode:"0"},{phrase:"D",udfcode:"0"},{phrase:"E",udfcode:"0"},{phrase:"F",udfcode:"0"},{phrase:"G",udfcode:"0"},{phrase:"H",udfcode:"0"},{phrase:"I",udfcode:"0"},{phrase:"J",udfcode:"0"},{phrase:"K",udfcode:"0"},{phrase:"L",udfcode:"0"},{phrase:"M",udfcode:"0"},{phrase:"N",udfcode:"0"},{phrase:"O",udfcode:"0"},{phrase:"P",udfcode:"0"},{phrase:"Q",udfcode:"0"},{phrase:"R",udfcode:"0"},{phrase:"S",udfcode:"0"},{phrase:"T",udfcode:"0"},{phrase:"U",udfcode:"0"},{phrase:"V",udfcode:"0"},{phrase:"W",udfcode:"0"},{phrase:"X",udfcode:"0"},{phrase:"Y",udfcode:"0"},{phrase:"Z",udfcode:"0"}];break;case"消防场所类别_人员密集场所_本地":d=[{phrase:"宾馆、饭店",udfcode:"1"},{phrase:"商场、市场",udfcode:"2"},{phrase:"集贸市场",udfcode:"3"},{phrase:"餐饮场所",udfcode:"4"},{phrase:"歌舞厅、卡拉OK厅等歌舞娱乐场所",udfcode:"5"},{phrase:"影剧院、礼堂、录像厅",udfcode:"6"},{phrase:"桑拿浴室、美容院、洗脚房",udfcode:"7"},{phrase:"游艺、游乐场所",udfcode:"8"},{phrase:"夜总会、音乐茶座",udfcode:"9"},{phrase:"网吧",udfcode:"10"},{phrase:"其他公共娱乐场所",udfcode:"11"},{phrase:"医院",udfcode:"12"},{phrase:"学校",udfcode:"13"},{phrase:"养老院、福利院",udfcode:"14"},{phrase:"其他",udfcode:"15"}];break;case"消防场所类别_易燃易爆_本地":d=[{phrase:"汽车加油（气）站",udfcode:"1"},{phrase:"液化石油气供应站（换瓶站）",udfcode:"2"},{phrase:"烟花爆竹",udfcode:"3"},{phrase:"储罐",udfcode:"4"},{phrase:"危化品仓库",udfcode:"5"},{phrase:"其他",udfcode:"6"}];break;case"消防场所类别_居住出租房_本地":d=[{phrase:"1-9人",udfcode:"1"},{phrase:"10-29人",udfcode:"2"},{phrase:"30-99人",udfcode:"3"},{phrase:"100人以上",udfcode:"4"}];break;case"消防场所类别_其他类别_本地":d=[{phrase:"生产加工场所",udfcode:"1"},{phrase:"仓储场所",udfcode:"2"},{phrase:"办公",udfcode:"3"},{phrase:"其他",udfcode:"4"}];break;case"宽带运营商_本地":d=[{phrase:"电信",udfcode:"1"},{phrase:"联通",udfcode:"2"},{phrase:"移动",udfcode:"3"},{phrase:"广电",udfcode:"4"},{phrase:"长城宽带",udfcode:"5"},{phrase:"其他",udfcode:"6"}];break;case"宽带网络类型_本地":d=[{phrase:"房东提供",udfcode:"1"},{phrase:"个人申请",udfcode:"2"},{phrase:"第三方承包",udfcode:"3"}]}createDictDialog(e,d)}function createDictDialog(e,c){var a='<div class="searchbar row no-gutter">    <div class="search-input col-60">       <label class="icon icon-search" for="search"></label>           <input type="search" id=\'search_bar\' onclick=\'click_search_bar()\' placeholder=\'搜索...\'/>    </div>    <div class="col-20" align="right"><a class="button button-fill button-primary" style="width:95%;" id=\'search_btn\' onclick=\'searchDict()\'>搜索</a></div>    <div class="col-20" align="right"><a class="button button-fill button-primary button-warning" style="width:95%;" id=\'clear_btn\' onclick=\'clearDict()\'>清空</a></div>  </div>',t='<div id="dict_nodata" style="height:4.0rem; line-height:4.0rem; display:none;">搜索无数据</div>',d="";c.length>15&&(d+=a),d+=t,d+='<form id=\'dict_form\'><div id="dict_content" class="dict_content">',c.forEach(function(c){var a;a="国籍"===e?createDictItemSingle_gj(c):createDictItemSingle(c),d+=a}),d+="</div></form>",dict_current_modal=$.modal({title:'<span style="color:#0a8ddf; font-weight: 400; font-size:1.2rem;">'+e+'</span><img src="img/dict_close.png" onclick="closeBtn()" style="height:1.5rem; position:absolute; right:-0.65rem; top:-0.65rem;"/>',text:d}),dict_selected_item_code&&""!=dict_selected_item_code?selectCurrentDict(dict_selected_item_code):""!=dict_selected_item_name&&selectCurrentDictByName(dict_selected_item_name)}function createSearchDictDialog(e){var c='<div class="searchbar row no-gutter">    <div class="search-input col-60">       <label class="icon icon-search" for="search"></label>           <input type="search" id=\'search_bar\' onclick=\'click_search_bar()\' placeholder=\'搜索...\'/>    </div>    <div class="col-20" align="right"><a class="button button-fill button-primary" style="width:95%;" id=\'search_btn\' onclick=\'searchDictInSearchMode()\'>搜索</a></div>    <div class="col-20" align="right"><a class="button button-fill button-primary button-warning" style="width:95%;" id=\'clear_btn\' onclick=\'clearDictInSearchMode()\'>清空</a></div>  </div>',a='<div id="dict_nodata" style="height:4.0rem; line-height:4.0rem; display:none;">数据无数据</div>',t='<div id="dict_searching" style="height:4.0rem; line-height:4.0rem; display:none;">数据搜索中</div>',d='<div id="dict_search_info" style="height:4.0rem; line-height:4.0rem;">请输入搜索条件</div>',i="";i+=c,i+=a,i+=t,i+=d,i+='<form id=\'dict_form\'><div id="dict_content" class="dict_content">',i+="</div></form>",dict_current_modal=$.modal({title:'<span style="color:#0a8ddf; font-weight: 400; font-size:1.2rem;">'+e+'</span><img src="img/dict_close.png" onclick="closeBtn()" style="height:1.5rem; position:absolute; right:-0.65rem; top:-0.65rem;"/>',text:i})}function searchDict(){var e=trim($("#search_bar").val()).toUpperCase(),c=$("#dict_content").children();if(e){var a=!0;$("#dict_content").hide();for(var t=0;t<c.length;t++){var d=c[t],i=d.id;i.indexOf(e)<0?(i.indexOf("(")>-1&&(i=i.replace("(","\\("),i=i.replace(")","\\)")),i="#"+i,$(i).hide()):(a=!1,i="#"+i,$(i).show())}$("#dict_content").fadeIn(),a?$("#dict_nodata").show():$("#dict_nodata").hide()}else $("#search_bar").attr("placeholder","搜索关键字不能为空"),$("#search_bar").css({border:"2px solid red"})}function searchDictInSearchMode(){$("#dict_search_info").hide(),$("#dict_nodata").hide(),$("#dict_searching").fadeIn();var e=trim($("#search_bar").val());$("#dict_content").children();if(e){$("#dict_content").hide(),$("#dict_content").empty();var c=new AjaxJsonRequest("dict_list.jsp");c.setData("phrase",e),c.setData("dicttype",dict_search_type),c.setPages(1,99999,-1),c.simpleSend(function(e){if($("#dict_searching").hide(),0==e.datas)return void $("#dict_nodata").show();var c="";e.datas.forEach(function(e){var a=createDictItemSingle(e);c+=a}),$("#dict_content").append(c),$("#dict_content").fadeIn()},function(e){$("#dict_searching").hide(),$.alert(e)})}else $("#search_bar").attr("placeholder","搜索关键字不能为空"),$("#search_bar").css({border:"2px solid red"})}function clearDict(){$("#dict_nodata").hide();var e=trim($("#search_bar").val());if(e){$("#dict_content").hide();for(var c=$("#dict_content").children(),a=0;a<c.length;a++){var t="#"+c[a].id;$(t).show()}$("#search_bar").val(""),$("#search_bar").attr("placeholder","请输入搜索关键字"),$("#search_bar").css({border:""}),$("#dict_content").fadeIn()}}function clearDictInSearchMode(){$("#dict_content").hide(),$("#search_bar").val(""),$("#search_bar").attr("placeholder","请输入搜索关键字"),$("#search_bar").css({border:""}),$("#dict_content").empty(),$("#dict_content").fadeIn()}function click_search_bar(){$("#search_bar").css({border:""})}function createDictItemSingle(e){var c='<div id="'+e.phrase+'" class="dict_content-item" style="margin:0.3rem;"><label class="label-checkbox">   <div class="row">       <div class="col-20" >       <input  type="radio" name="name" value="'+e.udfcode+'" onchange="changeItem(\''+e.udfcode+"','"+e.phrase+'\')">       <div class="item-media" ><i class="icon icon-form-checkbox"></i></div>       </div>       <div class="col-80 dict_text"  >'+e.phrase+"</div>   </div></label></div>";return c}function createDictItemSingle_gj(e){console.log(e);var c='<div id="'+e.phrase+e.xmcode+'" class="dict_content-item" style="margin:0.3rem;"><label class="label-checkbox">   <div class="row">       <div class="col-20" >       <input  type="radio" name="name" value="'+e.udfcode+'" onchange="changeItem(\''+e.udfcode+"','"+e.phrase+'\')">       <div class="item-media" ><i class="icon icon-form-checkbox"></i></div>       </div>       <div class="col-80 dict_text"  >'+e.phrase+"("+e.xmcode+")</div>   </div></label></div>";return c}function changeItem(e,c){dict_selected_item_code=e,dict_selected_item_name=c,""!=dict_form_name?($("#"+dict_form_name).find('input[name="'+dict_callback_input_name+'"]').attr("placeholder",""),$("#"+dict_form_name).find('input[name="'+dict_callback_input_name+'"]').val(dict_selected_item_name),$("#"+dict_form_name).find('input[name="'+dict_callback_input_code+'"]').val(dict_selected_item_code)):($('input[name="'+dict_callback_input_name+'"]').attr("placeholder",""),$('input[name="'+dict_callback_input_name+'"]').val(dict_selected_item_name),$('textarea[name="'+dict_callback_input_name+'"]').attr("placeholder",""),$('textarea[name="'+dict_callback_input_name+'"]').val(dict_selected_item_name),$('input[name="'+dict_callback_input_code+'"]').val(dict_selected_item_code)),dict_callback&&dict_callback(e,c),$.closeModal(dict_current_modal)}function clear_dict_temp(){dict_search_type="",dict_is_search=!1,dict_form_name="",dict_callback=""}function closeBtn(){$.closeModal(dict_current_modal)}function selectCurrentDict(e){$("input[type=radio][name=name][value="+e+"]").attr("checked",!0)}function selectCurrentDictByName(e){e=e.replace(/\//g,"\\/");var c="#"+e+" input";$(c).attr("checked",!0)}function createDictItemMulti(e){var c='<div class="dict_content-item"><label class="label-checkbox">   <div class="row">       <div class="col-20">       <input type="checkbox" name="name" value="'+e.name+'">       <div class="item-media"><i class="icon icon-form-checkbox"></i></div>       </div>       <div class="col-80 dict_text">'+e.name+"</div>   </div></label></div>";return c}var dict_selected_item_code,dict_selected_item_name,dict_callback_input_code,dict_callback_input_name,dict_current_modal="",dict_form_name="",dict_callback="",dict_is_search=!1,dict_search_type;
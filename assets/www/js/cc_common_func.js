function openCzlbDict(o){openDictDialogInForm("船只类型","船舶","good_name","",o)}function open_car_type_dict(o){openDictDialogInFormWithCallback("车辆类型","车辆类型二","good_name","cllxcode",o,function(c,n){init_car_quote(o,n)})}function open_carnum_sf_dict(o){openLocalDictDialogInForm("车牌省份","车牌省份本地","clxx_sf","",o)}function open_carnum_dq_dict(o){openLocalDictDialogInForm("车牌省份","车牌地区本地","clxx_dq","",o)}function load_cc_data(o,c){for(var n=[],_=0;_<cc_form_num+1;_++){var a="#cc_form"+_,e=loadFormToJsonObject(a);if("车"===e.good_type&&""==e.good_name)return $.alert("请输入车辆的类型"),!1;if("船只"===e.good_type&&""==e.good_name)return $.alert("请输入船只的类型"),!1;"车"===e.good_type&&(e.good_property=e.clxx_sf+e.clxx_dq+e.good_property),e.good_type&&(e.wpczlx="xz",e.de_person_id=o,"cyry"===c&&(e.good_describe5="cyry"),n.push(e))}return n}function add_board(){var o=createBoardItem(cc_form_num);cc_form_num++,$("#car_and_boat").append(o),create_cc_common_callback($("#car_and_boat").children().length)}function add_car(){var o=createCarItem(cc_form_num);$("#car_and_boat").append(o),cc_form_num++,create_cc_common_callback($("#car_and_boat").children().length)}function add_item_with_data(o,c){if("车"===o.good_type){var n=createCarItem(cc_form_num);$("#car_and_boat").append(n),$("#cc_form"+cc_form_num+' input[name="good_name"]').val(o.good_name),$("#cc_form"+cc_form_num+' input[name="clxx_sf"]').val(o.good_property.substring(0,1)),$("#cc_form"+cc_form_num+' input[name="clxx_dq"]').val(o.good_property.substring(1,2)),$("#cc_form"+cc_form_num+' input[name="good_property"]').val(o.good_property.substring(2)),$("#cc_form"+cc_form_num+' input[name="good_describe1"]').val(o.good_describe1),$("#cc_form"+cc_form_num+' input[name="good_num"]').val(o.good_num),$("#cc_form"+cc_form_num+' input[name="good_describe2"]').val(o.good_describe2)}else if("船只"===o.good_type){var _=createBoardItem(cc_form_num);$("#car_and_boat").append(_),$("#cc_form"+cc_form_num+' input[name="good_name"]').val(o.good_name),$("#cc_form"+cc_form_num+' input[name="good_property"]').val(o.good_property),$("#cc_form"+cc_form_num+' input[name="good_num"]').val(o.good_num),$("#cc_form"+cc_form_num+' input[name="good_describe2"]').val(o.good_describe2)}c||($("#cc_form"+cc_form_num+" img").hide(),closeAllInput("cc_form"+cc_form_num)),cc_form_num++,create_cc_common_callback($("#car_and_boat").children().length)}function init_car_quote(o,c){var n="#"+o;c.indexOf("外籍汽车")>-1||c.indexOf("电动车")>-1?($(n).find('input[name="good_describe1"]').val(""),$(n).find('input[name="good_property"]').unbind("blur")):($(n).find('input[name="good_property"]').blur(function(){search_car_information(n,c)}),search_car_information(n,c))}function search_car_information(o,c){var n=$(o).find('input[name="good_property"]').val();n=n.toUpperCase(),$(o).find('input[name="good_property"]').val(n);var _=$(o).find('input[name="clxx_dq"]').val(),a=$(o).find('input[name="clxx_sf"]').val(),e=_+n;if(""!=n&&"闽"===a){var r=new AjaxJsonRequest("bd_jdc_list.jsp");r.setData("hphm",e),r.setData("cllx",c),r.send("正在获取车辆信息",function(c){if(c.datas.length>0){var n=c.datas[0];$(o).find('input[name="good_describe1"]').val(n.csys)}else $.alert("没有找到对应车辆信息，请手动输入车辆信息"),$(o).find('input[name="good_describe1"]').val("")},function(o){$.alert("获取车辆信息出错，"+o)})}}function create_cc_actions(){var o=[{text:"请选择",label:!0},{text:"车辆",onClick:function(){add_car()}},{text:"船只",onClick:function(){add_board()}}],c=[{text:"取消",bg:"primary"}],n=[o,c];$.actions(n)}function close_cc_item(o){$.modal({title:"提示",text:"你确定要删除这项吗?",buttons:[{text:"关闭",onClick:function(){}},{text:"删除",onClick:function(){var c="#cc_form"+o;$(c).remove(),create_cc_common_callback($("#car_and_boat").children().length)}}]})}var cc_form_num=0;
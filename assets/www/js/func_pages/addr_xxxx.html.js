function limit_zj(){$.alert("您的权限不能查看相关信息")}function onBackKeyDown(){goback()}function init(){document.addEventListener("backbutton",onBackKeyDown,!1),$.initPullToRefresh(".pull-to-refresh-content"),$(".to-top").toTop({}),$("#quxcun").html(quxcun),$("#all_full_addr").html(all_full_addr),click_menu(get_current_tab())}function click_menu(t){if(cancle_plyd_ry(),$("#right_labels").hide(),$("#fw_icon").attr("src","img/cj_icon1_g.png"),$("#ry_icon").attr("src","img/cj_icon2_g.png"),$("#dw_icon").attr("src","img/cj_icon3_g.png"),$("#rz_icon").attr("src","img/cj_icon4_g.png"),$("#fw_tab").hide(),$("#ry_tab").hide(),$("#dw_tab").hide(),$("#wp_tab").hide(),$("#rz_tab").hide(),$("#lsryTab").hide(),1===t){if(save_current_tab(1),$("#fw_icon").attr("src","img/cj_icon1_b.png"),$("#fw_tab").show(),!ifFwLoaded){var e=getFwlb();e?(showFwList(e),ifFwLoaded=!0):getFwxx(1)}}else if(2===t){if(save_current_tab(2),$("#ry_icon").attr("src","img/cj_icon2_b.png"),$("#ry_tab").show(),!ifRyLoaded){var i=get_rylb_cache();i?(count_ry(),ifRyLoaded=!0,showRyList(getRylb()),init_filter_status("ry"),initPagination("jzry",i.tsize,i.cpage)):(init_ry_filter(),getRyxx(1))}var r=document.getElementById("tag1"),s=document.getElementById("tag2"),l=document.getElementById("tag3");r.style.fontSize=".8rem",r.style.color="#0a8ddf",s.style.fontSize=".7rem",s.style.color="#929292",l.style.fontSize=".7rem",l.style.color="#929292",$("#jzry_tab").show(),$("#lsry_tab").hide(),$("#rybd_tab").hide(),hasRy?(refreshLabels(),$("#add_ry_btn").show()):$("#right_labels").hide()}else if(2.5===t){if(save_current_tab(2.5),$("#ry_icon").attr("src","img/cj_icon2_b.png"),$("#ry_tab").show(),!ifLsryxxLoad){var i=get_lsrylb_cache();i?(ifLsryxxLoad=!0,showLsRyList(getLsrylb()),init_filter_status("lsry"),initPagination("lsry",i.tsize,i.cpage)):(init_lsry_filter(),getLsryxx(1))}var r=document.getElementById("tag1"),s=document.getElementById("tag2"),l=document.getElementById("tag3");s.style.fontSize=".8rem",s.style.color="#0a8ddf",r.style.fontSize=".7rem",r.style.color="#929292",l.style.fontSize=".7rem",l.style.color="#929292",$("#jzry_tab").hide(),$("#lsry_tab").show(),$("#rybd_tab").hide(),$("#right_labels").hide(),$("#add_ry_btn").hide()}else if(2.6===t){$("#ry_icon").attr("src","img/cj_icon2_b.png"),$("#ry_tab").show(),get_rybd_xx(1);var r=document.getElementById("tag1"),s=document.getElementById("tag2"),l=document.getElementById("tag3");l.style.fontSize=".8rem",l.style.color="#0a8ddf",r.style.fontSize=".7rem",r.style.color="#929292",s.style.fontSize=".7rem",s.style.color="#929292",$("#jzry_tab").hide(),$("#lsry_tab").hide(),$("#rybd_tab").show(),$("#right_labels").hide(),$("#add_ry_btn").hide()}else if(3===t){if(save_current_tab(3),$("#dw_icon").attr("src","img/cj_icon3_b.png"),$("#dw_tab").show(),!ifDwLoaded){var i=get_dwlb_cache();i?(ifDwLoaded=!0,showDwList(getDwlb()),init_filter_status("dw"),initPagination("dw",i.tsize,i.cpage)):(init_dw_filter(),getDwxx(1))}}else if(4===t){if(save_current_tab(4),$("#rz_icon").attr("src","img/cj_icon4_b.png"),$("#wp_tab").show(),!ifWpLoaded){var i=get_wplb_cache();i?(ifWpLoaded=!0,showWpList(getWplb()),init_filter_status("wp"),initPagination("wp",i.tsize,i.cpage)):(init_wp_filter(),getWpxx(1))}}else if(5===t&&(save_current_tab(5),$("#rz_tab").show(),!ifRzLoaded)){var i=get_rzlb_cache();i?(ifRzLoaded=!0,showRzList(getRzlb()),initPagination("rz",i.tsize,i.cpage)):getRzxx(1)}}function getFwxx(){var t="";t="yes"===sessionStorage.is_zj?new AjaxJsonRequest("house_list_zj.jsp"):new AjaxJsonRequest("house_list.jsp"),t.setData("systemid",systemid),t.send("房屋信息获取中",function(t){console.log(t),saveFwlb(t),showFwList(t.datas),ifFwLoaded=!0},function(t){$.alert("房屋信息获取失败，"+t)})}function showFwList(t){if($("#fw_list").hide(),$("#fw_list").empty(),$("#fw_list_nodata").hide(),t.length>0){if(houseid=t[0].house_id,"yes"===sessionStorage.is_zj)var e=create_zj_fwTab(t);else var e=createfwTab(t);$("#fw_list").append(e),$("#fw_list").fadeIn(),$("#add_something_btn").fadeIn(),t[0].hssj||"yes"===sessionStorage.is_zj||$.alert("如果当前地址是最小地址，请在进行其他内容的采集前，先核实房屋情况！")}else $("#fw_list_nodata").fadeIn(),"yes"===sessionStorage.is_zj||$.alert("如果当前地址是最小地址，请在进行其他内容的采集前，先新增房屋！")}function fwHs(){"yes"===sessionStorage.is_zj&&(window.location.href="xxxx_edit_fw.html?procmode=PMUPDATE");var t=[{text:"请选择",label:!0},{text:"变更",onClick:function(){window.location.href="xxxx_edit_fw.html?procmode=PMUPDATE"}},{text:"正常",onClick:function(){fwhs_zc()}}],e=[{text:"取消",bg:"primary"}],i=[t,e];$.actions(i)}function add_something(){var t=[{text:"请选择",label:!0},{text:"危险物品",onClick:function(){add_wp_from_fwtab()}},{text:"宽带信息",onClick:function(){add_kd()}},{text:"消防安全排查",onClick:function(){add_xfaqpc()}},{text:"燃气钢瓶（煤气罐）",onClick:function(){add_mqgp()}}],e=[{text:"取消",bg:"primary"}],i=[t,e];$.actions(i)}function add_xfaqpc(){location.href="xxxx_edit_dw_xfaq.html?type=fw&houseid="+houseid}function add_kd(){location.href="xxxx_edit_kd.html?procmode=PMINSERT"}function fwhs_zc(){var t=new AjaxJsonRequest("addr_hsqk_save.jsp");t.setData("systemid",systemid),t.setData("all_full_addr",all_full_addr),t.setData("house_check","1"),t.send("核实中",function(t){showTchToast("房屋核实成功","-1",function(){})},function(t){$.alert("房屋核实失败,"+t)})}function getRyxx(t){var e="";"yes"===sessionStorage.is_zj?e=new AjaxJsonRequest("syrk_list_zj.jsp"):(count_ry(),e=new AjaxJsonRequest("syrk_list.jsp")),e.setData("systemid",systemid),e.setData("xb",ry_filter_xb),e.setData("hsqk",ry_filter_hsqk),e.setData("syrklb",ry_filter_syrklb),e.setData("hssj",ry_filter_hssj),e.setData("keys",ry_filter_keys),e.setPageNumber(t),e.send("人员列表获取中",function(e){saveRylb(e),save_rylb_cache(e.pages[0].tsize,t),ifRyLoaded=!0,$(".to-top").click(),showRyList(e.datas),initPagination("jzry",e.pages[0].tsize,t)},function(t){$.alert("人员信息获取失败，"+t)})}function showRyList(t){if($(".pull-to-refresh-content").removeAttr("style"),$("#right_labels").hide(),$("#add_ry_btn").hide(),$("#ry_tjhs_btn").hide(),$("#ry_content").hide(),$("#ry_list").empty(),$("#ry_list_nodata").hide(),t.length>0){var e="";e="yes"===sessionStorage.is_zj?create_zj_ry_tab(t):createRyTab(t),$("#ry_list").append(e),$("#ry_content").fadeIn(),refreshLabels(),$("#add_ry_btn").fadeIn(),hasRy=!0}else $("#ry_list_nodata").fadeIn()}function show_zj_RyList(t){if($(".pull-to-refresh-content").removeAttr("style"),$("#right_labels").hide(),$("#add_ry_btn").hide(),$("#ry_tjhs_btn").hide(),$("#ry_content").hide(),$("#ry_list").empty(),$("#ry_list_nodata").hide(),t.length>0){var e=create_zj_ry_tab(t);$("#ry_list").append(e),$("#ry_content").fadeIn(),refreshLabels(),$("#add_ry_btn").fadeIn(),hasRy=!0}else $("#ry_list_nodata").fadeIn()}function getLsryxx(t){var e=new AjaxJsonRequest("syrk_list_lsrz.jsp");e.setData("systemid",systemid),e.setData("xb",lsry_filter_xb),e.setData("syrklb",lsry_filter_syrklb),e.setData("hssj",lsry_filter_hssj),e.setData("keys",lsry_filter_keys),e.setPageNumber(t),e.send("历史居住人员列表获取中",function(e){saveLsrylb(e),save_lsrylb_cache(e.pages[0].tsize,t),ifLsryxxLoad=!0,$(".to-top").click(),showLsRyList(e.datas),initPagination("lsry",e.pages[0].tsize,t)},function(t){$.alert("历史居住人员信息获取失败，"+t)})}function showLsRyList(t){if($(".pull-to-refresh-content").removeAttr("style"),$("#lsry_list").hide(),$("#lsry_list").empty(),$("#lsry_list_nodata").hide(),t.length>0){var e=createLsryTab(t);$("#lsry_list").append(e),$("#lsry_list").fadeIn()}else $("#lsry_list_nodata").fadeIn()}function get_rybd_xx(t){var e=new AjaxJsonRequest("log_ryld_list.jsp");e.setData("systemid",systemid),e.setPageNumber(t),e.send("居住人员变动列表获取中",function(e){$(".to-top").click(),show_rybd_list(e.datas),initPagination("rybd",e.pages[0].tsize,t)},function(t){$.alert("居住人员变动信息获取失败，"+t)})}function show_rybd_list(t){if($(".pull-to-refresh-content").removeAttr("style"),$("#rybd_list").hide(),$("#rybd_list").empty(),$("#rybd_list_nodata").hide(),t.length>0){var e=create_rybd_rz_item(t);$("#rybd_list").append(e),$("#rybd_list").fadeIn()}else $("#rybd_list_nodata").fadeIn()}function add_person(t){if("yes"===sessionStorage.is_zj)window.location.href="xxxx_edit_jnry.html?procmode=PMINSERT";else var e=[{text:"请选择",label:!0},{text:"采集境内人员",onClick:function(){window.location.href="xxxx_edit_jnry.html?procmode=PMINSERT"}},{text:"采集境外人员",onClick:function(){window.location.href="xxxx_edit_jwry.html?procmode=PMINSERT"}},{text:"采集无户人员",onClick:function(){location.href="xxxx_edit_whry.html?procmode=PMINSERT"}},{text:"采集访客",onClick:function(){location.href="xxxx_edit_fk.html?procmode=PMINSERT"}}];var i=[{text:"取消",bg:"primary"}],r=[e,i];$.actions(r)}function start_plyd_ry(){is_pl_mode?$.alert("当前已经处于居住人员批量移动模式！"):($(".filter-ry").hide(),$(".plyd_div").show(),$(".plyd_bar").fadeIn(),$(".plyd_div").each(function(t,e){$(this).click(function(e){$(this).hasClass("active")?($(this).removeClass("active"),$(".plyd_tick:eq("+t+")").attr("src","img/un_tick.png"),plyd_data.removeByKey(t+"")):($(this).addClass("active"),$(".plyd_tick:eq("+t+")").attr("src","img/tick.png"),plyd_data.put(t+"",t)),refresh_plyd_count(),e.stopPropagation()})}),is_pl_mode=!0)}function cancle_plyd_ry(){$(".plyd_tick").hide(),$(".plyd_bar").fadeOut(),$(".plyd_div").unbind("click"),$(".filter-ry").show(),un_select(),is_pl_mode=!1}function all_select(){plyd_data=new Map,$(".plyd_div").each(function(t,e){$(".plyd_tick:eq("+t+")").attr("src","img/tick.png"),plyd_data.put(t+"",t)}),refresh_plyd_count()}function un_select(){plyd_data=new Map,$(".plyd_div").each(function(t,e){$(".plyd_tick:eq("+t+")").attr("src","img/un_tick.png")}),refresh_plyd_count()}function plyd(){0===plyd_data.keys().length?$.alert("未选中任何人员"):alert(1)}function refresh_plyd_count(){var t=plyd_data.keys().length;$("#plyd_count").html(t)}function goRyXxxx(t,e){saveCurrentRyItem(e),"境外人口"==t?window.location.href="xxxx_edit_jwry.html?procmode=PMDETAIL&rkbm="+e:"无户人员"==t?window.location.href="xxxx_edit_whry.html?procmode=PMDETAIL&rkbm="+e:"访客"==t?window.location.href="xxxx_edit_fk.html?procmode=PMDETAIL&rkbm="+e:window.location.href="xxxx_edit_jnry.html?procmode=PMEDIT"}function goLsryXxxx(t,e){saveCurrentLsryItem(e),"境外人口"==t?window.location.href="xxxx_edit_jwry.html?procmode=PMDETAIL&rkbm="+e:"三无人员"==t?window.location.href="xxxx_edit_whry.html?procmode=PMDETAIL&rkbm="+e:"访客"==t?window.location.href="xxxx_edit_fk.html?procmode=PMDETAIL&rkbm="+e:window.location.href="xxxx_edit_jnry.html?procmode=PMDETAIL&rkbm="+e}function click_ry_search(){$.prompt("可输入姓名片段或者证件号码片段，如：'夏'、'3502'","人员模糊搜索",function(t){t=trim(t),t?$("#ry_search").addClass("button-fill"):$("#ry_search").removeClass("button-fill"),ry_filter_keys=t,getRyxx(1)},function(t){})}function recreate_ry(t){window.location.href="xxxx_edit_jnry.html?procmode=PMUPDATE&type=recreate&rkbm="+t}function confirm_ry_change(t){var e=new AjaxJsonRequest("log_ryld_save.jsp");e.setData("log_id",t),e.send("居住人员变动核实中",function(e){$.alert("居住人员变动确定成功"),$("#"+t).hide()},function(t){$.alert("居住人员变动确定失败"+t)})}function click_ry_clear(){clear_ry_filter(),getRyxx(1)}function start_ry_filter(){var t=$("#ry_filter").val(),e=t.split(" ");ry_filter_syrklb=e[0].indexOf("不限")>-1?"":e[0],ry_filter_hsqk=e[1].indexOf("不限")>-1?"":e[1],ry_filter_xb=e[2].indexOf("不限")>-1?"":e[2],ry_filter_hssj=e[3].indexOf("不限")>-1?"":e[3],ry_filter_syrklb||ry_filter_hsqk||ry_filter_xb||ry_filter_hssj?$("#ry_filter").addClass("button-fill"):$("#ry_filter").removeClass("button-fill"),getRyxx(1)}function clear_ry_filter(){ry_filter_syrklb="",ry_filter_hsqk="",ry_filter_xb="",ry_filter_hssj="",ry_filter_keys="",$("#ry_filter").val("不限类别 不限情况 不限性别 不限时间"),$("#ry_filter").removeClass("button-fill"),$("#ry_search").removeClass("button-fill")}function getDwxx(t){var e=new AjaxJsonRequest("dw_list.jsp");e.setData("systemid",systemid),e.setData("hssj",dw_filter_hssj),e.setData("keys",dw_filter_keys),e.setPageNumber(t),e.send("单位列表获取中",function(e){saveDwlb(e),save_dwlb_cache(e.pages[0].tsize,t),ifDwLoaded=!0,$(".to-top").click(),showDwList(e.datas),initPagination("dw",e.pages[0].tsize,t)},function(t){$.alert("单位信息获取失败，"+t)})}function showDwList(t){if($(".pull-to-refresh-content").removeAttr("style"),$("#dw_list").hide(),$("#dw_list").empty(),$("#dw_list_nodata").hide(),t.length>0){var e=createDwTab(t);$("#dw_list").append(e),$("#dw_list").fadeIn(),$("#add_dw_btn").show()}else $("#dw_list_nodata").fadeIn(),$("#add_dw_btn").hide()}function editDw(t,e){switch(saveCurrentDwItem(e),t){case"bg":window.location.href="xxxx_edit_dw.html?procmode=PMUPDATE";break;case"xx":window.location.href="xxxx_edit_dw.html?procmode=PMDETAIL"}}function cancelDw(t,e){$.modal({title:"注销单位",text:"确定要注销【"+e+"】这家单位吗？",buttons:[{text:'<span style="color:red;">确定</span>',onClick:function(){var i=new AjaxJsonRequest("dw_cancel.jsp");i.setData("systemid",get_current_system_id()),i.setData("dwid",t),i.setData("dwmc",e),i.setData("czlx","zx"),i.setData("procmode","PMCANCEL"),i.send("单位注销提交中",function(e){showTchToast("单位注销成功","-1",function(){$("#"+t).fadeOut()})},function(t){$.alert("单位注销失败，"+t)})}},{text:"取消",onClick:function(){}}]})}function cancelWp(t,e){$.modal({title:"注销物品",text:"确定要注销这个"+e+"吗？",buttons:[{text:'<span style="color:red;">确定</span>',onClick:function(){var i=[],r=new Object;r.wpid=t,r.good_type=e,r.wpczlx="zx",r.procmode="PMCANCEL",i.push(r);var s=new AjaxJsonRequest("wp_save.jsp");s.setData("wpxx",JSON.stringify(i)),s.setData("systemid",get_current_system_id()),s.send("物品注销提交中",function(e){showTchToast("物品注销成功","-1",function(){$("#"+t).fadeOut()})},function(t){$.alert("物品注销失败，"+t)})}},{text:"取消",onClick:function(){}}]})}function cancelRqgp(t,e){$.modal({title:"注销燃气钢瓶",text:"确定要注销这个燃气钢瓶吗？",buttons:[{text:'<span style="color:red;">确定</span>',onClick:function(){var e=new AjaxJsonRequest("t_gas_user_save.jsp");e.setData("procmode","PMCANCEL"),e.setData("systemid",systemid),e.setData("nid",t),e.send("燃气钢瓶注销提交中",function(e){showTchToast("燃气钢瓶注销成功","-1",function(){$("#"+t).fadeOut()})},function(t){$.alert("燃气钢瓶注销失败，"+t)})}},{text:"取消",onClick:function(){}}]})}function edit_rqgp(t){window.location.href="add_rqgp.html?procmode=PMUPDATE&id="+t}function add_dw(){window.location.href="xxxx_edit_dw.html?procmode=PMINSERT"}function goCyry(t){saveCurrentDwItem(t),window.location.href="addr_xxxx_cyry.html"}function getWpxx(t){var e=new AjaxJsonRequest("wp_list.jsp");e.setData("systemid",systemid),e.setData("type",wp_filter_type),e.setData("hssj",wp_filter_hssj),e.setData("keys",wp_filter_keys),e.setPageNumber(t),e.send("物品列表获取中",function(e){saveWplb(e),save_wplb_cache(e.pages[0].tsize,t),ifWpLoaded=!0,$(".to-top").click(),showWpList(e.datas),initPagination("wp",e.pages[0].tsize,t)},function(t){$.alert("物品信息获取失败，"+t)})}function showWpList(t){if($(".pull-to-refresh-content").removeAttr("style"),$("#wp_list").hide(),$("#wp_list").empty(),$("#wp_list_nodata").hide(),$("#add_wp_btn").hide(),t.length>0){var e=createWpTab(t);$("#wp_list").append(e),$("#add_wp_btn").fadeIn(),$("#wp_list").fadeIn()}else $("#wp_list_nodata").fadeIn()}function add_wp(){var t=[{text:"请选择",label:!0},{text:"车辆船只",onClick:function(){add_cc_from_wptab()}},{text:"危险物品",onClick:function(){add_wp_from_wptab()}},{text:"宽带信息",onClick:function(){add_kd()}},{text:"燃气钢瓶（煤气罐）",onClick:function(){add_mqgp()}}],e=[{text:"取消",bg:"primary"}],i=[t,e];$.actions(i)}function add_mqgp(){window.location.href="add_rqgp.html?procmode=PMINSERT"}function add_cc_from_wptab(){var t=new AjaxJsonRequest("syrk_list.jsp");t.setData("systemid",systemid),t.send("获取人员数据",function(t){if(t.datas.length>0){var e="";e+='<div id="addwprylist" style="max-height:18rem; overflow-y:auto;">',t.datas.forEach(function(t){var i=add_cc_create_rylist(t);e+=i}),e+="</div>",$.modal({title:"请选择",text:e,verticalButtons:!0})}else showTchToast("增加物品","当前地址下无居住人员信息，请先新增居住人员",function(){window.location.href="xxxx_edit_jnry.html?procmode=PMINSERT"})},function(t){$.alert("获取人员列表失败,"+t)})}function add_cc_create_rylist(t){var e=t.pid.substring(0,18),i=t.pid.substring(6,14),r=e.replace(i,"******"),s='<div id="'+t.zjhm+'" class="dict_content-item" style="margin-top:.3rem;margin-tottom:.3rem;"><label class="label-checkbox">   <div class="row">       <div class="col-13">       <input  type="radio" name="name" onclick="add_cc_select_ry(\''+t.rkbm+'\')" >       <div class="item-media"><i class="icon icon-form-checkbox"></i></div>       </div>       <div class="col-60 dict_text">'+r+'</div>       <div class="dict_text"  >'+t.name+"</div>   </div></label></div>";return s}function add_cc_select_ry(t){window.location.href="add_clxx.html?id="+t+"&type=jzry"}function add_wp_from_wptab(){var t;if(ifFwLoaded)t=getFwlb(),t.length>0?location.href="add_wpxx.html?procmode=PMINSERT":location.href="xxxx_edit_fw.html?procmode=PMINSERT";else{var e=new AjaxJsonRequest("house_list.jsp");e.setData("systemid",systemid),e.send("房屋信息获取中",function(t){saveFwlb(t),ifFwLoaded=!0,t.datas.length>0?location.href="add_wpxx.html?procmode=PMINSERT":location.href="xxxx_edit_fw.html?procmode=PMINSERT"},function(t){$.alert("房屋信息获取失败，"+t)})}}function add_wp_from_fwtab(){window.location.href="add_wpxx.html?procmode=PMINSERT"}function add_cc_from_rytab(t){saveCurrentRyItem(t),window.location.href="add_clxx.html?procmode=PMINSERT"}function edit_cc_from_wptab(t,e,i,r,s,l,n,a,_){window.location.href="add_clxx_edit.html?ryid="+t+"&wpid="+e+"&cphm="+l+"&cplx="+n+"&type="+a+"&wplx="+i+"&num="+r+"&ms2="+_}function edit_wp_from_wptab(t,e,i,r,s,l,n,a,_){var o="物品修改",d='<div class="list-block" style="margin:0;">   <ul style="border:0">       <li>           <div class="item-content">               <div class="item-inner" style="border: 0;">                   <div class="item-title label" style="width:35%">类　型:</div>                   <div class="item-input">                       <input type="text" name="wplx" readOnly="true" placeholder="请输物品类型" value="'+i+'">                   </div>               </div>           </div>       </li>';"烈性犬"!=i&&"其他"!=i||(d+='        <li>           <div class="item-content">               <div class="item-inner" style="border: 0;">                   <div class="item-title label" style="width:35%">名　称:</div>                   <div class="item-input">                       <input type="text" name="good_name"  placeholder="请输物品名称" value="'+n+'">                   </div>               </div>           </div>       </li>'),d+='        <li>           <div class="item-content">               <div class="item-inner" style="border: 0;">                   <div class="item-title label" style="width:35%">数　量:</div>                   <div class="item-input">                       <input type="text" name="wpsl" placeholder="请输物品数量" value="'+r+'">                   </div>               </div>           </div>       </li>       <li>           <div class="item-content">               <div class="item-inner" style="border: 0;">                   <div class="item-title label" style="width:35%">描　述:</div>                   <div class="item-input">                       <input type="text" name="wpms" placeholder="请输物品描述" value="'+s+'">                   </div>               </div>           </div>       </li>   </ul></div>',$.modal({title:o,text:d,buttons:[{text:"关闭",onClick:function(){}},{text:"提交",onClick:function(){save_wp_edit(e,t,$('input[name="wplx"]').val(),$('input[name="wpsl"]').val(),$('input[name="wpms"]').val(),$('input[name="good_name"]').val())}}]})}function save_wp_edit(t,e,i,r,s,l){var n=new AjaxJsonRequest("wp_save.jsp"),a=new Array,_=new Object;_.wpid=t,_.wpczlx="bg",_.de_person_id=e,_.good_type=i,_.good_name=l,_.good_num=r,_.good_describe1=s,a.push(_);var o=JSON.stringify(a);n.setData("wpxx",o),n.send("物品修改信息更改中",function(t){showTchToast("提示","物品修改成功",function(){})},function(t){$.alert("物品修改失败，"+t)})}function getRzxx(t){var e=new AjaxJsonRequest("log_list.jsp");e.setData("systemid",systemid),e.setPageNumber(t),e.send("日志获取中",function(e){saveRzlb(e),save_rzlb_cache(e.pages[0].tsize,t),ifRzLoaded=!0,$(".to-top").click(),showRzList(e.datas),initPagination("rz",e.pages[0].tsize,t)},function(t){$.alert("日志信息获取失败，"+t)})}function showRzList(t){if($("#rz_list").hide(),$("#rz_list").empty(),$("#rz_list_nodata").hide(),t.length>0){$("#rz_list").empty();var e=1;t.forEach(function(t){var i=createRzItem(t,e);$("#rz_list").append(i),e++}),$("#rz_list").fadeIn()}else $("#rz_list_nodata").fadeIn()}function showLogXx(t,e){t.indexOf("fw")>-1?window.location.href="xxxx_edit_fw.html?procmode=PMDETAIL":t.indexOf("dw")>-1?window.location.href="xxxx_edit_dw.html?procmode=PMDETAIL&dwid="+e:t.indexOf("wp")>-1||(t.indexOf("cyry")>-1?window.location.href="xxxx_edit_cyry.html?type=rz&procmode=PMDETAIL&cyry_id="+e:t.indexOf("ryjn")>-1?window.location.href="xxxx_edit_jnry.html?procmode=PMDETAIL&rkbm="+e:t.indexOf("ryjw")>-1?window.location.href="xxxx_edit_jwry.html?procmode=PMDETAIL&rkbm="+e:t.indexOf("rywh")>-1&&(window.location.href="xxxx_edit_whry.html?procmode=PMDETAIL&rkbm="+e))}function initPagination(t,e,i){i=parseInt(i);var r="#"+t+"_pagination";$(r).pagination({showData:15,totalData:e,current:i,jump:!0,coping:!0,count:2,homePage:"首页",endPage:"末页",callback:function(e){save_current_page_number(e.getCurrent()),"jzry"===t?(getRyxx(e.getCurrent()),cancle_plyd_ry()):"lsry"===t?getLsryxx(e.getCurrent()):"dw"===t?getDwxx(e.getCurrent()):"wp"===t?getWpxx(e.getCurrent()):"rz"===t?getRzxx(e.getCurrent()):"rybd"===t&&get_rybd_xx(e.getCurrent())}},function(t){pagination=t}),e>15?$(r).show():$(r).hide()}function count_ry(){var t=new AjaxJsonRequest("syrk_lb_num.jsp");t.setData("systemid",systemid),t.simpleSend(function(t){$("#jn_yhs").html("0"),$("#jw_yhs").html("0"),$("#wh_yhs").html("0"),$("#jn_zs").html("0"),$("#jw_zs").html("0"),$("#wh_zs").html("0"),t.datas.forEach(function(t){"境内"===t.syrklb?"已核实"===t.hsqk?$("#jn_yhs").html(t.num):"总数"===t.hsqk&&$("#jn_zs").html(t.num):"境外"===t.syrklb?"已核实"===t.hsqk?$("#jw_yhs").html(t.num):"总数"===t.hsqk&&$("#jw_zs").html(t.num):"无户"===t.syrklb&&("已核实"===t.hsqk?$("#wh_yhs").html(t.num):"总数"===t.hsqk&&$("#wh_zs").html(t.num))})},function(t){$.alert("居住人员数量获取失败，"+t)})}function openDict(t,e,i,r){openDictDialog(t,e,i,r)}function go_back(){"yes"===sessionStorage.is_zj?tchBackToNative():history.go(-1)}function goback(){"yes"===sessionStorage.is_zj?tchBackToNative():(clear_addr_xxxx_cache(),clear_all_addr_filter_cache(),history.go(-1))}function go_home(){sessionStorage.room_system_id&&(sessionStorage.room_system_id=""),sessionStorage.room_all_full_addr&&(sessionStorage.room_all_full_addr=""),clear_addr_xxxx_cache(),clear_all_addr_filter_cache(),window.location.href="home_map.html"}function gotoChangeLocation(){changePos("dz","")}function init_ry_filter(t){$("#ry_filter").picker({toolbarTemplate:'<header class="bar bar-nav">  <button class="button button-link pull-left close-picker">取消</button>  <button class="button button-link pull-right close-picker" onclick="start_ry_filter()">确定</button>  <h1 class="title">居住人员筛选</h1>  </header>',cssClass:"ry_filter",inputReadOnly:!0,value:t?t:["不限类别","不限情况","不限性别","不限时间"],cols:[{textAlign:"center",values:["不限类别","人户一致","有人无户","流动人口","境外人员","无户人员"]},{textAlign:"center",values:["不限情况","未核实","正常居住","未见面"]},{textAlign:"center",values:["不限性别","男","女"]},{textAlign:"center",values:["不限时间","一天内","三天内","一周内","一个月内","三个月内"]}]})}function click_ry_filter(){ry_filter_arr&&$("#ry_filter").picker("setValue",ry_filter_arr)}function click_ry_search(){$.prompt("可输入姓名片段或者证件号码片段，如：'夏'、'3502'","历史居住人员模糊搜索",function(t){save_ry_filter_ss(t),setup_ry_search(t),getRyxx(1)},function(t){})}function click_ry_clear(){clear_ry_filter(),getRyxx(1)}function start_ry_filter(){var t=$("#ry_filter").val();save_ry_filter_sx(t),setup_ry_filter(t,!1),getRyxx(1)}function setup_ry_filter(t,e){var i=t.split(" ");ry_filter_arr=i,e&&init_ry_filter(i),ry_filter_syrklb=i[0].indexOf("不限")>-1?"":i[0],ry_filter_hsqk=i[1].indexOf("不限")>-1?"":i[1],ry_filter_xb=i[2].indexOf("不限")>-1?"":i[2],ry_filter_hssj=i[3].indexOf("不限")>-1?"":i[3],ry_filter_syrklb||ry_filter_hsqk||ry_filter_xb||ry_filter_hssj?$("#ry_filter").addClass("button-fill"):$("#ry_filter").removeClass("button-fill")}function setup_ry_search(t){t=trim(t),t?$("#ry_search").addClass("button-fill"):$("#ry_search").removeClass("button-fill"),ry_filter_keys=t}function clear_ry_filter(){ry_filter_syrklb="",ry_filter_hsqk="",ry_filter_xb="",ry_filter_hssj="",ry_filter_keys="",ry_filter_arr="",save_ry_filter_ss(),save_ry_filter_sx(),$("#ry_filter").picker("setValue",["不限类别","不限情况","不限性别","不限时间"]),$("#ry_filter").removeClass("button-fill"),$("#ry_search").removeClass("button-fill")}function init_lsry_filter(t){$("#lsry_filter").picker({toolbarTemplate:'<header class="bar bar-nav">  <button class="button button-link pull-left close-picker">取消</button>  <button class="button button-link pull-right close-picker" onclick="start_lsry_filter()">确定</button>  <h1 class="title">历史居住人员筛选</h1>  </header>',cssClass:"lsry_filter",inputReadOnly:!0,value:t?t:["不限类别","不限性别","不限时间"],cols:[{textAlign:"center",values:["不限类别","人户一致","有人无户","流动人口","境外人员","无户人员"]},{textAlign:"center",values:["不限性别","男","女"]},{textAlign:"center",values:["不限时间","一天内","三天内","一周内","一个月内","三个月内"]}]})}function click_lsry_filter(){lsry_filter_arr&&$("#lsry_filter").picker("setValue",lsry_filter_arr)}function click_lsry_search(){$.prompt("可输入姓名片段或者证件号码片段，如：'夏'、'3502'","历史居住人员模糊搜索",function(t){setup_lsry_search(t),save_lsry_filter_ss(t),getLsryxx(1)},function(t){})}function click_lsry_clear(){clear_lsry_filter(),getLsryxx(1)}function start_lsry_filter(){var t=$("#lsry_filter").val();save_lsry_filter_sx(t),setup_lsry_filter(t,!1),getLsryxx(1)}function setup_lsry_filter(t,e){var i=t.split(" ");lsry_filter_arr=i,e&&init_lsry_filter(i),lsry_filter_syrklb=i[0].indexOf("不限")>-1?"":i[0],lsry_filter_xb=i[1].indexOf("不限")>-1?"":i[1],lsry_filter_hssj=i[2].indexOf("不限")>-1?"":i[2],lsry_filter_syrklb||lsry_filter_xb||lsry_filter_hssj?$("#lsry_filter").addClass("button-fill"):$("#lsry_filter").removeClass("button-fill")}function setup_lsry_search(t){t=trim(t),t?$("#lsry_search").addClass("button-fill"):$("#lsry_search").removeClass("button-fill"),lsry_filter_keys=t}function clear_lsry_filter(){lsry_filter_syrklb="",lsry_filter_xb="",lsry_filter_hssj="",lsry_filter_keys="",lsry_filter_arr="",save_lsry_filter_ss(),save_lsry_filter_sx(),$("#lsry_filter").picker("setValue",["不限类别","不限性别","不限时间"]),$("#lsry_filter").removeClass("button-fill"),$("#lsry_search").removeClass("button-fill")}function init_dw_filter(t){$("#dw_filter").picker({toolbarTemplate:'<header class="bar bar-nav">  <button class="button button-link pull-left close-picker">取消</button>  <button class="button button-link pull-right close-picker" onclick="start_dw_filter()">确定</button>  <h1 class="title">单位筛选</h1>  </header>',cssClass:"dw_filter",inputReadOnly:!0,value:t?t:["不限时间"],cols:[{textAlign:"center",values:["不限时间","一天内","三天内","一周内","一个月内","三个月内"]}]})}function click_dw_filter(){dw_filter_arr&&$("#dw_filter").picker("setValue",dw_filter_arr)}function click_dw_search(){$.prompt("可输入单位名称、法人代表姓名、负责人姓名片段，如：'天创'","单位模糊搜索",function(t){setup_dw_search(t),save_ry_filter_ss(t),getDwxx(1)},function(t){})}function click_dw_clear(){clear_dw_filter(),getDwxx(1)}function start_dw_filter(){var t=$("#dw_filter").val();save_dw_filter_sx(t),setup_dw_filter(t,!1),getDwxx(1)}function setup_dw_filter(t,e){var i=t.split(" ");dw_filter_arr=i,e&&init_dw_filter(i),dw_filter_hssj=i[0].indexOf("不限")>-1?"":i[0],dw_filter_hssj?$("#dw_filter").addClass("button-fill"):$("#dw_filter").removeClass("button-fill")}function setup_dw_search(t){t=trim(t),t?$("#dw_search").addClass("button-fill"):$("#dw_search").removeClass("button-fill"),dw_filter_keys=t}function clear_dw_filter(){dw_filter_hssj="",dw_filter_keys="",dw_filter_arr="",save_dw_filter_ss(),save_dw_filter_sx(),$("#dw_filter").picker("setValue",["不限时间"]),$("#dw_filter").removeClass("button-fill"),$("#dw_search").removeClass("button-fill")}function init_wp_filter(t){$("#wp_filter").picker({toolbarTemplate:'<header class="bar bar-nav">  <button class="button button-link pull-left close-picker">取消</button>  <button class="button button-link pull-right close-picker" onclick="start_wp_filter()">确定</button>  <h1 class="title">物品筛选</h1>  </header>',cssClass:"wp_filter",inputReadOnly:!0,value:t?t:["不限类别","不限时间"],cols:[{textAlign:"center",values:["不限类别","车","船","烈性犬","煤气罐","信鸽","低慢小","管制刀具","枪支（弹药）","弓（弩）","危爆物品","其他危险源"]},{textAlign:"center",values:["不限时间","一天内","三天内","一周内","一个月内","三个月内"]}]})}function click_wp_filter(){wp_filter_arr&&$("#wp_filter").picker("setValue",wp_filter_arr)}function click_wp_search(){$.prompt("可输入车船归属人姓名片段或者物品名称片段，如：'夏'、'爆'","物品模糊搜索",function(t){setup_wp_search(t),save_wp_filter_ss(t),getWpxx(1)},function(t){})}function click_wp_clear(){clear_wp_filter(),getWpxx(1)}function start_wp_filter(){var t=$("#wp_filter").val();save_wp_filter_sx(t),setup_wp_filter(t,!1),getWpxx(1)}function setup_wp_filter(t,e){var i=t.split(" ");wp_filter_arr=i,e&&init_wp_filter(i),wp_filter_type=i[0].indexOf("不限")>-1?"":i[0],wp_filter_hssj=i[1].indexOf("不限")>-1?"":i[1],wp_filter_type||wp_filter_hssj?$("#wp_filter").addClass("button-fill"):$("#wp_filter").removeClass("button-fill")}function setup_wp_search(t){t=trim(t),t?$("#wp_search").addClass("button-fill"):$("#wp_search").removeClass("button-fill"),wp_filter_keys=t}function clear_wp_filter(){wp_filter_type="",wp_filter_hssj="",wp_filter_keys="",wp_filter_arr="",save_wp_filter_ss(),save_wp_filter_sx(),$("#wp_filter").picker("setValue",["不限类别","不限时间"]),$("#wp_filter").removeClass("button-fill"),$("#wp_search").removeClass("button-fill")}function init_filter_status(t){var e;switch(t){case"ry":e=get_ry_filter_object(),setup_ry_filter(e.sx?e.sx:"不限类别 不限情况 不限性别 不限时间",!0),setup_ry_search(e.ss);break;case"lsry":e=get_lsry_filter_object(),setup_lsry_filter(e.sx?e.sx:"不限类别 不限性别 不限时间",!0),setup_lsry_search(e.ss);break;case"dw":e=get_dw_filter_object(),setup_dw_filter(e.sx?e.sx:"不限时间",!0),setup_dw_search(e.ss);break;case"wp":e=get_wp_filter_object(),setup_wp_filter(e.sx?e.sx:"不限类别 不限时间",!0),setup_wp_search(e.ss)}}function goto_xf(t,e,i,r){location.href="xxxx_edit_dw_xfaq.html?type=dw&dwid="+t+"&dwmc="+e+"&fzr="+i+"&fzrlxfs="+r}function move_ryxx(t,e){openDictDialogWithCallbackAndParams("本楼栋下室牌","室地址","","",function(i,r){saveCurrentRyItem(e),"境外人口"==t?window.location.href="xxxx_edit_jwry.html?procmode=PMUPDATE&rkbm="+e+"&systemid="+i+"&all_full_addr="+r:"无户人员"==t?window.location.href="xxxx_edit_whry.html?procmode=PMUPDATE&rkbm="+e+"&systemid="+i+"&all_full_addr="+r:window.location.href="xxxx_edit_jnry.html?procmode=PMUPDATE&systemid="+i+"&all_full_addr="+r},systemid)}function fk_edit(t){location.href="xxxx_edit_fk.html?procmode=PMUPDATE&rkbm="+t}function fk_quit(t,e){$.modal({title:"核实离开",text:"确定要将访客"+e+"核实为离开？",buttons:[{text:'<span style="color:red;">确定</span>',onClick:function(){var e=new AjaxJsonRequest("syrk_fk_save.jsp");e.setData("procmode","PMCANCEL"),e.setData("code",t),e.setData("systemid",systemid),e.send("访客核实离开中",function(e){showTchToast("核实离开成功","-1",function(){$("#"+t).fadeOut()})},function(t){$.alert("核实离开失败，"+t)})}},{text:"取消",onClick:function(){}}]})}function zj_quit(t,e){$.modal({title:"核实离开",text:"确定要将租客"+e+"核实为离开？",buttons:[{text:'<span style="color:red;">确定</span>',onClick:function(){var e=new AjaxJsonRequest("syrk_jnry_save_zj.jsp");e.setData("procmode","PMINSERT"),e.setData("czlx","zx"),e.setData("person_id",t),e.setData("systemid",systemid),e.send("租客核实离开中",function(e){showTchToast("核实离开成功","-1",function(){$("#"+t).fadeOut()})},function(t){$.alert("核实离开失败，"+t)})}},{text:"取消",onClick:function(){}}]})}function edit_kd_from_wptab(t,e,i,r,s,l){location.href="xxxx_edit_kd.html?procmode=PMUPDATE&id="+t+"&name="+e+"&des1="+i+"&des2="+r+"&des3="+s+"&des4="+l}"ss"==getCurrentCategory()||save_if_jump_from_search("false"),setCurrentCategory("cj");var quxcun=get_current_quxcun(),all_full_addr=get_current_all_full_addr(),systemid=get_current_system_id();"yes"===sessionStorage.is_zj&&($("#dw_btn").attr("onclick","limit_zj()"),$("#wp_btn").attr("onclick","limit_zj()"),
$("#menu_btn").hide(),$("#tag15").hide(),$("#tag2").hide(),$("#tag25").hide(),$("#tag3").hide(),$("#menu_btn").hide(),$("#hide_for_zj1").remove(),$("#hide_for_zj2").remove(),$("#hide_for_zj3").remove(),$("#hide_for_zj4").remove(),$("#add_something_btn").remove());var ifFwLoaded=!1,ifRyLoaded=!1,ifDwLoaded=!1,ifWpLoaded=!1,ifLsryxxLoad=!1,ifRzLoaded=!1,hasRy=!1,ry_filter_xb="",ry_filter_syrklb="",ry_filter_hsqk="",ry_filter_hssj="",ry_filter_keys="",ry_filter_arr="",lsry_filter_xb="",lsry_filter_syrklb="",lsry_filter_hssj="",lsry_filter_keys="",lsry_filter_arr="",dw_filter_hssj="",dw_filter_keys="",dw_filter_arr="",wp_filter_type="",wp_filter_hssj="",wp_filter_keys="",wp_filter_arr="",houseid="",is_pl_mode=!1,plyd_data=new Map;$(document).on("refresh",".pull-to-refresh-content",function(t){setTimeout(function(){ifFwLoaded=!1,ifRyLoaded=!1,ifDwLoaded=!1,ifWpLoaded=!1,ifRzLoaded=!1,ifLsryxxLoad=!1,hasRy=!1,clearHsCache(),clear_addr_xxxx_cache(),click_menu(get_current_tab()),$.pullToRefreshDone(".pull-to-refresh-content")},0)});
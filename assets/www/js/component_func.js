function tchToast(t){$.toast(t),setTimeout(function(){location.replace("addr_xxxx.html")},5e3)}function showTchToast(t,e,a){$("body").append(AT_Field),$.modal({title:t,text:"-1"==e?"采集成功后同步需要时间<br>请十秒后下拉刷新界面":e}),setTimeout(function(){$("#never_at_field").remove(),$.closeModal(),a()},2500)}function evolveCalendar(t){var e="#"+t;$(e).calendar({monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],dayNames:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],dayNamesShort:["日","一","二","三","四","五","六"],onDayClick:function(t,e,a,o,i){var n=!1;if(n){var r=new Date,l=r.getFullYear(),d=r.getMonth()+1,c=r.getDate();if(o=parseInt(o)+1,!(a<=l))return $.alert("您选择的年份大于当前年份"),!1;if(a==l){if(!(o<=d))return $.alert("您选择的月份大于当前月份"),!1;if(o==d&&!(i<=c))return $.alert("您选择的日期大于当前日期"),!1}}}})}var AT_Field='<div id="never_at_field" style="z-index:20000;position:absolute;width:100%;height:100%;left:0px;top:0px;background:#000;filter:alpha(opacity=0);opacity:0;"></div>';
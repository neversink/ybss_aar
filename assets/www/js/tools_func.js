function getArgs(){for(var e={},t=location.search.substring(1),i=t.split("&"),n=0;n<i.length;n++){var s=i[n].indexOf("=");if(s!=-1){var r=i[n].substring(0,s),l=i[n].substring(s+1);l=decodeURIComponent(l),e[r]=l}}return e}function loadDataToForm(e){var t,i,n,s,r,l=e;for(x in l)t=x,i=l[x],i&&$("[name='"+t+"'],[name='"+t+"[]']").each(function(){if(n=$(this)[0].tagName,$(this).attr("placeholder",""),s=$(this).attr("type"),"INPUT"==n)if("radio"==s)$(this).attr("checked",$(this).val()==i);else if("checkbox"==s){r=i.split(",");for(var e=0;e<r.length;e++)if($(this).val()==r[e]){$(this).attr("checked",!0);break}}else $(this).val(i);else"SELECT"!=n&&"TEXTAREA"!=n||$(this).val(i)})}function closeAllInput(e){var t=$("#"+e+" input");t.attr("placeholder",""),t.attr("disabled","disabled");var i=$("#"+e+" textarea");i.attr("placeholder",""),i.attr("disabled","disabled");var n=$("#"+e+" select");n.attr("placeholder",""),n.attr("disabled","disabled")}function openAllInput(e){var t=$("#"+e+" input");t.removeAttr("disabled");var i=$("#"+e+" textarea");i.removeAttr("disabled")}function tlog(){if(isBugMode){var e=arguments.length;if(2==e){var t=arguments[0],i=arguments[1];tlog2(t,i)}else{var n=arguments[0];tlog1(n)}}}function tlog1(e){console.log(e)}function tlog2(e,t){console.log(e),console.log(t)}function Map(){this.elements=new Array,this.size=function(){return this.elements.length},this.isEmpty=function(){return this.elements.length<1},this.clear=function(){this.elements=new Array},this.put=function(e,t){this.elements.push({key:e,value:t})},this.removeByKey=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)if(this.elements[i].key==e)return this.elements.splice(i,1),!0}catch(e){t=!1}return t},this.removeByValue=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)if(this.elements[i].value==e)return this.elements.splice(i,1),!0}catch(e){t=!1}return t},this.removeByValueAndKey=function(e,t){var n=!1;try{for(i=0;i<this.elements.length;i++)if(this.elements[i].value==t&&this.elements[i].key==e)return this.elements.splice(i,1),!0}catch(e){n=!1}return n},this.get=function(e){try{for(i=0;i<this.elements.length;i++)if(this.elements[i].key==e)return this.elements[i].value}catch(e){return!1}return!1},this.element=function(e){return e<0||e>=this.elements.length?null:this.elements[e]},this.containsKey=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)this.elements[i].key==e&&(t=!0)}catch(e){t=!1}return t},this.containsValue=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)this.elements[i].value==e&&(t=!0)}catch(e){t=!1}return t},this.containsObj=function(e,t){var n=!1;try{for(i=0;i<this.elements.length;i++)this.elements[i].value==t&&this.elements[i].key==e&&(n=!0)}catch(e){n=!1}return n},this.values=function(){var e=new Array;for(i=0;i<this.elements.length;i++)e.push(this.elements[i].value);return e},this.valuesByKey=function(e){var t=new Array;for(i=0;i<this.elements.length;i++)this.elements[i].key==e&&t.push(this.elements[i].value);return t},this.keys=function(){var e=new Array;for(i=0;i<this.elements.length;i++)e.push(this.elements[i].key);return e},this.keysByValue=function(e){var t=new Array;for(i=0;i<this.elements.length;i++)e==this.elements[i].value&&t.push(this.elements[i].key);return t},this.keysRemoveDuplicate=function(){var e=new Array;for(i=0;i<this.elements.length;i++){for(var t=!0,n=0;n<e.length;n++)if(e[n]==this.elements[i].key){t=!1;break}t&&e.push(this.elements[i].key)}return e}}function trim(e){return e.replace(/(^\s*)|(\s*$)/g,"")}function distinct(e){e.sort();for(var t=[e[0]],i=1;i<e.length;i++)e[i]!==t[t.length-1]&&t.push(e[i]);return t}function isCarNum(e){var t=/(^[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/.test(e.value);return t||$.alert("请输入正确车牌号码"),t}function isTelNum(e){if(""!==e.value){var t=/^0?1[3|4|5|8][0-9]\d{8}$/.test(e.value);return t||$.alert("请输入正确手机号码"),t}return!0}function isIdCardNum(e){var t={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "},i="",n=!0;if(e&&/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(e))if(t[e.substr(0,2)]){if(18==e.length){e=e.split("");for(var s=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],r=[1,0,"X",9,8,7,6,5,4,3,2],l=0,a=0,u=0,h=0;h<17;h++)a=e[h],u=s[h],l+=a*u;r[l%11];r[l%11]!=e[17]&&(i="校验位错误",n=!1)}}else i="地址编码错误",n=!1;else i="身份证号格式错误",n=!1;return n||$.alert("请输入正确的公民身份号码"),n}function isEmptyObject(e){for(var t in e)return!1;return!0}function getSfzXx(e,t,i,n,s,r){if(""!=e){var l=new AjaxJsonRequest("bjrk_list.jsp");l.setData("sfzh",e),l.send("正在获取人员信息",function(e){if(e.datas.length>0){var l=e.datas[0];""!=l.CZRKXM?(""!=t&&$('input[name="'+t+'"]').val(l.CZRKXM?l.CZRKXM:""),""!=i&&$('input[name="'+i+'"]').val(l.CZRKLXFS?l.CZRKLXFS:""),""!=n&&$('input[name="'+n+'"]').val(l.CZRKZY?l.CZRKZY:""),""!=s&&$('input[name="'+s+'"]').val(l.CZRKZY?l.CZRKZY:""),""!=r&&$('input[name="'+r+'"]').val(l.CZRKRYBH?l.CZRKRYBH:"")):(""!=t&&$('input[name="'+t+'"]').val(""),""!=i&&$('input[name="'+i+'"]').val(""),""!=n&&$('input[name="'+n+'"]').val(""),""!=s&&$('input[name="'+s+'"]').val(""),""!=r&&$('input[name="'+r+'"]').val(""))}},function(e){$.alert("获取人员信息失败："+e)})}}function getXbCn(e){return"1"==e?"男":"2"==e?"女":"0"==e?"未知性别":"9"==e?"未说明的性别":void 0}var isBugMode=!0;
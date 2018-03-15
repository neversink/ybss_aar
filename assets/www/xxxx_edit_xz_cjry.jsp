<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
		<title></title>
	</head>
	<link rel="stylesheet" href="css/light7.min.css">
	<script type='text/javascript' src='js/jquery-3.1.0.js' charset='utf-8'></script>
	<script type='text/javascript' src='js/light7.min.js' charset='utf-8'></script>
	<script type='text/javascript' src='js/transformer.js' charset='utf-8'></script>
	<script type="text/javascript" src="js/tools_func.js"></script>
	<script type="text/javascript" src="js/cyryhs_func.js"></script>
	<script type="text/javascript" src="js/dict_func.js"></script>
	<script type='text/javascript' charset='utf-8' src="js/common_function.js"></script>
	<script type='text/javascript' charset='utf-8' src="js/component_func.js"></script>
	<script type='text/javascript' charset='utf-8' src="js/storage_func.js"></script>
	<!-- 自定义css样式 -->
	<link rel="stylesheet" href="css/mycss.css">

	<script type="text/javascript">
		var dwid = getArgs().dwid; 
		var dwmc = getArgs().dwmc;
		var uuid = getUuid();
		var IDTAG = '';

		function changeHidden(name, value) {
			if(name == 'zzbm') {
				switch(value) {
					case '负责人':
						$('input[name="zzbm"]').val('1');
						break;
					case '业主':
						$('input[name="zzbm"]').val('2');
						break;
					case '普通职工':
						$('input[name="zzbm"]').val('3');
						break;
				}
			}
		}

		function getUuid() {
			var len = 32; //32长度   
			var radix = 16; //16进制  
			var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
			var uuid = [],
				i;
			radix = radix || chars.length;
			if(len) {
				for(i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
			} else {
				var r;
				uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
				uuid[14] = '4';
				for(i = 0; i < 36; i++) {
					if(!uuid[i]) {
						r = 0 | Math.random() * 16;
						uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
					}
				}
			}
			return uuid.join('');
		}

		function init() {

			$('#quxcun').html(dwmc); 
			$('#zjlx').val("居民身份证");
			$('input[name="zjhm"]').blur(function() {
				getsfz($('input[name="zjhm"]').val());
			});
		}

		function sendReq() {
			var req = new AjaxJsonRequest("cyry_xz_save.jsp");
			req.setData("nid", dwid);
			req.setData("dwmc", dwmc);
			req.setData("rylx", "cyry");
			req.setData("zjlx", "居民身份证");

			req.loadDataFromForm("form"); //从表单获取获取

			var nnf = new NotNullField();
			nnf.add("zjlx", "证件类型");
			nnf.add("zjhm", "证件号码");
			nnf.add("name", "姓名");
			nnf.add("lxfs", "联系方式");

			req.setNotNotNullField(nnf);
			req.send(
				"自行采集信息提交中",
				function(res) {
					$.alert("提交成功");
					$('#btn_save').attr("disabled","disabled");
					$('#btn_save').hide();
				},
				function(msg) {
					$.alert(msg);
					$('#btn_save').removeAttr("disabled");
				});
		}

		function doQueryList() {

			var req = new AjaxJsonRequest("t_pid_code_list.jsp");
			req.setData("uuid", uuid);
			req.send(
				"",
				function(res) {

					showMsg(res);
				},
				function(msg) {
					$.alert("获取实名身份证核验结果失败	" + msg);
					//
				});

		}
		

		function showMsg(res) {
			IDTAG = res.datas.get(0).code;
			if('' !== IDTAG) {
				$.alert("IDTAG2	" + IDTAG);
				if('00' == IDTAG) {
					$.alert('00' == IDTAG);
					$.alert("实名认证成功！")
				} else {
					$.alert("实名认证失败！")
				}
			} else {
				setTimeout(function() {
					doQueryList();
				}, 3000);
			}
		}

		function doSaveList() {
			var name = document.getElementById("name").value; //$("#zjhm").val();
			var pid = document.getElementById("zjhm").value; //$("#name").val();
			if('' == name || '' == pid) {
				$.alert("请先输入身份证和姓名！")
			} else {
				var rebackurl = "http://222.76.243.213:5370/sspt/t_pid_code_save.jsp?uuid=" + uuid;
				//			encodeURI(pid);
				encodeURI(name);
				//			name\pid\startTime\stopTime\returnUrl\erroUrldealDate\VenderName\businessType
				//			\vendorIp\reqMode\signMethod\kongjian\fwbh\returnRx\returnDn\signatrue
				//			document.getElementById('openApp').onclick = function(e){
				//通过iframe的方式试图打开App,如果能正常打开,会直接切换到App,并自动阻止a标签的行为
				//否则打开a标签的href的连接
				var hh = "ssotch://sfrz/openwith?reqMode=09&kongjian=&pid=" + pid + "&name=" + name +
					"&returnUrl=" + rebackurl +
					"&erroUrl=" + rebackurl +
					"&returnRx=&returnDn=&fwbh=&vendorIp=&businessType=&VenderName=&dealDate=&signatrue=" +
					"&startTime=&stopTime=&signMethod=&checksign=checked";
				//				var hh='ssotch://sfrz/openwith?name=%E6%9D%8E%E9%BA%9F%E8%BE%89&pid=350629199206100012&startTime=&stopTime=&returnUrl=http://i0596110.zzpolice.gov.cn/ga110/weixin/user/checkcard2_result.jsp?nid=14610&erroUrl=http://i0596110.zzpolice.gov.cn/ga110/weixin/user/checkcard2_result.jsp?nid=14610&dealDate=20161206&venderName=%E6%BC%B3%E5%B7%9E110%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0&businessType=%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81&vendorIp=www.tchsoft.com&reqMode=09&signMethod=MD5&kongjian=&fwbh=2601071016060607&returnRx=1&returnDn=0&signature=5DBBEE92B5526D3C55DD49708FAF3367';
				//			console.log(hh);
				var ifr = document.createElement("iframe");
				ifr.src = hh;
				//						console.log(ifr);
				ifr.style.display = 'none';
				document.body.appendChild(ifr);
				setTimeout(function() {
					document.body.removeChild(ifr);
					doQueryList();
				}, 3000);
			}
		}

		function openDict(title, type, dict_name, dict_id) {
			openDictDialog(title, type, dict_name, dict_id);
		}

		function changeHiddenIdCard(code, name) {
		    if ('居民身份证' == name) {
		        $('input[name="zjhm"]').blur(function() {
		            getsfz($('input[name="zjhm"]').val());
		        });
		        $('#hjdqx').show();
		        $('#hjdzz').show();
		    } else {
		        $('input[name="zjhm"]').unbind('blur');
		        $('#hjdqx').hide();
		        $('#hjdzz').hide();
		    }
		}
		
		function getsfz(pid) {
		    if (pid != "" && isIdCardNum(pid)) {
		        var req = new AjaxJsonRequest("bjrk_list.jsp");
		        req.setData("sfzh", pid);
		        req.send("正在获取人员信息", function(data) {
		            if (data.datas.length > 0) {
		                var ss = data.datas[0];
		                if (ss.CZRKXM != "") {
		                    $('input[name="name"]').val(ss.CZRKXM ? ss.CZRKXM : "");
		                    $('input[name="lxfs"]').val(ss.CZRKLXFS ? ss.CZRKLXFS : "");
		                    $('input[name="hjdssx"]').val(ss.CZRKSSSSXQ ? ss.CZRKSSSSXQ : "");
		                    if (ss.CZRKZZ && ss.CZRKSSSSXQ) {
		                        $('input[name="hjdxz"]').val(ss.CZRKZZ.substring(ss.CZRKSSSSXQ.length));
		                    }
		                } else {
		                    $('input[name="name"]').val("");
		                    $('input[name="lxfs"]').val("");
		                    $('input[name="hjdssx"]').val("");
		                    $('input[name="hjdxz"]').val("");
		                    // $.alert("没有找到对应人员信息，请手动采集");
		                }
		            }
		        }, function(data) {
		            $.alert("获取人员信息失败，" + data);
		        });
		    }
		}

		
		
	</script>

	<body onload="init()">
		<div class="content">
			<form id="form">
				<!-- 地址信息 -->
				<div class="history">
					<div class="history-title" style="color: #0a8ddf; font-size: .8rem;">
						<img src="img/cj_address.png" style="height: 1.0rem; vertical-align: middle; margin-right: .2rem;" /> 单位信息
					</div>
					<div style="background: #E3E3E3; height: 1px; width: 100%;"></div>
					<div class="history-menu-label" style="padding-left: .5rem; padding-bottom: 0;">
						<span id="quxcun" style="display: block; font-size: .8rem;"></span> <span id="all_full_addr"></span>
					</div>
				</div>

				<!-- 人员信息 -->
				<div class="history">
					<div class="history-title" style="color: #0a8ddf; font-size: .8rem;">
						<img src="img/cj_house.png" style="height: 1.0rem; vertical-align: middle; margin-right: .2rem;" /> 人员信息
					</div>
					<div class="list-block" style="margin: 0 .75rem;">
						<ul>
							<li>
								<div class="item-content">
									<div class="item-inner" style="border: 0;">
										<div class="item-title label">证件类型<span class="table-redstar">*</span></div>
										<div class="item-input">
											<input type="text" id="zjlx" name="zjlx" onclick="openDictDialogWithCallback('证件类型', '证件类型', 'zjlx', 'zjlxbm',changeHiddenIdCard)" readOnly="true" placeholder="请输入证件类型">
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="item-content">
									<div class="item-inner" style="border: 0;">
										<div class="item-title label">证件号码<span class="table-redstar">*</span></div>
										<div class="item-input">
											<input type="text" id="zjhm" name="zjhm" placeholder="请输入证件号码">
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="item-content">
									<div class="item-inner" style="border: 0;">
										<div class="item-title label">姓　　名<span class="table-redstar">*</span></div>
										<div class="item-input">
											<input type="text" id="name" name="name" placeholder="请输入姓名">
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="item-content">
									<div class="item-inner" style="border: 0;">
										<div class="item-title label">联系方式<span class="table-redstar">*</span></div>
										<div class="item-input">
											<input type="text" name="lxfs" placeholder="请输入联系方式" >
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="item-content" id="hjdqx">
									<div class="item-inner" style="border: 0;">
										<div class="item-title label">省市区县</div>
										<div class="item-input">
                                        <input type="text" readonly="true" name="hjdssx" placeholder="请输入户籍地址省市区县" onclick="openDictSearchDialog('区县', '区县', 'hjdssx', 'hjdssxbm');">
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="item-content" id="hjdzz">
									<div class="item-inner" style="border: 0;">
										<div class="item-title label">户籍地详址</div>
										<div class="item-input">
											<input type="text" id="hjdxz" name="hjdxz" placeholder="请输入户籍地详址">
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="item-content">
									<div class="item-inner" style="border: 0;">
										<div class="item-title label">职　　业</div>
										<div class="item-input">
											<input type="text" name="zy" readOnly="true" placeholder="请选择从业人员职业" onclick="openLocalDictDialog('从业人员职业', '从业人员职业本地', 'zy', 'zzbm')" />
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div class="content-block" style="margin: .5rem;">
						<div class="row">
							<div class="col-50">
								<input type="button" name="smrz_save" id="smrz_save" onclick="doSaveList()" class="button button-big button-fill" value="实名认证"></input>
							</div>
							<div class="col-50">
								<input name="btn_save" id="btn_save" type="button" onclick="sendReq()" class="button button-big button-fill" value="保　　存"></input>
							</div>
						</div>
					</div>

					<div class="content-block" style="margin: .5rem; ">
						<div class="item-title label" style="margin-top: 2rem; height: 2rem;">
							<a href="http://sfrz.tchsoft.com/" id="openApp">实名认证请先下载网络身份认证app</a>

						</div>

					</div>
			</form>
			</div>

	</body>

</html>
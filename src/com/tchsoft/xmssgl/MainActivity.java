/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package com.tchsoft.xmssgl;

import android.os.Bundle;
import android.widget.Toast;


import com.idcard.Demo;

import org.apache.cordova.*;


public class MainActivity extends CordovaActivity {

//    public static Demo engineDemo = new Demo();

    //    private String url = "http://tchsoft.com:8080/xmssgl_demo2/home_map.html";
    private String url = "http://222.76.243.213:5370/xmsspt/home_map.html";
    private String username;
    private String userid;
    private String zj_systemid;
    private String zj_all_full_addr;
    private String is_zj;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        username = getIntent().getStringExtra("username");
        userid = getIntent().getStringExtra("userid");
        zj_systemid = getIntent().getStringExtra("zj_systemid");
        zj_all_full_addr = getIntent().getStringExtra("zj_all_full_addr");
        is_zj = getIntent().getStringExtra("is_zj");

//        userid = "18000000002";
//        username = "测试";


        username = (null != username ? username : "");
        userid = (null != userid ? userid : "");
        zj_systemid = (null != zj_systemid ? zj_systemid : "");
        zj_all_full_addr = (null != zj_all_full_addr ? zj_all_full_addr : "");
        is_zj = (null != is_zj ? is_zj : "");

        NeverLand.userid = userid;
        NeverLand.username = username;
        NeverLand.zj_systemid = zj_systemid;
        NeverLand.zj_all_full_addr = zj_all_full_addr;
        NeverLand.is_zj = is_zj;
//        userid = "13866816550";

//        addParam();

//        Toast.makeText(MainActivity.this, NeverLand.userid, Toast.LENGTH_SHORT).show();


//        engineDemo.initengine(this);
//        engineDemo.SetParam(GlobalData.T_SET_HEADIMG, 1);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        // Set by <content src="index.html" /> in config.xml
//        loadUrl("index.html?userid=" + userid);
//        loadUrl(url);
//        loadUrl(launchUrl);
        loadUrl(launchUrl);
//        loadUrl(launchUrl + "?userid=" + userid + "&username=" + username);
    }

    private void addParam() {
        url += ("?username=" + username + "&userid=" + userid);
    }


}

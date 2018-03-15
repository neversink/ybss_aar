package com.neversink.wormhole;

import android.content.Context;
import android.content.Intent;

import com.neversink.shortvideo.WidthMatchVideo;
import com.neversink.shortvideo.YWRecordVideoActivity;
import com.tchsoft.xmssgl.NeverLand;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import static android.R.attr.data;

/**
 * Created by never on 2016/12/21.
 */

public class Wormhole extends CordovaPlugin {

    private CallbackContext callbackContext;
    private Context c;

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        c = cordova.getActivity().getApplicationContext();
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        this.callbackContext = callbackContext;

        if (action.equals("traversing")) {

            String userid = NeverLand.userid;
            String username = NeverLand.username;
            String zj_systemid = NeverLand.zj_systemid;
            String zj_all_full_addr = NeverLand.zj_all_full_addr;
            String is_zj = NeverLand.is_zj;

            JSONObject obj = new JSONObject();
            try {
                obj.put("userid", userid);
                obj.put("username", username);
                obj.put("zj_systemid", zj_systemid);
                obj.put("zj_all_full_addr", zj_all_full_addr);
                obj.put("is_zj", is_zj);
            } catch (JSONException e) {
                this.callbackContext.error("获取userid失败!");
            }
            this.callbackContext.success(obj);
            return true;
        }
        return false;
    }
}

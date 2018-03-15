package com.idcard;

import android.content.Context;
import android.content.Intent;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class IdcardDetective extends CordovaPlugin {

//    private CallbackContext callbackContext;
//    private Context c;
//
//    @Override
//    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
//        super.initialize(cordova, webView);
//        c = cordova.getActivity().getApplicationContext();
//    }
//
//    @Override
//    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
//
//        this.callbackContext = callbackContext;
//
//        if (action.equals("recognize")) {
//
//            Intent intent = new Intent(cordova.getActivity(), com.idcard.RectPhoto.class);
//            cordova.startActivityForResult((CordovaPlugin) this, intent, 1);
//            return true;
//        }
//        return false;
//    }
//
//    @Override
//    public void onActivityResult(int requestCode, int resultCode, Intent data) {
//        if (requestCode == 1 && data != null) {
//
//            JSONObject obj = new JSONObject();
//
//            try {
//                obj.put("xm", com.idcard.RectPhoto.cardInfo.getName());
//                obj.put("xb", com.idcard.RectPhoto.cardInfo.getSex());
//                obj.put("mz", com.idcard.RectPhoto.cardInfo.getFolk());
//                obj.put("zz", com.idcard.RectPhoto.cardInfo.getAddress());
//                obj.put("sfz", com.idcard.RectPhoto.cardInfo.getCardNum());
//                obj.put("qfjg", com.idcard.RectPhoto.cardInfo.getIssue());
//                obj.put("yxqx", com.idcard.RectPhoto.cardInfo.getPeriod());
//                obj.put("cs", com.idcard.RectPhoto.cardInfo.getBirthDay());
//
//
//            } catch (JSONException e) {
//                this.callbackContext.error("身份证识别出错!");
//            }
//            this.callbackContext.success(obj);
//
//        } else {
//            this.callbackContext.error("身份证识别出错!!");
//        }
//    }

}

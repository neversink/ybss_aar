package com.neversink.shortvideo;

import android.content.Context;
import android.content.Intent;

import com.neversink.shortvideo.WidthMatchVideo;
import com.neversink.shortvideo.YWRecordVideoActivity;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import static android.app.Activity.RESULT_OK;

public class Shortvideo extends CordovaPlugin {

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

        if (action.equals("record")) {

            Intent intent = new Intent(cordova.getActivity(), YWRecordVideoActivity.class);
            cordova.startActivityForResult((CordovaPlugin) this, intent, 1);
            return true;
        } else if (action.equals("play")) {

            JSONObject params = args.getJSONObject(0);
            String videoPath = "";
            if (params.has("videoPath")) {
                videoPath = params.getString("videoPath");
                Intent intent = new Intent(cordova.getActivity(), WidthMatchVideo.class);
                intent.putExtra("videoPath", videoPath);
                cordova.startActivityForResult((CordovaPlugin) this, intent, 1);

                return true;
            } else {

                this.callbackContext.error("请传入videoPath!");

                return false;
            }


        }
        return false;
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == 1 && data != null && resultCode == RESULT_OK) {

            JSONObject obj = new JSONObject();
            try {
                obj.put("videoPath", data.getStringExtra("videoPath"));
                obj.put("framePicPath", data.getStringExtra("framePicPath"));
                obj.put("videoDuration", data.getStringExtra("videoDuration"));
                obj.put("videoSize", String.valueOf(data.getIntExtra("videoSize", 0)));

            } catch (JSONException e) {
                this.callbackContext.error("拍摄短视频失败!");
            }

            this.callbackContext.success(obj);

        } else {
            this.callbackContext.error("拍摄短视频失败!!");
        }
    }
}

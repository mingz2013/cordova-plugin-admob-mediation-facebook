package me.mingz.cordova.admob.mediation;


import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;

import android.app.Activity;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;

public class AdMobMediationApplovinPlugin extends CordovaPlugin {

    String TAG = "<AdMobMediationApplovinPlugin>: ";




    private Activity getActivity() {
        return cordova.getActivity();
    }

    /*************************overwrite******************************/

    @Override
    protected void pluginInitialize() {
        super.pluginInitialize();
    }


    @Override
    public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        JSONObject params = args.getJSONObject(0);

        if (action.equals("initSDK")) {
            this.execActionInitSDK(params, callbackContext);
            return true;

        return super.execute(action, args, callbackContext);
    }

    /*************************execute action******************************/

    private void execActionInitSDK(JSONObject args, CallbackContext callbackContext) throws JSONException {


        this.initSDK(args);

        callbackContext.success();


    }


    private void initSDK(JSONObject args) throws JSONException {
        AppLovinSdk.initializeSdk(context);
    }



}
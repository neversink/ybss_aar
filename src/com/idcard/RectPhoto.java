
package com.idcard;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Bitmap.Config;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.PixelFormat;
import android.hardware.Camera;
import android.hardware.Camera.AutoFocusCallback;
import android.hardware.Camera.PictureCallback;
import android.hardware.Camera.ShutterCallback;
import android.hardware.Camera.Size;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Display;
import android.view.Gravity;
import android.view.MotionEvent;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.idcard.GlobalData;
import com.tchsoft.xmssgl.MainActivity;
import com.tchsoft.xmssgl.R;

import java.io.IOException;
import java.util.List;

/////////http://download.csdn.net/download/ssxxqqaaa/5262932
public class RectPhoto extends Activity implements SurfaceHolder.Callback {
    public void surfaceCreated(SurfaceHolder holder)
    // SurfaceView启动�?初次实例化，预览界面被创建时，该方法被调用�?
    {

    }


    public void surfaceDestroyed(SurfaceHolder holder)
    //销毁时候调用
    {
    }


    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height)
    // 当SurfaceView/预览界面的格式和大小发生改变时，该方法被调用
    {

    }
//	private static final String tag="yan";
//	private boolean isPreview = false;
//	private SurfaceView mPreviewSV = null; //预览SurfaceView
//	//private DrawImageView mDrawIV = null;
//	private SurfaceHolder mySurfaceHolder = null;
//	private Button mPhotoImgBtn = null;
//	private Button mCloseBtn = null;
//	private Camera myCamera = null;
//	private Bitmap mBitmap = null;
//	public static Bitmap rectBitmap;
//	private AutoFocusCallback myAutoFocusCallback = null;
//	private AutoFocusCallback myAutoFocusCallback1 = null;
//	public static final int only_auto_focus = 110;
//	private static final int auto_focus = 111;
//	private static final int take_pic_ok = 222;
//	private static final int get_data_ok = 333;
//	static int width,height;
//	private TextView logtxt;
//	private WindowManager manager;
//	private Display display;
//	private RelativeLayout.LayoutParams Params;
//	public static com.idcard.CardInfo cardInfo = new com.idcard.CardInfo();
//	List<Size> mSupportedPreviewSizes;
//	int issuccessfocus=0;
//	@Override
//	public void onCreate(Bundle savedInstanceState) {
//		super.onCreate(savedInstanceState);
//
//
//		requestWindowFeature(Window.FEATURE_NO_TITLE);
//		int flag = WindowManager.LayoutParams.FLAG_FULLSCREEN;
//		Window myWindow = this.getWindow();
//		myWindow.setFlags(flag, flag);
//		//cardInfo.setNull();
//
//		manager = (WindowManager) getBaseContext().getSystemService(
//				Context.WINDOW_SERVICE);
//		display = manager.getDefaultDisplay();
//		setContentView(R.layout.idcard_activity_rect_photo);
//		logtxt = new TextView(getBaseContext());
//		int textWidth = display.getWidth() / 2;
//		Params = new RelativeLayout.LayoutParams(textWidth,RelativeLayout.LayoutParams.WRAP_CONTENT);
//		Params.addRule(RelativeLayout.CENTER_IN_PARENT);
//		//if (MainActivity.ischeck == true) {
//			logtxt.setText("请将身份证置于预览区中,尽量使身份证区域足够大!");
////		}
////		else {
////			logtxt.setText("请将身份证置于此区域尝试对齐边缘-方框可移动及手动调整大小");
////		}
//		issuccessfocus = 0;
//		if (rectBitmap != null) {
//			rectBitmap.recycle();
//			rectBitmap= null;
//		}
//		logtxt.setGravity(Gravity.CENTER);
//		logtxt.setTextSize(16);
//		logtxt.setTextColor(Color.WHITE);
//		logtxt.setLayoutParams(Params);
//		RelativeLayout layout = (RelativeLayout) findViewById(R.id.TxtLayout);
//		layout.addView(logtxt);
//
//		//初始化SurfaceView
//		mPreviewSV = (SurfaceView)findViewById(R.id.previewSV);
//		mPreviewSV.setZOrderOnTop(false);
//		mySurfaceHolder = mPreviewSV.getHolder();
//		mySurfaceHolder.setFormat(PixelFormat.TRANSPARENT);//translucent半�?�?transparent透明
//
//		mySurfaceHolder.addCallback(this);
//		mySurfaceHolder.setType(SurfaceHolder.SURFACE_TYPE_PUSH_BUFFERS);
//
//		//自动聚焦变量回调
//		myAutoFocusCallback = new AutoFocusCallback() {
//
//			public void onAutoFocus(boolean success, Camera camera) {
//				// TODO Auto-generated method stub
//				if(success)//success表示对焦成功
//				{
//					Log.i(tag, "myAutoFocusCallback: success...");
//					//myCamera.setOneShotPreviewCallback(null);
//					mHandler.sendEmptyMessageDelayed(take_pic_ok,300);
//				}
//				else
//				{
//
//					Log.i(tag, "myAutoFocusCallback: 失败");
//
//				}
//
//
//			}
//		};
//		myAutoFocusCallback1 = new AutoFocusCallback() {
//
//			public void onAutoFocus(boolean success, Camera camera) {
//				// TODO Auto-generated method stub
//				if(success)//success表示对焦成功
//				{
//					issuccessfocus++;
//					if(issuccessfocus <= 1)
//					mHandler.sendEmptyMessage(only_auto_focus);
//					Log.i(tag, "myAutoFocusCallback1: success..."+issuccessfocus);
//				}
//				else
//				{
//					//if (issuccessfocus == 0) {
//						mHandler.sendEmptyMessage(only_auto_focus);
//					//}
//					Log.i(tag, "myAutoFocusCallback1: 失败...");
//
//				}
//
//
//			}
//		};
//
//
//		mPhotoImgBtn = (Button)findViewById(R.id.photoImgBtn);
//
//		mPhotoImgBtn.setOnClickListener(new PhotoOnClickListener());
//
//		mCloseBtn = (Button)findViewById(R.id.closeBtn);
//		mCloseBtn.setOnClickListener(new OnClickListener()
//		{
//			@Override
//			public void onClick(View arg0)
//			{
//				Intent it = new Intent();
//				setResult(1, it);
//				RectPhoto.this.finish();
//			}
//		});
//		mHandler.sendEmptyMessageDelayed(only_auto_focus, 100);
//	}
//
//	@Override
//	public boolean onTouchEvent(MotionEvent event) {
//		// TODO Auto-generated method stub
//		if (myCamera != null) {
//			myCamera.autoFocus(myAutoFocusCallback1);
//		}
//		return true;
//	}
//	private Handler mHandler = new Handler(){
//
//		@Override
//		public void handleMessage(Message msg) {
//			// TODO Auto-generated method stub
//			super.handleMessage(msg);
//			switch (msg.what) {
//				case only_auto_focus:
//					if(myCamera != null)
//						myCamera.autoFocus(myAutoFocusCallback1);
//					break;
//				case auto_focus:
//					if(myCamera != null)
//						myCamera.autoFocus(myAutoFocusCallback);
//					break;
//				case take_pic_ok:
//					logtxt.setText("请稍后,正在识别中...");
//					if(myCamera != null)
//						myCamera.takePicture(myShutterCallback, null, myJpegCallback);
//					break;
//				case get_data_ok:
//
//					byte[] data = (byte[]) msg.obj;
//					if (data == null) {
//						Toast.makeText(getApplicationContext(), "拍照数据获取失败，请手动对焦", Toast.LENGTH_SHORT).show();
//						myCamera.startPreview();
//						myCamera.autoFocus(myAutoFocusCallback1);
//						return;
//					}
//
//
//			        BitmapFactory.Options options = new BitmapFactory.Options();
//		            options.inPreferredConfig = Config.RGB_565;
//		            mBitmap=BitmapFactory.decodeByteArray(data, 0, data.length,options);
//						rectBitmap = mBitmap;
//		            int isRecSucess = 0;
//
//		            isRecSucess = MainActivity.engineDemo.RunOCR(rectBitmap);
//					if (isRecSucess == 1) {
//						String name = MainActivity.engineDemo.GetFieldString(com.idcard.GlobalData.NAME);
//						String sex = MainActivity.engineDemo.GetFieldString( com.idcard.GlobalData.SEX);
//						String folk = MainActivity.engineDemo.GetFieldString( com.idcard.GlobalData.FOLK);
//						String BirthDay = MainActivity.engineDemo.GetFieldString( com.idcard.GlobalData.BIRTHDAY);
//						String Address = MainActivity.engineDemo.GetFieldString( com.idcard.GlobalData.ADDRESS);
//						String CardNum = MainActivity.engineDemo.GetFieldString( com.idcard.GlobalData.NUM);
//						String issue = MainActivity.engineDemo.GetFieldString( com.idcard.GlobalData.issue);
//						String period = MainActivity.engineDemo.GetFieldString(com.idcard.GlobalData.period);
//						byte []hdata = MainActivity.engineDemo.GetHeadImgBuf();
//						int size =  MainActivity.engineDemo.GetHeadImgBufSize();
//						cardInfo.setName(name);
//						cardInfo.setSex(sex);
//						cardInfo.setFolk(folk);
//						cardInfo.setAddress(Address);
//						cardInfo.setBirthDay(BirthDay);
//						cardInfo.setCardNum(CardNum);
//						cardInfo.setIssue(issue);
//						cardInfo.setPeriod(period);
//						if (size > 0 && hdata != null && hdata.length > 0) {
//							cardInfo.setHeadBit(BitmapFactory.decodeByteArray(hdata,0,size));
//						}
//
//					}
//					else {
//						cardInfo.setNull();
//					}
//					if(null != myCamera)
//					{
//						myCamera.setPreviewCallback(null); /*在启动PreviewCallback时这个必须在前不然�?出出错�?
//						这里实际上注释掉也没关系*/
//
//						myCamera.stopPreview();
//						isPreview = false;
//						myCamera.release();
//						myCamera = null;
//					}
//					Intent it = new Intent();
//					//it.putExtra("Result", cardinfo);
//					setResult(1, it);
//					RectPhoto.this.finish();
//					break;
//
//			}
//		}
//	};
//	/*下面三个是SurfaceHolder.Callback创建的回调函*/
//	public void surfaceChanged(SurfaceHolder holder, int format, int width,int height)
//	// 当SurfaceView/预览界面的格式和大小发生改变时，该方法被调用
//	{
//		// TODO Auto-generated method stub
//		Log.i(tag, "SurfaceHolder.Callback:surfaceChanged!");
//		initCamera();
//	}
//
//
//	public void surfaceCreated(SurfaceHolder holder)
//	// SurfaceView启动�?初次实例化，预览界面被创建时，该方法被调用�?
//	{
//		// TODO Auto-generated method stub
//		myCamera = Camera.open();
//		try {
//			myCamera.setPreviewDisplay(mySurfaceHolder);
//			Log.i(tag, "SurfaceHolder.Callback: surfaceCreated!");
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			if(null != myCamera){
//				myCamera.release();
//				myCamera = null;
//			}
//			e.printStackTrace();
//		}
//
//
//
//	}
//
//
//	public void surfaceDestroyed(SurfaceHolder holder)
//	//销毁时候调用
//	{
//		// TODO Auto-generated method stub
//		Log.i(tag, "SurfaceHolder.Callback：Surface Destroyed");
//		if(null != myCamera)
//		{
//			myCamera.setPreviewCallback(null); /*在启动PreviewCallback时这个必须在前不然�?出出错�?
//			这里实际上注释掉也没关系*/
//
//			myCamera.stopPreview();
//			isPreview = false;
//			myCamera.release();
//			myCamera = null;
//		}
//
//	}
//
//	//初始化相机
//	public void initCamera(){
//		if(isPreview){
//			myCamera.stopPreview();
//		}
//		if(null != myCamera){
//			Camera.Parameters myParam = myCamera.getParameters();
//			myParam.setPictureFormat(PixelFormat.JPEG);//设置拍照后存储的图片格式
//			myParam.setJpegQuality(100);
//	        DisplayMetrics displaysMetrics = new DisplayMetrics();
//	        getWindowManager().getDefaultDisplay().getMetrics( displaysMetrics );
//
//	        width = displaysMetrics.widthPixels;
//	        height = displaysMetrics.heightPixels;
//
//	        myParam.setPreviewSize(width, height);
//	        myParam.setPictureSize(width, height);
//			myParam.set("rotation", 0);
//			myCamera.setDisplayOrientation(0);
//			try
//			{
//				myCamera.setParameters(myParam);
//			}
//			catch(Exception e)
//			{
//				e.printStackTrace();
//			}
//			myCamera.startPreview();
//			mHandler.sendEmptyMessageDelayed(only_auto_focus, 100);
//			isPreview = true;
//		}
//	}
//
//	/*为了实现拍照的快门声音及拍照保存照片�?��下面三个回调变量*/
//	ShutterCallback myShutterCallback = new ShutterCallback()
//	//快门按下的回调，在这里我们可以设置类似播放�?咔嚓”声之类的操作�?默认的就是咔嚓�?
//	{
//
//		public void onShutter() {
//			// TODO Auto-generated method stub
//			Log.i(tag, "myShutterCallback:onShutter...");
//
//		}
//	};
//	PictureCallback myRawCallback = new PictureCallback()
//	// 拍摄的未压缩原数据的回调,可以为null
//	{
//
//		public void onPictureTaken(byte[] data, Camera camera) {
//			// TODO Auto-generated method stub
//			Log.i(tag, "myRawCallback:onPictureTaken...");
//
//		}
//	};
//	PictureCallback myJpegCallback = new PictureCallback()
//	//对jpeg图像数据的回调函数使用
//	{
//
//		public void onPictureTaken(byte[] data, Camera camera) {
//			// TODO Auto-generated method stub
//			Log.i(tag, "myJpegCallback:onPictureTaken...");
//			if(null != data){
//				//mBitmap = BitmapFactory.decodeByteArray(data, 0, data.length);//data是字节数据，将其解析成位�?
//				myCamera.stopPreview();
//				Message msg_data = mHandler.obtainMessage();
//				msg_data.what = get_data_ok;
//				msg_data.obj = data;
//				mHandler.sendMessage(msg_data);
//				isPreview = false;
//
//			}
//
//		}
//	};
//
//	//拍照按键的监听
//	public class PhotoOnClickListener implements OnClickListener{
//
//		public void onClick(View v) {
//			// TODO Auto-generated method stub
//			if(isPreview && myCamera!=null){
//				//myCamera.takePicture(myShutterCallback, null, myJpegCallback);
//				isPreview = false;
//				mHandler.sendEmptyMessage(auto_focus);
//
//			}
//
//		}
//
//	}
//	public static String mCurrentPhotoFile;
//	@Override
//	public void onBackPressed()
//	//无意中按返回键时要释放内�?
//	{
//		// TODO Auto-generated method stub
//		Intent it = new Intent();
//		it.putExtra("Result", "识别结果：null" +   "    时间:"+0 +"ms");
//		setResult(1, it);
//		RectPhoto.this.finish();
//		super.onBackPressed();
//	}
//	@Override
//	protected void onDestroy() {
//		// TODO Auto-generated method stub
//		if(myCamera != null){
//			myCamera.stopPreview();
//			isPreview = false;
//			myCamera.release();
//			myCamera = null;
//		}
//		super.onDestroy();
//	}
}

package com.idcard;

import android.os.Environment;

public class GlobalData {
	public static int NAME  = 0;
	public static int SEX   = 1;
	public static int FOLK  = 2;
	public static int BIRTHDAY = 3;
	public static int ADDRESS = 4;
	public static int NUM   = 5;
	public static int issue = 6;
	public static int period = 7;
	
	
	public static int T_ONLY_CARD_NUM = 0x0001;
	public static int T_SET_HEADIMG   = 0x0002;
	public static int T_SET_PRINTFLOG = 0x0003;
	public static int T_SET_LOGPATH   = 0x0004;
	public static int T_SET_OPENORCLOSE_LOGPATH = 0x0005;
	public static int T_SET_HEADIMGBUFMODE = 0x0006;
	
	
	static String SDCARD_ROOT_PATH = Environment.getExternalStorageDirectory().getPath();
	public static String LOGPath = SDCARD_ROOT_PATH + "/IDImage/slog.txt";
}

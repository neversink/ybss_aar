package com.idcard;

import android.content.Context;
import android.graphics.Bitmap;

import java.io.UnsupportedEncodingException;

public class Demo {
//	static
//    {
//         System.loadLibrary("IDCARDDLL");
//    }
//
//	public native static int RECOCRBoot(Context context);
//	public native static int LoadImage(String path);
//	public native static int RECOCR();
//	public native static int FreeImage();
//    public native static byte [] GetOCRStringBuf();
//    public native static byte [] GetCopyrightInfo();
//    public native static byte [] GetVersion();
//    public native static byte [] GetOCRFieldStringBuf(int field);
//    public native static int TerminateOCRHandle();
//    public native static int LoadMemBitMap(Bitmap map);
//    public native static int  SaveImage(String path);
//    public native static int  SetLOGPath(String path);
//    public native static byte [] GetHeadImgBuf();
//    public native static int  GetHeadImgBufSize();
//    public native static int  SetParam(int Param,int value);
//    public int initengine(Context context) {
//		int ret = RECOCRBoot(context);
//		return ret;
//	}
//    public int RunOCR(Bitmap map)
//    {
//    	int ret =0;
//    	ret = LoadMemBitMap(map);
//    	if (ret != 1) {
//			return 0;
//		}
//    	ret = RECOCR();
//    	FreeImage();
//    	return ret;
//
//    }
//    public String GetFieldString(int field)
//    {
//    	byte []buf = GetOCRFieldStringBuf(field);
//       	String str = null;
//		try {
//			str = new String(buf,"GB2312");
//		} catch (UnsupportedEncodingException e) {
//			e.printStackTrace();
//		}
//		return str;
//
//    }
//    public int uinitengine()
//    {
//    	int ret =0;
//    	ret = TerminateOCRHandle();
//    	return ret;
//    }
//    public String GetTheIDcardEngineCopyrightInfo()
//    {
//    	byte []buf = GetCopyrightInfo();
//       	String str = null;
//		try {
//			str = new String(buf,"GB2312");
//		} catch (UnsupportedEncodingException e) {
//			e.printStackTrace();
//		}
//		return str;
//    }
//    public String GetEngineVersion()
//    {
//    	byte [] szVersion = GetVersion();
//    	String version = null;
//		try {
//			version = new String(szVersion,"GB2312");
//		} catch (UnsupportedEncodingException e) {
//			e.printStackTrace();
//		}
//		return version;
//    }
  
}

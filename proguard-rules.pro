# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /Users/xiachen/android-sdks/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

#-keepclasseswithmembernames class * {  # 保持 native 方法不被混淆
#    native <methods>;
#}
#-keepclasseswithmembers class * {   # 保持自定义控件类不被混淆
#    public <init>(android.content.Context, android.util.AttributeSet);
#}
#-keepclasseswithmembers class * {# 保持自定义控件类不被混淆
#    public <init>(android.content.Context, android.util.AttributeSet, int);
#}
#-keepclassmembers class * extends android.app.Activity { # 保持自定义控件类不被混淆
#    public void *(android.view.View);
#}
#-keepclassmembers enum * {     # 保持枚举 enum 类不被混淆
#    public static **[] values();
#    public static ** valueOf(java.lang.String);
#}
#-keep class * implements android.os.Parcelable { # 保持 Parcelable 不被混淆
#    public static final android.os.Parcelable$Creator *;
#}

-keepclassmembers class fqcn.of.javascript.interface.for.webview {
   public *;
}

#保留系统自带
-keepattributes Exceptions,InnerClasses,Signature,Deprecated,SourceFile,LineNumberTable,*Annotation*,EnclosingMethod

#保留jar包
-libraryjars libs/barcodescanner.aar
-libraryjars libs/YunWangVideoSDK-release.aar

#删除提示
-dontwarn mtopsdk.mtop.**
-dontwarn com.alibaba.**
-dontwarn com.ut.**
-dontwarn com.taobao.**


#主程序
-keep class com.tchsoft.** {*;}
-keep class org.apache.** {*;}

#组件
-keep class com.idcard.** {*;}
-keep class com.neversink.** {*;}
-keep class com.phonegap.** {*;}
-keep class com.qdc.** {*;}
-keep class com.synconset.** {*;}
-keep class nl.xservices.** {*;}
-keep class com.github.bumptech.** {*;}

#视频拍摄
-keep class com.im.** {*;}
-keep class com.taobao.** {*;}
-keep class com.ut..** {*;}
-keep class com.alibaba.** {*;}
-keep class mtopsdk.mtop.** {*;}

#二维码
#使用下面的-keep class com.google.** {*;}
#-keep class com.google.zxing.** {*;}
-keep class barcodescanner.xservices.** {*;}

#系统
-keep class android.content.** {*;}
-keep class android.app.** {*;}
-keep class android.webkit.** {*;}
-keep class com.android.support.** {*;}
-keep class com.google.** {*;}


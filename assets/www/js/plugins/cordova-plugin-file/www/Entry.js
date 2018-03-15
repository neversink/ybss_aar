cordova.define("cordova-plugin-file.Entry",function(t,e,n){function i(t,e,n,i,o,a){this.isFile=!!t,this.isDirectory=!!e,this.name=n||"",this.fullPath=i||"",this.filesystem=o||null,this.nativeURL=a||null}var o=t("cordova/argscheck"),a=t("cordova/exec"),r=t("./FileError"),l=t("./Metadata");i.prototype.getMetadata=function(t,e){o.checkArgs("FF","Entry.getMetadata",arguments);var n=t&&function(e){var n=new l({size:e.size,modificationTime:e.lastModifiedDate});t(n)},i=e&&function(t){e(new r(t))};a(n,i,"File","getFileMetadata",[this.toInternalURL()])},i.prototype.setMetadata=function(t,e,n){o.checkArgs("FFO","Entry.setMetadata",arguments),a(t,e,"File","setMetadata",[this.toInternalURL(),n])},i.prototype.moveTo=function(e,n,i,l){o.checkArgs("oSFF","Entry.moveTo",arguments);var s=l&&function(t){l(new r(t))},f=this.toInternalURL(),c=n||this.name,y=function(n){if(n){if(i){var o=n.filesystemName||n.filesystem&&n.filesystem.name,a=o?new FileSystem(o,{name:"",fullPath:"/"}):new FileSystem(e.filesystem.name,{name:"",fullPath:"/"}),l=n.isDirectory?new(t("./DirectoryEntry"))(n.name,n.fullPath,a,n.nativeURL):new(t("cordova-plugin-file.FileEntry"))(n.name,n.fullPath,a,n.nativeURL);i(l)}}else s&&s(r.NOT_FOUND_ERR)};a(y,s,"File","moveTo",[f,e.toInternalURL(),c])},i.prototype.copyTo=function(e,n,i,l){o.checkArgs("oSFF","Entry.copyTo",arguments);var s=l&&function(t){l(new r(t))},f=this.toInternalURL(),c=n||this.name,y=function(n){if(n){if(i){var o=n.filesystemName||n.filesystem&&n.filesystem.name,a=o?new FileSystem(o,{name:"",fullPath:"/"}):new FileSystem(e.filesystem.name,{name:"",fullPath:"/"}),l=n.isDirectory?new(t("./DirectoryEntry"))(n.name,n.fullPath,a,n.nativeURL):new(t("cordova-plugin-file.FileEntry"))(n.name,n.fullPath,a,n.nativeURL);i(l)}}else s&&s(r.NOT_FOUND_ERR)};a(y,s,"File","copyTo",[f,e.toInternalURL(),c])},i.prototype.toInternalURL=function(){if(this.filesystem&&this.filesystem.__format__)return this.filesystem.__format__(this.fullPath,this.nativeURL)},i.prototype.toURL=function(){return this.nativeURL?this.nativeURL:this.toInternalURL()||"file://localhost"+this.fullPath},i.prototype.toNativeURL=function(){return console.log("DEPRECATED: Update your code to use 'toURL'"),this.toURL()},i.prototype.toURI=function(t){return console.log("DEPRECATED: Update your code to use 'toURL'"),this.toURL()},i.prototype.remove=function(t,e){o.checkArgs("FF","Entry.remove",arguments);var n=e&&function(t){e(new r(t))};a(t,n,"File","remove",[this.toInternalURL()])},i.prototype.getParent=function(e,n){o.checkArgs("FF","Entry.getParent",arguments);var i=this.filesystem,l=e&&function(n){var o=t("./DirectoryEntry"),a=new o(n.name,n.fullPath,i,n.nativeURL);e(a)},s=n&&function(t){n(new r(t))};a(l,s,"File","getParent",[this.toInternalURL()])},n.exports=i});
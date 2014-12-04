/**
 * Created by yukun on 2014/12/4.
 */
$(function(){

    var qrcode = new QRCode($('#qr')[0], {
        width : 200,
        height : 200
    });
    
    chrome.tabs.query({active:true,windowId:chrome.windows.WINDOW_ID_CURRENT},function(tabs){
       var tab = tabs[0];
        var url = encodeURI(tab.url);
        $('#page_title').html(tab.title);
        $('#page_url').html(url);
        
        qrcode.makeCode(url);
        $('#qr').attr('title','');
        debugLog('local tab url ' + url,2);
        
    });
});

var show_debug_level = 2;
function debugLog(obj,level){
    level = level || 0;
    if(level >= show_debug_level){
        console.log(obj);
    }
}
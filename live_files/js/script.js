
function initialize() {}

// Do the following when the page is ready

$(document).ready(function(){
    if($('body').width() >= 500)
    {
        $("#header").prepend($('#social'));
    }
    $('.footerbutton img,.closebutton img').mouseover(function()
    {
        var src = $(this).attr('src');
        $(this).attr('src',src.replace("_off","_on"));
    });
    $('.footerbutton img,.closebutton img').mouseout(function()
    {
        var src = $(this).attr('src');
        $(this).attr('src',src.replace("_on","_off"));
    });
    $(document).keyup(function(e) {

    if (e.keyCode == 27) { 
        //escape
        $('.popupbox').hide();
    
    }
    });


});

function currentMapUrl() {
	var embed_url_response = embedmap_location;
  // + "?lat=" + map.getCenter().lat().toFixed(4) 
  // + "&lon=" + map.getCenter().lng().toFixed(4) 
  // + "&zoom=" + map.getZoom();
	return embed_url_response;
}

function embedBox() {
    var $embedbox = $("#embedbox");
    $('.popupbox').hide();
    $('#closeembedbox').click(function(){
        $embedbox.hide();
    });
    var embed_url = currentMapUrl();
    $('#maplink').html(basemap_location);
    $('#embedcode').html("&lt;iframe src=\""+embed_url+"\" height=\"725\" width=\"100%\" scrolling=\"no\" frameborder=\"0\"&gt;&lt;/iframe&gt;");
    $embedbox.show();
}
    
function creditBox() {
    var $creditbox = $("#creditbox");
    $('.popupbox').hide();
    $('#closecreditbox').click(function(){
        $creditbox.hide();

    });
    
    $creditbox.show();

}
function dataBox() {
    var $databox = $("#databox");
    $('.popupbox').hide();
    $('#closedatabox').click(function(){
        $databox.hide();

    });
    
    $databox.show();

}

function expandWindow() {
    window.open( currentMapUrl() );
    return false;
}

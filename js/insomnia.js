var base_search_url = "http://pt.vm.fudan.edu.cn/index.php?action=imdb;sa=search;search=";

function getLibraryButton(keyword) {
    var search_url = base_search_url+keyword.slice(2);
    var borrowButton = $('<a href="'+search_url+'" style="float:left;display: inline-block;background: #336027;border: 1px solid #2F7B4B;color: white;padding: 1px 10px;border-radius:3px;margin-right: 8px;" target="_blank">FDUPT下载</a>');
    return borrowButton;
}

var url = window.location.toString();

if ( url.indexOf('subject')!=-1 ){
    var keyword;
    if ($("#info span:last").html().indexOf("IMDb")!=-1) {
        keyword = $("#info span:last").next().html();
    }
    else {
        keyword = $("#mainpic img").attr("alt");
    }
    $('div.a_stars').before(getLibraryButton(keyword));
}

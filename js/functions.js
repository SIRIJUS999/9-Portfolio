"use strict";
function dinamineStatistika1( projects ) {
    var HTML = '';
        HTML += '<div class="img" style="margin-bottom: 25px;"></div><div class="value" style="font-size: 35px; font-weight: 600;">'+projects+'</div>';
        HTML += '<div class="title" style="margin-top: 15px; padding: 0 10px; font-size: 12px;"><b>TOTAL PROJECTS</b></div>';
        return HTML;
}
function dinamineStatistika2( won ) {
    var HTML = '';
        HTML += '<div class="img" style="margin-bottom: 25px;"></div><div class="value" style="font-size: 35px; font-weight: 600;">'+won+'</div>';
        HTML += '<div class="title" style="margin-top: 15px; padding: 0 10px; font-size: 12px;"><b>TROPHY WON</b></div>';
    return HTML;
}

function dinamineStatistika3(  ) {
    var HTML = '';
        HTML += '<div class="img" style="margin-bottom: 25px;"></div><div class="value" style="font-size: 35px; font-weight: 600;">'+staff+'</div>';
        HTML += '<div class="title" style="margin-top: 15px; padding: 0 10px; font-size: 12px;"><b>EXPERIENCES STAFF</b></div>';
    return HTML;
}

function dinamineStatistika4( clients ) {
    var HTML = '';
        HTML += '<div class="img" style="margin-bottom: 25px;"></div><div class="value" style="font-size: 35px; font-weight: 600;">'+clients+'</div>'
        HTML += '<div class="title" style="margin-top: 15px; padding: 0 10px; font-size: 12px;"><b>HAPPY CLIENTS</b></div>';
    return HTML;
}
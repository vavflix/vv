function myFunction() {

    var sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("active");
}


var myFP = fluidPlayer(
    'video-id', {
    "layoutControls": {
        "controlBar": {
            "autoHideTimeout": 3,
            "animated": true,
            "autoHide": true
        },
        "htmlOnPauseBlock": {
            "html": null,
            "height": null,
            "width": null
        },
        "autoPlay": false,
        "mute": true,
        "allowTheatre": true,
        "playPauseAnimation": false,
        "playbackRateEnabled": true,
        "allowDownload": false,
        "playButtonShowing": true,
        "fillToContainer": false,
        "posterImage": ""
    },
    "vastOptions": {
        "adList": [],
        "adCTAText": false,
        "adCTATextPosition": ""
    }
});


function search() {
    let searchBar = document.querySelector('.search-input').value.toUpperCase;
    let productList = document.querySelector('.product-list');
    let product = document.querySelectorAll('.product');
    let productName = document.getElementsByTagName('h2');

    for (let i = 0; i < productName.length; i++) {
        if (productName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
            product[i].computedStyleMap.display = "";

        } else {
            product[i].computedStyleMap.display = "none";
        }

    }
}











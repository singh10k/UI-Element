function initializeAutocomplete() {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C"
    ];

    $("input[id^='tags']").autocomplete({
        source: availableTags,
        select: function (event, ui) {
            let val = ui.item.value;
            console.log("Selected Value: " + $.trim(ui.item.value));
            let ele = +event.target.getAttribute('data-ele');
            if (ele <= 4) {
                let attr = event.target.parentNode.nextElementSibling;
                if (attr == null) {
                    ele++;
                    let str = '<div class="ui-widget col searchDiv">'
                        + '<input id="tags' + ele + '" style="display: none;" class="googleTrendsSerchField" data-ele="' + ele + '">'
                        + '  <div class="googleTrendsSerchField googleTrendsCrossBtn">'
                        + '<div class="googleTrendsSvgDiv"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus"'
                        + ' viewBox="0 0 16 16">'
                        + '<path'
                        + '  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />'
                        + '</svg><span>'
                        + 'Add comparison'
                        + '</span>'
                        + '</div>'
                        + '</div>'
                        + '</div>';
                    $('#googleTrendsSearchDiv').append(str);
                    initializeAutocomplete();
                }

            }
        }
    });
    $('.googleTrendsCrossBtn').click(function () {
        let currentEle = event.currentTarget
        let element = currentEle.previousElementSibling;
        $(element).show();
        $(currentEle).hide();
    })
};


initializeAutocomplete();
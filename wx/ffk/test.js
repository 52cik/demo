function go() {
    var $cards = $(".item-card");
    var cards = {};

    for(var i=0, l=$cards.length; i<l; i++) {
        var type = $cards.eq(i).data("type");

        if (!cards[type]) {
            cards[type] = [];
        }

        cards[type].push($cards.eq(i));
    }

    $.each(cards, function (i, arr) {
        $.each(arr, function (i, $el) {
            $el.trigger("touchend").trigger("mousedown");
        });
    });

    return "done";
}
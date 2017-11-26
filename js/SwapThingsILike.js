var SwapThingsILike = {
    // Used for swapping through text in header
    idx: 0,
    things: ["Too Many Things", "Synthetic Biology", "Strange Objects", "Event Logistics",
        "Communication", "Miscellaneous Skills"],
    
    init: function () {
        SwapThingsILike.bindUI();
    },
   
    bindUI: function () {
        setInterval("SwapThingsILike.swapText()", 1500);
    },
    
    swapText: function () {
        SwapThingsILike.idx = (SwapThingsILike.idx + 1) % SwapThingsILike.things.length;
        var txt = SwapThingsILike.things[SwapThingsILike.idx];
        document.getElementById("things-i-like").innerHTML = txt;
    }
};
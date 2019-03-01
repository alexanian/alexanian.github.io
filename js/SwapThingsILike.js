var SwapThingsILike = {
    // Used for swapping through text in header
    idx: 0,
    things: [
        'Too Many Things',
        '<span class="category-biology">Synthetic Biology</span>',
        '<span class="category-making">Strange Objects</span>',
        '<span class="category-events">Event Logistics</span>',
        '<span class="category-comms">Communication</span>',
        '<span class="category-misc">Miscellaneous Skills</span>'],
    
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
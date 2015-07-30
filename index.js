
var jq_func_exercise_list = [
    {nm: "d01", bn: "addClass", hd: ".addClass",
                pg: "add a css class that make red paragraph",
                fn: function() { console.log("addClass"); }},
    {nm: "d02", bn: "after", hd: ".after",
                pg: "add an element after, just outside, the current element",
                fn: function() { console.log("after"); }},
    {nm: "d03", bn: "append", hd: ".append",
                pg: "append an element at the end within the current element",
                fn: function () {}},
    {nm: "d04", bn: "attr", hd: ".attr",
                pg: "set background color attribute",
                fn: function () {}},
    {nm: "d05", bn: "before", hd: ".before",
                pg: "add a paragraph before the topmost paragraph",
                fn: function () {}},
    {nm: "d06", bn: "html", hd: ".html",
                pg: "make the content to strong",
                fn: function () {}},
    {nm: "d07", bn: "text", hd: ".text",
                pg: "change to another literal text",
                fn: function () {}},
    {nm: "d08", bn: "val", hd: ".val",
                pg: "",
                fn: function () {}},
    {nm: "d09", bn: "toggle", hd: ".toggle",
                pg: "",
                fn: function () {}},
    {nm: "d10", bn: "hide", hd: ".hide",
                pg: "hide the right hand side",
                fn: function () {}},
    {nm: "d11", bn: "show", hd: ".show",
                pg: "hide the right hand side first, then show it again.",
                fn: function () {}},
    {nm: "d12", bn: "slideDown", hd: ".slideDown",
                pg: "hide the right hand side first, then show slide it down.",
                fn: function () {}},
    {nm: "d13", bn: "slideToggle", hd: ".slideToggle",
                pg: "",
                fn: function () {}},
    {nm: "d14", bn: "slideUp", hd: ".slideUp",
                pg: "hide the right hand side first, then show slide it up.",
                fn: function () {}},
    {nm: "d15", bn: "fadeOut", hd: ".fadeOut",
                pg: "fade out the right this block",
                fn: function () {}},
    {nm: "d16", bn: "fadeIn", hd: ".fadeIn",
                pg: "hide this first, then fade it",
                fn: function () { $('$d16 div')}},
    {nm: "d17", bn: "focus", hd: ".focus",
                pg: "",
                fn: function () {}},
    {nm: "d18", bn: "click", hd: ".click",
                pg: "each click append a 'dot'",
                fn: function () { $('#d18 p').append('.')}}

];

function init_jq_func_exercise(jq_elem, items /* [{nm:, bn:, hd:, pg:}, ...] */) {
    var ul = $('<ul>');
    jq_elem.append(ul);

    for (var i of items) {
        // layout = (button + h1/p)/hr, where + is left-right queue, / is top-down queue
        var btn = $('<button>').html(i.bn).click(i.fn);
        var hdr = $('<h1>').html(i.hd);
        var pgh = $('<p>').html(i.pg);
        var ctn = $('<div>').append(hdr).append(pgh);
        var blk = $('<div>').attr('id', i.nm).append(btn).append(ctn).append('<hr>');
        var itm = $('<li>').append(blk);
        ul.append(itm);
    }
}

init_jq_func_exercise($('#exercise'), jq_func_exercise_list);

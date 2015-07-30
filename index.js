
var jq_func_exercise_list = [
    {nm: "d01", bn: "addClass", hd: ".addClass",
                pg: "add a css class that make red paragraph",
                fn: function() {
                    $('#d01 p').addClass('red-background');
                }},
    {nm: "d02", bn: "after", hd: ".after",
                pg: "add a span after this <span>span</span> element",
                fn: function() {
                    $('#d02 span:first').after($('<span>').html(", <strong>follow</strong>"));
                }},
    {nm: "d03", bn: "append", hd: ".append",
                pg: "append an element at the end within the current element",
                fn: function () {
                    $('#d03 p').append(", <strong>and</strong>");
                }},
    {nm: "d04", bn: "attr", hd: ".attr",
                pg: "check the input type from checkbox to button <input type='checkbox' checked='checked'>hello</input>.",
                fn: function () {
                    $('#d04 input').attr("type", "button").attr("value", "button");
                }},
    {nm: "d05", bn: "before", hd: ".before",
                pg: "add a span before this <span>span</span> element",
                fn: function() {
                    $('#d05 span:first').before($('<span>').html("<strong>ahead</strong>, "));
                }},
    {nm: "d06", bn: "html", hd: ".html",
                pg: "copy the content from above to here and make it strong",
                fn: function () {
                    $("#d06 p").html( "<strong>" + $("#d05 p").html() + "</strong>" + " (copied)");
                }},
    {nm: "d07", bn: "text", hd: ".text",
                pg: "add literal text",
                fn: function () {
                    $('#d07 p').append($("<span>").text(' : <whatever-literal> goes here, ; &, <>, [], {} </whatever-literal>'));
                }},
    {nm: "d08", bn: "val", hd: ".val",
                pg: "get the value of the <input id='box' type='checkbox' checked='checked'>checkbox</input><span></span>",
                fn: function () {
                    $('#d08 p span').html( ', ' + $('#d08 #box:checked').val());
                }},
    {nm: "d09", bn: "toggleClass", hd: ".toggleClass",
                pg: "toggle backgound color",
                fn: function () {
                    $('#d09 p').toggleClass('red-background');
                }},
    {nm: "d10", bn: "hide", hd: ".hide",
                pg: "hide <span>this part of text</span>",
                fn: function () {
                    $('#d10 p span').hide();
                }},
    {nm: "d11", bn: "show", hd: ".show",
                pg: "hide the right hand side first, then show it again.",
                fn: function () {
                    $('#d11 p').hide();
                    setTimeout(function () {
                        $('#d11 p').show();
                    }, 2000);
                }},
    {nm: "d12", bn: "slideDown", hd: ".slideDown",
                pg: "hide the text first, then show slide it down again.",
                fn: function () {
                    $("#d12 p").hide();
                    $("#d12 p").slideDown(2000, function() {
                        $(this).append('(slided down)');
                    });
                }},
    {nm: "d13", bn: "slideToggle", hd: ".slideToggle",
                pg: "toggle this text.",
                fn: function () {
                    $("#d13 p").slideToggle(2000, function() {
                        $(this).append('(slided toggle)');
                    });
                }},
    {nm: "d14", bn: "slideUp", hd: ".slideUp",
                pg: "hide the text first, then show slide it up.",
                fn: function () {
                    $("#d14 p").hide();
                    $("#d14 p").slideDown(2000, function() {
                        $(this).append('(slided up)');
                    });
                }},
    {nm: "d15", bn: "fadeOut", hd: ".fadeOut",
                pg: "fade out the right this block",
                fn: function () {
                    $("#d15 p").fadeOut(1000, function() {
                        $("#d15 h1").after($('<p>').html('(faded out)'));
                    });
                }},
    {nm: "d16", bn: "fadeIn", hd: ".fadeIn",
                pg: "fade it some <span>text.</span>",
                fn: function () {
                    $('#d16 span:last').after($('<span>').html(' ... hello').fadeIn(3000));
                }},
    {nm: "d17", bn: "focus", hd: ".focus",
                pg: "click the left button to setup focus first, then click this <input id='hello' type='text' placeholder=''/>",
                fn: function () {
                    $('#d17 #hello').focus(function() {
                        $(this).attr('placeholder', 'got focus');
                    });
                }},
    {nm: "d18", bn: "click", hd: ".click",
                pg: "each click append a 'dot'",
                fn: function () {
                    $('#d18 p').append('.');
                }}

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

import $ from "jquery-slim";
//move-focus-on-next-field-when-enter-is-pressed
//https://stackoverflow.com/questions/24209588/how-to-move-focus-on-next-field-when-enter-is-pressed
$(document).on('keypress', 'input,select', function (e) {
    if (e.which === 13) {
        e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = $(':input');
        var index = $canfocus.index(this) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
    }
});

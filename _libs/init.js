
var ___guid = function () {
    return 'id-xxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};


var ___field_build = function (field) {
    if (field == null) return '';
       
    _.templateSettings = { interpolate: /\{(.+?)\}/g };
    var data = {
        str_kit: null,
        str_id: null,
        str_name: null,
        str_caption: null,
        str_placeholder: null,
        bit_focus: null,
        bit_loading: null,
        bit_required: null,
        bit_inline: null,
        arr_rules: []
    };
    for (var key in field) data[key] = field[key];
    
    var compiled = _.template(data.str_html);
    var s = compiled(data);
    return s;
};

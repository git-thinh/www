

new Vue({
    el: '#ui-app',
    data: function () {
        return {
            objForm: {
                str_title: '',
                arr_fields: [
                    {
                        str_kit: 'test',
                        str_id: ___guid(),
                        str_html:'<div class="ui input"><input type="text" name="{str_id}" placeholder="{str_placeholder}"></div>'
                    },
                    {
                        str_kit: 'text',
                        str_id: ___guid(),
                        str_name: '',
                        str_caption: 'Text',
                        str_placeholder: 'Full name', 
                        bit_focus: false,
                        bit_loading: false,
                        bit_required: true,
                        bit_inline: false,
                        arr_rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your name'
                            }
                        ]
                    },
                    {
                        str_kit: 'text',
                        str_id: ___guid(),
                        str_name: '',
                        str_caption: 'Text icon',
                        str_placeholder: 'Full name',
                        str_icon: 'search',
                        bit_focus: false,
                        bit_loading: false,
                        bit_required: true,
                        bit_inline: false,
                        arr_rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your name'
                            }
                        ]
                    },
                    {
                        str_kit: 'text',
                        str_id: ___guid(),
                        str_name: '',
                        str_caption: 'Text icon left',
                        str_placeholder: 'Full name',
                        str_icon: 'users',
                        str_icon_align: 'left',
                        bit_focus: false,
                        bit_loading: false,
                        bit_required: true,
                        bit_inline: false,
                        arr_rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your name'
                            }
                        ]
                    },
                    {
                        str_kit: 'text',
                        str_id: ___guid(),
                        str_name: '',
                        str_caption: 'Text icon left',
                        str_placeholder: 'Full name',
                        str_icon: 'users',
                        str_icon_align: 'left',
                        bit_focus: false,
                        bit_loading: true,
                        bit_required: true,
                        bit_inline: false,
                        arr_rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your name'
                            }
                        ]
                    },
                    {
                        str_kit: 'text',
                        str_id: ___guid(),
                        str_name: '',
                        str_caption: 'Text loading',
                        str_placeholder: 'Full name',
                        bit_focus: false,
                        bit_loading: true,
                        bit_required: true,
                        bit_inline: false,
                        arr_rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your name'
                            }
                        ]
                    },
                    {
                        str_kit: 'text-button',
                        str_id: ___guid(),
                        str_name: '',
                        str_caption: 'Text button',
                        str_placeholder: 'Full name',
                        str_button_icon: 'search',
                        bit_focus: false,
                        bit_loading: false,
                        bit_required: true,
                        bit_inline: false,
                        arr_rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your name'
                            }
                        ]
                    },
                    {
                        str_kit: 'text-label',
                        str_id: ___guid(),
                        str_name: '',
                        str_caption: 'Text label',
                        str_placeholder: 'Full name',
                        str_label: 'https://',
                        str_label_align: 'right', // left|right
                        bit_focus: false,
                        bit_loading: false,
                        bit_required: true,
                        bit_inline: false,
                        arr_rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your name'
                            }
                        ]
                    },
                    {
                        str_kit: 'text-dropdown',
                        str_id: ___guid(),
                        str_name: '',
                        str_caption: 'Text dropdown',
                        str_placeholder: 'Full name',
                        arr_dropdown: [{ id: 1, text: 'text-1' }, { id: 2, text: 'text-2' }],
                        bit_focus: false,
                        bit_loading: false,
                        bit_required: true,
                        bit_inline: false,
                        arr_rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your name'
                            }
                        ]
                    },
                    {
                        str_kit: 'text-dropdown-button',
                        str_id: ___guid(),
                        str_name: '',
                        str_caption: 'Text dropdown button',
                        str_placeholder: 'Full name',
                        arr_dropdown: [{ id: 1, text: 'text-1' }, { id: 2, text: 'text-2' }],
                        str_button_icon: 'search',
                        bit_focus: false,
                        bit_loading: false,
                        bit_required: true,
                        bit_inline: false,
                        arr_rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your name'
                            }
                        ]
                    },
                    {
                        str_kit: 'dropdown',
                        str_id: ___guid(),
                        str_name: '',
                        str_caption: 'Last name',
                        str_placeholder: 'Full name',
                        bit_required: true,
                        bit_inline: false,
                        arr_rules: [
                            {
                                type: 'empty',
                                prompt: 'Please enter your name'
                            }
                        ]
                    },
                    {
                        str_kit: 'checkbox',
                        str_id: ___guid(),
                        str_name: '',
                        str_caption: 'I agree to the terms and conditions',
                        bit_required: false,
                        bit_inline: true
                    }
                ]
            }
        };
    },
    created: function () {
        var _self = this;
        console.log('APP.created: ');
    },
    mounted: function () {
        var _self = this;
        console.log('APP.mounted: ');
        Vue.nextTick(_self.___ready);
    },
    methods: {
        ___ready: function () {
            var _self = this;
            console.log('APP.ready: data = ', _self.objForm.arr_fields);

            var obj_fields_valid = {};
            if (_self.objForm && _self.objForm.arr_fields && Array.isArray(_self.objForm.arr_fields)) {
                Array.from(_self.objForm.arr_fields).forEach(f_ => {
                    switch (f_.str_kit) {
                        case 'text':
                        case 'text-icon':
                        case 'text-label':
                            break;
                        case 'text-dropdown':
                        case 'text-dropdown-button':
                            if (f_.arr_dropdown && f_.arr_dropdown.length > 0) {
                                $('#' + f_.str_id + ' .ui.dropdown').dropdown();
                            }
                            break;
                        case 'checkbox':
                            $('#' + f_.str_id + ' .ui.checkbox').checkbox();
                            break;
                        case 'dropdown':
                            $('#' + f_.str_id + ' .ui.dropdown').dropdown();
                            break;
                        default:
                            break;
                    }

                    //Validation
                    if (f_.str_id && f_.arr_rules && Array.isArray(f_.arr_rules)) {
                        obj_fields_valid[f_.str_id] = {
                            identifier: f_.str_id,
                            rules: f_.arr_rules
                        };
                    }
                });
            }

            console.log('APP.ready: obj_fields_valid = ', obj_fields_valid);

            $('.ui.form').form({ fields: obj_fields_valid });
        }
    }
});
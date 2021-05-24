define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'web.data/index',
        add_url: 'web.data/add',
        edit_url: 'web.data/edit',
        delete_url: 'web.data/delete',
        export_url: 'web.data/export',
        modify_url: 'web.data/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {type: 'checkbox'},
                    {field: 'id', title: 'id'},
                    {field: 'name', title: '标题'},
                    {field: 'webCategory.title', title: '分类名称'},
                    {field: 'url', title: '跳转链接'},
                    {field: 'size', title: '大小'},
                    {field: 'remark', title: '更新说明', templet: ea.table.text},
                    {field: 'create_time', title: '创建时间'},
                    {width: 250, title: '操作', templet: ea.table.tool},
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
    };
    return Controller;
});
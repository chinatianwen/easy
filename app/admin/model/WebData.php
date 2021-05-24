<?php

namespace app\admin\model;

use app\common\model\TimeModel;

class WebData extends TimeModel
{

    protected $name = "web_data";

    protected $deleteTime = "delete_time";

    
    public function webCategory()
    {
        return $this->belongsTo('\app\admin\model\WebCategory', 'cate_id', 'id');
    }

    
    public function getWebCategoryList()
    {
        return \app\admin\model\WebCategory::where('status',1)->column('title', 'id');
    }

}
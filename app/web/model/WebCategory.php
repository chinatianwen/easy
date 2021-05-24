<?php

namespace app\web\model;

use app\common\model\TimeModel;

class WebCategory extends TimeModel
{

    protected $name = "web_category";

    protected $deleteTime = "delete_time";

    
    
    public function getStatusList()
    {
        return ['0'=>'禁用','1'=>'启用',];
    }


}
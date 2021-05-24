<?php

namespace app\web\controller;

use app\BaseController;
use app\web\model\WebData;
use app\web\model\WebCategory;
use think\facade\View;
use think\facade\Request;

class Beibao extends BaseController
{
    public function beibao(){
        return View::fetch('beibao');
    }

}
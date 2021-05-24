<?php

namespace app\web\controller;

use app\BaseController;
use app\web\model\WebData;
use app\web\model\WebCategory;
use think\facade\View;
use think\facade\Request;

class Index extends BaseController
{
    public function index()
    {
        $model = new WebData;
        $cateModel = new WebCategory;
        $keystr = $this->request->param('key');
        if(empty($keystr)){
            $Searchsql = '1=1';
        }else{
            $Searchsql = "web_data.name like '%" . $keystr . "%'";
        }
        $data = $model::withJoin('webCategory', 'LEFT')->where($Searchsql)->select();

        $cate = $cateModel::where('status',1)->select();
        //模板赋值
        View::assign('data',$data);
        View::assign('cate',$cate);
        //渲染模板
        return View::fetch('index');
    }

    public function search(){
        $model = new WebData;
        $check = $this->request->param('check');
        $keystr = $this->request->param('key');

        if(empty($check)){
            $where = '0=1';
        }else{
            $where = ["cate_id"=>$check];
        }

        if(empty($keystr)){
            $Searchsql = '1=1';
        }else{
            $Searchsql = "web_data.name like '%" . $keystr . "%'";
        }

        $data = $model::withJoin('webCategory', 'LEFT')->where($Searchsql)->where($where)->select();
        echo json_encode($data);
    }
}
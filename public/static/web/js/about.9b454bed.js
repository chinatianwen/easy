(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"], {
    "015d": function (t, e, a) {
        "use strict";
        a("815d")
    }, "03ab": function (t, e, a) {
    }, 3846: function (t, e, a) {
        a("9e1e") && "g" != /./g.flags && a("86cc").f(RegExp.prototype, "flags", {configurable: !0, get: a("0bfb")})
    }, "6b54": function (t, e, a) {
        "use strict";
        a("3846");
        var n = a("cb7c"), i = a("0bfb"), r = a("9e1e"), o = "toString", l = /./[o], s = function (t) {
            a("2aba")(RegExp.prototype, o, t, !0)
        };
        a("79e5")((function () {
            return "/a/b" != l.call({source: "a", flags: "b"})
        })) ? s((function () {
            var t = n(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !r && t instanceof RegExp ? i.call(t) : void 0)
        })) : l.name != o && s((function () {
            return l.call(this)
        }))
    }, "776d": function (t, e, a) {
        "use strict";
        a.r(e);
        var n = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return t.isMobile ? a("div", {staticClass: "not-rulePage"}, [t._v("\n    确认前往数据来源页面? "), a("br"), a("br"), a("el-button", {
                attrs: {type: "primary"},
                on: {
                    click: function (e) {
                        return t.goLink("go")
                    }
                }
            }, [t._v("前往")]), a("el-button", {on: {click: t.goBack}}, [t._v("返回")])], 1) : t._e()
        }, i = [], r = (a("4917"), {
            data: function () {
                return {isMobile: !1, uid: null}
            }, mounted: function () {
                this.uid = this.$route.query.uid, this.isMobile = this._isMobile(), this.uid && this.goLink()
            }, methods: {
                _isMobile: function () {
                    var t = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                    return t
                }, goLink: function (t) {
                    var e = "http://xq.fk.bhbbk.com/product/" + this.uid + ".html";
                    this.isMobile || window.open(e), "go" == t && (location.href = e)
                }, goBack: function () {
                    this.$router.push("/")
                }
            }
        }), o = r, l = (a("ddb5"), a("2877")), s = Object(l["a"])(o, n, i, !1, null, "1dd46eac", null);
        e["default"] = s.exports
    }, "815d": function (t, e, a) {
    }, a481: function (t, e, a) {
        "use strict";
        var n = a("cb7c"), i = a("4bf8"), r = a("9def"), o = a("4588"), l = a("0390"), s = a("5f1b"), c = Math.max,
            u = Math.min, d = Math.floor, p = /\$([$&`']|\d\d?|<[^>]*>)/g, b = /\$([$&`']|\d\d?)/g, f = function (t) {
                return void 0 === t ? t : String(t)
            };
        a("214f")("replace", 2, (function (t, e, a, g) {
            return [function (n, i) {
                var r = t(this), o = void 0 == n ? void 0 : n[e];
                return void 0 !== o ? o.call(n, r, i) : a.call(String(r), n, i)
            }, function (t, e) {
                var i = g(a, t, this, e);
                if (i.done) return i.value;
                var d = n(t), p = String(this), b = "function" === typeof e;
                b || (e = String(e));
                var m = d.global;
                if (m) {
                    var v = d.unicode;
                    d.lastIndex = 0
                }
                var x = [];
                while (1) {
                    var k = s(d, p);
                    if (null === k) break;
                    if (x.push(k), !m) break;
                    var w = String(k[0]);
                    "" === w && (d.lastIndex = l(p, r(d.lastIndex), v))
                }
                for (var y = "", $ = 0, S = 0; S < x.length; S++) {
                    k = x[S];
                    for (var E = String(k[0]), M = c(u(o(k.index), p.length), 0), O = [], _ = 1; _ < k.length; _++) O.push(f(k[_]));
                    var U = k.groups;
                    if (b) {
                        var B = [E].concat(O, M, p);
                        void 0 !== U && B.push(U);
                        var I = String(e.apply(void 0, B))
                    } else I = h(E, p, M, O, U, e);
                    M >= $ && (y += p.slice($, M) + I, $ = M + E.length)
                }
                return y + p.slice($)
            }];

            function h(t, e, n, r, o, l) {
                var s = n + t.length, c = r.length, u = b;
                return void 0 !== o && (o = i(o), u = p), a.call(l, u, (function (a, i) {
                    var l;
                    switch (i.charAt(0)) {
                        case"$":
                            return "$";
                        case"&":
                            return t;
                        case"`":
                            return e.slice(0, n);
                        case"'":
                            return e.slice(s);
                        case"<":
                            l = o[i.slice(1, -1)];
                            break;
                        default:
                            var u = +i;
                            if (0 === u) return a;
                            if (u > c) {
                                var p = d(u / 10);
                                return 0 === p ? a : p <= c ? void 0 === r[p - 1] ? i.charAt(1) : r[p - 1] + i.charAt(1) : a
                            }
                            l = r[u - 1]
                    }
                    return void 0 === l ? "" : l
                }))
            }
        }))
    }, ddb5: function (t, e, a) {
        "use strict";
        a("03ab")
    }, f820: function (t, e, a) {
        "use strict";
        a.r(e);
        var n = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "about"}, [a("el-dialog", {
                attrs: {
                    title: "策划中！有啥奇妙想法联系QQ：2152860",
                    visible: !t.isLogin,
                    width: "30%",
                    center: "",
                    "show-close": !1
                }
            }, [a("el-input", {
                attrs: {type: "password", placeholder: "是否回到首页？输入1(是)或者2(不是)！", clearable: ""},
                nativeOn: {
                    keyup: function (e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.submitForm()
                    }
                },
                model: {
                    value: t.inputVal, callback: function (e) {
                        t.inputVal = e
                    }, expression: "inputVal"
                }
            })], 1), a("el-dialog", {
                attrs: {
                    title: "提交",
                    visible: t.isLogin,
                    width: "30%",
                    center: "",
                    "show-close": !1
                }
            }, [a("el-form", {attrs: {"label-width": "80px"}}, [a("el-row", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.loading,
                    expression: "loading"
                }]
            }, [a("el-col", {attrs: {span: 24}}, [a("el-form-item", {attrs: {label: "版本名称"}}, [a("el-input", {
                attrs: {placeholder: "3月大神话★大背包★特色复古★智能假人★暗黑专属★潜龙峡谷★全插件版"},
                model: {
                    value: t.param.bbDesc, callback: function (e) {
                        t.$set(t.param, "bbDesc", e)
                    }, expression: "param.bbDesc"
                }
            })], 1)], 1), a("el-col", {attrs: {span: 12}}, [a("el-form-item", {attrs: {label: "版本价格"}}, [a("el-input", {
                attrs: {placeholder: "300"},
                model: {
                    value: t.param.bbName, callback: function (e) {
                        t.$set(t.param, "bbName", e)
                    }, expression: "param.bbName"
                }
            })], 1)], 1), a("el-col", {attrs: {span: 12}}, [a("el-form-item", {attrs: {label: "版本引擎"}}, [a("el-input", {
                attrs: {placeholder: "GOM、GEE、LEG"},
                model: {
                    value: t.param.bbEngine, callback: function (e) {
                        t.$set(t.param, "bbEngine", e)
                    }, expression: "param.bbEngine"
                }
            })], 1)], 1), a("el-col", {attrs: {span: 24}}, [a("el-form-item", {attrs: {label: "版本描述"}}, [a("el-input", {
                attrs: {placeholder: "新制作，ESP、PG大背包均已修复调好"},
                model: {
                    value: t.param.bbUpdateInfo, callback: function (e) {
                        t.$set(t.param, "bbUpdateInfo", e)
                    }, expression: "param.bbUpdateInfo"
                }
            })], 1)], 1), a("el-col", {attrs: {span: 24}}, [a("el-form-item", {attrs: {label: "版本网站"}}, [a("el-input", {
                attrs: {placeholder: "https://docs.qq.com/doc/DUFlVR0tpV0tUTHVD"},
                model: {
                    value: t.param.showUrl, callback: function (e) {
                        t.$set(t.param, "showUrl", e)
                    }, expression: "param.showUrl"
                }
            })], 1)], 1), a("el-col", {attrs: {span: 24}}, [a("el-form-item", {attrs: {label: "更新时间"}}, [a("el-input", {
                attrs: {placeholder: "2021-03-14 18:00"},
                model: {
                    value: t.param.bbUpdate, callback: function (e) {
                        t.$set(t.param, "bbUpdate", e)
                    }, expression: "param.bbUpdate"
                }
            })], 1)], 1), a("el-col", {attrs: {span: 24}}, [a("el-form-item", [a("el-row", {staticStyle: {"text-align": "right"}}, [a("el-button", {
                attrs: {type: "primary"},
                on: {
                    click: function (e) {
                        return t.onSave()
                    }
                }
            }, [t._v("保存")]), a("el-button", {
                on: {
                    click: function (e) {
                        return t.goBack()
                    }
                }
            }, [t._v("取消")]), a("el-button", {
                attrs: {type: "danger", disabled: !t.param.guidCode},
                on: {
                    click: function (e) {
                        return t.deleteRow()
                    }
                }
            }, [t._v("删除")])], 1)], 1)], 1)], 1)], 1)], 1)], 1)
        }, i = [], r = (a("6b54"), a("a481"), a("4ec3")), o = {
            data: function () {
                return {isLogin: !1, inputVal: "", param: {}, loading: !1}
            }, mounted: function () {
                this.init()
            }, methods: {
                init: function () {
                    var t = localStorage.getItem("row");
                    t && (this.param = JSON.parse(t))
                }, guid: function () {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) {
                        var e = 16 * Math.random() | 0, a = "x" == t ? e : 3 & e | 8;
                        return a.toString(16)
                    }))
                }, submitForm: function () {
                    var t = this;
                    Object(r["c"])({issb: this.inputVal}).then((function (e) {
                        e.isOk ? t.isLogin = !0 : t.$router.push("/")
                    }))
                }, onSave: function () {
                    var t = this;
                    this.loading = !0, Object(r["e"])(this.param).then((function (e) {
                        e.isOk ? (localStorage.clear(), t.$message({
                            type: "success",
                            message: "保存成功!"
                        }), t.loading = !1) : t.loading = !1
                    }))
                }, deleteRow: function () {
                    var t = this, e = this.param.guidCode;
                    this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then((function () {
                        t.loading = !0, Object(r["d"])({guidCode: e}).then((function (e) {
                            e.isOk && (t.$message({
                                type: "success",
                                message: "删除成功!"
                            }), t.param = {}, localStorage.clear()), t.loading = !1
                        }))
                    })).catch((function () {
                        t.$message({type: "info", message: "已取消删除"})
                    }))
                }, goBack: function () {
                    localStorage.clear(), this.$router.push("/")
                }
            }
        }, l = o, s = (a("015d"), a("2877")), c = Object(s["a"])(l, n, i, !1, null, "21544a73", null);
        e["default"] = c.exports
    }
}]);
//# sourceMappingURL=about.9b454bed.js.map
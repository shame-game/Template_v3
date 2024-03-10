"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [68], {
        9844: function(e, t, r) {
            r.d(t, {
                e: function() {
                    return f
                }
            });
            var n = r(7294);

            function i(e, t, r, n) {
                return new(r || (r = Promise))(function(i, o) {
                    function u(e) {
                        try {
                            c(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(e) {
                        try {
                            c(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(u, a)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            }

            function o(e, t) {
                var r, n, i, o, u = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
                        return function(o) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return u.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++, n = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = u.ops.pop(), u.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            u.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && u.label < i[1]) {
                                            u.label = i[1], i = o;
                                            break
                                        }
                                        if (i && u.label < i[2]) {
                                            u.label = i[2], u.ops.push(o);
                                            break
                                        }
                                        i[2] && u.ops.pop(), u.trys.pop();
                                        continue
                                }
                                o = t.call(e, u)
                            } catch (a) {
                                o = [6, a], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, a])
                    }
                }
            }

            function u(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function a(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, o = r.call(e),
                    u = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = o.next()).done;) u.push(n.value)
                } catch (a) {
                    i = {
                        error: a
                    }
                } finally {
                    try {
                        n && !n.done && (r = o.return) && r.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return u
            }

            function c(e, t, r) {
                if (r || 2 == arguments.length)
                    for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
                return e.concat(n || Array.prototype.slice.call(t))
            }

            function s(e, t, r, n) {
                for (var s = [], f = 4; f < arguments.length; f++) s[f - 4] = arguments[f];
                return i(this, void 0, void 0, function() {
                    var f, d, p, h, y;
                    return o(this, function(m) {
                        switch (m.label) {
                            case 0:
                                m.trys.push([0, 12, 13, 14]), d = (f = u(s)).next(), m.label = 1;
                            case 1:
                                if (d.done) return [3, 11];
                                switch (typeof(p = d.value)) {
                                    case "string":
                                        return [3, 2];
                                    case "number":
                                        return [3, 4];
                                    case "function":
                                        return [3, 6]
                                }
                                return [3, 8];
                            case 2:
                                return [4, function(e, t, r, n, s) {
                                    return i(this, void 0, void 0, function() {
                                        var f;
                                        return o(this, function(d) {
                                            switch (d.label) {
                                                case 0:
                                                    var p, h;
                                                    return p = e.textContent, h = a(t).slice(0), f = c(c([], a(p), !1), [NaN], !1).findIndex(function(e, t) {
                                                        return h[t] !== e
                                                    }), [4, function(e, t, r, n, c) {
                                                        return i(this, void 0, void 0, function() {
                                                            var i, s, f, d, p, h, y, m, v, b, g, w;
                                                            return o(this, function(E) {
                                                                switch (E.label) {
                                                                    case 0:
                                                                        if (i = t, c) {
                                                                            for (s = 0, f = 1; f < t.length; f++)
                                                                                if (p = (d = a([t[f - 1], t[f]], 2))[0], (h = d[1]).length > p.length || "" === h) {
                                                                                    s = f;
                                                                                    break
                                                                                }
                                                                            i = t.slice(s, t.length)
                                                                        }
                                                                        E.label = 1;
                                                                    case 1:
                                                                        E.trys.push([1, 6, 7, 8]), m = (y = u(function(e) {
                                                                            var t, r, n, i, a;
                                                                            return o(this, function(c) {
                                                                                switch (c.label) {
                                                                                    case 0:
                                                                                        t = function(e) {
                                                                                            return o(this, function(t) {
                                                                                                switch (t.label) {
                                                                                                    case 0:
                                                                                                        return [4, {
                                                                                                            op: function(t) {
                                                                                                                return requestAnimationFrame(function() {
                                                                                                                    return t.textContent = e
                                                                                                                })
                                                                                                            },
                                                                                                            opCode: function(t) {
                                                                                                                return "" === e || t.textContent.length > e.length ? "DELETE" : "WRITING"
                                                                                                            }
                                                                                                        }];
                                                                                                    case 1:
                                                                                                        return t.sent(), [2]
                                                                                                }
                                                                                            })
                                                                                        }, c.label = 1;
                                                                                    case 1:
                                                                                        c.trys.push([1, 6, 7, 8]), n = (r = u(e)).next(), c.label = 2;
                                                                                    case 2:
                                                                                        return n.done ? [3, 5] : [5, t(n.value)];
                                                                                    case 3:
                                                                                        c.sent(), c.label = 4;
                                                                                    case 4:
                                                                                        return n = r.next(), [3, 2];
                                                                                    case 5:
                                                                                        return [3, 8];
                                                                                    case 6:
                                                                                        return i = {
                                                                                            error: c.sent()
                                                                                        }, [3, 8];
                                                                                    case 7:
                                                                                        try {
                                                                                            n && !n.done && (a = r.return) && a.call(r)
                                                                                        } finally {
                                                                                            if (i) throw i.error
                                                                                        }
                                                                                        return [7];
                                                                                    case 8:
                                                                                        return [2]
                                                                                }
                                                                            })
                                                                        }(i))).next(), E.label = 2;
                                                                    case 2:
                                                                        return m.done ? [3, 5] : (b = "WRITING" === (v = m.value).opCode(e) ? r + r * (Math.random() - .5) : n + n * (Math.random() - .5), v.op(e), [4, l(b)]);
                                                                    case 3:
                                                                        E.sent(), E.label = 4;
                                                                    case 4:
                                                                        return m = y.next(), [3, 2];
                                                                    case 5:
                                                                        return [3, 8];
                                                                    case 6:
                                                                        return g = {
                                                                            error: E.sent()
                                                                        }, [3, 8];
                                                                    case 7:
                                                                        try {
                                                                            m && !m.done && (w = y.return) && w.call(y)
                                                                        } finally {
                                                                            if (g) throw g.error
                                                                        }
                                                                        return [7];
                                                                    case 8:
                                                                        return [2]
                                                                }
                                                            })
                                                        })
                                                    }(e, c(c([], a(function(e, t, r) {
                                                        var n = a(e).slice(0);
                                                        return void 0 === t && (t = 0), void 0 === r && (r = n.length), o(this, function(e) {
                                                            switch (e.label) {
                                                                case 0:
                                                                    return r > t ? [4, n.slice(0, --r).join("")] : [3, 2];
                                                                case 1:
                                                                    return e.sent(), [3, 0];
                                                                case 2:
                                                                    return [2]
                                                            }
                                                        })
                                                    }(e.textContent, f)), !1), a(function(e, t, r) {
                                                        var n = a(e).slice(0);
                                                        return void 0 === t && (t = 0), void 0 === r && (r = n.length), o(this, function(e) {
                                                            switch (e.label) {
                                                                case 0:
                                                                    return t < r ? [4, n.slice(0, ++t).join("")] : [3, 2];
                                                                case 1:
                                                                    return e.sent(), [3, 0];
                                                                case 2:
                                                                    return [2]
                                                            }
                                                        })
                                                    }(t, f)), !1), r, n, s)];
                                                case 1:
                                                    return d.sent(), [2]
                                            }
                                        })
                                    })
                                }(e, p, t, r, n)];
                            case 3:
                            case 5:
                            case 7:
                                return m.sent(), [3, 10];
                            case 4:
                                return [4, l(p)];
                            case 6:
                                return [4, p.apply(void 0, c([e, t, r, n], a(s), !1))];
                            case 8:
                                return [4, p];
                            case 9:
                                m.sent(), m.label = 10;
                            case 10:
                                return d = f.next(), [3, 1];
                            case 11:
                                return [3, 14];
                            case 12:
                                return h = {
                                    error: m.sent()
                                }, [3, 14];
                            case 13:
                                try {
                                    d && !d.done && (y = f.return) && y.call(f)
                                } finally {
                                    if (h) throw h.error
                                }
                                return [7];
                            case 14:
                                return [2]
                        }
                    })
                })
            }

            function l(e) {
                return i(this, void 0, void 0, function() {
                    return o(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, new Promise(function(t) {
                                    return setTimeout(t, e)
                                })];
                            case 1:
                                return t.sent(), [2]
                        }
                    })
                })
            }! function(e, t) {
                void 0 === t && (t = {});
                var r = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var n = document.head || document.getElementsByTagName("head")[0],
                        i = document.createElement("style");
                    i.type = "text/css", "top" === r && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
                }
            }(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
            var f = (0, n.memo)((0, n.forwardRef)(function(e, t) {
                var r = e.sequence,
                    i = e.repeat,
                    o = e.className,
                    u = e.speed,
                    l = void 0 === u ? 40 : u,
                    f = e.deletionSpeed,
                    d = e.omitDeletionAnimation,
                    p = void 0 !== d && d,
                    h = e.preRenderFirstString,
                    y = e.wrapper,
                    m = e.cursor,
                    v = void 0 === m || m,
                    b = e.style,
                    g = function(e, t) {
                        var r = {};
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) 0 > t.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
                        }
                        return r
                    }(e, ["sequence", "repeat", "className", "speed", "deletionSpeed", "omitDeletionAnimation", "preRenderFirstString", "wrapper", "cursor", "style"]),
                    w = g["aria-label"],
                    E = g["aria-hidden"];
                f || (f = l);
                var x = [, , ].fill(40);
                [l, f].forEach(function(e, t) {
                    switch (typeof e) {
                        case "number":
                            x[t] = Math.abs(e - 100);
                            break;
                        case "object":
                            var r = e.type,
                                n = e.value;
                            if ("number" != typeof n) break;
                            "keyStrokeDelayInMs" === r && (x[t] = n)
                    }
                });
                var R, k, S, C, O, P, I, _, A, M = x[0],
                    j = x[1],
                    N = (R = t, void 0 === k && (k = null), S = (0, n.useRef)(k), (0, n.useEffect)(function() {
                        R && ("function" == typeof R ? R(S.current) : R.current = S.current)
                    }, [R]), S),
                    T = "index-module_type__E-SaG";
                C = o ? "".concat(v ? T + " " : "").concat(o) : v ? T : "", O = (0, n.useRef)(function() {
                    var e, t = r;
                    return i === 1 / 0 ? e = s : "number" == typeof i && (t = Array(1 + i).fill(r).flat()), s.apply(void 0, c(c([N.current, M, j, p], a(t), !1), [e], !1)),
                        function() {
                            N.current
                        }
                }), P = (0, n.useRef)(), I = (0, n.useRef)(!1), _ = (0, n.useRef)(!1), A = a((0, n.useState)(0), 2)[1], I.current && (_.current = !0), (0, n.useEffect)(function() {
                    return I.current || (P.current = O.current(), I.current = !0), A(function(e) {
                            return e + 1
                        }),
                        function() {
                            _.current && P.current && P.current()
                        }
                }, []);
                var L = void 0 !== h && h ? r.find(function(e) {
                    return "string" == typeof e
                }) || "" : null;
                return n.createElement(void 0 === y ? "span" : y, {
                    "aria-hidden": E,
                    "aria-label": w,
                    style: b,
                    className: C,
                    children: w ? n.createElement("span", {
                        "aria-hidden": "true",
                        ref: N,
                        children: L
                    }) : L,
                    ref: w ? void 0 : N
                })
            }), function(e, t) {
                return !0
            })
        },
        7524: function(e, t, r) {
            var n = r(7294);
            let i = n.forwardRef(function({
                title: e,
                titleId: t,
                ...r
            }, i) {
                return n.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    ref: i,
                    "aria-labelledby": t
                }, r), e ? n.createElement("title", {
                    id: t
                }, e) : null, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                    clipRule: "evenodd"
                }))
            });
            t.Z = i
        },
        1526: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return m
                }
            });
            var n = r(7294),
                i = r(8868);

            function o() {
                let e = (0, n.useRef)(!1);
                return (0, i.L)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
            var u = r(2074),
                a = r(240),
                c = r(6681);
            class s extends n.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let r = this.props.sizeRef.current;
                        r.height = t.offsetHeight || 0, r.width = t.offsetWidth || 0, r.top = t.offsetTop, r.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function l({
                children: e,
                isPresent: t
            }) {
                let r = (0, n.useId)(),
                    i = (0, n.useRef)(null),
                    o = (0, n.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, n.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: n,
                        top: u,
                        left: a
                    } = o.current;
                    if (t || !i.current || !e || !n) return;
                    i.current.dataset.motionPopId = r;
                    let c = document.createElement("style");
                    return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${u}px !important;
            left: ${a}px !important;
          }
        `), () => {
                        document.head.removeChild(c)
                    }
                }, [t]), n.createElement(s, {
                    isPresent: t,
                    childRef: i,
                    sizeRef: o
                }, n.cloneElement(e, {
                    ref: i
                }))
            }
            let f = ({
                children: e,
                initial: t,
                isPresent: r,
                onExitComplete: i,
                custom: o,
                presenceAffectsLayout: u,
                mode: s
            }) => {
                let f = (0, c.h)(d),
                    p = (0, n.useId)(),
                    h = (0, n.useMemo)(() => ({
                        id: p,
                        initial: t,
                        isPresent: r,
                        custom: o,
                        onExitComplete: e => {
                            for (let t of (f.set(e, !0), f.values()))
                                if (!t) return;
                            i && i()
                        },
                        register: e => (f.set(e, !1), () => f.delete(e))
                    }), u ? void 0 : [r]);
                return (0, n.useMemo)(() => {
                    f.forEach((e, t) => f.set(t, !1))
                }, [r]), n.useEffect(() => {
                    r || f.size || !i || i()
                }, [r]), "popLayout" === s && (e = n.createElement(l, {
                    isPresent: r
                }, e)), n.createElement(a.O.Provider, {
                    value: h
                }, e)
            };

            function d() {
                return new Map
            }
            var p = r(5364),
                h = r(5487);
            let y = e => e.key || "",
                m = ({
                    children: e,
                    custom: t,
                    initial: r = !0,
                    onExitComplete: a,
                    exitBeforeEnter: c,
                    presenceAffectsLayout: s = !0,
                    mode: l = "sync"
                }) => {
                    var d;
                    (0, h.k)(!c, "Replace exitBeforeEnter with mode='wait'");
                    let m = (0, n.useContext)(p.p).forceRender || function() {
                            let e = o(),
                                [t, r] = (0, n.useState)(0),
                                i = (0, n.useCallback)(() => {
                                    e.current && r(t + 1)
                                }, [t]),
                                a = (0, n.useCallback)(() => u.Wi.postRender(i), [i]);
                            return [a, t]
                        }()[0],
                        v = o(),
                        b = function(e) {
                            let t = [];
                            return n.Children.forEach(e, e => {
                                (0, n.isValidElement)(e) && t.push(e)
                            }), t
                        }(e),
                        g = b,
                        w = (0, n.useRef)(new Map).current,
                        E = (0, n.useRef)(g),
                        x = (0, n.useRef)(new Map).current,
                        R = (0, n.useRef)(!0);
                    if ((0, i.L)(() => {
                            R.current = !1,
                                function(e, t) {
                                    e.forEach(e => {
                                        let r = y(e);
                                        t.set(r, e)
                                    })
                                }(b, x), E.current = g
                        }), d = () => {
                            R.current = !0, x.clear(), w.clear()
                        }, (0, n.useEffect)(() => () => d(), []), R.current) return n.createElement(n.Fragment, null, g.map(e => n.createElement(f, {
                        key: y(e),
                        isPresent: !0,
                        initial: !!r && void 0,
                        presenceAffectsLayout: s,
                        mode: l
                    }, e)));
                    g = [...g];
                    let k = E.current.map(y),
                        S = b.map(y),
                        C = k.length;
                    for (let O = 0; O < C; O++) {
                        let P = k[O]; - 1 !== S.indexOf(P) || w.has(P) || w.set(P, void 0)
                    }
                    return "wait" === l && w.size && (g = []), w.forEach((e, r) => {
                        if (-1 !== S.indexOf(r)) return;
                        let i = x.get(r);
                        if (!i) return;
                        let o = k.indexOf(r),
                            u = e;
                        if (!u) {
                            let c = () => {
                                x.delete(r), w.delete(r);
                                let e = E.current.findIndex(e => e.key === r);
                                if (E.current.splice(e, 1), !w.size) {
                                    if (E.current = b, !1 === v.current) return;
                                    m(), a && a()
                                }
                            };
                            u = n.createElement(f, {
                                key: y(i),
                                isPresent: !1,
                                onExitComplete: c,
                                custom: t,
                                presenceAffectsLayout: s,
                                mode: l
                            }, i), w.set(r, u)
                        }
                        g.splice(o, 0, u)
                    }), g = g.map(e => {
                        let t = e.key;
                        return w.has(t) ? e : n.createElement(f, {
                            key: y(e),
                            isPresent: !0,
                            presenceAffectsLayout: s,
                            mode: l
                        }, e)
                    }), n.createElement(n.Fragment, null, w.size ? g : g.map(e => (0, n.cloneElement)(e)))
                }
        },
        2708: function(e, t, r) {
            r.d(t, {
                YD: function() {
                    return s
                }
            });
            var n = r(7294),
                i = Object.defineProperty,
                o = new Map,
                u = new WeakMap,
                a = 0,
                c = void 0;

            function s({
                threshold: e,
                delay: t,
                trackVisibility: r,
                rootMargin: i,
                root: s,
                triggerOnce: l,
                skip: f,
                initialInView: d,
                fallbackInView: p,
                onChange: h
            } = {}) {
                var y;
                let [m, v] = n.useState(null), b = n.useRef(), [g, w] = n.useState({
                    inView: !!d,
                    entry: void 0
                });
                b.current = h, n.useEffect(() => {
                    let n;
                    if (!f && m) return n = function(e, t, r = {}, n = c) {
                        if (void 0 === window.IntersectionObserver && void 0 !== n) {
                            let i = e.getBoundingClientRect();
                            return t(n, {
                                isIntersecting: n,
                                target: e,
                                intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
                                time: 0,
                                boundingClientRect: i,
                                intersectionRect: i,
                                rootBounds: i
                            }), () => {}
                        }
                        let {
                            id: s,
                            observer: l,
                            elements: f
                        } = function(e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                    var r;
                                    return `${t}_${"root"===t?(r=e.root)?(u.has(r)||(a+=1,u.set(r,a.toString())),u.get(r)):"0":e[t]}`
                                }).toString(),
                                r = o.get(t);
                            if (!r) {
                                let n;
                                let i = new Map,
                                    c = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var r;
                                            let o = t.isIntersecting && n.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o), null == (r = i.get(t.target)) || r.forEach(e => {
                                                e(o, t)
                                            })
                                        })
                                    }, e);
                                n = c.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
                                    id: t,
                                    observer: c,
                                    elements: i
                                }, o.set(t, r)
                            }
                            return r
                        }(r), d = f.get(e) || [];
                        return f.has(e) || f.set(e, d), d.push(t), l.observe(e),
                            function() {
                                d.splice(d.indexOf(t), 1), 0 === d.length && (f.delete(e), l.unobserve(e)), 0 === f.size && (l.disconnect(), o.delete(s))
                            }
                    }(m, (e, t) => {
                        w({
                            inView: e,
                            entry: t
                        }), b.current && b.current(e, t), t.isIntersecting && l && n && (n(), n = void 0)
                    }, {
                        root: s,
                        rootMargin: i,
                        threshold: e,
                        trackVisibility: r,
                        delay: t
                    }, p), () => {
                        n && n()
                    }
                }, [Array.isArray(e) ? e.toString() : e, m, s, i, l, f, r, p, t]);
                let E = null == (y = g.entry) ? void 0 : y.target,
                    x = n.useRef();
                m || !E || l || f || x.current === E || (x.current = E, w({
                    inView: !!d,
                    entry: void 0
                }));
                let R = [v, g.inView, g.entry];
                return R.ref = R[0], R.inView = R[1], R.entry = R[2], R
            }
            n.Component
        }
    }
]);
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [210], {
        8273: function(t, e, i) {
            i.r(e), i.d(e, {
                CountUp: function() {
                    return r
                }
            });
            var n = function() {
                    return (n = Object.assign || function(t) {
                        for (var e, i = 1, n = arguments.length; i < n; i++)
                            for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t
                    }).apply(this, arguments)
                },
                r = function() {
                    function t(t, e, i) {
                        var r = this;
                        this.endVal = e, this.options = i, this.version = "2.8.0", this.defaults = {
                            startVal: 0,
                            decimalPlaces: 0,
                            duration: 2,
                            useEasing: !0,
                            useGrouping: !0,
                            useIndianSeparators: !1,
                            smartEasingThreshold: 999,
                            smartEasingAmount: 333,
                            separator: ",",
                            decimal: ".",
                            prefix: "",
                            suffix: "",
                            enableScrollSpy: !1,
                            scrollSpyDelay: 200,
                            scrollSpyOnce: !1
                        }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(t) {
                            r.startTime || (r.startTime = t);
                            var e = t - r.startTime;
                            r.remaining = r.duration - e, r.useEasing ? r.countDown ? r.frameVal = r.startVal - r.easingFn(e, 0, r.startVal - r.endVal, r.duration) : r.frameVal = r.easingFn(e, r.startVal, r.endVal - r.startVal, r.duration) : r.frameVal = r.startVal + (r.endVal - r.startVal) * (e / r.duration);
                            var i = r.countDown ? r.frameVal < r.endVal : r.frameVal > r.endVal;
                            r.frameVal = i ? r.endVal : r.frameVal, r.frameVal = Number(r.frameVal.toFixed(r.options.decimalPlaces)), r.printValue(r.frameVal), e < r.duration ? r.rAF = requestAnimationFrame(r.count) : null !== r.finalEndVal ? r.update(r.finalEndVal) : r.options.onCompleteCallback && r.options.onCompleteCallback()
                        }, this.formatNumber = function(t) {
                            var e, i, n, s = (Math.abs(t).toFixed(r.options.decimalPlaces) + "").split(".");
                            if (e = s[0], i = s.length > 1 ? r.options.decimal + s[1] : "", r.options.useGrouping) {
                                n = "";
                                for (var o = 3, a = 0, l = 0, u = e.length; l < u; ++l) r.options.useIndianSeparators && 4 === l && (o = 2, a = 1), 0 !== l && a % o == 0 && (n = r.options.separator + n), a++, n = e[u - l - 1] + n;
                                e = n
                            }
                            return r.options.numerals && r.options.numerals.length && (e = e.replace(/[0-9]/g, function(t) {
                                return r.options.numerals[+t]
                            }), i = i.replace(/[0-9]/g, function(t) {
                                return r.options.numerals[+t]
                            })), (t < 0 ? "-" : "") + r.options.prefix + e + i + r.options.suffix
                        }, this.easeOutExpo = function(t, e, i, n) {
                            return i * (1 - Math.pow(2, -10 * t / n)) * 1024 / 1023 + e
                        }, this.options = n(n({}, this.defaults), i), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(e), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof t ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                            return r.handleScroll(r)
                        }), window.onscroll = function() {
                            window.onScrollFns.forEach(function(t) {
                                return t()
                            })
                        }, this.handleScroll(this)))
                    }
                    return t.prototype.handleScroll = function(t) {
                        if (t && window && !t.once) {
                            var e = window.innerHeight + window.scrollY,
                                i = t.el.getBoundingClientRect(),
                                n = i.top + window.pageYOffset,
                                r = i.top + i.height + window.pageYOffset;
                            r < e && r > window.scrollY && t.paused ? (t.paused = !1, setTimeout(function() {
                                return t.start()
                            }, t.options.scrollSpyDelay), t.options.scrollSpyOnce && (t.once = !0)) : (window.scrollY > r || n > e) && !t.paused && t.reset()
                        }
                    }, t.prototype.determineDirectionAndSmartEasing = function() {
                        var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                        if (this.countDown = this.startVal > t, Math.abs(t - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing) {
                            this.finalEndVal = t;
                            var e = this.countDown ? 1 : -1;
                            this.endVal = t + e * this.options.smartEasingAmount, this.duration = this.duration / 2
                        } else this.endVal = t, this.finalEndVal = null;
                        null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
                    }, t.prototype.start = function(t) {
                        this.error || (this.options.onStartCallback && this.options.onStartCallback(), t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
                    }, t.prototype.pauseResume = function() {
                        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
                    }, t.prototype.reset = function() {
                        cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
                    }, t.prototype.update = function(t) {
                        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
                    }, t.prototype.printValue = function(t) {
                        var e;
                        if (this.el) {
                            var i = this.formattingFn(t);
                            (null === (e = this.options.plugin) || void 0 === e ? void 0 : e.render) ? this.options.plugin.render(this.el, i): "INPUT" === this.el.tagName ? this.el.value = i : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = i : this.el.innerHTML = i
                        }
                    }, t.prototype.ensureNumber = function(t) {
                        return "number" == typeof t && !isNaN(t)
                    }, t.prototype.validateValue = function(t) {
                        var e = Number(t);
                        return this.ensureNumber(e) ? e : (this.error = "[CountUp] invalid start or end value: ".concat(t), null)
                    }, t.prototype.resetDuration = function() {
                        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
                    }, t
                }()
        },
        7857: function(t, e, i) {
            var n = i(7294),
                r = i(8273);

            function s(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), i.push.apply(i, n)
                }
                return i
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(i), !0).forEach(function(e) {
                        var n, r, s;
                        n = t, r = e, s = i[e], (r = function(t) {
                            var e = function(t, e) {
                                if ("object" != typeof t || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == typeof e ? e : String(e)
                        }(r)) in n ? Object.defineProperty(n, r, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[r] = s
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    })
                }
                return t
            }

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function l(t, e) {
                if (null == t) return {};
                var i, n, r = function(t, e) {
                    if (null == t) return {};
                    var i, n, r = {},
                        s = Object.keys(t);
                    for (n = 0; n < s.length; n++) i = s[n], e.indexOf(i) >= 0 || (r[i] = t[i]);
                    return r
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < s.length; n++) i = s[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i])
                }
                return r
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var h = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? n.useLayoutEffect : n.useEffect;

            function c(t) {
                var e = n.useRef(t);
                return h(function() {
                    e.current = t
                }), n.useCallback(function() {
                    for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                    return e.current.apply(void 0, i)
                }, [])
            }
            var d = function(t, e) {
                    var i = e.decimal,
                        n = e.decimals,
                        s = e.duration,
                        o = e.easingFn,
                        a = e.end,
                        l = e.formattingFn,
                        u = e.numerals,
                        h = e.prefix,
                        c = e.separator,
                        d = e.start,
                        p = e.suffix,
                        f = e.useEasing,
                        m = e.useGrouping,
                        g = e.useIndianSeparators,
                        v = e.enableScrollSpy,
                        y = e.scrollSpyDelay,
                        x = e.scrollSpyOnce;
                    return new r.CountUp(t, a, {
                        startVal: d,
                        duration: s,
                        decimal: i,
                        decimalPlaces: n,
                        easingFn: o,
                        formattingFn: l,
                        numerals: u,
                        separator: c,
                        prefix: h,
                        suffix: p,
                        useEasing: f,
                        useIndianSeparators: g,
                        useGrouping: m,
                        enableScrollSpy: v,
                        scrollSpyDelay: y,
                        scrollSpyOnce: x
                    })
                },
                p = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"],
                f = {
                    decimal: ".",
                    separator: ",",
                    delay: null,
                    prefix: "",
                    suffix: "",
                    duration: 2,
                    start: 0,
                    decimals: 0,
                    startOnMount: !0,
                    enableReinitialize: !0,
                    useEasing: !0,
                    useGrouping: !0,
                    useIndianSeparators: !1
                },
                m = function(t) {
                    var e = Object.fromEntries(Object.entries(t).filter(function(t) {
                            return void 0 !== (function(t) {
                                if (Array.isArray(t)) return t
                            }(t) || function(t, e) {
                                var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (null != i) {
                                    var n, r, s, o, a = [],
                                        l = !0,
                                        u = !1;
                                    try {
                                        if (s = (i = i.call(t)).next, 0 === e) {
                                            if (Object(i) !== i) return;
                                            l = !1
                                        } else
                                            for (; !(l = (n = s.call(i)).done) && (a.push(n.value), a.length !== e); l = !0);
                                    } catch (h) {
                                        u = !0, r = h
                                    } finally {
                                        try {
                                            if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return
                                        } finally {
                                            if (u) throw r
                                        }
                                    }
                                    return a
                                }
                            }(t, 2) || function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return u(t, e);
                                    var i = Object.prototype.toString.call(t).slice(8, -1);
                                    if ("Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i) return Array.from(t);
                                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return u(t, e)
                                }
                            }(t, 2) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }())[1]
                        })),
                        i = n.useMemo(function() {
                            return o(o({}, f), e)
                        }, [t]),
                        r = i.ref,
                        s = i.startOnMount,
                        a = i.enableReinitialize,
                        h = i.delay,
                        m = i.onEnd,
                        g = i.onStart,
                        v = i.onPauseResume,
                        y = i.onReset,
                        x = i.onUpdate,
                        b = l(i, p),
                        P = n.useRef(),
                        w = n.useRef(),
                        V = n.useRef(!1),
                        A = c(function() {
                            return d("string" == typeof r ? r : r.current, b)
                        }),
                        S = c(function(t) {
                            var e = P.current;
                            if (e && !t) return e;
                            var i = A();
                            return P.current = i, i
                        }),
                        T = c(function() {
                            var t = function() {
                                return S(!0).start(function() {
                                    null == m || m({
                                        pauseResume: E,
                                        reset: C,
                                        start: R,
                                        update: M
                                    })
                                })
                            };
                            h && h > 0 ? w.current = setTimeout(t, 1e3 * h) : t(), null == g || g({
                                pauseResume: E,
                                reset: C,
                                update: M
                            })
                        }),
                        E = c(function() {
                            S().pauseResume(), null == v || v({
                                reset: C,
                                start: R,
                                update: M
                            })
                        }),
                        C = c(function() {
                            S().el && (w.current && clearTimeout(w.current), S().reset(), null == y || y({
                                pauseResume: E,
                                start: R,
                                update: M
                            }))
                        }),
                        M = c(function(t) {
                            S().update(t), null == x || x({
                                pauseResume: E,
                                reset: C,
                                start: R
                            })
                        }),
                        R = c(function() {
                            C(), T()
                        }),
                        D = c(function(t) {
                            s && (t && C(), T())
                        });
                    return n.useEffect(function() {
                        V.current ? a && D(!0) : (V.current = !0, D())
                    }, [a, V, D, h, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.formattingFn]), n.useEffect(function() {
                        return function() {
                            C()
                        }
                    }, [C]), {
                        start: R,
                        pauseResume: E,
                        reset: C,
                        update: M,
                        getCountUp: S
                    }
                },
                g = ["className", "redraw", "containerProps", "children", "style"];
            e.ZP = function(t) {
                var e = t.className,
                    i = t.redraw,
                    r = t.containerProps,
                    s = t.children,
                    u = t.style,
                    h = l(t, g),
                    d = n.useRef(null),
                    p = n.useRef(!1),
                    f = m(o(o({}, h), {}, {
                        ref: d,
                        startOnMount: "function" != typeof s || 0 === t.delay,
                        enableReinitialize: !1
                    })),
                    v = f.start,
                    y = f.reset,
                    x = f.update,
                    b = f.pauseResume,
                    P = f.getCountUp,
                    w = c(function() {
                        v()
                    }),
                    V = c(function(e) {
                        t.preserveValue || y(), x(e)
                    }),
                    A = c(function() {
                        if ("function" == typeof t.children && !(d.current instanceof Element)) {
                            console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
                            return
                        }
                        P()
                    });
                return (n.useEffect(function() {
                    A()
                }, [A]), n.useEffect(function() {
                    p.current && V(t.end)
                }, [t.end, V]), n.useEffect(function() {
                    i && p.current && w()
                }, [w, i, i && t]), n.useEffect(function() {
                    !i && p.current && w()
                }, [w, i, t.start, t.suffix, t.prefix, t.duration, t.separator, t.decimals, t.decimal, t.className, t.formattingFn]), n.useEffect(function() {
                    p.current = !0
                }, []), "function" == typeof s) ? s({
                    countUpRef: d,
                    start: v,
                    reset: y,
                    update: x,
                    pauseResume: b,
                    getCountUp: P
                }) : n.createElement("span", a({
                    className: e,
                    ref: d,
                    style: u
                }, r), void 0 !== t.start ? P().formattingFn(t.start) : "")
            }
        },
        72: function(t, e, i) {
            i.d(e, {
                y: function() {
                    return O
                }
            });
            var n = i(1662);
            let r = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function s(t, e, i, s) {
                if (t === e && i === s) return n.Z;
                let o = e => (function(t, e, i, n, s) {
                    let o, a;
                    let l = 0;
                    do(o = r(a = e + (i - e) / 2, n, s) - t) > 0 ? i = a : e = a; while (Math.abs(o) > 1e-7 && ++l < 12);
                    return a
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : r(o(t), e, s)
            }
            let o = s(.42, 0, 1, 1),
                a = s(0, 0, .58, 1),
                l = s(.42, 0, .58, 1),
                u = t => Array.isArray(t) && "number" != typeof t[0];
            var h = i(5487),
                c = i(7255),
                d = i(415),
                p = i(5129);
            let f = s(.33, 1.53, .69, .99),
                m = (0, p.M)(f),
                g = (0, d.o)(m),
                v = t => (t *= 2) < 1 ? .5 * m(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
                y = {
                    linear: n.Z,
                    easeIn: o,
                    easeInOut: l,
                    easeOut: a,
                    circIn: c.Z7,
                    circInOut: c.X7,
                    circOut: c.Bn,
                    backIn: m,
                    backInOut: g,
                    backOut: f,
                    anticipate: v
                },
                x = t => {
                    if (Array.isArray(t)) {
                        (0, h.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, n, r] = t;
                        return s(e, i, n, r)
                    }
                    return "string" == typeof t ? ((0, h.k)(void 0 !== y[t], `Invalid easing type '${t}'`), y[t]) : t
                };
            var b = i(4606),
                P = i(533);

            function w({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: n = "easeInOut"
            }) {
                let r = u(n) ? n.map(x) : x(n),
                    s = {
                        done: !1,
                        value: e[0]
                    },
                    o = (i && i.length === e.length ? i : (0, P.Y)(e)).map(e => e * t),
                    a = (0, b.s)(o, e, {
                        ease: Array.isArray(r) ? r : e.map(() => r || l).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (s.value = a(e), s.done = e >= t, s)
                }
            }
            var V = i(6917),
                A = i(3038);

            function S(t, e, i) {
                let n = Math.max(e - 5, 0);
                return (0, A.R)(i - t(n), e - n)
            }
            var T = i(4169);

            function E(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let C = ["duration", "bounce"],
                M = ["stiffness", "damping", "mass"];

            function R(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function D({
                keyframes: t,
                restDelta: e,
                restSpeed: i,
                ...n
            }) {
                let r;
                let s = t[0],
                    o = t[t.length - 1],
                    a = {
                        done: !1,
                        value: s
                    },
                    {
                        stiffness: l,
                        damping: u,
                        mass: c,
                        velocity: d,
                        duration: p,
                        isResolvedFromDuration: f
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!R(t, M) && R(t, C)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: n = 1
                            }) {
                                let r, s;
                                (0, h.K)(t <= (0, V.w)(10), "Spring duration must be 10 seconds or less");
                                let o = 1 - e;
                                o = (0, T.u)(.05, 1, o), t = (0, T.u)(.01, 10, (0, V.X)(t)), o < 1 ? (r = e => {
                                    let n = e * o,
                                        r = n * t,
                                        s = E(e, o);
                                    return .001 - (n - i) / s * Math.exp(-r)
                                }, s = e => {
                                    let n = e * o,
                                        s = n * t,
                                        a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                        l = E(Math.pow(e, 2), o),
                                        u = -r(e) + .001 > 0 ? -1 : 1;
                                    return u * ((s * i + i - a) * Math.exp(-s)) / l
                                }) : (r = e => {
                                    let n = Math.exp(-e * t),
                                        r = (e - i) * t + 1;
                                    return -.001 + n * r
                                }, s = e => {
                                    let n = Math.exp(-e * t),
                                        r = (i - e) * (t * t);
                                    return n * r
                                });
                                let a = 5 / t,
                                    l = function(t, e, i) {
                                        let n = i;
                                        for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                                        return n
                                    }(r, s, a);
                                if (t = (0, V.w)(t), isNaN(l)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let u = Math.pow(l, 2) * n;
                                    return {
                                        stiffness: u,
                                        damping: 2 * o * Math.sqrt(n * u),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = { ...e,
                                ...i,
                                velocity: 0,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }(n),
                    m = d ? -(0, V.X)(d) : 0,
                    g = u / (2 * Math.sqrt(l * c)),
                    v = o - s,
                    y = (0, V.X)(Math.sqrt(l / c)),
                    x = 5 > Math.abs(v);
                if (i || (i = x ? .01 : 2), e || (e = x ? .005 : .5), g < 1) {
                    let b = E(y, g);
                    r = t => o - Math.exp(-g * y * t) * ((m + g * y * v) / b * Math.sin(b * t) + v * Math.cos(b * t))
                } else if (1 === g) r = t => o - Math.exp(-y * t) * (v + (m + y * v) * t);
                else {
                    let P = y * Math.sqrt(g * g - 1);
                    r = t => {
                        let e = Math.min(P * t, 300);
                        return o - Math.exp(-g * y * t) * ((m + g * y * v) * Math.sinh(e) + P * v * Math.cosh(e)) / P
                    }
                }
                return {
                    calculatedDuration: f && p || null,
                    next: t => {
                        let n = r(t);
                        if (f) a.done = t >= p;
                        else {
                            let s = m;
                            0 !== t && (s = g < 1 ? S(r, t, n) : 0);
                            let l = Math.abs(s) <= i,
                                u = Math.abs(o - n) <= e;
                            a.done = l && u
                        }
                        return a.value = a.done ? o : n, a
                    }
                }
            }

            function k({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: n = 325,
                bounceDamping: r = 10,
                bounceStiffness: s = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let c, d;
                let p = t[0],
                    f = {
                        done: !1,
                        value: p
                    },
                    m = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    v = i * e,
                    y = p + v,
                    x = void 0 === o ? y : o(y);
                x !== y && (v = x - p);
                let b = t => -v * Math.exp(-t / n),
                    P = t => x + b(t),
                    w = t => {
                        let e = b(t),
                            i = P(t);
                        f.done = Math.abs(e) <= u, f.value = f.done ? x : i
                    },
                    V = t => {
                        m(f.value) && (c = t, d = D({
                            keyframes: [f.value, g(f.value)],
                            velocity: S(P, t, f.value),
                            damping: r,
                            stiffness: s,
                            restDelta: u,
                            restSpeed: h
                        }))
                    };
                return V(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (d || void 0 !== c || (e = !0, w(t), V(t)), void 0 !== c && t > c) ? d.next(t - c) : (e || w(t), f)
                    }
                }
            }
            var F = i(2074);
            let j = t => {
                let e = ({
                    timestamp: e
                }) => t(e);
                return {
                    start: () => F.Wi.update(e, !0),
                    stop: () => (0, F.Pn)(e),
                    now: () => F.w0.isProcessing ? F.w0.timestamp : performance.now()
                }
            };

            function B(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let L = {
                decay: k,
                inertia: k,
                tween: w,
                keyframes: w,
                spring: D
            };

            function O({
                autoplay: t = !0,
                delay: e = 0,
                driver: i = j,
                keyframes: n,
                type: r = "keyframes",
                repeat: s = 0,
                repeatDelay: o = 0,
                repeatType: a = "loop",
                onPlay: l,
                onStop: u,
                onComplete: h,
                onUpdate: c,
                ...d
            }) {
                let p, f, m, g, v, y = 1,
                    x = !1,
                    P = () => {
                        f = new Promise(t => {
                            p = t
                        })
                    };
                P();
                let A = L[r] || w;
                A !== w && "number" != typeof n[0] && (g = (0, b.s)([0, 100], n, {
                    clamp: !1
                }), n = [0, 100]);
                let S = A({ ...d,
                    keyframes: n
                });
                "mirror" === a && (v = A({ ...d,
                    keyframes: [...n].reverse(),
                    velocity: -(d.velocity || 0)
                }));
                let E = "idle",
                    C = null,
                    M = null,
                    R = null;
                null === S.calculatedDuration && s && (S.calculatedDuration = B(S));
                let {
                    calculatedDuration: D
                } = S, k = 1 / 0, F = 1 / 0;
                null !== D && (F = (k = D + o) * (s + 1) - o);
                let O = 0,
                    I = t => {
                        if (null === M) return;
                        y > 0 && (M = Math.min(M, t)), y < 0 && (M = Math.min(t - F / y, M)), O = null !== C ? C : Math.round(t - M) * y;
                        let i = O - e * (y >= 0 ? 1 : -1),
                            r = y >= 0 ? i < 0 : i > F;
                        O = Math.max(i, 0), "finished" === E && null === C && (O = F);
                        let l = O,
                            u = S;
                        if (s) {
                            let h = O / k,
                                d = Math.floor(h),
                                p = h % 1;
                            !p && h >= 1 && (p = 1), 1 === p && d--, d = Math.min(d, s + 1);
                            let f = Boolean(d % 2);
                            f && ("reverse" === a ? (p = 1 - p, o && (p -= o / k)) : "mirror" === a && (u = v));
                            let m = (0, T.u)(0, 1, p);
                            O > F && (m = "reverse" === a && f ? 1 : 0), l = m * k
                        }
                        let x = r ? {
                            done: !1,
                            value: n[0]
                        } : u.next(l);
                        g && (x.value = g(x.value));
                        let {
                            done: b
                        } = x;
                        r || null === D || (b = y >= 0 ? O >= F : O <= 0);
                        let P = null === C && ("finished" === E || "running" === E && b);
                        return c && c(x.value), P && $(), x
                    },
                    U = () => {
                        m && m.stop(), m = void 0
                    },
                    N = () => {
                        E = "idle", U(), p(), P(), M = R = null
                    },
                    $ = () => {
                        E = "finished", h && h(), U(), p()
                    },
                    W = () => {
                        if (x) return;
                        m || (m = i(I));
                        let t = m.now();
                        l && l(), null !== C ? M = t - C : M && "finished" !== E || (M = t), "finished" === E && P(), R = M, C = null, E = "running", m.start()
                    };
                t && W();
                let z = {
                    then: (t, e) => f.then(t, e),
                    get time() {
                        return (0, V.X)(O)
                    },
                    set time(newTime) {
                        O = newTime = (0, V.w)(newTime), null === C && m && 0 !== y ? M = m.now() - newTime / y : C = newTime
                    },
                    get duration() {
                        let H = null === S.calculatedDuration ? B(S) : S.calculatedDuration;
                        return (0, V.X)(H)
                    },
                    get speed() {
                        return y
                    },
                    set speed(newSpeed) {
                        if (newSpeed === y || !m) return;
                        y = newSpeed, z.time = (0, V.X)(O)
                    },
                    get state() {
                        return E
                    },
                    play: W,
                    pause: () => {
                        E = "paused", C = O
                    },
                    stop: () => {
                        x = !0, "idle" !== E && (E = "idle", u && u(), N())
                    },
                    cancel: () => {
                        null !== R && I(R), N()
                    },
                    complete: () => {
                        E = "finished"
                    },
                    sample: t => (M = 0, I(t))
                };
                return z
            }
        },
        5364: function(t, e, i) {
            i.d(e, {
                p: function() {
                    return r
                }
            });
            var n = i(7294);
            let r = (0, n.createContext)({})
        },
        6014: function(t, e, i) {
            i.d(e, {
                _: function() {
                    return r
                }
            });
            var n = i(7294);
            let r = (0, n.createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        240: function(t, e, i) {
            i.d(e, {
                O: function() {
                    return r
                }
            });
            var n = i(7294);
            let r = (0, n.createContext)(null)
        },
        7255: function(t, e, i) {
            i.d(e, {
                Bn: function() {
                    return o
                },
                X7: function() {
                    return a
                },
                Z7: function() {
                    return s
                }
            });
            var n = i(415),
                r = i(5129);
            let s = t => 1 - Math.sin(Math.acos(t)),
                o = (0, r.M)(s),
                a = (0, n.o)(o)
        },
        415: function(t, e, i) {
            i.d(e, {
                o: function() {
                    return n
                }
            });
            let n = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        5129: function(t, e, i) {
            i.d(e, {
                M: function() {
                    return n
                }
            });
            let n = t => e => 1 - t(1 - e)
        },
        2074: function(t, e, i) {
            i.d(e, {
                Pn: function() {
                    return o
                },
                Wi: function() {
                    return s
                },
                w0: function() {
                    return a
                },
                S6: function() {
                    return l
                }
            });
            var n = i(1662);
            let r = ["prepare", "read", "update", "preRender", "render", "postRender"],
                {
                    schedule: s,
                    cancel: o,
                    state: a,
                    steps: l
                } = function(t, e) {
                    let i = !1,
                        n = !0,
                        s = {
                            delta: 0,
                            timestamp: 0,
                            isProcessing: !1
                        },
                        o = r.reduce((t, e) => (t[e] = function(t) {
                            let e = [],
                                i = [],
                                n = 0,
                                r = !1,
                                s = !1,
                                o = new WeakSet,
                                a = {
                                    schedule: (t, s = !1, a = !1) => {
                                        let l = a && r,
                                            u = l ? e : i;
                                        return s && o.add(t), -1 === u.indexOf(t) && (u.push(t), l && r && (n = e.length)), t
                                    },
                                    cancel: t => {
                                        let e = i.indexOf(t); - 1 !== e && i.splice(e, 1), o.delete(t)
                                    },
                                    process: l => {
                                        if (r) {
                                            s = !0;
                                            return
                                        }
                                        if (r = !0, [e, i] = [i, e], i.length = 0, n = e.length)
                                            for (let u = 0; u < n; u++) {
                                                let h = e[u];
                                                h(l), o.has(h) && (a.schedule(h), t())
                                            }
                                        r = !1, s && (s = !1, a.process(l))
                                    }
                                };
                            return a
                        }(() => i = !0), t), {}),
                        a = t => o[t].process(s),
                        l = o => {
                            i = !1, s.delta = n ? 1e3 / 60 : Math.max(Math.min(o - s.timestamp, 40), 1), s.timestamp = o, s.isProcessing = !0, r.forEach(a), s.isProcessing = !1, i && e && (n = !1, t(l))
                        },
                        u = () => {
                            i = !0, n = !0, s.isProcessing || t(l)
                        },
                        h = r.reduce((t, e) => {
                            let n = o[e];
                            return t[e] = (t, e = !1, r = !1) => (i || u(), n.schedule(t, e, r)), t
                        }, {}),
                        c = t => r.forEach(e => o[e].cancel(t));
                    return {
                        schedule: h,
                        cancel: c,
                        state: s,
                        steps: o
                    }
                }("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.Z, !0)
        },
        4509: function(t, e, i) {
            let n;
            i.d(e, {
                E: function() {
                    return nC
                }
            });
            var r, s, o = i(7294),
                a = i(6014);
            let l = (0, o.createContext)({});
            var u = i(240),
                h = i(8868);
            let c = (0, o.createContext)({
                strict: !1
            });

            function d(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function p(t) {
                return "string" == typeof t || Array.isArray(t)
            }

            function f(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            let m = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                g = ["initial", ...m];

            function v(t) {
                return f(t.animate) || g.some(e => p(t[e]))
            }

            function y(t) {
                return Boolean(v(t) || t.variants)
            }

            function x(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            let b = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                P = {};
            for (let w in b) P[w] = {
                isEnabled: t => b[w].some(e => !!t[e])
            };
            var V = i(1741),
                A = i(5364);
            let S = (0, o.createContext)({}),
                T = Symbol.for("motionComponentSymbol"),
                E = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function C(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (E.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            let M = {},
                R = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                D = new Set(R);

            function k(t, {
                layout: e,
                layoutId: i
            }) {
                return D.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!M[t] || "opacity" === t)
            }
            var F = i(406);
            let j = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                B = R.length;
            var L = i(7630);
            let O = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var I = i(1649),
                U = i(6190);
            let N = { ...I.Rx,
                    transform: Math.round
                },
                $ = {
                    borderWidth: U.px,
                    borderTopWidth: U.px,
                    borderRightWidth: U.px,
                    borderBottomWidth: U.px,
                    borderLeftWidth: U.px,
                    borderRadius: U.px,
                    radius: U.px,
                    borderTopLeftRadius: U.px,
                    borderTopRightRadius: U.px,
                    borderBottomRightRadius: U.px,
                    borderBottomLeftRadius: U.px,
                    width: U.px,
                    maxWidth: U.px,
                    height: U.px,
                    maxHeight: U.px,
                    size: U.px,
                    top: U.px,
                    right: U.px,
                    bottom: U.px,
                    left: U.px,
                    padding: U.px,
                    paddingTop: U.px,
                    paddingRight: U.px,
                    paddingBottom: U.px,
                    paddingLeft: U.px,
                    margin: U.px,
                    marginTop: U.px,
                    marginRight: U.px,
                    marginBottom: U.px,
                    marginLeft: U.px,
                    rotate: U.RW,
                    rotateX: U.RW,
                    rotateY: U.RW,
                    rotateZ: U.RW,
                    scale: I.bA,
                    scaleX: I.bA,
                    scaleY: I.bA,
                    scaleZ: I.bA,
                    skew: U.RW,
                    skewX: U.RW,
                    skewY: U.RW,
                    distance: U.px,
                    translateX: U.px,
                    translateY: U.px,
                    translateZ: U.px,
                    x: U.px,
                    y: U.px,
                    z: U.px,
                    perspective: U.px,
                    transformPerspective: U.px,
                    opacity: I.Fq,
                    originX: U.$C,
                    originY: U.$C,
                    originZ: U.px,
                    zIndex: N,
                    fillOpacity: I.Fq,
                    strokeOpacity: I.Fq,
                    numOctaves: N
                };

            function W(t, e, i, n) {
                let {
                    style: r,
                    vars: s,
                    transform: o,
                    transformOrigin: a
                } = t, l = !1, u = !1, h = !0;
                for (let c in e) {
                    let d = e[c];
                    if ((0, L.f9)(c)) {
                        s[c] = d;
                        continue
                    }
                    let p = $[c],
                        f = O(d, p);
                    if (D.has(c)) {
                        if (l = !0, o[c] = f, !h) continue;
                        d !== (p.default || 0) && (h = !1)
                    } else c.startsWith("origin") ? (u = !0, a[c] = f) : r[c] = f
                }
                if (!e.transform && (l || n ? r.transform = function(t, {
                        enableHardwareAcceleration: e = !0,
                        allowTransformNone: i = !0
                    }, n, r) {
                        let s = "";
                        for (let o = 0; o < B; o++) {
                            let a = R[o];
                            if (void 0 !== t[a]) {
                                let l = j[a] || a;
                                s += `${l}(${t[a]}) `
                            }
                        }
                        return e && !t.z && (s += "translateZ(0)"), s = s.trim(), r ? s = r(t, n ? "" : s) : i && n && (s = "none"), s
                    }(t.transform, i, h, n) : r.transform && (r.transform = "none")), u) {
                    let {
                        originX: m = "50%",
                        originY: g = "50%",
                        originZ: v = 0
                    } = a;
                    r.transformOrigin = `${m} ${g} ${v}`
                }
            }
            let z = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function H(t, e, i) {
                for (let n in e)(0, F.i)(e[n]) || k(n, i) || (t[n] = e[n])
            }

            function Y(t, e, i) {
                let n = {},
                    r = function(t, e, i) {
                        let n = t.style || {},
                            r = {};
                        return H(r, n, t), Object.assign(r, function({
                            transformTemplate: t
                        }, e, i) {
                            return (0, o.useMemo)(() => {
                                let n = z();
                                return W(n, e, {
                                    enableHardwareAcceleration: !i
                                }, t), Object.assign({}, n.vars, n.style)
                            }, [e])
                        }(t, e, i)), t.transformValues ? t.transformValues(r) : r
                    }(t, e, i);
                return t.drag && !1 !== t.dragListener && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = r, n
            }
            let Z = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function X(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || Z.has(t)
            }
            let q = t => !X(t);
            try {
                (r = require("@emotion/is-prop-valid").default) && (q = t => t.startsWith("on") ? !X(t) : r(t))
            } catch (G) {}

            function K(t, e, i) {
                return "string" == typeof t ? t : U.px.transform(e + i * t)
            }
            let _ = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                J = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function Q(t, {
                attrX: e,
                attrY: i,
                attrScale: n,
                originX: r,
                originY: s,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...u
            }, h, c, d) {
                if (W(t, u, h, d), c) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: p,
                    style: f,
                    dimensions: m
                } = t;
                p.transform && (m && (f.transform = p.transform), delete p.transform), m && (void 0 !== r || void 0 !== s || f.transform) && (f.transformOrigin = function(t, e, i) {
                    let n = K(e, t.x, t.width),
                        r = K(i, t.y, t.height);
                    return `${n} ${r}`
                }(m, void 0 !== r ? r : .5, void 0 !== s ? s : .5)), void 0 !== e && (p.x = e), void 0 !== i && (p.y = i), void 0 !== n && (p.scale = n), void 0 !== o && function(t, e, i = 1, n = 0, r = !0) {
                    t.pathLength = 1;
                    let s = r ? _ : J;
                    t[s.offset] = U.px.transform(-n);
                    let o = U.px.transform(e),
                        a = U.px.transform(i);
                    t[s.array] = `${o} ${a}`
                }(p, o, a, l, !1)
            }
            let tt = () => ({ ...z(),
                    attrs: {}
                }),
                te = t => "string" == typeof t && "svg" === t.toLowerCase();

            function ti(t, e, i, n) {
                let r = (0, o.useMemo)(() => {
                    let i = tt();
                    return Q(i, e, {
                        enableHardwareAcceleration: !1
                    }, te(n), t.transformTemplate), { ...i.attrs,
                        style: { ...i.style
                        }
                    }
                }, [e]);
                if (t.style) {
                    let s = {};
                    H(s, t.style, t), r.style = { ...s,
                        ...r.style
                    }
                }
                return r
            }
            let tn = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

            function tr(t, {
                style: e,
                vars: i
            }, n, r) {
                for (let s in Object.assign(t.style, e, r && r.getProjectionStyles(n)), i) t.style.setProperty(s, i[s])
            }
            let ts = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function to(t, e, i, n) {
                for (let r in tr(t, e, void 0, n), e.attrs) t.setAttribute(ts.has(r) ? r : tn(r), e.attrs[r])
            }

            function ta(t, e) {
                let {
                    style: i
                } = t, n = {};
                for (let r in i)((0, F.i)(i[r]) || e.style && (0, F.i)(e.style[r]) || k(r, t)) && (n[r] = i[r]);
                return n
            }

            function tl(t, e) {
                let i = ta(t, e);
                for (let n in t)
                    if ((0, F.i)(t[n]) || (0, F.i)(e[n])) {
                        let r = -1 !== R.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
                        i[r] = t[n]
                    }
                return i
            }

            function tu(t, e, i, n = {}, r = {}) {
                return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, n, r)), e
            }
            var th = i(6681);
            let tc = t => Array.isArray(t),
                td = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
                tp = t => tc(t) ? t[t.length - 1] || 0 : t;

            function tf(t) {
                let e = (0, F.i)(t) ? t.get() : t;
                return td(e) ? e.toValue() : e
            }
            let tm = t => (e, i) => {
                    let n = (0, o.useContext)(l),
                        r = (0, o.useContext)(u.O),
                        s = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e,
                            onMount: i
                        }, n, r, s) {
                            let o = {
                                latestValues: function(t, e, i, n) {
                                    let r = {},
                                        s = n(t, {});
                                    for (let o in s) r[o] = tf(s[o]);
                                    let {
                                        initial: a,
                                        animate: l
                                    } = t, u = v(t), h = y(t);
                                    e && h && !u && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === l && (l = e.animate));
                                    let c = !!i && !1 === i.initial;
                                    c = c || !1 === a;
                                    let d = c ? l : a;
                                    if (d && "boolean" != typeof d && !f(d)) {
                                        let p = Array.isArray(d) ? d : [d];
                                        p.forEach(e => {
                                            let i = tu(t, e);
                                            if (!i) return;
                                            let {
                                                transitionEnd: n,
                                                transition: s,
                                                ...o
                                            } = i;
                                            for (let a in o) {
                                                let l = o[a];
                                                if (Array.isArray(l)) {
                                                    let u = c ? l.length - 1 : 0;
                                                    l = l[u]
                                                }
                                                null !== l && (r[a] = l)
                                            }
                                            for (let h in n) r[h] = n[h]
                                        })
                                    }
                                    return r
                                }(n, r, s, t),
                                renderState: e()
                            };
                            return i && (o.mount = t => i(n, t, o)), o
                        })(t, e, n, r);
                    return i ? s() : (0, th.h)(s)
                },
                tg = {
                    useVisualState: tm({
                        scrapeMotionValuesFromProps: tl,
                        createRenderState: tt,
                        onMount: (t, e, {
                            renderState: i,
                            latestValues: n
                        }) => {
                            try {
                                i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (r) {
                                i.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            Q(i, n, {
                                enableHardwareAcceleration: !1
                            }, te(e.tagName), t.transformTemplate), to(e, i)
                        }
                    })
                },
                tv = {
                    useVisualState: tm({
                        scrapeMotionValuesFromProps: ta,
                        createRenderState: z
                    })
                };

            function ty(t, e, i, n = {
                passive: !0
            }) {
                return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
            }
            let tx = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function tb(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            let tP = t => e => tx(e) && t(e, tb(e));

            function tw(t, e, i, n) {
                return ty(t, e, tP(i), n)
            }
            var tV = i(3624);

            function tA(t) {
                let e = null;
                return () => {
                    let i = () => {
                        e = null
                    };
                    return null === e && (e = t, i)
                }
            }
            let tS = tA("dragHorizontal"),
                tT = tA("dragVertical");

            function tE(t) {
                let e = !1;
                if ("y" === t) e = tT();
                else if ("x" === t) e = tS();
                else {
                    let i = tS(),
                        n = tT();
                    i && n ? e = () => {
                        i(), n()
                    } : (i && i(), n && n())
                }
                return e
            }

            function tC() {
                let t = tE(!0);
                return !t || (t(), !1)
            }
            class tM {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            var tR = i(2074);

            function tD(t, e) {
                let i = "onHover" + (e ? "Start" : "End"),
                    n = (n, r) => {
                        if ("touch" === n.type || tC()) return;
                        let s = t.getProps();
                        t.animationState && s.whileHover && t.animationState.setActive("whileHover", e), s[i] && tR.Wi.update(() => s[i](n, r))
                    };
                return tw(t.current, "pointer" + (e ? "enter" : "leave"), n, {
                    passive: !t.getProps()[i]
                })
            }
            let tk = (t, e) => !!e && (t === e || tk(t, e.parentElement));
            var tF = i(1662);

            function tj(t, e) {
                if (!e) return;
                let i = new PointerEvent("pointer" + t);
                e(i, tb(i))
            }
            let tB = new WeakMap,
                tL = new WeakMap,
                tO = t => {
                    let e = tB.get(t.target);
                    e && e(t)
                },
                tI = t => {
                    t.forEach(tO)
                },
                tU = {
                    some: 0,
                    all: 1
                };

            function tN(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function t$(t, e, i) {
                let n = t.getProps();
                return tu(n, e, void 0 !== i ? i : n.custom, function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.get()), e
                }(t), function(t) {
                    let e = {};
                    return t.values.forEach((t, i) => e[i] = t.getVelocity()), e
                }(t))
            }
            let tW = "data-" + tn("framerAppearId");
            var tz = i(5487),
                tH = i(6917);
            let tY = {
                    current: !1
                },
                tZ = t => Array.isArray(t) && "number" == typeof t[0],
                tX = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                tq = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: tX([0, .65, .55, 1]),
                    circOut: tX([.55, 0, 1, .45]),
                    backIn: tX([.31, .01, .66, -.59]),
                    backOut: tX([.33, 1.53, .69, .99])
                };
            var tG = i(72);
            let tK = (s = () => Object.hasOwnProperty.call(Element.prototype, "animate"), () => (void 0 === n && (n = s()), n)),
                t_ = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                tJ = (t, e) => "spring" === e.type || "backgroundColor" === t || ! function t(e) {
                    return Boolean(!e || "string" == typeof e && tq[e] || tZ(e) || Array.isArray(e) && e.every(t))
                }(e.ease),
                tQ = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                t0 = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                t1 = {
                    type: "keyframes",
                    duration: .8
                },
                t2 = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                t5 = (t, {
                    keyframes: e
                }) => e.length > 2 ? t1 : D.has(t) ? t.startsWith("scale") ? t0(e[1]) : tQ : t2;
            var t3 = i(1550);
            let t6 = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (t3.P.test(e) || "0" === e) && !e.startsWith("url("));
            var t4 = i(6430);
            let t9 = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function t8(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(t4.KP) || [];
                if (!n) return t;
                let r = i.replace(n, ""),
                    s = t9.has(e) ? 1 : 0;
                return n !== i && (s *= 100), e + "(" + s + r + ")"
            }
            let t7 = /([a-z-]*)\(.*?\)/g,
                et = { ...t3.P,
                    getAnimatableNone: t => {
                        let e = t.match(t7);
                        return e ? e.map(t8).join(" ") : t
                    }
                };
            var ee = i(5385);
            let ei = { ...$,
                    color: ee.$,
                    backgroundColor: ee.$,
                    outlineColor: ee.$,
                    fill: ee.$,
                    stroke: ee.$,
                    borderColor: ee.$,
                    borderTopColor: ee.$,
                    borderRightColor: ee.$,
                    borderBottomColor: ee.$,
                    borderLeftColor: ee.$,
                    filter: et,
                    WebkitFilter: et
                },
                en = t => ei[t];

            function er(t, e) {
                let i = en(t);
                return i !== et && (i = t3.P), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let es = t => /^0[^.\s]+$/.test(t);

            function eo(t, e) {
                return t[e] || t.default || t
            }
            let ea = (t, e, i, n = {}) => r => {
                let s = eo(n, t) || {},
                    o = s.delay || n.delay || 0,
                    {
                        elapsed: a = 0
                    } = n;
                a -= (0, tH.w)(o);
                let l = function(t, e, i, n) {
                        let r, s;
                        let o = t6(e, i);
                        r = Array.isArray(i) ? [...i] : [null, i];
                        let a = void 0 !== n.from ? n.from : t.get(),
                            l = [];
                        for (let u = 0; u < r.length; u++) {
                            var h;
                            null === r[u] && (r[u] = 0 === u ? a : r[u - 1]), ("number" == typeof(h = r[u]) ? 0 === h : null !== h ? "none" === h || "0" === h || es(h) : void 0) && l.push(u), "string" == typeof r[u] && "none" !== r[u] && "0" !== r[u] && (s = r[u])
                        }
                        if (o && l.length && s)
                            for (let c = 0; c < l.length; c++) {
                                let d = l[c];
                                r[d] = er(e, s)
                            }
                        return r
                    }(e, t, i, s),
                    u = l[0],
                    h = l[l.length - 1],
                    c = t6(t, u),
                    d = t6(t, h);
                (0, tz.K)(c === d, `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`);
                let p = {
                    keyframes: l,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...s,
                    delay: -a,
                    onUpdate: t => {
                        e.set(t), s.onUpdate && s.onUpdate(t)
                    },
                    onComplete: () => {
                        r(), s.onComplete && s.onComplete()
                    }
                };
                if (! function({
                        when: t,
                        delay: e,
                        delayChildren: i,
                        staggerChildren: n,
                        staggerDirection: r,
                        repeat: s,
                        repeatType: o,
                        repeatDelay: a,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(s) && (p = { ...p,
                        ...t5(t, p)
                    }), p.duration && (p.duration = (0, tH.w)(p.duration)), p.repeatDelay && (p.repeatDelay = (0, tH.w)(p.repeatDelay)), !c || !d || tY.current || !1 === s.type) return function({
                    keyframes: t,
                    delay: e,
                    onUpdate: i,
                    onComplete: n
                }) {
                    let r = () => (i && i(t[t.length - 1]), n && n(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: tF.Z,
                        pause: tF.Z,
                        stop: tF.Z,
                        then: t => (t(), Promise.resolve()),
                        cancel: tF.Z,
                        complete: tF.Z
                    });
                    return e ? (0, tG.y)({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: r
                    }) : r()
                }(tY.current ? { ...p,
                    delay: 0
                } : p);
                if (e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let f = function(t, e, {
                        onUpdate: i,
                        onComplete: n,
                        ...r
                    }) {
                        let s, o;
                        let a = tK() && t_.has(e) && !r.repeatDelay && "mirror" !== r.repeatType && 0 !== r.damping && "inertia" !== r.type;
                        if (!a) return !1;
                        let l = !1,
                            u = () => {
                                o = new Promise(t => {
                                    s = t
                                })
                            };
                        u();
                        let {
                            keyframes: h,
                            duration: c = 300,
                            ease: d,
                            times: p
                        } = r;
                        if (tJ(e, r)) {
                            let f = (0, tG.y)({ ...r,
                                    repeat: 0,
                                    delay: 0
                                }),
                                m = {
                                    done: !1,
                                    value: h[0]
                                },
                                g = [],
                                v = 0;
                            for (; !m.done && v < 2e4;) g.push((m = f.sample(v)).value), v += 10;
                            p = void 0, h = g, c = v - 10, d = "linear"
                        }
                        let y = function(t, e, i, {
                                delay: n = 0,
                                duration: r,
                                repeat: s = 0,
                                repeatType: o = "loop",
                                ease: a,
                                times: l
                            } = {}) {
                                let u = {
                                    [e]: i
                                };
                                l && (u.offset = l);
                                let h = function t(e) {
                                    if (e) return tZ(e) ? tX(e) : Array.isArray(e) ? e.map(t) : tq[e]
                                }(a);
                                return Array.isArray(h) && (u.easing = h), t.animate(u, {
                                    delay: n,
                                    duration: r,
                                    easing: Array.isArray(h) ? "linear" : h,
                                    fill: "both",
                                    iterations: s + 1,
                                    direction: "reverse" === o ? "alternate" : "normal"
                                })
                            }(t.owner.current, e, h, { ...r,
                                duration: c,
                                ease: d,
                                times: p
                            }),
                            x = () => y.cancel(),
                            b = () => {
                                tR.Wi.update(x), s(), u()
                            };
                        y.onfinish = () => {
                            t.set(function(t, {
                                repeat: e,
                                repeatType: i = "loop"
                            }) {
                                let n = e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                                return t[n]
                            }(h, r)), n && n(), b()
                        };
                        let P = {
                            then: (t, e) => o.then(t, e),
                            attachTimeline: t => (y.timeline = t, y.onfinish = null, tF.Z),
                            get time() {
                                return (0, tH.X)(y.currentTime || 0)
                            },
                            set time(newTime) {
                                y.currentTime = (0, tH.w)(newTime)
                            },
                            get speed() {
                                return y.playbackRate
                            },
                            set speed(newSpeed) {
                                y.playbackRate = newSpeed
                            },
                            get duration() {
                                return (0, tH.X)(c)
                            },
                            play: () => {
                                l || (y.play(), (0, tR.Pn)(x))
                            },
                            pause: () => y.pause(),
                            stop: () => {
                                if (l = !0, "idle" === y.playState) return;
                                let {
                                    currentTime: e
                                } = y;
                                if (e) {
                                    let i = (0, tG.y)({ ...r,
                                        autoplay: !1
                                    });
                                    t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
                                }
                                b()
                            },
                            complete: () => y.finish(),
                            cancel: b
                        };
                        return P
                    }(e, t, p);
                    if (f) return f
                }
                return (0, tG.y)(p)
            };

            function el(t) {
                return Boolean((0, F.i)(t) && t.add)
            }
            let eu = t => /^\-?\d*\.?\d+$/.test(t);
            var eh = i(3234);
            let ec = t => e => e.test(t),
                ed = [I.Rx, U.px, U.aQ, U.RW, U.vw, U.vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                ep = t => ed.find(ec(t)),
                ef = [...ed, ee.$, t3.P],
                em = t => ef.find(ec(t));

            function eg(t, e, {
                delay: i = 0,
                transitionOverride: n,
                type: r
            } = {}) {
                let {
                    transition: s = t.getDefaultTransition(),
                    transitionEnd: o,
                    ...a
                } = t.makeTargetAnimatable(e), l = t.getValue("willChange");
                n && (s = n);
                let u = [],
                    h = r && t.animationState && t.animationState.getState()[r];
                for (let c in a) {
                    let d = t.getValue(c),
                        p = a[c];
                    if (!d || void 0 === p || h && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let n = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, n
                        }(h, c)) continue;
                    let f = {
                        delay: i,
                        elapsed: 0,
                        ...s
                    };
                    if (window.HandoffAppearAnimations && !d.hasAnimated) {
                        let m = t.getProps()[tW];
                        m && (f.elapsed = window.HandoffAppearAnimations(m, c, d, tR.Wi))
                    }
                    d.start(ea(c, d, p, t.shouldReduceMotion && D.has(c) ? {
                        type: !1
                    } : f));
                    let g = d.animation;
                    el(l) && (l.add(c), g.then(() => l.remove(c))), u.push(g)
                }
                return o && Promise.all(u).then(() => {
                    o && function(t, e) {
                        let i = t$(t, e),
                            {
                                transitionEnd: n = {},
                                transition: r = {},
                                ...s
                            } = i ? t.makeTargetAnimatable(i, !1) : {};
                        for (let o in s = { ...s,
                                ...n
                            }) {
                            var a;
                            let l = tp(s[o]);
                            a = o, t.hasValue(a) ? t.getValue(a).set(l) : t.addValue(a, (0, eh.B)(l))
                        }
                    }(t, o)
                }), u
            }

            function ev(t, e, i = {}) {
                let n = t$(t, e, i.custom),
                    {
                        transition: r = t.getDefaultTransition() || {}
                    } = n || {};
                i.transitionOverride && (r = i.transitionOverride);
                let s = n ? () => Promise.all(eg(t, n, i)) : () => Promise.resolve(),
                    o = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: s = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = r;
                        return function(t, e, i = 0, n = 0, r = 1, s) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * n,
                                l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                            return Array.from(t.variantChildren).sort(ey).forEach((t, n) => {
                                t.notify("AnimationStart", e), o.push(ev(t, e, { ...s,
                                    delay: i + l(n)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, s + n, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: a
                    } = r;
                if (!a) return Promise.all([s(), o(i.delay)]); {
                    let [l, u] = "beforeChildren" === a ? [s, o] : [o, s];
                    return l().then(() => u())
                }
            }

            function ey(t, e) {
                return t.sortNodePosition(e)
            }
            let ex = [...m].reverse(),
                eb = m.length;

            function eP(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            let ew = 0,
                eV = (t, e) => Math.abs(t - e);
            class eA {
                constructor(t, e, {
                    transformPagePoint: i
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = eE(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = function(t, e) {
                                    let i = eV(t.x, e.x),
                                        n = eV(t.y, e.y);
                                    return Math.sqrt(i ** 2 + n ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            let {
                                point: n
                            } = t, {
                                timestamp: r
                            } = tR.w0;
                            this.history.push({ ...n,
                                timestamp: r
                            });
                            let {
                                onStart: s,
                                onMove: o
                            } = this.handlers;
                            e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = eS(e, this.transformPagePoint), tR.Wi.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let {
                                onEnd: i,
                                onSessionEnd: n
                            } = this.handlers, r = eE("pointercancel" === t.type ? this.lastMoveEventInfo : eS(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, r), n && n(t, r)
                        }, !tx(t)) return;
                    this.handlers = e, this.transformPagePoint = i;
                    let n = tb(t),
                        r = eS(n, this.transformPagePoint),
                        {
                            point: s
                        } = r,
                        {
                            timestamp: o
                        } = tR.w0;
                    this.history = [{ ...s,
                        timestamp: o
                    }];
                    let {
                        onSessionStart: a
                    } = e;
                    a && a(t, eE(r, this.history)), this.removeListeners = (0, tV.z)(tw(window, "pointermove", this.handlePointerMove), tw(window, "pointerup", this.handlePointerUp), tw(window, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, tR.Pn)(this.updatePoint)
                }
            }

            function eS(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function eT(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function eE({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: eT(t, eC(e)),
                    offset: eT(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            n = null,
                            r = eC(t);
                        for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > (0, tH.w)(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        let s = (0, tH.X)(r.timestamp - n.timestamp);
                        if (0 === s) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (r.x - n.x) / s,
                            y: (r.y - n.y) / s
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, 0)
                }
            }

            function eC(t) {
                return t[t.length - 1]
            }
            var eM = i(3967),
                eR = i(22);

            function eD(t) {
                return t.max - t.min
            }

            function ek(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function eF(t, e, i, n = .5) {
                t.origin = n, t.originPoint = (0, eR.C)(e.min, e.max, t.origin), t.scale = eD(i) / eD(e), (ek(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, eR.C)(i.min, i.max, t.origin) - t.originPoint, (ek(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function ej(t, e, i, n) {
                eF(t.x, e.x, i.x, n ? n.originX : void 0), eF(t.y, e.y, i.y, n ? n.originY : void 0)
            }

            function eB(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + eD(e)
            }

            function eL(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + eD(e)
            }

            function eO(t, e, i) {
                eL(t.x, e.x, i.x), eL(t.y, e.y, i.y)
            }
            var eI = i(4169);

            function eU(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function eN(t, e) {
                let i = e.min - t.min,
                    n = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
                    min: i,
                    max: n
                }
            }

            function e$(t, e, i) {
                return {
                    min: eW(t, e),
                    max: eW(t, i)
                }
            }

            function eW(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let ez = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                eH = () => ({
                    x: ez(),
                    y: ez()
                }),
                eY = () => ({
                    min: 0,
                    max: 0
                }),
                eZ = () => ({
                    x: eY(),
                    y: eY()
                });

            function eX(t) {
                return [t("x"), t("y")]
            }

            function eq({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function eG(t) {
                return void 0 === t || 1 === t
            }

            function eK({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !eG(t) || !eG(e) || !eG(i)
            }

            function e_(t) {
                return eK(t) || eJ(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function eJ(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function eQ(t, e, i, n, r) {
                return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
            }

            function e0(t, e = 0, i = 1, n, r) {
                t.min = eQ(t.min, e, i, n, r), t.max = eQ(t.max, e, i, n, r)
            }

            function e1(t, {
                x: e,
                y: i
            }) {
                e0(t.x, e.translate, e.scale, e.originPoint), e0(t.y, i.translate, i.scale, i.originPoint)
            }

            function e2(t) {
                return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function e5(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function e3(t, e, [i, n, r]) {
                let s = void 0 !== e[r] ? e[r] : .5,
                    o = (0, eR.C)(t.min, t.max, s);
                e0(t, e[i], e[n], o, e.scale)
            }
            let e6 = ["x", "scaleX", "originX"],
                e4 = ["y", "scaleY", "originY"];

            function e9(t, e) {
                e3(t.x, e, e6), e3(t.y, e, e4)
            }

            function e8(t, e) {
                return eq(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let e7 = new WeakMap;
            class it {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = eZ(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let n = t => {
                            this.stopAnimation(), e && this.snapToCursor(tb(t, "page").point)
                        },
                        r = (t, e) => {
                            let {
                                drag: i,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (i && !n && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = tE(i), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eX(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (U.aQ.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let n = i.layout.layoutBox[t];
                                        if (n) {
                                            let r = eD(n);
                                            e = r * (parseFloat(e) / 100)
                                        }
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && tR.Wi.update(() => r(t, e), !1, !0);
                            let {
                                animationState: s
                            } = this.visualElement;
                            s && s.setActive("whileDrag", !0)
                        },
                        s = (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: n,
                                onDirectionLock: r,
                                onDrag: s
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: o
                            } = e;
                            if (n && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
                        },
                        o = (t, e) => this.stop(t, e);
                    this.panSession = new eA(t, {
                        onSessionStart: n,
                        onStart: r,
                        onMove: s,
                        onSessionEnd: o
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: n
                    } = e;
                    this.startAnimation(n);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && tR.Wi.update(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: n
                    } = this.getProps();
                    if (!i || !ie(t, n, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        s = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (s = function(t, {
                        min: e,
                        max: i
                    }, n) {
                        return void 0 !== e && t < e ? t = n ? (0, eR.C)(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? (0, eR.C)(i, t, n.max) : Math.min(t, i)), t
                    }(s, this.constraints[t], this.elastic[t])), r.set(s)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), {
                        layout: i
                    } = this.visualElement.projection || {}, n = this.constraints;
                    t && d(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: n,
                        right: r
                    }) {
                        return {
                            x: eU(t.x, i, r),
                            y: eU(t.y, e, n)
                        }
                    }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: e$(t, "left", "right"),
                            y: e$(t, "top", "bottom")
                        }
                    }(e), n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && eX(t => {
                        this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(i.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !d(e)) return !1;
                    let n = e.current;
                    (0, tz.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let s = function(t, e, i) {
                            let n = e8(t, i),
                                {
                                    scroll: r
                                } = e;
                            return r && (e5(n.x, r.offset.x), e5(n.y, r.offset.y)), n
                        }(n, r.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: eN((t = r.layout.layoutBox).x, s.x),
                            y: eN(t.y, s.y)
                        };
                    if (i) {
                        let a = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!a, a && (o = eq(a))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: n,
                        dragTransition: r,
                        dragSnapToOrigin: s,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {}, l = eX(o => {
                        if (!ie(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        s && (l = {
                            min: 0,
                            max: 0
                        });
                        let u = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: n ? 200 : 1e6,
                            bounceDamping: n ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, u)
                    });
                    return Promise.all(l).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return i.start(ea(t, i, 0, e))
                }
                stopAnimation() {
                    eX(t => this.getAxisMotionValue(t).stop())
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps(),
                        n = i[e];
                    return n || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    eX(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!ie(e, i, this.currentDirection)) return;
                        let {
                            projection: n
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (n && n.layout) {
                            let {
                                min: s,
                                max: o
                            } = n.layout.layoutBox[e];
                            r.set(t[e] - (0, eR.C)(s, o, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!d(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let n = {
                        x: 0,
                        y: 0
                    };
                    eX(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            let i = e.get();
                            n[t] = function(t, e) {
                                let i = .5,
                                    n = eD(t),
                                    r = eD(e);
                                return r > n ? i = (0, eM.Y)(e.min, e.max - n, t.min) : n > r && (i = (0, eM.Y)(t.min, t.max - r, e.min)), (0, eI.u)(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), eX(e => {
                        if (!ie(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: s
                            } = this.constraints[e];
                        i.set((0, eR.C)(r, s, n[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    e7.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        e = tw(t, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        i = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            d(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: n
                        } = this.visualElement,
                        r = n.addEventListener("measure", i);
                    n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), i();
                    let s = ty(window, "resize", () => this.scalePositionWithinConstraints()),
                        o = n.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (eX(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        s(), e(), r(), o && o()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: n = !1,
                            dragConstraints: r = !1,
                            dragElastic: s = .35,
                            dragMomentum: o = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: n,
                        dragConstraints: r,
                        dragElastic: s,
                        dragMomentum: o
                    }
                }
            }

            function ie(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            let ii = t => (e, i) => {
                    t && tR.Wi.update(() => t(e, i))
                },
                ir = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function is(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let io = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!U.px.test(t)) return t;
                        t = parseFloat(t)
                    }
                    let i = is(t, e.target.x),
                        n = is(t, e.target.y);
                    return `${i}% ${n}%`
                }
            };
            class ia extends o.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: n
                    } = this.props, {
                        projection: r
                    } = t;
                    Object.assign(M, iu), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), ir.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: n,
                        isPresent: r
                    } = this.props, s = i.projection;
                    return s && (s.isPresent = r, n || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || tR.Wi.postRender(() => {
                        let t = s.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: n
                    } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function il(t) {
                let [e, i] = function() {
                    let t = (0, o.useContext)(u.O);
                    if (null === t) return [!0, null];
                    let {
                        isPresent: e,
                        onExitComplete: i,
                        register: n
                    } = t, r = (0, o.useId)();
                    (0, o.useEffect)(() => n(r), []);
                    let s = () => i && i(r);
                    return !e && i ? [!1, s] : [!0]
                }(), n = (0, o.useContext)(A.p);
                return o.createElement(ia, { ...t,
                    layoutGroup: n,
                    switchLayoutGroup: (0, o.useContext)(S),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let iu = {
                borderRadius: { ...io,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: io,
                borderTopRightRadius: io,
                borderBottomLeftRadius: io,
                borderBottomRightRadius: io,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: i
                    }) => {
                        let n = t3.P.parse(t);
                        if (n.length > 5) return t;
                        let r = t3.P.createTransformer(t),
                            s = "number" != typeof n[0] ? 1 : 0,
                            o = i.x.scale * e.x,
                            a = i.y.scale * e.y;
                        n[0 + s] /= o, n[1 + s] /= a;
                        let l = (0, eR.C)(o, a, .5);
                        return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
                    }
                }
            };
            var ih = i(1560),
                ic = i(7255);
            let id = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                ip = id.length,
                im = t => "string" == typeof t ? parseFloat(t) : t,
                ig = t => "number" == typeof t || U.px.test(t);

            function iv(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let iy = ib(0, .5, ic.Bn),
                ix = ib(.5, .95, tF.Z);

            function ib(t, e, i) {
                return n => n < t ? 0 : n > e ? 1 : i((0, eM.Y)(t, e, n))
            }

            function iP(t, e) {
                t.min = e.min, t.max = e.max
            }

            function iw(t, e) {
                iP(t.x, e.x), iP(t.y, e.y)
            }

            function iV(t, e, i, n, r) {
                return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
            }

            function iA(t, e, [i, n, r], s, o) {
                ! function(t, e = 0, i = 1, n = .5, r, s = t, o = t) {
                    if (U.aQ.test(e)) {
                        e = parseFloat(e);
                        let a = (0, eR.C)(o.min, o.max, e / 100);
                        e = a - o.min
                    }
                    if ("number" != typeof e) return;
                    let l = (0, eR.C)(s.min, s.max, n);
                    t === s && (l -= e), t.min = iV(t.min, e, i, l, r), t.max = iV(t.max, e, i, l, r)
                }(t, e[i], e[n], e[r], e.scale, s, o)
            }
            let iS = ["x", "scaleX", "originX"],
                iT = ["y", "scaleY", "originY"];

            function iE(t, e, i, n) {
                iA(t.x, e, iS, i ? i.x : void 0, n ? n.x : void 0), iA(t.y, e, iT, i ? i.y : void 0, n ? n.y : void 0)
            }

            function iC(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function iM(t) {
                return iC(t.x) && iC(t.y)
            }

            function iR(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function iD(t) {
                return eD(t.x) / eD(t.y)
            }
            var ik = i(10);
            class iF {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, ik.y4)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, ik.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let e = this.members[this.members.length - 1];
                        e && this.promote(e)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let n = i; n >= 0; n--) {
                        let r = this.members[n];
                        if (!1 !== r.isPresent) {
                            e = r;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: n
                        } = t.options;
                        !1 === n && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }

            function ij(t, e, i) {
                let n = "",
                    r = t.x.translate / e.x,
                    s = t.y.translate / e.y;
                if ((r || s) && (n = `translate3d(${r}px, ${s}px, 0) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        rotate: o,
                        rotateX: a,
                        rotateY: l
                    } = i;
                    o && (n += `rotate(${o}deg) `), a && (n += `rotateX(${a}deg) `), l && (n += `rotateY(${l}deg) `)
                }
                let u = t.x.scale * e.x,
                    h = t.y.scale * e.y;
                return (1 !== u || 1 !== h) && (n += `scale(${u}, ${h})`), n || "none"
            }
            let iB = (t, e) => t.depth - e.depth;
            class iL {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, ik.y4)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, ik.cl)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(iB), this.isDirty = !1, this.children.forEach(t)
                }
            }
            let iO = ["", "X", "Y", "Z"],
                iI = 0,
                iU = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function iN({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: n,
                resetTransform: r
            }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        this.id = iI++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            iU.totalNodes = iU.resolvedTargetDeltas = iU.recalculatedProjection = 0, this.nodes.forEach(iz), this.nodes.forEach(iK), this.nodes.forEach(i_), this.nodes.forEach(iH), window.MotionDebug && window.MotionDebug.record(iU)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let n = 0; n < this.path.length; n++) this.path[n].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new iL)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new ih.L), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: n,
                            layout: r,
                            visualElement: s
                        } = this.options;
                        if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (r || n) && (this.isLayoutDirty = !0), t) {
                            let o;
                            let a = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, o && o(), o = function(t, e) {
                                    let i = performance.now(),
                                        n = ({
                                            timestamp: r
                                        }) => {
                                            let s = r - i;
                                            s >= e && ((0, tR.Pn)(n), t(s - e))
                                        };
                                    return tR.Wi.read(n, !0), () => (0, tR.Pn)(n)
                                }(a, 250), ir.hasAnimatedSinceResize && (ir.hasAnimatedSinceResize = !1, this.nodes.forEach(iG))
                            })
                        }
                        n && this.root.registerSharedNode(n, this), !1 !== this.options.animate && s && (n || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: i,
                            layout: n
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || s.getDefaultTransition() || i5,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = s.getProps(),
                                l = !this.targetLayout || !iR(this.targetLayout, n) || i,
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let h = { ...eo(r, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (s.shouldReduceMotion || this.options.layoutRoot) && (h.delay = 0, h.type = !1), this.startAnimation(h)
                            } else e || iG(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = n
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, tR.Pn)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(iJ), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let e = 0; e < this.path.length; e++) {
                            let i = this.path[e];
                            i.shouldResetTransform = !0, i.updateScroll("snapshot"), i.options.layoutRoot && i.willUpdate(!1)
                        }
                        let {
                            layoutId: n,
                            layout: r
                        } = this.options;
                        if (void 0 === n && !r) return;
                        let s = this.getTransformTemplate();
                        this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        this.updateScheduled = !1;
                        let t = this.isUpdateBlocked();
                        if (t) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(iZ);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(iX), this.isUpdating = !1, this.nodes.forEach(iq), this.nodes.forEach(i$), this.nodes.forEach(iW), this.clearAllSnapshots();
                        let e = performance.now();
                        tR.w0.delta = (0, eI.u)(0, 1e3 / 60, e - tR.w0.timestamp), tR.w0.timestamp = e, tR.w0.isProcessing = !0, tR.S6.update.process(tR.w0), tR.S6.preRender.process(tR.w0), tR.S6.render.process(tR.w0), tR.w0.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(iY), this.sharedNodes.forEach(iQ)
                    }
                    scheduleUpdateProjection() {
                        tR.Wi.preRender(this.updateProjection, !1, !0)
                    }
                    scheduleCheckAfterUnmount() {
                        tR.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                let e = this.path[t];
                                e.updateScroll()
                            }
                        let i = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = eZ(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: n
                        } = this.options;
                        n && n.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = Boolean(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: n(this.instance),
                            offset: i(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!r) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !iM(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            n = i ? i(this.latestValues, "") : void 0,
                            s = n !== this.prevTransformTemplateValue;
                        t && (e || e_(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            n = this.removeElementScroll(i);
                        return t && (n = this.removeTransform(n)), i4((e = n).x), i4(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: n,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return eZ();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && (e5(e.x, i.offset.x), e5(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = eZ();
                        iw(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let n = this.path[i],
                                {
                                    scroll: r,
                                    options: s
                                } = n;
                            if (n !== this.root && r && s.layoutScroll) {
                                if (r.isRoot) {
                                    iw(e, t);
                                    let {
                                        scroll: o
                                    } = this.root;
                                    o && (e5(e.x, -o.offset.x), e5(e.y, -o.offset.y))
                                }
                                e5(e.x, r.offset.x), e5(e.y, r.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = eZ();
                        iw(i, t);
                        for (let n = 0; n < this.path.length; n++) {
                            let r = this.path[n];
                            !e && r.options.layoutScroll && r.scroll && r !== r.root && e9(i, {
                                x: -r.scroll.offset.x,
                                y: -r.scroll.offset.y
                            }), e_(r.latestValues) && e9(i, r.latestValues)
                        }
                        return e_(this.latestValues) && e9(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = eZ();
                        iw(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let n = this.path[i];
                            if (!n.instance || !e_(n.latestValues)) continue;
                            eK(n.latestValues) && n.updateSnapshot();
                            let r = eZ(),
                                s = n.measurePageBox();
                            iw(r, s), iE(e, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
                        }
                        return e_(this.latestValues) && iE(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tR.w0.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e, i, n, r;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = Boolean(this.resumingFrom) || this !== s,
                            a = !(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget);
                        if (a) return;
                        let {
                            layout: l,
                            layoutId: u
                        } = this.options;
                        if (this.layout && (l || u)) {
                            if (this.resolvedRelativeTargetAt = tR.w0.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let h = this.getClosestProjectingParent();
                                h && h.layout && 1 !== this.animationProgress ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = eZ(), this.relativeTargetOrigin = eZ(), eO(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), iw(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || (this.target = eZ(), this.targetWithTransforms = eZ()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), i = this.target, n = this.relativeTarget, r = this.relativeParent.target, eB(i.x, n.x, r.x), eB(i.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : iw(this.target, this.layout.layoutBox), e1(this.target, this.targetDelta)) : iw(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let c = this.getClosestProjectingParent();
                                    c && Boolean(c.resumingFrom) === Boolean(this.resumingFrom) && !c.options.layoutScroll && c.target && 1 !== this.animationProgress ? (this.relativeParent = c, this.forceRelativeParentToResolveTarget(), this.relativeTarget = eZ(), this.relativeTargetOrigin = eZ(), eO(this.relativeTargetOrigin, this.target, c.target), iw(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                iU.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || eK(this.parent.latestValues) || eJ(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            i = Boolean(this.resumingFrom) || this !== e,
                            n = !0;
                        if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (n = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === tR.w0.timestamp && (n = !1), n) return;
                        let {
                            layout: r,
                            layoutId: s
                        } = this.options;
                        if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || s)) return;
                        iw(this.layoutCorrected, this.layout.layoutBox);
                        let o = this.treeScale.x,
                            a = this.treeScale.y;
                        ! function(t, e, i, n = !1) {
                            let r, s;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    s = (r = i[a]).projectionDelta;
                                    let l = r.instance;
                                    (!l || !l.style || "contents" !== l.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && e9(t, {
                                        x: -r.scroll.offset.x,
                                        y: -r.scroll.offset.y
                                    }), s && (e.x *= s.x.scale, e.y *= s.y.scale, e1(t, s)), n && e_(r.latestValues) && e9(t, r.latestValues))
                                }
                                e.x = e2(e.x), e.y = e2(e.y)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, i), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                        let {
                            target: l
                        } = e;
                        if (!l) {
                            this.projectionTransform && (this.projectionDelta = eH(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = eH(), this.projectionDeltaWithTransform = eH());
                        let u = this.projectionTransform;
                        ej(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = ij(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), iU.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let e = this.getStack();
                            e && e.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let n = this.snapshot,
                            r = n ? n.latestValues : {},
                            s = { ...this.latestValues
                            },
                            o = eH();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = eZ(),
                            l = n ? n.source : void 0,
                            u = this.layout ? this.layout.source : void 0,
                            h = l !== u,
                            c = this.getStack(),
                            d = !c || c.members.length <= 1,
                            p = Boolean(h && !d && !0 === this.options.crossfade && !this.path.some(i2));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let n = e / 1e3;
                            if (i0(o.x, t.x, n), i0(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var l, u, c, f;
                                eO(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), c = this.relativeTarget, f = this.relativeTargetOrigin, i1(c.x, f.x, a.x, n), i1(c.y, f.y, a.y, n), i && (l = this.relativeTarget, u = i, l.x.min === u.x.min && l.x.max === u.x.max && l.y.min === u.y.min && l.y.max === u.y.max) && (this.isProjectionDirty = !1), i || (i = eZ()), iw(i, this.relativeTarget)
                            }
                            h && (this.animationValues = s, function(t, e, i, n, r, s) {
                                r ? (t.opacity = (0, eR.C)(0, void 0 !== i.opacity ? i.opacity : 1, iy(n)), t.opacityExit = (0, eR.C)(void 0 !== e.opacity ? e.opacity : 1, 0, ix(n))) : s && (t.opacity = (0, eR.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, n));
                                for (let o = 0; o < ip; o++) {
                                    let a = `border${id[o]}Radius`,
                                        l = iv(e, a),
                                        u = iv(i, a);
                                    if (void 0 === l && void 0 === u) continue;
                                    l || (l = 0), u || (u = 0);
                                    let h = 0 === l || 0 === u || ig(l) === ig(u);
                                    h ? (t[a] = Math.max((0, eR.C)(im(l), im(u), n), 0), (U.aQ.test(u) || U.aQ.test(l)) && (t[a] += "%")) : t[a] = u
                                }(e.rotate || i.rotate) && (t.rotate = (0, eR.C)(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, this.latestValues, n, p, d)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                        }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, tR.Pn)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tR.Wi.update(() => {
                            ir.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i) {
                                let n = (0, F.i)(t) ? t : (0, eh.B)(t);
                                return n.start(ea("", n, 1e3, i)), n.animation
                            }(0, 0, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: n,
                                latestValues: r
                            } = t;
                        if (e && i && n) {
                            if (this !== t && this.layout && n && i9(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                                i = this.target || eZ();
                                let s = eD(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + s;
                                let o = eD(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + o
                            }
                            iw(e, i), e9(e, r), ej(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new iF);
                        let i = this.sharedNodes.get(t);
                        i.add(e);
                        let n = e.options.initialPromotionConfig;
                        e.promote({
                            transition: n ? n.transition : void 0,
                            preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let n = this.getStack();
                        n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        let n = {};
                        for (let r = 0; r < iO.length; r++) {
                            let s = "rotate" + iO[r];
                            i[s] && (n[s] = i[s], t.setStaticValue(s, 0))
                        }
                        for (let o in t.render(), n) t.setStaticValue(o, n[o]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t = {}) {
                        var e, i;
                        let n = {};
                        if (!this.instance || this.isSVG) return n;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        n.visibility = "";
                        let r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, n.opacity = "", n.pointerEvents = tf(t.pointerEvents) || "", n.transform = r ? r(this.latestValues, "") : "none", n;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let o = {};
                            return this.options.layoutId && (o.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, o.pointerEvents = tf(t.pointerEvents) || ""), this.hasProjected && !e_(this.latestValues) && (o.transform = r ? r({}, "") : "none", this.hasProjected = !1), o
                        }
                        let a = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), n.transform = ij(this.projectionDeltaWithTransform, this.treeScale, a), r && (n.transform = r(a, n.transform));
                        let {
                            x: l,
                            y: u
                        } = this.projectionDelta;
                        for (let h in n.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, s.animationValues ? n.opacity = s === this ? null !== (i = null !== (e = a.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : n.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, M) {
                            if (void 0 === a[h]) continue;
                            let {
                                correct: c,
                                applyTo: d
                            } = M[h], p = "none" === n.transform ? a[h] : c(a[h], s);
                            if (d) {
                                let f = d.length;
                                for (let m = 0; m < f; m++) n[d[m]] = p
                            } else n[h] = p
                        }
                        return this.options.layoutId && (n.pointerEvents = s === this ? tf(t.pointerEvents) || "" : "none"), n
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(iZ), this.root.sharedNodes.clear()
                    }
                }
            }

            function i$(t) {
                t.updateLayout()
            }

            function iW(t) {
                var e;
                let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: n,
                        measuredBox: r
                    } = t.layout, {
                        animationType: s
                    } = t.options, o = i.source !== t.layout.source;
                    "size" === s ? eX(t => {
                        let e = o ? i.measuredBox[t] : i.layoutBox[t],
                            r = eD(e);
                        e.min = n[t].min, e.max = e.min + r
                    }) : i9(s, i.layoutBox, n) && eX(e => {
                        let r = o ? i.measuredBox[e] : i.layoutBox[e],
                            s = eD(n[e]);
                        r.max = r.min + s, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[e].max = t.relativeTarget[e].min + s)
                    });
                    let a = eH();
                    ej(a, n, i.layoutBox);
                    let l = eH();
                    o ? ej(l, t.applyTransform(r, !0), i.measuredBox) : ej(l, n, i.layoutBox);
                    let u = !iM(a),
                        h = !1;
                    if (!t.resumeFrom) {
                        let c = t.getClosestProjectingParent();
                        if (c && !c.resumeFrom) {
                            let {
                                snapshot: d,
                                layout: p
                            } = c;
                            if (d && p) {
                                let f = eZ();
                                eO(f, i.layoutBox, d.layoutBox);
                                let m = eZ();
                                eO(m, n, p.layoutBox), iR(f, m) || (h = !0), c.options.layoutRoot && (t.relativeTarget = m, t.relativeTargetOrigin = f, t.relativeParent = c)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: n,
                        snapshot: i,
                        delta: l,
                        layoutDelta: a,
                        hasLayoutChanged: u,
                        hasRelativeTargetChanged: h
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: g
                    } = t.options;
                    g && g()
                }
                t.options.transition = void 0
            }

            function iz(t) {
                iU.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function iH(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function iY(t) {
                t.clearSnapshot()
            }

            function iZ(t) {
                t.clearMeasurements()
            }

            function iX(t) {
                t.isLayoutDirty = !1
            }

            function iq(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function iG(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function iK(t) {
                t.resolveTargetDelta()
            }

            function i_(t) {
                t.calcProjection()
            }

            function iJ(t) {
                t.resetRotation()
            }

            function iQ(t) {
                t.removeLeadSnapshot()
            }

            function i0(t, e, i) {
                t.translate = (0, eR.C)(e.translate, 0, i), t.scale = (0, eR.C)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function i1(t, e, i, n) {
                t.min = (0, eR.C)(e.min, i.min, n), t.max = (0, eR.C)(e.max, i.max, n)
            }

            function i2(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let i5 = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                i3 = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                i6 = i3("applewebkit/") && !i3("chrome/") ? Math.round : tF.Z;

            function i4(t) {
                t.min = i6(t.min), t.max = i6(t.max)
            }

            function i9(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !ek(iD(e), iD(i), .2)
            }
            let i8 = iN({
                    attachResizeListener: (t, e) => ty(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                i7 = {
                    current: void 0
                },
                nt = iN({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!i7.current) {
                            let t = new i8({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), i7.current = t
                        }
                        return i7.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
                }),
                ne = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function ni(t, e, i = 1) {
                (0, tz.k)(i <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [n, r] = function(t) {
                    let e = ne.exec(t);
                    if (!e) return [, ];
                    let [, i, n] = e;
                    return [i, n]
                }(t);
                if (!n) return;
                let s = window.getComputedStyle(e).getPropertyValue(n);
                return s ? s.trim() : (0, L.tm)(r) ? ni(r, e, i + 1) : r
            }
            let nn = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                nr = t => nn.has(t),
                ns = t => Object.keys(t).some(nr),
                no = t => t === I.Rx || t === U.px,
                na = (t, e) => parseFloat(t.split(", ")[e]),
                nl = (t, e) => (i, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let r = n.match(/^matrix3d\((.+)\)$/);
                    if (r) return na(r[1], e); {
                        let s = n.match(/^matrix\((.+)\)$/);
                        return s ? na(s[1], t) : 0
                    }
                },
                nu = new Set(["x", "y", "z"]),
                nh = R.filter(t => !nu.has(t)),
                nc = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: nl(4, 13),
                    y: nl(5, 14)
                };
            nc.translateX = nc.x, nc.translateY = nc.y;
            let nd = (t, e, i) => {
                    let n = e.measureViewportBox(),
                        r = e.current,
                        s = getComputedStyle(r),
                        {
                            display: o
                        } = s,
                        a = {};
                    "none" === o && e.setStaticValue("display", t.display || "block"), i.forEach(t => {
                        a[t] = nc[t](n, s)
                    }), e.render();
                    let l = e.measureViewportBox();
                    return i.forEach(i => {
                        let n = e.getValue(i);
                        n && n.jump(a[i]), t[i] = nc[i](l, s)
                    }), t
                },
                np = (t, e, i = {}, n = {}) => {
                    e = { ...e
                    }, n = { ...n
                    };
                    let r = Object.keys(e).filter(nr),
                        s = [],
                        o = !1,
                        a = [];
                    if (r.forEach(r => {
                            let l;
                            let u = t.getValue(r);
                            if (!t.hasValue(r)) return;
                            let h = i[r],
                                c = ep(h),
                                d = e[r];
                            if (tc(d)) {
                                let p = d.length,
                                    f = null === d[0] ? 1 : 0;
                                c = ep(h = d[f]);
                                for (let m = f; m < p && null !== d[m]; m++) l ? (0, tz.k)(ep(d[m]) === l, "All keyframes must be of the same type") : (l = ep(d[m]), (0, tz.k)(l === c || no(c) && no(l), "Keyframes must be of the same dimension as the current value"))
                            } else l = ep(d);
                            if (c !== l) {
                                if (no(c) && no(l)) {
                                    let g = u.get();
                                    "string" == typeof g && u.set(parseFloat(g)), "string" == typeof d ? e[r] = parseFloat(d) : Array.isArray(d) && l === U.px && (e[r] = d.map(parseFloat))
                                } else(null == c ? void 0 : c.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === d) ? 0 === h ? u.set(l.transform(h)) : e[r] = c.transform(d) : (o || (s = function(t) {
                                    let e = [];
                                    return nh.forEach(i => {
                                        let n = t.getValue(i);
                                        void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
                                    }), e.length && t.render(), e
                                }(t), o = !0), a.push(r), n[r] = void 0 !== n[r] ? n[r] : e[r], u.jump(d))
                            }
                        }), !a.length) return {
                        target: e,
                        transitionEnd: n
                    }; {
                        let l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                            u = nd(e, t, a);
                        return s.length && s.forEach(([e, i]) => {
                            t.getValue(e).set(i)
                        }), t.render(), V.j && null !== l && window.scrollTo({
                            top: l
                        }), {
                            target: u,
                            transitionEnd: n
                        }
                    }
                },
                nf = (t, e, i, n) => {
                    var r, s;
                    let o = function(t, { ...e
                    }, i) {
                        let n = t.current;
                        if (!(n instanceof Element)) return {
                            target: e,
                            transitionEnd: i
                        };
                        for (let r in i && (i = { ...i
                            }), t.values.forEach(t => {
                                let e = t.get();
                                if (!(0, L.tm)(e)) return;
                                let i = ni(e, n);
                                i && t.set(i)
                            }), e) {
                            let s = e[r];
                            if (!(0, L.tm)(s)) continue;
                            let o = ni(s, n);
                            o && (e[r] = o, i || (i = {}), void 0 === i[r] && (i[r] = s))
                        }
                        return {
                            target: e,
                            transitionEnd: i
                        }
                    }(t, e, n);
                    return e = o.target, n = o.transitionEnd, r = e, s = n, ns(r) ? np(t, r, i, s) : {
                        target: r,
                        transitionEnd: s
                    }
                },
                nm = {
                    current: null
                },
                ng = {
                    current: !1
                },
                nv = new WeakMap,
                ny = Object.keys(P),
                nx = ny.length,
                nb = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                nP = g.length;
            class nw {
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: n,
                    visualState: r
                }, s = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => tR.Wi.render(this.render, !1, !0);
                    let {
                        latestValues: o,
                        renderState: a
                    } = r;
                    this.latestValues = o, this.baseTarget = { ...o
                    }, this.initialValues = e.initial ? { ...o
                    } : {}, this.renderState = a, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = s, this.isControllingVariants = v(e), this.isVariantNode = y(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
                    let {
                        willChange: l,
                        ...u
                    } = this.scrapeMotionValuesFromProps(e, {});
                    for (let h in u) {
                        let c = u[h];
                        void 0 !== o[h] && (0, F.i)(c) && (c.set(o[h], !1), el(l) && l.add(h))
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {}
                }
                mount(t) {
                    this.current = t, nv.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), ng.current || function() {
                        if (ng.current = !0, V.j) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => nm.current = t.matches;
                                t.addListener(e), e()
                            } else nm.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || nm.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in nv.delete(this.current), this.projection && this.projection.unmount(), (0, tR.Pn)(this.notifyUpdate), (0, tR.Pn)(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let e in this.features) this.features[e].unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i = D.has(t),
                        n = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && tR.Wi.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        r = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        n(), r()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, i, n, r) {
                    let s, o;
                    for (let a = 0; a < nx; a++) {
                        let l = ny[a],
                            {
                                isEnabled: u,
                                Feature: h,
                                ProjectionNode: c,
                                MeasureLayout: p
                            } = P[l];
                        c && (s = c), u(e) && (!this.features[l] && h && (this.features[l] = new h(this)), p && (o = p))
                    }
                    if (!this.projection && s) {
                        this.projection = new s(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: f,
                            layout: m,
                            drag: g,
                            dragConstraints: v,
                            layoutScroll: y,
                            layoutRoot: x
                        } = e;
                        this.projection.setOptions({
                            layoutId: f,
                            layout: m,
                            alwaysMeasureLayout: Boolean(g) || v && d(v),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof m ? m : "both",
                            initialPromotionConfig: r,
                            layoutScroll: y,
                            layoutRoot: x
                        })
                    }
                    return o
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : eZ()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e)
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let i = 0; i < nb.length; i++) {
                        let n = nb[i];
                        this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                        let r = t["on" + n];
                        r && (this.propEventSubscriptions[n] = this.on(n, r))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        let {
                            willChange: n
                        } = e;
                        for (let r in e) {
                            let s = e[r],
                                o = i[r];
                            if ((0, F.i)(s)) t.addValue(r, s), el(n) && n.add(r);
                            else if ((0, F.i)(o)) t.addValue(r, (0, eh.B)(s, {
                                owner: t
                            })), el(n) && n.remove(r);
                            else if (o !== s) {
                                if (t.hasValue(r)) {
                                    let a = t.getValue(r);
                                    a.hasAnimated || a.set(s)
                                } else {
                                    let l = t.getStaticValue(r);
                                    t.addValue(r, (0, eh.B)(void 0 !== l ? l : s, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let u in i) void 0 === e[u] && t.removeValue(u);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let e = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (e.initial = this.props.initial), e
                    }
                    let i = {};
                    for (let n = 0; n < nP; n++) {
                        let r = g[n],
                            s = this.props[r];
                        (p(s) || !1 === s) && (i[r] = s)
                    }
                    return i
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = (0, eh.B)(e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let {
                        initial: i
                    } = this.props, n = "string" == typeof i || "object" == typeof i ? null === (e = tu(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
                    if (i && void 0 !== n) return n;
                    let r = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === r || (0, F.i)(r) ? void 0 !== this.initialValues[t] && void 0 === n ? void 0 : this.baseTarget[t] : r
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new ih.L), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class nV extends nw {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...i
                }, {
                    transformValues: n
                }, r) {
                    let s = function(t, e, i) {
                        let n = {};
                        for (let r in t) {
                            let s = function(t, e) {
                                if (!e) return;
                                let i = e[t] || e.default || e;
                                return i.from
                            }(r, e);
                            if (void 0 !== s) n[r] = s;
                            else {
                                let o = i.getValue(r);
                                o && (n[r] = o.get())
                            }
                        }
                        return n
                    }(i, t || {}, this);
                    if (n && (e && (e = n(e)), i && (i = n(i)), s && (s = n(s))), r) {
                        ! function(t, e, i) {
                            var n, r;
                            let s = Object.keys(e).filter(e => !t.hasValue(e)),
                                o = s.length;
                            if (o)
                                for (let a = 0; a < o; a++) {
                                    let l = s[a],
                                        u = e[l],
                                        h = null;
                                    Array.isArray(u) && (h = u[0]), null === h && (h = null !== (r = null !== (n = i[l]) && void 0 !== n ? n : t.readValue(l)) && void 0 !== r ? r : e[l]), null != h && ("string" == typeof h && (eu(h) || es(h)) ? h = parseFloat(h) : !em(h) && t3.P.test(u) && (h = er(l, u)), t.addValue(l, (0, eh.B)(h, {
                                        owner: t
                                    })), void 0 === i[l] && (i[l] = h), null !== h && t.setBaseTarget(l, h))
                                }
                        }(this, i, s);
                        let o = nf(this, i, s, e);
                        e = o.transitionEnd, i = o.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...i
                    }
                }
            }
            class nA extends nV {
                readValueFromInstance(t, e) {
                    if (D.has(e)) {
                        let i = en(e);
                        return i && i.default || 0
                    } {
                        let n = window.getComputedStyle(t),
                            r = ((0, L.f9)(e) ? n.getPropertyValue(e) : n[e]) || 0;
                        return "string" == typeof r ? r.trim() : r
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return e8(t, e)
                }
                build(t, e, i, n) {
                    W(t, e, i, n.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e) {
                    return ta(t, e)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, F.i)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, i, n) {
                    tr(t, e, i, n)
                }
            }
            class nS extends nV {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (D.has(e)) {
                        let i = en(e);
                        return i && i.default || 0
                    }
                    return e = ts.has(e) ? e : tn(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return eZ()
                }
                scrapeMotionValuesFromProps(t, e) {
                    return tl(t, e)
                }
                build(t, e, i, n) {
                    Q(t, e, i, this.isSVGTag, n.transformTemplate)
                }
                renderInstance(t, e, i, n) {
                    to(t, e, i, n)
                }
                mount(t) {
                    this.isSVGTag = te(t.tagName), super.mount(t)
                }
            }
            let nT = (t, e) => C(t) ? new nS(e, {
                    enableHardwareAcceleration: !1
                }) : new nA(e, {
                    enableHardwareAcceleration: !0
                }),
                nE = {
                    animation: {
                        Feature: class extends tM {
                            constructor(t) {
                                super(t), t.animationState || (t.animationState = function(t) {
                                    let e = e => Promise.all(e.map(({
                                            animation: e,
                                            options: i
                                        }) => (function(t, e, i = {}) {
                                            let n;
                                            if (t.notify("AnimationStart", e), Array.isArray(e)) {
                                                let r = e.map(e => ev(t, e, i));
                                                n = Promise.all(r)
                                            } else if ("string" == typeof e) n = ev(t, e, i);
                                            else {
                                                let s = "function" == typeof e ? t$(t, e, i.custom) : e;
                                                n = Promise.all(eg(t, s, i))
                                            }
                                            return n.then(() => t.notify("AnimationComplete", e))
                                        })(t, e, i))),
                                        i = {
                                            animate: eP(!0),
                                            whileInView: eP(),
                                            whileHover: eP(),
                                            whileTap: eP(),
                                            whileDrag: eP(),
                                            whileFocus: eP(),
                                            exit: eP()
                                        },
                                        n = !0,
                                        r = (e, i) => {
                                            let n = t$(t, i);
                                            if (n) {
                                                let {
                                                    transition: r,
                                                    transitionEnd: s,
                                                    ...o
                                                } = n;
                                                e = { ...e,
                                                    ...o,
                                                    ...s
                                                }
                                            }
                                            return e
                                        };

                                    function s(s, o) {
                                        let a = t.getProps(),
                                            l = t.getVariantContext(!0) || {},
                                            u = [],
                                            h = new Set,
                                            c = {},
                                            d = 1 / 0;
                                        for (let m = 0; m < eb; m++) {
                                            var g;
                                            let v = ex[m],
                                                y = i[v],
                                                x = void 0 !== a[v] ? a[v] : l[v],
                                                b = p(x),
                                                P = v === o ? y.isActive : null;
                                            !1 === P && (d = m);
                                            let w = x === l[v] && x !== a[v] && b;
                                            if (w && n && t.manuallyAnimateOnMount && (w = !1), y.protectedKeys = { ...c
                                                }, !y.isActive && null === P || !x && !y.prevProp || f(x) || "boolean" == typeof x) continue;
                                            let V = (g = y.prevProp, "string" == typeof x ? x !== g : !!Array.isArray(x) && !tN(x, g)),
                                                A = V || v === o && y.isActive && !w && b || m > d && b,
                                                S = Array.isArray(x) ? x : [x],
                                                T = S.reduce(r, {});
                                            !1 === P && (T = {});
                                            let {
                                                prevResolvedValues: E = {}
                                            } = y, C = { ...E,
                                                ...T
                                            }, M = t => {
                                                A = !0, h.delete(t), y.needsAnimating[t] = !0
                                            };
                                            for (let R in C) {
                                                let D = T[R],
                                                    k = E[R];
                                                c.hasOwnProperty(R) || (D !== k ? tc(D) && tc(k) ? !tN(D, k) || V ? M(R) : y.protectedKeys[R] = !0 : void 0 !== D ? M(R) : h.add(R) : void 0 !== D && h.has(R) ? M(R) : y.protectedKeys[R] = !0)
                                            }
                                            y.prevProp = x, y.prevResolvedValues = T, y.isActive && (c = { ...c,
                                                ...T
                                            }), n && t.blockInitialAnimation && (A = !1), A && !w && u.push(...S.map(t => ({
                                                animation: t,
                                                options: {
                                                    type: v,
                                                    ...s
                                                }
                                            })))
                                        }
                                        if (h.size) {
                                            let F = {};
                                            h.forEach(e => {
                                                let i = t.getBaseTarget(e);
                                                void 0 !== i && (F[e] = i)
                                            }), u.push({
                                                animation: F
                                            })
                                        }
                                        let j = Boolean(u.length);
                                        return n && !1 === a.initial && !t.manuallyAnimateOnMount && (j = !1), n = !1, j ? e(u) : Promise.resolve()
                                    }
                                    return {
                                        animateChanges: s,
                                        setActive: function(e, n, r) {
                                            var o;
                                            if (i[e].isActive === n) return Promise.resolve();
                                            null === (o = t.variantChildren) || void 0 === o || o.forEach(t => {
                                                var i;
                                                return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, n)
                                            }), i[e].isActive = n;
                                            let a = s(r, e);
                                            for (let l in i) i[l].protectedKeys = {};
                                            return a
                                        },
                                        setAnimateFunction: function(i) {
                                            e = i(t)
                                        },
                                        getState: () => i
                                    }
                                }(t))
                            }
                            updateAnimationControlsSubscription() {
                                let {
                                    animate: t
                                } = this.node.getProps();
                                this.unmount(), f(t) && (this.unmount = t.subscribe(this.node))
                            }
                            mount() {
                                this.updateAnimationControlsSubscription()
                            }
                            update() {
                                let {
                                    animate: t
                                } = this.node.getProps(), {
                                    animate: e
                                } = this.node.prevProps || {};
                                t !== e && this.updateAnimationControlsSubscription()
                            }
                            unmount() {}
                        }
                    },
                    exit: {
                        Feature: class extends tM {
                            constructor() {
                                super(...arguments), this.id = ew++
                            }
                            update() {
                                if (!this.node.presenceContext) return;
                                let {
                                    isPresent: t,
                                    onExitComplete: e,
                                    custom: i
                                } = this.node.presenceContext, {
                                    isPresent: n
                                } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || t === n) return;
                                let r = this.node.animationState.setActive("exit", !t, {
                                    custom: null != i ? i : this.node.getProps().custom
                                });
                                e && !t && r.then(() => e(this.id))
                            }
                            mount() {
                                let {
                                    register: t
                                } = this.node.presenceContext || {};
                                t && (this.unmount = t(this.id))
                            }
                            unmount() {}
                        }
                    },
                    inView: {
                        Feature: class extends tM {
                            constructor() {
                                super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                            }
                            startObserver() {
                                this.unmount();
                                let {
                                    viewport: t = {}
                                } = this.node.getProps(), {
                                    root: e,
                                    margin: i,
                                    amount: n = "some",
                                    once: r
                                } = t, s = {
                                    root: e ? e.current : void 0,
                                    rootMargin: i,
                                    threshold: "number" == typeof n ? n : tU[n]
                                }, o = t => {
                                    let {
                                        isIntersecting: e
                                    } = t;
                                    if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
                                    e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                                    let {
                                        onViewportEnter: i,
                                        onViewportLeave: n
                                    } = this.node.getProps(), s = e ? i : n;
                                    s && s(t)
                                };
                                return function(t, e, i) {
                                    let n = function({
                                        root: t,
                                        ...e
                                    }) {
                                        let i = t || document;
                                        tL.has(i) || tL.set(i, {});
                                        let n = tL.get(i),
                                            r = JSON.stringify(e);
                                        return n[r] || (n[r] = new IntersectionObserver(tI, {
                                            root: t,
                                            ...e
                                        })), n[r]
                                    }(e);
                                    return tB.set(t, i), n.observe(t), () => {
                                        tB.delete(t), n.unobserve(t)
                                    }
                                }(this.node.current, s, o)
                            }
                            mount() {
                                this.startObserver()
                            }
                            update() {
                                if ("undefined" == typeof IntersectionObserver) return;
                                let {
                                    props: t,
                                    prevProps: e
                                } = this.node, i = ["amount", "margin", "root"].some(function({
                                    viewport: t = {}
                                }, {
                                    viewport: e = {}
                                } = {}) {
                                    return i => t[i] !== e[i]
                                }(t, e));
                                i && this.startObserver()
                            }
                            unmount() {}
                        }
                    },
                    tap: {
                        Feature: class extends tM {
                            constructor() {
                                super(...arguments), this.removeStartListeners = tF.Z, this.removeEndListeners = tF.Z, this.removeAccessibleListeners = tF.Z, this.startPointerPress = (t, e) => {
                                    if (this.removeEndListeners(), this.isPressing) return;
                                    let i = this.node.getProps(),
                                        n = (t, e) => {
                                            if (!this.checkPressEnd()) return;
                                            let {
                                                onTap: i,
                                                onTapCancel: n
                                            } = this.node.getProps();
                                            tR.Wi.update(() => {
                                                tk(this.node.current, t.target) ? i && i(t, e) : n && n(t, e)
                                            })
                                        },
                                        r = tw(window, "pointerup", n, {
                                            passive: !(i.onTap || i.onPointerUp)
                                        }),
                                        s = tw(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                            passive: !(i.onTapCancel || i.onPointerCancel)
                                        });
                                    this.removeEndListeners = (0, tV.z)(r, s), this.startPress(t, e)
                                }, this.startAccessiblePress = () => {
                                    let t = t => {
                                            if ("Enter" !== t.key || this.isPressing) return;
                                            let e = t => {
                                                "Enter" === t.key && this.checkPressEnd() && tj("up", (t, e) => {
                                                    let {
                                                        onTap: i
                                                    } = this.node.getProps();
                                                    i && tR.Wi.update(() => i(t, e))
                                                })
                                            };
                                            this.removeEndListeners(), this.removeEndListeners = ty(this.node.current, "keyup", e), tj("down", (t, e) => {
                                                this.startPress(t, e)
                                            })
                                        },
                                        e = ty(this.node.current, "keydown", t),
                                        i = () => {
                                            this.isPressing && tj("cancel", (t, e) => this.cancelPress(t, e))
                                        },
                                        n = ty(this.node.current, "blur", i);
                                    this.removeAccessibleListeners = (0, tV.z)(e, n)
                                }
                            }
                            startPress(t, e) {
                                this.isPressing = !0;
                                let {
                                    onTapStart: i,
                                    whileTap: n
                                } = this.node.getProps();
                                n && this.node.animationState && this.node.animationState.setActive("whileTap", !0), i && tR.Wi.update(() => i(t, e))
                            }
                            checkPressEnd() {
                                this.removeEndListeners(), this.isPressing = !1;
                                let t = this.node.getProps();
                                return t.whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !tC()
                            }
                            cancelPress(t, e) {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTapCancel: i
                                } = this.node.getProps();
                                i && tR.Wi.update(() => i(t, e))
                            }
                            mount() {
                                let t = this.node.getProps(),
                                    e = tw(this.node.current, "pointerdown", this.startPointerPress, {
                                        passive: !(t.onTapStart || t.onPointerStart)
                                    }),
                                    i = ty(this.node.current, "focus", this.startAccessiblePress);
                                this.removeStartListeners = (0, tV.z)(e, i)
                            }
                            unmount() {
                                this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                            }
                        }
                    },
                    focus: {
                        Feature: class extends tM {
                            constructor() {
                                super(...arguments), this.isActive = !1
                            }
                            onFocus() {
                                let t = !1;
                                try {
                                    t = this.node.current.matches(":focus-visible")
                                } catch (e) {
                                    t = !0
                                }
                                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                            }
                            onBlur() {
                                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                            }
                            mount() {
                                this.unmount = (0, tV.z)(ty(this.node.current, "focus", () => this.onFocus()), ty(this.node.current, "blur", () => this.onBlur()))
                            }
                            unmount() {}
                        }
                    },
                    hover: {
                        Feature: class extends tM {
                            mount() {
                                this.unmount = (0, tV.z)(tD(this.node, !0), tD(this.node, !1))
                            }
                            unmount() {}
                        }
                    },
                    pan: {
                        Feature: class extends tM {
                            constructor() {
                                super(...arguments), this.removePointerDownListener = tF.Z
                            }
                            onPointerDown(t) {
                                this.session = new eA(t, this.createPanHandlers(), {
                                    transformPagePoint: this.node.getTransformPagePoint()
                                })
                            }
                            createPanHandlers() {
                                let {
                                    onPanSessionStart: t,
                                    onPanStart: e,
                                    onPan: i,
                                    onPanEnd: n
                                } = this.node.getProps();
                                return {
                                    onSessionStart: ii(t),
                                    onStart: ii(e),
                                    onMove: i,
                                    onEnd: (t, e) => {
                                        delete this.session, n && tR.Wi.update(() => n(t, e))
                                    }
                                }
                            }
                            mount() {
                                this.removePointerDownListener = tw(this.node.current, "pointerdown", t => this.onPointerDown(t))
                            }
                            update() {
                                this.session && this.session.updateHandlers(this.createPanHandlers())
                            }
                            unmount() {
                                this.removePointerDownListener(), this.session && this.session.end()
                            }
                        }
                    },
                    drag: {
                        Feature: class extends tM {
                            constructor(t) {
                                super(t), this.removeGroupControls = tF.Z, this.removeListeners = tF.Z, this.controls = new it(t)
                            }
                            mount() {
                                let {
                                    dragControls: t
                                } = this.node.getProps();
                                t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || tF.Z
                            }
                            unmount() {
                                this.removeGroupControls(), this.removeListeners()
                            }
                        },
                        ProjectionNode: nt,
                        MeasureLayout: il
                    },
                    layout: {
                        ProjectionNode: nt,
                        MeasureLayout: il
                    }
                },
                nC = function(t) {
                    function e(e, i = {}) {
                        return function({
                            preloadedFeatures: t,
                            createVisualElement: e,
                            useRender: i,
                            useVisualState: n,
                            Component: r
                        }) {
                            t && function(t) {
                                for (let e in t) P[e] = { ...P[e],
                                    ...t[e]
                                }
                            }(t);
                            let s = (0, o.forwardRef)(function(s, f) {
                                var m, g;
                                let y;
                                let b = { ...(0, o.useContext)(a._),
                                        ...s,
                                        layoutId: function({
                                            layoutId: t
                                        }) {
                                            let e = (0, o.useContext)(A.p).id;
                                            return e && void 0 !== t ? e + "-" + t : t
                                        }(s)
                                    },
                                    {
                                        isStatic: P
                                    } = b,
                                    w = function(t) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = function(t, e) {
                                            if (v(t)) {
                                                let {
                                                    initial: i,
                                                    animate: n
                                                } = t;
                                                return {
                                                    initial: !1 === i || p(i) ? i : void 0,
                                                    animate: p(n) ? n : void 0
                                                }
                                            }
                                            return !1 !== t.inherit ? e : {}
                                        }(t, (0, o.useContext)(l));
                                        return (0, o.useMemo)(() => ({
                                            initial: e,
                                            animate: i
                                        }), [x(e), x(i)])
                                    }(s),
                                    T = n(s, P);
                                if (!P && V.j) {
                                    w.visualElement = function(t, e, i, n) {
                                        let {
                                            visualElement: r
                                        } = (0, o.useContext)(l), s = (0, o.useContext)(c), d = (0, o.useContext)(u.O), p = (0, o.useContext)(a._).reducedMotion, f = (0, o.useRef)();
                                        n = n || s.renderer, !f.current && n && (f.current = n(t, {
                                            visualState: e,
                                            parent: r,
                                            props: i,
                                            presenceContext: d,
                                            blockInitialAnimation: !!d && !1 === d.initial,
                                            reducedMotionConfig: p
                                        }));
                                        let m = f.current;
                                        (0, o.useInsertionEffect)(() => {
                                            m && m.update(i, d)
                                        }), (0, h.L)(() => {
                                            m && m.render()
                                        }), (0, o.useEffect)(() => {
                                            m && m.updateFeatures()
                                        });
                                        let g = window.HandoffAppearAnimations ? h.L : o.useEffect;
                                        return g(() => {
                                            m && m.animationState && m.animationState.animateChanges()
                                        }), m
                                    }(r, T, b, e);
                                    let E = (0, o.useContext)(S),
                                        C = (0, o.useContext)(c).strict;
                                    w.visualElement && (y = w.visualElement.loadFeatures(b, C, t, E))
                                }
                                return o.createElement(l.Provider, {
                                    value: w
                                }, y && w.visualElement ? o.createElement(y, {
                                    visualElement: w.visualElement,
                                    ...b
                                }) : null, i(r, s, (m = w.visualElement, g = f, (0, o.useCallback)(t => {
                                    t && T.mount && T.mount(t), m && (t ? m.mount(t) : m.unmount()), g && ("function" == typeof g ? g(t) : d(g) && (g.current = t))
                                }, [m])), T, P, w.visualElement))
                            });
                            return s[T] = r, s
                        }(t(e, i))
                    }
                    if ("undefined" == typeof Proxy) return e;
                    let i = new Map;
                    return new Proxy(e, {
                        get: (t, n) => (i.has(n) || i.set(n, e(n)), i.get(n))
                    })
                }((t, e) => (function(t, {
                    forwardMotionProps: e = !1
                }, i, n) {
                    let r = C(t) ? tg : tv;
                    return { ...r,
                        preloadedFeatures: i,
                        useRender: function(t = !1) {
                            let e = (e, i, n, {
                                latestValues: r
                            }, s) => {
                                let a = C(e) ? ti : Y,
                                    l = a(i, r, s, e),
                                    u = function(t, e, i) {
                                        let n = {};
                                        for (let r in t)("values" !== r || "object" != typeof t.values) && (q(r) || !0 === i && X(r) || !e && !X(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                                        return n
                                    }(i, "string" == typeof e, t),
                                    h = { ...u,
                                        ...l,
                                        ref: n
                                    },
                                    {
                                        children: c
                                    } = i,
                                    d = (0, o.useMemo)(() => (0, F.i)(c) ? c.get() : c, [c]);
                                return (0, o.createElement)(e, { ...h,
                                    children: d
                                })
                            };
                            return e
                        }(e),
                        createVisualElement: n,
                        Component: t
                    }
                })(t, e, nE, nT))
        },
        7630: function(t, e, i) {
            i.d(e, {
                Xp: function() {
                    return o
                },
                f9: function() {
                    return r
                },
                tm: function() {
                    return s
                }
            });
            let n = t => e => "string" == typeof e && e.startsWith(t),
                r = n("--"),
                s = n("var(--"),
                o = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
        },
        7301: function(t, e, i) {
            i.d(e, {
                I: function() {
                    return r
                }
            });
            var n = i(5487);

            function r(t, e, i) {
                var r;
                if ("string" == typeof t) {
                    let s = document;
                    e && ((0, n.k)(Boolean(e.current), "Scope provided, but no element detected."), s = e.current), i ? (null !== (r = i[t]) && void 0 !== r || (i[t] = s.querySelectorAll(t)), t = i[t]) : t = s.querySelectorAll(t)
                } else t instanceof Element && (t = [t]);
                return Array.from(t || [])
            }
        },
        10: function(t, e, i) {
            function n(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function r(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            i.d(e, {
                cl: function() {
                    return r
                },
                y4: function() {
                    return n
                }
            })
        },
        4169: function(t, e, i) {
            i.d(e, {
                u: function() {
                    return n
                }
            });
            let n = (t, e, i) => Math.min(Math.max(i, t), e)
        },
        5487: function(t, e, i) {
            i.d(e, {
                K: function() {
                    return r
                },
                k: function() {
                    return s
                }
            });
            var n = i(1662);
            let r = n.Z,
                s = n.Z
        },
        4606: function(t, e, i) {
            i.d(e, {
                s: function() {
                    return T
                }
            });
            var n = i(5487),
                r = i(5385),
                s = i(4169),
                o = i(22);

            function a(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var l = i(6382),
                u = i(819),
                h = i(3184);
            let c = (t, e, i) => {
                    let n = t * t;
                    return Math.sqrt(Math.max(0, i * (e * e - n) + n))
                },
                d = [l.$, u.m, h.J],
                p = t => d.find(e => e.test(t));

            function f(t) {
                let e = p(t);
                (0, n.k)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let i = e.parse(t);
                return e === h.J && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: n
                }) {
                    t /= 360, i /= 100;
                    let r = 0,
                        s = 0,
                        o = 0;
                    if (e /= 100) {
                        let l = i < .5 ? i * (1 + e) : i + e - i * e,
                            u = 2 * i - l;
                        r = a(u, l, t + 1 / 3), s = a(u, l, t), o = a(u, l, t - 1 / 3)
                    } else r = s = o = i;
                    return {
                        red: Math.round(255 * r),
                        green: Math.round(255 * s),
                        blue: Math.round(255 * o),
                        alpha: n
                    }
                }(i)), i
            }
            let m = (t, e) => {
                let i = f(t),
                    n = f(e),
                    r = { ...i
                    };
                return t => (r.red = c(i.red, n.red, t), r.green = c(i.green, n.green, t), r.blue = c(i.blue, n.blue, t), r.alpha = (0, o.C)(i.alpha, n.alpha, t), u.m.transform(r))
            };
            var g = i(3624),
                v = i(1550);
            let y = (t, e) => i => `${i>0?e:t}`;

            function x(t, e) {
                return "number" == typeof t ? i => (0, o.C)(t, e, i) : r.$.test(t) ? m(t, e) : t.startsWith("var(") ? y(t, e) : w(t, e)
            }
            let b = (t, e) => {
                    let i = [...t],
                        n = i.length,
                        r = t.map((t, i) => x(t, e[i]));
                    return t => {
                        for (let e = 0; e < n; e++) i[e] = r[e](t);
                        return i
                    }
                },
                P = (t, e) => {
                    let i = { ...t,
                            ...e
                        },
                        n = {};
                    for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = x(t[r], e[r]));
                    return t => {
                        for (let e in n) i[e] = n[e](t);
                        return i
                    }
                },
                w = (t, e) => {
                    let i = v.P.createTransformer(e),
                        r = (0, v.V)(t),
                        s = (0, v.V)(e),
                        o = r.numVars === s.numVars && r.numColors === s.numColors && r.numNumbers >= s.numNumbers;
                    return o ? (0, g.z)(b(r.values, s.values), i) : ((0, n.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), y(t, e))
                };
            var V = i(3967),
                A = i(1662);
            let S = (t, e) => i => (0, o.C)(t, e, i);

            function T(t, e, {
                clamp: i = !0,
                ease: o,
                mixer: a
            } = {}) {
                let l = t.length;
                if ((0, n.k)(l === e.length, "Both input and output ranges must be the same length"), 1 === l) return () => e[0];
                t[0] > t[l - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let u = function(t, e, i) {
                        let n = [],
                            s = i || function(t) {
                                if ("number" == typeof t);
                                else if ("string" == typeof t) return r.$.test(t) ? m : w;
                                else if (Array.isArray(t)) return b;
                                else if ("object" == typeof t) return P;
                                return S
                            }(t[0]),
                            o = t.length - 1;
                        for (let a = 0; a < o; a++) {
                            let l = s(t[a], t[a + 1]);
                            if (e) {
                                let u = Array.isArray(e) ? e[a] || A.Z : e;
                                l = (0, g.z)(u, l)
                            }
                            n.push(l)
                        }
                        return n
                    }(e, o, a),
                    h = u.length,
                    c = e => {
                        let i = 0;
                        if (h > 1)
                            for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                        let n = (0, V.Y)(t[i], t[i + 1], e);
                        return u[i](n)
                    };
                return i ? e => c((0, s.u)(t[0], t[l - 1], e)) : c
            }
        },
        1741: function(t, e, i) {
            i.d(e, {
                j: function() {
                    return n
                }
            });
            let n = "undefined" != typeof document
        },
        22: function(t, e, i) {
            i.d(e, {
                C: function() {
                    return n
                }
            });
            let n = (t, e, i) => -i * t + i * e + t
        },
        1662: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return n
                }
            });
            let n = t => t
        },
        533: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return s
                }
            });
            var n = i(22),
                r = i(3967);

            function s(t) {
                let e = [0];
                return ! function(t, e) {
                    let i = t[t.length - 1];
                    for (let s = 1; s <= e; s++) {
                        let o = (0, r.Y)(0, e, s);
                        t.push((0, n.C)(i, 1, o))
                    }
                }(e, t.length - 1), e
            }
        },
        3624: function(t, e, i) {
            i.d(e, {
                z: function() {
                    return r
                }
            });
            let n = (t, e) => i => e(t(i)),
                r = (...t) => t.reduce(n)
        },
        3967: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return n
                }
            });
            let n = (t, e, i) => {
                let n = e - t;
                return 0 === n ? 1 : (i - t) / n
            }
        },
        1560: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return r
                }
            });
            var n = i(10);
            class r {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return (0, n.y4)(this.subscriptions, t), () => (0, n.cl)(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let n = this.subscriptions.length;
                    if (n) {
                        if (1 === n) this.subscriptions[0](t, e, i);
                        else
                            for (let r = 0; r < n; r++) {
                                let s = this.subscriptions[r];
                                s && s(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        6917: function(t, e, i) {
            i.d(e, {
                X: function() {
                    return r
                },
                w: function() {
                    return n
                }
            });
            let n = t => 1e3 * t,
                r = t => t / 1e3
        },
        6681: function(t, e, i) {
            i.d(e, {
                h: function() {
                    return r
                }
            });
            var n = i(7294);

            function r(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        6893: function(t, e, i) {
            i.d(e, {
                Y: function() {
                    return o
                }
            });
            var n = i(7294),
                r = i(7301);
            let s = {
                some: 0,
                all: 1
            };

            function o(t, {
                root: e,
                margin: i,
                amount: o,
                once: a = !1
            } = {}) {
                let [l, u] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    if (!t.current || a && l) return;
                    let n = () => (u(!0), a ? void 0 : () => u(!1)),
                        h = {
                            root: e && e.current || void 0,
                            margin: i,
                            amount: o
                        };
                    return function(t, e, {
                        root: i,
                        margin: n,
                        amount: o = "some"
                    } = {}) {
                        let a = (0, r.I)(t),
                            l = new WeakMap,
                            u = t => {
                                t.forEach(t => {
                                    let i = l.get(t.target);
                                    if (t.isIntersecting !== Boolean(i)) {
                                        if (t.isIntersecting) {
                                            let n = e(t);
                                            "function" == typeof n ? l.set(t.target, n) : h.unobserve(t.target)
                                        } else i && (i(t), l.delete(t.target))
                                    }
                                })
                            },
                            h = new IntersectionObserver(u, {
                                root: i,
                                rootMargin: n,
                                threshold: "number" == typeof o ? o : s[o]
                            });
                        return a.forEach(t => h.observe(t)), () => h.disconnect()
                    }(t.current, n, h)
                }, [e, t, i, a]), l
            }
        },
        8868: function(t, e, i) {
            i.d(e, {
                L: function() {
                    return s
                }
            });
            var n = i(7294),
                r = i(1741);
            let s = r.j ? n.useLayoutEffect : n.useEffect
        },
        3038: function(t, e, i) {
            i.d(e, {
                R: function() {
                    return n
                }
            });

            function n(t, e) {
                return e ? t * (1e3 / e) : 0
            }
        },
        3234: function(t, e, i) {
            i.d(e, {
                B: function() {
                    return l
                }
            });
            var n = i(1560),
                r = i(3038),
                s = i(2074);
            let o = t => !isNaN(parseFloat(t));
            class a {
                constructor(t, e = {}) {
                    this.version = "10.15.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        let {
                            delta: i,
                            timestamp: n
                        } = s.w0;
                        this.lastUpdated !== n && (this.timeDelta = i, this.lastUpdated = n, s.Wi.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => s.Wi.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = o(this.current), this.owner = e.owner
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new n.L);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), s.Wi.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = t, this.timeDelta = i
                }
                jump(t) {
                    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? (0, r.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function l(t, e) {
                return new a(t, e)
            }
        },
        6382: function(t, e, i) {
            i.d(e, {
                $: function() {
                    return s
                }
            });
            var n = i(819),
                r = i(8834);
            let s = {
                test: (0, r.i)("#"),
                parse: function(t) {
                    let e = "",
                        i = "",
                        n = "",
                        r = "";
                    return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
                        red: parseInt(e, 16),
                        green: parseInt(i, 16),
                        blue: parseInt(n, 16),
                        alpha: r ? parseInt(r, 16) / 255 : 1
                    }
                },
                transform: n.m.transform
            }
        },
        3184: function(t, e, i) {
            i.d(e, {
                J: function() {
                    return a
                }
            });
            var n = i(1649),
                r = i(6190),
                s = i(6430),
                o = i(8834);
            let a = {
                test: (0, o.i)("hsl", "hue"),
                parse: (0, o.d)("hue", "saturation", "lightness"),
                transform: ({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: o = 1
                }) => "hsla(" + Math.round(t) + ", " + r.aQ.transform((0, s.Nw)(e)) + ", " + r.aQ.transform((0, s.Nw)(i)) + ", " + (0, s.Nw)(n.Fq.transform(o)) + ")"
            }
        },
        5385: function(t, e, i) {
            i.d(e, {
                $: function() {
                    return a
                }
            });
            var n = i(6430),
                r = i(6382),
                s = i(3184),
                o = i(819);
            let a = {
                test: t => o.m.test(t) || r.$.test(t) || s.J.test(t),
                parse: t => o.m.test(t) ? o.m.parse(t) : s.J.test(t) ? s.J.parse(t) : r.$.parse(t),
                transform: t => (0, n.HD)(t) ? t : t.hasOwnProperty("red") ? o.m.transform(t) : s.J.transform(t)
            }
        },
        819: function(t, e, i) {
            i.d(e, {
                m: function() {
                    return u
                }
            });
            var n = i(4169),
                r = i(1649),
                s = i(6430),
                o = i(8834);
            let a = t => (0, n.u)(0, 255, t),
                l = { ...r.Rx,
                    transform: t => Math.round(a(t))
                },
                u = {
                    test: (0, o.i)("rgb", "red"),
                    parse: (0, o.d)("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: n = 1
                    }) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(i) + ", " + (0, s.Nw)(r.Fq.transform(n)) + ")"
                }
        },
        8834: function(t, e, i) {
            i.d(e, {
                d: function() {
                    return s
                },
                i: function() {
                    return r
                }
            });
            var n = i(6430);
            let r = (t, e) => i => Boolean((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
                s = (t, e, i) => r => {
                    if (!(0, n.HD)(r)) return r;
                    let [s, o, a, l] = r.match(n.KP);
                    return {
                        [t]: parseFloat(s),
                        [e]: parseFloat(o),
                        [i]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        1550: function(t, e, i) {
            i.d(e, {
                P: function() {
                    return g
                },
                V: function() {
                    return d
                }
            });
            var n = i(7630),
                r = i(1662),
                s = i(5385),
                o = i(1649),
                a = i(6430);
            let l = {
                    regex: n.Xp,
                    countKey: "Vars",
                    token: "${v}",
                    parse: r.Z
                },
                u = {
                    regex: a.dA,
                    countKey: "Colors",
                    token: "${c}",
                    parse: s.$.parse
                },
                h = {
                    regex: a.KP,
                    countKey: "Numbers",
                    token: "${n}",
                    parse: o.Rx.parse
                };

            function c(t, {
                regex: e,
                countKey: i,
                token: n,
                parse: r
            }) {
                let s = t.tokenised.match(e);
                s && (t["num" + i] = s.length, t.tokenised = t.tokenised.replace(e, n), t.values.push(...s.map(r)))
            }

            function d(t) {
                let e = t.toString(),
                    i = {
                        value: e,
                        tokenised: e,
                        values: [],
                        numVars: 0,
                        numColors: 0,
                        numNumbers: 0
                    };
                return i.value.includes("var(--") && c(i, l), c(i, u), c(i, h), i
            }

            function p(t) {
                return d(t).values
            }

            function f(t) {
                let {
                    values: e,
                    numColors: i,
                    numVars: n,
                    tokenised: r
                } = d(t), o = e.length;
                return t => {
                    let e = r;
                    for (let c = 0; c < o; c++) e = c < n ? e.replace(l.token, t[c]) : c < n + i ? e.replace(u.token, s.$.transform(t[c])) : e.replace(h.token, (0, a.Nw)(t[c]));
                    return e
                }
            }
            let m = t => "number" == typeof t ? 0 : t,
                g = {
                    test: function(t) {
                        var e, i;
                        return isNaN(t) && (0, a.HD)(t) && ((null === (e = t.match(a.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(a.dA)) || void 0 === i ? void 0 : i.length) || 0) > 0
                    },
                    parse: p,
                    createTransformer: f,
                    getAnimatableNone: function(t) {
                        let e = p(t),
                            i = f(t);
                        return i(e.map(m))
                    }
                }
        },
        1649: function(t, e, i) {
            i.d(e, {
                Fq: function() {
                    return s
                },
                Rx: function() {
                    return r
                },
                bA: function() {
                    return o
                }
            });
            var n = i(4169);
            let r = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                s = { ...r,
                    transform: t => (0, n.u)(0, 1, t)
                },
                o = { ...r,
                    default: 1
                }
        },
        6190: function(t, e, i) {
            i.d(e, {
                $C: function() {
                    return h
                },
                RW: function() {
                    return s
                },
                aQ: function() {
                    return o
                },
                px: function() {
                    return a
                },
                vh: function() {
                    return l
                },
                vw: function() {
                    return u
                }
            });
            var n = i(6430);
            let r = t => ({
                    test: e => (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                s = r("deg"),
                o = r("%"),
                a = r("px"),
                l = r("vh"),
                u = r("vw"),
                h = { ...o,
                    parse: t => o.parse(t) / 100,
                    transform: t => o.transform(100 * t)
                }
        },
        6430: function(t, e, i) {
            i.d(e, {
                HD: function() {
                    return a
                },
                KP: function() {
                    return r
                },
                Nw: function() {
                    return n
                },
                dA: function() {
                    return s
                },
                mj: function() {
                    return o
                }
            });
            let n = t => Math.round(1e5 * t) / 1e5,
                r = /(-)?([\d]*\.?[\d])+/g,
                s = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                o = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function a(t) {
                return "string" == typeof t
            }
        },
        406: function(t, e, i) {
            i.d(e, {
                i: function() {
                    return n
                }
            });
            let n = t => Boolean(t && t.getVelocity)
        }
    }
]);
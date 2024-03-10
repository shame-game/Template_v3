(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [939], {
        2691: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/pricing", function() {
                return r(4052)
            }])
        },
        4052: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return U
                }
            });
            var a, l, n = r(5893),
                i = r(339),
                s = r(9945),
                o = r(9019),
                c = r(7294);
            let d = c.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...r
                }, a) {
                    return c.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        ref: a,
                        "aria-labelledby": t
                    }, r), e ? c.createElement("title", {
                        id: t
                    }, e) : null, c.createElement("path", {
                        fillRule: "evenodd",
                        d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z",
                        clipRule: "evenodd"
                    }))
                }),
                u = c.forwardRef(function({
                    title: e,
                    titleId: t,
                    ...r
                }, a) {
                    return c.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        ref: a,
                        "aria-labelledby": t
                    }, r), e ? c.createElement("title", {
                        id: t
                    }, e) : null, c.createElement("path", {
                        fillRule: "evenodd",
                        d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
                        clipRule: "evenodd"
                    }))
                });
            var m = r(6434),
                p = r(2351),
                x = r(9946),
                f = r(2984),
                h = r(6723),
                g = r(1363),
                y = r(4575),
                v = r(3784),
                b = r(3781);
            let j = (0, c.createContext)(null);

            function N() {
                let [e, t] = (0, c.useState)([]);
                return [e.length > 0 ? e.join(" ") : void 0, (0, c.useMemo)(() => function(e) {
                    let r = (0, b.z)(e => (t(t => [...t, e]), () => t(t => {
                            let r = t.slice(),
                                a = r.indexOf(e);
                            return -1 !== a && r.splice(a, 1), r
                        }))),
                        a = (0, c.useMemo)(() => ({
                            register: r,
                            slot: e.slot,
                            name: e.name,
                            props: e.props
                        }), [r, e.slot, e.name, e.props]);
                    return c.createElement(j.Provider, {
                        value: a
                    }, e.children)
                }, [t])]
            }
            let w = (0, p.yV)(function(e, t) {
                let r = (0, x.M)(),
                    {
                        id: a = `headlessui-label-${r}`,
                        passive: l = !1,
                        ...n
                    } = e,
                    i = function e() {
                        let t = (0, c.useContext)(j);
                        if (null === t) {
                            let r = Error("You used a <Label /> component, but it is not inside a relevant parent.");
                            throw Error.captureStackTrace && Error.captureStackTrace(r, e), r
                        }
                        return t
                    }(),
                    s = (0, v.T)(t);
                (0, h.e)(() => i.register(a), [a, i.register]);
                let o = {
                    ref: s,
                    ...i.props,
                    id: a
                };
                return l && ("onClick" in o && delete o.onClick, "onClick" in n && delete n.onClick), (0, p.sY)({
                    ourProps: o,
                    theirProps: n,
                    slot: i.slot || {},
                    defaultTag: "label",
                    name: i.name || "Label"
                })
            });
            var E = r(9516),
                R = r(5466),
                P = r(6045);

            function S(e, t) {
                return e ? e + "[" + t + "]" : t
            }
            var k = r(4103),
                M = r(3855),
                T = r(4192),
                C = ((a = C || {})[a.RegisterOption = 0] = "RegisterOption", a[a.UnregisterOption = 1] = "UnregisterOption", a);
            let O = {
                    0(e, t) {
                        let r = [...e.options, {
                            id: t.id,
                            element: t.element,
                            propsRef: t.propsRef
                        }];
                        return { ...e,
                            options: (0, y.z2)(r, e => e.element.current)
                        }
                    },
                    1(e, t) {
                        let r = e.options.slice(),
                            a = e.options.findIndex(e => e.id === t.id);
                        return -1 === a ? e : (r.splice(a, 1), { ...e,
                            options: r
                        })
                    }
                },
                A = (0, c.createContext)(null);
            A.displayName = "RadioGroupDataContext";
            let B = (0, c.createContext)(null);

            function F(e, t) {
                return (0, f.E)(t.type, O, e, t)
            }
            B.displayName = "RadioGroupActionsContext";
            let Y = (0, p.yV)(function(e, t) {
                let r = (0, x.M)(),
                    {
                        id: a = `headlessui-radiogroup-${r}`,
                        value: l,
                        defaultValue: n,
                        name: i,
                        onChange: s,
                        by: o = (e, t) => e === t,
                        disabled: d = !1,
                        ...u
                    } = e,
                    m = (0, b.z)("string" == typeof o ? (e, t) => (null == e ? void 0 : e[o]) === (null == t ? void 0 : t[o]) : o),
                    [f, j] = (0, c.useReducer)(F, {
                        options: []
                    }),
                    w = f.options,
                    [k, M] = N(),
                    [C, O] = (0, E.f)(),
                    Y = (0, c.useRef)(null),
                    G = (0, v.T)(Y, t),
                    [D, _] = function(e, t, r) {
                        let [a, l] = (0, c.useState)(r), n = void 0 !== e, i = (0, c.useRef)(n), s = (0, c.useRef)(!1), o = (0, c.useRef)(!1);
                        return !n || i.current || s.current ? n || !i.current || o.current || (o.current = !0, i.current = n, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")) : (s.current = !0, i.current = n, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")), [n ? e : a, (0, b.z)(e => (n || l(e), null == t ? void 0 : t(e)))]
                    }(l, s, n),
                    $ = (0, c.useMemo)(() => w.find(e => !e.propsRef.current.disabled), [w]),
                    L = (0, c.useMemo)(() => w.some(e => m(e.propsRef.current.value, D)), [w, D]),
                    z = (0, b.z)(e => {
                        var t;
                        if (d || m(e, D)) return !1;
                        let r = null == (t = w.find(t => m(t.propsRef.current.value, e))) ? void 0 : t.propsRef.current;
                        return (null == r || !r.disabled) && (null == _ || _(e), !0)
                    });
                ! function({
                    container: e,
                    accept: t,
                    walk: r,
                    enabled: a = !0
                }) {
                    let l = (0, c.useRef)(t),
                        n = (0, c.useRef)(r);
                    (0, c.useEffect)(() => {
                        l.current = t, n.current = r
                    }, [t, r]), (0, h.e)(() => {
                        if (!e || !a) return;
                        let t = (0, R.r)(e);
                        if (!t) return;
                        let r = l.current,
                            i = n.current,
                            s = Object.assign(e => r(e), {
                                acceptNode: r
                            }),
                            o = t.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, !1);
                        for (; o.nextNode();) i(o.currentNode)
                    }, [e, a, l, n])
                }({
                    container: Y.current,
                    accept: e => "radio" === e.getAttribute("role") ? NodeFilter.FILTER_REJECT : e.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT,
                    walk(e) {
                        e.setAttribute("role", "none")
                    }
                });
                let I = (0, b.z)(e => {
                        let t = Y.current;
                        if (!t) return;
                        let r = (0, R.r)(t),
                            a = w.filter(e => !1 === e.propsRef.current.disabled).map(e => e.element.current);
                        switch (e.key) {
                            case g.R.Enter:
                                ! function(e) {
                                    var t;
                                    let r = null != (t = null == e ? void 0 : e.form) ? t : e.closest("form");
                                    if (r) {
                                        for (let a of r.elements)
                                            if ("INPUT" === a.tagName && "submit" === a.type || "BUTTON" === a.tagName && "submit" === a.type || "INPUT" === a.nodeName && "image" === a.type) {
                                                a.click();
                                                return
                                            }
                                    }
                                }(e.currentTarget);
                                break;
                            case g.R.ArrowLeft:
                            case g.R.ArrowUp:
                                if (e.preventDefault(), e.stopPropagation(), (0, y.jA)(a, y.TO.Previous | y.TO.WrapAround) === y.fE.Success) {
                                    let l = w.find(e => e.element.current === (null == r ? void 0 : r.activeElement));
                                    l && z(l.propsRef.current.value)
                                }
                                break;
                            case g.R.ArrowRight:
                            case g.R.ArrowDown:
                                if (e.preventDefault(), e.stopPropagation(), (0, y.jA)(a, y.TO.Next | y.TO.WrapAround) === y.fE.Success) {
                                    let n = w.find(e => e.element.current === (null == r ? void 0 : r.activeElement));
                                    n && z(n.propsRef.current.value)
                                }
                                break;
                            case g.R.Space:
                                {
                                    e.preventDefault(),
                                    e.stopPropagation();
                                    let i = w.find(e => e.element.current === (null == r ? void 0 : r.activeElement));i && z(i.propsRef.current.value)
                                }
                        }
                    }),
                    U = (0, b.z)(e => (j({
                        type: 0,
                        ...e
                    }), () => j({
                        type: 1,
                        id: e.id
                    }))),
                    V = (0, c.useMemo)(() => ({
                        value: D,
                        firstOption: $,
                        containsCheckedOption: L,
                        disabled: d,
                        compare: m,
                        ...f
                    }), [D, $, L, d, m, f]),
                    Z = (0, c.useMemo)(() => ({
                        registerOption: U,
                        change: z
                    }), [U, z]),
                    W = (0, c.useMemo)(() => ({
                        value: D
                    }), [D]),
                    H = (0, c.useRef)(null),
                    K = (0, T.G)();
                return (0, c.useEffect)(() => {
                    H.current && void 0 !== n && K.addEventListener(H.current, "reset", () => {
                        z(n)
                    })
                }, [H, z]), c.createElement(O, {
                    name: "RadioGroup.Description"
                }, c.createElement(M, {
                    name: "RadioGroup.Label"
                }, c.createElement(B.Provider, {
                    value: Z
                }, c.createElement(A.Provider, {
                    value: V
                }, null != i && null != D && (function e(t = {}, r = null, a = []) {
                    for (let [l, n] of Object.entries(t)) ! function t(r, a, l) {
                        if (Array.isArray(l))
                            for (let [n, i] of l.entries()) t(r, S(a, n.toString()), i);
                        else l instanceof Date ? r.push([a, l.toISOString()]) : "boolean" == typeof l ? r.push([a, l ? "1" : "0"]) : "string" == typeof l ? r.push([a, l]) : "number" == typeof l ? r.push([a, `${l}`]) : null == l ? r.push([a, ""]) : e(l, a, r)
                    }(a, S(r, l), n);
                    return a
                })({
                    [i]: D
                }).map(([e, t], r) => c.createElement(P._, {
                    features: P.A.Hidden,
                    ref: 0 === r ? e => {
                        var t;
                        H.current = null != (t = null == e ? void 0 : e.closest("form")) ? t : null
                    } : void 0,
                    ...(0, p.oA)({
                        key: e,
                        as: "input",
                        type: "radio",
                        checked: null != t,
                        hidden: !0,
                        readOnly: !0,
                        name: e,
                        value: t
                    })
                })), (0, p.sY)({
                    ourProps: {
                        ref: G,
                        id: a,
                        role: "radiogroup",
                        "aria-labelledby": k,
                        "aria-describedby": C,
                        onKeyDown: I
                    },
                    theirProps: u,
                    slot: W,
                    defaultTag: "div",
                    name: "RadioGroup"
                })))))
            });
            var G = ((l = G || {})[l.Empty = 1] = "Empty", l[l.Active = 2] = "Active", l);
            let D = Object.assign(Y, {
                Option: (0, p.yV)(function(e, t) {
                    var r;
                    let a = (0, x.M)(),
                        {
                            id: l = `headlessui-radiogroup-option-${a}`,
                            value: n,
                            disabled: i = !1,
                            ...s
                        } = e,
                        o = (0, c.useRef)(null),
                        d = (0, v.T)(o, t),
                        [u, m] = N(),
                        [f, g] = (0, E.f)(),
                        {
                            addFlag: y,
                            removeFlag: j,
                            hasFlag: w
                        } = function(e = 0) {
                            let [t, r] = (0, c.useState)(e);
                            return {
                                addFlag: (0, c.useCallback)(e => r(t => t | e), [t]),
                                hasFlag: (0, c.useCallback)(e => Boolean(t & e), [t]),
                                removeFlag: (0, c.useCallback)(e => r(t => t & ~e), [r]),
                                toggleFlag: (0, c.useCallback)(e => r(t => t ^ e), [r])
                            }
                        }(1),
                        R = (0, M.E)({
                            value: n,
                            disabled: i
                        }),
                        P = function e(t) {
                            let r = (0, c.useContext)(A);
                            if (null === r) {
                                let a = Error(`<${t} /> is missing a parent <RadioGroup /> component.`);
                                throw Error.captureStackTrace && Error.captureStackTrace(a, e), a
                            }
                            return r
                        }("RadioGroup.Option"),
                        S = function e(t) {
                            let r = (0, c.useContext)(B);
                            if (null === r) {
                                let a = Error(`<${t} /> is missing a parent <RadioGroup /> component.`);
                                throw Error.captureStackTrace && Error.captureStackTrace(a, e), a
                            }
                            return r
                        }("RadioGroup.Option");
                    (0, h.e)(() => S.registerOption({
                        id: l,
                        element: o,
                        propsRef: R
                    }), [l, S, o, e]);
                    let T = (0, b.z)(e => {
                            var t;
                            if ((0, k.P)(e.currentTarget)) return e.preventDefault();
                            S.change(n) && (y(2), null == (t = o.current) || t.focus())
                        }),
                        C = (0, b.z)(e => {
                            if ((0, k.P)(e.currentTarget)) return e.preventDefault();
                            y(2)
                        }),
                        O = (0, b.z)(() => j(2)),
                        F = (null == (r = P.firstOption) ? void 0 : r.id) === l,
                        Y = P.disabled || i,
                        G = P.compare(P.value, n),
                        D = {
                            ref: d,
                            id: l,
                            role: "radio",
                            "aria-checked": G ? "true" : "false",
                            "aria-labelledby": u,
                            "aria-describedby": f,
                            "aria-disabled": !!Y || void 0,
                            tabIndex: Y ? -1 : G || !P.containsCheckedOption && F ? 0 : -1,
                            onClick: Y ? void 0 : T,
                            onFocus: Y ? void 0 : C,
                            onBlur: Y ? void 0 : O
                        },
                        _ = (0, c.useMemo)(() => ({
                            checked: G,
                            disabled: Y,
                            active: w(2)
                        }), [G, Y, w]);
                    return c.createElement(g, {
                        name: "RadioGroup.Description"
                    }, c.createElement(m, {
                        name: "RadioGroup.Label"
                    }, (0, p.sY)({
                        ourProps: D,
                        theirProps: s,
                        slot: _,
                        defaultTag: "div",
                        name: "RadioGroup.Option"
                    })))
                }),
                Label: w,
                Description: E.d
            });
            var _ = r(5022),
                $ = r(5083);
            let L = [{
                    name: "Starter",
                    id: "tier-starter",
                    href: $.li,
                    priceMonthlyBilledYearly: "$4",
                    priceMonthlyBilledMonthly: "$5",
                    priceYearlyBilledYearly: "$48",
                    mostPopular: !1
                }, {
                    name: "Pro",
                    emoji: "\uD83D\uDC8E",
                    id: "tier-pro",
                    href: $.li,
                    priceMonthlyBilledYearly: "$19",
                    priceMonthlyBilledMonthly: "$29",
                    priceYearlyBilledYearly: "$228",
                    mostPopular: !0
                }, {
                    name: "Scale",
                    emoji: "\uD83C\uDF0F",
                    id: "tier-scale",
                    href: $.li,
                    priceMonthlyBilledYearly: "$69",
                    priceMonthlyBilledMonthly: "$99",
                    priceYearlyBilledYearly: "$828",
                    mostPopular: !1
                }],
                z = [{
                    name: "Credits",
                    features: [{
                        name: "Text-to-speech credits*",
                        tiers: {
                            Starter: "30,000 / mo",
                            Pro: "200,000 / mo",
                            Scale: "1,000,000 / mo"
                        }
                    }, {
                        name: "Max characters per video script",
                        tiers: {
                            Starter: "3,000",
                            Pro: "5,000",
                            Scale: "8,000"
                        }
                    }, {
                        name: "AI image generations",
                        tiers: {
                            Starter: "5 / mo",
                            Pro: "50 / mo",
                            Scale: "200 / mo"
                        }
                    }, {
                        name: "Storage",
                        tiers: {
                            Starter: (0, n.jsx)(d, {}),
                            Pro: "2 GB",
                            Scale: "10 GB"
                        }
                    }]
                }, {
                    name: "Features",
                    features: [{
                        name: "Standard text-to-speech",
                        tiers: {
                            Starter: !0,
                            Pro: !0,
                            Scale: !0
                        }
                    }, {
                        name: "Lifelike text-to-speech",
                        tiers: {
                            Starter: !1,
                            Pro: !0,
                            Scale: !0
                        }
                    }, {
                        name: "Upload custom media",
                        tiers: {
                            Starter: !1,
                            Pro: !0,
                            Scale: !0
                        }
                    }, {
                        name: "Early access to new features",
                        tiers: {
                            Starter: !1,
                            Pro: !0,
                            Scale: !0
                        }
                    }, {
                        name: "Priority support",
                        tiers: {
                            Starter: !1,
                            Pro: !1,
                            Scale: !0
                        }
                    }]
                }],
                I = () => {
                    let [e, t] = (0, c.useState)("Yearly"), r = "Yearly" === e;
                    return (0, n.jsx)("div", {
                        className: "bg-white py-24",
                        children: (0, n.jsxs)("div", {
                            className: "mx-auto max-w-7xl px-6 lg:px-8",
                            children: [(0, n.jsxs)("div", {
                                className: "mx-auto max-w-4xl text-center",
                                children: [(0, n.jsx)("h1", {
                                    className: "text-base font-medium leading-7 text-gray-500",
                                    children: "Pricing"
                                }), (0, n.jsxs)("p", {
                                    className: "mt-2 text-4xl font-bold text-gray-900 sm:text-5xl tracking-tight",
                                    children: ["Create videos\xa0", (0, n.jsx)("span", {
                                        className: "text-main-600",
                                        children: "25x"
                                    }), "\xa0faster."]
                                })]
                            }), (0, n.jsx)("p", {
                                className: "mx-auto mt-6 max-w-2xl text-center text-lg text-gray-900",
                                children: "Create videos for social media in seconds – not hours. Reclaim your time, slash costs, and supercharge your content creation workflows."
                            }), (0, n.jsx)("div", {
                                className: "mt-16 flex justify-center",
                                children: (0, n.jsxs)(D, {
                                    value: e,
                                    onChange: t,
                                    className: "grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-sm font-semibold leading-5 ring-1 ring-inset ring-gray-200",
                                    children: [(0, n.jsx)(D.Label, {
                                        className: "sr-only",
                                        children: "Payment frequency"
                                    }), ["Monthly", "Yearly"].map(e => (0, n.jsx)(D.Option, {
                                        value: e,
                                        className: e => {
                                            let {
                                                checked: t
                                            } = e;
                                            return (0, _.A)(t ? "bg-main-600 text-white" : "text-gray-500", "cursor-pointer rounded-full px-3 py-2 transition-colors")
                                        },
                                        children: (0, n.jsx)("span", {
                                            children: e
                                        })
                                    }, e))]
                                })
                            }), (0, n.jsx)("div", {
                                className: "text-center text-sm text-gray-900 font-medium mt-2",
                                children: (0, n.jsx)("span", {
                                    children: "Save up to 30% with yearly billing"
                                })
                            }), (0, n.jsx)("div", {
                                className: "mx-auto mt-12 max-w-md space-y-8 lg:hidden",
                                children: L.map(e => (0, n.jsxs)("section", {
                                    className: (0, _.A)(e.mostPopular ? "rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200" : "", "p-8"),
                                    children: [(0, n.jsxs)("h3", {
                                        id: e.id,
                                        className: "text-base font-semibold leading-6 text-gray-900 whitespace-pre-wrap",
                                        children: [e.emoji ? (0, n.jsx)("span", {
                                            className: "mr-2",
                                            "aria-hidden": "true",
                                            children: e.emoji
                                        }) : null, e.name]
                                    }), (0, n.jsxs)("p", {
                                        className: "mt-2 flex items-baseline gap-x-1 text-gray-900",
                                        children: [(0, n.jsx)("span", {
                                            className: "text-4xl font-bold",
                                            children: r ? e.priceMonthlyBilledYearly : e.priceMonthlyBilledMonthly
                                        }), (0, n.jsx)("span", {
                                            className: "text-sm font-semibold",
                                            children: "/month"
                                        })]
                                    }), e.priceMonthlyBilledMonthly && e.priceMonthlyBilledYearly && (0, n.jsx)("p", {
                                        className: "mt-0 text-xs h-0 text-gray-500"
                                    }), (0, n.jsx)(m.Z, {
                                        href: e.href,
                                        "aria-describedby": e.id,
                                        className: (0, _.A)(e.mostPopular ? "bg-main-600 text-white hover:bg-main-700" : "text-main-600 ring-1 ring-inset ring-main-200 hover:ring-main-300", "mt-8 block rounded-xl p-2 text-center text-md font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-600 transition-all"),
                                        children: "Get started"
                                    }), (0, n.jsx)("ul", {
                                        role: "list",
                                        className: "mt-10 space-y-4 text-sm leading-6 text-gray-900",
                                        children: z.map(t => (0, n.jsx)("li", {
                                            children: (0, n.jsx)("ul", {
                                                role: "list",
                                                className: "space-y-4",
                                                children: t.features.map(t => t.tiers[e.name] ? (0, n.jsxs)("li", {
                                                    className: "flex gap-x-3",
                                                    children: [(0, n.jsx)(u, {
                                                        className: "h-6 w-5 flex-none text-green-600",
                                                        "aria-hidden": "true"
                                                    }), (0, n.jsxs)("span", {
                                                        children: [t.name, " ", "string" == typeof t.tiers[e.name] ? (0, n.jsxs)("span", {
                                                            className: "text-sm leading-6 text-gray-500",
                                                            children: ["(", t.tiers[e.name], ")"]
                                                        }) : null]
                                                    })]
                                                }, t.name) : null)
                                            })
                                        }, t.name))
                                    })]
                                }, e.id))
                            }), (0, n.jsx)("div", {
                                className: "isolate mt-12 hidden lg:block",
                                children: (0, n.jsxs)("div", {
                                    className: "relative -mx-8",
                                    children: [L.some(e => e.mostPopular) ? (0, n.jsx)("div", {
                                        className: "absolute inset-x-4 inset-y-0 -z-10 flex",
                                        children: (0, n.jsx)("div", {
                                            className: "flex w-1/4 px-4",
                                            "aria-hidden": "true",
                                            style: {
                                                marginLeft: "".concat((L.findIndex(e => e.mostPopular) + 1) * 25, "%")
                                            },
                                            children: (0, n.jsx)("div", {
                                                className: "w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5 relative",
                                                children: (0, n.jsxs)("div", {
                                                    className: "absolute -right-2 -top-2 inline-flex items-center gap-x-1.5 rounded-lg bg-white px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200",
                                                    children: [(0, n.jsxs)("span", {
                                                        className: "relative flex h-2 w-2",
                                                        children: [(0, n.jsx)("span", {
                                                            className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
                                                        }), (0, n.jsx)("span", {
                                                            className: "relative inline-flex h-2 w-2 rounded-full bg-green-500"
                                                        })]
                                                    }), "Most popular"]
                                                })
                                            })
                                        })
                                    }) : null, (0, n.jsxs)("table", {
                                        className: "w-full table-fixed border-separate border-spacing-x-8 text-left",
                                        children: [(0, n.jsx)("caption", {
                                            className: "sr-only",
                                            children: "Pricing plan comparison"
                                        }), (0, n.jsxs)("colgroup", {
                                            children: [(0, n.jsx)("col", {
                                                className: "w-1/4"
                                            }), (0, n.jsx)("col", {
                                                className: "w-1/4"
                                            }), (0, n.jsx)("col", {
                                                className: "w-1/4"
                                            })]
                                        }), (0, n.jsx)("thead", {
                                            children: (0, n.jsxs)("tr", {
                                                children: [(0, n.jsx)("td", {}), L.map(e => (0, n.jsx)("th", {
                                                    scope: "col",
                                                    className: "px-6 pt-6 xl:px-8 xl:pt-8",
                                                    children: (0, n.jsxs)("div", {
                                                        className: "text-base font-semibold leading-7 text-gray-900 whitespace-pre-wrap",
                                                        children: [e.emoji ? (0, n.jsx)("span", {
                                                            className: "mr-2",
                                                            "aria-hidden": "true",
                                                            children: e.emoji
                                                        }) : null, e.name]
                                                    })
                                                }, e.id))]
                                            })
                                        }), (0, n.jsxs)("tbody", {
                                            children: [(0, n.jsxs)("tr", {
                                                children: [(0, n.jsx)("th", {
                                                    scope: "row",
                                                    children: (0, n.jsx)("span", {
                                                        className: "sr-only",
                                                        children: "Price"
                                                    })
                                                }), L.map(e => (0, n.jsxs)("td", {
                                                    className: "px-6 pt-2 xl:px-8",
                                                    children: [(0, n.jsxs)("div", {
                                                        className: "flex items-baseline gap-x-1 text-gray-900",
                                                        children: [(0, n.jsx)("span", {
                                                            className: "text-4xl font-bold",
                                                            children: r ? e.priceMonthlyBilledYearly : e.priceMonthlyBilledMonthly
                                                        }), (0, n.jsx)("span", {
                                                            className: "text-sm font-semibold leading-6",
                                                            children: "/month"
                                                        })]
                                                    }), r && !e.isFree && (0, n.jsxs)("p", {
                                                        className: "mt-0 text-xs h-0 text-gray-500",
                                                        children: ["Billed ", e.priceYearlyBilledYearly, " yearly"]
                                                    }), (0, n.jsx)(m.Z, {
                                                        href: e.href,
                                                        className: (0, _.A)(e.mostPopular ? "bg-main-600 text-white hover:bg-main-700" : "text-gray-900 ring-1 ring-inset ring-gray-200 hover:ring-gray-300", "mt-8 block transition-colors rounded-xl p-3 text-center text-md font-medium shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-600"),
                                                        children: "$0" === e.priceMonthlyBilledYearly ? "Sign up for free" : "Get started"
                                                    })]
                                                }, e.id))]
                                            }), z.map((e, t) => (0, n.jsxs)(c.Fragment, {
                                                children: [(0, n.jsx)("tr", {
                                                    children: (0, n.jsxs)("th", {
                                                        scope: "colgroup",
                                                        colSpan: 4,
                                                        className: (0, _.A)(0 === t ? "pt-8" : "pt-16", "pb-4 text-sm font-semibold leading-6 text-gray-900"),
                                                        children: [e.name, (0, n.jsx)("div", {
                                                            className: "absolute inset-x-8 mt-4 h-px bg-gray-900/10"
                                                        })]
                                                    })
                                                }), e.features.map(e => (0, n.jsxs)("tr", {
                                                    children: [(0, n.jsxs)("th", {
                                                        scope: "row",
                                                        className: "py-4 text-sm font-normal leading-6 text-gray-900",
                                                        children: [e.name, (0, n.jsx)("div", {
                                                            className: "absolute inset-x-8 mt-4 h-px bg-gray-900/5"
                                                        })]
                                                    }), L.map(t => (0, n.jsx)("td", {
                                                        className: "px-6 py-4 xl:px-8",
                                                        children: "string" == typeof e.tiers[t.name] ? (0, n.jsx)("div", {
                                                            className: "text-center text-sm leading-6 text-gray-500",
                                                            children: e.tiers[t.name]
                                                        }) : (0, n.jsxs)(n.Fragment, {
                                                            children: [!0 === e.tiers[t.name] ? (0, n.jsx)(u, {
                                                                className: "mx-auto h-5 w-5 text-green-600",
                                                                "aria-hidden": "true"
                                                            }) : (0, n.jsx)(d, {
                                                                className: "mx-auto h-5 w-5 text-gray-400",
                                                                "aria-hidden": "true"
                                                            }), (0, n.jsxs)("span", {
                                                                className: "sr-only",
                                                                children: [!0 === e.tiers[t.name] ? "Included" : "Not included", " ", "in ", t.name]
                                                            })]
                                                        })
                                                    }, t.id))]
                                                }, e.name))]
                                            }, e.name))]
                                        })]
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: "w-full mt-8",
                                children: (0, n.jsxs)("span", {
                                    className: "text-sm text-gray-900",
                                    children: ["*1 credit = 1 character of Standard text-to-speech.", (0, n.jsx)("br", {}), "*10 credits = 1 character of Lifelike text-to-speech generation (for Pro and Scale plans)."]
                                })
                            })]
                        })
                    })
                };

            function U() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i.Z, {
                        title: "VideoGen - Pricing",
                        description: "VideoGen – Free AI Video Generator"
                    }), (0, n.jsx)(s.Z, {}), (0, n.jsx)("div", {
                        className: "mx-auto mt-8",
                        children: (0, n.jsx)(I, {})
                    }), (0, n.jsx)(o.Z, {})]
                })
            }
        }
    },
    function(e) {
        e.O(0, [106, 456, 19, 774, 888, 179], function() {
            return e(e.s = 2691)
        }), _N_E = e.O()
    }
]);
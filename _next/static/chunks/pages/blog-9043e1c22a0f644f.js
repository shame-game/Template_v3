(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [195], {
        3986: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function() {
                return s(8697)
            }])
        },
        6069: function(e, t, s) {
            "use strict";
            s.d(t, {
                o: function() {
                    return l
                },
                p: function() {
                    return a
                }
            });
            let a = e => {
                    let t = new Date(e),
                        s = t.getFullYear(),
                        a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t.getMonth()],
                        l = t.getDate() + 1;
                    return "".concat(a, " ").concat(l, ", ").concat(s)
                },
                l = e => "https://storage.googleapis.com/videogen-assets/website/blog/posts/".concat(e.slug, "/thumbnail.jpg")
        },
        1998: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return l
                }
            });
            var a = s(5893);

            function l(e) {
                let {
                    author: t
                } = e;
                return (0, a.jsxs)("div", {
                    className: "relative flex items-center gap-x-4",
                    children: [(0, a.jsx)("img", {
                        src: t.profilePicUrl,
                        alt: t.name,
                        className: "h-10 w-10 rounded-full bg-gray-50"
                    }), (0, a.jsxs)("div", {
                        className: "text-sm leading-6",
                        children: [(0, a.jsxs)("p", {
                            className: "font-semibold text-gray-900",
                            children: [(0, a.jsx)("span", {
                                className: "absolute inset-0"
                            }), t.name]
                        }), (0, a.jsx)("p", {
                            className: "text-gray-600",
                            children: t.role
                        })]
                    })]
                })
            }
        },
        1390: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = s(5893),
                l = s(1157),
                r = s(6199),
                n = s(9234),
                i = s(1664),
                c = s.n(i);

            function o(e) {
                let {
                    content: t,
                    showLinks: s
                } = e;
                return (0, a.jsx)(l.D, {
                    remarkPlugins: [r.Z],
                    rehypePlugins: [n.Z],
                    className: "markdown mb-6",
                    components: {
                        a: e => {
                            let {
                                href: t,
                                children: l
                            } = e;
                            return s ? (0, a.jsx)(c(), {
                                className: "font-medium text-red-500 hover:text-red-600",
                                href: null != t ? t : "",
                                children: l
                            }) : (0, a.jsx)("span", {
                                children: l
                            })
                        }
                    },
                    children: t
                })
            }
        },
        8697: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: function() {
                    return p
                },
                default: function() {
                    return f
                }
            });
            var a = s(5893),
                l = s(9945),
                r = s(9019),
                n = s(339),
                i = s(1163),
                c = s(7294),
                o = s(1998),
                x = s(1390),
                u = s(8308),
                d = s(6069),
                g = s(1664),
                m = s.n(g);

            function h(e) {
                let {
                    blogPostDataPreviews: t
                } = e, s = (0, i.useRouter)(), l = (0, c.useMemo)(() => Object.values(u.H).includes(s.query.category) ? s.query.category : null, [s.query.category]), r = (0, c.useMemo)(() => t.filter(e => null == l || e.metadata.category === l), [t, l]);
                return (0, a.jsx)("div", {
                    className: "bg-white py-24 sm:py-32",
                    children: (0, a.jsx)("div", {
                        className: "mx-auto max-w-7xl px-6 lg:px-8",
                        children: (0, a.jsxs)("div", {
                            className: "mx-auto max-w-2xl lg:max-w-4xl",
                            children: [(0, a.jsx)("h1", {
                                className: "text-5xl font-bold text-gray-900 tracking-tight",
                                children: "VideoGen Blog"
                            }), (0, a.jsx)("h2", {
                                className: "mt-4 text-xl text-gray-500",
                                children: "Follow along as we build the world's best AI video generator."
                            }), null != l && (0, a.jsxs)("div", {
                                className: "mt-4 flex w-fit gap-2 items-center relative z-10 rounded-full bg-gray-100 pl-3 pr-2.5 py-1.5 text-gray-600 text-xs",
                                children: [l, (0, a.jsx)(m(), {
                                    href: "/blog",
                                    className: "text-gray-400 hover:text-gray-500",
                                    children: (0, a.jsx)("svg", {
                                        viewBox: "0 0 512 512",
                                        fill: "currentColor",
                                        className: "h-[18px] w-[18px]",
                                        children: (0, a.jsx)("path", {
                                            d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
                                        })
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: "mt-16 space-y-20 lg:mt-20 lg:space-y-20",
                                children: r.map(e => {
                                    let {
                                        metadata: t,
                                        descriptionMarkdown: s
                                    } = e;
                                    return (0, a.jsxs)("article", {
                                        className: "relative isolate flex flex-col gap-8 lg:flex-row",
                                        children: [(0, a.jsxs)("a", {
                                            href: "/blog/".concat(t.slug),
                                            className: "relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 hover:opacity-75 transition-opacity",
                                            children: [(0, a.jsx)("img", {
                                                src: (0, d.o)(t),
                                                alt: t.title,
                                                className: "absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                            }), (0, a.jsx)("div", {
                                                className: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            children: [(0, a.jsxs)("div", {
                                                className: "flex items-center gap-x-4 text-xs",
                                                children: [(0, a.jsx)("time", {
                                                    dateTime: t.date,
                                                    suppressHydrationWarning: !0,
                                                    className: "text-gray-500",
                                                    children: (0, d.p)(t.date)
                                                }), (0, a.jsx)("h3", {
                                                    children: (0, a.jsx)("a", {
                                                        href: "/blog?category=".concat(t.category),
                                                        className: "relative z-10 rounded-lg bg-gray-100 px-2 py-1 text-gray-600 hover:bg-gray-200",
                                                        children: t.category
                                                    })
                                                })]
                                            }), (0, a.jsxs)("div", {
                                                className: "group relative max-w-xl",
                                                children: [(0, a.jsx)("h2", {
                                                    className: "mt-3 text-2xl font-semibold text-gray-900 group-hover:underline",
                                                    children: (0, a.jsxs)("a", {
                                                        href: "/blog/".concat(t.slug),
                                                        children: [(0, a.jsx)("span", {
                                                            className: "absolute inset-0"
                                                        }), t.title]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "mt-4 text-base text-gray-500",
                                                    children: (0, a.jsx)(x.Z, {
                                                        content: s,
                                                        showLinks: !1
                                                    })
                                                })]
                                            }), (0, a.jsx)("div", {
                                                className: "mt-4 flex border-t border-gray-200 pt-4",
                                                children: (0, a.jsx)(o.Z, {
                                                    author: t.author
                                                })
                                            })]
                                        })]
                                    }, t.slug)
                                })
                            })]
                        })
                    })
                })
            }
            var p = !0;

            function f(e) {
                let {
                    blogPostDataPreviews: t
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n.Z, {
                        title: "VideoGen - Blog",
                        description: "Explore our journey to develop a revolutionary video generation platform!"
                    }), (0, a.jsx)(l.Z, {}), (0, a.jsx)("div", {
                        className: "mx-auto mt-8",
                        children: (0, a.jsx)(h, {
                            blogPostDataPreviews: t
                        })
                    }), (0, a.jsx)(r.Z, {})]
                })
            }
        }
    },
    function(e) {
        e.O(0, [106, 357, 456, 19, 774, 888, 179], function() {
            return e(e.s = 3986)
        }), _N_E = e.O()
    }
]);
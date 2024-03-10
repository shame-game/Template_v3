"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [452], {
        4866: function(e, s, t) {
            t.d(s, {
                Z: function() {
                    return i
                }
            });
            var a = t(5893),
                l = t(5083),
                r = t(6434);

            function i(e) {
                let {
                    data: s
                } = e, {
                    title: t,
                    description: i,
                    cta: n,
                    customCtaUrl: o
                } = s, x = null != o ? o : l.Dt;
                return (0, a.jsx)("div", {
                    className: "bg-white",
                    children: (0, a.jsx)("div", {
                        className: "mx-auto max-w-7xl pt-16 sm:px-6 sm:pt-24 lg:px-8",
                        children: (0, a.jsxs)("div", {
                            className: "relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16",
                            children: [(0, a.jsx)("h2", {
                                className: "mx-auto max-w-2xl text-5xl font-bold text-white whitespace-pre-wrap",
                                children: t
                            }), i && (0, a.jsx)("p", {
                                className: "mx-auto mt-8 max-w-xl text-lg text-white/80",
                                children: i
                            }), (0, a.jsx)("div", {
                                className: "mt-10 flex items-center justify-center gap-x-6",
                                children: (0, a.jsxs)(r.Z, {
                                    href: x,
                                    className: "rounded-2xl bg-white py-4 px-6 text-lg font-semibold text-gray-900 shadow-sm hover:bg-main-600 hover:text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                                    children: [n, (0, a.jsx)("div", {
                                        className: "ml-2 inline-block",
                                        children: "→"
                                    })]
                                })
                            }), (0, a.jsxs)("svg", {
                                viewBox: "0 0 1024 1024",
                                className: "absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]",
                                "aria-hidden": "true",
                                children: [(0, a.jsx)("circle", {
                                    cx: "512",
                                    cy: "512",
                                    r: "512",
                                    fill: "#E30517",
                                    fillOpacity: "0.7"
                                }), (0, a.jsx)("defs", {
                                    children: (0, a.jsxs)("radialGradient", {
                                        children: [(0, a.jsx)("stop", {
                                            stopColor: "#E30517"
                                        }), (0, a.jsx)("stop", {
                                            offset: "1",
                                            stopColor: "#E30517"
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
        },
        3029: function(e, s, t) {
            t.d(s, {
                Z: function() {
                    return f
                }
            });
            var a = t(5893),
                l = t(7294),
                r = t(4539),
                i = t(8831),
                n = t(5652);
            let o = e => {
                let {
                    modalOpen: s,
                    closeModal: t,
                    children: o
                } = e;
                return (0, a.jsx)(r.u.Root, {
                    show: s,
                    as: l.Fragment,
                    children: (0, a.jsxs)(i.V, {
                        as: "div",
                        className: "relative z-[100]",
                        onClose: t,
                        children: [(0, a.jsx)(r.u.Child, {
                            as: l.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, a.jsx)("div", {
                                className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            })
                        }), (0, a.jsx)("div", {
                            className: "fixed inset-0 z-10 overflow-y-auto",
                            children: (0, a.jsx)("div", {
                                className: "flex min-h-full items-end items-center justify-center p-0 p-4 text-center",
                                children: (0, a.jsx)(r.u.Child, {
                                    as: l.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 translate-y-4 translate-y-0 scale-95",
                                    enterTo: "opacity-100 translate-y-0 scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 translate-y-0 scale-100",
                                    leaveTo: "opacity-0 translate-y-4 translate-y-0 scale-95",
                                    children: (0, a.jsxs)(i.V.Panel, {
                                        className: "relative my-8 w-full mx-8 sm:mx-32 transform overflow-hidden roundex-xl sm:rounded-3xl bg-white p-0 text-left shadow-xl transition-all",
                                        children: [(0, a.jsx)("div", {
                                            className: "absolute right-0 top-0 block hidden pr-4 pt-4",
                                            children: (0, a.jsxs)("button", {
                                                type: "button",
                                                className: "rounded-lg bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0",
                                                onClick: t,
                                                children: [(0, a.jsx)("span", {
                                                    className: "sr-only",
                                                    children: "Close"
                                                }), (0, a.jsx)(n.Z, {
                                                    className: "h-6 w-6",
                                                    "aria-hidden": "true"
                                                })]
                                            })
                                        }), o]
                                    })
                                })
                            })
                        })]
                    })
                })
            };
            var x = t(3913),
                c = t(1442),
                d = t(9645),
                m = t(578),
                h = t(4002),
                u = t(4509),
                p = t(5083),
                g = t(6434);

            function f(e) {
                let {
                    data: s
                } = e, [t, r] = (0, l.useState)(!1), {
                    scrollYProgress: i
                } = (0, d.v)(), n = (0, m.H)(i, [0, .05], [.95, 1.05]), f = (0, m.H)(i, [0, .05], [.5, 1]), v = (0, h.q)(n, {
                    stiffness: 100,
                    damping: 30,
                    restDelta: .001
                }), y = (0, h.q)(f, {
                    stiffness: 100,
                    damping: 30,
                    restDelta: .001
                }), j = () => {
                    r(!0)
                }, {
                    title: w,
                    description: N,
                    cta: b,
                    customCtaUrl: Z,
                    image: k,
                    videoUrl: C
                } = s, E = null != Z ? Z : p.Dt;
                return (0, a.jsxs)("div", {
                    className: "bg-white pt-40",
                    children: [(0, a.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-6 lg:px-8 text-center",
                        children: [(0, a.jsx)("div", {
                            className: "mx-auto max-w-4xl text-center items-center",
                            children: (0, a.jsx)("h1", {
                                className: "text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mx-auto whitespace-pre-wrap",
                                children: w
                            })
                        }), (0, a.jsx)("p", {
                            className: "mx-auto my-6 text-center font-normal text-xl text-gray-500 whitespace-pre-wrap",
                            children: N
                        }), (0, a.jsx)(g.Z, {
                            href: E,
                            className: "inline-flex rounded-2xl bg-main-600 py-4 px-6 text-xl transition-all font-semibold leading-7 text-white shadow-sm ring-1 ring-main-600 hover:bg-main-700 hover:ring-main-700 whitespace-pre-wrap",
                            children: b
                        }), k && (0, a.jsxs)(u.E.div, {
                            className: "mt-20 cursor-pointer group relative bg-gray-900 overflow-hidden rounded-xl sm:rounded-3xl mx-auto border border-1 border-gray-200 transition-colors",
                            style: {
                                scale: v
                            },
                            onClick: () => {
                                C ? j() : window.location.href = E
                            },
                            children: [C && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("button", {
                                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-full",
                                    onClick: j,
                                    children: (0, a.jsx)(c.Z, {
                                        className: "w-20 h-20 text-white opacity-100 group-hover:w-24 group-hover:h-24 transition-all"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 h-14 w-14 group-hover:w-18 group-hover:h-18 transition-all bg-gray-900 rounded-full group-hover:bg-main-600 shadow-xl"
                                })]
                            }), (0, a.jsx)(u.E.img, {
                                src: k.url,
                                alt: k.description,
                                style: {
                                    opacity: y
                                }
                            }), (0, a.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-10"
                            })]
                        })]
                    }), (0, a.jsx)(o, {
                        modalOpen: t,
                        closeModal: () => r(!1),
                        children: (0, a.jsx)("div", {
                            className: "w-full aspect-w-16 aspect-h-9",
                            children: (0, a.jsx)(x.Z, {
                                videoId: "oe1BKd0ePJI",
                                opts: {
                                    height: "100%",
                                    width: "100%",
                                    playerVars: {
                                        autoplay: 0
                                    }
                                },
                                onEnd: () => r(!1),
                                className: "w-full h-full"
                            })
                        })
                    })]
                })
            }
        },
        74: function(e, s, t) {
            var a = t(5893),
                l = t(7857),
                r = t(6893),
                i = t(7294),
                n = t(5022);
            let o = [{
                    name: "Faster than our top 5 competitors",
                    value: 2500,
                    suffix: "%"
                }, {
                    name: "Happy users",
                    value: 200,
                    suffix: "K+"
                }, {
                    name: "Increased conversions from video",
                    value: 80,
                    suffix: "%"
                }],
                x = e => {
                    let {
                        data: s = o
                    } = e, t = (0, i.useRef)(null), x = (0, r.Y)(t), [c, d] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        x && !c && d(!0)
                    }, [x, c]), (0, a.jsx)("div", {
                        className: "bg-white pt-12 sm:pt-12",
                        id: "stats",
                        children: (0, a.jsxs)("div", {
                            className: "mx-auto max-w-7xl py-12 px-6 lg:px-8 bg-gray-50 rounded-3xl",
                            children: [(0, a.jsx)("div", {
                                ref: t
                            }), (0, a.jsx)("dl", {
                                className: (0, n.A)("grid grid-cols-1 gap-x-8 gap-y-16 text-center", 3 === s.length ? "lg:grid-cols-3" : "", 2 === s.length ? "md:grid-cols-2" : ""),
                                children: s.map((e, s) => (0, a.jsxs)("div", {
                                    className: "mx-auto flex max-w-xs flex-col gap-y-4",
                                    children: [(0, a.jsx)("dt", {
                                        className: "text-base leading-7 text-gray-500",
                                        children: e.name
                                    }), (0, a.jsxs)("dd", {
                                        className: "order-first text-6xl font-extrabold text-gray-900",
                                        children: [e.prefix, (0, a.jsx)(l.ZP, {
                                            end: c ? e.value : 0,
                                            duration: 3
                                        }), e.suffix]
                                    })]
                                }, s))
                            })]
                        })
                    })
                };
            s.Z = x
        },
        2234: function(e, s, t) {
            t.d(s, {
                Z: function() {
                    return r
                }
            });
            var a = t(5893),
                l = t(9227);

            function r(e) {
                let {
                    data: s
                } = e, t = s[0];
                return (0, a.jsx)("section", {
                    className: "relative isolate overflow-hidden bg-white px-6 py-16 my-16 sm:my-24 sm:py-24 lg:px-8 bg-gray-50",
                    children: (0, a.jsxs)("div", {
                        className: "mx-auto max-w-2xl lg:max-w-4xl text-center items-center",
                        children: [(0, a.jsx)("p", {
                            className: "sr-only",
                            children: "5 out of 5 stars"
                        }), (0, a.jsxs)("div", {
                            className: "inline-flex gap-x-1 text-yellow-400 mx-auto",
                            children: [(0, a.jsx)(l.Z, {
                                className: "h-5 w-5 flex-none",
                                "aria-hidden": "true"
                            }), (0, a.jsx)(l.Z, {
                                className: "h-5 w-5 flex-none",
                                "aria-hidden": "true"
                            }), (0, a.jsx)(l.Z, {
                                className: "h-5 w-5 flex-none",
                                "aria-hidden": "true"
                            }), (0, a.jsx)(l.Z, {
                                className: "h-5 w-5 flex-none",
                                "aria-hidden": "true"
                            }), (0, a.jsx)(l.Z, {
                                className: "h-5 w-5 flex-none",
                                "aria-hidden": "true"
                            })]
                        }), (0, a.jsxs)("figure", {
                            className: "mt-10",
                            children: [(0, a.jsx)("blockquote", {
                                className: "text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9",
                                children: (0, a.jsxs)("p", {
                                    className: "whitespace-pre-wrap",
                                    children: ["“", t.quote, "”"]
                                })
                            }), (0, a.jsxs)("figcaption", {
                                className: "mt-10",
                                children: [(0, a.jsx)("img", {
                                    className: "mx-auto h-10 w-10 rounded-full",
                                    src: t.image.url,
                                    alt: t.image.description
                                }), (0, a.jsxs)("div", {
                                    className: "mt-4 flex items-center justify-center space-x-3 text-base",
                                    children: [(0, a.jsx)("div", {
                                        className: "font-semibold text-gray-700",
                                        children: t.name
                                    }), (0, a.jsx)("svg", {
                                        viewBox: "0 0 2 2",
                                        width: 3,
                                        height: 3,
                                        "aria-hidden": "true",
                                        className: "fill-gray-900",
                                        children: (0, a.jsx)("circle", {
                                            cx: 1,
                                            cy: 1,
                                            r: 1
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "text-gray-600",
                                        children: t.title
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        6186: function(e, s, t) {
            var a = t(5893),
                l = t(4509),
                r = t(5022),
                i = t(5083);
            let n = e => {
                let {
                    data: s
                } = e;
                return (0, a.jsx)("div", {
                    className: "relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8",
                    children: (0, a.jsx)("div", {
                        className: "mx-auto py-8",
                        children: (0, a.jsx)("dl", {
                            className: (0, r.A)("grid max-w-xl grid-cols-1 gap-x-6 gap-y-16 lg:max-w-none", s.length < 3 ? "lg:grid-cols-2" : "", s.length > 4 ? "lg:grid-cols-4" : "", 3 === s.length ? "lg:grid-cols-3" : ""),
                            children: s.map((e, s) => {
                                var t;
                                let r = null !== (t = e.customCtaUrl) && void 0 !== t ? t : i.Dt,
                                    {
                                        title: n,
                                        description: o,
                                        cta: x
                                    } = e;
                                return (0, a.jsxs)(l.E.a, {
                                    href: r,
                                    initial: "hidden",
                                    whileInView: "visible",
                                    variants: {
                                        visible: {
                                            opacity: 1,
                                            y: 20
                                        },
                                        hidden: {
                                            opacity: 0,
                                            y: 0
                                        }
                                    },
                                    transition: {
                                        duration: .5,
                                        delay: .1 * s
                                    },
                                    className: "group flex flex-col px-6 py-8 bg-white border-1 border border-gray-100 hover:border-gray-200 hover:bg-gray-50 cursor-pointer rounded-3xl transition-colors",
                                    children: [(0, a.jsx)("dt", {
                                        className: "flex items-center gap-x-3 text-xl font-medium text-gray-900",
                                        children: n
                                    }), (0, a.jsxs)("dd", {
                                        className: "mt-6 flex flex-auto flex-col text-lg text-gray-500",
                                        children: [(0, a.jsx)("p", {
                                            className: "flex-auto font-normal",
                                            children: o
                                        }), (0, a.jsx)("p", {
                                            className: "mt-6",
                                            children: (0, a.jsxs)("span", {
                                                className: "text-xl font-semibold leading-6 text-main-600",
                                                children: [x, (0, a.jsx)("span", {
                                                    className: "inline-flex transition-all -ml-2 opacity-0 group-hover:ml-2 group-hover:opacity-100",
                                                    children: "→"
                                                })]
                                            })
                                        })]
                                    })]
                                }, s)
                            })
                        })
                    })
                })
            };
            s.Z = n
        }
    }
]);
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521], {
        9212: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
                return t(8188)
            }])
        },
        4866: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return r
                }
            });
            var a = t(5893),
                i = t(5083),
                l = t(6434);

            function r(e) {
                let {
                    data: s
                } = e, {
                    title: t,
                    description: r,
                    cta: n,
                    customCtaUrl: d
                } = s, o = null != d ? d : i.Dt;
                return (0, a.jsx)("div", {
                    className: "bg-white",
                    children: (0, a.jsx)("div", {
                        className: "mx-auto max-w-7xl pt-16 sm:px-6 sm:pt-24 lg:px-8",
                        children: (0, a.jsxs)("div", {
                            className: "relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16",
                            children: [(0, a.jsx)("h2", {
                                className: "mx-auto max-w-2xl text-5xl font-bold text-white whitespace-pre-wrap",
                                children: t
                            }), r && (0, a.jsx)("p", {
                                className: "mx-auto mt-8 max-w-xl text-lg text-white/80",
                                children: r
                            }), (0, a.jsx)("div", {
                                className: "mt-10 flex items-center justify-center gap-x-6",
                                children: (0, a.jsxs)(l.Z, {
                                    href: o,
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
        74: function(e, s, t) {
            "use strict";
            var a = t(5893),
                i = t(7857),
                l = t(6893),
                r = t(7294),
                n = t(5022);
            let d = [{
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
                o = e => {
                    let {
                        data: s = d
                    } = e, t = (0, r.useRef)(null), o = (0, l.Y)(t), [c, x] = (0, r.useState)(!1);
                    return (0, r.useEffect)(() => {
                        o && !c && x(!0)
                    }, [o, c]), (0, a.jsx)("div", {
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
                                        children: [e.prefix, (0, a.jsx)(i.ZP, {
                                            end: c ? e.value : 0,
                                            duration: 3
                                        }), e.suffix]
                                    })]
                                }, s))
                            })]
                        })
                    })
                };
            s.Z = o
        },
        8188: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return y
                }
            });
            var a = t(5893),
                i = t(9945),
                l = t(9019),
                r = t(339),
                n = t(7524),
                d = t(1664),
                o = t.n(d);

            function c() {
                return (0, a.jsx)("div", {
                    className: "bg-white border-b border-gray-100",
                    children: (0, a.jsxs)("div", {
                        className: "relative",
                        children: [(0, a.jsx)("div", {
                            className: "mx-auto max-w-7xl",
                            children: (0, a.jsxs)("div", {
                                className: "relative z-10 -mt-20 lg:w-full lg:max-w-2xl",
                                children: [(0, a.jsx)("svg", {
                                    className: "absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block",
                                    viewBox: "0 0 100 100",
                                    preserveAspectRatio: "none",
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)("polygon", {
                                        points: "0,0 90,0 50,100 0,100"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0",
                                    children: (0, a.jsxs)("div", {
                                        className: "mx-auto max-w-2xl lg:mx-0 lg:max-w-xl",
                                        children: [(0, a.jsx)("div", {
                                            className: "flex",
                                            children: (0, a.jsxs)("div", {
                                                className: "mb-6 relative items-center hidden sm:flex gap-x-3 rounded-xl px-3 py-1.5 text-base text-gray-600 ring-1 ring-gray-200 hover:ring-gray-300 hover:bg-gray-100 bg-white transition-colors",
                                                children: [(0, a.jsx)("span", {
                                                    className: "font-medium text-gray-900",
                                                    children: "We're partnering with creators, leaders, and educators"
                                                }), (0, a.jsx)("span", {
                                                    className: "h-4 w-px bg-gray-200",
                                                    "aria-hidden": "true"
                                                }), (0, a.jsxs)(o(), {
                                                    href: "/partners",
                                                    className: "flex text-main-600 font-semibold items-center gap-x-1",
                                                    children: [(0, a.jsx)("span", {
                                                        className: "absolute inset-0",
                                                        "aria-hidden": "true"
                                                    }), "Learn more", (0, a.jsx)(n.Z, {
                                                        className: "-mr-1 h-5 w-5 text-main-600",
                                                        "aria-hidden": "true"
                                                    })]
                                                })]
                                            })
                                        }), (0, a.jsxs)("h1", {
                                            className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl",
                                            children: ["Video creation is ", (0, a.jsx)("span", {
                                                className: "underline",
                                                children: "hard"
                                            }), ".", (0, a.jsx)("br", {}), "We're making it easy."]
                                        }), (0, a.jsx)("p", {
                                            className: "mt-6 text-xl text-gray-500",
                                            children: "We're a small, dedicated team that is laser focused on building the world's fastest and easiest way to create videos."
                                        }), (0, a.jsx)("div", {
                                            className: "mt-8 flex items-center gap-x-6",
                                            children: (0, a.jsxs)("a", {
                                                href: "#stats",
                                                className: "text-lg inline-flex items-center justify-center space-x-2 font-semibold leading-6 text-gray-900 hover:text-gray-500 transition-colors",
                                                children: [(0, a.jsx)("span", {
                                                    children: "Learn more"
                                                }), (0, a.jsx)("span", {
                                                    "aria-hidden": "true",
                                                    children: "→"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",
                            children: (0, a.jsx)("img", {
                                className: "aspect-[3/2] w-full object-cover lg:aspect-auto lg:h-full",
                                src: "https://storage.googleapis.com/videogen-assets/website/team-working.jpg",
                                alt: ""
                            })
                        })]
                    })
                })
            }
            var x = t(2708),
                m = t(9844),
                h = t(1526),
                g = t(4509);

            function u() {
                let {
                    ref: e,
                    inView: s
                } = (0, x.YD)({
                    triggerOnce: !0
                });
                return (0, a.jsx)("div", {
                    id: "stats",
                    children: (0, a.jsx)("div", {
                        ref: e,
                        className: "mx-auto max-w-7xl px-6 lg:px-8 py-56",
                        children: (0, a.jsx)(h.M, {
                            children: s && (0, a.jsx)(g.E.div, {
                                initial: "hidden",
                                animate: s ? "visible" : "hidden",
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        y: -20
                                    },
                                    hidden: {
                                        opacity: 0,
                                        y: 0
                                    }
                                },
                                transition: {
                                    duration: .5,
                                    delay: .1
                                },
                                className: "mx-auto max-w-2xl h-48 sm:h-40",
                                children: (0, a.jsx)(m.e, {
                                    cursor: !0,
                                    sequence: ["Our mission is to democratize video creation using Artificial Intelligence (AI) as video becomes the dominant form of communication."],
                                    wrapper: "h2",
                                    className: "text-4xl font-normal text-gray-900",
                                    speed: 70
                                })
                            })
                        })
                    })
                })
            }
            let p = [{
                name: "Anton Koenig",
                role: "Co-founder",
                imageUrl: "https://storage.googleapis.com/videogen-assets/anton.jpg",
                linkedinUrl: "https://www.linkedin.com/in/antonckoenig/"
            }, {
                name: "David Grossman",
                role: "Co-founder",
                imageUrl: "https://storage.googleapis.com/videogen-assets/david.jpg",
                linkedinUrl: "https://www.linkedin.com/in/dg314/"
            }];

            function f() {
                return (0, a.jsx)("div", {
                    className: "bg-gray-50 border-t border-gray-100 py-24",
                    children: (0, a.jsxs)("div", {
                        className: "mx-auto max-w-7xl px-6 text-center lg:px-8",
                        children: [(0, a.jsxs)("div", {
                            className: "mx-auto max-w-2xl",
                            children: [(0, a.jsx)("h2", {
                                className: "font-bold tracking-tight text-gray-900 text-5xl",
                                children: "Meet the founders"
                            }), (0, a.jsx)("p", {
                                className: "mt-4 text-xl text-gray-500",
                                children: "We believe that making video should be easy for everyone. That's why we're building the world's best AI video generator."
                            })]
                        }), (0, a.jsx)("ul", {
                            role: "list",
                            className: "mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2",
                            children: p.map(e => (0, a.jsxs)("li", {
                                children: [(0, a.jsx)("img", {
                                    className: "mx-auto h-56 w-56 rounded-full",
                                    src: e.imageUrl,
                                    alt: ""
                                }), (0, a.jsx)("h3", {
                                    className: "mt-6 text-lg font-semibold text-gray-900",
                                    children: e.name
                                }), (0, a.jsx)("p", {
                                    className: "text-base text-gray-500",
                                    children: e.role
                                }), (0, a.jsx)("ul", {
                                    role: "list",
                                    className: "mt-4 flex justify-center gap-x-6",
                                    children: (0, a.jsx)("li", {
                                        children: (0, a.jsxs)("a", {
                                            href: e.linkedinUrl,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-gray-400 hover:text-gray-500",
                                            children: [(0, a.jsx)("span", {
                                                className: "sr-only",
                                                children: "LinkedIn"
                                            }), (0, a.jsx)("svg", {
                                                className: "h-5 w-5",
                                                "aria-hidden": "true",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: (0, a.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    d: "M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z",
                                                    clipRule: "evenodd"
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }, e.name))
                        })]
                    })
                })
            }
            var v = t(4866),
                j = t(74);
            let w = {
                title: "Want to get involved?",
                cta: "Get in touch",
                customCtaUrl: "/contact"
            };

            function b() {
                return (0, a.jsxs)("div", {
                    className: "mb-24",
                    children: [(0, a.jsx)(c, {}), (0, a.jsx)(j.Z, {}), (0, a.jsx)(u, {}), (0, a.jsx)(f, {}), (0, a.jsx)("div", {
                        className: "",
                        children: (0, a.jsx)(v.Z, {
                            data: w
                        })
                    })]
                })
            }

            function y() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.Z, {
                        title: "VideoGen - About",
                        description: "Founded in December 2022 by computer science students, VideoGen aims to democratize video creation. We recognize the power of video to captivate, inform, and inspire but understand that creating high-quality videos can be challenging and time-consuming."
                    }), (0, a.jsx)(i.Z, {}), (0, a.jsx)("div", {
                        className: "mx-auto mt-20",
                        children: (0, a.jsx)(b, {})
                    }), (0, a.jsx)(l.Z, {})]
                })
            }
        }
    },
    function(e) {
        e.O(0, [106, 210, 68, 456, 19, 774, 888, 179], function() {
            return e(e.s = 9212)
        }), _N_E = e.O()
    }
]);
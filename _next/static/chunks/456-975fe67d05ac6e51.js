"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [456], {
        339: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return c
                }
            });
            var o = i(5893),
                n = i(9008),
                a = i.n(n),
                r = i(1163),
                s = i(9881);

            function c(e) {
                let {
                    title: t,
                    description: i,
                    thumbnail: n,
                    canonicalUrl: c
                } = e, l = (0, r.useRouter)(), d = l.asPath.split("?")[0];
                c = null != c ? c : "https://videogen.io".concat(d);
                let u = null != n ? n : s.gz;
                return (0, o.jsxs)(a(), {
                    children: [(0, o.jsx)("link", {
                        rel: "canonical",
                        href: c
                    }), (0, o.jsx)("title", {
                        children: t
                    }), (0, o.jsx)("meta", {
                        name: "description",
                        content: i
                    }), (0, o.jsx)("meta", {
                        name: "keywords",
                        content: "VideoGen, Video Creation, AI Video Generator, Automated Video, AI Content Creation, Video Marketing"
                    }), (0, o.jsx)("meta", {
                        property: "og:title",
                        content: t
                    }), (0, o.jsx)("meta", {
                        property: "og:description",
                        content: i
                    }), (0, o.jsx)("meta", {
                        property: "og:image",
                        content: u
                    }), (0, o.jsx)("meta", {
                        property: "og:url",
                        content: c
                    }), (0, o.jsx)("meta", {
                        property: "og:site_name",
                        content: "VideoGen"
                    }), (0, o.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, o.jsx)("meta", {
                        property: "twitter:title",
                        content: t
                    }), (0, o.jsx)("meta", {
                        property: "twitter:description",
                        content: i
                    }), (0, o.jsx)("meta", {
                        property: "twitter:image",
                        content: u
                    }), (0, o.jsx)("meta", {
                        name: "robots",
                        content: "index, follow"
                    }), (0, o.jsx)("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }), (0, o.jsx)("script", {
                        dangerouslySetInnerHTML: {
                            __html: "\n          !function(e){if(!window.pintrk){window.pintrk = function () {\n          window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var\n          n=window.pintrk;n.queue=[],n.version=\"3.0\";var\n          t=document.createElement(\"script\");t.async=!0,t.src=e;var\n          r=document.getElementsByTagName(\"script\")[0];\n          r.parentNode.insertBefore(t,r)}}(\"https://s.pinimg.com/ct/core.js\");\n          pintrk('load', '2613537093260', {em: '<user_email_address>'});\n          pintrk('page');\n        "
                        }
                    }), (0, o.jsx)("noscript", {
                        children: (0, o.jsx)("img", {
                            height: "1",
                            width: "1",
                            style: {
                                display: "none"
                            },
                            alt: "Pinterest",
                            src: "https://ct.pinterest.com/v3/?event=init&tid=2613537093260&pd[em]=<hashed_email_address>&noscript=1"
                        })
                    })]
                }, "main")
            }
        },
        9945: function(e, t, i) {
            i.d(t, {
                r: function() {
                    return G
                }
            });
            var o = i(5893),
                n = i(7294),
                a = i(6215),
                r = i(4539),
                s = i(8831),
                c = i(6512),
                l = i(9111),
                d = i(6247),
                u = i(2291),
                g = i(3407),
                m = i(1415),
                f = i(7219),
                p = i(6586),
                h = i(6601),
                v = i(7349),
                y = i(5022),
                b = i(1664),
                w = i.n(b),
                k = i(1715),
                I = i(5675),
                A = i.n(I),
                x = i(9881),
                T = i(5083),
                D = i(6434);
            let G = [{
                    name: "Video Generators",
                    pages: [...x.rP.VIDEO_GENERATORS],
                    icon: l.Z
                }, {
                    name: "AI Features",
                    pages: [...x.rP.AI_FEATURES],
                    icon: d.Z
                }, {
                    name: "AI Tools",
                    pages: [...x.rP.AI_TOOLS],
                    icon: u.Z
                }],
                C = () => {
                    let e = [{
                            name: "Sign up",
                            href: T.Dt,
                            icon: f.Z
                        }, {
                            name: "Log in",
                            href: T.O0,
                            icon: p.Z
                        }, {
                            name: "Contact support",
                            href: "/contact",
                            icon: h.Z
                        }],
                        t = {
                            text: (0, o.jsxs)(o.Fragment, {
                                children: ["Join now", " ", (0, o.jsx)("span", {
                                    className: "opacity-80 font-normal",
                                    children: "\xa0-\xa0It's free"
                                })]
                            }),
                            url: T.Dt
                        },
                        [i, l] = (0, n.useState)(!1);
                    return (0, o.jsxs)("div", {
                        className: "bg-white fixed top-0 left-0 w-full z-50 border-1 border-b border-gray-100",
                        children: [(0, o.jsxs)("nav", {
                            className: "mx-auto flex max-w-7xl items-center justify-between py-3 px-6 lg:px-8 space-x-12",
                            "aria-label": "Global",
                            children: [(0, o.jsx)("div", {
                                className: "flex",
                                children: (0, o.jsxs)(w(), {
                                    href: "/",
                                    children: [(0, o.jsx)("span", {
                                        className: "sr-only",
                                        children: "VideoGen"
                                    }), (0, o.jsxs)("span", {
                                        className: "inline-flex items-center h-full text-xl font-bold text-gray-800",
                                        children: [(0, o.jsx)(A(), {
                                            src: "https://storage.googleapis.com/videogen-assets/logos/logo-red.svg",
                                            width: "32",
                                            height: "32",
                                            alt: "",
                                            className: "f-l"
                                        }), (0, o.jsx)("span", {
                                            className: "ml-2",
                                            children: "VideoGen"
                                        })]
                                    })]
                                })
                            }), (0, o.jsx)("div", {
                                className: "flex lg:hidden",
                                children: (0, o.jsxs)("button", {
                                    type: "button",
                                    className: "-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700",
                                    onClick: () => l(!0),
                                    children: [(0, o.jsx)("span", {
                                        className: "sr-only",
                                        children: "Open main menu"
                                    }), (0, o.jsx)(g.Z, {
                                        className: "h-6 w-6",
                                        "aria-hidden": "true"
                                    })]
                                })
                            }), (0, o.jsxs)(a.J.Group, {
                                className: "hidden lg:flex lg:gap-x-10",
                                children: [(0, o.jsx)(a.J, {
                                    children: t => {
                                        let {
                                            open: i
                                        } = t;
                                        return (0, o.jsxs)(o.Fragment, {
                                            children: [(0, o.jsxs)(a.J.Button, {
                                                className: "flex items-center gap-x-1 text-base font-medium leading-6 text-gray-900 transition-colors px-4 py-2 -mx-4 -my-2 hover:bg-gray-100 rounded-xl ring-0 outline-none",
                                                children: ["Tools", (0, o.jsx)(v.Z, {
                                                    className: (0, y.A)(i ? "rotate-180" : "", "h-5 w-5 flex-none transition-all ease-in-out duration-300"),
                                                    "aria-hidden": "true"
                                                })]
                                            }), (0, o.jsx)(r.u, {
                                                as: n.Fragment,
                                                enter: "transition ease-out duration-200",
                                                enterFrom: "opacity-0 -translate-y-1",
                                                enterTo: "opacity-100 translate-y-0",
                                                leave: "transition ease-in duration-150",
                                                leaveFrom: "opacity-100 translate-y-0",
                                                leaveTo: "opacity-0 -translate-y-1",
                                                children: (0, o.jsxs)(a.J.Panel, {
                                                    className: "absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5",
                                                    children: [(0, o.jsx)("div", {
                                                        className: "mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8",
                                                        children: G.map(e => (0, o.jsxs)("div", {
                                                            className: "space-y-2",
                                                            children: [(0, o.jsxs)("div", {
                                                                className: "group relative border-b pb-4 mb-4 border-gray-200 text-base leading-6s",
                                                                children: [(0, o.jsx)("div", {
                                                                    className: "flex h-11 w-11 items-center justify-center rounded-lg bg-gray-100",
                                                                    children: (0, o.jsx)(e.icon, {
                                                                        className: "h-6 w-6 text-gray-600",
                                                                        "aria-hidden": "true"
                                                                    })
                                                                }), (0, o.jsxs)("span", {
                                                                    className: "mt-4 block text-lg font-medium text-gray-900",
                                                                    children: [e.name, (0, o.jsx)("span", {
                                                                        className: "absolute inset-0"
                                                                    })]
                                                                })]
                                                            }), e.pages && e.pages.map(e => (0, o.jsxs)(w(), {
                                                                href: e.ctaUrl,
                                                                className: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-100 transition-colors",
                                                                children: [e.cta, (0, o.jsx)("div", {
                                                                    className: "text-sm font-normal text-gray-500",
                                                                    children: e.description
                                                                })]
                                                            }, e.cta))]
                                                        }, e.name))
                                                    }), (0, o.jsx)("div", {
                                                        className: "bg-gray-50",
                                                        children: (0, o.jsx)("div", {
                                                            className: "mx-auto max-w-7xl px-6 lg:px-8",
                                                            children: (0, o.jsx)("div", {
                                                                className: "grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5",
                                                                children: e.map(e => (0, o.jsxs)(D.Z, {
                                                                    href: e.href,
                                                                    className: "flex items-center justify-center gap-x-2.5 p-3 text-base font-medium leading-6 text-gray-900 hover:bg-gray-100 transition-colors",
                                                                    children: [(0, o.jsx)(e.icon, {
                                                                        className: "h-5 w-5 flex-none text-gray-400",
                                                                        "aria-hidden": "true"
                                                                    }), e.name]
                                                                }, e.name))
                                                            })
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    }
                                }), (0, o.jsx)(w(), {
                                    href: "/about",
                                    className: "text-base font-medium leading-6 text-gray-900 transition-colors px-4 py-2 -mx-4 -my-2 hover:bg-gray-100 rounded-xl",
                                    children: "About"
                                }), (0, o.jsx)(w(), {
                                    href: "/blog",
                                    className: "text-base font-medium leading-6 text-gray-900 transition-colors px-4 py-2 -mx-4 -my-2 hover:bg-gray-100 rounded-xl",
                                    children: "Blog"
                                }), (0, o.jsx)(w(), {
                                    href: "/contact",
                                    className: "text-base font-medium leading-6 text-gray-900 transition-colors px-4 py-2 -mx-4 -my-2 hover:bg-gray-100 rounded-xl",
                                    children: "Contact"
                                }), (0, o.jsx)(w(), {
                                    href: "/pricing",
                                    className: "text-base font-medium leading-6 text-gray-900 transition-colors px-4 py-2 -mx-4 -my-2 hover:bg-gray-100 rounded-xl",
                                    children: "Pricing"
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "hidden lg:flex lg:flex-1 lg:justify-end items-center gap-x-6",
                                children: [(0, o.jsx)(D.Z, {
                                    href: T.O0,
                                    className: "text-base font-medium leading-6 text-gray-900 transition-colors inline-flex px-4 py-2 -mx-4 hover:bg-gray-100 rounded-xl border border-1 border-gray-200",
                                    children: "Log in"
                                }), (0, o.jsx)(D.Z, {
                                    onClick: () => {
                                        (0, k.Y)("click_sign_up", "click_sign_up")
                                    },
                                    href: t.url,
                                    className: "inline-flex items-center justify-center rounded-xl border border-transparent bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-700 transition-all",
                                    children: t.text
                                })]
                            })]
                        }), (0, o.jsxs)(s.V, {
                            as: "div",
                            className: "lg:hidden",
                            open: i,
                            onClose: l,
                            children: [(0, o.jsx)("div", {
                                className: "fixed inset-0 z-50"
                            }), (0, o.jsxs)(s.V.Panel, {
                                className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10",
                                children: [(0, o.jsxs)("div", {
                                    className: "flex items-center justify-between",
                                    children: [(0, o.jsxs)(w(), {
                                        href: "/",
                                        children: [(0, o.jsx)("span", {
                                            className: "sr-only",
                                            children: "VideoGen"
                                        }), (0, o.jsxs)("span", {
                                            className: "inline-flex items-center h-full text-xl font-bold text-gray-800",
                                            children: [(0, o.jsx)(A(), {
                                                src: "https://storage.googleapis.com/videogen-assets/logos/logo-red.svg",
                                                width: "32",
                                                height: "32",
                                                alt: "",
                                                className: "f-l"
                                            }), (0, o.jsx)("span", {
                                                className: "ml-2",
                                                children: "VideoGen"
                                            })]
                                        })]
                                    }), (0, o.jsxs)("button", {
                                        type: "button",
                                        className: "-m-2.5 rounded-lg p-2.5 text-gray-700",
                                        onClick: () => l(!1),
                                        children: [(0, o.jsx)("span", {
                                            className: "sr-only",
                                            children: "Close menu"
                                        }), (0, o.jsx)(m.Z, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true"
                                        })]
                                    })]
                                }), (0, o.jsx)("div", {
                                    className: "mt-6 flow-root",
                                    children: (0, o.jsxs)("div", {
                                        className: "-my-6 divide-y divide-gray-500/10",
                                        children: [(0, o.jsxs)("div", {
                                            className: "space-y-2 py-6",
                                            children: [(0, o.jsx)(c.p, {
                                                as: "div",
                                                className: "-mx-3",
                                                children: t => {
                                                    let {
                                                        open: i
                                                    } = t;
                                                    return (0, o.jsxs)(o.Fragment, {
                                                        children: [(0, o.jsxs)(c.p.Button, {
                                                            className: "flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 text-gray-900 hover:bg-gray-100 transition-colors",
                                                            children: ["AI Tools", (0, o.jsx)(v.Z, {
                                                                className: (0, y.A)(i ? "rotate-180" : "", "h-5 w-5 flex-none transition-all ease-in-out duration-300"),
                                                                "aria-hidden": "true"
                                                            })]
                                                        }), (0, o.jsxs)(c.p.Panel, {
                                                            className: "mt-2 space-y-2",
                                                            children: [
                                                                [...G].map(e => (0, o.jsx)(o.Fragment, {
                                                                    children: e.pages && e.pages.map(e => (0, o.jsx)(c.p.Button, {
                                                                        as: "a",
                                                                        href: e.ctaUrl,
                                                                        className: "block rounded-lg py-2 pl-6 pr-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-100 transition-colors",
                                                                        children: e.cta
                                                                    }, e.cta))
                                                                })), [...e].map(e => (0, o.jsx)(c.p.Button, {
                                                                    as: "a",
                                                                    href: e.href,
                                                                    className: "block rounded-lg py-2 pl-6 pr-3 text-base font-medium leading-7 text-gray-900 hover:bg-gray-100 transition-colors",
                                                                    children: e.name
                                                                }, e.name))
                                                            ]
                                                        })]
                                                    })
                                                }
                                            }), (0, o.jsx)(w(), {
                                                href: "/about",
                                                className: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-100 transition-colors",
                                                children: "About"
                                            }), (0, o.jsx)(w(), {
                                                href: "/blog",
                                                className: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-100 transition-colors",
                                                children: "Blog"
                                            }), (0, o.jsx)(w(), {
                                                href: "/contact",
                                                className: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-100 transition-colors",
                                                children: "Contact"
                                            }), (0, o.jsx)(w(), {
                                                href: "/pricing",
                                                className: "-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-gray-900 hover:bg-gray-100 transition-colors",
                                                children: "Pricing"
                                            })]
                                        }), (0, o.jsxs)("div", {
                                            className: "py-6 space-y-2",
                                            children: [(0, o.jsx)(w(), {
                                                onClick: () => {
                                                    (0, k.Y)("click_sign_up", "click_sign_up")
                                                },
                                                href: t.url,
                                                className: "inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-gray-900 px-4 py-2 text-base font-medium text-white shadow-sm border border-1 border-gray-900 hover:border-gray-700 hover:bg-gray-700 transition-all",
                                                children: t.text
                                            }), (0, o.jsx)(w(), {
                                                href: "/blog",
                                                className: "block rounded-xl px-3 py-2 text-base text-center font-medium leading-7 text-gray-900 hover:bg-gray-100 transition-colors border border-1 border-gray-200",
                                                children: "Log in"
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                };
            t.Z = C
        },
        6434: function(e, t, i) {
            i.d(t, {
                Z: function() {
                    return s
                }
            });
            var o = i(5893),
                n = i(1664),
                a = i.n(n),
                r = i(5083);

            function s(e) {
                let {
                    href: t,
                    ...i
                } = e, n = (0, r.yh)(t.toString());
                return (0, o.jsx)(a(), {
                    href: n,
                    ...i
                })
            }
        },
        1715: function(e, t, i) {
            i.d(t, {
                Y: function() {
                    return n
                }
            });
            var o = i(9089);
            let n = (e, t, i, n) => {
                o.ZP.event({
                    category: e,
                    action: t,
                    label: i,
                    value: n
                })
            }
        },
        5022: function(e, t, i) {
            i.d(t, {
                A: function() {
                    return o
                }
            });
            let o = function() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                return t.filter(Boolean).join(" ")
            }
        },
        5083: function(e, t, i) {
            i.d(t, {
                FX: function() {
                    return r
                },
                O0: function() {
                    return s
                },
                Dt: function() {
                    return c
                },
                li: function() {
                    return l
                },
                yh: function() {
                    return d
                }
            });
            var o = i(9332);
            let n = (e, t) => {
                    let i = Object.entries(t).flatMap(e => {
                        let [t, i] = e;
                        return null == i ? [] : ["".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(i))]
                    });
                    return 0 === i.length ? e : "".concat(e).concat(e.includes("?") ? "&" : "?").concat(i.join("&"))
                },
                a = "https://app.videogen.io",
                r = a,
                s = "".concat(r, "/signin"),
                c = "".concat(r, "/signup"),
                l = "".concat(r, "?upgrade=true"),
                d = e => {
                    let t = (0, o.usePathname)(),
                        i = {
                            internalReferrerPath: null != t ? t : void 0
                        };
                    for (let s of ["http://localhost:3000", a])
                        if (e.startsWith(s)) return n(e.replace(s, r), i);
                    return e
                }
        },
        9881: function(e, t, i) {
            i.d(t, {
                I6: function() {
                    return n
                },
                cM: function() {
                    return l
                },
                gz: function() {
                    return a
                },
                rP: function() {
                    return c
                }
            });
            let o = {
                    startCreatingItsFree: "Start creating free  →"
                },
                n = "https://www.youtube.com/watch?v=oe1BKd0ePJI",
                a = "https://storage.googleapis.com/videogen-assets/website/videogen-cover.jpg",
                r = {
                    socialMedia: [{
                        name: "Sunny K",
                        title: "Influencer & CEO of OHKO Marketing",
                        quote: "VideoGen is a big deal for content creators. It's the easiest way to create YouTube Shorts, TikToks and Instagram Reels–bar none.",
                        image: {
                            description: "Portrait of Sunny K, an avid video creator",
                            url: "https://storage.googleapis.com/videogen-assets/website/sunnyk.jpeg"
                        }
                    }],
                    marketing: [{
                        name: "Sunny K",
                        title: "Influencer & CEO of OHKO Marketing",
                        quote: "VideoGen has been a lifesaver, shaving countless hours off our workflow and helping us scale video marketing.",
                        image: {
                            description: "Portrait of Sunny K, an avid video creator",
                            url: "https://storage.googleapis.com/videogen-assets/website/sunnyk.jpeg"
                        }
                    }]
                },
                s = {
                    subtitles: "https://storage.googleapis.com/videogen-assets/website/subtitles.jpg",
                    generate: "https://storage.googleapis.com/videogen-assets/website/generate.jpg",
                    languages: "https://storage.googleapis.com/videogen-assets/website/languages.jpg",
                    socials: "https://storage.googleapis.com/videogen-assets/website/socials.jpg",
                    translate: "https://storage.googleapis.com/videogen-assets/website/translate.jpg",
                    edits: "https://storage.googleapis.com/videogen-assets/website/edits.jpg",
                    images: "https://storage.googleapis.com/videogen-assets/website/images.jpg",
                    assistant: "https://storage.googleapis.com/videogen-assets/website/assistant.jpg",
                    articles: "https://storage.googleapis.com/videogen-assets/website/articles.jpg"
                },
                c = {
                    VIDEO_GENERATORS: [{
                        cta: "AI Video Generator",
                        description: "Generate videos with AI",
                        ctaUrl: "/ai-video-generator"
                    }, {
                        cta: "TikTok Video Generator",
                        description: "Generate TikTok videos with AI",
                        ctaUrl: "/online-tiktok-video-generator"
                    }, {
                        cta: "Instagram Reels Generator",
                        description: "Generate Instagram Reels with AI",
                        ctaUrl: "/online-instagram-reels-generator"
                    }, {
                        cta: "Facebook Reels Generator",
                        description: "Generate Facebook Reels with AI",
                        ctaUrl: "/online-facebook-reels-generator"
                    }, {
                        cta: "YouTube Shorts Generator",
                        description: "Generate YouTube Shorts with AI",
                        ctaUrl: "/online-youtube-shorts-generator"
                    }],
                    AI_FEATURES: [{
                        cta: "Text to Video",
                        description: "Generate videos from text with AI",
                        ctaUrl: "/text-to-video-generator"
                    }, {
                        cta: "Blog to Video",
                        description: "Generate videos from blogs with AI",
                        ctaUrl: "/blog-to-video-generator"
                    }, {
                        cta: "Website to Video",
                        description: "Generate videos from websites with AI",
                        ctaUrl: "/website-to-video-generator"
                    }, {
                        cta: "Article to Video",
                        description: "Generate videos from articles with AI",
                        ctaUrl: "/article-to-video-generator"
                    }],
                    AI_TOOLS: [{
                        cta: "AI Image Generator",
                        description: "Generate unique images with AI",
                        ctaUrl: "/ai-image-generator"
                    }, {
                        cta: "Video Subtitle Generator",
                        description: "Generate video subtitles with AI",
                        ctaUrl: "/video-subtitle-generator"
                    }, {
                        cta: "Video Caption Generator",
                        description: "Generate video captions with AI",
                        ctaUrl: "/video-caption-generator"
                    }, {
                        cta: "Video Ad Generator",
                        description: "Generate video ads with AI",
                        ctaUrl: "/video-ad-generator"
                    }]
                },
                l = [{
                    slug: "online-youtube-shorts-generator",
                    isPublic: !0,
                    head: {
                        title: "YouTube Shorts generator | Generate YouTube Shorts in seconds with AI",
                        description: "The world's easiest online YouTube Shorts generator. Create YouTube Shorts in seconds with AI. No video editing skills required."
                    },
                    hero: {
                        title: "YouTube Shorts Generator",
                        description: "Create YouTube Shorts in seconds with AI. No video editing skills required.",
                        cta: o.startCreatingItsFree,
                        image: {
                            description: "How to generate YouTube Shorts with Artificial Intelligence",
                            url: "".concat(a, "?generate-youtube-shorts-with-artificial-intelligence")
                        },
                        videoUrl: "".concat(n, "&how-to-generate-youtube-shorts-with-artificial-intelligence")
                    },
                    textBlocks: [{
                        title: "Create captivating YouTube shorts",
                        description: "Utilize our AI-driven platform to transform your ideas into captivating YouTube Shorts. Ideal for quick, attention-grabbing content that resonates with viewers on the go.",
                        cta: "Generate Shorts effortlessly"
                    }, {
                        title: "Effortless online video creation",
                        description: "Our online tool simplifies the process of creating YouTube Shorts. Inject creativity and flair into your videos without the hassle of traditional video editing.",
                        cta: "Simplify your creation process"
                    }, {
                        title: "Elevate your YouTube presence",
                        description: "Harness the power of AI to produce engaging YouTube Shorts that stand out. Perfect for influencers, marketers, and creatives seeking to boost their online presence.",
                        cta: "Amplify your digital footprint"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "Generate YouTube Shorts instantly",
                        description: "VideoGen completely automates the long, tedious process of video editing with AI. Create YouTube Shorts at scale and supercharge your channel's growth.\n\n⏳️	Save 25-100x more hours creating videos\n\n\uD83D\uDCAC	Auto add subtitles for 80% more views",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate subtitles or captions for YouTube Shorts",
                            url: "".concat(s.subtitles, "?generate-subtitles-for-youtube-shorts")
                        }
                    }, {
                        title: "Stay faceless with automatic b-roll",
                        description: "Showing your face on camera can be intimidating and time-consuming. VideoGen helps you make videos without ever showing your face by automatically compiling b-roll in the background of your videos.\n\n✅	3M+ Copyright-free Assets\n\n\uD83D\uDCB8	Safe for Commercial Use",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate background footage / b-roll for YouTube Shorts",
                            url: "".concat(s.generate, "?generate-background-footage")
                        }
                    }, {
                        title: "Stay voiceless with AI voices",
                        description: "Generate natural-sounding voices for your YouTube videos with the world's most advanced text-to-speech engine. Find a voice that uniquely fits your channel. \n\n\uD83C\uDF0E	40+ Languages & Accents\n\n\uD83D\uDDE3️	150+ Unique Voices",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate realistic AI text-to-speech for YouTube Shorts",
                            url: "".concat(s.languages, "?generate-realistic-ai-text-to-speech-for-youtube-shorts")
                        }
                    }],
                    testimonials: r.socialMedia,
                    cta: {
                        title: "Stop editing YouTube Shorts.\nJust click generate.",
                        cta: "Generate a free video"
                    },
                    faqs: [{
                        question: "What is an Online YouTube Shorts Generator?",
                        answer: "An Online YouTube Shorts Generator is a web-based platform that allows users to create YouTube Shorts quickly and easily. These tools typically use AI to automate the video creation process, making it simple for users to produce engaging and high-quality shorts without needing advanced video editing skills."
                    }, {
                        question: "How does an AI YouTube Shorts Generator work?",
                        answer: "AI YouTube Shorts Generators use artificial intelligence to automate the video creation process. This includes selecting relevant b-roll footage, adding music, generating captions, and even synthesizing voiceovers. This technology helps creators save time and produce content more efficiently, especially for platforms like YouTube."
                    }, {
                        question: "Can I use VideoGen to create YouTube Shorts without any video editing experience?",
                        answer: "Absolutely! VideoGen is designed to be user-friendly and requires no video editing skills. Our AI-powered platform does the heavy lifting, allowing you to create professional-looking YouTube Shorts quickly and easily."
                    }, {
                        question: "Are the videos created with VideoGen safe for commercial use?",
                        answer: "Yes, videos created with VideoGen are safe for commercial use. We offer a vast library of over 3 million copyright-free assets, ensuring that your content is not only high quality but also legally compliant for commercial purposes."
                    }, {
                        question: "Can VideoGen also be used to create landscape videos?",
                        answer: "Yes, VideoGen is versatile and can be used to create landscape videos as well. Our platform is not just limited to vertical formats. You can produce videos in various formats and sizes, making it suitable for a wide range of platforms, including traditional YouTube."
                    }],
                    resources: c.VIDEO_GENERATORS
                }, {
                    slug: "online-tiktok-video-generator",
                    isPublic: !0,
                    head: {
                        title: "TikTok video generator | Generate TikTok videos in seconds with AI",
                        description: "The world's easiest online TikTok video generator. Create TikTok videos in seconds with AI. No video editing skills required."
                    },
                    hero: {
                        title: "TikTok Video Generator",
                        description: "Create TikTok videos in seconds with AI. No video editing skills required.",
                        cta: o.startCreatingItsFree,
                        image: {
                            description: "How to generate TikTok videos with Artificial Intelligence",
                            url: "".concat(a, "?generate-tiktok-videos-with-artificial-intelligence")
                        },
                        videoUrl: "".concat(n, "&how-to-generate-tiktok-videos-with-artificial-intelligence")
                    },
                    textBlocks: [{
                        title: "Instant TikTok mastery",
                        description: "Generate TikTok videos in a flash using AI. No need for editing skills - create viral content effortlessly and engage with your audience like never before.",
                        cta: "Create viral TikToks now"
                    }, {
                        title: "AI-powered TikTok generation",
                        description: "Our AI technology empowers you to craft captivating TikTok videos instantly. Perfect for creators and marketers aiming to make an impact without the editing complexity.",
                        cta: "Harness AI for TikToks"
                    }, {
                        title: "Engage and entertain on TikTok",
                        description: "Easily convert your ideas into entertaining TikTok content. Our platform handles the heavy lifting, letting you focus on creativity and engagement.",
                        cta: "Elevate your TikTok game"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "Generate TikTok videos instantly",
                        description: "Automate the video creation process for TikTok with our advanced AI. Save countless hours and effortlessly produce engaging TikTok videos.\n\n⏳️	Save 25-100x more hours creating videos\n\n\uD83D\uDCAC	Auto-generate trendy TikTok content",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate subtitles or captions for TikTok videos",
                            url: "".concat(s.subtitles, "?generate-subtitles-for-tiktok-videos")
                        }
                    }, {
                        title: "Go viral on TikTok 100% faceless",
                        description: "Feel camera shy? No worries. Our AI compiles eye-catching b-roll to create viral TikTok videos without needing you on camera.\n\n✅	3M+ Copyright-free Assets\n\n\uD83D\uDCB8	Craft unique and engaging content",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate background footage / b-roll for TikTok videos",
                            url: "".concat(s.generate, "?generate-background-footage")
                        }
                    }, {
                        title: "Bring TikToks to life with AI voices",
                        description: "Add compelling voiceovers to your TikTok videos. Choose from a diverse range of languages and voices to perfectly match your content's tone.\n\n\uD83C\uDF0E	40+ Languages & Accents\n\n\uD83D\uDDE3️	150+ Unique Voices",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate realistic AI text-to-speech for TikTok videos",
                            url: "".concat(s.languages, "?generate-realistic-ai-text-to-speech-for-tiktok-videos")
                        }
                    }],
                    testimonials: r.socialMedia,
                    cta: {
                        title: "Boost your TikTok presence.\nStart creating now.",
                        cta: "Generate a free video"
                    },
                    faqs: [{
                        question: "What is a TikTok Video Generator?",
                        answer: "A TikTok Video Generator is an online tool designed to help users create TikTok videos effortlessly. Leveraging AI, it simplifies the video production process, allowing creators to generate engaging and viral-ready content without needing advanced video editing skills."
                    }, {
                        question: "How does AI enhance TikTok video creation?",
                        answer: "AI enhances TikTok video creation by automating various aspects like selecting appropriate clips, adding music, and creating dynamic edits. This technology saves time and enables creators to focus more on content ideas rather than the technicalities of video editing."
                    }, {
                        question: "Is the TikTok Video Generator suitable for beginners?",
                        answer: "Absolutely! Our TikTok Video Generator is designed for ease of use, making it ideal for beginners. With no need for prior video editing experience, anyone can start creating eye-catching TikTok content in minutes."
                    }, {
                        question: "Are videos made with the TikTok Video Generator free to use commercially?",
                        answer: "Yes, videos created with our TikTok Video Generator are safe for commercial use. We provide a large selection of copyright-free assets, ensuring your videos are not only creative but also legally compliant for business use."
                    }, {
                        question: "Can I create videos in different formats with this tool?",
                        answer: "Definitely! Our AI tools are versatile enough to create videos in various formats and sizes, suitable for a range of social media platforms: From YouTube long-form to Instagram Reels to TikToks."
                    }],
                    resources: c.VIDEO_GENERATORS
                }, {
                    slug: "online-instagram-reels-generator",
                    isPublic: !0,
                    head: {
                        title: "Instagram Reels Generator | Generate Instagram Reels with AI in seconds",
                        description: "Discover the simplest way to generate Instagram Reels online. Create captivating Reels in a flash with AI. No editing expertise needed."
                    },
                    hero: {
                        title: "Instagram Reels Generator",
                        description: "Craft Instagram Reels effortlessly using AI. No complex editing required.",
                        cta: o.startCreatingItsFree,
                        image: {
                            description: "A quick guide to generating Instagram Reels with Artificial Intelligence",
                            url: "".concat(a, "?generate-instagram-reels-with-artificial-intelligence")
                        },
                        videoUrl: "".concat(n, "&how-to-generate-instagram-reels-with-artificial-intelligence")
                    },
                    textBlocks: [{
                        title: "Effortless Instagram Reels",
                        description: "Create stunning Instagram Reels with ease using our AI-driven tool. No complex editing skills required, just your creativity and our technology.",
                        cta: "Start creating Reels"
                    }, {
                        title: "Transform your Instagram strategy",
                        description: "Leverage AI to quickly produce eye-catching Instagram Reels. Ideal for influencers, businesses, and creatives aiming to enhance their social media impact.",
                        cta: "Boost your Instagram presence"
                    }, {
                        title: "Seamless Reels creation",
                        description: "Turn your ideas into engaging Instagram Reels in seconds. Our user-friendly platform simplifies video creation, making it accessible for everyone.",
                        cta: "Make captivating Reels now"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "Generate Instagram Reels in seconds",
                        description: "Streamline your Instagram Reels production with our cutting-edge AI. Save hours and create captivating content with ease.\n\n⏳️	Speed up Reels creation by 25-100x\n\n\uD83D\uDCAC	Automatically generate trending Instagram content",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate subtitles or captions for Instagram Reels",
                            url: "".concat(s.subtitles, "?generate-subtitles-for-instagram-reels")
                        }
                    }, {
                        title: "Generate engaging Reels anonymously",
                        description: "Not comfortable on camera? No problem. Our AI crafts stunning b-roll footage for Instagram Reels that don't require your on-camera presence.\n\n✅	Access over 3M Copyright-free Assets\n\n\uD83D\uDCB8	Create unique, captivating content effortlessly",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate background footage / b-roll for Instagram Reels",
                            url: "".concat(s.generate, "?generate-background-footage-for-instagram-reels")
                        }
                    }, {
                        title: "Narrate your Reels with AI voices",
                        description: "Elevate your Instagram Reels with engaging voiceovers. Choose from a wide array of languages and voices to suit your content's mood.\n\n\uD83C\uDF0E	Over 40 Languages & Accents\n\n\uD83D\uDDE3️	150+ Distinct Voices",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate realistic AI text-to-speech for Instagram Reels",
                            url: "".concat(s.languages, "?generate-realistic-ai-text-to-speech-for-instagram-reels")
                        }
                    }],
                    testimonials: r.socialMedia,
                    cta: {
                        title: "Elevate your Instagram game.\nStart creating now.",
                        cta: "Generate a free Reel"
                    },
                    faqs: [{
                        question: "What is an Instagram Reels Generator?",
                        answer: "An Instagram Reels Generator is an online tool that simplifies the process of creating Instagram Reels. Utilizing AI, it allows creators to quickly produce engaging and trendy content, bypassing the need for advanced video editing skills."
                    }, {
                        question: "How does AI improve the process of creating Instagram Reels?",
                        answer: "AI streamlines the creation of Instagram Reels by handling tasks such as selecting clips, adding music, and creating dynamic edits. This not only saves time but also lets creators concentrate on crafting creative content ideas."
                    }, {
                        question: "Is this tool beginner-friendly for creating Instagram Reels?",
                        answer: "Definitely! Our Instagram Reels Generator is crafted for user-friendliness, making it perfect for beginners. Anyone can start making visually striking Instagram content in no time, without prior video editing experience."
                    }, {
                        question: "Can I use Reels made with this generator for commercial purposes?",
                        answer: "Yes, the Reels created with our tool are fully cleared for commercial use. We offer an extensive library of copyright-free assets to ensure that your content is not only innovative but also legally compliant for business applications."
                    }, {
                        question: "Does the tool support different video formats?",
                        answer: "Certainly! Our AI tool is versatile enough to create videos in various formats, catering to different social media platforms, including Instagram Reels, YouTube long-form videos, and even TikToks."
                    }],
                    resources: c.VIDEO_GENERATORS
                }, {
                    slug: "online-facebook-reels-generator",
                    isPublic: !0,
                    head: {
                        title: "Facebook Reels Generator | Generate Facebook Reels with AI in seconds",
                        description: "The #1 easiest way to generate Facebook Reels online. Create engaging Reels in a few seconds with AI. No editing expertise needed."
                    },
                    hero: {
                        title: "Facebook Reels Generator",
                        description: "Generate Facebook Reels in seconds with VideoGen, the #1 AI video generator.",
                        cta: o.startCreatingItsFree,
                        image: {
                            description: "A quick guide to generating Facebook Reels with Artificial Intelligence",
                            url: "".concat(a, "?generate-facebook-reels-with-artificial-intelligence")
                        },
                        videoUrl: "".concat(n, "&how-to-generate-facebook-reels-with-artificial-intelligence")
                    },
                    textBlocks: [{
                        title: "Revolutionize Facebook Reels",
                        description: "Effortlessly create dynamic Facebook Reels using our AI technology. Perfect for engaging with your audience without needing extensive video editing skills.",
                        cta: "Create impactful Reels"
                    }, {
                        title: "AI-enhanced Facebook content",
                        description: "Easily produce captivating Facebook Reels with our intuitive, AI-powered platform. Ideal for businesses and creators looking to amplify their social media reach.",
                        cta: "Elevate your Facebook game"
                    }, {
                        title: "Engaging Reels in a snap",
                        description: "Transform your creative ideas into engaging Facebook Reels quickly and effortlessly. Our platform streamlines the video creation process, making it accessible to all.",
                        cta: "Generate Reels effortlessly"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "Generate Facebook Reels in seconds",
                        description: "Welcome to the fastest way to create content for Facebook on the planet and start growing your audience, business, and dreams.\n\n⏳️	Create Reels 25-100x faster than any other platform\n\n\uD83D\uDCAC	Automatically generate subtitles for 80% more views",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate subtitles or captions for Facebook Reels",
                            url: "".concat(s.subtitles, "?generate-subtitles-for-facebook-reels")
                        }
                    }, {
                        title: "Create 100% anonymously",
                        description: "Not comfortable with a camera and microphone? No problem. Our AI finds and compiles b-roll footage for Facebook Reels that keep your video engaging and don't require your on-camera presence.\n\n✅	3M+ Royalty-free Assets\n\n\uD83D\uDCB8	Safe for Commercial Use",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate background footage / b-roll for Facebook Reels",
                            url: "".concat(s.generate, "?generate-background-footage-for-facebook-reels")
                        }
                    }, {
                        title: "Add AI voices to your Facebook Reels",
                        description: "Add lifelike text-to-speech to your Facebook Reels. Reach a wider, global audience with multiple languages.\n\n\uD83C\uDF0E	40+ Languages & Accents\n\n\uD83D\uDDE3️	150+ Distinct Voices\n\n\uD83D\uDC64	Remain Anonymous",
                        cta: "Start creating  →",
                        image: {
                            description: "Generate realistic AI text-to-speech for Facebook Reels",
                            url: "".concat(s.languages, "?generate-realistic-ai-text-to-speech-for-facebook-reels")
                        }
                    }],
                    testimonials: r.socialMedia,
                    cta: {
                        title: "Stop wasting time editing.\nCreate for Facebook now.",
                        cta: "Generate a free video"
                    },
                    faqs: [{
                        question: "What makes the AI-powered Online Facebook Reels Generator unique?",
                        answer: "Our AI-driven Online Facebook Reels Generator stands out by offering a seamless way to craft eye-catching reels. It blends advanced technology with user-friendly design, enabling you to enhance your social media effortlessly."
                    }, {
                        question: "Can I quickly create custom reels with this online tool?",
                        answer: "Yes, effortlessly create custom reels with our tool. Its intuitive design guides you through selecting AI-generated themes and personalizing content, making reel creation quick and enjoyable."
                    }, {
                        question: "Do reels made with this AI tool meet Facebook's standards?",
                        answer: "Absolutely. The reels you create are tailored to align perfectly with Facebook’s standards, thanks to our AI's understanding of platform-specific guidelines."
                    }, {
                        question: "How does the generator enable brand personalization in reels?",
                        answer: "Our generator is equipped with AI that adapts to your brand's style. It suggests themes and edits that resonate with your brand identity, ensuring each reel distinctly represents you or your brand."
                    }, {
                        question: "Is the online generator user-friendly for all skill levels?",
                        answer: "Definitely. Our Online Facebook Reels Generator is designed for accessibility. Its AI-driven interface simplifies the creative process, making it suitable for users of all skill levels."
                    }],
                    resources: c.VIDEO_GENERATORS
                }, {
                    slug: "ai-video-generator",
                    isPublic: !0,
                    head: {
                        title: "AI Video Generator | Create Stunning Videos Instantly with AI",
                        description: "Experience the future of video creation with our AI Video Generator. Transform ideas into captivating videos in seconds. No expertise needed."
                    },
                    hero: {
                        title: "AI Video Generator",
                        description: "Generate videos in seconds. Ideal for content creators, marketers, and businesses.",
                        cta: o.startCreatingItsFree,
                        image: {
                            description: "Discover the revolution in video creation with AI technology",
                            url: "".concat(a, "?ai-video-generator-screenshot")
                        },
                        videoUrl: "".concat(n, "&how-to-use-the-best-ai-video-generator")
                    },
                    textBlocks: [{
                        title: "Hyperscale on social media",
                        description: "Elevate your presence on YouTube, TikTok, and Instagram Reels with our AI video generator. Create captivating content without being on camera, using your voice, or spending hours editing.",
                        cta: "Amplify your reach"
                    }, {
                        title: "Accelerate business sales & growth",
                        description: "With one of the highest ROI channels, content marketing is vital. VideoGen's AI video generator empowers everyone from solo-preneurs to Fortune 500 companies to rapidly scale video production.",
                        cta: "Expand your business"
                    }, {
                        title: "Broadcast your message globally",
                        description: "Ideal for nonprofits and educators, our AI video generator transforms any text into engaging videos. Overcome educational barriers, reach audiences worldwide, and magnify your impact.",
                        cta: "Broadcast your vision"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "Generate videos in seconds with AI",
                        description: "Leverage AI to transform simple ideas into professional-quality videos. Save significant time and resources, and easily bring your vision to life.\n\n\uD83D\uDE80	Create more with less\n\n\uD83E\uDDE0	Leverage the world's smartest AI",
                        cta: "Start creating  →",
                        image: {
                            description: "See AI in action: From concept to creation",
                            url: "".concat(s.generate, "?generate-videos-with-ai-video-generator")
                        }
                    }, {
                        title: "An AI assistant by your side",
                        description: "Our AI assistant guides you through the video creation process, offering suggestions and tips to help you craft the perfect video and get more views.\n\n\uD83D\uDCDD	Generate engaging video scripts\n\n\uD83D\uDCA1	Generate creative ideas",
                        cta: "Start creating  →",
                        image: {
                            description: "Get creative ideas and suggestions with AI",
                            url: "".concat(s.assistant, "?generate-creative-ideas-and-suggestions-with-ai-video-generator")
                        }
                    }, {
                        title: "Add edits in a flash",
                        description: "Customize videos in an easy to use online video editor. Make cuts, upload music, generate subtitles and more.\n\n⌨️	Move fast with keyboard shortcuts\n\n⏰	Save time & money",
                        cta: "Start creating  →",
                        image: {
                            description: "Personalize your videos with AI-driven customization",
                            url: "".concat(s.edits, "?personalize-your-videos-with-ai-driven-customization")
                        }
                    }, {
                        title: "Generate multilingual text-to-speech",
                        description: "Connect with global audiences using our AI's multilingual capabilities. From voiceovers to subtitles, we cover a vast range of languages and dialects.\n\n\uD83C\uDF10	Multiple Languages & Dialects\n\n\uD83D\uDDE3️	Diverse AI Voices",
                        cta: "Start creating  →",
                        image: {
                            description: "Broaden your audience with AI-powered multilingual support",
                            url: "".concat(s.languages, "?broaden-your-audience-with-ai-powered-multilingual-support")
                        }
                    }],
                    testimonials: r.socialMedia,
                    cta: {
                        title: "Stop wasting hours editing.\nJust use AI.",
                        cta: "Generate a free video"
                    },
                    faqs: [{
                        question: "What sets the AI Video Generator apart?",
                        answer: "Our AI Video Generator stands at the forefront of video creation technology. It simplifies complex editing processes, making professional video production accessible to everyone, regardless of skill level."
                    }, {
                        question: "How does AI streamline video creation?",
                        answer: "AI streamlines video creation by automating editing, selecting suitable clips, and suggesting creative enhancements, significantly reducing the time and effort required to produce high-quality videos."
                    }, {
                        question: "Is this tool suitable for beginners?",
                        answer: "Absolutely! Our AI Video Generator is designed for simplicity and ease of use, making it perfect for beginners while offering advanced features for professional content creators."
                    }, {
                        question: "Can I use videos for commercial purposes?",
                        answer: "Yes, videos created with our AI Video Generator are fully licensed for commercial use. We provide extensive royalty-free assets to ensure your creations are both innovative and legally compliant."
                    }, {
                        question: "How long does it take to create a video?",
                        answer: "Our AI Video Generator can create videos in a matter of seconds. The time required depends on the video's length and complexity, but it's significantly faster than traditional video editing."
                    }, {
                        question: "Can I create videos in different formats?",
                        answer: "Yes, our AI Video Generator is versatile enough to create videos in various formats and sizes, suitable for a range of social media platforms, including YouTube, TikTok, and Instagram Reels."
                    }, {
                        question: "How much does it cost to use the AI Video Generator?",
                        answer: "We offer a free plan that allows you try VideoGen before you upgrade. For more advanced features and unlimited video creation, we offer paid plans."
                    }],
                    resources: c.VIDEO_GENERATORS
                }, {
                    slug: "text-to-video-generator",
                    isPublic: !0,
                    head: {
                        title: "Text to Video Generator | Convert Text Into Videos Instantly",
                        description: "Turn your written content into stunning videos effortlessly with our Text to Video Generator. Ideal for quick, engaging video production."
                    },
                    hero: {
                        title: "Text to Video Generator",
                        description: "Transform text into dynamic videos instantly. Perfect for bloggers, marketers, and educators.",
                        cta: o.startCreatingItsFree,
                        image: {
                            description: "Experience the magic of converting text to captivating videos",
                            url: "".concat(a, "?text-to-video-generator-screenshot")
                        },
                        videoUrl: "".concat(n, "&how-to-use-the-best-text-to-video-generator")
                    },
                    textBlocks: [{
                        title: "Dominate social media platforms",
                        description: "Boost your social media game. Convert blog posts, articles, or any text to engaging videos for YouTube, TikTok, and Instagram Reels effortlessly.",
                        cta: "Enhance social engagement"
                    }, {
                        title: "Fuel your marketing strategy",
                        description: "Leverage text-to-video technology to quickly create compelling video content for your marketing campaigns, enhancing brand visibility and engagement.",
                        cta: "Elevate marketing efforts"
                    }, {
                        title: "Educate and inform with ease",
                        description: "Ideal for educators and information disseminators, effortlessly convert educational text into informative and engaging video content.",
                        cta: "Transform education"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "The #1 text to video generator",
                        description: "Just input your text and watch as our AI transforms it into a visually stunning video. Save time and get visually appealing results instantly.\n\n\uD83C\uDFA5	Create videos in a flash\n\n\uD83D\uDCA1	Leverage the power of AI",
                        cta: "Start creating  →",
                        image: {
                            description: "AI converting text into engaging videos effortlessly",
                            url: "".concat(s.generate, "?generate-videos-with-text-to-video-generator")
                        }
                    }, {
                        title: "Write anything. Ask anything.",
                        description: "Our AI Assistant, trained on most of the internet, helps refine your text into a video-ready script. It can generate ideas, write scripts, offer suggestions, and answer just about any question.\n\n\uD83D\uDCDD	Optimize scripts for engaging videos\n\n\uD83D\uDE80	Grow your reach with video\n\n⏰	Create more videos in less time",
                        cta: "Try AI assistant  →",
                        image: {
                            description: "AI generating text for impactful video scripts",
                            url: "".concat(s.assistant, "?generate-text-for-impactful-video-scripts")
                        }
                    }, {
                        title: "Leverage multilingual AI voices",
                        description: "Reach a global audience with our multilingual text-to-video feature. From scripts to subtitles, cater to diverse linguistic preferences.\n\n\uD83C\uDF0D	Embrace global diversity\n\n\uD83D\uDDE3	Offer multiple language options",
                        cta: "Start creating  →",
                        image: {
                            description: "Expand your reach with multilingual video creation",
                            url: "".concat(s.languages, "?expand-your-reach-with-multilingual-video-creation")
                        }
                    }, {
                        title: "Convert blogs & websites to videos",
                        description: "VideoGen isn't just text to video. It's article to video, blog to video, product to video... you name it! Convert your blog posts and website content into videos with our AI. Simply input the URL and watch as our AI transforms it into a video in a few seconds.\n\n\uD83D\uDCF0	Convert blogs and articles into videos\n\n\uD83C\uDF10	Convert any website into a video",
                        cta: "Start creating  →",
                        image: {
                            description: "AI converting blogs into videos in seconds",
                            url: "".concat(s.articles, "?convert-blogs-into-videos-in-seconds")
                        }
                    }],
                    testimonials: r.marketing,
                    cta: {
                        title: "Convert text to video instantly.\nStart creating now.",
                        cta: "Generate a free video"
                    },
                    faqs: [{
                        question: "Why Opt for Our Text to Video Generator?",
                        answer: "Our Text to Video Generator is a top choice for converting text to video, ensuring quick and efficient transformation of written content into visually compelling videos. It's an invaluable tool for creators at every level, optimizing the 'convert text to video' process."
                    }, {
                        question: "How Effective is the Convert Text to Video Feature?",
                        answer: "The 'convert text to video' feature streamlines video production. It takes your text and uses AI to craft videos, selecting appropriate visuals, music, making the text-to-video conversion seamless."
                    }, {
                        question: "Who Benefits Most from the Text to Video Generator?",
                        answer: "Our Text to Video Generator is perfect for anyone aiming to transform articles, blog posts, or any text into engaging videos. It's an ideal solution for both beginners and professional marketers to efficiently convert text to video."
                    }, {
                        question: "Can Videos Created by the Text to Video Generator Be Used Commercially?",
                        answer: "Yes, videos produced with our Text to Video Generator are fully licensed for commercial use. This feature ensures a wide selection of royalty-free visuals and audio tracks, enhancing the text-to-video conversion for commercial purposes."
                    }, {
                        question: "What's the Turnaround Time for the Convert Text to Video Process?",
                        answer: "Our Text to Video Generator works at lightning speed, converting text into videos in mere seconds. Additional editing to perfect the video can be done quickly, showcasing the efficiency of the text-to-video conversion."
                    }, {
                        question: "Does the Text to Video Generator Support Various Formats?",
                        answer: "Absolutely! Our generator excels in creating videos in multiple formats, catering to a variety of social media platforms and digital requirements. This versatility is a key feature of our 'convert text to video' tool."
                    }, {
                        question: "What Are the Costs of Using the Text to Video Generator?",
                        answer: "We provide a free version for basic text-to-video needs. For accessing more advanced features and unlimited video creation, our paid plans make 'converting text to video' accessible for various budgets."
                    }],
                    resources: c.AI_FEATURES
                }, {
                    slug: "blog-to-video-generator",
                    isPublic: !0,
                    head: {
                        title: "Blog to Video Generator | Effortlessly Transform Blog Content into Videos",
                        description: "Elevate your blog posts to the next level by converting them into captivating videos with our Blog to Video Generator. Ideal for enhancing blog engagement through video."
                    },
                    hero: {
                        title: "Blog to Video Generator",
                        description: "Convert blogs to videos in seconds. Perfect for bloggers, marketers, entrepenuers and storytellers.",
                        cta: o.startCreatingItsFree,
                        image: {
                            description: "Revolutionize your blog with the art of video storytelling",
                            url: "".concat(a, "?blog-to-video-generator-screenshot")
                        },
                        videoUrl: "".concat(n, "&how-to-use-the-best-blog-to-video-generator")
                    },
                    textBlocks: [{
                        title: "Elevate your blog with videos",
                        description: "Transform your written blog posts into visually engaging videos. Ideal for amplifying your content on YouTube, TikTok, and Instagram, enhancing your blog's reach and impact.",
                        cta: "Boost your blog's presence"
                    }, {
                        title: "Empower your content marketing",
                        description: "Use our blog to video technology to quickly generate impactful videos for your content marketing strategies. Increase engagement and captivate your audience like never before.",
                        cta: "Strengthen your strategy"
                    }, {
                        title: "Tell stories that resonate",
                        description: "Turn your blogs into storytelling videos that resonate with your audience. Perfect for narrating your content in an engaging, visual format that educates and entertains.",
                        cta: "Narrate with video"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "Generate videos from blogs instantly",
                        description: "Just paste your blog's URL and watch our AI work its magic, transforming your written words into compelling videos in moments. Experience the convenience of automated video creation.\n\n\uD83D\uDCF9	Rapid video creation from blogs\n\n\uD83E\uDDE0	Harness the power of AI",
                        cta: "Start converting  →",
                        image: {
                            description: "Experience swift conversion of blogs to engaging videos",
                            url: "".concat(s.articles, "?convert-blog-to-video-generator")
                        }
                    }, {
                        title: "Perfect your script with AI",
                        description: "Our AI Assistant helps refine your blog content into a perfect video script, generating ideas, writing scripts, offering suggestions, and answering queries to optimize your blog-to-video journey.\n\n✍️	Tailor-made scripts for videos\n\n\uD83C\uDF1F	Enhance your blog's reach\n\n⏲️	Create more videos, save time",
                        cta: "Try AI assistant  →",
                        image: {
                            description: "AI perfecting blog content for impactful video scripts",
                            url: "".concat(s.assistant, "?perfecting-blog-content-for-impactful-video-scripts")
                        }
                    }, {
                        title: "Add edits in a breeze",
                        description: "Customize videos in an easy to use online video editor. Make cuts, upload music, generate subtitles and more with VideoGen's suite of AI video generation tools.\n\n⌨️	Move fast with keyboard shortcuts",
                        cta: "Start converting  →",
                        image: {
                            description: "Personalize your videos with AI-driven customization",
                            url: "".concat(s.edits, "?blog-to-video-editor-online")
                        }
                    }, {
                        title: "Reach globally with multilingual AI text-to-speech",
                        description: "Our blog to video generator supports multiple languages, allowing your content to reach a wider, global audience. From scripts to subtitles, cater to diverse language preferences.\n\n\uD83C\uDF0F	Broaden your audience\n\n\uD83D\uDDE3️	Multiple language options available",
                        cta: "Start converting  →",
                        image: {
                            description: "Broaden your reach with multilingual blog-to-video creation",
                            url: "".concat(s.languages, "?generate-videos-from-blogs-in-multiple-languages")
                        }
                    }],
                    testimonials: r.socialMedia,
                    cta: {
                        title: "Convert blogs to videos in just a few seconds.",
                        cta: "Convert a blog to a video"
                    },
                    faqs: [{
                        question: "Why Choose Our Blog to Video Generator?",
                        answer: "Our Blog to Video Generator is the ultimate tool for converting blog posts into engaging videos, making the process fast and efficient. It's a valuable asset for bloggers and digital marketers, streamlining the 'blog to video' conversion."
                    }, {
                        question: "How Quick and Effective is the Blog to Video Conversion?",
                        answer: "Our 'blog to video' feature is designed for speed and efficiency. It swiftly transforms your blog content into high-quality videos, incorporating suitable visuals and music, making the conversion process seamless and effective."
                    }, {
                        question: "Who Benefits Most from the Blog to Video Generator?",
                        answer: "Our Blog to Video Generator is ideal for bloggers, content creators, and marketers looking to convert their written content into dynamic videos. It's a perfect tool for anyone wanting to enhance their digital presence through video."
                    }, {
                        question: "Can I Use Videos Created by the Blog to Video Generator for Commercial Purposes?",
                        answer: "Absolutely! Videos created with our Blog to Video Generator are fully licensed for commercial use. With an array of royalty-free visuals and audio tracks, the tool is perfect for commercial text-to-video conversions."
                    }, {
                        question: "What is the Turnaround Time for Blog to Video Conversion?",
                        answer: "Our Blog to Video Generator operates rapidly, converting blog content into videos within seconds. This quick turnaround allows for additional editing and customization, enhancing the efficiency and effectiveness of the conversion."
                    }, {
                        question: "Does the Blog to Video Generator Support Different Video Formats?",
                        answer: "Yes! Our generator is versatile, creating videos in various formats suitable for different social media platforms and digital needs. This flexibility is a cornerstone of our 'blog to video' tool."
                    }, {
                        question: "What Are the Costs for Using the Blog to Video Generator?",
                        answer: "We offer a free version for basic blog-to-video conversion needs. For more advanced features and unlimited video creation, our paid plans help make 'blog to video' accessible for various budgets."
                    }],
                    resources: c.AI_FEATURES
                }, {
                    slug: "article-to-video-generator",
                    isPublic: !0,
                    head: {
                        title: "Article to Video Generator | Transform Articles Into Videos Effortlessly",
                        description: "Convert your articles into engaging videos in no time with our Article to Video Generator. Perfect for creating captivating video content from written articles."
                    },
                    hero: {
                        title: "Article to Video Generator",
                        description: "Convert articles videos in seconds. Ideal for creators, marketers, and media professionals.",
                        cta: o.startCreatingItsFree,
                        image: {
                            description: "Seamlessly transform articles into mesmerizing videos",
                            url: "".concat(a, "?article-to-video-generator-screenshot")
                        },
                        videoUrl: "".concat(n, "&how-to-use-the-best-article-to-video-generator")
                    },
                    textBlocks: [{
                        title: "Maximize your content's potential",
                        description: "Bring new life to articles by converting them into videos for platforms like YouTube, Facebook, and LinkedIn. Enhance your content's reach and engagement effortlessly.",
                        cta: "Boost content reach"
                    }, {
                        title: "Enhance your digital marketing",
                        description: "Utilize our article-to-video technology to create engaging video content swiftly for your digital marketing campaigns, increasing brand awareness and audience interaction.",
                        cta: "Amplify marketing impact"
                    }, {
                        title: "Inform and engage your audience",
                        description: "Perfect for journalists and educators, easily turn news articles and educational material into informative, captivating video content.",
                        cta: "Elevate informational content"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "The fastest article to video generator on the planet",
                        description: "Input your article and watch our AI instantly transform it into an engaging video. Experience quick, visually stunning results with the power of AI.\n\n\uD83C\uDFAC	Generate videos in seconds\n\n\uD83E\uDD16	Leverage Google & OpenAI's AI technology",
                        cta: "Start creating  →",
                        image: {
                            description: "AI swiftly turning articles into attractive videos",
                            url: "".concat(s.articles, "?generate-videos-from-articles")
                        }
                    }, {
                        title: "Transform text into captivating stories",
                        description: "Our AI Assistant, drawing from a vast internet knowledge base, helps you convert articles into video scripts. Generate creative ideas, optimize scripts, and get comprehensive support for your video creation journey.\n\n\uD83C\uDF9E️	Craft engaging video narratives\n\n\uD83C\uDF10	Expand your digital footprint\n\n⏳	Accelerate video production",
                        cta: "Explore AI assistant  →",
                        image: {
                            description: "AI crafting compelling video narratives from articles",
                            url: "".concat(s.assistant, "?generate-articles-from-ai-and-turn-them-into-videos")
                        }
                    }, {
                        title: "Add edits in seconds",
                        description: "Customize videos in an easy to use online, AI-powered video editor. Make cuts, upload music, generate subtitles and more with VideoGen's suite of AI video generation tools.\n\n⌨️	Move fast with keyboard shortcuts\n\n\uD83D\uDCC8	Accelerate video production",
                        cta: "Start converting  →",
                        image: {
                            description: "Personalize your videos with AI-driven customization",
                            url: "".concat(s.edits, "?generate-personalized-videos-from-articles-with-ai")
                        }
                    }, {
                        title: "Expand your reach with multilingual options",
                        description: "Our article to video generator supports multiple languages, allowing your content to resonate with a global audience. From script translation to multilingual subtitles, cater to diverse audiences effortlessly.\n\n\uD83C\uDF0E	Connect globally\n\n\uD83D\uDDE3️	Multilingual capabilities",
                        cta: "Start creating  →",
                        image: {
                            description: "Multilingual capabilities enhancing global video reach",
                            url: "".concat(s.languages, "?generate-videos-from-articles-in-multiple-languages")
                        }
                    }],
                    testimonials: r.marketing,
                    cta: {
                        title: "Convert articles to videos in just a few moments.",
                        cta: "Create a video from an article"
                    },
                    faqs: [{
                        question: "Why Choose Our Article to Video Generator?",
                        answer: "Our Article to Video Generator is a prime choice for converting articles into videos, ensuring a quick and effective transformation of written content into visually appealing videos. It's essential for creators seeking to optimize their 'article to video' process."
                    }, {
                        question: "How Efficient is the Article to Video Conversion?",
                        answer: "Our 'article to video' feature is streamlined for efficiency. It quickly takes your articles and uses AI to produce high-quality videos, selecting fitting visuals and soundtracks, thereby making the article-to-video conversion seamless and effective."
                    }, {
                        question: "Who Benefits Most from the Article to Video Generator?",
                        answer: "The Article to Video Generator is perfect for journalists, bloggers, and digital marketers who wish to transform their written articles into engaging, dynamic videos. It's an invaluable tool for anyone looking to boost their online presence through video content."
                    }, {
                        question: "Are Videos Produced by the Article to Video Generator Suitable for Commercial Use?",
                        answer: "Yes, videos generated by our Article to Video Generator are fully licensed for commercial use. The platform provides a broad selection of royalty-free visuals and audio, making it ideal for commercial article-to-video transformations."
                    }, {
                        question: "What's the Turnaround Time for Converting an Article to Video?",
                        answer: "Our Article to Video Generator is incredibly fast, converting articles into videos in just a few seconds. This quick process allows for more time to refine and customize the video, highlighting the efficiency of our article-to-video conversion."
                    }, {
                        question: "Does the Article to Video Generator Support Various Video Formats?",
                        answer: "Absolutely! Our generator is designed to create videos in multiple formats, accommodating different social media platforms and digital marketing needs. This adaptability is a key aspect of our 'article to video' tool."
                    }, {
                        question: "What Are the Costs Associated with Using the Article to Video Generator?",
                        answer: "We offer a free version for basic article-to-video conversions. For access to more advanced features and unlimited video creation, our paid plans make 'article to video' conversion accessible for various budgets."
                    }],
                    resources: c.AI_FEATURES
                }, {
                    slug: "website-to-video-generator",
                    isPublic: !0,
                    head: {
                        title: "Website to Video Generator | Effortlessly Convert URLs to Videos",
                        description: "Transform any website content into dynamic videos with our Website to Video Generator. A perfect tool for converting URLs to engaging videos quickly."
                    },
                    hero: {
                        title: "Website to Video Generator",
                        description: "Convert websites to videos. Ideal for web developers, content strategists, and digital marketers.",
                        cta: o.startCreatingItsFree,
                        image: {
                            description: "Revolutionize web content with seamless video conversion",
                            url: "".concat(a, "?website-to-video-generator-screenshot")
                        },
                        videoUrl: "".concat(n, "&how-to-use-the-best-website-to-video-generator")
                    },
                    textBlocks: [{
                        title: "Amplify your web presence",
                        description: "Easily convert website content, including blogs and articles, into engaging videos for enhanced digital visibility on platforms like YouTube and Instagram.",
                        cta: "Boost web content visibility"
                    }, {
                        title: "Revitalize your digital marketing",
                        description: "Leverage our URL-to-video technology for creating quick, effective video content, perfect for digital campaigns and increasing online engagement.",
                        cta: "Enhance digital campaigns"
                    }, {
                        title: "Transform websites into visual narratives",
                        description: "Ideal for transforming complex website content into simple, engaging video stories. Great for educational purposes and making information easily digestible.",
                        cta: "Simplify complex content"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "Rapid website to video generation",
                        description: "Input a URL and watch as our AI turns it into a visually impactful video in moments. Enjoy the ease of creating videos from website content with cutting-edge AI.\n\n\uD83C\uDF10	Convert URLs instantly\n\n\uD83C\uDFAC	Utilize innovative AI technology",
                        cta: "Start converting  →",
                        image: {
                            description: "AI swiftly converting URLs into dynamic videos",
                            url: "".concat(s.articles, "?generate-videos-from-urls")
                        }
                    }, {
                        title: "Craft perfect stories from URLs",
                        description: "Our AI Assistant refines website content into engaging video scripts. It generates creative ideas, optimizes scripts for video, and offers comprehensive support for your video creation needs.\n\n\uD83D\uDCA1	Create engaging video narratives\n\n\uD83D\uDE80	Maximize digital impact\n\n\uD83D\uDD52	Speed up video production",
                        cta: "Explore AI assistant  →",
                        image: {
                            description: "AI crafting engaging video narratives from URLs",
                            url: "".concat(s.assistant, "?generate-videos-from-urls-with-ai")
                        }
                    }, {
                        title: "Global audience reach with multilingual support",
                        description: "Our website to video generator caters to a worldwide audience with multiple language options. From script translation to subtitles, make your content accessible to diverse audiences.\n\n\uD83C\uDF0D	Global connectivity\n\n\uD83D\uDDE3️	Multilingual features",
                        cta: "Start creating  →",
                        image: {
                            description: "Multilingual support expanding global video reach",
                            url: "".concat(s.languages, "?generate-videos-from-urls-in-multiple-languages")
                        }
                    }],
                    testimonials: r.socialMedia,
                    cta: {
                        title: "Convert websites to videos with AI today!",
                        cta: "Create a video from a website"
                    },
                    faqs: [{
                        question: "Why Opt for Our Website to Video Generator?",
                        answer: "Our Website to Video Generator is uniquely designed for converting website content to video, ensuring a fast and effective transformation. It's an essential tool for anyone looking to convert URLs into compelling video content."
                    }, {
                        question: "How Quick is the Conversion from Website to Video?",
                        answer: "Our 'website to video' feature is incredibly efficient, converting URLs into videos in just seconds. It automates the process, selecting relevant visuals and music, making the conversion seamless and user-friendly."
                    }, {
                        question: "Who Benefits Most from the Website to Video Generator?",
                        answer: "The Website to Video Generator is ideal for web content creators, marketers, and digital agencies who want to convert website content, including blogs, articles, and product pages, into engaging videos. It's a perfect solution for enhancing online content with video."
                    }, {
                        question: "Can I Use Videos Created by the Website to Video Generator for Commercial Purposes?",
                        answer: "Yes, videos created with our Website to Video Generator are fully licensed for commercial use. The platform offers a range of royalty-free visuals and audio tracks, making it ideal for creating videos from URLs for commercial purposes."
                    }, {
                        question: "What's the Turnaround Time for Converting a Website to Video?",
                        answer: "Our Website to Video Generator works swiftly, turning website content into videos in mere seconds. This speed allows for additional customization and refinement, showcasing the quick and efficient nature of our URL-to-video conversion."
                    }, {
                        question: "Does the Website to Video Generator Support Various Video Formats?",
                        answer: "Absolutely! Our generator is versatile, creating videos in multiple formats suitable for different social media platforms and digital marketing needs. This adaptability is a key feature of our 'website to video' conversion tool."
                    }, {
                        question: "What Are the Costs of Using the Website to Video Generator?",
                        answer: "We offer a free version for basic website-to-video needs. For more advanced features and unlimited video creation, our paid plans accommodate various budgets and making 'convert website to video' accessible to everyone."
                    }],
                    resources: c.AI_FEATURES
                }, {
                    slug: "ai-image-generator",
                    isPublic: !0,
                    head: {
                        title: "AI image generator | Effortlessly create images with AI",
                        description: "Unlock the potential of AI for image creation. Instantly generate stunning, unique images. Perfect for designers, marketers, and any creative endeavor."
                    },
                    inputHero: {
                        title: "AI Image Generator",
                        description: "Craft beautiful images in seconds. Ideal for designers, marketers, and any creative project.",
                        cta: "Generate Image"
                    },
                    textBlocks: [{
                        title: "Transform your creative process",
                        description: "Revolutionize your design workflow on platforms like Instagram, Pinterest, and digital marketing materials with our AI image generator. Create eye-catching visuals without needing advanced design skills or spending hours in editing software.",
                        cta: "Enhance your designs"
                    }, {
                        title: "Boost branding and marketing efforts",
                        description: "Leverage AI to quickly generate images that align with your brand identity. Ideal for startups to large enterprises, our tool helps you maintain a consistent and appealing visual presence across all marketing channels.",
                        cta: "Strengthen your brand"
                    }, {
                        title: "Unleash creativity across borders",
                        description: "Perfect for artists, educators, and global teams, our AI image generator allows you to turn ideas into compelling visuals. Break language barriers and connect with a worldwide audience through the universal language of imagery.",
                        cta: "Unleash global creativity"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "One click. Infinite possibilities.",
                        description: "Experience the ease of transforming thoughts into visuals. With our AI, create diverse, high-quality images effortlessly. Bring characters, stories, memories, fantasies, and dreams to live with VideoGen's AI image generator.\n\n\uD83D\uDE80	Endless creativity\n\n\uD83E\uDDE0	The world's leading AI technology\n\n\uD83C\uDFA8	Create more in less time",
                        cta: "Generate an image  →",
                        image: {
                            description: "Witness the magic of AI: From idea to imagery",
                            url: "".concat(s.images, "?ai-image-generator")
                        }
                    }, {
                        title: "Your personal AI assistant",
                        description: "Our AI assists you through the image generation process. Use it to brainstorm ideas or to merge two ideas together into something new.\n\n\uD83D\uDCDD	Generate unique image concepts\n\n\uD83D\uDCA1	Find inspiration instantly",
                        cta: "Generate an image  →",
                        image: {
                            description: "AI assistant for an AI video generator",
                            url: "".concat(s.assistant, "?ai-image-generator")
                        }
                    }, {
                        title: "Level up with video",
                        description: "Bring your images into videos with our easy-to-use online video editor. It only takes a few seconds to generate your first video! Bring your images to life with VideoGen's suite of AI video generation tools.\n\n\uD83C\uDFA5	Create engaging content in seconds\n\n⏰	Save time & money creating videos",
                        cta: "Generate an image  →",
                        image: {
                            description: "Personalize your images with AI-driven customization",
                            url: "".concat(s.generate, "?ai-image-to-video-generator")
                        }
                    }],
                    testimonials: r.socialMedia,
                    cta: {
                        title: "Bring your creativity to the next level with AI.",
                        cta: "Generate a free image"
                    },
                    faqs: [{
                        question: "What makes the AI image generator stand out?",
                        answer: "Our AI image generator is at the cutting edge of creative technology, simplifying complex design tasks to make professional image creation accessible to all, regardless of their design background. Just enter a prompt and watch as our AI generates a unique image in seconds."
                    }, {
                        question: "Is this tool easy for beginners?",
                        answer: "Absolutely! Our AI image generator is crafted for simplicity and user-friendliness, making it perfect for beginners while still offering powerful features for experienced designers."
                    }, {
                        question: "Can I use these images for commercial purposes?",
                        answer: "Yes, images created with our AI image generator are fully licensed for commercial use. Your generated image is 100% unique to you, as the AI uses your input to create a new image. This means no two images are the same and you don't have to worry about copyright concerns."
                    }, {
                        question: "How long does it take to create an image?",
                        answer: "Our AI image generator can create images in just a few seconds. The time required varies based on the complexity and requirements of the image, but it's significantly faster than traditional design methods."
                    }, {
                        question: "Can I create images in different styles?",
                        answer: "Yes, our AI image generator is versatile and can create images in a variety of styles and themes, catering to different creative needs and preferences."
                    }, {
                        question: "How much does it cost to use the AI image generator?",
                        answer: "We offer a free plan that allows you to try VideoGen before you upgrade. For more advanced features and unlimited image creation, we offer paid plans."
                    }],
                    resources: c.AI_TOOLS
                }, {
                    slug: "video-subtitle-generator",
                    isPublic: !0,
                    head: {
                        title: "#1 Video Subtitle Generator | AI-powered Video Subtitler",
                        description: "Effortlessly add subtitles to your videos with our AI video subtitle generator. Ideal for content creators, educators, and marketers seeking to enhance accessibility and engagement."
                    },
                    hero: {
                        title: "Video Subtitle Generator",
                        description: "Easily add subtitles to videos. Ideal for educators, marketers, and creators.",
                        cta: "Generate free subtitles  →",
                        image: {
                            description: "Enhance your videos with AI-powered subtitles",
                            url: "".concat(a, "?video-subtitle-generator-screenshot")
                        },
                        videoUrl: "".concat(n, "&how-to-use-the-best-video-subtitle-generator")
                    },
                    textBlocks: [{
                        title: "Maximize viewer engagement",
                        description: "Boost your video's reach and engagement on platforms like YouTube and social media with accurately synchronized subtitles. Our AI video subtitler ensures your message is heard by everyone.",
                        cta: "Enhance audience reach"
                    }, {
                        title: "Streamline content accessibility",
                        description: "Our video subtitle generator uses advanced AI to provide accurate, timely subtitles, making your content accessible to a broader audience, including those with hearing impairments.",
                        cta: "Improve content accessibility"
                    }, {
                        title: "Efficient and accurate subtitling",
                        description: "Leverage our AI technology for quick and precise subtitle generation. Save time and resources while ensuring your videos are professional and accessible to all viewers.",
                        cta: "Automate your subtitling"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "AI-driven subtitle generation",
                        description: "Our AI video subtitle generator provides high-accuracy subtitles, ensuring your message is conveyed correctly. The AI adapts to various accents and dialects for precise transcription.\n\n\uD83C\uDF99️	Adapt to any accent\n\n✅	Ensure message accuracy",
                        cta: "Start subtitling now  →",
                        image: {
                            description: "AI ensuring accurate and adaptable video subtitles",
                            url: "".concat(s.subtitles, "?video-subtitle-generator")
                        }
                    }, {
                        title: "Customizable subtitle styles",
                        description: "Personalize your video subtitles to match your brand or content style. Our generator offers a range of fonts, colors, and placement options for a seamless viewing experience.\n\n\uD83C\uDFA8	Tailor to your brand style\n\n\uD83D\uDCFA	Enhance viewer experience",
                        cta: "Customize your subtitles  →",
                        image: {
                            description: "Customize subtitles to match video branding",
                            url: "".concat(s.edits, "?video-subtitle-generator-online")
                        }
                    }, {
                        title: "Seamless integration with video platforms",
                        description: "Our subtitle generator integrates smoothly with popular video platforms, making the process of adding subtitles to your content effortless and efficient.\n\n\uD83D\uDD04	Easy platform integration\n\n\uD83D\uDD17	Streamline your workflow",
                        cta: "Simplify your process  →",
                        image: {
                            description: "Easy integration of AI subtitles with video platforms",
                            url: "".concat(s.socials, "?video-subtitle-generator")
                        }
                    }],
                    testimonials: r.socialMedia,
                    cta: {
                        title: "Transform your videos with AI subtitles today!",
                        cta: "Start subtitling for free"
                    },
                    faqs: [{
                        question: "Why choose our AI video subtitle generator?",
                        answer: "Our AI-powered video subtitle generator streamlines the subtitling process, providing fast, accurate, and customizable subtitles for a wide range of video content, enhancing accessibility and viewer engagement."
                    }, {
                        question: "How quick is the AI video subtitling process?",
                        answer: "Our video subtitle generator operates swiftly, creating accurate subtitles in real time. This speed allows for immediate deployment in your videos, ensuring no delay in your content schedule."
                    }, {
                        question: "Who can benefit from the AI video subtitle generator?",
                        answer: "Content creators, digital marketers, educators, and anyone looking to make their videos more accessible and engaging can greatly benefit from our AI video subtitle generator."
                    }, {
                        question: "Can I customize the subtitles to match my brand?",
                        answer: "Yes, our subtitle generator offers various customization options, allowing you to align the subtitles with your brand's visual identity for a cohesive and professional look."
                    }, {
                        question: "Is the AI subtitler compatible with different video formats?",
                        answer: "Absolutely! Our AI subtitler is versatile and supports various video formats, making it easy to add subtitles to different types of video content for various platforms."
                    }, {
                        question: "What are the costs of using the AI video subtitle generator?",
                        answer: "We offer a free version for basic subtitling needs. For more advanced features and unlimited subtitling, our paid plans are available accommodating of various budgets and making 'convert website to video' accessible to everyone."
                    }],
                    resources: c.AI_TOOLS
                }, {
                    slug: "video-caption-generator",
                    isPublic: !0,
                    head: {
                        title: "#1 Video Caption Generator | Automatic Video Captioning",
                        description: "Create engaging captions for your videos with ease. Ideal for video content creators, marketers, and educators looking to boost accessibility and engagement."
                    },
                    hero: {
                        title: "Video Caption Generator",
                        description: "Automatically generate captions for your videos. Perfect for marketers, educators, and creators.",
                        cta: "Generate Captions for Free  →",
                        image: {
                            description: "Transform your videos with automatic, AI-powered captions",
                            url: "".concat(a, "?video-caption-generator-screenshot")
                        },
                        videoUrl: "".concat(n, "&how-to-use-automatic-video-caption-generator")
                    },
                    textBlocks: [{
                        title: "Enhance viewer engagement",
                        description: "Elevate your video's impact on platforms like YouTube and social media with our AI-driven captions. Ensure your message reaches and resonates with a wider audience.",
                        cta: "Boost audience engagement"
                    }, {
                        title: "Accessibility made easy",
                        description: "Our video caption generator utilizes cutting-edge AI for accurate, multilingual video captioning, making your content accessible to viewers with hearing challenges or low volume.",
                        cta: "Increase content accessibility"
                    }, {
                        title: "Quick and precise captioning",
                        description: "Utilize our advanced AI for fast and accurate caption generation. Save valuable time while providing professional, accessible content to your audience.",
                        cta: "Streamline captioning process"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "Generate captions with AI",
                        description: "Leverage our advanced AI for high-accuracy captions, ensuring your message is clearly understood. The AI efficiently handles various speech nuances for accurate results.\n\n\uD83C\uDF99️	Handles diverse accents\n\n✅	Guarantees message clarity",
                        cta: "Start generating captions  →",
                        image: {
                            description: "AI providing precise and adaptable video captions",
                            url: "".concat(s.subtitles, "?video-caption-generator")
                        }
                    }, {
                        title: "Customize your video captions",
                        description: "Match your video captions to your brand identity. Choose from a variety of fonts, colors, and positions to enhance the viewer's experience.\n\n\uD83C\uDFA8	Align with your brand\n\n\uD83D\uDCFA	Optimize viewer experience",
                        cta: "Customize your captions  →",
                        image: {
                            description: "Tailor captions to complement video branding",
                            url: "".concat(s.edits, "?video-caption-generator-online")
                        }
                    }, {
                        title: "Post captioned videos anywhere",
                        description: "Enjoy effortless posting on popular video platforms. Social media sites actively promote videos with captions since they are more accessible and engaging. Adding captions to your videos is now simpler and more efficient than ever.\n\n\uD83D\uDD04	Easy platform distribution\n\n\uD83D\uDCC8	Boost video engagement",
                        cta: "Generate free video captions  →",
                        image: {
                            description: "Easily integrate AI captions with video platforms",
                            url: "".concat(s.socials, "?video-caption-generator")
                        }
                    }],
                    testimonials: r.socialMedia,
                    cta: {
                        title: "Revolutionize your videos with AI captions today!",
                        cta: "Generate captions for free"
                    },
                    faqs: [{
                        question: "Why opt for our AI video caption generator?",
                        answer: "Our AI video caption generator simplifies captioning, offering fast, accurate, and customizable captions, enhancing both accessibility and viewer engagement in your videos."
                    }, {
                        question: "How fast is the AI video captioning process?",
                        answer: "Experience real-time caption generation with our tool, ensuring your videos are promptly enhanced without delaying your content schedule."
                    }, {
                        question: "Who benefits from the AI video caption generator?",
                        answer: "Digital marketers, content creators, educators, and anyone aiming to make their videos more accessible and engaging will find great value in our AI video caption generator."
                    }, {
                        question: "Can I tailor captions to my brand style?",
                        answer: "Absolutely! With various customization options, our generator allows you to adjust the captions to align with your brand's visual identity, ensuring a professional appearance."
                    }, {
                        question: "Is the AI caption generator compatible with different video formats?",
                        answer: "Yes! Our tool is designed to be versatile, supporting a range of video formats and making it easy to add captions to a variety of video content."
                    }, {
                        question: "What are the costs of using the AI video caption generator?",
                        answer: "We offer a free basic version for essential captioning needs. For more advanced features, our paid plans start at an affordable rate."
                    }],
                    resources: c.AI_TOOLS
                }, {
                    slug: "video-ad-generator",
                    isPublic: !0,
                    head: {
                        title: "Video Ad Generator | Create Engaging Promo Videos Effortlessly",
                        description: "Craft captivating video ads in minutes with our AI-driven Video Ad Generator. Perfect for businesses and marketers looking to make an impact with minimal effort."
                    },
                    hero: {
                        title: "Video Ad Generator",
                        description: "Generate video ads quickly and easily. Ideal for businesses, marketers, and entrepreneurs.",
                        cta: "Generate a free ad  →",
                        image: {
                            description: "Easily create professional video ads with our AI technology",
                            url: "".concat(a, "?video-ad-generator-screenshot")
                        },
                        videoUrl: "".concat(n, "&how-to-create-effective-video-ads-with-ai")
                    },
                    textBlocks: [{
                        title: "Boost your marketing impact",
                        description: "Elevate your brand's presence with high-quality video ads. Our AI Video Ad Generator helps you capture attention on platforms like Facebook, Instagram, and YouTube.",
                        cta: "Enhance your brand presence"
                    }, {
                        title: "Maximize ROI with minimal effort",
                        description: "Create video ads that drive results. Our AI streamlines the video creation process, enabling you to focus on strategy and growth.",
                        cta: "Drive business growth"
                    }, {
                        title: "Customize ads to fit your brand",
                        description: "Personalize your video ads to align with your brand's identity. Choose from a variety of styles, colors, and music to make your message stand out.",
                        cta: "Tailor your message"
                    }],
                    hasLogoCloud: !0,
                    features: [{
                        title: "Generate video ads in seconds",
                        description: "Utilize AI to generate high-quality video ads in a fraction of the time. Perfect for businesses looking to create engaging content without the hassle.\n\n\uD83D\uDE80	Fast and efficient\n\n\uD83D\uDCC8	High engagement rates",
                        cta: "Generate a video ad  →",
                        image: {
                            description: "AI transforming video ad creation process",
                            url: "".concat(s.generate, "?ai-transforming-video-ad-creation")
                        }
                    }, {
                        title: "Easy customization and editing",
                        description: "Customize your video ads with our user-friendly editor. Adjust the style, pace, and mood to perfectly match your brand and message.\n\n\uD83C\uDFA8	Versatile customization options\n\n✂️	Simple editing tools",
                        cta: "Generate a video ad  →",
                        image: {
                            description: "Personalize video ads with ease using AI tools",
                            url: "".concat(s.edits, "?personalize-video-ads-with-ai")
                        }
                    }, {
                        title: "Seamless integration with marketing channels",
                        description: "Effortlessly upload and share your video ads across various marketing channels. Our AI Video Ad Generator supports multiple formats for easy integration.\n\n\uD83D\uDD04	Multiple format support\n\n\uD83D\uDD17	Easy sharing and uploading",
                        cta: "Simplify your marketing  →",
                        image: {
                            description: "Easily share AI-generated video ads across platforms",
                            url: "".concat(s.socials, "?share-ai-generated-video-ads-easily")
                        }
                    }],
                    testimonials: r.marketing,
                    cta: {
                        title: "Create video ads in seconds.\nStart today for free.",
                        cta: "Generate a free ad"
                    },
                    faqs: [{
                        question: "Why choose our Video Ad Generator?",
                        answer: "Our Video Ad Generator offers a seamless, AI-driven experience, enabling you to create high-impact video ads quickly and efficiently, with no prior video editing experience required."
                    }, {
                        question: "How does AI simplify the ad creation process?",
                        answer: "AI simplifies the ad creation process by automating the most time-consuming aspects of video production. It ensures your ads are engaging and aligned with your marketing goals."
                    }, {
                        question: "Who can benefit from using the Video Ad Generator?",
                        answer: "Business owners, digital marketers, and entrepreneurs looking to create professional, high-quality video ads without the need for extensive resources or video editing skills."
                    }, {
                        question: "Can I customize the video ads to fit my brand?",
                        answer: "Absolutely! Our Video Ad Generator provides a wide range of customization options, allowing you to tailor every aspect of your video ad to align with your brand identity."
                    }, {
                        question: "How long does it take to create a video ad?",
                        answer: "With our AI Video Ad Generator, you can create a professional-quality video ad in just a few minutes, significantly reducing the time and effort compared to traditional video production methods."
                    }, {
                        question: "Can the video ads be used on various social platforms?",
                        answer: "Yes, our Video Ad Generator creates ads that are compatible with a variety of social platforms, including Facebook, Instagram, and YouTube, ensuring your message reaches a wide audience."
                    }, {
                        question: "What is the cost of using the Video Ad Generator?",
                        answer: "We offer a free version for basic ad creation needs. For more advanced features and unlimited ad creation, we provide affordable paid plans."
                    }],
                    resources: c.AI_TOOLS
                }]
        }
    }
]);
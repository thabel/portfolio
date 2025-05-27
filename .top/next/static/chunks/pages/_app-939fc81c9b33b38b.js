(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    1118: function(e, s, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n(570)
        }
        ])
    },
    570: function(e, s, n) {
        "use strict";
        n.r(s),
        n.d(s, {
            default: function() {
                return m
            }
        });
        var l = n(5893);
        let t = () => (0,
        l.jsx)("div", {
            id: "preloader",
            className: "preloaded",
            children: (0,
            l.jsx)("div", {
                className: "line"
            })
        });
        var i = n(9008)
          , c = n.n(i)
          , r = n(7294);
        let a = [{
            id: 1,
            name: "yellow"
        }, {
            id: 2,
            name: "green"
        }, {
            id: 3,
            name: "red"
        }, {
            id: 4,
            name: "blue"
        }, {
            id: 5,
            name: "orange"
        }, {
            id: 6,
            name: "yellowgreen"
        }, {
            id: 7,
            name: "pink"
        }, {
            id: 8,
            name: "goldenrod"
        }]
          , o = () => {
            let[e,s] = (0,
            r.useState)("yellow")
              , [n,t] = (0,
            r.useState)(!1);
            return (0,
            l.jsxs)(r.Fragment, {
                children: [(0,
                l.jsx)(c(), {
                    children: (0,
                    l.jsx)("link", {
                        rel: "stylesheet",
                        href: "css/skins/".concat(e, ".css")
                    })
                }), (0,
                l.jsx)("div", {
                    id: "switcher",
                    className: n ? "open" : "close",
                    style: {
                        display: "block"
                    },
                    children: (0,
                    l.jsxs)("div", {
                        className: "content-switcher",
                        children: [(0,
                        l.jsx)("h4", {
                            children: "COLOR SWITCHER"
                        }), (0,
                        l.jsx)("ul", {
                            children: a.map(e => (0,
                            l.jsx)("li", {
                                children: (0,
                                l.jsx)("a", {
                                    href: "#",
                                    title: e.name,
                                    className: "color",
                                    onClick: () => s(e.name),
                                    children: (0,
                                    l.jsx)("img", {
                                        src: "assets/styleswitcher/".concat(e.name, ".png"),
                                        alt: e.name
                                    })
                                }, e.id)
                            }))
                        }), (0,
                        l.jsx)("div", {
                            id: "hideSwitcher",
                            onClick: () => t(!1),
                            children: "\xd7"
                        })]
                    })
                }), (0,
                l.jsx)("div", {
                    id: "showSwitcher",
                    className: "styleSecondColor ".concat(n ? "close" : "open"),
                    onClick: () => t(!0),
                    children: (0,
                    l.jsx)("i", {
                        className: "fa fa-cog"
                    })
                })]
            })
        }
          , h = () => (0,
        l.jsxs)(c(), {
            children: [(0,
            l.jsx)("title", {
                children: "Salimov - Horizontal Personal Portfolio"
            }), (0,
            l.jsx)("meta", {
                charSet: "utf-8"
            }), (0,
            l.jsx)("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }), (0,
            l.jsx)("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }), (0,
            l.jsx)("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: ""
            }), (0,
            l.jsx)("link", {
                href: "https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap",
                rel: "stylesheet"
            }), (0,
            l.jsx)("link", {
                rel: "stylesheet",
                href: "css/devicon.min.css"
            }), (0,
            l.jsx)("link", {
                rel: "stylesheet",
                href: "css/all.min.css"
            }), (0,
            l.jsx)("link", {
                rel: "stylesheet",
                href: "css/bootstrap.min.css"
            }), (0,
            l.jsx)("link", {
                rel: "stylesheet",
                href: "css/swiper-bundle.min.css"
            }), (0,
            l.jsx)("link", {
                rel: "stylesheet",
                href: "css/animate.min.css"
            }), (0,
            l.jsx)("link", {
                rel: "stylesheet",
                href: "css/jquery.mCustomScrollbar.min.css"
            }), (0,
            l.jsx)("link", {
                rel: "stylesheet",
                href: "css/style.css"
            }), (0,
            l.jsx)("link", {
                rel: "stylesheet",
                type: "text/css",
                href: "css/styleswitcher.css"
            })]
        });
        n(4744);
        let d = e => {
            let {Component: s, pageProps: n} = e;
            return (0,
            l.jsxs)(r.Fragment, {
                children: [(0,
                l.jsx)(h, {}), (0,
                l.jsx)(o, {}), (0,
                l.jsx)(t, {}), (0,
                l.jsx)(s, {
                    ...n
                })]
            })
        }
        ;
        var m = d
    },
    4744: function() {},
    9008: function(e, s, n) {
        e.exports = n(3121)
    }
}, function(e) {
    var s = function(s) {
        return e(e.s = s)
    };
    e.O(0, [774, 179], function() {
        return s(1118),
        s(880)
    }),
    _N_E = e.O()
}
]);

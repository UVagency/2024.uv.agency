(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(7052);
        },
      ]);
    },
    7052: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s(5893),
        o = s(7294);
      s(5675);
      let r = (e) =>
        e >= 1 && e <= 1.1
          ? 0.8 + 0.1 * Math.random()
          : 1 + 0.1 * Math.random();
      t.default = () => {
        let [e, t] = (0, o.useState)(60),
          [s, n] = (0, o.useState)(r()),
          [i, l] = (0, o.useState)(!0),
          [c, u] = (0, o.useState)(!1),
          [d, x] = (0, o.useState)(!1),
          [m, h] = (0, o.useState)(!1),
          [p, f] = (0, o.useState)(60),
          [b, j] = (0, o.useState)(0.9),
          [w, k] = (0, o.useState)("#FFFFFF"),
          [g, v] = (0, o.useState)("#FFFFFF"),
          [y, N] = (0, o.useState)(""),
          [S, F] = (0, o.useState)(!1),
          [C, E] = (0, o.useState)("");
        (0, o.useEffect)(() => {
          let e = localStorage.getItem("selectedDot");
          if (e) {
            let t = "#000000" === e ? 0.4 : 0.6;
            v(e),
              k(e),
              j(t),
              "#000000" === e
                ? document.documentElement.classList.add("dark")
                : document.documentElement.classList.remove("dark");
          }
        }, []);
        let D = (0, o.useCallback)(() => {
          i && n((e) => r(e));
        }, [i]);
        (0, o.useEffect)(() => {
          D();
          let e = setInterval(D, 4500);
          return () => clearInterval(e);
        }, [D]);
        let _ = (e, t) => {
          v(e),
            k(e),
            j(t),
            localStorage.setItem("selectedDot", e),
            console.log(e, t),
            "#000000" === e
              ? document.documentElement.classList.add("dark")
              : document.documentElement.classList.remove("dark");
        };
        (0, o.useEffect)(() => {
          let s;
          return (
            d && e > 0 && !c
              ? (s = setTimeout(() => t(e - 1), 1e3))
              : e <= 0 && !m && (h(!0), setTimeout(() => l(!1), 4500)),
            () => clearTimeout(s)
          );
        }, [e, d, c, m]);
        let T = !0,
          I = () => {
            u(!c),
              c
                ? ((document.body.style.overflow = ""), l(T))
                : ((T = i), (document.body.style.overflow = "hidden"), l(!1));
          };
        function q() {
          var e = location.href;
          return (
            window.open(
              "http://twitter.com/share?url=" +
                encodeURIComponent(e) +
                "&text=" +
                encodeURIComponent(
                  "I improved my focus in 1 minute. Does it work for you?"
                ),
              "twitsharer",
              "toolbar=0,status=0,width=626,height=360"
            ),
            !1
          );
        }
        let O = async (e) => {
            event.preventDefault();
            try {
              let e = await fetch(
                "https://hook.us1.make.com/5nhqvy9x16igrucuvjacfie1kszz32i8",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: y }),
                }
              );
              e.ok
                ? (console.log("Email submitted successfully"),
                  E("Success! We'll be in touch soon\uD83D\uDC4D"))
                : (console.error("Submission failed"), E("Submission failed")),
                F(!0);
            } catch (e) {
              console.error("Error:", e), E("Error: ".concat(e.message)), F(!0);
            }
          },
          L = () =>
            (0, a.jsxs)("div", {
              className:
                "flex items-center  justify-center fixed w-full text-center left-0 bottom-5 text-black opacity-25 text-[15px] dark:text-white",
              children: [
                (0, a.jsx)("a", {
                  className: "no-underline",
                  href: "#",
                  onClick: I,
                  children: "About",
                }),
                "\xa0 • \xa0",
                (0, a.jsx)("a", {
                  className: "no-underline",
                  href: "https://uv.agency",
                  target: "_blank",
                  children: "UV",
                }),
                "\xa0 • \xa0",
                (0, a.jsx)("a", {
                  href: "#",
                  className: "cursor-pointer no-underline",
                  onClick: q,
                  children: "Share",
                }),
              ],
            });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex flex-col items-center justify-center h-screen max-md:pb-20",
              style: { backgroundColor: w },
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "cursor-pointer h-10 w-full opacity-0 flex top-0 fixed pt--[10px] justify-center gap-[8px]  hover:opacity-100 hover:pt-3 transition-all duration-500",
                  children: [
                    (0, a.jsx)("span", {
                      className: "dot white-dot ".concat(
                        "#FFFFFF" === g ? "selected" : ""
                      ),
                      onClick: () => _("#FFFFFF", 0.9),
                    }),
                    (0, a.jsx)("span", {
                      className: "dot black-dot ".concat(
                        "#000000" === g ? "selected" : ""
                      ),
                      onClick: () => _("#000000", 0.3),
                    }),
                    (0, a.jsx)("span", {
                      className: "dot grey-dot ".concat(
                        "rgba(0,0,0,0.15)" === g ? "selected" : ""
                      ),
                      onClick: () => _("rgba(0,0,0,0.15)", 0.8),
                    }),
                  ],
                }),
                d
                  ? i
                    ? (0, a.jsxs)("div", {
                        className: "group",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "big-circle w-96 h-96 opacity-80 bg-black rounded-full flex items-center justify-center hover:opacity-100 hover:cursor-pointer transition duration-300 max-md:w-72 max-md:h-72  dark:bg-white",
                            style: {
                              transition:
                                "transform 4s ease-in-out, opacity 4s ease-in-out, filter 4s ease-in-out",
                              transform: m
                                ? "scale(0.1)"
                                : "scale(".concat(s, ")"),
                              opacity: m ? 0 : "".concat(s * b),
                            },
                            onClick: I,
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "timer fixed w-full text-center bottom-[-10px] left-0 text-black opacity-0 trainsition-all duration-500 group-hover:opacity-40 group-hover:bottom-5 dark:text-white",
                            children: ""
                              .concat(
                                Math.floor(e / 60)
                                  .toString()
                                  .padStart(2, "0"),
                                ":"
                              )
                              .concat(String(e % 60).padStart(2, "0")),
                          }),
                        ],
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-[320px] px-[40px] rounded-xl border-[1px] border-[#c8c8c8] flex items-center justify-center z-0 pb-[30px]",
                            children: S
                              ? (0, a.jsx)("div", {
                                  className:
                                    "mt-6 italic text-[14px] text-[#929292]",
                                  children: C,
                                })
                              : (0, a.jsxs)("div", {
                                  className:
                                    "w-full mt-[20px] cursor-pointer flex flex-col items-center justify-center text-center text-[#8d8d8d] text-[13px] dark:text-white",
                                  children: [
                                    "Sign-up to get notified of new tools to help with focus & productivity \uD83D\uDC47",
                                    (0, a.jsxs)("form", {
                                      onSubmit: O,
                                      className:
                                        "flex flex-row items-center justify-center gap-2 mt-[20px] ",
                                      children: [
                                        (0, a.jsx)("input", {
                                          className:
                                            "w-[180px] border-[1px] rounded-full border-[#a4a4a4] px-3 py-2 cursor-pointer flex pl-[15px] text-[#646464] text-[13px] dark:text-white",
                                          placeholder: "Enter Email",
                                          value: y,
                                          onChange: (e) => N(e.target.value),
                                        }),
                                        (0, a.jsx)("button", {
                                          type: "submit",
                                          className:
                                            "rounded-full bg-[#202020] text-white px-3 py-2 dark:text-black dark:bg-white",
                                          children: "Submit",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                          }),
                          (0, a.jsx)("button", {
                            className:
                              "text-black opacity-60 text-[15px] dark:text-white mt-[10px] hover:underline hover:opacity-90",
                            onClick: () => {
                              t(p), l(!0), h(!1), x(!1), D();
                            },
                            children: "↻ Restart",
                          }),
                          (0, a.jsx)(L, {}),
                        ],
                      })
                  : (0, a.jsxs)("div", {
                      className:
                        "max-w-[480px] flex flex-col justify-center items-center gap-5 px-5  dark:text-white",
                      children: [
                        (0, a.jsxs)("p", {
                          className: "text-center",
                          children: [
                            "Look at the dot & breathe for just",
                            " ",
                            (0, a.jsxs)("select", {
                              className: "select-as-text",
                              value: p,
                              onChange: (e) => f(Number(e.target.value)),
                              children: [
                                (0, a.jsx)("option", {
                                  value: 30,
                                  children: "0.5 min",
                                }),
                                (0, a.jsx)("option", {
                                  value: 60,
                                  children: "1 min",
                                }),
                                (0, a.jsx)("option", {
                                  value: 90,
                                  children: "1.5 min",
                                }),
                                (0, a.jsx)("option", {
                                  value: 120,
                                  children: "2 mins",
                                }),
                                (0, a.jsx)("option", {
                                  value: 150,
                                  children: "2.5 min",
                                }),
                                (0, a.jsx)("option", {
                                  value: 180,
                                  children: "3 mins",
                                }),
                              ],
                            }),
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)("span", {
                              className: "ml-[-10px]",
                              children:
                                "to improve mental focus for your next task",
                            }),
                          ],
                        }),
                        (0, a.jsx)("button", {
                          className:
                            "h-10 w-24 bg-black text-white rounded-full hover:bg-pink-500 transition duration-300 dark:bg-white dark:text-black",
                          onClick: () => {
                            x(!0), l(!0), t(p), D();
                          },
                          children: "Start",
                        }),
                        (0, a.jsx)(L, {}),
                      ],
                    }),
              ],
            }),
            (0, a.jsx)(() => {
              if (!c) return null;
              let e = (e) => {
                e.target === e.currentTarget && I();
              };
              return (0, a.jsx)("div", {
                className:
                  "fixed top-0 left-0 bg-[#f0f0f0de] w-full h-full flex flex-col items-center justify-center scroll-smooth overflow-y-auto max-md:justify-start dark:bg-black",
                onClick: e,
                children: (0, a.jsxs)("div", {
                  className:
                    "relative modal-content bg-white px-10 py-12 mx-48 max-w-[600px] rounded-2xl max-md:m-0 max-md:px-6 dark:bg-[#282828]",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "absolute top-3 right-8 text-[32px] flex justify-end cursor-pointer opacity-60 max-md:fixed z-30 dark:text-white",
                      onClick: e,
                      children: "\xd7",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "modal-description max-md:pl-0  max-md:pt-3 dark:text-white",
                      children: [
                        (0, a.jsx)("h2", { children: "What is this? " }),
                        (0, a.jsxs)("p", {
                          children: [
                            "Studies in brain science (neuroscience) has shown that focusing visually actually can help our brain focus on a task (",
                            (0, a.jsx)("a", {
                              href: "https://www.hubermanlab.com/episode/the-science-of-setting-and-achieving-goals",
                              target: "_blank",
                              children: "Dr. Andrew Huberman).",
                            }),
                            (0, a.jsx)("br", {}),
                            " ",
                            (0, a.jsx)("br", {}),
                            "Try focusing on the circle for one minute then work on your task to see if it helps you stay more focused (also doubles as a 1 minute meditation session).",
                            " ",
                            (0, a.jsx)("a", {
                              href: "mailto:junu@joinsquad.co?subject=via One Minute Focus",
                              children: "Email me",
                            }),
                            " ",
                            "if it works (or does not\uD83D\uDE05)✨",
                          ],
                        }),
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("h2", {
                          children:
                            "How does visual attention help mental focus?",
                        }),
                        (0, a.jsxs)("p", {
                          children: [
                            "Your cognitive focus and readiness to perform are strongly linked to your visual system. Narrowing your visual attention activates brain circuits that release neurochemicals responsible for increasing alertness and arousal. ",
                            (0, a.jsx)("br", {}),
                            (0, a.jsx)("br", {}),
                            "As a result, your motivation and focus will increase from this boost in autonomic arousal and alertness.",
                          ],
                        }),
                        (0, a.jsx)("br", {}),
                        " ",
                        (0, a.jsx)("br", {}),
                        (0, a.jsx)("h2", { children: "Who made this? " }),
                        (0, a.jsxs)("p", {
                          children: [
                            "I am a curious",
                            " ",
                            (0, a.jsx)("a", {
                              href: "https://www.twitter.com/junetic",
                              target: "_blank",
                              children: "founder/designer",
                            }),
                            " ",
                            "working on tools to help people improve. One of them is",
                            " ",
                            (0, a.jsx)("a", {
                              href: "https://www.joinsquad.co",
                              target: "_blank",
                              children: "Squad",
                            }),
                            "—a group accountability app for building positive habits \uD83D\uDE4C",
                            " ",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }, {}),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [675, 774, 888, 179], function () {
      return e((e.s = 5557));
    }),
      (_N_E = e.O());
  },
]);

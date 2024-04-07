(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [675],
  {
    3271: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return Image;
          },
        });
      let i = r(8754),
        n = r(1757),
        o = n._(r(7294)),
        l = i._(r(3935)),
        a = i._(r(9201)),
        s = r(3914),
        u = r(5494),
        d = r(869);
      r(1905);
      let c = r(1823),
        f = i._(r(4545)),
        g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function p(e, t, r, i, n, o) {
        let l = null == e ? void 0 : e.src;
        if (!e || e["data-loaded-src"] === l) return;
        e["data-loaded-src"] = l;
        let a = "decode" in e ? e.decode() : Promise.resolve();
        a.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (("empty" !== t && n(!0), null == r ? void 0 : r.current)) {
              let t = new Event("load");
              Object.defineProperty(t, "target", { writable: !1, value: e });
              let i = !1,
                n = !1;
              r.current({
                ...t,
                nativeEvent: t,
                currentTarget: e,
                target: e,
                isDefaultPrevented: () => i,
                isPropagationStopped: () => n,
                persist: () => {},
                preventDefault: () => {
                  (i = !0), t.preventDefault();
                },
                stopPropagation: () => {
                  (n = !0), t.stopPropagation();
                },
              });
            }
            (null == i ? void 0 : i.current) && i.current(e);
          }
        });
      }
      function m(e) {
        let [t, r] = o.version.split(".", 2),
          i = parseInt(t, 10),
          n = parseInt(r, 10);
        return i > 18 || (18 === i && n >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let h = (0, o.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: i,
          sizes: n,
          height: l,
          width: a,
          decoding: s,
          className: u,
          style: d,
          fetchPriority: c,
          placeholder: f,
          loading: g,
          unoptimized: h,
          fill: v,
          onLoadRef: b,
          onLoadingCompleteRef: y,
          setBlurComplete: w,
          setShowAltText: S,
          onLoad: _,
          onError: C,
          ...E
        } = e;
        return o.default.createElement("img", {
          ...E,
          ...m(c),
          loading: g,
          width: a,
          height: l,
          decoding: s,
          "data-nimg": v ? "fill" : "1",
          className: u,
          style: d,
          sizes: n,
          srcSet: i,
          src: r,
          ref: (0, o.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (C && (e.src = e.src), e.complete && p(e, f, b, y, w, h));
            },
            [r, f, b, y, w, C, h, t]
          ),
          onLoad: (e) => {
            let t = e.currentTarget;
            p(t, f, b, y, w, h);
          },
          onError: (e) => {
            S(!0), "empty" !== f && w(!0), C && C(e);
          },
        });
      });
      function v(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          i = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...m(r.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(r.src, i), null)
          : o.default.createElement(
              a.default,
              null,
              o.default.createElement("link", {
                key: "__nimg-" + r.src + r.srcSet + r.sizes,
                rel: "preload",
                href: r.srcSet ? void 0 : r.src,
                ...i,
              })
            );
      }
      let Image = (0, o.forwardRef)((e, t) => {
        let r = (0, o.useContext)(c.RouterContext),
          i = (0, o.useContext)(d.ImageConfigContext),
          n = (0, o.useMemo)(() => {
            let e = g || i || u.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [i]),
          { onLoad: l, onLoadingComplete: a } = e,
          p = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          p.current = l;
        }, [l]);
        let m = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          m.current = a;
        }, [a]);
        let [b, y] = (0, o.useState)(!1),
          [w, S] = (0, o.useState)(!1),
          { props: _, meta: C } = (0, s.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: n,
            blurComplete: b,
            showAltText: w,
          });
        return o.default.createElement(
          o.default.Fragment,
          null,
          o.default.createElement(h, {
            ..._,
            unoptimized: C.unoptimized,
            placeholder: C.placeholder,
            fill: C.fill,
            onLoadRef: p,
            onLoadingCompleteRef: m,
            setBlurComplete: y,
            setShowAltText: S,
            ref: t,
          }),
          C.priority
            ? o.default.createElement(v, { isAppRouter: !r, imgAttributes: _ })
            : null
        );
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3914: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(1905);
      let i = r(2393),
        n = r(5494);
      function o(e) {
        return void 0 !== e.default;
      }
      function l(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var r;
        let a,
          s,
          u,
          {
            src: d,
            sizes: c,
            unoptimized: f = !1,
            priority: g = !1,
            loading: p,
            className: m,
            quality: h,
            width: v,
            height: b,
            fill: y = !1,
            style: w,
            onLoad: S,
            onLoadingComplete: _,
            placeholder: C = "empty",
            blurDataURL: E,
            fetchPriority: z,
            layout: P,
            objectFit: j,
            objectPosition: x,
            lazyBoundary: O,
            lazyRoot: I,
            ...R
          } = e,
          { imgConf: M, showAltText: k, blurComplete: N, defaultLoader: A } = t,
          D = M || n.imageConfigDefault;
        if ("allSizes" in D) a = D;
        else {
          let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
            t = D.deviceSizes.sort((e, t) => e - t);
          a = { ...D, allSizes: e, deviceSizes: t };
        }
        let B = R.loader || A;
        delete R.loader, delete R.srcSet;
        let G = "__next_img_default" in B;
        if (G) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = B;
          B = (t) => {
            let { config: r, ...i } = t;
            return e(i);
          };
        }
        if (P) {
          "fill" === P && (y = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[P];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[P];
          t && !c && (c = t);
        }
        let L = "",
          F = l(v),
          W = l(b);
        if ("object" == typeof (r = d) && (o(r) || void 0 !== r.src)) {
          let e = o(d) ? d.default : d;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((s = e.blurWidth),
            (u = e.blurHeight),
            (E = E || e.blurDataURL),
            (L = e.src),
            !y)
          ) {
            if (F || W) {
              if (F && !W) {
                let t = F / e.width;
                W = Math.round(e.height * t);
              } else if (!F && W) {
                let t = W / e.height;
                F = Math.round(e.width * t);
              }
            } else (F = e.width), (W = e.height);
          }
        }
        let U = !g && ("lazy" === p || void 0 === p);
        (!(d = "string" == typeof d ? d : L) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((f = !0), (U = !1)),
          a.unoptimized && (f = !0),
          G && d.endsWith(".svg") && !a.dangerouslyAllowSVG && (f = !0),
          g && (z = "high");
        let T = l(h),
          V = Object.assign(
            y
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: j,
                  objectPosition: x,
                }
              : {},
            k ? {} : { color: "transparent" },
            w
          ),
          q =
            N || "empty" === C
              ? null
              : "blur" === C
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, i.getImageBlurSvg)({
                  widthInt: F,
                  heightInt: W,
                  blurWidth: s,
                  blurHeight: u,
                  blurDataURL: E || "",
                  objectFit: V.objectFit,
                }) +
                '")'
              : 'url("' + C + '")',
          J = q
            ? {
                backgroundSize: V.objectFit || "cover",
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: q,
              }
            : {},
          Y = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: i,
              width: n,
              quality: o,
              sizes: l,
              loader: a,
            } = e;
            if (i) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: u } = (function (e, t, r) {
                let { deviceSizes: i, allSizes: n } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let i; (i = e.exec(r)); i) t.push(parseInt(i[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: n.filter((t) => t >= i[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: n, kind: "w" };
                }
                if ("number" != typeof t) return { widths: i, kind: "w" };
                let o = [
                  ...new Set(
                    [t, 2 * t].map(
                      (e) => n.find((t) => t >= e) || n[n.length - 1]
                    )
                  ),
                ];
                return { widths: o, kind: "x" };
              })(t, n, l),
              d = s.length - 1;
            return {
              sizes: l || "w" !== u ? l : "100vw",
              srcSet: s
                .map(
                  (e, i) =>
                    a({ config: t, src: r, quality: o, width: e }) +
                    " " +
                    ("w" === u ? e : i + 1) +
                    u
                )
                .join(", "),
              src: a({ config: t, src: r, quality: o, width: s[d] }),
            };
          })({
            config: a,
            src: d,
            unoptimized: f,
            width: F,
            quality: T,
            sizes: c,
            loader: B,
          }),
          H = {
            ...R,
            loading: U ? "lazy" : p,
            fetchPriority: z,
            width: F,
            height: W,
            decoding: "async",
            className: m,
            style: { ...V, ...J },
            sizes: Y.sizes,
            srcSet: Y.srcSet,
            src: Y.src,
          },
          $ = { unoptimized: f, priority: g, placeholder: C, fill: y };
        return { props: H, meta: $ };
      }
    },
    2393: function (e, t) {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: i,
            blurHeight: n,
            blurDataURL: o,
            objectFit: l,
          } = e,
          a = i ? 40 * i : t,
          s = n ? 40 * n : r,
          u = a && s ? "viewBox='0 0 " + a + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === l
            ? "xMidYMid"
            : "cover" === l
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    645: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          unstable_getImgProps: function () {
            return s;
          },
          default: function () {
            return u;
          },
        });
      let i = r(8754),
        n = r(3914),
        o = r(1905),
        l = r(3271),
        a = i._(r(4545)),
        s = (e) => {
          (0, o.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, n.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        },
        u = l.Image;
    },
    4545: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: i, quality: n } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(r) +
          "&w=" +
          i +
          "&q=" +
          (n || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        (r.__next_img_default = !0);
      let i = r;
    },
    5675: function (e, t, r) {
      r(645);
    },
  },
]);

import { useSSRContext, mergeProps, unref, withCtx, createVNode, createApp, h, resolveComponent, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { usePage, Link, createInertiaApp, Head } from "@inertiajs/vue3";
import "lodash/isArray.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDesktop, faHotel, faUser, faCubes, faPen, faImage, faCity, faNewspaper, faCableCar, faCarAlt, faCar, faLocationDot, faArrowsRotate, faLayerGroup, faBuildingShield, faHandsHoldingCircle, faTasks, faFileInvoiceDollar, faRecordVinyl, faBuilding, faWarehouse, faScrewdriverWrench, faGear, faBriefcase, faFolderOpen, faUsers, faBoxesStacked, faPeopleCarryBox, faBook, faFolder, faInfinity, faBuildingUser, faPenToSquare, faPersonWalkingDashedLineArrowRight } from "@fortawesome/free-solid-svg-icons";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./bootstrap-CYyj1Q76.js";
import "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js";
import { I } from "../ssr.js";
import LaravelPermissionToVueJS from "laravel-permission-to-vuejs";
import VueApexCharts from "vue3-apexcharts";
import VueNumberFormat from "@coders-tm/vue-number-format";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const _sfc_main$2 = {
  __name: "SideBar",
  __ssrInlineRender: true,
  setup(__props) {
    const user = usePage().props.auth.user;
    library.add(faDesktop);
    library.add(faHotel);
    library.add(faUser);
    library.add(faCubes);
    library.add(faPen);
    library.add(faImage);
    library.add(faCity);
    library.add(faNewspaper);
    library.add(faCableCar);
    library.add(faCarAlt);
    library.add(faCar);
    library.add(faLocationDot);
    library.add(faArrowsRotate);
    library.add(faLayerGroup);
    library.add(faBuildingShield);
    library.add(faHandsHoldingCircle);
    library.add(faTasks);
    library.add(faFileInvoiceDollar);
    library.add(faRecordVinyl);
    library.add(faBuilding);
    library.add(faWarehouse);
    library.add(faScrewdriverWrench);
    library.add(faGear);
    library.add(faBriefcase);
    library.add(faFolderOpen);
    library.add(faUsers);
    library.add(faBoxesStacked);
    library.add(faPeopleCarryBox);
    library.add(faBook);
    library.add(faFolder);
    library.add(faInfinity);
    library.add(faBuildingUser);
    library.add(faPenToSquare);
    library.add(faPersonWalkingDashedLineArrowRight);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "bg-white sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light",
        id: "sidenav-main"
      }, _attrs))} data-v-a1e1ebba><div class="scrollbar-inner" data-v-a1e1ebba><div class="mb-4 text-center sidenav-header" data-v-a1e1ebba>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "navbar-brand text-primary",
        href: _ctx.route("admin.dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img src="/assets/PublicArea/images/logo.svg" alt="" class="home-logo mt-1 ml-1" data-v-a1e1ebba${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: "/assets/PublicArea/images/logo.svg",
                alt: "",
                class: "home-logo mt-1 ml-1"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><br data-v-a1e1ebba><div class="mt-3 navbar-inner" data-v-a1e1ebba><div class="collapse navbar-collapse" id="sidenav-collapse-main" data-v-a1e1ebba><ul class="mb-3 navbar-nav" data-v-a1e1ebba><li class="nav-item" data-v-a1e1ebba>`);
      _push(ssrRenderComponent(unref(Link), {
        class: [{ "active__sidebar": _ctx.route().current() == "admin.dashboard" }, "nav-link active-preloader"],
        href: _ctx.route("admin.dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa fa-desktop" data-v-a1e1ebba${_scopeId}></i><span class="ml-2 nav-link-text font-weight-600" data-v-a1e1ebba${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode("i", { class: "fa fa-desktop" }),
              createVNode("span", { class: "ml-2 nav-link-text font-weight-600" }, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-a1e1ebba>`);
      _push(ssrRenderComponent(unref(Link), {
        class: [{ "active__sidebar": _ctx.route().current() == "admin.bus.index" || _ctx.route().current() == "admin.bus.edit" }, "nav-link active-preloader"],
        href: _ctx.route("admin.bus.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-solid fa-boxes-stacked" data-v-a1e1ebba${_scopeId}></i><span class="ml-2 nav-link-text font-weight-600" data-v-a1e1ebba${_scopeId}>Buses</span>`);
          } else {
            return [
              createVNode("i", { class: "fa-solid fa-boxes-stacked" }),
              createVNode("span", { class: "ml-2 nav-link-text font-weight-600" }, "Buses")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (unref(user).role == 1) {
        _push(`<li class="nav-item" data-v-a1e1ebba>`);
        _push(ssrRenderComponent(unref(Link), {
          class: [{ "active__sidebar": _ctx.route().current() == "admin.customer.index" || _ctx.route().current() == "admin.customer.edit" }, "nav-link active-preloader"],
          href: _ctx.route("admin.customer.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-solid fa-hands-holding-circle" data-v-a1e1ebba${_scopeId}></i><span class="ml-2 nav-link-text font-weight-600" data-v-a1e1ebba${_scopeId}>Customers</span>`);
            } else {
              return [
                createVNode("i", { class: "fa-solid fa-hands-holding-circle" }),
                createVNode("span", { class: "ml-2 nav-link-text font-weight-600" }, "Customers")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(user).role == 1) {
        _push(`<li class="nav-item" data-v-a1e1ebba>`);
        _push(ssrRenderComponent(unref(Link), {
          class: [{ "active__sidebar": _ctx.route().current() == "admin.payment.index" }, "nav-link active-preloader"],
          href: _ctx.route("admin.payment.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-solid fa-money-check" data-v-a1e1ebba${_scopeId}></i><span class="ml-2 nav-link-text font-weight-600" data-v-a1e1ebba${_scopeId}>Payments</span>`);
            } else {
              return [
                createVNode("i", { class: "fa-solid fa-money-check" }),
                createVNode("span", { class: "ml-2 nav-link-text font-weight-600" }, "Payments")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<li class="nav-item" data-v-a1e1ebba>`);
      _push(ssrRenderComponent(unref(Link), {
        class: [{ "active__sidebar": _ctx.route().current() == "admin.booking.index" || _ctx.route().current() == "admin.booking.edit" }, "nav-link active-preloader"],
        href: _ctx.route("admin.booking.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-solid fa-scroll" data-v-a1e1ebba${_scopeId}></i><span class="ml-2 nav-link-text font-weight-600" data-v-a1e1ebba${_scopeId}>Bookings</span>`);
          } else {
            return [
              createVNode("i", { class: "fa-solid fa-scroll" }),
              createVNode("span", { class: "ml-2 nav-link-text font-weight-600" }, "Bookings")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (unref(user).role == 1) {
        _push(`<li class="nav-item" data-v-a1e1ebba><a href="#" data-toggle="collapse" class="${ssrRenderClass([{ "active": _ctx.route().current() == "admin.banner.index" || _ctx.route().current() == "admin.category.index" || _ctx.route().current() == "admin.user.index" }, "nav-link active-preloader"])}" data-target="#userManagementCollapse" aria-expanded="false" aria-controls="userManagementCollapse" data-v-a1e1ebba><i class="fa-solid fa-gear" data-v-a1e1ebba></i><span class="ml-2 nav-link-text font-weight-600" data-v-a1e1ebba>Settings</span></a><ul class="${ssrRenderClass([{ "show": _ctx.$page.url.startsWith("/admin/banner") || _ctx.$page.url.startsWith("/admin/category") || _ctx.$page.url.startsWith("/admin/user") }, "collapse list-unstyled"])}" id="userManagementCollapse" data-v-a1e1ebba><li data-v-a1e1ebba>`);
        _push(ssrRenderComponent(unref(Link), {
          class: ["nav-link ml-4", { "active__sidebar": _ctx.route().current() == "admin.category.index" }],
          href: _ctx.route("admin.category.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fas fa-list-alt" data-v-a1e1ebba${_scopeId}></i><span class="nav-link-text font-weight-400" data-v-a1e1ebba${_scopeId}>Categories</span>`);
            } else {
              return [
                createVNode("i", { class: "fas fa-list-alt" }),
                createVNode("span", { class: "nav-link-text font-weight-400" }, "Categories")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-a1e1ebba>`);
        _push(ssrRenderComponent(unref(Link), {
          class: ["nav-link ml-4", { "active__sidebar": _ctx.route().current() == "admin.banner.index" }],
          href: _ctx.route("admin.banner.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-solid fa-image" data-v-a1e1ebba${_scopeId}></i><span class="nav-link-text font-weight-400" data-v-a1e1ebba${_scopeId}>Banners</span>`);
            } else {
              return [
                createVNode("i", { class: "fa-solid fa-image" }),
                createVNode("span", { class: "nav-link-text font-weight-400" }, "Banners")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-a1e1ebba>`);
        _push(ssrRenderComponent(unref(Link), {
          class: ["nav-link ml-4", { "active__sidebar": _ctx.route().current() == "admin.user.index" }],
          href: _ctx.route("admin.user.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fa-solid fa-user" data-v-a1e1ebba${_scopeId}></i><span class="nav-link-text font-weight-400" data-v-a1e1ebba${_scopeId}>Travel Providers</span>`);
            } else {
              return [
                createVNode("i", { class: "fa-solid fa-user" }),
                createVNode("span", { class: "nav-link-text font-weight-400" }, "Travel Providers")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AdminArea/Main/SideBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SideBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a1e1ebba"]]);
const _sfc_main$1 = {
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    usePage();
    library.add(faUser);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "bg__nav navbar navbar-top navbar-expand navbar-red bg- border-bottom Nav_bar",
        style: { "background": "#1d599a" }
      }, _attrs))} data-v-5c21d43f><div class="container-fluid" data-v-5c21d43f><div class="collapse navbar-collapse" id="navbarSupportedContent" data-v-5c21d43f><ul class="navbar-nav align-items-center ml-md-auto" data-v-5c21d43f><li class="nav-item d-xl-none" data-v-5c21d43f><div class="pr-3 sidenav-toggler sidenav-toggler-dark" data-action="sidenav-pin" data-target="#sidenav-main" data-v-5c21d43f><div class="sidenav-toggler-inner" data-v-5c21d43f><i class="sidenav-toggler-line" data-v-5c21d43f></i><i class="sidenav-toggler-line" data-v-5c21d43f></i><i class="sidenav-toggler-line" data-v-5c21d43f></i></div></div></li></ul><ul class="navbar-nav align-items-center ml-auto ml-md-0" data-v-5c21d43f><li class="nav-item dropdown" data-v-5c21d43f><a class="nav-link pr-4" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-v-5c21d43f><div class="media align-items-center" data-v-5c21d43f><i class="fa fa-user me-sm-1 text-white" data-v-5c21d43f></i><div class="media-body ml-2 d-none d-lg-block" data-v-5c21d43f><span class="mb-0 text-sm font-weight-bold text-white" data-v-5c21d43f>${ssrInterpolate(_ctx.$page.props.auth.user.first_name)}</span></div></div></a><div class="dropdown-menu dropdown-menu-right" data-v-5c21d43f><a class="dropdown-item border-radius-md" href="#" data-v-5c21d43f><i class="ni ni-single-02" data-v-5c21d43f></i><span data-v-5c21d43f>Profile</span></a>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/logout",
        as: "button",
        method: "post",
        class: "dropdown-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="ni ni-user-run" data-v-5c21d43f${_scopeId}></i><span data-v-5c21d43f${_scopeId}>Logout</span>`);
          } else {
            return [
              createVNode("i", { class: "ni ni-user-run" }),
              createVNode("span", null, "Logout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li></ul></div></div></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AdminArea/Main/NavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5c21d43f"]]);
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document) throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function(e, t) {
  var n = [], r = e.document, i = Object.getPrototypeOf, o = n.slice, a = n.concat, s = n.push, u = n.indexOf, l = {}, c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object), h2 = {}, g = function e2(t2) {
    return "function" == typeof t2 && "number" != typeof t2.nodeType;
  }, y = function e2(t2) {
    return null != t2 && t2 === t2.window;
  }, v = { type: true, src: true, noModule: true };
  function m(e2, t2, n2) {
    var i2, o2 = (t2 = t2 || r).createElement("script");
    if (o2.text = e2, n2) for (i2 in v) n2[i2] && (o2[i2] = n2[i2]);
    t2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function x(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? l[c.call(e2)] || "object" : typeof e2;
  }
  var w = function(e2, t2) {
    return new w.fn.init(e2, t2);
  }, T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function() {
    return o.call(this);
  }, get: function(e2) {
    return null == e2 ? o.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = w.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return w.each(this, e2);
  }, map: function(e2) {
    return this.pushStack(w.map(this, function(t2, n2) {
      return e2.call(t2, n2, t2);
    }));
  }, slice: function() {
    return this.pushStack(o.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(n2 >= 0 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: s, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
    for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || g(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++) if (null != (e2 = arguments[s2])) for (t2 in e2) n2 = a2[t2], a2 !== (r2 = e2[t2]) && (l2 && r2 && (w.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (i2 ? (i2 = false, o2 = n2 && Array.isArray(n2) ? n2 : []) : o2 = n2 && w.isPlainObject(n2) ? n2 : {}, a2[t2] = w.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== c.call(e2)) && (!(t2 = i(e2)) || "function" == typeof (n2 = f.call(t2, "constructor") && t2.constructor) && p.call(n2) === d);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2) return false;
    return true;
  }, globalEval: function(e2) {
    m(e2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (C(e2)) {
      for (n2 = e2.length; r2 < n2; r2++) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    } else for (r2 in e2) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    return e2;
  }, trim: function(e2) {
    return null == e2 ? "" : (e2 + "").replace(T, "");
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (C(Object(e2)) ? w.merge(n2, "string" == typeof e2 ? [e2] : e2) : s.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : u.call(t2, e2, n2);
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++) e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2, i2 = [], o2 = 0, a2 = e2.length, s2 = !n2; o2 < a2; o2++) (r2 = !t2(e2[o2], o2)) !== s2 && i2.push(e2[o2]);
    return i2;
  }, map: function(e2, t2, n2) {
    var r2, i2, o2 = 0, s2 = [];
    if (C(e2)) for (r2 = e2.length; o2 < r2; o2++) null != (i2 = t2(e2[o2], o2, n2)) && s2.push(i2);
    else for (o2 in e2) null != (i2 = t2(e2[o2], o2, n2)) && s2.push(i2);
    return a.apply([], s2);
  }, guid: 1, support: h2 }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    l["[object " + t2 + "]"] = t2.toLowerCase();
  });
  function C(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = x(e2);
    return !g(e2) && !y(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && t2 > 0 && t2 - 1 in e2);
  }
  var E = function(e2) {
    var t2, n2, r2, i2, o2, a2, s2, u2, l2, c2, f2, p2, d2, h3, g2, y2, v2, m2, x2, b = "sizzle" + 1 * /* @__PURE__ */ new Date(), w2 = e2.document, T2 = 0, C2 = 0, E2 = ae2(), k2 = ae2(), S2 = ae2(), D2 = function(e3, t3) {
      return e3 === t3 && (f2 = true), 0;
    }, N2 = {}.hasOwnProperty, A2 = [], j2 = A2.pop, q2 = A2.push, L2 = A2.push, H2 = A2.slice, O2 = function(e3, t3) {
      for (var n3 = 0, r3 = e3.length; n3 < r3; n3++) if (e3[n3] === t3) return n3;
      return -1;
    }, P2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M2 = "[\\x20\\t\\r\\n\\f]", R2 = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I3 = "\\[" + M2 + "*(" + R2 + ")(?:" + M2 + "*([*^$|!~]?=)" + M2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + R2 + "))|)" + M2 + "*\\]", W2 = ":(" + R2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + I3 + ")*)|.*)\\)|)", $3 = new RegExp(M2 + "+", "g"), B2 = new RegExp("^" + M2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M2 + "+$", "g"), F2 = new RegExp("^" + M2 + "*," + M2 + "*"), _2 = new RegExp("^" + M2 + "*([>+~]|" + M2 + ")" + M2 + "*"), z2 = new RegExp("=" + M2 + `*([^\\]'"]*?)` + M2 + "*\\]", "g"), X2 = new RegExp(W2), U2 = new RegExp("^" + R2 + "$"), V2 = { ID: new RegExp("^#(" + R2 + ")"), CLASS: new RegExp("^\\.(" + R2 + ")"), TAG: new RegExp("^(" + R2 + "|[*])"), ATTR: new RegExp("^" + I3), PSEUDO: new RegExp("^" + W2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M2 + "*(even|odd|(([+-]|)(\\d*)n|)" + M2 + "*(?:([+-]|)" + M2 + "*(\\d+)|))" + M2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + P2 + ")$", "i"), needsContext: new RegExp("^" + M2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M2 + "*((?:-\\d)?\\d*)" + M2 + "*\\)|)(?=[^-]|$)", "i") }, G2 = /^(?:input|select|textarea|button)$/i, Y2 = /^h\d$/i, Q2 = /^[^{]+\{\s*\[native \w/, J2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K2 = /[+~]/, Z2 = new RegExp("\\\\([\\da-f]{1,6}" + M2 + "?|(" + M2 + ")|.)", "ig"), ee2 = function(e3, t3, n3) {
      var r3 = "0x" + t3 - 65536;
      return r3 !== r3 || n3 ? t3 : r3 < 0 ? String.fromCharCode(r3 + 65536) : String.fromCharCode(r3 >> 10 | 55296, 1023 & r3 | 56320);
    }, te2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne2 = function(e3, t3) {
      return t3 ? "\0" === e3 ? "�" : e3.slice(0, -1) + "\\" + e3.charCodeAt(e3.length - 1).toString(16) + " " : "\\" + e3;
    }, re2 = function() {
      p2();
    }, ie2 = me2(function(e3) {
      return true === e3.disabled && ("form" in e3 || "label" in e3);
    }, { dir: "parentNode", next: "legend" });
    try {
      L2.apply(A2 = H2.call(w2.childNodes), w2.childNodes), A2[w2.childNodes.length].nodeType;
    } catch (e3) {
      L2 = { apply: A2.length ? function(e4, t3) {
        q2.apply(e4, H2.call(t3));
      } : function(e4, t3) {
        var n3 = e4.length, r3 = 0;
        while (e4[n3++] = t3[r3++]) ;
        e4.length = n3 - 1;
      } };
    }
    function oe2(e3, t3, r3, i3) {
      var o3, s3, l3, c3, f3, h4, v3, m3 = t3 && t3.ownerDocument, T3 = t3 ? t3.nodeType : 9;
      if (r3 = r3 || [], "string" != typeof e3 || !e3 || 1 !== T3 && 9 !== T3 && 11 !== T3) return r3;
      if (!i3 && ((t3 ? t3.ownerDocument || t3 : w2) !== d2 && p2(t3), t3 = t3 || d2, g2)) {
        if (11 !== T3 && (f3 = J2.exec(e3))) if (o3 = f3[1]) {
          if (9 === T3) {
            if (!(l3 = t3.getElementById(o3))) return r3;
            if (l3.id === o3) return r3.push(l3), r3;
          } else if (m3 && (l3 = m3.getElementById(o3)) && x2(t3, l3) && l3.id === o3) return r3.push(l3), r3;
        } else {
          if (f3[2]) return L2.apply(r3, t3.getElementsByTagName(e3)), r3;
          if ((o3 = f3[3]) && n2.getElementsByClassName && t3.getElementsByClassName) return L2.apply(r3, t3.getElementsByClassName(o3)), r3;
        }
        if (n2.qsa && !S2[e3 + " "] && (!y2 || !y2.test(e3))) {
          if (1 !== T3) m3 = t3, v3 = e3;
          else if ("object" !== t3.nodeName.toLowerCase()) {
            (c3 = t3.getAttribute("id")) ? c3 = c3.replace(te2, ne2) : t3.setAttribute("id", c3 = b), s3 = (h4 = a2(e3)).length;
            while (s3--) h4[s3] = "#" + c3 + " " + ve2(h4[s3]);
            v3 = h4.join(","), m3 = K2.test(e3) && ge2(t3.parentNode) || t3;
          }
          if (v3) try {
            return L2.apply(r3, m3.querySelectorAll(v3)), r3;
          } catch (e4) {
          } finally {
            c3 === b && t3.removeAttribute("id");
          }
        }
      }
      return u2(e3.replace(B2, "$1"), t3, r3, i3);
    }
    function ae2() {
      var e3 = [];
      function t3(n3, i3) {
        return e3.push(n3 + " ") > r2.cacheLength && delete t3[e3.shift()], t3[n3 + " "] = i3;
      }
      return t3;
    }
    function se2(e3) {
      return e3[b] = true, e3;
    }
    function ue2(e3) {
      var t3 = d2.createElement("fieldset");
      try {
        return !!e3(t3);
      } catch (e4) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function le2(e3, t3) {
      var n3 = e3.split("|"), i3 = n3.length;
      while (i3--) r2.attrHandle[n3[i3]] = t3;
    }
    function ce2(e3, t3) {
      var n3 = t3 && e3, r3 = n3 && 1 === e3.nodeType && 1 === t3.nodeType && e3.sourceIndex - t3.sourceIndex;
      if (r3) return r3;
      if (n3) {
        while (n3 = n3.nextSibling) if (n3 === t3) return -1;
      }
      return e3 ? 1 : -1;
    }
    function fe2(e3) {
      return function(t3) {
        return "input" === t3.nodeName.toLowerCase() && t3.type === e3;
      };
    }
    function pe2(e3) {
      return function(t3) {
        var n3 = t3.nodeName.toLowerCase();
        return ("input" === n3 || "button" === n3) && t3.type === e3;
      };
    }
    function de2(e3) {
      return function(t3) {
        return "form" in t3 ? t3.parentNode && false === t3.disabled ? "label" in t3 ? "label" in t3.parentNode ? t3.parentNode.disabled === e3 : t3.disabled === e3 : t3.isDisabled === e3 || t3.isDisabled !== !e3 && ie2(t3) === e3 : t3.disabled === e3 : "label" in t3 && t3.disabled === e3;
      };
    }
    function he2(e3) {
      return se2(function(t3) {
        return t3 = +t3, se2(function(n3, r3) {
          var i3, o3 = e3([], n3.length, t3), a3 = o3.length;
          while (a3--) n3[i3 = o3[a3]] && (n3[i3] = !(r3[i3] = n3[i3]));
        });
      });
    }
    function ge2(e3) {
      return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
    }
    n2 = oe2.support = {}, o2 = oe2.isXML = function(e3) {
      var t3 = e3 && (e3.ownerDocument || e3).documentElement;
      return !!t3 && "HTML" !== t3.nodeName;
    }, p2 = oe2.setDocument = function(e3) {
      var t3, i3, a3 = e3 ? e3.ownerDocument || e3 : w2;
      return a3 !== d2 && 9 === a3.nodeType && a3.documentElement ? (d2 = a3, h3 = d2.documentElement, g2 = !o2(d2), w2 !== d2 && (i3 = d2.defaultView) && i3.top !== i3 && (i3.addEventListener ? i3.addEventListener("unload", re2, false) : i3.attachEvent && i3.attachEvent("onunload", re2)), n2.attributes = ue2(function(e4) {
        return e4.className = "i", !e4.getAttribute("className");
      }), n2.getElementsByTagName = ue2(function(e4) {
        return e4.appendChild(d2.createComment("")), !e4.getElementsByTagName("*").length;
      }), n2.getElementsByClassName = Q2.test(d2.getElementsByClassName), n2.getById = ue2(function(e4) {
        return h3.appendChild(e4).id = b, !d2.getElementsByName || !d2.getElementsByName(b).length;
      }), n2.getById ? (r2.filter.ID = function(e4) {
        var t4 = e4.replace(Z2, ee2);
        return function(e5) {
          return e5.getAttribute("id") === t4;
        };
      }, r2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && g2) {
          var n3 = t4.getElementById(e4);
          return n3 ? [n3] : [];
        }
      }) : (r2.filter.ID = function(e4) {
        var t4 = e4.replace(Z2, ee2);
        return function(e5) {
          var n3 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
          return n3 && n3.value === t4;
        };
      }, r2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && g2) {
          var n3, r3, i4, o3 = t4.getElementById(e4);
          if (o3) {
            if ((n3 = o3.getAttributeNode("id")) && n3.value === e4) return [o3];
            i4 = t4.getElementsByName(e4), r3 = 0;
            while (o3 = i4[r3++]) if ((n3 = o3.getAttributeNode("id")) && n3.value === e4) return [o3];
          }
          return [];
        }
      }), r2.find.TAG = n2.getElementsByTagName ? function(e4, t4) {
        return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : n2.qsa ? t4.querySelectorAll(e4) : void 0;
      } : function(e4, t4) {
        var n3, r3 = [], i4 = 0, o3 = t4.getElementsByTagName(e4);
        if ("*" === e4) {
          while (n3 = o3[i4++]) 1 === n3.nodeType && r3.push(n3);
          return r3;
        }
        return o3;
      }, r2.find.CLASS = n2.getElementsByClassName && function(e4, t4) {
        if ("undefined" != typeof t4.getElementsByClassName && g2) return t4.getElementsByClassName(e4);
      }, v2 = [], y2 = [], (n2.qsa = Q2.test(d2.querySelectorAll)) && (ue2(function(e4) {
        h3.appendChild(e4).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e4.querySelectorAll("[msallowcapture^='']").length && y2.push("[*^$]=" + M2 + `*(?:''|"")`), e4.querySelectorAll("[selected]").length || y2.push("\\[" + M2 + "*(?:value|" + P2 + ")"), e4.querySelectorAll("[id~=" + b + "-]").length || y2.push("~="), e4.querySelectorAll(":checked").length || y2.push(":checked"), e4.querySelectorAll("a#" + b + "+*").length || y2.push(".#.+[+~]");
      }), ue2(function(e4) {
        e4.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t4 = d2.createElement("input");
        t4.setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), e4.querySelectorAll("[name=d]").length && y2.push("name" + M2 + "*[*^$|!~]?="), 2 !== e4.querySelectorAll(":enabled").length && y2.push(":enabled", ":disabled"), h3.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && y2.push(":enabled", ":disabled"), e4.querySelectorAll("*,:x"), y2.push(",.*:");
      })), (n2.matchesSelector = Q2.test(m2 = h3.matches || h3.webkitMatchesSelector || h3.mozMatchesSelector || h3.oMatchesSelector || h3.msMatchesSelector)) && ue2(function(e4) {
        n2.disconnectedMatch = m2.call(e4, "*"), m2.call(e4, "[s!='']:x"), v2.push("!=", W2);
      }), y2 = y2.length && new RegExp(y2.join("|")), v2 = v2.length && new RegExp(v2.join("|")), t3 = Q2.test(h3.compareDocumentPosition), x2 = t3 || Q2.test(h3.contains) ? function(e4, t4) {
        var n3 = 9 === e4.nodeType ? e4.documentElement : e4, r3 = t4 && t4.parentNode;
        return e4 === r3 || !(!r3 || 1 !== r3.nodeType || !(n3.contains ? n3.contains(r3) : e4.compareDocumentPosition && 16 & e4.compareDocumentPosition(r3)));
      } : function(e4, t4) {
        if (t4) {
          while (t4 = t4.parentNode) if (t4 === e4) return true;
        }
        return false;
      }, D2 = t3 ? function(e4, t4) {
        if (e4 === t4) return f2 = true, 0;
        var r3 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
        return r3 || (1 & (r3 = (e4.ownerDocument || e4) === (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !n2.sortDetached && t4.compareDocumentPosition(e4) === r3 ? e4 === d2 || e4.ownerDocument === w2 && x2(w2, e4) ? -1 : t4 === d2 || t4.ownerDocument === w2 && x2(w2, t4) ? 1 : c2 ? O2(c2, e4) - O2(c2, t4) : 0 : 4 & r3 ? -1 : 1);
      } : function(e4, t4) {
        if (e4 === t4) return f2 = true, 0;
        var n3, r3 = 0, i4 = e4.parentNode, o3 = t4.parentNode, a4 = [e4], s3 = [t4];
        if (!i4 || !o3) return e4 === d2 ? -1 : t4 === d2 ? 1 : i4 ? -1 : o3 ? 1 : c2 ? O2(c2, e4) - O2(c2, t4) : 0;
        if (i4 === o3) return ce2(e4, t4);
        n3 = e4;
        while (n3 = n3.parentNode) a4.unshift(n3);
        n3 = t4;
        while (n3 = n3.parentNode) s3.unshift(n3);
        while (a4[r3] === s3[r3]) r3++;
        return r3 ? ce2(a4[r3], s3[r3]) : a4[r3] === w2 ? -1 : s3[r3] === w2 ? 1 : 0;
      }, d2) : d2;
    }, oe2.matches = function(e3, t3) {
      return oe2(e3, null, null, t3);
    }, oe2.matchesSelector = function(e3, t3) {
      if ((e3.ownerDocument || e3) !== d2 && p2(e3), t3 = t3.replace(z2, "='$1']"), n2.matchesSelector && g2 && !S2[t3 + " "] && (!v2 || !v2.test(t3)) && (!y2 || !y2.test(t3))) try {
        var r3 = m2.call(e3, t3);
        if (r3 || n2.disconnectedMatch || e3.document && 11 !== e3.document.nodeType) return r3;
      } catch (e4) {
      }
      return oe2(t3, d2, null, [e3]).length > 0;
    }, oe2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) !== d2 && p2(e3), x2(e3, t3);
    }, oe2.attr = function(e3, t3) {
      (e3.ownerDocument || e3) !== d2 && p2(e3);
      var i3 = r2.attrHandle[t3.toLowerCase()], o3 = i3 && N2.call(r2.attrHandle, t3.toLowerCase()) ? i3(e3, t3, !g2) : void 0;
      return void 0 !== o3 ? o3 : n2.attributes || !g2 ? e3.getAttribute(t3) : (o3 = e3.getAttributeNode(t3)) && o3.specified ? o3.value : null;
    }, oe2.escape = function(e3) {
      return (e3 + "").replace(te2, ne2);
    }, oe2.error = function(e3) {
      throw new Error("Syntax error, unrecognized expression: " + e3);
    }, oe2.uniqueSort = function(e3) {
      var t3, r3 = [], i3 = 0, o3 = 0;
      if (f2 = !n2.detectDuplicates, c2 = !n2.sortStable && e3.slice(0), e3.sort(D2), f2) {
        while (t3 = e3[o3++]) t3 === e3[o3] && (i3 = r3.push(o3));
        while (i3--) e3.splice(r3[i3], 1);
      }
      return c2 = null, e3;
    }, i2 = oe2.getText = function(e3) {
      var t3, n3 = "", r3 = 0, o3 = e3.nodeType;
      if (o3) {
        if (1 === o3 || 9 === o3 || 11 === o3) {
          if ("string" == typeof e3.textContent) return e3.textContent;
          for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) n3 += i2(e3);
        } else if (3 === o3 || 4 === o3) return e3.nodeValue;
      } else while (t3 = e3[r3++]) n3 += i2(t3);
      return n3;
    }, (r2 = oe2.selectors = { cacheLength: 50, createPseudo: se2, match: V2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(Z2, ee2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(Z2, ee2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || oe2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && oe2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[6] && e3[2];
      return V2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && X2.test(n3) && (t3 = a2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      var t3 = e3.replace(Z2, ee2).toLowerCase();
      return "*" === e3 ? function() {
        return true;
      } : function(e4) {
        return e4.nodeName && e4.nodeName.toLowerCase() === t3;
      };
    }, CLASS: function(e3) {
      var t3 = E2[e3 + " "];
      return t3 || (t3 = new RegExp("(^|" + M2 + ")" + e3 + "(" + M2 + "|$)")) && E2(e3, function(e4) {
        return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
      });
    }, ATTR: function(e3, t3, n3) {
      return function(r3) {
        var i3 = oe2.attr(r3, e3);
        return null == i3 ? "!=" === t3 : !t3 || (i3 += "", "=" === t3 ? i3 === n3 : "!=" === t3 ? i3 !== n3 : "^=" === t3 ? n3 && 0 === i3.indexOf(n3) : "*=" === t3 ? n3 && i3.indexOf(n3) > -1 : "$=" === t3 ? n3 && i3.slice(-n3.length) === n3 : "~=" === t3 ? (" " + i3.replace($3, " ") + " ").indexOf(n3) > -1 : "|=" === t3 && (i3 === n3 || i3.slice(0, n3.length + 1) === n3 + "-"));
      };
    }, CHILD: function(e3, t3, n3, r3, i3) {
      var o3 = "nth" !== e3.slice(0, 3), a3 = "last" !== e3.slice(-4), s3 = "of-type" === t3;
      return 1 === r3 && 0 === i3 ? function(e4) {
        return !!e4.parentNode;
      } : function(t4, n4, u3) {
        var l3, c3, f3, p3, d3, h4, g3 = o3 !== a3 ? "nextSibling" : "previousSibling", y3 = t4.parentNode, v3 = s3 && t4.nodeName.toLowerCase(), m3 = !u3 && !s3, x3 = false;
        if (y3) {
          if (o3) {
            while (g3) {
              p3 = t4;
              while (p3 = p3[g3]) if (s3 ? p3.nodeName.toLowerCase() === v3 : 1 === p3.nodeType) return false;
              h4 = g3 = "only" === e3 && !h4 && "nextSibling";
            }
            return true;
          }
          if (h4 = [a3 ? y3.firstChild : y3.lastChild], a3 && m3) {
            x3 = (d3 = (l3 = (c3 = (f3 = (p3 = y3)[b] || (p3[b] = {}))[p3.uniqueID] || (f3[p3.uniqueID] = {}))[e3] || [])[0] === T2 && l3[1]) && l3[2], p3 = d3 && y3.childNodes[d3];
            while (p3 = ++d3 && p3 && p3[g3] || (x3 = d3 = 0) || h4.pop()) if (1 === p3.nodeType && ++x3 && p3 === t4) {
              c3[e3] = [T2, d3, x3];
              break;
            }
          } else if (m3 && (x3 = d3 = (l3 = (c3 = (f3 = (p3 = t4)[b] || (p3[b] = {}))[p3.uniqueID] || (f3[p3.uniqueID] = {}))[e3] || [])[0] === T2 && l3[1]), false === x3) {
            while (p3 = ++d3 && p3 && p3[g3] || (x3 = d3 = 0) || h4.pop()) if ((s3 ? p3.nodeName.toLowerCase() === v3 : 1 === p3.nodeType) && ++x3 && (m3 && ((c3 = (f3 = p3[b] || (p3[b] = {}))[p3.uniqueID] || (f3[p3.uniqueID] = {}))[e3] = [T2, x3]), p3 === t4)) break;
          }
          return (x3 -= i3) === r3 || x3 % r3 == 0 && x3 / r3 >= 0;
        }
      };
    }, PSEUDO: function(e3, t3) {
      var n3, i3 = r2.pseudos[e3] || r2.setFilters[e3.toLowerCase()] || oe2.error("unsupported pseudo: " + e3);
      return i3[b] ? i3(t3) : i3.length > 1 ? (n3 = [e3, e3, "", t3], r2.setFilters.hasOwnProperty(e3.toLowerCase()) ? se2(function(e4, n4) {
        var r3, o3 = i3(e4, t3), a3 = o3.length;
        while (a3--) e4[r3 = O2(e4, o3[a3])] = !(n4[r3] = o3[a3]);
      }) : function(e4) {
        return i3(e4, 0, n3);
      }) : i3;
    } }, pseudos: { not: se2(function(e3) {
      var t3 = [], n3 = [], r3 = s2(e3.replace(B2, "$1"));
      return r3[b] ? se2(function(e4, t4, n4, i3) {
        var o3, a3 = r3(e4, null, i3, []), s3 = e4.length;
        while (s3--) (o3 = a3[s3]) && (e4[s3] = !(t4[s3] = o3));
      }) : function(e4, i3, o3) {
        return t3[0] = e4, r3(t3, null, o3, n3), t3[0] = null, !n3.pop();
      };
    }), has: se2(function(e3) {
      return function(t3) {
        return oe2(e3, t3).length > 0;
      };
    }), contains: se2(function(e3) {
      return e3 = e3.replace(Z2, ee2), function(t3) {
        return (t3.textContent || t3.innerText || i2(t3)).indexOf(e3) > -1;
      };
    }), lang: se2(function(e3) {
      return U2.test(e3 || "") || oe2.error("unsupported lang: " + e3), e3 = e3.replace(Z2, ee2).toLowerCase(), function(t3) {
        var n3;
        do {
          if (n3 = g2 ? t3.lang : t3.getAttribute("xml:lang") || t3.getAttribute("lang")) return (n3 = n3.toLowerCase()) === e3 || 0 === n3.indexOf(e3 + "-");
        } while ((t3 = t3.parentNode) && 1 === t3.nodeType);
        return false;
      };
    }), target: function(t3) {
      var n3 = e2.location && e2.location.hash;
      return n3 && n3.slice(1) === t3.id;
    }, root: function(e3) {
      return e3 === h3;
    }, focus: function(e3) {
      return e3 === d2.activeElement && (!d2.hasFocus || d2.hasFocus()) && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: de2(false), disabled: de2(true), checked: function(e3) {
      var t3 = e3.nodeName.toLowerCase();
      return "input" === t3 && !!e3.checked || "option" === t3 && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) if (e3.nodeType < 6) return false;
      return true;
    }, parent: function(e3) {
      return !r2.pseudos.empty(e3);
    }, header: function(e3) {
      return Y2.test(e3.nodeName);
    }, input: function(e3) {
      return G2.test(e3.nodeName);
    }, button: function(e3) {
      var t3 = e3.nodeName.toLowerCase();
      return "input" === t3 && "button" === e3.type || "button" === t3;
    }, text: function(e3) {
      var t3;
      return "input" === e3.nodeName.toLowerCase() && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: he2(function() {
      return [0];
    }), last: he2(function(e3, t3) {
      return [t3 - 1];
    }), eq: he2(function(e3, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: he2(function(e3, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), odd: he2(function(e3, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), lt: he2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; --r3 >= 0; ) e3.push(r3);
      return e3;
    }), gt: he2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e3.push(r3);
      return e3;
    }) } }).pseudos.nth = r2.pseudos.eq;
    for (t2 in { radio: true, checkbox: true, file: true, password: true, image: true }) r2.pseudos[t2] = fe2(t2);
    for (t2 in { submit: true, reset: true }) r2.pseudos[t2] = pe2(t2);
    function ye2() {
    }
    ye2.prototype = r2.filters = r2.pseudos, r2.setFilters = new ye2(), a2 = oe2.tokenize = function(e3, t3) {
      var n3, i3, o3, a3, s3, u3, l3, c3 = k2[e3 + " "];
      if (c3) return t3 ? 0 : c3.slice(0);
      s3 = e3, u3 = [], l3 = r2.preFilter;
      while (s3) {
        n3 && !(i3 = F2.exec(s3)) || (i3 && (s3 = s3.slice(i3[0].length) || s3), u3.push(o3 = [])), n3 = false, (i3 = _2.exec(s3)) && (n3 = i3.shift(), o3.push({ value: n3, type: i3[0].replace(B2, " ") }), s3 = s3.slice(n3.length));
        for (a3 in r2.filter) !(i3 = V2[a3].exec(s3)) || l3[a3] && !(i3 = l3[a3](i3)) || (n3 = i3.shift(), o3.push({ value: n3, type: a3, matches: i3 }), s3 = s3.slice(n3.length));
        if (!n3) break;
      }
      return t3 ? s3.length : s3 ? oe2.error(e3) : k2(e3, u3).slice(0);
    };
    function ve2(e3) {
      for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++) r3 += e3[t3].value;
      return r3;
    }
    function me2(e3, t3, n3) {
      var r3 = t3.dir, i3 = t3.next, o3 = i3 || r3, a3 = n3 && "parentNode" === o3, s3 = C2++;
      return t3.first ? function(t4, n4, i4) {
        while (t4 = t4[r3]) if (1 === t4.nodeType || a3) return e3(t4, n4, i4);
        return false;
      } : function(t4, n4, u3) {
        var l3, c3, f3, p3 = [T2, s3];
        if (u3) {
          while (t4 = t4[r3]) if ((1 === t4.nodeType || a3) && e3(t4, n4, u3)) return true;
        } else while (t4 = t4[r3]) if (1 === t4.nodeType || a3) if (f3 = t4[b] || (t4[b] = {}), c3 = f3[t4.uniqueID] || (f3[t4.uniqueID] = {}), i3 && i3 === t4.nodeName.toLowerCase()) t4 = t4[r3] || t4;
        else {
          if ((l3 = c3[o3]) && l3[0] === T2 && l3[1] === s3) return p3[2] = l3[2];
          if (c3[o3] = p3, p3[2] = e3(t4, n4, u3)) return true;
        }
        return false;
      };
    }
    function xe2(e3) {
      return e3.length > 1 ? function(t3, n3, r3) {
        var i3 = e3.length;
        while (i3--) if (!e3[i3](t3, n3, r3)) return false;
        return true;
      } : e3[0];
    }
    function be2(e3, t3, n3) {
      for (var r3 = 0, i3 = t3.length; r3 < i3; r3++) oe2(e3, t3[r3], n3);
      return n3;
    }
    function we2(e3, t3, n3, r3, i3) {
      for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++) (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
      return a3;
    }
    function Te2(e3, t3, n3, r3, i3, o3) {
      return r3 && !r3[b] && (r3 = Te2(r3)), i3 && !i3[b] && (i3 = Te2(i3, o3)), se2(function(o4, a3, s3, u3) {
        var l3, c3, f3, p3 = [], d3 = [], h4 = a3.length, g3 = o4 || be2(t3 || "*", s3.nodeType ? [s3] : s3, []), y3 = !e3 || !o4 && t3 ? g3 : we2(g3, p3, e3, s3, u3), v3 = n3 ? i3 || (o4 ? e3 : h4 || r3) ? [] : a3 : y3;
        if (n3 && n3(y3, v3, s3, u3), r3) {
          l3 = we2(v3, d3), r3(l3, [], s3, u3), c3 = l3.length;
          while (c3--) (f3 = l3[c3]) && (v3[d3[c3]] = !(y3[d3[c3]] = f3));
        }
        if (o4) {
          if (i3 || e3) {
            if (i3) {
              l3 = [], c3 = v3.length;
              while (c3--) (f3 = v3[c3]) && l3.push(y3[c3] = f3);
              i3(null, v3 = [], l3, u3);
            }
            c3 = v3.length;
            while (c3--) (f3 = v3[c3]) && (l3 = i3 ? O2(o4, f3) : p3[c3]) > -1 && (o4[l3] = !(a3[l3] = f3));
          }
        } else v3 = we2(v3 === a3 ? v3.splice(h4, v3.length) : v3), i3 ? i3(null, a3, v3, u3) : L2.apply(a3, v3);
      });
    }
    function Ce2(e3) {
      for (var t3, n3, i3, o3 = e3.length, a3 = r2.relative[e3[0].type], s3 = a3 || r2.relative[" "], u3 = a3 ? 1 : 0, c3 = me2(function(e4) {
        return e4 === t3;
      }, s3, true), f3 = me2(function(e4) {
        return O2(t3, e4) > -1;
      }, s3, true), p3 = [function(e4, n4, r3) {
        var i4 = !a3 && (r3 || n4 !== l2) || ((t3 = n4).nodeType ? c3(e4, n4, r3) : f3(e4, n4, r3));
        return t3 = null, i4;
      }]; u3 < o3; u3++) if (n3 = r2.relative[e3[u3].type]) p3 = [me2(xe2(p3), n3)];
      else {
        if ((n3 = r2.filter[e3[u3].type].apply(null, e3[u3].matches))[b]) {
          for (i3 = ++u3; i3 < o3; i3++) if (r2.relative[e3[i3].type]) break;
          return Te2(u3 > 1 && xe2(p3), u3 > 1 && ve2(e3.slice(0, u3 - 1).concat({ value: " " === e3[u3 - 2].type ? "*" : "" })).replace(B2, "$1"), n3, u3 < i3 && Ce2(e3.slice(u3, i3)), i3 < o3 && Ce2(e3 = e3.slice(i3)), i3 < o3 && ve2(e3));
        }
        p3.push(n3);
      }
      return xe2(p3);
    }
    function Ee2(e3, t3) {
      var n3 = t3.length > 0, i3 = e3.length > 0, o3 = function(o4, a3, s3, u3, c3) {
        var f3, h4, y3, v3 = 0, m3 = "0", x3 = o4 && [], b2 = [], w3 = l2, C3 = o4 || i3 && r2.find.TAG("*", c3), E3 = T2 += null == w3 ? 1 : Math.random() || 0.1, k3 = C3.length;
        for (c3 && (l2 = a3 === d2 || a3 || c3); m3 !== k3 && null != (f3 = C3[m3]); m3++) {
          if (i3 && f3) {
            h4 = 0, a3 || f3.ownerDocument === d2 || (p2(f3), s3 = !g2);
            while (y3 = e3[h4++]) if (y3(f3, a3 || d2, s3)) {
              u3.push(f3);
              break;
            }
            c3 && (T2 = E3);
          }
          n3 && ((f3 = !y3 && f3) && v3--, o4 && x3.push(f3));
        }
        if (v3 += m3, n3 && m3 !== v3) {
          h4 = 0;
          while (y3 = t3[h4++]) y3(x3, b2, a3, s3);
          if (o4) {
            if (v3 > 0) while (m3--) x3[m3] || b2[m3] || (b2[m3] = j2.call(u3));
            b2 = we2(b2);
          }
          L2.apply(u3, b2), c3 && !o4 && b2.length > 0 && v3 + t3.length > 1 && oe2.uniqueSort(u3);
        }
        return c3 && (T2 = E3, l2 = w3), x3;
      };
      return n3 ? se2(o3) : o3;
    }
    return s2 = oe2.compile = function(e3, t3) {
      var n3, r3 = [], i3 = [], o3 = S2[e3 + " "];
      if (!o3) {
        t3 || (t3 = a2(e3)), n3 = t3.length;
        while (n3--) (o3 = Ce2(t3[n3]))[b] ? r3.push(o3) : i3.push(o3);
        (o3 = S2(e3, Ee2(i3, r3))).selector = e3;
      }
      return o3;
    }, u2 = oe2.select = function(e3, t3, n3, i3) {
      var o3, u3, l3, c3, f3, p3 = "function" == typeof e3 && e3, d3 = !i3 && a2(e3 = p3.selector || e3);
      if (n3 = n3 || [], 1 === d3.length) {
        if ((u3 = d3[0] = d3[0].slice(0)).length > 2 && "ID" === (l3 = u3[0]).type && 9 === t3.nodeType && g2 && r2.relative[u3[1].type]) {
          if (!(t3 = (r2.find.ID(l3.matches[0].replace(Z2, ee2), t3) || [])[0])) return n3;
          p3 && (t3 = t3.parentNode), e3 = e3.slice(u3.shift().value.length);
        }
        o3 = V2.needsContext.test(e3) ? 0 : u3.length;
        while (o3--) {
          if (l3 = u3[o3], r2.relative[c3 = l3.type]) break;
          if ((f3 = r2.find[c3]) && (i3 = f3(l3.matches[0].replace(Z2, ee2), K2.test(u3[0].type) && ge2(t3.parentNode) || t3))) {
            if (u3.splice(o3, 1), !(e3 = i3.length && ve2(u3))) return L2.apply(n3, i3), n3;
            break;
          }
        }
      }
      return (p3 || s2(e3, d3))(i3, t3, !g2, n3, !t3 || K2.test(e3) && ge2(t3.parentNode) || t3), n3;
    }, n2.sortStable = b.split("").sort(D2).join("") === b, n2.detectDuplicates = !!f2, p2(), n2.sortDetached = ue2(function(e3) {
      return 1 & e3.compareDocumentPosition(d2.createElement("fieldset"));
    }), ue2(function(e3) {
      return e3.innerHTML = "<a href='#'></a>", "#" === e3.firstChild.getAttribute("href");
    }) || le2("type|href|height|width", function(e3, t3, n3) {
      if (!n3) return e3.getAttribute(t3, "type" === t3.toLowerCase() ? 1 : 2);
    }), n2.attributes && ue2(function(e3) {
      return e3.innerHTML = "<input/>", e3.firstChild.setAttribute("value", ""), "" === e3.firstChild.getAttribute("value");
    }) || le2("value", function(e3, t3, n3) {
      if (!n3 && "input" === e3.nodeName.toLowerCase()) return e3.defaultValue;
    }), ue2(function(e3) {
      return null == e3.getAttribute("disabled");
    }) || le2(P2, function(e3, t3, n3) {
      var r3;
      if (!n3) return true === e3[t3] ? t3.toLowerCase() : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
    }), oe2;
  }(e);
  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
  var k = function(e2, t2, n2) {
    var r2 = [], i2 = void 0 !== n2;
    while ((e2 = e2[t2]) && 9 !== e2.nodeType) if (1 === e2.nodeType) {
      if (i2 && w(e2).is(n2)) break;
      r2.push(e2);
    }
    return r2;
  }, S = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling) 1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, D = w.expr.match.needsContext;
  function N(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e2, t2, n2) {
    return g(t2) ? w.grep(e2, function(e3, r2) {
      return !!t2.call(e3, r2, e3) !== n2;
    }) : t2.nodeType ? w.grep(e2, function(e3) {
      return e3 === t2 !== n2;
    }) : "string" != typeof t2 ? w.grep(e2, function(e3) {
      return u.call(t2, e3) > -1 !== n2;
    }) : w.filter(t2, e2, n2);
  }
  w.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? w.find.matchesSelector(r2, e2) ? [r2] : [] : w.find.matches(e2, w.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, w.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2) return this.pushStack(w(e2).filter(function() {
      for (t2 = 0; t2 < r2; t2++) if (w.contains(i2[t2], this)) return true;
    }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++) w.find(e2, i2[t2], n2);
    return r2 > 1 ? w.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(j(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(j(this, e2 || [], true));
  }, is: function(e2) {
    return !!j(this, "string" == typeof e2 && D.test(e2) ? w(e2) : e2 || [], false).length;
  } });
  var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function(e2, t2, n2) {
    var i2, o2;
    if (!e2) return this;
    if (n2 = n2 || q, "string" == typeof e2) {
      if (!(i2 = "<" === e2[0] && ">" === e2[e2.length - 1] && e2.length >= 3 ? [null, e2, null] : L.exec(e2)) || !i2[1] && t2) return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (i2[1]) {
        if (t2 = t2 instanceof w ? t2[0] : t2, w.merge(this, w.parseHTML(i2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : r, true)), A.test(i2[1]) && w.isPlainObject(t2)) for (i2 in t2) g(this[i2]) ? this[i2](t2[i2]) : this.attr(i2, t2[i2]);
        return this;
      }
      return (o2 = r.getElementById(i2[2])) && (this[0] = o2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : g(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(w) : w.makeArray(e2, this);
  }).prototype = w.fn, q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/, O = { children: true, contents: true, next: true, prev: true };
  w.fn.extend({ has: function(e2) {
    var t2 = w(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++) if (w.contains(this, t2[e3])) return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && w(e2);
    if (!D.test(e2)) {
      for (; r2 < i2; r2++) for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode) if (n2.nodeType < 11 && (a2 ? a2.index(n2) > -1 : 1 === n2.nodeType && w.find.matchesSelector(n2, e2))) {
        o2.push(n2);
        break;
      }
    }
    return this.pushStack(o2.length > 1 ? w.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? u.call(w(e2), this[0]) : u.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } });
  function P(e2, t2) {
    while ((e2 = e2[t2]) && 1 !== e2.nodeType) ;
    return e2;
  }
  w.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return k(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return k(e2, "parentNode", n2);
  }, next: function(e2) {
    return P(e2, "nextSibling");
  }, prev: function(e2) {
    return P(e2, "previousSibling");
  }, nextAll: function(e2) {
    return k(e2, "nextSibling");
  }, prevAll: function(e2) {
    return k(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return k(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return k(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return S((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return S(e2.firstChild);
  }, contents: function(e2) {
    return N(e2, "iframe") ? e2.contentDocument : (N(e2, "template") && (e2 = e2.content || e2), w.merge([], e2.childNodes));
  } }, function(e2, t2) {
    w.fn[e2] = function(n2, r2) {
      var i2 = w.map(this, t2, n2);
      return "Until" !== e2.slice(-5) && (r2 = n2), r2 && "string" == typeof r2 && (i2 = w.filter(r2, i2)), this.length > 1 && (O[e2] || w.uniqueSort(i2), H.test(e2) && i2.reverse()), this.pushStack(i2);
    };
  });
  var M = /[^\x20\t\r\n\f]+/g;
  function R(e2) {
    var t2 = {};
    return w.each(e2.match(M) || [], function(e3, n2) {
      t2[n2] = true;
    }), t2;
  }
  w.Callbacks = function(e2) {
    e2 = "string" == typeof e2 ? R(e2) : w.extend({}, e2);
    var t2, n2, r2, i2, o2 = [], a2 = [], s2 = -1, u2 = function() {
      for (i2 = i2 || e2.once, r2 = t2 = true; a2.length; s2 = -1) {
        n2 = a2.shift();
        while (++s2 < o2.length) false === o2[s2].apply(n2[0], n2[1]) && e2.stopOnFalse && (s2 = o2.length, n2 = false);
      }
      e2.memory || (n2 = false), t2 = false, i2 && (o2 = n2 ? [] : "");
    }, l2 = { add: function() {
      return o2 && (n2 && !t2 && (s2 = o2.length - 1, a2.push(n2)), function t3(n3) {
        w.each(n3, function(n4, r3) {
          g(r3) ? e2.unique && l2.has(r3) || o2.push(r3) : r3 && r3.length && "string" !== x(r3) && t3(r3);
        });
      }(arguments), n2 && !t2 && u2()), this;
    }, remove: function() {
      return w.each(arguments, function(e3, t3) {
        var n3;
        while ((n3 = w.inArray(t3, o2, n3)) > -1) o2.splice(n3, 1), n3 <= s2 && s2--;
      }), this;
    }, has: function(e3) {
      return e3 ? w.inArray(e3, o2) > -1 : o2.length > 0;
    }, empty: function() {
      return o2 && (o2 = []), this;
    }, disable: function() {
      return i2 = a2 = [], o2 = n2 = "", this;
    }, disabled: function() {
      return !o2;
    }, lock: function() {
      return i2 = a2 = [], n2 || t2 || (o2 = n2 = ""), this;
    }, locked: function() {
      return !!i2;
    }, fireWith: function(e3, n3) {
      return i2 || (n3 = [e3, (n3 = n3 || []).slice ? n3.slice() : n3], a2.push(n3), t2 || u2()), this;
    }, fire: function() {
      return l2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!r2;
    } };
    return l2;
  };
  function I2(e2) {
    return e2;
  }
  function W(e2) {
    throw e2;
  }
  function $2(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && g(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && g(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  w.extend({ Deferred: function(t2) {
    var n2 = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]], r2 = "pending", i2 = { state: function() {
      return r2;
    }, always: function() {
      return o2.done(arguments).fail(arguments), this;
    }, "catch": function(e2) {
      return i2.then(null, e2);
    }, pipe: function() {
      var e2 = arguments;
      return w.Deferred(function(t3) {
        w.each(n2, function(n3, r3) {
          var i3 = g(e2[r3[4]]) && e2[r3[4]];
          o2[r3[1]](function() {
            var e3 = i3 && i3.apply(this, arguments);
            e3 && g(e3.promise) ? e3.promise().progress(t3.notify).done(t3.resolve).fail(t3.reject) : t3[r3[0] + "With"](this, i3 ? [e3] : arguments);
          });
        }), e2 = null;
      }).promise();
    }, then: function(t3, r3, i3) {
      var o3 = 0;
      function a2(t4, n3, r4, i4) {
        return function() {
          var s2 = this, u2 = arguments, l2 = function() {
            var e2, l3;
            if (!(t4 < o3)) {
              if ((e2 = r4.apply(s2, u2)) === n3.promise()) throw new TypeError("Thenable self-resolution");
              l3 = e2 && ("object" == typeof e2 || "function" == typeof e2) && e2.then, g(l3) ? i4 ? l3.call(e2, a2(o3, n3, I2, i4), a2(o3, n3, W, i4)) : (o3++, l3.call(e2, a2(o3, n3, I2, i4), a2(o3, n3, W, i4), a2(o3, n3, I2, n3.notifyWith))) : (r4 !== I2 && (s2 = void 0, u2 = [e2]), (i4 || n3.resolveWith)(s2, u2));
            }
          }, c2 = i4 ? l2 : function() {
            try {
              l2();
            } catch (e2) {
              w.Deferred.exceptionHook && w.Deferred.exceptionHook(e2, c2.stackTrace), t4 + 1 >= o3 && (r4 !== W && (s2 = void 0, u2 = [e2]), n3.rejectWith(s2, u2));
            }
          };
          t4 ? c2() : (w.Deferred.getStackHook && (c2.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c2));
        };
      }
      return w.Deferred(function(e2) {
        n2[0][3].add(a2(0, e2, g(i3) ? i3 : I2, e2.notifyWith)), n2[1][3].add(a2(0, e2, g(t3) ? t3 : I2)), n2[2][3].add(a2(0, e2, g(r3) ? r3 : W));
      }).promise();
    }, promise: function(e2) {
      return null != e2 ? w.extend(e2, i2) : i2;
    } }, o2 = {};
    return w.each(n2, function(e2, t3) {
      var a2 = t3[2], s2 = t3[5];
      i2[t3[1]] = a2.add, s2 && a2.add(function() {
        r2 = s2;
      }, n2[3 - e2][2].disable, n2[3 - e2][3].disable, n2[0][2].lock, n2[0][3].lock), a2.add(t3[3].fire), o2[t3[0]] = function() {
        return o2[t3[0] + "With"](this === o2 ? void 0 : this, arguments), this;
      }, o2[t3[0] + "With"] = a2.fireWith;
    }), i2.promise(o2), t2 && t2.call(o2, o2), o2;
  }, when: function(e2) {
    var t2 = arguments.length, n2 = t2, r2 = Array(n2), i2 = o.call(arguments), a2 = w.Deferred(), s2 = function(e3) {
      return function(n3) {
        r2[e3] = this, i2[e3] = arguments.length > 1 ? o.call(arguments) : n3, --t2 || a2.resolveWith(r2, i2);
      };
    };
    if (t2 <= 1 && ($2(e2, a2.done(s2(n2)).resolve, a2.reject, !t2), "pending" === a2.state() || g(i2[n2] && i2[n2].then))) return a2.then();
    while (n2--) $2(i2[n2], s2(n2), a2.reject);
    return a2.promise();
  } });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function(t2, n2) {
    e.console && e.console.warn && t2 && B.test(t2.name) && e.console.warn("jQuery.Deferred exception: " + t2.message, t2.stack, n2);
  }, w.readyException = function(t2) {
    e.setTimeout(function() {
      throw t2;
    });
  };
  var F = w.Deferred();
  w.fn.ready = function(e2) {
    return F.then(e2)["catch"](function(e3) {
      w.readyException(e3);
    }), this;
  }, w.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --w.readyWait : w.isReady) || (w.isReady = true, true !== e2 && --w.readyWait > 0 || F.resolveWith(r, [w]));
  } }), w.ready.then = F.then;
  function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }
  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
  var z = function(e2, t2, n2, r2, i2, o2, a2) {
    var s2 = 0, u2 = e2.length, l2 = null == n2;
    if ("object" === x(n2)) {
      i2 = true;
      for (s2 in n2) z(e2, t2, s2, n2[s2], true, o2, a2);
    } else if (void 0 !== r2 && (i2 = true, g(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(w(e3), n3);
    })), t2)) for (; s2 < u2; s2++) t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
    return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
  }, X = /^-ms-/, U = /-([a-z])/g;
  function V(e2, t2) {
    return t2.toUpperCase();
  }
  function G(e2) {
    return e2.replace(X, "ms-").replace(U, V);
  }
  var Y = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  function Q() {
    this.expando = w.expando + Q.uid++;
  }
  Q.uid = 1, Q.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, Y(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2) i2[G(t2)] = n2;
    else for (r2 in t2) i2[G(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][G(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(G) : (t2 = G(t2)) in r2 ? [t2] : t2.match(M) || []).length;
        while (n2--) delete r2[t2[n2]];
      }
      (void 0 === t2 || w.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !w.isEmptyObject(t2);
  } };
  var J = new Q(), K = new Q(), Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;
  function te(e2) {
    return "true" === e2 || "false" !== e2 && ("null" === e2 ? null : e2 === +e2 + "" ? +e2 : Z.test(e2) ? JSON.parse(e2) : e2);
  }
  function ne(e2, t2, n2) {
    var r2;
    if (void 0 === n2 && 1 === e2.nodeType) if (r2 = "data-" + t2.replace(ee, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
      try {
        n2 = te(n2);
      } catch (e3) {
      }
      K.set(e2, t2, n2);
    } else n2 = void 0;
    return n2;
  }
  w.extend({ hasData: function(e2) {
    return K.hasData(e2) || J.hasData(e2);
  }, data: function(e2, t2, n2) {
    return K.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    K.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return J.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    J.remove(e2, t2);
  } }), w.fn.extend({ data: function(e2, t2) {
    var n2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === e2) {
      if (this.length && (i2 = K.get(o2), 1 === o2.nodeType && !J.get(o2, "hasDataAttrs"))) {
        n2 = a2.length;
        while (n2--) a2[n2] && 0 === (r2 = a2[n2].name).indexOf("data-") && (r2 = G(r2.slice(5)), ne(o2, r2, i2[r2]));
        J.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof e2 ? this.each(function() {
      K.set(this, e2);
    }) : z(this, function(t3) {
      var n3;
      if (o2 && void 0 === t3) {
        if (void 0 !== (n3 = K.get(o2, e2))) return n3;
        if (void 0 !== (n3 = ne(o2, e2))) return n3;
      } else this.each(function() {
        K.set(this, e2, t3);
      });
    }, null, t2, arguments.length > 1, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      K.remove(this, e2);
    });
  } }), w.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2) return t2 = (t2 || "fx") + "queue", r2 = J.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = J.access(e2, t2, w.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = w.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = w._queueHooks(e2, t2), a2 = function() {
      w.dequeue(e2, t2);
    };
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, a2, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return J.get(e2, n2) || J.access(e2, n2, { empty: w.Callbacks("once memory").add(function() {
      J.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), w.fn.extend({ queue: function(e2, t2) {
    var n2 = 2;
    return "string" != typeof e2 && (t2 = e2, e2 = "fx", n2--), arguments.length < n2 ? w.queue(this[0], e2) : void 0 === t2 ? this : this.each(function() {
      var n3 = w.queue(this, e2, t2);
      w._queueHooks(this, e2), "fx" === e2 && "inprogress" !== n3[0] && w.dequeue(this, e2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      w.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = w.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
    while (a2--) (n2 = J.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"], ae = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && w.contains(e2.ownerDocument, e2) && "none" === w.css(e2, "display");
  }, se = function(e2, t2, n2, r2) {
    var i2, o2, a2 = {};
    for (o2 in t2) a2[o2] = e2.style[o2], e2.style[o2] = t2[o2];
    i2 = n2.apply(e2, []);
    for (o2 in t2) e2.style[o2] = a2[o2];
    return i2;
  };
  function ue(e2, t2, n2, r2) {
    var i2, o2, a2 = 20, s2 = r2 ? function() {
      return r2.cur();
    } : function() {
      return w.css(e2, t2, "");
    }, u2 = s2(), l2 = n2 && n2[3] || (w.cssNumber[t2] ? "" : "px"), c2 = (w.cssNumber[t2] || "px" !== l2 && +u2) && ie.exec(w.css(e2, t2));
    if (c2 && c2[3] !== l2) {
      u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
      while (a2--) w.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
      c2 *= 2, w.style(e2, t2, c2 + l2), n2 = n2 || [];
    }
    return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
  }
  var le = {};
  function ce(e2) {
    var t2, n2 = e2.ownerDocument, r2 = e2.nodeName, i2 = le[r2];
    return i2 || (t2 = n2.body.appendChild(n2.createElement(r2)), i2 = w.css(t2, "display"), t2.parentNode.removeChild(t2), "none" === i2 && (i2 = "block"), le[r2] = i2, i2);
  }
  function fe(e2, t2) {
    for (var n2, r2, i2 = [], o2 = 0, a2 = e2.length; o2 < a2; o2++) (r2 = e2[o2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (i2[o2] = J.get(r2, "display") || null, i2[o2] || (r2.style.display = "")), "" === r2.style.display && ae(r2) && (i2[o2] = ce(r2))) : "none" !== n2 && (i2[o2] = "none", J.set(r2, "display", n2)));
    for (o2 = 0; o2 < a2; o2++) null != i2[o2] && (e2[o2].style.display = i2[o2]);
    return e2;
  }
  w.fn.extend({ show: function() {
    return fe(this, true);
  }, hide: function() {
    return fe(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      ae(this) ? w(this).show() : w(this).hide();
    });
  } });
  var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  function ye(e2, t2) {
    var n2;
    return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && N(e2, t2) ? w.merge([e2], n2) : n2;
  }
  function ve(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) J.set(e2[n2], "globalEval", !t2 || J.get(t2[n2], "globalEval"));
  }
  var me = /<|&#?\w+;/;
  function xe(e2, t2, n2, r2, i2) {
    for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h3 = e2.length; d2 < h3; d2++) if ((o2 = e2[d2]) || 0 === o2) if ("object" === x(o2)) w.merge(p2, o2.nodeType ? [o2] : o2);
    else if (me.test(o2)) {
      a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (de.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ge[s2] || ge._default, a2.innerHTML = u2[1] + w.htmlPrefilter(o2) + u2[2], c2 = u2[0];
      while (c2--) a2 = a2.lastChild;
      w.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
    } else p2.push(t2.createTextNode(o2));
    f2.textContent = "", d2 = 0;
    while (o2 = p2[d2++]) if (r2 && w.inArray(o2, r2) > -1) i2 && i2.push(o2);
    else if (l2 = w.contains(o2.ownerDocument, o2), a2 = ye(f2.appendChild(o2), "script"), l2 && ve(a2), n2) {
      c2 = 0;
      while (o2 = a2[c2++]) he.test(o2.type || "") && n2.push(o2);
    }
    return f2;
  }
  !function() {
    var e2 = r.createDocumentFragment().appendChild(r.createElement("div")), t2 = r.createElement("input");
    t2.setAttribute("type", "radio"), t2.setAttribute("checked", "checked"), t2.setAttribute("name", "t"), e2.appendChild(t2), h2.checkClone = e2.cloneNode(true).cloneNode(true).lastChild.checked, e2.innerHTML = "<textarea>x</textarea>", h2.noCloneChecked = !!e2.cloneNode(true).lastChild.defaultValue;
  }();
  var be = r.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return true;
  }
  function ke() {
    return false;
  }
  function Se() {
    try {
      return r.activeElement;
    } catch (e2) {
    }
  }
  function De(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0);
      for (s2 in t2) De(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2) i2 = ke;
    else if (!i2) return e2;
    return 1 === o2 && (a2 = i2, (i2 = function(e3) {
      return w().off(e3), a2.apply(this, arguments);
    }).guid = a2.guid || (a2.guid = w.guid++)), e2.each(function() {
      w.event.add(this, t2, i2, r2, n2);
    });
  }
  w.event = { global: {}, add: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h3, g2, y2 = J.get(e2);
    if (y2) {
      n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && w.find.matchesSelector(be, i2), n2.guid || (n2.guid = w.guid++), (u2 = y2.events) || (u2 = y2.events = {}), (a2 = y2.handle) || (a2 = y2.handle = function(t3) {
        return "undefined" != typeof w && w.event.triggered !== t3.type ? w.event.dispatch.apply(e2, arguments) : void 0;
      }), l2 = (t2 = (t2 || "").match(M) || [""]).length;
      while (l2--) d2 = g2 = (s2 = Ce.exec(t2[l2]) || [])[1], h3 = (s2[2] || "").split(".").sort(), d2 && (f2 = w.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = w.event.special[d2] || {}, c2 = w.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && w.expr.match.needsContext.test(i2), namespace: h3.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(e2, r2, h3, a2) || e2.addEventListener && e2.addEventListener(d2, a2)), f2.add && (f2.add.call(e2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), w.event.global[d2] = true);
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h3, g2, y2 = J.hasData(e2) && J.get(e2);
    if (y2 && (u2 = y2.events)) {
      l2 = (t2 = (t2 || "").match(M) || [""]).length;
      while (l2--) if (s2 = Ce.exec(t2[l2]) || [], d2 = g2 = s2[1], h3 = (s2[2] || "").split(".").sort(), d2) {
        f2 = w.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h3.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
        while (o2--) c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
        a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h3, y2.handle) || w.removeEvent(e2, d2, y2.handle), delete u2[d2]);
      } else for (d2 in u2) w.event.remove(e2, d2 + t2[l2], n2, r2, true);
      w.isEmptyObject(u2) && J.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2 = w.event.fix(e2), n2, r2, i2, o2, a2, s2, u2 = new Array(arguments.length), l2 = (J.get(this, "events") || {})[t2.type] || [], c2 = w.event.special[t2.type] || {};
    for (u2[0] = t2, n2 = 1; n2 < arguments.length; n2++) u2[n2] = arguments[n2];
    if (t2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, t2)) {
      s2 = w.event.handlers.call(this, t2, l2), n2 = 0;
      while ((o2 = s2[n2++]) && !t2.isPropagationStopped()) {
        t2.currentTarget = o2.elem, r2 = 0;
        while ((a2 = o2.handlers[r2++]) && !t2.isImmediatePropagationStopped()) t2.rnamespace && !t2.rnamespace.test(a2.namespace) || (t2.handleObj = a2, t2.data = a2.data, void 0 !== (i2 = ((w.event.special[a2.origType] || {}).handle || a2.handler).apply(o2.elem, u2)) && false === (t2.result = i2) && (t2.preventDefault(), t2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, t2), t2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && !("click" === e2.type && e2.button >= 1)) {
      for (; l2 !== this; l2 = l2.parentNode || this) if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
        for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++) void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? w(i2, this).index(l2) > -1 : w.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
        o2.length && s2.push({ elem: l2, handlers: o2 });
      }
    }
    return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(e2, t2) {
    Object.defineProperty(w.Event.prototype, e2, { enumerable: true, configurable: true, get: g(t2) ? function() {
      if (this.originalEvent) return t2(this.originalEvent);
    } : function() {
      if (this.originalEvent) return this.originalEvent[e2];
    }, set: function(t3) {
      Object.defineProperty(this, e2, { enumerable: true, configurable: true, writable: true, value: t3 });
    } });
  }, fix: function(e2) {
    return e2[w.expando] ? e2 : new w.Event(e2);
  }, special: { load: { noBubble: true }, focus: { trigger: function() {
    if (this !== Se() && this.focus) return this.focus(), false;
  }, delegateType: "focusin" }, blur: { trigger: function() {
    if (this === Se() && this.blur) return this.blur(), false;
  }, delegateType: "focusout" }, click: { trigger: function() {
    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), false;
  }, _default: function(e2) {
    return N(e2.target, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, w.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, w.Event = function(e2, t2) {
    if (!(this instanceof w.Event)) return new w.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ee : ke, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && w.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[w.expando] = true;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = Ee, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = Ee, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = Ee, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, w.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: function(e2) {
    var t2 = e2.button;
    return null == e2.which && we.test(e2.type) ? null != e2.charCode ? e2.charCode : e2.keyCode : !e2.which && void 0 !== t2 && Te.test(e2.type) ? 1 & t2 ? 1 : 2 & t2 ? 3 : 4 & t2 ? 2 : 0 : e2.which;
  } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, t2) {
    w.event.special[e2] = { delegateType: t2, bindType: t2, handle: function(e3) {
      var n2, r2 = this, i2 = e3.relatedTarget, o2 = e3.handleObj;
      return i2 && (i2 === r2 || w.contains(r2, i2)) || (e3.type = o2.origType, n2 = o2.handler.apply(this, arguments), e3.type = t2), n2;
    } };
  }), w.fn.extend({ on: function(e2, t2, n2, r2) {
    return De(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return De(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj) return r2 = e2.handleObj, w(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2) this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = ke), this.each(function() {
      w.event.remove(this, e2, n2, t2);
    });
  } });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e2, t2) {
    return N(e2, "table") && N(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") ? w(e2).children("tbody")[0] || e2 : e2;
  }
  function He(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function Oe(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function Pe(e2, t2) {
    var n2, r2, i2, o2, a2, s2, u2, l2;
    if (1 === t2.nodeType) {
      if (J.hasData(e2) && (o2 = J.access(e2), a2 = J.set(t2, o2), l2 = o2.events)) {
        delete a2.handle, a2.events = {};
        for (i2 in l2) for (n2 = 0, r2 = l2[i2].length; n2 < r2; n2++) w.event.add(t2, i2, l2[i2][n2]);
      }
      K.hasData(e2) && (s2 = K.access(e2), u2 = w.extend({}, s2), K.set(t2, u2));
    }
  }
  function Me(e2, t2) {
    var n2 = t2.nodeName.toLowerCase();
    "input" === n2 && pe.test(e2.type) ? t2.checked = e2.checked : "input" !== n2 && "textarea" !== n2 || (t2.defaultValue = e2.defaultValue);
  }
  function Re(e2, t2, n2, r2) {
    t2 = a.apply([], t2);
    var i2, o2, s2, u2, l2, c2, f2 = 0, p2 = e2.length, d2 = p2 - 1, y2 = t2[0], v2 = g(y2);
    if (v2 || p2 > 1 && "string" == typeof y2 && !h2.checkClone && je.test(y2)) return e2.each(function(i3) {
      var o3 = e2.eq(i3);
      v2 && (t2[0] = y2.call(this, i3, o3.html())), Re(o3, t2, n2, r2);
    });
    if (p2 && (i2 = xe(t2, e2[0].ownerDocument, false, e2, r2), o2 = i2.firstChild, 1 === i2.childNodes.length && (i2 = o2), o2 || r2)) {
      for (u2 = (s2 = w.map(ye(i2, "script"), He)).length; f2 < p2; f2++) l2 = i2, f2 !== d2 && (l2 = w.clone(l2, true, true), u2 && w.merge(s2, ye(l2, "script"))), n2.call(e2[f2], l2, f2);
      if (u2) for (c2 = s2[s2.length - 1].ownerDocument, w.map(s2, Oe), f2 = 0; f2 < u2; f2++) l2 = s2[f2], he.test(l2.type || "") && !J.access(l2, "globalEval") && w.contains(c2, l2) && (l2.src && "module" !== (l2.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l2.src) : m(l2.textContent.replace(qe, ""), c2, l2));
    }
    return e2;
  }
  function Ie(e2, t2, n2) {
    for (var r2, i2 = t2 ? w.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++) n2 || 1 !== r2.nodeType || w.cleanData(ye(r2)), r2.parentNode && (n2 && w.contains(r2.ownerDocument, r2) && ve(ye(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  w.extend({ htmlPrefilter: function(e2) {
    return e2.replace(Ne, "<$1></$2>");
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = e2.cloneNode(true), u2 = w.contains(e2.ownerDocument, e2);
    if (!(h2.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || w.isXMLDoc(e2))) for (a2 = ye(s2), r2 = 0, i2 = (o2 = ye(e2)).length; r2 < i2; r2++) Me(o2[r2], a2[r2]);
    if (t2) if (n2) for (o2 = o2 || ye(e2), a2 = a2 || ye(s2), r2 = 0, i2 = o2.length; r2 < i2; r2++) Pe(o2[r2], a2[r2]);
    else Pe(e2, s2);
    return (a2 = ye(s2, "script")).length > 0 && ve(a2, !u2 && ye(e2, "script")), s2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = w.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++) if (Y(n2)) {
      if (t2 = n2[J.expando]) {
        if (t2.events) for (r2 in t2.events) i2[r2] ? w.event.remove(n2, r2) : w.removeEvent(n2, r2, t2.handle);
        n2[J.expando] = void 0;
      }
      n2[K.expando] && (n2[K.expando] = void 0);
    }
  } }), w.fn.extend({ detach: function(e2) {
    return Ie(this, e2, true);
  }, remove: function(e2) {
    return Ie(this, e2);
  }, text: function(e2) {
    return z(this, function(e3) {
      return void 0 === e3 ? w.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return Re(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return Re(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = Le(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return Re(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return Re(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++) 1 === e2.nodeType && (w.cleanData(ye(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return w.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return z(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType) return t2.innerHTML;
      if ("string" == typeof e3 && !Ae.test(e3) && !ge[(de.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = w.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++) 1 === (t2 = this[n2] || {}).nodeType && (w.cleanData(ye(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var e2 = [];
    return Re(this, arguments, function(t2) {
      var n2 = this.parentNode;
      w.inArray(this, e2) < 0 && (w.cleanData(ye(this)), n2 && n2.replaceChild(t2, this));
    }, e2);
  } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, t2) {
    w.fn[e2] = function(e3) {
      for (var n2, r2 = [], i2 = w(e3), o2 = i2.length - 1, a2 = 0; a2 <= o2; a2++) n2 = a2 === o2 ? this : this.clone(true), w(i2[a2])[t2](n2), s.apply(r2, n2.get());
      return this.pushStack(r2);
    };
  });
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function(t2) {
    var n2 = t2.ownerDocument.defaultView;
    return n2 && n2.opener || (n2 = e), n2.getComputedStyle(t2);
  }, Be = new RegExp(oe.join("|"), "i");
  !function() {
    function t2() {
      if (c2) {
        l2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l2).appendChild(c2);
        var t3 = e.getComputedStyle(c2);
        i2 = "1%" !== t3.top, u2 = 12 === n2(t3.marginLeft), c2.style.right = "60%", s2 = 36 === n2(t3.right), o2 = 36 === n2(t3.width), c2.style.position = "absolute", a2 = 36 === c2.offsetWidth || "absolute", be.removeChild(l2), c2 = null;
      }
    }
    function n2(e2) {
      return Math.round(parseFloat(e2));
    }
    var i2, o2, a2, s2, u2, l2 = r.createElement("div"), c2 = r.createElement("div");
    c2.style && (c2.style.backgroundClip = "content-box", c2.cloneNode(true).style.backgroundClip = "", h2.clearCloneStyle = "content-box" === c2.style.backgroundClip, w.extend(h2, { boxSizingReliable: function() {
      return t2(), o2;
    }, pixelBoxStyles: function() {
      return t2(), s2;
    }, pixelPosition: function() {
      return t2(), i2;
    }, reliableMarginLeft: function() {
      return t2(), u2;
    }, scrollboxSize: function() {
      return t2(), a2;
    } }));
  }();
  function Fe(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = e2.style;
    return (n2 = n2 || $e(e2)) && ("" !== (a2 = n2.getPropertyValue(t2) || n2[t2]) || w.contains(e2.ownerDocument, e2) || (a2 = w.style(e2, t2)), !h2.pixelBoxStyles() && We.test(a2) && Be.test(t2) && (r2 = s2.width, i2 = s2.minWidth, o2 = s2.maxWidth, s2.minWidth = s2.maxWidth = s2.width = a2, a2 = n2.width, s2.width = r2, s2.minWidth = i2, s2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function _e(e2, t2) {
    return { get: function() {
      if (!e2()) return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = { position: "absolute", visibility: "hidden", display: "block" }, Ve = { letterSpacing: "0", fontWeight: "400" }, Ge = ["Webkit", "Moz", "ms"], Ye = r.createElement("div").style;
  function Qe(e2) {
    if (e2 in Ye) return e2;
    var t2 = e2[0].toUpperCase() + e2.slice(1), n2 = Ge.length;
    while (n2--) if ((e2 = Ge[n2] + t2) in Ye) return e2;
  }
  function Je(e2) {
    var t2 = w.cssProps[e2];
    return t2 || (t2 = w.cssProps[e2] = Qe(e2) || e2), t2;
  }
  function Ke(e2, t2, n2) {
    var r2 = ie.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function Ze(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0;
    if (n2 === (r2 ? "border" : "content")) return 0;
    for (; a2 < 4; a2 += 2) "margin" === n2 && (u2 += w.css(e2, n2 + oe[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= w.css(e2, "padding" + oe[a2], true, i2)), "margin" !== n2 && (u2 -= w.css(e2, "border" + oe[a2] + "Width", true, i2))) : (u2 += w.css(e2, "padding" + oe[a2], true, i2), "padding" !== n2 ? u2 += w.css(e2, "border" + oe[a2] + "Width", true, i2) : s2 += w.css(e2, "border" + oe[a2] + "Width", true, i2));
    return !r2 && o2 >= 0 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5))), u2;
  }
  function et(e2, t2, n2) {
    var r2 = $e(e2), i2 = Fe(e2, t2, r2), o2 = "border-box" === w.css(e2, "boxSizing", false, r2), a2 = o2;
    if (We.test(i2)) {
      if (!n2) return i2;
      i2 = "auto";
    }
    return a2 = a2 && (h2.boxSizingReliable() || i2 === e2.style[t2]), ("auto" === i2 || !parseFloat(i2) && "inline" === w.css(e2, "display", false, r2)) && (i2 = e2["offset" + t2[0].toUpperCase() + t2.slice(1)], a2 = true), (i2 = parseFloat(i2) || 0) + Ze(e2, t2, n2 || (o2 ? "border" : "content"), a2, r2, i2) + "px";
  }
  w.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = Fe(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = G(t2), u2 = Xe.test(t2), l2 = e2.style;
      if (u2 || (t2 = Je(s2)), a2 = w.cssHooks[t2] || w.cssHooks[s2], void 0 === n2) return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
      "string" == (o2 = typeof n2) && (i2 = ie.exec(n2)) && i2[1] && (n2 = ue(e2, t2, i2), o2 = "number"), null != n2 && n2 === n2 && ("number" === o2 && (n2 += i2 && i2[3] || (w.cssNumber[s2] ? "" : "px")), h2.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = G(t2);
    return Xe.test(t2) || (t2 = Je(s2)), (a2 = w.cssHooks[t2] || w.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Fe(e2, t2, r2)), "normal" === i2 && t2 in Ve && (i2 = Ve[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), w.each(["height", "width"], function(e2, t2) {
    w.cssHooks[t2] = { get: function(e3, n2, r2) {
      if (n2) return !ze.test(w.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? et(e3, t2, r2) : se(e3, Ue, function() {
        return et(e3, t2, r2);
      });
    }, set: function(e3, n2, r2) {
      var i2, o2 = $e(e3), a2 = "border-box" === w.css(e3, "boxSizing", false, o2), s2 = r2 && Ze(e3, t2, r2, a2, o2);
      return a2 && h2.scrollboxSize() === o2.position && (s2 -= Math.ceil(e3["offset" + t2[0].toUpperCase() + t2.slice(1)] - parseFloat(o2[t2]) - Ze(e3, t2, "border", false, o2) - 0.5)), s2 && (i2 = ie.exec(n2)) && "px" !== (i2[3] || "px") && (e3.style[t2] = n2, n2 = w.css(e3, t2)), Ke(e3, n2, s2);
    } };
  }), w.cssHooks.marginLeft = _e(h2.reliableMarginLeft, function(e2, t2) {
    if (t2) return (parseFloat(Fe(e2, "marginLeft")) || e2.getBoundingClientRect().left - se(e2, { marginLeft: 0 }, function() {
      return e2.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function(e2, t2) {
    w.cssHooks[e2 + t2] = { expand: function(n2) {
      for (var r2 = 0, i2 = {}, o2 = "string" == typeof n2 ? n2.split(" ") : [n2]; r2 < 4; r2++) i2[e2 + oe[r2] + t2] = o2[r2] || o2[r2 - 2] || o2[0];
      return i2;
    } }, "margin" !== e2 && (w.cssHooks[e2 + t2].set = Ke);
  }), w.fn.extend({ css: function(e2, t2) {
    return z(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = $e(e3), i2 = t3.length; a2 < i2; a2++) o2[t3[a2]] = w.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? w.style(e3, t3, n2) : w.css(e3, t3);
    }, e2, t2, arguments.length > 1);
  } });
  function tt(e2, t2, n2, r2, i2) {
    return new tt.prototype.init(e2, t2, n2, r2, i2);
  }
  w.Tween = tt, tt.prototype = { constructor: tt, init: function(e2, t2, n2, r2, i2, o2) {
    this.elem = e2, this.prop = n2, this.easing = i2 || w.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (w.cssNumber[n2] ? "" : "px");
  }, cur: function() {
    var e2 = tt.propHooks[this.prop];
    return e2 && e2.get ? e2.get(this) : tt.propHooks._default.get(this);
  }, run: function(e2) {
    var t2, n2 = tt.propHooks[this.prop];
    return this.options.duration ? this.pos = t2 = w.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : tt.propHooks._default.set(this), this;
  } }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = { _default: { get: function(e2) {
    var t2;
    return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = w.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
  }, set: function(e2) {
    w.fx.step[e2.prop] ? w.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || null == e2.elem.style[w.cssProps[e2.prop]] && !w.cssHooks[e2.prop] ? e2.elem[e2.prop] = e2.now : w.style(e2.elem, e2.prop, e2.now + e2.unit);
  } } }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = { set: function(e2) {
    e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
  } }, w.easing = { linear: function(e2) {
    return e2;
  }, swing: function(e2) {
    return 0.5 - Math.cos(e2 * Math.PI) / 2;
  }, _default: "swing" }, w.fx = tt.prototype.init, w.fx.step = {};
  var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
  function at() {
    rt && (false === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }
  function st() {
    return e.setTimeout(function() {
      nt = void 0;
    }), nt = Date.now();
  }
  function ut(e2, t2) {
    var n2, r2 = 0, i2 = { height: e2 };
    for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2) i2["margin" + (n2 = oe[r2])] = i2["padding" + n2] = e2;
    return t2 && (i2.opacity = i2.width = e2), i2;
  }
  function lt(e2, t2, n2) {
    for (var r2, i2 = (pt.tweeners[t2] || []).concat(pt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++) if (r2 = i2[o2].call(n2, t2, e2)) return r2;
  }
  function ct(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h3 = e2.style, g2 = e2.nodeType && ae(e2), y2 = J.get(e2, "fxshow");
    n2.queue || (null == (a2 = w._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
      a2.unqueued || s2();
    }), a2.unqueued++, p2.always(function() {
      p2.always(function() {
        a2.unqueued--, w.queue(e2, "fx").length || a2.empty.fire();
      });
    }));
    for (r2 in t2) if (i2 = t2[r2], it.test(i2)) {
      if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
        if ("show" !== i2 || !y2 || void 0 === y2[r2]) continue;
        g2 = true;
      }
      d2[r2] = y2 && y2[r2] || w.style(e2, r2);
    }
    if ((u2 = !w.isEmptyObject(t2)) || !w.isEmptyObject(d2)) {
      f2 && 1 === e2.nodeType && (n2.overflow = [h3.overflow, h3.overflowX, h3.overflowY], null == (l2 = y2 && y2.display) && (l2 = J.get(e2, "display")), "none" === (c2 = w.css(e2, "display")) && (l2 ? c2 = l2 : (fe([e2], true), l2 = e2.style.display || l2, c2 = w.css(e2, "display"), fe([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === w.css(e2, "float") && (u2 || (p2.done(function() {
        h3.display = l2;
      }), null == l2 && (c2 = h3.display, l2 = "none" === c2 ? "" : c2)), h3.display = "inline-block")), n2.overflow && (h3.overflow = "hidden", p2.always(function() {
        h3.overflow = n2.overflow[0], h3.overflowX = n2.overflow[1], h3.overflowY = n2.overflow[2];
      })), u2 = false;
      for (r2 in d2) u2 || (y2 ? "hidden" in y2 && (g2 = y2.hidden) : y2 = J.access(e2, "fxshow", { display: l2 }), o2 && (y2.hidden = !g2), g2 && fe([e2], true), p2.done(function() {
        g2 || fe([e2]), J.remove(e2, "fxshow");
        for (r2 in d2) w.style(e2, r2, d2[r2]);
      })), u2 = lt(g2 ? y2[r2] : 0, r2, p2), r2 in y2 || (y2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
    }
  }
  function ft(e2, t2) {
    var n2, r2, i2, o2, a2;
    for (n2 in e2) if (r2 = G(n2), i2 = t2[r2], o2 = e2[n2], Array.isArray(o2) && (i2 = o2[1], o2 = e2[n2] = o2[0]), n2 !== r2 && (e2[r2] = o2, delete e2[n2]), (a2 = w.cssHooks[r2]) && "expand" in a2) {
      o2 = a2.expand(o2), delete e2[r2];
      for (n2 in o2) n2 in e2 || (e2[n2] = o2[n2], t2[n2] = i2);
    } else t2[r2] = i2;
  }
  function pt(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = pt.prefilters.length, s2 = w.Deferred().always(function() {
      delete u2.elem;
    }), u2 = function() {
      if (i2) return false;
      for (var t3 = nt || st(), n3 = Math.max(0, l2.startTime + l2.duration - t3), r3 = 1 - (n3 / l2.duration || 0), o3 = 0, a3 = l2.tweens.length; o3 < a3; o3++) l2.tweens[o3].run(r3);
      return s2.notifyWith(e2, [l2, r3, n3]), r3 < 1 && a3 ? n3 : (a3 || s2.notifyWith(e2, [l2, 1, 0]), s2.resolveWith(e2, [l2]), false);
    }, l2 = s2.promise({ elem: e2, props: w.extend({}, t2), opts: w.extend(true, { specialEasing: {}, easing: w.easing._default }, n2), originalProperties: t2, originalOptions: n2, startTime: nt || st(), duration: n2.duration, tweens: [], createTween: function(t3, n3) {
      var r3 = w.Tween(e2, l2.opts, t3, n3, l2.opts.specialEasing[t3] || l2.opts.easing);
      return l2.tweens.push(r3), r3;
    }, stop: function(t3) {
      var n3 = 0, r3 = t3 ? l2.tweens.length : 0;
      if (i2) return this;
      for (i2 = true; n3 < r3; n3++) l2.tweens[n3].run(1);
      return t3 ? (s2.notifyWith(e2, [l2, 1, 0]), s2.resolveWith(e2, [l2, t3])) : s2.rejectWith(e2, [l2, t3]), this;
    } }), c2 = l2.props;
    for (ft(c2, l2.opts.specialEasing); o2 < a2; o2++) if (r2 = pt.prefilters[o2].call(l2, e2, c2, l2.opts)) return g(r2.stop) && (w._queueHooks(l2.elem, l2.opts.queue).stop = r2.stop.bind(r2)), r2;
    return w.map(c2, lt, l2), g(l2.opts.start) && l2.opts.start.call(e2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), w.fx.timer(w.extend(u2, { elem: e2, anim: l2, queue: l2.opts.queue })), l2;
  }
  w.Animation = w.extend(pt, { tweeners: { "*": [function(e2, t2) {
    var n2 = this.createTween(e2, t2);
    return ue(n2.elem, e2, ie.exec(t2), n2), n2;
  }] }, tweener: function(e2, t2) {
    g(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(M);
    for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 = e2[r2], pt.tweeners[n2] = pt.tweeners[n2] || [], pt.tweeners[n2].unshift(t2);
  }, prefilters: [ct], prefilter: function(e2, t2) {
    t2 ? pt.prefilters.unshift(e2) : pt.prefilters.push(e2);
  } }), w.speed = function(e2, t2, n2) {
    var r2 = e2 && "object" == typeof e2 ? w.extend({}, e2) : { complete: n2 || !n2 && t2 || g(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !g(t2) && t2 };
    return w.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in w.fx.speeds ? r2.duration = w.fx.speeds[r2.duration] : r2.duration = w.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
      g(r2.old) && r2.old.call(this), r2.queue && w.dequeue(this, r2.queue);
    }, r2;
  }, w.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
    return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
  }, animate: function(e2, t2, n2, r2) {
    var i2 = w.isEmptyObject(e2), o2 = w.speed(t2, n2, r2), a2 = function() {
      var t3 = pt(this, w.extend({}, e2), o2);
      (i2 || J.get(this, "finish")) && t3.stop(true);
    };
    return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
  }, stop: function(e2, t2, n2) {
    var r2 = function(e3) {
      var t3 = e3.stop;
      delete e3.stop, t3(n2);
    };
    return "string" != typeof e2 && (n2 = t2, t2 = e2, e2 = void 0), t2 && false !== e2 && this.queue(e2 || "fx", []), this.each(function() {
      var t3 = true, i2 = null != e2 && e2 + "queueHooks", o2 = w.timers, a2 = J.get(this);
      if (i2) a2[i2] && a2[i2].stop && r2(a2[i2]);
      else for (i2 in a2) a2[i2] && a2[i2].stop && ot.test(i2) && r2(a2[i2]);
      for (i2 = o2.length; i2--; ) o2[i2].elem !== this || null != e2 && o2[i2].queue !== e2 || (o2[i2].anim.stop(n2), t3 = false, o2.splice(i2, 1));
      !t3 && n2 || w.dequeue(this, e2);
    });
  }, finish: function(e2) {
    return false !== e2 && (e2 = e2 || "fx"), this.each(function() {
      var t2, n2 = J.get(this), r2 = n2[e2 + "queue"], i2 = n2[e2 + "queueHooks"], o2 = w.timers, a2 = r2 ? r2.length : 0;
      for (n2.finish = true, w.queue(this, e2, []), i2 && i2.stop && i2.stop.call(this, true), t2 = o2.length; t2--; ) o2[t2].elem === this && o2[t2].queue === e2 && (o2[t2].anim.stop(true), o2.splice(t2, 1));
      for (t2 = 0; t2 < a2; t2++) r2[t2] && r2[t2].finish && r2[t2].finish.call(this);
      delete n2.finish;
    });
  } }), w.each(["toggle", "show", "hide"], function(e2, t2) {
    var n2 = w.fn[t2];
    w.fn[t2] = function(e3, r2, i2) {
      return null == e3 || "boolean" == typeof e3 ? n2.apply(this, arguments) : this.animate(ut(t2, true), e3, r2, i2);
    };
  }), w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, t2) {
    w.fn[e2] = function(e3, n2, r2) {
      return this.animate(t2, e3, n2, r2);
    };
  }), w.timers = [], w.fx.tick = function() {
    var e2, t2 = 0, n2 = w.timers;
    for (nt = Date.now(); t2 < n2.length; t2++) (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
    n2.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function(e2) {
    w.timers.push(e2), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function() {
    rt || (rt = true, at());
  }, w.fx.stop = function() {
    rt = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function(t2, n2) {
    return t2 = w.fx ? w.fx.speeds[t2] || t2 : t2, n2 = n2 || "fx", this.queue(n2, function(n3, r2) {
      var i2 = e.setTimeout(n3, t2);
      r2.stop = function() {
        e.clearTimeout(i2);
      };
    });
  }, function() {
    var e2 = r.createElement("input"), t2 = r.createElement("select").appendChild(r.createElement("option"));
    e2.type = "checkbox", h2.checkOn = "" !== e2.value, h2.optSelected = t2.selected, (e2 = r.createElement("input")).value = "t", e2.type = "radio", h2.radioValue = "t" === e2.value;
  }();
  var dt, ht = w.expr.attrHandle;
  w.fn.extend({ attr: function(e2, t2) {
    return z(this, w.attr, e2, t2, arguments.length > 1);
  }, removeAttr: function(e2) {
    return this.each(function() {
      w.removeAttr(this, e2);
    });
  } }), w.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return "undefined" == typeof e2.getAttribute ? w.prop(e2, t2, n2) : (1 === o2 && w.isXMLDoc(e2) || (i2 = w.attrHooks[t2.toLowerCase()] || (w.expr.match.bool.test(t2) ? dt : void 0)), void 0 !== n2 ? null === n2 ? void w.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = w.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!h2.radioValue && "radio" === t2 && N(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(M);
    if (i2 && 1 === e2.nodeType) while (n2 = i2[r2++]) e2.removeAttribute(n2);
  } }), dt = { set: function(e2, t2, n2) {
    return false === t2 ? w.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, w.each(w.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
    var n2 = ht[t2] || w.find.attr;
    ht[t2] = function(e3, t3, r2) {
      var i2, o2, a2 = t3.toLowerCase();
      return r2 || (o2 = ht[a2], ht[a2] = i2, i2 = null != n2(e3, t3, r2) ? a2 : null, ht[a2] = o2), i2;
    };
  });
  var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
  w.fn.extend({ prop: function(e2, t2) {
    return z(this, w.prop, e2, t2, arguments.length > 1);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[w.propFix[e2] || e2];
    });
  } }), w.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return 1 === o2 && w.isXMLDoc(e2) || (t2 = w.propFix[t2] || t2, i2 = w.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = w.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : gt.test(e2.nodeName) || yt.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), h2.optSelected || (w.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    w.propFix[this.toLowerCase()] = this;
  });
  function vt(e2) {
    return (e2.match(M) || []).join(" ");
  }
  function mt(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function xt(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 ? e2.match(M) || [] : [];
  }
  w.fn.extend({ addClass: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2, u2 = 0;
    if (g(e2)) return this.each(function(t3) {
      w(this).addClass(e2.call(this, t3, mt(this)));
    });
    if ((t2 = xt(e2)).length) {
      while (n2 = this[u2++]) if (i2 = mt(n2), r2 = 1 === n2.nodeType && " " + vt(i2) + " ") {
        a2 = 0;
        while (o2 = t2[a2++]) r2.indexOf(" " + o2 + " ") < 0 && (r2 += o2 + " ");
        i2 !== (s2 = vt(r2)) && n2.setAttribute("class", s2);
      }
    }
    return this;
  }, removeClass: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2, u2 = 0;
    if (g(e2)) return this.each(function(t3) {
      w(this).removeClass(e2.call(this, t3, mt(this)));
    });
    if (!arguments.length) return this.attr("class", "");
    if ((t2 = xt(e2)).length) {
      while (n2 = this[u2++]) if (i2 = mt(n2), r2 = 1 === n2.nodeType && " " + vt(i2) + " ") {
        a2 = 0;
        while (o2 = t2[a2++]) while (r2.indexOf(" " + o2 + " ") > -1) r2 = r2.replace(" " + o2 + " ", " ");
        i2 !== (s2 = vt(r2)) && n2.setAttribute("class", s2);
      }
    }
    return this;
  }, toggleClass: function(e2, t2) {
    var n2 = typeof e2, r2 = "string" === n2 || Array.isArray(e2);
    return "boolean" == typeof t2 && r2 ? t2 ? this.addClass(e2) : this.removeClass(e2) : g(e2) ? this.each(function(n3) {
      w(this).toggleClass(e2.call(this, n3, mt(this), t2), t2);
    }) : this.each(function() {
      var t3, i2, o2, a2;
      if (r2) {
        i2 = 0, o2 = w(this), a2 = xt(e2);
        while (t3 = a2[i2++]) o2.hasClass(t3) ? o2.removeClass(t3) : o2.addClass(t3);
      } else void 0 !== e2 && "boolean" !== n2 || ((t3 = mt(this)) && J.set(this, "__className__", t3), this.setAttribute && this.setAttribute("class", t3 || false === e2 ? "" : J.get(this, "__className__") || ""));
    });
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    t2 = " " + e2 + " ";
    while (n2 = this[r2++]) if (1 === n2.nodeType && (" " + vt(mt(n2)) + " ").indexOf(t2) > -1) return true;
    return false;
  } });
  var bt = /\r/g;
  w.fn.extend({ val: function(e2) {
    var t2, n2, r2, i2 = this[0];
    {
      if (arguments.length) return r2 = g(e2), this.each(function(n3) {
        var i3;
        1 === this.nodeType && (null == (i3 = r2 ? e2.call(this, n3, w(this).val()) : e2) ? i3 = "" : "number" == typeof i3 ? i3 += "" : Array.isArray(i3) && (i3 = w.map(i3, function(e3) {
          return null == e3 ? "" : e3 + "";
        })), (t2 = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t2 && void 0 !== t2.set(this, i3, "value") || (this.value = i3));
      });
      if (i2) return (t2 = w.valHooks[i2.type] || w.valHooks[i2.nodeName.toLowerCase()]) && "get" in t2 && void 0 !== (n2 = t2.get(i2, "value")) ? n2 : "string" == typeof (n2 = i2.value) ? n2.replace(bt, "") : null == n2 ? "" : n2;
    }
  } }), w.extend({ valHooks: { option: { get: function(e2) {
    var t2 = w.find.attr(e2, "value");
    return null != t2 ? t2 : vt(w.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
    for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++) if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !N(n2.parentNode, "optgroup"))) {
      if (t2 = w(n2).val(), a2) return t2;
      s2.push(t2);
    }
    return s2;
  }, set: function(e2, t2) {
    var n2, r2, i2 = e2.options, o2 = w.makeArray(t2), a2 = i2.length;
    while (a2--) ((r2 = i2[a2]).selected = w.inArray(w.valHooks.option.get(r2), o2) > -1) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), w.each(["radio", "checkbox"], function() {
    w.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2)) return e2.checked = w.inArray(w(e2).val(), t2) > -1;
    } }, h2.checkOn || (w.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  }), h2.focusin = "onfocusin" in e;
  var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function(e2) {
    e2.stopPropagation();
  };
  w.extend(w.event, { trigger: function(t2, n2, i2, o2) {
    var a2, s2, u2, l2, c2, p2, d2, h3, v2 = [i2 || r], m2 = f.call(t2, "type") ? t2.type : t2, x2 = f.call(t2, "namespace") ? t2.namespace.split(".") : [];
    if (s2 = h3 = u2 = i2 = i2 || r, 3 !== i2.nodeType && 8 !== i2.nodeType && !wt.test(m2 + w.event.triggered) && (m2.indexOf(".") > -1 && (m2 = (x2 = m2.split(".")).shift(), x2.sort()), c2 = m2.indexOf(":") < 0 && "on" + m2, t2 = t2[w.expando] ? t2 : new w.Event(m2, "object" == typeof t2 && t2), t2.isTrigger = o2 ? 2 : 3, t2.namespace = x2.join("."), t2.rnamespace = t2.namespace ? new RegExp("(^|\\.)" + x2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t2.result = void 0, t2.target || (t2.target = i2), n2 = null == n2 ? [t2] : w.makeArray(n2, [t2]), d2 = w.event.special[m2] || {}, o2 || !d2.trigger || false !== d2.trigger.apply(i2, n2))) {
      if (!o2 && !d2.noBubble && !y(i2)) {
        for (l2 = d2.delegateType || m2, wt.test(l2 + m2) || (s2 = s2.parentNode); s2; s2 = s2.parentNode) v2.push(s2), u2 = s2;
        u2 === (i2.ownerDocument || r) && v2.push(u2.defaultView || u2.parentWindow || e);
      }
      a2 = 0;
      while ((s2 = v2[a2++]) && !t2.isPropagationStopped()) h3 = s2, t2.type = a2 > 1 ? l2 : d2.bindType || m2, (p2 = (J.get(s2, "events") || {})[t2.type] && J.get(s2, "handle")) && p2.apply(s2, n2), (p2 = c2 && s2[c2]) && p2.apply && Y(s2) && (t2.result = p2.apply(s2, n2), false === t2.result && t2.preventDefault());
      return t2.type = m2, o2 || t2.isDefaultPrevented() || d2._default && false !== d2._default.apply(v2.pop(), n2) || !Y(i2) || c2 && g(i2[m2]) && !y(i2) && ((u2 = i2[c2]) && (i2[c2] = null), w.event.triggered = m2, t2.isPropagationStopped() && h3.addEventListener(m2, Tt), i2[m2](), t2.isPropagationStopped() && h3.removeEventListener(m2, Tt), w.event.triggered = void 0, u2 && (i2[c2] = u2)), t2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = w.extend(new w.Event(), n2, { type: e2, isSimulated: true });
    w.event.trigger(r2, null, t2);
  } }), w.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      w.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2) return w.event.trigger(e2, t2, n2, true);
  } }), h2.focusin || w.each({ focus: "focusin", blur: "focusout" }, function(e2, t2) {
    var n2 = function(e3) {
      w.event.simulate(t2, e3.target, w.event.fix(e3));
    };
    w.event.special[t2] = { setup: function() {
      var r2 = this.ownerDocument || this, i2 = J.access(r2, t2);
      i2 || r2.addEventListener(e2, n2, true), J.access(r2, t2, (i2 || 0) + 1);
    }, teardown: function() {
      var r2 = this.ownerDocument || this, i2 = J.access(r2, t2) - 1;
      i2 ? J.access(r2, t2, i2) : (r2.removeEventListener(e2, n2, true), J.remove(r2, t2));
    } };
  });
  var Ct = e.location, Et = Date.now(), kt = /\?/;
  w.parseXML = function(t2) {
    var n2;
    if (!t2 || "string" != typeof t2) return null;
    try {
      n2 = new e.DOMParser().parseFromString(t2, "text/xml");
    } catch (e2) {
      n2 = void 0;
    }
    return n2 && !n2.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t2), n2;
  };
  var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
  function jt(e2, t2, n2, r2) {
    var i2;
    if (Array.isArray(t2)) w.each(t2, function(t3, i3) {
      n2 || St.test(e2) ? r2(e2, i3) : jt(e2 + "[" + ("object" == typeof i3 && null != i3 ? t3 : "") + "]", i3, n2, r2);
    });
    else if (n2 || "object" !== x(t2)) r2(e2, t2);
    else for (i2 in t2) jt(e2 + "[" + i2 + "]", t2[i2], n2, r2);
  }
  w.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = g(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (Array.isArray(e2) || e2.jquery && !w.isPlainObject(e2)) w.each(e2, function() {
      i2(this.name, this.value);
    });
    else for (n2 in e2) jt(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, w.fn.extend({ serialize: function() {
    return w.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = w.prop(this, "elements");
      return e2 ? w.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e2) && (this.checked || !pe.test(e2));
    }).map(function(e2, t2) {
      var n2 = w(this).val();
      return null == n2 ? null : Array.isArray(n2) ? w.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(Dt, "\r\n") };
      }) : { name: t2.name, value: n2.replace(Dt, "\r\n") };
    }).get();
  } });
  var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Bt = r.createElement("a");
  Bt.href = Ct.href;
  function Ft(e2) {
    return function(t2, n2) {
      "string" != typeof t2 && (n2 = t2, t2 = "*");
      var r2, i2 = 0, o2 = t2.toLowerCase().match(M) || [];
      if (g(n2)) while (r2 = o2[i2++]) "+" === r2[0] ? (r2 = r2.slice(1) || "*", (e2[r2] = e2[r2] || []).unshift(n2)) : (e2[r2] = e2[r2] || []).push(n2);
    };
  }
  function _t(e2, t2, n2, r2) {
    var i2 = {}, o2 = e2 === Wt;
    function a2(s2) {
      var u2;
      return i2[s2] = true, w.each(e2[s2] || [], function(e3, s3) {
        var l2 = s3(t2, n2, r2);
        return "string" != typeof l2 || o2 || i2[l2] ? o2 ? !(u2 = l2) : void 0 : (t2.dataTypes.unshift(l2), a2(l2), false);
      }), u2;
    }
    return a2(t2.dataTypes[0]) || !i2["*"] && a2("*");
  }
  function zt(e2, t2) {
    var n2, r2, i2 = w.ajaxSettings.flatOptions || {};
    for (n2 in t2) void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
    return r2 && w.extend(true, e2, r2), e2;
  }
  function Xt(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = e2.contents, u2 = e2.dataTypes;
    while ("*" === u2[0]) u2.shift(), void 0 === r2 && (r2 = e2.mimeType || t2.getResponseHeader("Content-Type"));
    if (r2) {
      for (i2 in s2) if (s2[i2] && s2[i2].test(r2)) {
        u2.unshift(i2);
        break;
      }
    }
    if (u2[0] in n2) o2 = u2[0];
    else {
      for (i2 in n2) {
        if (!u2[0] || e2.converters[i2 + " " + u2[0]]) {
          o2 = i2;
          break;
        }
        a2 || (a2 = i2);
      }
      o2 = o2 || a2;
    }
    if (o2) return o2 !== u2[0] && u2.unshift(o2), n2[o2];
  }
  function Ut(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2 = {}, c2 = e2.dataTypes.slice();
    if (c2[1]) for (a2 in e2.converters) l2[a2.toLowerCase()] = e2.converters[a2];
    o2 = c2.shift();
    while (o2) if (e2.responseFields[o2] && (n2[e2.responseFields[o2]] = t2), !u2 && r2 && e2.dataFilter && (t2 = e2.dataFilter(t2, e2.dataType)), u2 = o2, o2 = c2.shift()) {
      if ("*" === o2) o2 = u2;
      else if ("*" !== u2 && u2 !== o2) {
        if (!(a2 = l2[u2 + " " + o2] || l2["* " + o2])) {
          for (i2 in l2) if ((s2 = i2.split(" "))[1] === o2 && (a2 = l2[u2 + " " + s2[0]] || l2["* " + s2[0]])) {
            true === a2 ? a2 = l2[i2] : true !== l2[i2] && (o2 = s2[0], c2.unshift(s2[1]));
            break;
          }
        }
        if (true !== a2) if (a2 && e2["throws"]) t2 = a2(t2);
        else try {
          t2 = a2(t2);
        } catch (e3) {
          return { state: "parsererror", error: a2 ? e3 : "No conversion from " + u2 + " to " + o2 };
        }
      }
    }
    return { state: "success", data: t2 };
  }
  w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Ct.href, type: "GET", isLocal: Pt.test(Ct.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
    return t2 ? zt(zt(e2, w.ajaxSettings), t2) : zt(w.ajaxSettings, e2);
  }, ajaxPrefilter: Ft(It), ajaxTransport: Ft(Wt), ajax: function(t2, n2) {
    "object" == typeof t2 && (n2 = t2, t2 = void 0), n2 = n2 || {};
    var i2, o2, a2, s2, u2, l2, c2, f2, p2, d2, h3 = w.ajaxSetup({}, n2), g2 = h3.context || h3, y2 = h3.context && (g2.nodeType || g2.jquery) ? w(g2) : w.event, v2 = w.Deferred(), m2 = w.Callbacks("once memory"), x2 = h3.statusCode || {}, b = {}, T2 = {}, C2 = "canceled", E2 = { readyState: 0, getResponseHeader: function(e2) {
      var t3;
      if (c2) {
        if (!s2) {
          s2 = {};
          while (t3 = Ot.exec(a2)) s2[t3[1].toLowerCase()] = t3[2];
        }
        t3 = s2[e2.toLowerCase()];
      }
      return null == t3 ? null : t3;
    }, getAllResponseHeaders: function() {
      return c2 ? a2 : null;
    }, setRequestHeader: function(e2, t3) {
      return null == c2 && (e2 = T2[e2.toLowerCase()] = T2[e2.toLowerCase()] || e2, b[e2] = t3), this;
    }, overrideMimeType: function(e2) {
      return null == c2 && (h3.mimeType = e2), this;
    }, statusCode: function(e2) {
      var t3;
      if (e2) if (c2) E2.always(e2[E2.status]);
      else for (t3 in e2) x2[t3] = [x2[t3], e2[t3]];
      return this;
    }, abort: function(e2) {
      var t3 = e2 || C2;
      return i2 && i2.abort(t3), k2(0, t3), this;
    } };
    if (v2.promise(E2), h3.url = ((t2 || h3.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h3.type = n2.method || n2.type || h3.method || h3.type, h3.dataTypes = (h3.dataType || "*").toLowerCase().match(M) || [""], null == h3.crossDomain) {
      l2 = r.createElement("a");
      try {
        l2.href = h3.url, l2.href = l2.href, h3.crossDomain = Bt.protocol + "//" + Bt.host != l2.protocol + "//" + l2.host;
      } catch (e2) {
        h3.crossDomain = true;
      }
    }
    if (h3.data && h3.processData && "string" != typeof h3.data && (h3.data = w.param(h3.data, h3.traditional)), _t(It, h3, n2, E2), c2) return E2;
    (f2 = w.event && h3.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h3.type = h3.type.toUpperCase(), h3.hasContent = !Mt.test(h3.type), o2 = h3.url.replace(Lt, ""), h3.hasContent ? h3.data && h3.processData && 0 === (h3.contentType || "").indexOf("application/x-www-form-urlencoded") && (h3.data = h3.data.replace(qt, "+")) : (d2 = h3.url.slice(o2.length), h3.data && (h3.processData || "string" == typeof h3.data) && (o2 += (kt.test(o2) ? "&" : "?") + h3.data, delete h3.data), false === h3.cache && (o2 = o2.replace(Ht, "$1"), d2 = (kt.test(o2) ? "&" : "?") + "_=" + Et++ + d2), h3.url = o2 + d2), h3.ifModified && (w.lastModified[o2] && E2.setRequestHeader("If-Modified-Since", w.lastModified[o2]), w.etag[o2] && E2.setRequestHeader("If-None-Match", w.etag[o2])), (h3.data && h3.hasContent && false !== h3.contentType || n2.contentType) && E2.setRequestHeader("Content-Type", h3.contentType), E2.setRequestHeader("Accept", h3.dataTypes[0] && h3.accepts[h3.dataTypes[0]] ? h3.accepts[h3.dataTypes[0]] + ("*" !== h3.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h3.accepts["*"]);
    for (p2 in h3.headers) E2.setRequestHeader(p2, h3.headers[p2]);
    if (h3.beforeSend && (false === h3.beforeSend.call(g2, E2, h3) || c2)) return E2.abort();
    if (C2 = "abort", m2.add(h3.complete), E2.done(h3.success), E2.fail(h3.error), i2 = _t(Wt, h3, n2, E2)) {
      if (E2.readyState = 1, f2 && y2.trigger("ajaxSend", [E2, h3]), c2) return E2;
      h3.async && h3.timeout > 0 && (u2 = e.setTimeout(function() {
        E2.abort("timeout");
      }, h3.timeout));
      try {
        c2 = false, i2.send(b, k2);
      } catch (e2) {
        if (c2) throw e2;
        k2(-1, e2);
      }
    } else k2(-1, "No Transport");
    function k2(t3, n3, r2, s3) {
      var l3, p3, d3, b2, T3, C3 = n3;
      c2 || (c2 = true, u2 && e.clearTimeout(u2), i2 = void 0, a2 = s3 || "", E2.readyState = t3 > 0 ? 4 : 0, l3 = t3 >= 200 && t3 < 300 || 304 === t3, r2 && (b2 = Xt(h3, E2, r2)), b2 = Ut(h3, b2, E2, l3), l3 ? (h3.ifModified && ((T3 = E2.getResponseHeader("Last-Modified")) && (w.lastModified[o2] = T3), (T3 = E2.getResponseHeader("etag")) && (w.etag[o2] = T3)), 204 === t3 || "HEAD" === h3.type ? C3 = "nocontent" : 304 === t3 ? C3 = "notmodified" : (C3 = b2.state, p3 = b2.data, l3 = !(d3 = b2.error))) : (d3 = C3, !t3 && C3 || (C3 = "error", t3 < 0 && (t3 = 0))), E2.status = t3, E2.statusText = (n3 || C3) + "", l3 ? v2.resolveWith(g2, [p3, C3, E2]) : v2.rejectWith(g2, [E2, C3, d3]), E2.statusCode(x2), x2 = void 0, f2 && y2.trigger(l3 ? "ajaxSuccess" : "ajaxError", [E2, h3, l3 ? p3 : d3]), m2.fireWith(g2, [E2, C3]), f2 && (y2.trigger("ajaxComplete", [E2, h3]), --w.active || w.event.trigger("ajaxStop")));
    }
    return E2;
  }, getJSON: function(e2, t2, n2) {
    return w.get(e2, t2, n2, "json");
  }, getScript: function(e2, t2) {
    return w.get(e2, void 0, t2, "script");
  } }), w.each(["get", "post"], function(e2, t2) {
    w[t2] = function(e3, n2, r2, i2) {
      return g(n2) && (i2 = i2 || r2, r2 = n2, n2 = void 0), w.ajax(w.extend({ url: e3, type: t2, dataType: i2, data: n2, success: r2 }, w.isPlainObject(e3) && e3));
    };
  }), w._evalUrl = function(e2) {
    return w.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, "throws": true });
  }, w.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (g(e2) && (e2 = e2.call(this[0])), t2 = w(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      var e3 = this;
      while (e3.firstElementChild) e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(e2) {
    return g(e2) ? this.each(function(t2) {
      w(this).wrapInner(e2.call(this, t2));
    }) : this.each(function() {
      var t2 = w(this), n2 = t2.contents();
      n2.length ? n2.wrapAll(e2) : t2.append(e2);
    });
  }, wrap: function(e2) {
    var t2 = g(e2);
    return this.each(function(n2) {
      w(this).wrapAll(t2 ? e2.call(this, n2) : e2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      w(this).replaceWith(this.childNodes);
    }), this;
  } }), w.expr.pseudos.hidden = function(e2) {
    return !w.expr.pseudos.visible(e2);
  }, w.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, w.ajaxSettings.xhr = function() {
    try {
      return new e.XMLHttpRequest();
    } catch (e2) {
    }
  };
  var Vt = { 0: 200, 1223: 204 }, Gt = w.ajaxSettings.xhr();
  h2.cors = !!Gt && "withCredentials" in Gt, h2.ajax = Gt = !!Gt, w.ajaxTransport(function(t2) {
    var n2, r2;
    if (h2.cors || Gt && !t2.crossDomain) return { send: function(i2, o2) {
      var a2, s2 = t2.xhr();
      if (s2.open(t2.type, t2.url, t2.async, t2.username, t2.password), t2.xhrFields) for (a2 in t2.xhrFields) s2[a2] = t2.xhrFields[a2];
      t2.mimeType && s2.overrideMimeType && s2.overrideMimeType(t2.mimeType), t2.crossDomain || i2["X-Requested-With"] || (i2["X-Requested-With"] = "XMLHttpRequest");
      for (a2 in i2) s2.setRequestHeader(a2, i2[a2]);
      n2 = function(e2) {
        return function() {
          n2 && (n2 = r2 = s2.onload = s2.onerror = s2.onabort = s2.ontimeout = s2.onreadystatechange = null, "abort" === e2 ? s2.abort() : "error" === e2 ? "number" != typeof s2.status ? o2(0, "error") : o2(s2.status, s2.statusText) : o2(Vt[s2.status] || s2.status, s2.statusText, "text" !== (s2.responseType || "text") || "string" != typeof s2.responseText ? { binary: s2.response } : { text: s2.responseText }, s2.getAllResponseHeaders()));
        };
      }, s2.onload = n2(), r2 = s2.onerror = s2.ontimeout = n2("error"), void 0 !== s2.onabort ? s2.onabort = r2 : s2.onreadystatechange = function() {
        4 === s2.readyState && e.setTimeout(function() {
          n2 && r2();
        });
      }, n2 = n2("abort");
      try {
        s2.send(t2.hasContent && t2.data || null);
      } catch (e2) {
        if (n2) throw e2;
      }
    }, abort: function() {
      n2 && n2();
    } };
  }), w.ajaxPrefilter(function(e2) {
    e2.crossDomain && (e2.contents.script = false);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
    return w.globalEval(e2), e2;
  } } }), w.ajaxPrefilter("script", function(e2) {
    void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
  }), w.ajaxTransport("script", function(e2) {
    if (e2.crossDomain) {
      var t2, n2;
      return { send: function(i2, o2) {
        t2 = w("<script>").prop({ charset: e2.scriptCharset, src: e2.url }).on("load error", n2 = function(e3) {
          t2.remove(), n2 = null, e3 && o2("error" === e3.type ? 404 : 200, e3.type);
        }), r.head.appendChild(t2[0]);
      }, abort: function() {
        n2 && n2();
      } };
    }
  });
  var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e2 = Yt.pop() || w.expando + "_" + Et++;
    return this[e2] = true, e2;
  } }), w.ajaxPrefilter("json jsonp", function(t2, n2, r2) {
    var i2, o2, a2, s2 = false !== t2.jsonp && (Qt.test(t2.url) ? "url" : "string" == typeof t2.data && 0 === (t2.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t2.data) && "data");
    if (s2 || "jsonp" === t2.dataTypes[0]) return i2 = t2.jsonpCallback = g(t2.jsonpCallback) ? t2.jsonpCallback() : t2.jsonpCallback, s2 ? t2[s2] = t2[s2].replace(Qt, "$1" + i2) : false !== t2.jsonp && (t2.url += (kt.test(t2.url) ? "&" : "?") + t2.jsonp + "=" + i2), t2.converters["script json"] = function() {
      return a2 || w.error(i2 + " was not called"), a2[0];
    }, t2.dataTypes[0] = "json", o2 = e[i2], e[i2] = function() {
      a2 = arguments;
    }, r2.always(function() {
      void 0 === o2 ? w(e).removeProp(i2) : e[i2] = o2, t2[i2] && (t2.jsonpCallback = n2.jsonpCallback, Yt.push(i2)), a2 && g(o2) && o2(a2[0]), a2 = o2 = void 0;
    }), "script";
  }), h2.createHTMLDocument = function() {
    var e2 = r.implementation.createHTMLDocument("").body;
    return e2.innerHTML = "<form></form><form></form>", 2 === e2.childNodes.length;
  }(), w.parseHTML = function(e2, t2, n2) {
    if ("string" != typeof e2) return [];
    "boolean" == typeof t2 && (n2 = t2, t2 = false);
    var i2, o2, a2;
    return t2 || (h2.createHTMLDocument ? ((i2 = (t2 = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t2.head.appendChild(i2)) : t2 = r), o2 = A.exec(e2), a2 = !n2 && [], o2 ? [t2.createElement(o2[1])] : (o2 = xe([e2], t2, a2), a2 && a2.length && w(a2).remove(), w.merge([], o2.childNodes));
  }, w.fn.load = function(e2, t2, n2) {
    var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
    return s2 > -1 && (r2 = vt(e2.slice(s2)), e2 = e2.slice(0, s2)), g(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), a2.length > 0 && w.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
      o2 = arguments, a2.html(r2 ? w("<div>").append(w.parseHTML(e3)).find(r2) : e3);
    }).always(n2 && function(e3, t3) {
      a2.each(function() {
        n2.apply(this, o2 || [e3.responseText, t3, e3]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
    w.fn[t2] = function(e3) {
      return this.on(t2, e3);
    };
  }), w.expr.pseudos.animated = function(e2) {
    return w.grep(w.timers, function(t2) {
      return e2 === t2.elem;
    }).length;
  }, w.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, c2 = w.css(e2, "position"), f2 = w(e2), p2 = {};
    "static" === c2 && (e2.style.position = "relative"), s2 = f2.offset(), o2 = w.css(e2, "top"), u2 = w.css(e2, "left"), ("absolute" === c2 || "fixed" === c2) && (o2 + u2).indexOf("auto") > -1 ? (a2 = (r2 = f2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), g(t2) && (t2 = t2.call(e2, n2, w.extend({}, s2))), null != t2.top && (p2.top = t2.top - s2.top + a2), null != t2.left && (p2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, p2) : f2.css(p2);
  } }, w.fn.extend({ offset: function(e2) {
    if (arguments.length) return void 0 === e2 ? this : this.each(function(t3) {
      w.offset.setOffset(this, e2, t3);
    });
    var t2, n2, r2 = this[0];
    if (r2) return r2.getClientRects().length ? (t2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: t2.top + n2.pageYOffset, left: t2.left + n2.pageXOffset }) : { top: 0, left: 0 };
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === w.css(r2, "position")) t2 = r2.getBoundingClientRect();
      else {
        t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
        while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === w.css(e2, "position")) e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = w(e2).offset()).top += w.css(e2, "borderTopWidth", true), i2.left += w.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - w.css(r2, "marginTop", true), left: t2.left - i2.left - w.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent;
      while (e2 && "static" === w.css(e2, "position")) e2 = e2.offsetParent;
      return e2 || be;
    });
  } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e2, t2) {
    var n2 = "pageYOffset" === t2;
    w.fn[e2] = function(r2) {
      return z(this, function(e3, r3, i2) {
        var o2;
        if (y(e3) ? o2 = e3 : 9 === e3.nodeType && (o2 = e3.defaultView), void 0 === i2) return o2 ? o2[t2] : e3[r3];
        o2 ? o2.scrollTo(n2 ? o2.pageXOffset : i2, n2 ? i2 : o2.pageYOffset) : e3[r3] = i2;
      }, e2, r2, arguments.length);
    };
  }), w.each(["top", "left"], function(e2, t2) {
    w.cssHooks[t2] = _e(h2.pixelPosition, function(e3, n2) {
      if (n2) return n2 = Fe(e3, t2), We.test(n2) ? w(e3).position()[t2] + "px" : n2;
    });
  }), w.each({ Height: "height", Width: "width" }, function(e2, t2) {
    w.each({ padding: "inner" + e2, content: t2, "": "outer" + e2 }, function(n2, r2) {
      w.fn[r2] = function(i2, o2) {
        var a2 = arguments.length && (n2 || "boolean" != typeof i2), s2 = n2 || (true === i2 || true === o2 ? "margin" : "border");
        return z(this, function(t3, n3, i3) {
          var o3;
          return y(t3) ? 0 === r2.indexOf("outer") ? t3["inner" + e2] : t3.document.documentElement["client" + e2] : 9 === t3.nodeType ? (o3 = t3.documentElement, Math.max(t3.body["scroll" + e2], o3["scroll" + e2], t3.body["offset" + e2], o3["offset" + e2], o3["client" + e2])) : void 0 === i3 ? w.css(t3, n3, s2) : w.style(t3, n3, i3, s2);
        }, t2, a2 ? i2 : void 0, a2);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, t2) {
    w.fn[t2] = function(e3, n2) {
      return arguments.length > 0 ? this.on(t2, null, e3, n2) : this.trigger(t2);
    };
  }), w.fn.extend({ hover: function(e2, t2) {
    return this.mouseenter(e2).mouseleave(t2 || e2);
  } }), w.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  } }), w.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), g(e2)) return r2 = o.call(arguments, 2), i2 = function() {
      return e2.apply(t2 || this, r2.concat(o.call(arguments)));
    }, i2.guid = e2.guid = e2.guid || w.guid++, i2;
  }, w.holdReady = function(e2) {
    e2 ? w.readyWait++ : w.ready(true);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function(e2) {
    var t2 = w.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return w;
  });
  var Jt = e.jQuery, Kt = e.$;
  return w.noConflict = function(t2) {
    return e.$ === w && (e.$ = Kt), t2 && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], e) : e((t = t || self).bootstrap = {}, t.jQuery);
}(void 0, function(t, p) {
  function i(t2, e2) {
    for (var n2 = 0; n2 < e2.length; n2++) {
      var i2 = e2[n2];
      i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(t2, i2.key, i2);
    }
  }
  function s(t2, e2, n2) {
    return n2 && i(t2, n2), t2;
  }
  function l(o2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = null != arguments[t2] ? arguments[t2] : {}, e2 = Object.keys(r2);
      "function" == typeof Object.getOwnPropertySymbols && (e2 = e2.concat(Object.getOwnPropertySymbols(r2).filter(function(t3) {
        return Object.getOwnPropertyDescriptor(r2, t3).enumerable;
      }))), e2.forEach(function(t3) {
        var e3, n2, i2;
        e3 = o2, i2 = r2[n2 = t3], n2 in e3 ? Object.defineProperty(e3, n2, { value: i2, enumerable: true, configurable: true, writable: true }) : e3[n2] = i2;
      });
    }
    return o2;
  }
  p = p && p.hasOwnProperty("default") ? p.default : p;
  var e = "transitionend";
  function n(t2) {
    var e2 = this, n2 = false;
    return p(this).one(m.TRANSITION_END, function() {
      n2 = true;
    }), setTimeout(function() {
      n2 || m.triggerTransitionEnd(e2);
    }, t2), this;
  }
  var m = { TRANSITION_END: "bsTransitionEnd", getUID: function(t2) {
    for (; t2 += ~~(1e6 * Math.random()), document.getElementById(t2); ) ;
    return t2;
  }, getSelectorFromElement: function(t2) {
    var e2 = t2.getAttribute("data-target");
    if (!e2 || "#" === e2) {
      var n2 = t2.getAttribute("href");
      e2 = n2 && "#" !== n2 ? n2.trim() : "";
    }
    try {
      return document.querySelector(e2) ? e2 : null;
    } catch (t3) {
      return null;
    }
  }, getTransitionDurationFromElement: function(t2) {
    if (!t2) return 0;
    var e2 = p(t2).css("transition-duration"), n2 = p(t2).css("transition-delay"), i2 = parseFloat(e2), o2 = parseFloat(n2);
    return i2 || o2 ? (e2 = e2.split(",")[0], n2 = n2.split(",")[0], 1e3 * (parseFloat(e2) + parseFloat(n2))) : 0;
  }, reflow: function(t2) {
    return t2.offsetHeight;
  }, triggerTransitionEnd: function(t2) {
    p(t2).trigger(e);
  }, supportsTransitionEnd: function() {
    return Boolean(e);
  }, isElement: function(t2) {
    return (t2[0] || t2).nodeType;
  }, typeCheckConfig: function(t2, e2, n2) {
    for (var i2 in n2) if (Object.prototype.hasOwnProperty.call(n2, i2)) {
      var o2 = n2[i2], r2 = e2[i2], s2 = r2 && m.isElement(r2) ? "element" : (a2 = r2, {}.toString.call(a2).match(/\s([a-z]+)/i)[1].toLowerCase());
      if (!new RegExp(o2).test(s2)) throw new Error(t2.toUpperCase() + ': Option "' + i2 + '" provided type "' + s2 + '" but expected type "' + o2 + '".');
    }
    var a2;
  }, findShadowRoot: function(t2) {
    if (!document.documentElement.attachShadow) return null;
    if ("function" != typeof t2.getRootNode) return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? m.findShadowRoot(t2.parentNode) : null;
    var e2 = t2.getRootNode();
    return e2 instanceof ShadowRoot ? e2 : null;
  } };
  p.fn.emulateTransitionEnd = n, p.event.special[m.TRANSITION_END] = { bindType: e, delegateType: e, handle: function(t2) {
    if (p(t2.target).is(this)) return t2.handleObj.handler.apply(this, arguments);
  } };
  var o = "alert", r = "bs.alert", a = "." + r, c = p.fn[o], h2 = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, u = "alert", f = "fade", d = "show", g = function() {
    function i2(t3) {
      this._element = t3;
    }
    var t2 = i2.prototype;
    return t2.close = function(t3) {
      var e2 = this._element;
      t3 && (e2 = this._getRootElement(t3)), this._triggerCloseEvent(e2).isDefaultPrevented() || this._removeElement(e2);
    }, t2.dispose = function() {
      p.removeData(this._element, r), this._element = null;
    }, t2._getRootElement = function(t3) {
      var e2 = m.getSelectorFromElement(t3), n2 = false;
      return e2 && (n2 = document.querySelector(e2)), n2 || (n2 = p(t3).closest("." + u)[0]), n2;
    }, t2._triggerCloseEvent = function(t3) {
      var e2 = p.Event(h2.CLOSE);
      return p(t3).trigger(e2), e2;
    }, t2._removeElement = function(e2) {
      var n2 = this;
      if (p(e2).removeClass(d), p(e2).hasClass(f)) {
        var t3 = m.getTransitionDurationFromElement(e2);
        p(e2).one(m.TRANSITION_END, function(t4) {
          return n2._destroyElement(e2, t4);
        }).emulateTransitionEnd(t3);
      } else this._destroyElement(e2);
    }, t2._destroyElement = function(t3) {
      p(t3).detach().trigger(h2.CLOSED).remove();
    }, i2._jQueryInterface = function(n2) {
      return this.each(function() {
        var t3 = p(this), e2 = t3.data(r);
        e2 || (e2 = new i2(this), t3.data(r, e2)), "close" === n2 && e2[n2](this);
      });
    }, i2._handleDismiss = function(e2) {
      return function(t3) {
        t3 && t3.preventDefault(), e2.close(this);
      };
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.3.1";
    } }]), i2;
  }();
  p(document).on(h2.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), p.fn[o] = g._jQueryInterface, p.fn[o].Constructor = g, p.fn[o].noConflict = function() {
    return p.fn[o] = c, g._jQueryInterface;
  };
  var _ = "button", v = "bs.button", y = "." + v, E = ".data-api", b = p.fn[_], w = "active", C = "btn", T = "focus", S = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', I2 = 'input:not([type="hidden"])', A = ".active", O = ".btn", N = { CLICK_DATA_API: "click" + y + E, FOCUS_BLUR_DATA_API: "focus" + y + E + " blur" + y + E }, k = function() {
    function n2(t3) {
      this._element = t3;
    }
    var t2 = n2.prototype;
    return t2.toggle = function() {
      var t3 = true, e2 = true, n3 = p(this._element).closest(D)[0];
      if (n3) {
        var i2 = this._element.querySelector(I2);
        if (i2) {
          if ("radio" === i2.type) if (i2.checked && this._element.classList.contains(w)) t3 = false;
          else {
            var o2 = n3.querySelector(A);
            o2 && p(o2).removeClass(w);
          }
          if (t3) {
            if (i2.hasAttribute("disabled") || n3.hasAttribute("disabled") || i2.classList.contains("disabled") || n3.classList.contains("disabled")) return;
            i2.checked = !this._element.classList.contains(w), p(i2).trigger("change");
          }
          i2.focus(), e2 = false;
        }
      }
      e2 && this._element.setAttribute("aria-pressed", !this._element.classList.contains(w)), t3 && p(this._element).toggleClass(w);
    }, t2.dispose = function() {
      p.removeData(this._element, v), this._element = null;
    }, n2._jQueryInterface = function(e2) {
      return this.each(function() {
        var t3 = p(this).data(v);
        t3 || (t3 = new n2(this), p(this).data(v, t3)), "toggle" === e2 && t3[e2]();
      });
    }, s(n2, null, [{ key: "VERSION", get: function() {
      return "4.3.1";
    } }]), n2;
  }();
  p(document).on(N.CLICK_DATA_API, S, function(t2) {
    t2.preventDefault();
    var e2 = t2.target;
    p(e2).hasClass(C) || (e2 = p(e2).closest(O)), k._jQueryInterface.call(p(e2), "toggle");
  }).on(N.FOCUS_BLUR_DATA_API, S, function(t2) {
    var e2 = p(t2.target).closest(O)[0];
    p(e2).toggleClass(T, /^focus(in)?$/.test(t2.type));
  }), p.fn[_] = k._jQueryInterface, p.fn[_].Constructor = k, p.fn[_].noConflict = function() {
    return p.fn[_] = b, k._jQueryInterface;
  };
  var L = "carousel", x = "bs.carousel", P = "." + x, H = ".data-api", j = p.fn[L], R = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true }, F = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, M = "next", W = "prev", U = "left", B = "right", q = { SLIDE: "slide" + P, SLID: "slid" + P, KEYDOWN: "keydown" + P, MOUSEENTER: "mouseenter" + P, MOUSELEAVE: "mouseleave" + P, TOUCHSTART: "touchstart" + P, TOUCHMOVE: "touchmove" + P, TOUCHEND: "touchend" + P, POINTERDOWN: "pointerdown" + P, POINTERUP: "pointerup" + P, DRAG_START: "dragstart" + P, LOAD_DATA_API: "load" + P + H, CLICK_DATA_API: "click" + P + H }, K = "carousel", Q = "active", V = "slide", Y = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", G = "carousel-item-prev", $2 = "pointer-event", J = ".active", Z = ".active.carousel-item", tt = ".carousel-item", et = ".carousel-item img", nt = ".carousel-item-next, .carousel-item-prev", it = ".carousel-indicators", ot = "[data-slide], [data-slide-to]", rt = '[data-ride="carousel"]', st = { TOUCH: "touch", PEN: "pen" }, at = function() {
    function r2(t3, e2) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e2), this._element = t3, this._indicatorsElement = this._element.querySelector(it), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }
    var t2 = r2.prototype;
    return t2.next = function() {
      this._isSliding || this._slide(M);
    }, t2.nextWhenVisible = function() {
      !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next();
    }, t2.prev = function() {
      this._isSliding || this._slide(W);
    }, t2.pause = function(t3) {
      t3 || (this._isPaused = true), this._element.querySelector(nt) && (m.triggerTransitionEnd(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
    }, t2.cycle = function(t3) {
      t3 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t2.to = function(t3) {
      var e2 = this;
      this._activeElement = this._element.querySelector(Z);
      var n2 = this._getItemIndex(this._activeElement);
      if (!(t3 > this._items.length - 1 || t3 < 0)) if (this._isSliding) p(this._element).one(q.SLID, function() {
        return e2.to(t3);
      });
      else {
        if (n2 === t3) return this.pause(), void this.cycle();
        var i2 = n2 < t3 ? M : W;
        this._slide(i2, this._items[t3]);
      }
    }, t2.dispose = function() {
      p(this._element).off(P), p.removeData(this._element, x), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t2._getConfig = function(t3) {
      return t3 = l({}, R, t3), m.typeCheckConfig(L, t3, F), t3;
    }, t2._handleSwipe = function() {
      var t3 = Math.abs(this.touchDeltaX);
      if (!(t3 <= 40)) {
        var e2 = t3 / this.touchDeltaX;
        0 < e2 && this.prev(), e2 < 0 && this.next();
      }
    }, t2._addEventListeners = function() {
      var e2 = this;
      this._config.keyboard && p(this._element).on(q.KEYDOWN, function(t3) {
        return e2._keydown(t3);
      }), "hover" === this._config.pause && p(this._element).on(q.MOUSEENTER, function(t3) {
        return e2.pause(t3);
      }).on(q.MOUSELEAVE, function(t3) {
        return e2.cycle(t3);
      }), this._config.touch && this._addTouchEventListeners();
    }, t2._addTouchEventListeners = function() {
      var n2 = this;
      if (this._touchSupported) {
        var e2 = function(t3) {
          n2._pointerEvent && st[t3.originalEvent.pointerType.toUpperCase()] ? n2.touchStartX = t3.originalEvent.clientX : n2._pointerEvent || (n2.touchStartX = t3.originalEvent.touches[0].clientX);
        }, i2 = function(t3) {
          n2._pointerEvent && st[t3.originalEvent.pointerType.toUpperCase()] && (n2.touchDeltaX = t3.originalEvent.clientX - n2.touchStartX), n2._handleSwipe(), "hover" === n2._config.pause && (n2.pause(), n2.touchTimeout && clearTimeout(n2.touchTimeout), n2.touchTimeout = setTimeout(function(t4) {
            return n2.cycle(t4);
          }, 500 + n2._config.interval));
        };
        p(this._element.querySelectorAll(et)).on(q.DRAG_START, function(t3) {
          return t3.preventDefault();
        }), this._pointerEvent ? (p(this._element).on(q.POINTERDOWN, function(t3) {
          return e2(t3);
        }), p(this._element).on(q.POINTERUP, function(t3) {
          return i2(t3);
        }), this._element.classList.add($2)) : (p(this._element).on(q.TOUCHSTART, function(t3) {
          return e2(t3);
        }), p(this._element).on(q.TOUCHMOVE, function(t3) {
          var e3;
          (e3 = t3).originalEvent.touches && 1 < e3.originalEvent.touches.length ? n2.touchDeltaX = 0 : n2.touchDeltaX = e3.originalEvent.touches[0].clientX - n2.touchStartX;
        }), p(this._element).on(q.TOUCHEND, function(t3) {
          return i2(t3);
        }));
      }
    }, t2._keydown = function(t3) {
      if (!/input|textarea/i.test(t3.target.tagName)) switch (t3.which) {
        case 37:
          t3.preventDefault(), this.prev();
          break;
        case 39:
          t3.preventDefault(), this.next();
      }
    }, t2._getItemIndex = function(t3) {
      return this._items = t3 && t3.parentNode ? [].slice.call(t3.parentNode.querySelectorAll(tt)) : [], this._items.indexOf(t3);
    }, t2._getItemByDirection = function(t3, e2) {
      var n2 = t3 === M, i2 = t3 === W, o2 = this._getItemIndex(e2), r3 = this._items.length - 1;
      if ((i2 && 0 === o2 || n2 && o2 === r3) && !this._config.wrap) return e2;
      var s2 = (o2 + (t3 === W ? -1 : 1)) % this._items.length;
      return -1 === s2 ? this._items[this._items.length - 1] : this._items[s2];
    }, t2._triggerSlideEvent = function(t3, e2) {
      var n2 = this._getItemIndex(t3), i2 = this._getItemIndex(this._element.querySelector(Z)), o2 = p.Event(q.SLIDE, { relatedTarget: t3, direction: e2, from: i2, to: n2 });
      return p(this._element).trigger(o2), o2;
    }, t2._setActiveIndicatorElement = function(t3) {
      if (this._indicatorsElement) {
        var e2 = [].slice.call(this._indicatorsElement.querySelectorAll(J));
        p(e2).removeClass(Q);
        var n2 = this._indicatorsElement.children[this._getItemIndex(t3)];
        n2 && p(n2).addClass(Q);
      }
    }, t2._slide = function(t3, e2) {
      var n2, i2, o2, r3 = this, s2 = this._element.querySelector(Z), a2 = this._getItemIndex(s2), l2 = e2 || s2 && this._getItemByDirection(t3, s2), c2 = this._getItemIndex(l2), h3 = Boolean(this._interval);
      if (o2 = t3 === M ? (n2 = z, i2 = X, U) : (n2 = Y, i2 = G, B), l2 && p(l2).hasClass(Q)) this._isSliding = false;
      else if (!this._triggerSlideEvent(l2, o2).isDefaultPrevented() && s2 && l2) {
        this._isSliding = true, h3 && this.pause(), this._setActiveIndicatorElement(l2);
        var u2 = p.Event(q.SLID, { relatedTarget: l2, direction: o2, from: a2, to: c2 });
        if (p(this._element).hasClass(V)) {
          p(l2).addClass(i2), m.reflow(l2), p(s2).addClass(n2), p(l2).addClass(n2);
          var f2 = parseInt(l2.getAttribute("data-interval"), 10);
          this._config.interval = f2 ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, f2) : this._config.defaultInterval || this._config.interval;
          var d2 = m.getTransitionDurationFromElement(s2);
          p(s2).one(m.TRANSITION_END, function() {
            p(l2).removeClass(n2 + " " + i2).addClass(Q), p(s2).removeClass(Q + " " + i2 + " " + n2), r3._isSliding = false, setTimeout(function() {
              return p(r3._element).trigger(u2);
            }, 0);
          }).emulateTransitionEnd(d2);
        } else p(s2).removeClass(Q), p(l2).addClass(Q), this._isSliding = false, p(this._element).trigger(u2);
        h3 && this.cycle();
      }
    }, r2._jQueryInterface = function(i2) {
      return this.each(function() {
        var t3 = p(this).data(x), e2 = l({}, R, p(this).data());
        "object" == typeof i2 && (e2 = l({}, e2, i2));
        var n2 = "string" == typeof i2 ? i2 : e2.slide;
        if (t3 || (t3 = new r2(this, e2), p(this).data(x, t3)), "number" == typeof i2) t3.to(i2);
        else if ("string" == typeof n2) {
          if ("undefined" == typeof t3[n2]) throw new TypeError('No method named "' + n2 + '"');
          t3[n2]();
        } else e2.interval && e2.ride && (t3.pause(), t3.cycle());
      });
    }, r2._dataApiClickHandler = function(t3) {
      var e2 = m.getSelectorFromElement(this);
      if (e2) {
        var n2 = p(e2)[0];
        if (n2 && p(n2).hasClass(K)) {
          var i2 = l({}, p(n2).data(), p(this).data()), o2 = this.getAttribute("data-slide-to");
          o2 && (i2.interval = false), r2._jQueryInterface.call(p(n2), i2), o2 && p(n2).data(x).to(o2), t3.preventDefault();
        }
      }
    }, s(r2, null, [{ key: "VERSION", get: function() {
      return "4.3.1";
    } }, { key: "Default", get: function() {
      return R;
    } }]), r2;
  }();
  p(document).on(q.CLICK_DATA_API, ot, at._dataApiClickHandler), p(window).on(q.LOAD_DATA_API, function() {
    for (var t2 = [].slice.call(document.querySelectorAll(rt)), e2 = 0, n2 = t2.length; e2 < n2; e2++) {
      var i2 = p(t2[e2]);
      at._jQueryInterface.call(i2, i2.data());
    }
  }), p.fn[L] = at._jQueryInterface, p.fn[L].Constructor = at, p.fn[L].noConflict = function() {
    return p.fn[L] = j, at._jQueryInterface;
  };
  var lt = "collapse", ct = "bs.collapse", ht = "." + ct, ut = p.fn[lt], ft = { toggle: true, parent: "" }, dt = { toggle: "boolean", parent: "(string|element)" }, pt = { SHOW: "show" + ht, SHOWN: "shown" + ht, HIDE: "hide" + ht, HIDDEN: "hidden" + ht, CLICK_DATA_API: "click" + ht + ".data-api" }, mt = "show", gt = "collapse", _t = "collapsing", vt = "collapsed", yt = "width", Et = "height", bt = ".show, .collapsing", wt = '[data-toggle="collapse"]', Ct = function() {
    function a2(e2, t3) {
      this._isTransitioning = false, this._element = e2, this._config = this._getConfig(t3), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e2.id + '"],[data-toggle="collapse"][data-target="#' + e2.id + '"]'));
      for (var n2 = [].slice.call(document.querySelectorAll(wt)), i2 = 0, o2 = n2.length; i2 < o2; i2++) {
        var r2 = n2[i2], s2 = m.getSelectorFromElement(r2), a3 = [].slice.call(document.querySelectorAll(s2)).filter(function(t4) {
          return t4 === e2;
        });
        null !== s2 && 0 < a3.length && (this._selector = s2, this._triggerArray.push(r2));
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }
    var t2 = a2.prototype;
    return t2.toggle = function() {
      p(this._element).hasClass(mt) ? this.hide() : this.show();
    }, t2.show = function() {
      var t3, e2, n2 = this;
      if (!this._isTransitioning && !p(this._element).hasClass(mt) && (this._parent && 0 === (t3 = [].slice.call(this._parent.querySelectorAll(bt)).filter(function(t4) {
        return "string" == typeof n2._config.parent ? t4.getAttribute("data-parent") === n2._config.parent : t4.classList.contains(gt);
      })).length && (t3 = null), !(t3 && (e2 = p(t3).not(this._selector).data(ct)) && e2._isTransitioning))) {
        var i2 = p.Event(pt.SHOW);
        if (p(this._element).trigger(i2), !i2.isDefaultPrevented()) {
          t3 && (a2._jQueryInterface.call(p(t3).not(this._selector), "hide"), e2 || p(t3).data(ct, null));
          var o2 = this._getDimension();
          p(this._element).removeClass(gt).addClass(_t), this._element.style[o2] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(vt).attr("aria-expanded", true), this.setTransitioning(true);
          var r2 = "scroll" + (o2[0].toUpperCase() + o2.slice(1)), s2 = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, function() {
            p(n2._element).removeClass(_t).addClass(gt).addClass(mt), n2._element.style[o2] = "", n2.setTransitioning(false), p(n2._element).trigger(pt.SHOWN);
          }).emulateTransitionEnd(s2), this._element.style[o2] = this._element[r2] + "px";
        }
      }
    }, t2.hide = function() {
      var t3 = this;
      if (!this._isTransitioning && p(this._element).hasClass(mt)) {
        var e2 = p.Event(pt.HIDE);
        if (p(this._element).trigger(e2), !e2.isDefaultPrevented()) {
          var n2 = this._getDimension();
          this._element.style[n2] = this._element.getBoundingClientRect()[n2] + "px", m.reflow(this._element), p(this._element).addClass(_t).removeClass(gt).removeClass(mt);
          var i2 = this._triggerArray.length;
          if (0 < i2) for (var o2 = 0; o2 < i2; o2++) {
            var r2 = this._triggerArray[o2], s2 = m.getSelectorFromElement(r2);
            if (null !== s2) p([].slice.call(document.querySelectorAll(s2))).hasClass(mt) || p(r2).addClass(vt).attr("aria-expanded", false);
          }
          this.setTransitioning(true);
          this._element.style[n2] = "";
          var a3 = m.getTransitionDurationFromElement(this._element);
          p(this._element).one(m.TRANSITION_END, function() {
            t3.setTransitioning(false), p(t3._element).removeClass(_t).addClass(gt).trigger(pt.HIDDEN);
          }).emulateTransitionEnd(a3);
        }
      }
    }, t2.setTransitioning = function(t3) {
      this._isTransitioning = t3;
    }, t2.dispose = function() {
      p.removeData(this._element, ct), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t2._getConfig = function(t3) {
      return (t3 = l({}, ft, t3)).toggle = Boolean(t3.toggle), m.typeCheckConfig(lt, t3, dt), t3;
    }, t2._getDimension = function() {
      return p(this._element).hasClass(yt) ? yt : Et;
    }, t2._getParent = function() {
      var t3, n2 = this;
      m.isElement(this._config.parent) ? (t3 = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t3 = this._config.parent[0])) : t3 = document.querySelector(this._config.parent);
      var e2 = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i2 = [].slice.call(t3.querySelectorAll(e2));
      return p(i2).each(function(t4, e3) {
        n2._addAriaAndCollapsedClass(a2._getTargetFromElement(e3), [e3]);
      }), t3;
    }, t2._addAriaAndCollapsedClass = function(t3, e2) {
      var n2 = p(t3).hasClass(mt);
      e2.length && p(e2).toggleClass(vt, !n2).attr("aria-expanded", n2);
    }, a2._getTargetFromElement = function(t3) {
      var e2 = m.getSelectorFromElement(t3);
      return e2 ? document.querySelector(e2) : null;
    }, a2._jQueryInterface = function(i2) {
      return this.each(function() {
        var t3 = p(this), e2 = t3.data(ct), n2 = l({}, ft, t3.data(), "object" == typeof i2 && i2 ? i2 : {});
        if (!e2 && n2.toggle && /show|hide/.test(i2) && (n2.toggle = false), e2 || (e2 = new a2(this, n2), t3.data(ct, e2)), "string" == typeof i2) {
          if ("undefined" == typeof e2[i2]) throw new TypeError('No method named "' + i2 + '"');
          e2[i2]();
        }
      });
    }, s(a2, null, [{ key: "VERSION", get: function() {
      return "4.3.1";
    } }, { key: "Default", get: function() {
      return ft;
    } }]), a2;
  }();
  p(document).on(pt.CLICK_DATA_API, wt, function(t2) {
    "A" === t2.currentTarget.tagName && t2.preventDefault();
    var n2 = p(this), e2 = m.getSelectorFromElement(this), i2 = [].slice.call(document.querySelectorAll(e2));
    p(i2).each(function() {
      var t3 = p(this), e3 = t3.data(ct) ? "toggle" : n2.data();
      Ct._jQueryInterface.call(t3, e3);
    });
  }), p.fn[lt] = Ct._jQueryInterface, p.fn[lt].Constructor = Ct, p.fn[lt].noConflict = function() {
    return p.fn[lt] = ut, Ct._jQueryInterface;
  };
  for (var Tt = "undefined" != typeof window && "undefined" != typeof document, St = ["Edge", "Trident", "Firefox"], Dt = 0, It = 0; It < St.length; It += 1) if (Tt && 0 <= navigator.userAgent.indexOf(St[It])) {
    Dt = 1;
    break;
  }
  var At = Tt && window.Promise ? function(t2) {
    var e2 = false;
    return function() {
      e2 || (e2 = true, window.Promise.resolve().then(function() {
        e2 = false, t2();
      }));
    };
  } : function(t2) {
    var e2 = false;
    return function() {
      e2 || (e2 = true, setTimeout(function() {
        e2 = false, t2();
      }, Dt));
    };
  };
  function Ot(t2) {
    return t2 && "[object Function]" === {}.toString.call(t2);
  }
  function Nt(t2, e2) {
    if (1 !== t2.nodeType) return [];
    var n2 = t2.ownerDocument.defaultView.getComputedStyle(t2, null);
    return e2 ? n2[e2] : n2;
  }
  function kt(t2) {
    return "HTML" === t2.nodeName ? t2 : t2.parentNode || t2.host;
  }
  function Lt(t2) {
    if (!t2) return document.body;
    switch (t2.nodeName) {
      case "HTML":
      case "BODY":
        return t2.ownerDocument.body;
      case "#document":
        return t2.body;
    }
    var e2 = Nt(t2), n2 = e2.overflow, i2 = e2.overflowX, o2 = e2.overflowY;
    return /(auto|scroll|overlay)/.test(n2 + o2 + i2) ? t2 : Lt(kt(t2));
  }
  var xt = Tt && !(!window.MSInputMethodContext || !document.documentMode), Pt = Tt && /MSIE 10/.test(navigator.userAgent);
  function Ht(t2) {
    return 11 === t2 ? xt : 10 === t2 ? Pt : xt || Pt;
  }
  function jt(t2) {
    if (!t2) return document.documentElement;
    for (var e2 = Ht(10) ? document.body : null, n2 = t2.offsetParent || null; n2 === e2 && t2.nextElementSibling; ) n2 = (t2 = t2.nextElementSibling).offsetParent;
    var i2 = n2 && n2.nodeName;
    return i2 && "BODY" !== i2 && "HTML" !== i2 ? -1 !== ["TH", "TD", "TABLE"].indexOf(n2.nodeName) && "static" === Nt(n2, "position") ? jt(n2) : n2 : t2 ? t2.ownerDocument.documentElement : document.documentElement;
  }
  function Rt(t2) {
    return null !== t2.parentNode ? Rt(t2.parentNode) : t2;
  }
  function Ft(t2, e2) {
    if (!(t2 && t2.nodeType && e2 && e2.nodeType)) return document.documentElement;
    var n2 = t2.compareDocumentPosition(e2) & Node.DOCUMENT_POSITION_FOLLOWING, i2 = n2 ? t2 : e2, o2 = n2 ? e2 : t2, r2 = document.createRange();
    r2.setStart(i2, 0), r2.setEnd(o2, 0);
    var s2, a2, l2 = r2.commonAncestorContainer;
    if (t2 !== l2 && e2 !== l2 || i2.contains(o2)) return "BODY" === (a2 = (s2 = l2).nodeName) || "HTML" !== a2 && jt(s2.firstElementChild) !== s2 ? jt(l2) : l2;
    var c2 = Rt(t2);
    return c2.host ? Ft(c2.host, e2) : Ft(t2, Rt(e2).host);
  }
  function Mt(t2) {
    var e2 = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft", n2 = t2.nodeName;
    if ("BODY" !== n2 && "HTML" !== n2) return t2[e2];
    var i2 = t2.ownerDocument.documentElement;
    return (t2.ownerDocument.scrollingElement || i2)[e2];
  }
  function Wt(t2, e2) {
    var n2 = "x" === e2 ? "Left" : "Top", i2 = "Left" === n2 ? "Right" : "Bottom";
    return parseFloat(t2["border" + n2 + "Width"], 10) + parseFloat(t2["border" + i2 + "Width"], 10);
  }
  function Ut(t2, e2, n2, i2) {
    return Math.max(e2["offset" + t2], e2["scroll" + t2], n2["client" + t2], n2["offset" + t2], n2["scroll" + t2], Ht(10) ? parseInt(n2["offset" + t2]) + parseInt(i2["margin" + ("Height" === t2 ? "Top" : "Left")]) + parseInt(i2["margin" + ("Height" === t2 ? "Bottom" : "Right")]) : 0);
  }
  function Bt(t2) {
    var e2 = t2.body, n2 = t2.documentElement, i2 = Ht(10) && getComputedStyle(n2);
    return { height: Ut("Height", e2, n2, i2), width: Ut("Width", e2, n2, i2) };
  }
  var qt = /* @__PURE__ */ function() {
    function i2(t2, e2) {
      for (var n2 = 0; n2 < e2.length; n2++) {
        var i3 = e2[n2];
        i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t2, i3.key, i3);
      }
    }
    return function(t2, e2, n2) {
      return e2 && i2(t2.prototype, e2), n2 && i2(t2, n2), t2;
    };
  }(), Kt = function(t2, e2, n2) {
    return e2 in t2 ? Object.defineProperty(t2, e2, { value: n2, enumerable: true, configurable: true, writable: true }) : t2[e2] = n2, t2;
  }, Qt = Object.assign || function(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var n2 = arguments[e2];
      for (var i2 in n2) Object.prototype.hasOwnProperty.call(n2, i2) && (t2[i2] = n2[i2]);
    }
    return t2;
  };
  function Vt(t2) {
    return Qt({}, t2, { right: t2.left + t2.width, bottom: t2.top + t2.height });
  }
  function Yt(t2) {
    var e2 = {};
    try {
      if (Ht(10)) {
        e2 = t2.getBoundingClientRect();
        var n2 = Mt(t2, "top"), i2 = Mt(t2, "left");
        e2.top += n2, e2.left += i2, e2.bottom += n2, e2.right += i2;
      } else e2 = t2.getBoundingClientRect();
    } catch (t3) {
    }
    var o2 = { left: e2.left, top: e2.top, width: e2.right - e2.left, height: e2.bottom - e2.top }, r2 = "HTML" === t2.nodeName ? Bt(t2.ownerDocument) : {}, s2 = r2.width || t2.clientWidth || o2.right - o2.left, a2 = r2.height || t2.clientHeight || o2.bottom - o2.top, l2 = t2.offsetWidth - s2, c2 = t2.offsetHeight - a2;
    if (l2 || c2) {
      var h3 = Nt(t2);
      l2 -= Wt(h3, "x"), c2 -= Wt(h3, "y"), o2.width -= l2, o2.height -= c2;
    }
    return Vt(o2);
  }
  function zt(t2, e2) {
    var n2 = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i2 = Ht(10), o2 = "HTML" === e2.nodeName, r2 = Yt(t2), s2 = Yt(e2), a2 = Lt(t2), l2 = Nt(e2), c2 = parseFloat(l2.borderTopWidth, 10), h3 = parseFloat(l2.borderLeftWidth, 10);
    n2 && o2 && (s2.top = Math.max(s2.top, 0), s2.left = Math.max(s2.left, 0));
    var u2 = Vt({ top: r2.top - s2.top - c2, left: r2.left - s2.left - h3, width: r2.width, height: r2.height });
    if (u2.marginTop = 0, u2.marginLeft = 0, !i2 && o2) {
      var f2 = parseFloat(l2.marginTop, 10), d2 = parseFloat(l2.marginLeft, 10);
      u2.top -= c2 - f2, u2.bottom -= c2 - f2, u2.left -= h3 - d2, u2.right -= h3 - d2, u2.marginTop = f2, u2.marginLeft = d2;
    }
    return (i2 && !n2 ? e2.contains(a2) : e2 === a2 && "BODY" !== a2.nodeName) && (u2 = function(t3, e3) {
      var n3 = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], i3 = Mt(e3, "top"), o3 = Mt(e3, "left"), r3 = n3 ? -1 : 1;
      return t3.top += i3 * r3, t3.bottom += i3 * r3, t3.left += o3 * r3, t3.right += o3 * r3, t3;
    }(u2, e2)), u2;
  }
  function Xt(t2) {
    if (!t2 || !t2.parentElement || Ht()) return document.documentElement;
    for (var e2 = t2.parentElement; e2 && "none" === Nt(e2, "transform"); ) e2 = e2.parentElement;
    return e2 || document.documentElement;
  }
  function Gt(t2, e2, n2, i2) {
    var o2 = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], r2 = { top: 0, left: 0 }, s2 = o2 ? Xt(t2) : Ft(t2, e2);
    if ("viewport" === i2) r2 = function(t3) {
      var e3 = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n3 = t3.ownerDocument.documentElement, i3 = zt(t3, n3), o3 = Math.max(n3.clientWidth, window.innerWidth || 0), r3 = Math.max(n3.clientHeight, window.innerHeight || 0), s3 = e3 ? 0 : Mt(n3), a3 = e3 ? 0 : Mt(n3, "left");
      return Vt({ top: s3 - i3.top + i3.marginTop, left: a3 - i3.left + i3.marginLeft, width: o3, height: r3 });
    }(s2, o2);
    else {
      var a2 = void 0;
      "scrollParent" === i2 ? "BODY" === (a2 = Lt(kt(e2))).nodeName && (a2 = t2.ownerDocument.documentElement) : a2 = "window" === i2 ? t2.ownerDocument.documentElement : i2;
      var l2 = zt(a2, s2, o2);
      if ("HTML" !== a2.nodeName || function t3(e3) {
        var n3 = e3.nodeName;
        if ("BODY" === n3 || "HTML" === n3) return false;
        if ("fixed" === Nt(e3, "position")) return true;
        var i3 = kt(e3);
        return !!i3 && t3(i3);
      }(s2)) r2 = l2;
      else {
        var c2 = Bt(t2.ownerDocument), h3 = c2.height, u2 = c2.width;
        r2.top += l2.top - l2.marginTop, r2.bottom = h3 + l2.top, r2.left += l2.left - l2.marginLeft, r2.right = u2 + l2.left;
      }
    }
    var f2 = "number" == typeof (n2 = n2 || 0);
    return r2.left += f2 ? n2 : n2.left || 0, r2.top += f2 ? n2 : n2.top || 0, r2.right -= f2 ? n2 : n2.right || 0, r2.bottom -= f2 ? n2 : n2.bottom || 0, r2;
  }
  function $t(t2, e2, i2, n2, o2) {
    var r2 = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t2.indexOf("auto")) return t2;
    var s2 = Gt(i2, n2, r2, o2), a2 = { top: { width: s2.width, height: e2.top - s2.top }, right: { width: s2.right - e2.right, height: s2.height }, bottom: { width: s2.width, height: s2.bottom - e2.bottom }, left: { width: e2.left - s2.left, height: s2.height } }, l2 = Object.keys(a2).map(function(t3) {
      return Qt({ key: t3 }, a2[t3], { area: (e3 = a2[t3], e3.width * e3.height) });
      var e3;
    }).sort(function(t3, e3) {
      return e3.area - t3.area;
    }), c2 = l2.filter(function(t3) {
      var e3 = t3.width, n3 = t3.height;
      return e3 >= i2.clientWidth && n3 >= i2.clientHeight;
    }), h3 = 0 < c2.length ? c2[0].key : l2[0].key, u2 = t2.split("-")[1];
    return h3 + (u2 ? "-" + u2 : "");
  }
  function Jt(t2, e2, n2) {
    var i2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return zt(n2, i2 ? Xt(e2) : Ft(e2, n2), i2);
  }
  function Zt(t2) {
    var e2 = t2.ownerDocument.defaultView.getComputedStyle(t2), n2 = parseFloat(e2.marginTop || 0) + parseFloat(e2.marginBottom || 0), i2 = parseFloat(e2.marginLeft || 0) + parseFloat(e2.marginRight || 0);
    return { width: t2.offsetWidth + i2, height: t2.offsetHeight + n2 };
  }
  function te(t2) {
    var e2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t2.replace(/left|right|bottom|top/g, function(t3) {
      return e2[t3];
    });
  }
  function ee(t2, e2, n2) {
    n2 = n2.split("-")[0];
    var i2 = Zt(t2), o2 = { width: i2.width, height: i2.height }, r2 = -1 !== ["right", "left"].indexOf(n2), s2 = r2 ? "top" : "left", a2 = r2 ? "left" : "top", l2 = r2 ? "height" : "width", c2 = r2 ? "width" : "height";
    return o2[s2] = e2[s2] + e2[l2] / 2 - i2[l2] / 2, o2[a2] = n2 === a2 ? e2[a2] - i2[c2] : e2[te(a2)], o2;
  }
  function ne(t2, e2) {
    return Array.prototype.find ? t2.find(e2) : t2.filter(e2)[0];
  }
  function ie(t2, n2, e2) {
    return (void 0 === e2 ? t2 : t2.slice(0, function(t3, e3, n3) {
      if (Array.prototype.findIndex) return t3.findIndex(function(t4) {
        return t4[e3] === n3;
      });
      var i2 = ne(t3, function(t4) {
        return t4[e3] === n3;
      });
      return t3.indexOf(i2);
    }(t2, "name", e2))).forEach(function(t3) {
      t3.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
      var e3 = t3.function || t3.fn;
      t3.enabled && Ot(e3) && (n2.offsets.popper = Vt(n2.offsets.popper), n2.offsets.reference = Vt(n2.offsets.reference), n2 = e3(n2, t3));
    }), n2;
  }
  function oe(t2, n2) {
    return t2.some(function(t3) {
      var e2 = t3.name;
      return t3.enabled && e2 === n2;
    });
  }
  function re(t2) {
    for (var e2 = [false, "ms", "Webkit", "Moz", "O"], n2 = t2.charAt(0).toUpperCase() + t2.slice(1), i2 = 0; i2 < e2.length; i2++) {
      var o2 = e2[i2], r2 = o2 ? "" + o2 + n2 : t2;
      if ("undefined" != typeof document.body.style[r2]) return r2;
    }
    return null;
  }
  function se(t2) {
    var e2 = t2.ownerDocument;
    return e2 ? e2.defaultView : window;
  }
  function ae(t2, e2, n2, i2) {
    n2.updateBound = i2, se(t2).addEventListener("resize", n2.updateBound, { passive: true });
    var o2 = Lt(t2);
    return function t3(e3, n3, i3, o3) {
      var r2 = "BODY" === e3.nodeName, s2 = r2 ? e3.ownerDocument.defaultView : e3;
      s2.addEventListener(n3, i3, { passive: true }), r2 || t3(Lt(s2.parentNode), n3, i3, o3), o3.push(s2);
    }(o2, "scroll", n2.updateBound, n2.scrollParents), n2.scrollElement = o2, n2.eventsEnabled = true, n2;
  }
  function le() {
    var t2, e2;
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t2 = this.reference, e2 = this.state, se(t2).removeEventListener("resize", e2.updateBound), e2.scrollParents.forEach(function(t3) {
      t3.removeEventListener("scroll", e2.updateBound);
    }), e2.updateBound = null, e2.scrollParents = [], e2.scrollElement = null, e2.eventsEnabled = false, e2));
  }
  function ce(t2) {
    return "" !== t2 && !isNaN(parseFloat(t2)) && isFinite(t2);
  }
  function he(n2, i2) {
    Object.keys(i2).forEach(function(t2) {
      var e2 = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t2) && ce(i2[t2]) && (e2 = "px"), n2.style[t2] = i2[t2] + e2;
    });
  }
  var ue = Tt && /Firefox/i.test(navigator.userAgent);
  function fe(t2, e2, n2) {
    var i2 = ne(t2, function(t3) {
      return t3.name === e2;
    }), o2 = !!i2 && t2.some(function(t3) {
      return t3.name === n2 && t3.enabled && t3.order < i2.order;
    });
    if (!o2) {
      var r2 = "`" + e2 + "`", s2 = "`" + n2 + "`";
      console.warn(s2 + " modifier is required by " + r2 + " modifier in order to work, be sure to include it before " + r2 + "!");
    }
    return o2;
  }
  var de = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], pe = de.slice(3);
  function me(t2) {
    var e2 = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n2 = pe.indexOf(t2), i2 = pe.slice(n2 + 1).concat(pe.slice(0, n2));
    return e2 ? i2.reverse() : i2;
  }
  var ge = "flip", _e = "clockwise", ve = "counterclockwise";
  function ye(t2, o2, r2, e2) {
    var s2 = [0, 0], a2 = -1 !== ["right", "left"].indexOf(e2), n2 = t2.split(/(\+|\-)/).map(function(t3) {
      return t3.trim();
    }), i2 = n2.indexOf(ne(n2, function(t3) {
      return -1 !== t3.search(/,|\s/);
    }));
    n2[i2] && -1 === n2[i2].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
    var l2 = /\s*,\s*|\s+/, c2 = -1 !== i2 ? [n2.slice(0, i2).concat([n2[i2].split(l2)[0]]), [n2[i2].split(l2)[1]].concat(n2.slice(i2 + 1))] : [n2];
    return (c2 = c2.map(function(t3, e3) {
      var n3 = (1 === e3 ? !a2 : a2) ? "height" : "width", i3 = false;
      return t3.reduce(function(t4, e4) {
        return "" === t4[t4.length - 1] && -1 !== ["+", "-"].indexOf(e4) ? (t4[t4.length - 1] = e4, i3 = true, t4) : i3 ? (t4[t4.length - 1] += e4, i3 = false, t4) : t4.concat(e4);
      }, []).map(function(t4) {
        return function(t5, e4, n4, i4) {
          var o3 = t5.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r3 = +o3[1], s3 = o3[2];
          if (!r3) return t5;
          if (0 !== s3.indexOf("%")) return "vh" !== s3 && "vw" !== s3 ? r3 : ("vh" === s3 ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r3;
          var a3 = void 0;
          switch (s3) {
            case "%p":
              a3 = n4;
              break;
            case "%":
            case "%r":
            default:
              a3 = i4;
          }
          return Vt(a3)[e4] / 100 * r3;
        }(t4, n3, o2, r2);
      });
    })).forEach(function(n3, i3) {
      n3.forEach(function(t3, e3) {
        ce(t3) && (s2[i3] += t3 * ("-" === n3[e3 - 1] ? -1 : 1));
      });
    }), s2;
  }
  var Ee = { placement: "bottom", positionFixed: false, eventsEnabled: true, removeOnDestroy: false, onCreate: function() {
  }, onUpdate: function() {
  }, modifiers: { shift: { order: 100, enabled: true, fn: function(t2) {
    var e2 = t2.placement, n2 = e2.split("-")[0], i2 = e2.split("-")[1];
    if (i2) {
      var o2 = t2.offsets, r2 = o2.reference, s2 = o2.popper, a2 = -1 !== ["bottom", "top"].indexOf(n2), l2 = a2 ? "left" : "top", c2 = a2 ? "width" : "height", h3 = { start: Kt({}, l2, r2[l2]), end: Kt({}, l2, r2[l2] + r2[c2] - s2[c2]) };
      t2.offsets.popper = Qt({}, s2, h3[i2]);
    }
    return t2;
  } }, offset: { order: 200, enabled: true, fn: function(t2, e2) {
    var n2 = e2.offset, i2 = t2.placement, o2 = t2.offsets, r2 = o2.popper, s2 = o2.reference, a2 = i2.split("-")[0], l2 = void 0;
    return l2 = ce(+n2) ? [+n2, 0] : ye(n2, r2, s2, a2), "left" === a2 ? (r2.top += l2[0], r2.left -= l2[1]) : "right" === a2 ? (r2.top += l2[0], r2.left += l2[1]) : "top" === a2 ? (r2.left += l2[0], r2.top -= l2[1]) : "bottom" === a2 && (r2.left += l2[0], r2.top += l2[1]), t2.popper = r2, t2;
  }, offset: 0 }, preventOverflow: { order: 300, enabled: true, fn: function(t2, i2) {
    var e2 = i2.boundariesElement || jt(t2.instance.popper);
    t2.instance.reference === e2 && (e2 = jt(e2));
    var n2 = re("transform"), o2 = t2.instance.popper.style, r2 = o2.top, s2 = o2.left, a2 = o2[n2];
    o2.top = "", o2.left = "", o2[n2] = "";
    var l2 = Gt(t2.instance.popper, t2.instance.reference, i2.padding, e2, t2.positionFixed);
    o2.top = r2, o2.left = s2, o2[n2] = a2, i2.boundaries = l2;
    var c2 = i2.priority, h3 = t2.offsets.popper, u2 = { primary: function(t3) {
      var e3 = h3[t3];
      return h3[t3] < l2[t3] && !i2.escapeWithReference && (e3 = Math.max(h3[t3], l2[t3])), Kt({}, t3, e3);
    }, secondary: function(t3) {
      var e3 = "right" === t3 ? "left" : "top", n3 = h3[e3];
      return h3[t3] > l2[t3] && !i2.escapeWithReference && (n3 = Math.min(h3[e3], l2[t3] - ("right" === t3 ? h3.width : h3.height))), Kt({}, e3, n3);
    } };
    return c2.forEach(function(t3) {
      var e3 = -1 !== ["left", "top"].indexOf(t3) ? "primary" : "secondary";
      h3 = Qt({}, h3, u2[e3](t3));
    }), t2.offsets.popper = h3, t2;
  }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: true, fn: function(t2) {
    var e2 = t2.offsets, n2 = e2.popper, i2 = e2.reference, o2 = t2.placement.split("-")[0], r2 = Math.floor, s2 = -1 !== ["top", "bottom"].indexOf(o2), a2 = s2 ? "right" : "bottom", l2 = s2 ? "left" : "top", c2 = s2 ? "width" : "height";
    return n2[a2] < r2(i2[l2]) && (t2.offsets.popper[l2] = r2(i2[l2]) - n2[c2]), n2[l2] > r2(i2[a2]) && (t2.offsets.popper[l2] = r2(i2[a2])), t2;
  } }, arrow: { order: 500, enabled: true, fn: function(t2, e2) {
    var n2;
    if (!fe(t2.instance.modifiers, "arrow", "keepTogether")) return t2;
    var i2 = e2.element;
    if ("string" == typeof i2) {
      if (!(i2 = t2.instance.popper.querySelector(i2))) return t2;
    } else if (!t2.instance.popper.contains(i2)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t2;
    var o2 = t2.placement.split("-")[0], r2 = t2.offsets, s2 = r2.popper, a2 = r2.reference, l2 = -1 !== ["left", "right"].indexOf(o2), c2 = l2 ? "height" : "width", h3 = l2 ? "Top" : "Left", u2 = h3.toLowerCase(), f2 = l2 ? "left" : "top", d2 = l2 ? "bottom" : "right", p2 = Zt(i2)[c2];
    a2[d2] - p2 < s2[u2] && (t2.offsets.popper[u2] -= s2[u2] - (a2[d2] - p2)), a2[u2] + p2 > s2[d2] && (t2.offsets.popper[u2] += a2[u2] + p2 - s2[d2]), t2.offsets.popper = Vt(t2.offsets.popper);
    var m2 = a2[u2] + a2[c2] / 2 - p2 / 2, g2 = Nt(t2.instance.popper), _2 = parseFloat(g2["margin" + h3], 10), v2 = parseFloat(g2["border" + h3 + "Width"], 10), y2 = m2 - t2.offsets.popper[u2] - _2 - v2;
    return y2 = Math.max(Math.min(s2[c2] - p2, y2), 0), t2.arrowElement = i2, t2.offsets.arrow = (Kt(n2 = {}, u2, Math.round(y2)), Kt(n2, f2, ""), n2), t2;
  }, element: "[x-arrow]" }, flip: { order: 600, enabled: true, fn: function(p2, m2) {
    if (oe(p2.instance.modifiers, "inner")) return p2;
    if (p2.flipped && p2.placement === p2.originalPlacement) return p2;
    var g2 = Gt(p2.instance.popper, p2.instance.reference, m2.padding, m2.boundariesElement, p2.positionFixed), _2 = p2.placement.split("-")[0], v2 = te(_2), y2 = p2.placement.split("-")[1] || "", E2 = [];
    switch (m2.behavior) {
      case ge:
        E2 = [_2, v2];
        break;
      case _e:
        E2 = me(_2);
        break;
      case ve:
        E2 = me(_2, true);
        break;
      default:
        E2 = m2.behavior;
    }
    return E2.forEach(function(t2, e2) {
      if (_2 !== t2 || E2.length === e2 + 1) return p2;
      _2 = p2.placement.split("-")[0], v2 = te(_2);
      var n2, i2 = p2.offsets.popper, o2 = p2.offsets.reference, r2 = Math.floor, s2 = "left" === _2 && r2(i2.right) > r2(o2.left) || "right" === _2 && r2(i2.left) < r2(o2.right) || "top" === _2 && r2(i2.bottom) > r2(o2.top) || "bottom" === _2 && r2(i2.top) < r2(o2.bottom), a2 = r2(i2.left) < r2(g2.left), l2 = r2(i2.right) > r2(g2.right), c2 = r2(i2.top) < r2(g2.top), h3 = r2(i2.bottom) > r2(g2.bottom), u2 = "left" === _2 && a2 || "right" === _2 && l2 || "top" === _2 && c2 || "bottom" === _2 && h3, f2 = -1 !== ["top", "bottom"].indexOf(_2), d2 = !!m2.flipVariations && (f2 && "start" === y2 && a2 || f2 && "end" === y2 && l2 || !f2 && "start" === y2 && c2 || !f2 && "end" === y2 && h3);
      (s2 || u2 || d2) && (p2.flipped = true, (s2 || u2) && (_2 = E2[e2 + 1]), d2 && (y2 = "end" === (n2 = y2) ? "start" : "start" === n2 ? "end" : n2), p2.placement = _2 + (y2 ? "-" + y2 : ""), p2.offsets.popper = Qt({}, p2.offsets.popper, ee(p2.instance.popper, p2.offsets.reference, p2.placement)), p2 = ie(p2.instance.modifiers, p2, "flip"));
    }), p2;
  }, behavior: "flip", padding: 5, boundariesElement: "viewport" }, inner: { order: 700, enabled: false, fn: function(t2) {
    var e2 = t2.placement, n2 = e2.split("-")[0], i2 = t2.offsets, o2 = i2.popper, r2 = i2.reference, s2 = -1 !== ["left", "right"].indexOf(n2), a2 = -1 === ["top", "left"].indexOf(n2);
    return o2[s2 ? "left" : "top"] = r2[n2] - (a2 ? o2[s2 ? "width" : "height"] : 0), t2.placement = te(e2), t2.offsets.popper = Vt(o2), t2;
  } }, hide: { order: 800, enabled: true, fn: function(t2) {
    if (!fe(t2.instance.modifiers, "hide", "preventOverflow")) return t2;
    var e2 = t2.offsets.reference, n2 = ne(t2.instance.modifiers, function(t3) {
      return "preventOverflow" === t3.name;
    }).boundaries;
    if (e2.bottom < n2.top || e2.left > n2.right || e2.top > n2.bottom || e2.right < n2.left) {
      if (true === t2.hide) return t2;
      t2.hide = true, t2.attributes["x-out-of-boundaries"] = "";
    } else {
      if (false === t2.hide) return t2;
      t2.hide = false, t2.attributes["x-out-of-boundaries"] = false;
    }
    return t2;
  } }, computeStyle: { order: 850, enabled: true, fn: function(t2, e2) {
    var n2 = e2.x, i2 = e2.y, o2 = t2.offsets.popper, r2 = ne(t2.instance.modifiers, function(t3) {
      return "applyStyle" === t3.name;
    }).gpuAcceleration;
    void 0 !== r2 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
    var s2, a2, l2, c2, h3, u2, f2, d2, p2, m2, g2, _2, v2, y2, E2 = void 0 !== r2 ? r2 : e2.gpuAcceleration, b2 = jt(t2.instance.popper), w2 = Yt(b2), C2 = { position: o2.position }, T2 = (s2 = t2, a2 = window.devicePixelRatio < 2 || !ue, l2 = s2.offsets, c2 = l2.popper, h3 = l2.reference, u2 = Math.round, f2 = Math.floor, d2 = function(t3) {
      return t3;
    }, p2 = u2(h3.width), m2 = u2(c2.width), g2 = -1 !== ["left", "right"].indexOf(s2.placement), _2 = -1 !== s2.placement.indexOf("-"), y2 = a2 ? u2 : d2, { left: (v2 = a2 ? g2 || _2 || p2 % 2 == m2 % 2 ? u2 : f2 : d2)(p2 % 2 == 1 && m2 % 2 == 1 && !_2 && a2 ? c2.left - 1 : c2.left), top: y2(c2.top), bottom: y2(c2.bottom), right: v2(c2.right) }), S2 = "bottom" === n2 ? "top" : "bottom", D2 = "right" === i2 ? "left" : "right", I3 = re("transform"), A2 = void 0, O2 = void 0;
    if (O2 = "bottom" === S2 ? "HTML" === b2.nodeName ? -b2.clientHeight + T2.bottom : -w2.height + T2.bottom : T2.top, A2 = "right" === D2 ? "HTML" === b2.nodeName ? -b2.clientWidth + T2.right : -w2.width + T2.right : T2.left, E2 && I3) C2[I3] = "translate3d(" + A2 + "px, " + O2 + "px, 0)", C2[S2] = 0, C2[D2] = 0, C2.willChange = "transform";
    else {
      var N2 = "bottom" === S2 ? -1 : 1, k2 = "right" === D2 ? -1 : 1;
      C2[S2] = O2 * N2, C2[D2] = A2 * k2, C2.willChange = S2 + ", " + D2;
    }
    var L2 = { "x-placement": t2.placement };
    return t2.attributes = Qt({}, L2, t2.attributes), t2.styles = Qt({}, C2, t2.styles), t2.arrowStyles = Qt({}, t2.offsets.arrow, t2.arrowStyles), t2;
  }, gpuAcceleration: true, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: true, fn: function(t2) {
    var e2, n2;
    return he(t2.instance.popper, t2.styles), e2 = t2.instance.popper, n2 = t2.attributes, Object.keys(n2).forEach(function(t3) {
      false !== n2[t3] ? e2.setAttribute(t3, n2[t3]) : e2.removeAttribute(t3);
    }), t2.arrowElement && Object.keys(t2.arrowStyles).length && he(t2.arrowElement, t2.arrowStyles), t2;
  }, onLoad: function(t2, e2, n2, i2, o2) {
    var r2 = Jt(o2, e2, t2, n2.positionFixed), s2 = $t(n2.placement, r2, e2, t2, n2.modifiers.flip.boundariesElement, n2.modifiers.flip.padding);
    return e2.setAttribute("x-placement", s2), he(e2, { position: n2.positionFixed ? "fixed" : "absolute" }), n2;
  }, gpuAcceleration: void 0 } } }, be = function() {
    function r2(t2, e2) {
      var n2 = this, i2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      !function(t3, e3) {
        if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }(this, r2), this.scheduleUpdate = function() {
        return requestAnimationFrame(n2.update);
      }, this.update = At(this.update.bind(this)), this.options = Qt({}, r2.Defaults, i2), this.state = { isDestroyed: false, isCreated: false, scrollParents: [] }, this.reference = t2 && t2.jquery ? t2[0] : t2, this.popper = e2 && e2.jquery ? e2[0] : e2, this.options.modifiers = {}, Object.keys(Qt({}, r2.Defaults.modifiers, i2.modifiers)).forEach(function(t3) {
        n2.options.modifiers[t3] = Qt({}, r2.Defaults.modifiers[t3] || {}, i2.modifiers ? i2.modifiers[t3] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function(t3) {
        return Qt({ name: t3 }, n2.options.modifiers[t3]);
      }).sort(function(t3, e3) {
        return t3.order - e3.order;
      }), this.modifiers.forEach(function(t3) {
        t3.enabled && Ot(t3.onLoad) && t3.onLoad(n2.reference, n2.popper, n2.options, t3, n2.state);
      }), this.update();
      var o2 = this.options.eventsEnabled;
      o2 && this.enableEventListeners(), this.state.eventsEnabled = o2;
    }
    return qt(r2, [{ key: "update", value: function() {
      return (function() {
        if (!this.state.isDestroyed) {
          var t2 = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: false, offsets: {} };
          t2.offsets.reference = Jt(this.state, this.popper, this.reference, this.options.positionFixed), t2.placement = $t(this.options.placement, t2.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t2.originalPlacement = t2.placement, t2.positionFixed = this.options.positionFixed, t2.offsets.popper = ee(this.popper, t2.offsets.reference, t2.placement), t2.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t2 = ie(this.modifiers, t2), this.state.isCreated ? this.options.onUpdate(t2) : (this.state.isCreated = true, this.options.onCreate(t2));
        }
      }).call(this);
    } }, { key: "destroy", value: function() {
      return (function() {
        return this.state.isDestroyed = true, oe(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[re("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
      }).call(this);
    } }, { key: "enableEventListeners", value: function() {
      return (function() {
        this.state.eventsEnabled || (this.state = ae(this.reference, this.options, this.state, this.scheduleUpdate));
      }).call(this);
    } }, { key: "disableEventListeners", value: function() {
      return le.call(this);
    } }]), r2;
  }();
  be.Utils = ("undefined" != typeof window ? window : global).PopperUtils, be.placements = de, be.Defaults = Ee;
  var we = "dropdown", Ce = "bs.dropdown", Te = "." + Ce, Se = ".data-api", De = p.fn[we], Ie = new RegExp("38|40|27"), Ae = { HIDE: "hide" + Te, HIDDEN: "hidden" + Te, SHOW: "show" + Te, SHOWN: "shown" + Te, CLICK: "click" + Te, CLICK_DATA_API: "click" + Te + Se, KEYDOWN_DATA_API: "keydown" + Te + Se, KEYUP_DATA_API: "keyup" + Te + Se }, Oe = "disabled", Ne = "show", ke = "dropup", Le = "dropright", xe = "dropleft", Pe = "dropdown-menu-right", He = "position-static", je = '[data-toggle="dropdown"]', Re = ".dropdown form", Fe = ".dropdown-menu", Me = ".navbar-nav", We = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ue = "top-start", Be = "top-end", qe = "bottom-start", Ke = "bottom-end", Qe = "right-start", Ve = "left-start", Ye = { offset: 0, flip: true, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, ze = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Xe = function() {
    function c2(t3, e2) {
      this._element = t3, this._popper = null, this._config = this._getConfig(e2), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }
    var t2 = c2.prototype;
    return t2.toggle = function() {
      if (!this._element.disabled && !p(this._element).hasClass(Oe)) {
        var t3 = c2._getParentFromElement(this._element), e2 = p(this._menu).hasClass(Ne);
        if (c2._clearMenus(), !e2) {
          var n2 = { relatedTarget: this._element }, i2 = p.Event(Ae.SHOW, n2);
          if (p(t3).trigger(i2), !i2.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof be) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              var o2 = this._element;
              "parent" === this._config.reference ? o2 = t3 : m.isElement(this._config.reference) && (o2 = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o2 = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(t3).addClass(He), this._popper = new be(o2, this._menu, this._getPopperConfig());
            }
            "ontouchstart" in document.documentElement && 0 === p(t3).closest(Me).length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", true), p(this._menu).toggleClass(Ne), p(t3).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, n2));
          }
        }
      }
    }, t2.show = function() {
      if (!(this._element.disabled || p(this._element).hasClass(Oe) || p(this._menu).hasClass(Ne))) {
        var t3 = { relatedTarget: this._element }, e2 = p.Event(Ae.SHOW, t3), n2 = c2._getParentFromElement(this._element);
        p(n2).trigger(e2), e2.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n2).toggleClass(Ne).trigger(p.Event(Ae.SHOWN, t3)));
      }
    }, t2.hide = function() {
      if (!this._element.disabled && !p(this._element).hasClass(Oe) && p(this._menu).hasClass(Ne)) {
        var t3 = { relatedTarget: this._element }, e2 = p.Event(Ae.HIDE, t3), n2 = c2._getParentFromElement(this._element);
        p(n2).trigger(e2), e2.isDefaultPrevented() || (p(this._menu).toggleClass(Ne), p(n2).toggleClass(Ne).trigger(p.Event(Ae.HIDDEN, t3)));
      }
    }, t2.dispose = function() {
      p.removeData(this._element, Ce), p(this._element).off(Te), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t2.update = function() {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t2._addEventListeners = function() {
      var e2 = this;
      p(this._element).on(Ae.CLICK, function(t3) {
        t3.preventDefault(), t3.stopPropagation(), e2.toggle();
      });
    }, t2._getConfig = function(t3) {
      return t3 = l({}, this.constructor.Default, p(this._element).data(), t3), m.typeCheckConfig(we, t3, this.constructor.DefaultType), t3;
    }, t2._getMenuElement = function() {
      if (!this._menu) {
        var t3 = c2._getParentFromElement(this._element);
        t3 && (this._menu = t3.querySelector(Fe));
      }
      return this._menu;
    }, t2._getPlacement = function() {
      var t3 = p(this._element.parentNode), e2 = qe;
      return t3.hasClass(ke) ? (e2 = Ue, p(this._menu).hasClass(Pe) && (e2 = Be)) : t3.hasClass(Le) ? e2 = Qe : t3.hasClass(xe) ? e2 = Ve : p(this._menu).hasClass(Pe) && (e2 = Ke), e2;
    }, t2._detectNavbar = function() {
      return 0 < p(this._element).closest(".navbar").length;
    }, t2._getOffset = function() {
      var e2 = this, t3 = {};
      return "function" == typeof this._config.offset ? t3.fn = function(t4) {
        return t4.offsets = l({}, t4.offsets, e2._config.offset(t4.offsets, e2._element) || {}), t4;
      } : t3.offset = this._config.offset, t3;
    }, t2._getPopperConfig = function() {
      var t3 = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
      return "static" === this._config.display && (t3.modifiers.applyStyle = { enabled: false }), t3;
    }, c2._jQueryInterface = function(e2) {
      return this.each(function() {
        var t3 = p(this).data(Ce);
        if (t3 || (t3 = new c2(this, "object" == typeof e2 ? e2 : null), p(this).data(Ce, t3)), "string" == typeof e2) {
          if ("undefined" == typeof t3[e2]) throw new TypeError('No method named "' + e2 + '"');
          t3[e2]();
        }
      });
    }, c2._clearMenus = function(t3) {
      if (!t3 || 3 !== t3.which && ("keyup" !== t3.type || 9 === t3.which)) for (var e2 = [].slice.call(document.querySelectorAll(je)), n2 = 0, i2 = e2.length; n2 < i2; n2++) {
        var o2 = c2._getParentFromElement(e2[n2]), r2 = p(e2[n2]).data(Ce), s2 = { relatedTarget: e2[n2] };
        if (t3 && "click" === t3.type && (s2.clickEvent = t3), r2) {
          var a2 = r2._menu;
          if (p(o2).hasClass(Ne) && !(t3 && ("click" === t3.type && /input|textarea/i.test(t3.target.tagName) || "keyup" === t3.type && 9 === t3.which) && p.contains(o2, t3.target))) {
            var l2 = p.Event(Ae.HIDE, s2);
            p(o2).trigger(l2), l2.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), e2[n2].setAttribute("aria-expanded", "false"), p(a2).removeClass(Ne), p(o2).removeClass(Ne).trigger(p.Event(Ae.HIDDEN, s2)));
          }
        }
      }
    }, c2._getParentFromElement = function(t3) {
      var e2, n2 = m.getSelectorFromElement(t3);
      return n2 && (e2 = document.querySelector(n2)), e2 || t3.parentNode;
    }, c2._dataApiKeydownHandler = function(t3) {
      if ((/input|textarea/i.test(t3.target.tagName) ? !(32 === t3.which || 27 !== t3.which && (40 !== t3.which && 38 !== t3.which || p(t3.target).closest(Fe).length)) : Ie.test(t3.which)) && (t3.preventDefault(), t3.stopPropagation(), !this.disabled && !p(this).hasClass(Oe))) {
        var e2 = c2._getParentFromElement(this), n2 = p(e2).hasClass(Ne);
        if (n2 && (!n2 || 27 !== t3.which && 32 !== t3.which)) {
          var i2 = [].slice.call(e2.querySelectorAll(We));
          if (0 !== i2.length) {
            var o2 = i2.indexOf(t3.target);
            38 === t3.which && 0 < o2 && o2--, 40 === t3.which && o2 < i2.length - 1 && o2++, o2 < 0 && (o2 = 0), i2[o2].focus();
          }
        } else {
          if (27 === t3.which) {
            var r2 = e2.querySelector(je);
            p(r2).trigger("focus");
          }
          p(this).trigger("click");
        }
      }
    }, s(c2, null, [{ key: "VERSION", get: function() {
      return "4.3.1";
    } }, { key: "Default", get: function() {
      return Ye;
    } }, { key: "DefaultType", get: function() {
      return ze;
    } }]), c2;
  }();
  p(document).on(Ae.KEYDOWN_DATA_API, je, Xe._dataApiKeydownHandler).on(Ae.KEYDOWN_DATA_API, Fe, Xe._dataApiKeydownHandler).on(Ae.CLICK_DATA_API + " " + Ae.KEYUP_DATA_API, Xe._clearMenus).on(Ae.CLICK_DATA_API, je, function(t2) {
    t2.preventDefault(), t2.stopPropagation(), Xe._jQueryInterface.call(p(this), "toggle");
  }).on(Ae.CLICK_DATA_API, Re, function(t2) {
    t2.stopPropagation();
  }), p.fn[we] = Xe._jQueryInterface, p.fn[we].Constructor = Xe, p.fn[we].noConflict = function() {
    return p.fn[we] = De, Xe._jQueryInterface;
  };
  var Ge = "modal", $e = "bs.modal", Je = "." + $e, Ze = p.fn[Ge], tn = { backdrop: true, keyboard: true, focus: true, show: true }, en = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, nn = { HIDE: "hide" + Je, HIDDEN: "hidden" + Je, SHOW: "show" + Je, SHOWN: "shown" + Je, FOCUSIN: "focusin" + Je, RESIZE: "resize" + Je, CLICK_DISMISS: "click.dismiss" + Je, KEYDOWN_DISMISS: "keydown.dismiss" + Je, MOUSEUP_DISMISS: "mouseup.dismiss" + Je, MOUSEDOWN_DISMISS: "mousedown.dismiss" + Je, CLICK_DATA_API: "click" + Je + ".data-api" }, on = "modal-dialog-scrollable", rn = "modal-scrollbar-measure", sn = "modal-backdrop", an = "modal-open", ln = "fade", cn = "show", hn = ".modal-dialog", un = ".modal-body", fn = '[data-toggle="modal"]', dn = '[data-dismiss="modal"]', pn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", mn = ".sticky-top", gn = function() {
    function o2(t3, e2) {
      this._config = this._getConfig(e2), this._element = t3, this._dialog = t3.querySelector(hn), this._backdrop = null, this._isShown = false, this._isBodyOverflowing = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollbarWidth = 0;
    }
    var t2 = o2.prototype;
    return t2.toggle = function(t3) {
      return this._isShown ? this.hide() : this.show(t3);
    }, t2.show = function(t3) {
      var e2 = this;
      if (!this._isShown && !this._isTransitioning) {
        p(this._element).hasClass(ln) && (this._isTransitioning = true);
        var n2 = p.Event(nn.SHOW, { relatedTarget: t3 });
        p(this._element).trigger(n2), this._isShown || n2.isDefaultPrevented() || (this._isShown = true, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(nn.CLICK_DISMISS, dn, function(t4) {
          return e2.hide(t4);
        }), p(this._dialog).on(nn.MOUSEDOWN_DISMISS, function() {
          p(e2._element).one(nn.MOUSEUP_DISMISS, function(t4) {
            p(t4.target).is(e2._element) && (e2._ignoreBackdropClick = true);
          });
        }), this._showBackdrop(function() {
          return e2._showElement(t3);
        }));
      }
    }, t2.hide = function(t3) {
      var e2 = this;
      if (t3 && t3.preventDefault(), this._isShown && !this._isTransitioning) {
        var n2 = p.Event(nn.HIDE);
        if (p(this._element).trigger(n2), this._isShown && !n2.isDefaultPrevented()) {
          this._isShown = false;
          var i2 = p(this._element).hasClass(ln);
          if (i2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(nn.FOCUSIN), p(this._element).removeClass(cn), p(this._element).off(nn.CLICK_DISMISS), p(this._dialog).off(nn.MOUSEDOWN_DISMISS), i2) {
            var o3 = m.getTransitionDurationFromElement(this._element);
            p(this._element).one(m.TRANSITION_END, function(t4) {
              return e2._hideModal(t4);
            }).emulateTransitionEnd(o3);
          } else this._hideModal();
        }
      }
    }, t2.dispose = function() {
      [window, this._element, this._dialog].forEach(function(t3) {
        return p(t3).off(Je);
      }), p(document).off(nn.FOCUSIN), p.removeData(this._element, $e), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t2.handleUpdate = function() {
      this._adjustDialog();
    }, t2._getConfig = function(t3) {
      return t3 = l({}, tn, t3), m.typeCheckConfig(Ge, t3, en), t3;
    }, t2._showElement = function(t3) {
      var e2 = this, n2 = p(this._element).hasClass(ln);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), p(this._dialog).hasClass(on) ? this._dialog.querySelector(un).scrollTop = 0 : this._element.scrollTop = 0, n2 && m.reflow(this._element), p(this._element).addClass(cn), this._config.focus && this._enforceFocus();
      var i2 = p.Event(nn.SHOWN, { relatedTarget: t3 }), o3 = function() {
        e2._config.focus && e2._element.focus(), e2._isTransitioning = false, p(e2._element).trigger(i2);
      };
      if (n2) {
        var r2 = m.getTransitionDurationFromElement(this._dialog);
        p(this._dialog).one(m.TRANSITION_END, o3).emulateTransitionEnd(r2);
      } else o3();
    }, t2._enforceFocus = function() {
      var e2 = this;
      p(document).off(nn.FOCUSIN).on(nn.FOCUSIN, function(t3) {
        document !== t3.target && e2._element !== t3.target && 0 === p(e2._element).has(t3.target).length && e2._element.focus();
      });
    }, t2._setEscapeEvent = function() {
      var e2 = this;
      this._isShown && this._config.keyboard ? p(this._element).on(nn.KEYDOWN_DISMISS, function(t3) {
        27 === t3.which && (t3.preventDefault(), e2.hide());
      }) : this._isShown || p(this._element).off(nn.KEYDOWN_DISMISS);
    }, t2._setResizeEvent = function() {
      var e2 = this;
      this._isShown ? p(window).on(nn.RESIZE, function(t3) {
        return e2.handleUpdate(t3);
      }) : p(window).off(nn.RESIZE);
    }, t2._hideModal = function() {
      var t3 = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._isTransitioning = false, this._showBackdrop(function() {
        p(document.body).removeClass(an), t3._resetAdjustments(), t3._resetScrollbar(), p(t3._element).trigger(nn.HIDDEN);
      });
    }, t2._removeBackdrop = function() {
      this._backdrop && (p(this._backdrop).remove(), this._backdrop = null);
    }, t2._showBackdrop = function(t3) {
      var e2 = this, n2 = p(this._element).hasClass(ln) ? ln : "";
      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = sn, n2 && this._backdrop.classList.add(n2), p(this._backdrop).appendTo(document.body), p(this._element).on(nn.CLICK_DISMISS, function(t4) {
          e2._ignoreBackdropClick ? e2._ignoreBackdropClick = false : t4.target === t4.currentTarget && ("static" === e2._config.backdrop ? e2._element.focus() : e2.hide());
        }), n2 && m.reflow(this._backdrop), p(this._backdrop).addClass(cn), !t3) return;
        if (!n2) return void t3();
        var i2 = m.getTransitionDurationFromElement(this._backdrop);
        p(this._backdrop).one(m.TRANSITION_END, t3).emulateTransitionEnd(i2);
      } else if (!this._isShown && this._backdrop) {
        p(this._backdrop).removeClass(cn);
        var o3 = function() {
          e2._removeBackdrop(), t3 && t3();
        };
        if (p(this._element).hasClass(ln)) {
          var r2 = m.getTransitionDurationFromElement(this._backdrop);
          p(this._backdrop).one(m.TRANSITION_END, o3).emulateTransitionEnd(r2);
        } else o3();
      } else t3 && t3();
    }, t2._adjustDialog = function() {
      var t3 = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t3 && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t3 && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t2._resetAdjustments = function() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t2._checkScrollbar = function() {
      var t3 = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t3.left + t3.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t2._setScrollbar = function() {
      var o3 = this;
      if (this._isBodyOverflowing) {
        var t3 = [].slice.call(document.querySelectorAll(pn)), e2 = [].slice.call(document.querySelectorAll(mn));
        p(t3).each(function(t4, e3) {
          var n3 = e3.style.paddingRight, i3 = p(e3).css("padding-right");
          p(e3).data("padding-right", n3).css("padding-right", parseFloat(i3) + o3._scrollbarWidth + "px");
        }), p(e2).each(function(t4, e3) {
          var n3 = e3.style.marginRight, i3 = p(e3).css("margin-right");
          p(e3).data("margin-right", n3).css("margin-right", parseFloat(i3) - o3._scrollbarWidth + "px");
        });
        var n2 = document.body.style.paddingRight, i2 = p(document.body).css("padding-right");
        p(document.body).data("padding-right", n2).css("padding-right", parseFloat(i2) + this._scrollbarWidth + "px");
      }
      p(document.body).addClass(an);
    }, t2._resetScrollbar = function() {
      var t3 = [].slice.call(document.querySelectorAll(pn));
      p(t3).each(function(t4, e3) {
        var n3 = p(e3).data("padding-right");
        p(e3).removeData("padding-right"), e3.style.paddingRight = n3 || "";
      });
      var e2 = [].slice.call(document.querySelectorAll("" + mn));
      p(e2).each(function(t4, e3) {
        var n3 = p(e3).data("margin-right");
        "undefined" != typeof n3 && p(e3).css("margin-right", n3).removeData("margin-right");
      });
      var n2 = p(document.body).data("padding-right");
      p(document.body).removeData("padding-right"), document.body.style.paddingRight = n2 || "";
    }, t2._getScrollbarWidth = function() {
      var t3 = document.createElement("div");
      t3.className = rn, document.body.appendChild(t3);
      var e2 = t3.getBoundingClientRect().width - t3.clientWidth;
      return document.body.removeChild(t3), e2;
    }, o2._jQueryInterface = function(n2, i2) {
      return this.each(function() {
        var t3 = p(this).data($e), e2 = l({}, tn, p(this).data(), "object" == typeof n2 && n2 ? n2 : {});
        if (t3 || (t3 = new o2(this, e2), p(this).data($e, t3)), "string" == typeof n2) {
          if ("undefined" == typeof t3[n2]) throw new TypeError('No method named "' + n2 + '"');
          t3[n2](i2);
        } else e2.show && t3.show(i2);
      });
    }, s(o2, null, [{ key: "VERSION", get: function() {
      return "4.3.1";
    } }, { key: "Default", get: function() {
      return tn;
    } }]), o2;
  }();
  p(document).on(nn.CLICK_DATA_API, fn, function(t2) {
    var e2, n2 = this, i2 = m.getSelectorFromElement(this);
    i2 && (e2 = document.querySelector(i2));
    var o2 = p(e2).data($e) ? "toggle" : l({}, p(e2).data(), p(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t2.preventDefault();
    var r2 = p(e2).one(nn.SHOW, function(t3) {
      t3.isDefaultPrevented() || r2.one(nn.HIDDEN, function() {
        p(n2).is(":visible") && n2.focus();
      });
    });
    gn._jQueryInterface.call(p(e2), o2, this);
  }), p.fn[Ge] = gn._jQueryInterface, p.fn[Ge].Constructor = gn, p.fn[Ge].noConflict = function() {
    return p.fn[Ge] = Ze, gn._jQueryInterface;
  };
  var _n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], vn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, yn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi, En = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
  function bn(t2, s2, e2) {
    if (0 === t2.length) return t2;
    if (e2 && "function" == typeof e2) return e2(t2);
    for (var n2 = new window.DOMParser().parseFromString(t2, "text/html"), a2 = Object.keys(s2), l2 = [].slice.call(n2.body.querySelectorAll("*")), i2 = function(t3, e3) {
      var n3 = l2[t3], i3 = n3.nodeName.toLowerCase();
      if (-1 === a2.indexOf(n3.nodeName.toLowerCase())) return n3.parentNode.removeChild(n3), "continue";
      var o3 = [].slice.call(n3.attributes), r3 = [].concat(s2["*"] || [], s2[i3] || []);
      o3.forEach(function(t4) {
        (function(t5, e4) {
          var n4 = t5.nodeName.toLowerCase();
          if (-1 !== e4.indexOf(n4)) return -1 === _n.indexOf(n4) || Boolean(t5.nodeValue.match(yn) || t5.nodeValue.match(En));
          for (var i4 = e4.filter(function(t6) {
            return t6 instanceof RegExp;
          }), o4 = 0, r4 = i4.length; o4 < r4; o4++) if (n4.match(i4[o4])) return true;
          return false;
        })(t4, r3) || n3.removeAttribute(t4.nodeName);
      });
    }, o2 = 0, r2 = l2.length; o2 < r2; o2++) i2(o2);
    return n2.body.innerHTML;
  }
  var wn = "tooltip", Cn = "bs.tooltip", Tn = "." + Cn, Sn = p.fn[wn], Dn = "bs-tooltip", In = new RegExp("(^|\\s)" + Dn + "\\S+", "g"), An = ["sanitize", "whiteList", "sanitizeFn"], On = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object" }, Nn = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }, kn = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: 0, container: false, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: true, sanitizeFn: null, whiteList: vn }, Ln = "show", xn = "out", Pn = { HIDE: "hide" + Tn, HIDDEN: "hidden" + Tn, SHOW: "show" + Tn, SHOWN: "shown" + Tn, INSERTED: "inserted" + Tn, CLICK: "click" + Tn, FOCUSIN: "focusin" + Tn, FOCUSOUT: "focusout" + Tn, MOUSEENTER: "mouseenter" + Tn, MOUSELEAVE: "mouseleave" + Tn }, Hn = "fade", jn = "show", Rn = ".tooltip-inner", Fn = ".arrow", Mn = "hover", Wn = "focus", Un = "click", Bn = "manual", qn = function() {
    function i2(t3, e2) {
      if ("undefined" == typeof be) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
      this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t3, this.config = this._getConfig(e2), this.tip = null, this._setListeners();
    }
    var t2 = i2.prototype;
    return t2.enable = function() {
      this._isEnabled = true;
    }, t2.disable = function() {
      this._isEnabled = false;
    }, t2.toggleEnabled = function() {
      this._isEnabled = !this._isEnabled;
    }, t2.toggle = function(t3) {
      if (this._isEnabled) if (t3) {
        var e2 = this.constructor.DATA_KEY, n2 = p(t3.currentTarget).data(e2);
        n2 || (n2 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), p(t3.currentTarget).data(e2, n2)), n2._activeTrigger.click = !n2._activeTrigger.click, n2._isWithActiveTrigger() ? n2._enter(null, n2) : n2._leave(null, n2);
      } else {
        if (p(this.getTipElement()).hasClass(jn)) return void this._leave(null, this);
        this._enter(null, this);
      }
    }, t2.dispose = function() {
      clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal"), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t2.show = function() {
      var e2 = this;
      if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t3 = p.Event(this.constructor.Event.SHOW);
      if (this.isWithContent() && this._isEnabled) {
        p(this.element).trigger(t3);
        var n2 = m.findShadowRoot(this.element), i3 = p.contains(null !== n2 ? n2 : this.element.ownerDocument.documentElement, this.element);
        if (t3.isDefaultPrevented() || !i3) return;
        var o2 = this.getTipElement(), r2 = m.getUID(this.constructor.NAME);
        o2.setAttribute("id", r2), this.element.setAttribute("aria-describedby", r2), this.setContent(), this.config.animation && p(o2).addClass(Hn);
        var s2 = "function" == typeof this.config.placement ? this.config.placement.call(this, o2, this.element) : this.config.placement, a2 = this._getAttachment(s2);
        this.addAttachmentClass(a2);
        var l2 = this._getContainer();
        p(o2).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o2).appendTo(l2), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new be(this.element, o2, { placement: a2, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Fn }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t4) {
          t4.originalPlacement !== t4.placement && e2._handlePopperPlacementChange(t4);
        }, onUpdate: function(t4) {
          return e2._handlePopperPlacementChange(t4);
        } }), p(o2).addClass(jn), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
        var c2 = function() {
          e2.config.animation && e2._fixTransition();
          var t4 = e2._hoverState;
          e2._hoverState = null, p(e2.element).trigger(e2.constructor.Event.SHOWN), t4 === xn && e2._leave(null, e2);
        };
        if (p(this.tip).hasClass(Hn)) {
          var h3 = m.getTransitionDurationFromElement(this.tip);
          p(this.tip).one(m.TRANSITION_END, c2).emulateTransitionEnd(h3);
        } else c2();
      }
    }, t2.hide = function(t3) {
      var e2 = this, n2 = this.getTipElement(), i3 = p.Event(this.constructor.Event.HIDE), o2 = function() {
        e2._hoverState !== Ln && n2.parentNode && n2.parentNode.removeChild(n2), e2._cleanTipClass(), e2.element.removeAttribute("aria-describedby"), p(e2.element).trigger(e2.constructor.Event.HIDDEN), null !== e2._popper && e2._popper.destroy(), t3 && t3();
      };
      if (p(this.element).trigger(i3), !i3.isDefaultPrevented()) {
        if (p(n2).removeClass(jn), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger[Un] = false, this._activeTrigger[Wn] = false, this._activeTrigger[Mn] = false, p(this.tip).hasClass(Hn)) {
          var r2 = m.getTransitionDurationFromElement(n2);
          p(n2).one(m.TRANSITION_END, o2).emulateTransitionEnd(r2);
        } else o2();
        this._hoverState = "";
      }
    }, t2.update = function() {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t2.isWithContent = function() {
      return Boolean(this.getTitle());
    }, t2.addAttachmentClass = function(t3) {
      p(this.getTipElement()).addClass(Dn + "-" + t3);
    }, t2.getTipElement = function() {
      return this.tip = this.tip || p(this.config.template)[0], this.tip;
    }, t2.setContent = function() {
      var t3 = this.getTipElement();
      this.setElementContent(p(t3.querySelectorAll(Rn)), this.getTitle()), p(t3).removeClass(Hn + " " + jn);
    }, t2.setElementContent = function(t3, e2) {
      "object" != typeof e2 || !e2.nodeType && !e2.jquery ? this.config.html ? (this.config.sanitize && (e2 = bn(e2, this.config.whiteList, this.config.sanitizeFn)), t3.html(e2)) : t3.text(e2) : this.config.html ? p(e2).parent().is(t3) || t3.empty().append(e2) : t3.text(p(e2).text());
    }, t2.getTitle = function() {
      var t3 = this.element.getAttribute("data-original-title");
      return t3 || (t3 = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t3;
    }, t2._getOffset = function() {
      var e2 = this, t3 = {};
      return "function" == typeof this.config.offset ? t3.fn = function(t4) {
        return t4.offsets = l({}, t4.offsets, e2.config.offset(t4.offsets, e2.element) || {}), t4;
      } : t3.offset = this.config.offset, t3;
    }, t2._getContainer = function() {
      return false === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container);
    }, t2._getAttachment = function(t3) {
      return Nn[t3.toUpperCase()];
    }, t2._setListeners = function() {
      var i3 = this;
      this.config.trigger.split(" ").forEach(function(t3) {
        if ("click" === t3) p(i3.element).on(i3.constructor.Event.CLICK, i3.config.selector, function(t4) {
          return i3.toggle(t4);
        });
        else if (t3 !== Bn) {
          var e2 = t3 === Mn ? i3.constructor.Event.MOUSEENTER : i3.constructor.Event.FOCUSIN, n2 = t3 === Mn ? i3.constructor.Event.MOUSELEAVE : i3.constructor.Event.FOCUSOUT;
          p(i3.element).on(e2, i3.config.selector, function(t4) {
            return i3._enter(t4);
          }).on(n2, i3.config.selector, function(t4) {
            return i3._leave(t4);
          });
        }
      }), p(this.element).closest(".modal").on("hide.bs.modal", function() {
        i3.element && i3.hide();
      }), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, t2._fixTitle = function() {
      var t3 = typeof this.element.getAttribute("data-original-title");
      (this.element.getAttribute("title") || "string" !== t3) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t2._enter = function(t3, e2) {
      var n2 = this.constructor.DATA_KEY;
      (e2 = e2 || p(t3.currentTarget).data(n2)) || (e2 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), p(t3.currentTarget).data(n2, e2)), t3 && (e2._activeTrigger["focusin" === t3.type ? Wn : Mn] = true), p(e2.getTipElement()).hasClass(jn) || e2._hoverState === Ln ? e2._hoverState = Ln : (clearTimeout(e2._timeout), e2._hoverState = Ln, e2.config.delay && e2.config.delay.show ? e2._timeout = setTimeout(function() {
        e2._hoverState === Ln && e2.show();
      }, e2.config.delay.show) : e2.show());
    }, t2._leave = function(t3, e2) {
      var n2 = this.constructor.DATA_KEY;
      (e2 = e2 || p(t3.currentTarget).data(n2)) || (e2 = new this.constructor(t3.currentTarget, this._getDelegateConfig()), p(t3.currentTarget).data(n2, e2)), t3 && (e2._activeTrigger["focusout" === t3.type ? Wn : Mn] = false), e2._isWithActiveTrigger() || (clearTimeout(e2._timeout), e2._hoverState = xn, e2.config.delay && e2.config.delay.hide ? e2._timeout = setTimeout(function() {
        e2._hoverState === xn && e2.hide();
      }, e2.config.delay.hide) : e2.hide());
    }, t2._isWithActiveTrigger = function() {
      for (var t3 in this._activeTrigger) if (this._activeTrigger[t3]) return true;
      return false;
    }, t2._getConfig = function(t3) {
      var e2 = p(this.element).data();
      return Object.keys(e2).forEach(function(t4) {
        -1 !== An.indexOf(t4) && delete e2[t4];
      }), "number" == typeof (t3 = l({}, this.constructor.Default, e2, "object" == typeof t3 && t3 ? t3 : {})).delay && (t3.delay = { show: t3.delay, hide: t3.delay }), "number" == typeof t3.title && (t3.title = t3.title.toString()), "number" == typeof t3.content && (t3.content = t3.content.toString()), m.typeCheckConfig(wn, t3, this.constructor.DefaultType), t3.sanitize && (t3.template = bn(t3.template, t3.whiteList, t3.sanitizeFn)), t3;
    }, t2._getDelegateConfig = function() {
      var t3 = {};
      if (this.config) for (var e2 in this.config) this.constructor.Default[e2] !== this.config[e2] && (t3[e2] = this.config[e2]);
      return t3;
    }, t2._cleanTipClass = function() {
      var t3 = p(this.getTipElement()), e2 = t3.attr("class").match(In);
      null !== e2 && e2.length && t3.removeClass(e2.join(""));
    }, t2._handlePopperPlacementChange = function(t3) {
      var e2 = t3.instance;
      this.tip = e2.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t3.placement));
    }, t2._fixTransition = function() {
      var t3 = this.getTipElement(), e2 = this.config.animation;
      null === t3.getAttribute("x-placement") && (p(t3).removeClass(Hn), this.config.animation = false, this.hide(), this.show(), this.config.animation = e2);
    }, i2._jQueryInterface = function(n2) {
      return this.each(function() {
        var t3 = p(this).data(Cn), e2 = "object" == typeof n2 && n2;
        if ((t3 || !/dispose|hide/.test(n2)) && (t3 || (t3 = new i2(this, e2), p(this).data(Cn, t3)), "string" == typeof n2)) {
          if ("undefined" == typeof t3[n2]) throw new TypeError('No method named "' + n2 + '"');
          t3[n2]();
        }
      });
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.3.1";
    } }, { key: "Default", get: function() {
      return kn;
    } }, { key: "NAME", get: function() {
      return wn;
    } }, { key: "DATA_KEY", get: function() {
      return Cn;
    } }, { key: "Event", get: function() {
      return Pn;
    } }, { key: "EVENT_KEY", get: function() {
      return Tn;
    } }, { key: "DefaultType", get: function() {
      return On;
    } }]), i2;
  }();
  p.fn[wn] = qn._jQueryInterface, p.fn[wn].Constructor = qn, p.fn[wn].noConflict = function() {
    return p.fn[wn] = Sn, qn._jQueryInterface;
  };
  var Kn = "popover", Qn = "bs.popover", Vn = "." + Qn, Yn = p.fn[Kn], zn = "bs-popover", Xn = new RegExp("(^|\\s)" + zn + "\\S+", "g"), Gn = l({}, qn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), $n = l({}, qn.DefaultType, { content: "(string|element|function)" }), Jn = "fade", Zn = "show", ti = ".popover-header", ei = ".popover-body", ni = { HIDE: "hide" + Vn, HIDDEN: "hidden" + Vn, SHOW: "show" + Vn, SHOWN: "shown" + Vn, INSERTED: "inserted" + Vn, CLICK: "click" + Vn, FOCUSIN: "focusin" + Vn, FOCUSOUT: "focusout" + Vn, MOUSEENTER: "mouseenter" + Vn, MOUSELEAVE: "mouseleave" + Vn }, ii = function(t2) {
    var e2, n2;
    function i2() {
      return t2.apply(this, arguments) || this;
    }
    n2 = t2, (e2 = i2).prototype = Object.create(n2.prototype), (e2.prototype.constructor = e2).__proto__ = n2;
    var o2 = i2.prototype;
    return o2.isWithContent = function() {
      return this.getTitle() || this._getContent();
    }, o2.addAttachmentClass = function(t3) {
      p(this.getTipElement()).addClass(zn + "-" + t3);
    }, o2.getTipElement = function() {
      return this.tip = this.tip || p(this.config.template)[0], this.tip;
    }, o2.setContent = function() {
      var t3 = p(this.getTipElement());
      this.setElementContent(t3.find(ti), this.getTitle());
      var e3 = this._getContent();
      "function" == typeof e3 && (e3 = e3.call(this.element)), this.setElementContent(t3.find(ei), e3), t3.removeClass(Jn + " " + Zn);
    }, o2._getContent = function() {
      return this.element.getAttribute("data-content") || this.config.content;
    }, o2._cleanTipClass = function() {
      var t3 = p(this.getTipElement()), e3 = t3.attr("class").match(Xn);
      null !== e3 && 0 < e3.length && t3.removeClass(e3.join(""));
    }, i2._jQueryInterface = function(n3) {
      return this.each(function() {
        var t3 = p(this).data(Qn), e3 = "object" == typeof n3 ? n3 : null;
        if ((t3 || !/dispose|hide/.test(n3)) && (t3 || (t3 = new i2(this, e3), p(this).data(Qn, t3)), "string" == typeof n3)) {
          if ("undefined" == typeof t3[n3]) throw new TypeError('No method named "' + n3 + '"');
          t3[n3]();
        }
      });
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.3.1";
    } }, { key: "Default", get: function() {
      return Gn;
    } }, { key: "NAME", get: function() {
      return Kn;
    } }, { key: "DATA_KEY", get: function() {
      return Qn;
    } }, { key: "Event", get: function() {
      return ni;
    } }, { key: "EVENT_KEY", get: function() {
      return Vn;
    } }, { key: "DefaultType", get: function() {
      return $n;
    } }]), i2;
  }(qn);
  p.fn[Kn] = ii._jQueryInterface, p.fn[Kn].Constructor = ii, p.fn[Kn].noConflict = function() {
    return p.fn[Kn] = Yn, ii._jQueryInterface;
  };
  var oi = "scrollspy", ri = "bs.scrollspy", si = "." + ri, ai = p.fn[oi], li = { offset: 10, method: "auto", target: "" }, ci = { offset: "number", method: "string", target: "(string|element)" }, hi = { ACTIVATE: "activate" + si, SCROLL: "scroll" + si, LOAD_DATA_API: "load" + si + ".data-api" }, ui = "dropdown-item", fi = "active", di = '[data-spy="scroll"]', pi = ".nav, .list-group", mi = ".nav-link", gi = ".nav-item", _i = ".list-group-item", vi = ".dropdown", yi = ".dropdown-item", Ei = ".dropdown-toggle", bi = "offset", wi = "position", Ci = function() {
    function n2(t3, e2) {
      var n3 = this;
      this._element = t3, this._scrollElement = "BODY" === t3.tagName ? window : t3, this._config = this._getConfig(e2), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(hi.SCROLL, function(t4) {
        return n3._process(t4);
      }), this.refresh(), this._process();
    }
    var t2 = n2.prototype;
    return t2.refresh = function() {
      var e2 = this, t3 = this._scrollElement === this._scrollElement.window ? bi : wi, o2 = "auto" === this._config.method ? t3 : this._config.method, r2 = o2 === wi ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(t4) {
        var e3, n3 = m.getSelectorFromElement(t4);
        if (n3 && (e3 = document.querySelector(n3)), e3) {
          var i2 = e3.getBoundingClientRect();
          if (i2.width || i2.height) return [p(e3)[o2]().top + r2, n3];
        }
        return null;
      }).filter(function(t4) {
        return t4;
      }).sort(function(t4, e3) {
        return t4[0] - e3[0];
      }).forEach(function(t4) {
        e2._offsets.push(t4[0]), e2._targets.push(t4[1]);
      });
    }, t2.dispose = function() {
      p.removeData(this._element, ri), p(this._scrollElement).off(si), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t2._getConfig = function(t3) {
      if ("string" != typeof (t3 = l({}, li, "object" == typeof t3 && t3 ? t3 : {})).target) {
        var e2 = p(t3.target).attr("id");
        e2 || (e2 = m.getUID(oi), p(t3.target).attr("id", e2)), t3.target = "#" + e2;
      }
      return m.typeCheckConfig(oi, t3, ci), t3;
    }, t2._getScrollTop = function() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t2._getScrollHeight = function() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t2._getOffsetHeight = function() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t2._process = function() {
      var t3 = this._getScrollTop() + this._config.offset, e2 = this._getScrollHeight(), n3 = this._config.offset + e2 - this._getOffsetHeight();
      if (this._scrollHeight !== e2 && this.refresh(), n3 <= t3) {
        var i2 = this._targets[this._targets.length - 1];
        this._activeTarget !== i2 && this._activate(i2);
      } else {
        if (this._activeTarget && t3 < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
        for (var o2 = this._offsets.length; o2--; ) {
          this._activeTarget !== this._targets[o2] && t3 >= this._offsets[o2] && ("undefined" == typeof this._offsets[o2 + 1] || t3 < this._offsets[o2 + 1]) && this._activate(this._targets[o2]);
        }
      }
    }, t2._activate = function(e2) {
      this._activeTarget = e2, this._clear();
      var t3 = this._selector.split(",").map(function(t4) {
        return t4 + '[data-target="' + e2 + '"],' + t4 + '[href="' + e2 + '"]';
      }), n3 = p([].slice.call(document.querySelectorAll(t3.join(","))));
      n3.hasClass(ui) ? (n3.closest(vi).find(Ei).addClass(fi), n3.addClass(fi)) : (n3.addClass(fi), n3.parents(pi).prev(mi + ", " + _i).addClass(fi), n3.parents(pi).prev(gi).children(mi).addClass(fi)), p(this._scrollElement).trigger(hi.ACTIVATE, { relatedTarget: e2 });
    }, t2._clear = function() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function(t3) {
        return t3.classList.contains(fi);
      }).forEach(function(t3) {
        return t3.classList.remove(fi);
      });
    }, n2._jQueryInterface = function(e2) {
      return this.each(function() {
        var t3 = p(this).data(ri);
        if (t3 || (t3 = new n2(this, "object" == typeof e2 && e2), p(this).data(ri, t3)), "string" == typeof e2) {
          if ("undefined" == typeof t3[e2]) throw new TypeError('No method named "' + e2 + '"');
          t3[e2]();
        }
      });
    }, s(n2, null, [{ key: "VERSION", get: function() {
      return "4.3.1";
    } }, { key: "Default", get: function() {
      return li;
    } }]), n2;
  }();
  p(window).on(hi.LOAD_DATA_API, function() {
    for (var t2 = [].slice.call(document.querySelectorAll(di)), e2 = t2.length; e2--; ) {
      var n2 = p(t2[e2]);
      Ci._jQueryInterface.call(n2, n2.data());
    }
  }), p.fn[oi] = Ci._jQueryInterface, p.fn[oi].Constructor = Ci, p.fn[oi].noConflict = function() {
    return p.fn[oi] = ai, Ci._jQueryInterface;
  };
  var Ti = "bs.tab", Si = "." + Ti, Di = p.fn.tab, Ii = { HIDE: "hide" + Si, HIDDEN: "hidden" + Si, SHOW: "show" + Si, SHOWN: "shown" + Si, CLICK_DATA_API: "click" + Si + ".data-api" }, Ai = "dropdown-menu", Oi = "active", Ni = "disabled", ki = "fade", Li = "show", xi = ".dropdown", Pi = ".nav, .list-group", Hi = ".active", ji = "> li > .active", Ri = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Fi = ".dropdown-toggle", Mi = "> .dropdown-menu .active", Wi = function() {
    function i2(t3) {
      this._element = t3;
    }
    var t2 = i2.prototype;
    return t2.show = function() {
      var n2 = this;
      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(Oi) || p(this._element).hasClass(Ni))) {
        var t3, i3, e2 = p(this._element).closest(Pi)[0], o2 = m.getSelectorFromElement(this._element);
        if (e2) {
          var r2 = "UL" === e2.nodeName || "OL" === e2.nodeName ? ji : Hi;
          i3 = (i3 = p.makeArray(p(e2).find(r2)))[i3.length - 1];
        }
        var s2 = p.Event(Ii.HIDE, { relatedTarget: this._element }), a2 = p.Event(Ii.SHOW, { relatedTarget: i3 });
        if (i3 && p(i3).trigger(s2), p(this._element).trigger(a2), !a2.isDefaultPrevented() && !s2.isDefaultPrevented()) {
          o2 && (t3 = document.querySelector(o2)), this._activate(this._element, e2);
          var l2 = function() {
            var t4 = p.Event(Ii.HIDDEN, { relatedTarget: n2._element }), e3 = p.Event(Ii.SHOWN, { relatedTarget: i3 });
            p(i3).trigger(t4), p(n2._element).trigger(e3);
          };
          t3 ? this._activate(t3, t3.parentNode, l2) : l2();
        }
      }
    }, t2.dispose = function() {
      p.removeData(this._element, Ti), this._element = null;
    }, t2._activate = function(t3, e2, n2) {
      var i3 = this, o2 = (!e2 || "UL" !== e2.nodeName && "OL" !== e2.nodeName ? p(e2).children(Hi) : p(e2).find(ji))[0], r2 = n2 && o2 && p(o2).hasClass(ki), s2 = function() {
        return i3._transitionComplete(t3, o2, n2);
      };
      if (o2 && r2) {
        var a2 = m.getTransitionDurationFromElement(o2);
        p(o2).removeClass(Li).one(m.TRANSITION_END, s2).emulateTransitionEnd(a2);
      } else s2();
    }, t2._transitionComplete = function(t3, e2, n2) {
      if (e2) {
        p(e2).removeClass(Oi);
        var i3 = p(e2.parentNode).find(Mi)[0];
        i3 && p(i3).removeClass(Oi), "tab" === e2.getAttribute("role") && e2.setAttribute("aria-selected", false);
      }
      if (p(t3).addClass(Oi), "tab" === t3.getAttribute("role") && t3.setAttribute("aria-selected", true), m.reflow(t3), t3.classList.contains(ki) && t3.classList.add(Li), t3.parentNode && p(t3.parentNode).hasClass(Ai)) {
        var o2 = p(t3).closest(xi)[0];
        if (o2) {
          var r2 = [].slice.call(o2.querySelectorAll(Fi));
          p(r2).addClass(Oi);
        }
        t3.setAttribute("aria-expanded", true);
      }
      n2 && n2();
    }, i2._jQueryInterface = function(n2) {
      return this.each(function() {
        var t3 = p(this), e2 = t3.data(Ti);
        if (e2 || (e2 = new i2(this), t3.data(Ti, e2)), "string" == typeof n2) {
          if ("undefined" == typeof e2[n2]) throw new TypeError('No method named "' + n2 + '"');
          e2[n2]();
        }
      });
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.3.1";
    } }]), i2;
  }();
  p(document).on(Ii.CLICK_DATA_API, Ri, function(t2) {
    t2.preventDefault(), Wi._jQueryInterface.call(p(this), "show");
  }), p.fn.tab = Wi._jQueryInterface, p.fn.tab.Constructor = Wi, p.fn.tab.noConflict = function() {
    return p.fn.tab = Di, Wi._jQueryInterface;
  };
  var Ui = "toast", Bi = "bs.toast", qi = "." + Bi, Ki = p.fn[Ui], Qi = { CLICK_DISMISS: "click.dismiss" + qi, HIDE: "hide" + qi, HIDDEN: "hidden" + qi, SHOW: "show" + qi, SHOWN: "shown" + qi }, Vi = "fade", Yi = "hide", zi = "show", Xi = "showing", Gi = { animation: "boolean", autohide: "boolean", delay: "number" }, $i = { animation: true, autohide: true, delay: 500 }, Ji = '[data-dismiss="toast"]', Zi = function() {
    function i2(t3, e2) {
      this._element = t3, this._config = this._getConfig(e2), this._timeout = null, this._setListeners();
    }
    var t2 = i2.prototype;
    return t2.show = function() {
      var t3 = this;
      p(this._element).trigger(Qi.SHOW), this._config.animation && this._element.classList.add(Vi);
      var e2 = function() {
        t3._element.classList.remove(Xi), t3._element.classList.add(zi), p(t3._element).trigger(Qi.SHOWN), t3._config.autohide && t3.hide();
      };
      if (this._element.classList.remove(Yi), this._element.classList.add(Xi), this._config.animation) {
        var n2 = m.getTransitionDurationFromElement(this._element);
        p(this._element).one(m.TRANSITION_END, e2).emulateTransitionEnd(n2);
      } else e2();
    }, t2.hide = function(t3) {
      var e2 = this;
      this._element.classList.contains(zi) && (p(this._element).trigger(Qi.HIDE), t3 ? this._close() : this._timeout = setTimeout(function() {
        e2._close();
      }, this._config.delay));
    }, t2.dispose = function() {
      clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(zi) && this._element.classList.remove(zi), p(this._element).off(Qi.CLICK_DISMISS), p.removeData(this._element, Bi), this._element = null, this._config = null;
    }, t2._getConfig = function(t3) {
      return t3 = l({}, $i, p(this._element).data(), "object" == typeof t3 && t3 ? t3 : {}), m.typeCheckConfig(Ui, t3, this.constructor.DefaultType), t3;
    }, t2._setListeners = function() {
      var t3 = this;
      p(this._element).on(Qi.CLICK_DISMISS, Ji, function() {
        return t3.hide(true);
      });
    }, t2._close = function() {
      var t3 = this, e2 = function() {
        t3._element.classList.add(Yi), p(t3._element).trigger(Qi.HIDDEN);
      };
      if (this._element.classList.remove(zi), this._config.animation) {
        var n2 = m.getTransitionDurationFromElement(this._element);
        p(this._element).one(m.TRANSITION_END, e2).emulateTransitionEnd(n2);
      } else e2();
    }, i2._jQueryInterface = function(n2) {
      return this.each(function() {
        var t3 = p(this), e2 = t3.data(Bi);
        if (e2 || (e2 = new i2(this, "object" == typeof n2 && n2), t3.data(Bi, e2)), "string" == typeof n2) {
          if ("undefined" == typeof e2[n2]) throw new TypeError('No method named "' + n2 + '"');
          e2[n2](this);
        }
      });
    }, s(i2, null, [{ key: "VERSION", get: function() {
      return "4.3.1";
    } }, { key: "DefaultType", get: function() {
      return Gi;
    } }, { key: "Default", get: function() {
      return $i;
    } }]), i2;
  }();
  p.fn[Ui] = Zi._jQueryInterface, p.fn[Ui].Constructor = Zi, p.fn[Ui].noConflict = function() {
    return p.fn[Ui] = Ki, Zi._jQueryInterface;
  }, function() {
    if ("undefined" == typeof p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var t2 = p.fn.jquery.split(" ")[0].split(".");
    if (t2[0] < 2 && t2[1] < 9 || 1 === t2[0] && 9 === t2[1] && t2[2] < 1 || 4 <= t2[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(), t.Util = m, t.Alert = g, t.Button = k, t.Carousel = at, t.Collapse = Ct, t.Dropdown = Xe, t.Modal = gn, t.Popover = ii, t.Scrollspy = Ci, t.Tab = Wi, t.Toast = Zi, t.Tooltip = qn, Object.defineProperty(t, "__esModule", { value: true });
});
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(factory) {
  var registeredInModuleLoader = false;
  if (typeof define === "function" && define.amd) {
    define(factory);
    registeredInModuleLoader = true;
  }
  if (typeof exports === "object") {
    module.exports = factory();
    registeredInModuleLoader = true;
  }
  if (!registeredInModuleLoader) {
    var OldCookies = window.Cookies;
    var api = window.Cookies = factory();
    api.noConflict = function() {
      window.Cookies = OldCookies;
      return api;
    };
  }
})(function() {
  function extend() {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[i];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }
  function init(converter) {
    function api(key, value, attributes) {
      var result;
      if (typeof document === "undefined") {
        return;
      }
      if (arguments.length > 1) {
        attributes = extend({
          path: "/"
        }, api.defaults, attributes);
        if (typeof attributes.expires === "number") {
          var expires = /* @__PURE__ */ new Date();
          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e5);
          attributes.expires = expires;
        }
        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {
        }
        if (!converter.write) {
          value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }
        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);
        var stringifiedAttributes = "";
        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue;
          }
          stringifiedAttributes += "; " + attributeName;
          if (attributes[attributeName] === true) {
            continue;
          }
          stringifiedAttributes += "=" + attributes[attributeName];
        }
        return document.cookie = key + "=" + value + stringifiedAttributes;
      }
      if (!key) {
        result = {};
      }
      var cookies = document.cookie ? document.cookie.split("; ") : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;
      for (; i < cookies.length; i++) {
        var parts = cookies[i].split("=");
        var cookie = parts.slice(1).join("=");
        if (!this.json && cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }
        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
          cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {
            }
          }
          if (key === name) {
            result = cookie;
            break;
          }
          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {
        }
      }
      return result;
    }
    api.set = api;
    api.get = function(key) {
      return api.call(api, key);
    };
    api.getJSON = function() {
      return api.apply({
        json: true
      }, [].slice.call(arguments));
    };
    api.defaults = {};
    api.remove = function(key, attributes) {
      api(key, "", extend(attributes, {
        expires: -1
      }));
    };
    api.withConverter = init;
    return api;
  }
  return init(function() {
  });
});
/*!

=========================================================
* Argon Dashboard - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
(function() {
  function pinSidenav() {
    $(".sidenav-toggler").addClass("active");
    $(".sidenav-toggler").data("action", "sidenav-unpin");
    $("body").removeClass("g-sidenav-hidden").addClass("g-sidenav-show g-sidenav-pinned");
    $("body").append('<div class="backdrop d-xl-none" data-action="sidenav-unpin" data-target=' + $("#sidenav-main").data("target") + " />");
    Cookies.set("sidenav-state", "pinned");
  }
  function unpinSidenav() {
    $(".sidenav-toggler").removeClass("active");
    $(".sidenav-toggler").data("action", "sidenav-pin");
    $("body").removeClass("g-sidenav-pinned").addClass("g-sidenav-hidden");
    $("body").find(".backdrop").remove();
    Cookies.set("sidenav-state", "unpinned");
  }
  var $sidenavState = Cookies.get("sidenav-state") ? Cookies.get("sidenav-state") : "pinned";
  if ($(window).width() > 1200) {
    if ($sidenavState == "pinned") {
      pinSidenav();
    }
    if (Cookies.get("sidenav-state") == "unpinned") {
      unpinSidenav();
    }
    $(window).resize(function() {
      if ($("body").hasClass("g-sidenav-show") && !$("body").hasClass("g-sidenav-pinned")) {
        $("body").removeClass("g-sidenav-show").addClass("g-sidenav-hidden");
      }
    });
  }
  if ($(window).width() < 1200) {
    $("body").removeClass("g-sidenav-hide").addClass("g-sidenav-hidden");
    $("body").removeClass("g-sidenav-show");
    $(window).resize(function() {
      if ($("body").hasClass("g-sidenav-show") && !$("body").hasClass("g-sidenav-pinned")) {
        $("body").removeClass("g-sidenav-show").addClass("g-sidenav-hidden");
      }
    });
  }
  $("body").on("click", "[data-action]", function(e) {
    e.preventDefault();
    var $this = $(this);
    var action = $this.data("action");
    $this.data("target");
    switch (action) {
      case "sidenav-pin":
        pinSidenav();
        break;
      case "sidenav-unpin":
        unpinSidenav();
        break;
      case "search-show":
        $this.data("target");
        $("body").removeClass("g-navbar-search-show").addClass("g-navbar-search-showing");
        setTimeout(function() {
          $("body").removeClass("g-navbar-search-showing").addClass("g-navbar-search-show");
        }, 150);
        setTimeout(function() {
          $("body").addClass("g-navbar-search-shown");
        }, 300);
        break;
      case "search-close":
        $this.data("target");
        $("body").removeClass("g-navbar-search-shown");
        setTimeout(function() {
          $("body").removeClass("g-navbar-search-show").addClass("g-navbar-search-hiding");
        }, 150);
        setTimeout(function() {
          $("body").removeClass("g-navbar-search-hiding").addClass("g-navbar-search-hidden");
        }, 300);
        setTimeout(function() {
          $("body").removeClass("g-navbar-search-hidden");
        }, 500);
        break;
    }
  });
  $(".sidenav").on("mouseenter", function() {
    if (!$("body").hasClass("g-sidenav-pinned")) {
      $("body").removeClass("g-sidenav-hide").removeClass("g-sidenav-hidden").addClass("g-sidenav-show");
    }
  });
  $(".sidenav").on("mouseleave", function() {
    if (!$("body").hasClass("g-sidenav-pinned")) {
      $("body").removeClass("g-sidenav-show").addClass("g-sidenav-hide");
      setTimeout(function() {
        $("body").removeClass("g-sidenav-hide").addClass("g-sidenav-hidden");
      }, 300);
    }
  });
  $(window).on("load resize", function() {
    if ($("body").height() < 800) {
      $("body").css("min-height", "100vh");
      $("#footer-main").addClass("footer-auto-bottom");
    }
  });
})();
var Charts = function() {
  var $toggle = $('[data-toggle="chart"]');
  var mode = "light";
  var fonts = {
    base: "Open Sans"
  };
  var colors = {
    gray: {
      100: "#f6f9fc",
      200: "#e9ecef",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#8898aa",
      700: "#525f7f",
      800: "#32325d",
      900: "#212529"
    },
    theme: {
      "default": "#172b4d",
      "primary": "#04a9b7",
      "secondary": "#f4f5f7",
      "info": "#11cdef",
      "success": "#2dce89",
      "danger": "#f5365c",
      "warning": "#fb6340"
    },
    black: "#12263F",
    white: "#FFFFFF",
    transparent: "transparent"
  };
  function chartOptions() {
    var options = {
      defaults: {
        global: {
          responsive: true,
          maintainAspectRatio: false,
          defaultColor: colors.gray[600],
          defaultFontColor: colors.gray[600],
          defaultFontFamily: fonts.base,
          defaultFontSize: 13,
          layout: {
            padding: 0
          },
          legend: {
            display: false,
            position: "bottom",
            labels: {
              usePointStyle: true,
              padding: 16
            }
          },
          elements: {
            point: {
              radius: 0,
              backgroundColor: colors.theme["primary"]
            },
            line: {
              tension: 0.4,
              borderWidth: 4,
              borderColor: colors.theme["primary"],
              backgroundColor: colors.transparent,
              borderCapStyle: "rounded"
            },
            rectangle: {
              backgroundColor: colors.theme["warning"]
            },
            arc: {
              backgroundColor: colors.theme["primary"],
              borderColor: colors.white,
              borderWidth: 4
            }
          },
          tooltips: {
            enabled: true,
            mode: "index",
            intersect: false
          }
        },
        doughnut: {
          cutoutPercentage: 83,
          legendCallback: function(chart) {
            var data = chart.data;
            var content = "";
            data.labels.forEach(function(label, index) {
              var bgColor = data.datasets[0].backgroundColor[index];
              content += '<span class="chart-legend-item">';
              content += '<i class="chart-legend-indicator" style="background-color: ' + bgColor + '"></i>';
              content += label;
              content += "</span>";
            });
            return content;
          }
        }
      }
    };
    Chart.scaleService.updateScaleDefaults("linear", {
      gridLines: {
        borderDash: [2],
        borderDashOffset: [2],
        color: colors.gray[300],
        drawBorder: false,
        drawTicks: false,
        drawOnChartArea: true,
        zeroLineWidth: 0,
        zeroLineColor: "rgba(0,0,0,0)",
        zeroLineBorderDash: [2],
        zeroLineBorderDashOffset: [2]
      },
      ticks: {
        beginAtZero: true,
        padding: 10,
        callback: function(value) {
          if (!(value % 10)) {
            return value;
          }
        }
      }
    });
    Chart.scaleService.updateScaleDefaults("category", {
      gridLines: {
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false
      },
      ticks: {
        padding: 20
      },
      maxBarThickness: 10
    });
    return options;
  }
  function parseOptions(parent, options) {
    for (var item in options) {
      if (typeof options[item] !== "object") {
        parent[item] = options[item];
      } else {
        parseOptions(parent[item], options[item]);
      }
    }
  }
  function pushOptions(parent, options) {
    for (var item in options) {
      if (Array.isArray(options[item])) {
        options[item].forEach(function(data) {
          parent[item].push(data);
        });
      } else {
        pushOptions(parent[item], options[item]);
      }
    }
  }
  function popOptions(parent, options) {
    for (var item in options) {
      if (Array.isArray(options[item])) {
        options[item].forEach(function(data) {
          parent[item].pop();
        });
      } else {
        popOptions(parent[item], options[item]);
      }
    }
  }
  function toggleOptions(elem) {
    var options = elem.data("add");
    var $target = $(elem.data("target"));
    var $chart = $target.data("chart");
    if (elem.is(":checked")) {
      pushOptions($chart, options);
      $chart.update();
    } else {
      popOptions($chart, options);
      $chart.update();
    }
  }
  function updateOptions(elem) {
    var options = elem.data("update");
    var $target = $(elem.data("target"));
    var $chart = $target.data("chart");
    parseOptions($chart, options);
    toggleTicks(elem, $chart);
    $chart.update();
  }
  function toggleTicks(elem, $chart) {
    if (elem.data("prefix") !== void 0 || elem.data("prefix") !== void 0) {
      var prefix = elem.data("prefix") ? elem.data("prefix") : "";
      var suffix = elem.data("suffix") ? elem.data("suffix") : "";
      $chart.options.scales.yAxes[0].ticks.callback = function(value) {
        if (!(value % 10)) {
          return prefix + value + suffix;
        }
      };
      $chart.options.tooltips.callbacks.label = function(item, data) {
        var label = data.datasets[item.datasetIndex].label || "";
        var yLabel = item.yLabel;
        var content = "";
        if (data.datasets.length > 1) {
          content += '<span class="popover-body-label mr-auto">' + label + "</span>";
        }
        content += '<span class="popover-body-value">' + prefix + yLabel + suffix + "</span>";
        return content;
      };
    }
  }
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }
  $toggle.on({
    "change": function() {
      var $this = $(this);
      if ($this.is("[data-add]")) {
        toggleOptions($this);
      }
    },
    "click": function() {
      var $this = $(this);
      if ($this.is("[data-update]")) {
        updateOptions($this);
      }
    }
  });
  return {
    colors,
    fonts,
    mode
  };
}();
(function() {
  var $element = ".btn-icon-clipboard", $btn = $($element);
  function init($this) {
    $this.tooltip().on("mouseleave", function() {
      $this.tooltip("hide");
    });
    var clipboard = new ClipboardJS($element);
    clipboard.on("success", function(e) {
      $(e.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle");
      e.clearSelection();
    });
  }
  if ($btn.length) {
    init($btn);
  }
})();
(function() {
  var $nav = $(".navbar-nav, .navbar-nav .nav");
  var $collapse = $(".navbar .collapse");
  var $dropdown = $(".navbar .dropdown");
  function accordion($this) {
    $this.closest($nav).find($collapse).not($this).collapse("hide");
  }
  function closeDropdown($this) {
    var $dropdownMenu = $this.find(".dropdown-menu");
    $dropdownMenu.addClass("close");
    setTimeout(function() {
      $dropdownMenu.removeClass("close");
    }, 200);
  }
  $collapse.on({
    "show.bs.collapse": function() {
      accordion($(this));
    }
  });
  $dropdown.on({
    "hide.bs.dropdown": function() {
      closeDropdown($(this));
    }
  });
})();
(function() {
  $(".navbar-nav");
  var $collapse = $(".navbar .navbar-custom-collapse");
  function hideNavbarCollapse($this) {
    $this.addClass("collapsing-out");
  }
  function hiddenNavbarCollapse($this) {
    $this.removeClass("collapsing-out");
  }
  if ($collapse.length) {
    $collapse.on({
      "hide.bs.collapse": function() {
        hideNavbarCollapse($collapse);
      }
    });
    $collapse.on({
      "hidden.bs.collapse": function() {
        hiddenNavbarCollapse($collapse);
      }
    });
  }
  var navbar_menu_visible = 0;
  $(".sidenav-toggler").click(function() {
    if (navbar_menu_visible == 1) {
      $("body").removeClass("nav-open");
      navbar_menu_visible = 0;
      $(".bodyClick").remove();
    } else {
      var div = '<div class="bodyClick"></div>';
      $(div).appendTo("body").click(function() {
        $("body").removeClass("nav-open");
        navbar_menu_visible = 0;
        $(".bodyClick").remove();
      });
      $("body").addClass("nav-open");
      navbar_menu_visible = 1;
    }
  });
})();
(function() {
  var $popover = $('[data-toggle="popover"]'), $popoverClass = "";
  function init($this) {
    if ($this.data("color")) {
      $popoverClass = "popover-" + $this.data("color");
    }
    var options = {
      trigger: "focus",
      template: '<div class="popover ' + $popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    };
    $this.popover(options);
  }
  if ($popover.length) {
    $popover.each(function() {
      init($(this));
    });
  }
})();
(function() {
  var $scrollTo = $(".scroll-me, [data-scroll-to], .toc-entry a");
  function scrollTo($this) {
    var $el = $this.attr("href");
    var offset = $this.data("scroll-to-offset") ? $this.data("scroll-to-offset") : 0;
    var options = {
      scrollTop: $($el).offset().top - offset
    };
    $("html, body").stop(true, true).animate(options, 600);
    event.preventDefault();
  }
  if ($scrollTo.length) {
    $scrollTo.on("click", function(event2) {
      scrollTo($(this));
    });
  }
})();
(function() {
  var $tooltip = $('[data-toggle="tooltip"]');
  function init() {
    $tooltip.tooltip();
  }
  if ($tooltip.length) {
    init();
  }
})();
(function() {
  var $input = $(".form-control");
  function init($this) {
    $this.on("focus blur", function(e) {
      $(this).parents(".form-group").toggleClass("focused", e.type === "focus");
    }).trigger("blur");
  }
  if ($input.length) {
    init($input);
  }
})();
var $map = $("#map-default"), map, lat, lng;
function initMap() {
  map = document.getElementById("map-default");
  lat = map.getAttribute("data-lat");
  lng = map.getAttribute("data-lng");
  var myLatlng = new google.maps.LatLng(lat, lng);
  var mapOptions = {
    zoom: 12,
    scrollwheel: false,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(map, mapOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map,
    animation: google.maps.Animation.DROP,
    title: "Hello World!"
  });
  var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2><p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  google.maps.event.addListener(marker, "click", function() {
    infowindow.open(map, marker);
  });
}
if ($map.length) {
  google.maps.event.addDomListener(window, "load", initMap);
}
(function() {
  var $chart = $("#chart-bars");
  function initChart($chart2) {
    var ordersChart = new Chart($chart2, {
      type: "bar",
      data: {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Sales",
          data: [25, 20, 30, 22, 17, 29]
        }]
      }
    });
    $chart2.data("chart", ordersChart);
  }
  if ($chart.length) {
    initChart($chart);
  }
})();
(function() {
  var $chart = $("#chart-sales-dark");
  function init($chart2) {
    var salesChart = new Chart($chart2, {
      type: "line",
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              lineWidth: 1,
              color: Charts.colors.gray[900],
              zeroLineColor: Charts.colors.gray[900]
            },
            ticks: {
              callback: function(value) {
                if (!(value % 10)) {
                  return "$" + value + "k";
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || "";
              var yLabel = item.yLabel;
              var content = "";
              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + "</span>";
              }
              content += '<span class="popover-body-value">$' + yLabel + "k</span>";
              return content;
            }
          }
        }
      },
      data: {
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Performance",
          data: [0, 20, 10, 30, 15, 40, 20, 60, 60]
        }]
      }
    });
    $chart2.data("chart", salesChart);
  }
  if ($chart.length) {
    init($chart);
  }
})();
(function() {
  var $datepicker = $(".datepicker");
  function init($this) {
    var options = {
      disableTouchKeyboard: true,
      autoclose: false
    };
    $this.datepicker(options);
  }
  if ($datepicker.length) {
    $datepicker.each(function() {
      init($(this));
    });
  }
})();
var noUiSlider = function() {
  if ($(".input-slider-container")[0]) {
    $(".input-slider-container").each(function() {
      var slider = $(this).find(".input-slider");
      var sliderId = slider.attr("id");
      var minValue = slider.data("range-value-min");
      var maxValue = slider.data("range-value-max");
      var sliderValue = $(this).find(".range-slider-value");
      var sliderValueId = sliderValue.attr("id");
      var startValue = sliderValue.data("range-value-low");
      var c2 = document.getElementById(sliderId), d2 = document.getElementById(sliderValueId);
      noUiSlider.create(c2, {
        start: [parseInt(startValue)],
        connect: [true, false],
        //step: 1000,
        range: {
          "min": [parseInt(minValue)],
          "max": [parseInt(maxValue)]
        }
      });
      c2.noUiSlider.on("update", function(a, b) {
        d2.textContent = a[b];
      });
    });
  }
  if ($("#input-slider-range")[0]) {
    var c = document.getElementById("input-slider-range"), d = document.getElementById("input-slider-range-value-low"), e = document.getElementById("input-slider-range-value-high"), f = [d, e];
    noUiSlider.create(c, {
      start: [parseInt(d.getAttribute("data-range-value-low")), parseInt(e.getAttribute("data-range-value-high"))],
      connect: true,
      range: {
        min: parseInt(c.getAttribute("data-range-value-min")),
        max: parseInt(c.getAttribute("data-range-value-max"))
      }
    }), c.noUiSlider.on("update", function(a, b) {
      f[b].textContent = a[b];
    });
  }
}();
(function() {
  var $scrollbar = $(".scrollbar-inner");
  function init() {
    $scrollbar.scrollbar().scrollLock();
  }
  if ($scrollbar.length) {
    init();
  }
})();
const _sfc_main = {
  __name: "AdminLayout",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const appName = ((_a = window.document.getElementsByTagName("title")[0]) == null ? void 0 : _a.innerText) || "SLO";
    createInertiaApp({
      title: (title) => `${title} - ${appName}`,
      // resolve: (name) => resolvePageComponent(`../Pages/${name}.vue`, import.meta.glob('../Pages/**/*.vue')),
      setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) }).use(plugin).use(I, Ziggy).use(LaravelPermissionToVueJS).use(VueApexCharts).use(VueNumberFormat, { precision: 2, decimal: "." }).component("font-awesome-icon", FontAwesomeIcon).mount(el);
      },
      progress: {
        color: "#4B5563"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Footer = resolveComponent("Footer");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), {
        title: _ctx.title ? _ctx.title : "TravelEase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<link rel="apple-touch-icon" sizes="180x180" href="/img/logo/favicon.png"${_scopeId}><link rel="icon" type="image/png" sizes="32x32" href="/img/logo/favicon.png"${_scopeId}><link rel="icon" type="image/png" sizes="16x16" href="/img/logo/favicon.png"${_scopeId}><link rel="manifest" href="assets/img/site.webmanifest"${_scopeId}><link rel="mask-icon" href="/img/logo/favicon.png"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "meta_head", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/img/logo/favicon.png"
              }),
              createVNode("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/img/logo/favicon.png"
              }),
              createVNode("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/img/logo/favicon.png"
              }),
              createVNode("link", {
                rel: "manifest",
                href: "assets/img/site.webmanifest"
              }),
              createVNode("link", {
                rel: "mask-icon",
                href: "/img/logo/favicon.png"
              }),
              renderSlot(_ctx.$slots, "meta_head")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(SideBar, null, null, _parent));
      _push(`<div class="main-content" id="panel"><div class="ml--6 fixed-content">`);
      _push(ssrRenderComponent(NavBar, null, null, _parent));
      _push(`</div><div class="fixed-content">`);
      ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
      _push(`</div><div class="container-fluid mt--6 fixed-content">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "modals", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "loader", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AdminLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};

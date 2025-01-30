import { useSSRContext, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createApp, h, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { usePage, Link, createInertiaApp, Head } from "@inertiajs/vue3";
import mitt from "mitt";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css             */
import "./jarallax-video.min-D-YMKHr5.js";
import { I } from "../ssr.js";
import "./bootstrap-CYyj1Q76.js";
mitt();
const _sfc_main$2 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const user = usePage().props.auth.user;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-sticky header-absolute" }, _attrs))} data-v-d03f76a2><nav class="navbar navbar-expand-xl" data-v-d03f76a2><div class="container" data-v-d03f76a2><a class="navbar-brand me-5" href="" data-v-d03f76a2><img class="light-mode-item navbar-brand-item" src="/assets/PublicArea/images/logo.svg" alt="logo" data-v-d03f76a2><img class="dark-mode-item navbar-brand-item" src="/assets/PublicArea/images/logo-light.svg" alt="logo" data-v-d03f76a2></a><div class="navbar-collapse collapse" id="navbarCollapse" data-v-d03f76a2><ul class="navbar-nav navbar-nav-scroll dropdown-hover" data-v-d03f76a2><li class="nav-item" data-v-d03f76a2>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link",
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-d03f76a2>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link",
        href: _ctx.route("buses.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Buses`);
          } else {
            return [
              createTextVNode("Buses")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item" data-v-d03f76a2>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link",
        href: _ctx.route("contact")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
      if (unref(user)) {
        _push(`<li class="nav-item" data-v-d03f76a2>`);
        _push(ssrRenderComponent(unref(Link), {
          class: "nav-link",
          href: _ctx.route("booking.user.index"),
          role: "button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` My Bookings `);
            } else {
              return [
                createTextVNode(" My Bookings ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      } else {
        _push(`<li class="nav-item" data-v-d03f76a2>`);
        _push(ssrRenderComponent(unref(Link), {
          class: "nav-link",
          href: _ctx.route("customer.login"),
          role: "button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Bookings `);
            } else {
              return [
                createTextVNode(" Bookings ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li>`);
      }
      _push(`</ul></div><ul class="nav align-items-center dropdown-hover ms-sm-2" data-v-d03f76a2><li class="nav-item position-relative ms-2 ms-sm-3" data-v-d03f76a2>`);
      if (_ctx.$page.props.auth.user) {
        _push(ssrRenderComponent(unref(Link), {
          class: "btn btn-lg icon-link mb-0",
          href: _ctx.route("customer.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="btn btn-light btn-round mb-0" data-v-d03f76a2${_scopeId}>`);
              if (unref(user).image_url) {
                _push2(`<img class="avatar-img rounded-circle border"${ssrRenderAttr("src", unref(user).image_url)} alt="" data-v-d03f76a2${_scopeId}>`);
              } else {
                _push2(`<img class="avatar-img rounded-circle border" src="/assets/PublicArea/images/avatar/user.jpg" alt="" data-v-d03f76a2${_scopeId}>`);
              }
              _push2(`</div><span class="profile-button" data-v-d03f76a2${_scopeId}>Hi, <b style="${ssrRenderStyle({ "color": "black" })}" data-v-d03f76a2${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.first_name)}</b>!</span>`);
            } else {
              return [
                createVNode("div", { class: "btn btn-light btn-round mb-0" }, [
                  unref(user).image_url ? (openBlock(), createBlock("img", {
                    key: 0,
                    class: "avatar-img rounded-circle border",
                    src: unref(user).image_url,
                    alt: ""
                  }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                    key: 1,
                    class: "avatar-img rounded-circle border",
                    src: "/assets/PublicArea/images/avatar/user.jpg",
                    alt: ""
                  }))
                ]),
                createVNode("span", { class: "profile-button" }, [
                  createTextVNode("Hi, "),
                  createVNode("b", { style: { "color": "black" } }, toDisplayString(_ctx.$page.props.auth.user.first_name), 1),
                  createTextVNode("!")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(unref(Link), {
          class: "btn btn-lg profile-button icon-link mb-0",
          href: _ctx.route("customer.login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="btn-light border btn btn-light mb-0 profile-button" style="${ssrRenderStyle({ "color": "#fff", "background-color": "#1d599a" })}" data-v-d03f76a2${_scopeId}>Login</span>`);
            } else {
              return [
                createVNode("span", {
                  class: "btn-light border btn btn-light mb-0 profile-button",
                  style: { "color": "#fff", "background-color": "#1d599a" }
                }, "Login")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</li><li class="nav-item" data-v-d03f76a2><button class="navbar-toggler ms-3 p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" data-v-d03f76a2><span class="navbar-toggler-animation" data-v-d03f76a2><span data-v-d03f76a2></span><span data-v-d03f76a2></span><span data-v-d03f76a2></span></span></button></li></ul></div></nav></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PublicArea/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d03f76a2"]]);
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><footer class="bg-dark position-relative" data-bs-theme="dark"><div class="container position-relative"><div class="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4"><div class="text-body"> Copyrights ©2024 TravelEase </div><div class="nav mt-2 mt-lg-0"><ul class="list-inline mx-auto mb-0"><li class="list-inline-item me-0"><a class="nav-link py-0" href="#" data-bs-toggle="modal" data-bs-target="#privacyPolicyModal"> Privacy Policy </a></li><li class="list-inline-item me-0"><a class="nav-link py-0 pe-0" href="#" data-bs-toggle="modal" data-bs-target="#termsConditionsModal"> Terms &amp; Conditions </a></li></ul></div></div></div></footer><div class="modal fade" id="privacyPolicyModal" tabindex="-1" aria-labelledby="privacyPolicyModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="privacyPolicyModalLabel"> Privacy Policy </h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p> Travel Ease is committed to protecting your privacy. This Privacy Policy explains our data processing practices and your options regarding the ways in which your personal data is used. If you have any requests concerning your personal information or any queries with regard to our processing, please contact us at </p><p> Travel Ease collects the details provided by you on registration together with information we learn about you from your use of our service and your visits to our web site and other sites accessible from them. We also collect information about the transactions you undertake including details of payment cards used. </p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close </button></div></div></div></div><div class="modal fade" id="termsConditionsModal" tabindex="-1" aria-labelledby="termsConditionsModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="termsConditionsModalLabel"> Terms &amp; Conditions </h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><p> Travel Ease has been designed to provide a platform for users to book and manage their travel plans. The platform is designed to provide a seamless experience for users to book flights, hotels, and car rentals. The platform is designed to provide a seamless experience for users to book flights, hotels, and car rentals. The platform is designed to provide a seamless experience for users to book flights, hotels, and car rentals. The platform is designed to provide a seamless experience for users to book flights, hotels, and car rentals. The platform is designed to provide a seamless experience for users to book flights, hotels, and car rentals. The platform is designed to provide a seamless experience for users to book flights, hotels, and car rentals. The platform is designed to provide a seamless experience for users to book flights, hotels, and car rentals. The platform is designed to provide a seamless experience for users to book flights, hotels, and car rentals. </p></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close </button></div></div></div></div><div class="back-top"></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PublicArea/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const appName = "TravelEase";
    createInertiaApp({
      title: (title) => `${title} - ${appName}`,
      // resolve: (name) => resolvePageComponent(`../Pages/${name}.vue`, import.meta.glob('../Pages/**/*.vue')),
      setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) }).use(plugin).use(I).mount(el);
      },
      progress: {
        color: "#4B5563"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), {
        title: _ctx.title ? _ctx.title : "TravelEase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<link rel="icon" type="image/svg+xml" href="/img/logo/logo_white.png"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "meta_head", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("link", {
                rel: "icon",
                type: "image/svg+xml",
                href: "/img/logo/logo_white.png"
              }),
              renderSlot(_ctx.$slots, "meta_head")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "modal", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "loader", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};

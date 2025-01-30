import { createApp, h, unref, withCtx, createVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { createInertiaApp, Head } from "@inertiajs/vue3";
/* empty css             */
import "./jarallax-video.min-D-YMKHr5.js";
import { I } from "../ssr.js";
import "./bootstrap-CYyj1Q76.js";
const _sfc_main = {
  __name: "AuthLayout",
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
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};

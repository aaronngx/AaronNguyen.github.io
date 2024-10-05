import { _ as __nuxt_component_0 } from "./nuxt-link-COteDoP9.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "emailjs-com";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project" }, _attrs))} data-v-0744f9e2><h1 data-v-0744f9e2>To-Do List Application</h1><p data-v-0744f9e2>A simple task management app built with Java.</p><ul data-v-0744f9e2><li data-v-0744f9e2>Implemented task creation, editing, deletion, and completion marking.</li><li data-v-0744f9e2>Used sorting algorithms to enhance task management efficiency.</li><li data-v-0744f9e2>Enabled user interaction through standard input handling.</li></ul>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Back to Home`);
      } else {
        return [
          createTextVNode("Back to Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/todo-list-app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const todoListApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0744f9e2"]]);
export {
  todoListApp as default
};
//# sourceMappingURL=todo-list-app-0sI1jpb0.js.map

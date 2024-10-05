import { _ as __nuxt_component_0 } from './nuxt-link-COteDoP9.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'emailjs-com';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project" }, _attrs))} data-v-87c27e0c><h1 data-v-87c27e0c>Snake Game</h1><p data-v-87c27e0c>Developed a 2D Snake Game using C++ with object-oriented design.</p><ul data-v-87c27e0c><li data-v-87c27e0c>Implemented snake movement, tail growth, and boundary wrapping.</li><li data-v-87c27e0c>Designed tail-following algorithms for smooth gameplay.</li><li data-v-87c27e0c>Added score tracking and random fruit placement.</li></ul>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/snake-game.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const snakeGame = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-87c27e0c"]]);

export { snakeGame as default };
//# sourceMappingURL=snake-game-fmAG0uX4.mjs.map

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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project" }, _attrs))} data-v-e34d061c><h1 data-v-e34d061c>Multiplication Game</h1><p data-v-e34d061c>A two-player strategy game played on a 6x6 board using MIPS Assembly.</p><ul data-v-e34d061c><li data-v-e34d061c>Collaborated with 3 classmates to develop the game.</li><li data-v-e34d061c>Implemented AI using the minimax algorithm with alpha-beta pruning.</li><li data-v-e34d061c>Optimized game logic with recursive search and heuristic evaluation.</li></ul>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/multiplication-game.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const multiplicationGame = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e34d061c"]]);

export { multiplicationGame as default };
//# sourceMappingURL=multiplication-game-B81JZqH5.mjs.map

import { _ as _export_sfc, e as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "emailjs-com";
const _sfc_main = {
  data() {
    return {
      activeSection: "about"
      // Default active section
    };
  },
  mounted() {
    (void 0).addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    (void 0).removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    setActive(section) {
      this.activeSection = section;
    },
    handleScroll() {
      const sections = ["about", "projects", "experience"];
      sections.forEach((section) => {
        const el = (void 0).getElementById(section);
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
        }
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-3b1ae996><aside class="left-column" data-v-3b1ae996><div class="intro" data-v-3b1ae996><h1 data-v-3b1ae996>Aaron Nguyen</h1><h2 data-v-3b1ae996>Computer Science Student | UT Dallas</h2><p data-v-3b1ae996>I specialize in software development, user interface design, and creating impactful, user-focused applications.</p></div><nav class="nav-links" data-v-3b1ae996><ul data-v-3b1ae996><li data-v-3b1ae996><a href="#about" class="${ssrRenderClass({ active: $data.activeSection === "about" })}" data-v-3b1ae996>About</a></li><li data-v-3b1ae996><a href="#projects" class="${ssrRenderClass({ active: $data.activeSection === "projects" })}" data-v-3b1ae996>Projects</a></li><li data-v-3b1ae996><a href="#experience" class="${ssrRenderClass({ active: $data.activeSection === "experience" })}" data-v-3b1ae996>Experience</a></li></ul></nav><div class="social-icons" data-v-3b1ae996><a href="https://www.linkedin.com/in/aaronnguyenutdallas" target="_blank" aria-label="LinkedIn" data-v-3b1ae996><i class="fab fa-linkedin-in" data-v-3b1ae996></i></a><a href="https://github.com/aaronngx" target="_blank" aria-label="GitHub" data-v-3b1ae996><i class="fab fa-github" data-v-3b1ae996></i></a></div></aside><main class="right-column" data-v-3b1ae996>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3b1ae996"]]);
export {
  _default as default
};
//# sourceMappingURL=default-Bf21HNV5.js.map

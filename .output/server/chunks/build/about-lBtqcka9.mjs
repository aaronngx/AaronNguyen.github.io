import { ssrRenderAttrs } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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
  _push(`<div${ssrRenderAttrs(_attrs)}><section id="about" class="about-section"><h2>About Me</h2><p>I am a Computer Science student at the University of Texas at Dallas, with a passion for developing software solutions and contributing to impactful projects.</p></section><section id="projects" class="projects-section"><h2>Projects</h2><div class="project-item"><h3>Multiplication Game</h3><p>A strategic two-player game built with MIPS Assembly.</p></div><div class="project-item"><h3>Snake Game</h3><p>A 2D snake game developed in C++ with smooth tail-following algorithms.</p></div><div class="project-item"><h3>To-Do List Application</h3><p>A Java-based task management system with sorting algorithms.</p></div></section><section id="experience" class="experience-section"><h2>Experience</h2><div class="experience-item"><h3>Front Desk Attendant \u2014 UT Dallas Eugene McDermott Library</h3><p>December 2023 - Present</p></div><div class="experience-item"><h3>Head of Volunteers \u2014 Vietnam National Children&#39;s Hospital</h3><p>2018 - 2020</p></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-lBtqcka9.mjs.map

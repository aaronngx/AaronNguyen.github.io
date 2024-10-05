import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
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
      activeProject: "",
      // No project is selected by default
      form: {
        fullName: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    setActive(project) {
      this.activeProject = project;
    },
    clearActive() {
      this.activeProject = "";
    },
    sendEmail() {
      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: this.form.fullName,
        from_email: this.form.email,
        message: this.form.message
      }).then(
        () => {
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log(error);
          alert("There was an error sending the message.");
        }
      );
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-4fe2985a><section id="about" class="about-section" data-v-4fe2985a><p data-v-4fe2985a>I am a Computer Science student at the University of Texas at Dallas, with a passion for developing software solutions and contributing to impactful projects.</p></section><section id="projects" class="projects-section" data-v-4fe2985a><div class="${ssrRenderClass([{ shadow: $data.activeProject === "multiplication", blur: $data.activeProject && $data.activeProject !== "multiplication" }, "project-item"])}" data-v-4fe2985a><div class="project-content" data-v-4fe2985a><a href="https://github.com/aaronngx?tab=projects" target="_blank" class="project-title" data-v-4fe2985a><h3 data-v-4fe2985a>Multiplication Game</h3></a><p data-v-4fe2985a>A strategic two-player game built with MIPS Assembly.</p><div class="skill-tags" data-v-4fe2985a><span class="skill-tag" data-v-4fe2985a>Assembly</span><span class="skill-tag" data-v-4fe2985a>MIPS</span></div></div></div><div class="${ssrRenderClass([{ shadow: $data.activeProject === "snake", blur: $data.activeProject && $data.activeProject !== "snake" }, "project-item"])}" data-v-4fe2985a><div class="project-content" data-v-4fe2985a><a href="https://github.com/aaronngx?tab=projects" target="_blank" class="project-title" data-v-4fe2985a><h3 data-v-4fe2985a>Snake Game</h3></a><p data-v-4fe2985a>A 2D snake game developed in C++ with smooth tail-following algorithms.</p><div class="skill-tags" data-v-4fe2985a><span class="skill-tag" data-v-4fe2985a>C++</span><span class="skill-tag" data-v-4fe2985a>Game Development</span></div></div></div><div class="${ssrRenderClass([{ shadow: $data.activeProject === "todo", blur: $data.activeProject && $data.activeProject !== "todo" }, "project-item"])}" data-v-4fe2985a><div class="project-content" data-v-4fe2985a><a href="https://github.com/aaronngx?tab=projects" target="_blank" class="project-title" data-v-4fe2985a><h3 data-v-4fe2985a>To-Do List Application</h3></a><p data-v-4fe2985a>A Java-based task management system with sorting algorithms.</p><div class="skill-tags" data-v-4fe2985a><span class="skill-tag" data-v-4fe2985a>Java</span><span class="skill-tag" data-v-4fe2985a>Task Management</span></div></div></div></section><section id="experience" class="experience-section" data-v-4fe2985a><div class="experience-item" data-v-4fe2985a><div class="experience-layout" data-v-4fe2985a><div class="experience-time" data-v-4fe2985a><span data-v-4fe2985a>2023 — PRESENT</span></div><div class="experience-content" data-v-4fe2985a><h3 data-v-4fe2985a>Front Desk Attendant <span data-v-4fe2985a>— UT Dallas Eugene McDermott Library</span></h3><p data-v-4fe2985a>Assisted supervisors and trained new student workers. Managed over 500 students using the library facilities. Oversaw interviews to select the best student candidates.</p><div class="skills" data-v-4fe2985a><span class="skill-tag" data-v-4fe2985a>Communication</span></div></div></div></div><div class="experience-item" data-v-4fe2985a><div class="experience-layout" data-v-4fe2985a><div class="experience-time" data-v-4fe2985a><span data-v-4fe2985a>2018 — 2020</span></div><div class="experience-content" data-v-4fe2985a><h3 data-v-4fe2985a>Head of Volunteers <span data-v-4fe2985a>— Vietnam National Children&#39;s Hospital</span></h3><p data-v-4fe2985a>Led a 20-member team to raise $2,500 for pediatric patients. Organized entertainment events for over 60 children during holidays.</p><div class="skills" data-v-4fe2985a><span class="skill-tag" data-v-4fe2985a>Teamwork</span></div></div></div></div></section><section id="contact" class="contact-section" data-v-4fe2985a><h3 data-v-4fe2985a>Contact Me</h3><form data-v-4fe2985a><div class="input-group" data-v-4fe2985a><input type="text"${ssrRenderAttr("value", $data.form.fullName)} placeholder="Your Full Name" required data-v-4fe2985a></div><div class="input-group" data-v-4fe2985a><input type="email"${ssrRenderAttr("value", $data.form.email)} placeholder="Your Email" required data-v-4fe2985a></div><div class="input-group" data-v-4fe2985a><textarea placeholder="Your Message" required data-v-4fe2985a>${ssrInterpolate($data.form.message)}</textarea></div><div class="submit-btn" data-v-4fe2985a><button type="submit" data-v-4fe2985a>Send Message</button></div></form></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4fe2985a"]]);
export {
  index as default
};
//# sourceMappingURL=index-QJVUd3HC.js.map

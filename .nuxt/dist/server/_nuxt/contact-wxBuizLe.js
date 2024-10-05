import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
      form: {
        fullName: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
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
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "contact",
    class: "contact-section"
  }, _attrs))} data-v-1f2345fe><h3 data-v-1f2345fe>Contact Me</h3><form data-v-1f2345fe><div class="input-group" data-v-1f2345fe><input type="text"${ssrRenderAttr("value", $data.form.fullName)} placeholder="Your Full Name" required data-v-1f2345fe></div><div class="input-group" data-v-1f2345fe><input type="email"${ssrRenderAttr("value", $data.form.email)} placeholder="Your Email" required data-v-1f2345fe></div><div class="input-group" data-v-1f2345fe><textarea placeholder="Your Message" required data-v-1f2345fe>${ssrInterpolate($data.form.message)}</textarea></div><div class="submit-btn" data-v-1f2345fe><button type="submit" data-v-1f2345fe>Send Message</button></div></form></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1f2345fe"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-wxBuizLe.js.map

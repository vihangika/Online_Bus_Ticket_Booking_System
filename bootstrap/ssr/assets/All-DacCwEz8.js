import { ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import axios from "axios";
import "sweetalert2";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "All",
  __ssrInlineRender: true,
  props: {
    busId: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const busImages = ref([]);
    ref([]);
    ref({});
    ref(0);
    const getBusImage = async () => {
      try {
        const response = await axios.get(
          route("admin.bus.image.all", props.busId)
        );
        console.log("Bus Images", response.data.bus_image);
        busImages.value = response.data.bus_image;
      } catch (error) {
        console.log("Error", error);
      }
    };
    onMounted(() => {
      getBusImage();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "basic-info" }, _attrs))} data-v-eaf9aa0b><div class="card-header" data-v-eaf9aa0b><h5 data-v-eaf9aa0b>Bus Images</h5></div><div class="card-body pt-0 mt-0" data-v-eaf9aa0b><div class="col image-header" data-v-eaf9aa0b><form enctype="multipart/form-data" data-v-eaf9aa0b><div class="" data-v-eaf9aa0b><div class="row" data-v-eaf9aa0b><input type="file" class="form-control file m-2" id="fileInput" style="${ssrRenderStyle({ "width": "300px" })}" data-v-eaf9aa0b><div class="justify-content-start mt-3" data-v-eaf9aa0b><button class="btn btn-sm btn-round btn-outline-primary" data-v-eaf9aa0b><i class="fa-solid fa-floppy-disk" data-v-eaf9aa0b></i> Upload </button></div></div></div></form></div><div class="image-setup image-top-header border mt-2" data-v-eaf9aa0b><!--[-->`);
      ssrRenderList(busImages.value, (value) => {
        _push(`<div class="card image-section" style="${ssrRenderStyle({ "width": "22rem", "height": "18rem" })}" data-v-eaf9aa0b><div class="m-auto" data-v-eaf9aa0b><img${ssrRenderAttr("src", value.image_url)} class="card-img-top" alt="no image" style="${ssrRenderStyle({ "width": "18rem", "height": "14rem" })}" data-v-eaf9aa0b></div><div class="image-card-body mr-5 mb-3 mt-2" data-v-eaf9aa0b><div class="button-section d-flex" data-v-eaf9aa0b>`);
        if (value.status == 1) {
          _push(`<div class="button-section" data-v-eaf9aa0b><div class="justify-content-start button-section" data-v-eaf9aa0b><i class="fa-solid fa-toggle-on text-primary" data-v-eaf9aa0b></i></div></div>`);
        } else {
          _push(`<div class="" data-v-eaf9aa0b><i class="fa-solid fa-toggle-off text-mute mr-3" style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-eaf9aa0b></i><i class="fa-solid fa-trash" style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-eaf9aa0b></i></div>`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AdminArea/Buses/Components/BusImages/All.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BusImagesAll = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eaf9aa0b"]]);
export {
  BusImagesAll as default
};

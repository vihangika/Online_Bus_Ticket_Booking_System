import { ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import axios from "axios";
import { ref, onMounted, useSSRContext } from "vue";
import "sweetalert2";
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
    const validationErrors = ref({});
    const validationMessage = ref(null);
    const props = __props;
    const busStops = ref([]);
    const busStop = ref({});
    const editBusStop = ref({});
    const reload = async () => {
      try {
        const response = (await axios.get(route("admin.bus.stop.all", props.busId))).data;
        busStops.value = response.data;
        resetData();
      } catch (error) {
        console.log("Error", error);
      }
    };
    const resetData = () => {
      busStop.value = {};
      validationErrors.value = {};
      validationMessage.value = null;
    };
    onMounted(() => {
      reload();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="basic-info"><div class="card-header"><div class="row"><div class="col-6"><h5>Bus Stops</h5></div><div class="col-6 text-right"><button class="btn btn-sm btn-round btn-outline-primary"><i class="fa-solid fa-plus"></i> Add </button></div></div></div><div class="card-body pt-0 mt-0"><div class="col image-header"><form enctype="multipart/form-data"><div class=""><div class="row"></div></div></form></div><div class="table-responsive"><table class="table table-striped"><thead><tr><th scope="col">Name</th><th scope="col">Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(busStops.value, (busStop2) => {
        _push(`<tr><td>${ssrInterpolate(busStop2.name)}</td><td><button class="btn btn-sm btn-round btn-outline-primary"><i class="fa-solid fa-edit"></i> Edit </button><button class="btn btn-sm btn-round btn-outline-danger"><i class="fa-solid fa-trash"></i> Delete </button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div><div class="modal fade" id="newBusStopModal" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="newVendorModal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-mb" role="document"><div class="modal-content p-2"><div class="modal-header"><h5 class="modal-title font-weight-bolder breadcrumb-text text-gradient" id="add_brandLabel"> New Bus Stop </h5><button type="button" class="close btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times"></i></span></button></div><div class="modal-body p-0"><div class="card-plain"><div class="card-body"><form role="form text-left" enctype="multipart/form-data"><div class="row mb-1"><div for="code" class="col-md-3 col-form-label"> NAME </div><div class="col-md-9"><input type="text" class="form-control form-control-sm" name="name" id="name" placeholder="Bus stop name"${ssrRenderAttr("value", busStop.value.name)} required>`);
      if (validationErrors.value.name) {
        _push(`<small id="bus_name" class="text-danger form-text text-error-msg error">${ssrInterpolate(validationErrors.value.name)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="text-right mt-2"><button type="button" class="btn btn-primary btn btn-sm btn-neutral float-end"><i class="fas fa-save"></i> CREATE </button></div></form></div></div></div></div></div></div><div class="modal fade" id="editBusStopModal" data-bs-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="newVendorModal" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-mb" role="document"><div class="modal-content p-2"><div class="modal-header"><h5 class="modal-title font-weight-bolder breadcrumb-text text-gradient" id="add_brandLabel"> Edit Bus Stop </h5><button type="button" class="close btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fa fa-times"></i></span></button></div><div class="modal-body p-0"><div class="card-plain"><div class="card-body"><form role="form text-left" enctype="multipart/form-data"><div class="row mb-1"><div for="code" class="col-md-3 col-form-label"> NAME </div><div class="col-md-9"><input type="text" class="form-control form-control-sm" name="name" id="name" placeholder="Bus stop name"${ssrRenderAttr("value", editBusStop.value.name)} required>`);
      if (validationErrors.value.name) {
        _push(`<small id="bus_name" class="text-danger form-text text-error-msg error">${ssrInterpolate(validationErrors.value.name)}</small>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="text-right mt-2"><button type="button" class="btn btn-primary btn btn-sm btn-neutral float-end"><i class="fas fa-save"></i> UPDATE </button></div></form></div></div></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AdminArea/Buses/Components/BusStops/All.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

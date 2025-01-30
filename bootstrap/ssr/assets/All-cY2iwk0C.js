import { ref, onMounted, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import axios from "axios";
import "@inertiajs/vue3";
import Multiselect from "vue-multiselect";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "All",
  __ssrInlineRender: true,
  props: {
    customerId: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const page = ref(1);
    const pageCount = ref(25);
    const perPage = ref([25, 50, 100]);
    const pagination = ref({});
    const search_code = ref(null);
    const search_date_from = ref();
    const search_date_to = ref();
    const select_is_paid = ref([]);
    const select_is_shipped = ref([]);
    const isPaid = ref([
      { id: 1, name: "Paid" },
      { id: 2, name: "Not Paid" }
    ]);
    const isShipped = ref([
      { id: 1, name: "Shipped" },
      { id: 2, name: "Not Shipped" }
    ]);
    const orderData = ref([]);
    const props = __props;
    const removeTFromTimestamp = (timestamp) => {
      return timestamp.replace(/T\d{2}:\d{2}:\d{2}\.\d+Z/, "");
    };
    const reload = async () => {
      try {
        const response = (await axios.get(route("admin.order.find", props.customerId), {
          params: {
            page: page.value,
            per_page: pageCount.value,
            code: search_code.value,
            date_from: search_date_from.value,
            date_to: search_date_to.value,
            is_paid: select_is_paid.value.id,
            is_shipped: select_is_shipped.value.id
          }
        })).data;
        orderData.value = response.data;
        pagination.value = response;
      } catch (error) {
        console.log("Error", error);
      }
    };
    const numberFormatter = (number) => {
      if (number == void 0 || number == null || number == Infinity) {
        return "0.00";
      }
      const parsedNumber = Number(number);
      if (isNaN(parsedNumber)) {
        return "0.00";
      }
      if (typeof parsedNumber !== "number") {
        return "0.00";
      }
      return parsedNumber.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true
      });
    };
    onMounted(() => {
      reload();
    });
    watch([page, pageCount], () => {
      reload();
    });
    watch(() => {
      if (select_is_paid.value) {
        reload();
      } else {
        reload();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))} data-v-af887589><div class="col-lg-12 mt-0" data-v-af887589><div class="card shadow" data-v-af887589><div class="py-3 filters-margin mx-3 text-sm card-body" data-v-af887589><div class="flex" data-v-af887589><div class="items-center text-muted mx-1" data-v-af887589><div class="" data-v-af887589>Order Code</div><div class="inline-block" data-v-af887589><input type="text" class="form-control form-control-sm" name="order_code" id="order_code"${ssrRenderAttr("value", search_code.value)} placeholder="Order Code" data-v-af887589></div></div><div class="items-center text-muted mx-1" data-v-af887589><div class="" data-v-af887589>DATE FROM</div><div class="inline-block" data-v-af887589><input type="date" class="form-control form-control-sm" name="date_from" id="date_from"${ssrRenderAttr("value", search_date_from.value)} placeholder="date" data-v-af887589></div></div><div class="items-center text-muted mx-1" data-v-af887589><div class="" data-v-af887589>DATE TO</div><div class="inline-block" data-v-af887589><input type="date" class="form-control form-control-sm" name="date_to" id="date_to"${ssrRenderAttr("value", search_date_to.value)} placeholder="date" data-v-af887589></div></div><div class="items-center text-muted mx-1" data-v-af887589><div class="" data-v-af887589>Is Paid</div><div class="inline-block" style="${ssrRenderStyle({ "width": "200px" })}" data-v-af887589>`);
      _push(ssrRenderComponent(unref(Multiselect), {
        modelValue: select_is_paid.value,
        "onUpdate:modelValue": ($event) => select_is_paid.value = $event,
        options: isPaid.value,
        showLabels: false,
        "close-on-select": true,
        "clear-on-select": false,
        searchable: true,
        placeholder: "Select Status",
        label: "name",
        "track-by": "id"
      }, null, _parent));
      _push(`</div></div><div class="items-center text-muted mx-1" data-v-af887589><div class="" data-v-af887589>Is Shipped</div><div class="inline-block" style="${ssrRenderStyle({ "width": "200px" })}" data-v-af887589>`);
      _push(ssrRenderComponent(unref(Multiselect), {
        modelValue: select_is_shipped.value,
        "onUpdate:modelValue": ($event) => select_is_shipped.value = $event,
        options: isShipped.value,
        showLabels: false,
        "close-on-select": true,
        "clear-on-select": false,
        searchable: true,
        placeholder: "Select Status",
        label: "name",
        "track-by": "id"
      }, null, _parent));
      _push(`</div></div><div class="text-muted mx-1" data-v-af887589><div class="mt-2" data-v-af887589><button class="btn btn-sm btn-ash float-end mt-2 pt-2" data-v-af887589> CLEAR </button></div></div><div class="flex text-muted ml-auto mt-4" data-v-af887589><div class="inline-block" data-v-af887589><select class="form-control form-control-sm per-page-entry"${ssrRenderAttr("value", 25)} data-v-af887589><!--[-->`);
      ssrRenderList(perPage.value, (perPageCount) => {
        _push(`<option${ssrRenderAttr("value", perPageCount)} data-v-af887589>${ssrInterpolate(perPageCount)}</option>`);
      });
      _push(`<!--]--></select></div></div></div></div><div class="row mx-4" data-v-af887589><div class="table-responsive" data-v-af887589><div class="d-flex flex-row mb-3 rounded" data-v-af887589><div class="left d-flex" data-v-af887589></div></div><table class="table" data-v-af887589><thead data-v-af887589><tr data-v-af887589><th class="textClassHead text-left" style="${ssrRenderStyle({ "width": "2%" })}" data-v-af887589> ORDER CODE </th><th class="textClassHead text-left" style="${ssrRenderStyle({ "width": "2%" })}" data-v-af887589> DATE </th><th class="textClassHead text-right" style="${ssrRenderStyle({ "width": "0%" })}" data-v-af887589> TOTAL </th><th class="textClassHead text-center" style="${ssrRenderStyle({ "width": "2%" })}" data-v-af887589> IS PAID </th><th class="textClassHead text-center" style="${ssrRenderStyle({ "width": "2%" })}" data-v-af887589> IS SHIPPED </th></tr></thead><tbody data-v-af887589><!--[-->`);
      ssrRenderList(orderData.value, (value) => {
        _push(`<tr data-v-af887589><td class="textClassBody text-left" data-v-af887589>${ssrInterpolate(value == null ? void 0 : value.code)}</td><td class="textClassBody" data-v-af887589>${ssrInterpolate(removeTFromTimestamp(value.updated_at))}</td><td class="textClassBody text-right" data-v-af887589> Rs.${ssrInterpolate(numberFormatter(value == null ? void 0 : value.total))}</td><td class="textClassBody text-center" data-v-af887589>`);
        if ((value == null ? void 0 : value.is_paid) == 1) {
          _push(`<div class="" data-v-af887589><span class="badge badge-success" data-v-af887589>PAID</span></div>`);
        } else {
          _push(`<div class="" data-v-af887589><span class="badge bg-light" data-v-af887589>NOT PAID</span></div>`);
        }
        _push(`</td><td class="textClassBody text-center" data-v-af887589>`);
        if ((value == null ? void 0 : value.is_shipped) == 1) {
          _push(`<div class="" data-v-af887589><span class="badge badge-success" data-v-af887589>SHIPPED</span></div>`);
        } else {
          _push(`<div class="" data-v-af887589><span class="badge bg-light" data-v-af887589>NOT SHIPPED</span></div>`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><div class="flex mt-1 px-3 mx-1 card-footer table-footer align-items-center" data-v-af887589><div class="col-sm-12 col-md-6 p-0" data-v-af887589><div class="dataTables_info column__left___padding" id="DataTables_Table_0_info" role="status" aria-live="polite" data-v-af887589> Showing ${ssrInterpolate(pagination.value.from)} to ${ssrInterpolate(pagination.value.to)} of ${ssrInterpolate(pagination.value.total)} entries </div></div><div class="col-sm-12 col-md-6 p-0" data-v-af887589><div class="dataTables_paginate paging_simple_numbers column__right___padding" id="DataTables_Table_0_paginate" data-v-af887589><nav aria-label="Page navigation" style="${ssrRenderStyle({ "float": "right" })}" data-v-af887589><ul class="pagination" data-v-af887589><li class="${ssrRenderClass([pagination.value.current_page == 1 ? "disabled" : "", "page-item"])}" data-v-af887589><a class="page-link" href="javascript:void(0)" data-v-af887589><i class="fa-solid fa-angles-left" data-v-af887589></i></a></li><!--[-->`);
      ssrRenderList(pagination.value.last_page, (page2, index) => {
        _push(`<!--[-->`);
        if (page2 == 1 || page2 == pagination.value.last_page || Math.abs(page2 - pagination.value.current_page) < 5) {
          _push(`<li class="${ssrRenderClass([pagination.value.current_page == page2 ? "active" : "", "page-item"])}" data-v-af887589><a class="page-link" data-v-af887589>${ssrInterpolate(page2)}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--><li class="${ssrRenderClass([pagination.value.current_page == pagination.value.last_page ? "disabled" : "", "page-item"])}" data-v-af887589><a class="page-link" href="javascript:void(0)" data-v-af887589><i class="fa-solid fa-angles-right" data-v-af887589></i></a></li></ul></nav></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AdminArea/Customer/Components/Orders/All.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CustomerOrders = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-af887589"]]);
export {
  CustomerOrders as default
};

import { ref, withCtx, createTextVNode, unref, createVNode, withKeys, withDirectives, vModelCheckbox, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-Dn_YoCfz.js";
import { usePage, useForm, router } from "@inertiajs/vue3";
import { D as DangerButton, _ as _sfc_main$2, a as _sfc_main$6 } from "./SecondaryButton-D3kHPYgf.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./TextInput-JrqUjSjq.js";
import { _ as _sfc_main$3 } from "./InputLabel-DrIyddsS.js";
import Swal from "sweetalert2";
import "mitt";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
/* empty css             */
import "./jarallax-video.min-D-YMKHr5.js";
import "../ssr.js";
import "@vue/server-renderer";
import "@inertiajs/vue3/server";
import "./bootstrap-CYyj1Q76.js";
import "axios";
const _sfc_main = {
  __name: "delete",
  __ssrInlineRender: true,
  setup(__props) {
    usePage().props.auth.user;
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const confirmAgreement = ref(false);
    const form = useForm({
      password: ""
    });
    const keepUserAccount = () => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3e3,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Your Account is safe"
      });
      router.visit(route("customer.index"));
    };
    const confirmUserDeletion = () => {
      if (confirmAgreement.value === true) {
        confirmingUserDeletion.value = true;
        nextTick(() => passwordInput.value.focus());
      }
    };
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => {
          closeModal();
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3e3,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Your Account has been deleted"
          });
        },
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main${_scopeId}><section class="pt-sm-7"${_scopeId}><div class="container pt-3 pt-xl-5"${_scopeId}><div class="row"${_scopeId}><div class="col-lg-12 col-xl-12 ps-lg-12 ps-xl-12"${_scopeId}><div class="d-flex justify-content-between align-items-center mb-5 mb-sm-6"${_scopeId}><h1 class="h3 mb-0"${_scopeId}>Delete profile</h1><button class="btn btn-primary d-lg-none flex-shrink-0 ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar"${_scopeId}><i class="fas fa-sliders-h"${_scopeId}></i> Menu </button></div><div class="card bg-transparent rounded-3 mb-0"${_scopeId}><div class="card-header bg-transparent border-bottom p-0 pb-3"${_scopeId}><h6 class="card-header-title mb-0"${_scopeId}>Deactivate Account</h6></div><div class="card-body px-0"${_scopeId}><span class="heading-color fw-bold"${_scopeId}>Before you go...</span><ul class="mt-2"${_scopeId}><li${_scopeId}>If you delete your account, you will lose your all data.</li></ul><div class="form-check form-check-md my-4"${_scopeId}><input class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(confirmAgreement.value) ? ssrLooseContain(confirmAgreement.value, null) : confirmAgreement.value) ? " checked" : ""} id="deleteaccountCheck"${_scopeId}><label class="form-check-label" for="deleteaccountCheck"${_scopeId}>Yes, I&#39;d like to delete my account</label></div><button href="#" class="btn btn-success-soft mb-2 mb-sm-0 m-2"${_scopeId}>Keep my account</button>`);
            _push2(ssrRenderComponent(DangerButton, {
              class: "btn btn-danger mb-0 m-2",
              onClick: confirmUserDeletion
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete my Account`);
                } else {
                  return [
                    createTextVNode(" Delete my Account")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              show: confirmingUserDeletion.value,
              onClose: closeModal
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-6"${_scopeId2}><h2 class="text-lg font-medium text-gray-900"${_scopeId2}> Are you sure you want to delete your account? </h2><p class="mt-1 text-sm text-gray-600"${_scopeId2}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    for: "password",
                    value: "Password",
                    class: "sr-only"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "form-control",
                    placeholder: "Password",
                    onKeyup: deleteUser
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-6 flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, { onClick: closeModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(DangerButton, {
                    class: ["ms-3 btn btn-danger", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Delete Account `);
                      } else {
                        return [
                          createTextVNode(" Delete Account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-6" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete your account? "),
                      createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode(_sfc_main$3, {
                          for: "password",
                          value: "Password",
                          class: "sr-only"
                        }),
                        createVNode(_sfc_main$4, {
                          id: "password",
                          ref_key: "passwordInput",
                          ref: passwordInput,
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          type: "password",
                          class: "form-control",
                          placeholder: "Password",
                          onKeyup: withKeys(deleteUser, ["enter"])
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_sfc_main$5, {
                          message: unref(form).errors.password,
                          class: "mt-2"
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mt-6 flex justify-end" }, [
                        createVNode(_sfc_main$6, { onClick: closeModal }, {
                          default: withCtx(() => [
                            createTextVNode(" Cancel ")
                          ]),
                          _: 1
                        }),
                        createVNode(DangerButton, {
                          class: ["ms-3 btn btn-danger", { "opacity-25": unref(form).processing }],
                          disabled: unref(form).processing,
                          onClick: deleteUser
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Delete Account ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></section></main>`);
          } else {
            return [
              createVNode("main", null, [
                createVNode("section", { class: "pt-sm-7" }, [
                  createVNode("div", { class: "container pt-3 pt-xl-5" }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-lg-12 col-xl-12 ps-lg-12 ps-xl-12" }, [
                        createVNode("div", { class: "d-flex justify-content-between align-items-center mb-5 mb-sm-6" }, [
                          createVNode("h1", { class: "h3 mb-0" }, "Delete profile"),
                          createVNode("button", {
                            class: "btn btn-primary d-lg-none flex-shrink-0 ms-2",
                            type: "button",
                            "data-bs-toggle": "offcanvas",
                            "data-bs-target": "#offcanvasSidebar",
                            "aria-controls": "offcanvasSidebar"
                          }, [
                            createVNode("i", { class: "fas fa-sliders-h" }),
                            createTextVNode(" Menu ")
                          ])
                        ]),
                        createVNode("div", { class: "card bg-transparent rounded-3 mb-0" }, [
                          createVNode("div", { class: "card-header bg-transparent border-bottom p-0 pb-3" }, [
                            createVNode("h6", { class: "card-header-title mb-0" }, "Deactivate Account")
                          ]),
                          createVNode("div", { class: "card-body px-0" }, [
                            createVNode("span", { class: "heading-color fw-bold" }, "Before you go..."),
                            createVNode("ul", { class: "mt-2" }, [
                              createVNode("li", null, "If you delete your account, you will lose your all data.")
                            ]),
                            createVNode("div", { class: "form-check form-check-md my-4" }, [
                              withDirectives(createVNode("input", {
                                class: "form-check-input",
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => confirmAgreement.value = $event,
                                id: "deleteaccountCheck"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, confirmAgreement.value]
                              ]),
                              createVNode("label", {
                                class: "form-check-label",
                                for: "deleteaccountCheck"
                              }, "Yes, I'd like to delete my account")
                            ]),
                            createVNode("button", {
                              href: "#",
                              class: "btn btn-success-soft mb-2 mb-sm-0 m-2",
                              onClick: keepUserAccount
                            }, "Keep my account"),
                            createVNode(DangerButton, {
                              class: "btn btn-danger mb-0 m-2",
                              onClick: confirmUserDeletion
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Delete my Account")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode(_sfc_main$2, {
                          show: confirmingUserDeletion.value,
                          onClose: closeModal
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "p-6" }, [
                              createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete your account? "),
                              createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                              createVNode("div", { class: "mt-6" }, [
                                createVNode(_sfc_main$3, {
                                  for: "password",
                                  value: "Password",
                                  class: "sr-only"
                                }),
                                createVNode(_sfc_main$4, {
                                  id: "password",
                                  ref_key: "passwordInput",
                                  ref: passwordInput,
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                  type: "password",
                                  class: "form-control",
                                  placeholder: "Password",
                                  onKeyup: withKeys(deleteUser, ["enter"])
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_sfc_main$5, {
                                  message: unref(form).errors.password,
                                  class: "mt-2"
                                }, null, 8, ["message"])
                              ]),
                              createVNode("div", { class: "mt-6 flex justify-end" }, [
                                createVNode(_sfc_main$6, { onClick: closeModal }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Cancel ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(DangerButton, {
                                  class: ["ms-3 btn btn-danger", { "opacity-25": unref(form).processing }],
                                  disabled: unref(form).processing,
                                  onClick: deleteUser
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Delete Account ")
                                  ]),
                                  _: 1
                                }, 8, ["class", "disabled"])
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["show"])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PublicArea/Customer/delete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

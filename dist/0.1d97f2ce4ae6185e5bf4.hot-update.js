webpackHotUpdate(0,{

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"boiteazik\"\n  }, [_c('div', {\n    staticClass: \"part\"\n  }, _vm._l((_vm.melodie), function(v, k, i) {\n    return _c('note', {\n      key: i,\n      attrs: {\n        \"index\": k,\n        \"note\": v\n      },\n      on: {\n        \"new\": _vm.newChild,\n        \"change\": function($event) {\n          _vm.update(k)\n        }\n      }\n    })\n  })), _vm._v(\" \"), _c('div', [_vm._v(\" \\\"triton\\\">\\n  \")]), _vm._v(\" \"), _c('div', {\n    staticClass: \"bouttons\"\n  }, [_c('input', {\n    attrs: {\n      \"type\": \"button\",\n      \"value\": \"play\"\n    },\n    on: {\n      \"click\": _vm.play\n    }\n  }), _vm._v(\" \"), _c('input', {\n    attrs: {\n      \"type\": \"button\",\n      \"value\": \"stop\"\n    },\n    on: {\n      \"click\": _vm.stop\n    }\n  }), _vm._v(\" \"), _c('select', {\n    on: {\n      \"change\": function($event) {\n        _vm.musique.setTimbre($event.target.value)\n      }\n    }\n  }, [_c('option', [_vm._v(\"MonoSynth\")]), _vm._v(\" \"), _c('option', [_vm._v(\"AMSynth\")]), _vm._v(\" \"), _c('option', [_vm._v(\"FMSynth\")]), _vm._v(\" \"), _c('option', [_vm._v(\"bigsynth de ouf\")]), _vm._v(\" \"), _c('option', [_vm._v(\"NoiseSynth\")]), _vm._v(\" \"), _c('option', [_vm._v(\"PluckSynth\")])]), _vm._v(\" \"), _c('input', {\n    attrs: {\n      \"type\": \"button\",\n      \"value\": \"plus\"\n    },\n    on: {\n      \"click\": _vm.addNote\n    }\n  }), _vm._v(\" \"), _c('input', {\n    attrs: {\n      \"type\": \"button\",\n      \"value\": \"moins\"\n    },\n    on: {\n      \"click\": _vm.removeNote\n    }\n  })])])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n     __webpack_require__(0).rerender(\"data-v-32d4e95a\", module.exports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tdXNpcXVlLnZ1ZT9kZDljIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJvaXRlYXppa1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhcnRcIlxuICB9LCBfdm0uX2woKF92bS5tZWxvZGllKSwgZnVuY3Rpb24odiwgaywgaSkge1xuICAgIHJldHVybiBfYygnbm90ZScsIHtcbiAgICAgIGtleTogaSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaW5kZXhcIjogayxcbiAgICAgICAgXCJub3RlXCI6IHZcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcIm5ld1wiOiBfdm0ubmV3Q2hpbGQsXG4gICAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS51cGRhdGUoaylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfdm0uX3YoXCIgXFxcInRyaXRvblxcXCI+XFxuICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJib3V0dG9uc1wiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJ2YWx1ZVwiOiBcInBsYXlcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnBsYXlcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgXCJ2YWx1ZVwiOiBcInN0b3BcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnN0b3BcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VsZWN0Jywge1xuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm11c2lxdWUuc2V0VGltYnJlKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ29wdGlvbicsIFtfdm0uX3YoXCJNb25vU3ludGhcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIFtfdm0uX3YoXCJBTVN5bnRoXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCBbX3ZtLl92KFwiRk1TeW50aFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywgW192bS5fdihcImJpZ3N5bnRoIGRlIG91ZlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywgW192bS5fdihcIk5vaXNlU3ludGhcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIFtfdm0uX3YoXCJQbHVja1N5bnRoXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwidmFsdWVcIjogXCJwbHVzXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5hZGROb3RlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIixcbiAgICAgIFwidmFsdWVcIjogXCJtb2luc1wiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ucmVtb3ZlTm90ZVxuICAgIH1cbiAgfSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTMyZDRlOTVhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzJkNGU5NWFcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL211c2lxdWUudnVlXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
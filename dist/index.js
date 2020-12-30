(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.datavLibs = factory(global.vue));
}(this, (function (vue) { 'use strict';

  var script = {
    //svg组件库
    name: "SimpleSvg",
    mounted: function mounted() {
      var path = document.querySelector('#google');
      console.log(path.getTotalLength());
    }
  };

  var _withId = /*#__PURE__*/vue.withScopeId("data-v-790c5f55");

  vue.pushScopeId("data-v-790c5f55");

  var _hoisted_1 = {
    width: "0",
    height: "0"
  };

  var _hoisted_2 = /*#__PURE__*/vue.createVNode("defs", null, [/*#__PURE__*/vue.createVNode("symbol", {
    id: "apple",
    viewBox: "0,0,100,100"
  }, [/*#__PURE__*/vue.createVNode("circle", {
    r: "5",
    cx: "10",
    cy: "10",
    fill: "currentColor"
  }), /*#__PURE__*/vue.createVNode("circle", {
    r: "5",
    cx: "10",
    cy: "30",
    fill: "currentColor"
  }), /*#__PURE__*/vue.createVNode("circle", {
    r: "5",
    cx: "10",
    cy: "50",
    fill: "currentColor"
  }), /*#__PURE__*/vue.createVNode("line", {
    stroke: "currentColor",
    x1: "30",
    y1: "10",
    x2: "90",
    y2: "10",
    "stroke-width": "8"
  }), /*#__PURE__*/vue.createVNode("line", {
    stroke: "currentColor",
    x1: "30",
    y1: "30",
    x2: "90",
    y2: "30",
    "stroke-width": "8"
  }), /*#__PURE__*/vue.createVNode("line", {
    stroke: "currentColor",
    x1: "30",
    y1: "50",
    x2: "90",
    y2: "50",
    "stroke-width": "8"
  })]), /*#__PURE__*/vue.createVNode("symbol", {
    id: "player",
    viewBox: "0,0,100,100"
  }, [/*#__PURE__*/vue.createVNode("polyline", {
    points: " 20 10, 80 50,20,90",
    fill: "currentColor"
  })]), /*#__PURE__*/vue.createVNode("symbol", {
    id: "left",
    viewBox: "0,0,100,100"
  }, [/*#__PURE__*/vue.createVNode("polyline", {
    points: " 20 10, 80 50,20,90",
    stroke: "currentColor",
    fill: "transparent"
  })]), /*#__PURE__*/vue.createVNode("symbol", {
    id: "circleProcess",
    viewBox: "0,0,100,100"
  }, [/*#__PURE__*/vue.createVNode("circle", {
    cx: "50",
    cy: "50",
    r: "45",
    "stroke-width": "2",
    fill: "none",
    stroke: "#d1d3d7"
  }), /*#__PURE__*/vue.createVNode("circle", {
    cx: "50",
    cy: "50",
    r: "45",
    stroke: "currentColor",
    "stroke-width": "2",
    "class": "circle",
    fill: "none"
  })]), /*#__PURE__*/vue.createVNode("symbol", {
    id: "logo",
    viewBox: "0 0 1024 1024"
  }, [/*#__PURE__*/vue.createVNode("path", {
    id: "google",
    d: "M680.97024 343.06048A238.26432 238.26432 0 0 0 512 273.05984c-131.93216 0-238.92992 106.97728-238.92992 238.92992S380.06784 750.94016 512 750.94016c120.29952 0 219.5968-89.05728 236.19584-204.81024H512v-68.27008h307.2v34.12992a313.1392 313.1392 0 0 1-1.9968 34.14016C800.2048 699.74016 670.12608 819.21024 512 819.21024c-169.66656 0-307.2-137.53344-307.2-307.22048 0-169.64608 137.53344-307.2 307.2-307.2 84.82816 0 161.62816 34.39616 217.23136 89.99936l-48.26112 48.27136z",
    "p-id": "2141"
  })])], -1
  /* HOISTED */
  );

  vue.popScopeId();

  var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("svg", _hoisted_1, [_hoisted_2]);
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "@keyframes circleProcess-790c5f55 {\n  from {\n    stroke-dasharray: 0 283;\n  }\n  to {\n    stroke-dasharray: 283 0;\n  }\n}\n.circle[data-v-790c5f55] {\n  animation: circleProcess-790c5f55 5s linear;\n}\n\n@keyframes logoProcess-790c5f55 {\n  0% {\n    fill: white;\n    stroke: #333;\n    stroke-width: 5;\n    stroke-dasharray: 3682;\n    stroke-dashoffset: 3682;\n  }\n  50% {\n    fill: white;\n    stroke: #333;\n    stroke-width: 5;\n    stroke-dasharray: 3682;\n    stroke-dashoffset: 0;\n  }\n  75% {\n    fill: red;\n    stroke: white;\n    stroke-width: 0;\n    stroke-dasharray: 3682;\n    stroke-dashoffset: 0;\n  }\n  100% {\n    fill: blue;\n    stroke-width: 0;\n    stroke: white;\n    stroke-dasharray: 3682;\n    stroke-dashoffset: 0;\n  }\n}\n#google[data-v-790c5f55] {\n  animation: logoProcess-790c5f55 10s linear forwards;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-790c5f55";
  script.__file = "src/components/SimpleSvg/index.vue";

  function SimpleSvgTest (Vue) {
    Vue.component(script.name, script);
  }

  var script$1 = {
    //!$attrs 表示没有在props接受的属性v-bind传; 用v-on 传给子组件 v-on=$listeners 表示父组件监听的事件留给子组件去触发
    //给svg 加cueentColor 而不是在引入的svg元素加 这样也是也可的 一般是在元素加 现在因为元素用IconFont是不带fill属性的 所以在svg这里加
    name: 'Icon',
    props: {
      name: String,
      prefix: {
        type: String,
        "default": 'icon'
      }
    },
    setup: function setup(ctx) {
      var iconName = vue.computed(function () {
        return "#".concat(ctx.prefix).concat(ctx.name);
      });
      return {
        iconName: iconName
      };
    }
  };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("svg", vue.mergeProps(_ctx.$attrs, {
      fill: "currentColor"
    }), [vue.createVNode("use", {
      href: $setup.iconName
    }, null, 8
    /* PROPS */
    , ["href"])], 16
    /* FULL_PROPS */
    );
  }

  var css_248z$1 = "\r\n";
  styleInject(css_248z$1);

  script$1.render = render$1;
  script$1.__file = "src/components/Icon/index.vue";

  function _Icon (Vue) {
    Vue.component(script$1.name, script$1);
  }

  var script$2 = {
    name: 'SvgTransform',

    /* mounted () {
      console.log('xxx')
      let path = document.querySelector('.logo')
      let length = path.getTotalLength()
      console.log(length);
    }, */
    setup: function setup() {}
  };

  var _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-7da5521b");

  vue.pushScopeId("data-v-7da5521b");

  var _hoisted_1$1 = {
    "class": "container"
  };

  var _hoisted_2$1 = /*#__PURE__*/vue.createVNode("div", {
    id: "svg"
  }, [/*#__PURE__*/vue.createVNode("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 400 200"
  }, [/*#__PURE__*/vue.createVNode("rect", {
    x: "0",
    y: "0",
    width: "200",
    height: "100",
    stroke: "currentColor",
    transform: "rotate(10) skewX(10) translate(50 10)",
    fill: "transparent"
  })])], -1
  /* HOISTED */
  );

  vue.popScopeId();

  var render$2 = /*#__PURE__*/_withId$1(function (_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [_hoisted_2$1]);
  });

  var css_248z$2 = "#svg[data-v-7da5521b] {\n  color: red;\n  width: 400px;\n  height: 400px;\n}";
  styleInject(css_248z$2);

  script$2.render = render$2;
  script$2.__scopeId = "data-v-7da5521b";
  script$2.__file = "src/components/SvgTransform/index.vue";

  function _SvgTransform (Vue) {
    Vue.component(script$2.name, script$2);
  }

  var script$3 = {};

  var _hoisted_1$2 = /*#__PURE__*/vue.createVNode("svg", {
    width: "200",
    height: "200"
  }, [/*#__PURE__*/vue.createVNode("circle", {
    cx: "0",
    cy: "0",
    r: "50",
    fill: "red"
  }, [/*#__PURE__*/vue.createVNode("set", {
    attributeName: "cx",
    to: "50",
    begin: "1s",
    attributeType: "XML"
  }), /*#__PURE__*/vue.createTextVNode(". "), /*#__PURE__*/vue.createVNode("animate", {
    attributeName: "fill",
    attributeType: "XML",
    dur: "5s",
    from: "red",
    to: "blue",
    fill: "freeze"
  }), /*#__PURE__*/vue.createVNode("animateTransform", {
    attributeName: "transfrom",
    type: "scale",
    attributeType: "XML",
    fill: "freeze",
    begin: "0",
    from: "1",
    to: "2",
    dur: "5s"
  })])], -1
  /* HOISTED */
  );

  var _hoisted_2$2 = /*#__PURE__*/vue.createVNode("svg", {
    width: "200",
    height: "200"
  }, [/*#__PURE__*/vue.createVNode("circle", {
    cx: "10",
    cy: "10",
    r: "10",
    fill: "red"
  }, [/*#__PURE__*/vue.createVNode("animateMotion", {
    path: "M 10 10 L 180 10 L 180 180 L 10 180 Z ",
    rotate: "0",
    dur: "5s"
  })])], -1
  /* HOISTED */
  );

  var _hoisted_3 = /*#__PURE__*/vue.createVNode("svg", {
    width: "200",
    height: "200"
  }, [/*#__PURE__*/vue.createVNode("circle", {
    cx: "10",
    cy: "10",
    r: "10"
  }, [/*#__PURE__*/vue.createVNode("animateMotion", {
    path: "M 10 10 L 180 10 L 180 180 L 10 180 Z ",
    rotate: "0",
    dur: "5s",
    fill: "freeze",
    id: "forward",
    begin: "0;back.end+0.5s"
  }), /*#__PURE__*/vue.createVNode("animateMotion", {
    path: "M 10 10 L 10 180 L 180 180 L 180 10 Z ",
    rotate: "0",
    dur: "5s",
    fill: "freeze",
    id: "back",
    begin: "forward.end + 0.5s"
  }), /*#__PURE__*/vue.createVNode("animate", {
    attributeName: "fill",
    from: "red",
    to: "blue",
    dur: "5s",
    fill: "freeze",
    attributeType: "XML",
    begin: "0;blue-to-red.end+0.2s",
    id: "red-to-blue"
  }), /*#__PURE__*/vue.createVNode("animate", {
    attributeName: "fill",
    from: "blue",
    to: "red",
    dur: "5s",
    fill: "freeze",
    attributeType: "XML",
    begin: "red-to-blue.end+0.2s",
    id: "blue-to-end"
  })])], -1
  /* HOISTED */
  );

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", null, [_hoisted_1$2, _hoisted_2$2, _hoisted_3]);
  }

  var css_248z$3 = "\r\n";
  styleInject(css_248z$3);

  script$3.render = render$3;
  script$3.__file = "src/components/SmlSvg/index.vue";

  function index(Vue) {
    Vue.component('SmlSvg', script$3);
  }

  var script$4 = {
    name: 'Loading',
    props: {
      outColor: {
        type: String,
        "default": '#3be6cb'
      },
      innerColor: {
        type: String,
        "default": '#02bcfe'
      },
      dur: {
        type: Number,
        "default": 2
      }
    },
    setup: function setup(ctx) {
      var outValues = vue.computed(function () {
        return "".concat(ctx.outColor, ";").concat(ctx.innerColor, ";").concat(ctx.outColor);
      });
      var innerValues = vue.computed(function () {
        return "".concat(ctx.innerColor, ";").concat(ctx.outColor, ";").concat(ctx.innerColor);
      });
      return {
        outValues: outValues,
        innerValues: innerValues
      };
    }
  };

  var _hoisted_1$3 = {
    style: {
      width: '100%',
      height: '100%'
    }
  };
  var _hoisted_2$3 = {
    width: "100%",
    height: "100%",
    viewBox: "0 0 50 50",
    preserveAspectRatio: "xMidYMid meet"
  };
  var _hoisted_3$1 = {
    "class": "content",
    style: {
      "height": "20px"
    }
  };
  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("div", _hoisted_1$3, [(vue.openBlock(), vue.createBlock("svg", _hoisted_2$3, [vue.createVNode("circle", {
      fill: "white",
      cx: "25",
      cy: "25",
      r: "22",
      "stroke-width": "3",
      stroke: $props.outColor,
      "stroke-dasharray": "34",
      "stroke-linecap": "round"
    }, [vue.createVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      values: "0 25 25;360 25 25",
      dur: "".concat($props.dur, "s"),
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , ["dur"]), vue.createVNode("animate", {
      attributeName: "stroke",
      values: $props.innerColor,
      dur: "".concat($props.dur * 2, "s"),
      repeatCount: "indefinite",
      attributeType: "XML"
    }, null, 8
    /* PROPS */
    , ["values", "dur"])], 8
    /* PROPS */
    , ["stroke"]), vue.createVNode("circle", {
      fill: "white",
      cx: "25",
      cy: "25",
      r: "12",
      "stroke-width": "3",
      stroke: $props.innerColor,
      "stroke-dasharray": "19",
      "stroke-linecap": "round"
    }, [vue.createVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      values: "360 25 25;0 25 25",
      dur: "".concat($props.dur, "s"),
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , ["dur"]), vue.createVNode("animate", {
      attributeName: "stroke",
      values: "#02bcfe;#3be6cb;#02bcfe",
      dur: "".concat($props.dur * 2, "s"),
      repeatCount: "indefinite",
      attributeType: "XML"
    }, null, 8
    /* PROPS */
    , ["dur"])], 8
    /* PROPS */
    , ["stroke"])])), vue.createVNode("div", _hoisted_3$1, [vue.renderSlot(_ctx.$slots, "default")])]);
  }

  var css_248z$4 = "\r\n";
  styleInject(css_248z$4);

  script$4.render = render$4;
  script$4.__file = "src/components/Loading/index.vue";

  function Loading (Vue) {
    Vue.component(script$4.name, script$4);
  }

  var script$5 = {
    name: 'FlyBox'
  };

  var _hoisted_1$4 = {
    width: "400",
    height: "400"
  };

  var _hoisted_2$4 = /*#__PURE__*/vue.createVNode("defs", null, [/*#__PURE__*/vue.createVNode("mask", {
    id: "mask"
  }, [/*#__PURE__*/vue.createVNode("radialGradient", {
    fx: "100%",
    fy: "50%",
    cx: "50%",
    cy: "50%",
    r: "50%",
    id: "radial"
  }, [/*#__PURE__*/vue.createVNode("stop", {
    offset: "0%",
    "stop-color": "#fff",
    "stop-opacity": "1"
  }), /*#__PURE__*/vue.createVNode("stop", {
    offset: "100%",
    "stop-color": "#fff",
    "stop-opacity": "0"
  })]), /*#__PURE__*/vue.createVNode("circle", {
    cx: "0",
    cy: "0",
    r: "200",
    fill: "url(#radial)"
  }, [/*#__PURE__*/vue.createVNode("animateMotion", {
    dur: "3s",
    path: "M 5 5 L 395 5 L 395 395 L 5 395 Z",
    repeatCount: "indefinite",
    rotate: "0"
  })])])], -1
  /* HOISTED */
  );

  var _hoisted_3$2 = /*#__PURE__*/vue.createVNode("path", {
    d: "M 5 5 L 395 5 L 395 395 L 5 395 Z",
    stroke: "#235fa7",
    "stroke-width": "1",
    fill: "white"
  }, null, -1
  /* HOISTED */
  );

  var _hoisted_4 = /*#__PURE__*/vue.createVNode("path", {
    d: "M 5 5 L 395 5 L 395 395 L 5 395 Z",
    stroke: "#4fd2dd",
    "stroke-width": "3",
    mask: "url(#mask)",
    fill: "white"
  }, null, -1
  /* HOISTED */
  );

  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock("svg", _hoisted_1$4, [_hoisted_2$4, _hoisted_3$2, _hoisted_4]);
  }

  var css_248z$5 = "\r\n";
  styleInject(css_248z$5);

  script$5.render = render$5;
  script$5.__file = "src/components/FlyBox/index.vue";

  function FlyBox (Vue) {
    Vue.component(script$5.name, script$5);
  }

  function index$1(vue) {
    vue.use(SimpleSvgTest);
    vue.use(_Icon);
    vue.use(_SvgTransform);
    vue.use(index);
    vue.use(Loading);
    vue.use(FlyBox);
  }

  return index$1;

})));

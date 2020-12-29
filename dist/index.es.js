import { ref, openBlock, createBlock, createVNode, toDisplayString, computed, mergeProps } from 'vue';

var a = Math.floor(Math.random() * 10);
var b = Math.floor(Math.random() * 100);
function random(base) {
  if (base && base % 1 === 0) {
    return Math.floor(Math.random() * base);
  } else {
    return 0;
  }
}

var script = {
  name: 'TestComponent',
  setup: function setup() {
    var test = 'bang';
    var count = ref(1);

    var add = function add() {
      console.log(1);
      count.value++;
    };

    return {
      test: test,
      count: count,
      add: add
    };
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [createVNode("div", null, toDisplayString($setup.test), 1
  /* TEXT */
  ), createVNode("div", null, toDisplayString($setup.count), 1
  /* TEXT */
  ), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.add && $setup.add.apply($setup, arguments);
    })
  }, "加")]);
}

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

var css_248z = "div {\n  color: red;\n}";
styleInject(css_248z);

script.render = render;
script.__file = "src/components/Test/Test.vue";

console.log(random(10), a, b);
/* console.log(jsonMes); */

/* Vue.component(testVue.name,testVue) */

var fun = function fun() {
  console.log('test babel');
};

fun();
function Test (Vue) {
  Vue.component(script.name, script);
}

var script$1 = {
  name: 'SimpleTest',
  setup: function setup() {
    var test = 'bang';
    var count = ref(1);

    var add = function add() {
      console.log(1);
      count.value++;
    };

    return {
      test: test,
      count: count,
      add: add
    };
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", null, [createVNode("div", null, toDisplayString($setup.test), 1
  /* TEXT */
  ), createVNode("div", null, toDisplayString($setup.count), 1
  /* TEXT */
  ), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.add && $setup.add.apply($setup, arguments);
    })
  }, "加")]);
}

var css_248z$1 = "div {\n  color: red;\n}";
styleInject(css_248z$1);

script$1.render = render$1;
script$1.__file = "src/components/Test2/Test2.vue";

console.log(random(10), a, b);
/* console.log(jsonMes); */

/* Vue.component(testVue.name,testVue) */

var fun$1 = function fun() {
  console.log('test babel');
};

fun$1();
function Test2 (Vue) {
  Vue.component(script$1.name, script$1);
}

var script$2 = {
  //svg组件库
  name: "SimpleSvg"
};

var _hoisted_1 = {
  width: "0",
  height: "0"
};

var _hoisted_2 = /*#__PURE__*/createVNode("defs", null, [/*#__PURE__*/createVNode("symbol", {
  id: "apple",
  viewBox: "0,0,100,100"
}, [/*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "10",
  cy: "10",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "10",
  cy: "30",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("circle", {
  r: "5",
  cx: "10",
  cy: "50",
  fill: "currentColor"
}), /*#__PURE__*/createVNode("line", {
  stroke: "currentColor",
  x1: "30",
  y1: "10",
  x2: "90",
  y2: "10",
  "stroke-width": "8"
}), /*#__PURE__*/createVNode("line", {
  stroke: "currentColor",
  x1: "30",
  y1: "30",
  x2: "90",
  y2: "30",
  "stroke-width": "8"
}), /*#__PURE__*/createVNode("line", {
  stroke: "currentColor",
  x1: "30",
  y1: "50",
  x2: "90",
  y2: "50",
  "stroke-width": "8"
})]), /*#__PURE__*/createVNode("symbol", {
  id: "player",
  viewBox: "0,0,100,100"
}, [/*#__PURE__*/createVNode("polyline", {
  points: " 20 10, 80 50,20,90",
  fill: "currentColor"
})]), /*#__PURE__*/createVNode("symbol", {
  id: "left",
  viewBox: "0,0,100,100"
}, [/*#__PURE__*/createVNode("polyline", {
  points: " 20 10, 80 50,20,90",
  stroke: "currentColor",
  fill: "transparent"
})])], -1
/* HOISTED */
);

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", _hoisted_1, [_hoisted_2]);
}

var css_248z$2 = "\r\n";
styleInject(css_248z$2);

script$2.render = render$2;
script$2.__file = "src/components/SimpleSvg/index.vue";

function SimpleSvgTest (Vue) {
  Vue.component(script$2.name, script$2);
}

var script$3 = {
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
    var iconName = computed(function () {
      return "#".concat(ctx.prefix).concat(ctx.name);
    });
    return {
      iconName: iconName
    };
  }
};

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("svg", mergeProps(_ctx.$attrs, {
    fill: "currentColor"
  }), [createVNode("use", {
    href: $setup.iconName
  }, null, 8
  /* PROPS */
  , ["href"])], 16
  /* FULL_PROPS */
  );
}

var css_248z$3 = "\r\n";
styleInject(css_248z$3);

script$3.render = render$3;
script$3.__file = "src/components/Icon/index.vue";

function _Icon (Vue) {
  Vue.component(script$3.name, script$3);
}

var TestComponent = Test;
var SimpleTest = Test2;
var SimpleSvg = SimpleSvgTest;
var Icon = _Icon;
function index(vue) {
  vue.use(Test);
  vue.use(SimpleTest);
}

export default index;
export { Icon, SimpleSvg, SimpleTest, TestComponent };

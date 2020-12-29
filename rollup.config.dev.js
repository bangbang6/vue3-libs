const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const json = require('rollup-plugin-json')
const {terser} = require('rollup-plugin-terser')
const babel = require('rollup-plugin-babel')
const commonjs  = require('rollup-plugin-commonjs')
const postcss  = require('rollup-plugin-postcss')
const inputPath = path.resolve(__dirname,'./src/index.js')
const outputPath = path.resolve(__dirname,'./dist/index.js')
const outputEsPath = path.resolve(__dirname,'./dist/index.es.js')

const vue = require('rollup-plugin-vue')

module.exports = {
  input:inputPath,
  output:[{
    file:outputPath,
    format:'umd',
    name:"datavLibs",
    globals: {
      vue: 'vue'
    }
  },{
    file:outputEsPath,
    format:'es',
    name:"datavLibs",
    globals: {
      vue: 'vue'
    }
  }],
  plugins:[
    vue(),
    resolve(),
    babel({
      exclude:"node_modules/**"
    }),
    //terser(),
    json(),
    commonjs(),
   
    postcss({
      plugins: []
    })
  ],
  external:['vue']
}
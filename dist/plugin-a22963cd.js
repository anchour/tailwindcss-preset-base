function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var createPlugin_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  function createPlugin(plugin, config) {
    return {
      handler: plugin,
      config
    };
  }

  createPlugin.withOptions = function (pluginFunction, configFunction = () => ({})) {
    const optionsFunction = function (options) {
      return {
        __options: options,
        handler: pluginFunction(options),
        config: configFunction(options)
      };
    };

    optionsFunction.__isOptionsFunction = true; // Expose plugin dependencies so that `object-hash` returns a different
    // value if anything here changes, to ensure a rebuild is triggered.

    optionsFunction.__pluginFunction = pluginFunction;
    optionsFunction.__configFunction = configFunction;
    return optionsFunction;
  };

  var _default = createPlugin;
  exports.default = _default;
});

var plugin = (createPlugin_1.__esModule ? createPlugin_1 : {
  default: createPlugin_1
}).default;

export { plugin as p };

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const DelegatedModuleFactoryPlugin = require("./DelegatedModuleFactoryPlugin");
const DelegatedSourceDependency = require("./dependencies/DelegatedSourceDependency");

/** @typedef {import("./Compiler")} Compiler */

class DelegatedPlugin {
	constructor(options) {
		this.options = options;
	}

	/**
	 * Apply the plugin
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		compiler.hooks.compilation.tap(
			"DelegatedPlugin",
			(compilation, { normalModuleFactory }) => {
				compilation.dependencyFactories.set(
					DelegatedSourceDependency,
					normalModuleFactory
				);
			}
		);

		compiler.hooks.compile.tap("DelegatedPlugin", ({ normalModuleFactory }) => {
			debugger
			new DelegatedModuleFactoryPlugin({
				associatedObjectForCache: compiler.root,
				...this.options
			}).apply(normalModuleFactory);
		});
	}
}

module.exports = DelegatedPlugin;

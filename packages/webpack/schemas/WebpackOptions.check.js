/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const e = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
(module.exports = we), (module.exports.default = we);
const t = {
		amd: { $ref: "#/definitions/Amd" },
		bail: { $ref: "#/definitions/Bail" },
		cache: { $ref: "#/definitions/CacheOptions" },
		context: { $ref: "#/definitions/Context" },
		dependencies: { $ref: "#/definitions/Dependencies" },
		devServer: { $ref: "#/definitions/DevServer" },
		devtool: { $ref: "#/definitions/DevTool" },
		entry: { $ref: "#/definitions/Entry" },
		experiments: { $ref: "#/definitions/Experiments" },
		externals: { $ref: "#/definitions/Externals" },
		externalsPresets: { $ref: "#/definitions/ExternalsPresets" },
		externalsType: { $ref: "#/definitions/ExternalsType" },
		ignoreWarnings: { $ref: "#/definitions/IgnoreWarnings" },
		infrastructureLogging: { $ref: "#/definitions/InfrastructureLogging" },
		loader: { $ref: "#/definitions/Loader" },
		mode: { $ref: "#/definitions/Mode" },
		module: { $ref: "#/definitions/ModuleOptions" },
		name: { $ref: "#/definitions/Name" },
		node: { $ref: "#/definitions/Node" },
		optimization: { $ref: "#/definitions/Optimization" },
		output: { $ref: "#/definitions/Output" },
		parallelism: { $ref: "#/definitions/Parallelism" },
		performance: { $ref: "#/definitions/Performance" },
		plugins: { $ref: "#/definitions/Plugins" },
		profile: { $ref: "#/definitions/Profile" },
		recordsInputPath: { $ref: "#/definitions/RecordsInputPath" },
		recordsOutputPath: { $ref: "#/definitions/RecordsOutputPath" },
		recordsPath: { $ref: "#/definitions/RecordsPath" },
		resolve: { $ref: "#/definitions/Resolve" },
		resolveLoader: { $ref: "#/definitions/ResolveLoader" },
		snapshot: { $ref: "#/definitions/SnapshotOptions" },
		stats: { $ref: "#/definitions/StatsValue" },
		target: { $ref: "#/definitions/Target" },
		watch: { $ref: "#/definitions/Watch" },
		watchOptions: { $ref: "#/definitions/WatchOptions" }
	},
	n = Object.prototype.hasOwnProperty,
	r = {
		allowCollectingMemory: { type: "boolean" },
		buildDependencies: {
			type: "object",
			additionalProperties: {
				type: "array",
				items: { type: "string", minLength: 1 }
			}
		},
		cacheDirectory: { type: "string", absolutePath: !0 },
		cacheLocation: { type: "string", absolutePath: !0 },
		compression: { enum: [!1, "gzip", "brotli"] },
		hashAlgorithm: { type: "string" },
		idleTimeout: { type: "number", minimum: 0 },
		idleTimeoutAfterLargeChanges: { type: "number", minimum: 0 },
		idleTimeoutForInitialStore: { type: "number", minimum: 0 },
		immutablePaths: {
			type: "array",
			items: {
				anyOf: [
					{ instanceof: "RegExp" },
					{ type: "string", absolutePath: !0, minLength: 1 }
				]
			}
		},
		managedPaths: {
			type: "array",
			items: {
				anyOf: [
					{ instanceof: "RegExp" },
					{ type: "string", absolutePath: !0, minLength: 1 }
				]
			}
		},
		maxAge: { type: "number", minimum: 0 },
		maxMemoryGenerations: { type: "number", minimum: 0 },
		memoryCacheUnaffected: { type: "boolean" },
		name: { type: "string" },
		profile: { type: "boolean" },
		store: { enum: ["pack"] },
		type: { enum: ["filesystem"] },
		version: { type: "string" }
	};
function s(
	t,
	{
		instancePath: o = "",
		parentData: a,
		parentDataProperty: i,
		rootData: l = t
	} = {}
) {
	let p = null,
		u = 0;
	const f = u;
	let c = !1;
	const m = u;
	if (!1 !== t) {
		const e = { params: {} };
		null === p ? (p = [e]) : p.push(e), u++;
	}
	var y = m === u;
	if (((c = c || y), !c)) {
		const s = u;
		if (u == u)
			if (t && "object" == typeof t && !Array.isArray(t)) {
				let e;
				if (void 0 === t.type && (e = "type")) {
					const t = { params: { missingProperty: e } };
					null === p ? (p = [t]) : p.push(t), u++;
				} else {
					const e = u;
					for (const e in t)
						if (
							"cacheUnaffected" !== e &&
							"maxGenerations" !== e &&
							"type" !== e
						) {
							const t = { params: { additionalProperty: e } };
							null === p ? (p = [t]) : p.push(t), u++;
							break;
						}
					if (e === u) {
						if (void 0 !== t.cacheUnaffected) {
							const e = u;
							if ("boolean" != typeof t.cacheUnaffected) {
								const e = { params: { type: "boolean" } };
								null === p ? (p = [e]) : p.push(e), u++;
							}
							var h = e === u;
						} else h = !0;
						if (h) {
							if (void 0 !== t.maxGenerations) {
								let e = t.maxGenerations;
								const n = u;
								if (u === n)
									if ("number" == typeof e) {
										if (e < 1 || isNaN(e)) {
											const e = { params: { comparison: ">=", limit: 1 } };
											null === p ? (p = [e]) : p.push(e), u++;
										}
									} else {
										const e = { params: { type: "number" } };
										null === p ? (p = [e]) : p.push(e), u++;
									}
								h = n === u;
							} else h = !0;
							if (h)
								if (void 0 !== t.type) {
									const e = u;
									if ("memory" !== t.type) {
										const e = { params: {} };
										null === p ? (p = [e]) : p.push(e), u++;
									}
									h = e === u;
								} else h = !0;
						}
					}
				}
			} else {
				const e = { params: { type: "object" } };
				null === p ? (p = [e]) : p.push(e), u++;
			}
		if (((y = s === u), (c = c || y), !c)) {
			const s = u;
			if (u == u)
				if (t && "object" == typeof t && !Array.isArray(t)) {
					let s;
					if (void 0 === t.type && (s = "type")) {
						const e = { params: { missingProperty: s } };
						null === p ? (p = [e]) : p.push(e), u++;
					} else {
						const s = u;
						for (const e in t)
							if (!n.call(r, e)) {
								const t = { params: { additionalProperty: e } };
								null === p ? (p = [t]) : p.push(t), u++;
								break;
							}
						if (s === u) {
							if (void 0 !== t.allowCollectingMemory) {
								const e = u;
								if ("boolean" != typeof t.allowCollectingMemory) {
									const e = { params: { type: "boolean" } };
									null === p ? (p = [e]) : p.push(e), u++;
								}
								var d = e === u;
							} else d = !0;
							if (d) {
								if (void 0 !== t.buildDependencies) {
									let e = t.buildDependencies;
									const n = u;
									if (u === n)
										if (e && "object" == typeof e && !Array.isArray(e))
											for (const t in e) {
												let n = e[t];
												const r = u;
												if (u === r)
													if (Array.isArray(n)) {
														const e = n.length;
														for (let t = 0; t < e; t++) {
															let e = n[t];
															const r = u;
															if (u === r)
																if ("string" == typeof e) {
																	if (e.length < 1) {
																		const e = { params: {} };
																		null === p ? (p = [e]) : p.push(e), u++;
																	}
																} else {
																	const e = { params: { type: "string" } };
																	null === p ? (p = [e]) : p.push(e), u++;
																}
															if (r !== u) break;
														}
													} else {
														const e = { params: { type: "array" } };
														null === p ? (p = [e]) : p.push(e), u++;
													}
												if (r !== u) break;
											}
										else {
											const e = { params: { type: "object" } };
											null === p ? (p = [e]) : p.push(e), u++;
										}
									d = n === u;
								} else d = !0;
								if (d) {
									if (void 0 !== t.cacheDirectory) {
										let n = t.cacheDirectory;
										const r = u;
										if (u === r)
											if ("string" == typeof n) {
												if (n.includes("!") || !0 !== e.test(n)) {
													const e = { params: {} };
													null === p ? (p = [e]) : p.push(e), u++;
												}
											} else {
												const e = { params: { type: "string" } };
												null === p ? (p = [e]) : p.push(e), u++;
											}
										d = r === u;
									} else d = !0;
									if (d) {
										if (void 0 !== t.cacheLocation) {
											let n = t.cacheLocation;
											const r = u;
											if (u === r)
												if ("string" == typeof n) {
													if (n.includes("!") || !0 !== e.test(n)) {
														const e = { params: {} };
														null === p ? (p = [e]) : p.push(e), u++;
													}
												} else {
													const e = { params: { type: "string" } };
													null === p ? (p = [e]) : p.push(e), u++;
												}
											d = r === u;
										} else d = !0;
										if (d) {
											if (void 0 !== t.compression) {
												let e = t.compression;
												const n = u;
												if (!1 !== e && "gzip" !== e && "brotli" !== e) {
													const e = { params: {} };
													null === p ? (p = [e]) : p.push(e), u++;
												}
												d = n === u;
											} else d = !0;
											if (d) {
												if (void 0 !== t.hashAlgorithm) {
													const e = u;
													if ("string" != typeof t.hashAlgorithm) {
														const e = { params: { type: "string" } };
														null === p ? (p = [e]) : p.push(e), u++;
													}
													d = e === u;
												} else d = !0;
												if (d) {
													if (void 0 !== t.idleTimeout) {
														let e = t.idleTimeout;
														const n = u;
														if (u === n)
															if ("number" == typeof e) {
																if (e < 0 || isNaN(e)) {
																	const e = {
																		params: { comparison: ">=", limit: 0 }
																	};
																	null === p ? (p = [e]) : p.push(e), u++;
																}
															} else {
																const e = { params: { type: "number" } };
																null === p ? (p = [e]) : p.push(e), u++;
															}
														d = n === u;
													} else d = !0;
													if (d) {
														if (void 0 !== t.idleTimeoutAfterLargeChanges) {
															let e = t.idleTimeoutAfterLargeChanges;
															const n = u;
															if (u === n)
																if ("number" == typeof e) {
																	if (e < 0 || isNaN(e)) {
																		const e = {
																			params: { comparison: ">=", limit: 0 }
																		};
																		null === p ? (p = [e]) : p.push(e), u++;
																	}
																} else {
																	const e = { params: { type: "number" } };
																	null === p ? (p = [e]) : p.push(e), u++;
																}
															d = n === u;
														} else d = !0;
														if (d) {
															if (void 0 !== t.idleTimeoutForInitialStore) {
																let e = t.idleTimeoutForInitialStore;
																const n = u;
																if (u === n)
																	if ("number" == typeof e) {
																		if (e < 0 || isNaN(e)) {
																			const e = {
																				params: { comparison: ">=", limit: 0 }
																			};
																			null === p ? (p = [e]) : p.push(e), u++;
																		}
																	} else {
																		const e = { params: { type: "number" } };
																		null === p ? (p = [e]) : p.push(e), u++;
																	}
																d = n === u;
															} else d = !0;
															if (d) {
																if (void 0 !== t.immutablePaths) {
																	let n = t.immutablePaths;
																	const r = u;
																	if (u === r)
																		if (Array.isArray(n)) {
																			const t = n.length;
																			for (let r = 0; r < t; r++) {
																				let t = n[r];
																				const s = u,
																					o = u;
																				let a = !1;
																				const i = u;
																				if (!(t instanceof RegExp)) {
																					const e = { params: {} };
																					null === p ? (p = [e]) : p.push(e),
																						u++;
																				}
																				var g = i === u;
																				if (((a = a || g), !a)) {
																					const n = u;
																					if (u === n)
																						if ("string" == typeof t) {
																							if (
																								t.includes("!") ||
																								!0 !== e.test(t)
																							) {
																								const e = { params: {} };
																								null === p
																									? (p = [e])
																									: p.push(e),
																									u++;
																							} else if (t.length < 1) {
																								const e = { params: {} };
																								null === p
																									? (p = [e])
																									: p.push(e),
																									u++;
																							}
																						} else {
																							const e = {
																								params: { type: "string" }
																							};
																							null === p
																								? (p = [e])
																								: p.push(e),
																								u++;
																						}
																					(g = n === u), (a = a || g);
																				}
																				if (a)
																					(u = o),
																						null !== p &&
																							(o ? (p.length = o) : (p = null));
																				else {
																					const e = { params: {} };
																					null === p ? (p = [e]) : p.push(e),
																						u++;
																				}
																				if (s !== u) break;
																			}
																		} else {
																			const e = { params: { type: "array" } };
																			null === p ? (p = [e]) : p.push(e), u++;
																		}
																	d = r === u;
																} else d = !0;
																if (d) {
																	if (void 0 !== t.managedPaths) {
																		let n = t.managedPaths;
																		const r = u;
																		if (u === r)
																			if (Array.isArray(n)) {
																				const t = n.length;
																				for (let r = 0; r < t; r++) {
																					let t = n[r];
																					const s = u,
																						o = u;
																					let a = !1;
																					const i = u;
																					if (!(t instanceof RegExp)) {
																						const e = { params: {} };
																						null === p ? (p = [e]) : p.push(e),
																							u++;
																					}
																					var b = i === u;
																					if (((a = a || b), !a)) {
																						const n = u;
																						if (u === n)
																							if ("string" == typeof t) {
																								if (
																									t.includes("!") ||
																									!0 !== e.test(t)
																								) {
																									const e = { params: {} };
																									null === p
																										? (p = [e])
																										: p.push(e),
																										u++;
																								} else if (t.length < 1) {
																									const e = { params: {} };
																									null === p
																										? (p = [e])
																										: p.push(e),
																										u++;
																								}
																							} else {
																								const e = {
																									params: { type: "string" }
																								};
																								null === p
																									? (p = [e])
																									: p.push(e),
																									u++;
																							}
																						(b = n === u), (a = a || b);
																					}
																					if (a)
																						(u = o),
																							null !== p &&
																								(o
																									? (p.length = o)
																									: (p = null));
																					else {
																						const e = { params: {} };
																						null === p ? (p = [e]) : p.push(e),
																							u++;
																					}
																					if (s !== u) break;
																				}
																			} else {
																				const e = { params: { type: "array" } };
																				null === p ? (p = [e]) : p.push(e), u++;
																			}
																		d = r === u;
																	} else d = !0;
																	if (d) {
																		if (void 0 !== t.maxAge) {
																			let e = t.maxAge;
																			const n = u;
																			if (u === n)
																				if ("number" == typeof e) {
																					if (e < 0 || isNaN(e)) {
																						const e = {
																							params: {
																								comparison: ">=",
																								limit: 0
																							}
																						};
																						null === p ? (p = [e]) : p.push(e),
																							u++;
																					}
																				} else {
																					const e = {
																						params: { type: "number" }
																					};
																					null === p ? (p = [e]) : p.push(e),
																						u++;
																				}
																			d = n === u;
																		} else d = !0;
																		if (d) {
																			if (void 0 !== t.maxMemoryGenerations) {
																				let e = t.maxMemoryGenerations;
																				const n = u;
																				if (u === n)
																					if ("number" == typeof e) {
																						if (e < 0 || isNaN(e)) {
																							const e = {
																								params: {
																									comparison: ">=",
																									limit: 0
																								}
																							};
																							null === p
																								? (p = [e])
																								: p.push(e),
																								u++;
																						}
																					} else {
																						const e = {
																							params: { type: "number" }
																						};
																						null === p ? (p = [e]) : p.push(e),
																							u++;
																					}
																				d = n === u;
																			} else d = !0;
																			if (d) {
																				if (
																					void 0 !== t.memoryCacheUnaffected
																				) {
																					const e = u;
																					if (
																						"boolean" !=
																						typeof t.memoryCacheUnaffected
																					) {
																						const e = {
																							params: { type: "boolean" }
																						};
																						null === p ? (p = [e]) : p.push(e),
																							u++;
																					}
																					d = e === u;
																				} else d = !0;
																				if (d) {
																					if (void 0 !== t.name) {
																						const e = u;
																						if ("string" != typeof t.name) {
																							const e = {
																								params: { type: "string" }
																							};
																							null === p
																								? (p = [e])
																								: p.push(e),
																								u++;
																						}
																						d = e === u;
																					} else d = !0;
																					if (d) {
																						if (void 0 !== t.profile) {
																							const e = u;
																							if (
																								"boolean" != typeof t.profile
																							) {
																								const e = {
																									params: { type: "boolean" }
																								};
																								null === p
																									? (p = [e])
																									: p.push(e),
																									u++;
																							}
																							d = e === u;
																						} else d = !0;
																						if (d) {
																							if (void 0 !== t.store) {
																								const e = u;
																								if ("pack" !== t.store) {
																									const e = { params: {} };
																									null === p
																										? (p = [e])
																										: p.push(e),
																										u++;
																								}
																								d = e === u;
																							} else d = !0;
																							if (d) {
																								if (void 0 !== t.type) {
																									const e = u;
																									if ("filesystem" !== t.type) {
																										const e = { params: {} };
																										null === p
																											? (p = [e])
																											: p.push(e),
																											u++;
																									}
																									d = e === u;
																								} else d = !0;
																								if (d)
																									if (void 0 !== t.version) {
																										const e = u;
																										if (
																											"string" !=
																											typeof t.version
																										) {
																											const e = {
																												params: {
																													type: "string"
																												}
																											};
																											null === p
																												? (p = [e])
																												: p.push(e),
																												u++;
																										}
																										d = e === u;
																									} else d = !0;
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				} else {
					const e = { params: { type: "object" } };
					null === p ? (p = [e]) : p.push(e), u++;
				}
			(y = s === u), (c = c || y);
		}
	}
	if (!c) {
		const e = { params: {} };
		return null === p ? (p = [e]) : p.push(e), u++, (s.errors = p), !1;
	}
	return (
		(u = f),
		null !== p && (f ? (p.length = f) : (p = null)),
		(s.errors = p),
		0 === u
	);
}
function o(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: a = e
	} = {}
) {
	let i = null,
		l = 0;
	const p = l;
	let u = !1;
	const f = l;
	if (!0 !== e) {
		const e = { params: {} };
		null === i ? (i = [e]) : i.push(e), l++;
	}
	var c = f === l;
	if (((u = u || c), !u)) {
		const o = l;
		s(e, {
			instancePath: t,
			parentData: n,
			parentDataProperty: r,
			rootData: a
		}) || ((i = null === i ? s.errors : i.concat(s.errors)), (l = i.length)),
			(c = o === l),
			(u = u || c);
	}
	if (!u) {
		const e = { params: {} };
		return null === i ? (i = [e]) : i.push(e), l++, (o.errors = i), !1;
	}
	return (
		(l = p),
		null !== i && (p ? (i.length = p) : (i = null)),
		(o.errors = i),
		0 === l
	);
}
const a = {
	asyncChunks: { type: "boolean" },
	baseUri: { type: "string" },
	chunkLoading: { $ref: "#/definitions/ChunkLoading" },
	dependOn: {
		anyOf: [
			{
				type: "array",
				items: { type: "string", minLength: 1 },
				minItems: 1,
				uniqueItems: !0
			},
			{ type: "string", minLength: 1 }
		]
	},
	filename: { $ref: "#/definitions/EntryFilename" },
	import: { $ref: "#/definitions/EntryItem" },
	layer: { $ref: "#/definitions/Layer" },
	library: { $ref: "#/definitions/LibraryOptions" },
	publicPath: { $ref: "#/definitions/PublicPath" },
	runtime: { $ref: "#/definitions/EntryRuntime" },
	wasmLoading: { $ref: "#/definitions/WasmLoading" }
};
function i(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const l = a;
	let p = !1;
	const u = a;
	if (!1 !== e) {
		const e = { params: {} };
		null === o ? (o = [e]) : o.push(e), a++;
	}
	var f = u === a;
	if (((p = p || f), !p)) {
		const t = a,
			n = a;
		let r = !1;
		const s = a;
		if (
			"jsonp" !== e &&
			"import-scripts" !== e &&
			"require" !== e &&
			"async-node" !== e &&
			"import" !== e
		) {
			const e = { params: {} };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		var c = s === a;
		if (((r = r || c), !r)) {
			const t = a;
			if ("string" != typeof e) {
				const e = { params: { type: "string" } };
				null === o ? (o = [e]) : o.push(e), a++;
			}
			(c = t === a), (r = r || c);
		}
		if (r) (a = n), null !== o && (n ? (o.length = n) : (o = null));
		else {
			const e = { params: {} };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		(f = t === a), (p = p || f);
	}
	if (!p) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (i.errors = o), !1;
	}
	return (
		(a = l),
		null !== o && (l ? (o.length = l) : (o = null)),
		(i.errors = o),
		0 === a
	);
}
function l(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	const p = i;
	let u = !1,
		f = null;
	const c = i,
		m = i;
	let y = !1;
	const h = i;
	if (i === h)
		if ("string" == typeof t) {
			if (t.includes("!") || !1 !== e.test(t)) {
				const e = { params: {} };
				null === a ? (a = [e]) : a.push(e), i++;
			} else if (t.length < 1) {
				const e = { params: {} };
				null === a ? (a = [e]) : a.push(e), i++;
			}
		} else {
			const e = { params: { type: "string" } };
			null === a ? (a = [e]) : a.push(e), i++;
		}
	var d = h === i;
	if (((y = y || d), !y)) {
		const e = i;
		if (!(t instanceof Function)) {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		(d = e === i), (y = y || d);
	}
	if (y) (i = m), null !== a && (m ? (a.length = m) : (a = null));
	else {
		const e = { params: {} };
		null === a ? (a = [e]) : a.push(e), i++;
	}
	if ((c === i && ((u = !0), (f = 0)), !u)) {
		const e = { params: { passingSchemas: f } };
		return null === a ? (a = [e]) : a.push(e), i++, (l.errors = a), !1;
	}
	return (
		(i = p),
		null !== a && (p ? (a.length = p) : (a = null)),
		(l.errors = a),
		0 === i
	);
}
function p(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const u = a;
	if ("string" != typeof e) {
		const e = { params: { type: "string" } };
		null === o ? (o = [e]) : o.push(e), a++;
	}
	var f = u === a;
	if (((l = l || f), !l)) {
		const t = a;
		if (a == a)
			if (e && "object" == typeof e && !Array.isArray(e)) {
				const t = a;
				for (const t in e)
					if (
						"amd" !== t &&
						"commonjs" !== t &&
						"commonjs2" !== t &&
						"root" !== t
					) {
						const e = { params: { additionalProperty: t } };
						null === o ? (o = [e]) : o.push(e), a++;
						break;
					}
				if (t === a) {
					if (void 0 !== e.amd) {
						const t = a;
						if ("string" != typeof e.amd) {
							const e = { params: { type: "string" } };
							null === o ? (o = [e]) : o.push(e), a++;
						}
						var c = t === a;
					} else c = !0;
					if (c) {
						if (void 0 !== e.commonjs) {
							const t = a;
							if ("string" != typeof e.commonjs) {
								const e = { params: { type: "string" } };
								null === o ? (o = [e]) : o.push(e), a++;
							}
							c = t === a;
						} else c = !0;
						if (c) {
							if (void 0 !== e.commonjs2) {
								const t = a;
								if ("string" != typeof e.commonjs2) {
									const e = { params: { type: "string" } };
									null === o ? (o = [e]) : o.push(e), a++;
								}
								c = t === a;
							} else c = !0;
							if (c)
								if (void 0 !== e.root) {
									const t = a;
									if ("string" != typeof e.root) {
										const e = { params: { type: "string" } };
										null === o ? (o = [e]) : o.push(e), a++;
									}
									c = t === a;
								} else c = !0;
						}
					}
				}
			} else {
				const e = { params: { type: "object" } };
				null === o ? (o = [e]) : o.push(e), a++;
			}
		(f = t === a), (l = l || f);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (p.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(p.errors = o),
		0 === a
	);
}
function u(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (a === p)
		if (Array.isArray(e))
			if (e.length < 1) {
				const e = { params: { limit: 1 } };
				null === o ? (o = [e]) : o.push(e), a++;
			} else {
				const t = e.length;
				for (let n = 0; n < t; n++) {
					let t = e[n];
					const r = a;
					if (a === r)
						if ("string" == typeof t) {
							if (t.length < 1) {
								const e = { params: {} };
								null === o ? (o = [e]) : o.push(e), a++;
							}
						} else {
							const e = { params: { type: "string" } };
							null === o ? (o = [e]) : o.push(e), a++;
						}
					if (r !== a) break;
				}
			}
		else {
			const e = { params: { type: "array" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
	var f = p === a;
	if (((l = l || f), !l)) {
		const t = a;
		if (a === t)
			if ("string" == typeof e) {
				if (e.length < 1) {
					const e = { params: {} };
					null === o ? (o = [e]) : o.push(e), a++;
				}
			} else {
				const e = { params: { type: "string" } };
				null === o ? (o = [e]) : o.push(e), a++;
			}
		if (((f = t === a), (l = l || f), !l)) {
			const t = a;
			if (a == a)
				if (e && "object" == typeof e && !Array.isArray(e)) {
					const t = a;
					for (const t in e)
						if ("amd" !== t && "commonjs" !== t && "root" !== t) {
							const e = { params: { additionalProperty: t } };
							null === o ? (o = [e]) : o.push(e), a++;
							break;
						}
					if (t === a) {
						if (void 0 !== e.amd) {
							let t = e.amd;
							const n = a;
							if (a === n)
								if ("string" == typeof t) {
									if (t.length < 1) {
										const e = { params: {} };
										null === o ? (o = [e]) : o.push(e), a++;
									}
								} else {
									const e = { params: { type: "string" } };
									null === o ? (o = [e]) : o.push(e), a++;
								}
							var c = n === a;
						} else c = !0;
						if (c) {
							if (void 0 !== e.commonjs) {
								let t = e.commonjs;
								const n = a;
								if (a === n)
									if ("string" == typeof t) {
										if (t.length < 1) {
											const e = { params: {} };
											null === o ? (o = [e]) : o.push(e), a++;
										}
									} else {
										const e = { params: { type: "string" } };
										null === o ? (o = [e]) : o.push(e), a++;
									}
								c = n === a;
							} else c = !0;
							if (c)
								if (void 0 !== e.root) {
									let t = e.root;
									const n = a,
										r = a;
									let s = !1;
									const i = a;
									if (a === i)
										if (Array.isArray(t)) {
											const e = t.length;
											for (let n = 0; n < e; n++) {
												let e = t[n];
												const r = a;
												if (a === r)
													if ("string" == typeof e) {
														if (e.length < 1) {
															const e = { params: {} };
															null === o ? (o = [e]) : o.push(e), a++;
														}
													} else {
														const e = { params: { type: "string" } };
														null === o ? (o = [e]) : o.push(e), a++;
													}
												if (r !== a) break;
											}
										} else {
											const e = { params: { type: "array" } };
											null === o ? (o = [e]) : o.push(e), a++;
										}
									var m = i === a;
									if (((s = s || m), !s)) {
										const e = a;
										if (a === e)
											if ("string" == typeof t) {
												if (t.length < 1) {
													const e = { params: {} };
													null === o ? (o = [e]) : o.push(e), a++;
												}
											} else {
												const e = { params: { type: "string" } };
												null === o ? (o = [e]) : o.push(e), a++;
											}
										(m = e === a), (s = s || m);
									}
									if (s)
										(a = r), null !== o && (r ? (o.length = r) : (o = null));
									else {
										const e = { params: {} };
										null === o ? (o = [e]) : o.push(e), a++;
									}
									c = n === a;
								} else c = !0;
						}
					}
				} else {
					const e = { params: { type: "object" } };
					null === o ? (o = [e]) : o.push(e), a++;
				}
			(f = t === a), (l = l || f);
		}
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (u.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(u.errors = o),
		0 === a
	);
}
function f(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (f.errors = [{ params: { type: "object" } }]), !1;
		{
			let n;
			if (void 0 === e.type && (n = "type"))
				return (f.errors = [{ params: { missingProperty: n } }]), !1;
			{
				const n = a;
				for (const t in e)
					if (
						"auxiliaryComment" !== t &&
						"export" !== t &&
						"name" !== t &&
						"type" !== t &&
						"umdNamedDefine" !== t
					)
						return (f.errors = [{ params: { additionalProperty: t } }]), !1;
				if (n === a) {
					if (void 0 !== e.auxiliaryComment) {
						const n = a;
						p(e.auxiliaryComment, {
							instancePath: t + "/auxiliaryComment",
							parentData: e,
							parentDataProperty: "auxiliaryComment",
							rootData: s
						}) ||
							((o = null === o ? p.errors : o.concat(p.errors)),
							(a = o.length));
						var i = n === a;
					} else i = !0;
					if (i) {
						if (void 0 !== e.export) {
							let t = e.export;
							const n = a,
								r = a;
							let s = !1;
							const p = a;
							if (a === p)
								if (Array.isArray(t)) {
									const e = t.length;
									for (let n = 0; n < e; n++) {
										let e = t[n];
										const r = a;
										if (a === r)
											if ("string" == typeof e) {
												if (e.length < 1) {
													const e = { params: {} };
													null === o ? (o = [e]) : o.push(e), a++;
												}
											} else {
												const e = { params: { type: "string" } };
												null === o ? (o = [e]) : o.push(e), a++;
											}
										if (r !== a) break;
									}
								} else {
									const e = { params: { type: "array" } };
									null === o ? (o = [e]) : o.push(e), a++;
								}
							var l = p === a;
							if (((s = s || l), !s)) {
								const e = a;
								if (a === e)
									if ("string" == typeof t) {
										if (t.length < 1) {
											const e = { params: {} };
											null === o ? (o = [e]) : o.push(e), a++;
										}
									} else {
										const e = { params: { type: "string" } };
										null === o ? (o = [e]) : o.push(e), a++;
									}
								(l = e === a), (s = s || l);
							}
							if (!s) {
								const e = { params: {} };
								return (
									null === o ? (o = [e]) : o.push(e), a++, (f.errors = o), !1
								);
							}
							(a = r),
								null !== o && (r ? (o.length = r) : (o = null)),
								(i = n === a);
						} else i = !0;
						if (i) {
							if (void 0 !== e.name) {
								const n = a;
								u(e.name, {
									instancePath: t + "/name",
									parentData: e,
									parentDataProperty: "name",
									rootData: s
								}) ||
									((o = null === o ? u.errors : o.concat(u.errors)),
									(a = o.length)),
									(i = n === a);
							} else i = !0;
							if (i) {
								if (void 0 !== e.type) {
									let t = e.type;
									const n = a,
										r = a;
									let s = !1;
									const l = a;
									if (
										"var" !== t &&
										"module" !== t &&
										"assign" !== t &&
										"assign-properties" !== t &&
										"this" !== t &&
										"window" !== t &&
										"self" !== t &&
										"global" !== t &&
										"commonjs" !== t &&
										"commonjs2" !== t &&
										"commonjs-module" !== t &&
										"commonjs-static" !== t &&
										"amd" !== t &&
										"amd-require" !== t &&
										"umd" !== t &&
										"umd2" !== t &&
										"jsonp" !== t &&
										"system" !== t
									) {
										const e = { params: {} };
										null === o ? (o = [e]) : o.push(e), a++;
									}
									var c = l === a;
									if (((s = s || c), !s)) {
										const e = a;
										if ("string" != typeof t) {
											const e = { params: { type: "string" } };
											null === o ? (o = [e]) : o.push(e), a++;
										}
										(c = e === a), (s = s || c);
									}
									if (!s) {
										const e = { params: {} };
										return (
											null === o ? (o = [e]) : o.push(e),
											a++,
											(f.errors = o),
											!1
										);
									}
									(a = r),
										null !== o && (r ? (o.length = r) : (o = null)),
										(i = n === a);
								} else i = !0;
								if (i)
									if (void 0 !== e.umdNamedDefine) {
										const t = a;
										if ("boolean" != typeof e.umdNamedDefine)
											return (f.errors = [{ params: { type: "boolean" } }]), !1;
										i = t === a;
									} else i = !0;
							}
						}
					}
				}
			}
		}
	}
	return (f.errors = o), 0 === a;
}
function c(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if ("auto" !== e) {
		const e = { params: {} };
		null === o ? (o = [e]) : o.push(e), a++;
	}
	var u = p === a;
	if (((l = l || u), !l)) {
		const t = a,
			n = a;
		let r = !1;
		const s = a;
		if ("string" != typeof e) {
			const e = { params: { type: "string" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		var f = s === a;
		if (((r = r || f), !r)) {
			const t = a;
			if (!(e instanceof Function)) {
				const e = { params: {} };
				null === o ? (o = [e]) : o.push(e), a++;
			}
			(f = t === a), (r = r || f);
		}
		if (r) (a = n), null !== o && (n ? (o.length = n) : (o = null));
		else {
			const e = { params: {} };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		(u = t === a), (l = l || u);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (c.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(c.errors = o),
		0 === a
	);
}
function m(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (!1 !== e) {
		const e = { params: {} };
		null === o ? (o = [e]) : o.push(e), a++;
	}
	var u = p === a;
	if (((l = l || u), !l)) {
		const t = a,
			n = a;
		let r = !1;
		const s = a;
		if ("fetch-streaming" !== e && "fetch" !== e && "async-node" !== e) {
			const e = { params: {} };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		var f = s === a;
		if (((r = r || f), !r)) {
			const t = a;
			if ("string" != typeof e) {
				const e = { params: { type: "string" } };
				null === o ? (o = [e]) : o.push(e), a++;
			}
			(f = t === a), (r = r || f);
		}
		if (r) (a = n), null !== o && (n ? (o.length = n) : (o = null));
		else {
			const e = { params: {} };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		(u = t === a), (l = l || u);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (m.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(m.errors = o),
		0 === a
	);
}
function y(
	e,
	{
		instancePath: t = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = e
	} = {}
) {
	let p = null,
		u = 0;
	if (0 === u) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (y.errors = [{ params: { type: "object" } }]), !1;
		{
			let r;
			if (void 0 === e.import && (r = "import"))
				return (y.errors = [{ params: { missingProperty: r } }]), !1;
			{
				const r = u;
				for (const t in e)
					if (!n.call(a, t))
						return (y.errors = [{ params: { additionalProperty: t } }]), !1;
				if (r === u) {
					if (void 0 !== e.asyncChunks) {
						const t = u;
						if ("boolean" != typeof e.asyncChunks)
							return (y.errors = [{ params: { type: "boolean" } }]), !1;
						var h = t === u;
					} else h = !0;
					if (h) {
						if (void 0 !== e.baseUri) {
							const t = u;
							if ("string" != typeof e.baseUri)
								return (y.errors = [{ params: { type: "string" } }]), !1;
							h = t === u;
						} else h = !0;
						if (h) {
							if (void 0 !== e.chunkLoading) {
								const n = u;
								i(e.chunkLoading, {
									instancePath: t + "/chunkLoading",
									parentData: e,
									parentDataProperty: "chunkLoading",
									rootData: o
								}) ||
									((p = null === p ? i.errors : p.concat(i.errors)),
									(u = p.length)),
									(h = n === u);
							} else h = !0;
							if (h) {
								if (void 0 !== e.dependOn) {
									let t = e.dependOn;
									const n = u,
										r = u;
									let s = !1;
									const o = u;
									if (u === o)
										if (Array.isArray(t))
											if (t.length < 1) {
												const e = { params: { limit: 1 } };
												null === p ? (p = [e]) : p.push(e), u++;
											} else {
												var d = !0;
												const e = t.length;
												for (let n = 0; n < e; n++) {
													let e = t[n];
													const r = u;
													if (u === r)
														if ("string" == typeof e) {
															if (e.length < 1) {
																const e = { params: {} };
																null === p ? (p = [e]) : p.push(e), u++;
															}
														} else {
															const e = { params: { type: "string" } };
															null === p ? (p = [e]) : p.push(e), u++;
														}
													if (!(d = r === u)) break;
												}
												if (d) {
													let e,
														n = t.length;
													if (n > 1) {
														const r = {};
														for (; n--; ) {
															let s = t[n];
															if ("string" == typeof s) {
																if ("number" == typeof r[s]) {
																	e = r[s];
																	const t = { params: { i: n, j: e } };
																	null === p ? (p = [t]) : p.push(t), u++;
																	break;
																}
																r[s] = n;
															}
														}
													}
												}
											}
										else {
											const e = { params: { type: "array" } };
											null === p ? (p = [e]) : p.push(e), u++;
										}
									var g = o === u;
									if (((s = s || g), !s)) {
										const e = u;
										if (u === e)
											if ("string" == typeof t) {
												if (t.length < 1) {
													const e = { params: {} };
													null === p ? (p = [e]) : p.push(e), u++;
												}
											} else {
												const e = { params: { type: "string" } };
												null === p ? (p = [e]) : p.push(e), u++;
											}
										(g = e === u), (s = s || g);
									}
									if (!s) {
										const e = { params: {} };
										return (
											null === p ? (p = [e]) : p.push(e),
											u++,
											(y.errors = p),
											!1
										);
									}
									(u = r),
										null !== p && (r ? (p.length = r) : (p = null)),
										(h = n === u);
								} else h = !0;
								if (h) {
									if (void 0 !== e.filename) {
										const n = u;
										l(e.filename, {
											instancePath: t + "/filename",
											parentData: e,
											parentDataProperty: "filename",
											rootData: o
										}) ||
											((p = null === p ? l.errors : p.concat(l.errors)),
											(u = p.length)),
											(h = n === u);
									} else h = !0;
									if (h) {
										if (void 0 !== e.import) {
											let t = e.import;
											const n = u,
												r = u;
											let s = !1;
											const o = u;
											if (u === o)
												if (Array.isArray(t))
													if (t.length < 1) {
														const e = { params: { limit: 1 } };
														null === p ? (p = [e]) : p.push(e), u++;
													} else {
														var b = !0;
														const e = t.length;
														for (let n = 0; n < e; n++) {
															let e = t[n];
															const r = u;
															if (u === r)
																if ("string" == typeof e) {
																	if (e.length < 1) {
																		const e = { params: {} };
																		null === p ? (p = [e]) : p.push(e), u++;
																	}
																} else {
																	const e = { params: { type: "string" } };
																	null === p ? (p = [e]) : p.push(e), u++;
																}
															if (!(b = r === u)) break;
														}
														if (b) {
															let e,
																n = t.length;
															if (n > 1) {
																const r = {};
																for (; n--; ) {
																	let s = t[n];
																	if ("string" == typeof s) {
																		if ("number" == typeof r[s]) {
																			e = r[s];
																			const t = { params: { i: n, j: e } };
																			null === p ? (p = [t]) : p.push(t), u++;
																			break;
																		}
																		r[s] = n;
																	}
																}
															}
														}
													}
												else {
													const e = { params: { type: "array" } };
													null === p ? (p = [e]) : p.push(e), u++;
												}
											var v = o === u;
											if (((s = s || v), !s)) {
												const e = u;
												if (u === e)
													if ("string" == typeof t) {
														if (t.length < 1) {
															const e = { params: {} };
															null === p ? (p = [e]) : p.push(e), u++;
														}
													} else {
														const e = { params: { type: "string" } };
														null === p ? (p = [e]) : p.push(e), u++;
													}
												(v = e === u), (s = s || v);
											}
											if (!s) {
												const e = { params: {} };
												return (
													null === p ? (p = [e]) : p.push(e),
													u++,
													(y.errors = p),
													!1
												);
											}
											(u = r),
												null !== p && (r ? (p.length = r) : (p = null)),
												(h = n === u);
										} else h = !0;
										if (h) {
											if (void 0 !== e.layer) {
												let t = e.layer;
												const n = u,
													r = u;
												let s = !1;
												const o = u;
												if (null !== t) {
													const e = { params: {} };
													null === p ? (p = [e]) : p.push(e), u++;
												}
												var D = o === u;
												if (((s = s || D), !s)) {
													const e = u;
													if (u === e)
														if ("string" == typeof t) {
															if (t.length < 1) {
																const e = { params: {} };
																null === p ? (p = [e]) : p.push(e), u++;
															}
														} else {
															const e = { params: { type: "string" } };
															null === p ? (p = [e]) : p.push(e), u++;
														}
													(D = e === u), (s = s || D);
												}
												if (!s) {
													const e = { params: {} };
													return (
														null === p ? (p = [e]) : p.push(e),
														u++,
														(y.errors = p),
														!1
													);
												}
												(u = r),
													null !== p && (r ? (p.length = r) : (p = null)),
													(h = n === u);
											} else h = !0;
											if (h) {
												if (void 0 !== e.library) {
													const n = u;
													f(e.library, {
														instancePath: t + "/library",
														parentData: e,
														parentDataProperty: "library",
														rootData: o
													}) ||
														((p = null === p ? f.errors : p.concat(f.errors)),
														(u = p.length)),
														(h = n === u);
												} else h = !0;
												if (h) {
													if (void 0 !== e.publicPath) {
														const n = u;
														c(e.publicPath, {
															instancePath: t + "/publicPath",
															parentData: e,
															parentDataProperty: "publicPath",
															rootData: o
														}) ||
															((p = null === p ? c.errors : p.concat(c.errors)),
															(u = p.length)),
															(h = n === u);
													} else h = !0;
													if (h) {
														if (void 0 !== e.runtime) {
															let t = e.runtime;
															const n = u,
																r = u;
															let s = !1;
															const o = u;
															if (!1 !== t) {
																const e = { params: {} };
																null === p ? (p = [e]) : p.push(e), u++;
															}
															var P = o === u;
															if (((s = s || P), !s)) {
																const e = u;
																if (u === e)
																	if ("string" == typeof t) {
																		if (t.length < 1) {
																			const e = { params: {} };
																			null === p ? (p = [e]) : p.push(e), u++;
																		}
																	} else {
																		const e = { params: { type: "string" } };
																		null === p ? (p = [e]) : p.push(e), u++;
																	}
																(P = e === u), (s = s || P);
															}
															if (!s) {
																const e = { params: {} };
																return (
																	null === p ? (p = [e]) : p.push(e),
																	u++,
																	(y.errors = p),
																	!1
																);
															}
															(u = r),
																null !== p && (r ? (p.length = r) : (p = null)),
																(h = n === u);
														} else h = !0;
														if (h)
															if (void 0 !== e.wasmLoading) {
																const n = u;
																m(e.wasmLoading, {
																	instancePath: t + "/wasmLoading",
																	parentData: e,
																	parentDataProperty: "wasmLoading",
																	rootData: o
																}) ||
																	((p =
																		null === p ? m.errors : p.concat(m.errors)),
																	(u = p.length)),
																	(h = n === u);
															} else h = !0;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (y.errors = p), 0 === u;
}
function h(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (h.errors = [{ params: { type: "object" } }]), !1;
		for (const n in e) {
			let r = e[n];
			const u = a,
				f = a;
			let c = !1;
			const m = a,
				d = a;
			let g = !1;
			const b = a;
			if (a === b)
				if (Array.isArray(r))
					if (r.length < 1) {
						const e = { params: { limit: 1 } };
						null === o ? (o = [e]) : o.push(e), a++;
					} else {
						var i = !0;
						const e = r.length;
						for (let t = 0; t < e; t++) {
							let e = r[t];
							const n = a;
							if (a === n)
								if ("string" == typeof e) {
									if (e.length < 1) {
										const e = { params: {} };
										null === o ? (o = [e]) : o.push(e), a++;
									}
								} else {
									const e = { params: { type: "string" } };
									null === o ? (o = [e]) : o.push(e), a++;
								}
							if (!(i = n === a)) break;
						}
						if (i) {
							let e,
								t = r.length;
							if (t > 1) {
								const n = {};
								for (; t--; ) {
									let s = r[t];
									if ("string" == typeof s) {
										if ("number" == typeof n[s]) {
											e = n[s];
											const r = { params: { i: t, j: e } };
											null === o ? (o = [r]) : o.push(r), a++;
											break;
										}
										n[s] = t;
									}
								}
							}
						}
					}
				else {
					const e = { params: { type: "array" } };
					null === o ? (o = [e]) : o.push(e), a++;
				}
			var l = b === a;
			if (((g = g || l), !g)) {
				const e = a;
				if (a === e)
					if ("string" == typeof r) {
						if (r.length < 1) {
							const e = { params: {} };
							null === o ? (o = [e]) : o.push(e), a++;
						}
					} else {
						const e = { params: { type: "string" } };
						null === o ? (o = [e]) : o.push(e), a++;
					}
				(l = e === a), (g = g || l);
			}
			if (g) (a = d), null !== o && (d ? (o.length = d) : (o = null));
			else {
				const e = { params: {} };
				null === o ? (o = [e]) : o.push(e), a++;
			}
			var p = m === a;
			if (((c = c || p), !c)) {
				const i = a;
				y(r, {
					instancePath: t + "/" + n.replace(/~/g, "~0").replace(/\//g, "~1"),
					parentData: e,
					parentDataProperty: n,
					rootData: s
				}) ||
					((o = null === o ? y.errors : o.concat(y.errors)), (a = o.length)),
					(p = i === a),
					(c = c || p);
			}
			if (!c) {
				const e = { params: {} };
				return null === o ? (o = [e]) : o.push(e), a++, (h.errors = o), !1;
			}
			if (((a = f), null !== o && (f ? (o.length = f) : (o = null)), u !== a))
				break;
		}
	}
	return (h.errors = o), 0 === a;
}
function d(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1,
		p = null;
	const u = a,
		f = a;
	let c = !1;
	const m = a;
	if (a === m)
		if (Array.isArray(e))
			if (e.length < 1) {
				const e = { params: { limit: 1 } };
				null === o ? (o = [e]) : o.push(e), a++;
			} else {
				var y = !0;
				const t = e.length;
				for (let n = 0; n < t; n++) {
					let t = e[n];
					const r = a;
					if (a === r)
						if ("string" == typeof t) {
							if (t.length < 1) {
								const e = { params: {} };
								null === o ? (o = [e]) : o.push(e), a++;
							}
						} else {
							const e = { params: { type: "string" } };
							null === o ? (o = [e]) : o.push(e), a++;
						}
					if (!(y = r === a)) break;
				}
				if (y) {
					let t,
						n = e.length;
					if (n > 1) {
						const r = {};
						for (; n--; ) {
							let s = e[n];
							if ("string" == typeof s) {
								if ("number" == typeof r[s]) {
									t = r[s];
									const e = { params: { i: n, j: t } };
									null === o ? (o = [e]) : o.push(e), a++;
									break;
								}
								r[s] = n;
							}
						}
					}
				}
			}
		else {
			const e = { params: { type: "array" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
	var h = m === a;
	if (((c = c || h), !c)) {
		const t = a;
		if (a === t)
			if ("string" == typeof e) {
				if (e.length < 1) {
					const e = { params: {} };
					null === o ? (o = [e]) : o.push(e), a++;
				}
			} else {
				const e = { params: { type: "string" } };
				null === o ? (o = [e]) : o.push(e), a++;
			}
		(h = t === a), (c = c || h);
	}
	if (c) (a = f), null !== o && (f ? (o.length = f) : (o = null));
	else {
		const e = { params: {} };
		null === o ? (o = [e]) : o.push(e), a++;
	}
	if ((u === a && ((l = !0), (p = 0)), !l)) {
		const e = { params: { passingSchemas: p } };
		return null === o ? (o = [e]) : o.push(e), a++, (d.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(d.errors = o),
		0 === a
	);
}
function g(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	h(e, {
		instancePath: t,
		parentData: n,
		parentDataProperty: r,
		rootData: s
	}) || ((o = null === o ? h.errors : o.concat(h.errors)), (a = o.length));
	var u = p === a;
	if (((l = l || u), !l)) {
		const i = a;
		d(e, {
			instancePath: t,
			parentData: n,
			parentDataProperty: r,
			rootData: s
		}) || ((o = null === o ? d.errors : o.concat(d.errors)), (a = o.length)),
			(u = i === a),
			(l = l || u);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (g.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(g.errors = o),
		0 === a
	);
}
function b(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (!(e instanceof Function)) {
		const e = { params: {} };
		null === o ? (o = [e]) : o.push(e), a++;
	}
	var u = p === a;
	if (((l = l || u), !l)) {
		const i = a;
		g(e, {
			instancePath: t,
			parentData: n,
			parentDataProperty: r,
			rootData: s
		}) || ((o = null === o ? g.errors : o.concat(g.errors)), (a = o.length)),
			(u = i === a),
			(l = l || u);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (b.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(b.errors = o),
		0 === a
	);
}
const v = {
		asyncWebAssembly: { type: "boolean" },
		backCompat: { type: "boolean" },
		buildHttp: {
			anyOf: [
				{ $ref: "#/definitions/HttpUriAllowedUris" },
				{ $ref: "#/definitions/HttpUriOptions" }
			]
		},
		cacheUnaffected: { type: "boolean" },
		css: {
			anyOf: [
				{ type: "boolean" },
				{ $ref: "#/definitions/CssExperimentOptions" }
			]
		},
		futureDefaults: { type: "boolean" },
		layers: { type: "boolean" },
		lazyCompilation: {
			anyOf: [
				{ type: "boolean" },
				{ $ref: "#/definitions/LazyCompilationOptions" }
			]
		},
		outputModule: { type: "boolean" },
		syncWebAssembly: { type: "boolean" },
		topLevelAwait: { type: "boolean" }
	},
	D = new RegExp("^https?://", "u");
function P(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1,
		p = null;
	const u = a;
	if (a == a)
		if (Array.isArray(e)) {
			const t = e.length;
			for (let n = 0; n < t; n++) {
				let t = e[n];
				const r = a,
					s = a;
				let i = !1;
				const l = a;
				if (!(t instanceof RegExp)) {
					const e = { params: {} };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				var f = l === a;
				if (((i = i || f), !i)) {
					const e = a;
					if (a === e)
						if ("string" == typeof t) {
							if (!D.test(t)) {
								const e = { params: { pattern: "^https?://" } };
								null === o ? (o = [e]) : o.push(e), a++;
							}
						} else {
							const e = { params: { type: "string" } };
							null === o ? (o = [e]) : o.push(e), a++;
						}
					if (((f = e === a), (i = i || f), !i)) {
						const e = a;
						if (!(t instanceof Function)) {
							const e = { params: {} };
							null === o ? (o = [e]) : o.push(e), a++;
						}
						(f = e === a), (i = i || f);
					}
				}
				if (i) (a = s), null !== o && (s ? (o.length = s) : (o = null));
				else {
					const e = { params: {} };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				if (r !== a) break;
			}
		} else {
			const e = { params: { type: "array" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
	if ((u === a && ((l = !0), (p = 0)), !l)) {
		const e = { params: { passingSchemas: p } };
		return null === o ? (o = [e]) : o.push(e), a++, (P.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(P.errors = o),
		0 === a
	);
}
function A(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	if (0 === i) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (A.errors = [{ params: { type: "object" } }]), !1;
		{
			let n;
			if (void 0 === t.allowedUris && (n = "allowedUris"))
				return (A.errors = [{ params: { missingProperty: n } }]), !1;
			{
				const n = i;
				for (const e in t)
					if (
						"allowedUris" !== e &&
						"cacheLocation" !== e &&
						"frozen" !== e &&
						"lockfileLocation" !== e &&
						"proxy" !== e &&
						"upgrade" !== e
					)
						return (A.errors = [{ params: { additionalProperty: e } }]), !1;
				if (n === i) {
					if (void 0 !== t.allowedUris) {
						let e = t.allowedUris;
						const n = i;
						if (i == i) {
							if (!Array.isArray(e))
								return (A.errors = [{ params: { type: "array" } }]), !1;
							{
								const t = e.length;
								for (let n = 0; n < t; n++) {
									let t = e[n];
									const r = i,
										s = i;
									let o = !1;
									const p = i;
									if (!(t instanceof RegExp)) {
										const e = { params: {} };
										null === a ? (a = [e]) : a.push(e), i++;
									}
									var l = p === i;
									if (((o = o || l), !o)) {
										const e = i;
										if (i === e)
											if ("string" == typeof t) {
												if (!D.test(t)) {
													const e = { params: { pattern: "^https?://" } };
													null === a ? (a = [e]) : a.push(e), i++;
												}
											} else {
												const e = { params: { type: "string" } };
												null === a ? (a = [e]) : a.push(e), i++;
											}
										if (((l = e === i), (o = o || l), !o)) {
											const e = i;
											if (!(t instanceof Function)) {
												const e = { params: {} };
												null === a ? (a = [e]) : a.push(e), i++;
											}
											(l = e === i), (o = o || l);
										}
									}
									if (!o) {
										const e = { params: {} };
										return (
											null === a ? (a = [e]) : a.push(e),
											i++,
											(A.errors = a),
											!1
										);
									}
									if (
										((i = s),
										null !== a && (s ? (a.length = s) : (a = null)),
										r !== i)
									)
										break;
								}
							}
						}
						var p = n === i;
					} else p = !0;
					if (p) {
						if (void 0 !== t.cacheLocation) {
							let n = t.cacheLocation;
							const r = i,
								s = i;
							let o = !1;
							const l = i;
							if (!1 !== n) {
								const e = { params: {} };
								null === a ? (a = [e]) : a.push(e), i++;
							}
							var u = l === i;
							if (((o = o || u), !o)) {
								const t = i;
								if (i === t)
									if ("string" == typeof n) {
										if (n.includes("!") || !0 !== e.test(n)) {
											const e = { params: {} };
											null === a ? (a = [e]) : a.push(e), i++;
										}
									} else {
										const e = { params: { type: "string" } };
										null === a ? (a = [e]) : a.push(e), i++;
									}
								(u = t === i), (o = o || u);
							}
							if (!o) {
								const e = { params: {} };
								return (
									null === a ? (a = [e]) : a.push(e), i++, (A.errors = a), !1
								);
							}
							(i = s),
								null !== a && (s ? (a.length = s) : (a = null)),
								(p = r === i);
						} else p = !0;
						if (p) {
							if (void 0 !== t.frozen) {
								const e = i;
								if ("boolean" != typeof t.frozen)
									return (A.errors = [{ params: { type: "boolean" } }]), !1;
								p = e === i;
							} else p = !0;
							if (p) {
								if (void 0 !== t.lockfileLocation) {
									let n = t.lockfileLocation;
									const r = i;
									if (i === r) {
										if ("string" != typeof n)
											return (A.errors = [{ params: { type: "string" } }]), !1;
										if (n.includes("!") || !0 !== e.test(n))
											return (A.errors = [{ params: {} }]), !1;
									}
									p = r === i;
								} else p = !0;
								if (p) {
									if (void 0 !== t.proxy) {
										const e = i;
										if ("string" != typeof t.proxy)
											return (A.errors = [{ params: { type: "string" } }]), !1;
										p = e === i;
									} else p = !0;
									if (p)
										if (void 0 !== t.upgrade) {
											const e = i;
											if ("boolean" != typeof t.upgrade)
												return (
													(A.errors = [{ params: { type: "boolean" } }]), !1
												);
											p = e === i;
										} else p = !0;
								}
							}
						}
					}
				}
			}
		}
	}
	return (A.errors = a), 0 === i;
}
function x(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (x.errors = [{ params: { type: "object" } }]), !1;
		{
			const t = a;
			for (const t in e)
				if (
					"backend" !== t &&
					"entries" !== t &&
					"imports" !== t &&
					"test" !== t
				)
					return (x.errors = [{ params: { additionalProperty: t } }]), !1;
			if (t === a) {
				if (void 0 !== e.backend) {
					let t = e.backend;
					const n = a,
						r = a;
					let s = !1;
					const m = a;
					if (!(t instanceof Function)) {
						const e = { params: {} };
						null === o ? (o = [e]) : o.push(e), a++;
					}
					var i = m === a;
					if (((s = s || i), !s)) {
						const e = a;
						if (a == a)
							if (t && "object" == typeof t && !Array.isArray(t)) {
								const e = a;
								for (const e in t)
									if (
										"client" !== e &&
										"listen" !== e &&
										"protocol" !== e &&
										"server" !== e
									) {
										const t = { params: { additionalProperty: e } };
										null === o ? (o = [t]) : o.push(t), a++;
										break;
									}
								if (e === a) {
									if (void 0 !== t.client) {
										const e = a;
										if ("string" != typeof t.client) {
											const e = { params: { type: "string" } };
											null === o ? (o = [e]) : o.push(e), a++;
										}
										var l = e === a;
									} else l = !0;
									if (l) {
										if (void 0 !== t.listen) {
											let e = t.listen;
											const n = a,
												r = a;
											let s = !1;
											const i = a;
											if ("number" != typeof e) {
												const e = { params: { type: "number" } };
												null === o ? (o = [e]) : o.push(e), a++;
											}
											var p = i === a;
											if (((s = s || p), !s)) {
												const t = a;
												if (a === t)
													if (e && "object" == typeof e && !Array.isArray(e)) {
														if (void 0 !== e.host) {
															const t = a;
															if ("string" != typeof e.host) {
																const e = { params: { type: "string" } };
																null === o ? (o = [e]) : o.push(e), a++;
															}
															var u = t === a;
														} else u = !0;
														if (u)
															if (void 0 !== e.port) {
																const t = a;
																if ("number" != typeof e.port) {
																	const e = { params: { type: "number" } };
																	null === o ? (o = [e]) : o.push(e), a++;
																}
																u = t === a;
															} else u = !0;
													} else {
														const e = { params: { type: "object" } };
														null === o ? (o = [e]) : o.push(e), a++;
													}
												if (((p = t === a), (s = s || p), !s)) {
													const t = a;
													if (!(e instanceof Function)) {
														const e = { params: {} };
														null === o ? (o = [e]) : o.push(e), a++;
													}
													(p = t === a), (s = s || p);
												}
											}
											if (s)
												(a = r),
													null !== o && (r ? (o.length = r) : (o = null));
											else {
												const e = { params: {} };
												null === o ? (o = [e]) : o.push(e), a++;
											}
											l = n === a;
										} else l = !0;
										if (l) {
											if (void 0 !== t.protocol) {
												let e = t.protocol;
												const n = a;
												if ("http" !== e && "https" !== e) {
													const e = { params: {} };
													null === o ? (o = [e]) : o.push(e), a++;
												}
												l = n === a;
											} else l = !0;
											if (l)
												if (void 0 !== t.server) {
													let e = t.server;
													const n = a,
														r = a;
													let s = !1;
													const i = a;
													if (a === i)
														if (e && "object" == typeof e && !Array.isArray(e));
														else {
															const e = { params: { type: "object" } };
															null === o ? (o = [e]) : o.push(e), a++;
														}
													var f = i === a;
													if (((s = s || f), !s)) {
														const t = a;
														if (!(e instanceof Function)) {
															const e = { params: {} };
															null === o ? (o = [e]) : o.push(e), a++;
														}
														(f = t === a), (s = s || f);
													}
													if (s)
														(a = r),
															null !== o && (r ? (o.length = r) : (o = null));
													else {
														const e = { params: {} };
														null === o ? (o = [e]) : o.push(e), a++;
													}
													l = n === a;
												} else l = !0;
										}
									}
								}
							} else {
								const e = { params: { type: "object" } };
								null === o ? (o = [e]) : o.push(e), a++;
							}
						(i = e === a), (s = s || i);
					}
					if (!s) {
						const e = { params: {} };
						return null === o ? (o = [e]) : o.push(e), a++, (x.errors = o), !1;
					}
					(a = r), null !== o && (r ? (o.length = r) : (o = null));
					var c = n === a;
				} else c = !0;
				if (c) {
					if (void 0 !== e.entries) {
						const t = a;
						if ("boolean" != typeof e.entries)
							return (x.errors = [{ params: { type: "boolean" } }]), !1;
						c = t === a;
					} else c = !0;
					if (c) {
						if (void 0 !== e.imports) {
							const t = a;
							if ("boolean" != typeof e.imports)
								return (x.errors = [{ params: { type: "boolean" } }]), !1;
							c = t === a;
						} else c = !0;
						if (c)
							if (void 0 !== e.test) {
								let t = e.test;
								const n = a,
									r = a;
								let s = !1;
								const i = a;
								if (!(t instanceof RegExp)) {
									const e = { params: {} };
									null === o ? (o = [e]) : o.push(e), a++;
								}
								var m = i === a;
								if (((s = s || m), !s)) {
									const e = a;
									if ("string" != typeof t) {
										const e = { params: { type: "string" } };
										null === o ? (o = [e]) : o.push(e), a++;
									}
									if (((m = e === a), (s = s || m), !s)) {
										const e = a;
										if (!(t instanceof Function)) {
											const e = { params: {} };
											null === o ? (o = [e]) : o.push(e), a++;
										}
										(m = e === a), (s = s || m);
									}
								}
								if (!s) {
									const e = { params: {} };
									return (
										null === o ? (o = [e]) : o.push(e), a++, (x.errors = o), !1
									);
								}
								(a = r),
									null !== o && (r ? (o.length = r) : (o = null)),
									(c = n === a);
							} else c = !0;
					}
				}
			}
		}
	}
	return (x.errors = o), 0 === a;
}
function k(
	e,
	{
		instancePath: t = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = e
	} = {}
) {
	let a = null,
		i = 0;
	if (0 === i) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (k.errors = [{ params: { type: "object" } }]), !1;
		{
			const r = i;
			for (const t in e)
				if (!n.call(v, t))
					return (k.errors = [{ params: { additionalProperty: t } }]), !1;
			if (r === i) {
				if (void 0 !== e.asyncWebAssembly) {
					const t = i;
					if ("boolean" != typeof e.asyncWebAssembly)
						return (k.errors = [{ params: { type: "boolean" } }]), !1;
					var l = t === i;
				} else l = !0;
				if (l) {
					if (void 0 !== e.backCompat) {
						const t = i;
						if ("boolean" != typeof e.backCompat)
							return (k.errors = [{ params: { type: "boolean" } }]), !1;
						l = t === i;
					} else l = !0;
					if (l) {
						if (void 0 !== e.buildHttp) {
							let n = e.buildHttp;
							const r = i,
								s = i;
							let u = !1;
							const f = i;
							P(n, {
								instancePath: t + "/buildHttp",
								parentData: e,
								parentDataProperty: "buildHttp",
								rootData: o
							}) ||
								((a = null === a ? P.errors : a.concat(P.errors)),
								(i = a.length));
							var p = f === i;
							if (((u = u || p), !u)) {
								const r = i;
								A(n, {
									instancePath: t + "/buildHttp",
									parentData: e,
									parentDataProperty: "buildHttp",
									rootData: o
								}) ||
									((a = null === a ? A.errors : a.concat(A.errors)),
									(i = a.length)),
									(p = r === i),
									(u = u || p);
							}
							if (!u) {
								const e = { params: {} };
								return (
									null === a ? (a = [e]) : a.push(e), i++, (k.errors = a), !1
								);
							}
							(i = s),
								null !== a && (s ? (a.length = s) : (a = null)),
								(l = r === i);
						} else l = !0;
						if (l) {
							if (void 0 !== e.cacheUnaffected) {
								const t = i;
								if ("boolean" != typeof e.cacheUnaffected)
									return (k.errors = [{ params: { type: "boolean" } }]), !1;
								l = t === i;
							} else l = !0;
							if (l) {
								if (void 0 !== e.css) {
									let t = e.css;
									const n = i,
										r = i;
									let s = !1;
									const o = i;
									if ("boolean" != typeof t) {
										const e = { params: { type: "boolean" } };
										null === a ? (a = [e]) : a.push(e), i++;
									}
									var u = o === i;
									if (((s = s || u), !s)) {
										const e = i;
										if (i == i)
											if (t && "object" == typeof t && !Array.isArray(t)) {
												const e = i;
												for (const e in t)
													if ("exportsOnly" !== e) {
														const t = { params: { additionalProperty: e } };
														null === a ? (a = [t]) : a.push(t), i++;
														break;
													}
												if (
													e === i &&
													void 0 !== t.exportsOnly &&
													"boolean" != typeof t.exportsOnly
												) {
													const e = { params: { type: "boolean" } };
													null === a ? (a = [e]) : a.push(e), i++;
												}
											} else {
												const e = { params: { type: "object" } };
												null === a ? (a = [e]) : a.push(e), i++;
											}
										(u = e === i), (s = s || u);
									}
									if (!s) {
										const e = { params: {} };
										return (
											null === a ? (a = [e]) : a.push(e),
											i++,
											(k.errors = a),
											!1
										);
									}
									(i = r),
										null !== a && (r ? (a.length = r) : (a = null)),
										(l = n === i);
								} else l = !0;
								if (l) {
									if (void 0 !== e.futureDefaults) {
										const t = i;
										if ("boolean" != typeof e.futureDefaults)
											return (k.errors = [{ params: { type: "boolean" } }]), !1;
										l = t === i;
									} else l = !0;
									if (l) {
										if (void 0 !== e.layers) {
											const t = i;
											if ("boolean" != typeof e.layers)
												return (
													(k.errors = [{ params: { type: "boolean" } }]), !1
												);
											l = t === i;
										} else l = !0;
										if (l) {
											if (void 0 !== e.lazyCompilation) {
												let n = e.lazyCompilation;
												const r = i,
													s = i;
												let p = !1;
												const u = i;
												if ("boolean" != typeof n) {
													const e = { params: { type: "boolean" } };
													null === a ? (a = [e]) : a.push(e), i++;
												}
												var f = u === i;
												if (((p = p || f), !p)) {
													const r = i;
													x(n, {
														instancePath: t + "/lazyCompilation",
														parentData: e,
														parentDataProperty: "lazyCompilation",
														rootData: o
													}) ||
														((a = null === a ? x.errors : a.concat(x.errors)),
														(i = a.length)),
														(f = r === i),
														(p = p || f);
												}
												if (!p) {
													const e = { params: {} };
													return (
														null === a ? (a = [e]) : a.push(e),
														i++,
														(k.errors = a),
														!1
													);
												}
												(i = s),
													null !== a && (s ? (a.length = s) : (a = null)),
													(l = r === i);
											} else l = !0;
											if (l) {
												if (void 0 !== e.outputModule) {
													const t = i;
													if ("boolean" != typeof e.outputModule)
														return (
															(k.errors = [{ params: { type: "boolean" } }]), !1
														);
													l = t === i;
												} else l = !0;
												if (l) {
													if (void 0 !== e.syncWebAssembly) {
														const t = i;
														if ("boolean" != typeof e.syncWebAssembly)
															return (
																(k.errors = [{ params: { type: "boolean" } }]),
																!1
															);
														l = t === i;
													} else l = !0;
													if (l)
														if (void 0 !== e.topLevelAwait) {
															const t = i;
															if ("boolean" != typeof e.topLevelAwait)
																return (
																	(k.errors = [
																		{ params: { type: "boolean" } }
																	]),
																	!1
																);
															l = t === i;
														} else l = !0;
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (k.errors = a), 0 === i;
}
const j = { validate: S };
function S(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (!(e instanceof RegExp)) {
		const e = { params: {} };
		null === o ? (o = [e]) : o.push(e), a++;
	}
	var u = p === a;
	if (((l = l || u), !l)) {
		const n = a;
		if ("string" != typeof e) {
			const e = { params: { type: "string" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		if (((u = n === a), (l = l || u), !l)) {
			const n = a;
			if (a === n)
				if (e && "object" == typeof e && !Array.isArray(e)) {
					const n = a;
					for (const t in e)
						if ("byLayer" !== t) {
							let n = e[t];
							const r = a,
								s = a;
							let i = !1;
							const l = a;
							if (a === l)
								if (Array.isArray(n)) {
									const e = n.length;
									for (let t = 0; t < e; t++) {
										let e = n[t];
										const r = a;
										if (a === r)
											if ("string" == typeof e) {
												if (e.length < 1) {
													const e = { params: {} };
													null === o ? (o = [e]) : o.push(e), a++;
												}
											} else {
												const e = { params: { type: "string" } };
												null === o ? (o = [e]) : o.push(e), a++;
											}
										if (r !== a) break;
									}
								} else {
									const e = { params: { type: "array" } };
									null === o ? (o = [e]) : o.push(e), a++;
								}
							var f = l === a;
							if (((i = i || f), !i)) {
								const e = a;
								if ("boolean" != typeof n) {
									const e = { params: { type: "boolean" } };
									null === o ? (o = [e]) : o.push(e), a++;
								}
								if (((f = e === a), (i = i || f), !i)) {
									const e = a;
									if ("string" != typeof n) {
										const e = { params: { type: "string" } };
										null === o ? (o = [e]) : o.push(e), a++;
									}
									if (((f = e === a), (i = i || f), !i)) {
										const e = a;
										if (!n || "object" != typeof n || Array.isArray(n)) {
											const e = { params: { type: "object" } };
											null === o ? (o = [e]) : o.push(e), a++;
										}
										(f = e === a), (i = i || f);
									}
								}
							}
							if (i) (a = s), null !== o && (s ? (o.length = s) : (o = null));
							else {
								const e = { params: {} };
								null === o ? (o = [e]) : o.push(e), a++;
							}
							if (r !== a) break;
						}
					if (n === a && void 0 !== e.byLayer) {
						let n = e.byLayer;
						const r = a;
						let i = !1;
						const l = a;
						if (a === l)
							if (n && "object" == typeof n && !Array.isArray(n))
								for (const e in n) {
									const r = a;
									if (
										(j.validate(n[e], {
											instancePath:
												t +
												"/byLayer/" +
												e.replace(/~/g, "~0").replace(/\//g, "~1"),
											parentData: n,
											parentDataProperty: e,
											rootData: s
										}) ||
											((o =
												null === o
													? j.validate.errors
													: o.concat(j.validate.errors)),
											(a = o.length)),
										r !== a)
									)
										break;
								}
							else {
								const e = { params: { type: "object" } };
								null === o ? (o = [e]) : o.push(e), a++;
							}
						var c = l === a;
						if (((i = i || c), !i)) {
							const e = a;
							if (!(n instanceof Function)) {
								const e = { params: {} };
								null === o ? (o = [e]) : o.push(e), a++;
							}
							(c = e === a), (i = i || c);
						}
						if (i) (a = r), null !== o && (r ? (o.length = r) : (o = null));
						else {
							const e = { params: {} };
							null === o ? (o = [e]) : o.push(e), a++;
						}
					}
				} else {
					const e = { params: { type: "object" } };
					null === o ? (o = [e]) : o.push(e), a++;
				}
			if (((u = n === a), (l = l || u), !l)) {
				const t = a;
				if (!(e instanceof Function)) {
					const e = { params: {} };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				(u = t === a), (l = l || u);
			}
		}
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (S.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(S.errors = o),
		0 === a
	);
}
function C(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (a === p)
		if (Array.isArray(e)) {
			const n = e.length;
			for (let r = 0; r < n; r++) {
				const n = a;
				if (
					(S(e[r], {
						instancePath: t + "/" + r,
						parentData: e,
						parentDataProperty: r,
						rootData: s
					}) ||
						((o = null === o ? S.errors : o.concat(S.errors)), (a = o.length)),
					n !== a)
				)
					break;
			}
		} else {
			const e = { params: { type: "array" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
	var u = p === a;
	if (((l = l || u), !l)) {
		const i = a;
		S(e, {
			instancePath: t,
			parentData: n,
			parentDataProperty: r,
			rootData: s
		}) || ((o = null === o ? S.errors : o.concat(S.errors)), (a = o.length)),
			(u = i === a),
			(l = l || u);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (C.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(C.errors = o),
		0 === a
	);
}
function O(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	const l = i;
	let p = !1;
	const u = i;
	if (i === u)
		if (Array.isArray(t)) {
			const n = t.length;
			for (let r = 0; r < n; r++) {
				let n = t[r];
				const s = i,
					o = i;
				let l = !1,
					p = null;
				const u = i,
					c = i;
				let m = !1;
				const y = i;
				if (!(n instanceof RegExp)) {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				var f = y === i;
				if (((m = m || f), !m)) {
					const t = i;
					if (i === t)
						if ("string" == typeof n) {
							if (n.includes("!") || !1 !== e.test(n)) {
								const e = { params: {} };
								null === a ? (a = [e]) : a.push(e), i++;
							}
						} else {
							const e = { params: { type: "string" } };
							null === a ? (a = [e]) : a.push(e), i++;
						}
					if (((f = t === i), (m = m || f), !m)) {
						const e = i;
						if (!(n instanceof Function)) {
							const e = { params: {} };
							null === a ? (a = [e]) : a.push(e), i++;
						}
						(f = e === i), (m = m || f);
					}
				}
				if (m) (i = c), null !== a && (c ? (a.length = c) : (a = null));
				else {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				if ((u === i && ((l = !0), (p = 0)), l))
					(i = o), null !== a && (o ? (a.length = o) : (a = null));
				else {
					const e = { params: { passingSchemas: p } };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				if (s !== i) break;
			}
		} else {
			const e = { params: { type: "array" } };
			null === a ? (a = [e]) : a.push(e), i++;
		}
	var c = u === i;
	if (((p = p || c), !p)) {
		const n = i,
			r = i;
		let s = !1;
		const o = i;
		if (!(t instanceof RegExp)) {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		var m = o === i;
		if (((s = s || m), !s)) {
			const n = i;
			if (i === n)
				if ("string" == typeof t) {
					if (t.includes("!") || !1 !== e.test(t)) {
						const e = { params: {} };
						null === a ? (a = [e]) : a.push(e), i++;
					}
				} else {
					const e = { params: { type: "string" } };
					null === a ? (a = [e]) : a.push(e), i++;
				}
			if (((m = n === i), (s = s || m), !s)) {
				const e = i;
				if (!(t instanceof Function)) {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				(m = e === i), (s = s || m);
			}
		}
		if (s) (i = r), null !== a && (r ? (a.length = r) : (a = null));
		else {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		(c = n === i), (p = p || c);
	}
	if (!p) {
		const e = { params: {} };
		return null === a ? (a = [e]) : a.push(e), i++, (O.errors = a), !1;
	}
	return (
		(i = l),
		null !== a && (l ? (a.length = l) : (a = null)),
		(O.errors = a),
		0 === i
	);
}
function F(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (F.errors = [{ params: { type: "object" } }]), !1;
		{
			const n = a;
			for (const t in e)
				if (
					"appendOnly" !== t &&
					"colors" !== t &&
					"console" !== t &&
					"debug" !== t &&
					"level" !== t &&
					"stream" !== t
				)
					return (F.errors = [{ params: { additionalProperty: t } }]), !1;
			if (n === a) {
				if (void 0 !== e.appendOnly) {
					const t = a;
					if ("boolean" != typeof e.appendOnly)
						return (F.errors = [{ params: { type: "boolean" } }]), !1;
					var i = t === a;
				} else i = !0;
				if (i) {
					if (void 0 !== e.colors) {
						const t = a;
						if ("boolean" != typeof e.colors)
							return (F.errors = [{ params: { type: "boolean" } }]), !1;
						i = t === a;
					} else i = !0;
					if (i) {
						if (void 0 !== e.debug) {
							let n = e.debug;
							const r = a,
								p = a;
							let u = !1;
							const f = a;
							if ("boolean" != typeof n) {
								const e = { params: { type: "boolean" } };
								null === o ? (o = [e]) : o.push(e), a++;
							}
							var l = f === a;
							if (((u = u || l), !u)) {
								const r = a;
								O(n, {
									instancePath: t + "/debug",
									parentData: e,
									parentDataProperty: "debug",
									rootData: s
								}) ||
									((o = null === o ? O.errors : o.concat(O.errors)),
									(a = o.length)),
									(l = r === a),
									(u = u || l);
							}
							if (!u) {
								const e = { params: {} };
								return (
									null === o ? (o = [e]) : o.push(e), a++, (F.errors = o), !1
								);
							}
							(a = p),
								null !== o && (p ? (o.length = p) : (o = null)),
								(i = r === a);
						} else i = !0;
						if (i)
							if (void 0 !== e.level) {
								let t = e.level;
								const n = a;
								if (
									"none" !== t &&
									"error" !== t &&
									"warn" !== t &&
									"info" !== t &&
									"log" !== t &&
									"verbose" !== t
								)
									return (F.errors = [{ params: {} }]), !1;
								i = n === a;
							} else i = !0;
					}
				}
			}
		}
	}
	return (F.errors = o), 0 === a;
}
const R = {
		defaultRules: { oneOf: [{ $ref: "#/definitions/RuleSetRules" }] },
		exprContextCritical: { type: "boolean" },
		exprContextRecursive: { type: "boolean" },
		exprContextRegExp: {
			anyOf: [{ instanceof: "RegExp" }, { type: "boolean" }]
		},
		exprContextRequest: { type: "string" },
		generator: { $ref: "#/definitions/GeneratorOptionsByModuleType" },
		noParse: { $ref: "#/definitions/NoParse" },
		parser: { $ref: "#/definitions/ParserOptionsByModuleType" },
		rules: { oneOf: [{ $ref: "#/definitions/RuleSetRules" }] },
		strictExportPresence: { type: "boolean" },
		strictThisContextOnImports: { type: "boolean" },
		unknownContextCritical: { type: "boolean" },
		unknownContextRecursive: { type: "boolean" },
		unknownContextRegExp: {
			anyOf: [{ instanceof: "RegExp" }, { type: "boolean" }]
		},
		unknownContextRequest: { type: "string" },
		unsafeCache: { anyOf: [{ type: "boolean" }, { instanceof: "Function" }] },
		wrappedContextCritical: { type: "boolean" },
		wrappedContextRecursive: { type: "boolean" },
		wrappedContextRegExp: { instanceof: "RegExp" }
	},
	E = {
		assert: {
			type: "object",
			additionalProperties: {
				$ref: "#/definitions/RuleSetConditionOrConditions"
			}
		},
		compiler: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditions" }]
		},
		dependency: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditions" }]
		},
		descriptionData: {
			type: "object",
			additionalProperties: {
				$ref: "#/definitions/RuleSetConditionOrConditions"
			}
		},
		enforce: { enum: ["pre", "post"] },
		exclude: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditionsAbsolute" }]
		},
		generator: { type: "object" },
		include: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditionsAbsolute" }]
		},
		issuer: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditionsAbsolute" }]
		},
		issuerLayer: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditions" }]
		},
		layer: { type: "string" },
		loader: { oneOf: [{ $ref: "#/definitions/RuleSetLoader" }] },
		mimetype: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditions" }]
		},
		oneOf: {
			type: "array",
			items: { oneOf: [{ $ref: "#/definitions/RuleSetRule" }] }
		},
		options: { oneOf: [{ $ref: "#/definitions/RuleSetLoaderOptions" }] },
		parser: { type: "object", additionalProperties: !0 },
		realResource: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditionsAbsolute" }]
		},
		resolve: {
			type: "object",
			oneOf: [{ $ref: "#/definitions/ResolveOptions" }]
		},
		resource: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditionsAbsolute" }]
		},
		resourceFragment: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditions" }]
		},
		resourceQuery: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditions" }]
		},
		rules: {
			type: "array",
			items: { oneOf: [{ $ref: "#/definitions/RuleSetRule" }] }
		},
		scheme: { oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditions" }] },
		sideEffects: { type: "boolean" },
		test: {
			oneOf: [{ $ref: "#/definitions/RuleSetConditionOrConditionsAbsolute" }]
		},
		type: { type: "string" },
		use: { oneOf: [{ $ref: "#/definitions/RuleSetUse" }] }
	},
	$ = { validate: w };
function z(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!Array.isArray(e))
			return (z.errors = [{ params: { type: "array" } }]), !1;
		{
			const n = e.length;
			for (let r = 0; r < n; r++) {
				const n = a,
					i = a;
				let l = !1,
					p = null;
				const u = a;
				if (
					($.validate(e[r], {
						instancePath: t + "/" + r,
						parentData: e,
						parentDataProperty: r,
						rootData: s
					}) ||
						((o = null === o ? $.validate.errors : o.concat($.validate.errors)),
						(a = o.length)),
					u === a && ((l = !0), (p = 0)),
					!l)
				) {
					const e = { params: { passingSchemas: p } };
					return null === o ? (o = [e]) : o.push(e), a++, (z.errors = o), !1;
				}
				if (((a = i), null !== o && (i ? (o.length = i) : (o = null)), n !== a))
					break;
			}
		}
	}
	return (z.errors = o), 0 === a;
}
function L(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (L.errors = [{ params: { type: "object" } }]), !1;
		{
			const n = a;
			for (const t in e)
				if ("and" !== t && "not" !== t && "or" !== t)
					return (L.errors = [{ params: { additionalProperty: t } }]), !1;
			if (n === a) {
				if (void 0 !== e.and) {
					const n = a,
						r = a;
					let l = !1,
						p = null;
					const u = a;
					if (
						(z(e.and, {
							instancePath: t + "/and",
							parentData: e,
							parentDataProperty: "and",
							rootData: s
						}) ||
							((o = null === o ? z.errors : o.concat(z.errors)),
							(a = o.length)),
						u === a && ((l = !0), (p = 0)),
						!l)
					) {
						const e = { params: { passingSchemas: p } };
						return null === o ? (o = [e]) : o.push(e), a++, (L.errors = o), !1;
					}
					(a = r), null !== o && (r ? (o.length = r) : (o = null));
					var i = n === a;
				} else i = !0;
				if (i) {
					if (void 0 !== e.not) {
						const n = a,
							r = a;
						let l = !1,
							p = null;
						const u = a;
						if (
							($.validate(e.not, {
								instancePath: t + "/not",
								parentData: e,
								parentDataProperty: "not",
								rootData: s
							}) ||
								((o =
									null === o ? $.validate.errors : o.concat($.validate.errors)),
								(a = o.length)),
							u === a && ((l = !0), (p = 0)),
							!l)
						) {
							const e = { params: { passingSchemas: p } };
							return (
								null === o ? (o = [e]) : o.push(e), a++, (L.errors = o), !1
							);
						}
						(a = r),
							null !== o && (r ? (o.length = r) : (o = null)),
							(i = n === a);
					} else i = !0;
					if (i)
						if (void 0 !== e.or) {
							const n = a,
								r = a;
							let l = !1,
								p = null;
							const u = a;
							if (
								(z(e.or, {
									instancePath: t + "/or",
									parentData: e,
									parentDataProperty: "or",
									rootData: s
								}) ||
									((o = null === o ? z.errors : o.concat(z.errors)),
									(a = o.length)),
								u === a && ((l = !0), (p = 0)),
								!l)
							) {
								const e = { params: { passingSchemas: p } };
								return (
									null === o ? (o = [e]) : o.push(e), a++, (L.errors = o), !1
								);
							}
							(a = r),
								null !== o && (r ? (o.length = r) : (o = null)),
								(i = n === a);
						} else i = !0;
				}
			}
		}
	}
	return (L.errors = o), 0 === a;
}
function w(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (!(e instanceof RegExp)) {
		const e = { params: {} };
		null === o ? (o = [e]) : o.push(e), a++;
	}
	var u = p === a;
	if (((l = l || u), !l)) {
		const i = a;
		if ("string" != typeof e) {
			const e = { params: { type: "string" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		if (((u = i === a), (l = l || u), !l)) {
			const i = a;
			if (!(e instanceof Function)) {
				const e = { params: {} };
				null === o ? (o = [e]) : o.push(e), a++;
			}
			if (((u = i === a), (l = l || u), !l)) {
				const i = a;
				if (
					(L(e, {
						instancePath: t,
						parentData: n,
						parentDataProperty: r,
						rootData: s
					}) ||
						((o = null === o ? L.errors : o.concat(L.errors)), (a = o.length)),
					(u = i === a),
					(l = l || u),
					!l)
				) {
					const i = a;
					z(e, {
						instancePath: t,
						parentData: n,
						parentDataProperty: r,
						rootData: s
					}) ||
						((o = null === o ? z.errors : o.concat(z.errors)), (a = o.length)),
						(u = i === a),
						(l = l || u);
				}
			}
		}
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (w.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(w.errors = o),
		0 === a
	);
}
function M(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	w(e, {
		instancePath: t,
		parentData: n,
		parentDataProperty: r,
		rootData: s
	}) || ((o = null === o ? w.errors : o.concat(w.errors)), (a = o.length));
	var u = p === a;
	if (((l = l || u), !l)) {
		const i = a;
		z(e, {
			instancePath: t,
			parentData: n,
			parentDataProperty: r,
			rootData: s
		}) || ((o = null === o ? z.errors : o.concat(z.errors)), (a = o.length)),
			(u = i === a),
			(l = l || u);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (M.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(M.errors = o),
		0 === a
	);
}
const N = { validate: B };
function T(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!Array.isArray(e))
			return (T.errors = [{ params: { type: "array" } }]), !1;
		{
			const n = e.length;
			for (let r = 0; r < n; r++) {
				const n = a,
					i = a;
				let l = !1,
					p = null;
				const u = a;
				if (
					(N.validate(e[r], {
						instancePath: t + "/" + r,
						parentData: e,
						parentDataProperty: r,
						rootData: s
					}) ||
						((o = null === o ? N.validate.errors : o.concat(N.validate.errors)),
						(a = o.length)),
					u === a && ((l = !0), (p = 0)),
					!l)
				) {
					const e = { params: { passingSchemas: p } };
					return null === o ? (o = [e]) : o.push(e), a++, (T.errors = o), !1;
				}
				if (((a = i), null !== o && (i ? (o.length = i) : (o = null)), n !== a))
					break;
			}
		}
	}
	return (T.errors = o), 0 === a;
}
function I(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (I.errors = [{ params: { type: "object" } }]), !1;
		{
			const n = a;
			for (const t in e)
				if ("and" !== t && "not" !== t && "or" !== t)
					return (I.errors = [{ params: { additionalProperty: t } }]), !1;
			if (n === a) {
				if (void 0 !== e.and) {
					const n = a,
						r = a;
					let l = !1,
						p = null;
					const u = a;
					if (
						(T(e.and, {
							instancePath: t + "/and",
							parentData: e,
							parentDataProperty: "and",
							rootData: s
						}) ||
							((o = null === o ? T.errors : o.concat(T.errors)),
							(a = o.length)),
						u === a && ((l = !0), (p = 0)),
						!l)
					) {
						const e = { params: { passingSchemas: p } };
						return null === o ? (o = [e]) : o.push(e), a++, (I.errors = o), !1;
					}
					(a = r), null !== o && (r ? (o.length = r) : (o = null));
					var i = n === a;
				} else i = !0;
				if (i) {
					if (void 0 !== e.not) {
						const n = a,
							r = a;
						let l = !1,
							p = null;
						const u = a;
						if (
							(N.validate(e.not, {
								instancePath: t + "/not",
								parentData: e,
								parentDataProperty: "not",
								rootData: s
							}) ||
								((o =
									null === o ? N.validate.errors : o.concat(N.validate.errors)),
								(a = o.length)),
							u === a && ((l = !0), (p = 0)),
							!l)
						) {
							const e = { params: { passingSchemas: p } };
							return (
								null === o ? (o = [e]) : o.push(e), a++, (I.errors = o), !1
							);
						}
						(a = r),
							null !== o && (r ? (o.length = r) : (o = null)),
							(i = n === a);
					} else i = !0;
					if (i)
						if (void 0 !== e.or) {
							const n = a,
								r = a;
							let l = !1,
								p = null;
							const u = a;
							if (
								(T(e.or, {
									instancePath: t + "/or",
									parentData: e,
									parentDataProperty: "or",
									rootData: s
								}) ||
									((o = null === o ? T.errors : o.concat(T.errors)),
									(a = o.length)),
								u === a && ((l = !0), (p = 0)),
								!l)
							) {
								const e = { params: { passingSchemas: p } };
								return (
									null === o ? (o = [e]) : o.push(e), a++, (I.errors = o), !1
								);
							}
							(a = r),
								null !== o && (r ? (o.length = r) : (o = null)),
								(i = n === a);
						} else i = !0;
				}
			}
		}
	}
	return (I.errors = o), 0 === a;
}
function B(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	const l = i;
	let p = !1;
	const u = i;
	if (!(t instanceof RegExp)) {
		const e = { params: {} };
		null === a ? (a = [e]) : a.push(e), i++;
	}
	var f = u === i;
	if (((p = p || f), !p)) {
		const l = i;
		if (i === l)
			if ("string" == typeof t) {
				if (t.includes("!") || !0 !== e.test(t)) {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
			} else {
				const e = { params: { type: "string" } };
				null === a ? (a = [e]) : a.push(e), i++;
			}
		if (((f = l === i), (p = p || f), !p)) {
			const e = i;
			if (!(t instanceof Function)) {
				const e = { params: {} };
				null === a ? (a = [e]) : a.push(e), i++;
			}
			if (((f = e === i), (p = p || f), !p)) {
				const e = i;
				if (
					(I(t, {
						instancePath: n,
						parentData: r,
						parentDataProperty: s,
						rootData: o
					}) ||
						((a = null === a ? I.errors : a.concat(I.errors)), (i = a.length)),
					(f = e === i),
					(p = p || f),
					!p)
				) {
					const e = i;
					T(t, {
						instancePath: n,
						parentData: r,
						parentDataProperty: s,
						rootData: o
					}) ||
						((a = null === a ? T.errors : a.concat(T.errors)), (i = a.length)),
						(f = e === i),
						(p = p || f);
				}
			}
		}
	}
	if (!p) {
		const e = { params: {} };
		return null === a ? (a = [e]) : a.push(e), i++, (B.errors = a), !1;
	}
	return (
		(i = l),
		null !== a && (l ? (a.length = l) : (a = null)),
		(B.errors = a),
		0 === i
	);
}
function U(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	B(e, {
		instancePath: t,
		parentData: n,
		parentDataProperty: r,
		rootData: s
	}) || ((o = null === o ? B.errors : o.concat(B.errors)), (a = o.length));
	var u = p === a;
	if (((l = l || u), !l)) {
		const i = a;
		T(e, {
			instancePath: t,
			parentData: n,
			parentDataProperty: r,
			rootData: s
		}) || ((o = null === o ? T.errors : o.concat(T.errors)), (a = o.length)),
			(u = i === a),
			(l = l || u);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (U.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(U.errors = o),
		0 === a
	);
}
const q = {
		alias: { $ref: "#/definitions/ResolveAlias" },
		aliasFields: {
			type: "array",
			items: {
				anyOf: [
					{ type: "array", items: { type: "string", minLength: 1 } },
					{ type: "string", minLength: 1 }
				]
			}
		},
		byDependency: {
			type: "object",
			additionalProperties: {
				oneOf: [{ $ref: "#/definitions/ResolveOptions" }]
			}
		},
		cache: { type: "boolean" },
		cachePredicate: { instanceof: "Function" },
		cacheWithContext: { type: "boolean" },
		conditionNames: { type: "array", items: { type: "string" } },
		descriptionFiles: {
			type: "array",
			items: { type: "string", minLength: 1 }
		},
		enforceExtension: { type: "boolean" },
		exportsFields: { type: "array", items: { type: "string" } },
		extensionAlias: {
			type: "object",
			additionalProperties: {
				anyOf: [
					{ type: "array", items: { type: "string", minLength: 1 } },
					{ type: "string", minLength: 1 }
				]
			}
		},
		extensions: { type: "array", items: { type: "string" } },
		fallback: { oneOf: [{ $ref: "#/definitions/ResolveAlias" }] },
		fileSystem: {},
		fullySpecified: { type: "boolean" },
		importsFields: { type: "array", items: { type: "string" } },
		mainFields: {
			type: "array",
			items: {
				anyOf: [
					{ type: "array", items: { type: "string", minLength: 1 } },
					{ type: "string", minLength: 1 }
				]
			}
		},
		mainFiles: { type: "array", items: { type: "string", minLength: 1 } },
		modules: { type: "array", items: { type: "string", minLength: 1 } },
		plugins: {
			type: "array",
			items: {
				anyOf: [
					{ enum: ["..."] },
					{ $ref: "#/definitions/ResolvePluginInstance" }
				]
			}
		},
		preferAbsolute: { type: "boolean" },
		preferRelative: { type: "boolean" },
		resolver: {},
		restrictions: {
			type: "array",
			items: {
				anyOf: [
					{ instanceof: "RegExp" },
					{ type: "string", absolutePath: !0, minLength: 1 }
				]
			}
		},
		roots: { type: "array", items: { type: "string" } },
		symlinks: { type: "boolean" },
		unsafeCache: {
			anyOf: [{ type: "boolean" }, { type: "object", additionalProperties: !0 }]
		},
		useSyncFileSystemCalls: { type: "boolean" }
	},
	G = { validate: W };
function W(
	t,
	{
		instancePath: r = "",
		parentData: s,
		parentDataProperty: o,
		rootData: a = t
	} = {}
) {
	let i = null,
		l = 0;
	if (0 === l) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (W.errors = [{ params: { type: "object" } }]), !1;
		{
			const s = l;
			for (const e in t)
				if (!n.call(q, e))
					return (W.errors = [{ params: { additionalProperty: e } }]), !1;
			if (s === l) {
				if (void 0 !== t.alias) {
					let e = t.alias;
					const n = l,
						r = l;
					let s = !1;
					const o = l;
					if (l === o)
						if (Array.isArray(e)) {
							const t = e.length;
							for (let n = 0; n < t; n++) {
								let t = e[n];
								const r = l;
								if (l === r)
									if (t && "object" == typeof t && !Array.isArray(t)) {
										let e;
										if (
											(void 0 === t.alias && (e = "alias")) ||
											(void 0 === t.name && (e = "name"))
										) {
											const t = { params: { missingProperty: e } };
											null === i ? (i = [t]) : i.push(t), l++;
										} else {
											const e = l;
											for (const e in t)
												if (
													"alias" !== e &&
													"name" !== e &&
													"onlyModule" !== e
												) {
													const t = { params: { additionalProperty: e } };
													null === i ? (i = [t]) : i.push(t), l++;
													break;
												}
											if (e === l) {
												if (void 0 !== t.alias) {
													let e = t.alias;
													const n = l,
														r = l;
													let s = !1;
													const o = l;
													if (l === o)
														if (Array.isArray(e)) {
															const t = e.length;
															for (let n = 0; n < t; n++) {
																let t = e[n];
																const r = l;
																if (l === r)
																	if ("string" == typeof t) {
																		if (t.length < 1) {
																			const e = { params: {} };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	} else {
																		const e = { params: { type: "string" } };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																if (r !== l) break;
															}
														} else {
															const e = { params: { type: "array" } };
															null === i ? (i = [e]) : i.push(e), l++;
														}
													var p = o === l;
													if (((s = s || p), !s)) {
														const t = l;
														if (!1 !== e) {
															const e = { params: {} };
															null === i ? (i = [e]) : i.push(e), l++;
														}
														if (((p = t === l), (s = s || p), !s)) {
															const t = l;
															if (l === t)
																if ("string" == typeof e) {
																	if (e.length < 1) {
																		const e = { params: {} };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																} else {
																	const e = { params: { type: "string" } };
																	null === i ? (i = [e]) : i.push(e), l++;
																}
															(p = t === l), (s = s || p);
														}
													}
													if (s)
														(l = r),
															null !== i && (r ? (i.length = r) : (i = null));
													else {
														const e = { params: {} };
														null === i ? (i = [e]) : i.push(e), l++;
													}
													var u = n === l;
												} else u = !0;
												if (u) {
													if (void 0 !== t.name) {
														const e = l;
														if ("string" != typeof t.name) {
															const e = { params: { type: "string" } };
															null === i ? (i = [e]) : i.push(e), l++;
														}
														u = e === l;
													} else u = !0;
													if (u)
														if (void 0 !== t.onlyModule) {
															const e = l;
															if ("boolean" != typeof t.onlyModule) {
																const e = { params: { type: "boolean" } };
																null === i ? (i = [e]) : i.push(e), l++;
															}
															u = e === l;
														} else u = !0;
												}
											}
										}
									} else {
										const e = { params: { type: "object" } };
										null === i ? (i = [e]) : i.push(e), l++;
									}
								if (r !== l) break;
							}
						} else {
							const e = { params: { type: "array" } };
							null === i ? (i = [e]) : i.push(e), l++;
						}
					var f = o === l;
					if (((s = s || f), !s)) {
						const t = l;
						if (l === t)
							if (e && "object" == typeof e && !Array.isArray(e))
								for (const t in e) {
									let n = e[t];
									const r = l,
										s = l;
									let o = !1;
									const a = l;
									if (l === a)
										if (Array.isArray(n)) {
											const e = n.length;
											for (let t = 0; t < e; t++) {
												let e = n[t];
												const r = l;
												if (l === r)
													if ("string" == typeof e) {
														if (e.length < 1) {
															const e = { params: {} };
															null === i ? (i = [e]) : i.push(e), l++;
														}
													} else {
														const e = { params: { type: "string" } };
														null === i ? (i = [e]) : i.push(e), l++;
													}
												if (r !== l) break;
											}
										} else {
											const e = { params: { type: "array" } };
											null === i ? (i = [e]) : i.push(e), l++;
										}
									var c = a === l;
									if (((o = o || c), !o)) {
										const e = l;
										if (!1 !== n) {
											const e = { params: {} };
											null === i ? (i = [e]) : i.push(e), l++;
										}
										if (((c = e === l), (o = o || c), !o)) {
											const e = l;
											if (l === e)
												if ("string" == typeof n) {
													if (n.length < 1) {
														const e = { params: {} };
														null === i ? (i = [e]) : i.push(e), l++;
													}
												} else {
													const e = { params: { type: "string" } };
													null === i ? (i = [e]) : i.push(e), l++;
												}
											(c = e === l), (o = o || c);
										}
									}
									if (o)
										(l = s), null !== i && (s ? (i.length = s) : (i = null));
									else {
										const e = { params: {} };
										null === i ? (i = [e]) : i.push(e), l++;
									}
									if (r !== l) break;
								}
							else {
								const e = { params: { type: "object" } };
								null === i ? (i = [e]) : i.push(e), l++;
							}
						(f = t === l), (s = s || f);
					}
					if (!s) {
						const e = { params: {} };
						return null === i ? (i = [e]) : i.push(e), l++, (W.errors = i), !1;
					}
					(l = r), null !== i && (r ? (i.length = r) : (i = null));
					var m = n === l;
				} else m = !0;
				if (m) {
					if (void 0 !== t.aliasFields) {
						let e = t.aliasFields;
						const n = l;
						if (l === n) {
							if (!Array.isArray(e))
								return (W.errors = [{ params: { type: "array" } }]), !1;
							{
								const t = e.length;
								for (let n = 0; n < t; n++) {
									let t = e[n];
									const r = l,
										s = l;
									let o = !1;
									const a = l;
									if (l === a)
										if (Array.isArray(t)) {
											const e = t.length;
											for (let n = 0; n < e; n++) {
												let e = t[n];
												const r = l;
												if (l === r)
													if ("string" == typeof e) {
														if (e.length < 1) {
															const e = { params: {} };
															null === i ? (i = [e]) : i.push(e), l++;
														}
													} else {
														const e = { params: { type: "string" } };
														null === i ? (i = [e]) : i.push(e), l++;
													}
												if (r !== l) break;
											}
										} else {
											const e = { params: { type: "array" } };
											null === i ? (i = [e]) : i.push(e), l++;
										}
									var y = a === l;
									if (((o = o || y), !o)) {
										const e = l;
										if (l === e)
											if ("string" == typeof t) {
												if (t.length < 1) {
													const e = { params: {} };
													null === i ? (i = [e]) : i.push(e), l++;
												}
											} else {
												const e = { params: { type: "string" } };
												null === i ? (i = [e]) : i.push(e), l++;
											}
										(y = e === l), (o = o || y);
									}
									if (!o) {
										const e = { params: {} };
										return (
											null === i ? (i = [e]) : i.push(e),
											l++,
											(W.errors = i),
											!1
										);
									}
									if (
										((l = s),
										null !== i && (s ? (i.length = s) : (i = null)),
										r !== l)
									)
										break;
								}
							}
						}
						m = n === l;
					} else m = !0;
					if (m) {
						if (void 0 !== t.byDependency) {
							let e = t.byDependency;
							const n = l;
							if (l === n) {
								if (!e || "object" != typeof e || Array.isArray(e))
									return (W.errors = [{ params: { type: "object" } }]), !1;
								for (const t in e) {
									const n = l,
										s = l;
									let o = !1,
										p = null;
									const u = l;
									if (
										(G.validate(e[t], {
											instancePath:
												r +
												"/byDependency/" +
												t.replace(/~/g, "~0").replace(/\//g, "~1"),
											parentData: e,
											parentDataProperty: t,
											rootData: a
										}) ||
											((i =
												null === i
													? G.validate.errors
													: i.concat(G.validate.errors)),
											(l = i.length)),
										u === l && ((o = !0), (p = 0)),
										!o)
									) {
										const e = { params: { passingSchemas: p } };
										return (
											null === i ? (i = [e]) : i.push(e),
											l++,
											(W.errors = i),
											!1
										);
									}
									if (
										((l = s),
										null !== i && (s ? (i.length = s) : (i = null)),
										n !== l)
									)
										break;
								}
							}
							m = n === l;
						} else m = !0;
						if (m) {
							if (void 0 !== t.cache) {
								const e = l;
								if ("boolean" != typeof t.cache)
									return (W.errors = [{ params: { type: "boolean" } }]), !1;
								m = e === l;
							} else m = !0;
							if (m) {
								if (void 0 !== t.cachePredicate) {
									const e = l;
									if (!(t.cachePredicate instanceof Function))
										return (W.errors = [{ params: {} }]), !1;
									m = e === l;
								} else m = !0;
								if (m) {
									if (void 0 !== t.cacheWithContext) {
										const e = l;
										if ("boolean" != typeof t.cacheWithContext)
											return (W.errors = [{ params: { type: "boolean" } }]), !1;
										m = e === l;
									} else m = !0;
									if (m) {
										if (void 0 !== t.conditionNames) {
											let e = t.conditionNames;
											const n = l;
											if (l === n) {
												if (!Array.isArray(e))
													return (
														(W.errors = [{ params: { type: "array" } }]), !1
													);
												{
													const t = e.length;
													for (let n = 0; n < t; n++) {
														const t = l;
														if ("string" != typeof e[n])
															return (
																(W.errors = [{ params: { type: "string" } }]),
																!1
															);
														if (t !== l) break;
													}
												}
											}
											m = n === l;
										} else m = !0;
										if (m) {
											if (void 0 !== t.descriptionFiles) {
												let e = t.descriptionFiles;
												const n = l;
												if (l === n) {
													if (!Array.isArray(e))
														return (
															(W.errors = [{ params: { type: "array" } }]), !1
														);
													{
														const t = e.length;
														for (let n = 0; n < t; n++) {
															let t = e[n];
															const r = l;
															if (l === r) {
																if ("string" != typeof t)
																	return (
																		(W.errors = [
																			{ params: { type: "string" } }
																		]),
																		!1
																	);
																if (t.length < 1)
																	return (W.errors = [{ params: {} }]), !1;
															}
															if (r !== l) break;
														}
													}
												}
												m = n === l;
											} else m = !0;
											if (m) {
												if (void 0 !== t.enforceExtension) {
													const e = l;
													if ("boolean" != typeof t.enforceExtension)
														return (
															(W.errors = [{ params: { type: "boolean" } }]), !1
														);
													m = e === l;
												} else m = !0;
												if (m) {
													if (void 0 !== t.exportsFields) {
														let e = t.exportsFields;
														const n = l;
														if (l === n) {
															if (!Array.isArray(e))
																return (
																	(W.errors = [{ params: { type: "array" } }]),
																	!1
																);
															{
																const t = e.length;
																for (let n = 0; n < t; n++) {
																	const t = l;
																	if ("string" != typeof e[n])
																		return (
																			(W.errors = [
																				{ params: { type: "string" } }
																			]),
																			!1
																		);
																	if (t !== l) break;
																}
															}
														}
														m = n === l;
													} else m = !0;
													if (m) {
														if (void 0 !== t.extensionAlias) {
															let e = t.extensionAlias;
															const n = l;
															if (l === n) {
																if (
																	!e ||
																	"object" != typeof e ||
																	Array.isArray(e)
																)
																	return (
																		(W.errors = [
																			{ params: { type: "object" } }
																		]),
																		!1
																	);
																for (const t in e) {
																	let n = e[t];
																	const r = l,
																		s = l;
																	let o = !1;
																	const a = l;
																	if (l === a)
																		if (Array.isArray(n)) {
																			const e = n.length;
																			for (let t = 0; t < e; t++) {
																				let e = n[t];
																				const r = l;
																				if (l === r)
																					if ("string" == typeof e) {
																						if (e.length < 1) {
																							const e = { params: {} };
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																					} else {
																						const e = {
																							params: { type: "string" }
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																				if (r !== l) break;
																			}
																		} else {
																			const e = { params: { type: "array" } };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	var h = a === l;
																	if (((o = o || h), !o)) {
																		const e = l;
																		if (l === e)
																			if ("string" == typeof n) {
																				if (n.length < 1) {
																					const e = { params: {} };
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																			} else {
																				const e = {
																					params: { type: "string" }
																				};
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																		(h = e === l), (o = o || h);
																	}
																	if (!o) {
																		const e = { params: {} };
																		return (
																			null === i ? (i = [e]) : i.push(e),
																			l++,
																			(W.errors = i),
																			!1
																		);
																	}
																	if (
																		((l = s),
																		null !== i &&
																			(s ? (i.length = s) : (i = null)),
																		r !== l)
																	)
																		break;
																}
															}
															m = n === l;
														} else m = !0;
														if (m) {
															if (void 0 !== t.extensions) {
																let e = t.extensions;
																const n = l;
																if (l === n) {
																	if (!Array.isArray(e))
																		return (
																			(W.errors = [
																				{ params: { type: "array" } }
																			]),
																			!1
																		);
																	{
																		const t = e.length;
																		for (let n = 0; n < t; n++) {
																			const t = l;
																			if ("string" != typeof e[n])
																				return (
																					(W.errors = [
																						{ params: { type: "string" } }
																					]),
																					!1
																				);
																			if (t !== l) break;
																		}
																	}
																}
																m = n === l;
															} else m = !0;
															if (m) {
																if (void 0 !== t.fallback) {
																	let e = t.fallback;
																	const n = l,
																		r = l;
																	let s = !1,
																		o = null;
																	const a = l,
																		p = l;
																	let u = !1;
																	const f = l;
																	if (l === f)
																		if (Array.isArray(e)) {
																			const t = e.length;
																			for (let n = 0; n < t; n++) {
																				let t = e[n];
																				const r = l;
																				if (l === r)
																					if (
																						t &&
																						"object" == typeof t &&
																						!Array.isArray(t)
																					) {
																						let e;
																						if (
																							(void 0 === t.alias &&
																								(e = "alias")) ||
																							(void 0 === t.name &&
																								(e = "name"))
																						) {
																							const t = {
																								params: { missingProperty: e }
																							};
																							null === i
																								? (i = [t])
																								: i.push(t),
																								l++;
																						} else {
																							const e = l;
																							for (const e in t)
																								if (
																									"alias" !== e &&
																									"name" !== e &&
																									"onlyModule" !== e
																								) {
																									const t = {
																										params: {
																											additionalProperty: e
																										}
																									};
																									null === i
																										? (i = [t])
																										: i.push(t),
																										l++;
																									break;
																								}
																							if (e === l) {
																								if (void 0 !== t.alias) {
																									let e = t.alias;
																									const n = l,
																										r = l;
																									let s = !1;
																									const o = l;
																									if (l === o)
																										if (Array.isArray(e)) {
																											const t = e.length;
																											for (
																												let n = 0;
																												n < t;
																												n++
																											) {
																												let t = e[n];
																												const r = l;
																												if (l === r)
																													if (
																														"string" == typeof t
																													) {
																														if (t.length < 1) {
																															const e = {
																																params: {}
																															};
																															null === i
																																? (i = [e])
																																: i.push(e),
																																l++;
																														}
																													} else {
																														const e = {
																															params: {
																																type: "string"
																															}
																														};
																														null === i
																															? (i = [e])
																															: i.push(e),
																															l++;
																													}
																												if (r !== l) break;
																											}
																										} else {
																											const e = {
																												params: {
																													type: "array"
																												}
																											};
																											null === i
																												? (i = [e])
																												: i.push(e),
																												l++;
																										}
																									var d = o === l;
																									if (((s = s || d), !s)) {
																										const t = l;
																										if (!1 !== e) {
																											const e = { params: {} };
																											null === i
																												? (i = [e])
																												: i.push(e),
																												l++;
																										}
																										if (
																											((d = t === l),
																											(s = s || d),
																											!s)
																										) {
																											const t = l;
																											if (l === t)
																												if (
																													"string" == typeof e
																												) {
																													if (e.length < 1) {
																														const e = {
																															params: {}
																														};
																														null === i
																															? (i = [e])
																															: i.push(e),
																															l++;
																													}
																												} else {
																													const e = {
																														params: {
																															type: "string"
																														}
																													};
																													null === i
																														? (i = [e])
																														: i.push(e),
																														l++;
																												}
																											(d = t === l),
																												(s = s || d);
																										}
																									}
																									if (s)
																										(l = r),
																											null !== i &&
																												(r
																													? (i.length = r)
																													: (i = null));
																									else {
																										const e = { params: {} };
																										null === i
																											? (i = [e])
																											: i.push(e),
																											l++;
																									}
																									var g = n === l;
																								} else g = !0;
																								if (g) {
																									if (void 0 !== t.name) {
																										const e = l;
																										if (
																											"string" != typeof t.name
																										) {
																											const e = {
																												params: {
																													type: "string"
																												}
																											};
																											null === i
																												? (i = [e])
																												: i.push(e),
																												l++;
																										}
																										g = e === l;
																									} else g = !0;
																									if (g)
																										if (
																											void 0 !== t.onlyModule
																										) {
																											const e = l;
																											if (
																												"boolean" !=
																												typeof t.onlyModule
																											) {
																												const e = {
																													params: {
																														type: "boolean"
																													}
																												};
																												null === i
																													? (i = [e])
																													: i.push(e),
																													l++;
																											}
																											g = e === l;
																										} else g = !0;
																								}
																							}
																						}
																					} else {
																						const e = {
																							params: { type: "object" }
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																				if (r !== l) break;
																			}
																		} else {
																			const e = { params: { type: "array" } };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	var b = f === l;
																	if (((u = u || b), !u)) {
																		const t = l;
																		if (l === t)
																			if (
																				e &&
																				"object" == typeof e &&
																				!Array.isArray(e)
																			)
																				for (const t in e) {
																					let n = e[t];
																					const r = l,
																						s = l;
																					let o = !1;
																					const a = l;
																					if (l === a)
																						if (Array.isArray(n)) {
																							const e = n.length;
																							for (let t = 0; t < e; t++) {
																								let e = n[t];
																								const r = l;
																								if (l === r)
																									if ("string" == typeof e) {
																										if (e.length < 1) {
																											const e = { params: {} };
																											null === i
																												? (i = [e])
																												: i.push(e),
																												l++;
																										}
																									} else {
																										const e = {
																											params: { type: "string" }
																										};
																										null === i
																											? (i = [e])
																											: i.push(e),
																											l++;
																									}
																								if (r !== l) break;
																							}
																						} else {
																							const e = {
																								params: { type: "array" }
																							};
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																					var v = a === l;
																					if (((o = o || v), !o)) {
																						const e = l;
																						if (!1 !== n) {
																							const e = { params: {} };
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																						if (
																							((v = e === l), (o = o || v), !o)
																						) {
																							const e = l;
																							if (l === e)
																								if ("string" == typeof n) {
																									if (n.length < 1) {
																										const e = { params: {} };
																										null === i
																											? (i = [e])
																											: i.push(e),
																											l++;
																									}
																								} else {
																									const e = {
																										params: { type: "string" }
																									};
																									null === i
																										? (i = [e])
																										: i.push(e),
																										l++;
																								}
																							(v = e === l), (o = o || v);
																						}
																					}
																					if (o)
																						(l = s),
																							null !== i &&
																								(s
																									? (i.length = s)
																									: (i = null));
																					else {
																						const e = { params: {} };
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																					if (r !== l) break;
																				}
																			else {
																				const e = {
																					params: { type: "object" }
																				};
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																		(b = t === l), (u = u || b);
																	}
																	if (u)
																		(l = p),
																			null !== i &&
																				(p ? (i.length = p) : (i = null));
																	else {
																		const e = { params: {} };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																	if ((a === l && ((s = !0), (o = 0)), !s)) {
																		const e = { params: { passingSchemas: o } };
																		return (
																			null === i ? (i = [e]) : i.push(e),
																			l++,
																			(W.errors = i),
																			!1
																		);
																	}
																	(l = r),
																		null !== i &&
																			(r ? (i.length = r) : (i = null)),
																		(m = n === l);
																} else m = !0;
																if (m) {
																	if (void 0 !== t.fullySpecified) {
																		const e = l;
																		if ("boolean" != typeof t.fullySpecified)
																			return (
																				(W.errors = [
																					{ params: { type: "boolean" } }
																				]),
																				!1
																			);
																		m = e === l;
																	} else m = !0;
																	if (m) {
																		if (void 0 !== t.importsFields) {
																			let e = t.importsFields;
																			const n = l;
																			if (l === n) {
																				if (!Array.isArray(e))
																					return (
																						(W.errors = [
																							{ params: { type: "array" } }
																						]),
																						!1
																					);
																				{
																					const t = e.length;
																					for (let n = 0; n < t; n++) {
																						const t = l;
																						if ("string" != typeof e[n])
																							return (
																								(W.errors = [
																									{ params: { type: "string" } }
																								]),
																								!1
																							);
																						if (t !== l) break;
																					}
																				}
																			}
																			m = n === l;
																		} else m = !0;
																		if (m) {
																			if (void 0 !== t.mainFields) {
																				let e = t.mainFields;
																				const n = l;
																				if (l === n) {
																					if (!Array.isArray(e))
																						return (
																							(W.errors = [
																								{ params: { type: "array" } }
																							]),
																							!1
																						);
																					{
																						const t = e.length;
																						for (let n = 0; n < t; n++) {
																							let t = e[n];
																							const r = l,
																								s = l;
																							let o = !1;
																							const a = l;
																							if (l === a)
																								if (Array.isArray(t)) {
																									const e = t.length;
																									for (let n = 0; n < e; n++) {
																										let e = t[n];
																										const r = l;
																										if (l === r)
																											if (
																												"string" == typeof e
																											) {
																												if (e.length < 1) {
																													const e = {
																														params: {}
																													};
																													null === i
																														? (i = [e])
																														: i.push(e),
																														l++;
																												}
																											} else {
																												const e = {
																													params: {
																														type: "string"
																													}
																												};
																												null === i
																													? (i = [e])
																													: i.push(e),
																													l++;
																											}
																										if (r !== l) break;
																									}
																								} else {
																									const e = {
																										params: { type: "array" }
																									};
																									null === i
																										? (i = [e])
																										: i.push(e),
																										l++;
																								}
																							var D = a === l;
																							if (((o = o || D), !o)) {
																								const e = l;
																								if (l === e)
																									if ("string" == typeof t) {
																										if (t.length < 1) {
																											const e = { params: {} };
																											null === i
																												? (i = [e])
																												: i.push(e),
																												l++;
																										}
																									} else {
																										const e = {
																											params: { type: "string" }
																										};
																										null === i
																											? (i = [e])
																											: i.push(e),
																											l++;
																									}
																								(D = e === l), (o = o || D);
																							}
																							if (!o) {
																								const e = { params: {} };
																								return (
																									null === i
																										? (i = [e])
																										: i.push(e),
																									l++,
																									(W.errors = i),
																									!1
																								);
																							}
																							if (
																								((l = s),
																								null !== i &&
																									(s
																										? (i.length = s)
																										: (i = null)),
																								r !== l)
																							)
																								break;
																						}
																					}
																				}
																				m = n === l;
																			} else m = !0;
																			if (m) {
																				if (void 0 !== t.mainFiles) {
																					let e = t.mainFiles;
																					const n = l;
																					if (l === n) {
																						if (!Array.isArray(e))
																							return (
																								(W.errors = [
																									{ params: { type: "array" } }
																								]),
																								!1
																							);
																						{
																							const t = e.length;
																							for (let n = 0; n < t; n++) {
																								let t = e[n];
																								const r = l;
																								if (l === r) {
																									if ("string" != typeof t)
																										return (
																											(W.errors = [
																												{
																													params: {
																														type: "string"
																													}
																												}
																											]),
																											!1
																										);
																									if (t.length < 1)
																										return (
																											(W.errors = [
																												{ params: {} }
																											]),
																											!1
																										);
																								}
																								if (r !== l) break;
																							}
																						}
																					}
																					m = n === l;
																				} else m = !0;
																				if (m) {
																					if (void 0 !== t.modules) {
																						let e = t.modules;
																						const n = l;
																						if (l === n) {
																							if (!Array.isArray(e))
																								return (
																									(W.errors = [
																										{
																											params: { type: "array" }
																										}
																									]),
																									!1
																								);
																							{
																								const t = e.length;
																								for (let n = 0; n < t; n++) {
																									let t = e[n];
																									const r = l;
																									if (l === r) {
																										if ("string" != typeof t)
																											return (
																												(W.errors = [
																													{
																														params: {
																															type: "string"
																														}
																													}
																												]),
																												!1
																											);
																										if (t.length < 1)
																											return (
																												(W.errors = [
																													{ params: {} }
																												]),
																												!1
																											);
																									}
																									if (r !== l) break;
																								}
																							}
																						}
																						m = n === l;
																					} else m = !0;
																					if (m) {
																						if (void 0 !== t.plugins) {
																							let e = t.plugins;
																							const n = l;
																							if (l === n) {
																								if (!Array.isArray(e))
																									return (
																										(W.errors = [
																											{
																												params: {
																													type: "array"
																												}
																											}
																										]),
																										!1
																									);
																								{
																									const t = e.length;
																									for (let n = 0; n < t; n++) {
																										let t = e[n];
																										const r = l,
																											s = l;
																										let o = !1;
																										const a = l;
																										if ("..." !== t) {
																											const e = { params: {} };
																											null === i
																												? (i = [e])
																												: i.push(e),
																												l++;
																										}
																										var P = a === l;
																										if (((o = o || P), !o)) {
																											const e = l;
																											if (l == l)
																												if (
																													t &&
																													"object" ==
																														typeof t &&
																													!Array.isArray(t)
																												) {
																													let e;
																													if (
																														void 0 ===
																															t.apply &&
																														(e = "apply")
																													) {
																														const t = {
																															params: {
																																missingProperty:
																																	e
																															}
																														};
																														null === i
																															? (i = [t])
																															: i.push(t),
																															l++;
																													} else if (
																														void 0 !==
																															t.apply &&
																														!(
																															t.apply instanceof
																															Function
																														)
																													) {
																														const e = {
																															params: {}
																														};
																														null === i
																															? (i = [e])
																															: i.push(e),
																															l++;
																													}
																												} else {
																													const e = {
																														params: {
																															type: "object"
																														}
																													};
																													null === i
																														? (i = [e])
																														: i.push(e),
																														l++;
																												}
																											(P = e === l),
																												(o = o || P);
																										}
																										if (!o) {
																											const e = { params: {} };
																											return (
																												null === i
																													? (i = [e])
																													: i.push(e),
																												l++,
																												(W.errors = i),
																												!1
																											);
																										}
																										if (
																											((l = s),
																											null !== i &&
																												(s
																													? (i.length = s)
																													: (i = null)),
																											r !== l)
																										)
																											break;
																									}
																								}
																							}
																							m = n === l;
																						} else m = !0;
																						if (m) {
																							if (void 0 !== t.preferAbsolute) {
																								const e = l;
																								if (
																									"boolean" !=
																									typeof t.preferAbsolute
																								)
																									return (
																										(W.errors = [
																											{
																												params: {
																													type: "boolean"
																												}
																											}
																										]),
																										!1
																									);
																								m = e === l;
																							} else m = !0;
																							if (m) {
																								if (
																									void 0 !== t.preferRelative
																								) {
																									const e = l;
																									if (
																										"boolean" !=
																										typeof t.preferRelative
																									)
																										return (
																											(W.errors = [
																												{
																													params: {
																														type: "boolean"
																													}
																												}
																											]),
																											!1
																										);
																									m = e === l;
																								} else m = !0;
																								if (m) {
																									if (
																										void 0 !== t.restrictions
																									) {
																										let n = t.restrictions;
																										const r = l;
																										if (l === r) {
																											if (!Array.isArray(n))
																												return (
																													(W.errors = [
																														{
																															params: {
																																type: "array"
																															}
																														}
																													]),
																													!1
																												);
																											{
																												const t = n.length;
																												for (
																													let r = 0;
																													r < t;
																													r++
																												) {
																													let t = n[r];
																													const s = l,
																														o = l;
																													let a = !1;
																													const p = l;
																													if (
																														!(
																															t instanceof
																															RegExp
																														)
																													) {
																														const e = {
																															params: {}
																														};
																														null === i
																															? (i = [e])
																															: i.push(e),
																															l++;
																													}
																													var A = p === l;
																													if (
																														((a = a || A), !a)
																													) {
																														const n = l;
																														if (l === n)
																															if (
																																"string" ==
																																typeof t
																															) {
																																if (
																																	t.includes(
																																		"!"
																																	) ||
																																	!0 !==
																																		e.test(t)
																																) {
																																	const e = {
																																		params: {}
																																	};
																																	null === i
																																		? (i = [e])
																																		: i.push(e),
																																		l++;
																																} else if (
																																	t.length < 1
																																) {
																																	const e = {
																																		params: {}
																																	};
																																	null === i
																																		? (i = [e])
																																		: i.push(e),
																																		l++;
																																}
																															} else {
																																const e = {
																																	params: {
																																		type: "string"
																																	}
																																};
																																null === i
																																	? (i = [e])
																																	: i.push(e),
																																	l++;
																															}
																														(A = n === l),
																															(a = a || A);
																													}
																													if (!a) {
																														const e = {
																															params: {}
																														};
																														return (
																															null === i
																																? (i = [e])
																																: i.push(e),
																															l++,
																															(W.errors = i),
																															!1
																														);
																													}
																													if (
																														((l = o),
																														null !== i &&
																															(o
																																? (i.length = o)
																																: (i = null)),
																														s !== l)
																													)
																														break;
																												}
																											}
																										}
																										m = r === l;
																									} else m = !0;
																									if (m) {
																										if (void 0 !== t.roots) {
																											let e = t.roots;
																											const n = l;
																											if (l === n) {
																												if (!Array.isArray(e))
																													return (
																														(W.errors = [
																															{
																																params: {
																																	type: "array"
																																}
																															}
																														]),
																														!1
																													);
																												{
																													const t = e.length;
																													for (
																														let n = 0;
																														n < t;
																														n++
																													) {
																														const t = l;
																														if (
																															"string" !=
																															typeof e[n]
																														)
																															return (
																																(W.errors = [
																																	{
																																		params: {
																																			type: "string"
																																		}
																																	}
																																]),
																																!1
																															);
																														if (t !== l) break;
																													}
																												}
																											}
																											m = n === l;
																										} else m = !0;
																										if (m) {
																											if (
																												void 0 !== t.symlinks
																											) {
																												const e = l;
																												if (
																													"boolean" !=
																													typeof t.symlinks
																												)
																													return (
																														(W.errors = [
																															{
																																params: {
																																	type: "boolean"
																																}
																															}
																														]),
																														!1
																													);
																												m = e === l;
																											} else m = !0;
																											if (m) {
																												if (
																													void 0 !==
																													t.unsafeCache
																												) {
																													let e = t.unsafeCache;
																													const n = l,
																														r = l;
																													let s = !1;
																													const o = l;
																													if (
																														"boolean" !=
																														typeof e
																													) {
																														const e = {
																															params: {
																																type: "boolean"
																															}
																														};
																														null === i
																															? (i = [e])
																															: i.push(e),
																															l++;
																													}
																													var x = o === l;
																													if (
																														((s = s || x), !s)
																													) {
																														const t = l;
																														if (l === t)
																															if (
																																e &&
																																"object" ==
																																	typeof e &&
																																!Array.isArray(
																																	e
																																)
																															);
																															else {
																																const e = {
																																	params: {
																																		type: "object"
																																	}
																																};
																																null === i
																																	? (i = [e])
																																	: i.push(e),
																																	l++;
																															}
																														(x = t === l),
																															(s = s || x);
																													}
																													if (!s) {
																														const e = {
																															params: {}
																														};
																														return (
																															null === i
																																? (i = [e])
																																: i.push(e),
																															l++,
																															(W.errors = i),
																															!1
																														);
																													}
																													(l = r),
																														null !== i &&
																															(r
																																? (i.length = r)
																																: (i = null)),
																														(m = n === l);
																												} else m = !0;
																												if (m)
																													if (
																														void 0 !==
																														t.useSyncFileSystemCalls
																													) {
																														const e = l;
																														if (
																															"boolean" !=
																															typeof t.useSyncFileSystemCalls
																														)
																															return (
																																(W.errors = [
																																	{
																																		params: {
																																			type: "boolean"
																																		}
																																	}
																																]),
																																!1
																															);
																														m = e === l;
																													} else m = !0;
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (W.errors = i), 0 === l;
}
function H(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (a === p)
		if (e && "object" == typeof e && !Array.isArray(e)) {
			const t = a;
			for (const t in e)
				if ("ident" !== t && "loader" !== t && "options" !== t) {
					const e = { params: { additionalProperty: t } };
					null === o ? (o = [e]) : o.push(e), a++;
					break;
				}
			if (t === a) {
				if (void 0 !== e.ident) {
					const t = a;
					if ("string" != typeof e.ident) {
						const e = { params: { type: "string" } };
						null === o ? (o = [e]) : o.push(e), a++;
					}
					var u = t === a;
				} else u = !0;
				if (u) {
					if (void 0 !== e.loader) {
						let t = e.loader;
						const n = a,
							r = a;
						let s = !1,
							i = null;
						const l = a;
						if (a == a)
							if ("string" == typeof t) {
								if (t.length < 1) {
									const e = { params: {} };
									null === o ? (o = [e]) : o.push(e), a++;
								}
							} else {
								const e = { params: { type: "string" } };
								null === o ? (o = [e]) : o.push(e), a++;
							}
						if ((l === a && ((s = !0), (i = 0)), s))
							(a = r), null !== o && (r ? (o.length = r) : (o = null));
						else {
							const e = { params: { passingSchemas: i } };
							null === o ? (o = [e]) : o.push(e), a++;
						}
						u = n === a;
					} else u = !0;
					if (u)
						if (void 0 !== e.options) {
							let t = e.options;
							const n = a,
								r = a;
							let s = !1,
								i = null;
							const l = a,
								p = a;
							let c = !1;
							const m = a;
							if ("string" != typeof t) {
								const e = { params: { type: "string" } };
								null === o ? (o = [e]) : o.push(e), a++;
							}
							var f = m === a;
							if (((c = c || f), !c)) {
								const e = a;
								if (!t || "object" != typeof t || Array.isArray(t)) {
									const e = { params: { type: "object" } };
									null === o ? (o = [e]) : o.push(e), a++;
								}
								(f = e === a), (c = c || f);
							}
							if (c) (a = p), null !== o && (p ? (o.length = p) : (o = null));
							else {
								const e = { params: {} };
								null === o ? (o = [e]) : o.push(e), a++;
							}
							if ((l === a && ((s = !0), (i = 0)), s))
								(a = r), null !== o && (r ? (o.length = r) : (o = null));
							else {
								const e = { params: { passingSchemas: i } };
								null === o ? (o = [e]) : o.push(e), a++;
							}
							u = n === a;
						} else u = !0;
				}
			}
		} else {
			const e = { params: { type: "object" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
	var c = p === a;
	if (((l = l || c), !l)) {
		const t = a;
		if (!(e instanceof Function)) {
			const e = { params: {} };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		if (((c = t === a), (l = l || c), !l)) {
			const t = a;
			if (a == a)
				if ("string" == typeof e) {
					if (e.length < 1) {
						const e = { params: {} };
						null === o ? (o = [e]) : o.push(e), a++;
					}
				} else {
					const e = { params: { type: "string" } };
					null === o ? (o = [e]) : o.push(e), a++;
				}
			(c = t === a), (l = l || c);
		}
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (H.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(H.errors = o),
		0 === a
	);
}
function _(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (a === p)
		if (Array.isArray(e)) {
			const n = e.length;
			for (let r = 0; r < n; r++) {
				const n = a,
					i = a;
				let l = !1,
					p = null;
				const u = a;
				if (
					(H(e[r], {
						instancePath: t + "/" + r,
						parentData: e,
						parentDataProperty: r,
						rootData: s
					}) ||
						((o = null === o ? H.errors : o.concat(H.errors)), (a = o.length)),
					u === a && ((l = !0), (p = 0)),
					l)
				)
					(a = i), null !== o && (i ? (o.length = i) : (o = null));
				else {
					const e = { params: { passingSchemas: p } };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				if (n !== a) break;
			}
		} else {
			const e = { params: { type: "array" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
	var u = p === a;
	if (((l = l || u), !l)) {
		const i = a;
		if (!(e instanceof Function)) {
			const e = { params: {} };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		if (((u = i === a), (l = l || u), !l)) {
			const i = a;
			H(e, {
				instancePath: t,
				parentData: n,
				parentDataProperty: r,
				rootData: s
			}) || ((o = null === o ? H.errors : o.concat(H.errors)), (a = o.length)),
				(u = i === a),
				(l = l || u);
		}
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (_.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(_.errors = o),
		0 === a
	);
}
const Q = { validate: J };
function J(
	e,
	{
		instancePath: t = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = e
	} = {}
) {
	let a = null,
		i = 0;
	if (0 === i) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (J.errors = [{ params: { type: "object" } }]), !1;
		{
			const r = i;
			for (const t in e)
				if (!n.call(E, t))
					return (J.errors = [{ params: { additionalProperty: t } }]), !1;
			if (r === i) {
				if (void 0 !== e.assert) {
					let n = e.assert;
					const r = i;
					if (i === r) {
						if (!n || "object" != typeof n || Array.isArray(n))
							return (J.errors = [{ params: { type: "object" } }]), !1;
						for (const e in n) {
							const r = i;
							if (
								(M(n[e], {
									instancePath:
										t + "/assert/" + e.replace(/~/g, "~0").replace(/\//g, "~1"),
									parentData: n,
									parentDataProperty: e,
									rootData: o
								}) ||
									((a = null === a ? M.errors : a.concat(M.errors)),
									(i = a.length)),
								r !== i)
							)
								break;
						}
					}
					var l = r === i;
				} else l = !0;
				if (l) {
					if (void 0 !== e.compiler) {
						const n = i,
							r = i;
						let s = !1,
							p = null;
						const u = i;
						if (
							(M(e.compiler, {
								instancePath: t + "/compiler",
								parentData: e,
								parentDataProperty: "compiler",
								rootData: o
							}) ||
								((a = null === a ? M.errors : a.concat(M.errors)),
								(i = a.length)),
							u === i && ((s = !0), (p = 0)),
							!s)
						) {
							const e = { params: { passingSchemas: p } };
							return (
								null === a ? (a = [e]) : a.push(e), i++, (J.errors = a), !1
							);
						}
						(i = r),
							null !== a && (r ? (a.length = r) : (a = null)),
							(l = n === i);
					} else l = !0;
					if (l) {
						if (void 0 !== e.dependency) {
							const n = i,
								r = i;
							let s = !1,
								p = null;
							const u = i;
							if (
								(M(e.dependency, {
									instancePath: t + "/dependency",
									parentData: e,
									parentDataProperty: "dependency",
									rootData: o
								}) ||
									((a = null === a ? M.errors : a.concat(M.errors)),
									(i = a.length)),
								u === i && ((s = !0), (p = 0)),
								!s)
							) {
								const e = { params: { passingSchemas: p } };
								return (
									null === a ? (a = [e]) : a.push(e), i++, (J.errors = a), !1
								);
							}
							(i = r),
								null !== a && (r ? (a.length = r) : (a = null)),
								(l = n === i);
						} else l = !0;
						if (l) {
							if (void 0 !== e.descriptionData) {
								let n = e.descriptionData;
								const r = i;
								if (i === r) {
									if (!n || "object" != typeof n || Array.isArray(n))
										return (J.errors = [{ params: { type: "object" } }]), !1;
									for (const e in n) {
										const r = i;
										if (
											(M(n[e], {
												instancePath:
													t +
													"/descriptionData/" +
													e.replace(/~/g, "~0").replace(/\//g, "~1"),
												parentData: n,
												parentDataProperty: e,
												rootData: o
											}) ||
												((a = null === a ? M.errors : a.concat(M.errors)),
												(i = a.length)),
											r !== i)
										)
											break;
									}
								}
								l = r === i;
							} else l = !0;
							if (l) {
								if (void 0 !== e.enforce) {
									let t = e.enforce;
									const n = i;
									if ("pre" !== t && "post" !== t)
										return (J.errors = [{ params: {} }]), !1;
									l = n === i;
								} else l = !0;
								if (l) {
									if (void 0 !== e.exclude) {
										const n = i,
											r = i;
										let s = !1,
											p = null;
										const u = i;
										if (
											(U(e.exclude, {
												instancePath: t + "/exclude",
												parentData: e,
												parentDataProperty: "exclude",
												rootData: o
											}) ||
												((a = null === a ? U.errors : a.concat(U.errors)),
												(i = a.length)),
											u === i && ((s = !0), (p = 0)),
											!s)
										) {
											const e = { params: { passingSchemas: p } };
											return (
												null === a ? (a = [e]) : a.push(e),
												i++,
												(J.errors = a),
												!1
											);
										}
										(i = r),
											null !== a && (r ? (a.length = r) : (a = null)),
											(l = n === i);
									} else l = !0;
									if (l) {
										if (void 0 !== e.generator) {
											let t = e.generator;
											const n = i;
											if (!t || "object" != typeof t || Array.isArray(t))
												return (
													(J.errors = [{ params: { type: "object" } }]), !1
												);
											l = n === i;
										} else l = !0;
										if (l) {
											if (void 0 !== e.include) {
												const n = i,
													r = i;
												let s = !1,
													p = null;
												const u = i;
												if (
													(U(e.include, {
														instancePath: t + "/include",
														parentData: e,
														parentDataProperty: "include",
														rootData: o
													}) ||
														((a = null === a ? U.errors : a.concat(U.errors)),
														(i = a.length)),
													u === i && ((s = !0), (p = 0)),
													!s)
												) {
													const e = { params: { passingSchemas: p } };
													return (
														null === a ? (a = [e]) : a.push(e),
														i++,
														(J.errors = a),
														!1
													);
												}
												(i = r),
													null !== a && (r ? (a.length = r) : (a = null)),
													(l = n === i);
											} else l = !0;
											if (l) {
												if (void 0 !== e.issuer) {
													const n = i,
														r = i;
													let s = !1,
														p = null;
													const u = i;
													if (
														(U(e.issuer, {
															instancePath: t + "/issuer",
															parentData: e,
															parentDataProperty: "issuer",
															rootData: o
														}) ||
															((a = null === a ? U.errors : a.concat(U.errors)),
															(i = a.length)),
														u === i && ((s = !0), (p = 0)),
														!s)
													) {
														const e = { params: { passingSchemas: p } };
														return (
															null === a ? (a = [e]) : a.push(e),
															i++,
															(J.errors = a),
															!1
														);
													}
													(i = r),
														null !== a && (r ? (a.length = r) : (a = null)),
														(l = n === i);
												} else l = !0;
												if (l) {
													if (void 0 !== e.issuerLayer) {
														const n = i,
															r = i;
														let s = !1,
															p = null;
														const u = i;
														if (
															(M(e.issuerLayer, {
																instancePath: t + "/issuerLayer",
																parentData: e,
																parentDataProperty: "issuerLayer",
																rootData: o
															}) ||
																((a =
																	null === a ? M.errors : a.concat(M.errors)),
																(i = a.length)),
															u === i && ((s = !0), (p = 0)),
															!s)
														) {
															const e = { params: { passingSchemas: p } };
															return (
																null === a ? (a = [e]) : a.push(e),
																i++,
																(J.errors = a),
																!1
															);
														}
														(i = r),
															null !== a && (r ? (a.length = r) : (a = null)),
															(l = n === i);
													} else l = !0;
													if (l) {
														if (void 0 !== e.layer) {
															const t = i;
															if ("string" != typeof e.layer)
																return (
																	(J.errors = [{ params: { type: "string" } }]),
																	!1
																);
															l = t === i;
														} else l = !0;
														if (l) {
															if (void 0 !== e.loader) {
																let t = e.loader;
																const n = i,
																	r = i;
																let s = !1,
																	o = null;
																const p = i;
																if (i == i)
																	if ("string" == typeof t) {
																		if (t.length < 1) {
																			const e = { params: {} };
																			null === a ? (a = [e]) : a.push(e), i++;
																		}
																	} else {
																		const e = { params: { type: "string" } };
																		null === a ? (a = [e]) : a.push(e), i++;
																	}
																if ((p === i && ((s = !0), (o = 0)), !s)) {
																	const e = { params: { passingSchemas: o } };
																	return (
																		null === a ? (a = [e]) : a.push(e),
																		i++,
																		(J.errors = a),
																		!1
																	);
																}
																(i = r),
																	null !== a &&
																		(r ? (a.length = r) : (a = null)),
																	(l = n === i);
															} else l = !0;
															if (l) {
																if (void 0 !== e.mimetype) {
																	const n = i,
																		r = i;
																	let s = !1,
																		p = null;
																	const u = i;
																	if (
																		(M(e.mimetype, {
																			instancePath: t + "/mimetype",
																			parentData: e,
																			parentDataProperty: "mimetype",
																			rootData: o
																		}) ||
																			((a =
																				null === a
																					? M.errors
																					: a.concat(M.errors)),
																			(i = a.length)),
																		u === i && ((s = !0), (p = 0)),
																		!s)
																	) {
																		const e = { params: { passingSchemas: p } };
																		return (
																			null === a ? (a = [e]) : a.push(e),
																			i++,
																			(J.errors = a),
																			!1
																		);
																	}
																	(i = r),
																		null !== a &&
																			(r ? (a.length = r) : (a = null)),
																		(l = n === i);
																} else l = !0;
																if (l) {
																	if (void 0 !== e.oneOf) {
																		let n = e.oneOf;
																		const r = i;
																		if (i === r) {
																			if (!Array.isArray(n))
																				return (
																					(J.errors = [
																						{ params: { type: "array" } }
																					]),
																					!1
																				);
																			{
																				const e = n.length;
																				for (let r = 0; r < e; r++) {
																					const e = i,
																						s = i;
																					let l = !1,
																						p = null;
																					const u = i;
																					if (
																						(Q.validate(n[r], {
																							instancePath: t + "/oneOf/" + r,
																							parentData: n,
																							parentDataProperty: r,
																							rootData: o
																						}) ||
																							((a =
																								null === a
																									? Q.validate.errors
																									: a.concat(
																											Q.validate.errors
																									  )),
																							(i = a.length)),
																						u === i && ((l = !0), (p = 0)),
																						!l)
																					) {
																						const e = {
																							params: { passingSchemas: p }
																						};
																						return (
																							null === a
																								? (a = [e])
																								: a.push(e),
																							i++,
																							(J.errors = a),
																							!1
																						);
																					}
																					if (
																						((i = s),
																						null !== a &&
																							(s ? (a.length = s) : (a = null)),
																						e !== i)
																					)
																						break;
																				}
																			}
																		}
																		l = r === i;
																	} else l = !0;
																	if (l) {
																		if (void 0 !== e.options) {
																			let t = e.options;
																			const n = i,
																				r = i;
																			let s = !1,
																				o = null;
																			const u = i,
																				f = i;
																			let c = !1;
																			const m = i;
																			if ("string" != typeof t) {
																				const e = {
																					params: { type: "string" }
																				};
																				null === a ? (a = [e]) : a.push(e), i++;
																			}
																			var p = m === i;
																			if (((c = c || p), !c)) {
																				const e = i;
																				if (
																					!t ||
																					"object" != typeof t ||
																					Array.isArray(t)
																				) {
																					const e = {
																						params: { type: "object" }
																					};
																					null === a ? (a = [e]) : a.push(e),
																						i++;
																				}
																				(p = e === i), (c = c || p);
																			}
																			if (c)
																				(i = f),
																					null !== a &&
																						(f ? (a.length = f) : (a = null));
																			else {
																				const e = { params: {} };
																				null === a ? (a = [e]) : a.push(e), i++;
																			}
																			if (
																				(u === i && ((s = !0), (o = 0)), !s)
																			) {
																				const e = {
																					params: { passingSchemas: o }
																				};
																				return (
																					null === a ? (a = [e]) : a.push(e),
																					i++,
																					(J.errors = a),
																					!1
																				);
																			}
																			(i = r),
																				null !== a &&
																					(r ? (a.length = r) : (a = null)),
																				(l = n === i);
																		} else l = !0;
																		if (l) {
																			if (void 0 !== e.parser) {
																				let t = e.parser;
																				const n = i;
																				if (
																					i === n &&
																					(!t ||
																						"object" != typeof t ||
																						Array.isArray(t))
																				)
																					return (
																						(J.errors = [
																							{ params: { type: "object" } }
																						]),
																						!1
																					);
																				l = n === i;
																			} else l = !0;
																			if (l) {
																				if (void 0 !== e.realResource) {
																					const n = i,
																						r = i;
																					let s = !1,
																						p = null;
																					const u = i;
																					if (
																						(U(e.realResource, {
																							instancePath: t + "/realResource",
																							parentData: e,
																							parentDataProperty:
																								"realResource",
																							rootData: o
																						}) ||
																							((a =
																								null === a
																									? U.errors
																									: a.concat(U.errors)),
																							(i = a.length)),
																						u === i && ((s = !0), (p = 0)),
																						!s)
																					) {
																						const e = {
																							params: { passingSchemas: p }
																						};
																						return (
																							null === a
																								? (a = [e])
																								: a.push(e),
																							i++,
																							(J.errors = a),
																							!1
																						);
																					}
																					(i = r),
																						null !== a &&
																							(r ? (a.length = r) : (a = null)),
																						(l = n === i);
																				} else l = !0;
																				if (l) {
																					if (void 0 !== e.resolve) {
																						let n = e.resolve;
																						const r = i;
																						if (
																							!n ||
																							"object" != typeof n ||
																							Array.isArray(n)
																						)
																							return (
																								(J.errors = [
																									{ params: { type: "object" } }
																								]),
																								!1
																							);
																						const s = i;
																						let p = !1,
																							u = null;
																						const f = i;
																						if (
																							(W(n, {
																								instancePath: t + "/resolve",
																								parentData: e,
																								parentDataProperty: "resolve",
																								rootData: o
																							}) ||
																								((a =
																									null === a
																										? W.errors
																										: a.concat(W.errors)),
																								(i = a.length)),
																							f === i && ((p = !0), (u = 0)),
																							!p)
																						) {
																							const e = {
																								params: { passingSchemas: u }
																							};
																							return (
																								null === a
																									? (a = [e])
																									: a.push(e),
																								i++,
																								(J.errors = a),
																								!1
																							);
																						}
																						(i = s),
																							null !== a &&
																								(s
																									? (a.length = s)
																									: (a = null)),
																							(l = r === i);
																					} else l = !0;
																					if (l) {
																						if (void 0 !== e.resource) {
																							const n = i,
																								r = i;
																							let s = !1,
																								p = null;
																							const u = i;
																							if (
																								(U(e.resource, {
																									instancePath: t + "/resource",
																									parentData: e,
																									parentDataProperty:
																										"resource",
																									rootData: o
																								}) ||
																									((a =
																										null === a
																											? U.errors
																											: a.concat(U.errors)),
																									(i = a.length)),
																								u === i && ((s = !0), (p = 0)),
																								!s)
																							) {
																								const e = {
																									params: { passingSchemas: p }
																								};
																								return (
																									null === a
																										? (a = [e])
																										: a.push(e),
																									i++,
																									(J.errors = a),
																									!1
																								);
																							}
																							(i = r),
																								null !== a &&
																									(r
																										? (a.length = r)
																										: (a = null)),
																								(l = n === i);
																						} else l = !0;
																						if (l) {
																							if (
																								void 0 !== e.resourceFragment
																							) {
																								const n = i,
																									r = i;
																								let s = !1,
																									p = null;
																								const u = i;
																								if (
																									(M(e.resourceFragment, {
																										instancePath:
																											t + "/resourceFragment",
																										parentData: e,
																										parentDataProperty:
																											"resourceFragment",
																										rootData: o
																									}) ||
																										((a =
																											null === a
																												? M.errors
																												: a.concat(M.errors)),
																										(i = a.length)),
																									u === i &&
																										((s = !0), (p = 0)),
																									!s)
																								) {
																									const e = {
																										params: {
																											passingSchemas: p
																										}
																									};
																									return (
																										null === a
																											? (a = [e])
																											: a.push(e),
																										i++,
																										(J.errors = a),
																										!1
																									);
																								}
																								(i = r),
																									null !== a &&
																										(r
																											? (a.length = r)
																											: (a = null)),
																									(l = n === i);
																							} else l = !0;
																							if (l) {
																								if (
																									void 0 !== e.resourceQuery
																								) {
																									const n = i,
																										r = i;
																									let s = !1,
																										p = null;
																									const u = i;
																									if (
																										(M(e.resourceQuery, {
																											instancePath:
																												t + "/resourceQuery",
																											parentData: e,
																											parentDataProperty:
																												"resourceQuery",
																											rootData: o
																										}) ||
																											((a =
																												null === a
																													? M.errors
																													: a.concat(M.errors)),
																											(i = a.length)),
																										u === i &&
																											((s = !0), (p = 0)),
																										!s)
																									) {
																										const e = {
																											params: {
																												passingSchemas: p
																											}
																										};
																										return (
																											null === a
																												? (a = [e])
																												: a.push(e),
																											i++,
																											(J.errors = a),
																											!1
																										);
																									}
																									(i = r),
																										null !== a &&
																											(r
																												? (a.length = r)
																												: (a = null)),
																										(l = n === i);
																								} else l = !0;
																								if (l) {
																									if (void 0 !== e.rules) {
																										let n = e.rules;
																										const r = i;
																										if (i === r) {
																											if (!Array.isArray(n))
																												return (
																													(J.errors = [
																														{
																															params: {
																																type: "array"
																															}
																														}
																													]),
																													!1
																												);
																											{
																												const e = n.length;
																												for (
																													let r = 0;
																													r < e;
																													r++
																												) {
																													const e = i,
																														s = i;
																													let l = !1,
																														p = null;
																													const u = i;
																													if (
																														(Q.validate(n[r], {
																															instancePath:
																																t +
																																"/rules/" +
																																r,
																															parentData: n,
																															parentDataProperty:
																																r,
																															rootData: o
																														}) ||
																															((a =
																																null === a
																																	? Q.validate
																																			.errors
																																	: a.concat(
																																			Q.validate
																																				.errors
																																	  )),
																															(i = a.length)),
																														u === i &&
																															((l = !0),
																															(p = 0)),
																														!l)
																													) {
																														const e = {
																															params: {
																																passingSchemas:
																																	p
																															}
																														};
																														return (
																															null === a
																																? (a = [e])
																																: a.push(e),
																															i++,
																															(J.errors = a),
																															!1
																														);
																													}
																													if (
																														((i = s),
																														null !== a &&
																															(s
																																? (a.length = s)
																																: (a = null)),
																														e !== i)
																													)
																														break;
																												}
																											}
																										}
																										l = r === i;
																									} else l = !0;
																									if (l) {
																										if (void 0 !== e.scheme) {
																											const n = i,
																												r = i;
																											let s = !1,
																												p = null;
																											const u = i;
																											if (
																												(M(e.scheme, {
																													instancePath:
																														t + "/scheme",
																													parentData: e,
																													parentDataProperty:
																														"scheme",
																													rootData: o
																												}) ||
																													((a =
																														null === a
																															? M.errors
																															: a.concat(
																																	M.errors
																															  )),
																													(i = a.length)),
																												u === i &&
																													((s = !0), (p = 0)),
																												!s)
																											) {
																												const e = {
																													params: {
																														passingSchemas: p
																													}
																												};
																												return (
																													null === a
																														? (a = [e])
																														: a.push(e),
																													i++,
																													(J.errors = a),
																													!1
																												);
																											}
																											(i = r),
																												null !== a &&
																													(r
																														? (a.length = r)
																														: (a = null)),
																												(l = n === i);
																										} else l = !0;
																										if (l) {
																											if (
																												void 0 !== e.sideEffects
																											) {
																												const t = i;
																												if (
																													"boolean" !=
																													typeof e.sideEffects
																												)
																													return (
																														(J.errors = [
																															{
																																params: {
																																	type: "boolean"
																																}
																															}
																														]),
																														!1
																													);
																												l = t === i;
																											} else l = !0;
																											if (l) {
																												if (void 0 !== e.test) {
																													const n = i,
																														r = i;
																													let s = !1,
																														p = null;
																													const u = i;
																													if (
																														(U(e.test, {
																															instancePath:
																																t + "/test",
																															parentData: e,
																															parentDataProperty:
																																"test",
																															rootData: o
																														}) ||
																															((a =
																																null === a
																																	? U.errors
																																	: a.concat(
																																			U.errors
																																	  )),
																															(i = a.length)),
																														u === i &&
																															((s = !0),
																															(p = 0)),
																														!s)
																													) {
																														const e = {
																															params: {
																																passingSchemas:
																																	p
																															}
																														};
																														return (
																															null === a
																																? (a = [e])
																																: a.push(e),
																															i++,
																															(J.errors = a),
																															!1
																														);
																													}
																													(i = r),
																														null !== a &&
																															(r
																																? (a.length = r)
																																: (a = null)),
																														(l = n === i);
																												} else l = !0;
																												if (l) {
																													if (
																														void 0 !== e.type
																													) {
																														const t = i;
																														if (
																															"string" !=
																															typeof e.type
																														)
																															return (
																																(J.errors = [
																																	{
																																		params: {
																																			type: "string"
																																		}
																																	}
																																]),
																																!1
																															);
																														l = t === i;
																													} else l = !0;
																													if (l)
																														if (
																															void 0 !== e.use
																														) {
																															const n = i,
																																r = i;
																															let s = !1,
																																p = null;
																															const u = i;
																															if (
																																(_(e.use, {
																																	instancePath:
																																		t + "/use",
																																	parentData: e,
																																	parentDataProperty:
																																		"use",
																																	rootData: o
																																}) ||
																																	((a =
																																		null === a
																																			? _.errors
																																			: a.concat(
																																					_.errors
																																			  )),
																																	(i =
																																		a.length)),
																																u === i &&
																																	((s = !0),
																																	(p = 0)),
																																!s)
																															) {
																																const e = {
																																	params: {
																																		passingSchemas:
																																			p
																																	}
																																};
																																return (
																																	null === a
																																		? (a = [e])
																																		: a.push(e),
																																	i++,
																																	(J.errors =
																																		a),
																																	!1
																																);
																															}
																															(i = r),
																																null !== a &&
																																	(r
																																		? (a.length =
																																				r)
																																		: (a =
																																				null)),
																																(l = n === i);
																														} else l = !0;
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (J.errors = a), 0 === i;
}
function V(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!Array.isArray(e))
			return (V.errors = [{ params: { type: "array" } }]), !1;
		{
			const n = e.length;
			for (let r = 0; r < n; r++) {
				let n = e[r];
				const l = a,
					p = a;
				let u = !1;
				const f = a;
				if ("..." !== n) {
					const e = { params: {} };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				var i = f === a;
				if (((u = u || i), !u)) {
					const l = a;
					J(n, {
						instancePath: t + "/" + r,
						parentData: e,
						parentDataProperty: r,
						rootData: s
					}) ||
						((o = null === o ? J.errors : o.concat(J.errors)), (a = o.length)),
						(i = l === a),
						(u = u || i);
				}
				if (!u) {
					const e = { params: {} };
					return null === o ? (o = [e]) : o.push(e), a++, (V.errors = o), !1;
				}
				if (((a = p), null !== o && (p ? (o.length = p) : (o = null)), l !== a))
					break;
			}
		}
	}
	return (V.errors = o), 0 === a;
}
function Z(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (a == a)
		if (e && "object" == typeof e && !Array.isArray(e)) {
			const t = a;
			for (const t in e)
				if ("encoding" !== t && "mimetype" !== t) {
					const e = { params: { additionalProperty: t } };
					null === o ? (o = [e]) : o.push(e), a++;
					break;
				}
			if (t === a) {
				if (void 0 !== e.encoding) {
					let t = e.encoding;
					const n = a;
					if (!1 !== t && "base64" !== t) {
						const e = { params: {} };
						null === o ? (o = [e]) : o.push(e), a++;
					}
					var u = n === a;
				} else u = !0;
				if (u)
					if (void 0 !== e.mimetype) {
						const t = a;
						if ("string" != typeof e.mimetype) {
							const e = { params: { type: "string" } };
							null === o ? (o = [e]) : o.push(e), a++;
						}
						u = t === a;
					} else u = !0;
			}
		} else {
			const e = { params: { type: "object" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
	var f = p === a;
	if (((l = l || f), !l)) {
		const t = a;
		if (!(e instanceof Function)) {
			const e = { params: {} };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		(f = t === a), (l = l || f);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (Z.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(Z.errors = o),
		0 === a
	);
}
function K(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	if (0 === i) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (K.errors = [{ params: { type: "object" } }]), !1;
		{
			const r = i;
			for (const e in t)
				if (
					"dataUrl" !== e &&
					"emit" !== e &&
					"filename" !== e &&
					"outputPath" !== e &&
					"publicPath" !== e
				)
					return (K.errors = [{ params: { additionalProperty: e } }]), !1;
			if (r === i) {
				if (void 0 !== t.dataUrl) {
					const e = i;
					Z(t.dataUrl, {
						instancePath: n + "/dataUrl",
						parentData: t,
						parentDataProperty: "dataUrl",
						rootData: o
					}) ||
						((a = null === a ? Z.errors : a.concat(Z.errors)), (i = a.length));
					var l = e === i;
				} else l = !0;
				if (l) {
					if (void 0 !== t.emit) {
						const e = i;
						if ("boolean" != typeof t.emit)
							return (K.errors = [{ params: { type: "boolean" } }]), !1;
						l = e === i;
					} else l = !0;
					if (l) {
						if (void 0 !== t.filename) {
							let n = t.filename;
							const r = i,
								s = i;
							let o = !1;
							const u = i;
							if (i === u)
								if ("string" == typeof n) {
									if (n.includes("!") || !1 !== e.test(n)) {
										const e = { params: {} };
										null === a ? (a = [e]) : a.push(e), i++;
									} else if (n.length < 1) {
										const e = { params: {} };
										null === a ? (a = [e]) : a.push(e), i++;
									}
								} else {
									const e = { params: { type: "string" } };
									null === a ? (a = [e]) : a.push(e), i++;
								}
							var p = u === i;
							if (((o = o || p), !o)) {
								const e = i;
								if (!(n instanceof Function)) {
									const e = { params: {} };
									null === a ? (a = [e]) : a.push(e), i++;
								}
								(p = e === i), (o = o || p);
							}
							if (!o) {
								const e = { params: {} };
								return (
									null === a ? (a = [e]) : a.push(e), i++, (K.errors = a), !1
								);
							}
							(i = s),
								null !== a && (s ? (a.length = s) : (a = null)),
								(l = r === i);
						} else l = !0;
						if (l) {
							if (void 0 !== t.outputPath) {
								let n = t.outputPath;
								const r = i,
									s = i;
								let o = !1;
								const p = i;
								if (i === p)
									if ("string" == typeof n) {
										if (n.includes("!") || !1 !== e.test(n)) {
											const e = { params: {} };
											null === a ? (a = [e]) : a.push(e), i++;
										}
									} else {
										const e = { params: { type: "string" } };
										null === a ? (a = [e]) : a.push(e), i++;
									}
								var u = p === i;
								if (((o = o || u), !o)) {
									const e = i;
									if (!(n instanceof Function)) {
										const e = { params: {} };
										null === a ? (a = [e]) : a.push(e), i++;
									}
									(u = e === i), (o = o || u);
								}
								if (!o) {
									const e = { params: {} };
									return (
										null === a ? (a = [e]) : a.push(e), i++, (K.errors = a), !1
									);
								}
								(i = s),
									null !== a && (s ? (a.length = s) : (a = null)),
									(l = r === i);
							} else l = !0;
							if (l)
								if (void 0 !== t.publicPath) {
									let e = t.publicPath;
									const n = i,
										r = i;
									let s = !1;
									const o = i;
									if ("string" != typeof e) {
										const e = { params: { type: "string" } };
										null === a ? (a = [e]) : a.push(e), i++;
									}
									var f = o === i;
									if (((s = s || f), !s)) {
										const t = i;
										if (!(e instanceof Function)) {
											const e = { params: {} };
											null === a ? (a = [e]) : a.push(e), i++;
										}
										(f = t === i), (s = s || f);
									}
									if (!s) {
										const e = { params: {} };
										return (
											null === a ? (a = [e]) : a.push(e),
											i++,
											(K.errors = a),
											!1
										);
									}
									(i = r),
										null !== a && (r ? (a.length = r) : (a = null)),
										(l = n === i);
								} else l = !0;
						}
					}
				}
			}
		}
	}
	return (K.errors = a), 0 === i;
}
function X(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (X.errors = [{ params: { type: "object" } }]), !1;
		{
			const n = a;
			for (const t in e)
				if ("dataUrl" !== t)
					return (X.errors = [{ params: { additionalProperty: t } }]), !1;
			n === a &&
				void 0 !== e.dataUrl &&
				(Z(e.dataUrl, {
					instancePath: t + "/dataUrl",
					parentData: e,
					parentDataProperty: "dataUrl",
					rootData: s
				}) ||
					((o = null === o ? Z.errors : o.concat(Z.errors)), (a = o.length)));
		}
	}
	return (X.errors = o), 0 === a;
}
function Y(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	if (0 === i) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (Y.errors = [{ params: { type: "object" } }]), !1;
		{
			const n = i;
			for (const e in t)
				if (
					"emit" !== e &&
					"filename" !== e &&
					"outputPath" !== e &&
					"publicPath" !== e
				)
					return (Y.errors = [{ params: { additionalProperty: e } }]), !1;
			if (n === i) {
				if (void 0 !== t.emit) {
					const e = i;
					if ("boolean" != typeof t.emit)
						return (Y.errors = [{ params: { type: "boolean" } }]), !1;
					var l = e === i;
				} else l = !0;
				if (l) {
					if (void 0 !== t.filename) {
						let n = t.filename;
						const r = i,
							s = i;
						let o = !1;
						const u = i;
						if (i === u)
							if ("string" == typeof n) {
								if (n.includes("!") || !1 !== e.test(n)) {
									const e = { params: {} };
									null === a ? (a = [e]) : a.push(e), i++;
								} else if (n.length < 1) {
									const e = { params: {} };
									null === a ? (a = [e]) : a.push(e), i++;
								}
							} else {
								const e = { params: { type: "string" } };
								null === a ? (a = [e]) : a.push(e), i++;
							}
						var p = u === i;
						if (((o = o || p), !o)) {
							const e = i;
							if (!(n instanceof Function)) {
								const e = { params: {} };
								null === a ? (a = [e]) : a.push(e), i++;
							}
							(p = e === i), (o = o || p);
						}
						if (!o) {
							const e = { params: {} };
							return (
								null === a ? (a = [e]) : a.push(e), i++, (Y.errors = a), !1
							);
						}
						(i = s),
							null !== a && (s ? (a.length = s) : (a = null)),
							(l = r === i);
					} else l = !0;
					if (l) {
						if (void 0 !== t.outputPath) {
							let n = t.outputPath;
							const r = i,
								s = i;
							let o = !1;
							const p = i;
							if (i === p)
								if ("string" == typeof n) {
									if (n.includes("!") || !1 !== e.test(n)) {
										const e = { params: {} };
										null === a ? (a = [e]) : a.push(e), i++;
									}
								} else {
									const e = { params: { type: "string" } };
									null === a ? (a = [e]) : a.push(e), i++;
								}
							var u = p === i;
							if (((o = o || u), !o)) {
								const e = i;
								if (!(n instanceof Function)) {
									const e = { params: {} };
									null === a ? (a = [e]) : a.push(e), i++;
								}
								(u = e === i), (o = o || u);
							}
							if (!o) {
								const e = { params: {} };
								return (
									null === a ? (a = [e]) : a.push(e), i++, (Y.errors = a), !1
								);
							}
							(i = s),
								null !== a && (s ? (a.length = s) : (a = null)),
								(l = r === i);
						} else l = !0;
						if (l)
							if (void 0 !== t.publicPath) {
								let e = t.publicPath;
								const n = i,
									r = i;
								let s = !1;
								const o = i;
								if ("string" != typeof e) {
									const e = { params: { type: "string" } };
									null === a ? (a = [e]) : a.push(e), i++;
								}
								var f = o === i;
								if (((s = s || f), !s)) {
									const t = i;
									if (!(e instanceof Function)) {
										const e = { params: {} };
										null === a ? (a = [e]) : a.push(e), i++;
									}
									(f = t === i), (s = s || f);
								}
								if (!s) {
									const e = { params: {} };
									return (
										null === a ? (a = [e]) : a.push(e), i++, (Y.errors = a), !1
									);
								}
								(i = r),
									null !== a && (r ? (a.length = r) : (a = null)),
									(l = n === i);
							} else l = !0;
					}
				}
			}
		}
	}
	return (Y.errors = a), 0 === i;
}
function ee(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (ee.errors = [{ params: { type: "object" } }]), !1;
		{
			const n = a;
			for (const t in e)
				if (
					"asset" !== t &&
					"asset/inline" !== t &&
					"asset/resource" !== t &&
					"javascript" !== t &&
					"javascript/auto" !== t &&
					"javascript/dynamic" !== t &&
					"javascript/esm" !== t
				) {
					let n = e[t];
					const r = a;
					if (a === r && (!n || "object" != typeof n || Array.isArray(n)))
						return (ee.errors = [{ params: { type: "object" } }]), !1;
					if (r !== a) break;
				}
			if (n === a) {
				if (void 0 !== e.asset) {
					const n = a;
					K(e.asset, {
						instancePath: t + "/asset",
						parentData: e,
						parentDataProperty: "asset",
						rootData: s
					}) ||
						((o = null === o ? K.errors : o.concat(K.errors)), (a = o.length));
					var i = n === a;
				} else i = !0;
				if (i) {
					if (void 0 !== e["asset/inline"]) {
						const n = a;
						X(e["asset/inline"], {
							instancePath: t + "/asset~1inline",
							parentData: e,
							parentDataProperty: "asset/inline",
							rootData: s
						}) ||
							((o = null === o ? X.errors : o.concat(X.errors)),
							(a = o.length)),
							(i = n === a);
					} else i = !0;
					if (i) {
						if (void 0 !== e["asset/resource"]) {
							const n = a;
							Y(e["asset/resource"], {
								instancePath: t + "/asset~1resource",
								parentData: e,
								parentDataProperty: "asset/resource",
								rootData: s
							}) ||
								((o = null === o ? Y.errors : o.concat(Y.errors)),
								(a = o.length)),
								(i = n === a);
						} else i = !0;
						if (i) {
							if (void 0 !== e.javascript) {
								let t = e.javascript;
								const n = a;
								if (a == a) {
									if (!t || "object" != typeof t || Array.isArray(t))
										return (ee.errors = [{ params: { type: "object" } }]), !1;
									for (const e in t)
										return (
											(ee.errors = [{ params: { additionalProperty: e } }]), !1
										);
								}
								i = n === a;
							} else i = !0;
							if (i) {
								if (void 0 !== e["javascript/auto"]) {
									let t = e["javascript/auto"];
									const n = a;
									if (a == a) {
										if (!t || "object" != typeof t || Array.isArray(t))
											return (ee.errors = [{ params: { type: "object" } }]), !1;
										for (const e in t)
											return (
												(ee.errors = [{ params: { additionalProperty: e } }]),
												!1
											);
									}
									i = n === a;
								} else i = !0;
								if (i) {
									if (void 0 !== e["javascript/dynamic"]) {
										let t = e["javascript/dynamic"];
										const n = a;
										if (a == a) {
											if (!t || "object" != typeof t || Array.isArray(t))
												return (
													(ee.errors = [{ params: { type: "object" } }]), !1
												);
											for (const e in t)
												return (
													(ee.errors = [{ params: { additionalProperty: e } }]),
													!1
												);
										}
										i = n === a;
									} else i = !0;
									if (i)
										if (void 0 !== e["javascript/esm"]) {
											let t = e["javascript/esm"];
											const n = a;
											if (a == a) {
												if (!t || "object" != typeof t || Array.isArray(t))
													return (
														(ee.errors = [{ params: { type: "object" } }]), !1
													);
												for (const e in t)
													return (
														(ee.errors = [
															{ params: { additionalProperty: e } }
														]),
														!1
													);
											}
											i = n === a;
										} else i = !0;
								}
							}
						}
					}
				}
			}
		}
	}
	return (ee.errors = o), 0 === a;
}
function te(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (te.errors = [{ params: { type: "object" } }]), !1;
		{
			const t = a;
			for (const t in e)
				if ("dataUrlCondition" !== t)
					return (te.errors = [{ params: { additionalProperty: t } }]), !1;
			if (t === a && void 0 !== e.dataUrlCondition) {
				let t = e.dataUrlCondition;
				const n = a;
				let r = !1;
				const s = a;
				if (a == a)
					if (t && "object" == typeof t && !Array.isArray(t)) {
						const e = a;
						for (const e in t)
							if ("maxSize" !== e) {
								const t = { params: { additionalProperty: e } };
								null === o ? (o = [t]) : o.push(t), a++;
								break;
							}
						if (
							e === a &&
							void 0 !== t.maxSize &&
							"number" != typeof t.maxSize
						) {
							const e = { params: { type: "number" } };
							null === o ? (o = [e]) : o.push(e), a++;
						}
					} else {
						const e = { params: { type: "object" } };
						null === o ? (o = [e]) : o.push(e), a++;
					}
				var i = s === a;
				if (((r = r || i), !r)) {
					const e = a;
					if (!(t instanceof Function)) {
						const e = { params: {} };
						null === o ? (o = [e]) : o.push(e), a++;
					}
					(i = e === a), (r = r || i);
				}
				if (!r) {
					const e = { params: {} };
					return null === o ? (o = [e]) : o.push(e), a++, (te.errors = o), !1;
				}
				(a = n), null !== o && (n ? (o.length = n) : (o = null));
			}
		}
	}
	return (te.errors = o), 0 === a;
}
function ne(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (!1 !== e) {
		const e = { params: {} };
		null === o ? (o = [e]) : o.push(e), a++;
	}
	var u = p === a;
	if (((l = l || u), !l)) {
		const t = a;
		if (a == a)
			if (e && "object" == typeof e && !Array.isArray(e)) {
				const t = a;
				for (const t in e)
					if ("__dirname" !== t && "__filename" !== t && "global" !== t) {
						const e = { params: { additionalProperty: t } };
						null === o ? (o = [e]) : o.push(e), a++;
						break;
					}
				if (t === a) {
					if (void 0 !== e.__dirname) {
						let t = e.__dirname;
						const n = a;
						if (
							!1 !== t &&
							!0 !== t &&
							"warn-mock" !== t &&
							"mock" !== t &&
							"eval-only" !== t
						) {
							const e = { params: {} };
							null === o ? (o = [e]) : o.push(e), a++;
						}
						var f = n === a;
					} else f = !0;
					if (f) {
						if (void 0 !== e.__filename) {
							let t = e.__filename;
							const n = a;
							if (
								!1 !== t &&
								!0 !== t &&
								"warn-mock" !== t &&
								"mock" !== t &&
								"eval-only" !== t
							) {
								const e = { params: {} };
								null === o ? (o = [e]) : o.push(e), a++;
							}
							f = n === a;
						} else f = !0;
						if (f)
							if (void 0 !== e.global) {
								let t = e.global;
								const n = a;
								if (!1 !== t && !0 !== t && "warn" !== t) {
									const e = { params: {} };
									null === o ? (o = [e]) : o.push(e), a++;
								}
								f = n === a;
							} else f = !0;
					}
				}
			} else {
				const e = { params: { type: "object" } };
				null === o ? (o = [e]) : o.push(e), a++;
			}
		(u = t === a), (l = l || u);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (ne.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(ne.errors = o),
		0 === a
	);
}
function re(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (re.errors = [{ params: { type: "object" } }]), !1;
		if (void 0 !== e.amd) {
			let t = e.amd;
			const n = a,
				r = a;
			let s = !1;
			const p = a;
			if (!1 !== t) {
				const e = { params: {} };
				null === o ? (o = [e]) : o.push(e), a++;
			}
			var i = p === a;
			if (((s = s || i), !s)) {
				const e = a;
				if (!t || "object" != typeof t || Array.isArray(t)) {
					const e = { params: { type: "object" } };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				(i = e === a), (s = s || i);
			}
			if (!s) {
				const e = { params: {} };
				return null === o ? (o = [e]) : o.push(e), a++, (re.errors = o), !1;
			}
			(a = r), null !== o && (r ? (o.length = r) : (o = null));
			var l = n === a;
		} else l = !0;
		if (l) {
			if (void 0 !== e.browserify) {
				const t = a;
				if ("boolean" != typeof e.browserify)
					return (re.errors = [{ params: { type: "boolean" } }]), !1;
				l = t === a;
			} else l = !0;
			if (l) {
				if (void 0 !== e.commonjs) {
					const t = a;
					if ("boolean" != typeof e.commonjs)
						return (re.errors = [{ params: { type: "boolean" } }]), !1;
					l = t === a;
				} else l = !0;
				if (l) {
					if (void 0 !== e.commonjsMagicComments) {
						const t = a;
						if ("boolean" != typeof e.commonjsMagicComments)
							return (re.errors = [{ params: { type: "boolean" } }]), !1;
						l = t === a;
					} else l = !0;
					if (l) {
						if (void 0 !== e.createRequire) {
							let t = e.createRequire;
							const n = a,
								r = a;
							let s = !1;
							const i = a;
							if ("boolean" != typeof t) {
								const e = { params: { type: "boolean" } };
								null === o ? (o = [e]) : o.push(e), a++;
							}
							var p = i === a;
							if (((s = s || p), !s)) {
								const e = a;
								if ("string" != typeof t) {
									const e = { params: { type: "string" } };
									null === o ? (o = [e]) : o.push(e), a++;
								}
								(p = e === a), (s = s || p);
							}
							if (!s) {
								const e = { params: {} };
								return (
									null === o ? (o = [e]) : o.push(e), a++, (re.errors = o), !1
								);
							}
							(a = r),
								null !== o && (r ? (o.length = r) : (o = null)),
								(l = n === a);
						} else l = !0;
						if (l) {
							if (void 0 !== e.dynamicImportMode) {
								let t = e.dynamicImportMode;
								const n = a;
								if (
									"eager" !== t &&
									"weak" !== t &&
									"lazy" !== t &&
									"lazy-once" !== t
								)
									return (re.errors = [{ params: {} }]), !1;
								l = n === a;
							} else l = !0;
							if (l) {
								if (void 0 !== e.dynamicImportPrefetch) {
									let t = e.dynamicImportPrefetch;
									const n = a,
										r = a;
									let s = !1;
									const i = a;
									if ("number" != typeof t) {
										const e = { params: { type: "number" } };
										null === o ? (o = [e]) : o.push(e), a++;
									}
									var u = i === a;
									if (((s = s || u), !s)) {
										const e = a;
										if ("boolean" != typeof t) {
											const e = { params: { type: "boolean" } };
											null === o ? (o = [e]) : o.push(e), a++;
										}
										(u = e === a), (s = s || u);
									}
									if (!s) {
										const e = { params: {} };
										return (
											null === o ? (o = [e]) : o.push(e),
											a++,
											(re.errors = o),
											!1
										);
									}
									(a = r),
										null !== o && (r ? (o.length = r) : (o = null)),
										(l = n === a);
								} else l = !0;
								if (l) {
									if (void 0 !== e.dynamicImportPreload) {
										let t = e.dynamicImportPreload;
										const n = a,
											r = a;
										let s = !1;
										const i = a;
										if ("number" != typeof t) {
											const e = { params: { type: "number" } };
											null === o ? (o = [e]) : o.push(e), a++;
										}
										var f = i === a;
										if (((s = s || f), !s)) {
											const e = a;
											if ("boolean" != typeof t) {
												const e = { params: { type: "boolean" } };
												null === o ? (o = [e]) : o.push(e), a++;
											}
											(f = e === a), (s = s || f);
										}
										if (!s) {
											const e = { params: {} };
											return (
												null === o ? (o = [e]) : o.push(e),
												a++,
												(re.errors = o),
												!1
											);
										}
										(a = r),
											null !== o && (r ? (o.length = r) : (o = null)),
											(l = n === a);
									} else l = !0;
									if (l) {
										if (void 0 !== e.exportsPresence) {
											let t = e.exportsPresence;
											const n = a;
											if (
												"error" !== t &&
												"warn" !== t &&
												"auto" !== t &&
												!1 !== t
											)
												return (re.errors = [{ params: {} }]), !1;
											l = n === a;
										} else l = !0;
										if (l) {
											if (void 0 !== e.exprContextCritical) {
												const t = a;
												if ("boolean" != typeof e.exprContextCritical)
													return (
														(re.errors = [{ params: { type: "boolean" } }]), !1
													);
												l = t === a;
											} else l = !0;
											if (l) {
												if (void 0 !== e.exprContextRecursive) {
													const t = a;
													if ("boolean" != typeof e.exprContextRecursive)
														return (
															(re.errors = [{ params: { type: "boolean" } }]),
															!1
														);
													l = t === a;
												} else l = !0;
												if (l) {
													if (void 0 !== e.exprContextRegExp) {
														let t = e.exprContextRegExp;
														const n = a,
															r = a;
														let s = !1;
														const i = a;
														if (!(t instanceof RegExp)) {
															const e = { params: {} };
															null === o ? (o = [e]) : o.push(e), a++;
														}
														var c = i === a;
														if (((s = s || c), !s)) {
															const e = a;
															if ("boolean" != typeof t) {
																const e = { params: { type: "boolean" } };
																null === o ? (o = [e]) : o.push(e), a++;
															}
															(c = e === a), (s = s || c);
														}
														if (!s) {
															const e = { params: {} };
															return (
																null === o ? (o = [e]) : o.push(e),
																a++,
																(re.errors = o),
																!1
															);
														}
														(a = r),
															null !== o && (r ? (o.length = r) : (o = null)),
															(l = n === a);
													} else l = !0;
													if (l) {
														if (void 0 !== e.exprContextRequest) {
															const t = a;
															if ("string" != typeof e.exprContextRequest)
																return (
																	(re.errors = [
																		{ params: { type: "string" } }
																	]),
																	!1
																);
															l = t === a;
														} else l = !0;
														if (l) {
															if (void 0 !== e.harmony) {
																const t = a;
																if ("boolean" != typeof e.harmony)
																	return (
																		(re.errors = [
																			{ params: { type: "boolean" } }
																		]),
																		!1
																	);
																l = t === a;
															} else l = !0;
															if (l) {
																if (void 0 !== e.import) {
																	const t = a;
																	if ("boolean" != typeof e.import)
																		return (
																			(re.errors = [
																				{ params: { type: "boolean" } }
																			]),
																			!1
																		);
																	l = t === a;
																} else l = !0;
																if (l) {
																	if (void 0 !== e.importExportsPresence) {
																		let t = e.importExportsPresence;
																		const n = a;
																		if (
																			"error" !== t &&
																			"warn" !== t &&
																			"auto" !== t &&
																			!1 !== t
																		)
																			return (re.errors = [{ params: {} }]), !1;
																		l = n === a;
																	} else l = !0;
																	if (l) {
																		if (void 0 !== e.importMeta) {
																			const t = a;
																			if ("boolean" != typeof e.importMeta)
																				return (
																					(re.errors = [
																						{ params: { type: "boolean" } }
																					]),
																					!1
																				);
																			l = t === a;
																		} else l = !0;
																		if (l) {
																			if (void 0 !== e.importMetaContext) {
																				const t = a;
																				if (
																					"boolean" !=
																					typeof e.importMetaContext
																				)
																					return (
																						(re.errors = [
																							{ params: { type: "boolean" } }
																						]),
																						!1
																					);
																				l = t === a;
																			} else l = !0;
																			if (l) {
																				if (void 0 !== e.node) {
																					const n = a;
																					ne(e.node, {
																						instancePath: t + "/node",
																						parentData: e,
																						parentDataProperty: "node",
																						rootData: s
																					}) ||
																						((o =
																							null === o
																								? ne.errors
																								: o.concat(ne.errors)),
																						(a = o.length)),
																						(l = n === a);
																				} else l = !0;
																				if (l) {
																					if (
																						void 0 !== e.reexportExportsPresence
																					) {
																						let t = e.reexportExportsPresence;
																						const n = a;
																						if (
																							"error" !== t &&
																							"warn" !== t &&
																							"auto" !== t &&
																							!1 !== t
																						)
																							return (
																								(re.errors = [{ params: {} }]),
																								!1
																							);
																						l = n === a;
																					} else l = !0;
																					if (l) {
																						if (void 0 !== e.requireContext) {
																							const t = a;
																							if (
																								"boolean" !=
																								typeof e.requireContext
																							)
																								return (
																									(re.errors = [
																										{
																											params: {
																												type: "boolean"
																											}
																										}
																									]),
																									!1
																								);
																							l = t === a;
																						} else l = !0;
																						if (l) {
																							if (void 0 !== e.requireEnsure) {
																								const t = a;
																								if (
																									"boolean" !=
																									typeof e.requireEnsure
																								)
																									return (
																										(re.errors = [
																											{
																												params: {
																													type: "boolean"
																												}
																											}
																										]),
																										!1
																									);
																								l = t === a;
																							} else l = !0;
																							if (l) {
																								if (
																									void 0 !== e.requireInclude
																								) {
																									const t = a;
																									if (
																										"boolean" !=
																										typeof e.requireInclude
																									)
																										return (
																											(re.errors = [
																												{
																													params: {
																														type: "boolean"
																													}
																												}
																											]),
																											!1
																										);
																									l = t === a;
																								} else l = !0;
																								if (l) {
																									if (void 0 !== e.requireJs) {
																										const t = a;
																										if (
																											"boolean" !=
																											typeof e.requireJs
																										)
																											return (
																												(re.errors = [
																													{
																														params: {
																															type: "boolean"
																														}
																													}
																												]),
																												!1
																											);
																										l = t === a;
																									} else l = !0;
																									if (l) {
																										if (
																											void 0 !==
																											e.strictExportPresence
																										) {
																											const t = a;
																											if (
																												"boolean" !=
																												typeof e.strictExportPresence
																											)
																												return (
																													(re.errors = [
																														{
																															params: {
																																type: "boolean"
																															}
																														}
																													]),
																													!1
																												);
																											l = t === a;
																										} else l = !0;
																										if (l) {
																											if (
																												void 0 !==
																												e.strictThisContextOnImports
																											) {
																												const t = a;
																												if (
																													"boolean" !=
																													typeof e.strictThisContextOnImports
																												)
																													return (
																														(re.errors = [
																															{
																																params: {
																																	type: "boolean"
																																}
																															}
																														]),
																														!1
																													);
																												l = t === a;
																											} else l = !0;
																											if (l) {
																												if (
																													void 0 !== e.system
																												) {
																													const t = a;
																													if (
																														"boolean" !=
																														typeof e.system
																													)
																														return (
																															(re.errors = [
																																{
																																	params: {
																																		type: "boolean"
																																	}
																																}
																															]),
																															!1
																														);
																													l = t === a;
																												} else l = !0;
																												if (l) {
																													if (
																														void 0 !==
																														e.unknownContextCritical
																													) {
																														const t = a;
																														if (
																															"boolean" !=
																															typeof e.unknownContextCritical
																														)
																															return (
																																(re.errors = [
																																	{
																																		params: {
																																			type: "boolean"
																																		}
																																	}
																																]),
																																!1
																															);
																														l = t === a;
																													} else l = !0;
																													if (l) {
																														if (
																															void 0 !==
																															e.unknownContextRecursive
																														) {
																															const t = a;
																															if (
																																"boolean" !=
																																typeof e.unknownContextRecursive
																															)
																																return (
																																	(re.errors = [
																																		{
																																			params: {
																																				type: "boolean"
																																			}
																																		}
																																	]),
																																	!1
																																);
																															l = t === a;
																														} else l = !0;
																														if (l) {
																															if (
																																void 0 !==
																																e.unknownContextRegExp
																															) {
																																let t =
																																	e.unknownContextRegExp;
																																const n = a,
																																	r = a;
																																let s = !1;
																																const i = a;
																																if (
																																	!(
																																		t instanceof
																																		RegExp
																																	)
																																) {
																																	const e = {
																																		params: {}
																																	};
																																	null === o
																																		? (o = [e])
																																		: o.push(e),
																																		a++;
																																}
																																var m = i === a;
																																if (
																																	((s = s || m),
																																	!s)
																																) {
																																	const e = a;
																																	if (
																																		"boolean" !=
																																		typeof t
																																	) {
																																		const e = {
																																			params: {
																																				type: "boolean"
																																			}
																																		};
																																		null === o
																																			? (o = [
																																					e
																																			  ])
																																			: o.push(
																																					e
																																			  ),
																																			a++;
																																	}
																																	(m = e === a),
																																		(s =
																																			s || m);
																																}
																																if (!s) {
																																	const e = {
																																		params: {}
																																	};
																																	return (
																																		null === o
																																			? (o = [
																																					e
																																			  ])
																																			: o.push(
																																					e
																																			  ),
																																		a++,
																																		(re.errors =
																																			o),
																																		!1
																																	);
																																}
																																(a = r),
																																	null !== o &&
																																		(r
																																			? (o.length =
																																					r)
																																			: (o =
																																					null)),
																																	(l = n === a);
																															} else l = !0;
																															if (l) {
																																if (
																																	void 0 !==
																																	e.unknownContextRequest
																																) {
																																	const t = a;
																																	if (
																																		"string" !=
																																		typeof e.unknownContextRequest
																																	)
																																		return (
																																			(re.errors =
																																				[
																																					{
																																						params:
																																							{
																																								type: "string"
																																							}
																																					}
																																				]),
																																			!1
																																		);
																																	l = t === a;
																																} else l = !0;
																																if (l) {
																																	if (
																																		void 0 !==
																																		e.url
																																	) {
																																		let t =
																																			e.url;
																																		const n = a,
																																			r = a;
																																		let s = !1;
																																		const i = a;
																																		if (
																																			"relative" !==
																																			t
																																		) {
																																			const e =
																																				{
																																					params:
																																						{}
																																				};
																																			null === o
																																				? (o = [
																																						e
																																				  ])
																																				: o.push(
																																						e
																																				  ),
																																				a++;
																																		}
																																		var y =
																																			i === a;
																																		if (
																																			((s =
																																				s || y),
																																			!s)
																																		) {
																																			const e =
																																				a;
																																			if (
																																				"boolean" !=
																																				typeof t
																																			) {
																																				const e =
																																					{
																																						params:
																																							{
																																								type: "boolean"
																																							}
																																					};
																																				null ===
																																				o
																																					? (o =
																																							[
																																								e
																																							])
																																					: o.push(
																																							e
																																					  ),
																																					a++;
																																			}
																																			(y =
																																				e ===
																																				a),
																																				(s =
																																					s ||
																																					y);
																																		}
																																		if (!s) {
																																			const e =
																																				{
																																					params:
																																						{}
																																				};
																																			return (
																																				null ===
																																				o
																																					? (o =
																																							[
																																								e
																																							])
																																					: o.push(
																																							e
																																					  ),
																																				a++,
																																				(re.errors =
																																					o),
																																				!1
																																			);
																																		}
																																		(a = r),
																																			null !==
																																				o &&
																																				(r
																																					? (o.length =
																																							r)
																																					: (o =
																																							null)),
																																			(l =
																																				n ===
																																				a);
																																	} else l = !0;
																																	if (l) {
																																		if (
																																			void 0 !==
																																			e.worker
																																		) {
																																			let t =
																																				e.worker;
																																			const n =
																																					a,
																																				r = a;
																																			let s =
																																				!1;
																																			const i =
																																				a;
																																			if (
																																				a === i
																																			)
																																				if (
																																					Array.isArray(
																																						t
																																					)
																																				) {
																																					const e =
																																						t.length;
																																					for (
																																						let n = 0;
																																						n <
																																						e;
																																						n++
																																					) {
																																						let e =
																																							t[
																																								n
																																							];
																																						const r =
																																							a;
																																						if (
																																							a ===
																																							r
																																						)
																																							if (
																																								"string" ==
																																								typeof e
																																							) {
																																								if (
																																									e.length <
																																									1
																																								) {
																																									const e =
																																										{
																																											params:
																																												{}
																																										};
																																									null ===
																																									o
																																										? (o =
																																												[
																																													e
																																												])
																																										: o.push(
																																												e
																																										  ),
																																										a++;
																																								}
																																							} else {
																																								const e =
																																									{
																																										params:
																																											{
																																												type: "string"
																																											}
																																									};
																																								null ===
																																								o
																																									? (o =
																																											[
																																												e
																																											])
																																									: o.push(
																																											e
																																									  ),
																																									a++;
																																							}
																																						if (
																																							r !==
																																							a
																																						)
																																							break;
																																					}
																																				} else {
																																					const e =
																																						{
																																							params:
																																								{
																																									type: "array"
																																								}
																																						};
																																					null ===
																																					o
																																						? (o =
																																								[
																																									e
																																								])
																																						: o.push(
																																								e
																																						  ),
																																						a++;
																																				}
																																			var h =
																																				i === a;
																																			if (
																																				((s =
																																					s ||
																																					h),
																																				!s)
																																			) {
																																				const e =
																																					a;
																																				if (
																																					"boolean" !=
																																					typeof t
																																				) {
																																					const e =
																																						{
																																							params:
																																								{
																																									type: "boolean"
																																								}
																																						};
																																					null ===
																																					o
																																						? (o =
																																								[
																																									e
																																								])
																																						: o.push(
																																								e
																																						  ),
																																						a++;
																																				}
																																				(h =
																																					e ===
																																					a),
																																					(s =
																																						s ||
																																						h);
																																			}
																																			if (!s) {
																																				const e =
																																					{
																																						params:
																																							{}
																																					};
																																				return (
																																					null ===
																																					o
																																						? (o =
																																								[
																																									e
																																								])
																																						: o.push(
																																								e
																																						  ),
																																					a++,
																																					(re.errors =
																																						o),
																																					!1
																																				);
																																			}
																																			(a = r),
																																				null !==
																																					o &&
																																					(r
																																						? (o.length =
																																								r)
																																						: (o =
																																								null)),
																																				(l =
																																					n ===
																																					a);
																																		} else
																																			l = !0;
																																		if (l) {
																																			if (
																																				void 0 !==
																																				e.wrappedContextCritical
																																			) {
																																				const t =
																																					a;
																																				if (
																																					"boolean" !=
																																					typeof e.wrappedContextCritical
																																				)
																																					return (
																																						(re.errors =
																																							[
																																								{
																																									params:
																																										{
																																											type: "boolean"
																																										}
																																								}
																																							]),
																																						!1
																																					);
																																				l =
																																					t ===
																																					a;
																																			} else
																																				l = !0;
																																			if (l) {
																																				if (
																																					void 0 !==
																																					e.wrappedContextRecursive
																																				) {
																																					const t =
																																						a;
																																					if (
																																						"boolean" !=
																																						typeof e.wrappedContextRecursive
																																					)
																																						return (
																																							(re.errors =
																																								[
																																									{
																																										params:
																																											{
																																												type: "boolean"
																																											}
																																									}
																																								]),
																																							!1
																																						);
																																					l =
																																						t ===
																																						a;
																																				} else
																																					l =
																																						!0;
																																				if (l)
																																					if (
																																						void 0 !==
																																						e.wrappedContextRegExp
																																					) {
																																						const t =
																																							a;
																																						if (
																																							!(
																																								e.wrappedContextRegExp instanceof
																																								RegExp
																																							)
																																						)
																																							return (
																																								(re.errors =
																																									[
																																										{
																																											params:
																																												{}
																																										}
																																									]),
																																								!1
																																							);
																																						l =
																																							t ===
																																							a;
																																					} else
																																						l =
																																							!0;
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (re.errors = o), 0 === a;
}
function se(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (se.errors = [{ params: { type: "object" } }]), !1;
		{
			const n = a;
			for (const t in e)
				if (
					"asset" !== t &&
					"asset/inline" !== t &&
					"asset/resource" !== t &&
					"asset/source" !== t &&
					"javascript" !== t &&
					"javascript/auto" !== t &&
					"javascript/dynamic" !== t &&
					"javascript/esm" !== t
				) {
					let n = e[t];
					const r = a;
					if (a === r && (!n || "object" != typeof n || Array.isArray(n)))
						return (se.errors = [{ params: { type: "object" } }]), !1;
					if (r !== a) break;
				}
			if (n === a) {
				if (void 0 !== e.asset) {
					const n = a;
					te(e.asset, {
						instancePath: t + "/asset",
						parentData: e,
						parentDataProperty: "asset",
						rootData: s
					}) ||
						((o = null === o ? te.errors : o.concat(te.errors)),
						(a = o.length));
					var i = n === a;
				} else i = !0;
				if (i) {
					if (void 0 !== e["asset/inline"]) {
						let t = e["asset/inline"];
						const n = a;
						if (a == a) {
							if (!t || "object" != typeof t || Array.isArray(t))
								return (se.errors = [{ params: { type: "object" } }]), !1;
							for (const e in t)
								return (
									(se.errors = [{ params: { additionalProperty: e } }]), !1
								);
						}
						i = n === a;
					} else i = !0;
					if (i) {
						if (void 0 !== e["asset/resource"]) {
							let t = e["asset/resource"];
							const n = a;
							if (a == a) {
								if (!t || "object" != typeof t || Array.isArray(t))
									return (se.errors = [{ params: { type: "object" } }]), !1;
								for (const e in t)
									return (
										(se.errors = [{ params: { additionalProperty: e } }]), !1
									);
							}
							i = n === a;
						} else i = !0;
						if (i) {
							if (void 0 !== e["asset/source"]) {
								let t = e["asset/source"];
								const n = a;
								if (a == a) {
									if (!t || "object" != typeof t || Array.isArray(t))
										return (se.errors = [{ params: { type: "object" } }]), !1;
									for (const e in t)
										return (
											(se.errors = [{ params: { additionalProperty: e } }]), !1
										);
								}
								i = n === a;
							} else i = !0;
							if (i) {
								if (void 0 !== e.javascript) {
									const n = a;
									re(e.javascript, {
										instancePath: t + "/javascript",
										parentData: e,
										parentDataProperty: "javascript",
										rootData: s
									}) ||
										((o = null === o ? re.errors : o.concat(re.errors)),
										(a = o.length)),
										(i = n === a);
								} else i = !0;
								if (i) {
									if (void 0 !== e["javascript/auto"]) {
										const n = a;
										re(e["javascript/auto"], {
											instancePath: t + "/javascript~1auto",
											parentData: e,
											parentDataProperty: "javascript/auto",
											rootData: s
										}) ||
											((o = null === o ? re.errors : o.concat(re.errors)),
											(a = o.length)),
											(i = n === a);
									} else i = !0;
									if (i) {
										if (void 0 !== e["javascript/dynamic"]) {
											const n = a;
											re(e["javascript/dynamic"], {
												instancePath: t + "/javascript~1dynamic",
												parentData: e,
												parentDataProperty: "javascript/dynamic",
												rootData: s
											}) ||
												((o = null === o ? re.errors : o.concat(re.errors)),
												(a = o.length)),
												(i = n === a);
										} else i = !0;
										if (i)
											if (void 0 !== e["javascript/esm"]) {
												const n = a;
												re(e["javascript/esm"], {
													instancePath: t + "/javascript~1esm",
													parentData: e,
													parentDataProperty: "javascript/esm",
													rootData: s
												}) ||
													((o = null === o ? re.errors : o.concat(re.errors)),
													(a = o.length)),
													(i = n === a);
											} else i = !0;
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (se.errors = o), 0 === a;
}
function oe(
	t,
	{
		instancePath: r = "",
		parentData: s,
		parentDataProperty: o,
		rootData: a = t
	} = {}
) {
	let i = null,
		l = 0;
	if (0 === l) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (oe.errors = [{ params: { type: "object" } }]), !1;
		{
			const s = l;
			for (const e in t)
				if (!n.call(R, e))
					return (oe.errors = [{ params: { additionalProperty: e } }]), !1;
			if (s === l) {
				if (void 0 !== t.defaultRules) {
					const e = l,
						n = l;
					let s = !1,
						o = null;
					const u = l;
					if (
						(V(t.defaultRules, {
							instancePath: r + "/defaultRules",
							parentData: t,
							parentDataProperty: "defaultRules",
							rootData: a
						}) ||
							((i = null === i ? V.errors : i.concat(V.errors)),
							(l = i.length)),
						u === l && ((s = !0), (o = 0)),
						!s)
					) {
						const e = { params: { passingSchemas: o } };
						return null === i ? (i = [e]) : i.push(e), l++, (oe.errors = i), !1;
					}
					(l = n), null !== i && (n ? (i.length = n) : (i = null));
					var p = e === l;
				} else p = !0;
				if (p) {
					if (void 0 !== t.exprContextCritical) {
						const e = l;
						if ("boolean" != typeof t.exprContextCritical)
							return (oe.errors = [{ params: { type: "boolean" } }]), !1;
						p = e === l;
					} else p = !0;
					if (p) {
						if (void 0 !== t.exprContextRecursive) {
							const e = l;
							if ("boolean" != typeof t.exprContextRecursive)
								return (oe.errors = [{ params: { type: "boolean" } }]), !1;
							p = e === l;
						} else p = !0;
						if (p) {
							if (void 0 !== t.exprContextRegExp) {
								let e = t.exprContextRegExp;
								const n = l,
									r = l;
								let s = !1;
								const o = l;
								if (!(e instanceof RegExp)) {
									const e = { params: {} };
									null === i ? (i = [e]) : i.push(e), l++;
								}
								var u = o === l;
								if (((s = s || u), !s)) {
									const t = l;
									if ("boolean" != typeof e) {
										const e = { params: { type: "boolean" } };
										null === i ? (i = [e]) : i.push(e), l++;
									}
									(u = t === l), (s = s || u);
								}
								if (!s) {
									const e = { params: {} };
									return (
										null === i ? (i = [e]) : i.push(e), l++, (oe.errors = i), !1
									);
								}
								(l = r),
									null !== i && (r ? (i.length = r) : (i = null)),
									(p = n === l);
							} else p = !0;
							if (p) {
								if (void 0 !== t.exprContextRequest) {
									const e = l;
									if ("string" != typeof t.exprContextRequest)
										return (oe.errors = [{ params: { type: "string" } }]), !1;
									p = e === l;
								} else p = !0;
								if (p) {
									if (void 0 !== t.generator) {
										const e = l;
										ee(t.generator, {
											instancePath: r + "/generator",
											parentData: t,
											parentDataProperty: "generator",
											rootData: a
										}) ||
											((i = null === i ? ee.errors : i.concat(ee.errors)),
											(l = i.length)),
											(p = e === l);
									} else p = !0;
									if (p) {
										if (void 0 !== t.noParse) {
											let n = t.noParse;
											const r = l,
												s = l;
											let o = !1;
											const a = l;
											if (l === a)
												if (Array.isArray(n))
													if (n.length < 1) {
														const e = { params: { limit: 1 } };
														null === i ? (i = [e]) : i.push(e), l++;
													} else {
														const t = n.length;
														for (let r = 0; r < t; r++) {
															let t = n[r];
															const s = l,
																o = l;
															let a = !1;
															const p = l;
															if (!(t instanceof RegExp)) {
																const e = { params: {} };
																null === i ? (i = [e]) : i.push(e), l++;
															}
															var f = p === l;
															if (((a = a || f), !a)) {
																const n = l;
																if (l === n)
																	if ("string" == typeof t) {
																		if (t.includes("!") || !0 !== e.test(t)) {
																			const e = { params: {} };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	} else {
																		const e = { params: { type: "string" } };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																if (((f = n === l), (a = a || f), !a)) {
																	const e = l;
																	if (!(t instanceof Function)) {
																		const e = { params: {} };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																	(f = e === l), (a = a || f);
																}
															}
															if (a)
																(l = o),
																	null !== i &&
																		(o ? (i.length = o) : (i = null));
															else {
																const e = { params: {} };
																null === i ? (i = [e]) : i.push(e), l++;
															}
															if (s !== l) break;
														}
													}
												else {
													const e = { params: { type: "array" } };
													null === i ? (i = [e]) : i.push(e), l++;
												}
											var c = a === l;
											if (((o = o || c), !o)) {
												const t = l;
												if (!(n instanceof RegExp)) {
													const e = { params: {} };
													null === i ? (i = [e]) : i.push(e), l++;
												}
												if (((c = t === l), (o = o || c), !o)) {
													const t = l;
													if (l === t)
														if ("string" == typeof n) {
															if (n.includes("!") || !0 !== e.test(n)) {
																const e = { params: {} };
																null === i ? (i = [e]) : i.push(e), l++;
															}
														} else {
															const e = { params: { type: "string" } };
															null === i ? (i = [e]) : i.push(e), l++;
														}
													if (((c = t === l), (o = o || c), !o)) {
														const e = l;
														if (!(n instanceof Function)) {
															const e = { params: {} };
															null === i ? (i = [e]) : i.push(e), l++;
														}
														(c = e === l), (o = o || c);
													}
												}
											}
											if (!o) {
												const e = { params: {} };
												return (
													null === i ? (i = [e]) : i.push(e),
													l++,
													(oe.errors = i),
													!1
												);
											}
											(l = s),
												null !== i && (s ? (i.length = s) : (i = null)),
												(p = r === l);
										} else p = !0;
										if (p) {
											if (void 0 !== t.parser) {
												const e = l;
												se(t.parser, {
													instancePath: r + "/parser",
													parentData: t,
													parentDataProperty: "parser",
													rootData: a
												}) ||
													((i = null === i ? se.errors : i.concat(se.errors)),
													(l = i.length)),
													(p = e === l);
											} else p = !0;
											if (p) {
												if (void 0 !== t.rules) {
													const e = l,
														n = l;
													let s = !1,
														o = null;
													const u = l;
													if (
														(V(t.rules, {
															instancePath: r + "/rules",
															parentData: t,
															parentDataProperty: "rules",
															rootData: a
														}) ||
															((i = null === i ? V.errors : i.concat(V.errors)),
															(l = i.length)),
														u === l && ((s = !0), (o = 0)),
														!s)
													) {
														const e = { params: { passingSchemas: o } };
														return (
															null === i ? (i = [e]) : i.push(e),
															l++,
															(oe.errors = i),
															!1
														);
													}
													(l = n),
														null !== i && (n ? (i.length = n) : (i = null)),
														(p = e === l);
												} else p = !0;
												if (p) {
													if (void 0 !== t.strictExportPresence) {
														const e = l;
														if ("boolean" != typeof t.strictExportPresence)
															return (
																(oe.errors = [{ params: { type: "boolean" } }]),
																!1
															);
														p = e === l;
													} else p = !0;
													if (p) {
														if (void 0 !== t.strictThisContextOnImports) {
															const e = l;
															if (
																"boolean" != typeof t.strictThisContextOnImports
															)
																return (
																	(oe.errors = [
																		{ params: { type: "boolean" } }
																	]),
																	!1
																);
															p = e === l;
														} else p = !0;
														if (p) {
															if (void 0 !== t.unknownContextCritical) {
																const e = l;
																if (
																	"boolean" != typeof t.unknownContextCritical
																)
																	return (
																		(oe.errors = [
																			{ params: { type: "boolean" } }
																		]),
																		!1
																	);
																p = e === l;
															} else p = !0;
															if (p) {
																if (void 0 !== t.unknownContextRecursive) {
																	const e = l;
																	if (
																		"boolean" !=
																		typeof t.unknownContextRecursive
																	)
																		return (
																			(oe.errors = [
																				{ params: { type: "boolean" } }
																			]),
																			!1
																		);
																	p = e === l;
																} else p = !0;
																if (p) {
																	if (void 0 !== t.unknownContextRegExp) {
																		let e = t.unknownContextRegExp;
																		const n = l,
																			r = l;
																		let s = !1;
																		const o = l;
																		if (!(e instanceof RegExp)) {
																			const e = { params: {} };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																		var m = o === l;
																		if (((s = s || m), !s)) {
																			const t = l;
																			if ("boolean" != typeof e) {
																				const e = {
																					params: { type: "boolean" }
																				};
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																			(m = t === l), (s = s || m);
																		}
																		if (!s) {
																			const e = { params: {} };
																			return (
																				null === i ? (i = [e]) : i.push(e),
																				l++,
																				(oe.errors = i),
																				!1
																			);
																		}
																		(l = r),
																			null !== i &&
																				(r ? (i.length = r) : (i = null)),
																			(p = n === l);
																	} else p = !0;
																	if (p) {
																		if (void 0 !== t.unknownContextRequest) {
																			const e = l;
																			if (
																				"string" !=
																				typeof t.unknownContextRequest
																			)
																				return (
																					(oe.errors = [
																						{ params: { type: "string" } }
																					]),
																					!1
																				);
																			p = e === l;
																		} else p = !0;
																		if (p) {
																			if (void 0 !== t.unsafeCache) {
																				let e = t.unsafeCache;
																				const n = l,
																					r = l;
																				let s = !1;
																				const o = l;
																				if ("boolean" != typeof e) {
																					const e = {
																						params: { type: "boolean" }
																					};
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																				var y = o === l;
																				if (((s = s || y), !s)) {
																					const t = l;
																					if (!(e instanceof Function)) {
																						const e = { params: {} };
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																					(y = t === l), (s = s || y);
																				}
																				if (!s) {
																					const e = { params: {} };
																					return (
																						null === i ? (i = [e]) : i.push(e),
																						l++,
																						(oe.errors = i),
																						!1
																					);
																				}
																				(l = r),
																					null !== i &&
																						(r ? (i.length = r) : (i = null)),
																					(p = n === l);
																			} else p = !0;
																			if (p) {
																				if (
																					void 0 !== t.wrappedContextCritical
																				) {
																					const e = l;
																					if (
																						"boolean" !=
																						typeof t.wrappedContextCritical
																					)
																						return (
																							(oe.errors = [
																								{ params: { type: "boolean" } }
																							]),
																							!1
																						);
																					p = e === l;
																				} else p = !0;
																				if (p) {
																					if (
																						void 0 !== t.wrappedContextRecursive
																					) {
																						const e = l;
																						if (
																							"boolean" !=
																							typeof t.wrappedContextRecursive
																						)
																							return (
																								(oe.errors = [
																									{
																										params: { type: "boolean" }
																									}
																								]),
																								!1
																							);
																						p = e === l;
																					} else p = !0;
																					if (p)
																						if (
																							void 0 !== t.wrappedContextRegExp
																						) {
																							const e = l;
																							if (
																								!(
																									t.wrappedContextRegExp instanceof
																									RegExp
																								)
																							)
																								return (
																									(oe.errors = [
																										{ params: {} }
																									]),
																									!1
																								);
																							p = e === l;
																						} else p = !0;
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (oe.errors = i), 0 === l;
}
const ae = {
		checkWasmTypes: { type: "boolean" },
		chunkIds: {
			enum: ["natural", "named", "deterministic", "size", "total-size", !1]
		},
		concatenateModules: { type: "boolean" },
		emitOnErrors: { type: "boolean" },
		flagIncludedChunks: { type: "boolean" },
		innerGraph: { type: "boolean" },
		mangleExports: {
			anyOf: [{ enum: ["size", "deterministic"] }, { type: "boolean" }]
		},
		mangleWasmImports: { type: "boolean" },
		mergeDuplicateChunks: { type: "boolean" },
		minimize: { type: "boolean" },
		minimizer: {
			type: "array",
			items: {
				anyOf: [
					{ enum: ["..."] },
					{ $ref: "#/definitions/WebpackPluginInstance" },
					{ $ref: "#/definitions/WebpackPluginFunction" }
				]
			}
		},
		moduleIds: {
			enum: ["natural", "named", "hashed", "deterministic", "size", !1]
		},
		noEmitOnErrors: { type: "boolean" },
		nodeEnv: { anyOf: [{ enum: [!1] }, { type: "string" }] },
		portableRecords: { type: "boolean" },
		providedExports: { type: "boolean" },
		realContentHash: { type: "boolean" },
		removeAvailableModules: { type: "boolean" },
		removeEmptyChunks: { type: "boolean" },
		runtimeChunk: { $ref: "#/definitions/OptimizationRuntimeChunk" },
		sideEffects: { anyOf: [{ enum: ["flag"] }, { type: "boolean" }] },
		splitChunks: {
			anyOf: [
				{ enum: [!1] },
				{ $ref: "#/definitions/OptimizationSplitChunksOptions" }
			]
		},
		usedExports: { anyOf: [{ enum: ["global"] }, { type: "boolean" }] }
	},
	ie = {
		automaticNameDelimiter: { type: "string", minLength: 1 },
		cacheGroups: {
			type: "object",
			additionalProperties: {
				anyOf: [
					{ enum: [!1] },
					{ instanceof: "RegExp" },
					{ type: "string" },
					{ instanceof: "Function" },
					{ $ref: "#/definitions/OptimizationSplitChunksCacheGroup" }
				]
			},
			not: {
				type: "object",
				additionalProperties: !0,
				properties: {
					test: {
						anyOf: [
							{ instanceof: "RegExp" },
							{ type: "string" },
							{ instanceof: "Function" }
						]
					}
				},
				required: ["test"]
			}
		},
		chunks: {
			anyOf: [{ enum: ["initial", "async", "all"] }, { instanceof: "Function" }]
		},
		defaultSizeTypes: { type: "array", items: { type: "string" }, minItems: 1 },
		enforceSizeThreshold: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		fallbackCacheGroup: {
			type: "object",
			additionalProperties: !1,
			properties: {
				automaticNameDelimiter: { type: "string", minLength: 1 },
				chunks: {
					anyOf: [
						{ enum: ["initial", "async", "all"] },
						{ instanceof: "Function" }
					]
				},
				maxAsyncSize: {
					oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
				},
				maxInitialSize: {
					oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
				},
				maxSize: {
					oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
				},
				minSize: {
					oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
				},
				minSizeReduction: {
					oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
				}
			}
		},
		filename: {
			anyOf: [
				{ type: "string", absolutePath: !1, minLength: 1 },
				{ instanceof: "Function" }
			]
		},
		hidePathInfo: { type: "boolean" },
		maxAsyncRequests: { type: "number", minimum: 1 },
		maxAsyncSize: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		maxInitialRequests: { type: "number", minimum: 1 },
		maxInitialSize: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		maxSize: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		minChunks: { type: "number", minimum: 1 },
		minRemainingSize: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		minSize: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		minSizeReduction: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		name: {
			anyOf: [{ enum: [!1] }, { type: "string" }, { instanceof: "Function" }]
		},
		usedExports: { type: "boolean" }
	},
	le = {
		automaticNameDelimiter: { type: "string", minLength: 1 },
		chunks: {
			anyOf: [{ enum: ["initial", "async", "all"] }, { instanceof: "Function" }]
		},
		enforce: { type: "boolean" },
		enforceSizeThreshold: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		filename: {
			anyOf: [
				{ type: "string", absolutePath: !1, minLength: 1 },
				{ instanceof: "Function" }
			]
		},
		idHint: { type: "string" },
		layer: {
			anyOf: [
				{ instanceof: "RegExp" },
				{ type: "string" },
				{ instanceof: "Function" }
			]
		},
		maxAsyncRequests: { type: "number", minimum: 1 },
		maxAsyncSize: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		maxInitialRequests: { type: "number", minimum: 1 },
		maxInitialSize: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		maxSize: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		minChunks: { type: "number", minimum: 1 },
		minRemainingSize: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		minSize: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		minSizeReduction: {
			oneOf: [{ $ref: "#/definitions/OptimizationSplitChunksSizes" }]
		},
		name: {
			anyOf: [{ enum: [!1] }, { type: "string" }, { instanceof: "Function" }]
		},
		priority: { type: "number" },
		reuseExistingChunk: { type: "boolean" },
		test: {
			anyOf: [
				{ instanceof: "RegExp" },
				{ type: "string" },
				{ instanceof: "Function" }
			]
		},
		type: {
			anyOf: [
				{ instanceof: "RegExp" },
				{ type: "string" },
				{ instanceof: "Function" }
			]
		},
		usedExports: { type: "boolean" }
	};
function pe(
	t,
	{
		instancePath: r = "",
		parentData: s,
		parentDataProperty: o,
		rootData: a = t
	} = {}
) {
	let i = null,
		l = 0;
	if (0 === l) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (pe.errors = [{ params: { type: "object" } }]), !1;
		{
			const r = l;
			for (const e in t)
				if (!n.call(le, e))
					return (pe.errors = [{ params: { additionalProperty: e } }]), !1;
			if (r === l) {
				if (void 0 !== t.automaticNameDelimiter) {
					let e = t.automaticNameDelimiter;
					const n = l;
					if (l === n) {
						if ("string" != typeof e)
							return (pe.errors = [{ params: { type: "string" } }]), !1;
						if (e.length < 1) return (pe.errors = [{ params: {} }]), !1;
					}
					var p = n === l;
				} else p = !0;
				if (p) {
					if (void 0 !== t.chunks) {
						let e = t.chunks;
						const n = l,
							r = l;
						let s = !1;
						const o = l;
						if ("initial" !== e && "async" !== e && "all" !== e) {
							const e = { params: {} };
							null === i ? (i = [e]) : i.push(e), l++;
						}
						var u = o === l;
						if (((s = s || u), !s)) {
							const t = l;
							if (!(e instanceof Function)) {
								const e = { params: {} };
								null === i ? (i = [e]) : i.push(e), l++;
							}
							(u = t === l), (s = s || u);
						}
						if (!s) {
							const e = { params: {} };
							return (
								null === i ? (i = [e]) : i.push(e), l++, (pe.errors = i), !1
							);
						}
						(l = r),
							null !== i && (r ? (i.length = r) : (i = null)),
							(p = n === l);
					} else p = !0;
					if (p) {
						if (void 0 !== t.enforce) {
							const e = l;
							if ("boolean" != typeof t.enforce)
								return (pe.errors = [{ params: { type: "boolean" } }]), !1;
							p = e === l;
						} else p = !0;
						if (p) {
							if (void 0 !== t.enforceSizeThreshold) {
								let e = t.enforceSizeThreshold;
								const n = l,
									r = l;
								let s = !1,
									o = null;
								const a = l,
									u = l;
								let c = !1;
								const m = l;
								if (l === m)
									if ("number" == typeof e) {
										if (e < 0 || isNaN(e)) {
											const e = { params: { comparison: ">=", limit: 0 } };
											null === i ? (i = [e]) : i.push(e), l++;
										}
									} else {
										const e = { params: { type: "number" } };
										null === i ? (i = [e]) : i.push(e), l++;
									}
								var f = m === l;
								if (((c = c || f), !c)) {
									const t = l;
									if (l === t)
										if (e && "object" == typeof e && !Array.isArray(e))
											for (const t in e) {
												const n = l;
												if ("number" != typeof e[t]) {
													const e = { params: { type: "number" } };
													null === i ? (i = [e]) : i.push(e), l++;
												}
												if (n !== l) break;
											}
										else {
											const e = { params: { type: "object" } };
											null === i ? (i = [e]) : i.push(e), l++;
										}
									(f = t === l), (c = c || f);
								}
								if (c) (l = u), null !== i && (u ? (i.length = u) : (i = null));
								else {
									const e = { params: {} };
									null === i ? (i = [e]) : i.push(e), l++;
								}
								if ((a === l && ((s = !0), (o = 0)), !s)) {
									const e = { params: { passingSchemas: o } };
									return (
										null === i ? (i = [e]) : i.push(e), l++, (pe.errors = i), !1
									);
								}
								(l = r),
									null !== i && (r ? (i.length = r) : (i = null)),
									(p = n === l);
							} else p = !0;
							if (p) {
								if (void 0 !== t.filename) {
									let n = t.filename;
									const r = l,
										s = l;
									let o = !1;
									const a = l;
									if (l === a)
										if ("string" == typeof n) {
											if (n.includes("!") || !1 !== e.test(n)) {
												const e = { params: {} };
												null === i ? (i = [e]) : i.push(e), l++;
											} else if (n.length < 1) {
												const e = { params: {} };
												null === i ? (i = [e]) : i.push(e), l++;
											}
										} else {
											const e = { params: { type: "string" } };
											null === i ? (i = [e]) : i.push(e), l++;
										}
									var c = a === l;
									if (((o = o || c), !o)) {
										const e = l;
										if (!(n instanceof Function)) {
											const e = { params: {} };
											null === i ? (i = [e]) : i.push(e), l++;
										}
										(c = e === l), (o = o || c);
									}
									if (!o) {
										const e = { params: {} };
										return (
											null === i ? (i = [e]) : i.push(e),
											l++,
											(pe.errors = i),
											!1
										);
									}
									(l = s),
										null !== i && (s ? (i.length = s) : (i = null)),
										(p = r === l);
								} else p = !0;
								if (p) {
									if (void 0 !== t.idHint) {
										const e = l;
										if ("string" != typeof t.idHint)
											return (pe.errors = [{ params: { type: "string" } }]), !1;
										p = e === l;
									} else p = !0;
									if (p) {
										if (void 0 !== t.layer) {
											let e = t.layer;
											const n = l,
												r = l;
											let s = !1;
											const o = l;
											if (!(e instanceof RegExp)) {
												const e = { params: {} };
												null === i ? (i = [e]) : i.push(e), l++;
											}
											var m = o === l;
											if (((s = s || m), !s)) {
												const t = l;
												if ("string" != typeof e) {
													const e = { params: { type: "string" } };
													null === i ? (i = [e]) : i.push(e), l++;
												}
												if (((m = t === l), (s = s || m), !s)) {
													const t = l;
													if (!(e instanceof Function)) {
														const e = { params: {} };
														null === i ? (i = [e]) : i.push(e), l++;
													}
													(m = t === l), (s = s || m);
												}
											}
											if (!s) {
												const e = { params: {} };
												return (
													null === i ? (i = [e]) : i.push(e),
													l++,
													(pe.errors = i),
													!1
												);
											}
											(l = r),
												null !== i && (r ? (i.length = r) : (i = null)),
												(p = n === l);
										} else p = !0;
										if (p) {
											if (void 0 !== t.maxAsyncRequests) {
												let e = t.maxAsyncRequests;
												const n = l;
												if (l === n) {
													if ("number" != typeof e)
														return (
															(pe.errors = [{ params: { type: "number" } }]), !1
														);
													if (e < 1 || isNaN(e))
														return (
															(pe.errors = [
																{ params: { comparison: ">=", limit: 1 } }
															]),
															!1
														);
												}
												p = n === l;
											} else p = !0;
											if (p) {
												if (void 0 !== t.maxAsyncSize) {
													let e = t.maxAsyncSize;
													const n = l,
														r = l;
													let s = !1,
														o = null;
													const a = l,
														u = l;
													let f = !1;
													const c = l;
													if (l === c)
														if ("number" == typeof e) {
															if (e < 0 || isNaN(e)) {
																const e = {
																	params: { comparison: ">=", limit: 0 }
																};
																null === i ? (i = [e]) : i.push(e), l++;
															}
														} else {
															const e = { params: { type: "number" } };
															null === i ? (i = [e]) : i.push(e), l++;
														}
													var y = c === l;
													if (((f = f || y), !f)) {
														const t = l;
														if (l === t)
															if (
																e &&
																"object" == typeof e &&
																!Array.isArray(e)
															)
																for (const t in e) {
																	const n = l;
																	if ("number" != typeof e[t]) {
																		const e = { params: { type: "number" } };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																	if (n !== l) break;
																}
															else {
																const e = { params: { type: "object" } };
																null === i ? (i = [e]) : i.push(e), l++;
															}
														(y = t === l), (f = f || y);
													}
													if (f)
														(l = u),
															null !== i && (u ? (i.length = u) : (i = null));
													else {
														const e = { params: {} };
														null === i ? (i = [e]) : i.push(e), l++;
													}
													if ((a === l && ((s = !0), (o = 0)), !s)) {
														const e = { params: { passingSchemas: o } };
														return (
															null === i ? (i = [e]) : i.push(e),
															l++,
															(pe.errors = i),
															!1
														);
													}
													(l = r),
														null !== i && (r ? (i.length = r) : (i = null)),
														(p = n === l);
												} else p = !0;
												if (p) {
													if (void 0 !== t.maxInitialRequests) {
														let e = t.maxInitialRequests;
														const n = l;
														if (l === n) {
															if ("number" != typeof e)
																return (
																	(pe.errors = [
																		{ params: { type: "number" } }
																	]),
																	!1
																);
															if (e < 1 || isNaN(e))
																return (
																	(pe.errors = [
																		{ params: { comparison: ">=", limit: 1 } }
																	]),
																	!1
																);
														}
														p = n === l;
													} else p = !0;
													if (p) {
														if (void 0 !== t.maxInitialSize) {
															let e = t.maxInitialSize;
															const n = l,
																r = l;
															let s = !1,
																o = null;
															const a = l,
																u = l;
															let f = !1;
															const c = l;
															if (l === c)
																if ("number" == typeof e) {
																	if (e < 0 || isNaN(e)) {
																		const e = {
																			params: { comparison: ">=", limit: 0 }
																		};
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																} else {
																	const e = { params: { type: "number" } };
																	null === i ? (i = [e]) : i.push(e), l++;
																}
															var h = c === l;
															if (((f = f || h), !f)) {
																const t = l;
																if (l === t)
																	if (
																		e &&
																		"object" == typeof e &&
																		!Array.isArray(e)
																	)
																		for (const t in e) {
																			const n = l;
																			if ("number" != typeof e[t]) {
																				const e = {
																					params: { type: "number" }
																				};
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																			if (n !== l) break;
																		}
																	else {
																		const e = { params: { type: "object" } };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																(h = t === l), (f = f || h);
															}
															if (f)
																(l = u),
																	null !== i &&
																		(u ? (i.length = u) : (i = null));
															else {
																const e = { params: {} };
																null === i ? (i = [e]) : i.push(e), l++;
															}
															if ((a === l && ((s = !0), (o = 0)), !s)) {
																const e = { params: { passingSchemas: o } };
																return (
																	null === i ? (i = [e]) : i.push(e),
																	l++,
																	(pe.errors = i),
																	!1
																);
															}
															(l = r),
																null !== i && (r ? (i.length = r) : (i = null)),
																(p = n === l);
														} else p = !0;
														if (p) {
															if (void 0 !== t.maxSize) {
																let e = t.maxSize;
																const n = l,
																	r = l;
																let s = !1,
																	o = null;
																const a = l,
																	u = l;
																let f = !1;
																const c = l;
																if (l === c)
																	if ("number" == typeof e) {
																		if (e < 0 || isNaN(e)) {
																			const e = {
																				params: { comparison: ">=", limit: 0 }
																			};
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	} else {
																		const e = { params: { type: "number" } };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																var d = c === l;
																if (((f = f || d), !f)) {
																	const t = l;
																	if (l === t)
																		if (
																			e &&
																			"object" == typeof e &&
																			!Array.isArray(e)
																		)
																			for (const t in e) {
																				const n = l;
																				if ("number" != typeof e[t]) {
																					const e = {
																						params: { type: "number" }
																					};
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																				if (n !== l) break;
																			}
																		else {
																			const e = { params: { type: "object" } };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	(d = t === l), (f = f || d);
																}
																if (f)
																	(l = u),
																		null !== i &&
																			(u ? (i.length = u) : (i = null));
																else {
																	const e = { params: {} };
																	null === i ? (i = [e]) : i.push(e), l++;
																}
																if ((a === l && ((s = !0), (o = 0)), !s)) {
																	const e = { params: { passingSchemas: o } };
																	return (
																		null === i ? (i = [e]) : i.push(e),
																		l++,
																		(pe.errors = i),
																		!1
																	);
																}
																(l = r),
																	null !== i &&
																		(r ? (i.length = r) : (i = null)),
																	(p = n === l);
															} else p = !0;
															if (p) {
																if (void 0 !== t.minChunks) {
																	let e = t.minChunks;
																	const n = l;
																	if (l === n) {
																		if ("number" != typeof e)
																			return (
																				(pe.errors = [
																					{ params: { type: "number" } }
																				]),
																				!1
																			);
																		if (e < 1 || isNaN(e))
																			return (
																				(pe.errors = [
																					{
																						params: {
																							comparison: ">=",
																							limit: 1
																						}
																					}
																				]),
																				!1
																			);
																	}
																	p = n === l;
																} else p = !0;
																if (p) {
																	if (void 0 !== t.minRemainingSize) {
																		let e = t.minRemainingSize;
																		const n = l,
																			r = l;
																		let s = !1,
																			o = null;
																		const a = l,
																			u = l;
																		let f = !1;
																		const c = l;
																		if (l === c)
																			if ("number" == typeof e) {
																				if (e < 0 || isNaN(e)) {
																					const e = {
																						params: {
																							comparison: ">=",
																							limit: 0
																						}
																					};
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																			} else {
																				const e = {
																					params: { type: "number" }
																				};
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																		var g = c === l;
																		if (((f = f || g), !f)) {
																			const t = l;
																			if (l === t)
																				if (
																					e &&
																					"object" == typeof e &&
																					!Array.isArray(e)
																				)
																					for (const t in e) {
																						const n = l;
																						if ("number" != typeof e[t]) {
																							const e = {
																								params: { type: "number" }
																							};
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																						if (n !== l) break;
																					}
																				else {
																					const e = {
																						params: { type: "object" }
																					};
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																			(g = t === l), (f = f || g);
																		}
																		if (f)
																			(l = u),
																				null !== i &&
																					(u ? (i.length = u) : (i = null));
																		else {
																			const e = { params: {} };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																		if ((a === l && ((s = !0), (o = 0)), !s)) {
																			const e = {
																				params: { passingSchemas: o }
																			};
																			return (
																				null === i ? (i = [e]) : i.push(e),
																				l++,
																				(pe.errors = i),
																				!1
																			);
																		}
																		(l = r),
																			null !== i &&
																				(r ? (i.length = r) : (i = null)),
																			(p = n === l);
																	} else p = !0;
																	if (p) {
																		if (void 0 !== t.minSize) {
																			let e = t.minSize;
																			const n = l,
																				r = l;
																			let s = !1,
																				o = null;
																			const a = l,
																				u = l;
																			let f = !1;
																			const c = l;
																			if (l === c)
																				if ("number" == typeof e) {
																					if (e < 0 || isNaN(e)) {
																						const e = {
																							params: {
																								comparison: ">=",
																								limit: 0
																							}
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																				} else {
																					const e = {
																						params: { type: "number" }
																					};
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																			var b = c === l;
																			if (((f = f || b), !f)) {
																				const t = l;
																				if (l === t)
																					if (
																						e &&
																						"object" == typeof e &&
																						!Array.isArray(e)
																					)
																						for (const t in e) {
																							const n = l;
																							if ("number" != typeof e[t]) {
																								const e = {
																									params: { type: "number" }
																								};
																								null === i
																									? (i = [e])
																									: i.push(e),
																									l++;
																							}
																							if (n !== l) break;
																						}
																					else {
																						const e = {
																							params: { type: "object" }
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																				(b = t === l), (f = f || b);
																			}
																			if (f)
																				(l = u),
																					null !== i &&
																						(u ? (i.length = u) : (i = null));
																			else {
																				const e = { params: {} };
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																			if (
																				(a === l && ((s = !0), (o = 0)), !s)
																			) {
																				const e = {
																					params: { passingSchemas: o }
																				};
																				return (
																					null === i ? (i = [e]) : i.push(e),
																					l++,
																					(pe.errors = i),
																					!1
																				);
																			}
																			(l = r),
																				null !== i &&
																					(r ? (i.length = r) : (i = null)),
																				(p = n === l);
																		} else p = !0;
																		if (p) {
																			if (void 0 !== t.minSizeReduction) {
																				let e = t.minSizeReduction;
																				const n = l,
																					r = l;
																				let s = !1,
																					o = null;
																				const a = l,
																					u = l;
																				let f = !1;
																				const c = l;
																				if (l === c)
																					if ("number" == typeof e) {
																						if (e < 0 || isNaN(e)) {
																							const e = {
																								params: {
																									comparison: ">=",
																									limit: 0
																								}
																							};
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																					} else {
																						const e = {
																							params: { type: "number" }
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																				var v = c === l;
																				if (((f = f || v), !f)) {
																					const t = l;
																					if (l === t)
																						if (
																							e &&
																							"object" == typeof e &&
																							!Array.isArray(e)
																						)
																							for (const t in e) {
																								const n = l;
																								if ("number" != typeof e[t]) {
																									const e = {
																										params: { type: "number" }
																									};
																									null === i
																										? (i = [e])
																										: i.push(e),
																										l++;
																								}
																								if (n !== l) break;
																							}
																						else {
																							const e = {
																								params: { type: "object" }
																							};
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																					(v = t === l), (f = f || v);
																				}
																				if (f)
																					(l = u),
																						null !== i &&
																							(u ? (i.length = u) : (i = null));
																				else {
																					const e = { params: {} };
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																				if (
																					(a === l && ((s = !0), (o = 0)), !s)
																				) {
																					const e = {
																						params: { passingSchemas: o }
																					};
																					return (
																						null === i ? (i = [e]) : i.push(e),
																						l++,
																						(pe.errors = i),
																						!1
																					);
																				}
																				(l = r),
																					null !== i &&
																						(r ? (i.length = r) : (i = null)),
																					(p = n === l);
																			} else p = !0;
																			if (p) {
																				if (void 0 !== t.name) {
																					let e = t.name;
																					const n = l,
																						r = l;
																					let s = !1;
																					const o = l;
																					if (!1 !== e) {
																						const e = { params: {} };
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																					var D = o === l;
																					if (((s = s || D), !s)) {
																						const t = l;
																						if ("string" != typeof e) {
																							const e = {
																								params: { type: "string" }
																							};
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																						if (
																							((D = t === l), (s = s || D), !s)
																						) {
																							const t = l;
																							if (!(e instanceof Function)) {
																								const e = { params: {} };
																								null === i
																									? (i = [e])
																									: i.push(e),
																									l++;
																							}
																							(D = t === l), (s = s || D);
																						}
																					}
																					if (!s) {
																						const e = { params: {} };
																						return (
																							null === i
																								? (i = [e])
																								: i.push(e),
																							l++,
																							(pe.errors = i),
																							!1
																						);
																					}
																					(l = r),
																						null !== i &&
																							(r ? (i.length = r) : (i = null)),
																						(p = n === l);
																				} else p = !0;
																				if (p) {
																					if (void 0 !== t.priority) {
																						const e = l;
																						if ("number" != typeof t.priority)
																							return (
																								(pe.errors = [
																									{ params: { type: "number" } }
																								]),
																								!1
																							);
																						p = e === l;
																					} else p = !0;
																					if (p) {
																						if (
																							void 0 !== t.reuseExistingChunk
																						) {
																							const e = l;
																							if (
																								"boolean" !=
																								typeof t.reuseExistingChunk
																							)
																								return (
																									(pe.errors = [
																										{
																											params: {
																												type: "boolean"
																											}
																										}
																									]),
																									!1
																								);
																							p = e === l;
																						} else p = !0;
																						if (p) {
																							if (void 0 !== t.test) {
																								let e = t.test;
																								const n = l,
																									r = l;
																								let s = !1;
																								const o = l;
																								if (!(e instanceof RegExp)) {
																									const e = { params: {} };
																									null === i
																										? (i = [e])
																										: i.push(e),
																										l++;
																								}
																								var P = o === l;
																								if (((s = s || P), !s)) {
																									const t = l;
																									if ("string" != typeof e) {
																										const e = {
																											params: { type: "string" }
																										};
																										null === i
																											? (i = [e])
																											: i.push(e),
																											l++;
																									}
																									if (
																										((P = t === l),
																										(s = s || P),
																										!s)
																									) {
																										const t = l;
																										if (
																											!(e instanceof Function)
																										) {
																											const e = { params: {} };
																											null === i
																												? (i = [e])
																												: i.push(e),
																												l++;
																										}
																										(P = t === l), (s = s || P);
																									}
																								}
																								if (!s) {
																									const e = { params: {} };
																									return (
																										null === i
																											? (i = [e])
																											: i.push(e),
																										l++,
																										(pe.errors = i),
																										!1
																									);
																								}
																								(l = r),
																									null !== i &&
																										(r
																											? (i.length = r)
																											: (i = null)),
																									(p = n === l);
																							} else p = !0;
																							if (p) {
																								if (void 0 !== t.type) {
																									let e = t.type;
																									const n = l,
																										r = l;
																									let s = !1;
																									const o = l;
																									if (!(e instanceof RegExp)) {
																										const e = { params: {} };
																										null === i
																											? (i = [e])
																											: i.push(e),
																											l++;
																									}
																									var A = o === l;
																									if (((s = s || A), !s)) {
																										const t = l;
																										if ("string" != typeof e) {
																											const e = {
																												params: {
																													type: "string"
																												}
																											};
																											null === i
																												? (i = [e])
																												: i.push(e),
																												l++;
																										}
																										if (
																											((A = t === l),
																											(s = s || A),
																											!s)
																										) {
																											const t = l;
																											if (
																												!(e instanceof Function)
																											) {
																												const e = {
																													params: {}
																												};
																												null === i
																													? (i = [e])
																													: i.push(e),
																													l++;
																											}
																											(A = t === l),
																												(s = s || A);
																										}
																									}
																									if (!s) {
																										const e = { params: {} };
																										return (
																											null === i
																												? (i = [e])
																												: i.push(e),
																											l++,
																											(pe.errors = i),
																											!1
																										);
																									}
																									(l = r),
																										null !== i &&
																											(r
																												? (i.length = r)
																												: (i = null)),
																										(p = n === l);
																								} else p = !0;
																								if (p)
																									if (
																										void 0 !== t.usedExports
																									) {
																										const e = l;
																										if (
																											"boolean" !=
																											typeof t.usedExports
																										)
																											return (
																												(pe.errors = [
																													{
																														params: {
																															type: "boolean"
																														}
																													}
																												]),
																												!1
																											);
																										p = e === l;
																									} else p = !0;
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (pe.errors = i), 0 === l;
}
function ue(
	t,
	{
		instancePath: r = "",
		parentData: s,
		parentDataProperty: o,
		rootData: a = t
	} = {}
) {
	let i = null,
		l = 0;
	if (0 === l) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (ue.errors = [{ params: { type: "object" } }]), !1;
		{
			const s = l;
			for (const e in t)
				if (!n.call(ie, e))
					return (ue.errors = [{ params: { additionalProperty: e } }]), !1;
			if (s === l) {
				if (void 0 !== t.automaticNameDelimiter) {
					let e = t.automaticNameDelimiter;
					const n = l;
					if (l === n) {
						if ("string" != typeof e)
							return (ue.errors = [{ params: { type: "string" } }]), !1;
						if (e.length < 1) return (ue.errors = [{ params: {} }]), !1;
					}
					var p = n === l;
				} else p = !0;
				if (p) {
					if (void 0 !== t.cacheGroups) {
						let e = t.cacheGroups;
						const n = l,
							s = l,
							o = l;
						if (l === o)
							if (e && "object" == typeof e && !Array.isArray(e)) {
								let t;
								if (void 0 === e.test && (t = "test")) {
									const e = {};
									null === i ? (i = [e]) : i.push(e), l++;
								} else if (void 0 !== e.test) {
									let t = e.test;
									const n = l;
									let r = !1;
									const s = l;
									if (!(t instanceof RegExp)) {
										const e = {};
										null === i ? (i = [e]) : i.push(e), l++;
									}
									var u = s === l;
									if (((r = r || u), !r)) {
										const e = l;
										if ("string" != typeof t) {
											const e = {};
											null === i ? (i = [e]) : i.push(e), l++;
										}
										if (((u = e === l), (r = r || u), !r)) {
											const e = l;
											if (!(t instanceof Function)) {
												const e = {};
												null === i ? (i = [e]) : i.push(e), l++;
											}
											(u = e === l), (r = r || u);
										}
									}
									if (r)
										(l = n), null !== i && (n ? (i.length = n) : (i = null));
									else {
										const e = {};
										null === i ? (i = [e]) : i.push(e), l++;
									}
								}
							} else {
								const e = {};
								null === i ? (i = [e]) : i.push(e), l++;
							}
						if (o === l) return (ue.errors = [{ params: {} }]), !1;
						if (
							((l = s),
							null !== i && (s ? (i.length = s) : (i = null)),
							l === n)
						) {
							if (!e || "object" != typeof e || Array.isArray(e))
								return (ue.errors = [{ params: { type: "object" } }]), !1;
							for (const t in e) {
								let n = e[t];
								const s = l,
									o = l;
								let p = !1;
								const u = l;
								if (!1 !== n) {
									const e = { params: {} };
									null === i ? (i = [e]) : i.push(e), l++;
								}
								var f = u === l;
								if (((p = p || f), !p)) {
									const s = l;
									if (!(n instanceof RegExp)) {
										const e = { params: {} };
										null === i ? (i = [e]) : i.push(e), l++;
									}
									if (((f = s === l), (p = p || f), !p)) {
										const s = l;
										if ("string" != typeof n) {
											const e = { params: { type: "string" } };
											null === i ? (i = [e]) : i.push(e), l++;
										}
										if (((f = s === l), (p = p || f), !p)) {
											const s = l;
											if (!(n instanceof Function)) {
												const e = { params: {} };
												null === i ? (i = [e]) : i.push(e), l++;
											}
											if (((f = s === l), (p = p || f), !p)) {
												const s = l;
												pe(n, {
													instancePath:
														r +
														"/cacheGroups/" +
														t.replace(/~/g, "~0").replace(/\//g, "~1"),
													parentData: e,
													parentDataProperty: t,
													rootData: a
												}) ||
													((i = null === i ? pe.errors : i.concat(pe.errors)),
													(l = i.length)),
													(f = s === l),
													(p = p || f);
											}
										}
									}
								}
								if (!p) {
									const e = { params: {} };
									return (
										null === i ? (i = [e]) : i.push(e), l++, (ue.errors = i), !1
									);
								}
								if (
									((l = o),
									null !== i && (o ? (i.length = o) : (i = null)),
									s !== l)
								)
									break;
							}
						}
						p = n === l;
					} else p = !0;
					if (p) {
						if (void 0 !== t.chunks) {
							let e = t.chunks;
							const n = l,
								r = l;
							let s = !1;
							const o = l;
							if ("initial" !== e && "async" !== e && "all" !== e) {
								const e = { params: {} };
								null === i ? (i = [e]) : i.push(e), l++;
							}
							var c = o === l;
							if (((s = s || c), !s)) {
								const t = l;
								if (!(e instanceof Function)) {
									const e = { params: {} };
									null === i ? (i = [e]) : i.push(e), l++;
								}
								(c = t === l), (s = s || c);
							}
							if (!s) {
								const e = { params: {} };
								return (
									null === i ? (i = [e]) : i.push(e), l++, (ue.errors = i), !1
								);
							}
							(l = r),
								null !== i && (r ? (i.length = r) : (i = null)),
								(p = n === l);
						} else p = !0;
						if (p) {
							if (void 0 !== t.defaultSizeTypes) {
								let e = t.defaultSizeTypes;
								const n = l;
								if (l === n) {
									if (!Array.isArray(e))
										return (ue.errors = [{ params: { type: "array" } }]), !1;
									if (e.length < 1)
										return (ue.errors = [{ params: { limit: 1 } }]), !1;
									{
										const t = e.length;
										for (let n = 0; n < t; n++) {
											const t = l;
											if ("string" != typeof e[n])
												return (
													(ue.errors = [{ params: { type: "string" } }]), !1
												);
											if (t !== l) break;
										}
									}
								}
								p = n === l;
							} else p = !0;
							if (p) {
								if (void 0 !== t.enforceSizeThreshold) {
									let e = t.enforceSizeThreshold;
									const n = l,
										r = l;
									let s = !1,
										o = null;
									const a = l,
										u = l;
									let f = !1;
									const c = l;
									if (l === c)
										if ("number" == typeof e) {
											if (e < 0 || isNaN(e)) {
												const e = { params: { comparison: ">=", limit: 0 } };
												null === i ? (i = [e]) : i.push(e), l++;
											}
										} else {
											const e = { params: { type: "number" } };
											null === i ? (i = [e]) : i.push(e), l++;
										}
									var m = c === l;
									if (((f = f || m), !f)) {
										const t = l;
										if (l === t)
											if (e && "object" == typeof e && !Array.isArray(e))
												for (const t in e) {
													const n = l;
													if ("number" != typeof e[t]) {
														const e = { params: { type: "number" } };
														null === i ? (i = [e]) : i.push(e), l++;
													}
													if (n !== l) break;
												}
											else {
												const e = { params: { type: "object" } };
												null === i ? (i = [e]) : i.push(e), l++;
											}
										(m = t === l), (f = f || m);
									}
									if (f)
										(l = u), null !== i && (u ? (i.length = u) : (i = null));
									else {
										const e = { params: {} };
										null === i ? (i = [e]) : i.push(e), l++;
									}
									if ((a === l && ((s = !0), (o = 0)), !s)) {
										const e = { params: { passingSchemas: o } };
										return (
											null === i ? (i = [e]) : i.push(e),
											l++,
											(ue.errors = i),
											!1
										);
									}
									(l = r),
										null !== i && (r ? (i.length = r) : (i = null)),
										(p = n === l);
								} else p = !0;
								if (p) {
									if (void 0 !== t.fallbackCacheGroup) {
										let e = t.fallbackCacheGroup;
										const n = l;
										if (l === n) {
											if (!e || "object" != typeof e || Array.isArray(e))
												return (
													(ue.errors = [{ params: { type: "object" } }]), !1
												);
											{
												const t = l;
												for (const t in e)
													if (
														"automaticNameDelimiter" !== t &&
														"chunks" !== t &&
														"maxAsyncSize" !== t &&
														"maxInitialSize" !== t &&
														"maxSize" !== t &&
														"minSize" !== t &&
														"minSizeReduction" !== t
													)
														return (
															(ue.errors = [
																{ params: { additionalProperty: t } }
															]),
															!1
														);
												if (t === l) {
													if (void 0 !== e.automaticNameDelimiter) {
														let t = e.automaticNameDelimiter;
														const n = l;
														if (l === n) {
															if ("string" != typeof t)
																return (
																	(ue.errors = [
																		{ params: { type: "string" } }
																	]),
																	!1
																);
															if (t.length < 1)
																return (ue.errors = [{ params: {} }]), !1;
														}
														var y = n === l;
													} else y = !0;
													if (y) {
														if (void 0 !== e.chunks) {
															let t = e.chunks;
															const n = l,
																r = l;
															let s = !1;
															const o = l;
															if (
																"initial" !== t &&
																"async" !== t &&
																"all" !== t
															) {
																const e = { params: {} };
																null === i ? (i = [e]) : i.push(e), l++;
															}
															var h = o === l;
															if (((s = s || h), !s)) {
																const e = l;
																if (!(t instanceof Function)) {
																	const e = { params: {} };
																	null === i ? (i = [e]) : i.push(e), l++;
																}
																(h = e === l), (s = s || h);
															}
															if (!s) {
																const e = { params: {} };
																return (
																	null === i ? (i = [e]) : i.push(e),
																	l++,
																	(ue.errors = i),
																	!1
																);
															}
															(l = r),
																null !== i && (r ? (i.length = r) : (i = null)),
																(y = n === l);
														} else y = !0;
														if (y) {
															if (void 0 !== e.maxAsyncSize) {
																let t = e.maxAsyncSize;
																const n = l,
																	r = l;
																let s = !1,
																	o = null;
																const a = l,
																	p = l;
																let u = !1;
																const f = l;
																if (l === f)
																	if ("number" == typeof t) {
																		if (t < 0 || isNaN(t)) {
																			const e = {
																				params: { comparison: ">=", limit: 0 }
																			};
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	} else {
																		const e = { params: { type: "number" } };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																var d = f === l;
																if (((u = u || d), !u)) {
																	const e = l;
																	if (l === e)
																		if (
																			t &&
																			"object" == typeof t &&
																			!Array.isArray(t)
																		)
																			for (const e in t) {
																				const n = l;
																				if ("number" != typeof t[e]) {
																					const e = {
																						params: { type: "number" }
																					};
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																				if (n !== l) break;
																			}
																		else {
																			const e = { params: { type: "object" } };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	(d = e === l), (u = u || d);
																}
																if (u)
																	(l = p),
																		null !== i &&
																			(p ? (i.length = p) : (i = null));
																else {
																	const e = { params: {} };
																	null === i ? (i = [e]) : i.push(e), l++;
																}
																if ((a === l && ((s = !0), (o = 0)), !s)) {
																	const e = { params: { passingSchemas: o } };
																	return (
																		null === i ? (i = [e]) : i.push(e),
																		l++,
																		(ue.errors = i),
																		!1
																	);
																}
																(l = r),
																	null !== i &&
																		(r ? (i.length = r) : (i = null)),
																	(y = n === l);
															} else y = !0;
															if (y) {
																if (void 0 !== e.maxInitialSize) {
																	let t = e.maxInitialSize;
																	const n = l,
																		r = l;
																	let s = !1,
																		o = null;
																	const a = l,
																		p = l;
																	let u = !1;
																	const f = l;
																	if (l === f)
																		if ("number" == typeof t) {
																			if (t < 0 || isNaN(t)) {
																				const e = {
																					params: { comparison: ">=", limit: 0 }
																				};
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																		} else {
																			const e = { params: { type: "number" } };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	var g = f === l;
																	if (((u = u || g), !u)) {
																		const e = l;
																		if (l === e)
																			if (
																				t &&
																				"object" == typeof t &&
																				!Array.isArray(t)
																			)
																				for (const e in t) {
																					const n = l;
																					if ("number" != typeof t[e]) {
																						const e = {
																							params: { type: "number" }
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																					if (n !== l) break;
																				}
																			else {
																				const e = {
																					params: { type: "object" }
																				};
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																		(g = e === l), (u = u || g);
																	}
																	if (u)
																		(l = p),
																			null !== i &&
																				(p ? (i.length = p) : (i = null));
																	else {
																		const e = { params: {} };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																	if ((a === l && ((s = !0), (o = 0)), !s)) {
																		const e = { params: { passingSchemas: o } };
																		return (
																			null === i ? (i = [e]) : i.push(e),
																			l++,
																			(ue.errors = i),
																			!1
																		);
																	}
																	(l = r),
																		null !== i &&
																			(r ? (i.length = r) : (i = null)),
																		(y = n === l);
																} else y = !0;
																if (y) {
																	if (void 0 !== e.maxSize) {
																		let t = e.maxSize;
																		const n = l,
																			r = l;
																		let s = !1,
																			o = null;
																		const a = l,
																			p = l;
																		let u = !1;
																		const f = l;
																		if (l === f)
																			if ("number" == typeof t) {
																				if (t < 0 || isNaN(t)) {
																					const e = {
																						params: {
																							comparison: ">=",
																							limit: 0
																						}
																					};
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																			} else {
																				const e = {
																					params: { type: "number" }
																				};
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																		var b = f === l;
																		if (((u = u || b), !u)) {
																			const e = l;
																			if (l === e)
																				if (
																					t &&
																					"object" == typeof t &&
																					!Array.isArray(t)
																				)
																					for (const e in t) {
																						const n = l;
																						if ("number" != typeof t[e]) {
																							const e = {
																								params: { type: "number" }
																							};
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																						if (n !== l) break;
																					}
																				else {
																					const e = {
																						params: { type: "object" }
																					};
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																			(b = e === l), (u = u || b);
																		}
																		if (u)
																			(l = p),
																				null !== i &&
																					(p ? (i.length = p) : (i = null));
																		else {
																			const e = { params: {} };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																		if ((a === l && ((s = !0), (o = 0)), !s)) {
																			const e = {
																				params: { passingSchemas: o }
																			};
																			return (
																				null === i ? (i = [e]) : i.push(e),
																				l++,
																				(ue.errors = i),
																				!1
																			);
																		}
																		(l = r),
																			null !== i &&
																				(r ? (i.length = r) : (i = null)),
																			(y = n === l);
																	} else y = !0;
																	if (y) {
																		if (void 0 !== e.minSize) {
																			let t = e.minSize;
																			const n = l,
																				r = l;
																			let s = !1,
																				o = null;
																			const a = l,
																				p = l;
																			let u = !1;
																			const f = l;
																			if (l === f)
																				if ("number" == typeof t) {
																					if (t < 0 || isNaN(t)) {
																						const e = {
																							params: {
																								comparison: ">=",
																								limit: 0
																							}
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																				} else {
																					const e = {
																						params: { type: "number" }
																					};
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																			var v = f === l;
																			if (((u = u || v), !u)) {
																				const e = l;
																				if (l === e)
																					if (
																						t &&
																						"object" == typeof t &&
																						!Array.isArray(t)
																					)
																						for (const e in t) {
																							const n = l;
																							if ("number" != typeof t[e]) {
																								const e = {
																									params: { type: "number" }
																								};
																								null === i
																									? (i = [e])
																									: i.push(e),
																									l++;
																							}
																							if (n !== l) break;
																						}
																					else {
																						const e = {
																							params: { type: "object" }
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																				(v = e === l), (u = u || v);
																			}
																			if (u)
																				(l = p),
																					null !== i &&
																						(p ? (i.length = p) : (i = null));
																			else {
																				const e = { params: {} };
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																			if (
																				(a === l && ((s = !0), (o = 0)), !s)
																			) {
																				const e = {
																					params: { passingSchemas: o }
																				};
																				return (
																					null === i ? (i = [e]) : i.push(e),
																					l++,
																					(ue.errors = i),
																					!1
																				);
																			}
																			(l = r),
																				null !== i &&
																					(r ? (i.length = r) : (i = null)),
																				(y = n === l);
																		} else y = !0;
																		if (y)
																			if (void 0 !== e.minSizeReduction) {
																				let t = e.minSizeReduction;
																				const n = l,
																					r = l;
																				let s = !1,
																					o = null;
																				const a = l,
																					p = l;
																				let u = !1;
																				const f = l;
																				if (l === f)
																					if ("number" == typeof t) {
																						if (t < 0 || isNaN(t)) {
																							const e = {
																								params: {
																									comparison: ">=",
																									limit: 0
																								}
																							};
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																					} else {
																						const e = {
																							params: { type: "number" }
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																				var D = f === l;
																				if (((u = u || D), !u)) {
																					const e = l;
																					if (l === e)
																						if (
																							t &&
																							"object" == typeof t &&
																							!Array.isArray(t)
																						)
																							for (const e in t) {
																								const n = l;
																								if ("number" != typeof t[e]) {
																									const e = {
																										params: { type: "number" }
																									};
																									null === i
																										? (i = [e])
																										: i.push(e),
																										l++;
																								}
																								if (n !== l) break;
																							}
																						else {
																							const e = {
																								params: { type: "object" }
																							};
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																					(D = e === l), (u = u || D);
																				}
																				if (u)
																					(l = p),
																						null !== i &&
																							(p ? (i.length = p) : (i = null));
																				else {
																					const e = { params: {} };
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																				if (
																					(a === l && ((s = !0), (o = 0)), !s)
																				) {
																					const e = {
																						params: { passingSchemas: o }
																					};
																					return (
																						null === i ? (i = [e]) : i.push(e),
																						l++,
																						(ue.errors = i),
																						!1
																					);
																				}
																				(l = r),
																					null !== i &&
																						(r ? (i.length = r) : (i = null)),
																					(y = n === l);
																			} else y = !0;
																	}
																}
															}
														}
													}
												}
											}
										}
										p = n === l;
									} else p = !0;
									if (p) {
										if (void 0 !== t.filename) {
											let n = t.filename;
											const r = l,
												s = l;
											let o = !1;
											const a = l;
											if (l === a)
												if ("string" == typeof n) {
													if (n.includes("!") || !1 !== e.test(n)) {
														const e = { params: {} };
														null === i ? (i = [e]) : i.push(e), l++;
													} else if (n.length < 1) {
														const e = { params: {} };
														null === i ? (i = [e]) : i.push(e), l++;
													}
												} else {
													const e = { params: { type: "string" } };
													null === i ? (i = [e]) : i.push(e), l++;
												}
											var P = a === l;
											if (((o = o || P), !o)) {
												const e = l;
												if (!(n instanceof Function)) {
													const e = { params: {} };
													null === i ? (i = [e]) : i.push(e), l++;
												}
												(P = e === l), (o = o || P);
											}
											if (!o) {
												const e = { params: {} };
												return (
													null === i ? (i = [e]) : i.push(e),
													l++,
													(ue.errors = i),
													!1
												);
											}
											(l = s),
												null !== i && (s ? (i.length = s) : (i = null)),
												(p = r === l);
										} else p = !0;
										if (p) {
											if (void 0 !== t.hidePathInfo) {
												const e = l;
												if ("boolean" != typeof t.hidePathInfo)
													return (
														(ue.errors = [{ params: { type: "boolean" } }]), !1
													);
												p = e === l;
											} else p = !0;
											if (p) {
												if (void 0 !== t.maxAsyncRequests) {
													let e = t.maxAsyncRequests;
													const n = l;
													if (l === n) {
														if ("number" != typeof e)
															return (
																(ue.errors = [{ params: { type: "number" } }]),
																!1
															);
														if (e < 1 || isNaN(e))
															return (
																(ue.errors = [
																	{ params: { comparison: ">=", limit: 1 } }
																]),
																!1
															);
													}
													p = n === l;
												} else p = !0;
												if (p) {
													if (void 0 !== t.maxAsyncSize) {
														let e = t.maxAsyncSize;
														const n = l,
															r = l;
														let s = !1,
															o = null;
														const a = l,
															u = l;
														let f = !1;
														const c = l;
														if (l === c)
															if ("number" == typeof e) {
																if (e < 0 || isNaN(e)) {
																	const e = {
																		params: { comparison: ">=", limit: 0 }
																	};
																	null === i ? (i = [e]) : i.push(e), l++;
																}
															} else {
																const e = { params: { type: "number" } };
																null === i ? (i = [e]) : i.push(e), l++;
															}
														var A = c === l;
														if (((f = f || A), !f)) {
															const t = l;
															if (l === t)
																if (
																	e &&
																	"object" == typeof e &&
																	!Array.isArray(e)
																)
																	for (const t in e) {
																		const n = l;
																		if ("number" != typeof e[t]) {
																			const e = { params: { type: "number" } };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																		if (n !== l) break;
																	}
																else {
																	const e = { params: { type: "object" } };
																	null === i ? (i = [e]) : i.push(e), l++;
																}
															(A = t === l), (f = f || A);
														}
														if (f)
															(l = u),
																null !== i && (u ? (i.length = u) : (i = null));
														else {
															const e = { params: {} };
															null === i ? (i = [e]) : i.push(e), l++;
														}
														if ((a === l && ((s = !0), (o = 0)), !s)) {
															const e = { params: { passingSchemas: o } };
															return (
																null === i ? (i = [e]) : i.push(e),
																l++,
																(ue.errors = i),
																!1
															);
														}
														(l = r),
															null !== i && (r ? (i.length = r) : (i = null)),
															(p = n === l);
													} else p = !0;
													if (p) {
														if (void 0 !== t.maxInitialRequests) {
															let e = t.maxInitialRequests;
															const n = l;
															if (l === n) {
																if ("number" != typeof e)
																	return (
																		(ue.errors = [
																			{ params: { type: "number" } }
																		]),
																		!1
																	);
																if (e < 1 || isNaN(e))
																	return (
																		(ue.errors = [
																			{ params: { comparison: ">=", limit: 1 } }
																		]),
																		!1
																	);
															}
															p = n === l;
														} else p = !0;
														if (p) {
															if (void 0 !== t.maxInitialSize) {
																let e = t.maxInitialSize;
																const n = l,
																	r = l;
																let s = !1,
																	o = null;
																const a = l,
																	u = l;
																let f = !1;
																const c = l;
																if (l === c)
																	if ("number" == typeof e) {
																		if (e < 0 || isNaN(e)) {
																			const e = {
																				params: { comparison: ">=", limit: 0 }
																			};
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	} else {
																		const e = { params: { type: "number" } };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																var x = c === l;
																if (((f = f || x), !f)) {
																	const t = l;
																	if (l === t)
																		if (
																			e &&
																			"object" == typeof e &&
																			!Array.isArray(e)
																		)
																			for (const t in e) {
																				const n = l;
																				if ("number" != typeof e[t]) {
																					const e = {
																						params: { type: "number" }
																					};
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																				if (n !== l) break;
																			}
																		else {
																			const e = { params: { type: "object" } };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	(x = t === l), (f = f || x);
																}
																if (f)
																	(l = u),
																		null !== i &&
																			(u ? (i.length = u) : (i = null));
																else {
																	const e = { params: {} };
																	null === i ? (i = [e]) : i.push(e), l++;
																}
																if ((a === l && ((s = !0), (o = 0)), !s)) {
																	const e = { params: { passingSchemas: o } };
																	return (
																		null === i ? (i = [e]) : i.push(e),
																		l++,
																		(ue.errors = i),
																		!1
																	);
																}
																(l = r),
																	null !== i &&
																		(r ? (i.length = r) : (i = null)),
																	(p = n === l);
															} else p = !0;
															if (p) {
																if (void 0 !== t.maxSize) {
																	let e = t.maxSize;
																	const n = l,
																		r = l;
																	let s = !1,
																		o = null;
																	const a = l,
																		u = l;
																	let f = !1;
																	const c = l;
																	if (l === c)
																		if ("number" == typeof e) {
																			if (e < 0 || isNaN(e)) {
																				const e = {
																					params: { comparison: ">=", limit: 0 }
																				};
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																		} else {
																			const e = { params: { type: "number" } };
																			null === i ? (i = [e]) : i.push(e), l++;
																		}
																	var k = c === l;
																	if (((f = f || k), !f)) {
																		const t = l;
																		if (l === t)
																			if (
																				e &&
																				"object" == typeof e &&
																				!Array.isArray(e)
																			)
																				for (const t in e) {
																					const n = l;
																					if ("number" != typeof e[t]) {
																						const e = {
																							params: { type: "number" }
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																					if (n !== l) break;
																				}
																			else {
																				const e = {
																					params: { type: "object" }
																				};
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																		(k = t === l), (f = f || k);
																	}
																	if (f)
																		(l = u),
																			null !== i &&
																				(u ? (i.length = u) : (i = null));
																	else {
																		const e = { params: {} };
																		null === i ? (i = [e]) : i.push(e), l++;
																	}
																	if ((a === l && ((s = !0), (o = 0)), !s)) {
																		const e = { params: { passingSchemas: o } };
																		return (
																			null === i ? (i = [e]) : i.push(e),
																			l++,
																			(ue.errors = i),
																			!1
																		);
																	}
																	(l = r),
																		null !== i &&
																			(r ? (i.length = r) : (i = null)),
																		(p = n === l);
																} else p = !0;
																if (p) {
																	if (void 0 !== t.minChunks) {
																		let e = t.minChunks;
																		const n = l;
																		if (l === n) {
																			if ("number" != typeof e)
																				return (
																					(ue.errors = [
																						{ params: { type: "number" } }
																					]),
																					!1
																				);
																			if (e < 1 || isNaN(e))
																				return (
																					(ue.errors = [
																						{
																							params: {
																								comparison: ">=",
																								limit: 1
																							}
																						}
																					]),
																					!1
																				);
																		}
																		p = n === l;
																	} else p = !0;
																	if (p) {
																		if (void 0 !== t.minRemainingSize) {
																			let e = t.minRemainingSize;
																			const n = l,
																				r = l;
																			let s = !1,
																				o = null;
																			const a = l,
																				u = l;
																			let f = !1;
																			const c = l;
																			if (l === c)
																				if ("number" == typeof e) {
																					if (e < 0 || isNaN(e)) {
																						const e = {
																							params: {
																								comparison: ">=",
																								limit: 0
																							}
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																				} else {
																					const e = {
																						params: { type: "number" }
																					};
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																			var j = c === l;
																			if (((f = f || j), !f)) {
																				const t = l;
																				if (l === t)
																					if (
																						e &&
																						"object" == typeof e &&
																						!Array.isArray(e)
																					)
																						for (const t in e) {
																							const n = l;
																							if ("number" != typeof e[t]) {
																								const e = {
																									params: { type: "number" }
																								};
																								null === i
																									? (i = [e])
																									: i.push(e),
																									l++;
																							}
																							if (n !== l) break;
																						}
																					else {
																						const e = {
																							params: { type: "object" }
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																				(j = t === l), (f = f || j);
																			}
																			if (f)
																				(l = u),
																					null !== i &&
																						(u ? (i.length = u) : (i = null));
																			else {
																				const e = { params: {} };
																				null === i ? (i = [e]) : i.push(e), l++;
																			}
																			if (
																				(a === l && ((s = !0), (o = 0)), !s)
																			) {
																				const e = {
																					params: { passingSchemas: o }
																				};
																				return (
																					null === i ? (i = [e]) : i.push(e),
																					l++,
																					(ue.errors = i),
																					!1
																				);
																			}
																			(l = r),
																				null !== i &&
																					(r ? (i.length = r) : (i = null)),
																				(p = n === l);
																		} else p = !0;
																		if (p) {
																			if (void 0 !== t.minSize) {
																				let e = t.minSize;
																				const n = l,
																					r = l;
																				let s = !1,
																					o = null;
																				const a = l,
																					u = l;
																				let f = !1;
																				const c = l;
																				if (l === c)
																					if ("number" == typeof e) {
																						if (e < 0 || isNaN(e)) {
																							const e = {
																								params: {
																									comparison: ">=",
																									limit: 0
																								}
																							};
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																					} else {
																						const e = {
																							params: { type: "number" }
																						};
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																				var S = c === l;
																				if (((f = f || S), !f)) {
																					const t = l;
																					if (l === t)
																						if (
																							e &&
																							"object" == typeof e &&
																							!Array.isArray(e)
																						)
																							for (const t in e) {
																								const n = l;
																								if ("number" != typeof e[t]) {
																									const e = {
																										params: { type: "number" }
																									};
																									null === i
																										? (i = [e])
																										: i.push(e),
																										l++;
																								}
																								if (n !== l) break;
																							}
																						else {
																							const e = {
																								params: { type: "object" }
																							};
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																					(S = t === l), (f = f || S);
																				}
																				if (f)
																					(l = u),
																						null !== i &&
																							(u ? (i.length = u) : (i = null));
																				else {
																					const e = { params: {} };
																					null === i ? (i = [e]) : i.push(e),
																						l++;
																				}
																				if (
																					(a === l && ((s = !0), (o = 0)), !s)
																				) {
																					const e = {
																						params: { passingSchemas: o }
																					};
																					return (
																						null === i ? (i = [e]) : i.push(e),
																						l++,
																						(ue.errors = i),
																						!1
																					);
																				}
																				(l = r),
																					null !== i &&
																						(r ? (i.length = r) : (i = null)),
																					(p = n === l);
																			} else p = !0;
																			if (p) {
																				if (void 0 !== t.minSizeReduction) {
																					let e = t.minSizeReduction;
																					const n = l,
																						r = l;
																					let s = !1,
																						o = null;
																					const a = l,
																						u = l;
																					let f = !1;
																					const c = l;
																					if (l === c)
																						if ("number" == typeof e) {
																							if (e < 0 || isNaN(e)) {
																								const e = {
																									params: {
																										comparison: ">=",
																										limit: 0
																									}
																								};
																								null === i
																									? (i = [e])
																									: i.push(e),
																									l++;
																							}
																						} else {
																							const e = {
																								params: { type: "number" }
																							};
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																					var C = c === l;
																					if (((f = f || C), !f)) {
																						const t = l;
																						if (l === t)
																							if (
																								e &&
																								"object" == typeof e &&
																								!Array.isArray(e)
																							)
																								for (const t in e) {
																									const n = l;
																									if ("number" != typeof e[t]) {
																										const e = {
																											params: { type: "number" }
																										};
																										null === i
																											? (i = [e])
																											: i.push(e),
																											l++;
																									}
																									if (n !== l) break;
																								}
																							else {
																								const e = {
																									params: { type: "object" }
																								};
																								null === i
																									? (i = [e])
																									: i.push(e),
																									l++;
																							}
																						(C = t === l), (f = f || C);
																					}
																					if (f)
																						(l = u),
																							null !== i &&
																								(u
																									? (i.length = u)
																									: (i = null));
																					else {
																						const e = { params: {} };
																						null === i ? (i = [e]) : i.push(e),
																							l++;
																					}
																					if (
																						(a === l && ((s = !0), (o = 0)), !s)
																					) {
																						const e = {
																							params: { passingSchemas: o }
																						};
																						return (
																							null === i
																								? (i = [e])
																								: i.push(e),
																							l++,
																							(ue.errors = i),
																							!1
																						);
																					}
																					(l = r),
																						null !== i &&
																							(r ? (i.length = r) : (i = null)),
																						(p = n === l);
																				} else p = !0;
																				if (p) {
																					if (void 0 !== t.name) {
																						let e = t.name;
																						const n = l,
																							r = l;
																						let s = !1;
																						const o = l;
																						if (!1 !== e) {
																							const e = { params: {} };
																							null === i
																								? (i = [e])
																								: i.push(e),
																								l++;
																						}
																						var O = o === l;
																						if (((s = s || O), !s)) {
																							const t = l;
																							if ("string" != typeof e) {
																								const e = {
																									params: { type: "string" }
																								};
																								null === i
																									? (i = [e])
																									: i.push(e),
																									l++;
																							}
																							if (
																								((O = t === l),
																								(s = s || O),
																								!s)
																							) {
																								const t = l;
																								if (!(e instanceof Function)) {
																									const e = { params: {} };
																									null === i
																										? (i = [e])
																										: i.push(e),
																										l++;
																								}
																								(O = t === l), (s = s || O);
																							}
																						}
																						if (!s) {
																							const e = { params: {} };
																							return (
																								null === i
																									? (i = [e])
																									: i.push(e),
																								l++,
																								(ue.errors = i),
																								!1
																							);
																						}
																						(l = r),
																							null !== i &&
																								(r
																									? (i.length = r)
																									: (i = null)),
																							(p = n === l);
																					} else p = !0;
																					if (p)
																						if (void 0 !== t.usedExports) {
																							const e = l;
																							if (
																								"boolean" !=
																								typeof t.usedExports
																							)
																								return (
																									(ue.errors = [
																										{
																											params: {
																												type: "boolean"
																											}
																										}
																									]),
																									!1
																								);
																							p = e === l;
																						} else p = !0;
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (ue.errors = i), 0 === l;
}
function fe(
	e,
	{
		instancePath: t = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = e
	} = {}
) {
	let a = null,
		i = 0;
	if (0 === i) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (fe.errors = [{ params: { type: "object" } }]), !1;
		{
			const r = i;
			for (const t in e)
				if (!n.call(ae, t))
					return (fe.errors = [{ params: { additionalProperty: t } }]), !1;
			if (r === i) {
				if (void 0 !== e.checkWasmTypes) {
					const t = i;
					if ("boolean" != typeof e.checkWasmTypes)
						return (fe.errors = [{ params: { type: "boolean" } }]), !1;
					var l = t === i;
				} else l = !0;
				if (l) {
					if (void 0 !== e.chunkIds) {
						let t = e.chunkIds;
						const n = i;
						if (
							"natural" !== t &&
							"named" !== t &&
							"deterministic" !== t &&
							"size" !== t &&
							"total-size" !== t &&
							!1 !== t
						)
							return (fe.errors = [{ params: {} }]), !1;
						l = n === i;
					} else l = !0;
					if (l) {
						if (void 0 !== e.concatenateModules) {
							const t = i;
							if ("boolean" != typeof e.concatenateModules)
								return (fe.errors = [{ params: { type: "boolean" } }]), !1;
							l = t === i;
						} else l = !0;
						if (l) {
							if (void 0 !== e.emitOnErrors) {
								const t = i;
								if ("boolean" != typeof e.emitOnErrors)
									return (fe.errors = [{ params: { type: "boolean" } }]), !1;
								l = t === i;
							} else l = !0;
							if (l) {
								if (void 0 !== e.flagIncludedChunks) {
									const t = i;
									if ("boolean" != typeof e.flagIncludedChunks)
										return (fe.errors = [{ params: { type: "boolean" } }]), !1;
									l = t === i;
								} else l = !0;
								if (l) {
									if (void 0 !== e.innerGraph) {
										const t = i;
										if ("boolean" != typeof e.innerGraph)
											return (
												(fe.errors = [{ params: { type: "boolean" } }]), !1
											);
										l = t === i;
									} else l = !0;
									if (l) {
										if (void 0 !== e.mangleExports) {
											let t = e.mangleExports;
											const n = i,
												r = i;
											let s = !1;
											const o = i;
											if ("size" !== t && "deterministic" !== t) {
												const e = { params: {} };
												null === a ? (a = [e]) : a.push(e), i++;
											}
											var p = o === i;
											if (((s = s || p), !s)) {
												const e = i;
												if ("boolean" != typeof t) {
													const e = { params: { type: "boolean" } };
													null === a ? (a = [e]) : a.push(e), i++;
												}
												(p = e === i), (s = s || p);
											}
											if (!s) {
												const e = { params: {} };
												return (
													null === a ? (a = [e]) : a.push(e),
													i++,
													(fe.errors = a),
													!1
												);
											}
											(i = r),
												null !== a && (r ? (a.length = r) : (a = null)),
												(l = n === i);
										} else l = !0;
										if (l) {
											if (void 0 !== e.mangleWasmImports) {
												const t = i;
												if ("boolean" != typeof e.mangleWasmImports)
													return (
														(fe.errors = [{ params: { type: "boolean" } }]), !1
													);
												l = t === i;
											} else l = !0;
											if (l) {
												if (void 0 !== e.mergeDuplicateChunks) {
													const t = i;
													if ("boolean" != typeof e.mergeDuplicateChunks)
														return (
															(fe.errors = [{ params: { type: "boolean" } }]),
															!1
														);
													l = t === i;
												} else l = !0;
												if (l) {
													if (void 0 !== e.minimize) {
														const t = i;
														if ("boolean" != typeof e.minimize)
															return (
																(fe.errors = [{ params: { type: "boolean" } }]),
																!1
															);
														l = t === i;
													} else l = !0;
													if (l) {
														if (void 0 !== e.minimizer) {
															let t = e.minimizer;
															const n = i;
															if (i === n) {
																if (!Array.isArray(t))
																	return (
																		(fe.errors = [
																			{ params: { type: "array" } }
																		]),
																		!1
																	);
																{
																	const e = t.length;
																	for (let n = 0; n < e; n++) {
																		let e = t[n];
																		const r = i,
																			s = i;
																		let o = !1;
																		const l = i;
																		if ("..." !== e) {
																			const e = { params: {} };
																			null === a ? (a = [e]) : a.push(e), i++;
																		}
																		var u = l === i;
																		if (((o = o || u), !o)) {
																			const t = i;
																			if (i == i)
																				if (
																					e &&
																					"object" == typeof e &&
																					!Array.isArray(e)
																				) {
																					let t;
																					if (
																						void 0 === e.apply &&
																						(t = "apply")
																					) {
																						const e = {
																							params: { missingProperty: t }
																						};
																						null === a ? (a = [e]) : a.push(e),
																							i++;
																					} else if (
																						void 0 !== e.apply &&
																						!(e.apply instanceof Function)
																					) {
																						const e = { params: {} };
																						null === a ? (a = [e]) : a.push(e),
																							i++;
																					}
																				} else {
																					const e = {
																						params: { type: "object" }
																					};
																					null === a ? (a = [e]) : a.push(e),
																						i++;
																				}
																			if (((u = t === i), (o = o || u), !o)) {
																				const t = i;
																				if (!(e instanceof Function)) {
																					const e = { params: {} };
																					null === a ? (a = [e]) : a.push(e),
																						i++;
																				}
																				(u = t === i), (o = o || u);
																			}
																		}
																		if (!o) {
																			const e = { params: {} };
																			return (
																				null === a ? (a = [e]) : a.push(e),
																				i++,
																				(fe.errors = a),
																				!1
																			);
																		}
																		if (
																			((i = s),
																			null !== a &&
																				(s ? (a.length = s) : (a = null)),
																			r !== i)
																		)
																			break;
																	}
																}
															}
															l = n === i;
														} else l = !0;
														if (l) {
															if (void 0 !== e.moduleIds) {
																let t = e.moduleIds;
																const n = i;
																if (
																	"natural" !== t &&
																	"named" !== t &&
																	"hashed" !== t &&
																	"deterministic" !== t &&
																	"size" !== t &&
																	!1 !== t
																)
																	return (fe.errors = [{ params: {} }]), !1;
																l = n === i;
															} else l = !0;
															if (l) {
																if (void 0 !== e.noEmitOnErrors) {
																	const t = i;
																	if ("boolean" != typeof e.noEmitOnErrors)
																		return (
																			(fe.errors = [
																				{ params: { type: "boolean" } }
																			]),
																			!1
																		);
																	l = t === i;
																} else l = !0;
																if (l) {
																	if (void 0 !== e.nodeEnv) {
																		let t = e.nodeEnv;
																		const n = i,
																			r = i;
																		let s = !1;
																		const o = i;
																		if (!1 !== t) {
																			const e = { params: {} };
																			null === a ? (a = [e]) : a.push(e), i++;
																		}
																		var f = o === i;
																		if (((s = s || f), !s)) {
																			const e = i;
																			if ("string" != typeof t) {
																				const e = {
																					params: { type: "string" }
																				};
																				null === a ? (a = [e]) : a.push(e), i++;
																			}
																			(f = e === i), (s = s || f);
																		}
																		if (!s) {
																			const e = { params: {} };
																			return (
																				null === a ? (a = [e]) : a.push(e),
																				i++,
																				(fe.errors = a),
																				!1
																			);
																		}
																		(i = r),
																			null !== a &&
																				(r ? (a.length = r) : (a = null)),
																			(l = n === i);
																	} else l = !0;
																	if (l) {
																		if (void 0 !== e.portableRecords) {
																			const t = i;
																			if ("boolean" != typeof e.portableRecords)
																				return (
																					(fe.errors = [
																						{ params: { type: "boolean" } }
																					]),
																					!1
																				);
																			l = t === i;
																		} else l = !0;
																		if (l) {
																			if (void 0 !== e.providedExports) {
																				const t = i;
																				if (
																					"boolean" != typeof e.providedExports
																				)
																					return (
																						(fe.errors = [
																							{ params: { type: "boolean" } }
																						]),
																						!1
																					);
																				l = t === i;
																			} else l = !0;
																			if (l) {
																				if (void 0 !== e.realContentHash) {
																					const t = i;
																					if (
																						"boolean" !=
																						typeof e.realContentHash
																					)
																						return (
																							(fe.errors = [
																								{ params: { type: "boolean" } }
																							]),
																							!1
																						);
																					l = t === i;
																				} else l = !0;
																				if (l) {
																					if (
																						void 0 !== e.removeAvailableModules
																					) {
																						const t = i;
																						if (
																							"boolean" !=
																							typeof e.removeAvailableModules
																						)
																							return (
																								(fe.errors = [
																									{
																										params: { type: "boolean" }
																									}
																								]),
																								!1
																							);
																						l = t === i;
																					} else l = !0;
																					if (l) {
																						if (
																							void 0 !== e.removeEmptyChunks
																						) {
																							const t = i;
																							if (
																								"boolean" !=
																								typeof e.removeEmptyChunks
																							)
																								return (
																									(fe.errors = [
																										{
																											params: {
																												type: "boolean"
																											}
																										}
																									]),
																									!1
																								);
																							l = t === i;
																						} else l = !0;
																						if (l) {
																							if (void 0 !== e.runtimeChunk) {
																								let t = e.runtimeChunk;
																								const n = i,
																									r = i;
																								let s = !1;
																								const o = i;
																								if (
																									"single" !== t &&
																									"multiple" !== t
																								) {
																									const e = { params: {} };
																									null === a
																										? (a = [e])
																										: a.push(e),
																										i++;
																								}
																								var c = o === i;
																								if (((s = s || c), !s)) {
																									const e = i;
																									if ("boolean" != typeof t) {
																										const e = {
																											params: {
																												type: "boolean"
																											}
																										};
																										null === a
																											? (a = [e])
																											: a.push(e),
																											i++;
																									}
																									if (
																										((c = e === i),
																										(s = s || c),
																										!s)
																									) {
																										const e = i;
																										if (i === e)
																											if (
																												t &&
																												"object" == typeof t &&
																												!Array.isArray(t)
																											) {
																												const e = i;
																												for (const e in t)
																													if ("name" !== e) {
																														const t = {
																															params: {
																																additionalProperty:
																																	e
																															}
																														};
																														null === a
																															? (a = [t])
																															: a.push(t),
																															i++;
																														break;
																													}
																												if (
																													e === i &&
																													void 0 !== t.name
																												) {
																													let e = t.name;
																													const n = i;
																													let r = !1;
																													const s = i;
																													if (
																														"string" != typeof e
																													) {
																														const e = {
																															params: {
																																type: "string"
																															}
																														};
																														null === a
																															? (a = [e])
																															: a.push(e),
																															i++;
																													}
																													var m = s === i;
																													if (
																														((r = r || m), !r)
																													) {
																														const t = i;
																														if (
																															!(
																																e instanceof
																																Function
																															)
																														) {
																															const e = {
																																params: {}
																															};
																															null === a
																																? (a = [e])
																																: a.push(e),
																																i++;
																														}
																														(m = t === i),
																															(r = r || m);
																													}
																													if (r)
																														(i = n),
																															null !== a &&
																																(n
																																	? (a.length =
																																			n)
																																	: (a = null));
																													else {
																														const e = {
																															params: {}
																														};
																														null === a
																															? (a = [e])
																															: a.push(e),
																															i++;
																													}
																												}
																											} else {
																												const e = {
																													params: {
																														type: "object"
																													}
																												};
																												null === a
																													? (a = [e])
																													: a.push(e),
																													i++;
																											}
																										(c = e === i), (s = s || c);
																									}
																								}
																								if (!s) {
																									const e = { params: {} };
																									return (
																										null === a
																											? (a = [e])
																											: a.push(e),
																										i++,
																										(fe.errors = a),
																										!1
																									);
																								}
																								(i = r),
																									null !== a &&
																										(r
																											? (a.length = r)
																											: (a = null)),
																									(l = n === i);
																							} else l = !0;
																							if (l) {
																								if (void 0 !== e.sideEffects) {
																									let t = e.sideEffects;
																									const n = i,
																										r = i;
																									let s = !1;
																									const o = i;
																									if ("flag" !== t) {
																										const e = { params: {} };
																										null === a
																											? (a = [e])
																											: a.push(e),
																											i++;
																									}
																									var y = o === i;
																									if (((s = s || y), !s)) {
																										const e = i;
																										if ("boolean" != typeof t) {
																											const e = {
																												params: {
																													type: "boolean"
																												}
																											};
																											null === a
																												? (a = [e])
																												: a.push(e),
																												i++;
																										}
																										(y = e === i), (s = s || y);
																									}
																									if (!s) {
																										const e = { params: {} };
																										return (
																											null === a
																												? (a = [e])
																												: a.push(e),
																											i++,
																											(fe.errors = a),
																											!1
																										);
																									}
																									(i = r),
																										null !== a &&
																											(r
																												? (a.length = r)
																												: (a = null)),
																										(l = n === i);
																								} else l = !0;
																								if (l) {
																									if (
																										void 0 !== e.splitChunks
																									) {
																										let n = e.splitChunks;
																										const r = i,
																											s = i;
																										let p = !1;
																										const u = i;
																										if (!1 !== n) {
																											const e = { params: {} };
																											null === a
																												? (a = [e])
																												: a.push(e),
																												i++;
																										}
																										var h = u === i;
																										if (((p = p || h), !p)) {
																											const r = i;
																											ue(n, {
																												instancePath:
																													t + "/splitChunks",
																												parentData: e,
																												parentDataProperty:
																													"splitChunks",
																												rootData: o
																											}) ||
																												((a =
																													null === a
																														? ue.errors
																														: a.concat(
																																ue.errors
																														  )),
																												(i = a.length)),
																												(h = r === i),
																												(p = p || h);
																										}
																										if (!p) {
																											const e = { params: {} };
																											return (
																												null === a
																													? (a = [e])
																													: a.push(e),
																												i++,
																												(fe.errors = a),
																												!1
																											);
																										}
																										(i = s),
																											null !== a &&
																												(s
																													? (a.length = s)
																													: (a = null)),
																											(l = r === i);
																									} else l = !0;
																									if (l)
																										if (
																											void 0 !== e.usedExports
																										) {
																											let t = e.usedExports;
																											const n = i,
																												r = i;
																											let s = !1;
																											const o = i;
																											if ("global" !== t) {
																												const e = {
																													params: {}
																												};
																												null === a
																													? (a = [e])
																													: a.push(e),
																													i++;
																											}
																											var d = o === i;
																											if (((s = s || d), !s)) {
																												const e = i;
																												if (
																													"boolean" != typeof t
																												) {
																													const e = {
																														params: {
																															type: "boolean"
																														}
																													};
																													null === a
																														? (a = [e])
																														: a.push(e),
																														i++;
																												}
																												(d = e === i),
																													(s = s || d);
																											}
																											if (!s) {
																												const e = {
																													params: {}
																												};
																												return (
																													null === a
																														? (a = [e])
																														: a.push(e),
																													i++,
																													(fe.errors = a),
																													!1
																												);
																											}
																											(i = r),
																												null !== a &&
																													(r
																														? (a.length = r)
																														: (a = null)),
																												(l = n === i);
																										} else l = !0;
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (fe.errors = a), 0 === i;
}
const ce = {
		assetModuleFilename: { $ref: "#/definitions/AssetModuleFilename" },
		asyncChunks: { type: "boolean" },
		auxiliaryComment: { oneOf: [{ $ref: "#/definitions/AuxiliaryComment" }] },
		charset: { $ref: "#/definitions/Charset" },
		chunkFilename: { $ref: "#/definitions/ChunkFilename" },
		chunkFormat: { $ref: "#/definitions/ChunkFormat" },
		chunkLoadTimeout: { $ref: "#/definitions/ChunkLoadTimeout" },
		chunkLoading: { $ref: "#/definitions/ChunkLoading" },
		chunkLoadingGlobal: { $ref: "#/definitions/ChunkLoadingGlobal" },
		clean: { $ref: "#/definitions/Clean" },
		compareBeforeEmit: { $ref: "#/definitions/CompareBeforeEmit" },
		crossOriginLoading: { $ref: "#/definitions/CrossOriginLoading" },
		cssChunkFilename: { $ref: "#/definitions/CssChunkFilename" },
		cssFilename: { $ref: "#/definitions/CssFilename" },
		devtoolFallbackModuleFilenameTemplate: {
			$ref: "#/definitions/DevtoolFallbackModuleFilenameTemplate"
		},
		devtoolModuleFilenameTemplate: {
			$ref: "#/definitions/DevtoolModuleFilenameTemplate"
		},
		devtoolNamespace: { $ref: "#/definitions/DevtoolNamespace" },
		enabledChunkLoadingTypes: {
			$ref: "#/definitions/EnabledChunkLoadingTypes"
		},
		enabledLibraryTypes: { $ref: "#/definitions/EnabledLibraryTypes" },
		enabledWasmLoadingTypes: { $ref: "#/definitions/EnabledWasmLoadingTypes" },
		environment: { $ref: "#/definitions/Environment" },
		filename: { $ref: "#/definitions/Filename" },
		globalObject: { $ref: "#/definitions/GlobalObject" },
		hashDigest: { $ref: "#/definitions/HashDigest" },
		hashDigestLength: { $ref: "#/definitions/HashDigestLength" },
		hashFunction: { $ref: "#/definitions/HashFunction" },
		hashSalt: { $ref: "#/definitions/HashSalt" },
		hotUpdateChunkFilename: { $ref: "#/definitions/HotUpdateChunkFilename" },
		hotUpdateGlobal: { $ref: "#/definitions/HotUpdateGlobal" },
		hotUpdateMainFilename: { $ref: "#/definitions/HotUpdateMainFilename" },
		iife: { $ref: "#/definitions/Iife" },
		importFunctionName: { $ref: "#/definitions/ImportFunctionName" },
		importMetaName: { $ref: "#/definitions/ImportMetaName" },
		library: { $ref: "#/definitions/Library" },
		libraryExport: { oneOf: [{ $ref: "#/definitions/LibraryExport" }] },
		libraryTarget: { oneOf: [{ $ref: "#/definitions/LibraryType" }] },
		module: { $ref: "#/definitions/OutputModule" },
		path: { $ref: "#/definitions/Path" },
		pathinfo: { $ref: "#/definitions/Pathinfo" },
		publicPath: { $ref: "#/definitions/PublicPath" },
		scriptType: { $ref: "#/definitions/ScriptType" },
		sourceMapFilename: { $ref: "#/definitions/SourceMapFilename" },
		sourcePrefix: { $ref: "#/definitions/SourcePrefix" },
		strictModuleErrorHandling: {
			$ref: "#/definitions/StrictModuleErrorHandling"
		},
		strictModuleExceptionHandling: {
			$ref: "#/definitions/StrictModuleExceptionHandling"
		},
		trustedTypes: {
			anyOf: [
				{ enum: [!0] },
				{ type: "string", minLength: 1 },
				{ $ref: "#/definitions/TrustedTypes" }
			]
		},
		umdNamedDefine: { oneOf: [{ $ref: "#/definitions/UmdNamedDefine" }] },
		uniqueName: { $ref: "#/definitions/UniqueName" },
		wasmLoading: { $ref: "#/definitions/WasmLoading" },
		webassemblyModuleFilename: {
			$ref: "#/definitions/WebassemblyModuleFilename"
		},
		workerChunkLoading: { $ref: "#/definitions/ChunkLoading" },
		workerWasmLoading: { $ref: "#/definitions/WasmLoading" }
	},
	me = {
		arrowFunction: { type: "boolean" },
		bigIntLiteral: { type: "boolean" },
		const: { type: "boolean" },
		destructuring: { type: "boolean" },
		dynamicImport: { type: "boolean" },
		forOf: { type: "boolean" },
		module: { type: "boolean" },
		optionalChaining: { type: "boolean" },
		templateLiteral: { type: "boolean" }
	};
function ye(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	const l = i;
	let p = !1,
		u = null;
	const f = i,
		c = i;
	let m = !1;
	const y = i;
	if (i === y)
		if ("string" == typeof t) {
			if (t.includes("!") || !1 !== e.test(t)) {
				const e = { params: {} };
				null === a ? (a = [e]) : a.push(e), i++;
			} else if (t.length < 1) {
				const e = { params: {} };
				null === a ? (a = [e]) : a.push(e), i++;
			}
		} else {
			const e = { params: { type: "string" } };
			null === a ? (a = [e]) : a.push(e), i++;
		}
	var h = y === i;
	if (((m = m || h), !m)) {
		const e = i;
		if (!(t instanceof Function)) {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		(h = e === i), (m = m || h);
	}
	if (m) (i = c), null !== a && (c ? (a.length = c) : (a = null));
	else {
		const e = { params: {} };
		null === a ? (a = [e]) : a.push(e), i++;
	}
	if ((f === i && ((p = !0), (u = 0)), !p)) {
		const e = { params: { passingSchemas: u } };
		return null === a ? (a = [e]) : a.push(e), i++, (ye.errors = a), !1;
	}
	return (
		(i = l),
		null !== a && (l ? (a.length = l) : (a = null)),
		(ye.errors = a),
		0 === i
	);
}
function he(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	const l = i;
	let p = !1;
	const u = i;
	if ("boolean" != typeof t) {
		const e = { params: { type: "boolean" } };
		null === a ? (a = [e]) : a.push(e), i++;
	}
	var f = u === i;
	if (((p = p || f), !p)) {
		const n = i;
		if (i == i)
			if (t && "object" == typeof t && !Array.isArray(t)) {
				const n = i;
				for (const e in t)
					if ("dry" !== e && "keep" !== e) {
						const t = { params: { additionalProperty: e } };
						null === a ? (a = [t]) : a.push(t), i++;
						break;
					}
				if (n === i) {
					if (void 0 !== t.dry) {
						const e = i;
						if ("boolean" != typeof t.dry) {
							const e = { params: { type: "boolean" } };
							null === a ? (a = [e]) : a.push(e), i++;
						}
						var c = e === i;
					} else c = !0;
					if (c)
						if (void 0 !== t.keep) {
							let n = t.keep;
							const r = i,
								s = i;
							let o = !1;
							const l = i;
							if (!(n instanceof RegExp)) {
								const e = { params: {} };
								null === a ? (a = [e]) : a.push(e), i++;
							}
							var m = l === i;
							if (((o = o || m), !o)) {
								const t = i;
								if (i === t)
									if ("string" == typeof n) {
										if (n.includes("!") || !1 !== e.test(n)) {
											const e = { params: {} };
											null === a ? (a = [e]) : a.push(e), i++;
										}
									} else {
										const e = { params: { type: "string" } };
										null === a ? (a = [e]) : a.push(e), i++;
									}
								if (((m = t === i), (o = o || m), !o)) {
									const e = i;
									if (!(n instanceof Function)) {
										const e = { params: {} };
										null === a ? (a = [e]) : a.push(e), i++;
									}
									(m = e === i), (o = o || m);
								}
							}
							if (o) (i = s), null !== a && (s ? (a.length = s) : (a = null));
							else {
								const e = { params: {} };
								null === a ? (a = [e]) : a.push(e), i++;
							}
							c = r === i;
						} else c = !0;
				}
			} else {
				const e = { params: { type: "object" } };
				null === a ? (a = [e]) : a.push(e), i++;
			}
		(f = n === i), (p = p || f);
	}
	if (!p) {
		const e = { params: {} };
		return null === a ? (a = [e]) : a.push(e), i++, (he.errors = a), !1;
	}
	return (
		(i = l),
		null !== a && (l ? (a.length = l) : (a = null)),
		(he.errors = a),
		0 === i
	);
}
function de(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	const l = i;
	let p = !1,
		u = null;
	const f = i,
		c = i;
	let m = !1;
	const y = i;
	if (i === y)
		if ("string" == typeof t) {
			if (t.includes("!") || !1 !== e.test(t)) {
				const e = { params: {} };
				null === a ? (a = [e]) : a.push(e), i++;
			} else if (t.length < 1) {
				const e = { params: {} };
				null === a ? (a = [e]) : a.push(e), i++;
			}
		} else {
			const e = { params: { type: "string" } };
			null === a ? (a = [e]) : a.push(e), i++;
		}
	var h = y === i;
	if (((m = m || h), !m)) {
		const e = i;
		if (!(t instanceof Function)) {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		(h = e === i), (m = m || h);
	}
	if (m) (i = c), null !== a && (c ? (a.length = c) : (a = null));
	else {
		const e = { params: {} };
		null === a ? (a = [e]) : a.push(e), i++;
	}
	if ((f === i && ((p = !0), (u = 0)), !p)) {
		const e = { params: { passingSchemas: u } };
		return null === a ? (a = [e]) : a.push(e), i++, (de.errors = a), !1;
	}
	return (
		(i = l),
		null !== a && (l ? (a.length = l) : (a = null)),
		(de.errors = a),
		0 === i
	);
}
function ge(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	const l = i;
	let p = !1,
		u = null;
	const f = i,
		c = i;
	let m = !1;
	const y = i;
	if (i === y)
		if ("string" == typeof t) {
			if (t.includes("!") || !1 !== e.test(t)) {
				const e = { params: {} };
				null === a ? (a = [e]) : a.push(e), i++;
			} else if (t.length < 1) {
				const e = { params: {} };
				null === a ? (a = [e]) : a.push(e), i++;
			}
		} else {
			const e = { params: { type: "string" } };
			null === a ? (a = [e]) : a.push(e), i++;
		}
	var h = y === i;
	if (((m = m || h), !m)) {
		const e = i;
		if (!(t instanceof Function)) {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		(h = e === i), (m = m || h);
	}
	if (m) (i = c), null !== a && (c ? (a.length = c) : (a = null));
	else {
		const e = { params: {} };
		null === a ? (a = [e]) : a.push(e), i++;
	}
	if ((f === i && ((p = !0), (u = 0)), !p)) {
		const e = { params: { passingSchemas: u } };
		return null === a ? (a = [e]) : a.push(e), i++, (ge.errors = a), !1;
	}
	return (
		(i = l),
		null !== a && (l ? (a.length = l) : (a = null)),
		(ge.errors = a),
		0 === i
	);
}
function be(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!Array.isArray(e))
			return (be.errors = [{ params: { type: "array" } }]), !1;
		{
			const t = e.length;
			for (let n = 0; n < t; n++) {
				let t = e[n];
				const r = a,
					s = a;
				let l = !1;
				const p = a;
				if (
					"jsonp" !== t &&
					"import-scripts" !== t &&
					"require" !== t &&
					"async-node" !== t &&
					"import" !== t
				) {
					const e = { params: {} };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				var i = p === a;
				if (((l = l || i), !l)) {
					const e = a;
					if ("string" != typeof t) {
						const e = { params: { type: "string" } };
						null === o ? (o = [e]) : o.push(e), a++;
					}
					(i = e === a), (l = l || i);
				}
				if (!l) {
					const e = { params: {} };
					return null === o ? (o = [e]) : o.push(e), a++, (be.errors = o), !1;
				}
				if (((a = s), null !== o && (s ? (o.length = s) : (o = null)), r !== a))
					break;
			}
		}
	}
	return (be.errors = o), 0 === a;
}
function ve(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!Array.isArray(e))
			return (ve.errors = [{ params: { type: "array" } }]), !1;
		{
			const t = e.length;
			for (let n = 0; n < t; n++) {
				let t = e[n];
				const r = a,
					s = a;
				let l = !1;
				const p = a;
				if (
					"var" !== t &&
					"module" !== t &&
					"assign" !== t &&
					"assign-properties" !== t &&
					"this" !== t &&
					"window" !== t &&
					"self" !== t &&
					"global" !== t &&
					"commonjs" !== t &&
					"commonjs2" !== t &&
					"commonjs-module" !== t &&
					"commonjs-static" !== t &&
					"amd" !== t &&
					"amd-require" !== t &&
					"umd" !== t &&
					"umd2" !== t &&
					"jsonp" !== t &&
					"system" !== t
				) {
					const e = { params: {} };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				var i = p === a;
				if (((l = l || i), !l)) {
					const e = a;
					if ("string" != typeof t) {
						const e = { params: { type: "string" } };
						null === o ? (o = [e]) : o.push(e), a++;
					}
					(i = e === a), (l = l || i);
				}
				if (!l) {
					const e = { params: {} };
					return null === o ? (o = [e]) : o.push(e), a++, (ve.errors = o), !1;
				}
				if (((a = s), null !== o && (s ? (o.length = s) : (o = null)), r !== a))
					break;
			}
		}
	}
	return (ve.errors = o), 0 === a;
}
function De(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!Array.isArray(e))
			return (De.errors = [{ params: { type: "array" } }]), !1;
		{
			const t = e.length;
			for (let n = 0; n < t; n++) {
				let t = e[n];
				const r = a,
					s = a;
				let l = !1;
				const p = a;
				if ("fetch-streaming" !== t && "fetch" !== t && "async-node" !== t) {
					const e = { params: {} };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				var i = p === a;
				if (((l = l || i), !l)) {
					const e = a;
					if ("string" != typeof t) {
						const e = { params: { type: "string" } };
						null === o ? (o = [e]) : o.push(e), a++;
					}
					(i = e === a), (l = l || i);
				}
				if (!l) {
					const e = { params: {} };
					return null === o ? (o = [e]) : o.push(e), a++, (De.errors = o), !1;
				}
				if (((a = s), null !== o && (s ? (o.length = s) : (o = null)), r !== a))
					break;
			}
		}
	}
	return (De.errors = o), 0 === a;
}
function Pe(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	const l = i;
	let p = !1,
		u = null;
	const f = i,
		c = i;
	let m = !1;
	const y = i;
	if (i === y)
		if ("string" == typeof t) {
			if (t.includes("!") || !1 !== e.test(t)) {
				const e = { params: {} };
				null === a ? (a = [e]) : a.push(e), i++;
			} else if (t.length < 1) {
				const e = { params: {} };
				null === a ? (a = [e]) : a.push(e), i++;
			}
		} else {
			const e = { params: { type: "string" } };
			null === a ? (a = [e]) : a.push(e), i++;
		}
	var h = y === i;
	if (((m = m || h), !m)) {
		const e = i;
		if (!(t instanceof Function)) {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		(h = e === i), (m = m || h);
	}
	if (m) (i = c), null !== a && (c ? (a.length = c) : (a = null));
	else {
		const e = { params: {} };
		null === a ? (a = [e]) : a.push(e), i++;
	}
	if ((f === i && ((p = !0), (u = 0)), !p)) {
		const e = { params: { passingSchemas: u } };
		return null === a ? (a = [e]) : a.push(e), i++, (Pe.errors = a), !1;
	}
	return (
		(i = l),
		null !== a && (l ? (a.length = l) : (a = null)),
		(Pe.errors = a),
		0 === i
	);
}
function Ae(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	u(e, {
		instancePath: t,
		parentData: n,
		parentDataProperty: r,
		rootData: s
	}) || ((o = null === o ? u.errors : o.concat(u.errors)), (a = o.length));
	var c = p === a;
	if (((l = l || c), !l)) {
		const i = a;
		f(e, {
			instancePath: t,
			parentData: n,
			parentDataProperty: r,
			rootData: s
		}) || ((o = null === o ? f.errors : o.concat(f.errors)), (a = o.length)),
			(c = i === a),
			(l = l || c);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (Ae.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(Ae.errors = o),
		0 === a
	);
}
function xe(
	t,
	{
		instancePath: r = "",
		parentData: s,
		parentDataProperty: o,
		rootData: a = t
	} = {}
) {
	let l = null,
		u = 0;
	if (0 === u) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (xe.errors = [{ params: { type: "object" } }]), !1;
		{
			const s = u;
			for (const e in t)
				if (!n.call(ce, e))
					return (xe.errors = [{ params: { additionalProperty: e } }]), !1;
			if (s === u) {
				if (void 0 !== t.assetModuleFilename) {
					let n = t.assetModuleFilename;
					const r = u,
						s = u;
					let o = !1;
					const a = u;
					if (u === a)
						if ("string" == typeof n) {
							if (n.includes("!") || !1 !== e.test(n)) {
								const e = { params: {} };
								null === l ? (l = [e]) : l.push(e), u++;
							}
						} else {
							const e = { params: { type: "string" } };
							null === l ? (l = [e]) : l.push(e), u++;
						}
					var f = a === u;
					if (((o = o || f), !o)) {
						const e = u;
						if (!(n instanceof Function)) {
							const e = { params: {} };
							null === l ? (l = [e]) : l.push(e), u++;
						}
						(f = e === u), (o = o || f);
					}
					if (!o) {
						const e = { params: {} };
						return null === l ? (l = [e]) : l.push(e), u++, (xe.errors = l), !1;
					}
					(u = s), null !== l && (s ? (l.length = s) : (l = null));
					var y = r === u;
				} else y = !0;
				if (y) {
					if (void 0 !== t.asyncChunks) {
						const e = u;
						if ("boolean" != typeof t.asyncChunks)
							return (xe.errors = [{ params: { type: "boolean" } }]), !1;
						y = e === u;
					} else y = !0;
					if (y) {
						if (void 0 !== t.auxiliaryComment) {
							const e = u,
								n = u;
							let s = !1,
								o = null;
							const i = u;
							if (
								(p(t.auxiliaryComment, {
									instancePath: r + "/auxiliaryComment",
									parentData: t,
									parentDataProperty: "auxiliaryComment",
									rootData: a
								}) ||
									((l = null === l ? p.errors : l.concat(p.errors)),
									(u = l.length)),
								i === u && ((s = !0), (o = 0)),
								!s)
							) {
								const e = { params: { passingSchemas: o } };
								return (
									null === l ? (l = [e]) : l.push(e), u++, (xe.errors = l), !1
								);
							}
							(u = n),
								null !== l && (n ? (l.length = n) : (l = null)),
								(y = e === u);
						} else y = !0;
						if (y) {
							if (void 0 !== t.charset) {
								const e = u;
								if ("boolean" != typeof t.charset)
									return (xe.errors = [{ params: { type: "boolean" } }]), !1;
								y = e === u;
							} else y = !0;
							if (y) {
								if (void 0 !== t.chunkFilename) {
									const e = u;
									ye(t.chunkFilename, {
										instancePath: r + "/chunkFilename",
										parentData: t,
										parentDataProperty: "chunkFilename",
										rootData: a
									}) ||
										((l = null === l ? ye.errors : l.concat(ye.errors)),
										(u = l.length)),
										(y = e === u);
								} else y = !0;
								if (y) {
									if (void 0 !== t.chunkFormat) {
										let e = t.chunkFormat;
										const n = u,
											r = u;
										let s = !1;
										const o = u;
										if (
											"array-push" !== e &&
											"commonjs" !== e &&
											"module" !== e &&
											!1 !== e
										) {
											const e = { params: {} };
											null === l ? (l = [e]) : l.push(e), u++;
										}
										var h = o === u;
										if (((s = s || h), !s)) {
											const t = u;
											if ("string" != typeof e) {
												const e = { params: { type: "string" } };
												null === l ? (l = [e]) : l.push(e), u++;
											}
											(h = t === u), (s = s || h);
										}
										if (!s) {
											const e = { params: {} };
											return (
												null === l ? (l = [e]) : l.push(e),
												u++,
												(xe.errors = l),
												!1
											);
										}
										(u = r),
											null !== l && (r ? (l.length = r) : (l = null)),
											(y = n === u);
									} else y = !0;
									if (y) {
										if (void 0 !== t.chunkLoadTimeout) {
											const e = u;
											if ("number" != typeof t.chunkLoadTimeout)
												return (
													(xe.errors = [{ params: { type: "number" } }]), !1
												);
											y = e === u;
										} else y = !0;
										if (y) {
											if (void 0 !== t.chunkLoading) {
												const e = u;
												i(t.chunkLoading, {
													instancePath: r + "/chunkLoading",
													parentData: t,
													parentDataProperty: "chunkLoading",
													rootData: a
												}) ||
													((l = null === l ? i.errors : l.concat(i.errors)),
													(u = l.length)),
													(y = e === u);
											} else y = !0;
											if (y) {
												if (void 0 !== t.chunkLoadingGlobal) {
													const e = u;
													if ("string" != typeof t.chunkLoadingGlobal)
														return (
															(xe.errors = [{ params: { type: "string" } }]), !1
														);
													y = e === u;
												} else y = !0;
												if (y) {
													if (void 0 !== t.clean) {
														const e = u;
														he(t.clean, {
															instancePath: r + "/clean",
															parentData: t,
															parentDataProperty: "clean",
															rootData: a
														}) ||
															((l =
																null === l ? he.errors : l.concat(he.errors)),
															(u = l.length)),
															(y = e === u);
													} else y = !0;
													if (y) {
														if (void 0 !== t.compareBeforeEmit) {
															const e = u;
															if ("boolean" != typeof t.compareBeforeEmit)
																return (
																	(xe.errors = [
																		{ params: { type: "boolean" } }
																	]),
																	!1
																);
															y = e === u;
														} else y = !0;
														if (y) {
															if (void 0 !== t.crossOriginLoading) {
																let e = t.crossOriginLoading;
																const n = u;
																if (
																	!1 !== e &&
																	"anonymous" !== e &&
																	"use-credentials" !== e
																)
																	return (xe.errors = [{ params: {} }]), !1;
																y = n === u;
															} else y = !0;
															if (y) {
																if (void 0 !== t.cssChunkFilename) {
																	const e = u;
																	de(t.cssChunkFilename, {
																		instancePath: r + "/cssChunkFilename",
																		parentData: t,
																		parentDataProperty: "cssChunkFilename",
																		rootData: a
																	}) ||
																		((l =
																			null === l
																				? de.errors
																				: l.concat(de.errors)),
																		(u = l.length)),
																		(y = e === u);
																} else y = !0;
																if (y) {
																	if (void 0 !== t.cssFilename) {
																		const e = u;
																		ge(t.cssFilename, {
																			instancePath: r + "/cssFilename",
																			parentData: t,
																			parentDataProperty: "cssFilename",
																			rootData: a
																		}) ||
																			((l =
																				null === l
																					? ge.errors
																					: l.concat(ge.errors)),
																			(u = l.length)),
																			(y = e === u);
																	} else y = !0;
																	if (y) {
																		if (
																			void 0 !==
																			t.devtoolFallbackModuleFilenameTemplate
																		) {
																			let e =
																				t.devtoolFallbackModuleFilenameTemplate;
																			const n = u,
																				r = u;
																			let s = !1;
																			const o = u;
																			if ("string" != typeof e) {
																				const e = {
																					params: { type: "string" }
																				};
																				null === l ? (l = [e]) : l.push(e), u++;
																			}
																			var d = o === u;
																			if (((s = s || d), !s)) {
																				const t = u;
																				if (!(e instanceof Function)) {
																					const e = { params: {} };
																					null === l ? (l = [e]) : l.push(e),
																						u++;
																				}
																				(d = t === u), (s = s || d);
																			}
																			if (!s) {
																				const e = { params: {} };
																				return (
																					null === l ? (l = [e]) : l.push(e),
																					u++,
																					(xe.errors = l),
																					!1
																				);
																			}
																			(u = r),
																				null !== l &&
																					(r ? (l.length = r) : (l = null)),
																				(y = n === u);
																		} else y = !0;
																		if (y) {
																			if (
																				void 0 !==
																				t.devtoolModuleFilenameTemplate
																			) {
																				let e = t.devtoolModuleFilenameTemplate;
																				const n = u,
																					r = u;
																				let s = !1;
																				const o = u;
																				if ("string" != typeof e) {
																					const e = {
																						params: { type: "string" }
																					};
																					null === l ? (l = [e]) : l.push(e),
																						u++;
																				}
																				var g = o === u;
																				if (((s = s || g), !s)) {
																					const t = u;
																					if (!(e instanceof Function)) {
																						const e = { params: {} };
																						null === l ? (l = [e]) : l.push(e),
																							u++;
																					}
																					(g = t === u), (s = s || g);
																				}
																				if (!s) {
																					const e = { params: {} };
																					return (
																						null === l ? (l = [e]) : l.push(e),
																						u++,
																						(xe.errors = l),
																						!1
																					);
																				}
																				(u = r),
																					null !== l &&
																						(r ? (l.length = r) : (l = null)),
																					(y = n === u);
																			} else y = !0;
																			if (y) {
																				if (void 0 !== t.devtoolNamespace) {
																					const e = u;
																					if (
																						"string" !=
																						typeof t.devtoolNamespace
																					)
																						return (
																							(xe.errors = [
																								{ params: { type: "string" } }
																							]),
																							!1
																						);
																					y = e === u;
																				} else y = !0;
																				if (y) {
																					if (
																						void 0 !==
																						t.enabledChunkLoadingTypes
																					) {
																						const e = u;
																						be(t.enabledChunkLoadingTypes, {
																							instancePath:
																								r + "/enabledChunkLoadingTypes",
																							parentData: t,
																							parentDataProperty:
																								"enabledChunkLoadingTypes",
																							rootData: a
																						}) ||
																							((l =
																								null === l
																									? be.errors
																									: l.concat(be.errors)),
																							(u = l.length)),
																							(y = e === u);
																					} else y = !0;
																					if (y) {
																						if (
																							void 0 !== t.enabledLibraryTypes
																						) {
																							const e = u;
																							ve(t.enabledLibraryTypes, {
																								instancePath:
																									r + "/enabledLibraryTypes",
																								parentData: t,
																								parentDataProperty:
																									"enabledLibraryTypes",
																								rootData: a
																							}) ||
																								((l =
																									null === l
																										? ve.errors
																										: l.concat(ve.errors)),
																								(u = l.length)),
																								(y = e === u);
																						} else y = !0;
																						if (y) {
																							if (
																								void 0 !==
																								t.enabledWasmLoadingTypes
																							) {
																								const e = u;
																								De(t.enabledWasmLoadingTypes, {
																									instancePath:
																										r +
																										"/enabledWasmLoadingTypes",
																									parentData: t,
																									parentDataProperty:
																										"enabledWasmLoadingTypes",
																									rootData: a
																								}) ||
																									((l =
																										null === l
																											? De.errors
																											: l.concat(De.errors)),
																									(u = l.length)),
																									(y = e === u);
																							} else y = !0;
																							if (y) {
																								if (void 0 !== t.environment) {
																									let e = t.environment;
																									const r = u;
																									if (u == u) {
																										if (
																											!e ||
																											"object" != typeof e ||
																											Array.isArray(e)
																										)
																											return (
																												(xe.errors = [
																													{
																														params: {
																															type: "object"
																														}
																													}
																												]),
																												!1
																											);
																										{
																											const t = u;
																											for (const t in e)
																												if (!n.call(me, t))
																													return (
																														(xe.errors = [
																															{
																																params: {
																																	additionalProperty:
																																		t
																																}
																															}
																														]),
																														!1
																													);
																											if (t === u) {
																												if (
																													void 0 !==
																													e.arrowFunction
																												) {
																													const t = u;
																													if (
																														"boolean" !=
																														typeof e.arrowFunction
																													)
																														return (
																															(xe.errors = [
																																{
																																	params: {
																																		type: "boolean"
																																	}
																																}
																															]),
																															!1
																														);
																													var b = t === u;
																												} else b = !0;
																												if (b) {
																													if (
																														void 0 !==
																														e.bigIntLiteral
																													) {
																														const t = u;
																														if (
																															"boolean" !=
																															typeof e.bigIntLiteral
																														)
																															return (
																																(xe.errors = [
																																	{
																																		params: {
																																			type: "boolean"
																																		}
																																	}
																																]),
																																!1
																															);
																														b = t === u;
																													} else b = !0;
																													if (b) {
																														if (
																															void 0 !== e.const
																														) {
																															const t = u;
																															if (
																																"boolean" !=
																																typeof e.const
																															)
																																return (
																																	(xe.errors = [
																																		{
																																			params: {
																																				type: "boolean"
																																			}
																																		}
																																	]),
																																	!1
																																);
																															b = t === u;
																														} else b = !0;
																														if (b) {
																															if (
																																void 0 !==
																																e.destructuring
																															) {
																																const t = u;
																																if (
																																	"boolean" !=
																																	typeof e.destructuring
																																)
																																	return (
																																		(xe.errors =
																																			[
																																				{
																																					params:
																																						{
																																							type: "boolean"
																																						}
																																				}
																																			]),
																																		!1
																																	);
																																b = t === u;
																															} else b = !0;
																															if (b) {
																																if (
																																	void 0 !==
																																	e.dynamicImport
																																) {
																																	const t = u;
																																	if (
																																		"boolean" !=
																																		typeof e.dynamicImport
																																	)
																																		return (
																																			(xe.errors =
																																				[
																																					{
																																						params:
																																							{
																																								type: "boolean"
																																							}
																																					}
																																				]),
																																			!1
																																		);
																																	b = t === u;
																																} else b = !0;
																																if (b) {
																																	if (
																																		void 0 !==
																																		e.forOf
																																	) {
																																		const t = u;
																																		if (
																																			"boolean" !=
																																			typeof e.forOf
																																		)
																																			return (
																																				(xe.errors =
																																					[
																																						{
																																							params:
																																								{
																																									type: "boolean"
																																								}
																																						}
																																					]),
																																				!1
																																			);
																																		b = t === u;
																																	} else b = !0;
																																	if (b) {
																																		if (
																																			void 0 !==
																																			e.module
																																		) {
																																			const t =
																																				u;
																																			if (
																																				"boolean" !=
																																				typeof e.module
																																			)
																																				return (
																																					(xe.errors =
																																						[
																																							{
																																								params:
																																									{
																																										type: "boolean"
																																									}
																																							}
																																						]),
																																					!1
																																				);
																																			b =
																																				t === u;
																																		} else
																																			b = !0;
																																		if (b) {
																																			if (
																																				void 0 !==
																																				e.optionalChaining
																																			) {
																																				const t =
																																					u;
																																				if (
																																					"boolean" !=
																																					typeof e.optionalChaining
																																				)
																																					return (
																																						(xe.errors =
																																							[
																																								{
																																									params:
																																										{
																																											type: "boolean"
																																										}
																																								}
																																							]),
																																						!1
																																					);
																																				b =
																																					t ===
																																					u;
																																			} else
																																				b = !0;
																																			if (b)
																																				if (
																																					void 0 !==
																																					e.templateLiteral
																																				) {
																																					const t =
																																						u;
																																					if (
																																						"boolean" !=
																																						typeof e.templateLiteral
																																					)
																																						return (
																																							(xe.errors =
																																								[
																																									{
																																										params:
																																											{
																																												type: "boolean"
																																											}
																																									}
																																								]),
																																							!1
																																						);
																																					b =
																																						t ===
																																						u;
																																				} else
																																					b =
																																						!0;
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																									y = r === u;
																								} else y = !0;
																								if (y) {
																									if (void 0 !== t.filename) {
																										const e = u;
																										Pe(t.filename, {
																											instancePath:
																												r + "/filename",
																											parentData: t,
																											parentDataProperty:
																												"filename",
																											rootData: a
																										}) ||
																											((l =
																												null === l
																													? Pe.errors
																													: l.concat(
																															Pe.errors
																													  )),
																											(u = l.length)),
																											(y = e === u);
																									} else y = !0;
																									if (y) {
																										if (
																											void 0 !== t.globalObject
																										) {
																											let e = t.globalObject;
																											const n = u;
																											if (u == u) {
																												if (
																													"string" != typeof e
																												)
																													return (
																														(xe.errors = [
																															{
																																params: {
																																	type: "string"
																																}
																															}
																														]),
																														!1
																													);
																												if (e.length < 1)
																													return (
																														(xe.errors = [
																															{ params: {} }
																														]),
																														!1
																													);
																											}
																											y = n === u;
																										} else y = !0;
																										if (y) {
																											if (
																												void 0 !== t.hashDigest
																											) {
																												const e = u;
																												if (
																													"string" !=
																													typeof t.hashDigest
																												)
																													return (
																														(xe.errors = [
																															{
																																params: {
																																	type: "string"
																																}
																															}
																														]),
																														!1
																													);
																												y = e === u;
																											} else y = !0;
																											if (y) {
																												if (
																													void 0 !==
																													t.hashDigestLength
																												) {
																													let e =
																														t.hashDigestLength;
																													const n = u;
																													if (u == u) {
																														if (
																															"number" !=
																															typeof e
																														)
																															return (
																																(xe.errors = [
																																	{
																																		params: {
																																			type: "number"
																																		}
																																	}
																																]),
																																!1
																															);
																														if (
																															e < 1 ||
																															isNaN(e)
																														)
																															return (
																																(xe.errors = [
																																	{
																																		params: {
																																			comparison:
																																				">=",
																																			limit: 1
																																		}
																																	}
																																]),
																																!1
																															);
																													}
																													y = n === u;
																												} else y = !0;
																												if (y) {
																													if (
																														void 0 !==
																														t.hashFunction
																													) {
																														let e =
																															t.hashFunction;
																														const n = u,
																															r = u;
																														let s = !1;
																														const o = u;
																														if (u === o)
																															if (
																																"string" ==
																																typeof e
																															) {
																																if (
																																	e.length < 1
																																) {
																																	const e = {
																																		params: {}
																																	};
																																	null === l
																																		? (l = [e])
																																		: l.push(e),
																																		u++;
																																}
																															} else {
																																const e = {
																																	params: {
																																		type: "string"
																																	}
																																};
																																null === l
																																	? (l = [e])
																																	: l.push(e),
																																	u++;
																															}
																														var v = o === u;
																														if (
																															((s = s || v), !s)
																														) {
																															const t = u;
																															if (
																																!(
																																	e instanceof
																																	Function
																																)
																															) {
																																const e = {
																																	params: {}
																																};
																																null === l
																																	? (l = [e])
																																	: l.push(e),
																																	u++;
																															}
																															(v = t === u),
																																(s = s || v);
																														}
																														if (!s) {
																															const e = {
																																params: {}
																															};
																															return (
																																null === l
																																	? (l = [e])
																																	: l.push(e),
																																u++,
																																(xe.errors = l),
																																!1
																															);
																														}
																														(u = r),
																															null !== l &&
																																(r
																																	? (l.length =
																																			r)
																																	: (l = null)),
																															(y = n === u);
																													} else y = !0;
																													if (y) {
																														if (
																															void 0 !==
																															t.hashSalt
																														) {
																															let e =
																																t.hashSalt;
																															const n = u;
																															if (u == u) {
																																if (
																																	"string" !=
																																	typeof e
																																)
																																	return (
																																		(xe.errors =
																																			[
																																				{
																																					params:
																																						{
																																							type: "string"
																																						}
																																				}
																																			]),
																																		!1
																																	);
																																if (
																																	e.length < 1
																																)
																																	return (
																																		(xe.errors =
																																			[
																																				{
																																					params:
																																						{}
																																				}
																																			]),
																																		!1
																																	);
																															}
																															y = n === u;
																														} else y = !0;
																														if (y) {
																															if (
																																void 0 !==
																																t.hotUpdateChunkFilename
																															) {
																																let n =
																																	t.hotUpdateChunkFilename;
																																const r = u;
																																if (u == u) {
																																	if (
																																		"string" !=
																																		typeof n
																																	)
																																		return (
																																			(xe.errors =
																																				[
																																					{
																																						params:
																																							{
																																								type: "string"
																																							}
																																					}
																																				]),
																																			!1
																																		);
																																	if (
																																		n.includes(
																																			"!"
																																		) ||
																																		!1 !==
																																			e.test(n)
																																	)
																																		return (
																																			(xe.errors =
																																				[
																																					{
																																						params:
																																							{}
																																					}
																																				]),
																																			!1
																																		);
																																}
																																y = r === u;
																															} else y = !0;
																															if (y) {
																																if (
																																	void 0 !==
																																	t.hotUpdateGlobal
																																) {
																																	const e = u;
																																	if (
																																		"string" !=
																																		typeof t.hotUpdateGlobal
																																	)
																																		return (
																																			(xe.errors =
																																				[
																																					{
																																						params:
																																							{
																																								type: "string"
																																							}
																																					}
																																				]),
																																			!1
																																		);
																																	y = e === u;
																																} else y = !0;
																																if (y) {
																																	if (
																																		void 0 !==
																																		t.hotUpdateMainFilename
																																	) {
																																		let n =
																																			t.hotUpdateMainFilename;
																																		const r = u;
																																		if (
																																			u == u
																																		) {
																																			if (
																																				"string" !=
																																				typeof n
																																			)
																																				return (
																																					(xe.errors =
																																						[
																																							{
																																								params:
																																									{
																																										type: "string"
																																									}
																																							}
																																						]),
																																					!1
																																				);
																																			if (
																																				n.includes(
																																					"!"
																																				) ||
																																				!1 !==
																																					e.test(
																																						n
																																					)
																																			)
																																				return (
																																					(xe.errors =
																																						[
																																							{
																																								params:
																																									{}
																																							}
																																						]),
																																					!1
																																				);
																																		}
																																		y = r === u;
																																	} else y = !0;
																																	if (y) {
																																		if (
																																			void 0 !==
																																			t.iife
																																		) {
																																			const e =
																																				u;
																																			if (
																																				"boolean" !=
																																				typeof t.iife
																																			)
																																				return (
																																					(xe.errors =
																																						[
																																							{
																																								params:
																																									{
																																										type: "boolean"
																																									}
																																							}
																																						]),
																																					!1
																																				);
																																			y =
																																				e === u;
																																		} else
																																			y = !0;
																																		if (y) {
																																			if (
																																				void 0 !==
																																				t.importFunctionName
																																			) {
																																				const e =
																																					u;
																																				if (
																																					"string" !=
																																					typeof t.importFunctionName
																																				)
																																					return (
																																						(xe.errors =
																																							[
																																								{
																																									params:
																																										{
																																											type: "string"
																																										}
																																								}
																																							]),
																																						!1
																																					);
																																				y =
																																					e ===
																																					u;
																																			} else
																																				y = !0;
																																			if (y) {
																																				if (
																																					void 0 !==
																																					t.importMetaName
																																				) {
																																					const e =
																																						u;
																																					if (
																																						"string" !=
																																						typeof t.importMetaName
																																					)
																																						return (
																																							(xe.errors =
																																								[
																																									{
																																										params:
																																											{
																																												type: "string"
																																											}
																																									}
																																								]),
																																							!1
																																						);
																																					y =
																																						e ===
																																						u;
																																				} else
																																					y =
																																						!0;
																																				if (y) {
																																					if (
																																						void 0 !==
																																						t.library
																																					) {
																																						const e =
																																							u;
																																						Ae(
																																							t.library,
																																							{
																																								instancePath:
																																									r +
																																									"/library",
																																								parentData:
																																									t,
																																								parentDataProperty:
																																									"library",
																																								rootData:
																																									a
																																							}
																																						) ||
																																							((l =
																																								null ===
																																								l
																																									? Ae.errors
																																									: l.concat(
																																											Ae.errors
																																									  )),
																																							(u =
																																								l.length)),
																																							(y =
																																								e ===
																																								u);
																																					} else
																																						y =
																																							!0;
																																					if (
																																						y
																																					) {
																																						if (
																																							void 0 !==
																																							t.libraryExport
																																						) {
																																							let e =
																																								t.libraryExport;
																																							const n =
																																									u,
																																								r =
																																									u;
																																							let s =
																																									!1,
																																								o =
																																									null;
																																							const a =
																																									u,
																																								i =
																																									u;
																																							let p =
																																								!1;
																																							const f =
																																								u;
																																							if (
																																								u ===
																																								f
																																							)
																																								if (
																																									Array.isArray(
																																										e
																																									)
																																								) {
																																									const t =
																																										e.length;
																																									for (
																																										let n = 0;
																																										n <
																																										t;
																																										n++
																																									) {
																																										let t =
																																											e[
																																												n
																																											];
																																										const r =
																																											u;
																																										if (
																																											u ===
																																											r
																																										)
																																											if (
																																												"string" ==
																																												typeof t
																																											) {
																																												if (
																																													t.length <
																																													1
																																												) {
																																													const e =
																																														{
																																															params:
																																																{}
																																														};
																																													null ===
																																													l
																																														? (l =
																																																[
																																																	e
																																																])
																																														: l.push(
																																																e
																																														  ),
																																														u++;
																																												}
																																											} else {
																																												const e =
																																													{
																																														params:
																																															{
																																																type: "string"
																																															}
																																													};
																																												null ===
																																												l
																																													? (l =
																																															[
																																																e
																																															])
																																													: l.push(
																																															e
																																													  ),
																																													u++;
																																											}
																																										if (
																																											r !==
																																											u
																																										)
																																											break;
																																									}
																																								} else {
																																									const e =
																																										{
																																											params:
																																												{
																																													type: "array"
																																												}
																																										};
																																									null ===
																																									l
																																										? (l =
																																												[
																																													e
																																												])
																																										: l.push(
																																												e
																																										  ),
																																										u++;
																																								}
																																							var D =
																																								f ===
																																								u;
																																							if (
																																								((p =
																																									p ||
																																									D),
																																								!p)
																																							) {
																																								const t =
																																									u;
																																								if (
																																									u ===
																																									t
																																								)
																																									if (
																																										"string" ==
																																										typeof e
																																									) {
																																										if (
																																											e.length <
																																											1
																																										) {
																																											const e =
																																												{
																																													params:
																																														{}
																																												};
																																											null ===
																																											l
																																												? (l =
																																														[
																																															e
																																														])
																																												: l.push(
																																														e
																																												  ),
																																												u++;
																																										}
																																									} else {
																																										const e =
																																											{
																																												params:
																																													{
																																														type: "string"
																																													}
																																											};
																																										null ===
																																										l
																																											? (l =
																																													[
																																														e
																																													])
																																											: l.push(
																																													e
																																											  ),
																																											u++;
																																									}
																																								(D =
																																									t ===
																																									u),
																																									(p =
																																										p ||
																																										D);
																																							}
																																							if (
																																								p
																																							)
																																								(u =
																																									i),
																																									null !==
																																										l &&
																																										(i
																																											? (l.length =
																																													i)
																																											: (l =
																																													null));
																																							else {
																																								const e =
																																									{
																																										params:
																																											{}
																																									};
																																								null ===
																																								l
																																									? (l =
																																											[
																																												e
																																											])
																																									: l.push(
																																											e
																																									  ),
																																									u++;
																																							}
																																							if (
																																								(a ===
																																									u &&
																																									((s =
																																										!0),
																																									(o = 0)),
																																								!s)
																																							) {
																																								const e =
																																									{
																																										params:
																																											{
																																												passingSchemas:
																																													o
																																											}
																																									};
																																								return (
																																									null ===
																																									l
																																										? (l =
																																												[
																																													e
																																												])
																																										: l.push(
																																												e
																																										  ),
																																									u++,
																																									(xe.errors =
																																										l),
																																									!1
																																								);
																																							}
																																							(u =
																																								r),
																																								null !==
																																									l &&
																																									(r
																																										? (l.length =
																																												r)
																																										: (l =
																																												null)),
																																								(y =
																																									n ===
																																									u);
																																						} else
																																							y =
																																								!0;
																																						if (
																																							y
																																						) {
																																							if (
																																								void 0 !==
																																								t.libraryTarget
																																							) {
																																								let e =
																																									t.libraryTarget;
																																								const n =
																																										u,
																																									r =
																																										u;
																																								let s =
																																										!1,
																																									o =
																																										null;
																																								const a =
																																										u,
																																									i =
																																										u;
																																								let p =
																																									!1;
																																								const f =
																																									u;
																																								if (
																																									"var" !==
																																										e &&
																																									"module" !==
																																										e &&
																																									"assign" !==
																																										e &&
																																									"assign-properties" !==
																																										e &&
																																									"this" !==
																																										e &&
																																									"window" !==
																																										e &&
																																									"self" !==
																																										e &&
																																									"global" !==
																																										e &&
																																									"commonjs" !==
																																										e &&
																																									"commonjs2" !==
																																										e &&
																																									"commonjs-module" !==
																																										e &&
																																									"commonjs-static" !==
																																										e &&
																																									"amd" !==
																																										e &&
																																									"amd-require" !==
																																										e &&
																																									"umd" !==
																																										e &&
																																									"umd2" !==
																																										e &&
																																									"jsonp" !==
																																										e &&
																																									"system" !==
																																										e
																																								) {
																																									const e =
																																										{
																																											params:
																																												{}
																																										};
																																									null ===
																																									l
																																										? (l =
																																												[
																																													e
																																												])
																																										: l.push(
																																												e
																																										  ),
																																										u++;
																																								}
																																								var P =
																																									f ===
																																									u;
																																								if (
																																									((p =
																																										p ||
																																										P),
																																									!p)
																																								) {
																																									const t =
																																										u;
																																									if (
																																										"string" !=
																																										typeof e
																																									) {
																																										const e =
																																											{
																																												params:
																																													{
																																														type: "string"
																																													}
																																											};
																																										null ===
																																										l
																																											? (l =
																																													[
																																														e
																																													])
																																											: l.push(
																																													e
																																											  ),
																																											u++;
																																									}
																																									(P =
																																										t ===
																																										u),
																																										(p =
																																											p ||
																																											P);
																																								}
																																								if (
																																									p
																																								)
																																									(u =
																																										i),
																																										null !==
																																											l &&
																																											(i
																																												? (l.length =
																																														i)
																																												: (l =
																																														null));
																																								else {
																																									const e =
																																										{
																																											params:
																																												{}
																																										};
																																									null ===
																																									l
																																										? (l =
																																												[
																																													e
																																												])
																																										: l.push(
																																												e
																																										  ),
																																										u++;
																																								}
																																								if (
																																									(a ===
																																										u &&
																																										((s =
																																											!0),
																																										(o = 0)),
																																									!s)
																																								) {
																																									const e =
																																										{
																																											params:
																																												{
																																													passingSchemas:
																																														o
																																												}
																																										};
																																									return (
																																										null ===
																																										l
																																											? (l =
																																													[
																																														e
																																													])
																																											: l.push(
																																													e
																																											  ),
																																										u++,
																																										(xe.errors =
																																											l),
																																										!1
																																									);
																																								}
																																								(u =
																																									r),
																																									null !==
																																										l &&
																																										(r
																																											? (l.length =
																																													r)
																																											: (l =
																																													null)),
																																									(y =
																																										n ===
																																										u);
																																							} else
																																								y =
																																									!0;
																																							if (
																																								y
																																							) {
																																								if (
																																									void 0 !==
																																									t.module
																																								) {
																																									const e =
																																										u;
																																									if (
																																										"boolean" !=
																																										typeof t.module
																																									)
																																										return (
																																											(xe.errors =
																																												[
																																													{
																																														params:
																																															{
																																																type: "boolean"
																																															}
																																													}
																																												]),
																																											!1
																																										);
																																									y =
																																										e ===
																																										u;
																																								} else
																																									y =
																																										!0;
																																								if (
																																									y
																																								) {
																																									if (
																																										void 0 !==
																																										t.path
																																									) {
																																										let n =
																																											t.path;
																																										const r =
																																											u;
																																										if (
																																											u ==
																																											u
																																										) {
																																											if (
																																												"string" !=
																																												typeof n
																																											)
																																												return (
																																													(xe.errors =
																																														[
																																															{
																																																params:
																																																	{
																																																		type: "string"
																																																	}
																																															}
																																														]),
																																													!1
																																												);
																																											if (
																																												n.includes(
																																													"!"
																																												) ||
																																												!0 !==
																																													e.test(
																																														n
																																													)
																																											)
																																												return (
																																													(xe.errors =
																																														[
																																															{
																																																params:
																																																	{}
																																															}
																																														]),
																																													!1
																																												);
																																										}
																																										y =
																																											r ===
																																											u;
																																									} else
																																										y =
																																											!0;
																																									if (
																																										y
																																									) {
																																										if (
																																											void 0 !==
																																											t.pathinfo
																																										) {
																																											let e =
																																												t.pathinfo;
																																											const n =
																																													u,
																																												r =
																																													u;
																																											let s =
																																												!1;
																																											const o =
																																												u;
																																											if (
																																												"verbose" !==
																																												e
																																											) {
																																												const e =
																																													{
																																														params:
																																															{}
																																													};
																																												null ===
																																												l
																																													? (l =
																																															[
																																																e
																																															])
																																													: l.push(
																																															e
																																													  ),
																																													u++;
																																											}
																																											var A =
																																												o ===
																																												u;
																																											if (
																																												((s =
																																													s ||
																																													A),
																																												!s)
																																											) {
																																												const t =
																																													u;
																																												if (
																																													"boolean" !=
																																													typeof e
																																												) {
																																													const e =
																																														{
																																															params:
																																																{
																																																	type: "boolean"
																																																}
																																														};
																																													null ===
																																													l
																																														? (l =
																																																[
																																																	e
																																																])
																																														: l.push(
																																																e
																																														  ),
																																														u++;
																																												}
																																												(A =
																																													t ===
																																													u),
																																													(s =
																																														s ||
																																														A);
																																											}
																																											if (
																																												!s
																																											) {
																																												const e =
																																													{
																																														params:
																																															{}
																																													};
																																												return (
																																													null ===
																																													l
																																														? (l =
																																																[
																																																	e
																																																])
																																														: l.push(
																																																e
																																														  ),
																																													u++,
																																													(xe.errors =
																																														l),
																																													!1
																																												);
																																											}
																																											(u =
																																												r),
																																												null !==
																																													l &&
																																													(r
																																														? (l.length =
																																																r)
																																														: (l =
																																																null)),
																																												(y =
																																													n ===
																																													u);
																																										} else
																																											y =
																																												!0;
																																										if (
																																											y
																																										) {
																																											if (
																																												void 0 !==
																																												t.publicPath
																																											) {
																																												const e =
																																													u;
																																												c(
																																													t.publicPath,
																																													{
																																														instancePath:
																																															r +
																																															"/publicPath",
																																														parentData:
																																															t,
																																														parentDataProperty:
																																															"publicPath",
																																														rootData:
																																															a
																																													}
																																												) ||
																																													((l =
																																														null ===
																																														l
																																															? c.errors
																																															: l.concat(
																																																	c.errors
																																															  )),
																																													(u =
																																														l.length)),
																																													(y =
																																														e ===
																																														u);
																																											} else
																																												y =
																																													!0;
																																											if (
																																												y
																																											) {
																																												if (
																																													void 0 !==
																																													t.scriptType
																																												) {
																																													let e =
																																														t.scriptType;
																																													const n =
																																														u;
																																													if (
																																														!1 !==
																																															e &&
																																														"text/javascript" !==
																																															e &&
																																														"module" !==
																																															e
																																													)
																																														return (
																																															(xe.errors =
																																																[
																																																	{
																																																		params:
																																																			{}
																																																	}
																																																]),
																																															!1
																																														);
																																													y =
																																														n ===
																																														u;
																																												} else
																																													y =
																																														!0;
																																												if (
																																													y
																																												) {
																																													if (
																																														void 0 !==
																																														t.sourceMapFilename
																																													) {
																																														let n =
																																															t.sourceMapFilename;
																																														const r =
																																															u;
																																														if (
																																															u ==
																																															u
																																														) {
																																															if (
																																																"string" !=
																																																typeof n
																																															)
																																																return (
																																																	(xe.errors =
																																																		[
																																																			{
																																																				params:
																																																					{
																																																						type: "string"
																																																					}
																																																			}
																																																		]),
																																																	!1
																																																);
																																															if (
																																																n.includes(
																																																	"!"
																																																) ||
																																																!1 !==
																																																	e.test(
																																																		n
																																																	)
																																															)
																																																return (
																																																	(xe.errors =
																																																		[
																																																			{
																																																				params:
																																																					{}
																																																			}
																																																		]),
																																																	!1
																																																);
																																														}
																																														y =
																																															r ===
																																															u;
																																													} else
																																														y =
																																															!0;
																																													if (
																																														y
																																													) {
																																														if (
																																															void 0 !==
																																															t.sourcePrefix
																																														) {
																																															const e =
																																																u;
																																															if (
																																																"string" !=
																																																typeof t.sourcePrefix
																																															)
																																																return (
																																																	(xe.errors =
																																																		[
																																																			{
																																																				params:
																																																					{
																																																						type: "string"
																																																					}
																																																			}
																																																		]),
																																																	!1
																																																);
																																															y =
																																																e ===
																																																u;
																																														} else
																																															y =
																																																!0;
																																														if (
																																															y
																																														) {
																																															if (
																																																void 0 !==
																																																t.strictModuleErrorHandling
																																															) {
																																																const e =
																																																	u;
																																																if (
																																																	"boolean" !=
																																																	typeof t.strictModuleErrorHandling
																																																)
																																																	return (
																																																		(xe.errors =
																																																			[
																																																				{
																																																					params:
																																																						{
																																																							type: "boolean"
																																																						}
																																																				}
																																																			]),
																																																		!1
																																																	);
																																																y =
																																																	e ===
																																																	u;
																																															} else
																																																y =
																																																	!0;
																																															if (
																																																y
																																															) {
																																																if (
																																																	void 0 !==
																																																	t.strictModuleExceptionHandling
																																																) {
																																																	const e =
																																																		u;
																																																	if (
																																																		"boolean" !=
																																																		typeof t.strictModuleExceptionHandling
																																																	)
																																																		return (
																																																			(xe.errors =
																																																				[
																																																					{
																																																						params:
																																																							{
																																																								type: "boolean"
																																																							}
																																																					}
																																																				]),
																																																			!1
																																																		);
																																																	y =
																																																		e ===
																																																		u;
																																																} else
																																																	y =
																																																		!0;
																																																if (
																																																	y
																																																) {
																																																	if (
																																																		void 0 !==
																																																		t.trustedTypes
																																																	) {
																																																		let e =
																																																			t.trustedTypes;
																																																		const n =
																																																				u,
																																																			r =
																																																				u;
																																																		let s =
																																																			!1;
																																																		const o =
																																																			u;
																																																		if (
																																																			!0 !==
																																																			e
																																																		) {
																																																			const e =
																																																				{
																																																					params:
																																																						{}
																																																				};
																																																			null ===
																																																			l
																																																				? (l =
																																																						[
																																																							e
																																																						])
																																																				: l.push(
																																																						e
																																																				  ),
																																																				u++;
																																																		}
																																																		var x =
																																																			o ===
																																																			u;
																																																		if (
																																																			((s =
																																																				s ||
																																																				x),
																																																			!s)
																																																		) {
																																																			const t =
																																																				u;
																																																			if (
																																																				u ===
																																																				t
																																																			)
																																																				if (
																																																					"string" ==
																																																					typeof e
																																																				) {
																																																					if (
																																																						e.length <
																																																						1
																																																					) {
																																																						const e =
																																																							{
																																																								params:
																																																									{}
																																																							};
																																																						null ===
																																																						l
																																																							? (l =
																																																									[
																																																										e
																																																									])
																																																							: l.push(
																																																									e
																																																							  ),
																																																							u++;
																																																					}
																																																				} else {
																																																					const e =
																																																						{
																																																							params:
																																																								{
																																																									type: "string"
																																																								}
																																																						};
																																																					null ===
																																																					l
																																																						? (l =
																																																								[
																																																									e
																																																								])
																																																						: l.push(
																																																								e
																																																						  ),
																																																						u++;
																																																				}
																																																			if (
																																																				((x =
																																																					t ===
																																																					u),
																																																				(s =
																																																					s ||
																																																					x),
																																																				!s)
																																																			) {
																																																				const t =
																																																					u;
																																																				if (
																																																					u ==
																																																					u
																																																				)
																																																					if (
																																																						e &&
																																																						"object" ==
																																																							typeof e &&
																																																						!Array.isArray(
																																																							e
																																																						)
																																																					) {
																																																						const t =
																																																							u;
																																																						for (const t in e)
																																																							if (
																																																								"policyName" !==
																																																								t
																																																							) {
																																																								const e =
																																																									{
																																																										params:
																																																											{
																																																												additionalProperty:
																																																													t
																																																											}
																																																									};
																																																								null ===
																																																								l
																																																									? (l =
																																																											[
																																																												e
																																																											])
																																																									: l.push(
																																																											e
																																																									  ),
																																																									u++;
																																																								break;
																																																							}
																																																						if (
																																																							t ===
																																																								u &&
																																																							void 0 !==
																																																								e.policyName
																																																						) {
																																																							let t =
																																																								e.policyName;
																																																							if (
																																																								u ==
																																																								u
																																																							)
																																																								if (
																																																									"string" ==
																																																									typeof t
																																																								) {
																																																									if (
																																																										t.length <
																																																										1
																																																									) {
																																																										const e =
																																																											{
																																																												params:
																																																													{}
																																																											};
																																																										null ===
																																																										l
																																																											? (l =
																																																													[
																																																														e
																																																													])
																																																											: l.push(
																																																													e
																																																											  ),
																																																											u++;
																																																									}
																																																								} else {
																																																									const e =
																																																										{
																																																											params:
																																																												{
																																																													type: "string"
																																																												}
																																																										};
																																																									null ===
																																																									l
																																																										? (l =
																																																												[
																																																													e
																																																												])
																																																										: l.push(
																																																												e
																																																										  ),
																																																										u++;
																																																								}
																																																						}
																																																					} else {
																																																						const e =
																																																							{
																																																								params:
																																																									{
																																																										type: "object"
																																																									}
																																																							};
																																																						null ===
																																																						l
																																																							? (l =
																																																									[
																																																										e
																																																									])
																																																							: l.push(
																																																									e
																																																							  ),
																																																							u++;
																																																					}
																																																				(x =
																																																					t ===
																																																					u),
																																																					(s =
																																																						s ||
																																																						x);
																																																			}
																																																		}
																																																		if (
																																																			!s
																																																		) {
																																																			const e =
																																																				{
																																																					params:
																																																						{}
																																																				};
																																																			return (
																																																				null ===
																																																				l
																																																					? (l =
																																																							[
																																																								e
																																																							])
																																																					: l.push(
																																																							e
																																																					  ),
																																																				u++,
																																																				(xe.errors =
																																																					l),
																																																				!1
																																																			);
																																																		}
																																																		(u =
																																																			r),
																																																			null !==
																																																				l &&
																																																				(r
																																																					? (l.length =
																																																							r)
																																																					: (l =
																																																							null)),
																																																			(y =
																																																				n ===
																																																				u);
																																																	} else
																																																		y =
																																																			!0;
																																																	if (
																																																		y
																																																	) {
																																																		if (
																																																			void 0 !==
																																																			t.umdNamedDefine
																																																		) {
																																																			const e =
																																																					u,
																																																				n =
																																																					u;
																																																			let r =
																																																					!1,
																																																				s =
																																																					null;
																																																			const o =
																																																				u;
																																																			if (
																																																				"boolean" !=
																																																				typeof t.umdNamedDefine
																																																			) {
																																																				const e =
																																																					{
																																																						params:
																																																							{
																																																								type: "boolean"
																																																							}
																																																					};
																																																				null ===
																																																				l
																																																					? (l =
																																																							[
																																																								e
																																																							])
																																																					: l.push(
																																																							e
																																																					  ),
																																																					u++;
																																																			}
																																																			if (
																																																				(o ===
																																																					u &&
																																																					((r =
																																																						!0),
																																																					(s = 0)),
																																																				!r)
																																																			) {
																																																				const e =
																																																					{
																																																						params:
																																																							{
																																																								passingSchemas:
																																																									s
																																																							}
																																																					};
																																																				return (
																																																					null ===
																																																					l
																																																						? (l =
																																																								[
																																																									e
																																																								])
																																																						: l.push(
																																																								e
																																																						  ),
																																																					u++,
																																																					(xe.errors =
																																																						l),
																																																					!1
																																																				);
																																																			}
																																																			(u =
																																																				n),
																																																				null !==
																																																					l &&
																																																					(n
																																																						? (l.length =
																																																								n)
																																																						: (l =
																																																								null)),
																																																				(y =
																																																					e ===
																																																					u);
																																																		} else
																																																			y =
																																																				!0;
																																																		if (
																																																			y
																																																		) {
																																																			if (
																																																				void 0 !==
																																																				t.uniqueName
																																																			) {
																																																				let e =
																																																					t.uniqueName;
																																																				const n =
																																																					u;
																																																				if (
																																																					u ==
																																																					u
																																																				) {
																																																					if (
																																																						"string" !=
																																																						typeof e
																																																					)
																																																						return (
																																																							(xe.errors =
																																																								[
																																																									{
																																																										params:
																																																											{
																																																												type: "string"
																																																											}
																																																									}
																																																								]),
																																																							!1
																																																						);
																																																					if (
																																																						e.length <
																																																						1
																																																					)
																																																						return (
																																																							(xe.errors =
																																																								[
																																																									{
																																																										params:
																																																											{}
																																																									}
																																																								]),
																																																							!1
																																																						);
																																																				}
																																																				y =
																																																					n ===
																																																					u;
																																																			} else
																																																				y =
																																																					!0;
																																																			if (
																																																				y
																																																			) {
																																																				if (
																																																					void 0 !==
																																																					t.wasmLoading
																																																				) {
																																																					const e =
																																																						u;
																																																					m(
																																																						t.wasmLoading,
																																																						{
																																																							instancePath:
																																																								r +
																																																								"/wasmLoading",
																																																							parentData:
																																																								t,
																																																							parentDataProperty:
																																																								"wasmLoading",
																																																							rootData:
																																																								a
																																																						}
																																																					) ||
																																																						((l =
																																																							null ===
																																																							l
																																																								? m.errors
																																																								: l.concat(
																																																										m.errors
																																																								  )),
																																																						(u =
																																																							l.length)),
																																																						(y =
																																																							e ===
																																																							u);
																																																				} else
																																																					y =
																																																						!0;
																																																				if (
																																																					y
																																																				) {
																																																					if (
																																																						void 0 !==
																																																						t.webassemblyModuleFilename
																																																					) {
																																																						let n =
																																																							t.webassemblyModuleFilename;
																																																						const r =
																																																							u;
																																																						if (
																																																							u ==
																																																							u
																																																						) {
																																																							if (
																																																								"string" !=
																																																								typeof n
																																																							)
																																																								return (
																																																									(xe.errors =
																																																										[
																																																											{
																																																												params:
																																																													{
																																																														type: "string"
																																																													}
																																																											}
																																																										]),
																																																									!1
																																																								);
																																																							if (
																																																								n.includes(
																																																									"!"
																																																								) ||
																																																								!1 !==
																																																									e.test(
																																																										n
																																																									)
																																																							)
																																																								return (
																																																									(xe.errors =
																																																										[
																																																											{
																																																												params:
																																																													{}
																																																											}
																																																										]),
																																																									!1
																																																								);
																																																						}
																																																						y =
																																																							r ===
																																																							u;
																																																					} else
																																																						y =
																																																							!0;
																																																					if (
																																																						y
																																																					) {
																																																						if (
																																																							void 0 !==
																																																							t.workerChunkLoading
																																																						) {
																																																							const e =
																																																								u;
																																																							i(
																																																								t.workerChunkLoading,
																																																								{
																																																									instancePath:
																																																										r +
																																																										"/workerChunkLoading",
																																																									parentData:
																																																										t,
																																																									parentDataProperty:
																																																										"workerChunkLoading",
																																																									rootData:
																																																										a
																																																								}
																																																							) ||
																																																								((l =
																																																									null ===
																																																									l
																																																										? i.errors
																																																										: l.concat(
																																																												i.errors
																																																										  )),
																																																								(u =
																																																									l.length)),
																																																								(y =
																																																									e ===
																																																									u);
																																																						} else
																																																							y =
																																																								!0;
																																																						if (
																																																							y
																																																						)
																																																							if (
																																																								void 0 !==
																																																								t.workerWasmLoading
																																																							) {
																																																								const e =
																																																									u;
																																																								m(
																																																									t.workerWasmLoading,
																																																									{
																																																										instancePath:
																																																											r +
																																																											"/workerWasmLoading",
																																																										parentData:
																																																											t,
																																																										parentDataProperty:
																																																											"workerWasmLoading",
																																																										rootData:
																																																											a
																																																									}
																																																								) ||
																																																									((l =
																																																										null ===
																																																										l
																																																											? m.errors
																																																											: l.concat(
																																																													m.errors
																																																											  )),
																																																									(u =
																																																										l.length)),
																																																									(y =
																																																										e ===
																																																										u);
																																																							} else
																																																								y =
																																																									!0;
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (xe.errors = l), 0 === u;
}
function ke(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (!1 !== e) {
		const e = { params: {} };
		null === o ? (o = [e]) : o.push(e), a++;
	}
	var u = p === a;
	if (((l = l || u), !l)) {
		const t = a;
		if (a == a)
			if (e && "object" == typeof e && !Array.isArray(e)) {
				const t = a;
				for (const t in e)
					if (
						"assetFilter" !== t &&
						"hints" !== t &&
						"maxAssetSize" !== t &&
						"maxEntrypointSize" !== t
					) {
						const e = { params: { additionalProperty: t } };
						null === o ? (o = [e]) : o.push(e), a++;
						break;
					}
				if (t === a) {
					if (void 0 !== e.assetFilter) {
						const t = a;
						if (!(e.assetFilter instanceof Function)) {
							const e = { params: {} };
							null === o ? (o = [e]) : o.push(e), a++;
						}
						var f = t === a;
					} else f = !0;
					if (f) {
						if (void 0 !== e.hints) {
							let t = e.hints;
							const n = a;
							if (!1 !== t && "warning" !== t && "error" !== t) {
								const e = { params: {} };
								null === o ? (o = [e]) : o.push(e), a++;
							}
							f = n === a;
						} else f = !0;
						if (f) {
							if (void 0 !== e.maxAssetSize) {
								const t = a;
								if ("number" != typeof e.maxAssetSize) {
									const e = { params: { type: "number" } };
									null === o ? (o = [e]) : o.push(e), a++;
								}
								f = t === a;
							} else f = !0;
							if (f)
								if (void 0 !== e.maxEntrypointSize) {
									const t = a;
									if ("number" != typeof e.maxEntrypointSize) {
										const e = { params: { type: "number" } };
										null === o ? (o = [e]) : o.push(e), a++;
									}
									f = t === a;
								} else f = !0;
						}
					}
				}
			} else {
				const e = { params: { type: "object" } };
				null === o ? (o = [e]) : o.push(e), a++;
			}
		(u = t === a), (l = l || u);
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (ke.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(ke.errors = o),
		0 === a
	);
}
function je(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	if (0 === a) {
		if (!Array.isArray(e))
			return (je.errors = [{ params: { type: "array" } }]), !1;
		{
			const t = e.length;
			for (let n = 0; n < t; n++) {
				let t = e[n];
				const r = a,
					s = a;
				let l = !1;
				const p = a;
				if (a == a)
					if (t && "object" == typeof t && !Array.isArray(t)) {
						let e;
						if (void 0 === t.apply && (e = "apply")) {
							const t = { params: { missingProperty: e } };
							null === o ? (o = [t]) : o.push(t), a++;
						} else if (void 0 !== t.apply && !(t.apply instanceof Function)) {
							const e = { params: {} };
							null === o ? (o = [e]) : o.push(e), a++;
						}
					} else {
						const e = { params: { type: "object" } };
						null === o ? (o = [e]) : o.push(e), a++;
					}
				var i = p === a;
				if (((l = l || i), !l)) {
					const e = a;
					if (!(t instanceof Function)) {
						const e = { params: {} };
						null === o ? (o = [e]) : o.push(e), a++;
					}
					(i = e === a), (l = l || i);
				}
				if (!l) {
					const e = { params: {} };
					return null === o ? (o = [e]) : o.push(e), a++, (je.errors = o), !1;
				}
				if (((a = s), null !== o && (s ? (o.length = s) : (o = null)), r !== a))
					break;
			}
		}
	}
	return (je.errors = o), 0 === a;
}
function Se(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1,
		p = null;
	const u = a;
	if (
		(W(e, {
			instancePath: t,
			parentData: n,
			parentDataProperty: r,
			rootData: s
		}) || ((o = null === o ? W.errors : o.concat(W.errors)), (a = o.length)),
		u === a && ((l = !0), (p = 0)),
		!l)
	) {
		const e = { params: { passingSchemas: p } };
		return null === o ? (o = [e]) : o.push(e), a++, (Se.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(Se.errors = o),
		0 === a
	);
}
function Ce(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1,
		p = null;
	const u = a;
	if (
		(W(e, {
			instancePath: t,
			parentData: n,
			parentDataProperty: r,
			rootData: s
		}) || ((o = null === o ? W.errors : o.concat(W.errors)), (a = o.length)),
		u === a && ((l = !0), (p = 0)),
		!l)
	) {
		const e = { params: { passingSchemas: p } };
		return null === o ? (o = [e]) : o.push(e), a++, (Ce.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(Ce.errors = o),
		0 === a
	);
}
const Oe = {
	all: { type: "boolean" },
	assets: { type: "boolean" },
	assetsSort: { type: "string" },
	assetsSpace: { type: "number" },
	builtAt: { type: "boolean" },
	cached: { type: "boolean" },
	cachedAssets: { type: "boolean" },
	cachedModules: { type: "boolean" },
	children: { type: "boolean" },
	chunkGroupAuxiliary: { type: "boolean" },
	chunkGroupChildren: { type: "boolean" },
	chunkGroupMaxAssets: { type: "number" },
	chunkGroups: { type: "boolean" },
	chunkModules: { type: "boolean" },
	chunkModulesSpace: { type: "number" },
	chunkOrigins: { type: "boolean" },
	chunkRelations: { type: "boolean" },
	chunks: { type: "boolean" },
	chunksSort: { type: "string" },
	colors: {
		anyOf: [
			{ type: "boolean" },
			{
				type: "object",
				additionalProperties: !1,
				properties: {
					bold: { type: "string" },
					cyan: { type: "string" },
					green: { type: "string" },
					magenta: { type: "string" },
					red: { type: "string" },
					yellow: { type: "string" }
				}
			}
		]
	},
	context: { type: "string", absolutePath: !0 },
	dependentModules: { type: "boolean" },
	depth: { type: "boolean" },
	entrypoints: { anyOf: [{ enum: ["auto"] }, { type: "boolean" }] },
	env: { type: "boolean" },
	errorDetails: { anyOf: [{ enum: ["auto"] }, { type: "boolean" }] },
	errorStack: { type: "boolean" },
	errors: { type: "boolean" },
	errorsCount: { type: "boolean" },
	exclude: {
		anyOf: [{ type: "boolean" }, { $ref: "#/definitions/ModuleFilterTypes" }]
	},
	excludeAssets: { oneOf: [{ $ref: "#/definitions/AssetFilterTypes" }] },
	excludeModules: {
		anyOf: [{ type: "boolean" }, { $ref: "#/definitions/ModuleFilterTypes" }]
	},
	groupAssetsByChunk: { type: "boolean" },
	groupAssetsByEmitStatus: { type: "boolean" },
	groupAssetsByExtension: { type: "boolean" },
	groupAssetsByInfo: { type: "boolean" },
	groupAssetsByPath: { type: "boolean" },
	groupModulesByAttributes: { type: "boolean" },
	groupModulesByCacheStatus: { type: "boolean" },
	groupModulesByExtension: { type: "boolean" },
	groupModulesByLayer: { type: "boolean" },
	groupModulesByPath: { type: "boolean" },
	groupModulesByType: { type: "boolean" },
	groupReasonsByOrigin: { type: "boolean" },
	hash: { type: "boolean" },
	ids: { type: "boolean" },
	logging: {
		anyOf: [
			{ enum: ["none", "error", "warn", "info", "log", "verbose"] },
			{ type: "boolean" }
		]
	},
	loggingDebug: {
		anyOf: [{ type: "boolean" }, { $ref: "#/definitions/FilterTypes" }]
	},
	loggingTrace: { type: "boolean" },
	moduleAssets: { type: "boolean" },
	moduleTrace: { type: "boolean" },
	modules: { type: "boolean" },
	modulesSort: { type: "string" },
	modulesSpace: { type: "number" },
	nestedModules: { type: "boolean" },
	nestedModulesSpace: { type: "number" },
	optimizationBailout: { type: "boolean" },
	orphanModules: { type: "boolean" },
	outputPath: { type: "boolean" },
	performance: { type: "boolean" },
	preset: { anyOf: [{ type: "boolean" }, { type: "string" }] },
	providedExports: { type: "boolean" },
	publicPath: { type: "boolean" },
	reasons: { type: "boolean" },
	reasonsSpace: { type: "number" },
	relatedAssets: { type: "boolean" },
	runtime: { type: "boolean" },
	runtimeModules: { type: "boolean" },
	source: { type: "boolean" },
	timings: { type: "boolean" },
	usedExports: { type: "boolean" },
	version: { type: "boolean" },
	warnings: { type: "boolean" },
	warningsCount: { type: "boolean" },
	warningsFilter: { oneOf: [{ $ref: "#/definitions/WarningFilterTypes" }] }
};
function Fe(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	const l = i;
	let p = !1;
	const u = i;
	if (i === u)
		if (Array.isArray(t)) {
			const n = t.length;
			for (let r = 0; r < n; r++) {
				let n = t[r];
				const s = i,
					o = i;
				let l = !1,
					p = null;
				const u = i,
					c = i;
				let m = !1;
				const y = i;
				if (!(n instanceof RegExp)) {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				var f = y === i;
				if (((m = m || f), !m)) {
					const t = i;
					if (i === t)
						if ("string" == typeof n) {
							if (n.includes("!") || !1 !== e.test(n)) {
								const e = { params: {} };
								null === a ? (a = [e]) : a.push(e), i++;
							}
						} else {
							const e = { params: { type: "string" } };
							null === a ? (a = [e]) : a.push(e), i++;
						}
					if (((f = t === i), (m = m || f), !m)) {
						const e = i;
						if (!(n instanceof Function)) {
							const e = { params: {} };
							null === a ? (a = [e]) : a.push(e), i++;
						}
						(f = e === i), (m = m || f);
					}
				}
				if (m) (i = c), null !== a && (c ? (a.length = c) : (a = null));
				else {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				if ((u === i && ((l = !0), (p = 0)), l))
					(i = o), null !== a && (o ? (a.length = o) : (a = null));
				else {
					const e = { params: { passingSchemas: p } };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				if (s !== i) break;
			}
		} else {
			const e = { params: { type: "array" } };
			null === a ? (a = [e]) : a.push(e), i++;
		}
	var c = u === i;
	if (((p = p || c), !p)) {
		const n = i,
			r = i;
		let s = !1;
		const o = i;
		if (!(t instanceof RegExp)) {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		var m = o === i;
		if (((s = s || m), !s)) {
			const n = i;
			if (i === n)
				if ("string" == typeof t) {
					if (t.includes("!") || !1 !== e.test(t)) {
						const e = { params: {} };
						null === a ? (a = [e]) : a.push(e), i++;
					}
				} else {
					const e = { params: { type: "string" } };
					null === a ? (a = [e]) : a.push(e), i++;
				}
			if (((m = n === i), (s = s || m), !s)) {
				const e = i;
				if (!(t instanceof Function)) {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				(m = e === i), (s = s || m);
			}
		}
		if (s) (i = r), null !== a && (r ? (a.length = r) : (a = null));
		else {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		(c = n === i), (p = p || c);
	}
	if (!p) {
		const e = { params: {} };
		return null === a ? (a = [e]) : a.push(e), i++, (Fe.errors = a), !1;
	}
	return (
		(i = l),
		null !== a && (l ? (a.length = l) : (a = null)),
		(Fe.errors = a),
		0 === i
	);
}
function Re(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	const l = i;
	let p = !1;
	const u = i;
	if (i === u)
		if (Array.isArray(t)) {
			const n = t.length;
			for (let r = 0; r < n; r++) {
				let n = t[r];
				const s = i,
					o = i;
				let l = !1,
					p = null;
				const u = i,
					c = i;
				let m = !1;
				const y = i;
				if (!(n instanceof RegExp)) {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				var f = y === i;
				if (((m = m || f), !m)) {
					const t = i;
					if (i === t)
						if ("string" == typeof n) {
							if (n.includes("!") || !1 !== e.test(n)) {
								const e = { params: {} };
								null === a ? (a = [e]) : a.push(e), i++;
							}
						} else {
							const e = { params: { type: "string" } };
							null === a ? (a = [e]) : a.push(e), i++;
						}
					if (((f = t === i), (m = m || f), !m)) {
						const e = i;
						if (!(n instanceof Function)) {
							const e = { params: {} };
							null === a ? (a = [e]) : a.push(e), i++;
						}
						(f = e === i), (m = m || f);
					}
				}
				if (m) (i = c), null !== a && (c ? (a.length = c) : (a = null));
				else {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				if ((u === i && ((l = !0), (p = 0)), l))
					(i = o), null !== a && (o ? (a.length = o) : (a = null));
				else {
					const e = { params: { passingSchemas: p } };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				if (s !== i) break;
			}
		} else {
			const e = { params: { type: "array" } };
			null === a ? (a = [e]) : a.push(e), i++;
		}
	var c = u === i;
	if (((p = p || c), !p)) {
		const n = i,
			r = i;
		let s = !1;
		const o = i;
		if (!(t instanceof RegExp)) {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		var m = o === i;
		if (((s = s || m), !s)) {
			const n = i;
			if (i === n)
				if ("string" == typeof t) {
					if (t.includes("!") || !1 !== e.test(t)) {
						const e = { params: {} };
						null === a ? (a = [e]) : a.push(e), i++;
					}
				} else {
					const e = { params: { type: "string" } };
					null === a ? (a = [e]) : a.push(e), i++;
				}
			if (((m = n === i), (s = s || m), !s)) {
				const e = i;
				if (!(t instanceof Function)) {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				(m = e === i), (s = s || m);
			}
		}
		if (s) (i = r), null !== a && (r ? (a.length = r) : (a = null));
		else {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		(c = n === i), (p = p || c);
	}
	if (!p) {
		const e = { params: {} };
		return null === a ? (a = [e]) : a.push(e), i++, (Re.errors = a), !1;
	}
	return (
		(i = l),
		null !== a && (l ? (a.length = l) : (a = null)),
		(Re.errors = a),
		0 === i
	);
}
function Ee(
	t,
	{
		instancePath: n = "",
		parentData: r,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let a = null,
		i = 0;
	const l = i;
	let p = !1;
	const u = i;
	if (i === u)
		if (Array.isArray(t)) {
			const n = t.length;
			for (let r = 0; r < n; r++) {
				let n = t[r];
				const s = i,
					o = i;
				let l = !1,
					p = null;
				const u = i,
					c = i;
				let m = !1;
				const y = i;
				if (!(n instanceof RegExp)) {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				var f = y === i;
				if (((m = m || f), !m)) {
					const t = i;
					if (i === t)
						if ("string" == typeof n) {
							if (n.includes("!") || !1 !== e.test(n)) {
								const e = { params: {} };
								null === a ? (a = [e]) : a.push(e), i++;
							}
						} else {
							const e = { params: { type: "string" } };
							null === a ? (a = [e]) : a.push(e), i++;
						}
					if (((f = t === i), (m = m || f), !m)) {
						const e = i;
						if (!(n instanceof Function)) {
							const e = { params: {} };
							null === a ? (a = [e]) : a.push(e), i++;
						}
						(f = e === i), (m = m || f);
					}
				}
				if (m) (i = c), null !== a && (c ? (a.length = c) : (a = null));
				else {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				if ((u === i && ((l = !0), (p = 0)), l))
					(i = o), null !== a && (o ? (a.length = o) : (a = null));
				else {
					const e = { params: { passingSchemas: p } };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				if (s !== i) break;
			}
		} else {
			const e = { params: { type: "array" } };
			null === a ? (a = [e]) : a.push(e), i++;
		}
	var c = u === i;
	if (((p = p || c), !p)) {
		const n = i,
			r = i;
		let s = !1;
		const o = i;
		if (!(t instanceof RegExp)) {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		var m = o === i;
		if (((s = s || m), !s)) {
			const n = i;
			if (i === n)
				if ("string" == typeof t) {
					if (t.includes("!") || !1 !== e.test(t)) {
						const e = { params: {} };
						null === a ? (a = [e]) : a.push(e), i++;
					}
				} else {
					const e = { params: { type: "string" } };
					null === a ? (a = [e]) : a.push(e), i++;
				}
			if (((m = n === i), (s = s || m), !s)) {
				const e = i;
				if (!(t instanceof Function)) {
					const e = { params: {} };
					null === a ? (a = [e]) : a.push(e), i++;
				}
				(m = e === i), (s = s || m);
			}
		}
		if (s) (i = r), null !== a && (r ? (a.length = r) : (a = null));
		else {
			const e = { params: {} };
			null === a ? (a = [e]) : a.push(e), i++;
		}
		(c = n === i), (p = p || c);
	}
	if (!p) {
		const e = { params: {} };
		return null === a ? (a = [e]) : a.push(e), i++, (Ee.errors = a), !1;
	}
	return (
		(i = l),
		null !== a && (l ? (a.length = l) : (a = null)),
		(Ee.errors = a),
		0 === i
	);
}
function $e(
	t,
	{
		instancePath: r = "",
		parentData: s,
		parentDataProperty: o,
		rootData: a = t
	} = {}
) {
	let i = null,
		l = 0;
	if (0 === l) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return ($e.errors = [{ params: { type: "object" } }]), !1;
		{
			const s = l;
			for (const e in t)
				if (!n.call(Oe, e))
					return ($e.errors = [{ params: { additionalProperty: e } }]), !1;
			if (s === l) {
				if (void 0 !== t.all) {
					const e = l;
					if ("boolean" != typeof t.all)
						return ($e.errors = [{ params: { type: "boolean" } }]), !1;
					var p = e === l;
				} else p = !0;
				if (p) {
					if (void 0 !== t.assets) {
						const e = l;
						if ("boolean" != typeof t.assets)
							return ($e.errors = [{ params: { type: "boolean" } }]), !1;
						p = e === l;
					} else p = !0;
					if (p) {
						if (void 0 !== t.assetsSort) {
							const e = l;
							if ("string" != typeof t.assetsSort)
								return ($e.errors = [{ params: { type: "string" } }]), !1;
							p = e === l;
						} else p = !0;
						if (p) {
							if (void 0 !== t.assetsSpace) {
								const e = l;
								if ("number" != typeof t.assetsSpace)
									return ($e.errors = [{ params: { type: "number" } }]), !1;
								p = e === l;
							} else p = !0;
							if (p) {
								if (void 0 !== t.builtAt) {
									const e = l;
									if ("boolean" != typeof t.builtAt)
										return ($e.errors = [{ params: { type: "boolean" } }]), !1;
									p = e === l;
								} else p = !0;
								if (p) {
									if (void 0 !== t.cached) {
										const e = l;
										if ("boolean" != typeof t.cached)
											return (
												($e.errors = [{ params: { type: "boolean" } }]), !1
											);
										p = e === l;
									} else p = !0;
									if (p) {
										if (void 0 !== t.cachedAssets) {
											const e = l;
											if ("boolean" != typeof t.cachedAssets)
												return (
													($e.errors = [{ params: { type: "boolean" } }]), !1
												);
											p = e === l;
										} else p = !0;
										if (p) {
											if (void 0 !== t.cachedModules) {
												const e = l;
												if ("boolean" != typeof t.cachedModules)
													return (
														($e.errors = [{ params: { type: "boolean" } }]), !1
													);
												p = e === l;
											} else p = !0;
											if (p) {
												if (void 0 !== t.children) {
													const e = l;
													if ("boolean" != typeof t.children)
														return (
															($e.errors = [{ params: { type: "boolean" } }]),
															!1
														);
													p = e === l;
												} else p = !0;
												if (p) {
													if (void 0 !== t.chunkGroupAuxiliary) {
														const e = l;
														if ("boolean" != typeof t.chunkGroupAuxiliary)
															return (
																($e.errors = [{ params: { type: "boolean" } }]),
																!1
															);
														p = e === l;
													} else p = !0;
													if (p) {
														if (void 0 !== t.chunkGroupChildren) {
															const e = l;
															if ("boolean" != typeof t.chunkGroupChildren)
																return (
																	($e.errors = [
																		{ params: { type: "boolean" } }
																	]),
																	!1
																);
															p = e === l;
														} else p = !0;
														if (p) {
															if (void 0 !== t.chunkGroupMaxAssets) {
																const e = l;
																if ("number" != typeof t.chunkGroupMaxAssets)
																	return (
																		($e.errors = [
																			{ params: { type: "number" } }
																		]),
																		!1
																	);
																p = e === l;
															} else p = !0;
															if (p) {
																if (void 0 !== t.chunkGroups) {
																	const e = l;
																	if ("boolean" != typeof t.chunkGroups)
																		return (
																			($e.errors = [
																				{ params: { type: "boolean" } }
																			]),
																			!1
																		);
																	p = e === l;
																} else p = !0;
																if (p) {
																	if (void 0 !== t.chunkModules) {
																		const e = l;
																		if ("boolean" != typeof t.chunkModules)
																			return (
																				($e.errors = [
																					{ params: { type: "boolean" } }
																				]),
																				!1
																			);
																		p = e === l;
																	} else p = !0;
																	if (p) {
																		if (void 0 !== t.chunkModulesSpace) {
																			const e = l;
																			if (
																				"number" != typeof t.chunkModulesSpace
																			)
																				return (
																					($e.errors = [
																						{ params: { type: "number" } }
																					]),
																					!1
																				);
																			p = e === l;
																		} else p = !0;
																		if (p) {
																			if (void 0 !== t.chunkOrigins) {
																				const e = l;
																				if ("boolean" != typeof t.chunkOrigins)
																					return (
																						($e.errors = [
																							{ params: { type: "boolean" } }
																						]),
																						!1
																					);
																				p = e === l;
																			} else p = !0;
																			if (p) {
																				if (void 0 !== t.chunkRelations) {
																					const e = l;
																					if (
																						"boolean" != typeof t.chunkRelations
																					)
																						return (
																							($e.errors = [
																								{ params: { type: "boolean" } }
																							]),
																							!1
																						);
																					p = e === l;
																				} else p = !0;
																				if (p) {
																					if (void 0 !== t.chunks) {
																						const e = l;
																						if ("boolean" != typeof t.chunks)
																							return (
																								($e.errors = [
																									{
																										params: { type: "boolean" }
																									}
																								]),
																								!1
																							);
																						p = e === l;
																					} else p = !0;
																					if (p) {
																						if (void 0 !== t.chunksSort) {
																							const e = l;
																							if (
																								"string" != typeof t.chunksSort
																							)
																								return (
																									($e.errors = [
																										{
																											params: { type: "string" }
																										}
																									]),
																									!1
																								);
																							p = e === l;
																						} else p = !0;
																						if (p) {
																							if (void 0 !== t.colors) {
																								let e = t.colors;
																								const n = l,
																									r = l;
																								let s = !1;
																								const o = l;
																								if ("boolean" != typeof e) {
																									const e = {
																										params: { type: "boolean" }
																									};
																									null === i
																										? (i = [e])
																										: i.push(e),
																										l++;
																								}
																								var u = o === l;
																								if (((s = s || u), !s)) {
																									const t = l;
																									if (l === t)
																										if (
																											e &&
																											"object" == typeof e &&
																											!Array.isArray(e)
																										) {
																											const t = l;
																											for (const t in e)
																												if (
																													"bold" !== t &&
																													"cyan" !== t &&
																													"green" !== t &&
																													"magenta" !== t &&
																													"red" !== t &&
																													"yellow" !== t
																												) {
																													const e = {
																														params: {
																															additionalProperty:
																																t
																														}
																													};
																													null === i
																														? (i = [e])
																														: i.push(e),
																														l++;
																													break;
																												}
																											if (t === l) {
																												if (void 0 !== e.bold) {
																													const t = l;
																													if (
																														"string" !=
																														typeof e.bold
																													) {
																														const e = {
																															params: {
																																type: "string"
																															}
																														};
																														null === i
																															? (i = [e])
																															: i.push(e),
																															l++;
																													}
																													var f = t === l;
																												} else f = !0;
																												if (f) {
																													if (
																														void 0 !== e.cyan
																													) {
																														const t = l;
																														if (
																															"string" !=
																															typeof e.cyan
																														) {
																															const e = {
																																params: {
																																	type: "string"
																																}
																															};
																															null === i
																																? (i = [e])
																																: i.push(e),
																																l++;
																														}
																														f = t === l;
																													} else f = !0;
																													if (f) {
																														if (
																															void 0 !== e.green
																														) {
																															const t = l;
																															if (
																																"string" !=
																																typeof e.green
																															) {
																																const e = {
																																	params: {
																																		type: "string"
																																	}
																																};
																																null === i
																																	? (i = [e])
																																	: i.push(e),
																																	l++;
																															}
																															f = t === l;
																														} else f = !0;
																														if (f) {
																															if (
																																void 0 !==
																																e.magenta
																															) {
																																const t = l;
																																if (
																																	"string" !=
																																	typeof e.magenta
																																) {
																																	const e = {
																																		params: {
																																			type: "string"
																																		}
																																	};
																																	null === i
																																		? (i = [e])
																																		: i.push(e),
																																		l++;
																																}
																																f = t === l;
																															} else f = !0;
																															if (f) {
																																if (
																																	void 0 !==
																																	e.red
																																) {
																																	const t = l;
																																	if (
																																		"string" !=
																																		typeof e.red
																																	) {
																																		const e = {
																																			params: {
																																				type: "string"
																																			}
																																		};
																																		null === i
																																			? (i = [
																																					e
																																			  ])
																																			: i.push(
																																					e
																																			  ),
																																			l++;
																																	}
																																	f = t === l;
																																} else f = !0;
																																if (f)
																																	if (
																																		void 0 !==
																																		e.yellow
																																	) {
																																		const t = l;
																																		if (
																																			"string" !=
																																			typeof e.yellow
																																		) {
																																			const e =
																																				{
																																					params:
																																						{
																																							type: "string"
																																						}
																																				};
																																			null === i
																																				? (i = [
																																						e
																																				  ])
																																				: i.push(
																																						e
																																				  ),
																																				l++;
																																		}
																																		f = t === l;
																																	} else f = !0;
																															}
																														}
																													}
																												}
																											}
																										} else {
																											const e = {
																												params: {
																													type: "object"
																												}
																											};
																											null === i
																												? (i = [e])
																												: i.push(e),
																												l++;
																										}
																									(u = t === l), (s = s || u);
																								}
																								if (!s) {
																									const e = { params: {} };
																									return (
																										null === i
																											? (i = [e])
																											: i.push(e),
																										l++,
																										($e.errors = i),
																										!1
																									);
																								}
																								(l = r),
																									null !== i &&
																										(r
																											? (i.length = r)
																											: (i = null)),
																									(p = n === l);
																							} else p = !0;
																							if (p) {
																								if (void 0 !== t.context) {
																									let n = t.context;
																									const r = l;
																									if (l === r) {
																										if ("string" != typeof n)
																											return (
																												($e.errors = [
																													{
																														params: {
																															type: "string"
																														}
																													}
																												]),
																												!1
																											);
																										if (
																											n.includes("!") ||
																											!0 !== e.test(n)
																										)
																											return (
																												($e.errors = [
																													{ params: {} }
																												]),
																												!1
																											);
																									}
																									p = r === l;
																								} else p = !0;
																								if (p) {
																									if (
																										void 0 !==
																										t.dependentModules
																									) {
																										const e = l;
																										if (
																											"boolean" !=
																											typeof t.dependentModules
																										)
																											return (
																												($e.errors = [
																													{
																														params: {
																															type: "boolean"
																														}
																													}
																												]),
																												!1
																											);
																										p = e === l;
																									} else p = !0;
																									if (p) {
																										if (void 0 !== t.depth) {
																											const e = l;
																											if (
																												"boolean" !=
																												typeof t.depth
																											)
																												return (
																													($e.errors = [
																														{
																															params: {
																																type: "boolean"
																															}
																														}
																													]),
																													!1
																												);
																											p = e === l;
																										} else p = !0;
																										if (p) {
																											if (
																												void 0 !== t.entrypoints
																											) {
																												let e = t.entrypoints;
																												const n = l,
																													r = l;
																												let s = !1;
																												const o = l;
																												if ("auto" !== e) {
																													const e = {
																														params: {}
																													};
																													null === i
																														? (i = [e])
																														: i.push(e),
																														l++;
																												}
																												var c = o === l;
																												if (
																													((s = s || c), !s)
																												) {
																													const t = l;
																													if (
																														"boolean" !=
																														typeof e
																													) {
																														const e = {
																															params: {
																																type: "boolean"
																															}
																														};
																														null === i
																															? (i = [e])
																															: i.push(e),
																															l++;
																													}
																													(c = t === l),
																														(s = s || c);
																												}
																												if (!s) {
																													const e = {
																														params: {}
																													};
																													return (
																														null === i
																															? (i = [e])
																															: i.push(e),
																														l++,
																														($e.errors = i),
																														!1
																													);
																												}
																												(l = r),
																													null !== i &&
																														(r
																															? (i.length = r)
																															: (i = null)),
																													(p = n === l);
																											} else p = !0;
																											if (p) {
																												if (void 0 !== t.env) {
																													const e = l;
																													if (
																														"boolean" !=
																														typeof t.env
																													)
																														return (
																															($e.errors = [
																																{
																																	params: {
																																		type: "boolean"
																																	}
																																}
																															]),
																															!1
																														);
																													p = e === l;
																												} else p = !0;
																												if (p) {
																													if (
																														void 0 !==
																														t.errorDetails
																													) {
																														let e =
																															t.errorDetails;
																														const n = l,
																															r = l;
																														let s = !1;
																														const o = l;
																														if ("auto" !== e) {
																															const e = {
																																params: {}
																															};
																															null === i
																																? (i = [e])
																																: i.push(e),
																																l++;
																														}
																														var m = o === l;
																														if (
																															((s = s || m), !s)
																														) {
																															const t = l;
																															if (
																																"boolean" !=
																																typeof e
																															) {
																																const e = {
																																	params: {
																																		type: "boolean"
																																	}
																																};
																																null === i
																																	? (i = [e])
																																	: i.push(e),
																																	l++;
																															}
																															(m = t === l),
																																(s = s || m);
																														}
																														if (!s) {
																															const e = {
																																params: {}
																															};
																															return (
																																null === i
																																	? (i = [e])
																																	: i.push(e),
																																l++,
																																($e.errors = i),
																																!1
																															);
																														}
																														(l = r),
																															null !== i &&
																																(r
																																	? (i.length =
																																			r)
																																	: (i = null)),
																															(p = n === l);
																													} else p = !0;
																													if (p) {
																														if (
																															void 0 !==
																															t.errorStack
																														) {
																															const e = l;
																															if (
																																"boolean" !=
																																typeof t.errorStack
																															)
																																return (
																																	($e.errors = [
																																		{
																																			params: {
																																				type: "boolean"
																																			}
																																		}
																																	]),
																																	!1
																																);
																															p = e === l;
																														} else p = !0;
																														if (p) {
																															if (
																																void 0 !==
																																t.errors
																															) {
																																const e = l;
																																if (
																																	"boolean" !=
																																	typeof t.errors
																																)
																																	return (
																																		($e.errors =
																																			[
																																				{
																																					params:
																																						{
																																							type: "boolean"
																																						}
																																				}
																																			]),
																																		!1
																																	);
																																p = e === l;
																															} else p = !0;
																															if (p) {
																																if (
																																	void 0 !==
																																	t.errorsCount
																																) {
																																	const e = l;
																																	if (
																																		"boolean" !=
																																		typeof t.errorsCount
																																	)
																																		return (
																																			($e.errors =
																																				[
																																					{
																																						params:
																																							{
																																								type: "boolean"
																																							}
																																					}
																																				]),
																																			!1
																																		);
																																	p = e === l;
																																} else p = !0;
																																if (p) {
																																	if (
																																		void 0 !==
																																		t.exclude
																																	) {
																																		let e =
																																			t.exclude;
																																		const n = l,
																																			s = l;
																																		let o = !1;
																																		const u = l;
																																		if (
																																			"boolean" !=
																																			typeof e
																																		) {
																																			const e =
																																				{
																																					params:
																																						{
																																							type: "boolean"
																																						}
																																				};
																																			null === i
																																				? (i = [
																																						e
																																				  ])
																																				: i.push(
																																						e
																																				  ),
																																				l++;
																																		}
																																		var y =
																																			u === l;
																																		if (
																																			((o =
																																				o || y),
																																			!o)
																																		) {
																																			const n =
																																				l;
																																			Fe(e, {
																																				instancePath:
																																					r +
																																					"/exclude",
																																				parentData:
																																					t,
																																				parentDataProperty:
																																					"exclude",
																																				rootData:
																																					a
																																			}) ||
																																				((i =
																																					null ===
																																					i
																																						? Fe.errors
																																						: i.concat(
																																								Fe.errors
																																						  )),
																																				(l =
																																					i.length)),
																																				(y =
																																					n ===
																																					l),
																																				(o =
																																					o ||
																																					y);
																																		}
																																		if (!o) {
																																			const e =
																																				{
																																					params:
																																						{}
																																				};
																																			return (
																																				null ===
																																				i
																																					? (i =
																																							[
																																								e
																																							])
																																					: i.push(
																																							e
																																					  ),
																																				l++,
																																				($e.errors =
																																					i),
																																				!1
																																			);
																																		}
																																		(l = s),
																																			null !==
																																				i &&
																																				(s
																																					? (i.length =
																																							s)
																																					: (i =
																																							null)),
																																			(p =
																																				n ===
																																				l);
																																	} else p = !0;
																																	if (p) {
																																		if (
																																			void 0 !==
																																			t.excludeAssets
																																		) {
																																			const e =
																																					l,
																																				n = l;
																																			let s =
																																					!1,
																																				o =
																																					null;
																																			const u =
																																				l;
																																			if (
																																				(Re(
																																					t.excludeAssets,
																																					{
																																						instancePath:
																																							r +
																																							"/excludeAssets",
																																						parentData:
																																							t,
																																						parentDataProperty:
																																							"excludeAssets",
																																						rootData:
																																							a
																																					}
																																				) ||
																																					((i =
																																						null ===
																																						i
																																							? Re.errors
																																							: i.concat(
																																									Re.errors
																																							  )),
																																					(l =
																																						i.length)),
																																				u ===
																																					l &&
																																					((s =
																																						!0),
																																					(o = 0)),
																																				!s)
																																			) {
																																				const e =
																																					{
																																						params:
																																							{
																																								passingSchemas:
																																									o
																																							}
																																					};
																																				return (
																																					null ===
																																					i
																																						? (i =
																																								[
																																									e
																																								])
																																						: i.push(
																																								e
																																						  ),
																																					l++,
																																					($e.errors =
																																						i),
																																					!1
																																				);
																																			}
																																			(l = n),
																																				null !==
																																					i &&
																																					(n
																																						? (i.length =
																																								n)
																																						: (i =
																																								null)),
																																				(p =
																																					e ===
																																					l);
																																		} else
																																			p = !0;
																																		if (p) {
																																			if (
																																				void 0 !==
																																				t.excludeModules
																																			) {
																																				let e =
																																					t.excludeModules;
																																				const n =
																																						l,
																																					s = l;
																																				let o =
																																					!1;
																																				const u =
																																					l;
																																				if (
																																					"boolean" !=
																																					typeof e
																																				) {
																																					const e =
																																						{
																																							params:
																																								{
																																									type: "boolean"
																																								}
																																						};
																																					null ===
																																					i
																																						? (i =
																																								[
																																									e
																																								])
																																						: i.push(
																																								e
																																						  ),
																																						l++;
																																				}
																																				var h =
																																					u ===
																																					l;
																																				if (
																																					((o =
																																						o ||
																																						h),
																																					!o)
																																				) {
																																					const n =
																																						l;
																																					Fe(
																																						e,
																																						{
																																							instancePath:
																																								r +
																																								"/excludeModules",
																																							parentData:
																																								t,
																																							parentDataProperty:
																																								"excludeModules",
																																							rootData:
																																								a
																																						}
																																					) ||
																																						((i =
																																							null ===
																																							i
																																								? Fe.errors
																																								: i.concat(
																																										Fe.errors
																																								  )),
																																						(l =
																																							i.length)),
																																						(h =
																																							n ===
																																							l),
																																						(o =
																																							o ||
																																							h);
																																				}
																																				if (
																																					!o
																																				) {
																																					const e =
																																						{
																																							params:
																																								{}
																																						};
																																					return (
																																						null ===
																																						i
																																							? (i =
																																									[
																																										e
																																									])
																																							: i.push(
																																									e
																																							  ),
																																						l++,
																																						($e.errors =
																																							i),
																																						!1
																																					);
																																				}
																																				(l = s),
																																					null !==
																																						i &&
																																						(s
																																							? (i.length =
																																									s)
																																							: (i =
																																									null)),
																																					(p =
																																						n ===
																																						l);
																																			} else
																																				p = !0;
																																			if (p) {
																																				if (
																																					void 0 !==
																																					t.groupAssetsByChunk
																																				) {
																																					const e =
																																						l;
																																					if (
																																						"boolean" !=
																																						typeof t.groupAssetsByChunk
																																					)
																																						return (
																																							($e.errors =
																																								[
																																									{
																																										params:
																																											{
																																												type: "boolean"
																																											}
																																									}
																																								]),
																																							!1
																																						);
																																					p =
																																						e ===
																																						l;
																																				} else
																																					p =
																																						!0;
																																				if (p) {
																																					if (
																																						void 0 !==
																																						t.groupAssetsByEmitStatus
																																					) {
																																						const e =
																																							l;
																																						if (
																																							"boolean" !=
																																							typeof t.groupAssetsByEmitStatus
																																						)
																																							return (
																																								($e.errors =
																																									[
																																										{
																																											params:
																																												{
																																													type: "boolean"
																																												}
																																										}
																																									]),
																																								!1
																																							);
																																						p =
																																							e ===
																																							l;
																																					} else
																																						p =
																																							!0;
																																					if (
																																						p
																																					) {
																																						if (
																																							void 0 !==
																																							t.groupAssetsByExtension
																																						) {
																																							const e =
																																								l;
																																							if (
																																								"boolean" !=
																																								typeof t.groupAssetsByExtension
																																							)
																																								return (
																																									($e.errors =
																																										[
																																											{
																																												params:
																																													{
																																														type: "boolean"
																																													}
																																											}
																																										]),
																																									!1
																																								);
																																							p =
																																								e ===
																																								l;
																																						} else
																																							p =
																																								!0;
																																						if (
																																							p
																																						) {
																																							if (
																																								void 0 !==
																																								t.groupAssetsByInfo
																																							) {
																																								const e =
																																									l;
																																								if (
																																									"boolean" !=
																																									typeof t.groupAssetsByInfo
																																								)
																																									return (
																																										($e.errors =
																																											[
																																												{
																																													params:
																																														{
																																															type: "boolean"
																																														}
																																												}
																																											]),
																																										!1
																																									);
																																								p =
																																									e ===
																																									l;
																																							} else
																																								p =
																																									!0;
																																							if (
																																								p
																																							) {
																																								if (
																																									void 0 !==
																																									t.groupAssetsByPath
																																								) {
																																									const e =
																																										l;
																																									if (
																																										"boolean" !=
																																										typeof t.groupAssetsByPath
																																									)
																																										return (
																																											($e.errors =
																																												[
																																													{
																																														params:
																																															{
																																																type: "boolean"
																																															}
																																													}
																																												]),
																																											!1
																																										);
																																									p =
																																										e ===
																																										l;
																																								} else
																																									p =
																																										!0;
																																								if (
																																									p
																																								) {
																																									if (
																																										void 0 !==
																																										t.groupModulesByAttributes
																																									) {
																																										const e =
																																											l;
																																										if (
																																											"boolean" !=
																																											typeof t.groupModulesByAttributes
																																										)
																																											return (
																																												($e.errors =
																																													[
																																														{
																																															params:
																																																{
																																																	type: "boolean"
																																																}
																																														}
																																													]),
																																												!1
																																											);
																																										p =
																																											e ===
																																											l;
																																									} else
																																										p =
																																											!0;
																																									if (
																																										p
																																									) {
																																										if (
																																											void 0 !==
																																											t.groupModulesByCacheStatus
																																										) {
																																											const e =
																																												l;
																																											if (
																																												"boolean" !=
																																												typeof t.groupModulesByCacheStatus
																																											)
																																												return (
																																													($e.errors =
																																														[
																																															{
																																																params:
																																																	{
																																																		type: "boolean"
																																																	}
																																															}
																																														]),
																																													!1
																																												);
																																											p =
																																												e ===
																																												l;
																																										} else
																																											p =
																																												!0;
																																										if (
																																											p
																																										) {
																																											if (
																																												void 0 !==
																																												t.groupModulesByExtension
																																											) {
																																												const e =
																																													l;
																																												if (
																																													"boolean" !=
																																													typeof t.groupModulesByExtension
																																												)
																																													return (
																																														($e.errors =
																																															[
																																																{
																																																	params:
																																																		{
																																																			type: "boolean"
																																																		}
																																																}
																																															]),
																																														!1
																																													);
																																												p =
																																													e ===
																																													l;
																																											} else
																																												p =
																																													!0;
																																											if (
																																												p
																																											) {
																																												if (
																																													void 0 !==
																																													t.groupModulesByLayer
																																												) {
																																													const e =
																																														l;
																																													if (
																																														"boolean" !=
																																														typeof t.groupModulesByLayer
																																													)
																																														return (
																																															($e.errors =
																																																[
																																																	{
																																																		params:
																																																			{
																																																				type: "boolean"
																																																			}
																																																	}
																																																]),
																																															!1
																																														);
																																													p =
																																														e ===
																																														l;
																																												} else
																																													p =
																																														!0;
																																												if (
																																													p
																																												) {
																																													if (
																																														void 0 !==
																																														t.groupModulesByPath
																																													) {
																																														const e =
																																															l;
																																														if (
																																															"boolean" !=
																																															typeof t.groupModulesByPath
																																														)
																																															return (
																																																($e.errors =
																																																	[
																																																		{
																																																			params:
																																																				{
																																																					type: "boolean"
																																																				}
																																																		}
																																																	]),
																																																!1
																																															);
																																														p =
																																															e ===
																																															l;
																																													} else
																																														p =
																																															!0;
																																													if (
																																														p
																																													) {
																																														if (
																																															void 0 !==
																																															t.groupModulesByType
																																														) {
																																															const e =
																																																l;
																																															if (
																																																"boolean" !=
																																																typeof t.groupModulesByType
																																															)
																																																return (
																																																	($e.errors =
																																																		[
																																																			{
																																																				params:
																																																					{
																																																						type: "boolean"
																																																					}
																																																			}
																																																		]),
																																																	!1
																																																);
																																															p =
																																																e ===
																																																l;
																																														} else
																																															p =
																																																!0;
																																														if (
																																															p
																																														) {
																																															if (
																																																void 0 !==
																																																t.groupReasonsByOrigin
																																															) {
																																																const e =
																																																	l;
																																																if (
																																																	"boolean" !=
																																																	typeof t.groupReasonsByOrigin
																																																)
																																																	return (
																																																		($e.errors =
																																																			[
																																																				{
																																																					params:
																																																						{
																																																							type: "boolean"
																																																						}
																																																				}
																																																			]),
																																																		!1
																																																	);
																																																p =
																																																	e ===
																																																	l;
																																															} else
																																																p =
																																																	!0;
																																															if (
																																																p
																																															) {
																																																if (
																																																	void 0 !==
																																																	t.hash
																																																) {
																																																	const e =
																																																		l;
																																																	if (
																																																		"boolean" !=
																																																		typeof t.hash
																																																	)
																																																		return (
																																																			($e.errors =
																																																				[
																																																					{
																																																						params:
																																																							{
																																																								type: "boolean"
																																																							}
																																																					}
																																																				]),
																																																			!1
																																																		);
																																																	p =
																																																		e ===
																																																		l;
																																																} else
																																																	p =
																																																		!0;
																																																if (
																																																	p
																																																) {
																																																	if (
																																																		void 0 !==
																																																		t.ids
																																																	) {
																																																		const e =
																																																			l;
																																																		if (
																																																			"boolean" !=
																																																			typeof t.ids
																																																		)
																																																			return (
																																																				($e.errors =
																																																					[
																																																						{
																																																							params:
																																																								{
																																																									type: "boolean"
																																																								}
																																																						}
																																																					]),
																																																				!1
																																																			);
																																																		p =
																																																			e ===
																																																			l;
																																																	} else
																																																		p =
																																																			!0;
																																																	if (
																																																		p
																																																	) {
																																																		if (
																																																			void 0 !==
																																																			t.logging
																																																		) {
																																																			let e =
																																																				t.logging;
																																																			const n =
																																																					l,
																																																				r =
																																																					l;
																																																			let s =
																																																				!1;
																																																			const o =
																																																				l;
																																																			if (
																																																				"none" !==
																																																					e &&
																																																				"error" !==
																																																					e &&
																																																				"warn" !==
																																																					e &&
																																																				"info" !==
																																																					e &&
																																																				"log" !==
																																																					e &&
																																																				"verbose" !==
																																																					e
																																																			) {
																																																				const e =
																																																					{
																																																						params:
																																																							{}
																																																					};
																																																				null ===
																																																				i
																																																					? (i =
																																																							[
																																																								e
																																																							])
																																																					: i.push(
																																																							e
																																																					  ),
																																																					l++;
																																																			}
																																																			var d =
																																																				o ===
																																																				l;
																																																			if (
																																																				((s =
																																																					s ||
																																																					d),
																																																				!s)
																																																			) {
																																																				const t =
																																																					l;
																																																				if (
																																																					"boolean" !=
																																																					typeof e
																																																				) {
																																																					const e =
																																																						{
																																																							params:
																																																								{
																																																									type: "boolean"
																																																								}
																																																						};
																																																					null ===
																																																					i
																																																						? (i =
																																																								[
																																																									e
																																																								])
																																																						: i.push(
																																																								e
																																																						  ),
																																																						l++;
																																																				}
																																																				(d =
																																																					t ===
																																																					l),
																																																					(s =
																																																						s ||
																																																						d);
																																																			}
																																																			if (
																																																				!s
																																																			) {
																																																				const e =
																																																					{
																																																						params:
																																																							{}
																																																					};
																																																				return (
																																																					null ===
																																																					i
																																																						? (i =
																																																								[
																																																									e
																																																								])
																																																						: i.push(
																																																								e
																																																						  ),
																																																					l++,
																																																					($e.errors =
																																																						i),
																																																					!1
																																																				);
																																																			}
																																																			(l =
																																																				r),
																																																				null !==
																																																					i &&
																																																					(r
																																																						? (i.length =
																																																								r)
																																																						: (i =
																																																								null)),
																																																				(p =
																																																					n ===
																																																					l);
																																																		} else
																																																			p =
																																																				!0;
																																																		if (
																																																			p
																																																		) {
																																																			if (
																																																				void 0 !==
																																																				t.loggingDebug
																																																			) {
																																																				let e =
																																																					t.loggingDebug;
																																																				const n =
																																																						l,
																																																					s =
																																																						l;
																																																				let o =
																																																					!1;
																																																				const u =
																																																					l;
																																																				if (
																																																					"boolean" !=
																																																					typeof e
																																																				) {
																																																					const e =
																																																						{
																																																							params:
																																																								{
																																																									type: "boolean"
																																																								}
																																																						};
																																																					null ===
																																																					i
																																																						? (i =
																																																								[
																																																									e
																																																								])
																																																						: i.push(
																																																								e
																																																						  ),
																																																						l++;
																																																				}
																																																				var g =
																																																					u ===
																																																					l;
																																																				if (
																																																					((o =
																																																						o ||
																																																						g),
																																																					!o)
																																																				) {
																																																					const n =
																																																						l;
																																																					O(
																																																						e,
																																																						{
																																																							instancePath:
																																																								r +
																																																								"/loggingDebug",
																																																							parentData:
																																																								t,
																																																							parentDataProperty:
																																																								"loggingDebug",
																																																							rootData:
																																																								a
																																																						}
																																																					) ||
																																																						((i =
																																																							null ===
																																																							i
																																																								? O.errors
																																																								: i.concat(
																																																										O.errors
																																																								  )),
																																																						(l =
																																																							i.length)),
																																																						(g =
																																																							n ===
																																																							l),
																																																						(o =
																																																							o ||
																																																							g);
																																																				}
																																																				if (
																																																					!o
																																																				) {
																																																					const e =
																																																						{
																																																							params:
																																																								{}
																																																						};
																																																					return (
																																																						null ===
																																																						i
																																																							? (i =
																																																									[
																																																										e
																																																									])
																																																							: i.push(
																																																									e
																																																							  ),
																																																						l++,
																																																						($e.errors =
																																																							i),
																																																						!1
																																																					);
																																																				}
																																																				(l =
																																																					s),
																																																					null !==
																																																						i &&
																																																						(s
																																																							? (i.length =
																																																									s)
																																																							: (i =
																																																									null)),
																																																					(p =
																																																						n ===
																																																						l);
																																																			} else
																																																				p =
																																																					!0;
																																																			if (
																																																				p
																																																			) {
																																																				if (
																																																					void 0 !==
																																																					t.loggingTrace
																																																				) {
																																																					const e =
																																																						l;
																																																					if (
																																																						"boolean" !=
																																																						typeof t.loggingTrace
																																																					)
																																																						return (
																																																							($e.errors =
																																																								[
																																																									{
																																																										params:
																																																											{
																																																												type: "boolean"
																																																											}
																																																									}
																																																								]),
																																																							!1
																																																						);
																																																					p =
																																																						e ===
																																																						l;
																																																				} else
																																																					p =
																																																						!0;
																																																				if (
																																																					p
																																																				) {
																																																					if (
																																																						void 0 !==
																																																						t.moduleAssets
																																																					) {
																																																						const e =
																																																							l;
																																																						if (
																																																							"boolean" !=
																																																							typeof t.moduleAssets
																																																						)
																																																							return (
																																																								($e.errors =
																																																									[
																																																										{
																																																											params:
																																																												{
																																																													type: "boolean"
																																																												}
																																																										}
																																																									]),
																																																								!1
																																																							);
																																																						p =
																																																							e ===
																																																							l;
																																																					} else
																																																						p =
																																																							!0;
																																																					if (
																																																						p
																																																					) {
																																																						if (
																																																							void 0 !==
																																																							t.moduleTrace
																																																						) {
																																																							const e =
																																																								l;
																																																							if (
																																																								"boolean" !=
																																																								typeof t.moduleTrace
																																																							)
																																																								return (
																																																									($e.errors =
																																																										[
																																																											{
																																																												params:
																																																													{
																																																														type: "boolean"
																																																													}
																																																											}
																																																										]),
																																																									!1
																																																								);
																																																							p =
																																																								e ===
																																																								l;
																																																						} else
																																																							p =
																																																								!0;
																																																						if (
																																																							p
																																																						) {
																																																							if (
																																																								void 0 !==
																																																								t.modules
																																																							) {
																																																								const e =
																																																									l;
																																																								if (
																																																									"boolean" !=
																																																									typeof t.modules
																																																								)
																																																									return (
																																																										($e.errors =
																																																											[
																																																												{
																																																													params:
																																																														{
																																																															type: "boolean"
																																																														}
																																																												}
																																																											]),
																																																										!1
																																																									);
																																																								p =
																																																									e ===
																																																									l;
																																																							} else
																																																								p =
																																																									!0;
																																																							if (
																																																								p
																																																							) {
																																																								if (
																																																									void 0 !==
																																																									t.modulesSort
																																																								) {
																																																									const e =
																																																										l;
																																																									if (
																																																										"string" !=
																																																										typeof t.modulesSort
																																																									)
																																																										return (
																																																											($e.errors =
																																																												[
																																																													{
																																																														params:
																																																															{
																																																																type: "string"
																																																															}
																																																													}
																																																												]),
																																																											!1
																																																										);
																																																									p =
																																																										e ===
																																																										l;
																																																								} else
																																																									p =
																																																										!0;
																																																								if (
																																																									p
																																																								) {
																																																									if (
																																																										void 0 !==
																																																										t.modulesSpace
																																																									) {
																																																										const e =
																																																											l;
																																																										if (
																																																											"number" !=
																																																											typeof t.modulesSpace
																																																										)
																																																											return (
																																																												($e.errors =
																																																													[
																																																														{
																																																															params:
																																																																{
																																																																	type: "number"
																																																																}
																																																														}
																																																													]),
																																																												!1
																																																											);
																																																										p =
																																																											e ===
																																																											l;
																																																									} else
																																																										p =
																																																											!0;
																																																									if (
																																																										p
																																																									) {
																																																										if (
																																																											void 0 !==
																																																											t.nestedModules
																																																										) {
																																																											const e =
																																																												l;
																																																											if (
																																																												"boolean" !=
																																																												typeof t.nestedModules
																																																											)
																																																												return (
																																																													($e.errors =
																																																														[
																																																															{
																																																																params:
																																																																	{
																																																																		type: "boolean"
																																																																	}
																																																															}
																																																														]),
																																																													!1
																																																												);
																																																											p =
																																																												e ===
																																																												l;
																																																										} else
																																																											p =
																																																												!0;
																																																										if (
																																																											p
																																																										) {
																																																											if (
																																																												void 0 !==
																																																												t.nestedModulesSpace
																																																											) {
																																																												const e =
																																																													l;
																																																												if (
																																																													"number" !=
																																																													typeof t.nestedModulesSpace
																																																												)
																																																													return (
																																																														($e.errors =
																																																															[
																																																																{
																																																																	params:
																																																																		{
																																																																			type: "number"
																																																																		}
																																																																}
																																																															]),
																																																														!1
																																																													);
																																																												p =
																																																													e ===
																																																													l;
																																																											} else
																																																												p =
																																																													!0;
																																																											if (
																																																												p
																																																											) {
																																																												if (
																																																													void 0 !==
																																																													t.optimizationBailout
																																																												) {
																																																													const e =
																																																														l;
																																																													if (
																																																														"boolean" !=
																																																														typeof t.optimizationBailout
																																																													)
																																																														return (
																																																															($e.errors =
																																																																[
																																																																	{
																																																																		params:
																																																																			{
																																																																				type: "boolean"
																																																																			}
																																																																	}
																																																																]),
																																																															!1
																																																														);
																																																													p =
																																																														e ===
																																																														l;
																																																												} else
																																																													p =
																																																														!0;
																																																												if (
																																																													p
																																																												) {
																																																													if (
																																																														void 0 !==
																																																														t.orphanModules
																																																													) {
																																																														const e =
																																																															l;
																																																														if (
																																																															"boolean" !=
																																																															typeof t.orphanModules
																																																														)
																																																															return (
																																																																($e.errors =
																																																																	[
																																																																		{
																																																																			params:
																																																																				{
																																																																					type: "boolean"
																																																																				}
																																																																		}
																																																																	]),
																																																																!1
																																																															);
																																																														p =
																																																															e ===
																																																															l;
																																																													} else
																																																														p =
																																																															!0;
																																																													if (
																																																														p
																																																													) {
																																																														if (
																																																															void 0 !==
																																																															t.outputPath
																																																														) {
																																																															const e =
																																																																l;
																																																															if (
																																																																"boolean" !=
																																																																typeof t.outputPath
																																																															)
																																																																return (
																																																																	($e.errors =
																																																																		[
																																																																			{
																																																																				params:
																																																																					{
																																																																						type: "boolean"
																																																																					}
																																																																			}
																																																																		]),
																																																																	!1
																																																																);
																																																															p =
																																																																e ===
																																																																l;
																																																														} else
																																																															p =
																																																																!0;
																																																														if (
																																																															p
																																																														) {
																																																															if (
																																																																void 0 !==
																																																																t.performance
																																																															) {
																																																																const e =
																																																																	l;
																																																																if (
																																																																	"boolean" !=
																																																																	typeof t.performance
																																																																)
																																																																	return (
																																																																		($e.errors =
																																																																			[
																																																																				{
																																																																					params:
																																																																						{
																																																																							type: "boolean"
																																																																						}
																																																																				}
																																																																			]),
																																																																		!1
																																																																	);
																																																																p =
																																																																	e ===
																																																																	l;
																																																															} else
																																																																p =
																																																																	!0;
																																																															if (
																																																																p
																																																															) {
																																																																if (
																																																																	void 0 !==
																																																																	t.preset
																																																																) {
																																																																	let e =
																																																																		t.preset;
																																																																	const n =
																																																																			l,
																																																																		r =
																																																																			l;
																																																																	let s =
																																																																		!1;
																																																																	const o =
																																																																		l;
																																																																	if (
																																																																		"boolean" !=
																																																																		typeof e
																																																																	) {
																																																																		const e =
																																																																			{
																																																																				params:
																																																																					{
																																																																						type: "boolean"
																																																																					}
																																																																			};
																																																																		null ===
																																																																		i
																																																																			? (i =
																																																																					[
																																																																						e
																																																																					])
																																																																			: i.push(
																																																																					e
																																																																			  ),
																																																																			l++;
																																																																	}
																																																																	var b =
																																																																		o ===
																																																																		l;
																																																																	if (
																																																																		((s =
																																																																			s ||
																																																																			b),
																																																																		!s)
																																																																	) {
																																																																		const t =
																																																																			l;
																																																																		if (
																																																																			"string" !=
																																																																			typeof e
																																																																		) {
																																																																			const e =
																																																																				{
																																																																					params:
																																																																						{
																																																																							type: "string"
																																																																						}
																																																																				};
																																																																			null ===
																																																																			i
																																																																				? (i =
																																																																						[
																																																																							e
																																																																						])
																																																																				: i.push(
																																																																						e
																																																																				  ),
																																																																				l++;
																																																																		}
																																																																		(b =
																																																																			t ===
																																																																			l),
																																																																			(s =
																																																																				s ||
																																																																				b);
																																																																	}
																																																																	if (
																																																																		!s
																																																																	) {
																																																																		const e =
																																																																			{
																																																																				params:
																																																																					{}
																																																																			};
																																																																		return (
																																																																			null ===
																																																																			i
																																																																				? (i =
																																																																						[
																																																																							e
																																																																						])
																																																																				: i.push(
																																																																						e
																																																																				  ),
																																																																			l++,
																																																																			($e.errors =
																																																																				i),
																																																																			!1
																																																																		);
																																																																	}
																																																																	(l =
																																																																		r),
																																																																		null !==
																																																																			i &&
																																																																			(r
																																																																				? (i.length =
																																																																						r)
																																																																				: (i =
																																																																						null)),
																																																																		(p =
																																																																			n ===
																																																																			l);
																																																																} else
																																																																	p =
																																																																		!0;
																																																																if (
																																																																	p
																																																																) {
																																																																	if (
																																																																		void 0 !==
																																																																		t.providedExports
																																																																	) {
																																																																		const e =
																																																																			l;
																																																																		if (
																																																																			"boolean" !=
																																																																			typeof t.providedExports
																																																																		)
																																																																			return (
																																																																				($e.errors =
																																																																					[
																																																																						{
																																																																							params:
																																																																								{
																																																																									type: "boolean"
																																																																								}
																																																																						}
																																																																					]),
																																																																				!1
																																																																			);
																																																																		p =
																																																																			e ===
																																																																			l;
																																																																	} else
																																																																		p =
																																																																			!0;
																																																																	if (
																																																																		p
																																																																	) {
																																																																		if (
																																																																			void 0 !==
																																																																			t.publicPath
																																																																		) {
																																																																			const e =
																																																																				l;
																																																																			if (
																																																																				"boolean" !=
																																																																				typeof t.publicPath
																																																																			)
																																																																				return (
																																																																					($e.errors =
																																																																						[
																																																																							{
																																																																								params:
																																																																									{
																																																																										type: "boolean"
																																																																									}
																																																																							}
																																																																						]),
																																																																					!1
																																																																				);
																																																																			p =
																																																																				e ===
																																																																				l;
																																																																		} else
																																																																			p =
																																																																				!0;
																																																																		if (
																																																																			p
																																																																		) {
																																																																			if (
																																																																				void 0 !==
																																																																				t.reasons
																																																																			) {
																																																																				const e =
																																																																					l;
																																																																				if (
																																																																					"boolean" !=
																																																																					typeof t.reasons
																																																																				)
																																																																					return (
																																																																						($e.errors =
																																																																							[
																																																																								{
																																																																									params:
																																																																										{
																																																																											type: "boolean"
																																																																										}
																																																																								}
																																																																							]),
																																																																						!1
																																																																					);
																																																																				p =
																																																																					e ===
																																																																					l;
																																																																			} else
																																																																				p =
																																																																					!0;
																																																																			if (
																																																																				p
																																																																			) {
																																																																				if (
																																																																					void 0 !==
																																																																					t.reasonsSpace
																																																																				) {
																																																																					const e =
																																																																						l;
																																																																					if (
																																																																						"number" !=
																																																																						typeof t.reasonsSpace
																																																																					)
																																																																						return (
																																																																							($e.errors =
																																																																								[
																																																																									{
																																																																										params:
																																																																											{
																																																																												type: "number"
																																																																											}
																																																																									}
																																																																								]),
																																																																							!1
																																																																						);
																																																																					p =
																																																																						e ===
																																																																						l;
																																																																				} else
																																																																					p =
																																																																						!0;
																																																																				if (
																																																																					p
																																																																				) {
																																																																					if (
																																																																						void 0 !==
																																																																						t.relatedAssets
																																																																					) {
																																																																						const e =
																																																																							l;
																																																																						if (
																																																																							"boolean" !=
																																																																							typeof t.relatedAssets
																																																																						)
																																																																							return (
																																																																								($e.errors =
																																																																									[
																																																																										{
																																																																											params:
																																																																												{
																																																																													type: "boolean"
																																																																												}
																																																																										}
																																																																									]),
																																																																								!1
																																																																							);
																																																																						p =
																																																																							e ===
																																																																							l;
																																																																					} else
																																																																						p =
																																																																							!0;
																																																																					if (
																																																																						p
																																																																					) {
																																																																						if (
																																																																							void 0 !==
																																																																							t.runtime
																																																																						) {
																																																																							const e =
																																																																								l;
																																																																							if (
																																																																								"boolean" !=
																																																																								typeof t.runtime
																																																																							)
																																																																								return (
																																																																									($e.errors =
																																																																										[
																																																																											{
																																																																												params:
																																																																													{
																																																																														type: "boolean"
																																																																													}
																																																																											}
																																																																										]),
																																																																									!1
																																																																								);
																																																																							p =
																																																																								e ===
																																																																								l;
																																																																						} else
																																																																							p =
																																																																								!0;
																																																																						if (
																																																																							p
																																																																						) {
																																																																							if (
																																																																								void 0 !==
																																																																								t.runtimeModules
																																																																							) {
																																																																								const e =
																																																																									l;
																																																																								if (
																																																																									"boolean" !=
																																																																									typeof t.runtimeModules
																																																																								)
																																																																									return (
																																																																										($e.errors =
																																																																											[
																																																																												{
																																																																													params:
																																																																														{
																																																																															type: "boolean"
																																																																														}
																																																																												}
																																																																											]),
																																																																										!1
																																																																									);
																																																																								p =
																																																																									e ===
																																																																									l;
																																																																							} else
																																																																								p =
																																																																									!0;
																																																																							if (
																																																																								p
																																																																							) {
																																																																								if (
																																																																									void 0 !==
																																																																									t.source
																																																																								) {
																																																																									const e =
																																																																										l;
																																																																									if (
																																																																										"boolean" !=
																																																																										typeof t.source
																																																																									)
																																																																										return (
																																																																											($e.errors =
																																																																												[
																																																																													{
																																																																														params:
																																																																															{
																																																																																type: "boolean"
																																																																															}
																																																																													}
																																																																												]),
																																																																											!1
																																																																										);
																																																																									p =
																																																																										e ===
																																																																										l;
																																																																								} else
																																																																									p =
																																																																										!0;
																																																																								if (
																																																																									p
																																																																								) {
																																																																									if (
																																																																										void 0 !==
																																																																										t.timings
																																																																									) {
																																																																										const e =
																																																																											l;
																																																																										if (
																																																																											"boolean" !=
																																																																											typeof t.timings
																																																																										)
																																																																											return (
																																																																												($e.errors =
																																																																													[
																																																																														{
																																																																															params:
																																																																																{
																																																																																	type: "boolean"
																																																																																}
																																																																														}
																																																																													]),
																																																																												!1
																																																																											);
																																																																										p =
																																																																											e ===
																																																																											l;
																																																																									} else
																																																																										p =
																																																																											!0;
																																																																									if (
																																																																										p
																																																																									) {
																																																																										if (
																																																																											void 0 !==
																																																																											t.usedExports
																																																																										) {
																																																																											const e =
																																																																												l;
																																																																											if (
																																																																												"boolean" !=
																																																																												typeof t.usedExports
																																																																											)
																																																																												return (
																																																																													($e.errors =
																																																																														[
																																																																															{
																																																																																params:
																																																																																	{
																																																																																		type: "boolean"
																																																																																	}
																																																																															}
																																																																														]),
																																																																													!1
																																																																												);
																																																																											p =
																																																																												e ===
																																																																												l;
																																																																										} else
																																																																											p =
																																																																												!0;
																																																																										if (
																																																																											p
																																																																										) {
																																																																											if (
																																																																												void 0 !==
																																																																												t.version
																																																																											) {
																																																																												const e =
																																																																													l;
																																																																												if (
																																																																													"boolean" !=
																																																																													typeof t.version
																																																																												)
																																																																													return (
																																																																														($e.errors =
																																																																															[
																																																																																{
																																																																																	params:
																																																																																		{
																																																																																			type: "boolean"
																																																																																		}
																																																																																}
																																																																															]),
																																																																														!1
																																																																													);
																																																																												p =
																																																																													e ===
																																																																													l;
																																																																											} else
																																																																												p =
																																																																													!0;
																																																																											if (
																																																																												p
																																																																											) {
																																																																												if (
																																																																													void 0 !==
																																																																													t.warnings
																																																																												) {
																																																																													const e =
																																																																														l;
																																																																													if (
																																																																														"boolean" !=
																																																																														typeof t.warnings
																																																																													)
																																																																														return (
																																																																															($e.errors =
																																																																																[
																																																																																	{
																																																																																		params:
																																																																																			{
																																																																																				type: "boolean"
																																																																																			}
																																																																																	}
																																																																																]),
																																																																															!1
																																																																														);
																																																																													p =
																																																																														e ===
																																																																														l;
																																																																												} else
																																																																													p =
																																																																														!0;
																																																																												if (
																																																																													p
																																																																												) {
																																																																													if (
																																																																														void 0 !==
																																																																														t.warningsCount
																																																																													) {
																																																																														const e =
																																																																															l;
																																																																														if (
																																																																															"boolean" !=
																																																																															typeof t.warningsCount
																																																																														)
																																																																															return (
																																																																																($e.errors =
																																																																																	[
																																																																																		{
																																																																																			params:
																																																																																				{
																																																																																					type: "boolean"
																																																																																				}
																																																																																		}
																																																																																	]),
																																																																																!1
																																																																															);
																																																																														p =
																																																																															e ===
																																																																															l;
																																																																													} else
																																																																														p =
																																																																															!0;
																																																																													if (
																																																																														p
																																																																													)
																																																																														if (
																																																																															void 0 !==
																																																																															t.warningsFilter
																																																																														) {
																																																																															const e =
																																																																																	l,
																																																																																n =
																																																																																	l;
																																																																															let s =
																																																																																	!1,
																																																																																o =
																																																																																	null;
																																																																															const u =
																																																																																l;
																																																																															if (
																																																																																(Ee(
																																																																																	t.warningsFilter,
																																																																																	{
																																																																																		instancePath:
																																																																																			r +
																																																																																			"/warningsFilter",
																																																																																		parentData:
																																																																																			t,
																																																																																		parentDataProperty:
																																																																																			"warningsFilter",
																																																																																		rootData:
																																																																																			a
																																																																																	}
																																																																																) ||
																																																																																	((i =
																																																																																		null ===
																																																																																		i
																																																																																			? Ee.errors
																																																																																			: i.concat(
																																																																																					Ee.errors
																																																																																			  )),
																																																																																	(l =
																																																																																		i.length)),
																																																																																u ===
																																																																																	l &&
																																																																																	((s =
																																																																																		!0),
																																																																																	(o = 0)),
																																																																																!s)
																																																																															) {
																																																																																const e =
																																																																																	{
																																																																																		params:
																																																																																			{
																																																																																				passingSchemas:
																																																																																					o
																																																																																			}
																																																																																	};
																																																																																return (
																																																																																	null ===
																																																																																	i
																																																																																		? (i =
																																																																																				[
																																																																																					e
																																																																																				])
																																																																																		: i.push(
																																																																																				e
																																																																																		  ),
																																																																																	l++,
																																																																																	($e.errors =
																																																																																		i),
																																																																																	!1
																																																																																);
																																																																															}
																																																																															(l =
																																																																																n),
																																																																																null !==
																																																																																	i &&
																																																																																	(n
																																																																																		? (i.length =
																																																																																				n)
																																																																																		: (i =
																																																																																				null)),
																																																																																(p =
																																																																																	e ===
																																																																																	l);
																																																																														} else
																																																																															p =
																																																																																!0;
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return ($e.errors = i), 0 === l;
}
function ze(
	e,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: r,
		rootData: s = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let l = !1;
	const p = a;
	if (
		"none" !== e &&
		"summary" !== e &&
		"errors-only" !== e &&
		"errors-warnings" !== e &&
		"minimal" !== e &&
		"normal" !== e &&
		"detailed" !== e &&
		"verbose" !== e
	) {
		const e = { params: {} };
		null === o ? (o = [e]) : o.push(e), a++;
	}
	var u = p === a;
	if (((l = l || u), !l)) {
		const i = a;
		if ("boolean" != typeof e) {
			const e = { params: { type: "boolean" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		if (((u = i === a), (l = l || u), !l)) {
			const i = a;
			$e(e, {
				instancePath: t,
				parentData: n,
				parentDataProperty: r,
				rootData: s
			}) ||
				((o = null === o ? $e.errors : o.concat($e.errors)), (a = o.length)),
				(u = i === a),
				(l = l || u);
		}
	}
	if (!l) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (ze.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(ze.errors = o),
		0 === a
	);
}
const Le = new RegExp(
	"^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$",
	"u"
);
function we(
	r,
	{
		instancePath: s = "",
		parentData: a,
		parentDataProperty: i,
		rootData: l = r
	} = {}
) {
	let p = null,
		u = 0;
	if (0 === u) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (we.errors = [{ params: { type: "object" } }]), !1;
		{
			const a = u;
			for (const e in r)
				if (!n.call(t, e))
					return (we.errors = [{ params: { additionalProperty: e } }]), !1;
			if (a === u) {
				if (void 0 !== r.amd) {
					let e = r.amd;
					const t = u,
						n = u;
					let s = !1;
					const o = u;
					if (!1 !== e) {
						const e = { params: {} };
						null === p ? (p = [e]) : p.push(e), u++;
					}
					var f = o === u;
					if (((s = s || f), !s)) {
						const t = u;
						if (!e || "object" != typeof e || Array.isArray(e)) {
							const e = { params: { type: "object" } };
							null === p ? (p = [e]) : p.push(e), u++;
						}
						(f = t === u), (s = s || f);
					}
					if (!s) {
						const e = { params: {} };
						return null === p ? (p = [e]) : p.push(e), u++, (we.errors = p), !1;
					}
					(u = n), null !== p && (n ? (p.length = n) : (p = null));
					var c = t === u;
				} else c = !0;
				if (c) {
					if (void 0 !== r.bail) {
						const e = u;
						if ("boolean" != typeof r.bail)
							return (we.errors = [{ params: { type: "boolean" } }]), !1;
						c = e === u;
					} else c = !0;
					if (c) {
						if (void 0 !== r.cache) {
							const e = u;
							o(r.cache, {
								instancePath: s + "/cache",
								parentData: r,
								parentDataProperty: "cache",
								rootData: l
							}) ||
								((p = null === p ? o.errors : p.concat(o.errors)),
								(u = p.length)),
								(c = e === u);
						} else c = !0;
						if (c) {
							if (void 0 !== r.context) {
								let t = r.context;
								const n = u;
								if (u == u) {
									if ("string" != typeof t)
										return (we.errors = [{ params: { type: "string" } }]), !1;
									if (t.includes("!") || !0 !== e.test(t))
										return (we.errors = [{ params: {} }]), !1;
								}
								c = n === u;
							} else c = !0;
							if (c) {
								if (void 0 !== r.dependencies) {
									let e = r.dependencies;
									const t = u;
									if (u == u) {
										if (!Array.isArray(e))
											return (we.errors = [{ params: { type: "array" } }]), !1;
										{
											const t = e.length;
											for (let n = 0; n < t; n++) {
												const t = u;
												if ("string" != typeof e[n])
													return (
														(we.errors = [{ params: { type: "string" } }]), !1
													);
												if (t !== u) break;
											}
										}
									}
									c = t === u;
								} else c = !0;
								if (c) {
									if (void 0 !== r.devServer) {
										let e = r.devServer;
										const t = u;
										if (!e || "object" != typeof e || Array.isArray(e))
											return (we.errors = [{ params: { type: "object" } }]), !1;
										c = t === u;
									} else c = !0;
									if (c) {
										if (void 0 !== r.devtool) {
											let e = r.devtool;
											const t = u,
												n = u;
											let s = !1;
											const o = u;
											if (!1 !== e && "eval" !== e) {
												const e = { params: {} };
												null === p ? (p = [e]) : p.push(e), u++;
											}
											var m = o === u;
											if (((s = s || m), !s)) {
												const t = u;
												if (u === t)
													if ("string" == typeof e) {
														if (!Le.test(e)) {
															const e = {
																params: {
																	pattern:
																		"^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$"
																}
															};
															null === p ? (p = [e]) : p.push(e), u++;
														}
													} else {
														const e = { params: { type: "string" } };
														null === p ? (p = [e]) : p.push(e), u++;
													}
												(m = t === u), (s = s || m);
											}
											if (!s) {
												const e = { params: {} };
												return (
													null === p ? (p = [e]) : p.push(e),
													u++,
													(we.errors = p),
													!1
												);
											}
											(u = n),
												null !== p && (n ? (p.length = n) : (p = null)),
												(c = t === u);
										} else c = !0;
										if (c) {
											if (void 0 !== r.entry) {
												const e = u;
												b(r.entry, {
													instancePath: s + "/entry",
													parentData: r,
													parentDataProperty: "entry",
													rootData: l
												}) ||
													((p = null === p ? b.errors : p.concat(b.errors)),
													(u = p.length)),
													(c = e === u);
											} else c = !0;
											if (c) {
												if (void 0 !== r.experiments) {
													const e = u;
													k(r.experiments, {
														instancePath: s + "/experiments",
														parentData: r,
														parentDataProperty: "experiments",
														rootData: l
													}) ||
														((p = null === p ? k.errors : p.concat(k.errors)),
														(u = p.length)),
														(c = e === u);
												} else c = !0;
												if (c) {
													if (void 0 !== r.externals) {
														const e = u;
														C(r.externals, {
															instancePath: s + "/externals",
															parentData: r,
															parentDataProperty: "externals",
															rootData: l
														}) ||
															((p = null === p ? C.errors : p.concat(C.errors)),
															(u = p.length)),
															(c = e === u);
													} else c = !0;
													if (c) {
														if (void 0 !== r.externalsPresets) {
															let e = r.externalsPresets;
															const t = u;
															if (u == u) {
																if (
																	!e ||
																	"object" != typeof e ||
																	Array.isArray(e)
																)
																	return (
																		(we.errors = [
																			{ params: { type: "object" } }
																		]),
																		!1
																	);
																{
																	const t = u;
																	for (const t in e)
																		if (
																			"electron" !== t &&
																			"electronMain" !== t &&
																			"electronPreload" !== t &&
																			"electronRenderer" !== t &&
																			"node" !== t &&
																			"nwjs" !== t &&
																			"web" !== t &&
																			"webAsync" !== t
																		)
																			return (
																				(we.errors = [
																					{ params: { additionalProperty: t } }
																				]),
																				!1
																			);
																	if (t === u) {
																		if (void 0 !== e.electron) {
																			const t = u;
																			if ("boolean" != typeof e.electron)
																				return (
																					(we.errors = [
																						{ params: { type: "boolean" } }
																					]),
																					!1
																				);
																			var y = t === u;
																		} else y = !0;
																		if (y) {
																			if (void 0 !== e.electronMain) {
																				const t = u;
																				if ("boolean" != typeof e.electronMain)
																					return (
																						(we.errors = [
																							{ params: { type: "boolean" } }
																						]),
																						!1
																					);
																				y = t === u;
																			} else y = !0;
																			if (y) {
																				if (void 0 !== e.electronPreload) {
																					const t = u;
																					if (
																						"boolean" !=
																						typeof e.electronPreload
																					)
																						return (
																							(we.errors = [
																								{ params: { type: "boolean" } }
																							]),
																							!1
																						);
																					y = t === u;
																				} else y = !0;
																				if (y) {
																					if (void 0 !== e.electronRenderer) {
																						const t = u;
																						if (
																							"boolean" !=
																							typeof e.electronRenderer
																						)
																							return (
																								(we.errors = [
																									{
																										params: { type: "boolean" }
																									}
																								]),
																								!1
																							);
																						y = t === u;
																					} else y = !0;
																					if (y) {
																						if (void 0 !== e.node) {
																							const t = u;
																							if ("boolean" != typeof e.node)
																								return (
																									(we.errors = [
																										{
																											params: {
																												type: "boolean"
																											}
																										}
																									]),
																									!1
																								);
																							y = t === u;
																						} else y = !0;
																						if (y) {
																							if (void 0 !== e.nwjs) {
																								const t = u;
																								if ("boolean" != typeof e.nwjs)
																									return (
																										(we.errors = [
																											{
																												params: {
																													type: "boolean"
																												}
																											}
																										]),
																										!1
																									);
																								y = t === u;
																							} else y = !0;
																							if (y) {
																								if (void 0 !== e.web) {
																									const t = u;
																									if ("boolean" != typeof e.web)
																										return (
																											(we.errors = [
																												{
																													params: {
																														type: "boolean"
																													}
																												}
																											]),
																											!1
																										);
																									y = t === u;
																								} else y = !0;
																								if (y)
																									if (void 0 !== e.webAsync) {
																										const t = u;
																										if (
																											"boolean" !=
																											typeof e.webAsync
																										)
																											return (
																												(we.errors = [
																													{
																														params: {
																															type: "boolean"
																														}
																													}
																												]),
																												!1
																											);
																										y = t === u;
																									} else y = !0;
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
															c = t === u;
														} else c = !0;
														if (c) {
															if (void 0 !== r.externalsType) {
																let e = r.externalsType;
																const t = u;
																if (
																	"var" !== e &&
																	"module" !== e &&
																	"assign" !== e &&
																	"this" !== e &&
																	"window" !== e &&
																	"self" !== e &&
																	"global" !== e &&
																	"commonjs" !== e &&
																	"commonjs2" !== e &&
																	"commonjs-module" !== e &&
																	"commonjs-static" !== e &&
																	"amd" !== e &&
																	"amd-require" !== e &&
																	"umd" !== e &&
																	"umd2" !== e &&
																	"jsonp" !== e &&
																	"system" !== e &&
																	"promise" !== e &&
																	"import" !== e &&
																	"script" !== e &&
																	"node-commonjs" !== e
																)
																	return (we.errors = [{ params: {} }]), !1;
																c = t === u;
															} else c = !0;
															if (c) {
																if (void 0 !== r.ignoreWarnings) {
																	let e = r.ignoreWarnings;
																	const t = u;
																	if (u == u) {
																		if (!Array.isArray(e))
																			return (
																				(we.errors = [
																					{ params: { type: "array" } }
																				]),
																				!1
																			);
																		{
																			const t = e.length;
																			for (let n = 0; n < t; n++) {
																				let t = e[n];
																				const r = u,
																					s = u;
																				let o = !1;
																				const a = u;
																				if (!(t instanceof RegExp)) {
																					const e = { params: {} };
																					null === p ? (p = [e]) : p.push(e),
																						u++;
																				}
																				var h = a === u;
																				if (((o = o || h), !o)) {
																					const e = u;
																					if (u === e)
																						if (
																							t &&
																							"object" == typeof t &&
																							!Array.isArray(t)
																						) {
																							const e = u;
																							for (const e in t)
																								if (
																									"file" !== e &&
																									"message" !== e &&
																									"module" !== e
																								) {
																									const t = {
																										params: {
																											additionalProperty: e
																										}
																									};
																									null === p
																										? (p = [t])
																										: p.push(t),
																										u++;
																									break;
																								}
																							if (e === u) {
																								if (void 0 !== t.file) {
																									const e = u;
																									if (
																										!(t.file instanceof RegExp)
																									) {
																										const e = { params: {} };
																										null === p
																											? (p = [e])
																											: p.push(e),
																											u++;
																									}
																									var d = e === u;
																								} else d = !0;
																								if (d) {
																									if (void 0 !== t.message) {
																										const e = u;
																										if (
																											!(
																												t.message instanceof
																												RegExp
																											)
																										) {
																											const e = { params: {} };
																											null === p
																												? (p = [e])
																												: p.push(e),
																												u++;
																										}
																										d = e === u;
																									} else d = !0;
																									if (d)
																										if (void 0 !== t.module) {
																											const e = u;
																											if (
																												!(
																													t.module instanceof
																													RegExp
																												)
																											) {
																												const e = {
																													params: {}
																												};
																												null === p
																													? (p = [e])
																													: p.push(e),
																													u++;
																											}
																											d = e === u;
																										} else d = !0;
																								}
																							}
																						} else {
																							const e = {
																								params: { type: "object" }
																							};
																							null === p
																								? (p = [e])
																								: p.push(e),
																								u++;
																						}
																					if (
																						((h = e === u), (o = o || h), !o)
																					) {
																						const e = u;
																						if (!(t instanceof Function)) {
																							const e = { params: {} };
																							null === p
																								? (p = [e])
																								: p.push(e),
																								u++;
																						}
																						(h = e === u), (o = o || h);
																					}
																				}
																				if (!o) {
																					const e = { params: {} };
																					return (
																						null === p ? (p = [e]) : p.push(e),
																						u++,
																						(we.errors = p),
																						!1
																					);
																				}
																				if (
																					((u = s),
																					null !== p &&
																						(s ? (p.length = s) : (p = null)),
																					r !== u)
																				)
																					break;
																			}
																		}
																	}
																	c = t === u;
																} else c = !0;
																if (c) {
																	if (void 0 !== r.infrastructureLogging) {
																		const e = u;
																		F(r.infrastructureLogging, {
																			instancePath:
																				s + "/infrastructureLogging",
																			parentData: r,
																			parentDataProperty:
																				"infrastructureLogging",
																			rootData: l
																		}) ||
																			((p =
																				null === p
																					? F.errors
																					: p.concat(F.errors)),
																			(u = p.length)),
																			(c = e === u);
																	} else c = !0;
																	if (c) {
																		if (void 0 !== r.loader) {
																			let e = r.loader;
																			const t = u;
																			if (
																				!e ||
																				"object" != typeof e ||
																				Array.isArray(e)
																			)
																				return (
																					(we.errors = [
																						{ params: { type: "object" } }
																					]),
																					!1
																				);
																			c = t === u;
																		} else c = !0;
																		if (c) {
																			if (void 0 !== r.mode) {
																				let e = r.mode;
																				const t = u;
																				if (
																					"development" !== e &&
																					"production" !== e &&
																					"none" !== e
																				)
																					return (
																						(we.errors = [{ params: {} }]), !1
																					);
																				c = t === u;
																			} else c = !0;
																			if (c) {
																				if (void 0 !== r.module) {
																					const e = u;
																					oe(r.module, {
																						instancePath: s + "/module",
																						parentData: r,
																						parentDataProperty: "module",
																						rootData: l
																					}) ||
																						((p =
																							null === p
																								? oe.errors
																								: p.concat(oe.errors)),
																						(u = p.length)),
																						(c = e === u);
																				} else c = !0;
																				if (c) {
																					if (void 0 !== r.name) {
																						const e = u;
																						if ("string" != typeof r.name)
																							return (
																								(we.errors = [
																									{ params: { type: "string" } }
																								]),
																								!1
																							);
																						c = e === u;
																					} else c = !0;
																					if (c) {
																						if (void 0 !== r.node) {
																							const e = u;
																							ne(r.node, {
																								instancePath: s + "/node",
																								parentData: r,
																								parentDataProperty: "node",
																								rootData: l
																							}) ||
																								((p =
																									null === p
																										? ne.errors
																										: p.concat(ne.errors)),
																								(u = p.length)),
																								(c = e === u);
																						} else c = !0;
																						if (c) {
																							if (void 0 !== r.optimization) {
																								const e = u;
																								fe(r.optimization, {
																									instancePath:
																										s + "/optimization",
																									parentData: r,
																									parentDataProperty:
																										"optimization",
																									rootData: l
																								}) ||
																									((p =
																										null === p
																											? fe.errors
																											: p.concat(fe.errors)),
																									(u = p.length)),
																									(c = e === u);
																							} else c = !0;
																							if (c) {
																								if (void 0 !== r.output) {
																									const e = u;
																									xe(r.output, {
																										instancePath: s + "/output",
																										parentData: r,
																										parentDataProperty:
																											"output",
																										rootData: l
																									}) ||
																										((p =
																											null === p
																												? xe.errors
																												: p.concat(xe.errors)),
																										(u = p.length)),
																										(c = e === u);
																								} else c = !0;
																								if (c) {
																									if (
																										void 0 !== r.parallelism
																									) {
																										let e = r.parallelism;
																										const t = u;
																										if (u == u) {
																											if ("number" != typeof e)
																												return (
																													(we.errors = [
																														{
																															params: {
																																type: "number"
																															}
																														}
																													]),
																													!1
																												);
																											if (e < 1 || isNaN(e))
																												return (
																													(we.errors = [
																														{
																															params: {
																																comparison:
																																	">=",
																																limit: 1
																															}
																														}
																													]),
																													!1
																												);
																										}
																										c = t === u;
																									} else c = !0;
																									if (c) {
																										if (
																											void 0 !== r.performance
																										) {
																											const e = u;
																											ke(r.performance, {
																												instancePath:
																													s + "/performance",
																												parentData: r,
																												parentDataProperty:
																													"performance",
																												rootData: l
																											}) ||
																												((p =
																													null === p
																														? ke.errors
																														: p.concat(
																																ke.errors
																														  )),
																												(u = p.length)),
																												(c = e === u);
																										} else c = !0;
																										if (c) {
																											if (
																												void 0 !== r.plugins
																											) {
																												const e = u;
																												je(r.plugins, {
																													instancePath:
																														s + "/plugins",
																													parentData: r,
																													parentDataProperty:
																														"plugins",
																													rootData: l
																												}) ||
																													((p =
																														null === p
																															? je.errors
																															: p.concat(
																																	je.errors
																															  )),
																													(u = p.length)),
																													(c = e === u);
																											} else c = !0;
																											if (c) {
																												if (
																													void 0 !== r.profile
																												) {
																													const e = u;
																													if (
																														"boolean" !=
																														typeof r.profile
																													)
																														return (
																															(we.errors = [
																																{
																																	params: {
																																		type: "boolean"
																																	}
																																}
																															]),
																															!1
																														);
																													c = e === u;
																												} else c = !0;
																												if (c) {
																													if (
																														void 0 !==
																														r.recordsInputPath
																													) {
																														let t =
																															r.recordsInputPath;
																														const n = u,
																															s = u;
																														let o = !1;
																														const a = u;
																														if (!1 !== t) {
																															const e = {
																																params: {}
																															};
																															null === p
																																? (p = [e])
																																: p.push(e),
																																u++;
																														}
																														var g = a === u;
																														if (
																															((o = o || g), !o)
																														) {
																															const n = u;
																															if (u === n)
																																if (
																																	"string" ==
																																	typeof t
																																) {
																																	if (
																																		t.includes(
																																			"!"
																																		) ||
																																		!0 !==
																																			e.test(t)
																																	) {
																																		const e = {
																																			params: {}
																																		};
																																		null === p
																																			? (p = [
																																					e
																																			  ])
																																			: p.push(
																																					e
																																			  ),
																																			u++;
																																	}
																																} else {
																																	const e = {
																																		params: {
																																			type: "string"
																																		}
																																	};
																																	null === p
																																		? (p = [e])
																																		: p.push(e),
																																		u++;
																																}
																															(g = n === u),
																																(o = o || g);
																														}
																														if (!o) {
																															const e = {
																																params: {}
																															};
																															return (
																																null === p
																																	? (p = [e])
																																	: p.push(e),
																																u++,
																																(we.errors = p),
																																!1
																															);
																														}
																														(u = s),
																															null !== p &&
																																(s
																																	? (p.length =
																																			s)
																																	: (p = null)),
																															(c = n === u);
																													} else c = !0;
																													if (c) {
																														if (
																															void 0 !==
																															r.recordsOutputPath
																														) {
																															let t =
																																r.recordsOutputPath;
																															const n = u,
																																s = u;
																															let o = !1;
																															const a = u;
																															if (!1 !== t) {
																																const e = {
																																	params: {}
																																};
																																null === p
																																	? (p = [e])
																																	: p.push(e),
																																	u++;
																															}
																															var v = a === u;
																															if (
																																((o = o || v),
																																!o)
																															) {
																																const n = u;
																																if (u === n)
																																	if (
																																		"string" ==
																																		typeof t
																																	) {
																																		if (
																																			t.includes(
																																				"!"
																																			) ||
																																			!0 !==
																																				e.test(
																																					t
																																				)
																																		) {
																																			const e =
																																				{
																																					params:
																																						{}
																																				};
																																			null === p
																																				? (p = [
																																						e
																																				  ])
																																				: p.push(
																																						e
																																				  ),
																																				u++;
																																		}
																																	} else {
																																		const e = {
																																			params: {
																																				type: "string"
																																			}
																																		};
																																		null === p
																																			? (p = [
																																					e
																																			  ])
																																			: p.push(
																																					e
																																			  ),
																																			u++;
																																	}
																																(v = n === u),
																																	(o = o || v);
																															}
																															if (!o) {
																																const e = {
																																	params: {}
																																};
																																return (
																																	null === p
																																		? (p = [e])
																																		: p.push(e),
																																	u++,
																																	(we.errors =
																																		p),
																																	!1
																																);
																															}
																															(u = s),
																																null !== p &&
																																	(s
																																		? (p.length =
																																				s)
																																		: (p =
																																				null)),
																																(c = n === u);
																														} else c = !0;
																														if (c) {
																															if (
																																void 0 !==
																																r.recordsPath
																															) {
																																let t =
																																	r.recordsPath;
																																const n = u,
																																	s = u;
																																let o = !1;
																																const a = u;
																																if (!1 !== t) {
																																	const e = {
																																		params: {}
																																	};
																																	null === p
																																		? (p = [e])
																																		: p.push(e),
																																		u++;
																																}
																																var D = a === u;
																																if (
																																	((o = o || D),
																																	!o)
																																) {
																																	const n = u;
																																	if (u === n)
																																		if (
																																			"string" ==
																																			typeof t
																																		) {
																																			if (
																																				t.includes(
																																					"!"
																																				) ||
																																				!0 !==
																																					e.test(
																																						t
																																					)
																																			) {
																																				const e =
																																					{
																																						params:
																																							{}
																																					};
																																				null ===
																																				p
																																					? (p =
																																							[
																																								e
																																							])
																																					: p.push(
																																							e
																																					  ),
																																					u++;
																																			}
																																		} else {
																																			const e =
																																				{
																																					params:
																																						{
																																							type: "string"
																																						}
																																				};
																																			null === p
																																				? (p = [
																																						e
																																				  ])
																																				: p.push(
																																						e
																																				  ),
																																				u++;
																																		}
																																	(D = n === u),
																																		(o =
																																			o || D);
																																}
																																if (!o) {
																																	const e = {
																																		params: {}
																																	};
																																	return (
																																		null === p
																																			? (p = [
																																					e
																																			  ])
																																			: p.push(
																																					e
																																			  ),
																																		u++,
																																		(we.errors =
																																			p),
																																		!1
																																	);
																																}
																																(u = s),
																																	null !== p &&
																																		(s
																																			? (p.length =
																																					s)
																																			: (p =
																																					null)),
																																	(c = n === u);
																															} else c = !0;
																															if (c) {
																																if (
																																	void 0 !==
																																	r.resolve
																																) {
																																	const e = u;
																																	Se(
																																		r.resolve,
																																		{
																																			instancePath:
																																				s +
																																				"/resolve",
																																			parentData:
																																				r,
																																			parentDataProperty:
																																				"resolve",
																																			rootData:
																																				l
																																		}
																																	) ||
																																		((p =
																																			null === p
																																				? Se.errors
																																				: p.concat(
																																						Se.errors
																																				  )),
																																		(u =
																																			p.length)),
																																		(c =
																																			e === u);
																																} else c = !0;
																																if (c) {
																																	if (
																																		void 0 !==
																																		r.resolveLoader
																																	) {
																																		const e = u;
																																		Ce(
																																			r.resolveLoader,
																																			{
																																				instancePath:
																																					s +
																																					"/resolveLoader",
																																				parentData:
																																					r,
																																				parentDataProperty:
																																					"resolveLoader",
																																				rootData:
																																					l
																																			}
																																		) ||
																																			((p =
																																				null ===
																																				p
																																					? Ce.errors
																																					: p.concat(
																																							Ce.errors
																																					  )),
																																			(u =
																																				p.length)),
																																			(c =
																																				e ===
																																				u);
																																	} else c = !0;
																																	if (c) {
																																		if (
																																			void 0 !==
																																			r.snapshot
																																		) {
																																			let t =
																																				r.snapshot;
																																			const n =
																																				u;
																																			if (
																																				u == u
																																			) {
																																				if (
																																					!t ||
																																					"object" !=
																																						typeof t ||
																																					Array.isArray(
																																						t
																																					)
																																				)
																																					return (
																																						(we.errors =
																																							[
																																								{
																																									params:
																																										{
																																											type: "object"
																																										}
																																								}
																																							]),
																																						!1
																																					);
																																				{
																																					const n =
																																						u;
																																					for (const e in t)
																																						if (
																																							"buildDependencies" !==
																																								e &&
																																							"immutablePaths" !==
																																								e &&
																																							"managedPaths" !==
																																								e &&
																																							"module" !==
																																								e &&
																																							"resolve" !==
																																								e &&
																																							"resolveBuildDependencies" !==
																																								e
																																						)
																																							return (
																																								(we.errors =
																																									[
																																										{
																																											params:
																																												{
																																													additionalProperty:
																																														e
																																												}
																																										}
																																									]),
																																								!1
																																							);
																																					if (
																																						n ===
																																						u
																																					) {
																																						if (
																																							void 0 !==
																																							t.buildDependencies
																																						) {
																																							let e =
																																								t.buildDependencies;
																																							const n =
																																								u;
																																							if (
																																								u ===
																																								n
																																							) {
																																								if (
																																									!e ||
																																									"object" !=
																																										typeof e ||
																																									Array.isArray(
																																										e
																																									)
																																								)
																																									return (
																																										(we.errors =
																																											[
																																												{
																																													params:
																																														{
																																															type: "object"
																																														}
																																												}
																																											]),
																																										!1
																																									);
																																								{
																																									const t =
																																										u;
																																									for (const t in e)
																																										if (
																																											"hash" !==
																																												t &&
																																											"timestamp" !==
																																												t
																																										)
																																											return (
																																												(we.errors =
																																													[
																																														{
																																															params:
																																																{
																																																	additionalProperty:
																																																		t
																																																}
																																														}
																																													]),
																																												!1
																																											);
																																									if (
																																										t ===
																																										u
																																									) {
																																										if (
																																											void 0 !==
																																											e.hash
																																										) {
																																											const t =
																																												u;
																																											if (
																																												"boolean" !=
																																												typeof e.hash
																																											)
																																												return (
																																													(we.errors =
																																														[
																																															{
																																																params:
																																																	{
																																																		type: "boolean"
																																																	}
																																															}
																																														]),
																																													!1
																																												);
																																											var P =
																																												t ===
																																												u;
																																										} else
																																											P =
																																												!0;
																																										if (
																																											P
																																										)
																																											if (
																																												void 0 !==
																																												e.timestamp
																																											) {
																																												const t =
																																													u;
																																												if (
																																													"boolean" !=
																																													typeof e.timestamp
																																												)
																																													return (
																																														(we.errors =
																																															[
																																																{
																																																	params:
																																																		{
																																																			type: "boolean"
																																																		}
																																																}
																																															]),
																																														!1
																																													);
																																												P =
																																													t ===
																																													u;
																																											} else
																																												P =
																																													!0;
																																									}
																																								}
																																							}
																																							var A =
																																								n ===
																																								u;
																																						} else
																																							A =
																																								!0;
																																						if (
																																							A
																																						) {
																																							if (
																																								void 0 !==
																																								t.immutablePaths
																																							) {
																																								let n =
																																									t.immutablePaths;
																																								const r =
																																									u;
																																								if (
																																									u ===
																																									r
																																								) {
																																									if (
																																										!Array.isArray(
																																											n
																																										)
																																									)
																																										return (
																																											(we.errors =
																																												[
																																													{
																																														params:
																																															{
																																																type: "array"
																																															}
																																													}
																																												]),
																																											!1
																																										);
																																									{
																																										const t =
																																											n.length;
																																										for (
																																											let r = 0;
																																											r <
																																											t;
																																											r++
																																										) {
																																											let t =
																																												n[
																																													r
																																												];
																																											const s =
																																													u,
																																												o =
																																													u;
																																											let a =
																																												!1;
																																											const i =
																																												u;
																																											if (
																																												!(
																																													t instanceof
																																													RegExp
																																												)
																																											) {
																																												const e =
																																													{
																																														params:
																																															{}
																																													};
																																												null ===
																																												p
																																													? (p =
																																															[
																																																e
																																															])
																																													: p.push(
																																															e
																																													  ),
																																													u++;
																																											}
																																											var x =
																																												i ===
																																												u;
																																											if (
																																												((a =
																																													a ||
																																													x),
																																												!a)
																																											) {
																																												const n =
																																													u;
																																												if (
																																													u ===
																																													n
																																												)
																																													if (
																																														"string" ==
																																														typeof t
																																													) {
																																														if (
																																															t.includes(
																																																"!"
																																															) ||
																																															!0 !==
																																																e.test(
																																																	t
																																																)
																																														) {
																																															const e =
																																																{
																																																	params:
																																																		{}
																																																};
																																															null ===
																																															p
																																																? (p =
																																																		[
																																																			e
																																																		])
																																																: p.push(
																																																		e
																																																  ),
																																																u++;
																																														} else if (
																																															t.length <
																																															1
																																														) {
																																															const e =
																																																{
																																																	params:
																																																		{}
																																																};
																																															null ===
																																															p
																																																? (p =
																																																		[
																																																			e
																																																		])
																																																: p.push(
																																																		e
																																																  ),
																																																u++;
																																														}
																																													} else {
																																														const e =
																																															{
																																																params:
																																																	{
																																																		type: "string"
																																																	}
																																															};
																																														null ===
																																														p
																																															? (p =
																																																	[
																																																		e
																																																	])
																																															: p.push(
																																																	e
																																															  ),
																																															u++;
																																													}
																																												(x =
																																													n ===
																																													u),
																																													(a =
																																														a ||
																																														x);
																																											}
																																											if (
																																												!a
																																											) {
																																												const e =
																																													{
																																														params:
																																															{}
																																													};
																																												return (
																																													null ===
																																													p
																																														? (p =
																																																[
																																																	e
																																																])
																																														: p.push(
																																																e
																																														  ),
																																													u++,
																																													(we.errors =
																																														p),
																																													!1
																																												);
																																											}
																																											if (
																																												((u =
																																													o),
																																												null !==
																																													p &&
																																													(o
																																														? (p.length =
																																																o)
																																														: (p =
																																																null)),
																																												s !==
																																													u)
																																											)
																																												break;
																																										}
																																									}
																																								}
																																								A =
																																									r ===
																																									u;
																																							} else
																																								A =
																																									!0;
																																							if (
																																								A
																																							) {
																																								if (
																																									void 0 !==
																																									t.managedPaths
																																								) {
																																									let n =
																																										t.managedPaths;
																																									const r =
																																										u;
																																									if (
																																										u ===
																																										r
																																									) {
																																										if (
																																											!Array.isArray(
																																												n
																																											)
																																										)
																																											return (
																																												(we.errors =
																																													[
																																														{
																																															params:
																																																{
																																																	type: "array"
																																																}
																																														}
																																													]),
																																												!1
																																											);
																																										{
																																											const t =
																																												n.length;
																																											for (
																																												let r = 0;
																																												r <
																																												t;
																																												r++
																																											) {
																																												let t =
																																													n[
																																														r
																																													];
																																												const s =
																																														u,
																																													o =
																																														u;
																																												let a =
																																													!1;
																																												const i =
																																													u;
																																												if (
																																													!(
																																														t instanceof
																																														RegExp
																																													)
																																												) {
																																													const e =
																																														{
																																															params:
																																																{}
																																														};
																																													null ===
																																													p
																																														? (p =
																																																[
																																																	e
																																																])
																																														: p.push(
																																																e
																																														  ),
																																														u++;
																																												}
																																												var j =
																																													i ===
																																													u;
																																												if (
																																													((a =
																																														a ||
																																														j),
																																													!a)
																																												) {
																																													const n =
																																														u;
																																													if (
																																														u ===
																																														n
																																													)
																																														if (
																																															"string" ==
																																															typeof t
																																														) {
																																															if (
																																																t.includes(
																																																	"!"
																																																) ||
																																																!0 !==
																																																	e.test(
																																																		t
																																																	)
																																															) {
																																																const e =
																																																	{
																																																		params:
																																																			{}
																																																	};
																																																null ===
																																																p
																																																	? (p =
																																																			[
																																																				e
																																																			])
																																																	: p.push(
																																																			e
																																																	  ),
																																																	u++;
																																															} else if (
																																																t.length <
																																																1
																																															) {
																																																const e =
																																																	{
																																																		params:
																																																			{}
																																																	};
																																																null ===
																																																p
																																																	? (p =
																																																			[
																																																				e
																																																			])
																																																	: p.push(
																																																			e
																																																	  ),
																																																	u++;
																																															}
																																														} else {
																																															const e =
																																																{
																																																	params:
																																																		{
																																																			type: "string"
																																																		}
																																																};
																																															null ===
																																															p
																																																? (p =
																																																		[
																																																			e
																																																		])
																																																: p.push(
																																																		e
																																																  ),
																																																u++;
																																														}
																																													(j =
																																														n ===
																																														u),
																																														(a =
																																															a ||
																																															j);
																																												}
																																												if (
																																													!a
																																												) {
																																													const e =
																																														{
																																															params:
																																																{}
																																														};
																																													return (
																																														null ===
																																														p
																																															? (p =
																																																	[
																																																		e
																																																	])
																																															: p.push(
																																																	e
																																															  ),
																																														u++,
																																														(we.errors =
																																															p),
																																														!1
																																													);
																																												}
																																												if (
																																													((u =
																																														o),
																																													null !==
																																														p &&
																																														(o
																																															? (p.length =
																																																	o)
																																															: (p =
																																																	null)),
																																													s !==
																																														u)
																																												)
																																													break;
																																											}
																																										}
																																									}
																																									A =
																																										r ===
																																										u;
																																								} else
																																									A =
																																										!0;
																																								if (
																																									A
																																								) {
																																									if (
																																										void 0 !==
																																										t.module
																																									) {
																																										let e =
																																											t.module;
																																										const n =
																																											u;
																																										if (
																																											u ===
																																											n
																																										) {
																																											if (
																																												!e ||
																																												"object" !=
																																													typeof e ||
																																												Array.isArray(
																																													e
																																												)
																																											)
																																												return (
																																													(we.errors =
																																														[
																																															{
																																																params:
																																																	{
																																																		type: "object"
																																																	}
																																															}
																																														]),
																																													!1
																																												);
																																											{
																																												const t =
																																													u;
																																												for (const t in e)
																																													if (
																																														"hash" !==
																																															t &&
																																														"timestamp" !==
																																															t
																																													)
																																														return (
																																															(we.errors =
																																																[
																																																	{
																																																		params:
																																																			{
																																																				additionalProperty:
																																																					t
																																																			}
																																																	}
																																																]),
																																															!1
																																														);
																																												if (
																																													t ===
																																													u
																																												) {
																																													if (
																																														void 0 !==
																																														e.hash
																																													) {
																																														const t =
																																															u;
																																														if (
																																															"boolean" !=
																																															typeof e.hash
																																														)
																																															return (
																																																(we.errors =
																																																	[
																																																		{
																																																			params:
																																																				{
																																																					type: "boolean"
																																																				}
																																																		}
																																																	]),
																																																!1
																																															);
																																														var S =
																																															t ===
																																															u;
																																													} else
																																														S =
																																															!0;
																																													if (
																																														S
																																													)
																																														if (
																																															void 0 !==
																																															e.timestamp
																																														) {
																																															const t =
																																																u;
																																															if (
																																																"boolean" !=
																																																typeof e.timestamp
																																															)
																																																return (
																																																	(we.errors =
																																																		[
																																																			{
																																																				params:
																																																					{
																																																						type: "boolean"
																																																					}
																																																			}
																																																		]),
																																																	!1
																																																);
																																															S =
																																																t ===
																																																u;
																																														} else
																																															S =
																																																!0;
																																												}
																																											}
																																										}
																																										A =
																																											n ===
																																											u;
																																									} else
																																										A =
																																											!0;
																																									if (
																																										A
																																									) {
																																										if (
																																											void 0 !==
																																											t.resolve
																																										) {
																																											let e =
																																												t.resolve;
																																											const n =
																																												u;
																																											if (
																																												u ===
																																												n
																																											) {
																																												if (
																																													!e ||
																																													"object" !=
																																														typeof e ||
																																													Array.isArray(
																																														e
																																													)
																																												)
																																													return (
																																														(we.errors =
																																															[
																																																{
																																																	params:
																																																		{
																																																			type: "object"
																																																		}
																																																}
																																															]),
																																														!1
																																													);
																																												{
																																													const t =
																																														u;
																																													for (const t in e)
																																														if (
																																															"hash" !==
																																																t &&
																																															"timestamp" !==
																																																t
																																														)
																																															return (
																																																(we.errors =
																																																	[
																																																		{
																																																			params:
																																																				{
																																																					additionalProperty:
																																																						t
																																																				}
																																																		}
																																																	]),
																																																!1
																																															);
																																													if (
																																														t ===
																																														u
																																													) {
																																														if (
																																															void 0 !==
																																															e.hash
																																														) {
																																															const t =
																																																u;
																																															if (
																																																"boolean" !=
																																																typeof e.hash
																																															)
																																																return (
																																																	(we.errors =
																																																		[
																																																			{
																																																				params:
																																																					{
																																																						type: "boolean"
																																																					}
																																																			}
																																																		]),
																																																	!1
																																																);
																																															var O =
																																																t ===
																																																u;
																																														} else
																																															O =
																																																!0;
																																														if (
																																															O
																																														)
																																															if (
																																																void 0 !==
																																																e.timestamp
																																															) {
																																																const t =
																																																	u;
																																																if (
																																																	"boolean" !=
																																																	typeof e.timestamp
																																																)
																																																	return (
																																																		(we.errors =
																																																			[
																																																				{
																																																					params:
																																																						{
																																																							type: "boolean"
																																																						}
																																																				}
																																																			]),
																																																		!1
																																																	);
																																																O =
																																																	t ===
																																																	u;
																																															} else
																																																O =
																																																	!0;
																																													}
																																												}
																																											}
																																											A =
																																												n ===
																																												u;
																																										} else
																																											A =
																																												!0;
																																										if (
																																											A
																																										)
																																											if (
																																												void 0 !==
																																												t.resolveBuildDependencies
																																											) {
																																												let e =
																																													t.resolveBuildDependencies;
																																												const n =
																																													u;
																																												if (
																																													u ===
																																													n
																																												) {
																																													if (
																																														!e ||
																																														"object" !=
																																															typeof e ||
																																														Array.isArray(
																																															e
																																														)
																																													)
																																														return (
																																															(we.errors =
																																																[
																																																	{
																																																		params:
																																																			{
																																																				type: "object"
																																																			}
																																																	}
																																																]),
																																															!1
																																														);
																																													{
																																														const t =
																																															u;
																																														for (const t in e)
																																															if (
																																																"hash" !==
																																																	t &&
																																																"timestamp" !==
																																																	t
																																															)
																																																return (
																																																	(we.errors =
																																																		[
																																																			{
																																																				params:
																																																					{
																																																						additionalProperty:
																																																							t
																																																					}
																																																			}
																																																		]),
																																																	!1
																																																);
																																														if (
																																															t ===
																																															u
																																														) {
																																															if (
																																																void 0 !==
																																																e.hash
																																															) {
																																																const t =
																																																	u;
																																																if (
																																																	"boolean" !=
																																																	typeof e.hash
																																																)
																																																	return (
																																																		(we.errors =
																																																			[
																																																				{
																																																					params:
																																																						{
																																																							type: "boolean"
																																																						}
																																																				}
																																																			]),
																																																		!1
																																																	);
																																																var R =
																																																	t ===
																																																	u;
																																															} else
																																																R =
																																																	!0;
																																															if (
																																																R
																																															)
																																																if (
																																																	void 0 !==
																																																	e.timestamp
																																																) {
																																																	const t =
																																																		u;
																																																	if (
																																																		"boolean" !=
																																																		typeof e.timestamp
																																																	)
																																																		return (
																																																			(we.errors =
																																																				[
																																																					{
																																																						params:
																																																							{
																																																								type: "boolean"
																																																							}
																																																					}
																																																				]),
																																																			!1
																																																		);
																																																	R =
																																																		t ===
																																																		u;
																																																} else
																																																	R =
																																																		!0;
																																														}
																																													}
																																												}
																																												A =
																																													n ===
																																													u;
																																											} else
																																												A =
																																													!0;
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																			c =
																																				n === u;
																																		} else
																																			c = !0;
																																		if (c) {
																																			if (
																																				void 0 !==
																																				r.stats
																																			) {
																																				const e =
																																					u;
																																				ze(
																																					r.stats,
																																					{
																																						instancePath:
																																							s +
																																							"/stats",
																																						parentData:
																																							r,
																																						parentDataProperty:
																																							"stats",
																																						rootData:
																																							l
																																					}
																																				) ||
																																					((p =
																																						null ===
																																						p
																																							? ze.errors
																																							: p.concat(
																																									ze.errors
																																							  )),
																																					(u =
																																						p.length)),
																																					(c =
																																						e ===
																																						u);
																																			} else
																																				c = !0;
																																			if (c) {
																																				if (
																																					void 0 !==
																																					r.target
																																				) {
																																					let e =
																																						r.target;
																																					const t =
																																							u,
																																						n =
																																							u;
																																					let s =
																																						!1;
																																					const o =
																																						u;
																																					if (
																																						u ===
																																						o
																																					)
																																						if (
																																							Array.isArray(
																																								e
																																							)
																																						)
																																							if (
																																								e.length <
																																								1
																																							) {
																																								const e =
																																									{
																																										params:
																																											{
																																												limit: 1
																																											}
																																									};
																																								null ===
																																								p
																																									? (p =
																																											[
																																												e
																																											])
																																									: p.push(
																																											e
																																									  ),
																																									u++;
																																							} else {
																																								const t =
																																									e.length;
																																								for (
																																									let n = 0;
																																									n <
																																									t;
																																									n++
																																								) {
																																									let t =
																																										e[
																																											n
																																										];
																																									const r =
																																										u;
																																									if (
																																										u ===
																																										r
																																									)
																																										if (
																																											"string" ==
																																											typeof t
																																										) {
																																											if (
																																												t.length <
																																												1
																																											) {
																																												const e =
																																													{
																																														params:
																																															{}
																																													};
																																												null ===
																																												p
																																													? (p =
																																															[
																																																e
																																															])
																																													: p.push(
																																															e
																																													  ),
																																													u++;
																																											}
																																										} else {
																																											const e =
																																												{
																																													params:
																																														{
																																															type: "string"
																																														}
																																												};
																																											null ===
																																											p
																																												? (p =
																																														[
																																															e
																																														])
																																												: p.push(
																																														e
																																												  ),
																																												u++;
																																										}
																																									if (
																																										r !==
																																										u
																																									)
																																										break;
																																								}
																																							}
																																						else {
																																							const e =
																																								{
																																									params:
																																										{
																																											type: "array"
																																										}
																																								};
																																							null ===
																																							p
																																								? (p =
																																										[
																																											e
																																										])
																																								: p.push(
																																										e
																																								  ),
																																								u++;
																																						}
																																					var E =
																																						o ===
																																						u;
																																					if (
																																						((s =
																																							s ||
																																							E),
																																						!s)
																																					) {
																																						const t =
																																							u;
																																						if (
																																							!1 !==
																																							e
																																						) {
																																							const e =
																																								{
																																									params:
																																										{}
																																								};
																																							null ===
																																							p
																																								? (p =
																																										[
																																											e
																																										])
																																								: p.push(
																																										e
																																								  ),
																																								u++;
																																						}
																																						if (
																																							((E =
																																								t ===
																																								u),
																																							(s =
																																								s ||
																																								E),
																																							!s)
																																						) {
																																							const t =
																																								u;
																																							if (
																																								u ===
																																								t
																																							)
																																								if (
																																									"string" ==
																																									typeof e
																																								) {
																																									if (
																																										e.length <
																																										1
																																									) {
																																										const e =
																																											{
																																												params:
																																													{}
																																											};
																																										null ===
																																										p
																																											? (p =
																																													[
																																														e
																																													])
																																											: p.push(
																																													e
																																											  ),
																																											u++;
																																									}
																																								} else {
																																									const e =
																																										{
																																											params:
																																												{
																																													type: "string"
																																												}
																																										};
																																									null ===
																																									p
																																										? (p =
																																												[
																																													e
																																												])
																																										: p.push(
																																												e
																																										  ),
																																										u++;
																																								}
																																							(E =
																																								t ===
																																								u),
																																								(s =
																																									s ||
																																									E);
																																						}
																																					}
																																					if (
																																						!s
																																					) {
																																						const e =
																																							{
																																								params:
																																									{}
																																							};
																																						return (
																																							null ===
																																							p
																																								? (p =
																																										[
																																											e
																																										])
																																								: p.push(
																																										e
																																								  ),
																																							u++,
																																							(we.errors =
																																								p),
																																							!1
																																						);
																																					}
																																					(u =
																																						n),
																																						null !==
																																							p &&
																																							(n
																																								? (p.length =
																																										n)
																																								: (p =
																																										null)),
																																						(c =
																																							t ===
																																							u);
																																				} else
																																					c =
																																						!0;
																																				if (c) {
																																					if (
																																						void 0 !==
																																						r.watch
																																					) {
																																						const e =
																																							u;
																																						if (
																																							"boolean" !=
																																							typeof r.watch
																																						)
																																							return (
																																								(we.errors =
																																									[
																																										{
																																											params:
																																												{
																																													type: "boolean"
																																												}
																																										}
																																									]),
																																								!1
																																							);
																																						c =
																																							e ===
																																							u;
																																					} else
																																						c =
																																							!0;
																																					if (c)
																																						if (
																																							void 0 !==
																																							r.watchOptions
																																						) {
																																							let e =
																																								r.watchOptions;
																																							const t =
																																								u;
																																							if (
																																								u ==
																																								u
																																							) {
																																								if (
																																									!e ||
																																									"object" !=
																																										typeof e ||
																																									Array.isArray(
																																										e
																																									)
																																								)
																																									return (
																																										(we.errors =
																																											[
																																												{
																																													params:
																																														{
																																															type: "object"
																																														}
																																												}
																																											]),
																																										!1
																																									);
																																								{
																																									const t =
																																										u;
																																									for (const t in e)
																																										if (
																																											"aggregateTimeout" !==
																																												t &&
																																											"followSymlinks" !==
																																												t &&
																																											"ignored" !==
																																												t &&
																																											"poll" !==
																																												t &&
																																											"stdin" !==
																																												t
																																										)
																																											return (
																																												(we.errors =
																																													[
																																														{
																																															params:
																																																{
																																																	additionalProperty:
																																																		t
																																																}
																																														}
																																													]),
																																												!1
																																											);
																																									if (
																																										t ===
																																										u
																																									) {
																																										if (
																																											void 0 !==
																																											e.aggregateTimeout
																																										) {
																																											const t =
																																												u;
																																											if (
																																												"number" !=
																																												typeof e.aggregateTimeout
																																											)
																																												return (
																																													(we.errors =
																																														[
																																															{
																																																params:
																																																	{
																																																		type: "number"
																																																	}
																																															}
																																														]),
																																													!1
																																												);
																																											var $ =
																																												t ===
																																												u;
																																										} else
																																											$ =
																																												!0;
																																										if (
																																											$
																																										) {
																																											if (
																																												void 0 !==
																																												e.followSymlinks
																																											) {
																																												const t =
																																													u;
																																												if (
																																													"boolean" !=
																																													typeof e.followSymlinks
																																												)
																																													return (
																																														(we.errors =
																																															[
																																																{
																																																	params:
																																																		{
																																																			type: "boolean"
																																																		}
																																																}
																																															]),
																																														!1
																																													);
																																												$ =
																																													t ===
																																													u;
																																											} else
																																												$ =
																																													!0;
																																											if (
																																												$
																																											) {
																																												if (
																																													void 0 !==
																																													e.ignored
																																												) {
																																													let t =
																																														e.ignored;
																																													const n =
																																															u,
																																														r =
																																															u;
																																													let s =
																																														!1;
																																													const o =
																																														u;
																																													if (
																																														u ===
																																														o
																																													)
																																														if (
																																															Array.isArray(
																																																t
																																															)
																																														) {
																																															const e =
																																																t.length;
																																															for (
																																																let n = 0;
																																																n <
																																																e;
																																																n++
																																															) {
																																																let e =
																																																	t[
																																																		n
																																																	];
																																																const r =
																																																	u;
																																																if (
																																																	u ===
																																																	r
																																																)
																																																	if (
																																																		"string" ==
																																																		typeof e
																																																	) {
																																																		if (
																																																			e.length <
																																																			1
																																																		) {
																																																			const e =
																																																				{
																																																					params:
																																																						{}
																																																				};
																																																			null ===
																																																			p
																																																				? (p =
																																																						[
																																																							e
																																																						])
																																																				: p.push(
																																																						e
																																																				  ),
																																																				u++;
																																																		}
																																																	} else {
																																																		const e =
																																																			{
																																																				params:
																																																					{
																																																						type: "string"
																																																					}
																																																			};
																																																		null ===
																																																		p
																																																			? (p =
																																																					[
																																																						e
																																																					])
																																																			: p.push(
																																																					e
																																																			  ),
																																																			u++;
																																																	}
																																																if (
																																																	r !==
																																																	u
																																																)
																																																	break;
																																															}
																																														} else {
																																															const e =
																																																{
																																																	params:
																																																		{
																																																			type: "array"
																																																		}
																																																};
																																															null ===
																																															p
																																																? (p =
																																																		[
																																																			e
																																																		])
																																																: p.push(
																																																		e
																																																  ),
																																																u++;
																																														}
																																													var z =
																																														o ===
																																														u;
																																													if (
																																														((s =
																																															s ||
																																															z),
																																														!s)
																																													) {
																																														const e =
																																															u;
																																														if (
																																															!(
																																																t instanceof
																																																RegExp
																																															)
																																														) {
																																															const e =
																																																{
																																																	params:
																																																		{}
																																																};
																																															null ===
																																															p
																																																? (p =
																																																		[
																																																			e
																																																		])
																																																: p.push(
																																																		e
																																																  ),
																																																u++;
																																														}
																																														if (
																																															((z =
																																																e ===
																																																u),
																																															(s =
																																																s ||
																																																z),
																																															!s)
																																														) {
																																															const e =
																																																u;
																																															if (
																																																u ===
																																																e
																																															)
																																																if (
																																																	"string" ==
																																																	typeof t
																																																) {
																																																	if (
																																																		t.length <
																																																		1
																																																	) {
																																																		const e =
																																																			{
																																																				params:
																																																					{}
																																																			};
																																																		null ===
																																																		p
																																																			? (p =
																																																					[
																																																						e
																																																					])
																																																			: p.push(
																																																					e
																																																			  ),
																																																			u++;
																																																	}
																																																} else {
																																																	const e =
																																																		{
																																																			params:
																																																				{
																																																					type: "string"
																																																				}
																																																		};
																																																	null ===
																																																	p
																																																		? (p =
																																																				[
																																																					e
																																																				])
																																																		: p.push(
																																																				e
																																																		  ),
																																																		u++;
																																																}
																																															(z =
																																																e ===
																																																u),
																																																(s =
																																																	s ||
																																																	z);
																																														}
																																													}
																																													if (
																																														!s
																																													) {
																																														const e =
																																															{
																																																params:
																																																	{}
																																															};
																																														return (
																																															null ===
																																															p
																																																? (p =
																																																		[
																																																			e
																																																		])
																																																: p.push(
																																																		e
																																																  ),
																																															u++,
																																															(we.errors =
																																																p),
																																															!1
																																														);
																																													}
																																													(u =
																																														r),
																																														null !==
																																															p &&
																																															(r
																																																? (p.length =
																																																		r)
																																																: (p =
																																																		null)),
																																														($ =
																																															n ===
																																															u);
																																												} else
																																													$ =
																																														!0;
																																												if (
																																													$
																																												) {
																																													if (
																																														void 0 !==
																																														e.poll
																																													) {
																																														let t =
																																															e.poll;
																																														const n =
																																																u,
																																															r =
																																																u;
																																														let s =
																																															!1;
																																														const o =
																																															u;
																																														if (
																																															"number" !=
																																															typeof t
																																														) {
																																															const e =
																																																{
																																																	params:
																																																		{
																																																			type: "number"
																																																		}
																																																};
																																															null ===
																																															p
																																																? (p =
																																																		[
																																																			e
																																																		])
																																																: p.push(
																																																		e
																																																  ),
																																																u++;
																																														}
																																														var L =
																																															o ===
																																															u;
																																														if (
																																															((s =
																																																s ||
																																																L),
																																															!s)
																																														) {
																																															const e =
																																																u;
																																															if (
																																																"boolean" !=
																																																typeof t
																																															) {
																																																const e =
																																																	{
																																																		params:
																																																			{
																																																				type: "boolean"
																																																			}
																																																	};
																																																null ===
																																																p
																																																	? (p =
																																																			[
																																																				e
																																																			])
																																																	: p.push(
																																																			e
																																																	  ),
																																																	u++;
																																															}
																																															(L =
																																																e ===
																																																u),
																																																(s =
																																																	s ||
																																																	L);
																																														}
																																														if (
																																															!s
																																														) {
																																															const e =
																																																{
																																																	params:
																																																		{}
																																																};
																																															return (
																																																null ===
																																																p
																																																	? (p =
																																																			[
																																																				e
																																																			])
																																																	: p.push(
																																																			e
																																																	  ),
																																																u++,
																																																(we.errors =
																																																	p),
																																																!1
																																															);
																																														}
																																														(u =
																																															r),
																																															null !==
																																																p &&
																																																(r
																																																	? (p.length =
																																																			r)
																																																	: (p =
																																																			null)),
																																															($ =
																																																n ===
																																																u);
																																													} else
																																														$ =
																																															!0;
																																													if (
																																														$
																																													)
																																														if (
																																															void 0 !==
																																															e.stdin
																																														) {
																																															const t =
																																																u;
																																															if (
																																																"boolean" !=
																																																typeof e.stdin
																																															)
																																																return (
																																																	(we.errors =
																																																		[
																																																			{
																																																				params:
																																																					{
																																																						type: "boolean"
																																																					}
																																																			}
																																																		]),
																																																	!1
																																																);
																																															$ =
																																																t ===
																																																u;
																																														} else
																																															$ =
																																																!0;
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																							c =
																																								t ===
																																								u;
																																						} else
																																							c =
																																								!0;
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (we.errors = p), 0 === u;
}

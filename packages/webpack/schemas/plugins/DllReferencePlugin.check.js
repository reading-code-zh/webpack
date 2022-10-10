/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const s = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
function t(
	s,
	{
		instancePath: e = "",
		parentData: n,
		parentDataProperty: l,
		rootData: o = s
	} = {}
) {
	let r = null,
		i = 0;
	if (0 === i) {
		if (!s || "object" != typeof s || Array.isArray(s))
			return (t.errors = [{ params: { type: "object" } }]), !1;
		{
			let e;
			if (void 0 === s.content && (e = "content"))
				return (t.errors = [{ params: { missingProperty: e } }]), !1;
			{
				const e = i;
				for (const e in s)
					if ("content" !== e && "name" !== e && "type" !== e)
						return (t.errors = [{ params: { additionalProperty: e } }]), !1;
				if (e === i) {
					if (void 0 !== s.content) {
						let e = s.content;
						const n = i,
							l = i;
						let o = !1,
							f = null;
						const m = i;
						if (i == i)
							if (e && "object" == typeof e && !Array.isArray(e))
								if (Object.keys(e).length < 1) {
									const s = { params: { limit: 1 } };
									null === r ? (r = [s]) : r.push(s), i++;
								} else
									for (const s in e) {
										let t = e[s];
										const n = i;
										if (i === n)
											if (t && "object" == typeof t && !Array.isArray(t)) {
												let s;
												if (void 0 === t.id && (s = "id")) {
													const t = { params: { missingProperty: s } };
													null === r ? (r = [t]) : r.push(t), i++;
												} else {
													const s = i;
													for (const s in t)
														if (
															"buildMeta" !== s &&
															"exports" !== s &&
															"id" !== s
														) {
															const t = { params: { additionalProperty: s } };
															null === r ? (r = [t]) : r.push(t), i++;
															break;
														}
													if (s === i) {
														if (void 0 !== t.buildMeta) {
															let s = t.buildMeta;
															const e = i;
															if (
																!s ||
																"object" != typeof s ||
																Array.isArray(s)
															) {
																const s = { params: { type: "object" } };
																null === r ? (r = [s]) : r.push(s), i++;
															}
															var a = e === i;
														} else a = !0;
														if (a) {
															if (void 0 !== t.exports) {
																let s = t.exports;
																const e = i,
																	n = i;
																let l = !1;
																const o = i;
																if (i === o)
																	if (Array.isArray(s)) {
																		const t = s.length;
																		for (let e = 0; e < t; e++) {
																			let t = s[e];
																			const n = i;
																			if (i === n)
																				if ("string" == typeof t) {
																					if (t.length < 1) {
																						const s = { params: {} };
																						null === r ? (r = [s]) : r.push(s),
																							i++;
																					}
																				} else {
																					const s = {
																						params: { type: "string" }
																					};
																					null === r ? (r = [s]) : r.push(s),
																						i++;
																				}
																			if (n !== i) break;
																		}
																	} else {
																		const s = { params: { type: "array" } };
																		null === r ? (r = [s]) : r.push(s), i++;
																	}
																var p = o === i;
																if (((l = l || p), !l)) {
																	const t = i;
																	if (!0 !== s) {
																		const s = { params: {} };
																		null === r ? (r = [s]) : r.push(s), i++;
																	}
																	(p = t === i), (l = l || p);
																}
																if (l)
																	(i = n),
																		null !== r &&
																			(n ? (r.length = n) : (r = null));
																else {
																	const s = { params: {} };
																	null === r ? (r = [s]) : r.push(s), i++;
																}
																a = e === i;
															} else a = !0;
															if (a)
																if (void 0 !== t.id) {
																	let s = t.id;
																	const e = i,
																		n = i;
																	let l = !1;
																	const o = i;
																	if ("number" != typeof s) {
																		const s = { params: { type: "number" } };
																		null === r ? (r = [s]) : r.push(s), i++;
																	}
																	var u = o === i;
																	if (((l = l || u), !l)) {
																		const t = i;
																		if (i === t)
																			if ("string" == typeof s) {
																				if (s.length < 1) {
																					const s = { params: {} };
																					null === r ? (r = [s]) : r.push(s),
																						i++;
																				}
																			} else {
																				const s = {
																					params: { type: "string" }
																				};
																				null === r ? (r = [s]) : r.push(s), i++;
																			}
																		(u = t === i), (l = l || u);
																	}
																	if (l)
																		(i = n),
																			null !== r &&
																				(n ? (r.length = n) : (r = null));
																	else {
																		const s = { params: {} };
																		null === r ? (r = [s]) : r.push(s), i++;
																	}
																	a = e === i;
																} else a = !0;
														}
													}
												}
											} else {
												const s = { params: { type: "object" } };
												null === r ? (r = [s]) : r.push(s), i++;
											}
										if (n !== i) break;
									}
							else {
								const s = { params: { type: "object" } };
								null === r ? (r = [s]) : r.push(s), i++;
							}
						if ((m === i && ((o = !0), (f = 0)), !o)) {
							const s = { params: { passingSchemas: f } };
							return (
								null === r ? (r = [s]) : r.push(s), i++, (t.errors = r), !1
							);
						}
						(i = l), null !== r && (l ? (r.length = l) : (r = null));
						var c = n === i;
					} else c = !0;
					if (c) {
						if (void 0 !== s.name) {
							let e = s.name;
							const n = i;
							if (i === n) {
								if ("string" != typeof e)
									return (t.errors = [{ params: { type: "string" } }]), !1;
								if (e.length < 1) return (t.errors = [{ params: {} }]), !1;
							}
							c = n === i;
						} else c = !0;
						if (c)
							if (void 0 !== s.type) {
								let e = s.type;
								const n = i,
									l = i;
								let o = !1,
									a = null;
								const p = i;
								if (
									"var" !== e &&
									"assign" !== e &&
									"this" !== e &&
									"window" !== e &&
									"global" !== e &&
									"commonjs" !== e &&
									"commonjs2" !== e &&
									"commonjs-module" !== e &&
									"amd" !== e &&
									"amd-require" !== e &&
									"umd" !== e &&
									"umd2" !== e &&
									"jsonp" !== e &&
									"system" !== e
								) {
									const s = { params: {} };
									null === r ? (r = [s]) : r.push(s), i++;
								}
								if ((p === i && ((o = !0), (a = 0)), !o)) {
									const s = { params: { passingSchemas: a } };
									return (
										null === r ? (r = [s]) : r.push(s), i++, (t.errors = r), !1
									);
								}
								(i = l),
									null !== r && (l ? (r.length = l) : (r = null)),
									(c = n === i);
							} else c = !0;
					}
				}
			}
		}
	}
	return (t.errors = r), 0 === i;
}
function e(
	n,
	{
		instancePath: l = "",
		parentData: o,
		parentDataProperty: r,
		rootData: i = n
	} = {}
) {
	let a = null,
		p = 0;
	const u = p;
	let c = !1;
	const f = p;
	if (p === f)
		if (n && "object" == typeof n && !Array.isArray(n)) {
			let e;
			if (void 0 === n.manifest && (e = "manifest")) {
				const s = { params: { missingProperty: e } };
				null === a ? (a = [s]) : a.push(s), p++;
			} else {
				const e = p;
				for (const s in n)
					if (
						"context" !== s &&
						"extensions" !== s &&
						"manifest" !== s &&
						"name" !== s &&
						"scope" !== s &&
						"sourceType" !== s &&
						"type" !== s
					) {
						const t = { params: { additionalProperty: s } };
						null === a ? (a = [t]) : a.push(t), p++;
						break;
					}
				if (e === p) {
					if (void 0 !== n.context) {
						let t = n.context;
						const e = p;
						if (p === e)
							if ("string" == typeof t) {
								if (t.includes("!") || !0 !== s.test(t)) {
									const s = { params: {} };
									null === a ? (a = [s]) : a.push(s), p++;
								}
							} else {
								const s = { params: { type: "string" } };
								null === a ? (a = [s]) : a.push(s), p++;
							}
						var m = e === p;
					} else m = !0;
					if (m) {
						if (void 0 !== n.extensions) {
							let s = n.extensions;
							const t = p;
							if (p === t)
								if (Array.isArray(s)) {
									const t = s.length;
									for (let e = 0; e < t; e++) {
										const t = p;
										if ("string" != typeof s[e]) {
											const s = { params: { type: "string" } };
											null === a ? (a = [s]) : a.push(s), p++;
										}
										if (t !== p) break;
									}
								} else {
									const s = { params: { type: "array" } };
									null === a ? (a = [s]) : a.push(s), p++;
								}
							m = t === p;
						} else m = !0;
						if (m) {
							if (void 0 !== n.manifest) {
								let e = n.manifest;
								const o = p,
									r = p;
								let u = !1;
								const c = p;
								if (p === c)
									if ("string" == typeof e) {
										if (e.includes("!") || !0 !== s.test(e)) {
											const s = { params: {} };
											null === a ? (a = [s]) : a.push(s), p++;
										}
									} else {
										const s = { params: { type: "string" } };
										null === a ? (a = [s]) : a.push(s), p++;
									}
								var y = c === p;
								if (((u = u || y), !u)) {
									const s = p;
									t(e, {
										instancePath: l + "/manifest",
										parentData: n,
										parentDataProperty: "manifest",
										rootData: i
									}) ||
										((a = null === a ? t.errors : a.concat(t.errors)),
										(p = a.length)),
										(y = s === p),
										(u = u || y);
								}
								if (u) (p = r), null !== a && (r ? (a.length = r) : (a = null));
								else {
									const s = { params: {} };
									null === a ? (a = [s]) : a.push(s), p++;
								}
								m = o === p;
							} else m = !0;
							if (m) {
								if (void 0 !== n.name) {
									let s = n.name;
									const t = p;
									if (p === t)
										if ("string" == typeof s) {
											if (s.length < 1) {
												const s = { params: {} };
												null === a ? (a = [s]) : a.push(s), p++;
											}
										} else {
											const s = { params: { type: "string" } };
											null === a ? (a = [s]) : a.push(s), p++;
										}
									m = t === p;
								} else m = !0;
								if (m) {
									if (void 0 !== n.scope) {
										let s = n.scope;
										const t = p;
										if (p === t)
											if ("string" == typeof s) {
												if (s.length < 1) {
													const s = { params: {} };
													null === a ? (a = [s]) : a.push(s), p++;
												}
											} else {
												const s = { params: { type: "string" } };
												null === a ? (a = [s]) : a.push(s), p++;
											}
										m = t === p;
									} else m = !0;
									if (m) {
										if (void 0 !== n.sourceType) {
											let s = n.sourceType;
											const t = p,
												e = p;
											let l = !1,
												o = null;
											const r = p;
											if (
												"var" !== s &&
												"assign" !== s &&
												"this" !== s &&
												"window" !== s &&
												"global" !== s &&
												"commonjs" !== s &&
												"commonjs2" !== s &&
												"commonjs-module" !== s &&
												"amd" !== s &&
												"amd-require" !== s &&
												"umd" !== s &&
												"umd2" !== s &&
												"jsonp" !== s &&
												"system" !== s
											) {
												const s = { params: {} };
												null === a ? (a = [s]) : a.push(s), p++;
											}
											if ((r === p && ((l = !0), (o = 0)), l))
												(p = e),
													null !== a && (e ? (a.length = e) : (a = null));
											else {
												const s = { params: { passingSchemas: o } };
												null === a ? (a = [s]) : a.push(s), p++;
											}
											m = t === p;
										} else m = !0;
										if (m)
											if (void 0 !== n.type) {
												let s = n.type;
												const t = p;
												if ("require" !== s && "object" !== s) {
													const s = { params: {} };
													null === a ? (a = [s]) : a.push(s), p++;
												}
												m = t === p;
											} else m = !0;
									}
								}
							}
						}
					}
				}
			}
		} else {
			const s = { params: { type: "object" } };
			null === a ? (a = [s]) : a.push(s), p++;
		}
	var h = f === p;
	if (((c = c || h), !c)) {
		const t = p;
		if (p === t)
			if (n && "object" == typeof n && !Array.isArray(n)) {
				let t;
				if (
					(void 0 === n.content && (t = "content")) ||
					(void 0 === n.name && (t = "name"))
				) {
					const s = { params: { missingProperty: t } };
					null === a ? (a = [s]) : a.push(s), p++;
				} else {
					const t = p;
					for (const s in n)
						if (
							"content" !== s &&
							"context" !== s &&
							"extensions" !== s &&
							"name" !== s &&
							"scope" !== s &&
							"sourceType" !== s &&
							"type" !== s
						) {
							const t = { params: { additionalProperty: s } };
							null === a ? (a = [t]) : a.push(t), p++;
							break;
						}
					if (t === p) {
						if (void 0 !== n.content) {
							let s = n.content;
							const t = p,
								e = p;
							let l = !1,
								o = null;
							const r = p;
							if (p == p)
								if (s && "object" == typeof s && !Array.isArray(s))
									if (Object.keys(s).length < 1) {
										const s = { params: { limit: 1 } };
										null === a ? (a = [s]) : a.push(s), p++;
									} else
										for (const t in s) {
											let e = s[t];
											const n = p;
											if (p === n)
												if (e && "object" == typeof e && !Array.isArray(e)) {
													let s;
													if (void 0 === e.id && (s = "id")) {
														const t = { params: { missingProperty: s } };
														null === a ? (a = [t]) : a.push(t), p++;
													} else {
														const s = p;
														for (const s in e)
															if (
																"buildMeta" !== s &&
																"exports" !== s &&
																"id" !== s
															) {
																const t = { params: { additionalProperty: s } };
																null === a ? (a = [t]) : a.push(t), p++;
																break;
															}
														if (s === p) {
															if (void 0 !== e.buildMeta) {
																let s = e.buildMeta;
																const t = p;
																if (
																	!s ||
																	"object" != typeof s ||
																	Array.isArray(s)
																) {
																	const s = { params: { type: "object" } };
																	null === a ? (a = [s]) : a.push(s), p++;
																}
																var d = t === p;
															} else d = !0;
															if (d) {
																if (void 0 !== e.exports) {
																	let s = e.exports;
																	const t = p,
																		n = p;
																	let l = !1;
																	const o = p;
																	if (p === o)
																		if (Array.isArray(s)) {
																			const t = s.length;
																			for (let e = 0; e < t; e++) {
																				let t = s[e];
																				const n = p;
																				if (p === n)
																					if ("string" == typeof t) {
																						if (t.length < 1) {
																							const s = { params: {} };
																							null === a
																								? (a = [s])
																								: a.push(s),
																								p++;
																						}
																					} else {
																						const s = {
																							params: { type: "string" }
																						};
																						null === a ? (a = [s]) : a.push(s),
																							p++;
																					}
																				if (n !== p) break;
																			}
																		} else {
																			const s = { params: { type: "array" } };
																			null === a ? (a = [s]) : a.push(s), p++;
																		}
																	var g = o === p;
																	if (((l = l || g), !l)) {
																		const t = p;
																		if (!0 !== s) {
																			const s = { params: {} };
																			null === a ? (a = [s]) : a.push(s), p++;
																		}
																		(g = t === p), (l = l || g);
																	}
																	if (l)
																		(p = n),
																			null !== a &&
																				(n ? (a.length = n) : (a = null));
																	else {
																		const s = { params: {} };
																		null === a ? (a = [s]) : a.push(s), p++;
																	}
																	d = t === p;
																} else d = !0;
																if (d)
																	if (void 0 !== e.id) {
																		let s = e.id;
																		const t = p,
																			n = p;
																		let l = !1;
																		const o = p;
																		if ("number" != typeof s) {
																			const s = { params: { type: "number" } };
																			null === a ? (a = [s]) : a.push(s), p++;
																		}
																		var b = o === p;
																		if (((l = l || b), !l)) {
																			const t = p;
																			if (p === t)
																				if ("string" == typeof s) {
																					if (s.length < 1) {
																						const s = { params: {} };
																						null === a ? (a = [s]) : a.push(s),
																							p++;
																					}
																				} else {
																					const s = {
																						params: { type: "string" }
																					};
																					null === a ? (a = [s]) : a.push(s),
																						p++;
																				}
																			(b = t === p), (l = l || b);
																		}
																		if (l)
																			(p = n),
																				null !== a &&
																					(n ? (a.length = n) : (a = null));
																		else {
																			const s = { params: {} };
																			null === a ? (a = [s]) : a.push(s), p++;
																		}
																		d = t === p;
																	} else d = !0;
															}
														}
													}
												} else {
													const s = { params: { type: "object" } };
													null === a ? (a = [s]) : a.push(s), p++;
												}
											if (n !== p) break;
										}
								else {
									const s = { params: { type: "object" } };
									null === a ? (a = [s]) : a.push(s), p++;
								}
							if ((r === p && ((l = !0), (o = 0)), l))
								(p = e), null !== a && (e ? (a.length = e) : (a = null));
							else {
								const s = { params: { passingSchemas: o } };
								null === a ? (a = [s]) : a.push(s), p++;
							}
							var v = t === p;
						} else v = !0;
						if (v) {
							if (void 0 !== n.context) {
								let t = n.context;
								const e = p;
								if (p === e)
									if ("string" == typeof t) {
										if (t.includes("!") || !0 !== s.test(t)) {
											const s = { params: {} };
											null === a ? (a = [s]) : a.push(s), p++;
										}
									} else {
										const s = { params: { type: "string" } };
										null === a ? (a = [s]) : a.push(s), p++;
									}
								v = e === p;
							} else v = !0;
							if (v) {
								if (void 0 !== n.extensions) {
									let s = n.extensions;
									const t = p;
									if (p === t)
										if (Array.isArray(s)) {
											const t = s.length;
											for (let e = 0; e < t; e++) {
												const t = p;
												if ("string" != typeof s[e]) {
													const s = { params: { type: "string" } };
													null === a ? (a = [s]) : a.push(s), p++;
												}
												if (t !== p) break;
											}
										} else {
											const s = { params: { type: "array" } };
											null === a ? (a = [s]) : a.push(s), p++;
										}
									v = t === p;
								} else v = !0;
								if (v) {
									if (void 0 !== n.name) {
										let s = n.name;
										const t = p;
										if (p === t)
											if ("string" == typeof s) {
												if (s.length < 1) {
													const s = { params: {} };
													null === a ? (a = [s]) : a.push(s), p++;
												}
											} else {
												const s = { params: { type: "string" } };
												null === a ? (a = [s]) : a.push(s), p++;
											}
										v = t === p;
									} else v = !0;
									if (v) {
										if (void 0 !== n.scope) {
											let s = n.scope;
											const t = p;
											if (p === t)
												if ("string" == typeof s) {
													if (s.length < 1) {
														const s = { params: {} };
														null === a ? (a = [s]) : a.push(s), p++;
													}
												} else {
													const s = { params: { type: "string" } };
													null === a ? (a = [s]) : a.push(s), p++;
												}
											v = t === p;
										} else v = !0;
										if (v) {
											if (void 0 !== n.sourceType) {
												let s = n.sourceType;
												const t = p,
													e = p;
												let l = !1,
													o = null;
												const r = p;
												if (
													"var" !== s &&
													"assign" !== s &&
													"this" !== s &&
													"window" !== s &&
													"global" !== s &&
													"commonjs" !== s &&
													"commonjs2" !== s &&
													"commonjs-module" !== s &&
													"amd" !== s &&
													"amd-require" !== s &&
													"umd" !== s &&
													"umd2" !== s &&
													"jsonp" !== s &&
													"system" !== s
												) {
													const s = { params: {} };
													null === a ? (a = [s]) : a.push(s), p++;
												}
												if ((r === p && ((l = !0), (o = 0)), l))
													(p = e),
														null !== a && (e ? (a.length = e) : (a = null));
												else {
													const s = { params: { passingSchemas: o } };
													null === a ? (a = [s]) : a.push(s), p++;
												}
												v = t === p;
											} else v = !0;
											if (v)
												if (void 0 !== n.type) {
													let s = n.type;
													const t = p;
													if ("require" !== s && "object" !== s) {
														const s = { params: {} };
														null === a ? (a = [s]) : a.push(s), p++;
													}
													v = t === p;
												} else v = !0;
										}
									}
								}
							}
						}
					}
				}
			} else {
				const s = { params: { type: "object" } };
				null === a ? (a = [s]) : a.push(s), p++;
			}
		(h = t === p), (c = c || h);
	}
	if (!c) {
		const s = { params: {} };
		return null === a ? (a = [s]) : a.push(s), p++, (e.errors = a), !1;
	}
	return (
		(p = u),
		null !== a && (u ? (a.length = u) : (a = null)),
		(e.errors = a),
		0 === p
	);
}
(module.exports = e), (module.exports.default = e);

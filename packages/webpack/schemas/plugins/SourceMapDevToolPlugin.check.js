/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const e = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
(module.exports = l), (module.exports.default = l);
const n = {
		append: { anyOf: [{ enum: [!1, null] }, { type: "string", minLength: 1 }] },
		columns: { type: "boolean" },
		exclude: { oneOf: [{ $ref: "#/definitions/rules" }] },
		fallbackModuleFilenameTemplate: {
			anyOf: [{ type: "string", minLength: 1 }, { instanceof: "Function" }]
		},
		fileContext: { type: "string" },
		filename: {
			anyOf: [
				{ enum: [!1, null] },
				{ type: "string", absolutePath: !1, minLength: 1 }
			]
		},
		include: { oneOf: [{ $ref: "#/definitions/rules" }] },
		module: { type: "boolean" },
		moduleFilenameTemplate: {
			anyOf: [{ type: "string", minLength: 1 }, { instanceof: "Function" }]
		},
		namespace: { type: "string" },
		noSources: { type: "boolean" },
		publicPath: { type: "string" },
		sourceRoot: { type: "string" },
		test: { $ref: "#/definitions/rules" }
	},
	t = Object.prototype.hasOwnProperty;
function s(
	e,
	{
		instancePath: n = "",
		parentData: t,
		parentDataProperty: l,
		rootData: r = e
	} = {}
) {
	let o = null,
		a = 0;
	const i = a;
	let u = !1;
	const p = a;
	if (a === p)
		if (Array.isArray(e)) {
			const n = e.length;
			for (let t = 0; t < n; t++) {
				let n = e[t];
				const s = a,
					l = a;
				let r = !1,
					i = null;
				const u = a,
					p = a;
				let c = !1;
				const m = a;
				if (!(n instanceof RegExp)) {
					const e = { params: {} };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				var f = m === a;
				if (((c = c || f), !c)) {
					const e = a;
					if (a === e)
						if ("string" == typeof n) {
							if (n.length < 1) {
								const e = { params: {} };
								null === o ? (o = [e]) : o.push(e), a++;
							}
						} else {
							const e = { params: { type: "string" } };
							null === o ? (o = [e]) : o.push(e), a++;
						}
					(f = e === a), (c = c || f);
				}
				if (c) (a = p), null !== o && (p ? (o.length = p) : (o = null));
				else {
					const e = { params: {} };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				if ((u === a && ((r = !0), (i = 0)), r))
					(a = l), null !== o && (l ? (o.length = l) : (o = null));
				else {
					const e = { params: { passingSchemas: i } };
					null === o ? (o = [e]) : o.push(e), a++;
				}
				if (s !== a) break;
			}
		} else {
			const e = { params: { type: "array" } };
			null === o ? (o = [e]) : o.push(e), a++;
		}
	var c = p === a;
	if (((u = u || c), !u)) {
		const n = a,
			t = a;
		let s = !1;
		const l = a;
		if (!(e instanceof RegExp)) {
			const e = { params: {} };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		var m = l === a;
		if (((s = s || m), !s)) {
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
			(m = n === a), (s = s || m);
		}
		if (s) (a = t), null !== o && (t ? (o.length = t) : (o = null));
		else {
			const e = { params: {} };
			null === o ? (o = [e]) : o.push(e), a++;
		}
		(c = n === a), (u = u || c);
	}
	if (!u) {
		const e = { params: {} };
		return null === o ? (o = [e]) : o.push(e), a++, (s.errors = o), !1;
	}
	return (
		(a = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(s.errors = o),
		0 === a
	);
}
function l(
	r,
	{
		instancePath: o = "",
		parentData: a,
		parentDataProperty: i,
		rootData: u = r
	} = {}
) {
	let p = null,
		f = 0;
	if (0 === f) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (l.errors = [{ params: { type: "object" } }]), !1;
		{
			const a = f;
			for (const e in r)
				if (!t.call(n, e))
					return (l.errors = [{ params: { additionalProperty: e } }]), !1;
			if (a === f) {
				if (void 0 !== r.append) {
					let e = r.append;
					const n = f,
						t = f;
					let s = !1;
					const o = f;
					if (!1 !== e && null !== e) {
						const e = { params: {} };
						null === p ? (p = [e]) : p.push(e), f++;
					}
					var c = o === f;
					if (((s = s || c), !s)) {
						const n = f;
						if (f === n)
							if ("string" == typeof e) {
								if (e.length < 1) {
									const e = { params: {} };
									null === p ? (p = [e]) : p.push(e), f++;
								}
							} else {
								const e = { params: { type: "string" } };
								null === p ? (p = [e]) : p.push(e), f++;
							}
						(c = n === f), (s = s || c);
					}
					if (!s) {
						const e = { params: {} };
						return null === p ? (p = [e]) : p.push(e), f++, (l.errors = p), !1;
					}
					(f = t), null !== p && (t ? (p.length = t) : (p = null));
					var m = n === f;
				} else m = !0;
				if (m) {
					if (void 0 !== r.columns) {
						const e = f;
						if ("boolean" != typeof r.columns)
							return (l.errors = [{ params: { type: "boolean" } }]), !1;
						m = e === f;
					} else m = !0;
					if (m) {
						if (void 0 !== r.exclude) {
							const e = f,
								n = f;
							let t = !1,
								a = null;
							const i = f;
							if (
								(s(r.exclude, {
									instancePath: o + "/exclude",
									parentData: r,
									parentDataProperty: "exclude",
									rootData: u
								}) ||
									((p = null === p ? s.errors : p.concat(s.errors)),
									(f = p.length)),
								i === f && ((t = !0), (a = 0)),
								!t)
							) {
								const e = { params: { passingSchemas: a } };
								return (
									null === p ? (p = [e]) : p.push(e), f++, (l.errors = p), !1
								);
							}
							(f = n),
								null !== p && (n ? (p.length = n) : (p = null)),
								(m = e === f);
						} else m = !0;
						if (m) {
							if (void 0 !== r.fallbackModuleFilenameTemplate) {
								let e = r.fallbackModuleFilenameTemplate;
								const n = f,
									t = f;
								let s = !1;
								const o = f;
								if (f === o)
									if ("string" == typeof e) {
										if (e.length < 1) {
											const e = { params: {} };
											null === p ? (p = [e]) : p.push(e), f++;
										}
									} else {
										const e = { params: { type: "string" } };
										null === p ? (p = [e]) : p.push(e), f++;
									}
								var h = o === f;
								if (((s = s || h), !s)) {
									const n = f;
									if (!(e instanceof Function)) {
										const e = { params: {} };
										null === p ? (p = [e]) : p.push(e), f++;
									}
									(h = n === f), (s = s || h);
								}
								if (!s) {
									const e = { params: {} };
									return (
										null === p ? (p = [e]) : p.push(e), f++, (l.errors = p), !1
									);
								}
								(f = t),
									null !== p && (t ? (p.length = t) : (p = null)),
									(m = n === f);
							} else m = !0;
							if (m) {
								if (void 0 !== r.fileContext) {
									const e = f;
									if ("string" != typeof r.fileContext)
										return (l.errors = [{ params: { type: "string" } }]), !1;
									m = e === f;
								} else m = !0;
								if (m) {
									if (void 0 !== r.filename) {
										let n = r.filename;
										const t = f,
											s = f;
										let o = !1;
										const a = f;
										if (!1 !== n && null !== n) {
											const e = { params: {} };
											null === p ? (p = [e]) : p.push(e), f++;
										}
										var g = a === f;
										if (((o = o || g), !o)) {
											const t = f;
											if (f === t)
												if ("string" == typeof n) {
													if (n.includes("!") || !1 !== e.test(n)) {
														const e = { params: {} };
														null === p ? (p = [e]) : p.push(e), f++;
													} else if (n.length < 1) {
														const e = { params: {} };
														null === p ? (p = [e]) : p.push(e), f++;
													}
												} else {
													const e = { params: { type: "string" } };
													null === p ? (p = [e]) : p.push(e), f++;
												}
											(g = t === f), (o = o || g);
										}
										if (!o) {
											const e = { params: {} };
											return (
												null === p ? (p = [e]) : p.push(e),
												f++,
												(l.errors = p),
												!1
											);
										}
										(f = s),
											null !== p && (s ? (p.length = s) : (p = null)),
											(m = t === f);
									} else m = !0;
									if (m) {
										if (void 0 !== r.include) {
											const e = f,
												n = f;
											let t = !1,
												a = null;
											const i = f;
											if (
												(s(r.include, {
													instancePath: o + "/include",
													parentData: r,
													parentDataProperty: "include",
													rootData: u
												}) ||
													((p = null === p ? s.errors : p.concat(s.errors)),
													(f = p.length)),
												i === f && ((t = !0), (a = 0)),
												!t)
											) {
												const e = { params: { passingSchemas: a } };
												return (
													null === p ? (p = [e]) : p.push(e),
													f++,
													(l.errors = p),
													!1
												);
											}
											(f = n),
												null !== p && (n ? (p.length = n) : (p = null)),
												(m = e === f);
										} else m = !0;
										if (m) {
											if (void 0 !== r.module) {
												const e = f;
												if ("boolean" != typeof r.module)
													return (
														(l.errors = [{ params: { type: "boolean" } }]), !1
													);
												m = e === f;
											} else m = !0;
											if (m) {
												if (void 0 !== r.moduleFilenameTemplate) {
													let e = r.moduleFilenameTemplate;
													const n = f,
														t = f;
													let s = !1;
													const o = f;
													if (f === o)
														if ("string" == typeof e) {
															if (e.length < 1) {
																const e = { params: {} };
																null === p ? (p = [e]) : p.push(e), f++;
															}
														} else {
															const e = { params: { type: "string" } };
															null === p ? (p = [e]) : p.push(e), f++;
														}
													var y = o === f;
													if (((s = s || y), !s)) {
														const n = f;
														if (!(e instanceof Function)) {
															const e = { params: {} };
															null === p ? (p = [e]) : p.push(e), f++;
														}
														(y = n === f), (s = s || y);
													}
													if (!s) {
														const e = { params: {} };
														return (
															null === p ? (p = [e]) : p.push(e),
															f++,
															(l.errors = p),
															!1
														);
													}
													(f = t),
														null !== p && (t ? (p.length = t) : (p = null)),
														(m = n === f);
												} else m = !0;
												if (m) {
													if (void 0 !== r.namespace) {
														const e = f;
														if ("string" != typeof r.namespace)
															return (
																(l.errors = [{ params: { type: "string" } }]),
																!1
															);
														m = e === f;
													} else m = !0;
													if (m) {
														if (void 0 !== r.noSources) {
															const e = f;
															if ("boolean" != typeof r.noSources)
																return (
																	(l.errors = [
																		{ params: { type: "boolean" } }
																	]),
																	!1
																);
															m = e === f;
														} else m = !0;
														if (m) {
															if (void 0 !== r.publicPath) {
																const e = f;
																if ("string" != typeof r.publicPath)
																	return (
																		(l.errors = [
																			{ params: { type: "string" } }
																		]),
																		!1
																	);
																m = e === f;
															} else m = !0;
															if (m) {
																if (void 0 !== r.sourceRoot) {
																	const e = f;
																	if ("string" != typeof r.sourceRoot)
																		return (
																			(l.errors = [
																				{ params: { type: "string" } }
																			]),
																			!1
																		);
																	m = e === f;
																} else m = !0;
																if (m)
																	if (void 0 !== r.test) {
																		const e = f;
																		s(r.test, {
																			instancePath: o + "/test",
																			parentData: r,
																			parentDataProperty: "test",
																			rootData: u
																		}) ||
																			((p =
																				null === p
																					? s.errors
																					: p.concat(s.errors)),
																			(f = p.length)),
																			(m = e === f);
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
	return (l.errors = p), 0 === f;
}

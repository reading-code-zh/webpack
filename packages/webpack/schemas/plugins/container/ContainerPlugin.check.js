/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const r = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
function t(
	r,
	{
		instancePath: e = "",
		parentData: n,
		parentDataProperty: s,
		rootData: a = r
	} = {}
) {
	if (!Array.isArray(r))
		return (t.errors = [{ params: { type: "array" } }]), !1;
	{
		const e = r.length;
		for (let n = 0; n < e; n++) {
			let e = r[n];
			const s = 0;
			if ("string" != typeof e)
				return (t.errors = [{ params: { type: "string" } }]), !1;
			if (e.length < 1) return (t.errors = [{ params: {} }]), !1;
			if (0 !== s) break;
		}
	}
	return (t.errors = null), !0;
}
function e(
	r,
	{
		instancePath: n = "",
		parentData: s,
		parentDataProperty: a,
		rootData: o = r
	} = {}
) {
	let l = null,
		i = 0;
	if (0 === i) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (e.errors = [{ params: { type: "object" } }]), !1;
		{
			let s;
			if (void 0 === r.import && (s = "import"))
				return (e.errors = [{ params: { missingProperty: s } }]), !1;
			{
				const s = i;
				for (const t in r)
					if ("import" !== t && "name" !== t)
						return (e.errors = [{ params: { additionalProperty: t } }]), !1;
				if (s === i) {
					if (void 0 !== r.import) {
						let s = r.import;
						const a = i,
							u = i;
						let c = !1;
						const m = i;
						if (i == i)
							if ("string" == typeof s) {
								if (s.length < 1) {
									const r = { params: {} };
									null === l ? (l = [r]) : l.push(r), i++;
								}
							} else {
								const r = { params: { type: "string" } };
								null === l ? (l = [r]) : l.push(r), i++;
							}
						var p = m === i;
						if (((c = c || p), !c)) {
							const e = i;
							t(s, {
								instancePath: n + "/import",
								parentData: r,
								parentDataProperty: "import",
								rootData: o
							}) ||
								((l = null === l ? t.errors : l.concat(t.errors)),
								(i = l.length)),
								(p = e === i),
								(c = c || p);
						}
						if (!c) {
							const r = { params: {} };
							return (
								null === l ? (l = [r]) : l.push(r), i++, (e.errors = l), !1
							);
						}
						(i = u), null !== l && (u ? (l.length = u) : (l = null));
						var f = a === i;
					} else f = !0;
					if (f)
						if (void 0 !== r.name) {
							const t = i;
							if ("string" != typeof r.name)
								return (e.errors = [{ params: { type: "string" } }]), !1;
							f = t === i;
						} else f = !0;
				}
			}
		}
	}
	return (e.errors = l), 0 === i;
}
function n(
	r,
	{
		instancePath: s = "",
		parentData: a,
		parentDataProperty: o,
		rootData: l = r
	} = {}
) {
	let i = null,
		p = 0;
	if (0 === p) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (n.errors = [{ params: { type: "object" } }]), !1;
		for (const a in r) {
			let o = r[a];
			const u = p,
				c = p;
			let m = !1;
			const y = p;
			e(o, {
				instancePath: s + "/" + a.replace(/~/g, "~0").replace(/\//g, "~1"),
				parentData: r,
				parentDataProperty: a,
				rootData: l
			}) || ((i = null === i ? e.errors : i.concat(e.errors)), (p = i.length));
			var f = y === p;
			if (((m = m || f), !m)) {
				const e = p;
				if (p == p)
					if ("string" == typeof o) {
						if (o.length < 1) {
							const r = { params: {} };
							null === i ? (i = [r]) : i.push(r), p++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === i ? (i = [r]) : i.push(r), p++;
					}
				if (((f = e === p), (m = m || f), !m)) {
					const e = p;
					t(o, {
						instancePath: s + "/" + a.replace(/~/g, "~0").replace(/\//g, "~1"),
						parentData: r,
						parentDataProperty: a,
						rootData: l
					}) ||
						((i = null === i ? t.errors : i.concat(t.errors)), (p = i.length)),
						(f = e === p),
						(m = m || f);
				}
			}
			if (!m) {
				const r = { params: {} };
				return null === i ? (i = [r]) : i.push(r), p++, (n.errors = i), !1;
			}
			if (((p = c), null !== i && (c ? (i.length = c) : (i = null)), u !== p))
				break;
		}
	}
	return (n.errors = i), 0 === p;
}
function s(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: a,
		rootData: o = r
	} = {}
) {
	let l = null,
		i = 0;
	const p = i;
	let f = !1;
	const u = i;
	if (i === u)
		if (Array.isArray(r)) {
			const e = r.length;
			for (let s = 0; s < e; s++) {
				let e = r[s];
				const a = i,
					p = i;
				let f = !1;
				const u = i;
				if (i == i)
					if ("string" == typeof e) {
						if (e.length < 1) {
							const r = { params: {} };
							null === l ? (l = [r]) : l.push(r), i++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === l ? (l = [r]) : l.push(r), i++;
					}
				var c = u === i;
				if (((f = f || c), !f)) {
					const a = i;
					n(e, {
						instancePath: t + "/" + s,
						parentData: r,
						parentDataProperty: s,
						rootData: o
					}) ||
						((l = null === l ? n.errors : l.concat(n.errors)), (i = l.length)),
						(c = a === i),
						(f = f || c);
				}
				if (f) (i = p), null !== l && (p ? (l.length = p) : (l = null));
				else {
					const r = { params: {} };
					null === l ? (l = [r]) : l.push(r), i++;
				}
				if (a !== i) break;
			}
		} else {
			const r = { params: { type: "array" } };
			null === l ? (l = [r]) : l.push(r), i++;
		}
	var m = u === i;
	if (((f = f || m), !f)) {
		const s = i;
		n(r, {
			instancePath: t,
			parentData: e,
			parentDataProperty: a,
			rootData: o
		}) || ((l = null === l ? n.errors : l.concat(n.errors)), (i = l.length)),
			(m = s === i),
			(f = f || m);
	}
	if (!f) {
		const r = { params: {} };
		return null === l ? (l = [r]) : l.push(r), i++, (s.errors = l), !1;
	}
	return (
		(i = p),
		null !== l && (p ? (l.length = p) : (l = null)),
		(s.errors = l),
		0 === i
	);
}
function a(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: s = r
	} = {}
) {
	let o = null,
		l = 0;
	const i = l;
	let p = !1;
	const f = l;
	if ("string" != typeof r) {
		const r = { params: { type: "string" } };
		null === o ? (o = [r]) : o.push(r), l++;
	}
	var u = f === l;
	if (((p = p || u), !p)) {
		const t = l;
		if (l == l)
			if (r && "object" == typeof r && !Array.isArray(r)) {
				const t = l;
				for (const t in r)
					if (
						"amd" !== t &&
						"commonjs" !== t &&
						"commonjs2" !== t &&
						"root" !== t
					) {
						const r = { params: { additionalProperty: t } };
						null === o ? (o = [r]) : o.push(r), l++;
						break;
					}
				if (t === l) {
					if (void 0 !== r.amd) {
						const t = l;
						if ("string" != typeof r.amd) {
							const r = { params: { type: "string" } };
							null === o ? (o = [r]) : o.push(r), l++;
						}
						var c = t === l;
					} else c = !0;
					if (c) {
						if (void 0 !== r.commonjs) {
							const t = l;
							if ("string" != typeof r.commonjs) {
								const r = { params: { type: "string" } };
								null === o ? (o = [r]) : o.push(r), l++;
							}
							c = t === l;
						} else c = !0;
						if (c) {
							if (void 0 !== r.commonjs2) {
								const t = l;
								if ("string" != typeof r.commonjs2) {
									const r = { params: { type: "string" } };
									null === o ? (o = [r]) : o.push(r), l++;
								}
								c = t === l;
							} else c = !0;
							if (c)
								if (void 0 !== r.root) {
									const t = l;
									if ("string" != typeof r.root) {
										const r = { params: { type: "string" } };
										null === o ? (o = [r]) : o.push(r), l++;
									}
									c = t === l;
								} else c = !0;
						}
					}
				}
			} else {
				const r = { params: { type: "object" } };
				null === o ? (o = [r]) : o.push(r), l++;
			}
		(u = t === l), (p = p || u);
	}
	if (!p) {
		const r = { params: {} };
		return null === o ? (o = [r]) : o.push(r), l++, (a.errors = o), !1;
	}
	return (
		(l = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(a.errors = o),
		0 === l
	);
}
function o(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: s = r
	} = {}
) {
	let a = null,
		l = 0;
	const i = l;
	let p = !1;
	const f = l;
	if (l === f)
		if (Array.isArray(r))
			if (r.length < 1) {
				const r = { params: { limit: 1 } };
				null === a ? (a = [r]) : a.push(r), l++;
			} else {
				const t = r.length;
				for (let e = 0; e < t; e++) {
					let t = r[e];
					const n = l;
					if (l === n)
						if ("string" == typeof t) {
							if (t.length < 1) {
								const r = { params: {} };
								null === a ? (a = [r]) : a.push(r), l++;
							}
						} else {
							const r = { params: { type: "string" } };
							null === a ? (a = [r]) : a.push(r), l++;
						}
					if (n !== l) break;
				}
			}
		else {
			const r = { params: { type: "array" } };
			null === a ? (a = [r]) : a.push(r), l++;
		}
	var u = f === l;
	if (((p = p || u), !p)) {
		const t = l;
		if (l === t)
			if ("string" == typeof r) {
				if (r.length < 1) {
					const r = { params: {} };
					null === a ? (a = [r]) : a.push(r), l++;
				}
			} else {
				const r = { params: { type: "string" } };
				null === a ? (a = [r]) : a.push(r), l++;
			}
		if (((u = t === l), (p = p || u), !p)) {
			const t = l;
			if (l == l)
				if (r && "object" == typeof r && !Array.isArray(r)) {
					const t = l;
					for (const t in r)
						if ("amd" !== t && "commonjs" !== t && "root" !== t) {
							const r = { params: { additionalProperty: t } };
							null === a ? (a = [r]) : a.push(r), l++;
							break;
						}
					if (t === l) {
						if (void 0 !== r.amd) {
							let t = r.amd;
							const e = l;
							if (l === e)
								if ("string" == typeof t) {
									if (t.length < 1) {
										const r = { params: {} };
										null === a ? (a = [r]) : a.push(r), l++;
									}
								} else {
									const r = { params: { type: "string" } };
									null === a ? (a = [r]) : a.push(r), l++;
								}
							var c = e === l;
						} else c = !0;
						if (c) {
							if (void 0 !== r.commonjs) {
								let t = r.commonjs;
								const e = l;
								if (l === e)
									if ("string" == typeof t) {
										if (t.length < 1) {
											const r = { params: {} };
											null === a ? (a = [r]) : a.push(r), l++;
										}
									} else {
										const r = { params: { type: "string" } };
										null === a ? (a = [r]) : a.push(r), l++;
									}
								c = e === l;
							} else c = !0;
							if (c)
								if (void 0 !== r.root) {
									let t = r.root;
									const e = l,
										n = l;
									let s = !1;
									const o = l;
									if (l === o)
										if (Array.isArray(t)) {
											const r = t.length;
											for (let e = 0; e < r; e++) {
												let r = t[e];
												const n = l;
												if (l === n)
													if ("string" == typeof r) {
														if (r.length < 1) {
															const r = { params: {} };
															null === a ? (a = [r]) : a.push(r), l++;
														}
													} else {
														const r = { params: { type: "string" } };
														null === a ? (a = [r]) : a.push(r), l++;
													}
												if (n !== l) break;
											}
										} else {
											const r = { params: { type: "array" } };
											null === a ? (a = [r]) : a.push(r), l++;
										}
									var m = o === l;
									if (((s = s || m), !s)) {
										const r = l;
										if (l === r)
											if ("string" == typeof t) {
												if (t.length < 1) {
													const r = { params: {} };
													null === a ? (a = [r]) : a.push(r), l++;
												}
											} else {
												const r = { params: { type: "string" } };
												null === a ? (a = [r]) : a.push(r), l++;
											}
										(m = r === l), (s = s || m);
									}
									if (s)
										(l = n), null !== a && (n ? (a.length = n) : (a = null));
									else {
										const r = { params: {} };
										null === a ? (a = [r]) : a.push(r), l++;
									}
									c = e === l;
								} else c = !0;
						}
					}
				} else {
					const r = { params: { type: "object" } };
					null === a ? (a = [r]) : a.push(r), l++;
				}
			(u = t === l), (p = p || u);
		}
	}
	if (!p) {
		const r = { params: {} };
		return null === a ? (a = [r]) : a.push(r), l++, (o.errors = a), !1;
	}
	return (
		(l = i),
		null !== a && (i ? (a.length = i) : (a = null)),
		(o.errors = a),
		0 === l
	);
}
function l(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: s = r
	} = {}
) {
	let i = null,
		p = 0;
	if (0 === p) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (l.errors = [{ params: { type: "object" } }]), !1;
		{
			let e;
			if (void 0 === r.type && (e = "type"))
				return (l.errors = [{ params: { missingProperty: e } }]), !1;
			{
				const e = p;
				for (const t in r)
					if (
						"auxiliaryComment" !== t &&
						"export" !== t &&
						"name" !== t &&
						"type" !== t &&
						"umdNamedDefine" !== t
					)
						return (l.errors = [{ params: { additionalProperty: t } }]), !1;
				if (e === p) {
					if (void 0 !== r.auxiliaryComment) {
						const e = p;
						a(r.auxiliaryComment, {
							instancePath: t + "/auxiliaryComment",
							parentData: r,
							parentDataProperty: "auxiliaryComment",
							rootData: s
						}) ||
							((i = null === i ? a.errors : i.concat(a.errors)),
							(p = i.length));
						var f = e === p;
					} else f = !0;
					if (f) {
						if (void 0 !== r.export) {
							let t = r.export;
							const e = p,
								n = p;
							let s = !1;
							const a = p;
							if (p === a)
								if (Array.isArray(t)) {
									const r = t.length;
									for (let e = 0; e < r; e++) {
										let r = t[e];
										const n = p;
										if (p === n)
											if ("string" == typeof r) {
												if (r.length < 1) {
													const r = { params: {} };
													null === i ? (i = [r]) : i.push(r), p++;
												}
											} else {
												const r = { params: { type: "string" } };
												null === i ? (i = [r]) : i.push(r), p++;
											}
										if (n !== p) break;
									}
								} else {
									const r = { params: { type: "array" } };
									null === i ? (i = [r]) : i.push(r), p++;
								}
							var u = a === p;
							if (((s = s || u), !s)) {
								const r = p;
								if (p === r)
									if ("string" == typeof t) {
										if (t.length < 1) {
											const r = { params: {} };
											null === i ? (i = [r]) : i.push(r), p++;
										}
									} else {
										const r = { params: { type: "string" } };
										null === i ? (i = [r]) : i.push(r), p++;
									}
								(u = r === p), (s = s || u);
							}
							if (!s) {
								const r = { params: {} };
								return (
									null === i ? (i = [r]) : i.push(r), p++, (l.errors = i), !1
								);
							}
							(p = n),
								null !== i && (n ? (i.length = n) : (i = null)),
								(f = e === p);
						} else f = !0;
						if (f) {
							if (void 0 !== r.name) {
								const e = p;
								o(r.name, {
									instancePath: t + "/name",
									parentData: r,
									parentDataProperty: "name",
									rootData: s
								}) ||
									((i = null === i ? o.errors : i.concat(o.errors)),
									(p = i.length)),
									(f = e === p);
							} else f = !0;
							if (f) {
								if (void 0 !== r.type) {
									let t = r.type;
									const e = p,
										n = p;
									let s = !1;
									const a = p;
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
										const r = { params: {} };
										null === i ? (i = [r]) : i.push(r), p++;
									}
									var c = a === p;
									if (((s = s || c), !s)) {
										const r = p;
										if ("string" != typeof t) {
											const r = { params: { type: "string" } };
											null === i ? (i = [r]) : i.push(r), p++;
										}
										(c = r === p), (s = s || c);
									}
									if (!s) {
										const r = { params: {} };
										return (
											null === i ? (i = [r]) : i.push(r),
											p++,
											(l.errors = i),
											!1
										);
									}
									(p = n),
										null !== i && (n ? (i.length = n) : (i = null)),
										(f = e === p);
								} else f = !0;
								if (f)
									if (void 0 !== r.umdNamedDefine) {
										const t = p;
										if ("boolean" != typeof r.umdNamedDefine)
											return (l.errors = [{ params: { type: "boolean" } }]), !1;
										f = t === p;
									} else f = !0;
							}
						}
					}
				}
			}
		}
	}
	return (l.errors = i), 0 === p;
}
function i(
	t,
	{
		instancePath: e = "",
		parentData: n,
		parentDataProperty: a,
		rootData: o = t
	} = {}
) {
	let p = null,
		f = 0;
	if (0 === f) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (i.errors = [{ params: { type: "object" } }]), !1;
		{
			let n;
			if (
				(void 0 === t.name && (n = "name")) ||
				(void 0 === t.exposes && (n = "exposes"))
			)
				return (i.errors = [{ params: { missingProperty: n } }]), !1;
			{
				const n = f;
				for (const r in t)
					if (
						"exposes" !== r &&
						"filename" !== r &&
						"library" !== r &&
						"name" !== r &&
						"runtime" !== r &&
						"shareScope" !== r
					)
						return (i.errors = [{ params: { additionalProperty: r } }]), !1;
				if (n === f) {
					if (void 0 !== t.exposes) {
						const r = f;
						s(t.exposes, {
							instancePath: e + "/exposes",
							parentData: t,
							parentDataProperty: "exposes",
							rootData: o
						}) ||
							((p = null === p ? s.errors : p.concat(s.errors)),
							(f = p.length));
						var u = r === f;
					} else u = !0;
					if (u) {
						if (void 0 !== t.filename) {
							let e = t.filename;
							const n = f;
							if (f === n) {
								if ("string" != typeof e)
									return (i.errors = [{ params: { type: "string" } }]), !1;
								if (e.includes("!") || !1 !== r.test(e))
									return (i.errors = [{ params: {} }]), !1;
								if (e.length < 1) return (i.errors = [{ params: {} }]), !1;
							}
							u = n === f;
						} else u = !0;
						if (u) {
							if (void 0 !== t.library) {
								const r = f;
								l(t.library, {
									instancePath: e + "/library",
									parentData: t,
									parentDataProperty: "library",
									rootData: o
								}) ||
									((p = null === p ? l.errors : p.concat(l.errors)),
									(f = p.length)),
									(u = r === f);
							} else u = !0;
							if (u) {
								if (void 0 !== t.name) {
									let r = t.name;
									const e = f;
									if (f === e) {
										if ("string" != typeof r)
											return (i.errors = [{ params: { type: "string" } }]), !1;
										if (r.length < 1) return (i.errors = [{ params: {} }]), !1;
									}
									u = e === f;
								} else u = !0;
								if (u) {
									if (void 0 !== t.runtime) {
										let r = t.runtime;
										const e = f,
											n = f;
										let s = !1;
										const a = f;
										if (!1 !== r) {
											const r = { params: {} };
											null === p ? (p = [r]) : p.push(r), f++;
										}
										var c = a === f;
										if (((s = s || c), !s)) {
											const t = f;
											if (f === t)
												if ("string" == typeof r) {
													if (r.length < 1) {
														const r = { params: {} };
														null === p ? (p = [r]) : p.push(r), f++;
													}
												} else {
													const r = { params: { type: "string" } };
													null === p ? (p = [r]) : p.push(r), f++;
												}
											(c = t === f), (s = s || c);
										}
										if (!s) {
											const r = { params: {} };
											return (
												null === p ? (p = [r]) : p.push(r),
												f++,
												(i.errors = p),
												!1
											);
										}
										(f = n),
											null !== p && (n ? (p.length = n) : (p = null)),
											(u = e === f);
									} else u = !0;
									if (u)
										if (void 0 !== t.shareScope) {
											let r = t.shareScope;
											const e = f;
											if (f === e) {
												if ("string" != typeof r)
													return (
														(i.errors = [{ params: { type: "string" } }]), !1
													);
												if (r.length < 1)
													return (i.errors = [{ params: {} }]), !1;
											}
											u = e === f;
										} else u = !0;
								}
							}
						}
					}
				}
			}
		}
	}
	return (i.errors = p), 0 === f;
}
(module.exports = i), (module.exports.default = i);

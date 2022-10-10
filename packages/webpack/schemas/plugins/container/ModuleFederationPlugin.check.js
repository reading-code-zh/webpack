/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const r = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
(module.exports = d), (module.exports.default = d);
const t = {
		exposes: { $ref: "#/definitions/Exposes" },
		filename: { type: "string", absolutePath: !1 },
		library: { $ref: "#/definitions/LibraryOptions" },
		name: { type: "string" },
		remoteType: { oneOf: [{ $ref: "#/definitions/ExternalsType" }] },
		remotes: { $ref: "#/definitions/Remotes" },
		runtime: { $ref: "#/definitions/EntryRuntime" },
		shareScope: { type: "string", minLength: 1 },
		shared: { $ref: "#/definitions/Shared" }
	},
	e = Object.prototype.hasOwnProperty;
function n(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: a,
		rootData: s = r
	} = {}
) {
	if (!Array.isArray(r))
		return (n.errors = [{ params: { type: "array" } }]), !1;
	{
		const t = r.length;
		for (let e = 0; e < t; e++) {
			let t = r[e];
			const a = 0;
			if ("string" != typeof t)
				return (n.errors = [{ params: { type: "string" } }]), !1;
			if (t.length < 1) return (n.errors = [{ params: {} }]), !1;
			if (0 !== a) break;
		}
	}
	return (n.errors = null), !0;
}
function a(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: s,
		rootData: o = r
	} = {}
) {
	let l = null,
		i = 0;
	if (0 === i) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (a.errors = [{ params: { type: "object" } }]), !1;
		{
			let e;
			if (void 0 === r.import && (e = "import"))
				return (a.errors = [{ params: { missingProperty: e } }]), !1;
			{
				const e = i;
				for (const t in r)
					if ("import" !== t && "name" !== t)
						return (a.errors = [{ params: { additionalProperty: t } }]), !1;
				if (e === i) {
					if (void 0 !== r.import) {
						let e = r.import;
						const s = i,
							c = i;
						let u = !1;
						const m = i;
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
						var p = m === i;
						if (((u = u || p), !u)) {
							const a = i;
							n(e, {
								instancePath: t + "/import",
								parentData: r,
								parentDataProperty: "import",
								rootData: o
							}) ||
								((l = null === l ? n.errors : l.concat(n.errors)),
								(i = l.length)),
								(p = a === i),
								(u = u || p);
						}
						if (!u) {
							const r = { params: {} };
							return (
								null === l ? (l = [r]) : l.push(r), i++, (a.errors = l), !1
							);
						}
						(i = c), null !== l && (c ? (l.length = c) : (l = null));
						var f = s === i;
					} else f = !0;
					if (f)
						if (void 0 !== r.name) {
							const t = i;
							if ("string" != typeof r.name)
								return (a.errors = [{ params: { type: "string" } }]), !1;
							f = t === i;
						} else f = !0;
				}
			}
		}
	}
	return (a.errors = l), 0 === i;
}
function s(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: o,
		rootData: l = r
	} = {}
) {
	let i = null,
		p = 0;
	if (0 === p) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (s.errors = [{ params: { type: "object" } }]), !1;
		for (const e in r) {
			let o = r[e];
			const c = p,
				u = p;
			let m = !1;
			const y = p;
			a(o, {
				instancePath: t + "/" + e.replace(/~/g, "~0").replace(/\//g, "~1"),
				parentData: r,
				parentDataProperty: e,
				rootData: l
			}) || ((i = null === i ? a.errors : i.concat(a.errors)), (p = i.length));
			var f = y === p;
			if (((m = m || f), !m)) {
				const a = p;
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
				if (((f = a === p), (m = m || f), !m)) {
					const a = p;
					n(o, {
						instancePath: t + "/" + e.replace(/~/g, "~0").replace(/\//g, "~1"),
						parentData: r,
						parentDataProperty: e,
						rootData: l
					}) ||
						((i = null === i ? n.errors : i.concat(n.errors)), (p = i.length)),
						(f = a === p),
						(m = m || f);
				}
			}
			if (!m) {
				const r = { params: {} };
				return null === i ? (i = [r]) : i.push(r), p++, (s.errors = i), !1;
			}
			if (((p = u), null !== i && (u ? (i.length = u) : (i = null)), c !== p))
				break;
		}
	}
	return (s.errors = i), 0 === p;
}
function o(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: a = r
	} = {}
) {
	let l = null,
		i = 0;
	const p = i;
	let f = !1;
	const c = i;
	if (i === c)
		if (Array.isArray(r)) {
			const e = r.length;
			for (let n = 0; n < e; n++) {
				let e = r[n];
				const o = i,
					p = i;
				let f = !1;
				const c = i;
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
				var u = c === i;
				if (((f = f || u), !f)) {
					const o = i;
					s(e, {
						instancePath: t + "/" + n,
						parentData: r,
						parentDataProperty: n,
						rootData: a
					}) ||
						((l = null === l ? s.errors : l.concat(s.errors)), (i = l.length)),
						(u = o === i),
						(f = f || u);
				}
				if (f) (i = p), null !== l && (p ? (l.length = p) : (l = null));
				else {
					const r = { params: {} };
					null === l ? (l = [r]) : l.push(r), i++;
				}
				if (o !== i) break;
			}
		} else {
			const r = { params: { type: "array" } };
			null === l ? (l = [r]) : l.push(r), i++;
		}
	var m = c === i;
	if (((f = f || m), !f)) {
		const o = i;
		s(r, {
			instancePath: t,
			parentData: e,
			parentDataProperty: n,
			rootData: a
		}) || ((l = null === l ? s.errors : l.concat(s.errors)), (i = l.length)),
			(m = o === i),
			(f = f || m);
	}
	if (!f) {
		const r = { params: {} };
		return null === l ? (l = [r]) : l.push(r), i++, (o.errors = l), !1;
	}
	return (
		(i = p),
		null !== l && (p ? (l.length = p) : (l = null)),
		(o.errors = l),
		0 === i
	);
}
function l(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: a = r
	} = {}
) {
	let s = null,
		o = 0;
	const i = o;
	let p = !1;
	const f = o;
	if ("string" != typeof r) {
		const r = { params: { type: "string" } };
		null === s ? (s = [r]) : s.push(r), o++;
	}
	var c = f === o;
	if (((p = p || c), !p)) {
		const t = o;
		if (o == o)
			if (r && "object" == typeof r && !Array.isArray(r)) {
				const t = o;
				for (const t in r)
					if (
						"amd" !== t &&
						"commonjs" !== t &&
						"commonjs2" !== t &&
						"root" !== t
					) {
						const r = { params: { additionalProperty: t } };
						null === s ? (s = [r]) : s.push(r), o++;
						break;
					}
				if (t === o) {
					if (void 0 !== r.amd) {
						const t = o;
						if ("string" != typeof r.amd) {
							const r = { params: { type: "string" } };
							null === s ? (s = [r]) : s.push(r), o++;
						}
						var u = t === o;
					} else u = !0;
					if (u) {
						if (void 0 !== r.commonjs) {
							const t = o;
							if ("string" != typeof r.commonjs) {
								const r = { params: { type: "string" } };
								null === s ? (s = [r]) : s.push(r), o++;
							}
							u = t === o;
						} else u = !0;
						if (u) {
							if (void 0 !== r.commonjs2) {
								const t = o;
								if ("string" != typeof r.commonjs2) {
									const r = { params: { type: "string" } };
									null === s ? (s = [r]) : s.push(r), o++;
								}
								u = t === o;
							} else u = !0;
							if (u)
								if (void 0 !== r.root) {
									const t = o;
									if ("string" != typeof r.root) {
										const r = { params: { type: "string" } };
										null === s ? (s = [r]) : s.push(r), o++;
									}
									u = t === o;
								} else u = !0;
						}
					}
				}
			} else {
				const r = { params: { type: "object" } };
				null === s ? (s = [r]) : s.push(r), o++;
			}
		(c = t === o), (p = p || c);
	}
	if (!p) {
		const r = { params: {} };
		return null === s ? (s = [r]) : s.push(r), o++, (l.errors = s), !1;
	}
	return (
		(o = i),
		null !== s && (i ? (s.length = i) : (s = null)),
		(l.errors = s),
		0 === o
	);
}
function i(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: a = r
	} = {}
) {
	let s = null,
		o = 0;
	const l = o;
	let p = !1;
	const f = o;
	if (o === f)
		if (Array.isArray(r))
			if (r.length < 1) {
				const r = { params: { limit: 1 } };
				null === s ? (s = [r]) : s.push(r), o++;
			} else {
				const t = r.length;
				for (let e = 0; e < t; e++) {
					let t = r[e];
					const n = o;
					if (o === n)
						if ("string" == typeof t) {
							if (t.length < 1) {
								const r = { params: {} };
								null === s ? (s = [r]) : s.push(r), o++;
							}
						} else {
							const r = { params: { type: "string" } };
							null === s ? (s = [r]) : s.push(r), o++;
						}
					if (n !== o) break;
				}
			}
		else {
			const r = { params: { type: "array" } };
			null === s ? (s = [r]) : s.push(r), o++;
		}
	var c = f === o;
	if (((p = p || c), !p)) {
		const t = o;
		if (o === t)
			if ("string" == typeof r) {
				if (r.length < 1) {
					const r = { params: {} };
					null === s ? (s = [r]) : s.push(r), o++;
				}
			} else {
				const r = { params: { type: "string" } };
				null === s ? (s = [r]) : s.push(r), o++;
			}
		if (((c = t === o), (p = p || c), !p)) {
			const t = o;
			if (o == o)
				if (r && "object" == typeof r && !Array.isArray(r)) {
					const t = o;
					for (const t in r)
						if ("amd" !== t && "commonjs" !== t && "root" !== t) {
							const r = { params: { additionalProperty: t } };
							null === s ? (s = [r]) : s.push(r), o++;
							break;
						}
					if (t === o) {
						if (void 0 !== r.amd) {
							let t = r.amd;
							const e = o;
							if (o === e)
								if ("string" == typeof t) {
									if (t.length < 1) {
										const r = { params: {} };
										null === s ? (s = [r]) : s.push(r), o++;
									}
								} else {
									const r = { params: { type: "string" } };
									null === s ? (s = [r]) : s.push(r), o++;
								}
							var u = e === o;
						} else u = !0;
						if (u) {
							if (void 0 !== r.commonjs) {
								let t = r.commonjs;
								const e = o;
								if (o === e)
									if ("string" == typeof t) {
										if (t.length < 1) {
											const r = { params: {} };
											null === s ? (s = [r]) : s.push(r), o++;
										}
									} else {
										const r = { params: { type: "string" } };
										null === s ? (s = [r]) : s.push(r), o++;
									}
								u = e === o;
							} else u = !0;
							if (u)
								if (void 0 !== r.root) {
									let t = r.root;
									const e = o,
										n = o;
									let a = !1;
									const l = o;
									if (o === l)
										if (Array.isArray(t)) {
											const r = t.length;
											for (let e = 0; e < r; e++) {
												let r = t[e];
												const n = o;
												if (o === n)
													if ("string" == typeof r) {
														if (r.length < 1) {
															const r = { params: {} };
															null === s ? (s = [r]) : s.push(r), o++;
														}
													} else {
														const r = { params: { type: "string" } };
														null === s ? (s = [r]) : s.push(r), o++;
													}
												if (n !== o) break;
											}
										} else {
											const r = { params: { type: "array" } };
											null === s ? (s = [r]) : s.push(r), o++;
										}
									var m = l === o;
									if (((a = a || m), !a)) {
										const r = o;
										if (o === r)
											if ("string" == typeof t) {
												if (t.length < 1) {
													const r = { params: {} };
													null === s ? (s = [r]) : s.push(r), o++;
												}
											} else {
												const r = { params: { type: "string" } };
												null === s ? (s = [r]) : s.push(r), o++;
											}
										(m = r === o), (a = a || m);
									}
									if (a)
										(o = n), null !== s && (n ? (s.length = n) : (s = null));
									else {
										const r = { params: {} };
										null === s ? (s = [r]) : s.push(r), o++;
									}
									u = e === o;
								} else u = !0;
						}
					}
				} else {
					const r = { params: { type: "object" } };
					null === s ? (s = [r]) : s.push(r), o++;
				}
			(c = t === o), (p = p || c);
		}
	}
	if (!p) {
		const r = { params: {} };
		return null === s ? (s = [r]) : s.push(r), o++, (i.errors = s), !1;
	}
	return (
		(o = l),
		null !== s && (l ? (s.length = l) : (s = null)),
		(i.errors = s),
		0 === o
	);
}
function p(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: a = r
	} = {}
) {
	let s = null,
		o = 0;
	if (0 === o) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (p.errors = [{ params: { type: "object" } }]), !1;
		{
			let e;
			if (void 0 === r.type && (e = "type"))
				return (p.errors = [{ params: { missingProperty: e } }]), !1;
			{
				const e = o;
				for (const t in r)
					if (
						"auxiliaryComment" !== t &&
						"export" !== t &&
						"name" !== t &&
						"type" !== t &&
						"umdNamedDefine" !== t
					)
						return (p.errors = [{ params: { additionalProperty: t } }]), !1;
				if (e === o) {
					if (void 0 !== r.auxiliaryComment) {
						const e = o;
						l(r.auxiliaryComment, {
							instancePath: t + "/auxiliaryComment",
							parentData: r,
							parentDataProperty: "auxiliaryComment",
							rootData: a
						}) ||
							((s = null === s ? l.errors : s.concat(l.errors)),
							(o = s.length));
						var f = e === o;
					} else f = !0;
					if (f) {
						if (void 0 !== r.export) {
							let t = r.export;
							const e = o,
								n = o;
							let a = !1;
							const l = o;
							if (o === l)
								if (Array.isArray(t)) {
									const r = t.length;
									for (let e = 0; e < r; e++) {
										let r = t[e];
										const n = o;
										if (o === n)
											if ("string" == typeof r) {
												if (r.length < 1) {
													const r = { params: {} };
													null === s ? (s = [r]) : s.push(r), o++;
												}
											} else {
												const r = { params: { type: "string" } };
												null === s ? (s = [r]) : s.push(r), o++;
											}
										if (n !== o) break;
									}
								} else {
									const r = { params: { type: "array" } };
									null === s ? (s = [r]) : s.push(r), o++;
								}
							var c = l === o;
							if (((a = a || c), !a)) {
								const r = o;
								if (o === r)
									if ("string" == typeof t) {
										if (t.length < 1) {
											const r = { params: {} };
											null === s ? (s = [r]) : s.push(r), o++;
										}
									} else {
										const r = { params: { type: "string" } };
										null === s ? (s = [r]) : s.push(r), o++;
									}
								(c = r === o), (a = a || c);
							}
							if (!a) {
								const r = { params: {} };
								return (
									null === s ? (s = [r]) : s.push(r), o++, (p.errors = s), !1
								);
							}
							(o = n),
								null !== s && (n ? (s.length = n) : (s = null)),
								(f = e === o);
						} else f = !0;
						if (f) {
							if (void 0 !== r.name) {
								const e = o;
								i(r.name, {
									instancePath: t + "/name",
									parentData: r,
									parentDataProperty: "name",
									rootData: a
								}) ||
									((s = null === s ? i.errors : s.concat(i.errors)),
									(o = s.length)),
									(f = e === o);
							} else f = !0;
							if (f) {
								if (void 0 !== r.type) {
									let t = r.type;
									const e = o,
										n = o;
									let a = !1;
									const l = o;
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
										null === s ? (s = [r]) : s.push(r), o++;
									}
									var u = l === o;
									if (((a = a || u), !a)) {
										const r = o;
										if ("string" != typeof t) {
											const r = { params: { type: "string" } };
											null === s ? (s = [r]) : s.push(r), o++;
										}
										(u = r === o), (a = a || u);
									}
									if (!a) {
										const r = { params: {} };
										return (
											null === s ? (s = [r]) : s.push(r),
											o++,
											(p.errors = s),
											!1
										);
									}
									(o = n),
										null !== s && (n ? (s.length = n) : (s = null)),
										(f = e === o);
								} else f = !0;
								if (f)
									if (void 0 !== r.umdNamedDefine) {
										const t = o;
										if ("boolean" != typeof r.umdNamedDefine)
											return (p.errors = [{ params: { type: "boolean" } }]), !1;
										f = t === o;
									} else f = !0;
							}
						}
					}
				}
			}
		}
	}
	return (p.errors = s), 0 === o;
}
function f(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: a = r
	} = {}
) {
	if (!Array.isArray(r))
		return (f.errors = [{ params: { type: "array" } }]), !1;
	{
		const t = r.length;
		for (let e = 0; e < t; e++) {
			let t = r[e];
			const n = 0;
			if ("string" != typeof t)
				return (f.errors = [{ params: { type: "string" } }]), !1;
			if (t.length < 1) return (f.errors = [{ params: {} }]), !1;
			if (0 !== n) break;
		}
	}
	return (f.errors = null), !0;
}
function c(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: a = r
	} = {}
) {
	let s = null,
		o = 0;
	if (0 === o) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (c.errors = [{ params: { type: "object" } }]), !1;
		{
			let e;
			if (void 0 === r.external && (e = "external"))
				return (c.errors = [{ params: { missingProperty: e } }]), !1;
			{
				const e = o;
				for (const t in r)
					if ("external" !== t && "shareScope" !== t)
						return (c.errors = [{ params: { additionalProperty: t } }]), !1;
				if (e === o) {
					if (void 0 !== r.external) {
						let e = r.external;
						const n = o,
							p = o;
						let u = !1;
						const m = o;
						if (o == o)
							if ("string" == typeof e) {
								if (e.length < 1) {
									const r = { params: {} };
									null === s ? (s = [r]) : s.push(r), o++;
								}
							} else {
								const r = { params: { type: "string" } };
								null === s ? (s = [r]) : s.push(r), o++;
							}
						var l = m === o;
						if (((u = u || l), !u)) {
							const n = o;
							f(e, {
								instancePath: t + "/external",
								parentData: r,
								parentDataProperty: "external",
								rootData: a
							}) ||
								((s = null === s ? f.errors : s.concat(f.errors)),
								(o = s.length)),
								(l = n === o),
								(u = u || l);
						}
						if (!u) {
							const r = { params: {} };
							return (
								null === s ? (s = [r]) : s.push(r), o++, (c.errors = s), !1
							);
						}
						(o = p), null !== s && (p ? (s.length = p) : (s = null));
						var i = n === o;
					} else i = !0;
					if (i)
						if (void 0 !== r.shareScope) {
							let t = r.shareScope;
							const e = o;
							if (o === e) {
								if ("string" != typeof t)
									return (c.errors = [{ params: { type: "string" } }]), !1;
								if (t.length < 1) return (c.errors = [{ params: {} }]), !1;
							}
							i = e === o;
						} else i = !0;
				}
			}
		}
	}
	return (c.errors = s), 0 === o;
}
function u(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: a = r
	} = {}
) {
	let s = null,
		o = 0;
	if (0 === o) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (u.errors = [{ params: { type: "object" } }]), !1;
		for (const e in r) {
			let n = r[e];
			const i = o,
				p = o;
			let m = !1;
			const y = o;
			c(n, {
				instancePath: t + "/" + e.replace(/~/g, "~0").replace(/\//g, "~1"),
				parentData: r,
				parentDataProperty: e,
				rootData: a
			}) || ((s = null === s ? c.errors : s.concat(c.errors)), (o = s.length));
			var l = y === o;
			if (((m = m || l), !m)) {
				const i = o;
				if (o == o)
					if ("string" == typeof n) {
						if (n.length < 1) {
							const r = { params: {} };
							null === s ? (s = [r]) : s.push(r), o++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === s ? (s = [r]) : s.push(r), o++;
					}
				if (((l = i === o), (m = m || l), !m)) {
					const i = o;
					f(n, {
						instancePath: t + "/" + e.replace(/~/g, "~0").replace(/\//g, "~1"),
						parentData: r,
						parentDataProperty: e,
						rootData: a
					}) ||
						((s = null === s ? f.errors : s.concat(f.errors)), (o = s.length)),
						(l = i === o),
						(m = m || l);
				}
			}
			if (!m) {
				const r = { params: {} };
				return null === s ? (s = [r]) : s.push(r), o++, (u.errors = s), !1;
			}
			if (((o = p), null !== s && (p ? (s.length = p) : (s = null)), i !== o))
				break;
		}
	}
	return (u.errors = s), 0 === o;
}
function m(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: a = r
	} = {}
) {
	let s = null,
		o = 0;
	const l = o;
	let i = !1;
	const p = o;
	if (o === p)
		if (Array.isArray(r)) {
			const e = r.length;
			for (let n = 0; n < e; n++) {
				let e = r[n];
				const l = o,
					i = o;
				let p = !1;
				const c = o;
				if (o == o)
					if ("string" == typeof e) {
						if (e.length < 1) {
							const r = { params: {} };
							null === s ? (s = [r]) : s.push(r), o++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === s ? (s = [r]) : s.push(r), o++;
					}
				var f = c === o;
				if (((p = p || f), !p)) {
					const l = o;
					u(e, {
						instancePath: t + "/" + n,
						parentData: r,
						parentDataProperty: n,
						rootData: a
					}) ||
						((s = null === s ? u.errors : s.concat(u.errors)), (o = s.length)),
						(f = l === o),
						(p = p || f);
				}
				if (p) (o = i), null !== s && (i ? (s.length = i) : (s = null));
				else {
					const r = { params: {} };
					null === s ? (s = [r]) : s.push(r), o++;
				}
				if (l !== o) break;
			}
		} else {
			const r = { params: { type: "array" } };
			null === s ? (s = [r]) : s.push(r), o++;
		}
	var c = p === o;
	if (((i = i || c), !i)) {
		const l = o;
		u(r, {
			instancePath: t,
			parentData: e,
			parentDataProperty: n,
			rootData: a
		}) || ((s = null === s ? u.errors : s.concat(u.errors)), (o = s.length)),
			(c = l === o),
			(i = i || c);
	}
	if (!i) {
		const r = { params: {} };
		return null === s ? (s = [r]) : s.push(r), o++, (m.errors = s), !1;
	}
	return (
		(o = l),
		null !== s && (l ? (s.length = l) : (s = null)),
		(m.errors = s),
		0 === o
	);
}
const y = {
	eager: { type: "boolean" },
	import: { anyOf: [{ enum: [!1] }, { $ref: "#/definitions/SharedItem" }] },
	packageName: { type: "string", minLength: 1 },
	requiredVersion: { anyOf: [{ enum: [!1] }, { type: "string" }] },
	shareKey: { type: "string", minLength: 1 },
	shareScope: { type: "string", minLength: 1 },
	singleton: { type: "boolean" },
	strictVersion: { type: "boolean" },
	version: { anyOf: [{ enum: [!1] }, { type: "string" }] }
};
function h(
	r,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: a,
		rootData: s = r
	} = {}
) {
	let o = null,
		l = 0;
	if (0 === l) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (h.errors = [{ params: { type: "object" } }]), !1;
		{
			const t = l;
			for (const t in r)
				if (!e.call(y, t))
					return (h.errors = [{ params: { additionalProperty: t } }]), !1;
			if (t === l) {
				if (void 0 !== r.eager) {
					const t = l;
					if ("boolean" != typeof r.eager)
						return (h.errors = [{ params: { type: "boolean" } }]), !1;
					var i = t === l;
				} else i = !0;
				if (i) {
					if (void 0 !== r.import) {
						let t = r.import;
						const e = l,
							n = l;
						let a = !1;
						const s = l;
						if (!1 !== t) {
							const r = { params: {} };
							null === o ? (o = [r]) : o.push(r), l++;
						}
						var p = s === l;
						if (((a = a || p), !a)) {
							const r = l;
							if (l == l)
								if ("string" == typeof t) {
									if (t.length < 1) {
										const r = { params: {} };
										null === o ? (o = [r]) : o.push(r), l++;
									}
								} else {
									const r = { params: { type: "string" } };
									null === o ? (o = [r]) : o.push(r), l++;
								}
							(p = r === l), (a = a || p);
						}
						if (!a) {
							const r = { params: {} };
							return (
								null === o ? (o = [r]) : o.push(r), l++, (h.errors = o), !1
							);
						}
						(l = n),
							null !== o && (n ? (o.length = n) : (o = null)),
							(i = e === l);
					} else i = !0;
					if (i) {
						if (void 0 !== r.packageName) {
							let t = r.packageName;
							const e = l;
							if (l === e) {
								if ("string" != typeof t)
									return (h.errors = [{ params: { type: "string" } }]), !1;
								if (t.length < 1) return (h.errors = [{ params: {} }]), !1;
							}
							i = e === l;
						} else i = !0;
						if (i) {
							if (void 0 !== r.requiredVersion) {
								let t = r.requiredVersion;
								const e = l,
									n = l;
								let a = !1;
								const s = l;
								if (!1 !== t) {
									const r = { params: {} };
									null === o ? (o = [r]) : o.push(r), l++;
								}
								var f = s === l;
								if (((a = a || f), !a)) {
									const r = l;
									if ("string" != typeof t) {
										const r = { params: { type: "string" } };
										null === o ? (o = [r]) : o.push(r), l++;
									}
									(f = r === l), (a = a || f);
								}
								if (!a) {
									const r = { params: {} };
									return (
										null === o ? (o = [r]) : o.push(r), l++, (h.errors = o), !1
									);
								}
								(l = n),
									null !== o && (n ? (o.length = n) : (o = null)),
									(i = e === l);
							} else i = !0;
							if (i) {
								if (void 0 !== r.shareKey) {
									let t = r.shareKey;
									const e = l;
									if (l === e) {
										if ("string" != typeof t)
											return (h.errors = [{ params: { type: "string" } }]), !1;
										if (t.length < 1) return (h.errors = [{ params: {} }]), !1;
									}
									i = e === l;
								} else i = !0;
								if (i) {
									if (void 0 !== r.shareScope) {
										let t = r.shareScope;
										const e = l;
										if (l === e) {
											if ("string" != typeof t)
												return (
													(h.errors = [{ params: { type: "string" } }]), !1
												);
											if (t.length < 1)
												return (h.errors = [{ params: {} }]), !1;
										}
										i = e === l;
									} else i = !0;
									if (i) {
										if (void 0 !== r.singleton) {
											const t = l;
											if ("boolean" != typeof r.singleton)
												return (
													(h.errors = [{ params: { type: "boolean" } }]), !1
												);
											i = t === l;
										} else i = !0;
										if (i) {
											if (void 0 !== r.strictVersion) {
												const t = l;
												if ("boolean" != typeof r.strictVersion)
													return (
														(h.errors = [{ params: { type: "boolean" } }]), !1
													);
												i = t === l;
											} else i = !0;
											if (i)
												if (void 0 !== r.version) {
													let t = r.version;
													const e = l,
														n = l;
													let a = !1;
													const s = l;
													if (!1 !== t) {
														const r = { params: {} };
														null === o ? (o = [r]) : o.push(r), l++;
													}
													var c = s === l;
													if (((a = a || c), !a)) {
														const r = l;
														if ("string" != typeof t) {
															const r = { params: { type: "string" } };
															null === o ? (o = [r]) : o.push(r), l++;
														}
														(c = r === l), (a = a || c);
													}
													if (!a) {
														const r = { params: {} };
														return (
															null === o ? (o = [r]) : o.push(r),
															l++,
															(h.errors = o),
															!1
														);
													}
													(l = n),
														null !== o && (n ? (o.length = n) : (o = null)),
														(i = e === l);
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
	}
	return (h.errors = o), 0 === l;
}
function g(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: a = r
	} = {}
) {
	let s = null,
		o = 0;
	if (0 === o) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (g.errors = [{ params: { type: "object" } }]), !1;
		for (const e in r) {
			let n = r[e];
			const i = o,
				p = o;
			let f = !1;
			const c = o;
			h(n, {
				instancePath: t + "/" + e.replace(/~/g, "~0").replace(/\//g, "~1"),
				parentData: r,
				parentDataProperty: e,
				rootData: a
			}) || ((s = null === s ? h.errors : s.concat(h.errors)), (o = s.length));
			var l = c === o;
			if (((f = f || l), !f)) {
				const r = o;
				if (o == o)
					if ("string" == typeof n) {
						if (n.length < 1) {
							const r = { params: {} };
							null === s ? (s = [r]) : s.push(r), o++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === s ? (s = [r]) : s.push(r), o++;
					}
				(l = r === o), (f = f || l);
			}
			if (!f) {
				const r = { params: {} };
				return null === s ? (s = [r]) : s.push(r), o++, (g.errors = s), !1;
			}
			if (((o = p), null !== s && (p ? (s.length = p) : (s = null)), i !== o))
				break;
		}
	}
	return (g.errors = s), 0 === o;
}
function D(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: n,
		rootData: a = r
	} = {}
) {
	let s = null,
		o = 0;
	const l = o;
	let i = !1;
	const p = o;
	if (o === p)
		if (Array.isArray(r)) {
			const e = r.length;
			for (let n = 0; n < e; n++) {
				let e = r[n];
				const l = o,
					i = o;
				let p = !1;
				const c = o;
				if (o == o)
					if ("string" == typeof e) {
						if (e.length < 1) {
							const r = { params: {} };
							null === s ? (s = [r]) : s.push(r), o++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === s ? (s = [r]) : s.push(r), o++;
					}
				var f = c === o;
				if (((p = p || f), !p)) {
					const l = o;
					g(e, {
						instancePath: t + "/" + n,
						parentData: r,
						parentDataProperty: n,
						rootData: a
					}) ||
						((s = null === s ? g.errors : s.concat(g.errors)), (o = s.length)),
						(f = l === o),
						(p = p || f);
				}
				if (p) (o = i), null !== s && (i ? (s.length = i) : (s = null));
				else {
					const r = { params: {} };
					null === s ? (s = [r]) : s.push(r), o++;
				}
				if (l !== o) break;
			}
		} else {
			const r = { params: { type: "array" } };
			null === s ? (s = [r]) : s.push(r), o++;
		}
	var c = p === o;
	if (((i = i || c), !i)) {
		const l = o;
		g(r, {
			instancePath: t,
			parentData: e,
			parentDataProperty: n,
			rootData: a
		}) || ((s = null === s ? g.errors : s.concat(g.errors)), (o = s.length)),
			(c = l === o),
			(i = i || c);
	}
	if (!i) {
		const r = { params: {} };
		return null === s ? (s = [r]) : s.push(r), o++, (D.errors = s), !1;
	}
	return (
		(o = l),
		null !== s && (l ? (s.length = l) : (s = null)),
		(D.errors = s),
		0 === o
	);
}
function d(
	n,
	{
		instancePath: a = "",
		parentData: s,
		parentDataProperty: l,
		rootData: i = n
	} = {}
) {
	let f = null,
		c = 0;
	if (0 === c) {
		if (!n || "object" != typeof n || Array.isArray(n))
			return (d.errors = [{ params: { type: "object" } }]), !1;
		{
			const s = c;
			for (const r in n)
				if (!e.call(t, r))
					return (d.errors = [{ params: { additionalProperty: r } }]), !1;
			if (s === c) {
				if (void 0 !== n.exposes) {
					const r = c;
					o(n.exposes, {
						instancePath: a + "/exposes",
						parentData: n,
						parentDataProperty: "exposes",
						rootData: i
					}) ||
						((f = null === f ? o.errors : f.concat(o.errors)), (c = f.length));
					var u = r === c;
				} else u = !0;
				if (u) {
					if (void 0 !== n.filename) {
						let t = n.filename;
						const e = c;
						if (c === e) {
							if ("string" != typeof t)
								return (d.errors = [{ params: { type: "string" } }]), !1;
							if (t.includes("!") || !1 !== r.test(t))
								return (d.errors = [{ params: {} }]), !1;
						}
						u = e === c;
					} else u = !0;
					if (u) {
						if (void 0 !== n.library) {
							const r = c;
							p(n.library, {
								instancePath: a + "/library",
								parentData: n,
								parentDataProperty: "library",
								rootData: i
							}) ||
								((f = null === f ? p.errors : f.concat(p.errors)),
								(c = f.length)),
								(u = r === c);
						} else u = !0;
						if (u) {
							if (void 0 !== n.name) {
								const r = c;
								if ("string" != typeof n.name)
									return (d.errors = [{ params: { type: "string" } }]), !1;
								u = r === c;
							} else u = !0;
							if (u) {
								if (void 0 !== n.remoteType) {
									let r = n.remoteType;
									const t = c,
										e = c;
									let a = !1,
										s = null;
									const o = c;
									if (
										"var" !== r &&
										"module" !== r &&
										"assign" !== r &&
										"this" !== r &&
										"window" !== r &&
										"self" !== r &&
										"global" !== r &&
										"commonjs" !== r &&
										"commonjs2" !== r &&
										"commonjs-module" !== r &&
										"commonjs-static" !== r &&
										"amd" !== r &&
										"amd-require" !== r &&
										"umd" !== r &&
										"umd2" !== r &&
										"jsonp" !== r &&
										"system" !== r &&
										"promise" !== r &&
										"import" !== r &&
										"script" !== r &&
										"node-commonjs" !== r
									) {
										const r = { params: {} };
										null === f ? (f = [r]) : f.push(r), c++;
									}
									if ((o === c && ((a = !0), (s = 0)), !a)) {
										const r = { params: { passingSchemas: s } };
										return (
											null === f ? (f = [r]) : f.push(r),
											c++,
											(d.errors = f),
											!1
										);
									}
									(c = e),
										null !== f && (e ? (f.length = e) : (f = null)),
										(u = t === c);
								} else u = !0;
								if (u) {
									if (void 0 !== n.remotes) {
										const r = c;
										m(n.remotes, {
											instancePath: a + "/remotes",
											parentData: n,
											parentDataProperty: "remotes",
											rootData: i
										}) ||
											((f = null === f ? m.errors : f.concat(m.errors)),
											(c = f.length)),
											(u = r === c);
									} else u = !0;
									if (u) {
										if (void 0 !== n.runtime) {
											let r = n.runtime;
											const t = c,
												e = c;
											let a = !1;
											const s = c;
											if (!1 !== r) {
												const r = { params: {} };
												null === f ? (f = [r]) : f.push(r), c++;
											}
											var y = s === c;
											if (((a = a || y), !a)) {
												const t = c;
												if (c === t)
													if ("string" == typeof r) {
														if (r.length < 1) {
															const r = { params: {} };
															null === f ? (f = [r]) : f.push(r), c++;
														}
													} else {
														const r = { params: { type: "string" } };
														null === f ? (f = [r]) : f.push(r), c++;
													}
												(y = t === c), (a = a || y);
											}
											if (!a) {
												const r = { params: {} };
												return (
													null === f ? (f = [r]) : f.push(r),
													c++,
													(d.errors = f),
													!1
												);
											}
											(c = e),
												null !== f && (e ? (f.length = e) : (f = null)),
												(u = t === c);
										} else u = !0;
										if (u) {
											if (void 0 !== n.shareScope) {
												let r = n.shareScope;
												const t = c;
												if (c === t) {
													if ("string" != typeof r)
														return (
															(d.errors = [{ params: { type: "string" } }]), !1
														);
													if (r.length < 1)
														return (d.errors = [{ params: {} }]), !1;
												}
												u = t === c;
											} else u = !0;
											if (u)
												if (void 0 !== n.shared) {
													const r = c;
													D(n.shared, {
														instancePath: a + "/shared",
														parentData: n,
														parentDataProperty: "shared",
														rootData: i
													}) ||
														((f = null === f ? D.errors : f.concat(D.errors)),
														(c = f.length)),
														(u = r === c);
												} else u = !0;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (d.errors = f), 0 === c;
}

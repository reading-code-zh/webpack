/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
"use strict";
(module.exports = a), (module.exports.default = a);
const r = {
		eager: { type: "boolean" },
		import: { anyOf: [{ enum: [!1] }, { $ref: "#/definitions/SharedItem" }] },
		packageName: { type: "string", minLength: 1 },
		requiredVersion: { anyOf: [{ enum: [!1] }, { type: "string" }] },
		shareKey: { type: "string", minLength: 1 },
		shareScope: { type: "string", minLength: 1 },
		singleton: { type: "boolean" },
		strictVersion: { type: "boolean" },
		version: { anyOf: [{ enum: [!1] }, { type: "string" }] }
	},
	e = Object.prototype.hasOwnProperty;
function t(
	n,
	{
		instancePath: s = "",
		parentData: a,
		parentDataProperty: o,
		rootData: i = n
	} = {}
) {
	let l = null,
		p = 0;
	if (0 === p) {
		if (!n || "object" != typeof n || Array.isArray(n))
			return (t.errors = [{ params: { type: "object" } }]), !1;
		{
			const s = p;
			for (const s in n)
				if (!e.call(r, s))
					return (t.errors = [{ params: { additionalProperty: s } }]), !1;
			if (s === p) {
				if (void 0 !== n.eager) {
					const r = p;
					if ("boolean" != typeof n.eager)
						return (t.errors = [{ params: { type: "boolean" } }]), !1;
					var f = r === p;
				} else f = !0;
				if (f) {
					if (void 0 !== n.import) {
						let r = n.import;
						const e = p,
							s = p;
						let a = !1;
						const o = p;
						if (!1 !== r) {
							const r = { params: {} };
							null === l ? (l = [r]) : l.push(r), p++;
						}
						var u = o === p;
						if (((a = a || u), !a)) {
							const e = p;
							if (p == p)
								if ("string" == typeof r) {
									if (r.length < 1) {
										const r = { params: {} };
										null === l ? (l = [r]) : l.push(r), p++;
									}
								} else {
									const r = { params: { type: "string" } };
									null === l ? (l = [r]) : l.push(r), p++;
								}
							(u = e === p), (a = a || u);
						}
						if (!a) {
							const r = { params: {} };
							return (
								null === l ? (l = [r]) : l.push(r), p++, (t.errors = l), !1
							);
						}
						(p = s),
							null !== l && (s ? (l.length = s) : (l = null)),
							(f = e === p);
					} else f = !0;
					if (f) {
						if (void 0 !== n.packageName) {
							let r = n.packageName;
							const e = p;
							if (p === e) {
								if ("string" != typeof r)
									return (t.errors = [{ params: { type: "string" } }]), !1;
								if (r.length < 1) return (t.errors = [{ params: {} }]), !1;
							}
							f = e === p;
						} else f = !0;
						if (f) {
							if (void 0 !== n.requiredVersion) {
								let r = n.requiredVersion;
								const e = p,
									s = p;
								let a = !1;
								const o = p;
								if (!1 !== r) {
									const r = { params: {} };
									null === l ? (l = [r]) : l.push(r), p++;
								}
								var c = o === p;
								if (((a = a || c), !a)) {
									const e = p;
									if ("string" != typeof r) {
										const r = { params: { type: "string" } };
										null === l ? (l = [r]) : l.push(r), p++;
									}
									(c = e === p), (a = a || c);
								}
								if (!a) {
									const r = { params: {} };
									return (
										null === l ? (l = [r]) : l.push(r), p++, (t.errors = l), !1
									);
								}
								(p = s),
									null !== l && (s ? (l.length = s) : (l = null)),
									(f = e === p);
							} else f = !0;
							if (f) {
								if (void 0 !== n.shareKey) {
									let r = n.shareKey;
									const e = p;
									if (p === e) {
										if ("string" != typeof r)
											return (t.errors = [{ params: { type: "string" } }]), !1;
										if (r.length < 1) return (t.errors = [{ params: {} }]), !1;
									}
									f = e === p;
								} else f = !0;
								if (f) {
									if (void 0 !== n.shareScope) {
										let r = n.shareScope;
										const e = p;
										if (p === e) {
											if ("string" != typeof r)
												return (
													(t.errors = [{ params: { type: "string" } }]), !1
												);
											if (r.length < 1)
												return (t.errors = [{ params: {} }]), !1;
										}
										f = e === p;
									} else f = !0;
									if (f) {
										if (void 0 !== n.singleton) {
											const r = p;
											if ("boolean" != typeof n.singleton)
												return (
													(t.errors = [{ params: { type: "boolean" } }]), !1
												);
											f = r === p;
										} else f = !0;
										if (f) {
											if (void 0 !== n.strictVersion) {
												const r = p;
												if ("boolean" != typeof n.strictVersion)
													return (
														(t.errors = [{ params: { type: "boolean" } }]), !1
													);
												f = r === p;
											} else f = !0;
											if (f)
												if (void 0 !== n.version) {
													let r = n.version;
													const e = p,
														s = p;
													let a = !1;
													const o = p;
													if (!1 !== r) {
														const r = { params: {} };
														null === l ? (l = [r]) : l.push(r), p++;
													}
													var y = o === p;
													if (((a = a || y), !a)) {
														const e = p;
														if ("string" != typeof r) {
															const r = { params: { type: "string" } };
															null === l ? (l = [r]) : l.push(r), p++;
														}
														(y = e === p), (a = a || y);
													}
													if (!a) {
														const r = { params: {} };
														return (
															null === l ? (l = [r]) : l.push(r),
															p++,
															(t.errors = l),
															!1
														);
													}
													(p = s),
														null !== l && (s ? (l.length = s) : (l = null)),
														(f = e === p);
												} else f = !0;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (t.errors = l), 0 === p;
}
function n(
	r,
	{
		instancePath: e = "",
		parentData: s,
		parentDataProperty: a,
		rootData: o = r
	} = {}
) {
	let i = null,
		l = 0;
	if (0 === l) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (n.errors = [{ params: { type: "object" } }]), !1;
		for (const s in r) {
			let a = r[s];
			const f = l,
				u = l;
			let c = !1;
			const y = l;
			t(a, {
				instancePath: e + "/" + s.replace(/~/g, "~0").replace(/\//g, "~1"),
				parentData: r,
				parentDataProperty: s,
				rootData: o
			}) || ((i = null === i ? t.errors : i.concat(t.errors)), (l = i.length));
			var p = y === l;
			if (((c = c || p), !c)) {
				const r = l;
				if (l == l)
					if ("string" == typeof a) {
						if (a.length < 1) {
							const r = { params: {} };
							null === i ? (i = [r]) : i.push(r), l++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === i ? (i = [r]) : i.push(r), l++;
					}
				(p = r === l), (c = c || p);
			}
			if (!c) {
				const r = { params: {} };
				return null === i ? (i = [r]) : i.push(r), l++, (n.errors = i), !1;
			}
			if (((l = u), null !== i && (u ? (i.length = u) : (i = null)), f !== l))
				break;
		}
	}
	return (n.errors = i), 0 === l;
}
function s(
	r,
	{
		instancePath: e = "",
		parentData: t,
		parentDataProperty: a,
		rootData: o = r
	} = {}
) {
	let i = null,
		l = 0;
	const p = l;
	let f = !1;
	const u = l;
	if (l === u)
		if (Array.isArray(r)) {
			const t = r.length;
			for (let s = 0; s < t; s++) {
				let t = r[s];
				const a = l,
					p = l;
				let f = !1;
				const u = l;
				if (l == l)
					if ("string" == typeof t) {
						if (t.length < 1) {
							const r = { params: {} };
							null === i ? (i = [r]) : i.push(r), l++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === i ? (i = [r]) : i.push(r), l++;
					}
				var c = u === l;
				if (((f = f || c), !f)) {
					const a = l;
					n(t, {
						instancePath: e + "/" + s,
						parentData: r,
						parentDataProperty: s,
						rootData: o
					}) ||
						((i = null === i ? n.errors : i.concat(n.errors)), (l = i.length)),
						(c = a === l),
						(f = f || c);
				}
				if (f) (l = p), null !== i && (p ? (i.length = p) : (i = null));
				else {
					const r = { params: {} };
					null === i ? (i = [r]) : i.push(r), l++;
				}
				if (a !== l) break;
			}
		} else {
			const r = { params: { type: "array" } };
			null === i ? (i = [r]) : i.push(r), l++;
		}
	var y = u === l;
	if (((f = f || y), !f)) {
		const s = l;
		n(r, {
			instancePath: e,
			parentData: t,
			parentDataProperty: a,
			rootData: o
		}) || ((i = null === i ? n.errors : i.concat(n.errors)), (l = i.length)),
			(y = s === l),
			(f = f || y);
	}
	if (!f) {
		const r = { params: {} };
		return null === i ? (i = [r]) : i.push(r), l++, (s.errors = i), !1;
	}
	return (
		(l = p),
		null !== i && (p ? (i.length = p) : (i = null)),
		(s.errors = i),
		0 === l
	);
}
function a(
	r,
	{
		instancePath: e = "",
		parentData: t,
		parentDataProperty: n,
		rootData: o = r
	} = {}
) {
	let i = null,
		l = 0;
	if (0 === l) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (a.errors = [{ params: { type: "object" } }]), !1;
		{
			let t;
			if (void 0 === r.shared && (t = "shared"))
				return (a.errors = [{ params: { missingProperty: t } }]), !1;
			{
				const t = l;
				for (const e in r)
					if ("shareScope" !== e && "shared" !== e)
						return (a.errors = [{ params: { additionalProperty: e } }]), !1;
				if (t === l) {
					if (void 0 !== r.shareScope) {
						let e = r.shareScope;
						const t = l;
						if (l === t) {
							if ("string" != typeof e)
								return (a.errors = [{ params: { type: "string" } }]), !1;
							if (e.length < 1) return (a.errors = [{ params: {} }]), !1;
						}
						var p = t === l;
					} else p = !0;
					if (p)
						if (void 0 !== r.shared) {
							const t = l;
							s(r.shared, {
								instancePath: e + "/shared",
								parentData: r,
								parentDataProperty: "shared",
								rootData: o
							}) ||
								((i = null === i ? s.errors : i.concat(s.errors)),
								(l = i.length)),
								(p = t === l);
						} else p = !0;
				}
			}
		}
	}
	return (a.errors = i), 0 === l;
}

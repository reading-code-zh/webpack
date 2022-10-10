/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
"use strict";
function r(
	t,
	{
		instancePath: e = "",
		parentData: a,
		parentDataProperty: n,
		rootData: o = t
	} = {}
) {
	if (!Array.isArray(t))
		return (r.errors = [{ params: { type: "array" } }]), !1;
	{
		const e = t.length;
		for (let a = 0; a < e; a++) {
			let e = t[a];
			const n = 0;
			if ("string" != typeof e)
				return (r.errors = [{ params: { type: "string" } }]), !1;
			if (e.length < 1) return (r.errors = [{ params: {} }]), !1;
			if (0 !== n) break;
		}
	}
	return (r.errors = null), !0;
}
function t(
	e,
	{
		instancePath: a = "",
		parentData: n,
		parentDataProperty: o,
		rootData: s = e
	} = {}
) {
	let l = null,
		p = 0;
	if (0 === p) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (t.errors = [{ params: { type: "object" } }]), !1;
		{
			let n;
			if (void 0 === e.external && (n = "external"))
				return (t.errors = [{ params: { missingProperty: n } }]), !1;
			{
				const n = p;
				for (const r in e)
					if ("external" !== r && "shareScope" !== r)
						return (t.errors = [{ params: { additionalProperty: r } }]), !1;
				if (n === p) {
					if (void 0 !== e.external) {
						let n = e.external;
						const o = p,
							u = p;
						let f = !1;
						const m = p;
						if (p == p)
							if ("string" == typeof n) {
								if (n.length < 1) {
									const r = { params: {} };
									null === l ? (l = [r]) : l.push(r), p++;
								}
							} else {
								const r = { params: { type: "string" } };
								null === l ? (l = [r]) : l.push(r), p++;
							}
						var i = m === p;
						if (((f = f || i), !f)) {
							const t = p;
							r(n, {
								instancePath: a + "/external",
								parentData: e,
								parentDataProperty: "external",
								rootData: s
							}) ||
								((l = null === l ? r.errors : l.concat(r.errors)),
								(p = l.length)),
								(i = t === p),
								(f = f || i);
						}
						if (!f) {
							const r = { params: {} };
							return (
								null === l ? (l = [r]) : l.push(r), p++, (t.errors = l), !1
							);
						}
						(p = u), null !== l && (u ? (l.length = u) : (l = null));
						var c = o === p;
					} else c = !0;
					if (c)
						if (void 0 !== e.shareScope) {
							let r = e.shareScope;
							const a = p;
							if (p === a) {
								if ("string" != typeof r)
									return (t.errors = [{ params: { type: "string" } }]), !1;
								if (r.length < 1) return (t.errors = [{ params: {} }]), !1;
							}
							c = a === p;
						} else c = !0;
				}
			}
		}
	}
	return (t.errors = l), 0 === p;
}
function e(
	a,
	{
		instancePath: n = "",
		parentData: o,
		parentDataProperty: s,
		rootData: l = a
	} = {}
) {
	let p = null,
		i = 0;
	if (0 === i) {
		if (!a || "object" != typeof a || Array.isArray(a))
			return (e.errors = [{ params: { type: "object" } }]), !1;
		for (const o in a) {
			let s = a[o];
			const u = i,
				f = i;
			let m = !1;
			const y = i;
			t(s, {
				instancePath: n + "/" + o.replace(/~/g, "~0").replace(/\//g, "~1"),
				parentData: a,
				parentDataProperty: o,
				rootData: l
			}) || ((p = null === p ? t.errors : p.concat(t.errors)), (i = p.length));
			var c = y === i;
			if (((m = m || c), !m)) {
				const t = i;
				if (i == i)
					if ("string" == typeof s) {
						if (s.length < 1) {
							const r = { params: {} };
							null === p ? (p = [r]) : p.push(r), i++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === p ? (p = [r]) : p.push(r), i++;
					}
				if (((c = t === i), (m = m || c), !m)) {
					const t = i;
					r(s, {
						instancePath: n + "/" + o.replace(/~/g, "~0").replace(/\//g, "~1"),
						parentData: a,
						parentDataProperty: o,
						rootData: l
					}) ||
						((p = null === p ? r.errors : p.concat(r.errors)), (i = p.length)),
						(c = t === i),
						(m = m || c);
				}
			}
			if (!m) {
				const r = { params: {} };
				return null === p ? (p = [r]) : p.push(r), i++, (e.errors = p), !1;
			}
			if (((i = f), null !== p && (f ? (p.length = f) : (p = null)), u !== i))
				break;
		}
	}
	return (e.errors = p), 0 === i;
}
function a(
	r,
	{
		instancePath: t = "",
		parentData: n,
		parentDataProperty: o,
		rootData: s = r
	} = {}
) {
	let l = null,
		p = 0;
	const i = p;
	let c = !1;
	const u = p;
	if (p === u)
		if (Array.isArray(r)) {
			const a = r.length;
			for (let n = 0; n < a; n++) {
				let a = r[n];
				const o = p,
					i = p;
				let c = !1;
				const u = p;
				if (p == p)
					if ("string" == typeof a) {
						if (a.length < 1) {
							const r = { params: {} };
							null === l ? (l = [r]) : l.push(r), p++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === l ? (l = [r]) : l.push(r), p++;
					}
				var f = u === p;
				if (((c = c || f), !c)) {
					const o = p;
					e(a, {
						instancePath: t + "/" + n,
						parentData: r,
						parentDataProperty: n,
						rootData: s
					}) ||
						((l = null === l ? e.errors : l.concat(e.errors)), (p = l.length)),
						(f = o === p),
						(c = c || f);
				}
				if (c) (p = i), null !== l && (i ? (l.length = i) : (l = null));
				else {
					const r = { params: {} };
					null === l ? (l = [r]) : l.push(r), p++;
				}
				if (o !== p) break;
			}
		} else {
			const r = { params: { type: "array" } };
			null === l ? (l = [r]) : l.push(r), p++;
		}
	var m = u === p;
	if (((c = c || m), !c)) {
		const a = p;
		e(r, {
			instancePath: t,
			parentData: n,
			parentDataProperty: o,
			rootData: s
		}) || ((l = null === l ? e.errors : l.concat(e.errors)), (p = l.length)),
			(m = a === p),
			(c = c || m);
	}
	if (!c) {
		const r = { params: {} };
		return null === l ? (l = [r]) : l.push(r), p++, (a.errors = l), !1;
	}
	return (
		(p = i),
		null !== l && (i ? (l.length = i) : (l = null)),
		(a.errors = l),
		0 === p
	);
}
function n(
	r,
	{
		instancePath: t = "",
		parentData: e,
		parentDataProperty: o,
		rootData: s = r
	} = {}
) {
	let l = null,
		p = 0;
	if (0 === p) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (n.errors = [{ params: { type: "object" } }]), !1;
		{
			let e;
			if (
				(void 0 === r.remoteType && (e = "remoteType")) ||
				(void 0 === r.remotes && (e = "remotes"))
			)
				return (n.errors = [{ params: { missingProperty: e } }]), !1;
			{
				const e = p;
				for (const t in r)
					if ("remoteType" !== t && "remotes" !== t && "shareScope" !== t)
						return (n.errors = [{ params: { additionalProperty: t } }]), !1;
				if (e === p) {
					if (void 0 !== r.remoteType) {
						let t = r.remoteType;
						const e = p,
							a = p;
						let o = !1,
							s = null;
						const c = p;
						if (
							"var" !== t &&
							"module" !== t &&
							"assign" !== t &&
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
							"system" !== t &&
							"promise" !== t &&
							"import" !== t &&
							"script" !== t &&
							"node-commonjs" !== t
						) {
							const r = { params: {} };
							null === l ? (l = [r]) : l.push(r), p++;
						}
						if ((c === p && ((o = !0), (s = 0)), !o)) {
							const r = { params: { passingSchemas: s } };
							return (
								null === l ? (l = [r]) : l.push(r), p++, (n.errors = l), !1
							);
						}
						(p = a), null !== l && (a ? (l.length = a) : (l = null));
						var i = e === p;
					} else i = !0;
					if (i) {
						if (void 0 !== r.remotes) {
							const e = p;
							a(r.remotes, {
								instancePath: t + "/remotes",
								parentData: r,
								parentDataProperty: "remotes",
								rootData: s
							}) ||
								((l = null === l ? a.errors : l.concat(a.errors)),
								(p = l.length)),
								(i = e === p);
						} else i = !0;
						if (i)
							if (void 0 !== r.shareScope) {
								let t = r.shareScope;
								const e = p;
								if (p === e) {
									if ("string" != typeof t)
										return (n.errors = [{ params: { type: "string" } }]), !1;
									if (t.length < 1) return (n.errors = [{ params: {} }]), !1;
								}
								i = e === p;
							} else i = !0;
					}
				}
			}
		}
	}
	return (n.errors = l), 0 === p;
}
(module.exports = n), (module.exports.default = n);

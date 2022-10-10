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
		parentData: s,
		parentDataProperty: n,
		rootData: a = t
	} = {}
) {
	let o = null,
		l = 0;
	if (0 === l) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (r.errors = [{ params: { type: "object" } }]), !1;
		for (const e in t) {
			let s = t[e];
			const n = l,
				a = l;
			let f = !1;
			const u = l;
			if (l == l)
				if (s && "object" == typeof s && !Array.isArray(s)) {
					const r = l;
					for (const r in s)
						if (
							"eager" !== r &&
							"shareKey" !== r &&
							"shareScope" !== r &&
							"version" !== r
						) {
							const t = { params: { additionalProperty: r } };
							null === o ? (o = [t]) : o.push(t), l++;
							break;
						}
					if (r === l) {
						if (void 0 !== s.eager) {
							const r = l;
							if ("boolean" != typeof s.eager) {
								const r = { params: { type: "boolean" } };
								null === o ? (o = [r]) : o.push(r), l++;
							}
							var i = r === l;
						} else i = !0;
						if (i) {
							if (void 0 !== s.shareKey) {
								let r = s.shareKey;
								const t = l;
								if (l === t)
									if ("string" == typeof r) {
										if (r.length < 1) {
											const r = { params: {} };
											null === o ? (o = [r]) : o.push(r), l++;
										}
									} else {
										const r = { params: { type: "string" } };
										null === o ? (o = [r]) : o.push(r), l++;
									}
								i = t === l;
							} else i = !0;
							if (i) {
								if (void 0 !== s.shareScope) {
									let r = s.shareScope;
									const t = l;
									if (l === t)
										if ("string" == typeof r) {
											if (r.length < 1) {
												const r = { params: {} };
												null === o ? (o = [r]) : o.push(r), l++;
											}
										} else {
											const r = { params: { type: "string" } };
											null === o ? (o = [r]) : o.push(r), l++;
										}
									i = t === l;
								} else i = !0;
								if (i)
									if (void 0 !== s.version) {
										let r = s.version;
										const t = l,
											e = l;
										let n = !1;
										const a = l;
										if (!1 !== r) {
											const r = { params: {} };
											null === o ? (o = [r]) : o.push(r), l++;
										}
										var p = a === l;
										if (((n = n || p), !n)) {
											const t = l;
											if ("string" != typeof r) {
												const r = { params: { type: "string" } };
												null === o ? (o = [r]) : o.push(r), l++;
											}
											(p = t === l), (n = n || p);
										}
										if (n)
											(l = e), null !== o && (e ? (o.length = e) : (o = null));
										else {
											const r = { params: {} };
											null === o ? (o = [r]) : o.push(r), l++;
										}
										i = t === l;
									} else i = !0;
							}
						}
					}
				} else {
					const r = { params: { type: "object" } };
					null === o ? (o = [r]) : o.push(r), l++;
				}
			var c = u === l;
			if (((f = f || c), !f)) {
				const r = l;
				if (l == l)
					if ("string" == typeof s) {
						if (s.length < 1) {
							const r = { params: {} };
							null === o ? (o = [r]) : o.push(r), l++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === o ? (o = [r]) : o.push(r), l++;
					}
				(c = r === l), (f = f || c);
			}
			if (!f) {
				const t = { params: {} };
				return null === o ? (o = [t]) : o.push(t), l++, (r.errors = o), !1;
			}
			if (((l = a), null !== o && (a ? (o.length = a) : (o = null)), n !== l))
				break;
		}
	}
	return (r.errors = o), 0 === l;
}
function t(
	e,
	{
		instancePath: s = "",
		parentData: n,
		parentDataProperty: a,
		rootData: o = e
	} = {}
) {
	let l = null,
		i = 0;
	const p = i;
	let c = !1;
	const f = i;
	if (i === f)
		if (Array.isArray(e)) {
			const t = e.length;
			for (let n = 0; n < t; n++) {
				let t = e[n];
				const a = i,
					p = i;
				let c = !1;
				const f = i;
				if (i == i)
					if ("string" == typeof t) {
						if (t.length < 1) {
							const r = { params: {} };
							null === l ? (l = [r]) : l.push(r), i++;
						}
					} else {
						const r = { params: { type: "string" } };
						null === l ? (l = [r]) : l.push(r), i++;
					}
				var u = f === i;
				if (((c = c || u), !c)) {
					const a = i;
					r(t, {
						instancePath: s + "/" + n,
						parentData: e,
						parentDataProperty: n,
						rootData: o
					}) ||
						((l = null === l ? r.errors : l.concat(r.errors)), (i = l.length)),
						(u = a === i),
						(c = c || u);
				}
				if (c) (i = p), null !== l && (p ? (l.length = p) : (l = null));
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
	var h = f === i;
	if (((c = c || h), !c)) {
		const t = i;
		r(e, {
			instancePath: s,
			parentData: n,
			parentDataProperty: a,
			rootData: o
		}) || ((l = null === l ? r.errors : l.concat(r.errors)), (i = l.length)),
			(h = t === i),
			(c = c || h);
	}
	if (!c) {
		const r = { params: {} };
		return null === l ? (l = [r]) : l.push(r), i++, (t.errors = l), !1;
	}
	return (
		(i = p),
		null !== l && (p ? (l.length = p) : (l = null)),
		(t.errors = l),
		0 === i
	);
}
function e(
	r,
	{
		instancePath: s = "",
		parentData: n,
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
			let n;
			if (void 0 === r.provides && (n = "provides"))
				return (e.errors = [{ params: { missingProperty: n } }]), !1;
			{
				const n = i;
				for (const t in r)
					if ("provides" !== t && "shareScope" !== t)
						return (e.errors = [{ params: { additionalProperty: t } }]), !1;
				if (n === i) {
					if (void 0 !== r.provides) {
						const e = i;
						t(r.provides, {
							instancePath: s + "/provides",
							parentData: r,
							parentDataProperty: "provides",
							rootData: o
						}) ||
							((l = null === l ? t.errors : l.concat(t.errors)),
							(i = l.length));
						var p = e === i;
					} else p = !0;
					if (p)
						if (void 0 !== r.shareScope) {
							let t = r.shareScope;
							const s = i;
							if (i === s) {
								if ("string" != typeof t)
									return (e.errors = [{ params: { type: "string" } }]), !1;
								if (t.length < 1) return (e.errors = [{ params: {} }]), !1;
							}
							p = s === i;
						} else p = !0;
				}
			}
		}
	}
	return (e.errors = l), 0 === i;
}
(module.exports = e), (module.exports.default = e);

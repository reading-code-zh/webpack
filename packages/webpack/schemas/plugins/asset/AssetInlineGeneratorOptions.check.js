/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
"use strict";
function t(
	r,
	{
		instancePath: a = "",
		parentData: n,
		parentDataProperty: e,
		rootData: o = r
	} = {}
) {
	let s = null,
		l = 0;
	const i = l;
	let p = !1;
	const c = l;
	if (l == l)
		if (r && "object" == typeof r && !Array.isArray(r)) {
			const t = l;
			for (const t in r)
				if ("encoding" !== t && "mimetype" !== t) {
					const r = { params: { additionalProperty: t } };
					null === s ? (s = [r]) : s.push(r), l++;
					break;
				}
			if (t === l) {
				if (void 0 !== r.encoding) {
					let t = r.encoding;
					const a = l;
					if (!1 !== t && "base64" !== t) {
						const t = { params: {} };
						null === s ? (s = [t]) : s.push(t), l++;
					}
					var u = a === l;
				} else u = !0;
				if (u)
					if (void 0 !== r.mimetype) {
						const t = l;
						if ("string" != typeof r.mimetype) {
							const t = { params: { type: "string" } };
							null === s ? (s = [t]) : s.push(t), l++;
						}
						u = t === l;
					} else u = !0;
			}
		} else {
			const t = { params: { type: "object" } };
			null === s ? (s = [t]) : s.push(t), l++;
		}
	var f = c === l;
	if (((p = p || f), !p)) {
		const t = l;
		if (!(r instanceof Function)) {
			const t = { params: {} };
			null === s ? (s = [t]) : s.push(t), l++;
		}
		(f = t === l), (p = p || f);
	}
	if (!p) {
		const r = { params: {} };
		return null === s ? (s = [r]) : s.push(r), l++, (t.errors = s), !1;
	}
	return (
		(l = i),
		null !== s && (i ? (s.length = i) : (s = null)),
		(t.errors = s),
		0 === l
	);
}
function r(
	a,
	{
		instancePath: n = "",
		parentData: e,
		parentDataProperty: o,
		rootData: s = a
	} = {}
) {
	let l = null,
		i = 0;
	if (0 === i) {
		if (!a || "object" != typeof a || Array.isArray(a))
			return (r.errors = [{ params: { type: "object" } }]), !1;
		{
			const e = i;
			for (const t in a)
				if ("dataUrl" !== t)
					return (r.errors = [{ params: { additionalProperty: t } }]), !1;
			e === i &&
				void 0 !== a.dataUrl &&
				(t(a.dataUrl, {
					instancePath: n + "/dataUrl",
					parentData: a,
					parentDataProperty: "dataUrl",
					rootData: s
				}) ||
					((l = null === l ? t.errors : l.concat(t.errors)), (i = l.length)));
		}
	}
	return (r.errors = l), 0 === i;
}
function a(
	t,
	{
		instancePath: n = "",
		parentData: e,
		parentDataProperty: o,
		rootData: s = t
	} = {}
) {
	let l = null,
		i = 0;
	return (
		r(t, {
			instancePath: n,
			parentData: e,
			parentDataProperty: o,
			rootData: s
		}) || ((l = null === l ? r.errors : l.concat(r.errors)), (i = l.length)),
		(a.errors = l),
		0 === i
	);
}
(module.exports = a), (module.exports.default = a);

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
		parentDataProperty: o,
		rootData: e = r
	} = {}
) {
	let s = null,
		i = 0;
	if (0 === i) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (t.errors = [{ params: { type: "object" } }]), !1;
		{
			const a = i;
			for (const a in r)
				if ("dataUrlCondition" !== a)
					return (t.errors = [{ params: { additionalProperty: a } }]), !1;
			if (a === i && void 0 !== r.dataUrlCondition) {
				let a = r.dataUrlCondition;
				const n = i;
				let o = !1;
				const e = i;
				if (i == i)
					if (a && "object" == typeof a && !Array.isArray(a)) {
						const t = i;
						for (const t in a)
							if ("maxSize" !== t) {
								const r = { params: { additionalProperty: t } };
								null === s ? (s = [r]) : s.push(r), i++;
								break;
							}
						if (
							t === i &&
							void 0 !== a.maxSize &&
							"number" != typeof a.maxSize
						) {
							const t = { params: { type: "number" } };
							null === s ? (s = [t]) : s.push(t), i++;
						}
					} else {
						const t = { params: { type: "object" } };
						null === s ? (s = [t]) : s.push(t), i++;
					}
				var l = e === i;
				if (((o = o || l), !o)) {
					const t = i;
					if (!(a instanceof Function)) {
						const t = { params: {} };
						null === s ? (s = [t]) : s.push(t), i++;
					}
					(l = t === i), (o = o || l);
				}
				if (!o) {
					const r = { params: {} };
					return null === s ? (s = [r]) : s.push(r), i++, (t.errors = s), !1;
				}
				(i = n), null !== s && (n ? (s.length = n) : (s = null));
			}
		}
	}
	return (t.errors = s), 0 === i;
}
function r(
	a,
	{
		instancePath: n = "",
		parentData: o,
		parentDataProperty: e,
		rootData: s = a
	} = {}
) {
	let i = null,
		l = 0;
	return (
		t(a, {
			instancePath: n,
			parentData: o,
			parentDataProperty: e,
			rootData: s
		}) || ((i = null === i ? t.errors : i.concat(t.errors)), (l = i.length)),
		(r.errors = i),
		0 === l
	);
}
(module.exports = r), (module.exports.default = r);

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
		parentDataProperty: a,
		rootData: n = t
	} = {}
) {
	let o = null,
		i = 0;
	if (0 === i) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (r.errors = [{ params: { type: "object" } }]), !1;
		{
			let e;
			if (void 0 === t.paths && (e = "paths"))
				return (r.errors = [{ params: { missingProperty: e } }]), !1;
			{
				const e = i;
				for (const e in t)
					if ("paths" !== e)
						return (r.errors = [{ params: { additionalProperty: e } }]), !1;
				if (e === i && void 0 !== t.paths) {
					let e = t.paths;
					if (i == i) {
						if (!Array.isArray(e))
							return (r.errors = [{ params: { type: "array" } }]), !1;
						if (e.length < 1)
							return (r.errors = [{ params: { limit: 1 } }]), !1;
						{
							const t = e.length;
							for (let s = 0; s < t; s++) {
								let t = e[s];
								const a = i,
									n = i;
								let l = !1;
								const u = i;
								if (!(t instanceof RegExp)) {
									const r = { params: {} };
									null === o ? (o = [r]) : o.push(r), i++;
								}
								var p = u === i;
								if (((l = l || p), !l)) {
									const r = i;
									if ("string" != typeof t) {
										const r = { params: { type: "string" } };
										null === o ? (o = [r]) : o.push(r), i++;
									}
									(p = r === i), (l = l || p);
								}
								if (!l) {
									const t = { params: {} };
									return (
										null === o ? (o = [t]) : o.push(t), i++, (r.errors = o), !1
									);
								}
								if (
									((i = n),
									null !== o && (n ? (o.length = n) : (o = null)),
									a !== i)
								)
									break;
							}
						}
					}
				}
			}
		}
	}
	return (r.errors = o), 0 === i;
}
(module.exports = r), (module.exports.default = r);

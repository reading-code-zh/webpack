/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
"use strict";
function e(
	s,
	{
		instancePath: o = "",
		parentData: r,
		parentDataProperty: t,
		rootData: n = s
	} = {}
) {
	let c = null,
		a = 0;
	const p = a;
	let l = !1;
	const i = a;
	if (a === i)
		if (s && "object" == typeof s && !Array.isArray(s)) {
			let e;
			if (void 0 === s.resourceRegExp && (e = "resourceRegExp")) {
				const s = { params: { missingProperty: e } };
				null === c ? (c = [s]) : c.push(s), a++;
			} else {
				const e = a;
				for (const e in s)
					if ("contextRegExp" !== e && "resourceRegExp" !== e) {
						const s = { params: { additionalProperty: e } };
						null === c ? (c = [s]) : c.push(s), a++;
						break;
					}
				if (e === a) {
					if (void 0 !== s.contextRegExp) {
						const e = a;
						if (!(s.contextRegExp instanceof RegExp)) {
							const e = { params: {} };
							null === c ? (c = [e]) : c.push(e), a++;
						}
						var u = e === a;
					} else u = !0;
					if (u)
						if (void 0 !== s.resourceRegExp) {
							const e = a;
							if (!(s.resourceRegExp instanceof RegExp)) {
								const e = { params: {} };
								null === c ? (c = [e]) : c.push(e), a++;
							}
							u = e === a;
						} else u = !0;
				}
			}
		} else {
			const e = { params: { type: "object" } };
			null === c ? (c = [e]) : c.push(e), a++;
		}
	var f = i === a;
	if (((l = l || f), !l)) {
		const e = a;
		if (a === e)
			if (s && "object" == typeof s && !Array.isArray(s)) {
				let e;
				if (void 0 === s.checkResource && (e = "checkResource")) {
					const s = { params: { missingProperty: e } };
					null === c ? (c = [s]) : c.push(s), a++;
				} else {
					const e = a;
					for (const e in s)
						if ("checkResource" !== e) {
							const s = { params: { additionalProperty: e } };
							null === c ? (c = [s]) : c.push(s), a++;
							break;
						}
					if (
						e === a &&
						void 0 !== s.checkResource &&
						!(s.checkResource instanceof Function)
					) {
						const e = { params: {} };
						null === c ? (c = [e]) : c.push(e), a++;
					}
				}
			} else {
				const e = { params: { type: "object" } };
				null === c ? (c = [e]) : c.push(e), a++;
			}
		(f = e === a), (l = l || f);
	}
	if (!l) {
		const s = { params: {} };
		return null === c ? (c = [s]) : c.push(s), a++, (e.errors = c), !1;
	}
	return (
		(a = p),
		null !== c && (p ? (c.length = p) : (c = null)),
		(e.errors = c),
		0 === a
	);
}
(module.exports = e), (module.exports.default = e);

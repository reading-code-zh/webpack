/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const r = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
(module.exports = n), (module.exports.default = n);
const t = new RegExp("^https?://", "u");
function e(
	n,
	{
		instancePath: o = "",
		parentData: s,
		parentDataProperty: a,
		rootData: l = n
	} = {}
) {
	let i = null,
		p = 0;
	if (0 === p) {
		if (!n || "object" != typeof n || Array.isArray(n))
			return (e.errors = [{ params: { type: "object" } }]), !1;
		{
			let o;
			if (void 0 === n.allowedUris && (o = "allowedUris"))
				return (e.errors = [{ params: { missingProperty: o } }]), !1;
			{
				const o = p;
				for (const r in n)
					if (
						"allowedUris" !== r &&
						"cacheLocation" !== r &&
						"frozen" !== r &&
						"lockfileLocation" !== r &&
						"proxy" !== r &&
						"upgrade" !== r
					)
						return (e.errors = [{ params: { additionalProperty: r } }]), !1;
				if (o === p) {
					if (void 0 !== n.allowedUris) {
						let r = n.allowedUris;
						const o = p;
						if (p == p) {
							if (!Array.isArray(r))
								return (e.errors = [{ params: { type: "array" } }]), !1;
							{
								const n = r.length;
								for (let o = 0; o < n; o++) {
									let n = r[o];
									const s = p,
										a = p;
									let l = !1;
									const c = p;
									if (!(n instanceof RegExp)) {
										const r = { params: {} };
										null === i ? (i = [r]) : i.push(r), p++;
									}
									var f = c === p;
									if (((l = l || f), !l)) {
										const r = p;
										if (p === r)
											if ("string" == typeof n) {
												if (!t.test(n)) {
													const r = { params: { pattern: "^https?://" } };
													null === i ? (i = [r]) : i.push(r), p++;
												}
											} else {
												const r = { params: { type: "string" } };
												null === i ? (i = [r]) : i.push(r), p++;
											}
										if (((f = r === p), (l = l || f), !l)) {
											const r = p;
											if (!(n instanceof Function)) {
												const r = { params: {} };
												null === i ? (i = [r]) : i.push(r), p++;
											}
											(f = r === p), (l = l || f);
										}
									}
									if (!l) {
										const r = { params: {} };
										return (
											null === i ? (i = [r]) : i.push(r),
											p++,
											(e.errors = i),
											!1
										);
									}
									if (
										((p = a),
										null !== i && (a ? (i.length = a) : (i = null)),
										s !== p)
									)
										break;
								}
							}
						}
						var c = o === p;
					} else c = !0;
					if (c) {
						if (void 0 !== n.cacheLocation) {
							let t = n.cacheLocation;
							const o = p,
								s = p;
							let a = !1;
							const l = p;
							if (!1 !== t) {
								const r = { params: {} };
								null === i ? (i = [r]) : i.push(r), p++;
							}
							var u = l === p;
							if (((a = a || u), !a)) {
								const e = p;
								if (p === e)
									if ("string" == typeof t) {
										if (t.includes("!") || !0 !== r.test(t)) {
											const r = { params: {} };
											null === i ? (i = [r]) : i.push(r), p++;
										}
									} else {
										const r = { params: { type: "string" } };
										null === i ? (i = [r]) : i.push(r), p++;
									}
								(u = e === p), (a = a || u);
							}
							if (!a) {
								const r = { params: {} };
								return (
									null === i ? (i = [r]) : i.push(r), p++, (e.errors = i), !1
								);
							}
							(p = s),
								null !== i && (s ? (i.length = s) : (i = null)),
								(c = o === p);
						} else c = !0;
						if (c) {
							if (void 0 !== n.frozen) {
								const r = p;
								if ("boolean" != typeof n.frozen)
									return (e.errors = [{ params: { type: "boolean" } }]), !1;
								c = r === p;
							} else c = !0;
							if (c) {
								if (void 0 !== n.lockfileLocation) {
									let t = n.lockfileLocation;
									const o = p;
									if (p === o) {
										if ("string" != typeof t)
											return (e.errors = [{ params: { type: "string" } }]), !1;
										if (t.includes("!") || !0 !== r.test(t))
											return (e.errors = [{ params: {} }]), !1;
									}
									c = o === p;
								} else c = !0;
								if (c) {
									if (void 0 !== n.proxy) {
										const r = p;
										if ("string" != typeof n.proxy)
											return (e.errors = [{ params: { type: "string" } }]), !1;
										c = r === p;
									} else c = !0;
									if (c)
										if (void 0 !== n.upgrade) {
											const r = p;
											if ("boolean" != typeof n.upgrade)
												return (
													(e.errors = [{ params: { type: "boolean" } }]), !1
												);
											c = r === p;
										} else c = !0;
								}
							}
						}
					}
				}
			}
		}
	}
	return (e.errors = i), 0 === p;
}
function n(
	r,
	{
		instancePath: t = "",
		parentData: o,
		parentDataProperty: s,
		rootData: a = r
	} = {}
) {
	let l = null,
		i = 0;
	const p = i;
	let f = !1,
		c = null;
	const u = i;
	if (
		(e(r, {
			instancePath: t,
			parentData: o,
			parentDataProperty: s,
			rootData: a
		}) || ((l = null === l ? e.errors : l.concat(e.errors)), (i = l.length)),
		u === i && ((f = !0), (c = 0)),
		!f)
	) {
		const r = { params: { passingSchemas: c } };
		return null === l ? (l = [r]) : l.push(r), i++, (n.errors = l), !1;
	}
	return (
		(i = p),
		null !== l && (p ? (l.length = p) : (l = null)),
		(n.errors = l),
		0 === i
	);
}

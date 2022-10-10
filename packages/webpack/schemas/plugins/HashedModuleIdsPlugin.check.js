/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const t = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
function e(
	r,
	{
		instancePath: s = "",
		parentData: n,
		parentDataProperty: a,
		rootData: i = r
	} = {}
) {
	let o = null,
		l = 0;
	if (0 === l) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (e.errors = [{ params: { type: "object" } }]), !1;
		{
			const s = l;
			for (const t in r)
				if (
					"context" !== t &&
					"hashDigest" !== t &&
					"hashDigestLength" !== t &&
					"hashFunction" !== t
				)
					return (e.errors = [{ params: { additionalProperty: t } }]), !1;
			if (s === l) {
				if (void 0 !== r.context) {
					let s = r.context;
					const n = l;
					if (l === n) {
						if ("string" != typeof s)
							return (e.errors = [{ params: { type: "string" } }]), !1;
						if (s.includes("!") || !0 !== t.test(s))
							return (e.errors = [{ params: {} }]), !1;
					}
					var u = n === l;
				} else u = !0;
				if (u) {
					if (void 0 !== r.hashDigest) {
						let t = r.hashDigest;
						const s = l;
						if ("hex" !== t && "latin1" !== t && "base64" !== t)
							return (e.errors = [{ params: {} }]), !1;
						u = s === l;
					} else u = !0;
					if (u) {
						if (void 0 !== r.hashDigestLength) {
							let t = r.hashDigestLength;
							const s = l;
							if (l === s) {
								if ("number" != typeof t)
									return (e.errors = [{ params: { type: "number" } }]), !1;
								if (t < 1 || isNaN(t))
									return (
										(e.errors = [{ params: { comparison: ">=", limit: 1 } }]),
										!1
									);
							}
							u = s === l;
						} else u = !0;
						if (u)
							if (void 0 !== r.hashFunction) {
								let t = r.hashFunction;
								const s = l,
									n = l;
								let a = !1,
									i = null;
								const p = l,
									h = l;
								let c = !1;
								const m = l;
								if (l === m)
									if ("string" == typeof t) {
										if (t.length < 1) {
											const t = { params: {} };
											null === o ? (o = [t]) : o.push(t), l++;
										}
									} else {
										const t = { params: { type: "string" } };
										null === o ? (o = [t]) : o.push(t), l++;
									}
								var f = m === l;
								if (((c = c || f), !c)) {
									const e = l;
									if (!(t instanceof Function)) {
										const t = { params: {} };
										null === o ? (o = [t]) : o.push(t), l++;
									}
									(f = e === l), (c = c || f);
								}
								if (c) (l = h), null !== o && (h ? (o.length = h) : (o = null));
								else {
									const t = { params: {} };
									null === o ? (o = [t]) : o.push(t), l++;
								}
								if ((p === l && ((a = !0), (i = 0)), !a)) {
									const t = { params: { passingSchemas: i } };
									return (
										null === o ? (o = [t]) : o.push(t), l++, (e.errors = o), !1
									);
								}
								(l = n),
									null !== o && (n ? (o.length = n) : (o = null)),
									(u = s === l);
							} else u = !0;
					}
				}
			}
		}
	}
	return (e.errors = o), 0 === l;
}
(module.exports = e), (module.exports.default = e);

/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const t = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
function n(
	t,
	{
		instancePath: r = "",
		parentData: e,
		parentDataProperty: a,
		rootData: s = t
	} = {}
) {
	let o = null,
		l = 0;
	const i = l;
	let p = !1;
	const u = l;
	if (l == l)
		if (t && "object" == typeof t && !Array.isArray(t)) {
			const n = l;
			for (const n in t)
				if ("encoding" !== n && "mimetype" !== n) {
					const t = { params: { additionalProperty: n } };
					null === o ? (o = [t]) : o.push(t), l++;
					break;
				}
			if (n === l) {
				if (void 0 !== t.encoding) {
					let n = t.encoding;
					const r = l;
					if (!1 !== n && "base64" !== n) {
						const t = { params: {} };
						null === o ? (o = [t]) : o.push(t), l++;
					}
					var c = r === l;
				} else c = !0;
				if (c)
					if (void 0 !== t.mimetype) {
						const n = l;
						if ("string" != typeof t.mimetype) {
							const t = { params: { type: "string" } };
							null === o ? (o = [t]) : o.push(t), l++;
						}
						c = n === l;
					} else c = !0;
			}
		} else {
			const t = { params: { type: "object" } };
			null === o ? (o = [t]) : o.push(t), l++;
		}
	var f = u === l;
	if (((p = p || f), !p)) {
		const n = l;
		if (!(t instanceof Function)) {
			const t = { params: {} };
			null === o ? (o = [t]) : o.push(t), l++;
		}
		(f = n === l), (p = p || f);
	}
	if (!p) {
		const t = { params: {} };
		return null === o ? (o = [t]) : o.push(t), l++, (n.errors = o), !1;
	}
	return (
		(l = i),
		null !== o && (i ? (o.length = i) : (o = null)),
		(n.errors = o),
		0 === l
	);
}
function r(
	e,
	{
		instancePath: a = "",
		parentData: s,
		parentDataProperty: o,
		rootData: l = e
	} = {}
) {
	let i = null,
		p = 0;
	if (0 === p) {
		if (!e || "object" != typeof e || Array.isArray(e))
			return (r.errors = [{ params: { type: "object" } }]), !1;
		{
			const s = p;
			for (const t in e)
				if (
					"dataUrl" !== t &&
					"emit" !== t &&
					"filename" !== t &&
					"outputPath" !== t &&
					"publicPath" !== t
				)
					return (r.errors = [{ params: { additionalProperty: t } }]), !1;
			if (s === p) {
				if (void 0 !== e.dataUrl) {
					const t = p;
					n(e.dataUrl, {
						instancePath: a + "/dataUrl",
						parentData: e,
						parentDataProperty: "dataUrl",
						rootData: l
					}) ||
						((i = null === i ? n.errors : i.concat(n.errors)), (p = i.length));
					var u = t === p;
				} else u = !0;
				if (u) {
					if (void 0 !== e.emit) {
						const t = p;
						if ("boolean" != typeof e.emit)
							return (r.errors = [{ params: { type: "boolean" } }]), !1;
						u = t === p;
					} else u = !0;
					if (u) {
						if (void 0 !== e.filename) {
							let n = e.filename;
							const a = p,
								s = p;
							let o = !1;
							const l = p;
							if (p === l)
								if ("string" == typeof n) {
									if (n.includes("!") || !1 !== t.test(n)) {
										const t = { params: {} };
										null === i ? (i = [t]) : i.push(t), p++;
									} else if (n.length < 1) {
										const t = { params: {} };
										null === i ? (i = [t]) : i.push(t), p++;
									}
								} else {
									const t = { params: { type: "string" } };
									null === i ? (i = [t]) : i.push(t), p++;
								}
							var c = l === p;
							if (((o = o || c), !o)) {
								const t = p;
								if (!(n instanceof Function)) {
									const t = { params: {} };
									null === i ? (i = [t]) : i.push(t), p++;
								}
								(c = t === p), (o = o || c);
							}
							if (!o) {
								const t = { params: {} };
								return (
									null === i ? (i = [t]) : i.push(t), p++, (r.errors = i), !1
								);
							}
							(p = s),
								null !== i && (s ? (i.length = s) : (i = null)),
								(u = a === p);
						} else u = !0;
						if (u) {
							if (void 0 !== e.outputPath) {
								let n = e.outputPath;
								const a = p,
									s = p;
								let o = !1;
								const l = p;
								if (p === l)
									if ("string" == typeof n) {
										if (n.includes("!") || !1 !== t.test(n)) {
											const t = { params: {} };
											null === i ? (i = [t]) : i.push(t), p++;
										}
									} else {
										const t = { params: { type: "string" } };
										null === i ? (i = [t]) : i.push(t), p++;
									}
								var f = l === p;
								if (((o = o || f), !o)) {
									const t = p;
									if (!(n instanceof Function)) {
										const t = { params: {} };
										null === i ? (i = [t]) : i.push(t), p++;
									}
									(f = t === p), (o = o || f);
								}
								if (!o) {
									const t = { params: {} };
									return (
										null === i ? (i = [t]) : i.push(t), p++, (r.errors = i), !1
									);
								}
								(p = s),
									null !== i && (s ? (i.length = s) : (i = null)),
									(u = a === p);
							} else u = !0;
							if (u)
								if (void 0 !== e.publicPath) {
									let t = e.publicPath;
									const n = p,
										a = p;
									let s = !1;
									const o = p;
									if ("string" != typeof t) {
										const t = { params: { type: "string" } };
										null === i ? (i = [t]) : i.push(t), p++;
									}
									var h = o === p;
									if (((s = s || h), !s)) {
										const n = p;
										if (!(t instanceof Function)) {
											const t = { params: {} };
											null === i ? (i = [t]) : i.push(t), p++;
										}
										(h = n === p), (s = s || h);
									}
									if (!s) {
										const t = { params: {} };
										return (
											null === i ? (i = [t]) : i.push(t),
											p++,
											(r.errors = i),
											!1
										);
									}
									(p = a),
										null !== i && (a ? (i.length = a) : (i = null)),
										(u = n === p);
								} else u = !0;
						}
					}
				}
			}
		}
	}
	return (r.errors = i), 0 === p;
}
function e(
	t,
	{
		instancePath: n = "",
		parentData: a,
		parentDataProperty: s,
		rootData: o = t
	} = {}
) {
	let l = null,
		i = 0;
	return (
		r(t, {
			instancePath: n,
			parentData: a,
			parentDataProperty: s,
			rootData: o
		}) || ((l = null === l ? r.errors : l.concat(r.errors)), (i = l.length)),
		(e.errors = l),
		0 === i
	);
}
(module.exports = e), (module.exports.default = e);

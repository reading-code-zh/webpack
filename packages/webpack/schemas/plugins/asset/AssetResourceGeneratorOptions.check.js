/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
const t = /^(?:[A-Za-z]:[\\/]|\\\\|\/)/;
function n(
	r,
	{
		instancePath: e = "",
		parentData: s,
		parentDataProperty: a,
		rootData: o = r
	} = {}
) {
	let l = null,
		i = 0;
	if (0 === i) {
		if (!r || "object" != typeof r || Array.isArray(r))
			return (n.errors = [{ params: { type: "object" } }]), !1;
		{
			const e = i;
			for (const t in r)
				if (
					"emit" !== t &&
					"filename" !== t &&
					"outputPath" !== t &&
					"publicPath" !== t
				)
					return (n.errors = [{ params: { additionalProperty: t } }]), !1;
			if (e === i) {
				if (void 0 !== r.emit) {
					const t = i;
					if ("boolean" != typeof r.emit)
						return (n.errors = [{ params: { type: "boolean" } }]), !1;
					var u = t === i;
				} else u = !0;
				if (u) {
					if (void 0 !== r.filename) {
						let e = r.filename;
						const s = i,
							a = i;
						let o = !1;
						const c = i;
						if (i === c)
							if ("string" == typeof e) {
								if (e.includes("!") || !1 !== t.test(e)) {
									const t = { params: {} };
									null === l ? (l = [t]) : l.push(t), i++;
								} else if (e.length < 1) {
									const t = { params: {} };
									null === l ? (l = [t]) : l.push(t), i++;
								}
							} else {
								const t = { params: { type: "string" } };
								null === l ? (l = [t]) : l.push(t), i++;
							}
						var p = c === i;
						if (((o = o || p), !o)) {
							const t = i;
							if (!(e instanceof Function)) {
								const t = { params: {} };
								null === l ? (l = [t]) : l.push(t), i++;
							}
							(p = t === i), (o = o || p);
						}
						if (!o) {
							const t = { params: {} };
							return (
								null === l ? (l = [t]) : l.push(t), i++, (n.errors = l), !1
							);
						}
						(i = a),
							null !== l && (a ? (l.length = a) : (l = null)),
							(u = s === i);
					} else u = !0;
					if (u) {
						if (void 0 !== r.outputPath) {
							let e = r.outputPath;
							const s = i,
								a = i;
							let o = !1;
							const p = i;
							if (i === p)
								if ("string" == typeof e) {
									if (e.includes("!") || !1 !== t.test(e)) {
										const t = { params: {} };
										null === l ? (l = [t]) : l.push(t), i++;
									}
								} else {
									const t = { params: { type: "string" } };
									null === l ? (l = [t]) : l.push(t), i++;
								}
							var c = p === i;
							if (((o = o || c), !o)) {
								const t = i;
								if (!(e instanceof Function)) {
									const t = { params: {} };
									null === l ? (l = [t]) : l.push(t), i++;
								}
								(c = t === i), (o = o || c);
							}
							if (!o) {
								const t = { params: {} };
								return (
									null === l ? (l = [t]) : l.push(t), i++, (n.errors = l), !1
								);
							}
							(i = a),
								null !== l && (a ? (l.length = a) : (l = null)),
								(u = s === i);
						} else u = !0;
						if (u)
							if (void 0 !== r.publicPath) {
								let t = r.publicPath;
								const e = i,
									s = i;
								let a = !1;
								const o = i;
								if ("string" != typeof t) {
									const t = { params: { type: "string" } };
									null === l ? (l = [t]) : l.push(t), i++;
								}
								var f = o === i;
								if (((a = a || f), !a)) {
									const n = i;
									if (!(t instanceof Function)) {
										const t = { params: {} };
										null === l ? (l = [t]) : l.push(t), i++;
									}
									(f = n === i), (a = a || f);
								}
								if (!a) {
									const t = { params: {} };
									return (
										null === l ? (l = [t]) : l.push(t), i++, (n.errors = l), !1
									);
								}
								(i = s),
									null !== l && (s ? (l.length = s) : (l = null)),
									(u = e === i);
							} else u = !0;
					}
				}
			}
		}
	}
	return (n.errors = l), 0 === i;
}
function r(
	t,
	{
		instancePath: e = "",
		parentData: s,
		parentDataProperty: a,
		rootData: o = t
	} = {}
) {
	let l = null,
		i = 0;
	return (
		n(t, {
			instancePath: e,
			parentData: s,
			parentDataProperty: a,
			rootData: o
		}) || ((l = null === l ? n.errors : l.concat(n.errors)), (i = l.length)),
		(r.errors = l),
		0 === i
	);
}
(module.exports = r), (module.exports.default = r);

/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
"use strict";
(module.exports = t), (module.exports.default = t);
const e = {
		activeModules: { type: "boolean" },
		dependencies: { type: "boolean" },
		dependenciesCount: { type: "number" },
		entries: { type: "boolean" },
		handler: { oneOf: [{ $ref: "#/definitions/HandlerFunction" }] },
		modules: { type: "boolean" },
		modulesCount: { type: "number" },
		percentBy: { enum: ["entries", "modules", "dependencies", null] },
		profile: { enum: [!0, !1, null] }
	},
	r = Object.prototype.hasOwnProperty;
function n(
	t,
	{
		instancePath: o = "",
		parentData: s,
		parentDataProperty: a,
		rootData: l = t
	} = {}
) {
	let i = null,
		p = 0;
	if (0 === p) {
		if (!t || "object" != typeof t || Array.isArray(t))
			return (n.errors = [{ params: { type: "object" } }]), !1;
		{
			const o = p;
			for (const o in t)
				if (!r.call(e, o))
					return (n.errors = [{ params: { additionalProperty: o } }]), !1;
			if (o === p) {
				if (void 0 !== t.activeModules) {
					const e = p;
					if ("boolean" != typeof t.activeModules)
						return (n.errors = [{ params: { type: "boolean" } }]), !1;
					var u = e === p;
				} else u = !0;
				if (u) {
					if (void 0 !== t.dependencies) {
						const e = p;
						if ("boolean" != typeof t.dependencies)
							return (n.errors = [{ params: { type: "boolean" } }]), !1;
						u = e === p;
					} else u = !0;
					if (u) {
						if (void 0 !== t.dependenciesCount) {
							const e = p;
							if ("number" != typeof t.dependenciesCount)
								return (n.errors = [{ params: { type: "number" } }]), !1;
							u = e === p;
						} else u = !0;
						if (u) {
							if (void 0 !== t.entries) {
								const e = p;
								if ("boolean" != typeof t.entries)
									return (n.errors = [{ params: { type: "boolean" } }]), !1;
								u = e === p;
							} else u = !0;
							if (u) {
								if (void 0 !== t.handler) {
									const e = p,
										r = p;
									let o = !1,
										s = null;
									const a = p;
									if (!(t.handler instanceof Function)) {
										const e = { params: {} };
										null === i ? (i = [e]) : i.push(e), p++;
									}
									if ((a === p && ((o = !0), (s = 0)), !o)) {
										const e = { params: { passingSchemas: s } };
										return (
											null === i ? (i = [e]) : i.push(e),
											p++,
											(n.errors = i),
											!1
										);
									}
									(p = r),
										null !== i && (r ? (i.length = r) : (i = null)),
										(u = e === p);
								} else u = !0;
								if (u) {
									if (void 0 !== t.modules) {
										const e = p;
										if ("boolean" != typeof t.modules)
											return (n.errors = [{ params: { type: "boolean" } }]), !1;
										u = e === p;
									} else u = !0;
									if (u) {
										if (void 0 !== t.modulesCount) {
											const e = p;
											if ("number" != typeof t.modulesCount)
												return (
													(n.errors = [{ params: { type: "number" } }]), !1
												);
											u = e === p;
										} else u = !0;
										if (u) {
											if (void 0 !== t.percentBy) {
												let e = t.percentBy;
												const r = p;
												if (
													"entries" !== e &&
													"modules" !== e &&
													"dependencies" !== e &&
													null !== e
												)
													return (n.errors = [{ params: {} }]), !1;
												u = r === p;
											} else u = !0;
											if (u)
												if (void 0 !== t.profile) {
													let e = t.profile;
													const r = p;
													if (!0 !== e && !1 !== e && null !== e)
														return (n.errors = [{ params: {} }]), !1;
													u = r === p;
												} else u = !0;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return (n.errors = i), 0 === p;
}
function t(
	e,
	{
		instancePath: r = "",
		parentData: o,
		parentDataProperty: s,
		rootData: a = e
	} = {}
) {
	let l = null,
		i = 0;
	const p = i;
	let u = !1;
	const f = i;
	n(e, {
		instancePath: r,
		parentData: o,
		parentDataProperty: s,
		rootData: a
	}) || ((l = null === l ? n.errors : l.concat(n.errors)), (i = l.length));
	var c = f === i;
	if (((u = u || c), !u)) {
		const r = i;
		if (!(e instanceof Function)) {
			const e = { params: {} };
			null === l ? (l = [e]) : l.push(e), i++;
		}
		(c = r === i), (u = u || c);
	}
	if (!u) {
		const e = { params: {} };
		return null === l ? (l = [e]) : l.push(e), i++, (t.errors = l), !1;
	}
	return (
		(i = p),
		null !== l && (p ? (l.length = p) : (l = null)),
		(t.errors = l),
		0 === i
	);
}

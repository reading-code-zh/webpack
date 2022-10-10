/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
"use strict";
function r(
	e,
	{
		instancePath: t = "",
		parentData: o,
		parentDataProperty: n,
		rootData: a = e
	} = {}
) {
	if (!e || "object" != typeof e || Array.isArray(e))
		return (r.errors = [{ params: { type: "object" } }]), !1;
	{
		let t;
		if (void 0 === e.path && (t = "path"))
			return (r.errors = [{ params: { missingProperty: t } }]), !1;
		{
			const t = 0;
			for (const t in e)
				if (
					"context" !== t &&
					"entryOnly" !== t &&
					"format" !== t &&
					"name" !== t &&
					"path" !== t &&
					"type" !== t
				)
					return (r.errors = [{ params: { additionalProperty: t } }]), !1;
			if (0 === t) {
				if (void 0 !== e.context) {
					let t = e.context;
					const o = 0;
					if (0 === o) {
						if ("string" != typeof t)
							return (r.errors = [{ params: { type: "string" } }]), !1;
						if (t.length < 1) return (r.errors = [{ params: {} }]), !1;
					}
					var s = 0 === o;
				} else s = !0;
				if (s) {
					if (void 0 !== e.entryOnly) {
						const t = 0;
						if ("boolean" != typeof e.entryOnly)
							return (r.errors = [{ params: { type: "boolean" } }]), !1;
						s = 0 === t;
					} else s = !0;
					if (s) {
						if (void 0 !== e.format) {
							const t = 0;
							if ("boolean" != typeof e.format)
								return (r.errors = [{ params: { type: "boolean" } }]), !1;
							s = 0 === t;
						} else s = !0;
						if (s) {
							if (void 0 !== e.name) {
								let t = e.name;
								const o = 0;
								if (0 === o) {
									if ("string" != typeof t)
										return (r.errors = [{ params: { type: "string" } }]), !1;
									if (t.length < 1) return (r.errors = [{ params: {} }]), !1;
								}
								s = 0 === o;
							} else s = !0;
							if (s) {
								if (void 0 !== e.path) {
									let t = e.path;
									const o = 0;
									if (0 === o) {
										if ("string" != typeof t)
											return (r.errors = [{ params: { type: "string" } }]), !1;
										if (t.length < 1) return (r.errors = [{ params: {} }]), !1;
									}
									s = 0 === o;
								} else s = !0;
								if (s)
									if (void 0 !== e.type) {
										let t = e.type;
										const o = 0;
										if (0 === o) {
											if ("string" != typeof t)
												return (
													(r.errors = [{ params: { type: "string" } }]), !1
												);
											if (t.length < 1)
												return (r.errors = [{ params: {} }]), !1;
										}
										s = 0 === o;
									} else s = !0;
							}
						}
					}
				}
			}
		}
	}
	return (r.errors = null), !0;
}
(module.exports = r), (module.exports.default = r);

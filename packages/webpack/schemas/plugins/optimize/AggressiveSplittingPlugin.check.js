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
		parentData: n,
		parentDataProperty: i,
		rootData: o = e
	} = {}
) {
	if (!e || "object" != typeof e || Array.isArray(e))
		return (r.errors = [{ params: { type: "object" } }]), !1;
	{
		const t = 0;
		for (const t in e)
			if (
				"chunkOverhead" !== t &&
				"entryChunkMultiplicator" !== t &&
				"maxSize" !== t &&
				"minSize" !== t
			)
				return (r.errors = [{ params: { additionalProperty: t } }]), !1;
		if (0 === t) {
			if (void 0 !== e.chunkOverhead) {
				const t = 0;
				if ("number" != typeof e.chunkOverhead)
					return (r.errors = [{ params: { type: "number" } }]), !1;
				var a = 0 === t;
			} else a = !0;
			if (a) {
				if (void 0 !== e.entryChunkMultiplicator) {
					const t = 0;
					if ("number" != typeof e.entryChunkMultiplicator)
						return (r.errors = [{ params: { type: "number" } }]), !1;
					a = 0 === t;
				} else a = !0;
				if (a) {
					if (void 0 !== e.maxSize) {
						const t = 0;
						if ("number" != typeof e.maxSize)
							return (r.errors = [{ params: { type: "number" } }]), !1;
						a = 0 === t;
					} else a = !0;
					if (a)
						if (void 0 !== e.minSize) {
							const t = 0;
							if ("number" != typeof e.minSize)
								return (r.errors = [{ params: { type: "number" } }]), !1;
							a = 0 === t;
						} else a = !0;
				}
			}
		}
	}
	return (r.errors = null), !0;
}
(module.exports = r), (module.exports.default = r);

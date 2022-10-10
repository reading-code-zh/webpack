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
		parentDataProperty: a,
		rootData: o = e
	} = {}
) {
	if (!e || "object" != typeof e || Array.isArray(e))
		return (r.errors = [{ params: { type: "object" } }]), !1;
	{
		let t;
		if (void 0 === e.maxChunks && (t = "maxChunks"))
			return (r.errors = [{ params: { missingProperty: t } }]), !1;
		{
			const t = 0;
			for (const t in e)
				if (
					"chunkOverhead" !== t &&
					"entryChunkMultiplicator" !== t &&
					"maxChunks" !== t
				)
					return (r.errors = [{ params: { additionalProperty: t } }]), !1;
			if (0 === t) {
				if (void 0 !== e.chunkOverhead) {
					const t = 0;
					if ("number" != typeof e.chunkOverhead)
						return (r.errors = [{ params: { type: "number" } }]), !1;
					var s = 0 === t;
				} else s = !0;
				if (s) {
					if (void 0 !== e.entryChunkMultiplicator) {
						const t = 0;
						if ("number" != typeof e.entryChunkMultiplicator)
							return (r.errors = [{ params: { type: "number" } }]), !1;
						s = 0 === t;
					} else s = !0;
					if (s)
						if (void 0 !== e.maxChunks) {
							let t = e.maxChunks;
							const n = 0;
							if (0 === n) {
								if ("number" != typeof t)
									return (r.errors = [{ params: { type: "number" } }]), !1;
								if (t < 1 || isNaN(t))
									return (
										(r.errors = [{ params: { comparison: ">=", limit: 1 } }]),
										!1
									);
							}
							s = 0 === n;
						} else s = !0;
				}
			}
		}
	}
	return (r.errors = null), !0;
}
(module.exports = r), (module.exports.default = r);

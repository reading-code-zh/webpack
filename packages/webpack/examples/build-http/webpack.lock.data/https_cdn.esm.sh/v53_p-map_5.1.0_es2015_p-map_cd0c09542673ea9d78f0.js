/* esm.sh - esbuild bundle(p-map@5.1.0) es2015 production */
var g = (l, s, e) =>
	new Promise((f, x) => {
		var N = t => {
				try {
					n(e.next(t));
				} catch (r) {
					x(r);
				}
			},
			p = t => {
				try {
					n(e.throw(t));
				} catch (r) {
					x(r);
				}
			},
			n = t => (t.done ? f(t.value) : Promise.resolve(t.value).then(N, p));
		n((e = e.apply(l, s)).next());
	});
import y from "/v53/aggregate-error@4.0.0/es2015/aggregate-error.js";
function S(x, N) {
	return g(
		this,
		arguments,
		function* (
			l,
			s,
			{ concurrency: e = Number.POSITIVE_INFINITY, stopOnError: f = !0 } = {}
		) {
			return new Promise((p, n) => {
				if (typeof s != "function")
					throw new TypeError("Mapper function is required");
				if (
					!(
						(Number.isSafeInteger(e) || e === Number.POSITIVE_INFINITY) &&
						e >= 1
					)
				)
					throw new TypeError(
						`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${e}\` (${typeof e})`
					);
				let t = [],
					r = [],
					m = [],
					h = l[Symbol.iterator](),
					u = !1,
					c = !1,
					a = 0,
					b = 0,
					I = () => {
						if (u) return;
						let i = h.next(),
							d = b;
						if ((b++, i.done)) {
							if (((c = !0), a === 0))
								if (!f && r.length > 0) n(new y(r));
								else {
									for (let o of m) t.splice(o, 1);
									p(t);
								}
							return;
						}
						a++,
							(() =>
								g(this, null, function* () {
									try {
										let o = yield i.value;
										if (u) return;
										let w = yield s(o, d);
										w === T ? m.push(d) : (t[d] = w), a--, I();
									} catch (o) {
										f ? ((u = !0), n(o)) : (r.push(o), a--, I());
									}
								}))();
					};
				for (let i = 0; i < e && (I(), !c); i++);
			});
		}
	);
}
var T = Symbol("skip");
export { S as default, T as pMapSkip };

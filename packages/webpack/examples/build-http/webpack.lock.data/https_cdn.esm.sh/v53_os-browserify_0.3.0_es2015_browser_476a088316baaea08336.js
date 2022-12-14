/* esm.sh - esbuild bundle(os-browserify@0.3.0/browser) es2015 production */
var f = Object.create;
var o = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf,
	p = Object.prototype.hasOwnProperty;
var d = e => o(e, "__esModule", { value: !0 });
var l = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var w = (e, t, i) => {
		if ((t && typeof t == "object") || typeof t == "function")
			for (let n of m(t))
				!p.call(e, n) &&
					n !== "default" &&
					o(e, n, {
						get: () => t[n],
						enumerable: !(i = s(t, n)) || i.enumerable
					});
		return e;
	},
	a = e =>
		w(
			d(
				o(
					e != null ? f(c(e)) : {},
					"default",
					e && e.__esModule && "default" in e
						? { get: () => e.default, enumerable: !0 }
						: { value: e, enumerable: !0 }
				)
			),
			e
		);
var u = l(r => {
	r.endianness = function () {
		return "LE";
	};
	r.hostname = function () {
		return typeof location != "undefined" ? location.hostname : "";
	};
	r.loadavg = function () {
		return [];
	};
	r.uptime = function () {
		return 0;
	};
	r.freemem = function () {
		return Number.MAX_VALUE;
	};
	r.totalmem = function () {
		return Number.MAX_VALUE;
	};
	r.cpus = function () {
		return [];
	};
	r.type = function () {
		return "Browser";
	};
	r.release = function () {
		return typeof navigator != "undefined" ? navigator.appVersion : "";
	};
	r.networkInterfaces = r.getNetworkInterfaces = function () {
		return {};
	};
	r.arch = function () {
		return "javascript";
	};
	r.platform = function () {
		return "browser";
	};
	r.tmpdir = r.tmpDir = function () {
		return "/tmp";
	};
	r.EOL = `
`;
	r.homedir = function () {
		return "/";
	};
});
var b = a(u()),
	h = a(u()),
	{
		endianness: v,
		hostname: E,
		loadavg: L,
		uptime: k,
		freemem: A,
		totalmem: I,
		cpus: N,
		type: _,
		release: V,
		networkInterfaces: x,
		getNetworkInterfaces: D,
		arch: M,
		platform: O,
		tmpdir: U,
		tmpDir: X,
		EOL: j,
		homedir: B
	} = b;
var export_default = h.default;
export {
	j as EOL,
	M as arch,
	N as cpus,
	export_default as default,
	v as endianness,
	A as freemem,
	D as getNetworkInterfaces,
	B as homedir,
	E as hostname,
	L as loadavg,
	x as networkInterfaces,
	O as platform,
	V as release,
	X as tmpDir,
	U as tmpdir,
	I as totalmem,
	_ as type,
	k as uptime
};

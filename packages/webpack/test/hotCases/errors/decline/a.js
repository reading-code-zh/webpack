import b from "./b";

export default b;

if (module.hot) {
	module.hot.decline("./b");
	module.hot.accept();
}

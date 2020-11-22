import Base from '@studiometa/js-toolkit';

class App extends Base {
	get config() {
		return {
			name: 'App',
		};
	}
}

export default new App(document.body);
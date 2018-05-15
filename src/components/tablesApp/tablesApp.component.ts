const templateUrl: string = require<string>("file-loader!./tablesApp.component.html");

	static injectInto(m: ng.IModule) {
		m.component("TablesApp", {
			templateUrl,
			controller: TablesApp,
		});
	}
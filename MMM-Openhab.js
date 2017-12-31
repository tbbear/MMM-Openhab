/* Magic Mirror
* Module: MMM-Openhab
* By tbbear
*/

Module.register("MMM-Openhab", {

		// Module config defaults.
		defaults: {
			updateInterval: 30 * 60 * 1000, // every 10 minutes
			url: "http://wr-pi-openhab:8080/basicui/app?sitemap=MM",
			initialLoadDelay: 300, //  delay
			retryDelay: 1500,
			maxWidth: "100%",
		},

		// Define required scripts.
		getScripts: function() {
			return ["moment.js"];
		},

		getTranslations: function() {
			return {
				en: "translations/en.json",
				de: "translations/de.json"
			};
		},
	
		getStyles: function() {
			return ["MMM-Openhab.css", "font-awesome.css"];
		},

		// Define start sequence.
		start: function() {
			Log.info("Starting module: " + this.name);
			this.config.lang = this.config.lang || config.language; //automatically overrides and sets language :)

			// Set locale.  
			var lang = config.language;
	        	
                        // Schedule update interval.
		        var self = this;
         		setInterval(function() {
				self.updateDom();
			}, this.config.updateInterval);

			// Set locale.
			moment.locale(config.language);

		},
	
		getDom: function() {

			var wrapper = document.createElement("div");
			wrapper.style.maxWidth = this.config.maxWidth;

			var Header = document.createElement("header");
			Header.classList.add("xsmall", "bright", "align-left", "header");
			Header.innerHTML = this.translate("Openhab Results");
			wrapper.appendChild(Header);
	
			var iframe = document.createElement("iframe")
			iframe.height = "700";
			iframe.src = this.config.url;
			wrapper.appendChild(iframe);

			return wrapper;
		}
});
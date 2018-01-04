/* Magic Mirror
* Module: MMM-Openhab
* By tbbear
*/

Module.register("MMM-Openhab", {

		// Module config defaults.
		defaults: {
			updateInterval: 30 * 60 * 1000, // every 10 minutes
			url: "http://wr-pi-openhab:8080/basicui/app?sitemap=MMM",
			initialLoadDelay: 300, //  delay
			retryDelay: 1500,
			maxWidth: "100%",
		},

		// Define required scripts.
		getScripts: function() {
			return ["moment.js"];
		},

		getStyles: function() {
			return ["MMM-Openhab.css", "font-awesome.css"];
		},

		// Define start sequence.
		start: function() {
			Log.info("Starting module: " + this.name);
	        	
                        // Schedule update interval.
		        var self = this;
         		setInterval(function() {
				self.updateDom();
			}, this.config.updateInterval);

		},
	
		getDom: function() {

			var wrapper = document.createElement("div");
			wrapper.style.maxWidth = this.config.maxWidth;

			var iframe = document.createElement("iframe");
			iframe.style.frameborder = "0";
			iframe.style.scrolling = "no";
			iframe.classList.add("ifr");
			iframe.src = this.config.url;
			wrapper.appendChild(iframe);

			return wrapper;
		}
});
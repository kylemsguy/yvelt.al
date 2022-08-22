var isMobile = {

    Android: function() {

        return navigator.userAgent.match(/Android/i);

    },

    BlackBerry: function() {

        return navigator.userAgent.match(/BlackBerry/i);

    },

    iOS: function() {

        return navigator.userAgent.match(/iPhone|iPad|iPod/i);

    },

    Opera: function() {

        return navigator.userAgent.match(/Opera Mini/i);

    },

    Windows: function() {

        return navigator.userAgent.match(/IEMobile/i);

    },

    any: function() {

        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());

    }

};

$(function() {
	// detect if mobile
	if(isMobile.any()){
		console.log("Is mobile");
		var yveltal = document.findViewById("yveltal"); // $('#yveltal');
		yveltal.removeAttribute("height");
		yveltal.setAttribute("width", "100%");
	} else {
		console.log("Is desktop");
	}
});


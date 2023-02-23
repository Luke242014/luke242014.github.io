if (javaEnabled == false) {
	switch(window.location.hash) {
		case "ns.html":
		default:
			a = "ns.html";
			window.alert("JavaScript disabled, please enable JavaScript.");
			break;
	}
	window.location.href = a;
}

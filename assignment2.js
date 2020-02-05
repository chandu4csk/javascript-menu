<script>
	var menu = document.createElement("div");
	document.body.appendChild(menu);
	menu.setAttribute('id' , 'div1');

	arr = [{name : "home", url : "home.html"}, {name : "account", url : "account.html"}, {name : "services", url : "services.html"}, {name : "contact", url : "contact.html"}]
	for (home of arr){
		var s1 = document.createElement("a");
		var t1 = document.createTextNode(home.name);
		s1.setAttribute('href', home.url);
		s1.setAttribute("target", "blank")
		s1.appendChild(t1);
		menu.appendChild(s1);
	}
</script>
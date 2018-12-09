function show_prompt() {
	var name = prompt("Пожалуйста, введите ваше имя", "Стивен Сигал");
	if (name != null && name != "") {
		document.write("Привет " + name + "! Как дела?");
	}
}

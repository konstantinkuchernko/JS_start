function showNumber() {
	var numberTwo = prompt("Введите число больше 1: ", '');
	bust:
		for (i = 2; i < numberTwo; i++)  {
			for (j = 2; j < i; j++) {
				if (i % j == 0) continue bust;
			}
			alert(i);
		}
}
    showNumber();


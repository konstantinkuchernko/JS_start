var userName = prompt('Кто пришёл?', '');

if (userName == 'Админ') {
	var pass = prompt('Пароль?', '');
	if (pass == 'Черный Властелин') {
		alert( 'Добро пожаловать!');
	}else if (pass == null){
		alert( 'Вход отменён' );
	}else {
		alert( 'Пароль неверен' );
	}
	}else if (userName == null) {
		alert( 'Вход отменён' );
	}else{
		alert( 'Я вас не знаю' );
}
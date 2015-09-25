// задача № 1

result = prompt("Какой сейчас год?", 2015);

     if(result>2015 || result<2015){
	     alert("С луны свалися? 2015!");
     }else{
	     alert("Вы правы!");
     }

//задача № 2

result = prompt("Введите любое целое число?", 1);

     if(result>0){
     // здесь нужны скобки или это не принципиально?
	     alert("1");
     }else if(result<0){
	     alert("-1");
     }else{
	     alert("0");
     }

//задача № 3
//вариант №3.1

result = prompt("Введите логин", admin);
//здесь пишем = или ==?
if(result == admin){
	// здесь ставим if или alert?
	 if(result = prompt("Введите логин ище раз", admin_)
	// такая запись верная?
		 if(result == passw0rd){
	         alert("Welcome home!");
             }else{
	         alert("Wrong password");
         });


}else if(result == undefined){//escape это undefined или NaN?
	alert("Canceled");
}else{
	alert("Access denied");
}

//вариант №3.2
//более короткий вариант(убрала if(result = prompt("Введите логин ище раз", admin_))

result = prompt("Введите логин", admin);

if(result == admin){	
		 if(result == passw0rd){
	         alert("Welcome home!");
             }else{
	         alert("Wrong password");
         });


}else if(result == undefined){
	alert("Canceled");
}else{
	alert("Access denied");
}

//вариант №3.3
//ввела дополнительную переменную.
// нужно обозначиты другую переменную? если да то в каком месте кода это нужно сделать?

var password;
result = prompt("Введите логин", admin);

if(result = admin){
	 if(password = prompt("Введите логин ище раз", admin_)
		 if(password == passw0rd){
	         alert("Welcome home!");
             }else{
	         alert("Wrong password");
         }//правильно ли такое размещение скобок?
     );
	


}else if(result = undefined){
	alert("Canceled");
}else{
	alert("Access denied");
}

//задача №4

var a = 1, b = 2;

var result = (a + b >= 3)?'Yep!':'Noup!';
alert( result );

//задача № 5
//всегда пишет hi

var name = prompt('Ваше имя', '' );

var name = 'admin', text;

var result = (name == 'admin')?'Hi':(name == 'manager')?'Hello':(name == '')?'No login':'';
alert( result );
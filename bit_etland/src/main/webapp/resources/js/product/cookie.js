/*
========= app-cookie =======
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2017-4-1
@UPDATE DATE : 2017-4-1
@DESC :
==============================
*/
var cookie = cookie||{};
app.cookie={
     setCookie: function (name,value,days) {
                    var expires = "";
                    if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days*24*60*60*1000));
                    expires = "; expires=" + date.toUTCString();
                  }
                  document.cookie = name + "=" + value + expires + "; path=/";
               },
     getCookie: function(name) {

var nameEQ = name + "=";

var ca = document.cookie.split(';');

for(var i=0;i < ca.length;i++) {

var c = ca[i];

while (c.charAt(0)==' ') c = c.substring(1,c.length);

if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);

}

return null;

},

removeCookie: function(name) {

        createCookie(name,"",-1);

                    }
          }

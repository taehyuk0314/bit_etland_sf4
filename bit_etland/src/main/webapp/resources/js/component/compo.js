var compo = compo||{};

compo ={
		cust_login_form : ()=>{
			return '<h2>회원로그인</h2>'
			+'<form action="/action_page.php">'
			  +'<div class="imgcontainer">'
			    +'<img src="img_avatar2.png" alt="Avatar" class="avatar">'
			  +'</div>'
			  +'<div class="container">'
			    +'<label for="uname"><b>Username</b></label>'
			    +'<input type="text" placeholder="Enter Username" name="uname" required>'
			    +'<label for="psw"><b>Password</b></label>'
			    +'<input type="password" placeholder="Enter Password" name="psw" required>'
			    +'<button type="submit">Login</button>'
			    +'<label>'
			      +'<input type="checkbox" checked="checked" name="remember"> Remember me'
			    +'</label>'
			  +'</div>'
			+'<div class="container" style="background-color:#f1f1f1">'
			    +'<button type="button" class="cancelbtn">Cancel</button>'
			    +'<span class="psw">Forgot <a href="#">password?</a></span>'
			  +'</div>'
			+'</form>'},
			
			cust_join_form :()=>{
				return '<form act<form action="/action_page.php" style="border:1px solid #ccc">'
				+'  <div class="container">'
				+'    <h1>회원가입</h1>'
				+'    <p>Please fill in this form to create an account.</p>'
				+'    <hr>'
				+''
				+'    <label for="email"><b>Email</b></label>'
				+'    <input type="text" placeholder="Enter Email" name="email" required>'
				+''
				+'    <label for="psw"><b>Password</b></label>'
				+'    <input type="password" placeholder="Enter Password" name="psw" required>'
				+''
				+'    <label for="psw-repeat"><b>Repeat Password</b></label>'
				+'    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>'
				+''
				+'    <label>'
				+'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me'
				+'    </label>'
				+''
				+'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
				+''
				+'    <div class="clearfix">'
				+'      <button type="button" class="cancelbtn">Cancel</button>'
				+'      <button type="submit" class="signupbtn">Sign Up</button>'
				+'    </div>'
				+'  </div>'
				+'</form>'},
				emp_login_form : ()=>{
					return '<h2>사원 로그인</h2>'
					+'<form action="/action_page.php">'
					  +'<div class="imgcontainer">'
					    +'<img src="img_avatar2.png" alt="Avatar" class="avatar">'
					  +'</div>'
					  +'<div class="container">'
					    +'<label for="uname"><b>Username</b></label>'
					    +'<input type="text" placeholder="Enter Username" name="uname" required>'
					    +'<label for="psw"><b>Password</b></label>'
					    +'<input type="password" placeholder="Enter Password" name="psw" required>'
					    +'<button type="submit">Login</button>'
					    +'<label>'
					      +'<input type="checkbox" checked="checked" name="remember"> Remember me'
					    +'</label>'
					  +'</div>'
					+'<div class="container" style="background-color:#f1f1f1">'
					    +'<button type="button" class="cancelbtn">Cancel</button>'
					    +'<span class="psw">Forgot <a href="#">password?</a></span>'
					  +'</div>'
					+'</form>'},
					
					emp_join_form :()=>{
						return '<form act<form action="/action_page.php" style="border:1px solid #ccc">'
						+'  <div class="container">'
						+'    <h1>사원가입</h1>'
						+'    <p>Please fill in this form to create an account.</p>'
						+'    <hr>'
						+''
						+'    <label for="email"><b>Email</b></label>'
						+'    <input type="text" placeholder="Enter Email" name="email" required>'
						+''
						+'    <label for="psw"><b>Password</b></label>'
						+'    <input type="password" placeholder="Enter Password" name="psw" required>'
						+''
						+'    <label for="psw-repeat"><b>Repeat Password</b></label>'
						+'    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>'
						+''
						+'    <label>'
						+'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me'
						+'    </label>'
						+''
						+'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
						+''
						+'    <div class="clearfix">'
						+'      <button type="button" class="cancelbtn">Cancel</button>'
						+'      <button type="submit" class="signupbtn">Sign Up</button>'
						+'    </div>'
						+'  </div>'
						+'</form>'}
}	
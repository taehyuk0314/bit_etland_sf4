var compo = compo||{};

compo ={
		cust_login_form : ()=>{
			return '<h2>회원로그인</h2>'
			+'<form>'
			  +'<div class="imgcontainer">'
			    +'<img src="" alt="Avatar" class="avatar">'
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
				+'    <label for="id"><b>ID</b></label>'
				+'    <input type="text" placeholder="Enter ID" name="cid" required>'
				+''
				+'    <label for="name"><b>이름</b></label>'
				+'    <input type="text" placeholder="Enter name" name="cname" required>'
				+''
				+'    <label for="psw"><b>Password</b></label>'
				+'    <input type="password" placeholder="Enter Password" name="pass" required>'
				+''
				+'    <label for="ssn"><b>주민번호</b></label>'
				+'    <input type="text" placeholder="Enter ssn" name="ssn" required>'
				+''
				+'    <label for="phone"><b>휴대폰번호</b></label>'
				+'    <input type="text" placeholder="Enter phone" name="phone" required>'
				+''
				+'    <label for="city"><b>주소</b></label>'
				+'    <input type="text" placeholder="Enter city" name="city" required>'
				+''
				+'    <label for="address"><b>상세주소</b></label>'
				+'    <input type="text" placeholder="Enter address" name="address" required>'
				+''
				+'    <label for="post"><b>우편번호</b></label>'
				+'    <input type="text" placeholder="Enter post" name="post" required>'
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
					return '<h2>사원로그인</h2>'
					+'<form>'
					  +'<div class="imgcontainer">'
					    +'<img src="" alt="Avatar" class="avatar">'
					  +'</div>'
					  +'<div class="container">'
/*					    +'<label for="employeeID"><b>employeeID</b></label>'
					    +'<input type="text" placeholder="Enter employeeID" name="employeeID" required>'
					    +'<label for="name"><b>name</b></label>'
					    +'<input type="text" placeholder="Enter name" id="name" name="name" required>'*/
					    +'<button type="submit">Access</button>'
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
						+'    <label for="employeeID"><b>employeeID</b></label>'
						+'    <input type="text" placeholder="Enter employeeID" name="employeeID" required>'
						+''
						+'    <label for="manager"><b>manager</b></label>'
						+'    <input type="text" placeholder="Enter manager" name="manager" required>'
						+''
						+'    <label for="name"><b>name</b></label>'
						+'    <input type="text" placeholder="Enter name" name="name" required>'
						+''
						+'    <label for="birthDate"><b>birthDate</b></label>'
						+'    <input type="text" placeholder="Enter birthDate" name="birthDate" required>'
						+''
						+'    <label for="phone"><b>phone</b></label>'
						+'    <input type="text" placeholder="Enter phone" name="phone" required>'
						+''
						+'    <label for="notes"><b>notes</b></label>'
						+'    <input type="text" placeholder="Enter notes" name="notes" required>'
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
						+'      <button type="submit" class="signupbtn">REGESTER</button>'
						+'    </div>'
						+'  </div>'
						+'</form>'},
						cust_mypage : ()=>{
							return '<div class="w3-light-grey">'
				            +''
				            +'<!-- Page Container -->'
				            +'<div class="w3-content w3-margin-top" style="max-width:1400px;">'
				            +''
				              +'<!-- The Grid -->'
				              +'<div class="w3-row-padding">'
				            +'  '
				                +'<!-- Left Column -->'
				                +'<div class="w3-third">'
				            +'    '
				                  +'<div class="w3-white w3-text-grey w3-card-4">'
				                    +'<div class="w3-display-container">'
				                      +'<img src="/w3images/avatar_hat.jpg" style="width:100%" alt="Avatar">'
				                      +'<div class="w3-display-bottomleft w3-container w3-text-black">'
				                        +'<h2>Jane Doe</h2>'
				                      +'</div>'
				                    +'</div>'
				                    +'<div class="w3-container">'
				                      +'<p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>'
				                      +'<p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>'
				                      +'<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>'
				                      +'<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>'
				                      +'<hr>'
				            +''
				                      +'<p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>'
				                      +'<p>Adobe Photoshop</p>'
				                      +'<div class="w3-light-grey w3-round-xlarge w3-small">'
				                        +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:90%">90%</div>'
				                      +'</div>'
				                      +'<p>Photography</p>'
				                      +'<div class="w3-light-grey w3-round-xlarge w3-small">'
				                        +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:80%">'
				                          +'<div class="w3-center w3-text-white">80%</div>'
				                        +'</div>'
				                      +'</div>'
				                      +'<p>Illustrator</p>'
				                      +'<div class="w3-light-grey w3-round-xlarge w3-small">'
				                        +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:75%">75%</div>'
				                      +'</div>'
				                      +'<p>Media</p>'
				                      +'<div class="w3-light-grey w3-round-xlarge w3-small">'
				                        +'<div class="w3-container w3-center w3-round-xlarge w3-teal" style="width:50%">50%</div>'
				                      +'</div>'
				                      +'<br>'
				                      +'<p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>"Languages"</b></p>'
				                      +'<p>English</p>'
				                      +'<div class="w3-light-grey w3-round-xlarge">'
				                        +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:100%"></div>'
				                      +'</div>'
				                      +'<p>Spanish</p>'
				                      +'<div class="w3-light-grey w3-round-xlarge">'
				                        +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:55%"></div>'
				                      +'</div>'
				                      +'<p>German</p>'
				                      +'<div class="w3-light-grey w3-round-xlarge">'
				                        +'<div class="w3-round-xlarge w3-teal" style="height:24px;width:25%"></div>'
				                      +'</div>'
				                      +'<br>'
				                    +'</div>'
				                  +'</div><br>'
				            +''
				                +'<!-- End Left Column -->'
				                +'</div>'
				            +''
				                +'<!-- Right Column -->'
				                +'<div class="w3-twothird">'
				                  +'<div class="w3-container w3-card w3-white w3-margin-bottom">'
				                  +'  <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>'
				                    +'<div class="w3-container">'
				                      +'<h5 class="w3-opacity"><b>Front End Developer / w3schools.com</b></h5>'
				                      +' <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-teal w3-round">Current</span></h6>'
				                      +'  <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>'
				                      +'<hr>'
				                    +'</div>'
				                    +'<div class="w3-container">'
				                      +'<h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>'
				                      +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 - Dec 2014</h6>'
				                      +' <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>'
				                      +'<hr>'
				                    +'</div>'
				                    +'<div class="w3-container">'
				                      +'<h5 class="w3-opacity"><b>Graphic Designer / designsomething.com</b></h5>'
				                      +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>'
				                      +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br>'
				                    +'</div>'
				                  +'</div>'
				            +''
				                  +'<div class="w3-container w3-card w3-white">'
				                  +'  <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>'
				                    +'<div class="w3-container">'
				                      +'<h5 class="w3-opacity"><b>W3Schools.com</b></h5>'
				                      +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>'
				                      +'<p>Web Development! All I need to know in one place</p>'
				                      +'<hr>'
				                    +'</div>'
				                    +'<div class="w3-container">'
				                      +'<h5 class="w3-opacity"><b>London Business School</b></h5>'
				                      +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 - 2015</h6>'
				                      +'<p>Master Degree</p>'
				                      +'<hr>'
				                    +'</div>'
				                    +'<div class="w3-container">'
				                      +'<h5 class="w3-opacity"><b>School of Coding</b></h5>'
				                      +'<h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 - 2013</h6>'
				                      +'<p>Bachelor Degree</p><br>'
				                    +'</div>'
				                  +'</div>'
				            +''
				                +'<!-- End Right Column -->'
				                +'</div>'
				            +'    '
				              +'<!-- End Grid -->'
				              +'</div>'
				            +'  '
				              +'<!-- End Page Container -->'
				            +'</div>'
				            +''
				            +'<footer class="w3-container w3-teal w3-center w3-margin-top">'
				              +'<p>Find me on social media.</p>'
				              +'<i class="fa fa-facebook-official w3-hover-opacity"></i>'
				              +'<i class="fa fa-instagram w3-hover-opacity"></i>'
				              +'<i class="fa fa-snapchat w3-hover-opacity"></i>'
				              +'<i class="fa fa-pinterest-p w3-hover-opacity"></i>'
				              +'<i class="fa fa-twitter w3-hover-opacity"></i>'
				              +'<i class="fa fa-linkedin w3-hover-opacity"></i>'
				              +'<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>'
				            +'</footer>'
				            +''
				            +''
				            +'</div>'},
				cust_update : ()=>{
					return '<form act<form action="/action_page.php" style="border:1px solid #ccc">'
					+'  <div class="container">'
					+'    <h1>정보수정</h1>'
					+'    <p>Please fill in this form to create an account.</p>'
					+'    <hr>'
					+''
					+'    <label for="psw"><b>Password</b></label>'
					+'    <input type="password" placeholder="Enter Password" name="pass" required>'
					+''
					+'    <label for="phone"><b>휴대폰번호</b></label>'
					+'    <input type="text" placeholder="Enter phone" name="phone" required>'
					+''
					+'    <label for="city"><b>주소</b></label>'
					+'    <input type="text" placeholder="Enter city" name="city" required>'
					+''
					+'    <label for="address"><b>상세주소</b></label>'
					+'    <input type="text" placeholder="Enter address" name="address" required>'
					+''
					+'    <label for="post"><b>우편번호</b></label>'
					+'    <input type="text" placeholder="Enter post" name="post" required>'
					+'    <label>'
					+'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me'
					+'    </label>'
					+''
					+'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
					+''
					+'    <div class="clearfix">'
					+'      <button type="button" class="cancelbtn">Cancel</button>'
					+'      <button type="submit" class="signupbtn">정보수정</button>'
					+'    </div>'
					+'  </div>'
					+'</form>'},
				cust_remove : ()=>{
					return '<form act<form action="/action_page.php" style="border:1px solid #ccc">'
					+'  <div class="container">'
					+'    <h1>회원탈퇴</h1>'
					+'    <p>Please fill in this form to create an account.</p>'
					+'    <hr>'
					+''
					+'    <label for="psw"><b>Password</b></label>'
					+'    <input type="password" placeholder="Enter Password" name="pass" required>'
					+'      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me'
					+'    </label>'
					+''
					+'    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>'
					+''
					+'    <div class="clearfix">'
					+'      <button type="button" class="cancelbtn">Cancel</button>'
					+'      <button type="submit" class="signupbtn">계정삭제</button>'
					+'    </div>'
					+'  </div>'
					+'</form>'},	
			carousel :()=>{
				return '<div class="container">'
				+'  <h2>Carousel Example</h2>  '
				+'  <div id="myCarousel" class="carousel slide" data-ride="carousel">'
				+'    <!-- Indicators -->'
				+'    <ol class="carousel-indicators">'
				+'      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
				+'      <li data-target="#myCarousel" data-slide-to="1"></li>'
				+'      <li data-target="#myCarousel" data-slide-to="2"></li>'
				+'    </ol>'
				+''
				+'    <!-- Wrapper for slides -->'
				+'    <div class="carousel-inner">'
				+'      <div class="item active">'
				+'        <img id="prod1" src="la.jpg" alt="Los Angeles" style="width:100%;">'
				+'      </div>'
				+''
				+'      <div class="item">'
				+'        <img id="prod2" src="chicago.jpg" alt="Chicago" style="width:100%;">'
				+'      </div>'
				    +''
				+'      <div class="item">'
				+'        <img id="prod3" src="ny.jpg" alt="New york" style="width:100%;">'
				+'      </div>'
				+'    </div>'
				+''
				+'    <!-- Left and right controls -->'
				+'    <a class="left carousel-control" href="#myCarousel" data-slide="prev">'
				+'      <span class="glyphicon glyphicon-chevron-left"></span>'
				+'      <span class="sr-only">Previous</span>'
				+'    </a>'
				+'    <a class="right carousel-control" href="#myCarousel" data-slide="next">'
				+'      <span class="glyphicon glyphicon-chevron-right"></span>'
				+'      <span class="sr-only">Next</span>'
				+'    </a>'
				+'  </div>'
				+'</div>'
				},
				prod_register_origin : ()=>{
					return '<div class="col-md-8 order-md-1">'
					+'          <h4 class="mb-3">Billing address</h4>'
					+'          <form class="needs-validation" novalidate="">'
					+'            <div class="row">'
					+'              <div class="col-md-6 mb-3">'
					+'                <label for="firstName">First name</label>'
					+'                <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">'
					+'                <div class="invalid-feedback">'
					+'                  Valid first name is required.'
					+'                </div>'
					+'              </div>'
					+'              <div class="col-md-6 mb-3">'
					+'                <label for="lastName">Last name</label>'
					+'                <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">'
					+'                <div class="invalid-feedback">'
					+'                  Valid last name is required.'
					+'                </div>'
					+'              </div>'
					+'            </div>'

					+'            <div class="mb-3">'
					+'              <label for="username">Username</label>'
					+'              <div class="input-group">'
					+'                <div class="input-group-prepend">'
					+'                  <span class="input-group-text">@</span>'
					+'                </div>'
					+'                <input type="text" class="form-control" id="username" placeholder="Username" required="">'
					+'                <div class="invalid-feedback" style="width: 100%;">'
					+'                  Your username is required.'
					+'                </div>'
					+'              </div>'
					+'            </div>'

					+'            <div class="mb-3">'
					+'              <label for="email">Email <span class="text-muted">(Optional)</span></label>'
					+'              <input type="email" class="form-control" id="email" placeholder="you@example.com">'
					+'              <div class="invalid-feedback">'
					+'                Please enter a valid email address for shipping updates.'
					+'              </div>'
					+'            </div>'

					+'            <div class="mb-3">'
					+'              <label for="address">Address</label>'
					+'              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">'
					+'              <div class="invalid-feedback">'
					+'                Please enter your shipping address.'
					+'              </div>'
					+'            </div>'

					+'            <div class="mb-3">'
					+'              <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>'
					+'              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">'
					+'            </div>'

					+'            <div class="row">'
					+'              <div class="col-md-5 mb-3">'
					+'                <label for="country">Country</label>'
					+'                <select class="custom-select d-block w-100" id="country" required="">'
					+'                  <option value="">Choose...</option>'
					+'                  <option>United States</option>'
					+'                </select>'
					+'                <div class="invalid-feedback">'
					+'                  Please select a valid country.'
					+'                </div>'
					+'              </div>'
					+'              <div class="col-md-4 mb-3">'
					+'                <label for="state">State</label>'
					+'                <select class="custom-select d-block w-100" id="state" required="">'
					+'                  <option value="">Choose...</option>'
					+'                  <option>California</option>'
					+'                </select>'
					+'                <div class="invalid-feedback">'
					+'                  Please provide a valid state.'
					+'                </div>'
					+'              </div>'
					+'              <div class="col-md-3 mb-3">'
					+'                <label for="zip">Zip</label>'
					+'                <input type="text" class="form-control" id="zip" placeholder="" required="">'
					+'                <div class="invalid-feedback">'
					+'                  Zip code required.'
					+'                </div>'
					+'              </div>'
					+'            </div>'
					+'            <hr class="mb-4">'
					+'            <div class="custom-control custom-checkbox">'
					+'              <input type="checkbox" class="custom-control-input" id="same-address">'
					+'              <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>'
					+'            </div>'
					+'            <div class="custom-control custom-checkbox">'
					+'              <input type="checkbox" class="custom-control-input" id="save-info">'
					+'              <label class="custom-control-label" for="save-info">Save this information for next time</label>'
					+'            </div>'
					+'            <hr class="mb-4">'

					+'            <h4 class="mb-3">Payment</h4>'

					+'            <div class="d-block my-3">'
					+'              <div class="custom-control custom-radio">'
					+'                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">'
					+'                <label class="custom-control-label" for="credit">Credit card</label>'
					+'              </div>'
					+'              <div class="custom-control custom-radio">'
					+'                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">'
					+'                <label class="custom-control-label" for="debit">Debit card</label>'
					+'              </div>'
					+'              <div class="custom-control custom-radio">'
					+'                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">'
					+'                <label class="custom-control-label" for="paypal">PayPal</label>'
					+'              </div>'
					+'            </div>'
					+'            <div class="row">'
					+'              <div class="col-md-6 mb-3">'
					+'                <label for="cc-name">Name on card</label>'
					+'                <input type="text" class="form-control" id="cc-name" placeholder="" required="">'
					+'                <small class="text-muted">Full name as displayed on card</small>'
					+'                <div class="invalid-feedback">'
					+'                  Name on card is required'
					+'                </div>'
					+'              </div>'
					+'              <div class="col-md-6 mb-3">'
					+'                <label for="cc-number">Credit card number</label>'
					+'                <input type="text" class="form-control" id="cc-number" placeholder="" required="">'
					+'                <div class="invalid-feedback">'
					+'                  Credit card number is required'
					+'                </div>'
					+'              </div>'
					+'            </div>'
					+'            <div class="row">'
					+'              <div class="col-md-3 mb-3">'
					+'                <label for="cc-expiration">Expiration</label>'
					+'                <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">'
					+'                <div class="invalid-feedback">'
					+'                  Expiration date required'
					+'                </div>'
					+'              </div>'
					+'              <div class="col-md-3 mb-3">'
					+'                <label for="cc-cvv">CVV</label>'
					+'                <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">'
					+'                <div class="invalid-feedback">'
					+'                  Security code required'
					+'                </div>'
					+'              </div>'
					+'            </div>'
					+'            <hr class="mb-4">'
					+'            <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>'
					+'          </form>'
					+'       </div>'
				},
				/*
				 * productID,
				   productName,
				   supplierID,
				   categoryID,
				   unit,
				   price*/
				prod_register : ()=>{
					return '<div class="col-md-8 order-md-1">'
			          +'<h4 class="mb-3">상품 등록</h4>'
			          +'<form class="needs-validation" novalidate="">'
			          +'<div class="row">'
		              +'<div class="col-md-5 mb-3">'
		                +'<label for="country">카테고리</label>'
		                +'<select id="category_id" class="custom-select d-block w-100" id="country" required="">'
		                  +'<option value="SmartPhone">스마트폰</option>'
		                  +'<option value="Desktop">데스크탑</option>'
		                  +'<option value="NoteBook">노트북</option>'
		                  +'<option value="Airpurifier">공기청정기</option>'
		                  +'<option value="refrigerator">냉장고</option>'
		                +'</select>'
		              +'</div>'
		              +'</div>'
			            +'<hr class="mb-4">'
			            +'<div class="mb-3">'
			              +'<label for="price">상품명 <span class="text-muted"></span></label>'
			              +'<input type="text" id="product_name" class="form-control" id="">'
			                +'<small class="text-muted"> 등록할 제품의 정확한 상품명을 입력하세요.</small>'
			            +'</div>'
			            +'<hr class="mb-4">'
			            +'<div class="mb-3">'
			              +'<label for="unit">가 격 <span class="text-muted">(만원단위)</span></label>'
			              +'<input type="text" id="price" class="form-control" id=price"가격(만원단위)">'
			                +'<small class="text-muted"> 입력한 금액이 맞는지 한번더 확인하세요.</small>'
			            +'</div>'
			            +'<hr class="mb-4">'
			            +'<div class="mb-3">'
			              +'<label for="price">수 량 <span class="text-muted">(만원단위)</span></label>'
			              +'<input type="text" id="unit" class="form-control" id="price"가격(만원단위)">'
			                +'<small class="text-muted"> 수량을 .</small>'
			            +'</div>'
			            +'<hr class="mb-4">'
			            +'<div class="row">'
			              +'<div class="col-md-5 mb-3">'
			                +'<label for="country">공급업체</label>'
			                +'<select id="supplier_name" class="custom-select d-block w-100" id="country" required="">'
			                  +'<option value="">업체선정</option>'
			                  +'<option value="삼성">삼 성</option>'
			                  +'<option value="LG">LG전자</option>'
			                  +'<option value="애플">애 플</option>'
			                  +'<option value="샤오미">샤오미</option>'
			                +'</select>'
			              +'</div>'
			            +'</div>'
			              
			            +'<hr class="mb-4">'
		                +'<div class="invalid-feedback">'
		                +'사은품 선택 (두개)'
		                +'</div>'
			            +'<div class="custom-control custom-checkbox">'
			              +'<input type="checkbox" class="checks custom-control-input" value="film" id="same-address">'
			            +'  <label class="custom-control-label" for="same-address">보호필름</label>'
			            +'</div>'
			            +'<div class="custom-control custom-checkbox">'
			              +'<input type="checkbox" class="checks custom-control-input" value="battery" id="same-address">'
			            +'  <label class="custom-control-label" for="same-address">보조배터리</label>'
			            +'</div>'
			            +'<div class="custom-control custom-checkbox">'
			              +'<input type="checkbox" class="checks custom-control-input" value="case" id="same-address">'
			            +'  <label class="custom-control-label" for="same-address">휴대폰케이스</label>'
			            +'</div>'
			            
			            
			            +'<hr class="mb-4">'
			            +'<h4 class="mb-3">색상을 선택해 주세요.</h4>'
			            +'<div class="d-block my-3">'
			              +'<div class="custom-control custom-radio" >'
			              +'  <input id="credit" name="color" type="radio" class="custom-control-input" checked="" required="" value="white">'
			                +'<label class="radi custom-control-label" for="credit">화이트</label>'
			              +'</div>'
			              +'<div class="custom-control custom-radio">'
			                +'<input id="debit" name="color" type="radio" class="custom-control-input" required="" value="black">'
			                +'<label class="radi custom-control-label" for="debit">블랙</label>'
			              +'</div>'
			              +'<div class="custom-control custom-radio">'
			                +'<input id="paypal" name="color" type="radio" class="custom-control-input" required="" value="blue">'
			                +'<label class="radi custom-control-label" for="paypal">블루</label>'
			              +'</div>'
			            +'</div>'
			            
			            
			            +'<hr class="mb-4">'
			            +'<div class="row">'
			              +'<div class="col-md-6 mb-3">'
			                +'<label for="cc-name">제목</label>'
			                +'<input type="textarea" class="form-control" id="cc-name" placeholder="" required="">'
			                +'<small class="text-muted"> 상세 설명 제목</small>'
			                
			                +'<div class="form-group">'
			                +'<label for="comment">내용</label>'
			                +'<textarea class="form-control" rows="5" id="comment"></textarea>'
			                +'<small class="text-muted"> 제품에 대한 상세 설명 기술 (100자이하)</small>'
			                +'</div>'
			              +'</div>'
			            +'</div>'
			            +'<hr class="mb-4">'
			            +'<div class="row">'
			              +'<div class="col-md-5 mb-5">'
			                +'<label for="cc-expiration">이미지 등록(파일 업로드)</label>'
			                +'<input type="file" class="form-control" id="cc-expiration" placeholder="" required="">'
			                +'<div class="invalid-feedback">'
			                +'</div>'
			              +'</div>'
			              +'<div class="col-md-5 mb-5">'
			                +'<label for="cc-cvv">이미지 등록(드레그&드랍)</label>'
			                +'<input type="file" class="form-control" id="cc-cvv" placeholder="" required="">'
			                +'<div class="invalid-feedback">'
			                +'</div>'
			              +'</div>'
			            +'</div>'
			            +'<hr class="mb-4">'
			            +'<button id="prd_post_btn" class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>'
			          +'</form>'
			        +'</div>';
				},
				prod_post : ()=>{
					return '<div class="container">'
		            +'<div class="form-group">'
		            +'  <label for="usr">Name:</label>'
		            +'  <input type="text" class="form-control" id="usr">'
		            +'</div>'
		            +'<div class="form-group">'
		            +'  <label for="pwd">Password:</label>'
		            +'  <input type="password" class="form-control" id="pwd">'
		            +'</div>'
		            +'<h3> Color </h3>'
		            +'<div class="checkbox">'
		            +'  <label><input type="checkbox" value="">블랙</label>'
		            +'</div>'
		            +'<div class="checkbox">'
		            +'  <label><input type="checkbox" value="">화이트</label>'
		            +'</div>'
		            +'<div class="checkbox disabled">'
		            +'  <label><input type="checkbox" value="" disabled>블루</label>'
		            +'</div>'
		            +'<div class="radio">'
		            +'  <label><input type="radio" name="optradio" checked>삼성전자 1</label>'
		            +'</div>'
		            +'<div class="radio">'
		            +'  <label><input type="radio" name="optradio">Option 2</label>'
		            +'</div>'
		            +'<div class="radio disabled">'
		            +'  <label><input type="radio" name="optradio" disabled>Option 3</label>'
		            +'</div>'
		            +'<div class="form-group">'
		            +'  <label for="sel1">카테고리 list:</label>'
		            +'  <select class="form-control" id="sel1">'
		            +'    <option>1</option>'
		            +'    <option>2</option>'
		            +'    <option>3</option>'
		            +'    <option>4</option>'
		            +'  </select>'
		            +'</div>'
		            +'<p>생산년월일: <input type="text" id="datepicker"></p>'
		            +'<div class="form-group">'
		            +'  <label for="comment">상세설명:</label>'
		            +'  <textarea class="form-control" rows="5" id="comment"></textarea>'
		            +'</div>'
		            +'</div>'
				},
				
				cust_list : ()=>{
					return '<div class="grid-item" id="content_1">'
				       +'<h1><font style="font-size: 30px">사원 리스트</font>'
				       +'</h1>'
				      +'</div>'
				      +'<div class="grid-item" id="content_2">'
				          +'<table id="cust_tab">'
				            +'<tr>'
				              +'<th>번호</th>'
				              +'<th>아이디</th>'
				              +'<th>이 름</th>'
				              +'<th>생년원일</th>'
				              +'<th>사진</th>'
				              +'<th>전화번호</th>'
				              +'<th>지번주소</th>'
				              +'<th>상세주소</th>'
				              +'<th>우편번호</th>'
				            +'</tr>'
				          +'</table>'

				},
				prod_list : ()=>{
					return '<div class="grid-item" id="content_1">'
				       +'<h1><font style="font-size: 30px">상품 리스트</font>'
				       +'</h1>'
				      +'</div>'
				      +'<div class="grid-item" id="content_2">'
				          +'<table id="cust_tab">'
				            +'<tr>'
				            +'<th>NO.</th>'
				            +'<th>상품번호</th>'
				            +'<th>상품이름</th>'
				            +'<th>생성자아이디</th>'
				            +'<th>카테고리아이디</th>'
				            +'<th>단위</th>'
				            +'<th>가격</th>'
				            +'<th>사진</th>'
				            +'</tr>'
				          +'</table>'
				},
				prod_search : ()=>{
					return '<div class="grid-item" id="content_1">'
				       +'<h1><font style="font-size: 30px">검색 리스트</font>'
				       +'</h1>'
				      +'</div>'
				      +'<div class="grid-item" id="content_2">'
				          +'<table id="cust_tab">'
				            +'<tr>'
				            +'<th>NO.</th>'
				            +'<th>상품번호</th>'
				            +'<th>상품이름</th>'
				            +'<th>상표</th>'
				            +'<th>종류</th>'
				            +'<th>단위</th>'
				            +'<th>가격</th>'
				            +'</tr>'
				          +'</table>'
				}
}	
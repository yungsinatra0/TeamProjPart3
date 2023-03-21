<template>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Registration</title>
    <!-- <link rel="stylesheet" href="registrationstyle.css" /> -->
  </head>
  <body>
    <div class="container">
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Registration</h3>
        </div>

        <div class="contact-form">
		<!-- Created a registration form where the user can input their name, email address, position, password and confirmation password -->
		  <form action = "registrationpage.php">
            <h3 class="title">Registration Form</h3>
			<p>"Before submitting your registration form you must check that your credentials are correct! Only when all the inputted details are correct will you be able to submit the form" </p>
			<div class="input-container">
              <input type="text" id="fullname" name="fullname" class="input" placeholder = "Full Name" required />
              <span>Full Name</span>
            </div>
            <div class="input-container">
              <input type="password" name="password1" id="password1" class="input" placeholder = "Password" required />
              <span>Password</span>
            </div>
			<div class="input-container">
              <input type="password" name="password2" id="password2" class="input" placeholder = "Confirm Password" required />
              <span>Confirm Password</span>
            </div>
			<input type="submit" id="registerbutton" value="Register" class="button" />	
			</form>
        </div>
      </div>
    </div>
  </body>
</html>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input,
textarea {
  font-family: "Poppins", sans-serif;
}

.container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f0ffff;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  width: 150%;
  max-width: 1040px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  z-index: 500;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.contact-form {
  background-color: #5a6563;
  position: relative;
}


.contact-form:before {
  content: "";
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: #5a6563;
}

form {
  padding: 2.5rem 2.5rem;
  z-index: 5;
  overflow: hidden;
  position: relative;
}

.title {
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.7rem;
}

.input-container {
  position: relative;
  margin: 1rem 0;
}

.input {
  width: 100%;
  outline: none;
  border: 2px solid #fafafa;
  background: none;
  padding: 0.6rem 1.2rem;
  color: #fff;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  border-radius: 25px;
  transition: 0.3s;
}

textarea.input {
  padding: 0.8rem 1.2rem;
  min-height: 150px;
  border-radius: 22px;
  resize: none;
  overflow-y: auto;
}

.input-container label {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  color: #fafafa;
  font-size: 0.9rem;
  font-weight: 400;
  pointer-events: none;
  z-index: 1000;
  transition: 0.5s;
}

.input-container.textarea label {
  top: 1rem;
  transform: translateY(0);
}
#ccbutton {
  padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  color: #5a6563;
  line-height: 1;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;
  left: 37px;
  bottom: 23px;
  position: relative;
}

#ccbutton:hover {
  background-color: transparent;
  color: #fff;
}

#registerbutton {
  padding: 0.6rem 1.3rem;
  background-color: #fff;
  border: 2px solid #fafafa;
  font-size: 0.95rem;
  color: #5a6563;
  line-height: 1;
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  margin: 0;
}

#registerbutton:hover {
  background-color: transparent;
  color: #fff;
}

.input-container span {
  position: absolute;
  top: 0;
  left: 25px;
  transform: translateY(-50%);
  font-size: 0.8rem;
  padding: 0 0.4rem;
  color: transparent;
  pointer-events: none;
  z-index: 500;
}

.input-container span:before,
.input-container span:after {
  content: "";
  position: absolute;
  width: 10%;
  opacity: 0;
  transition: 0.3s;
  height: 5px;
  background-color: #5a6563;
  top: 50%;
  transform: translateY(-50%);
}

.input-container span:before {
  left: 50%;
}

.input-container span:after {
  right: 50%;
}

.input-container.focus label {
  top: 0;
  transform: translateY(-50%);
  left: 25px;
  font-size: 0.8rem;
}

.input-container.focus span:before,
.input-container.focus span:after {
  width: 50%;
  opacity: 1;
}

.contact-info {
  padding: 2.3rem 2.2rem;
  position: relative;
}

.contact-info .title {
  color: #5a6563;
}

.text {
  color: #333;
  margin: 1.5rem 0 2rem 0;
}

.information {
  display: flex;
  color: #555;
  margin: 0.7rem 0;
  align-items: center;
  font-size: 0.95rem;
}

::placeholder { 
  color: white;
  opacity: 1;
}
</style>
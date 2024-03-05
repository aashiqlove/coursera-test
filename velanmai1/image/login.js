    document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById('loginForm');
  const regForm = document.getElementById('regForm');
  const loginButton = document.getElementById('loginButton');
  const registerButton = document.getElementById('registerButton');
  const switchToReg = document.getElementById('switchToReg');
  const switchToLogin = document.getElementById('switchToLogin');

  switchToReg.addEventListener("click", () => {
    loginForm.style.display = "none";
    regForm.style.display = "block";
  });

  switchToLogin.addEventListener("click", () => {
    regForm.style.display = "none";
    loginForm.style.display = "block";
  });
  
  
  loginButton.addEventListener("click", () => {
    const username = loginForm.querySelector('input[name="uname"]').value;
    const password = loginForm.querySelector('input[name="password"]').value;
console.log(username);
    if (username.trim() === '' || password.trim() === '') {
      alert("Please fill in all fields.");
    } else {
                    fetch('./userLogin', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: `uname=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
                    })
                    .then(response => {
                        if (response.redirected) {
                            window.location.href = response.url;
                            window.location.href = 'user_dashboard.html?stringValue=' + encodeURIComponent(username);

                        } else {
                            return response.text();
                        }
                        })
        				.then(message => {
            				if(message !== undefined){
								alert(message);
						}
                    })
                    .catch(error => console.error('Error:', error));
                }
     
  });

  registerButton.addEventListener("click", () => {
    const username = regForm.querySelector('input[name="uname"]').value;
    const password = regForm.querySelector('input[name="password"]').value;

                if (username.trim() === '' || password.trim() === '') {
                    alert("Please fill in all fields.");
                } else {
                    // Send login data to the servlet
                    fetch('./adminLogin', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: `uname=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
                    })
                    .then(response => {
                        if (response.redirected) {
                            window.location.href = response.url;
                            window.location.href = 'admin_dashboard.html?stringValue=' + encodeURIComponent(username);
                        } else {
                            alert('Invalid credentials. Please try again.');
                        }
                    })
                    .catch(error => console.error('Error:', error));
                }
  });

  
});

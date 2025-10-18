// CHANGE BETWEEN LOGIN & SIGNUP

// find login and signup buttons
let loginTab = document.getElementById("loginTab");
let signupTab = document.getElementById("signupTab");

// find both forms
let loginForm = document.getElementById("loginForm");
let signupForm = document.getElementById("signupForm");

// if both buttons exist on the page
if (loginTab && signupTab) {

  // when user clicks LOGIN tab
  loginTab.onclick = function() {
    loginTab.classList.add("active");  
    signupTab.classList.remove("active"); 
    loginForm.classList.remove("d-none");
    signupForm.classList.add("d-none");
  }

  // when user clicks SIGNUP tab
  signupTab.onclick = function() {
    signupTab.classList.add("active");   
    loginTab.classList.remove("active"); 
    signupForm.classList.remove("d-none");
    loginForm.classList.add("d-none");
  }
}

// LOGIN FORM

if (loginForm) {
  loginForm.onsubmit = function(event) {
    event.preventDefault(); 
    alert("✅ Login successful!");
    window.location.href = "dashboard.html";
  }
}

// SIGNUP FORM

if (signupForm) {
  signupForm.onsubmit = function(event) {
    event.preventDefault();
    alert("✅ Signup successful!"); 
    window.location.href = "dashboard.html"; 
  }
}

// LOGOUT BUTTON

let logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.onclick = function() {
    alert("🚪 Logged out successfully!");
    window.location.href = "login.html";
  }
}

// WITHDRAW FORM

// find withdraw form
let withdrawForm = document.getElementById("withdrawForm");

if (withdrawForm) {

  withdrawForm.onsubmit = function(event) {
    event.preventDefault(); 

    // get all inputs
    let method = document.getElementById("method").value;  
    let phone = document.getElementById("phone").value;    
    let amount = document.getElementById("amount").value;  

    // check if all fields are filled
    if (method !== "" && phone !== "" && amount > 0) {
      alert("✅ Withdraw ৳" + amount + " using " + method + " to number " + phone + " successful!");
      withdrawForm.reset(); 
    } 
    else {
      alert("⚠️ Please fill all the boxes correctly!");
    }
  }
}

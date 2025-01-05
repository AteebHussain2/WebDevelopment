console.log("Twinky is Starting...");

// Code for loading page
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Hide splash screen
        const splashScreen = document.getElementById('splashScreen');
        splashScreen.classList.add('hidden-screens');
        
        // Show main content box after splash screen disappears
        const mainContent = document.getElementById('mainContent');
        mainContent.classList.remove('hidden-screens');
        mainContent.classList.add('visible'); 

        // Show login page after splash screen disappears
        const loginForm = document.querySelector(".container");
        loginForm.classList.remove('hidden-screens')
        loginForm.classList.add('visible')
    }, 3000);
});

// Code for signin and login page functionality (Interactions)

// OnClick Show Login Page
const show_m_login = () => {
    const m_login = document.querySelector('#m-login');
    const m_login_verifcation = document.querySelector('#m-login-verification');
    const m_signin = document.querySelector('#m-signin');
    
    m_login_verifcation.classList.add('hidden-screens2');
    m_login_verifcation.classList.remove('visible');
    
    m_signin.classList.remove('visible');
    m_signin.classList.add('hidden-screens2');
    
    m_login.classList.remove('hidden-screens2');
    m_login.classList.add('visible');
}

// OnClick Show SignIn Page
const show_m_signin = () => {
    const m_signin = document.querySelector('#m-signin');
    const m_signin_verifcation = document.querySelector('#m-signin-verification');
    const m_login = document.querySelector('#m-login');
    
    m_signin_verifcation.classList.add('hidden-screens2');
    m_signin_verifcation.classList.remove('visible');
    
    m_login.classList.remove('visible');
    m_login.classList.add('hidden-screens2');
    
    m_signin.classList.remove('hidden-screens2');
    m_signin.classList.add('visible');
}

// OnClick Show Login Page Verification 
const show_m_login_verification = () => {
    const m_login = document.querySelector('#m-login');
    const m_login_verifcation = document.querySelector('#m-login-verification');
    const m_signin = document.querySelector('#m-signin');
    
    m_signin.classList.remove('visible');
    m_signin.classList.add('hidden-screens2');
    
    m_login.classList.remove('visible');
    m_login.classList.add('hidden-screens2');
    
    m_login_verifcation.classList.add('visible');
    m_login_verifcation.classList.remove('hidden-screens2');
}

// OnClick Show SignIn Page Verification
const show_m_signin_verification = () => {
    const m_signin = document.querySelector('#m-signin');
    const m_signin_verifcation = document.querySelector('#m-signin-verification');
    const m_login = document.querySelector('#m-login');
    
    m_login.classList.remove('visible');
    m_login.classList.add('hidden-screens2');
    
    m_signin.classList.remove('visible');
    m_signin.classList.add('hidden-screens2');
    
    m_signin_verifcation.classList.add('visible');
    m_signin_verifcation.classList.remove('hidden-screens2');
}

// OnClick Show Send Request Page Verification
const show_m_send_friend = () => {
    const m_send_friend = document.querySelector('#m-send-request');
    const m_signin_verifcation = document.querySelector('#m-signin-verification');
    const m_login_verifcation = document.querySelector('#m-login-verification');
    
    m_login_verifcation.classList.remove('visible');
    m_login_verifcation.classList.add('hidden-screens2');
    
    m_signin_verifcation.classList.remove('visible');
    m_signin_verifcation.classList.add('hidden-screens2');
    
    m_send_friend.classList.remove('hidden-screens2')
    m_send_friend.classList.add('visible')
}


// Code for login and sign up form
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
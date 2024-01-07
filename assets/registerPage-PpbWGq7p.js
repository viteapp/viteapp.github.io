import{l as n,a as c}from"./main-_7yPVPNB.js";const u="https://nuxtblog.onrender.com";document.addEventListener("DOMContentLoaded",async()=>{const t=document.getElementById("app");t.innerHTML=`
    <div class="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
    <div class="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg p-4 sm:p-8 rounded-xl shadow-lg max-w-md w-full">
          <h1 class="text-4xl font-bold text-blue-500 mb-2">Register</h1>
          <p class="text-gray-300 mb-8">Create your account.</p>
          <form id="registerForm" class="flex flex-col">
            <input type="text" id="name" placeholder="Name" class="mb-4 p-3 rounded bg-gray-700 text-white" required />
            <input type="email" id="email" placeholder="Email" class="mb-4 p-3 rounded bg-gray-700 text-white" required />
            <input type="password" id="password" placeholder="Password" class="mb-4 p-3 rounded bg-gray-700 text-white" required />
            <button type="submit" id="registerButton" class="mb-4 p-3 rounded bg-blue-500 text-white font-bold hover:bg-blue-600">Register</button>
            <div id="alert" class="hidden"></div>
            <a href="/" class="text-blue-400 hover:text-blue-300 text-sm mt-4">Do you have an account? log in</a>
          </form>
        </div>
      </div>
    `,document.getElementById("registerForm").addEventListener("submit",m);try{const e=await n.getItem("authToken");e&&await p(e)}catch(e){console.error("Error checking auth token:",e)}});async function m(t){var d,l;t.preventDefault();const r=document.getElementById("name").value,e=document.getElementById("email").value,i=document.getElementById("password").value,a=document.getElementById("registerButton");if(!r||!e||!i){o("Name, email, and password are required.","error");return}if(!g(e)){o("Please enter a valid email address.","error");return}a.disabled=!0,a.textContent="Registering...";try{const s=await c.post(`${u}/api/v1/users`,{name:r,email:e,password:i});await n.setItem("authToken",s.data.token),window.location.href="/pages/user.html"}catch(s){o(((l=(d=s.response)==null?void 0:d.data)==null?void 0:l.message)||"An error occurred while registering.","error"),a.disabled=!1,a.textContent="Register"}}function g(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(t).toLowerCase())}function o(t,r){const e=document.getElementById("alert");e.className=`alert ${r==="error"?"bg-red-500":"bg-green-500"} text-white px-4 py-3 rounded relative`,e.textContent=t,e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("hidden")},3e3)}async function p(t){try{(await c.get(`${u}/api/v1/account`,{headers:{Authorization:`Bearer ${t}`}})).status===200&&(window.location.href="/pages/user.html")}catch(r){console.error("Error validating token:",r),await n.removeItem("authToken"),o("Session expired. Please log in again.","error")}}

import{l as s,a as d}from"./main-0G3OTysk.js";document.addEventListener("DOMContentLoaded",async()=>{const o=document.getElementById("app");o.innerHTML=`
    <div class="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div class="bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-lg p-4 sm:p-8 rounded-xl shadow-lg max-w-md w-full">
          <h1 class="text-4xl font-bold text-blue-500 mb-2">Vite App</h1>
          <p class="text-gray-300 mb-8">Login to Vite-App</p>
          <form id="loginForm" class="flex flex-col">
            <input type="email" id="email" placeholder="Email" class="mb-4 p-3 rounded bg-gray-700 text-white" required />
            <input type="password" id="password" placeholder="Password" class="mb-4 p-3 rounded bg-gray-700 text-white" required />
            <button type="submit" id="loginButton" class="mb-4 p-3 rounded bg-blue-500 text-white font-bold hover:bg-blue-600">Login</button>
            <div id="alert" class="hidden"></div>
            <a href="/pages/register.html" class="text-blue-400 hover:text-blue-300 text-sm mt-4">Don't have an account? register</a>
          </form>
        </div>
      </div>
    `,document.getElementById("loginForm").addEventListener("submit",c);try{const e=await s.getItem("authToken");e&&await g(e)}catch(e){console.error("Error checking auth token:",e)}});async function c(o){var i,l;o.preventDefault();const t=document.getElementById("email").value,e=document.getElementById("password").value,r=document.getElementById("loginButton");if(!t||!e){n("Email and password are required.","error");return}if(!u(t)){n("Please enter a valid email address.","error");return}r.disabled=!0,r.textContent="Logging in...";try{const a=await d.post("https://nuxtblog.onrender.com/api/v1/users/login",{email:t,password:e});await s.setItem("authToken",a.data.token),window.location.href="/pages/user.html"}catch(a){n(((l=(i=a.response)==null?void 0:i.data)==null?void 0:l.message)||"An error occurred while logging in.","error"),r.disabled=!1,r.textContent="Login"}}function u(o){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(o).toLowerCase())}function n(o,t){const e=document.getElementById("alert");e.className=`alert ${t==="error"?"bg-red-500":"bg-green-500"} text-white px-4 py-3 rounded relative`,e.textContent=o,e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("hidden")},3e3)}async function g(o){try{(await d.get("https://nuxtblog.onrender.com/api/v1/account",{headers:{Authorization:`Bearer ${o}`}})).status===200&&(window.location.href="/pages/user.html")}catch(t){console.error("Error validating token:",t),await s.removeItem("authToken"),n("Session expired. Please log in again.","error")}}

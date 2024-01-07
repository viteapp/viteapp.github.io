import{l as n,a as r}from"./main-0G3OTysk.js";document.addEventListener("DOMContentLoaded",async()=>{const e=await n.getItem("authToken");e?await u(e):window.location.href="/"});async function u(e){try{const t=await r.get("https://nuxtblog.onrender.com/api/v1/account",{headers:{Authorization:`Bearer ${e}`}});t.status===200&&c(t.data.data)}catch(t){console.error("Error validating token:",t),await n.removeItem("authToken"),window.location.href="/"}}function c(e){const t=document.getElementById("app"),{_id:o,name:a,email:d,role:i,active:l}=e;t.innerHTML=`
      <div class="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-4">
        <div class="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg max-w-lg w-full">
          <div class="flex flex-col items-center">
            <h1 class="text-4xl font-bold text-blue-500 mb-4">${a}</h1>
            <p class="text-gray-700 mb-2">Email: ${d}</p>
            <p class="text-gray-700 mb-4">User ID: ${o}</p>
            <p class="text-gray-700 mb-2">Role: ${i===0?"Admin":"User"}</p>
            ${l?"":'<div class="alert bg-red-500 text-white px-4 py-3 rounded relative mb-4">Your account is not active.</div>'}
            <button id="logoutButton" class="mt-4 p-3 w-full rounded bg-blue-500 text-white font-bold hover:bg-blue-600 transition duration-300 ease-in-out">Logout</button>
            <button id="deleteAccountButton" class="mt-4 p-3 w-full rounded bg-red-500 text-white font-bold hover:bg-red-600 transition duration-300 ease-in-out">Delete Account</button>
          </div>
        </div>
      </div>
    `,document.getElementById("logoutButton").addEventListener("click",m),document.getElementById("deleteAccountButton").addEventListener("click",()=>g(o))}async function s(){await n.removeItem("authToken"),window.location.href="/"}function m(){const e=document.createElement("div");e.innerHTML=`
        <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="logoutConfirmModal">
            <div class="relative top-20 mx-auto p-5 border w-96 max-w-md shadow-lg rounded-md bg-white">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Confirm Logout</h3>
                <p>Are you sure you want to logout?</p>
                <div class="mt-4 flex justify-end space-x-3">
                    <button id="confirmLogout" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring">Yes</button>
                    <button id="cancelLogout" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring">No</button>
                </div>
            </div>
        </div>
    `,document.body.appendChild(e),document.getElementById("confirmLogout").addEventListener("click",s),document.getElementById("cancelLogout").addEventListener("click",()=>document.getElementById("logoutConfirmModal").remove())}function g(e){const t=document.createElement("div");t.innerHTML=`
        <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="confirmModal"> <!-- Ensure this is visible -->
            <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <p>Are you sure you want to delete your account?</p>
                <input type="password" id="confirmPassword" placeholder="Confirm your password" class="w-full p-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none transition duration-150 ease-in-out focus:border-blue-500 mt-3" />
                <div class="mt-3 flex justify-end">
                    <button id="confirmDelete" class="bg-red-500 text-white px-4 py-2 rounded mr-2">Yes</button>
                    <button id="cancelDelete" class="bg-gray-500 text-white px-4 py-2 rounded">No</button>
                </div>
            </div>
        </div>
    `,document.body.appendChild(t),document.getElementById("confirmDelete").addEventListener("click",()=>f(e)),document.getElementById("cancelDelete").addEventListener("click",()=>document.getElementById("confirmModal").remove())}async function f(e){const t=document.getElementById("confirmPassword").value;if(!t){alert("Please enter your password.");return}try{const o=await n.getItem("authToken");(await r.delete(`https://nuxtblog.onrender.com/api/v1/users/${e}`,{headers:{Authorization:`Bearer ${o}`},data:{password:t}})).status===200&&(alert("Account successfully deleted."),await n.removeItem("authToken"),window.location.href="/")}catch(o){console.error("Error deleting account:",o),alert("There was an error deleting your account.")}}

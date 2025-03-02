<!-- src/lib/Navbar.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  
  let activeLang = 'se';
  let darkMode = true; 
  
  function setLanguage(lang: string) {
    activeLang = lang;
  }
  
  function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'winter');
    }
    console.log('Theme is now:', document.documentElement.getAttribute('data-theme'));
  }
  
  onMount(() => {
    // Apply the initial theme based on the darkMode variable.
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'winter');
    }
  });
</script>

<nav class="bg-base-200 p-4 shadow">
  <div class="flex justify-between items-center w-full px-4">
    <a href="/" class="flex items-center space-x-2 text-xl font-bold">
      <img src="Webicon.png" alt="Logo" class="h-12 w-12" />
      <span>ScanDevJobs</span>
    </a>
    <ul class="flex items-center space-x-4">
      <!-- Dark Mode Toggle -->
      <li class="flex items-center">
        <button
          on:click={toggleDarkMode}
          class="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full focus:outline-none inline-flex items-center justify-center">
          <span
            class={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow transform transition-transform duration-200 ${
              darkMode ? 'translate-x-0' : 'translate-x-6'
            }`}>
            {#if darkMode}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-yellow-500 absolute inset-0 m-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 116.707 2.707a7.968 7.968 0 0010.586 10.586z" />
              </svg>
            {:else}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-yellow-500 absolute inset-0 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364-7.364l.707.707m-12.02 12.02l-.707.707M15.364 19.364l.707-.707m-12.02-12.02l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            {/if}
          </span>
        </button>
      </li>
      <!-- Navigation Links -->
      <li><a href="/" class="hover:underline">Home</a></li>
      <li><a href="/about" class="hover:underline">About</a></li>
      <li><a href="/services" class="hover:underline">Services</a></li>
      <li><a href="/contact" class="hover:underline">Contact</a></li>
      <!-- Language Buttons -->
      <li>
        <div class="flex space-x-2">
          <button on:click={() => setLanguage('se')} class={`p-0.5 border-2 border-transparent rounded transition-all transform duration-200 ${
            activeLang === 'se' ? 'border-blue-500 scale-105 bg-blue-50' : 'hover:border-blue-500'
          }`}>
            <img src="https://flagcdn.com/se.svg" alt="Swedish flag" width="24" />
          </button>
          <button on:click={() => setLanguage('no')} class={`p-0.5 border-2 border-transparent rounded transition-all transform duration-200 ${
            activeLang === 'no' ? 'border-blue-500 scale-105 bg-blue-50' : 'hover:border-blue-500'
          }`}>
            <img src="https://flagcdn.com/no.svg" alt="Norwegian flag" width="24" />
          </button>
          <button on:click={() => setLanguage('dk')} class={`p-0.5 border-2 border-transparent rounded transition-all transform duration-200 ${
            activeLang === 'dk' ? 'border-blue-500 scale-105 bg-blue-50' : 'hover:border-blue-500'
          }`}>
            <img src="https://flagcdn.com/dk.svg" alt="Danish flag" width="24" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</nav>

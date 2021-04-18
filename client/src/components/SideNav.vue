<template>
  <div class="hidden lg:flex lg:flex-shrink-0">
    <div class="flex flex-col w-16">
      <div class="flex flex-col h-0 flex-1 overflow-y-auto bg-gradient-to-b from-blue-800 via-indigo-800 to-purple-800">
        <div class="flex-1 flex flex-col">
          <div class="flex-shrink-0 py-4 flex items-center justify-center">
            <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <nav aria-label="Sidebar" class="text-white py-6 flex flex-col items-center space-y-3">
            <router-link tag="a" :to="'/'" active-class="border-green-400 text-white bg-blue-600" class="border-l-4 border-transparent flex items-center p-4 w-full hover:bg-blue-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span class="sr-only">Businesses</span>
            </router-link>
          </nav>
        </div>
        <div class="flex-shrink-0 flex pb-5">
          <a href="#" class="flex-shrink-0 w-full">
            <img class="block mx-auto h-6 w-auto" alt="Advisr mark in white" src="../assets/advisr_mark_white.png" />
            <div class="sr-only">
              <p>
                Back to advisr.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
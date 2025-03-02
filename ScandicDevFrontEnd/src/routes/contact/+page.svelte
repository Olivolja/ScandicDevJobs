<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import Map from '$lib/components/Map.svelte';
    import JobSection from '$lib/components/JobSection.svelte';
</script>

<div class="flex flex-col h-screen">
    <Navbar />
    <div class="contact-page p-4">
        <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
        <p>If you have any questions, please email us at <a href="mailto:contact@example.com">contact@example.com</a>.</p>
        <!-- Add your contact form or additional information here -->
    </div>
    <div class="flex flex-grow">
      <!-- Left: Job Section (60% width) -->
    </div>
</div>
  
  <style>
    .contact-page {
      max-width: 800px;
      margin: 0 auto;
    }
  </style>
  
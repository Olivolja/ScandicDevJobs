<script>
  import "../app.css";

  // Optionally set a default theme (light in this case)
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
</script>

<slot></slot>

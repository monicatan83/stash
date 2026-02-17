// Stash Configuration
// Replace these with your Supabase project details

const CONFIG = {
  // Your Supabase project URL (from Project Settings > API)
  SUPABASE_URL: 'https://etvdjxftwxzxrclfxchu.supabase.co',

  // Your Supabase anon/public key (from Project Settings > API)
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0dmRqeGZ0d3h6eHJjbGZ4Y2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNjc1MzEsImV4cCI6MjA4Njg0MzUzMX0.p4iGXT5kudoF6csrevZn5dr2mbYuoTBfXAou66QZtnI',

  // Your web app URL (after deploying to Vercel/Netlify)
  WEB_APP_URL: 'https://stash-tool-ksol.vercel.app/',

  // Your user ID from Supabase (Authentication > Users)
  // For multi-user mode, this can be removed and auth will be required
  USER_ID: 'c9401404-2aa3-4d04-9fc3-63abdc5fc539',
};

// Don't edit below this line
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}

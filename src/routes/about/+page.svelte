
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Birdy - Sign In</title>
  <link rel="icon" href="https://getbirdy.co/static/logo/icon.png" type="image/png" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-Regular.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-Bold.ttf') format('truetype');
      font-weight: 700;
      font-style: normal;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-ExtraBold.ttf') format('truetype');
      font-weight: 800;
      font-style: normal;
    }
    @font-face {
      font-family: 'Nunito';
      src: url('/themes/fonts/Nunito/Nunito-SemiBold.ttf') format('truetype');
      font-weight: 600;
      font-style: normal;
    }
    html, body {
      font-family: 'Nunito', sans-serif;
      line-height: 1.6;
      margin: 0;
      min-height: 100vh;
      overflow-x: hidden;
    }
    .glassmorphic {
      background: rgba(255, 255, 255, 0.9); /* Higher opacity for clarity */
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      position: relative;
      z-index: 1;
    }
    
    /* .input-focus {
      transition: all 0.3s ease;
      background: #FFFFFF !important; 
      color: #1e3a8a !important; 
      border: 2px solid #4b5563 !important; 
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important; 
      padding: 12px !important;
      font-size: 16px !important;
    } */
     .input-focus {
        transition: all 0.3s ease;
        background: #FFFFFF !important; /* Tailwind gray-100 */
        color: #1e3a8a; /* Ensure text is readable */
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* More subtle, darker shadow */
}

    .input-focus:focus {
      transform: scale(1.01);
      box-shadow: 0 0 16px rgba(30, 58, 138, 0.6) !important;
      border-color: #1e3a8a !important;
    }
    .gradient-bg {
      background: linear-gradient(135deg, #dbeafe, #f3e8ff, #dbeafe);
      background-size: 200% 200%;
      animation: gradientAnimation 12s ease infinite;
    }
    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .text-high-contrast {
      color: #1e3a8a;
    }
    @media (max-width: 640px) {
      .glassmorphic {
        padding: 1.5rem;
      }
      .input-focus {
        padding: 10px !important;
        font-size: 14px !important;
      }
    }
  </style>
</head>
<body class="bg-blue-50 text-black gradient-bg">
  <!-- Navbar -->
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <a href="/" class="text-2xl font-extrabold text-blue-900 tracking-tight">Birdy</a>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#home" class="text-blue-900 hover:text-blue-600 font-semibold text-lg">Home</a>
          <a href="#features" class="text-blue-900 hover:text-blue-600 font-semibold text-lg">Features</a>
          <a href="#faq" class="text-blue-900 hover:text-blue-600 font-semibold text-lg">FAQ</a>
          <a href="/login" class="text-blue-900 hover:text-blue-600 font-semibold text-lg">Contact</a>
        </div>
        <div class="md:hidden">
          <button id="menu-toggle" class="text-blue-900 focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden bg-white shadow-md">
      <div class="px-4 pt-2 pb-3 space-y-1">
        <a href="#home" class="block text-blue-900 hover:text-blue-600 font-semibold text-lg">Home</a>
        <a href="#features" class="block text-blue-900 hover:text-blue-600 font-semibold text-lg">Features</a>
        <a href="#faq" class="block text-blue-900 hover:text-blue-600 font-semibold text-lg">FAQ</a>
        <a href="/login" class="block text-blue-900 hover:text-blue-600 font-semibold text-lg">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Sign In Section -->
  <section class="min-h-screen flex items-center justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full mx-auto">
      <div class="glassmorphic rounded-2xl shadow-2xl p-8 sm:p-10">
        <h2 class="text-3xl font-extrabold text-blue-900 text-center mb-6">Sign In to Birdy</h2>
        <form id="signinForm" class="space-y-8">
          <!-- Phone Sign In -->
          <div>
            <!-- <label for="phone" class="block text-gray-600 font-semibold mb-2 text-high-contrast">Phone Number</label> -->
            <!-- <input type="tel" id="phone" required class="input-focus w-full rounded-full focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all duration-300 hover:border-purple-300 placeholder-gray-500" placeholder="123-456-7890" maxlength="12"> -->
              <!-- <input
              type="tel"
              id="phone"
              required
              class="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-700 transition-all duration-300 hover:border-purple-300 placeholder-gray-700 bg-gray-100 text-blue-900"
            /> -->

            <!-- ✅ Clean version of the phone input -->
<div>
  <label for="phone" class="block text-gray-700 font-semibold mb-2">Phone Number</label>
  <input
    type="tel"
    id="phone"
    required
    maxlength="12"
    placeholder="123-456-7890"
    class="w-full px-4 py-3 border border-gray-300 rounded-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400"
  />
</div>


            <p class="text-sm text-gray-600 mt-2">By proceeding, you consent to get calls or text messages for OTP verification.</p>
          </div>
          <!-- Submit Button -->
          <div>
            <button type="submit" style="display: block; background: #2563eb; color: #FFFFFF; z-index: 9999; padding: 16px; font-size: 20px; font-weight: 700; border-radius: 9999px; width: 100%; text-align: center; margin-top: 20px;" id="signinButton">Sign In</button>
          </div>
        </form>
        <!-- Social Login Options -->
        <div class="mt-6 text-center">
          <p class="text-gray-600 mb-4 text-high-contrast">Or sign in with</p>
          <div class="flex justify-center space-x-4">
            <button class="bg-white text-blue-900 border border-gray-500 p-3 rounded-full hover:bg-gray-50 transition-all duration-300">
              <i class="fab fa-google text-xl"></i>
            </button>
            <button class="bg-white text-blue-900 border border-gray-500 p-3 rounded-full hover:bg-gray-50 transition-all duration-300">
              <i class="fab fa-facebook-f text-xl"></i>
            </button>
            <button class="bg-white text-blue-900 border border-gray-500 p-3 rounded-full hover:bg-gray-50 transition-all duration-300">
              <i class="fab fa-x-twitter text-xl"></i>
            </button>
          </div>
        </div>
        <!-- Links -->
        <div class="mt-6 text-center space-y-2">
          <p class="text-gray-600">
            Don't have an account? <a href="/signup" class="text-blue-600 font-semibold hover:text-blue-800">Sign Up</a>
          </p>
          <p class="text-gray-600">
            <a href="/forgot" class="text-blue-600 font-semibold hover:text-blue-800">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-blue-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-2xl font-bold mb-4">Birdy</h3>
          <p class="font-light text-lg">Your trusted birdy, just one tap away.</p>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2 font-light text-lg">
            <li><a href="#home" class="hover:text-blue-300">Home</a></li>
            <li><a href="#features" class="hover:text-blue-300">Features</a></li>
            <li><a href="#faq" class="hover:text-blue-300">FAQ</a></li>
            <li><a href="#contact" class="hover:text-blue-300">Contact</a></li>
            <li><a href="/privacy" class="hover:text-blue-300">Privacy</a></li>
            <li><a href="/Drivers" class="hover:text-blue-300">Drivers</a></li>
            <li><a href="/Riders" class="hover:text-blue-300">Riders</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4">Contact Us</h3>
          <p class="font-light text-lg">Email: support@Birdy.com</p>
          <p class="font-light text-lg">Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-4">Follow Us</h3>
          <div class="flex space-x-4 mb-4">
            <a href="https://www.tiktok.com/@birdyapp" target="_blank" class="text-white hover:text-blue-300 transition">
              <i class="fab fa-tiktok text-2xl"></i>
            </a>
            <a href="https://x.com/birdyapp" target="_blank" class="text-white hover:text-blue-300 transition">
              <i class="fab fa-x-twitter text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/birdyapp" target="_blank" class="text-white hover:text-blue-300 transition">
              <i class="fab fa-instagram text-2xl"></i>
            </a>
            <a href="https://www.facebook.com/birdyapp" target="_blank" class="text-white hover:text-blue-300 transition">
              <i class="fab fa-facebook-f text-2xl"></i>
            </a>
          </div>
          <button id="share-button" class="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center">
            <i class="fas fa-share-alt mr-2"></i> Share Birdy
          </button>
        </div>
      </div>
      <div class="mt-8 text-center">
        <p class="font-light text-lg">© 2025 Birdy. All rights reserved.</p>
      </div>
    </div>
  </footer>




  <!-- JavaScript -->
  <script>
    // Debugging: Confirm elements are in DOM
    document.addEventListener('DOMContentLoaded', () => {
      const signInButton = document.getElementById('signinButton');
      const phoneInput = document.getElementById('phone');
      console.log('Sign In Button:', signInButton);
      console.log('Phone Input:', phoneInput);
    });

    // Mobile Menu Toggle
    document.getElementById('menu-toggle').addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });

    // Phone Number Formatting
    document.getElementById('phone').addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 3 && value.length <= 6) {
        value = value.slice(0, 3) + '-' + value.slice(3);
      } else if (value.length > 6) {
        value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
      }
      e.target.value = value;
    });



    // Form Submission
    document.getElementById('signinForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const phone = document.getElementById('phone').value;
      try {
        const res = await fetch('https://xmkvtmgtwb.execute-api.us-east-1.amazonaws.com/dev/auth/send-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phoneNumber: phone }),
        });
        const data = await res.json();
        alert(data.message || 'Sign-in successful!');
      } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
      }
    });



    

    // GSAP Animations
    gsap.from(".glassmorphic", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
    gsap.from("#phone", { opacity: 0, y: 20, duration: 0.8, delay: 0.5 });
    gsap.from("#signinButton", { opacity: 0, y: 20, duration: 0.8, delay: 0.7 });

    // Social Sharing
    document.getElementById('share-button').addEventListener('click', async () => {
      const shareData = {
        title: 'Birdy - Your Trusted Ride',
        text: 'Join Birdy and connect directly with trusted drivers for safe, affordable rides!',
        url: 'https://getbirdy.co'
      };
      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          navigator.clipboard.writeText(shareData.url).then(() => {
            alert('Link copied to clipboard! Share it with your friends.');
          }).catch(() => {
            alert('Failed to copy link. Please copy this URL: ' + shareData.url);
          });
        }
      } catch (err) {
        console.error('Share failed:', err);
        navigator.clipboard.writeText(shareData.url).then(() => {
          alert('Link copied to clipboard! Share it with your friends.');
        }).catch(() => {
          alert('Failed to copy link. Please copy this URL: ' + shareData.url);
        });
      }
    });

    // Prevent zoom on input focus for better mobile experience
    document.addEventListener('gesturestart', function (e) {
      e.preventDefault();
    });
  </script>
</body>
</html>
# Round-Robin-Dealer
A self-contained html5 based round robin generates a RR and "deals" the assignments to people via the screen as if they were cards.  Its customization use local storage so works offline 

A lightweight, mobile-first Progressive Web App (PWA) designed to manage pickleball group rotations, randomized court assignments, and game match timers. Runs directly in any web browser and functions **100% offline** with zero external dependencies.

---

## ✨ Features

* 📱 **Add to Home Screen (PWA):** Built-in install prompts for Android and iOS devices. Save it to your phone's home screen to run like a native app.
* 📶 **100% Offline Support:** Uses an integrated Service Worker and Web App Manifest so you can run games on courts without cell coverage or Wi-Fi.
* 🔀 **Smart Randomizer Algorithm:**
* Generates balanced rotations for Servers, Receivers, and Byes/Breaks.
* Features an active post-processing filter to minimize back-to-back duplicate assignments for individual players.


* ⏱️ **Integrated Match Countdown Timer:**
* Customizable game durations (minutes).
* Synthesized audio bell chime (via Web Audio API) and haptic vibration alerts when time expires—no audio files needed!


* 💾 **Auto-Saving Preferences:** Automatically remembers your facility’s court counts, checked active courts, and timer settings using browser `localStorage`.
* 🎯 **Large, High-Contrast UI:** Touch-friendly display designed for quick tap navigation on court.

---

## 🚀 Quick Start & Hosting on GitHub Pages

Because the app is built as a self-contained single file, hosting it on GitHub Pages takes under a minute:

1. **Create Repository:** Create a new public or private repository on GitHub (e.g., `pickleball-round-robin`).
2. **Upload Code:** Save the app code as `index.html` in the root folder of your repository alongside this `README.md`.
3. **Enable GitHub Pages:**
* Go to your repository **Settings**.
* Navigate to **Pages** in the left sidebar.
* Under **Build and deployment** > **Branch**, select `main` (or `master`) and `/ (root)`.
* Click **Save**.


4. **Access App:** Your live web app URL will be available at `https://<your-username>.github.io/<repository-name>/`.

---

## 📱 How to Install on Your Phone

### Android (Chrome / Edge)

1. Open your live app URL in Chrome.
2. Tap the **"Add to Home Screen"** prompt that appears automatically, or tap the three menu dots (`⋮`) and select **Add to Home screen**.

### iOS (Safari)

1. Open your live app URL in Safari.
2. Tap the **Share** button (the box with an upward arrow ⎋ at the bottom of the screen).
3. Scroll down and tap **Add to Home Screen** (➕).

---

## 📖 How to Use

1. **Configure Setup:**
* **#Players:** Enter the total number of players present.
* **Game #:** Auto-increments after each round. Tap *Reset Game #* to start back at Game 1.
* **Timer (Minutes):** Set desired match duration.
* **Max Courts & Selection:** Specify total facility courts and check off which courts are open for play.


2. **Run Game Assignments:**
* Tap **Start Assignments**.
* Tap anywhere on the screen (or use keyboard keys) to step through each player's court and role assignment (Server, Receiver, or Bye).


3. **Match Countdown:**
* Once all players are assigned, tap **Start Timer** to begin the match clock.
* An audio chime and vibration will sound when match time is up.
* Tap **Next Game** to increment the game counter and return to the setup screen.



---

## 🛠️ Tech Stack

* **HTML5 / CSS3:** Flexbox and CSS Grid layout styled for modern mobile displays.
* **Vanilla JavaScript (ES6+):** Zero external libraries or frameworks (React, Vue, jQuery, etc.).
* **Web Audio API:** Generates real-time audio frequencies for timer chimes.
* **Service Worker:** Offline asset caching engine.

---

## 📄 License

This project is open-source and available under theGPL V3. Feel free to fork, modify, and share!

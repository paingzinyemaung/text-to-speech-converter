# Text to Speech Converter 🎙️

A web-based application that leverages the **Web Speech API** to convert written text into high-quality spoken audio in real-time. This tool is designed to enhance accessibility and provide a hands-free reading experience.

---

### 🚀 Key Features
* **Real-time Conversion:** Instantly transforms text input into speech with a single click.
* **Intelligent Pause & Resume:** Features advanced logic to pause and resume playback, specifically optimized for longer texts (exceeding 50 characters).
* **Dynamic UI Feedback:** The button state automatically updates between "Pause", "Resume", and "Convert To Speech" based on the current speech status.
* **Minimalist Interface:** A clean, user-friendly design focused on simplicity and ease of use.

---

### 🛠️ Technologies Used
* **HTML5:** For semantic web structure.
* **CSS3:** For modern UI styling and responsive design.
* **JavaScript (ES6):** Utilizing the `speechSynthesis` interface of the Web Speech API for core functionality.

---

### 📸 Project Preview

![Text to Speech Preview](https://github.com/user-attachments/assets/3d968395-680a-4dc3-997b-a454fdf9ec76)

---

### ⚙️ Technical Overview
The application's core logic utilizes an `isSpeaking` state flag to manage the toggle functionality of the action button:

1.  **Speech Initialization:** The `window.speechSynthesis` controller captures text from the textarea and initializes the utterance.
2.  **Toggle Logic:** The `if (synth.speaking && isSpeaking)` condition enables a single-button interface to switch between playing and pausing audio.
3.  **Automatic State Reset:** An internal `setInterval` monitors the playback status to reset the button to its default state once the speech finishes.

---

### 👤 Author Information

**Paing Zin Ye Maung**
* **GitHub:** [GitHub](https://github.com/paingzinyemaung)
* **LinkedIn:** [LinkedIn](https://linkedin.com/in/paingzinyemaung)

---
⭐️ If you like this project, don't forget to give it a **Star**!

---
Copyright © 2026 **Paing Zin Ye Maung**. All rights reserved. 💻

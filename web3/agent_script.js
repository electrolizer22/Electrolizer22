document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output1");
  let typewriterQueue = Promise.resolve(); // Initialize a queue

  // Function to simulate the typewriter effect
  function typewriterEffect(text, callback) {
    typewriterQueue = typewriterQueue.then(() => {
      return new Promise((resolve) => {
        let index = 0;
        const interval = setInterval(() => {
          output.textContent += text.charAt(index);
          index++;
          if (index === text.length) {
            clearInterval(interval);
            if (callback) callback();
            resolve(); // Move to the next queued call
          }
        }, 10); // The speed of the typewriter effect
      });
    });
  }

  // Function to print to terminal and keep scrolling down
  function printToTerminal(text) {
    typewriterEffect(text, () => {
      output.scrollTop = output.scrollHeight;
    });
  }

  // The new introduction for the game (language translation theme)
  function askForPhrase() {
    const text =
      "In a quiet corner of the universe, the Decepticons launched a covert operation, encrypting the name of your group's protector. To uncover the identity of your guardian robot, you must decrypt the hidden message—only then will you discover the group’s true name. The mission is in your hands, but only through the code will the secret be revealed.Here's a riddle based on the Transformers movie:"
      +"In a world where Autobots fight Decepticons,"
      +"I stand as a trilogy with battles and bonds.\n"
      +"The first is 'Revenge,'\n the second 'Dark,'\n"
      +"The third is where the final fight sparks.\n"
      +" What number am I, when all three are seen?\n"
      +"Enter your Registration Number:"
      +"(only last 3 digits)";


    printToTerminal(text);
  }



  // Trigger the translation game steps
  function startGame() {
    askForPhrase();
    setTimeout(() => {
      showTranslationPrompt();
    }, 3000); // Wait for 3 seconds before showing the translation prompt
  }

  // Start the game on load
  startGame();
});

  



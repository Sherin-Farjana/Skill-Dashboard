// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {

  // Select all elements representing skill progress bars
  const skillBars = document.querySelectorAll(".skill-progress");

  // Function to animate skill bars
  const animateSkillBars = () => {
    skillBars.forEach((skillBar) => {

        // Get the percentage value from data attribute
        const percent = skillBar.getAttribute("data-percent");

        // Update CSS custom property for animation (used in CSS)
        skillBar.style.setProperty("--percent", `${percent}%`);

        // Add animation class for CSS transitions
        skillBar.classList.add("animate");
        
        // Set the actual width of the skill bar after a short delay
        setTimeout(() => {
          skillBar.style.width = `${percent}%`;
        }, 1000);
      });
  };

  // Initial check and animation trigger
  animateSkillBars();
});

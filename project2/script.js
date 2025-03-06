document.addEventListener("DOMContentLoaded", () => {
    // Select the elements
    const colorBox = document.getElementById("color-box")
    const changeColorBtn = document.getElementById("change-color-btn")
  
    // Function to generate a random color
    function getRandomColor() {
      // Generate random values for red, green, and blue
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
  
      // Return the color in hexadecimal format
      return "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0")
    }
  
    // Add click event listener to the button
    changeColorBtn.addEventListener("click", () => {
      // Generate a random color
      const newColor = getRandomColor()
  
      // Change the background color of the box
      colorBox.style.backgroundColor = newColor
    })
  })
  
  
# Build-a-JavaScript-Calculator-App

# JavaScript Calculator

This project is a simple JavaScript calculator that performs basic arithmetic operations. It was created as part of the FreeCodeCamp Front End Development Libraries certification.

## Features

*   **Basic Arithmetic:** Performs addition, subtraction, multiplication, and division.
*   **Clear Function:** Clears the display and resets the calculator.
*   **Decimal Input:** Allows for decimal point input.
*   **Percentage Calculation:** Includes a percentage calculation button.
*   **Sign Change:**  Provides a button to change the sign of the current number.
*   **Limited Input Length:** Prevents input from exceeding the display width.
*   **Chained Operations:** Supports chained operations (e.g., 2 + 3 * 4).
*   **Responsive Design:**  The calculator has a fixed width, but it will center on the screen and should adapt reasonably to different screen sizes.

## Technologies Used

*   **HTML:**  Structure of the calculator interface.
*   **CSS:** Styling of the calculator.
*   **JavaScript:**  Logic for handling calculations and user input.

## How to Run

1.  Save the `index.html`, `style.css`, and `script.js` files in the same directory.
2.  Open the `index.html` file in your web browser.

## Usage

*   Click the number buttons to input digits.
*   Click the operator buttons (+, -, \*, /) to perform calculations.
*   Click the "=" button to display the result.
*   Click the "AC" button to clear the display.
*   Click the "+/-" button to change the sign of the current number.
*   Click the "%" button to calculate the percentage.

## Code Explanation

*   **`index.html`:**
    *   Sets up the basic HTML structure for the calculator, including the display (`#display`) and buttons.
    *   Includes the necessary CSS and JavaScript files, as well as the FreeCodeCamp test suite.
*   **`style.css`:**
    *   Styles the calculator, display, and buttons using CSS.  Includes some basic styling and a hover effect on the buttons.
*   **`script.js`:**
    *   Uses `querySelectorAll` to select all button elements.
    *   Event listeners are attached to each button to handle clicks.
    *   `currentInput`, `previousInput`, and `operator` variables store the current input, previous input, and the selected operator.
    *   The `updateDisplay()` function updates the calculator display.
    *   The `calculate()` function performs the arithmetic operations.
    *   The `handleOperator()` function manages operator selection and chaining.
    *   Input length is limited to prevent overflow.

## FreeCodeCamp Certification

This project fulfills the requirements for the FreeCodeCamp Front End Development Libraries certification. The included FreeCodeCamp test suite can be used to verify the project's functionality.

## Developer

Yousef Kaihar ([@Kihar_Youssf](https://x.com/Kihar_Youssf)) - [LinkedIn](https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

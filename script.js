function getFormvalue() {
    //Write your code here
 var form = document.getElementById("form1");

    // Get the input elements for first and last name by their names
    var firstNameInput = form.elements["fname"];
    var lastNameInput = form.elements["lname"];

    // Get the values from the input elements
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    // Display the first and last name using alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);

    // Prevent the form from actually submitting and refreshing the page
    return false;
}

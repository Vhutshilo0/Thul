document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('roadIssuesForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Validate form fields
      if (!validateForm()) {
        return;
      }
  
      // Get user's location
      getLocation();
    });
  
    function validateForm() {
      let isValid = true;
  
      // Validation for name
      const name = document.getElementById('name').value;
      if (name.trim() === '') {
        isValid = false;
        alert('Please enter your name.');
      }
  
      // Validation for surname
      const surname = document.getElementById('surname').value;
      if (surname.trim() === '') {
        isValid = false;
        alert('Please enter your surname.');
      }
  
      // Validation for ID number
      const idNumber = document.getElementById('id-number').value;
      if (idNumber.trim() === '') {
        isValid = false;
        alert('Please enter your ID number.');
      }
  
      // Validation for contact numbers
      const contactNumbers = document.getElementById('contact-numbers').value;
      if (contactNumbers.trim() === '') {
        isValid = false;
        alert('Please enter your contact numbers.');
      }
  
      // Validation for email
      const email = document.getElementById('email').value;
      if (email.trim() === '') {
        isValid = false;
        alert('Please enter your email.');
      }
  
      // Validation for issue description
      const issueDescription = document.getElementById('issue-description').value;
      if (issueDescription.trim() === '') {
        isValid = false;
        alert('Please describe the issue.');
      }
  
      // Validation for urgency level
      const urgencyLevel = document.getElementById('urgency').value;
      if (urgencyLevel === 'default') {
        isValid = false;
        alert('Please select the urgency level.');
      }
  
      return isValid;
    }
  
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.location(showPosition);
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    }
  
    function showPosition(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      // Use latitude and longitude as needed
      console.log('Latitude: ' + latitude + ' Longitude: ' + longitude);
  
    
    }
  });
  
// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='contactForm']").validate({
    // Specify validation rules
    rules: {
      company_name: "required",
      opportunity_number: "required",
      primary_contact: "required",
      primary_telephone: {
        required: true,
        matches: "[0-9]+",  // <-- no such method called "matches"!
        minlength:10,
        maxlength:10
      },
      secondary_telephone: {
        required: true,
      },
      email: {
        required: true,
        email: true
      }
    },
    // Specify validation error messages
    messages: {
      company_name: "Please enter your company_name",
      opportunity_number: "Please enter your rome_opportunity_number",
      primary_contact: "Please enter your primary_contact",
      primary_telephone: "Please enter your primary_telephone",
      secondary_telephone: "Please enter your secondary_telephone",
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
      alert("form submitted");
    }
  });
});
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
      primary_sales_contact: "required",
      secondary_sales_contact: "required",
      attuid: "required",
      primary_telephone: {
        required: true,
      },
      telephone: {
        required: true,
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
      telephone: "Please enter your telephone",
      email: "Please enter a valid email address",
      primary_sales_contact: "Please enter your primary sales contact",
      secondary_sales_contact: "Please enter your secondary sales contact",
      attuid: "Please enter your ATTUID"
    },
    submitHandler: function(form) {
      var formData = JSON.parse(JSON.stringify(jQuery('form').serializeArray()))
      console.log(formData)
      window.location.href="account.html"
    }
  });
});
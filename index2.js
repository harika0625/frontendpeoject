$(document).ready(function () {
    $('#productType').on('input', function () {
        if ($(this).val().trim() !== '') {
            $('#nextBtn').prop('disabled', false);
            $('#errorMsg').addClass('d-none');
        } else {
            $('#nextBtn').prop('disabled', true);
        }
    });
    
    $('#productForm').submit(function (event) {
        event.preventDefault();
        let productType = $('#productType').val().trim();
        
        if (productType === '') {
            $('#errorMsg').removeClass('d-none');
        } else {
            window.location.href = "index3.html";
        }
    });
});


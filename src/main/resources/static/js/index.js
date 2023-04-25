var select = document.getElementById('role-select'),
    input = document.getElementById('role');

select.addEventListener('change', function(){
    input.value = select.value;
});
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const storedForm = JSON.parse(localStorage.getItem(localStorageKey));

if (storedForm) {
  form.elements.email.value = storedForm.email || '';
  form.elements.message.value = storedForm.message || '';
}

form.addEventListener('input', event => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    console.log('Please fill in email and message fields');
    return;
  }
  console.log(
    'Data submitted:',
    JSON.parse(localStorage.getItem(localStorageKey))
  );
  form.reset();
  localStorage.removeItem(localStorageKey);
});

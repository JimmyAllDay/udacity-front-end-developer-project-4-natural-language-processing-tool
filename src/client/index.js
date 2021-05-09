import { getUserInput } from './js/getUserInput';
import { formValidation } from './js/formValidation';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

console.log('CHANGE!!');

// Declare DOM variables
const submitButton = document.getElementById('submitButton');

// Single event listener triggers app functionality
submitButton.addEventListener('click', function() {
  let input = document.getElementById('input-field').value;
  let canFetchAPI = formValidation(input);
  if (canFetchAPI) {
    getUserInput(input);
  }
  canFetchAPI = false;
});

import swal from 'sweetalert';

export const registerErrorSwal = () => {
  swal('Error', 'Something went wrong... Check your data...', 'error', {
    button: 'Try again',
  });
};

export const loginErrorSwal = () => {
  swal('Error', 'Incorrect login or password...', 'error', {
    button: 'Try again',
  });
};

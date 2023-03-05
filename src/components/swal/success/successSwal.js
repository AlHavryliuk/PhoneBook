import swal from 'sweetalert';

export const successLoginSwal = name => {
  swal({
    title: 'Successful authorization!',
    text: `Hi, ${name}. Nice to meet you!`,
    icon: 'success',
    button: 'Continue!',
  });
};

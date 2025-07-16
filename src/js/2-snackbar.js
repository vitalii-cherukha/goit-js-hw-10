import iziToast from 'izitoast';

const refs = {
  form: document.querySelector('.form'),
};

const createPromise = (delay, state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
};

const onFormSubmit = e => {
  e.preventDefault();
  const delay = Number(refs.form.elements.delay.value.trim());
  const state = refs.form.elements.state.value;

  createPromise(delay, state)
    .then(ms => {
      iziToast.success({
        title: '✅ Fulfilled',
        message: `Fulfilled promise in ${ms}ms`,
        position: 'topRight',
      });
    })
    .catch(ms => {
      iziToast.error({
        title: '❌ Rejected',
        message: `Rejected promise in ${ms}ms`,
        position: 'topRight',
      });
    });

  refs.form.reset();
};

refs.form.addEventListener('submit', onFormSubmit);

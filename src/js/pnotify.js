import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function onNoCountry() {
  info({
    title: 'Error!',
    text: 'Please enter a valid request example-(Ukraine)',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}

export function onOutputInfo() {
  error({
    title: 'Large number of matches',
    text: 'Please enter a more specific request example-(Ukraine)',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}
export function onError() {
  alert('Данные для поиска страны отстутсвуют');
}

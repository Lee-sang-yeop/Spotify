'use strict';

let errorMsg = document.querySelector('.error-msg');
let email = document.getElementById('email');
let regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;

$(function () {
  $('#email').keyup(function () {
    $('#email').html('');
  });

  $('#email').keyup(function () {
    if ($('#email').is(':empty') && $('#email').value != '') {
      console.log('종수');
    } else if (!regExp.test($('#email').val())) {
      console.log('잘먹지롱');
      $('.error-msg').html('잘못된 이메일 주소입니다. example@email.com 형식으로 입력되었는지 확인하세요.');
      $('.error-msg').css('color', '#d31225');
    } else if (isEmpty($('#email'))) {
      console.log('종수');
      $('.error-msg').html('');
    }
  });
});

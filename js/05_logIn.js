'use strict';

// 이메일 주소 or 사용자 이름
$(function () {
  $('#email').keyup(function () {
    if (!$('#email').val()) {
      $('.error-msg1').html('Spotify 사용자 이름 또는 이메일 주소를 입력하세요.');
    } else {
      $('.error-msg1').html('');
    }
  });
});

// 비밀번호
$(function () {
  $('#password').keyup(function () {
    console.log('whdtn');
    if (!$('#password').val()) {
      $('.error-msg2').html('비밀번호를 입력하세요.');
    } else {
      $('.error-msg2').html('');
    }
  });
});

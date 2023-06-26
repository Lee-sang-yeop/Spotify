'use strict';

let errorMsg = document.querySelector('.error-msg');
let email = document.getElementById('email');
let regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
let regPass = /^\S{8-20}$/;
let regYear = /^\d{4}$/;

// 이메일 유효성 검사.
$(function () {
  $('#email').keyup(function () {
    if (!$('#email').val()) {
      //   console.log('이메일 입력하세요.');
      $('.error-msg').html('이메일을 입력해야 합니다!.');
      $('#email').css('border', '2px solid red');
      return;
    } else if (!regExp.test($('#email').val())) {
      //   console.log('잘먹지롱');
      $('.error-msg').html('잘못된 이메일 주소입니다. example@email.com 형식으로 입력되었는지 확인하세요.');
      $('#email').css('border', '2px solid red');
    } else {
      $('.error-msg').html('');
      $('#email').css('border', '1px solid gray');
    }
  });
});

// 이메일확인 유효성 검사.
$(function () {
  $('#emailCheck').keyup(function () {
    if (!$('#emailCheck').val()) {
      $('.error-msg2').html('이메일을 확인해야 합니다.');
      $('#emailCheck').css('border', '2px solid red');
      return;
    } else if ($('#emailCheck').val() != $('#email').val()) {
      $('.error-msg2').html('이메일 주소가 일치하지 않습니다.');
      $('#emailCheck').css('border', '2px solid red');
    } else {
      $('.error-msg2').html('');
      $('#emailCheck').css('border', '1px solid gray');
    }
  });
});

// 비밀번호 유효성검사.
$(function () {
  $('#password').keyup(function () {
    if (!$('#password').val()) {
      $('.error-msg3').html('비밀번호를 입력해야 합니다.');
      $('#password').css('border', '2px solid red');
      return;
    } else if ($('#password').val().length < 8) {
      $('.error-msg3').html('비밀번호가 너무 짧습니다.');
      $('#password').css('border', '2px solid red');
    } else {
      $('.error-msg3').html('');
      $('#password').css('border', '1px solid gray');
    }
  });
});

// 프로필 이름 유효성 검사.
$(function () {
  $('#nickname').keyup(function () {
    if (!$('#nickname').val()) {
      $('.error-msg4').html('프로필에 쓰일 이름을 입력하세요.');
      $('.error-msg4').css('color', '#d31225');
    } else {
      $('.error-msg4').html('프로필에 표시되는 이름입니다.');
      $('.error-msg4').css('color', 'black');
    }
  });
});

// 연도 유효성 검사
$(function () {
  $('#years').keyup(function () {
    if (!$('#years').val() || $('#years').val().length < 4) {
      $('.error-msg5').html('유효한 연도를 입력하세요.');
    } else {
      $('.error-msg5').html('');
    }
  });
});

// 월 유효성 검사
$(function () {
  $('#months').on('click', function () {
    if ($('#months').val() == 0) {
      $('.error-msg6').html('태어난 달을 입력하세요.');
    } else {
      $('.error-msg6').html('');
    }
  });
});

// 일 유효성 검사
$(function () {
  $('#day').keyup(function () {
    if (!$('#day').val() || $('#day').val().length < 4) {
      $('.error-msg7').html('해당 월 중 유효한 날짜를 입력하세요.');
    } else {
      $('.error-msg7').html('');
    }
  });
});

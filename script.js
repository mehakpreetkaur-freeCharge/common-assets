var npciTimeoutDiv = document.getElementsByName("npciTimeout")[0];
var displayTime;

if (npciTimeoutDiv) {
  displayTime = npciTimeoutDiv.value;
}

function showNpciDiv() {
  if (displayTime) {
    setTimeout(function () {
      submitForm();
    }, displayTime);
  } else {
    submitForm();
  }
}

window.onload = function () {
  if (document.getElementById("redirectForm")) {
    showNpciDiv();
  }
};

const submitForm = function () {
  const redirectForm = document.getElementById("redirectForm");

  if (!redirectForm) return;

  if (redirectForm.method.toLowerCase() === "post") {
    if (
      document.getElementsByName("headerValues").length > 0 &&
      document.getElementsByName("headerNames").length > 0
    ) {
      submitFormAndHeader();
    } else {
      redirectForm.submit();
    }
  } else {
    window.location.href = redirectForm.action;
  }
};

const submitFormAndHeader = function () {
  const redirectForm = document.getElementById("redirectForm");
  if (!redirectForm) return;

  window.location.href = redirectForm.action;
};

const submitFormAndHeader_error = function () {
  const redirectForm = document.getElementById("redirectForm_error");
  if (!redirectForm) return;

  if (redirectForm.method.toLowerCase() === "post") {
    redirectForm.submit();
  } else {
    window.location.href = redirectForm.action;
  }
};

// Initialize calculations
$(document).ready(function () {
  $('#startHere').on('click', () => {
    $('#services').removeClass('invisible');
    $('#sectionA').removeClass('invisible');
  });
});

$('#sectionA').on('change', () => {
  if ($('#nfz').is(':checked')) {
    $('#optionDresult').removeClass('invisible');
    $('#disclaimer').removeClass('invisible');
    $('#sectionElect').addClass('invisible');
    $('.group2').prop('checked', false);
    $('#sectionRequirements').addClass('invisible');
    $('.group3').prop('checked', false);
    $('#optionDresult').slideDown();
    $('html, body').scrollTop($('#optionDresult').offset().top);
  } else {
    $('#sectionElect').removeClass('invisible');
    $('#optionDresult').addClass('invisible');
    $('#disclaimer').addClass('invisible');
    $('#optionAresult').addClass('invisible');
    $('#sectionElect').slideDown();
    $('html, body').scrollTop($('#sectionElect').offset().top);
  }
});

$('#sectionElect').on('change', () => {
  if ($('#electYes').is(':checked')) {
    $('#optionDresult').removeClass('invisible');
    $('#disclaimer').removeClass('invisible');
    $('#sectionRequirements').addClass('invisible');
    $('.group3').prop('checked', false);
    $('#optionDresult').slideDown();
    $('html, body').scrollTop($('#optionDresult').offset().top);
  } else {
    $('#sectionRequirements').removeClass('invisible');
    $('#optionDresult').addClass('invisible');
    $('#disclaimer').addClass('invisible');
    $('#optionAresult').addClass('invisible');
    $('#sectionElect').slideDown();
    $('html, body').scrollTop($('#sectionElect').offset().top);
  }
});

$('#sectionRequirements').on('change', () => {
  if ($('#requireNo').is(':checked')) {
    $('#optionDresult').removeClass('invisible');
    $('#optionAresult').addClass('invisible');
    $('#disclaimer').removeClass('invisible');
    $('#optionDresult').slideDown();
    $('html, body').scrollTop($('#optionDresult').offset().top);
  } else {
    $('#optionAresult').removeClass('invisible');
    $('#optionDresult').addClass('invisible');
    $('#disclaimer').removeClass('invisible');
    $('#optionAresult').slideDown();
    $('html, body').scrollTop($('#optionAresult').offset().top);
  }
});
//Option D selected
// $('#nfz').click(() => {
//   $('#optionDresult').removeClass('invisible');
//   $('#optionDresult').slideDown();
//   $('html, body').scrollTop($('#optionDresult').offset().top);
// });

$('#incomeOptionD').on('change', () => {
  var inputIncome = $('input[name=incomeOptionDName]').val();
  var tax = taxCalculator(0, inputIncome);

  $('#calculatedTaxOptionD').text('AED ' + tax);
});

$('#optionAresult').on('change', () => {
  if (
    $('#c1Rev1').val() &&
    $('#c1Inc1').val() &&
    $('#c1Rev2').val() &&
    $('#c1Inc2').val() &&
    $('#c2Rev1').val() &&
    $('#c2Inc1').val() &&
    $('#c2Rev2').val() &&
    $('#c2Inc2').val()
  ) {
    var tax =
      $('#c1Rev1').val() +
      $('#c1Inc1').val() +
      $('#c1Rev2').val() +
      $('#c1Inc2').val() +
      $('#c2Rev1').val() +
      $('#c2Inc1').val() +
      $('#c2Rev2').val() +
      $('#c2Inc2').val();

    // -------------- START HERE... value to add. then check de minim. and then show results. -----------------
    // alert('in here for tax calcualtion');
    $('#calculatedTaxOptionA').text('AED ' + tax);
  }
  // var inputIncome = $('input[name=incomeOptionDName]').val();
  // var tax = taxCalculator(0, inputIncome);
});

function taxCalculator(qualIncome, nonQualIncome) {
  var tax = (nonQualIncome - 375000) * 0.09;
  return Math.max(0, tax);
}

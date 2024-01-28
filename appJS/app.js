// Initialize calculations
$(document).ready(function () {
  $('#startHere').on('click', () => {
    $('#services').removeClass('invisible');
    $('#sectionA').removeClass('invisible');
  });
});

//Option D selected
$('#nfz').click(() => {
  $('#optionDresult').removeClass('invisible');
  $('#optionDresult').slideDown();
  $('html, body').scrollTop($('#optionDresult').offset().top);
});

$('#incomeOptionD').on('change', () => {
  var inputIncome = $('input[name=incomeOptionDName]').val();
  var tax = taxCalculator(0, inputIncome);

  $('#calculatedTaxOptionD').text('AED ' + tax);
});

function taxCalculator(qualIncome, nonQualIncome) {
  var tax = (nonQualIncome - 375000) * 0.09;
  return Math.max(0, tax);
}

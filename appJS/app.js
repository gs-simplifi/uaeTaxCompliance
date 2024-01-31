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
    $('#optionAresult').addClass('invisible');
    $('#optionADetails').addClass('invisible');
    $('#optionDresult').slideDown();
    $('html, body').scrollTop($('#optionDresult').offset().top);
  } else {
    $('#sectionElect').removeClass('invisible');
    $('#optionDresult').addClass('invisible');
    $('#disclaimer').addClass('invisible');
    $('#optionAresult').addClass('invisible');
    $('#optionADetails').addClass('invisible');
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
    $('#optionAresult').addClass('invisible');
    $('#optionADetails').addClass('invisible');
    $('#optionDresult').slideDown();
    $('html, body').scrollTop($('#optionDresult').offset().top);
  } else {
    $('#sectionRequirements').removeClass('invisible');
    $('#optionDresult').addClass('invisible');
    $('#disclaimer').addClass('invisible');
    $('#optionAresult').addClass('invisible');
    $('#optionADetails').addClass('invisible');
    $('#sectionElect').slideDown();
    $('html, body').scrollTop($('#sectionElect').offset().top);
  }
});

$('#sectionRequirements').on('change', () => {
  if ($('#requireNo').is(':checked')) {
    $('#optionDresult').removeClass('invisible');
    $('#optionAresult').addClass('invisible');
    $('#optionADetails').addClass('invisible');
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
    var c1Rev1 = $('input[name=c1Rev1]').val();
    var c1Inc1 = $('input[name=c1Inc1]').val();
    var c1Rev2 = $('input[name=c1Rev2]').val();
    var c1Inc2 = $('input[name=c1Inc2]').val();
    var c2Rev1 = $('input[name=c2Rev1]').val();
    var c2Inc1 = $('input[name=c2Inc1]').val();
    var c2Rev2 = $('input[name=c2Rev2]').val();
    var c2Inc2 = $('input[name=c2Inc2]').val();

    var totalIncome = c1Inc1 * 1 + c1Inc2 * 1 + c2Inc1 * 1 + c2Inc2 * 1;
    var qualIncome = c1Inc2 * 1 + c2Inc1 * 1;
    var nonQualIncome = c1Inc1 * 1 + c2Inc2 * 1;

    var totalRevenue = c1Rev1 * 1 + c1Rev2 * 1 + c2Rev1 * 1 + c2Rev2 * 1;
    var qualRevenue = c1Rev2 * 1 + c2Rev1 * 1;
    var nonQualRevenue = c1Rev1 * 1 + c2Rev2 * 1;

    var tax = 0;
    var text = '';

    if ((nonQualRevenue / totalRevenue) * 100 >= 5) {
      tax = taxCalculator(0, totalIncome);
      text =
        '<span id="optionADetailsText"><h4 class="section-subheading" style="color:red">QFZP status not met. De Minimis criteria failed; Non Qualifying revenue >= 5% Total Revenue </h4></span>';
      console.log('loop 1');
    } else if (nonQualRevenue >= 5000000) {
      tax = taxCalculator(0, totalIncome);
      text =
        '<span id="optionADetailsText"><h4 class="section-subheading" style="color:red">QFZP status not met. De Minimis criteria failed; Non Qualifying revenue >= AED 5,000,000 </h4></span>';
      console.log('loop 2');
    } else {
      tax = taxCalculator(0, nonQualIncome);
      text =
        '<span id="optionADetailsText"><h4 class="section-subheading" style="color:green">QFZP status met. Tax based on Qualifying and Non-Qualifying Income </h4></span>';
      console.log('loop 3');
    }

    console.log(c1Inc1, c1Inc2, c2Inc1, c2Inc2);
    console.log(c1Rev1, c1Rev2, c2Rev1, c2Rev2);

    console.log(nonQualRevenue, totalRevenue);
    console.log(totalIncome);
    console.log(qualIncome);
    console.log(tax);

    // -------------- START HERE... value to add. then check de minim. and then show results. -----------------
    // alert('in here for tax calcualtion');
    $('#calculatedTaxOptionA').text('AED ' + tax);
    $('#optionADetails').removeClass('invisible');
    $('#optionADetailsText').replaceWith(text);
    $('#optionADetails').slideDown();
    $('html, body').scrollTop($('#optionADetails').offset().top);
  }
  // var inputIncome = $('input[name=incomeOptionDName]').val();
  // var tax = taxCalculator(0, inputIncome);
});

function taxCalculator(qualIncome, nonQualIncome) {
  var tax = (nonQualIncome - 375000) * 0.09;
  return Math.max(0, tax);
}

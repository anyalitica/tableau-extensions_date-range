tableau.extensions.initializeAsync().then(() => {
  // console.log('I have been initialized!!')
  let dashboard = tableau.extensions.dashboardContent.dashboard;
  let selectedWorksheet = dashboard.worksheets.find(w => w.name === 'Historical Trend');
  let fieldName = 'Date';
  updateFilterRange(selectedWorksheet, fieldName);
});

  function updateFilterRange(worksheet, fieldName) {
    let today = new Date();
    let lastYear = new Date();
    lastYear.setFullYear(today.getFullYear()-1);
    worksheet.applyRangeFilterAsync(fieldName, { min: lastYear, max: today});
  }
$(() => {
  console.log('JS Loaded');

  $('#addCrate').on('click', () => {
    let index = 1;
    $('#crateContainer').prepend(
      `<div>
        <input type="number" name="cd_x_${index}" id="cd_x_${index}" placeholder="x" required>
        <input type="number" name="cd_y_${index}" id="cd_y_${index}" placeholder="y" required>
        <input type="number" name="cd_amount_${index}" id="cd_amount_${index}" placeholder="n" required>
      </div>`
    );
    index += 1;
  });
});

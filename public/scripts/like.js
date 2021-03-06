$(() => {
  $('#cardModal .fa-thumbs-up').on('click', function(event) {
    event.preventDefault();
    var urlid = $('#cardModal .post-meta').data('id');
    $.ajax({
      method: 'post',
      url: '/likes',
      data: {
        urlid: urlid
      }
    }).done(function(like) {
      $('div[data-id=' + urlid + ']').data('likes', like[0].count);
      $('#cardModal .like-count').text(like[0].count);
    })
  });

})
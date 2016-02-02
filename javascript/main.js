$(document).ready(function() {
  $.getJSON('https://cdn.rawgit.com/femug/femug/20160202/femug-list.json', function (data) {
    var femugs = data.femug;
    var markup_femugs = [];

    $.each(femugs, function(key, femug) {
      var newChapter = '';
      newChapter += '<li>';
      newChapter += '  <h3 class="name">'+ key +'</h3>';
      newChapter += '  <h4 class="location">'+ femug[0].sede +'</h4>';
      newChapter += '  <label>Fundador(a)</label>:';
      newChapter += '  <p class="founder">'+ femug[0].fundador +'</p>';
      newChapter += '  <label>Moderadores(as)</label>:';
      newChapter += '  <p class="moderators">';
      newChapter += '    <ul>';

      $.each(femug[0].moderadores, function(key, moderador){
        newChapter += '      <li>'+ moderador +'</li>';
      });

      newChapter += '    </ul>';
      newChapter += '  </p>';
      newChapter += '  <label>URL:</label>';
      newChapter += '  <p class="url"><a href="'+ femug[0].url +'" target="_blank">'+ femug[0].url +'</a></p>';
      newChapter += '</li>';
      markup_femugs.push(newChapter);
    });

    $.each(markup_femugs, function(key, chapter) {
      $('#femugs').append(chapter);
    });
  });
});
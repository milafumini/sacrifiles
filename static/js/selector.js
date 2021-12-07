$( document ).ready(function() {
  $.getJSON('data/prin.json',function(imageIndex){   
    //getButtons(indexOfTablets); 
    getImages(imageIndex);
    })
})

function getImages(imageIndex) {
  $('#sacribible').empty()
  $('#sacrirel').empty()
  $('#sacripol').empty()
  $('#sacrieu').empty()
  $('#sacriself').empty()
//  $("[id*='sacri']").append('<div class="card-deck"><div class="row"></div></div>')
  sacribible = []
  sacrirel = []
  sacripol = []
  sacrieu = []
  sacriself = []
  $.each(imageIndex, function(idx, dictimg) {
    if (dictimg['topic1'] == 'sacribible') {
      var card = `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card border-0 document-card-size">
          <div class="card-body text-center">
          <img class="card-img-top img-responsive" src="https://drive.google.com/uc?export=view&id=${dictimg['link']}" alt="Card image cap">
          <h5 class="card-title">${dictimg['author']}; <i>${dictimg['title']}</i>; ${dictimg['year']}</h5>
          <p class="card-text">Source: ${dictimg['source']}; Location: ${dictimg['location']}</p>
        <p class="card-text">Keywords: <b>${dictimg['kword1']} ${dictimg['kword2']} ${dictimg['kword3']} ${dictimg['kword4']} ${dictimg['kword5']}</b></p></div></div>
        </div>
      </div>`
      sacribible.push(card) }
    else if (dictimg['topic1'] == 'sacrirel') {
        var card = `
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card border-0 document-card-size">
            <div class="card-body text-center">
            <img class="card-img-top img-responsive"  src="https://drive.google.com/uc?export=view&id=${dictimg['link']}" alt="Card image cap">
            <h5 class="card-title">${dictimg['author']}; <i>${dictimg['title']}</i>; ${dictimg['year']}</h5>
            <p class="card-text">Source: ${dictimg['source']}; Location: ${dictimg['location']}</p>
          <p class="card-text">Keywords: <b>${dictimg['kword1']} ${dictimg['kword2']} ${dictimg['kword3']} ${dictimg['kword4']} ${dictimg['kword5']}</b></p></div> </div>
        </div>`
        sacrirel.push(card)
      }
    else if (dictimg['topic1'] == 'sacripol') {
      var card = `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card border-0 document-card-size">
          <div class="card-body text-center">
          <img class="card-img-top img-responsive"  src="https://drive.google.com/uc?export=view&id=${dictimg['link']}" alt="Card image cap">
          <h5 class="card-title">${dictimg['author']}; <i>${dictimg['title']}</i>; ${dictimg['year']}</h5>
          <p class="card-text">Source: ${dictimg['source']}; Location: ${dictimg['location']}</p>
        <p class="card-text">Keywords: <b>${dictimg['kword1']} ${dictimg['kword2']} ${dictimg['kword3']} ${dictimg['kword4']} ${dictimg['kword5']}</b></p></div></div>
      </div>`
      sacripol.push(card)
    }
    else if (dictimg['topic1'] == 'sacrieu') {
      var card = `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card border-0 document-card-size">
          <div class="card-body text-center">
          <img class="card-img-top img-responsive"  src="https://drive.google.com/uc?export=view&id=${dictimg['link']}" alt="Card image cap">
          <h5 class="card-title">${dictimg['author']}; ${dictimg['title']}; ${dictimg['year']}</h5>
          <p class="card-text">Source: ${dictimg['source']}; Location: ${dictimg['location']}</p>
        <p class="card-text">Keywords: ${dictimg['kword1']} ${dictimg['kword2']} ${dictimg['kword3']} ${dictimg['kword4']} ${dictimg['kword5']}</p></div>
        </div>
      </div>`
      sacrieu.push(card)
    }
    else if (dictimg['topic1'] == 'sacriself') {
      var card = `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card border-0 document-card-size">
          <div class="card-body text-center">
          <img class="card-img-top img-responsive"  src="https://drive.google.com/uc?export=view&id=${dictimg['link']}" alt="Card image cap">
          <h5 class="card-title">${dictimg['author']}; <i>${dictimg['title']}</i>; ${dictimg['year']}</h5>
          <p class="card-text">Source: ${dictimg['source']}; Location: ${dictimg['location']}</p>
        <p class="card-text">Keywords: <b>${dictimg['kword1']} ${dictimg['kword2']} ${dictimg['kword3']} ${dictimg['kword4']} ${dictimg['kword5']}</b></p></div>
        </div>
      </div>`
      sacriself.push(card)
    }
    })
    console.log(sacriself)
    $('#sacribible').append(sacribible.join(''))
    $('#sacrirel').append(sacrirel.join('')) 
    $('#sacripol').append(sacripol.join('')) 
    $('#sacrieu').append(sacrieu.join('')) 
    $('#sacriself').append(sacriself.join('')) 
  };
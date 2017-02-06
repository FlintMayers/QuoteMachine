
$(function($){
  $( '#get-another-quote-button' ).on( 'click', function ( e ) {
  e.preventDefault();
  $.ajax({
          url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
          dataType: "jsonp",
          jsonpCallback: 'mycallback',
          success: function(data) {
            var post = data.shift(); // The data is an array of posts. Grab the first one.
            $('#quote-title').text('- ' + post.title );
            $('#quote-content').html( post.content );

            //if the Source is available, use it. Otherwise hide it.
            if ( typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined' ) {
              $( '#quote-source' ).html( 'Source:' + post.custom_meta.Source );
            } else {
              $( '#quote-source' ).text( '' );
            }
            },
          cache: false
      });
  });
});


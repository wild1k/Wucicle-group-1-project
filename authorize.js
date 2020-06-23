$( document ).ready(function() {
    console.log( "authorize.js ready!" );
    console.log('version 7');
    // *************** REPLACE THESE VALUES! *************************
    let client_id = 'ca33dab712d4487ebec8e254f4f9362f';
    // Use the following site to convert your regular url to the encoded version: 
    // https://www.url-encode-decode.com/
    let redirect_uri = 'https://wild1k.github.io/Wusicle-group-1-project/';
    // *************** END *************************
    const redirect = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;
    console.log(`redirect url: ${redirect}`);
    window.location.replace(redirect);
  });
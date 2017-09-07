class ApiAdapter {
  constructor () {
    this.url = "http://pokeapi.co/api/v2";
  }

  sendRequest(uri, callback) {
    const request = new XMLHttpRequest();
    let requestUrl;

    if (uri.match(/pokeapi/)) {
      requestUrl = uri;
    } else {
      requestUrl = this.url + uri;
    }

    request.addEventListener("load", callback);
    request.open("GET", requestUrl);
    request.send();
  }
}

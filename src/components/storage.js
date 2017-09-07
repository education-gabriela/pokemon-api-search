class Storage {
  
  static jsonDecode (json) {
    return JSON.parse(json);
  }

  static jsonEncode (object) {
    return JSON.stringfy(object);
  }
}

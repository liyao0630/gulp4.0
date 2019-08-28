var payParams = []
var attr = 'responseCode=A001&tn=timeStamp%3D1565074465%26nonceStr%3D9470b3abcabf48528e23ffcc727d1757%26prepay_id%3Dwx0614542593984136d67aa7741132081300%26wxAppId%3Dwx19da896805a87094%26paySign%3DoJt0yPZHfcyh2rw6q9IZjN%2B%2Ft2ziko%2Baj5YK%2BoUysSpVJYgzrrLXWgr4o7qXsYWrhRAUBxWf9pG2Hi%2Fqe3nmDMH0fybzhkrqB1EdiQZXifz9a8uNIv6xGAn%2FuEezx1XSStn8U22dSTZPklWvgl2xWvWMEr%2BESK4V62bBTAtN75wG6p5xVfm1i%2Ftm8mKw1RKKGUXokWkTWx2WXBnATrWj7NufCJoFM9e78Ogv%2FqOg09f%2FlbByS9VILC%2FSKpe8OC661z5sPXp9Qcnn%2Boe0bYUhzzg5%2F%2BHI11m3EhGB5vNajB0v2wZqs3tVcY2XmEOSD79839uuTWW6wI%2BF3rF5mJFhfA%3D%3D%26signType%3DRSA&appId=1470915137728253&mhtOrderNo=130100oS54fts8m01561540735949024&signType=MD5&mhtSubMchId=000000000510191&nowPayOrderNo=200417201908061454250456983&responseMsg=E000%23%E6%88%90%E5%8A%9F%5B%E6%88%90%E5%8A%9F%5D&funcode=WP001&responseTime=20190806145426&version=1.0.0'
// &signature=eb886321722086bffecfa6cda60465c1
var attr = utils.toDictionary(attr)

console.log(attr)
var ksort = utils.ksort(attr)
console.log(ksort)

var queryStr = utils.toQueryStr(attr, ksort)
console.log(queryStr + '&d6e67f9aa07c4cd6ab4b809d5589d303')


// eb886321722086bffecfa6cda60465c1 resSignature
// 670c53f7fe5f0d76178b290cee399670 signature


var obj = {
  "responseCode": "A001",
  "tn": "timeStamp%3D1565078347%26nonceStr%3D53abb974b9bb4164931658251ac4bda7%26prepay_id%3Dwx0615590759822899da8a00751850933300%26wxAppId%3Dwx19da896805a87094%26paySign%3DC1I9WuNChCP4i8HBjbvoviEVyzofrADAcd4ZEk3xWzlch58GekIIojNBIn4cZvTfifAlcCtNxYHXRWcoik%2B28XthEDlotcICgEBzLecHLbwPKzkGGK3mvFHDBuQeEu306Tk5n3Gyue9CcVar3OyGLBrtC8BrgGSMPpxJEJ8O54JBup1qEyhAqcPkohlOwgTX%2BpNp9OdpjOpzV2Jp4IZblQKt3aiSsaJ%2BFOefw6JLGIojD95qDovSRng8PYAiAEjliAi0tWEd3fFIARA9TWUzRjxtGXxDTUoEkN%2BOdYLecQK9COYR8j1C1S6rjm%2FCpizO%2FPr9tcM7gLYNoJcAokALiw%3D%3D%26signType%3DRSA", "appId": "1470915137728253",
  "mhtOrderNo": "130100oS54fts8m01561540735949029",
  "signType": "MD5",
  "mhtSubMchId": "000000000510191",
  "nowPayOrderNo": "200417201908061559060462572",
  "responseMsg": "E000%23%E6%88%90%E5%8A%9F%5B%E6%88%90%E5%8A%9F%5D",
  "funcode": "WP001",
  "signature": "d379ccbf8285ca5d4378149a4a2b97ee",
  "responseTime": "20190806155907",
  "version": "1.0.0",
  "wechatInfo": {
    "timeStamp": "1565078347",
    "nonceStr": "53abb974b9bb4164931658251ac4bda7",
    "prepay_id": "wx0615590759822899da8a00751850933300",
    "wxAppId": "wx19da896805a87094",
    "paySign": "C1I9WuNChCP4i8HBjbvoviEVyzofrADAcd4ZEk3xWzlch58GekIIojNBIn4cZvTfifAlcCtNxYHXRWcoik+28XthEDlotcICgEBzLecHLbwPKzkGGK3mvFHDBuQeEu306Tk5n3Gyue9CcVar3OyGLBrtC8BrgGSMPpxJEJ8O54JBup1qEyhAqcPkohlOwgTX+pNp9OdpjOpzV2Jp4IZblQKt3aiSsaJ+FOefw6JLGIojD95qDovSRng8PYAiAEjliAi0tWEd3fFIARA9TWUzRjxtGXxDTUoEkN+OdYLecQK9COYR8j1C1S6rjm/CpizO/Pr9tcM7gLYNoJcAokALiw==",
    "signType": "RSA"
  }
}


var obj2 = { "appId": "wx19da896805a87094", "timeStamp": "1565078701", "nonceStr": "28d8408806ef452697f1ce9c58eb17ed", "package": "prepay_id=wx06160501790506c69fbcd7df1000621000", "signType": "RSA", "paySign": "h0SXJEX/PGV2wypdScbIkCN+IVOZOAcvPtncEDoLRBFhnYT1lOojZm63Ul1YedcsgdmWNoY8OBl8vNgsxu7/6kg2uCEFAxM7m0XL+sw/CYsBs2bK8OA8TjSI0Iehj1e0qdBQzrTpW3G4YYcSV5b2YzIPGBJCHewUURDharsbP7NehsY3zCrQ5Wtb7iSAtwjiB6TVYmGlqmUlZ/ExjP5WhmGN+CrmrIQIML0fZCW2HHguqYxZ3elb7O29rQhMhGn2qc8M4U76MUD/5fgS9F38cq5AOpLL/hz1aYH6LpPw9iBLKWZUITnx1rg316RGENqwpQg7TLRV7q1S8RCKyUnuww==" }


let test = true;
let tes1 = false;

for (let i = 0; i < 10; i++) {
  if (test) {
    console.log(1);
  }
}

for (let i = 0; i < 10; i++) {
  if (!tes1) {
    console.log(1);
  }
}
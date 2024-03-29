import React from 'react'

function Map(props) {
  const university = props.uniDirection
  switch (university) {
    case null:
      return (
        <iframe style={{ width: '100%', height: '100%' }}
          title='yurt konum'
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25522.435255749948!2d29.023879598697892!3d40.9979820808235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9a5f7c74781%3A0xdbab49e3abd7bc62!2zw5Z6ZWwgTWFybWFyYSBZw7xrc2Vrw7bEn3JlbmltIEvEsXogw5bEn3JlbmNpIFl1cmR1!5e0!3m2!1str!2str!4v1692700403302!5m2!1str!2str">
        </iframe>
      )
    case 1:
      return ( //MARMARA UNI
        <iframe style={{ height: '100%', width: '100%' }}
          title='Marmara üniversitesi yol tarifi'
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d6023.3237364923725!2d29.03503782788914!3d40.98888441574456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x14cab86f2961c595%3A0x2f3544d0c2d1b87b!2zSGFsaXRhxJ9hIENkLiBObzoyMywgT3NtYW5hxJ9hLCAzNDcxNCBLYWTEsWvDtnkvxLBzdGFuYnVs!3m2!1d40.9918895!2d29.0287263!4m5!1s0x14cac78dac1ac9a3%3A0xbd47329deac1fedf!2zRcSfaXRpbSwgTWFybWFyYSDDnG52LiBHw7Z6dGVwZSBZZXJsZcWfa2VzaSwgRmFocmV0dGluIEtlcmltIEfDtmtheSBDZC4sIDM0NzIyIEthZMSxa8O2eS_EsHN0YW5idWw!3m2!1d40.9852209!2d29.052657399999998!5e0!3m2!1str!2str!4v1668003420367!5m2!1str!2str"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>

      )
    case 2:
      return ( //USKUDAR
        <iframe style={{ height: '100%', width: '100%' }}
          title='Üsküdar üniversitesi yol tarifi'
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24086.106400994217!2d29.015198627658087!3d41.008553709858305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x14cab86f2bbd4cb9%3A0x7ab3e4bbaf49e753!2zT3NtYW5hxJ9hLCBLxLF2YW7DpyBTay4gTm86MSwgMzQ3MTQgS2FkxLFrw7Z5L8Swc3RhbmJ1bA!3m2!1d40.991901399999996!2d29.0287617!4m5!1s0x14cab7e4b9b96af1%3A0x78ef20ea9ab0de2a!2zQWx0dW5pemFkZSwgw5xza8O8ZGFyIMOcbml2ZXJzaXRlc2kgTWVya2V6IFllcmxlxZ9rZSwgSGFsdWsgVMO8cmtzb3kgU29rLiBObzoxNCwgMzQ2NjIgw5xza8O8ZGFyL8Swc3RhbmJ1bA!3m2!1d41.0249642!2d29.0388277!5e0!3m2!1str!2str!4v1668785219770!5m2!1str!2str"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      )
    case 0:
      return ( // ACIBADEM
        <iframe style={{ height: '100%', width: '100%' }}
          title='Acıbadem üniversitesi yol tarifi'
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24092.51969950877!2d29.05038387763334!3d40.99100601859528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x14cab86f2bbd4cb9%3A0x7ab3e4bbaf49e753!2zT3NtYW5hxJ9hLCBLxLF2YW7DpyBTay4gTm86MSwgMzQ3MTQgS2FkxLFrw7Z5L8Swc3RhbmJ1bA!3m2!1d40.991901399999996!2d29.0287617!4m5!1s0x14cac5f628de91b5%3A0x40c99806cc2dff20!2zxLDDp2VyZW5rw7Z5LCBBY8SxYmFkZW0gw5xuaXZlcnNpdGVzaSwgS2F5xLHFn2RhxJ_EsSBDYWRkZXNpLCBBdGHFn2VoaXIvxLBzdGFuYnVs!3m2!1d40.978446999999996!2d29.110259499999998!5e0!3m2!1str!2str!4v1668792457534!5m2!1str!2str"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      )
    case 3:
      return ( // YEDITEPE
        <iframe style={{ height: '100%', width: '100%' }}
          title='Yeditepe üniversitesi yol tarifi'
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48190.98848681053!2d29.053381631696997!3d40.98286514644396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x14cab86f2bbd4cb9%3A0x7ab3e4bbaf49e753!2zT3NtYW5hxJ9hLCBLxLF2YW7DpyBTay4gTm86MSwgMzQ3MTQgS2FkxLFrw7Z5L8Swc3RhbmJ1bA!3m2!1d40.991901399999996!2d29.0287617!4m5!1s0x14cac5efbd78551d%3A0x2dac4ac9e6f7c925!2zS2F5xLHFn2RhxJ_EsSwgWWVkaXRlcGUgw5xuaXZlcnNpdGVzaSwgxLBuw7Zuw7wgTWFoYWxsZXNpLCBLYXnEscWfZGHEn8SxIENkLiwgMzQ3NTUgQXRhxZ9laGlyL8Swc3RhbmJ1bA!3m2!1d40.9719767!2d29.1522123!5e0!3m2!1str!2str!4v1668792379182!5m2!1str!2str"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      )
    case 4:
      return ( //MALTEPE UNIVERSITY
        <iframe style={{ height: '100%', width: '100%' }}
          title='Maltepe üniversitesi yol tarifi'
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48203.215622557094!2d29.071227431601745!3d40.96612906332182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x14cab86f2bbd4cb9%3A0x7ab3e4bbaf49e753!2zT3NtYW5hxJ9hLCBLxLF2YW7DpyBTay4gTm86MSwgMzQ3MTQgS2FkxLFrw7Z5L8Swc3RhbmJ1bA!3m2!1d40.991901399999996!2d29.0287617!4m5!1s0x14cac57148eda11b%3A0x5cd0a708a2cca96c!2zQsO8ecO8a2Jha2thbGvDtnksIE1hbHRlcGUgw5xuaXZlcnNpdGVzaSwgTWFsdGVwZSDDnG52LiBNYXJtYXJhIEXEn2l0aW0gS8O2ecO8LCAzNDg1NyBNYWx0ZXBlL8Swc3RhbmJ1bA!3m2!1d40.9609489!2d29.190439899999998!5e0!3m2!1str!2str!4v1668792706260!5m2!1str!2str"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      )
    case 5:
      return ( // BAHCESEHİR
        <iframe style={{ height: '100%', width: '100%' }}
          title='Bahçeşehir üniversitesi yol tarifi'
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d36082.75728982885!2d28.995000573815076!3d41.01882458725815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x14cab86f2bbd4cb9%3A0x7ab3e4bbaf49e753!2zT3NtYW5hxJ9hLCBLxLF2YW7DpyBTay4gTm86MSwgMzQ3MTQgS2FkxLFrw7Z5L8Swc3RhbmJ1bA!3m2!1d40.991901399999996!2d29.0287617!4m5!1s0x14cab7a2a2c3b963%3A0x7671d1b9817b8519!2zWcSxbGTEsXosIEJhaMOnZcWfZWhpciDDnG5pdmVyc2l0ZXNpLCDDh8SxcmHEn2FuIENkLiwgMzQzNDkgQmXFn2lrdGHFny_EsHN0YW5idWw!3m2!1d41.042165!2d29.009259099999998!5e0!3m2!1str!2str!4v1668951899469!5m2!1str!2str"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      )
    case 6:
      return ( //29 MAYIS UNI
        <iframe style={{ height: '100%', width: '100%' }}
          title='29 mayıs üniversitesi yol tarifi'
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24086.60228905171!2d29.046666877656175!3d41.007197110533845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x14cab86f2bbd4cb9%3A0x7ab3e4bbaf49e753!2zT3NtYW5hxJ9hLCBLxLF2YW7DpyBTay4gTm86MSwgMzQ3MTQgS2FkxLFrw7Z5L8Swc3RhbmJ1bA!3m2!1d40.991901399999996!2d29.0287617!4m5!1s0x14cac9c27feb2487%3A0xe3d6a3f3c0d3d672!2zxLBzdGFuYnVsIDI5IE1hecSxcyDDnG5pdmVyc2l0ZXNpIEVsbWFsxLFrZW50IFllcmxlxZ9rZXNpLCBFbG1hbMSxa2VudCBNYWguIEVsbWFsxLFrZW50IENhZC4gTm86NCwgMzQ3NjQgw5xtcmFuaXllL8Swc3RhbmJ1bA!3m2!1d41.030921899999996!2d29.0989667!5e0!3m2!1str!2str!4v1668952109134!5m2!1str!2str"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      )
    case 7:
      return ( //FBU
        <iframe style={{ height: '100%', width: '100%' }}
          title='Fenerbahçe üniversitesi yol tarifi'
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48185.13362672638!2d29.035576459983844!3d40.990877085549215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x14cab86f2bbd4cb9%3A0x7ab3e4bbaf49e753!2zS8SxdmFuw6cgU2suIE5vOjEsIE9zbWFuYcSfYSwgMzQ3MTQgS2FkxLFrw7Z5L8Swc3RhbmJ1bA!3m2!1d40.991901399999996!2d29.0287617!4m5!1s0x14cac945f68fe1fd%3A0x23112f2256fb1664!2zRmVuZXJiYWjDp2Ugw5xuaXZlcnNpdGVzaSwgQXRhdMO8cmsgTWFoIE1ldHJvcG9sIMSwc3RhbmJ1bCwgQXRhxZ9laGlyIEJsdi4sIDM0NzU4IEF0YcWfZWhpci_EsHN0YW5idWw!3m2!1d40.9941941!2d29.121060999999997!5e0!3m2!1str!2str!4v1692119987599!5m2!1str!2str"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      )
  }<iframe src=""></iframe>




}
export default Map
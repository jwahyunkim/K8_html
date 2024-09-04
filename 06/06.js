document.addEventListener('DOMContentLoaded', () => {
  //  이미지 가져오기
  const imgs = document.querySelectorAll('.msg > img')
  /// 버튼 가져오기
  const bts = document.querySelectorAll('.secDice > button')
  /// 결과 가져오기
  const msg = document.querySelector('.box-section > h3')
  console.log(msg);

  ///버튼 클릭
  for (let bt of bts) {
    console.log(bt);
    bt.addEventListener('click', () => {
      //컴퓨터 랜덤수
      let comN = Math.floor(Math.random() * 6) + 1;//1~6
      //사용자 선택수
      console.log(bt.textContent.charAt(0))
      let userN = parseInt(bt.textContent.charAt(0));

      /// 컴퓨터 주사위 이미지 변경
      imgs[0].setAttribute('src', `../img/${comN}.png`);
      imgs[0].setAttribute('alt', `${comN}`);

      // 사용자가 선택한 주사위 이미지 변경 (옵션)
      imgs[1].setAttribute('src', `../img/${userN}.png`);
      imgs[1].setAttribute('alt', `${userN}`);

      //결과 출력
      if (comN ===userN){
        msg.textContent='맞음';
      }
      else{
        msg.textContent='틀림';
      }

    });
  }

});


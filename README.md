# Colavo_assignment

# 앱 실행 화면
[![이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FdIyPv4%2FbtqBHyVe7ck%2FM3U44K039y0JKAObbtoQw1%2Fimg.png)](https://youtu.be/fJonFg5I_kE)
<https://youtu.be/fJonFg5I_kE>

# 설치 방법
```sh
npm install
```

# 수행 정도

- item, discount는 각각 장바구니로 추가/삭제 가능 => 완료

- 동일한 아이템을 장바구니로 담을 수 없음 => 완료

- item의 수량 선택 가능 eg. item x 3=> 완료

- discount의 할인 대상 item을 선택하지 않으면 장바구니에 담긴 모든 item을 할인 적용 => 부분 완료

- discount의 할인 대상 item을 선택한 경우 선택한 항목만 할인 적용 => 부분 완료

- 장바구니에 담긴 내용이 변경될 때 마다 사용자에게 최종 금액을 표시 => 완료

- 최종 금액은 currency_code에 따라 표시 => 원으로만 표시
  USD: $13.40
  KRW: 30000원

몇가지 버그와 미완성인 부분이 있습니다.

시술 창으로 들어가서 숫자 선택 한 후 다시 시술 창을 열어서 숫자를 선택할 경우 바스켓 페이지의 숫자가 바뀌지 않음 가격은 변동함 
할인에서 아이템 선택시 체크박스 사용하지 않아서 선택이 되었는지 안 되었는지 모름
할인 아이템을 먼저 고르고 난뒤에 시술 아이템을 고를 경우 추가된 부분에 한해서 할인 적용이 안됨

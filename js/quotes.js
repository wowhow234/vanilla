const quotes = [
  {
    quote:
      "게으름 피울 수 있을 만큼 똑똑하지 못한 것을 포부가 높기 때문이라고 변명할 수 없다.",
    author: "영화배우 에드가 버겐",
  },
  {
    quote: "게으름은 피곤하기 전에 쉬는 습관일 뿐",
    author: "쥘 르나르",
  },
  {
    quote: "성공한 사람이 아니라 가치있는 사람이 되기 위해 힘쓰라",
    author: "알버트 아인슈타인",
  },
  {
    quote: "나약한 태도는 성격도 나약하게 만든다.",
    author: "알버트 아인슈타인",
  },
  {
    quote:
      "인생은 같은 얘기를 또 듣는 것과 같이 나른한 사람의 흐릿한 귀를 거슬리게 한다.",
    author: "윌리엄 셰익스피어",
  },
  {
    quote: "시간은 인간이 쓸 수 있는 가장 값진 것이다.",
    author: "테오프라스토스",
  },
  {
    quote: "시간 엄수는 비즈니스의 영혼이다.",
    author: "토마스 할리버튼",
  },
  {
    quote: "미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
    author: "미국 컴퓨터 과학자 알랜 케이",
  },
  {
    quote: "미래는 현재 우리가 무엇을 하는가에 달려 있다",
    author: "마하트마 간디",
  },
  {
    quote:
      "시간을 도구로 사용할 뿐, 시간에 의존해서는 안된다. (시간이 모든 것을 해결해 줄 것이라 기대하지 말고, 시간을 주도하라.)",
    author: "존 F.케네디",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

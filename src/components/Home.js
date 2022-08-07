import styled from 'styled-components'
import pro from '../components/hero.jpg'
import '../components/Home.css'


const Section = styled.section`
    /* height: 80vh;
    max-width: 1100px;
    margin: 0 auto; */
    height: 100vh;
    width: 100%;
    display: flex;  
    /* padding: 20px; */

    @media (max-width: 786px) {
      flex-direction: column;
      height: 100vh;
    }
`
const Right = styled.div`
    width: 40%;
    height: 100%;
    z-index: 5;
    
    @media (max-width: 786px) {
      width: 100%;
    }
`
const Left = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    z-index: 3;
    /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1104%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(37%2c 17%2c 112%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsSymbol1111' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1111' x='720' y='0'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1104'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1110'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1109'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1105'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1106'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1107'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1108'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1111'%3e%3cuse xlink:href='%23SvgjsPath1105' x='30' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='30' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='30' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='30' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='30' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='30' y='330' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='30' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='30' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='30' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='30' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='90' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='90' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='90' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='90' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='90' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='90' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='90' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='90' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='90' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='90' y='570' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='150' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='150' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='150' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='150' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='150' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='150' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='150' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='150' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='150' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='150' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='210' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='210' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='210' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='210' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='210' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='210' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='210' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='210' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='210' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='210' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='270' y='30' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='270' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='270' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='270' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='270' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='270' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='270' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='270' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='270' y='510' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='270' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='330' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='330' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='330' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='330' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='330' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='330' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='330' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='330' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='330' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='330' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='390' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='390' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='390' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='390' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='390' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='390' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='390' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='390' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='390' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='390' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='450' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='450' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='450' y='150' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='450' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1108' x='450' y='270' stroke='%231c538e' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='450' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='450' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='450' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='450' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='450' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='510' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='510' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='510' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='510' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='510' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='510' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='510' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='510' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='510' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='510' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='570' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='570' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='570' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='570' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='570' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='570' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='570' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='570' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='570' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='570' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='630' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='630' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='630' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='630' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1110' x='630' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='630' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='630' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='630' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='630' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='630' y='570' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='690' y='30' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='690' y='90' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1107' x='690' y='150' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='690' y='210' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='690' y='270' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='690' y='330' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='690' y='390' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1105' x='690' y='450' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1106' x='690' y='510' stroke='%231c538e'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1109' x='690' y='570' stroke='%231c538e'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e"); */

    @media (max-width: 786px) {
      width: 100%;
      height: 100%;
      background-color:#000;
    }
`

const Hero = styled.h1`
    position: relative;
    color: #fff;
    text-transform: capitalize;
    font-size: 40px;
    letter-spacing: 30px;
    padding: 30px;
    overflow: hidden;
    &::before,
    &::after{
        position: absolute;
        content: attr(data-text);
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        overflow: hidden;
        color: #fff;
        padding: 30px;
        background-color: #000;

    }
    &::before{
        left: 3px;
        text-shadow: -4px 0 #bc2a8d;
        animation: glitch-1 2s 0s linear reverse infinite;
    }
    &::after{
        left: -3px;
        text-shadow: -4px 0 #0d6efd;
        animation: glitch-2 2s 0s linear reverse infinite;
    }
    @media (max-width: 786px) {
      font-size: 150%;
      overflow: hidden;
      letter-spacing:5px;
    }
    @keyframes glitch-1 {
  0% {
    clip: rect(132px, auto, 101px, 30px);
  }
  5% {
    clip: rect(17px, auto, 94px, 30px);
  }
  10% {
    clip: rect(40px, auto, 66px, 30px);
  }
  15% {
    clip: rect(87px, auto, 82px, 30px);
  }
  20% {
    clip: rect(137px, auto, 61px, 30px);
  }
  25% {
    clip: rect(34px, auto, 14px, 30px);
  }
  30% {
    clip: rect(133px, auto, 74px, 30px);
  }
  35% {
    clip: rect(76px, auto, 107px, 30px);
  }
  40% {
    clip: rect(59px, auto, 130px, 30px);
  }
  45% {
    clip: rect(29px, auto, 84px, 30px);
  }
  50% {
    clip: rect(22px, auto, 67px, 30px);
  }
  55% {
    clip: rect(67px, auto, 62px, 30px);
  }
  60% {
    clip: rect(10px, auto, 105px, 30px);
  }
  65% {
    clip: rect(78px, auto, 115px, 30px);
  }
  70% {
    clip: rect(105px, auto, 13px, 30px);
  }
  75% {
    clip: rect(15px, auto, 75px, 30px);
  }
  80% {
    clip: rect(66px, auto, 39px, 30px);
  }
  85% {
    clip: rect(133px, auto, 73px, 30px);
  }
  90% {
    clip: rect(36px, auto, 128px, 30px);
  }
  95% {
    clip: rect(68px, auto, 103px, 30px);
  }
  100% {
    clip: rect(14px, auto, 100px, 30px);
  }
}
@keyframes glitch-2 {
  0% {
    clip: rect(129px, auto, 36px, 30px);
  }
  5% {
    clip: rect(36px, auto, 4px, 30px);
  }
  10% {
    clip: rect(85px, auto, 66px, 30px);
  }
  15% {
    clip: rect(91px, auto, 91px, 30px);
  }
  20% {
    clip: rect(148px, auto, 138px, 30px);
  }
  25% {
    clip: rect(38px, auto, 122px, 30px);
  }
  30% {
    clip: rect(69px, auto, 54px, 30px);
  }
  35% {
    clip: rect(98px, auto, 71px, 30px);
  }
  40% {
    clip: rect(146px, auto, 34px, 30px);
  }
  45% {
    clip: rect(134px, auto, 43px, 30px);
  }
  50% {
    clip: rect(102px, auto, 80px, 30px);
  }
  55% {
    clip: rect(119px, auto, 44px, 30px);
  }
  60% {
    clip: rect(106px, auto, 99px, 30px);
  }
  65% {
    clip: rect(141px, auto, 74px, 30px);
  }
  70% {
    clip: rect(20px, auto, 78px, 30px);
  }
  75% {
    clip: rect(133px, auto, 79px, 30px);
  }
  80% {
    clip: rect(78px, auto, 52px, 30px);
  }
  85% {
    clip: rect(35px, auto, 39px, 30px);
  }
  90% {
    clip: rect(67px, auto, 70px, 30px);
  }
  95% {
    clip: rect(71px, auto, 103px, 30px);
  }
  100% {
    clip: rect(83px, auto, 40px, 30px);
  }
}
`

const Pos = styled.div`
    height: 200px;
    width: 300px;
    background-color: antiquewhite;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`

const Img_cont = styled.div`
  height: 100%;
  width: 100%;
`

const Icon_box = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  @media (max-width:786px){
    margin-top: 10px;
  }
`

const Home = () => {

    const insta={
      fontSize:"20px",
      cursor: "pointer",
      color: "#fff"
    }

    const git = {
      fontSize:"20px",
      cursor: "pointer",
      color: "#fff"
    }

    const lin = {
      fontSize:"20px",
      cursor: "pointer",
      color: "#fff"
    }

    return ( 
        <Section>
           <Left>
           <h1 style={{fontSize:"30px",letterSpacing:"5px"}}><span style={{color:"#e880f5",letterSpacing:"5px"}} className="hello">Hello,</span> I'm</h1>
            <Hero data-text="PONBASKAR">PONBASKAR</Hero>
          
            <div className="myroles">
                <div className="role">React developer</div>
                <div className="role">UI/UX designer</div>
                <div className="role">creative designer</div>
                <div className="role">content developer</div>
            </div>

            <Icon_box>
            <a href="https://www.instagram.com/iam_baskar_/" target={"_blank"} style={insta}><i className="fab fa-instagram"></i></a>
            <a href="https://github.com/iambaskar" target={"_blank"} style={git}><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/ponbaskar" target={"_blank"}style={lin}><i className="fab fa-linkedin"></i></a> 
            {/* <i className="fab fa-twitter" style={soc}></i> */}
            </Icon_box>
            
           </Left>

           <Right>
             <Img_cont>
                <img src={pro} alt="" style={{height:"100%",width:"100%",objectFit:"cover"}} />
             </Img_cont>
           </Right>
        </Section>
     );
}
 
export default Home;

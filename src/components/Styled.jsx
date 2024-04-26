import styled, { createGlobalStyle } from 'styled-components' 

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 
}

.he{
    background-color: white;
    //display: flex;
    //flex-direction: row;
    //justify-content: space-between
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    
}

.imglogo{
    //margin-left: 20px;
    //margin-bottom: 20px;
    //margin-top: 20px;
    max-width: 100%;
    height: auto;
}

.seche{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.divhe{
    align-items: center;
    display: flex;
    margin-right: 10px;
    padding-right: 10px;
    max-width: 100%;
    height: auto;
}

.imghe{
    margin-left: 10px;
}

@media (max-width: 768px) {
  .he {
    flex-direction: column;
  }

  .seclogo, .seche {
    width: 100%;
    margin-bottom: 20px;
  }

  .buttonhe {
    justify-content: center;
    width: 100%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .buttonhe {
    flex-direction: column;
  }

  .imghe {
    margin: 10px 0;
  }
}

.buttonhe{
    //align-items: center;
    //display: flex;
    //justify-content: space-between;
    //width: 163px;
    //height: 45px;
    width: 100%;
    height: auto;
    border-radius: 5px;
    background-color: #ffc72c;
    border: none;
    cursor: pointer;
    //padding-left: 10px;
    display: flex;
    align-items: center;
}

.seclogo{
    //margin-top: 10px;
    flex: 1;
}

.body{
    background-color: #FFC72C;
}

.bateu{
    //width: 530px;
    //height: 121px;
    //top: -100px;
    //left: 15px;
    font: Inter;
    //font-weight: 800;
    font-size: 2em;
    //line-height: 60.51px;
}

@media (max-width: 480px) {
    .bateu{
        font-size: 1em;
        order: 2;
    }
}

@media (max-width: 480px) {
    .secma {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

    .imgma{
        order: 1;
        width: 80%;
    }
}

.imgma{
    //width: 324.04px;
    //height: 300px;
    max-width: 100%;
    height: auto;
    top: -201px;
    left: -491px;
    margin-left: 20px;
    margin-top: 20px;
}

.secma{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 20px;
}



.bigmac{
    width: 118.57px;
    height: 100px;
    top: 158px;
    left: -181px;
    margin-right: 50px;
    margin-left: 50px;
}

.batata{
    width: 99px;
    height: 120px;
    top: 138px;
    left: 15px;
    margin-left: 50px;
    margin-right: 50px;
}

.sorvete{
    width: 72px;
    height: 110px;
    top: 138px;
    left: 191px;
    margin-left: 50px;
    margin-right: 50px;
}

.sec2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-items: center;
}


.secm2{
    background-color:#FEB706;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   padding: 20px;
}

@media (max-width: 480px) {
    .secm2{
        flex-direction: column;
        align-items: center;
    }
}

.promo{
    color: white;
    font: Roboto;
    font-weight: 700;
    font-size: 36px;
    line-height: 42.19px;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
   
}

.divimg{
    background-color: white;
    width: 281px;
    height: 350px;
    padding: 10px;
    //top: 501px;
    //left: -467px;
    border-radius: 20px;
    flex: 1 1 300px;
    margin: 10px;
    text-align: center;
}

.divimg img{
    max-width: 100%;
    height: auto;
}

.figimg{
    font: Roboto;
    font-weight: 700;
    font-size: 20px;
    //line-height: 23.44px;
    //padding-bottom: 30px
    margin-top: 10px;
}

.butimg{
background-color: #FEB706;
width: 162px;
height: 41px;
//top: 729px;
//left: -411px;
border-radius: 10px;
margin-top: 10px;
cursor: pointer;
}


footer{
    //height: 71px;
    //top: 896px;
    //left: -543px;
    //display: flex;
    //justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    background-color: #f2f2f2;
}

.divfoo{
    //display: flex;
    //flex-direction: row;
    //padding-top: 25px;
    //padding-left: 25px;
    flex: 1;
    text-align: center;
}

.fooimg{
    //width: 23.53;
    //height: 20px;
    max-width: 100%;
    height: auto;
    
}

.figfoo{
    font: Roboto;
    padding-left: 25px;
}

.app{
    //width: 129px;
    //height: 40px;
    padding-left: 10px;
    max-width: 100%;
    height: auto;
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
  }

  .divfoo, .divfoo2 {
    width: 100%;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
    .app{
        margin: 10px 0;
    }
}

.divfoo2{
//padding-top: 15px;
//padding-right: 25px;
flex: 1;
text-align: center;
}

`



import styled from "styled-components";

const Content = styled.div`
    height: 100vh;
    width: 80vw;
    margin: 0 auto;

    @media only screen and (max-width:600px) {
        width: 100%;
        height: 100%;
        padding: 30px;
    }

`
const Head = styled.h1`
    text-transform:capitalize;
    text-align: center;
    margin-top: 40px;
    word-spacing: 5px;
`

const Left = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    

`

const Dappa = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;

    @media only screen and (max-width:600px) {
        width: 100%;
        height: 100%;
        justify-content: space-between;
    }
    /* @media (max-width:786px) {
        width: 100%;
        height: 100%;
        justify-content: space-between;
    }
    @media (max-width:480px) {
        height: 100%;
        width: 100%;
        justify-content: space-between;
    } */

`
const Skills = styled.div`
    width: 400px;
    height: 60px;
    display: flex;
    justify-content:space-between;
    align-items:center;
   
    @media only screen and (max-width:600px) {
        width: 100%;
        height: 100%;
        margin-top: 40px;
    }

    /* @media (max-width:786px) {
        width: 100%;
        height: 100%;
        margin-top:40px;
    }
    @media (max-width:480px) {
        margin-top: 40px;
    } */
`




const Personal = styled.p`
    width: 100%;
    font-size: 18px;
    line-height: 30px;
    word-spacing: 5px;

    @media only screen and (max-width:600px) {
        font-size: 100%;
        width: 100%;
        margin-top: 40px;
    }
    /* @media (max-width:786px) {
        font-size: 100%;
        width: 100%;
        margin-top: 40px;
    }
    @media (max-width:480px) {
        font-size: 100%;
        width: 100%;
        word-spacing: 2px;
        margin-top: 40px;
    } */
`
const Span = styled.span`
    color: #e880f5;
`

const About = () => {
    return ( 
        <Content>
             <Head><Span>about</Span> me 😎</Head>
            <Left>
               <Dappa>
                <Personal>
                👋🏿 Hi, I'm Ponbaskar. Passionate React⚛️ developer from India.
                </Personal>
                <Personal>
                💬 Ask me about MERN, UI/UX.
                </Personal>
               <Personal>
                👨🏿‍💻 Full stack web developer, who focuses on writing clean, elegant and efficient code.
                </Personal>
                <Personal>
                🔥 UI/UX designer with a passion for designing beautiful and fuctional user experiences.
                </Personal>
                <Personal>
                💪🏿 I'm a Fitness Freak.
                </Personal>
                <Personal>
                    🚀 Here are a few technologies and tools I’ve been working with recently:
                </Personal>
               
                <Skills>
                    <p>
                    - JavaScript<br/>
                    <br/>
                    - React
                    </p>
                    <p>
                    - Node.js<br/>
                    <br/>
                    - TypeScript 
                    </p><br/>
                    <br/>
                    {/* <p>
                    - Express.js<br/>
                    <br/>
                    - MongoDB
                    </p> */}
                    
                </Skills>

               </Dappa>
                
            </Left>
    
        </Content>
     );
}
 
export default About;
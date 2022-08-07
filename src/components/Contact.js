import  styled  from "styled-components";

const ContactDappa = styled.div`
    height: 100vh;
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

   @media only screen and (max-width:600px) {
       height: 100%;
       width: 100%;
       position: absolute;
       padding: 30px;
       align-items: center;
       justify-content: space-evenly;
   }
`
const Head = styled.h1`
    text-align: center;
    text-transform: capitalize;
    word-spacing: 5px;
`
const Personal = styled.p`
    font-size: 18px;
    line-height: 40px;
    word-spacing: 5px;
    width: 700px;
    text-align: center;

    @media (max-width:786px) {
        width: 100%;
        font-size: 100%;
    }
`

const Button = styled.a`
    text-transform: capitalize;
    width: 180px;
    padding: 18px;
    font-size: 15px;
    text-align: center;
    border: 2px solid #e880f5;
    background-color: transparent;
    color: #fff;
    border-radius: 30px;
    transition: all .5s;
    cursor: pointer;

    &:hover{
        background-color: #e880f5;
        transform: scale(1.1);
    }
`

const Copy = styled.p`
    word-spacing: 5px;
    letter-spacing: 2px;
    text-align: center;
`

const Social = styled.div`
    width: 200px;
    padding: 20px;
    /* background-color:red; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Span = styled.span`
    color: #e880f5;
`


const Contact = () => {
    const soc = {
        fontSize:"20px",
        cursor: "pointer",
        
      }

      const insta={
        color:"#bc2a8d"
      }

      const git = {
        color: "#fff"
      }

      const lin = {
        color: "#0d6efd"
      }
  
    return ( 
        <ContactDappa>
            <Head>Get In <Span>touch</Span> 👈🏿</Head>

            <Personal>
            Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </Personal>

                <Button href="mailto:baskarl364@gmail.com" style={{textDecoration:"none",color:"#fff"}}>Say Hi</Button>

            <Copy>
                Design & Build by <span style={{color:"#e880f5"}}>Ponbaskar👽</span><br />
            </Copy>

        </ContactDappa>
     );
}
 
export default Contact;
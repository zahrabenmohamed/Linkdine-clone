import styled from "styled-components";

const leftside = () => {
    return (
        <Container>
        
        <Artcard>
            <Userinfo>

            </Userinfo>
        </Artcard>

        </Container>
      );
}

const Container=styled.div`
   grid-area: leftside;

`;
const Artcard=styled.div`
text-align: center;
overflow:hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Userinfo=styled.div``;

 
export default leftside;
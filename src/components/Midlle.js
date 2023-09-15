import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhotoFilm ,faCalendarDays,faNewspaper,faVideo,faEllipsis} from '@fortawesome/free-solid-svg-icons'



const Midlle = () => {
    return (  
        <Container>
            <Sharebox>
            <div >
                <img src="/images/user.svg" alt="" />
                <button> Start a Post</button>

                <button>
    <FontAwesomeIcon icon={faPhotoFilm} style={{ marginRight: '8px' }} />
                        <span style={{ marginLeft:"3px"}}>Photo</span>
                </button>
           
                <button>
                <FontAwesomeIcon icon={faVideo} style={{ marginRight: '8px' }} />    
                    <span>Video</span>
                </button>
         
           
                <button>
                <FontAwesomeIcon icon={faCalendarDays} style={{ marginRight: '8px' }}/>
                    <span>Event</span>
                </button>

                <button>
                <FontAwesomeIcon icon={faNewspaper} style={{ marginRight: '8px' }}/>
                    <span>Articles</span>
                </button>
           </div>

            </Sharebox>
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="/images/user.svg" alt="" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>
                                <span></span>
                            </div>
                        </a>
                      <button>
                      <FontAwesomeIcon icon={faEllipsis} />
                      </button>
                    </SharedActor>
                </Article>
            </div>
            
        </Container>
    );
}

const Container=styled.div`
`;
const Commoncard=styled.div`
text-align:center;
overflow:hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position:relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%),0 0 0 rgb(0 0 0 / 20%);
`;

const Sharebox=styled(Commoncard)`
display:flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
justify-content: space-between;
/* background: white; */
div{
    button{
        outline:none;
        color:rgba(0,0,0,0.6);
        font-size: 19px;
        line-height: 1.5;
        min-height: 48px;
        margin:4px;
        background: transparent;
        border: none;
        display:flex;
        align-items: center;
        font-weight: 600;  
    }
    &:first-child{
        display: flex;
        align-items:center;
        padding:8px 16px 0 16px;
        img{
            width:48px;
            border-radius: 50%;
            margin-right: 8px;
        }
        button{
            margin: 4px 0;
            flex-grow: 1;
            border-radius: 35px;
            padding-left: 16px;
            border: 1px solid rgba(0,0,0,0.15);
            text-align: left;
        }
    }
    &:nth-child(2){
        display:flex;
        flex-wrap: wrap;
        justify-content: space-around;

    }
}
`;
const Article=styled(Commoncard)`
padding:0;
margin: 0 0 8px;
overflow: visible;
`;
const SharedActor=styled.div`
padding-right: 40px;
flex-wrap:nowrap;
margin-bottom: 8px;
padding: 12px 16px 0;
align-items: center;
display:flex;
a{
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

img{
    width: 48px;
    height: 48px;
}
}
`;

export default Midlle;
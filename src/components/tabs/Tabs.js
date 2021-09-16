import React, { useState } from 'react'
import styled from 'styled-components'

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <Container>
            <div className="buttons">
                <button onClick={() => toggleTab(1)} className={toggleState === 1 ? "tabs active-tabs" : "tabs"}>Tab 1</button>
                <button onClick={() => toggleTab(2)} className={toggleState === 2 ? "tabs active-tabs" : "tabs"}>Tab 2</button>
                <button onClick={() => toggleTab(3)} className={toggleState === 3 ? "tabs active-tabs" : "tabs"}>Tab 3</button>
            </div>
            <div className="contentContainer">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <h2>Content 1</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                        vel voluptatum?
                    </p>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <h2>Content 2</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                        voluptatum qui adipisci.
                    </p>
                </div>
                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <h2>Content 3</h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                        Accusamus in quia odit aspernatur provident et ad vel distinctio
                        recusandae totam quidem repudiandae omnis veritatis nostrum
                        laboriosam architecto optio rem, dignissimos voluptatum beatae
                        aperiam voluptatem atque. Beatae rerum dolores sunt.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Tabs



const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 500px;
    height: 300px;
    background: #f1f1f1;
    margin: 100px auto 0;
    word-break: break-all;
    /* border: 1px solid rgba(0, 0, 0, 0.274); */
    .buttons {
        display: flex;
        .tabs {
            padding: 15px;
            text-align: center;
            width: 50%;
            background: rgba(128, 128, 128, 0.075);
            cursor: pointer;
            border-bottom: 1px solid rgba(0, 0, 0, 0.274);
            box-sizing: content-box;
            position: relative;
            outline: none;
            border: none;
        }
        .active-tabs {
            background: white;
            border-bottom: 1px solid transparent;
            &::before {
                content: "";
                display: block;
                position: absolute;
                bottom: -5px;
                left: 50%;
                transform: translateX(-50%);
                width: calc(100% + 2px);
                height: 5px;
                background: rgb(88, 147, 241);
            }
        }
    }
    .contentContainer {
        flex-grow: 1;
        .content {
            background: white;
            padding: 20px;
            width: 100%;
            height: 100%;
            display: none;
            h2 {
                padding: 0px 0 5px 0px;
                color: #7b7fda;
            }
            hr {
                width: 100px;
                height: 2px;
                background: #222;
                margin-bottom: 10px;
            }
            p {
                line-height: 1.9;
                letter-spacing: 1.1px;
                width: 100%;
                height: 100%;
            }
        }
        .active-content {
            display: block;
        }
    }
`;
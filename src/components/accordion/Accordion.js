import React, { useState } from 'react'
import styled from 'styled-components'
import accordionData from '../../data/accordionData'

const Accordion = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }
    

    

    return (
        <Wrapper>
            <div className="accordion">
                {
                    accordionData.map((item, i) => (
                        <div className="item" key={i}>
                            <div className="title" onClick={() => toggle(i)}>
                                <span className={selected === i ? 'span active' : 'span'}></span>
                                <h2>{item.question}</h2>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default Accordion




const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    .accordion {
        position: relative;
        width: 600px;
        .item {
            background: #f0ebe1;
            background: white;
            /* margin-bottom: 5px; */
            padding: 10px 20px;
            .title {
                display: flex;
                h2 {
                    color: #85662b;
                    cursor: pointer;
                }
                .span {
                    margin-right: 1rem;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #25CB9E;
                    cursor: pointer;
                    position: relative;
                    &::before {
                        position: absolute;
                        content: '';
                        height: 2px;
                        width: 10px;
                        background-color: white;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50% ,-50%);
                    }
                    &::after {
                        position: absolute;
                        content: "";
                        height: 10px;
                        width: 2px;
                        background-color: white;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translate(-50% ,-50%);
                        -ms-transform: translate(-50% ,-50%);
                        transform: translate(-50% ,-50%);
                        -webkit-transition: all 0.25s;
                        transition: all 0.25s;
                    }
                }
                .span.active::before {
                    position: absolute;
                    content: "";
                    height: 2px;
                    width: 10px;
                    background-color: white;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50% ,-50%);
                }
                .span.active::after {
                    opacity: 0;
                }
            }
            .content {
                color: #8b7f75;
                max-height: 0;
                overflow: hidden;
                transition: all 0.5s cubic-bezier(0,1,0,1);
                padding-top: 1rem;
                line-height: 1.9;
                letter-spacing: 1.1px;
                font-size: 1.3rem;
            }
            .content.show {
                height: auto;
                max-height: 9999px;
                transition: all 0.5s cubic-bezier(1,0,1,0);
            }
        }
    }
`;






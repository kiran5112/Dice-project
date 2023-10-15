import React, { useState } from "react";



function Dice() {
    const [info, setInfo] = useState(true)
    const [num, setNum] = useState(0)
    const [list, setList] = useState(0)
    const [sum, setSum] = useState(true)

    function funk() {
        setInfo(!info)
    }
    function onNum(e) {
        setNum(num)

        console.log(num);
    }
    function hook() {
        let temp = Math.floor(Math.random() * 6);
        setList(temp)

    }
    function restart() {
        setNum("")
        setList("")
        setSum("")
    }

    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="#">HOME</a></li>
                    <li className="navbar-item"><a href="#">CONTACT</a></li>
                    <li className="navbar-item"><a href="#">SERVICE</a></li>
                    <li className="navbar-item"><a href="#">RULES</a></li>
                    <li className="navbar-item"><a href="#">🎲</a></li>


                </ul>


            </nav>
            <h4 className="font"> The Dice Game</h4>
            {/* <h4 className="cont"> The Dice Game</h4> */}
            <div className="die">

                {info ? <h1>🎲 🎲</h1> : <h1>🎊😅</h1>}





                {
                    info ? (<span>Game rules</span>) : (<ol><li>Select the numbers</li>
                        <li>Click on the dice</li> <li>Press the button</li> <li>Start the game</li>
                        <li>Click on the dice</li> <li>Press the button</li> <li>Start the game</li>
                    </ol>

                    )
                }
            </div>

            <div className="rgt">
                <button onClick={() => setNum(1)}>1</button>
                <button onClick={() => setNum(2)}>2</button>
                <button onClick={() => setNum(3)}>3</button>
                <button onClick={() => setNum(4)}>4</button>
                <button onClick={() => setNum(5)}>5</button>
                <button onClick={() => setNum(6)}>6</button>


            </div>
            <br></br>
            <div className="box">
                {/* <h2> score {sum}</h2> */}


            </div>
            <div className="lft">

                <span className='spn' onClick={() => setList(hook)}>🎲</span>

                <div className="main">
                    <ul>
                        <li> Total num : {num}</li>
                        <li>Dice score: {list}</li>
                        <li> Your Score🎁:<span className="zero">{sum}</span></li>
                    </ul>
                    <br />
                </div>
                <br />
                {/* <button onClick={() => setSum(check)}>check</button> */}
                {
                    info ? (<button onClick={funk}>Start Game
                    </button>) : (<button onClick={funk}>Started
                    </button>)
                }

                {
                    num === list ? num + list : <span className="zero">0</span>

                }



                <button onClick={restart}>Restart</button>
            </div>

            <div className="half">
                <img src='https://media.istockphoto.com/id/619254722/photo/two-dice-on-a-black-desk-result-two.jpg?s=2048x2048&w=is&k=20&c=aPJjqEXfl6jBz45uI5YCN9K0jblbrMcGr5dqSYL-Utg=' width='1200px' height='400px' alt="myimage" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quam odio aut tempora pariatur eius, qui nulla assumenda saepe quod, incidunt hic optio architecto numquam sed expedita porro. Quam, labore?</p>
            </div>
            {/* <div className="haf">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Five_ivory_dice.jpg" width="200px" height="400px" alt="new" />
             </div>
 */}

            <div>
                <nav className="nav">
                    <ul className="navbar-li">
                        <li><a href="#">location</a></li>
                        <li><a href="#">cation</a></li>
                        <li><a href="#">lobbn</a></li>
                        <li><a href="#">contact</a></li>
                        <li><a href="#">history</a></li>

                    </ul>


                    <ul>
                        <li> dolor sit amet consectetur adipisicing elit. Impedit sit quibusdam magnam a nemo harum molestiae minima. Error quod neque officia suscipit vitae
                            beatae qui, odio blanditiis necessitatibus, magnam facilis!</li>
                        <li>consectetur adipisicing elit. Iure voluptas itaque cum odit, omnis ducimus molestiae recusandae labore doloremque. Reiciendis provident saepe iste,
                            nihil fugiat eum repudiandae laborum odit necessitatibus!</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};
export default Dice;
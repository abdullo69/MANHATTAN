import React from 'react'
import Footer from '../Footer/Footer'
import "./Popular.scss"
function Popular() {
    return (
        <div>
            <div className='popular'>
                <div className='popu_navbar'>
                    <h1>POPULAR RIGHT NOW</h1>
                    <button>ULRABOOST</button>
                    <button>NMD</button>
                    <button>BACKPACKS</button>
                    <button>CREATS</button>
                    <button>STAN SMITH</button>
                </div>

                <div className='popu_text'>
                    <div className='popu_text1'>
                        <h5>STORIES, STYLE, AND SPORTING GOODS AT ADIDAS, SINCE 1949</h5>
                        <p>Through sports, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring us together. Athletes inspire us. They help us to get up and get moving. And sporting goods featuring the latest technologies help us beat our personal best. adidas is home to the runner, the basketball player, the soccer kid, the fitness enthusiast, the yogi. And even the weekend hiker looking to escape the city. The 3-Stripes are everywhere and anywhere. In sports. In music. On life’s stages. Before the whistle blows, during th</p>
                    </div>

                    <div className='popu_text2'>
                        <h5>WORKOUT CLOTHES, FOR ANY SPORT</h5>
                        <p>adidas designs for athletes of all kinds. Creators who love to change the game. People who challenge conventions, break the rules, and define new ones. Then break them all over again. We design sports apparel that gets you moving, winning, and living life to the fullest. We create bras and tights for female athletes who play just as hard as the men. From low to high support. Maximum comfort. We design, innovate and iterate. We test new technologies in action. On the field, the track, the court, and in the pool. We’re inspired by retro workout clothes, creating new streetwear essentials. From NMD and Ozweego to our Firebird tracksuits. From Stan Smith to Superstar. Classic sports models are brought back to life on the streets and the stages around the world.

                            Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces, that can be worn as sports apparel too. Our lives are constantly changing. Becoming m</p>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Popular
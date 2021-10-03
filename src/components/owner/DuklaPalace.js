import React from 'react'
import './DuklaPalace.css'
import footerIMGLeft from '../../assets/stock/palace_image_footer_left.png'
import footerIMGRight from '../../assets/stock/palace_image_footer_right.png'

function DuklaPalace() {
    return (
        <div className="dukla">
            <div className="palace__about__top">
                <p className="palace__about__text">New Heritage Experiences are unique activities designed for you in a manor or palace of your choosing from our portfolio. Unlike a typical tour or workshop, NH Experiences are especially crafted for you and offer a deep-dive into the world of the house. We offer our guests special knowledge, insights and access to local places and communities that they would be unlikely to find on their own, creating lasting connections and treasured memories. Each person’s experience is a different adventure, and in some ways very personal.</p>
            </div>
            <div className="dukla__image">
                <h2 className="dukla__palace__text">DUKLA PALACE</h2>
            </div>
            <div className="about__bottom">
                <p className="about__bottom__text">An old stately home located in the small town of Dukla a true hidden gem on the outskirts of modern Poland. The origins of the earliest building date back to the mid 16th Century  to a renaissance castle.</p>
                <p className="about__bottom__text__second">It was most likely built by the Lord of Dukla Jan Jordan. The next owners were the Zborowski, Drohojewski and Męciński families. During the next century the castle fell into disrepair. In 1636-38 the new owner Franciszek Bernard Mniszech redeveloped the castle adding a new building to the west side and fortified it with four defensive bastions resulting in a fortified palace.</p>
                <p className="about__bottom__third">The next redevelopment was carried out in 1764-65 by Jerzy August Wandalin Mniszech and his wife Maria Amalia, of the house Brühl. In this period they expanded the existing palace adding another storey with a mansard roof. The author of the project was most likely the Dresden architect Jan Fryderyk Knobl and the works were managed by the architect Leonard Andrys. On the site of two of the bastions outbuildings were built and the remaining fortifications were dismantled. In their place a park in the style of a French formal garden was created.</p>
                <p className="about__bottom__fourth">In 1989 after the fall of Communism Stanislaw the rightful owner of the Dukla Estate started procedures to reclaim his property. Following lengthy legal court cases the palace and park were returned to Stanislaw's children in the autumn of 2012.</p>
            </div>
            <div className="palaceImg_and_text">
                <img src={footerIMGLeft} alt="" />
                    <p className="text__left">Located in the Palace is a History Museum. The Museum <br/> holds permanent exhibitions on the history of the Dukla <br/> Palace, military  exhibits from both world wars and open air <br/> exhibits of heavy artillery.</p>
                <img className="img_right" src={footerIMGRight} alt="" />
                    <p className="text_right">The Palace complex consists of three buildings, the central <br/> palace and  two outbuildings. The palace grounds are 10 <br/> hectares in size. The park consists of three  lakes, an ice <br/> house, a burial chapel (built in 1925) and the ruins of  the <br/> green houses.</p>
            </div>
        </div>
    )
}

export default DuklaPalace

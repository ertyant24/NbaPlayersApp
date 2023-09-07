import React from 'react'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import '../App.css';
import BasketballPng from '../Images/basketball.jpg'

function Main() {
    return (
        <>
            <div>
                <div className="alert alert-info text-center fs-3" role="alert">
                    <strong>Merhabalar</strong> Nba Severler !!!
                </div>
            </div>
            <div className='mt-4 text-center'>
                <Link to="/player/list" className='btn btn-secondary'>
                    <img src={BasketballPng} alt="basketball" width="300px"/>
                </Link>
            </div>
            <div className='mt-3'>
                <p className='paragraf'>
                    The National Basketball Association (NBA) is a professional basketball league in North America composed of 30 teams (29 in the United States and 1 in Canada). It is one of the major professional sports leagues in the United States and Canada and is considered the premier professional basketball league in the world.[3]

                    The league was founded in New York City on June 6, 1946, as the Basketball Association of America (BAA).[1] It changed its name to the National Basketball Association on August 3, 1949, after merging with the competing National Basketball League (NBL).[4] In 1976, the NBA and the American Basketball Association (ABA) merged, adding four franchises to the NBA. The NBA's regular season runs from October to April, with each team playing 82 games. The league's playoff tournament extends into June. As of 2020, NBA players are the world's best paid athletes by average annual salary per player.[5][6][7]

                    The NBA is an active member of USA Basketball (USAB),[8] which is recognized by the FIBA (International Basketball Federation) as the national governing body for basketball in the United States. The league's several international as well as individual team offices are directed out of its head offices in Midtown Manhattan, while its NBA Entertainment and NBA TV studios are directed out of offices located in Secaucus, New Jersey. In North America, the NBA is the third wealthiest professional sport league after the National Football League (NFL) and Major League Baseball (MLB) by revenue, and among the top four in the world.[9]

                    The Boston Celtics and the Los Angeles Lakers are tied for the most NBA championships with 17 each. The reigning league champions are the Denver Nuggets, who defeated the Miami Heat in the 2023 NBA Finals.

                    History
                    Creation and BAA–NBL merger (1946–1956)
                    Main article: Basketball Association of America
                    The Basketball Association of America was founded in 1946 by owners of the major ice hockey arenas in the Northeastern and Midwestern United States and Canada. On November 1, 1946, in Toronto, Ontario, Canada, the Toronto Huskies hosted the New York Knickerbockers at Maple Leaf Gardens, in a game the NBA now refers to as the first game played in NBA history.[10] The first basket was made by Ossie Schectman of the Knickerbockers. Although there had been earlier attempts at professional basketball leagues, including the American Basketball League (ABL) and the NBL, the BAA was the first league to attempt to play primarily in large arenas in major cities. During its early years, the quality of play in the BAA was not significantly better than in competing leagues or among leading independent clubs such as the Harlem Globetrotters. For instance, the 1948 ABL finalist Baltimore Bullets moved to the BAA and won that league's 1948 title, and the 1948 NBL champion Minneapolis Lakers won the 1949 BAA title. Prior to the 1948–49 season, however, NBL teams from Fort Wayne, Indianapolis, Minneapolis, and Rochester jumped to the BAA, which established the BAA as the league of choice for collegians looking to turn professional.[11]

                    On August 3, 1949, the remaining NBL teams–Syracuse, Anderson, Tri-Cities, Sheboygan, Denver, and Waterloo–merged into the BAA. In deference to the merger and to avoid possible legal complications, the league name was changed to the present National Basketball Association, even though the merged league retained the BAA's governing body, including Maurice Podoloff as president.[11] To this day, the NBA claims the BAA's history as its own. It now reckons the arrival of the NBL teams as an expansion, not a merger, and does not recognize NBL records and statistics.[12]

                    The new league had seventeen franchises located in a mix of large and small cities,[13] as well as large arenas and smaller gymnasiums and armories. In 1950, the NBA consolidated to eleven franchises, a process that continued until 1954–55, when the league reached its smallest size of eight franchises: the New York Knicks, Boston Celtics, Philadelphia Warriors, Minneapolis Lakers, Rochester Royals, Fort Wayne Pistons, Milwaukee Hawks, and Syracuse Nationals, all of which remain in the league today, although the latter six all did eventually relocate. The process of contraction saw the league's smaller-city franchises move to larger cities. The Hawks had shifted from the Tri-Cities to Milwaukee in 1951, and later shifted to St. Louis in 1955. The Rochester Royals moved from Rochester, New York, to Cincinnati in 1957 and the Pistons moved from Fort Wayne, Indiana, to Detroit in 1957.

                    Japanese-American Wataru Misaka broke the NBA color barrier in the 1947–48 season when he played for the New York Knicks. He remained the only non-white player in league history prior to the first African-American, Harold Hunter, signing with the Washington Capitols in 1950.[14][15] Hunter was cut from the team during training camp,[14][16] but several African-American players did play in the league later that year, including Chuck Cooper with the Celtics, Nathaniel "Sweetwater" Clifton with the Knicks, and Earl Lloyd with the Washington Capitols. During this period, the Minneapolis Lakers, led by center George Mikan, won five NBA Championships and established themselves as the league's first dynasty.[17] To encourage shooting and discourage stalling, the league introduced the 24-second shot clock in 1954.[18] If a team does not attempt to score a field goal (or the ball fails to make contact with the rim) within 24 seconds of obtaining the ball, play is stopped and the ball given to its opponent.
                </p>
            </div>
        </>
    )
}

export default withTranslation()(Main); 

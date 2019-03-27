import React, { Component } from 'react';
import M from 'materialize-css';

class Civilizations extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
    }
    render() {
        return( 
            <div>
              <header>
                <h1>Civilizations</h1>
              </header>
              <ul className="collapsible" data-collapsible="accordion">
                <li>
                    <div className="collapsible-header">Korbo</div>
                    <div className="collapsible-body">
                        <p>This pre-industrial civilization venerates Korbo, an ancient god of fire and blood. It demands gruesome sacrifices in giant stone temples, and its priesthood works to stifle social disorder from the Water People, a revolutionary cult.</p>
                        <h2><i className="fas fa-walking"></i> Characters</h2>
                        <ol>
                            <li> Chief Priest Karbak, preoccupied and erratic.</li>
                            <li> Priestess Thiss, fiery and ambitious.</li>
                            <li> Initiate Pranat, devoted and beautiful.</li>
                            <li> Thawna of the Water People, serious and virtuous.</li>
                            <li> Senator Lotho, vague and flaky.</li>
                            <li> Arma the Assassin, ugly and miserable.</li>
                        </ol>
                        <h2><i className="fas fa-exclamation-circle"></i> Escalations</h2>
                        <ol>
                            <li> The Water People discredit an enemy.</li>
                            <li> The Water People put out a hit on an enemy.</li>
                            <li> The Water People open a new temple in the heart of the city, which attracts much attention.</li>
                            <li> Karbak reveals "Phase Two."</li>
                            <li> Lotho makes his move in the Senate.</li>
                            <li> A new prophet of Korbo appears, swaying the religion to a more extreme position.</li>
                        </ol>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">The Twilight People</div>
                    <div className="collapsible-body">
                        <p>These humanoids live in domed cities in a post-scarcity society, attended by robots that take care of their every whim. Any vice can be indulged more or less instantly thanks to food replication and custom-built androids.</p>
                        <p>And this civilization is in total decline. People are apathetic, self-indulgent, and don't take care of children, who grow up even more apathetic and self-indulgent.</p>
                        <p>All is not lost, however. A heavily repressed revolutionary group, the New Children, seek to overthrow the robots.</p>
                        <h2><i className="fas fa-walking"></i> Characters</h2>
                        <ol>
                            <li> City Leader Severina, severe and thoughtful.</li>
                            <li> Maximilian, head of security, stern and intense.</li>
                            <li> Arina, leader of the revolution, beautiful and naive.</li>
                            <li> Nicolas, revolutionary contact, scarred and jumpy.</li>
                            <li> Lilia, assassin, charming and quirky.</li>
                            <li> Viorel the inventor, gentle and ugly.</li>
                        </ol>
                        <h2><i className="fas fa-exclamation-circle"></i> Escalations</h2>
                        <ol>
                            <li> The New Children stage a protest.</li>
                            <li> The New Children sneak into a factory and things get out of hand.</li>
                            <li> The news accuses the New Children of terrorism.</li>
                            <li> A key diplomat dies mysteriously.</li>
                            <li> A key member of the New Children dies mysteriously.</li>
                            <li> Maximilian announces a purge of the New Children.</li>
                        </ol>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">Valla and Thonna</div>
                    <div className="collapsible-body">
                        <p>This world is divided into two major continents, Valla and Thonna.</p>
                        <p>Valla is ruled by the People fo the Fist, a militaristic, near-spacefaring society that organizes itself along martial lines. All young adults are put into compulsive, brutal military service. Every member of the People is inculcated from birth with respect for military rank. Even mundane careers like sanitation have ranks, duties, and all the other earmarks of a military company. Its people live in huge towered cities covered by a constant crowd of airships and flitters.</p>
                        <p>Thonna is a socialist nation with vast resources, badly managed by its paranoid Central Circles for centuries. This has led to the buildup of a massive but inefficient "purely defensive" military. Its people live in underground bunkers and favor land vehicles.</p>
                        <p>Both countries are on the brink of war.</p>
                        <h2><i className="fas fa-walking"></i> Characters</h2>
                        <ol>
                            <li> Supreme Commander Dis, secure and bossy.</li>
                            <li> Adviser Tork, impuslive and opportunistic.</li>
                            <li> Secret Police Chief Voss, obliging and saucy.</li>
                            <li> Fleet Commander Thal, discerning andcalculating.</li>
                            <li> Diplomat Teel, friendly and deceptive.</li>
                            <li> Third-Class Guard Fong, paranoid and hesitant.</li>
                            </ol>
                        <h2><i className="fas fa-exclamation-circle"></i> Escalations</h2>
                        <ol>
                            <li> A Thonnan vessel sinks a People warship and the People declare war.</li>
                            <li> A Thonnan regiment invades a Valla outpost.</li>
                            <li> The secret police arrest a cult.</li>
                            <li> Anti-government terrorists attack the Supreme Commander, rattling Dis badly.</li>
                            <li> There are food riots in outlying provinces, causing unease in the capital.</li>
                            <li> A conspiracy within the high command is revealed.</li>
                        </ol>
                    </div>
                </li>
              </ul>
            </div>
        )
    }
}

export default Civilizations;
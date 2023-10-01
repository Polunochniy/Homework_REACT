import React, { useEffect } from 'react';
import './Body.css';

function StarWars() {
    useEffect(() => {
        async function planets() {
            const url = 'https://swapi.dev/api/planets/';

            try {
                const response = await fetch(url);
                const data = await response.json();
                const cards = document.querySelectorAll(".card");

                if (cards.length > 0 && data.results && data.results.length > 0) {
                    cards.forEach(async (card, index) => {
                        if (data.results[index]) {
                            const planetName = data.results[index].name.toUpperCase();
                            const planetElement = card.querySelector(".planet");
                            const textElement = card.querySelector(".text");
                            const button = card.querySelector(".button");
                            const heroesContainer = card.querySelector(".heroes");

                            const films = data.results[index].films;
                            if (films && films.length > 0) {
                                const filmsInfo = [];

                                for (const filmUrl of films) {
                                    const filmResponse = await fetch(filmUrl);
                                    const filmData = await filmResponse.json();
                                    filmsInfo.push(filmData.title);
                                }

                                textElement.innerHTML = filmsInfo.join('<br>');
                            }

                            planetElement.textContent = `${planetName}`;

                            button.addEventListener("click", async () => {
                                const heroesListElement = card.querySelector(".heroes-list");
                                const getHeroes = data.results[index].residents;
                                if (getHeroes && getHeroes.length > 0) {
                                    const residentsInfo = [];

                                    for (const residentsUrl of getHeroes) {
                                        const heroesResponse = await fetch(residentsUrl);
                                        const heroesData = await heroesResponse.json();
                                        residentsInfo.push(heroesData.name);
                                    }

                                    heroesListElement.innerHTML = residentsInfo.join('<br>');
                                } else {
                                    heroesListElement.textContent = "There are no heroes";
                                }

                                if (heroesContainer.classList.contains("hidden")) {
                                    heroesContainer.classList.remove("hidden");
                                } else {
                                    heroesContainer.classList.add("hidden");
                                }
                            });
                        }
                    });
                }
            } catch (error) {
                console.error("Помилка:", error);
            }
        }

        planets();
    }, []);


    return (
        <div className="star-wars">
            <div className="conteiner">
                <div className="card" data-residents-url="https://swapi.dev/api/planets/1/">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg" alt=" "/>
                    <p className="planet"></p>
                    <p className="films">FILMS:</p>
                    <p className="text"></p>
                    <button className="button">▶</button>
                    <div className="heroes hidden">
                        <p className="hero">HEROES:</p>
                        <div className="heroes-list"></div>
                    </div>
                </div>
                <div className ="card">
                    <img src="https://static.wikia.nocookie.net/rustarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20120529135204" alt=" "/>
                    <p className ="planet"></p>
                    <p className ="films">FILMS:</p>
                    <p className ="text"></p>
                    <button className ="button">▶</button>
                    <div className ="heroes hidden">
                        <p className ="hero">HEROES:</p>
                        <div className ="heroes-list"></div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://static.wikia.nocookie.net/rustarwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20170712043200" alt=" "/>
                    <p className="planet"></p>
                    <p className="films">FILMS:</p>
                    <p className="text"></p>
                    <button class="button">▶</button>
                    <div className="heroes hidden">
                        <p className="hero">HEROES:</p>
                        <div className="heroes-list"></div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://static.wikia.nocookie.net/rustarwars/images/8/81/Hoth_AoRCR.png/revision/latest?cb=20180110123742" alt=" "/>
                    <p className="planet"></p>
                    <p className="films">FILMS:</p>
                    <p className="text"></p>
                    <button className="button">▶</button>
                    <div className="heroes hidden">
                        <p className="hero">HEROES:</p>
                        <div className="heroes-list"></div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://static.wikia.nocookie.net/starwars/images/4/48/Dagobah_ep3.jpg/revision/latest?cb=20100122163146" alt=" "/>
                    <p className="planet"></p>
                    <p className="films">FILMS:</p>
                    <p className="text"></p>
                    <button className="button">▶</button>
                    <div className="heroes hidden">
                        <p className="hero">HEROES:</p>
                        <div className="heroes-list"></div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://static.wikia.nocookie.net/rustarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170408120707" alt=" "/>
                    <p className="planet"></p>
                    <p className="films">FILMS:</p>
                    <p className="text"></p>
                    <button className="button">▶</button>
                    <div className="heroes hidden">
                        <p className="hero">HEROES:</p>
                        <div className="heroes-list"></div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://static.wikia.nocookie.net/rustarwars/images/5/50/Endor_FFGRebellion.png/revision/latest?cb=20170529065322" alt=" "/>
                    <p className="planet"></p>
                    <p className="films">FILMS:</p>
                    <p className="text"></p>
                    <button className="button">▶</button>
                    <div className="heroes hidden">
                        <p className="hero">HEROES:</p>
                        <div className="heroes-list"></div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://upload.wikimedia.org/wikipedia/uk/thumb/0/06/PlanetNaboo.png/300px-PlanetNaboo.png" alt=" "/>
                    <p className="planet"></p>
                    <p className="films">FILMS:</p>
                    <p className="text"></p>
                    <button className="button">▶</button>
                    <div className="heroes hidden">
                        <p className="hero">HEROES:</p>
                        <div className="heroes-list"></div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://static.wikia.nocookie.net/rustarwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20180110123906" alt=" "/>
                    <p className="planet"></p>
                    <p className="films">FILMS:</p>
                    <p className="text"></p>
                    <button className="button">▶</button>
                    <div className="heroes hidden">
                        <p className="hero">HEROES:</p>
                        <div className="heroes-list"></div>
                    </div>
                </div>
                <div className="card">
                    <img src="https://static.wikia.nocookie.net/starwars/images/5/52/Kamino-DB.png/revision/latest?cb=20150920190527" alt=" "/>
                    <p className="planet"></p>
                    <p className="films">FILMS:</p>
                    <p className="text"></p>
                    <button className="button">▶</button>
                    <div className="heroes hidden">
                        <p className="hero">HEROES:</p>
                        <div className="heroes-list"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StarWars;
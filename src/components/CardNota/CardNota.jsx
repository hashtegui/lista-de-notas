import React, { Component } from 'react';
import "./estilo.css"

class CardNota extends Component {
    state = {}
    render() {
        return (
            <section className="card-nota">
                <header>
                    <h3>Titulo</h3>
                </header>
                <p>Escreva Sua nota</p>
            </section>
        );
    }
}

export default CardNota;

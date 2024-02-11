import React from 'react';
import {Container} from "react-bootstrap";

function CardDescription() {
    return (
        <div>
            <Container style={{width: 400}} >
                <h2>Meet: the new Golden Card!</h2>
                <p>We present you our new debit card. The Gold card is even more profitable and convenient.</p>
                <ul className="ps-3">
                    <li>Card service — 0 BYN</li>
                    <li>For transfers from card to CrownBank card — 0 BYN</li>
                    <li>We will refund up to 10% for purchases at gas stations, 5% in cafes, restaurants and taxis with bonuses</li>
                </ul>
            </Container>
        </div>
    );
}

export default CardDescription;
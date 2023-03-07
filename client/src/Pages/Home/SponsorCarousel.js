import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
export default function SponsorCarousel() {
    return (
        <div className="container">
            
            <div style={{
                fontFamily: "sans-serif",
                display: "flex",
                alignItems: " center",
                justifyContent: " center",
                height: "50vh"
            }}>
                <Carousel breakPoints={breakPoints}>
                    <Item><img src="/images/partners.png" style={{width:"100%",objectFit:"contain",height:"100%"}}/></Item>
                    <Item> <img src="/images/partners.png" style={{width:"100%",objectFit:"contain",height:"100%"}}/>Two</Item>
                    <Item> <img src="/images/partners.png" style={{width:"100%",objectFit:"contain",height:"100%"}}/>Three</Item>
                    <Item> <img src="/images/partners.png" style={{width:"100%",objectFit:"contain",height:"100%"}}/>Four</Item>
                    <Item> <img src="/images/partners.png" style={{width:"100%",objectFit:"contain",height:"100%"}}/>Five</Item>
                    <Item> <img src="/images/partners.png" style={{width:"100%",objectFit:"contain",height:"100%"}}/>Six</Item>
                    <Item> <img src="/images/partners.png" style={{width:"100%",objectFit:"contain",height:"100%"}}/>Seven</Item>
                    <Item> <img src="/images/partners.png" style={{width:"100%",objectFit:"contain",height:"100%"}}/>Eight</Item>
                </Carousel>
            </div>
        </div>
    )
}

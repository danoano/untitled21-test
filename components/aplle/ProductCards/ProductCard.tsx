import Image from "next/image";


import styles from './ProductCard.module.css';


import {useState} from "react";

interface IProductCardProps  {
    id: number;
    name: string;
    price: number;
    category: string;
    brand: string;
    description: string;
}

export const ProductCard = ({price, name, brand, category, description}: IProductCardProps) => {


    return (
        <article className={styles.card}>
            <h4> {name} </h4>






        </article>
    )
}

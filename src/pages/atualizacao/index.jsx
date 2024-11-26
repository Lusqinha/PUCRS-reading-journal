import { BookEdit } from '../../components/BookEdit';
import { useParams } from 'react-router-dom';
import React from 'react';


export function Atualizacao() {

    const { id } = useParams();

    return (
        <BookEdit id={id}/>
    );
}
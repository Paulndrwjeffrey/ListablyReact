import React from 'react';
import ChangeStatus from '../ChangeStatus';
import Stream from '../Stream';
import ReadMore from '../ReadMore';
import './style.css';

export default function MovieCard({ movie }) {

    return (

        <div key={movie.id} className={'results-container'}>
            <div
                className={'card-info'}
                data-title={movie.title}
                data-date={movie.release_date}
                data-poster={movie.poster_path}
                data-id={movie.id}
                data-type="movie"
                data-description={movie.overview}
            >
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie" className={'card-image'} />

                <div  className={'title-date'}>
                    <div className={'card-title'}>{movie.title}</div>
                    <div className={'date'}>({movie.release_date})</div>
                </div>
                <div className={'description'}> <ReadMore text={movie.overview}>{movie.overview}</ReadMore>  </div>
                <Stream movieID={movie.id} key={movie.id}/>
                <div className={'myRating'}></div>
            < ChangeStatus />
            </div>

        </div>
    );
}

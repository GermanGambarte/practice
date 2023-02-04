import React from 'react'

import { Review } from '../data/data'

import './review.css'

type Props = {
  review: Review
}

export const ReviewComp = ({ review }: Props) => {
  const { id, name, text, image, job } = review

  return (
    <div className="review">
      <img alt={name} className="review-img" src={image} />
      <h2>{name}</h2>
      <h3>{job}</h3>
      <p>{text}</p>
    </div>
  )
}

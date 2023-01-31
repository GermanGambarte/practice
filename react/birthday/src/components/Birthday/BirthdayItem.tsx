import { Birthday } from '../../data/data'
import { Photo } from '../ui/Photo'
import './birthday.css'

type Props = {
  data: Birthday
}
export const BirthdayItem = ({ data }: Props) => {
  const { name, age, image } = data
  return (
    <div className="birthday">
      <Photo name={name} image={image} />
      <div className="birthday-text__wrapper">
        <h3 className="birthday-name">{name}</h3>
        <span className="birthday-age">{`${age} years`}</span>
      </div>
    </div>
  )
}

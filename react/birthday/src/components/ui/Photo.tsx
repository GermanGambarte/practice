import './photo.css'

type Props = {
  image: string
  name: string
}
export const Photo = ({ image, name }: Props) => {
  return <img src={image} alt={`${name}'s photo`} />
}

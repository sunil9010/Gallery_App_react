// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {getTheList, updateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = getTheList
  const changeImage = () => {
    updateImage(id)
  }
  const changeOpacity = isActive ? `thumbnail active` : `thumbnail`
  return (
    <li className="thumbnail-list-item">
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={changeOpacity}
          onClick={changeImage}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem

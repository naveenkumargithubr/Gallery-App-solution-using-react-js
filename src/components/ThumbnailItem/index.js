// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateThumbId} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const changeImageOnclick = () => {
    updateThumbId(id)
  }

  return (
    <li className="list-bg-container">
      <button
        type="button"
        className="button-image"
        onClick={changeImageOnclick}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem

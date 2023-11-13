import './index.css'

const TabItem = props => {
  const {buttonDetails, isActive, clickTabItem} = props
  const {buttonText, id} = buttonDetails

  const onClickBtn = () => {
    clickTabItem(id)
  }

  const btnClassName = isActive ? 'active btn' : 'btn'

  return (
    <li className="tab">
      <button type="button" className={btnClassName} onClick={onClickBtn}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem

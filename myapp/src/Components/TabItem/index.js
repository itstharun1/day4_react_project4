
const TabItem = (props)=> {

    const {eachItem,clickTabItem,isActive} = props;
    const {displayText,tabId }=eachItem

    const onClickTabItem = () => {
        clickTabItem(tabId)
      }

      const bts = isActive ? 'activeTab1' : ''

  return (
   <div>
    <button  onClick={onClickTabItem} className={`bt ${bts}`}>{displayText}</button>
   </div>
  )
}

export default TabItem
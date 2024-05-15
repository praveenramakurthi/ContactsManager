<div className='nav-items' style={{ cursor: "pointer" }} onClick={() => setDelClick(true)} >
  <img src="Images/delet.png" alt="" />
  <span>Delete</span>
</div>
{
  delClick && (
    <div className='popup'>
      {(isDelComplete) ? (
        <>
          <div>
            <img src="Images/delIconComp.png" alt="PopUp" />
          </div>
          <div className='popuptext'>Deleted Contacts</div>
          <div className='popupbtncontainer'>
            <button className='popupbtn' onClick={() => {
              setDelClick(!delClick);
              setIsDelComplete(false);
              document.location.reload();
            }} >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <img src="Images/impDel.png" alt="PopUp" />
          </div>
          <div className='popuptext'>Delete Contacts</div>
          <div className='popuplink'>
            Sure you want to delete this Contacts?
          </div>
          <div className='popupbtncontainer'>
            <button className='popupbtn' onClick={() => {
              setDelClick(!delClick);
              setIsDelComplete(false);
            }}>
              Cancel
            </button>
            <button className='popupbtn' onClick={() => {
              setIsDelComplete(true);
              deleteBtnClicked();
            }}>
              Ok
            </button>
          </div>
        </>
      )}
    </div>
  )
}
import './ProjModal.css'

const ProjModal = ({ show, onClose }) => {
  console.log({show})
  if(show) {
    console.log("Modal should appear")
    return (
      <div className="modal" id="modal">
        <h2>Modal Window</h2>
        <div className="content">This will eventually contain dynamic content about each individual project. To accomplish this, I will need to create a back end to this website. This will take some time, so here is a placeholder.</div>
        <div className="actions">
          <button className="toggle-button" onClick={onClose}>Close</button>
        </div>
      </div>
    )
  }
}

export default ProjModal
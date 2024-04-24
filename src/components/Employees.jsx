import "./employees.css"
import React, {useState} from "react"
import Modal from "./Modal"

function Employees(){
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const openEmployeeModal = (employee) => {
        setSelectedEmployee(employee);
        openModal();
    };

    const closeEmployeeModal = () => {
        setSelectedEmployee(null);
        closeModal();
    };
    const cardStyle = {
        width: "18rem"
    }
    return(
        <>    
        <h1>Employees</h1>
        <div className="d-flex flex-wrap m-4">
        <div className="card" onClick={() => openEmployeeModal("DrGordanMohan")} style={cardStyle}>
            <img className="card-img-top" onClick={openModal} src="https://avatars.githubusercontent.com/u/86754409" alt="image" />
            <div className="card-body">
                <div className="card-title h5">Dr. Gordan Mohan</div>
            </div>
        </div>
        {selectedEmployee === "DrGordanMohan" && (
            <Modal isOpen={isOpen} toggle={closeModal}>
            <h2>Dr. Gordan Mohan</h2>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Dr. Gordan Mohan</td>
                </tr>
                <tr>
                    <td>user Id</td>
                    <td>tlmmn</td>
                </tr>
                <tr>
                    <td>picture</td>
                    <td>https://avatars.githubusercontent.com/u/86754409</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>mohan@gmail.com</td>
                </tr>
                <tr>
                    <td>Designation</td>
                    <td>Tech lead</td>
                </tr>
                <tr>
                    <td>number of leaves</td>
                    <td>4</td>
                </tr>
            </table>

            </Modal>
            )}
        <div className="card" onClick={() => openEmployeeModal("AbhishiekSharma")} style={cardStyle}>
            <img className="card-img-top" src="https://avatars.githubusercontent.com/u/83047765" alt="image" />
            <div className="card-body">
                <div className="card-title h5">Abhisheik sharma</div>
            </div>
        </div>
        {selectedEmployee === "AbhishiekSharma" && (
        <Modal isOpen={isOpen} toggle={closeModal}>
            <h2>Abhisheik Sharma</h2>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Abhishiek sharma</td>
                </tr>
                <tr>
                    <td>user Id</td>
                    <td>qwertn</td>
                </tr>
                <tr>
                    <td>picture</td>
                    <td>https://avatars.githubusercontent.com/u/83047765</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>sharmakabeta@gmail.com</td>
                </tr>
                <tr>
                    <td>Designation</td>
                    <td>senior software engineer</td>
                </tr>
                <tr>
                    <td>number of leaves</td>
                    <td>8</td>
                </tr>
            </table>

            </Modal>
            )}
        <div className="card" onClick={() => openEmployeeModal("TravisHead")} style={cardStyle}>
            <img className="card-img-top" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg" alt="image" />
            <div className="card-body">
                <div className="card-title h5">Travis Head</div>
            </div>
        </div>
        {selectedEmployee === "TravisHead" && (
        <Modal isOpen={isOpen} toggle={closeModal}>
            <h2>Travis Head</h2>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Travis Head</td>
                </tr>
                <tr>
                    <td>user Id</td>
                    <td>sunrisers</td>
                </tr>
                <tr>
                    <td>picture</td>
                    <td>https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>travishead@gmail.com</td>
                </tr>
                <tr>
                    <td>Designation</td>
                    <td>software engineer</td>
                </tr>
                <tr>
                    <td>number of leaves</td>
                    <td>1</td>
                </tr>
            </table>

            </Modal>
            )}
        </div>
        </>
    )
}

export default Employees


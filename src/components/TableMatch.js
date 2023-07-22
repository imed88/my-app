import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TableMatch() {

    const [matches, setMatches] = useState([]);


    useEffect(() => {
        getAllMatches()
    }, [])

    const getAllMatches = () => {
        axios.get('http://localhost:4000/api/matches').then((result) => {
            console.log("here all matches", result.data.data)
            setMatches(result.data.data);
        })
    }


    const deleteMatch = (id) => {
        axios.delete('http://localhost:4000/api/delete_match/' + id).then((result) => {
        
        getAllMatches()
        })
    }


    return (<div>
        <div className="hero overlay" style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9 mx-auto text-center">
                        <h1 className="text-white">Table match</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="site-section">
            <div className="container">
                <div className="widget-next-match">

                    <table className="table custom-table">
                        <thead>
                            <tr>
                                <th>TeamOne</th>
                                <th>teamTwo</th>
                                <th>scoreOne</th>
                                <th>scoreTwo</th>
                                <th>Update</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {matches.map((match, key) => (
                                <tr key={key}>
                                    <td>{match.teamOne}</td>
                                    <td>{match.teamTwo}</td>
                                    <td>{match.scoreOne}</td>
                                    <td>{match.scoreTwo}</td>
                                    <td><button type="button" className="btn btn-danger">Edit</button></td>
                                    <td><button type="button" className="btn btn-warning" onClick={()=> deleteMatch(match._id)}>delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>






    )
}

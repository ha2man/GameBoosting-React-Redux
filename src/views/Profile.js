import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

function Profile() {
    const { user: currentUser } = useSelector((state) => state.auth);
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return (
        <div className="section section-profile">
            <header>
                <h3>
                <strong>{currentUser.username}</strong> Profile
                </h3>
            </header>
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
        </div>
    )
}

export default Profile;
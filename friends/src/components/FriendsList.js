import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("friends")
            .then(res => {
                console.log(res.data);
                setFriends(res.data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <div className="friendsList">
                {friends.map(friend => {
                    return (
                        <div>
                            Test card
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
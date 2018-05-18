import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Button, Input } from "reactstrap";

import Loader from "../Loader";

const SearchList = (props) => {
  const {value, onInputChange, users, onAddFriend, onRemoveFriend, loaded} = props;
  return (
    <Fragment>
      {loaded ? (
        <div className="search-list">
          <Input type="text"
                 placeholder="Please, enter name or surname of user"
                 value={value}
                 onChange={({target}) => onInputChange(target.value)}
          />
          <ListGroup>
            {users.map((user, index) =>
              <ListGroupItem key={index} className="text-center">
                <img src={user.picture.large} alt="user-pic" />
                <p>
                  {user.name.first} {user.name.last}
                </p>
                {!user.isFriend ? (
                  <Button color="primary" onClick={() => onAddFriend(user)}>add</Button>
                ) : (
                  <Button color="danger" onClick={() => onRemoveFriend(user)}>remove</Button>
                )}
              </ListGroupItem>
            )}
          </ListGroup>
        </div>
      ) : <Loader />}
    </Fragment>
  );
};

export default SearchList;
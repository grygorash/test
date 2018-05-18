import React, { Fragment } from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import Loader from "../Loader";
import Pagination from "../Pagination/index";

function UserList(props) {
  const {onRemoveFriend, onAddFriend, users, currentPage, itemsPerPage, page, loaded} = props;
  const startOffset = (currentPage - 1) * itemsPerPage;
  let startCount = 0;

  return (
    <Fragment>
      {loaded ? (
        <div className="user-list">
          <p>Total users: {users.length}</p>
          <ListGroup>
            {users.map((user, index) => {
              return index >= startOffset && startCount < itemsPerPage ? ++startCount && (
                <ListGroupItem key={index} className="text-center">
                  <img src={user.picture.large} alt="user-pic" />
                  <p>
                    {user.name.first} {user.name.last}
                  </p>
                  {!user.isFriend ? (
                    <Button color="primary" onClick={() => onAddFriend(user)}>Add</Button>
                  ) : (
                    <Button color="danger" onClick={() => onRemoveFriend(user)}>Remove</Button>
                  )}
                </ListGroupItem>
              ) : (
                null
              );
            })}
          </ListGroup>
          {users.length <= itemsPerPage ? null : (
            <Pagination
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              page={page}
              users={users}
            />
          )}
        </div>
      ) : <Loader />}
    </Fragment>
  );
}

export default UserList;
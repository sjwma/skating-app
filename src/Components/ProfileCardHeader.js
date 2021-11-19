import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

// 3 modes: profile, friend, nonfriend
const ProfileCardHeader = ({ mode }) => {
    return (
        <ButtonGroup vertical>
            {mode === 'profile' && <Button>Edit</Button>}
            {mode === 'friend' && (
                <>
                    <Button>Chat</Button> <Button>Unfriend</Button>
                </>
            )}
            {mode === 'nonfriend' && <Button>Add Friend</Button>}
        </ButtonGroup>
    );
};

export default ProfileCardHeader;

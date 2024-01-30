import React, { useEffect, useState } from 'react';
import { MdAdd, MdEdit, MdDelete } from 'react-icons/md';

export interface IUser {
    id: string;
    firstName: string;
    secondName: string;
    email: string;
    pwd: string;
    telph: string;
}

const Users: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('backendApi/users');
            if (response.ok) {
                const data = await response.json();
                setUsers(data.users);
            } else {
                console.error('Failed to fetch users');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleAddUser = () => {
        setShowAddModal(true);
    };

    const handleEditUser = (userId: string) => {
        setSelectedUserId(userId);
        setShowEditModal(true);
    };

    const handleDeleteUser = (userId: string) => {
        setSelectedUserId(userId);
        setShowDeleteModal(true);
    };

    const handleAddModalClose = () => {
        setShowAddModal(false);
    };

    const handleEditModalClose = () => {
        setShowEditModal(false);
    };

    const handleDeleteModalClose = () => {
        setShowDeleteModal(false);
    };

    return (
        <div>
            <h1>Users</h1>
            <button onClick={handleAddUser}><MdAdd /> Add User</button>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstName}</td>
                            <td>{user.secondName}</td>
                            <td>{user.email}</td>
                            <td>{user.pwd}</td>
                            <td>{user.telph}</td>
                            <td>
                                <button onClick={() => handleEditUser(user.id)}><MdEdit /></button>
                                <button onClick={() => handleDeleteUser(user.id)}><MdDelete /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add User Modal */}
            {showAddModal && (
                <AddUserModal onClose={handleAddModalClose} />
            )}

            {/* Edit User Modal */}
            {showEditModal && (
                <EditUserModal userId={selectedUserId} onClose={handleEditModalClose} />
            )}

            {/* Delete User Modal */}
            {showDeleteModal && (
                <DeleteUserModal userId={selectedUserId} onClose={handleDeleteModalClose} />
            )}
        </div>
    );
};

interface AddUserModalProps {
    onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ }) => {
    // Implement Add User Modal UI and functionality
    return (
        <div>
            {/* Add User Modal Content */}
        </div>
    );
};

interface EditUserModalProps {
    userId: string;
    onClose: () => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({  }) => {
    // Implement Edit User Modal UI and functionality
    return (
        <div>
            {/* Edit User Modal Content */}
        </div>
    );
};

interface DeleteUserModalProps {
    userId: string;
    onClose: () => void;
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({  }) => {
    // Implement Delete User Modal UI and functionality
    return (
        <div>
            {/* Delete User Modal Content */}
        </div>
    );
};

export default Users;

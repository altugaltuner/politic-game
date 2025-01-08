import React from 'react';

const DeleteAccount = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-5">
            <div className="max-w-lg bg-white shadow-md rounded-lg p-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Delete Your Account</h1>
                <p className="text-gray-600 mb-4">
                    If you wish to delete your account, please send us an email with your account details. We will process your request as soon as possible.
                </p>
                <p className="text-gray-600 mb-6">
                    Send your account deletion request to:
                </p>
                <a href="mailto:altugaltuner6@gmail.com"
                    className="text-blue-600 font-medium underline hover:text-blue-800"
                >
                    altugaltuner6@gmail.com
                </a>
            </div>
        </div>
    );
};

export default DeleteAccount;
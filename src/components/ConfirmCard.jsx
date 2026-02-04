import React from "react";

const ConfirmCard = ({user}) => {
  return (
    <div className="bg-amber-50 p-6 rounded-md shadow-2xl shadow-blue-500 w-150 text-black">
      <h2 className="text-xl font-bold mb-4 underline">Confirm Your Details</h2>

      <div className="flex flex-col gap-2">
        <p>
          <strong>First Name:</strong> {user.name}
        </p>
        <p>
          <strong>Last Name:</strong> {user.lastName}
        </p>
        <p>
          <strong>Email:</strong> {user.emailId}
        </p>
        <p>
          <strong>Position:</strong> {user.position}
        </p>
      </div>
    </div>
  );
};

export default ConfirmCard;

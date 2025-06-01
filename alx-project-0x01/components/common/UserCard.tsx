import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold text-blue-600">{user.name}</h2>
      <p className="text-gray-700">@{user.username}</p>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">📍 {user.address.city}</p>
      <p className="text-gray-600">📞 {user.phone}</p>
      <p className="text-gray-600">🌐 {user.website}</p>
      <div className="mt-4">
        <p className="font-semibold text-gray-800">Company:</p>
        <p className="text-gray-600">{user.company.name}</p>
        <p className="italic text-sm text-gray-500">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;

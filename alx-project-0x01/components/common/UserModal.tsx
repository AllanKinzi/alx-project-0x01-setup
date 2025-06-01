import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const [_, key] = name.split(".");
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [key]: value,
        },
      }));
    } else if (name.includes("geo.")) {
      const [_, key] = name.split(".");
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [key]: value,
          },
        },
      }));
    } else if (name.includes("company.")) {
      const [_, key] = name.split(".");
      setUser((prev) => ({
        ...prev,
        company: {
          ...prev.company,
          [key]: value,
        },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" value={user.name} onChange={handleChange} placeholder="Name" className="input" />
          <input name="username" value={user.username} onChange={handleChange} placeholder="Username" className="input" />
          <input name="email" value={user.email} onChange={handleChange} placeholder="Email" className="input" />
          <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="input" />
          <input name="website" value={user.website} onChange={handleChange} placeholder="Website" className="input" />

          <hr />
          <h3 className="text-md font-medium">Address</h3>
          <input name="address.street" value={user.address.street} onChange={handleChange} placeholder="Street" className="input" />
          <input name="address.suite" value={user.address.suite} onChange={handleChange} placeholder="Suite" className="input" />
          <input name="address.city" value={user.address.city} onChange={handleChange} placeholder="City" className="input" />
          <input name="address.zipcode" value={user.address.zipcode} onChange={handleChange} placeholder="Zipcode" className="input" />
          <input name="geo.lat" value={user.address.geo.lat} onChange={handleChange} placeholder="Latitude" className="input" />
          <input name="geo.lng" value={user.address.geo.lng} onChange={handleChange} placeholder="Longitude" className="input" />

          <hr />
          <h3 className="text-md font-medium">Company</h3>
          <input name="company.name" value={user.company.name} onChange={handleChange} placeholder="Company Name" className="input" />
          <input name="company.catchPhrase" value={user.company.catchPhrase} onChange={handleChange} placeholder="Catch Phrase" className="input" />
          <input name="company.bs" value={user.company.bs} onChange={handleChange} placeholder="Business Statement" className="input" />

          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-black">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

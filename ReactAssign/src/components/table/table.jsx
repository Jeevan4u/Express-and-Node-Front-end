import React from "react";
import { useNavigate } from "react-router-dom";
export function Table({ products }) {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {products?.map((elem) => (
            <tr key={elem.id}>
              <th>{elem.id}</th>
              <td>{elem.name}</td>
              <td>{elem?.price}</td>
              <td>{elem.category}</td>
              <td>
                <button
                  className="btn btn-accent btn-xs mx-2"
                  onClick={() => navigate(`products/edit/${elem.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-accent btn-xs"
                  onClick={() => navigate(`products/${elem.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { deleteTour, listTours } from "../../features/admin/addToursSlice.js";
import { useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";

const AllTours = () => {
  const dispatch = useDispatch();
  const { tours, loading, error } = useSelector((state) => state.tour);

    const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      dispatch(deleteTour(id));
    }
  };

  useEffect(() => {
    dispatch(listTours());
  }, [dispatch]);

  if (loading)
    return <p className="text-center text-lg mt-5">Loading tours...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-5">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center sm:text-left">
        All Added Tours
      </h2>

      {/* No Tours */}
      {tours.length === 0 ? (
        <p className="text-gray-500 text-center">No tours added yet.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="hidden md:grid grid-cols-6 bg-gray-100 text-gray-700 uppercase text-sm font-semibold py-3 px-4">
            <span>Image</span>
            <span>Tour Name</span>
            <span>Description</span>
            <span>Price</span>
            <span>Date</span>
            <span>Delete</span>
          </div>

          {/* Table Body */}
          <div className="divide-y">
            {tours.map((tour) => (
              <div
                key={tour._id}
                className="grid grid-cols-1 md:grid-cols-6 gap-4 py-4 px-4 hover:bg-gray-50 transition duration-200"
              >
                {/* Image */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src={tour.image}
                    alt={tour.tourName}
                    className="w-24 h-24 object-cover rounded-lg shadow-sm"
                  />
                </div>

                <div className="flex items-center font-medium text-gray-800 text-center md:text-left">
                  {tour.tourName}
                </div>

                <div className="flex items-center text-gray-600 text-sm text-center md:text-left">
                  {tour.description.length > 50
                    ? `${tour.description.substring(0, 50)}...`
                    : tour.description}
                </div>

                <div className="flex items-center justify-center md:justify-start font-semibold text-green-600">
                  ₹{tour.price}
                </div>

                <div className="flex items-center justify-center md:justify-start text-gray-500 text-sm">
                  {new Date(tour.date).toLocaleDateString()}
                </div>
                <div  onClick={() => handleDelete(tour._id)} className="flex items-center justify-center md:justify-start text-gray-500 text-sm">
                 <FiTrash2 size={22}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTours;

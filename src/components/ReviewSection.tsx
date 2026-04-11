import React, { useState } from "react";
import { initialReviews, type Review } from "../constants";

const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState(initialReviews);

  const [form, setForm] = useState<Review>({
    name: "",
    role: "",
    text: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.role || !form.text) {
      setError("All fields are required");
      return;
    }

    setReviews([form, ...reviews]); // add new review on top
    setForm({ name: "", role: "", text: "" });
    setError("");
  };

  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold">TESTIMONIALS</p>
          <h2 className="text-3xl font-bold">
            What Our Clients Say
          </h2>
        </div>

        {/* Review Cards */}
        <div className="overflow-hidden">
          <div className="flex gap-6 pb-4 marquee-track" style={{ width: "max-content" }}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-600 mb-4">
                  “{review.text}”
                </p>

                <div>
                  <p className="font-semibold text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Review Form */}
        <div className="bg-gray-50 p-6 rounded-2xl max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Add Your Review
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="role"
              placeholder="Your Role / Company"
              value={form.role}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="text"
              placeholder="Write your review..."
              value={form.text}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500"
            />

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Submit Review
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
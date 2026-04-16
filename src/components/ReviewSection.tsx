import React, { useState } from "react";
import { initialReviews, type Review } from "../constants";
import { Quote } from "lucide-react";

const StarRating = ({ rating, onChange }: { rating: number; onChange?: (r: number) => void }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => onChange?.(star)}
        className={`text-xl transition ${star <= rating ? "text-yellow-400" : "text-gray-300"} ${onChange ? "hover:text-yellow-400 cursor-pointer" : "cursor-default"}`}
      >
        ★
      </button>
    ))}
  </div>
);

const Avatar = ({ name }: { name: string }) => {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-pink-500", "bg-orange-500"];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div className={`w-10 h-10 rounded-full ${color} text-white flex items-center justify-center font-bold text-sm flex-shrink-0`}>
      {initials}
    </div>
  );
};

const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState<Review>({ name: "", role: "", text: "", rating: 5 });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.text) {
      setError("All fields are required");
      return;
    }
    setReviews([form, ...reviews]);
    setForm({ name: "", role: "", text: "", rating: 5 });
    setError("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-4 md:px-10 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Real feedback from real clients who trusted us to build their digital products.
          </p>
        </div>

        {/* Review Cards Marquee */}
        <div className="overflow-hidden mb-16">
          <div className="flex gap-6 pb-4 marquee-track" style={{ width: "max-content" }}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white w-72 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <Quote className="text-blue-200 w-8 h-8 flex-shrink-0" />
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">"{review.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <Avatar name={review.name} />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Review Form */}
        <div className="bg-white border border-gray-100 shadow-lg p-8 rounded-3xl max-w-xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Share Your Experience</h3>
            <p className="text-gray-400 text-sm mt-1">We'd love to hear from you!</p>
          </div>

          {submitted && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3 mb-4 text-center">
              ✅ Thank you! Your review has been added.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <input
                type="text"
                name="role"
                placeholder="Role / Company"
                value={form.role}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <textarea
              name="text"
              placeholder="Write your review..."
              value={form.text}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
            />

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 font-medium">Your Rating:</span>
              <StarRating rating={form.rating} onChange={(r) => setForm({ ...form, rating: r })} />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 active:scale-95 transition-all"
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

const BookingForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      date: e.target.date.value,
      event_type: e.target["event-type"].value,
      message: e.target.message.value,
    };
  
    try {
      const response = await fetch("http://localhost:5001/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Booking request sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send booking request.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-Blue-400 focus:ring-1 focus:ring-Blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-Blue-400 focus:ring-1 focus:ring-Blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="date">Event Date</label>
        <input
          type="date"
          id="date"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-Blue-400 focus:ring-1 focus:ring-Blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="event-type">Event Type</label>
        <select
          id="event-type"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-Blue-400 focus:ring-1 focus:ring-Blue-400"
        >
          <option value="">Select event type</option>
          <option value="concert">Concert</option>
          <option value="private">Private Event</option>
          <option value="corporate">Corporate Event</option>
          <option value="wedding">Wedding</option>
          <option value="Acting">Acting Role</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="4"
          required
          className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-white text-black py-3 px-6 rounded-lg font-bold hover:bg-gray-200 transition"
      >
        Submit Booking Request
      </button>
    </form>
  );
};

export default BookingForm;